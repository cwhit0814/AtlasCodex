/* Atlas Codex: the one list of data and app scripts every page loads, in order. A new data file goes here, once.
 * document.write keeps them blocking and in order, so app.js still runs after the data and before DOMContentLoaded.
 * Pages that need more (structures.js, the compare scripts) add their own tags after this one. */
["data", "entries-aas", "entries-noots", "entries-metabolic", "entries-fatloss", "builder", "entries-faq-1", "entries-faq-2",
  "entries-cns", "entries-products", "entries-guides", "pk", "dosing", "monitoring", "interactions", "legal", "entries-new",
  "refs-research", "refs-legal", "buy", "uses", "stacks", "app"].forEach((f) => document.write(`<script src="js/${f}.js"><\/script>`));
