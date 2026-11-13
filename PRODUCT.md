# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary reader is a self-experimenter who is already using a peptide, anabolic, nootropic or other research compound, or is about to. They usually open the codex in the middle of a decision. They want to check a specific compound's risks, how strong the evidence is, what is known about dosing, how it behaves in the body, and which blood markers to watch. They are informed and skeptical. They want to know what the record actually shows, not reassurance and not a sales pitch.

## Product Purpose

Atlas Codex is an open reference library of peptides and research compounds: 244 compound entries and 7 guides. Each entry covers what the compound is, its structure, its mechanism and receptor activity, a risk grid graded by evidence, the human clinical record, pharmacokinetics, monitoring and references. Success means a reader leaves knowing what the evidence supports, how strong that evidence is, and what to watch for, without having been told what to do.

## Positioning

It sits in the same space as Tanner Tattered's FAQ and 1MinAnabolics' Maximum Pharma Archive, and since 2026-11-12 it also draws on both of them by name for reported dosing (owner's decision: these amounts are required everywhere, to the best of the available sourcing). What sets the codex apart is therefore not what it refuses to carry, but how it separates, attributes and grades what it carries:

- **Two dosing layers, never merged.** The first holds only what an approved regulator label or a published trial established. The second records what people report taking, each block attributed to a named, linked source and carrying its own confidence grade (`wide`, `some`, `thin`, `none`). A reported figure never overwrites, revises or stands in for the record: it prints beneath it, behind a rule, under a standing caveat that these are amounts people say they take rather than amounts anyone has tested. Of 183 dosing records, 143 have a label or trial dose, 118 carry a reported figure, and 40 have a reported figure and nothing else.
- **A declared source order.** Where both reported sources cover a compound, Tanner Tattered's FAQ leads and the Maximum Pharma Archive fills only what it leaves out (owner's decision, 2026-11-12). Where the two materially disagree and the FAQ's figure is the higher one, the Archive's lower figure folds into a line inside the FAQ's block rather than printing beside it, so one figure leads without the more cautious number disappearing. The FAQ leads on 112 compounds, the Archive on 6, and no page prints the Archive above the FAQ. Two blocks are not treated as corroboration when a source declines to give a figure at all.
- **Every claim still graded, and the record still outranks the creators.** The evidence grade sits beside the claim it belongs to, and the strength of a reported figure is derived from how many independent sources report it rather than asserted. Where a creator's view and the published record disagree, the record is what the record section says; the disagreement is named rather than resolved by deletion.
- **The same structure on every compound.** Each entry has the same sections (profile scores, risk grid, mechanism, trials, PK, dosing, monitoring), so compounds can be compared side by side.
- **A broader, curated catalog.** 244 compound entries and 7 guides. It covers compounds the others skip and leaves out ones that don't belong. Its overlap with Tanner's list is expected to shrink.

## Operating Context

- People mostly read one compound page at a time, reaching it through ⌘K / Ctrl+K / `/` search, the codex filters (category, status, sort), the archive, or links between entries.
- The open-book "ask the archive" button runs a keyword search over entry text. It is not an AI model and must never be presented as one.
- Visitors can add their own 1–5 profile scores, which are saved only in their browser.
- Readers come with lab results and blood-work routines in mind. The monitoring sections deliberately leave out target ranges, because interpreting a result is a clinical decision.

## Capabilities and Constraints

- A static site with no build step and no dependencies: plain HTML, `css/style.css` and `js/*.js`. It is served by any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages) and run locally with `python3 -m http.server 8000`.
- Content lives in JS data files. `js/load.js` holds the load order and is the one place a new data file is registered. They are: `js/data.js`, `js/entries-*.js` (`js/builder.js` holds the short form they are written in), `js/pk.js`, `js/dosing.js`, `js/dosing-reported.js` (generated; see `.gitattributes`), `js/monitoring.js`, `js/interactions.js`, `js/legal.js`, `js/refs-research.js`, `js/refs-legal.js`, `js/anecdotes.js`, `js/buy.js`, `js/uses.js`, `js/stacks.js`. `js/structures.js` is loaded only by the pages that need it. Each page is rendered from them, and `node tools/check.js` validates them.
- Evidence vocabulary: `human rct`, `human obs`, `established`, `animal`, `in vitro`, `anecdotal`, `contested`, `unknown`. Status labels include Research only, Never approved, Banned, Veterinary, Discontinued, Supplement, Cosmetic and Compounded.
- Compounds with no label or trial dose show an honest "no established human dose" panel, with per-compound wording in `site.noDoseBySlug`. That panel states a gap in the record and is never filled with an invented number. Where a named source reports an amount, it prints below the panel as a graded reported figure, which records practice and does not close the gap.
- Commerce: Half Nattys referrals (code `ATLAS`) fund the codex. **Support is actively promoted** (owner's decision, 2026-10-14): a notice strip on every page, a gold Support me button in the header, a support band on the home page and at the end of every entry, and a support link on every compound page. Every page is built to lead the reader to the affiliate source (owner's goal, 2026-10-14): notice strip, header button, a rising support bar, side cards and an affiliate row on list pages, a shop row in search, and direct shop buttons for compounds the source lists. Three lines hold regardless: the commission disclosure sits beside every affiliate link, no support surface reads as a recommendation of a compound, and banned compounds never get a compound-specific shop prompt.
- Contact and requests (interim, set 2026-10-17): corrections and entry requests go to the public GitHub issue tracker (`site.contact` in `js/data.js`). Every entry has a prefilled "Report an error in this entry" link, and About explains the process. A community channel is still undecided.

## Brand Commitments

- Name: Atlas Codex, with the wordmark ATLAS / CODEX. The mark is `favicon.svg`.
- Voice: plain, precise and non-promotional. The editorial voice is first person and comes from the site owner (as on the credits and support pages). It names uncertainty outright and does not hedge it away.
- The disclaimer is binding: "Atlas Codex is an educational reference. Nothing here is medical advice, and nothing here is an endorsement of using any compound. Talk to a licensed clinician before making health decisions."
- Credits are thanks, not endorsement. Featured creators are not affiliated with the site. Use their images only with permission.

## Evidence on Hand

- 244 compound entries and 7 guides, carrying 1,110 PubMed-linked and primary-source references, PubChem structure images, 15 stacks, and dosing, PK and monitoring data.
- Creator images in `img/creator-*.{png,webp}`, used with permission, and the Half Nattys logo in `img/halfnattys.png`.
- Absences: no user testimonials, no community size, no traffic or usage numbers, and no clinician or expert review of entries. Future work must not invent any of these.

## Product Principles

1. **The record outranks everyone.** That includes creators, vendors and the site's own revenue.
2. **Grade every claim.** Show how strong the evidence is right where the claim is made, not in a footnote.
3. **Say "unknown" honestly.** A missing dose, trial or range is shown plainly and never filled in. A reported figure from a named source is not a filling-in: it sits in its own layer, graded, and the gap in the record stays visible beside it.
4. **Same shape, every compound.** Consistent structure is what makes comparison and quick lookups possible.
5. **Inform about compounds; ask openly for support.** Harm-relevant information is easy to find and nothing pushes the reader toward using a compound. Asking readers to support the codex through the referral code is open, frequent and always disclosed.
