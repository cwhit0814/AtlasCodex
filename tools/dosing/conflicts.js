/* Compare Tanner Tattered's reported dosing against the Maximum Pharma Archive's, compound by compound,
   and sort the result into: Tanner only, Max filling a gap, the two agreeing, the two clashing, and
   compounds neither source covers. Magnitudes are compared in a common unit where both sides parse. */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.resolve(__dirname, "../..");

const order = [...fs.readFileSync(ROOT + "/js/load.js", "utf8").match(/\[([^\]]+)\]/)[1].matchAll(/"([^"]+)"/g)]
  .map((m) => m[1]).filter((f) => f !== "app").map((f) => ROOT + "/js/" + f + ".js");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of order) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const A = ctx.ATLAS;

const TAT = "Tanner Tattered, FAQ", MPA = "Maximum Pharma Archive";
const nameOf = (s) => (A.entries.find((e) => e.slug === s) || {}).name || s;

// Pull every amount out of a block's rows, normalised to micrograms per day where the text allows it.
const UNIT = { mcg: 1, µg: 1, ug: 1, mg: 1000, g: 1000000, iu: null, ius: null };
function amounts(block) {
  const out = [];
  for (const [ctxLabel, v] of block.rows || []) {
    const text = String(v);
    const re = /(\d+(?:[.,]\d+)?)\s*(?:[-–—]\s*(\d+(?:[.,]\d+)?)\s*)?(mcg|µg|ug|mg|g|iu|ius|%)\b/gi;
    let m;
    while ((m = re.exec(text))) {
      const unit = m[3].toLowerCase();
      const lo = parseFloat(m[1].replace(",", "")), hi = m[2] ? parseFloat(m[2].replace(",", "")) : lo;
      if (unit === "%") { out.push({ pct: hi, label: ctxLabel }); continue; }
      const mult = UNIT[unit];
      if (mult == null) { out.push({ iu: hi, label: ctxLabel }); continue; }
      // Weekly figures are divided down so a weekly and a daily number can be compared at all.
      const weekly = /per week|\/wk|weekly|a week/i.test(text);
      const eod = /every other day|\bEOD\b/i.test(text);
      let perDay = hi * mult;
      if (weekly) perDay /= 7;
      if (eod) perDay /= 2;
      out.push({ mcgPerDay: perDay, raw: m[0], weekly, label: ctxLabel });
    }
  }
  return out;
}
const peak = (list, key) => list.filter((x) => x[key] != null).reduce((a, b) => Math.max(a, b[key]), 0);

const tatOnly = [], mpaFill = [], agree = [], clash = [], noNumber = [];
for (const [slug, d] of Object.entries(A.dosing)) {
  if (!d.reported) continue;
  const t = d.reported.find((b) => b.source.name === TAT);
  const m = d.reported.find((b) => b.source.name === MPA);
  const tHas = t && (t.rows || []).length, mHas = m && (m.rows || []).length;
  if (tHas && !mHas) { tatOnly.push(slug); continue; }
  if (!tHas && mHas) { mpaFill.push(slug); continue; }
  if (!tHas && !mHas) { noNumber.push(slug); continue; }

  const ta = amounts(t), ma = amounts(m);
  const tp = peak(ta, "mcgPerDay"), mp = peak(ma, "mcgPerDay");
  const tPct = peak(ta, "pct"), mPct = peak(ma, "pct");
  const reasons = [];
  if (tp && mp) {
    const ratio = Math.max(tp, mp) / Math.min(tp, mp);
    if (ratio >= 2) reasons.push("peak amounts differ " + ratio.toFixed(1) + "x (Tanner " + Math.round(tp) + " vs Max " + Math.round(mp) + " mcg/day equivalent)");
  }
  if (tPct && mPct && Math.max(tPct, mPct) / Math.min(tPct, mPct) >= 2) reasons.push("concentration differs: " + tPct + "% vs " + mPct + "%");
  if (!tp && mp) reasons.push("Tanner gives no parseable amount; Max does");
  if (tp && !mp) reasons.push("Max gives no parseable amount; Tanner does");
  const tW = ta.some((x) => x.weekly), mW = ma.some((x) => x.weekly);
  if (tW !== mW) reasons.push("different period: " + (tW ? "Tanner weekly, Max daily" : "Tanner daily, Max weekly"));
  const tIU = ta.some((x) => x.iu != null), mIU = ma.some((x) => x.iu != null);
  if (tIU !== mIU) reasons.push("different units: one side gives IU");

  (reasons.length ? clash : agree).push({ slug, reasons, tp, mp });
}

// Compounds with no dosing of any kind: no label, no trial, no reported figure.
const noneAtAll = A.entries.filter((e) => {
  const d = A.dosing[e.slug];
  if (!d) return true;
  const hasRows = (d.rows || []).length;
  const hasReported = (d.reported || []).some((b) => (b.rows || []).length);
  return !hasRows && !hasReported;
});

const line = (s) => "  " + (nameOf(s) + "                           ").slice(0, 27) + s;
console.log("=== A. CLASHES NEEDING A DECISION (" + clash.length + ") ===");
clash.sort((a, b) => b.reasons.length - a.reasons.length).forEach((c) =>
  console.log("\n  " + nameOf(c.slug) + "  [" + c.slug + "]\n    - " + c.reasons.join("\n    - ")));
console.log("\n\n=== B. BOTH AGREE, Tanner leads (" + agree.length + ") ===");
console.log("  " + agree.map((a) => a.slug).join(", "));
console.log("\n=== C. TANNER ONLY (" + tatOnly.length + ") ===");
console.log("  " + tatOnly.join(", "));
console.log("\n=== D. MAX FILLS A GAP TANNER LACKS (" + mpaFill.length + ") ===");
console.log("  " + mpaFill.join(", "));
if (noNumber.length) { console.log("\n=== E. BLOCK PRESENT BUT NO NUMBERS (" + noNumber.length + ") ==="); console.log("  " + noNumber.join(", ")); }
console.log("\n\n=== F. NO DOSING OF ANY KIND — neither source, no label, no trial (" + noneAtAll.length + ") ===");
noneAtAll.forEach((e) => console.log(line(e.slug)));
