// Routing regression check, from real prompts in this project. Run: node .claude/hooks/userPromptSubmit.test.js
const assert = require("assert");
const { classify } = require("./userPromptSubmit.js");

const cases = [
  ["commit and push", "git"],
  ["yes commit and push", "git"],
  ["comit and push", "git"],
  ["comit changes to github", "git"],
  ["commit this so I can begin working on it from another computer", "git"],
  ["git push --force", "heavy"],
  ["fix 1 then commit and push", "heavy"],
  ["pull current project files I forgot to", "heavy"],
  ["do a quick research task on PRL-8-53", "research"],
  ["add extra use cases for some drugs do deep research to find them", "research"],
  ["research a better layout for the stacks page and redesign it", "heavy"],
  ["are there other ways to improve the hook? do deeper research on other mods that delegate to subagents", "heavy"],
  ["where is semax defined", "light"],
  ["how many entries are in the nootropic category", "standard"],
  ["list the files in css", "light"],
  ["fix the typo in about.html", "standard"],
  ["what dose of semax is in dosing.js", "standard"],
  ["change the semax dose in dosing.js to 600 mcg", "heavy"],
  ["Use design-taste-frontend with DESIGN_VARIANCE 8. Rebuild the site", "heavy"],
  ["add bac water as supplies and get use cases for all extra chems that don't have them yet.", "heavy"],
  ["is jev model router working as expected?", "heavy"],
];

let failed = 0;
for (const [prompt, want] of cases) {
  const got = classify(prompt);
  if (got.tier !== want) { failed++; console.log(`FAIL ${want} != ${got.tier} | ${prompt} | ${got.why.join("; ")}`); }
}
assert.strictEqual(failed, 0, `${failed} of ${cases.length} routing cases failed`);
console.log(`ok: ${cases.length} routing cases`);
