/* Print the dosing record for named slugs, label/trial rows and every reported block. node peek.js <slug>... */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.resolve(__dirname, "../..");
const order = [...fs.readFileSync(ROOT + "/js/load.js", "utf8").match(/\[([^\]]+)\]/)[1].matchAll(/"([^"]+)"/g)]
  .map((m) => m[1]).filter((f) => f !== "app").map((f) => ROOT + "/js/" + f + ".js");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const A = ctx.ATLAS;
for (const slug of process.argv.slice(2)) {
  const e = A.entries.find((x) => x.slug === slug);
  const d = A.dosing[slug];
  console.log("\n==== " + slug + (e ? "  (" + e.name + ")" : "  [NO ENTRY]"));
  if (!d) { console.log("  no dosing record at all"); continue; }
  console.log("  label/trial source: " + (d.source || "-") + "   evidence: " + (d.evidence || "-"));
  (d.rows || []).forEach((r) => console.log("    | " + r[0] + " :: " + r[1]));
  (d.reported || []).forEach((b, i) => {
    console.log("  reported[" + i + "] " + (b.source || {}).name + "  confidence=" + b.confidence);
    (b.rows || []).forEach((r) => console.log("      | " + r[0] + " :: " + r[1]));
    if (b.note) console.log("      note: " + b.note);
  });
}
