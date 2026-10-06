/*
 * Atlas Codex: where to buy each compound, keyed by entry slug.
 *
 * Each item points at a source defined in `support.sources` (js/data.js) by its `id`.
 * Paste the product URL as `href`. If it has no ?ref= parameter, the page adds the
 * source's code automatically, so these two are equivalent:
 *   "https://halfnattys.is/product/dihexa-capsules/"
 *   "https://halfnattys.is/product/dihexa-capsules/?ref=ATLAS"
 *
 * A compound with no entry here shows "No current stock".
 * Optional per item: `label` to override the button text (e.g. "Half Nattys · 30 mL").
 */
window.ATLAS.buy = {
  dihexa: [
    { source: "halfnattys", href: "https://halfnattys.is/product/dihexa-capsules/?ref=ATLAS" }
  ]
};
