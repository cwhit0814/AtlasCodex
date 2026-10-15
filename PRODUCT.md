# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary reader is a self-experimenter who is already using a peptide, anabolic, nootropic or other research compound, or is about to. They usually open the codex in the middle of a decision. They want to check a specific compound's risks, how strong the evidence is, what is known about dosing, how it behaves in the body, and which blood markers to watch. They are informed and skeptical. They want to know what the record actually shows, not reassurance and not a sales pitch.

## Product Purpose

Atlas Codex is an open reference library of peptides and research compounds, about 170 entries plus guides. Each entry covers what the compound is, its structure, its mechanism and receptor activity, a risk grid graded by evidence, the human clinical record, pharmacokinetics, monitoring and references. Success means a reader leaves knowing what the evidence supports, how strong that evidence is, and what to watch for, without having been told what to do.

## Positioning

It sits in the same space as Tanner Tattered's FAQ and 1MinAnabolics' Maximum Pharma Archive, and is set apart by three things:

- **Strict sourcing.** Dosing numbers come only from approved regulator-reviewed labels or from doses a published trial actually gave. Forum, vendor and coaching protocols are left out on purpose. Every claim carries an evidence grade. Where a creator's view and the published record disagree, the codex follows the record.
- **The same structure on every compound.** Each entry has the same sections (profile scores, risk grid, mechanism, trials, PK, dosing, monitoring), so compounds can be compared side by side.
- **A broader, curated catalog.** It covers compounds the others skip and leaves out ones that don't belong. Its overlap with Tanner's list is expected to shrink.

## Operating Context

- People mostly read one compound page at a time, reaching it through ⌘K / Ctrl+K / `/` search, the codex filters (category, status, sort), the archive, or links between entries.
- The ✦ "ask the archive" button runs a keyword search over entry text. It is not an AI model and must never be presented as one.
- Visitors can add their own 1–5 profile scores, which are saved only in their browser.
- Readers come with lab results and blood-work routines in mind. The monitoring sections deliberately leave out target ranges, because interpreting a result is a clinical decision.

## Capabilities and Constraints

- A static site with no build step and no dependencies: plain HTML, `css/style.css` and `js/*.js`. It is served by any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages) and run locally with `python3 -m http.server 8000`.
- Content lives in JS data files (`js/data.js`, `js/entries-*.js`, `js/builder.js` short form, `js/dosing.js`, `js/pk.js`, `js/monitoring.js`, `js/buy.js`). Each page is rendered from them.
- Evidence vocabulary: `human rct`, `human obs`, `established`, `animal`, `in vitro`, `anecdotal`, `contested`, `unknown`. Status labels include Research only, Never approved, Banned, Veterinary, Discontinued, Supplement, Cosmetic and Compounded.
- Compounds with no label or trial dose show an honest "no established human dose" panel, with per-compound wording in `site.noDoseBySlug`. Never fill that gap with a number.
- Commerce: Half Nattys referrals (code `ATLAS`) fund the codex. **Support is actively promoted** (owner's decision, 2026-10-14): a notice strip on every page, a gold Support me button in the header, a support band on the home page and at the end of every entry, and a support link on every compound page. Every page is built to lead the reader to the affiliate source (owner's goal, 2026-10-14): notice strip, header button, a rising support bar, side cards and an affiliate row on list pages, a shop row in search, and direct shop buttons for compounds the source lists. Three lines hold regardless: the commission disclosure sits beside every affiliate link, no support surface reads as a recommendation of a compound, and banned compounds never get a compound-specific shop prompt.
- Undecided: the contact and requests channel. `about.html#contact` is a placeholder, and the home cards "Join the Community" and "Request an Entry" have no real destination yet.

## Brand Commitments

- Name: Atlas Codex, with the wordmark ATLAS / CODEX. The mark is `favicon.svg`.
- Voice: plain, precise and non-promotional. The editorial voice is first person and comes from the site owner (as on the credits and support pages). It names uncertainty outright and does not hedge it away.
- The disclaimer is binding: "Atlas Codex is an educational reference. Nothing here is medical advice, and nothing here is an endorsement of using any compound. Talk to a licensed clinician before making health decisions."
- Credits are thanks, not endorsement. Featured creators are not affiliated with the site. Use their images only with permission.

## Evidence on Hand

- Around 170 compound entries plus guides, with PubMed-linked references, PubChem structure images, and dosing, PK and monitoring data.
- Creator images in `img/creator-*.{png,webp}`, used with permission, and the Half Nattys logo in `img/halfnattys.png`.
- Absences: no user testimonials, no community size, no traffic or usage numbers, and no clinician or expert review of entries. Future work must not invent any of these.

## Product Principles

1. **The record outranks everyone.** That includes creators, vendors and the site's own revenue.
2. **Grade every claim.** Show how strong the evidence is right where the claim is made, not in a footnote.
3. **Say "unknown" honestly.** A missing dose, trial or range is shown plainly and never filled in.
4. **Same shape, every compound.** Consistent structure is what makes comparison and quick lookups possible.
5. **Inform about compounds; ask openly for support.** Harm-relevant information is easy to find and nothing pushes the reader toward using a compound. Asking readers to support the codex through the referral code is open, frequent and always disclosed.
