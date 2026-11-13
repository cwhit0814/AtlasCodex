/* Map Tattered FAQ dose blocks onto codex slugs, and split the safe ones from the ones needing a human read. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const S = __dirname, ROOT = path.resolve(__dirname, "../..");

const order = [...fs.readFileSync(ROOT + "/js/load.js", "utf8").match(/\[([^\]]+)\]/)[1].matchAll(/"([^"]+)"/g)]
  .map((m) => m[1]).filter((f) => f !== "app").map((f) => ROOT + "/js/" + f + ".js");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const A = ctx.ATLAS;

const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "");
// slug lookup by entry name, every alias, and the slug itself
const byName = new Map();
for (const e of A.entries) for (const n of [e.name, e.slug, ...(e.aliases || [])]) if (n) {
  const k = norm(n); if (!byName.has(k)) byName.set(k, e.slug);
}

const sections = JSON.parse(fs.readFileSync(S + "/faq-doses.json", "utf8"));

// A FAQ heading like "Clen (Clenbuterol)" or "*SLU-PP-332" -> candidate names to match on.
function candidates(name) {
  const bare = name.replace(/^\\?\*/, "").trim();
  const out = [bare];
  const paren = bare.match(/^(.*?)\s*\((.+?)\)\s*$/);
  if (paren) { out.push(paren[1].trim()); paren[2].split(/,|\bor\b|;/).forEach((p) => out.push(p.trim())); }
  out.push(bare.replace(/\s*\(.*$/, "").trim());
  return [...new Set(out.filter(Boolean))];
}

const rows = [];
for (const s of sections) {
  let slug = null, via = null;
  for (const c of candidates(s.name)) { const k = norm(c); if (byName.has(k)) { slug = byName.get(k); via = c; break; } }
  // distinct dose blocks: group consecutive tiers, dedup identical sets
  const seen = new Set(), blocks = [];
  let cur = [];
  for (const t of s.tiers) {
    const lab = t[0].toLowerCase();
    if (cur.length && cur.some((x) => x[0].toLowerCase() === lab)) { blocks.push(cur); cur = []; }
    cur.push(t);
  }
  if (cur.length) blocks.push(cur);
  const uniq = [];
  for (const b of blocks) { const key = b.map((x) => x[0] + ":" + x[1]).join("|"); if (!seen.has(key)) { seen.add(key); uniq.push(b); } }
  rows.push({ name: s.name, line: s.line, slug, via, blocks: uniq, route: s.route });
}

const matched = rows.filter((r) => r.slug);
const clean = matched.filter((r) => r.blocks.length === 1);
const multi = matched.filter((r) => r.blocks.length > 1);
const nodose = matched.filter((r) => r.blocks.length === 0);
const unmatched = rows.filter((r) => !r.slug && r.blocks.length);

fs.writeFileSync(S + "/mapped.json", JSON.stringify({ clean, multi, nodose, unmatched }, null, 1));
console.log("FAQ sections:", rows.length);
console.log("  matched to a codex entry:", matched.length);
console.log("    one clear dose block  :", clean.length, "  <- safe to import");
console.log("    several dose blocks   :", multi.length, "  <- needs a human read");
console.log("    no dose block         :", nodose.length);
console.log("  no codex entry:", rows.length - matched.length, "(", unmatched.length, "of them have doses )");
console.log("\n=== ONE CLEAR BLOCK ===");
clean.forEach((r) => console.log(" " + (r.slug + "                  ").slice(0, 19) + r.blocks[0].map((t) => t[0] + " " + t[1]).join("  /  ").slice(0, 96)));
console.log("\n=== SEVERAL BLOCKS (line numbers to read) ===");
multi.forEach((r) => console.log(" " + (r.slug + "              ").slice(0, 15) + "L" + r.line + "  " + r.blocks.map((b) => b.map((t) => t[1]).join("/")).join("   ||   ").slice(0, 92)));
console.log("\n=== DOSES BUT NO CODEX ENTRY ===");
console.log(unmatched.map((r) => r.name).join(" | "));
