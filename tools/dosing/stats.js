/* Confirm the source precedence and grade spread across every reported block. node stats.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.resolve(__dirname, "../..");
const order = [...fs.readFileSync(ROOT + "/js/load.js", "utf8").match(/\[([^\]]+)\]/)[1].matchAll(/"([^"]+)"/g)]
  .map((m) => m[1]).filter((f) => f !== "app").map((f) => ROOT + "/js/" + f + ".js");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const A = ctx.ATLAS;
const TAT = "Tanner Tattered, FAQ", MPA = "Maximum Pharma Archive";
let tatLeads = 0, mpaLeads = 0, both = 0, wrongOrder = [], grades = {}, dupSource = [];
const mpaOnly = [];
for (const [slug, d] of Object.entries(A.dosing)) {
  if (!d.reported || !d.reported.length) continue;
  const names = d.reported.map((b) => (b.source || {}).name);
  if (new Set(names).size !== names.length) dupSource.push(slug);
  if (names[0] === TAT) tatLeads++; else if (names[0] === MPA) { mpaLeads++; if (!names.includes(TAT)) mpaOnly.push(slug); }
  if (names.includes(TAT) && names.includes(MPA)) {
    both++;
    if (names.indexOf(MPA) < names.indexOf(TAT)) wrongOrder.push(slug);
  }
  d.reported.forEach((b) => (grades[b.confidence] = (grades[b.confidence] || 0) + 1));
}
console.log("compounds with reported dosing: " + Object.values(A.dosing).filter((d) => (d.reported || []).length).length);
console.log("Tanner leads: " + tatLeads + "   Archive leads: " + mpaLeads + " (of which Tanner absent: " + mpaOnly.length + ")");
console.log("carry both blocks: " + both + "   Archive printed above Tanner: " + wrongOrder.length + (wrongOrder.length ? " -> " + wrongOrder : ""));
console.log("duplicate source on one compound: " + dupSource.length + (dupSource.length ? " -> " + dupSource : ""));
console.log("grades: " + JSON.stringify(grades));
console.log("Archive-only compounds: " + mpaOnly.join(", "));
