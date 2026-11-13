/* Pull the dose tiers out of each compound section of the Tattered FAQ. */
const fs = require("fs");
const S = __dirname;
const SRC = S + "/faq.txt";
if (!fs.existsSync(SRC)) {
  console.error("tools/dosing/faq.txt is missing.\n\n" +
    "It is the source FAQ export, and it is deliberately not in this repository: it is another author's\n" +
    "document, not ours to redistribute. To re-extract, export the FAQ to Markdown, save it at that path\n" +
    "and run this again.\n\n" +
    "To rebuild js/dosing-reported.js from the figures already extracted, this file is not needed:\n" +
    "  node tools/dosing/gen.js     (reads mapped.json, writes js/dosing-reported.js)");
  process.exit(1);
}
const lines = fs.readFileSync(SRC, "utf8").split("\n");

const heads = [];
lines.forEach((l, i) => {
  const m = l.match(/^\s*###\s+(.+?)\s+-\s+How do you (?:use|take)/i);
  if (m && i > 1500) heads.push({ i, name: m[1].trim() });
});

// Strip markdown links to their text, unescape pipes, collapse runs of whitespace.
const clean = (s) => s
  .replace(/\[([^\]]*)\]\(https?:\/\/[^)]*\)/g, "$1")
  .replace(/\\\|/g, "|")
  .replace(/\s+/g, " ")
  .trim();

const TIER = /^-?\s*(Low|Average|Medium|Moderate|High|Beginner|Intermediate|Advanced|Starting|Max|Maximum)\s*:\s*(.+)$/i;
const ROUTE = /^-?\s*(Take|Inject|Apply|Administer|Use|Dose|Pin|Swallow|Spray)\b/i;

const out = [];
heads.forEach((h, k) => {
  const end = k + 1 < heads.length ? heads[k + 1].i : lines.length;
  const tiers = [], route = [];
  for (const raw of lines.slice(h.i, end)) {
    const c = clean(raw);
    if (!c) continue;
    const t = c.match(TIER);
    if (t && /\d/.test(t[2]) && t[2].length < 130) tiers.push([t[1], t[2]]);
    else if (ROUTE.test(c) && c.length < 170) route.push(c.replace(/^-\s*/, ""));
  }
  out.push({ name: h.name, line: h.i + 1, tiers, route: route.slice(0, 3) });
});

fs.writeFileSync(S + "/faq-doses.json", JSON.stringify(out, null, 1));
const withDose = out.filter((o) => o.tiers.length);
console.log("sections:", out.length, "| with a dose block:", withDose.length, "| without:", out.length - withDose.length);
console.log("\n--- sample ---");
withDose.slice(0, 10).forEach((o) => console.log("\n" + o.name + "\n   " + o.tiers.map((t) => t[0] + ": " + t[1]).join("\n   ") + (o.route.length ? "\n   route> " + o.route[0] : "")));
console.log("\n--- no dose block (" + (out.length - withDose.length) + ") ---");
console.log(out.filter((o) => !o.tiers.length).map((o) => o.name).join(" | "));
