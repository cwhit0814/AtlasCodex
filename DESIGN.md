---
name: Atlas Codex
description: An open reference library of peptides and research compounds, set as a two-colour printed annual in the house faces.
colors:
  ink-ground: "#17181d"
  surface: "#1f2027"
  surface-raised: "#282a32"
  parchment-ink: "#eee8d2"
  soft-ink: "#c4bba5"
  lamp-gold: "#c89a5b"
  lamp-gold-hover: "#d8ad72"
  paper-field: "#eee8d2"
  paper-field-raised: "#e3dbc3"
  paper-soft-ink: "#443e31"
  gilt-field: "#b8874f"
  laurel: "#9fc48f"
  verdigris: "#7ab3a4"
  amber: "#deae5f"
  crimson: "#e27e8a"
  light-ground: "#f3eee1"
  light-surface: "#e9e2cf"
  light-surface-raised: "#ddd5be"
  light-soft-ink: "#555043"
  light-gold: "#7d571c"
typography:
  display:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(2.875rem, 1.2rem + 4.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.35rem + 1.6vw, 2.625rem)"
    fontWeight: 600
    lineHeight: 1.05
  lead:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "clamp(1.125rem, 1.06rem + 0.25vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
  wordmark:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 600
    letterSpacing: "0.2em"
  figure:
    fontFamily: "Cormorant Garamond, EB Garamond, Georgia, serif"
    fontSize: "clamp(7rem, 15vw, 14rem)"
    fontWeight: 600
    lineHeight: 0.8
    letterSpacing: "-0.03em"
rounded:
  none: "0px"
spacing:
  band-gap: "4px"
  margin: "clamp(1.25rem, 3.3vw, 3rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(4rem, 7vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.lamp-gold}"
    textColor: "{colors.ink-ground}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 22px"
  button-quiet:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.parchment-ink}"
    rounded: "{rounded.none}"
    height: "48px"
  band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.parchment-ink}"
    rounded: "{rounded.none}"
    padding: "11px 20px"
  tab-selected:
    backgroundColor: "{colors.parchment-ink}"
    textColor: "{colors.ink-ground}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.parchment-ink}"
    rounded: "{rounded.none}"
    height: "48px"
  button-on-gilt:
    backgroundColor: "{colors.ink-ground}"
    textColor: "{colors.parchment-ink}"
    rounded: "{rounded.none}"
    height: "48px"
  support-band:
    backgroundColor: "{colors.gilt-field}"
    textColor: "{colors.ink-ground}"
    rounded: "{rounded.none}"
---

# Design System: Atlas Codex

## Overview

**Creative North Star: "The Printed Annual"**

Atlas Codex is laid out like a well-edited printed report: a masthead plate, a tight oversized title, text held to one strict column line, and colour used in solid blocks the way a two-colour print job would. The reader should feel that someone edited this. Ink is the ground, parchment is the ink, and antique gold from the brand mark is the single action colour. Parchment and gilt also appear as whole field colours, the way a printed annual turns to a coloured spread.

Everything hangs from one vertical line at 42% of the viewport. Headings start on it, body text hangs from it, and the zone to its left carries side notes, figures, filters and the structure plate. On a phone the line collapses to the left margin and side notes move inline above their content.

The brand carries the atmosphere instead of pictures: the ATLAS CODEX wordmark with CODEX in gold, Cormorant Garamond and EB Garamond, a laid-paper texture on the ink ground, a gold drop cap on ledes, a compass rose beside the home statement and a compass mark for true breaks. The only pictures are PubChem structure drawings on entry pages, where they carry information.

**Key Characteristics:**
- One axis at 42% of the viewport, reused on every page
- Ink ground, parchment ink, one gold action colour; parchment and gilt as whole field colours
- Cormorant Garamond for display, EB Garamond for everything read; no monospace anywhere
- The ATLAS CODEX wordmark, laid-paper texture, gold drop caps and the compass rose
- Surfaces separated by 4px gaps and steps of tone, never by lines or shadows (tables excepted)
- Square corners everywhere
- Evidence and status written as words on a tint of their meaning colour

## Colors

Two print colours on an ink ground, with four meaning colours kept for evidence and status.

### Primary
- **Lamp Gold** (`lamp-gold`): the one action colour. Primary buttons, link accents, the active nav item, focus outlines, the reader's own scores. It deepens to `light-gold` in the parchment theme.

### Secondary
- **Paper Field** (`paper-field`): a whole section in parchment with ink text, used for the live figure page and the footer. In the light theme this field inverts to ink.
- **Gilt Field** (`gilt-field`): the closing band on the home page, with ink text and one underlined link.

### Tertiary
- **Laurel** (`laurel`): human RCT, established, approved.
- **Verdigris** (`verdigris`): human observational, veterinary, compounded.
- **Amber** (`amber`): animal, in vitro, anecdotal, contested; investigational, supplement; editor's notes and warning signs.
- **Crimson** (`crimson`): research only, never approved, high risk, and profile rows where higher is worse. Banned is the one solid stamp.

### Neutral
- **Ink Ground**, **Surface**, **Surface Raised** (`ink-ground`, `surface`, `surface-raised`): the page and its two tone steps. Bands alternate between the steps.
- **Parchment Ink** (`parchment-ink`): all running text.
- **Soft Ink** (`soft-ink`): secondary notes only.

### Named Rules
**The Full Ink Rule.** Running text is set in the full ink. The soft ink is for notes, captions and secondary labels, never for paragraphs a visitor came to read.

**The Meaning Colour Rule.** Laurel, verdigris, amber and crimson carry evidence, status and risk and nothing else.

## Typography

**Display Font:** Cormorant Garamond 600 (with EB Garamond, Georgia)
**Body Font:** EB Garamond (with Georgia)

**Character:** a high-contrast engraver's display serif over a bookish text serif, the house faces of the brand.

### Hierarchy
- **Display** (600, 46–80px, leading 1): page titles and the home statement. Two lines at most, each line set by hand and revealed from its baseline.
- **Headline** (600, 30–42px): section claims, the support band.
- **Lead** (600, 22–28px, Cormorant): side-zone section titles, statements, the footer's ways in.
- **Body** (400, 18–21px, leading 1.55): everything read. Entry ledes sit one step up (20–24px). Measure 45–75 characters.
- **Small** (17px): notes, band notes, filters, legal lines. Nothing is smaller.
- **Wordmark** (600, tracked 0.2em, capitals): ATLAS in ink, CODEX in gold, in the header and at the head of the footer.
- **Figure** (up to 15vw): the single live figure on the home page.

### Named Rules
**The Two Line Rule.** Every heading fits in two lines at every width. Cut words before shrinking type.

**The No Costume Rule.** No monospace, no tiny tracked capitals, no eyebrow labels above headings, no index numbers. Data uses tabular lining figures in the text face. The wordmark is the one tracked capital setting, because it is the logo.

## Layout

Tight side margins (20–48px), the axis at 42vw, and 64–112px between sections. Pages alternate between text spreads (title on the axis, body to its right, notes to its left) and full-bleed field pages. Lists are banded: rows of alternating tone, 4px apart, with fixed column starts (status, name and note, structure thumbnail).

The home page runs: the support notice, the statement beside the compass rose, the live figure, browse by field (tabs and bands), the range of the record as one comparison table, the standards paragraph with a gold drop cap, the gold support band, and the footer with the wordmark first.

Below 56rem the axis collapses, tabs wrap into rows, bands stack status under name, and side zones move inline.

## Elevation & Depth

Flat. Depth is a step in tone between `ink-ground`, `surface` and `surface-raised`. Only the two things that truly float carry a shadow: the search dialog and the ask panel (`0 30px 80px rgba(0,0,0,.45)`). The ask button is flat.

## Shapes

Square corners on everything: buttons, bands, tabs, fields, tiles, pictures. Lines appear only inside real tables (pharmacokinetics, dosing, monitoring), at 14% ink.

## Components

### Buttons
- **Primary:** gold fill, ink text, 48px tall, square, Source Serif 600. Presses to 97% scale; hover lightens the gold.
- **Quiet:** raised-surface fill, full ink text, same shape.
- **Text link:** the underline appears on hover; gold where the link is the way forward.

### Bands
The codex's list unit: a full-width row in one of two alternating tones, 4px apart. Status word at the left, name (600) with a one-line note, and a parchment thumbnail of the structure at the right on desktop. Hover tints the row with gold.

### The archive index
The archive is an A to Z index. A row of filled letter blocks jumps to each letter (letters with no records sit faded), and each letter opens its own section under a gold display initial, with ordinary bands beneath. Names that open on a digit or a Greek letter file under #.

### Stacks
The Stacks page is a banded list like the codex: each band leads with the grade of the pair, then the name over its parts joined with +, and its use cases at the right. Each stack has its own page in the entry layout. Its side zone carries the **formula plate**, a parchment block where the parts are set as a sum in Cormorant with a gilt + and the pair's grade under a heavier rule. **The parts** section is the ledger: one table row per part (name with status, what it adds, its own grade), any class finding as an italic row, then a heavier rule and the **Together** line in Cormorant with the grade that counts.

### Use-case rows
The codex and the stacks filter by use case with a row of tabs under a small sentence-case label (Use case, Field), the one place a label sits above a control row.

### Tabs and pickers
Filled blocks, never outlined. Selected is inverted (parchment block, ink text). Counts sit beside each name in tabular figures.

### Evidence and status
Words in sentence case on a 13–15% tint of their meaning colour, such as "Human RCT" or "Research only". Square, 16px, weight 600.

### Support surfaces
Visitors are steered toward the affiliate source and the Support page on every page, always with the commission disclosure beside the link and never as a recommendation of a compound:
- **Notice strip** under the header: "use code ATLAS at Half Nattys", with a shop link.
- **Support me** is the gold primary button in the header; Search is quiet beside it.
- **Support band** (gilt field) on the home page: "Keep the codex free.", the source's logo, an ink Shop button, Copy code, and the disclosure.
- **Buy from** on each entry: a product button when `js/buy.js` has a listing, otherwise a gold-tinted "Support the codex at Half Nattys" link with the code.
- **Support sheet**, a compact gilt band near the end of every entry.
- **Support bar**, a slim gilt bar that rises after the first screen on every page except Support, naming the compound when the source lists it. It can be dismissed for the browser session, and the Ask button lifts above it.
- **Side card** under the filters on Codex and Archive, and one labelled **Affiliate row** in the codex list, shown only when the list isn't split into fields, so it never sits inside a field.
- **Search** results end with a shop row.
- **Listed compounds** (the source's own popular list) get a direct "Shop {compound}" button. Banned compounds never get a compound-specific shop prompt.

### Entry spreads
Each section is a spread: its title and a one-line note in the side zone (sticky on desktop), the content on the axis in sheets of `surface`. Tables carry the data, the activity list pairs with a sticky detail panel, and trials are sheets with an amber editor's note.

### The live figure
On the home page, one number owns a parchment field: the share of compounds with a randomized human trial, recounted from the entry data for whichever field the visitor picks. The claim above it rewrites itself to stay true.

## Do's and Don'ts

### Do:
- **Do** start every heading on the axis and hang the content from it.
- **Do** separate surfaces with a 4px gap or a tone step.
- **Do** set every paragraph in the full ink at 16px or more.
- **Do** keep the commission disclosure next to every affiliate link and code.
- **Do** give every entrance a reduced-motion fallback that keeps the content visible.

### Don't:
- **Don't** use monospace, eyebrow labels, tracked micro capitals, index numbers, hairline rules outside tables, gradients, glows or resting shadows.
- **Don't** round a corner.
- **Don't** use the meaning colours for decoration.
- **Don't** let a heading run to three lines.
- **Don't** add decorative pictures; the brand marks carry the atmosphere.
- **Don't** word any support surface as a recommendation of a compound or product.
