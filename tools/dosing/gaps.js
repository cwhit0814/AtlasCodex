/* The compounds no source gives any figure for, split from the guides, products and blends that do not
   take a dose of their own. node gaps.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.resolve(__dirname, "../..");
const order = [...fs.readFileSync(ROOT + "/js/load.js", "utf8").match(/\[([^\]]+)\]/)[1].matchAll(/"([^"]+)"/g)]
  .map((m) => m[1]).filter((f) => f !== "app").map((f) => ROOT + "/js/" + f + ".js");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const A = ctx.ATLAS;
const byType = {};
for (const e of A.entries) {
  const d = A.dosing[e.slug];
  const has = d && (((d.rows || []).length) || (d.reported || []).some((b) => (b.rows || []).length));
  if (has) continue;
  (byType[e.type || "(none)"] = byType[e.type || "(none)"] || []).push(e.name + "  [" + e.slug + "]");
}
for (const [t, list] of Object.entries(byType).sort((a, b) => b[1].length - a[1].length)) {
  console.log("\n--- type " + t + "  (" + list.length + ")");
  list.forEach((n) => console.log("    " + n));
}
