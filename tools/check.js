/* Atlas Codex: checks that the hand-written data holds together. Run before committing: node tools/check.js
 * One bad reference id, missing trial meta or missing date blanks a page in the browser, so this fails loudly instead. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
// Same files, same order as the pages load them (js/load.js), plus structures.js for the compare keys.
const order = [...fs.readFileSync(path.join(root, "js/load.js"), "utf8").match(/\[([^\]]+)\]/)[1].matchAll(/"([^"]+)"/g)]
  .map((m) => m[1]).filter((f) => f !== "app").concat("structures").map((f) => `js/${f}.js`);
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });

const A = ctx.ATLAS, out = [];
const date = /^\d{4}-\d\d-\d\d$/;
const count = (list) => list.reduce((m, k) => m.set(k, (m.get(k) || 0) + 1), new Map());
const slugs = count(A.entries.map((e) => e.slug));
for (const [s, n] of slugs) if (n > 1) out.push(`slug ${s} used by ${n} entries`);
const has = (s) => slugs.has(s);
const refs = (list, where) => (list || []).forEach((r) => A.references[r] == null && out.push(`${where}: reference ${r} does not exist`));
const cats = new Set(A.categories.map((c) => c.id));

for (const e of A.entries) {
  if (!cats.has(e.category)) out.push(`${e.slug}: unknown category ${e.category}`);
  for (const k of ["added", "updated"]) if (!date.test(e[k] || "")) out.push(`${e.slug}: ${k} is "${e[k]}", not YYYY-MM-DD`);
  (e.related || []).forEach((r) => has(r) || out.push(`${e.slug}: related ${r} has no entry`));
  (e.parts || []).forEach((r) => has(r) || out.push(`${e.slug}: ingredient ${r} has no entry`));
  (e.trials || []).forEach((t, i) => Array.isArray(t.meta) || out.push(`${e.slug}: trial ${i + 1} has no meta list`));
  [...(e.risks || []), ...(e.activity || []), ...(e.trials || []), e.pk || {}].forEach((x) => refs(x.refs, e.slug));
  refs(e.noTrialsRefs, e.slug); refs(e.refs, e.slug);
  (e.profile ? e.profile.rows : []).forEach((r) => (typeof r.score !== "number" || r.score < 0 || r.score > 5) && out.push(`${e.slug}: profile score ${r.score} outside 0-5`));
}
for (const k of ["dosing", "monitoring", "interactions", "legal", "buy"]) for (const s of Object.keys(A[k] || {})) has(s) || out.push(`${k}: ${s} has no entry`);
for (const [s, d] of Object.entries(A.dosing || {})) { Array.isArray(d.rows) || out.push(`dosing ${s}: no rows`); refs(d.refs, "dosing " + s); }
for (const [s, rows] of Object.entries(A.interactions || {})) rows.forEach((r) => refs(r.refs, "interactions " + s));
const JUR = new Set(["US", "UK", "EU", "CA", "AU", "NZ", "JP", "CN", "RU", "WADA"]);
const KIND = new Set(["rx", "otc", "controlled", "supplement", "cosmetic", "unapproved", "prohibited", "vet", "sport-banned", "sport-in-comp", "sport-monitored", "sport-allowed"]);
const LEVEL = new Set(["low", "moderate", "high", "unknown"]);
for (const [s, rows] of Object.entries(A.interactions || {})) rows.forEach((r) => LEVEL.has(r.level) || out.push(`interactions ${s}: unknown level ${r.level}`));
for (const [s, rows] of Object.entries(A.legal || {})) rows.forEach((r) => {
  if (!JUR.has(r.where)) out.push(`legal ${s}: unknown jurisdiction ${r.where}`);
  if (!KIND.has(r.kind)) out.push(`legal ${s} ${r.where}: unknown kind ${r.kind}`);
  if (!(r.refs || []).length) out.push(`legal ${s} ${r.where}: no reference`);
  refs(r.refs, "legal " + s);
});
for (const u of A.uses || []) u.slugs.forEach((s) => has(s) || out.push(`use ${u.id}: ${s} has no entry`));

const uses = new Set((A.uses || []).map((u) => u.id)), groups = new Set(A.stacks.groups.map((g) => g.id));
for (const [s, n] of count(A.stacks.items.map((s) => s.id))) if (n > 1) out.push(`stack id ${s} used ${n} times`);
for (const s of A.stacks.items) {
  if (!groups.has(s.group)) out.push(`stack ${s.id}: unknown group ${s.group}`);
  (s.uses || []).forEach((u) => uses.has(u) || out.push(`stack ${s.id}: unknown use ${u}`));
  s.parts.forEach((p) => p.slug && !has(p.slug) && out.push(`stack ${s.id}: part ${p.slug} has no entry`));
  refs((s.refs || []).filter((r) => typeof r === "number"), "stack " + s.id);
  for (const k of ["added", "updated"]) if (!date.test(s[k] || "")) out.push(`stack ${s.id}: ${k} is "${s[k]}", not YYYY-MM-DD`);
}
A.support.sources.flatMap((s) => s.popular || []).forEach((p) => p.slug && !has(p.slug) && out.push(`support popular: ${p.slug} has no entry`));
for (const k of ["noDoseBySlug", "approvedWhere"]) for (const s of Object.keys(A.site[k] || {})) has(s) || out.push(`site.${k}: ${s} has no entry`);
for (const s of Object.keys((A.structures || {}).smiles || {})) has(s) || out.push(`structures: ${s} has no entry`);

if (out.length) { console.error(out.join("\n") + `\n\n${out.length} problem(s).`); process.exit(1); }
console.log(`OK: ${A.entries.length} entries, ${Object.keys(A.references).length} references, ${A.stacks.items.length} stacks.`);
