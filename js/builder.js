/*
 * Atlas Codex: compact entry builder used by the entries-faq-*.js files.
 *
 * ATLAS.add({...}) takes the same fields as a full entry (see data.js) plus short forms:
 *   p:  [[label, score, neg?], ...]                    -> profile.rows      (pnote -> profile.note)
 *   r:  [[system, level, text, evidence, detail?, refs?], ...] -> risks
 *   a:  [[title, evidence, summary, detail?], ...]      -> activity
 *   t:  [{ title, evidence, meta, body, note?, refs? }] -> trials (full form)
 *   k:  [[label, value], ...]                          -> pk.rows (ke -> pk.evidence, kn -> pk.note, kr -> pk.refs)
 * ATLAS.cat(id, name, blurb) adds a category before "Guides" if it doesn't exist yet.
 */
(function (A) {
  const today = "2026-10-07";
  A.NE = "Not established in humans";

  A.cat = function (id, name, blurb) {
    if (A.categories.some((c) => c.id === id)) return;
    A.categories.splice(A.categories.findIndex((c) => c.id === "guides"), 0, { id, name, blurb });
  };

  A.add = function (o) {
    const { p, pnote, r, a, t, k, ke, kn, kr, ...rest } = o;
    const e = { type: "compound", added: today, updated: today, tags: [], related: [], aliases: [], ...rest };
    if (p) e.profile = { note: pnote, rows: p.map(([label, score, neg]) => ({ label, score, neg: !!neg })) };
    e.risks = (r || []).map(([system, level, text, evidence, detail, refs]) => ({ system, level, text, evidence, detail, refs }));
    e.activity = (a || []).map(([title, evidence, summary, detail]) => ({ title, evidence, summary, detail }));
    e.trials = t || [];
    if (k) e.pk = { evidence: ke || "unknown", rows: k, note: kn, refs: kr };
    A.entries.push(e);
  };
})(window.ATLAS);
