/*
 * Atlas Codex: interactions and cautions, keyed by entry slug.
 *
 * Every compound page has an Interactions section. It shows, in this order:
 *   1. the rows below for that slug, and
 *   2. any risk row in the entry whose system names an interaction ("Interactions", "CYP2D6 interactions"),
 *      which moves out of the risk grid into this section.
 * An entry with neither shows an honest "none recorded" panel. That is a gap in the codex, never a claim
 * that the compound interacts with nothing.
 *
 * Each row: { with, level, text, evidence, detail, refs }
 *   with      what it interacts with, e.g. "Nitrates", "Insulin and sulfonylureas", "Pregnancy"
 *   level     "low" | "moderate" | "high" | "unknown", as in the risk grid
 *   evidence  the usual grades; a label warning is "established"
 *   refs      ids from the references list
 *
 * Same sourcing rules as the rest of the codex: an approved label or a published study, verified, and cited.
 */
(function (A) {
  A.interactions = A.interactions || {};
})(window.ATLAS);
