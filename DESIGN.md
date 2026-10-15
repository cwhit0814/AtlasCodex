---
name: Atlas Codex
description: An open reference library of peptides and research compounds, set as a two-colour printed annual.
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
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(3.25rem, 1rem + 6.6vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.25vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  figure:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(9rem, 23vw, 23.75rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.05em"
rounded:
  none: "0px"
spacing:
  band-gap: "4px"
  margin: "clamp(1.25rem, 3.3vw, 3rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(6rem, 11vw, 11rem)"
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
---

# Design System: Atlas Codex

## Overview

**Creative North Star: "The Printed Annual"**

Atlas Codex is laid out like a well-edited printed report: a masthead plate, a tight oversized title, text held to one strict column line, and colour used in solid blocks the way a two-colour print job would. The reader should feel that someone edited this. Ink is the ground, parchment is the ink, and antique gold from the brand mark is the single action colour. Parchment and gilt also appear as whole field colours, the way a printed annual turns to a coloured spread.

Everything hangs from one vertical line at 42% of the viewport. Headings start on it, body text hangs from it, and the zone to its left carries side notes, figures, filters and the structure plate. On a phone the line collapses to the left margin and side notes move inline above their content.

The pictures come from the codex's own world: PubChem structure drawings (public domain) on parchment tiles, and archival engravings and photographs from open collections, all in greyscale. No ornament stands in for content.

**Key Characteristics:**
- One axis at 42% of the viewport, reused on every page
- Ink ground, parchment ink, one gold action colour; parchment and gilt as whole field colours
- Young Serif for display, Source Serif 4 for everything read; no monospace anywhere
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

**Display Font:** Young Serif (with Georgia)
**Body Font:** Source Serif 4 (with Georgia)

**Character:** a heavy, round old-style headline face over a clear transitional text serif. Warmth with weight, and an editor's voice.

### Hierarchy
- **Display** (400, 52–104px, leading 0.95, -0.035em): page titles and the home statement. Two lines at most, each line set by hand and revealed from its baseline.
- **Headline** (400, 32–44px): section claims, featured entry names.
- **Lead** (400, 20–26px, Young Serif): side-zone section titles, statements, entry ledes, the footer's ways in.
- **Body** (400, 17–20px, leading 1.55): everything read. Measure 45–75 characters.
- **Small** (16px): notes, band notes, filters, legal lines. Nothing is smaller.
- **Figure** (up to 23vw): the single live figure on the home page.

### Named Rules
**The Two Line Rule.** Every heading fits in two lines at every width. Cut words before shrinking type.

**The No Costume Rule.** No monospace, no tiny tracked capitals, no eyebrow labels above headings, no index numbers. Data uses tabular lining figures in the text face.

## Layout

Tight side margins (20–48px), the axis at 42vw, and 96–176px between sections. Pages alternate between text spreads (title on the axis, body to its right, notes to its left) and full-bleed field pages. Lists are banded: rows of alternating tone, 4px apart, with fixed column starts (status, name and note, structure thumbnail).

The home page runs: masthead mosaic, statement, the live figure, browse by field (tabs and bands), three featured entries with oversized plates bleeding off the left edge, the standards paragraph with the Farnese Atlas as its drop cap, three archival pictures over the gilt band, and the footer with the name first.

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

### Tabs and pickers
Filled blocks, never outlined. Selected is inverted (parchment block, ink text). Counts sit beside each name in tabular figures.

### Evidence and status
Words in sentence case on a 13–15% tint of their meaning colour, such as "Human RCT" or "Research only". Square, 16px, weight 600.

### Entry spreads
Each section is a spread: its title and a one-line note in the side zone (sticky on desktop), the content on the axis in sheets of `surface`. Tables carry the data, the activity list pairs with a sticky detail panel, and trials are sheets with an amber editor's note.

### The live figure
On the home page, one number owns a parchment field: the share of compounds with a randomized human trial, recounted from the entry data for whichever field the visitor picks. The claim above it rewrites itself to stay true.

## Do's and Don'ts

### Do:
- **Do** start every heading on the axis and hang the content from it.
- **Do** separate surfaces with a 4px gap or a tone step.
- **Do** set every paragraph in the full ink at 16px or more.
- **Do** use real pictures of the codex's world (structure plates, archival engravings) and credit each one in the footer.
- **Do** give every entrance a reduced-motion fallback that keeps the content visible.

### Don't:
- **Don't** use monospace, eyebrow labels, tracked micro capitals, index numbers, hairline rules outside tables, gradients, glows or resting shadows.
- **Don't** round a corner.
- **Don't** use the meaning colours for decoration.
- **Don't** let a heading run to three lines.
- **Don't** let the Buy from block or shop buttons outweigh the evidence on a compound page.
