#!/usr/bin/env node
/* Atlas Codex model router (UserPromptSubmit hook).
 *
 * A hook cannot switch the session's model, so this routes the work instead: it scores each prompt against
 * this project and, when the job is cheap, tells Claude to hand it to a cheaper subagent (see .claude/agents).
 *   light    -> atlas-scout  (Haiku, read-only: lookups, listing, counting, running the checker)
 *   standard -> atlas-worker (Sonnet: small specified edits, record questions)
 *   research -> main model judges and edits, but Sonnet subagents fetch sources and return only quotes
 *   heavy    -> no output, the main model handles it as usual
 * Each routed prompt also gets an effort level, passed as the Agent tool's `effort` (it overrides the agent
 * file's default), so the cheapest jobs think the least:
 *   low    -> lookups, counts, git/checker runs, cosmetic edits (typo, spacing, colour, link), commit/push chores
 *   medium -> file summaries, other short edits, read-only questions about doses/legal/trials (exact figures)
 * The main session's own effort cannot be set from a hook; change it with /effort or /model.
 * Anything unclear is heavy. The codex is a medical reference where a wrong dose or statute is the worst
 * failure, so the router only ever moves work down when the prompt is clearly small and clearly scoped.
 *
 * Never blocks a prompt, never writes files, exits 0 on every error. Portable: Node only, no dependencies.
 * Turn off with ATLAS_ROUTER=off. Try it: node .claude/hooks/userPromptSubmit.js --explain "your prompt" */
const fs = require("fs"), path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");

// Sensitive: the data a reader may act on. Writes here always stay on the main model.
const SENSITIVE_FILES = /(^|\/)js\/(dosing|legal|interactions|monitoring|pk|stacks|uses|buy|data|structures|refs-[\w-]+|entries-[\w-]+)\.js$/;
const SENSITIVE_WORDS = /\b(dos(e|es|ing|age)|mg|mcg|iu|legal|illegal|schedule[sd]?|statute|wada|fda|label|interactions?|contraindicat\w*|monitoring|bloodwork|trials?|rct|evidence|grade[sd]?|risks?|safety|side effects?|half-?life|pharmacokinetic\w*|pk|citation|references?|pubmed|doi|pmid|claims?|sourc(e|es|ing)|compounds?|peptides?|stacks?|entry|entries|slug)\b/;
// Heavy: judgement, design, or open-ended work.
const HEAVY_WORDS = /\b(design|redesign|architect\w*|refactor\w*|rewrite|restructure|migrat\w*|overhaul|audit|review|critique|debug\w*|investigat\w*|diagnos\w*|root cause|why (is|does|did|are|isn't|doesn't)|figure out|plan|strateg\w*|brainstorm|propose|recommend|trade-?offs?|implement|build|create|develop|research|polish|animate|colorize|harden|optimi[sz]e|performance|security|vulnerab\w*|ultrathink|think (hard|deeply|carefully)|impeccable|new (page|feature|section|compound|entry|stack|guide)|add (a )?(new )?(page|feature|section|compound|entry|stack|guide)|accessib\w*|responsive|theme|layout|typography|branding|merge|rebase|conflict|deploy|release|publish)\b/;
const BROAD = /\b(all|every|each|everything|across|whole|entire|site-?wide|globally|throughout|any other|the rest)\b/;
const WRITE = /\b(fix|change|edit|update|replace|rename|move|delete|remove|add|insert|append|set|swap|correct|adjust|tweak|bump|reword|rephrase|shorten|lengthen|capitali[sz]e|format|align|make|turn|switch|write|commit|push|stage|install)\b/;
// Only counts as read-only when the prompt is clearly a lookup.
const LOOKUP = /\b(where|which files?|find|locate|list|show me|how many|count|grep|search for|look up|what files?|what (does|is) .{0,60}(in|inside) |summari[sz]e|status|git (log|status|diff|show)|run (the )?(check|checker|tests?)|tools\/check)\b/;
// Git chores: committing, staging or pushing work already on disk. History rewrites and force pushes are never chores.
const GIT_CHORE = /\b(comm?it|push|stage|git add)\b/;
// Source research: judgement stays on the main model, but fetching pages is handed off so their dumps stay out of its context.
const RESEARCH = /\b(research\w*|pubmed|studies|citations?)\b/;
const GIT_RISKY = /(--force|\bforce\b|\s-f\b|\bamend\b|\breset\b|\brevert\b|\bsquash\b|\bcherry-?pick\b|\bstash\b|\btag\b|\bpr\b|pull request|\bbranch\b|\bmain\b|\bmaster\b)/;
const SMALL_EDIT = /\b(typo|spelling|wording|punctuation|whitespace|comma|capitali[sz]ation|link|url|href|colou?r|padding|margin|font-?size|label text|title|heading text|alt text|copy|text)\b/;

function listProject() {
  const skip = new Set([".git", "node_modules", "img", "skills"]);
  const out = [];
  (function walk(dir, depth) {
    let items;
    try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return; }
    for (const it of items) {
      if (out.length > 4000) return;
      if (skip.has(it.name)) continue;
      const full = path.join(dir, it.name);
      if (it.isDirectory()) { if (depth < 3) walk(full, depth + 1); }
      else out.push(path.relative(ROOT, full).split(path.sep).join("/"));
    }
  })(ROOT, 0);
  return out;
}

// Which real project files does the prompt name? Matches full paths, bare file names, and bare names of js/*.js.
function filesMentioned(text, files) {
  const hit = new Set();
  const lower = text.toLowerCase();
  for (const f of files) {
    const base = f.slice(f.lastIndexOf("/") + 1).toLowerCase();
    if (lower.includes(f.toLowerCase())) { hit.add(f); continue; }
    const re = new RegExp("(^|[^\\w./-])" + base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "($|[^\\w-])");
    if (re.test(lower)) hit.add(f);
  }
  return [...hit];
}

function classify(raw) {
  const text = String(raw || "").replace(/<pasted_content[^>]*>[\s\S]*?<\/pasted_content[^>]*>/g, " [pasted] ").trim();
  const lower = text.toLowerCase();
  const reasons = [];
  const heavy = (why) => ({ tier: "heavy", why: [...reasons, why] });

  if (!text) return { tier: "skip", why: ["empty prompt"] };
  if (/^\//.test(text)) return { tier: "skip", why: ["slash command"] };
  if (raw.includes("<pasted_content")) return heavy("contains pasted content");
  if (text.length > 400 || text.split("\n").length > 6) return heavy("long or multi-part prompt");

  const files = filesMentioned(lower, listProject());
  // Word tests run on the prompt with file names taken out, so "stack.html" does not read as the word "stack".
  const words = lower.replace(/[\w./-]+\.(html|js|css|md|json|svg)\b/g, " ");
  const touchesSensitiveFile = files.some((f) => SENSITIVE_FILES.test(f));
  const sensitive = touchesSensitiveFile || SENSITIVE_WORDS.test(words);
  const writes = WRITE.test(words);
  const lookup = LOOKUP.test(lower);
  if (files.length) reasons.push(`names ${files.length} file(s): ${files.slice(0, 4).join(", ")}`);

  if (RESEARCH.test(words) && !/\b(design|redesign|refactor\w*|debug\w*|hooks?|mods?|plugins?|router|subagents?|skills?|mcps?|settings|claude)\b/.test(words)) return { tier: "research", why: [...reasons, "source research"] };
  if (HEAVY_WORDS.test(words)) return heavy("design, judgement or open-ended work");
  // A prompt that only asks to commit/stage/push (no other edit) is a chore, whatever the changes it commits.
  if (GIT_CHORE.test(words) && text.length < 220 && !WRITE.test(words.replace(/\b(comm?it|push|stage|git add)\b/g, " "))) {
    if (GIT_RISKY.test(words)) return heavy("git operation beyond a plain commit or push");
    return { tier: "git", effort: "low", why: [...reasons, "git chore: commit or push work already on disk"] };
  }
  if (BROAD.test(words) && writes) return heavy("broad change");
  if (files.length > 3) return heavy("touches more than three files");
  if (writes && sensitive) return heavy("writes to sourced data (doses, legal, trials, risks) stay on the main model");
  if (/\b(delete|remove)\b/.test(words) && !files.length) return heavy("destructive change without a named file");

  // Read-only work.
  if (!writes) {
    if (lookup && !sensitive) {
      if (/\bsummari[sz]e\b/.test(lower)) return { tier: "light", effort: "medium", why: [...reasons, "read-only summary"] };
      return { tier: "light", effort: "low", why: [...reasons, "read-only lookup"] };
    }
    if (sensitive && (lookup || files.length)) return { tier: "standard", effort: "medium", why: [...reasons, "read-only question about the record; needs care with exact figures"] };
    return heavy("plain question the main model can answer directly");
  }

  // Writes, not sensitive, small and named.
  if (files.length >= 1 && SMALL_EDIT.test(words)) return { tier: "standard", effort: "low", why: [...reasons, "small edit in named file(s)"] };
  if (files.length >= 1 && text.length < 220) return { tier: "standard", effort: "medium", why: [...reasons, "short edit in named file(s)"] };
  return heavy("edit is not clearly scoped to named files");
}

function advice(tier, effort, why) {
  const reason = why.join("; ");
  const eff = " with effort \"" + effort + "\" (pass it as the Agent tool's effort parameter; the user asked for effort to follow the type of work)";
  if (tier === "git") {
    return "Model routing (Atlas Codex hook): this prompt is a git chore (" + reason + "). To save usage, delegate it with the Agent tool: subagent_type \"atlas-worker\" (Sonnet)" + eff + ". The worker cannot see this conversation, so write the commit message yourself (subject plus a short body describing what changed, in the repo's style) and put it in the brief verbatim, including any attribution trailer the system asks for. Tell it which branch is checked out and to stage, commit and push only that. Then confirm the pushed commit hash from its report.";
  }
  if (tier === "research") {
    return "Model routing (Atlas Codex hook): this prompt is source research (" + reason + "). Keep the judgement and every edit on the main model, but to save usage hand the reading off: for each compound or question, start an Agent with subagent_type \"general-purpose\" and model \"sonnet\" that searches and reads the sources and returns only the PMID, DOI or label URL with verbatim quotes of each figure it found. Never paste whole pages into this conversation. Check each PMID and quote before it goes into an entry, as the sourcing rules require.";
  }
  if (tier === "light") {
    return "Model routing (Atlas Codex hook): this prompt is a cheap read-only lookup (" + reason + "). To save usage, delegate it with the Agent tool: subagent_type \"atlas-scout\" (Haiku)" + eff + ". Give it a complete, self-contained brief, then relay its answer, quoting figures exactly. If the lookup turns out to need judgement or an edit, do it yourself instead.";
  }
  return "Model routing (Atlas Codex hook): this prompt is small and scoped (" + reason + "). To save usage, delegate it with the Agent tool: subagent_type \"atlas-worker\" (Sonnet)" + eff + ". Give it the exact files, the exact change, and any source it must use; for a read-only question tell it not to edit. Then check its report and the diff before answering. If the work turns out to involve new medical or legal facts, design choices, or more than three files, do it yourself instead.";
}

function run(raw, payload) {
  if ((process.env.ATLAS_ROUTER || "").toLowerCase() === "off") return null;
  if (payload && (payload.agent_id || payload.agent_type)) return null; // already inside a subagent
  const r = classify(raw);
  if (!["light", "standard", "git", "research"].includes(r.tier)) return null;
  return { hookSpecificOutput: { hookEventName: "UserPromptSubmit", additionalContext: advice(r.tier, r.effort || "medium", r.why) } };
}

function main() {
  const args = process.argv.slice(2);
  if (args[0] === "--explain") {
    const r = classify(args.slice(1).join(" "));
    process.stdout.write(r.tier + (r.effort ? " @ " + r.effort : "") + " | " + r.why.join("; ") + "\n");
    return;
  }
  let data = "", done = false;
  const finish = () => {
    if (done) return;
    done = true;
    try {
      const payload = data.trim() ? JSON.parse(data) : {};
      const out = run(payload.prompt, payload);
      // Exit from the write callback: exiting straight after write can cut off piped output on Windows.
      if (out) return process.stdout.write(JSON.stringify(out), () => process.exit(0));
    } catch (e) { /* fail open: no routing */ }
    process.exit(0);
  };
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (c) => { data += c; });
  process.stdin.on("end", finish);
  process.stdin.on("error", finish);
  setTimeout(finish, 5000).unref();
}

if (require.main === module) { try { main(); } catch (e) { process.exit(0); } }
module.exports = { classify };
