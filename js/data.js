/*
 * Atlas Codex content. Every page is rendered from this file.
 *
 * Compound entries can carry any of these blocks (missing ones are skipped):
 *   names, structure     prose for the intro block (HTML allowed)
 *   pubchem              name to fetch a structure image from PubChem (false to hide)
 *   profile              { note, rows: [{ label, score 0-5, neg }] }  neg = higher is worse
 *   risks                [{ system, level, text, evidence, detail }]
 *   activity             [{ title, evidence, summary, detail, refs }]
 *   trials               [{ title, evidence, meta: [..], body, note, refs }]
 *   noTrials             text shown when there is no human clinical record
 *
 * evidence: "human rct" | "human obs" | "established" | "animal" | "in vitro" | "anecdotal" | "contested" | "unknown"
 * refs are ids from the `references` list at the bottom.
 */
window.ATLAS = {
  site: {
    title: "Atlas Codex",
    wordmark: ["ATLAS", "CODEX"],
    heroTitle: "The Atlas Codex",
    heroLines: ["Every compound worth knowing, cited and graded.", "Mechanisms, trials, risks, and what the evidence actually says."],
    tagline: "An open reference library of peptides and research compounds.",
    // Per-compound overrides for the "no established dose" panel, used where that
    // statement would be wrong: approved abroad, cosmetic use, or indication-specific labels.
    noDoseBySlug: {
      selank: "Approved in Russia as a nasal spray. Its Russian label dosing is not published in English-language regulatory sources and is not reproduced here.",
      semax: "Approved in Russia as a nasal spray and listed as an essential medicine there. Its Russian label dosing is not reproduced here.",
      oxiracetam: "Marketed in Italy in the past and used as an injection in China. No English-language regulatory label is available.",
      phenylpiracetam: "Prescribed in Russia as Phenotropil. Its Russian label dosing is not reproduced here, and it is prohibited in sport.",
      noopept: "Prescribed in Russia. Its Russian label dosing is not reproduced here, and the FDA does not accept it as a lawful supplement ingredient.",
      bromantane: "Prescribed in Russia as Ladasten. Its Russian label dosing is not reproduced here, and it is prohibited in sport.",
      "cerebroprotein-hydrolysate": "Given by injection or infusion under specialist supervision in the countries where it is approved. A Cochrane review found no clear benefit after stroke.",
      emoxypine: "Prescribed in Russia as Mexidol. Its Russian label dosing is not published in English-language regulatory sources.",
      taltirelin: "Approved in Japan as Ceredist for spinocerebellar degeneration. Its Japanese label dosing is not reproduced here.",
      phenibut: "Prescribed in Russia and some neighboring countries. Its label dosing is not reproduced here: tolerance builds within days and withdrawal can require hospital care.",
      picamilon: "Prescribed in Russia. The FDA ruled in 2015 that it does not qualify as a dietary ingredient in the US.",
      meldonium: "Approved in Latvia and nearby countries for cardiac use. Its label dosing is not reproduced here, and it is prohibited in sport.",
      thymalin: "Approved in Russia as an injectable immunomodulator, given under medical supervision.",
      nandrolone: "Approved for anemia of kidney disease in several countries, where dosing is set by a physician for that indication. There is no approved dose for muscle building.",
      proviron: "Approved outside the US for hypogonadism and male infertility, where dosing is set by a physician.",
      hmg: "A fertility medicine dosed by a specialist and adjusted to hormone monitoring, so no fixed dose applies.",
      "ghrp-2": "Approved in Japan only as a single-use diagnostic test for growth hormone deficiency, not as a treatment.",
      "methylene-blue": "Approved as an intravenous antidote for methemoglobinemia, given by weight in an emergency setting. There is no approved dose for cognitive or energy use.",
      oxytocin: "Approved as an infusion to induce or augment labor, titrated by a clinician. Intranasal use for social or mood effects is experimental and has produced inconsistent results.",
      vip: "Approved in some countries only as an injection into the penis for erectile dysfunction, combined with phentolamine.",
      ketoconazole: "A shampoo used as directed on the label rather than dosed. Oral ketoconazole carries a boxed warning for liver injury and is not used for hair.",
      topilutamide: "Registered as a cosmetic in the Czech Republic, used as directed on the product label.",
      "ghk-cu": "Used as directed on the cosmetic product label. Injectable copper peptides have no established human dose.",
      "ahk-cu": "Used as directed on the cosmetic product label.",
      "snap-8": "A cosmetic ingredient, used at the concentration set by the finished product.",
      "tak-653": "In clinical trials as an add-on for depression. The depression trial doses have not been published; a healthy-volunteer study gave single doses of 0.5 mg and 6 mg.",
      "gc-1": "Reached phase 1 trials for high cholesterol, but full results and dosing were never published.",
      ment: "Studied as a contraceptive implant rather than at fixed injected doses. The program never reached approval.",
      pyrilutamide: "In trials as a topical solution; concentrations are set by the trial protocol and it is not approved.",
      pp405: "In early trials as a topical; concentrations are set by the trial protocol and it is not approved.",
      sm04554: "Tested as a topical solution in phase 2; it is not approved."
    },
    noDose: {
      "Research only": "This compound has never been through a dose-finding study in people. Amounts circulating online come from animal work, vendor labels or user reports, none of which establish a safe or effective human dose.",
      "Never approved": "No regulator has ever evaluated this compound in humans, so no dose has been established or reviewed for safety.",
      "Banned": "Human use is prohibited or unlawful, so no current dosing guidance exists. Historical use predates modern safety standards.",
      "Veterinary": "Dosing exists only for animals. Veterinary doses do not translate to humans, and no human dose has been established.",
      "Discontinued": "This medicine was withdrawn or is no longer marketed, so there is no current approved dosing. Historical label dosing is not reproduced here.",
      "Supplement": "Sold as a supplement, so amounts are set by manufacturers rather than established by dose-finding trials.",
      "Cosmetic": "A cosmetic or personal care product, used as directed on the label rather than dosed.",
      "Compounded": "Strength is set per prescription by the compounding pharmacy and prescriber, so there is no standard dose.",
      "Device": "A device, used according to its instructions rather than dosed.",
      default: "No dose-finding study or approved label establishes a human dose for this compound."
    },
    // Where an "Approved" status applies, for entries not approved in the US or approved only as a cosmetic.
    // Each comes from the entry's own text; the tag shows it under the word "Approved".
    approvedWhere: {
      mazdutide: "China", oxiracetam: "China",
      selank: "Russia", semax: "Russia", thymalin: "Russia", phenibut: "Russia", picamilon: "Russia", bromantane: "Russia",
      emoxypine: "Russia", noopept: "Russia", phenylpiracetam: "Russia",
      taltirelin: "Japan", "ghrp-2": "Japan, as a diagnostic", meldonium: "Eastern Europe", piracetam: "Europe",
      cytisine: "UK, Canada and others", vip: "Some EU countries",
      clenbuterol: "Outside the US", dapoxetine: "Outside the US", tropisetron: "Outside the US", proviron: "Outside the US",
      "cerebroprotein-hydrolysate": "Outside the US", "thymosin-alpha-1": "Outside the US and EU",
      "ghk-cu": "As a cosmetic", "ahk-cu": "As a cosmetic", "snap-8": "As a cosmetic", topilutamide: "As a cosmetic, Czechia"
    },
    // Corrections and requests go to the public issue tracker.
    contact: {
      label: "the codex's public issue tracker on GitHub",
      href: "https://github.com/cwhit0814/AtlasCodex/issues/new"
    },
    disclaimer:
      "Atlas Codex is an educational reference. Nothing here is medical advice, and nothing here is an endorsement of using any compound. Talk to a licensed clinician before making health decisions.",
    ticker: [
      "New: Retatrutide entry updated with phase 2 data",
      "Guide: How to read a clinical trial phase",
      "{count} entries, every claim graded by evidence",
      { text: "Support: Use code ATLAS at halfnattys.is →", href: "https://halfnattys.is/?ref=ATLAS" }
    ],
    tickerLink: { label: "Guides →", href: "codex.html?cat=guides" },
    headerButtons: [
      { label: "SUPPORT ME", href: "support.html", primary: true },
      { label: "CREDITS", href: "credits.html" }
    ],
    cards: [
      { icon: "chat", tone: "gold", title: "Join the Community", text: "Talk through research, ask questions, and flag entries that need updating.", href: "about.html#contact" },
      { icon: "form", tone: "accent", title: "Request an Entry", text: "Tell us which compound to cover next and what you want to know about it.", href: "about.html#contact" },
      { icon: "book", tone: "plain", title: "Read the Guides", text: "How to judge evidence, read trial phases, and spot a weak claim.", href: "codex.html?cat=guides" }
    ]
  },

  /*
   * Creators shown on credits.html. Each card uses a generated monogram avatar by default.
   * To use a real photo or logo, put the file in img/ and set `image`, e.g.
   *   image: "img/creator-name.jpg"
   * Only add an image you have permission to use: these are real people, and their
   * portraits and brand marks belong to them.
   *   imagePos: object-position for the circular crop, e.g. "50% 22%" to favour the head
   *   accent/accent2: the monogram gradient
   *   known:  what they cover, in one line
   *   topics: [[label, href]] chips, usually into the codex
   *   memorial: optional text; marks the card as a tribute
   */
  credits: {
    eyebrow: "Credits",
    title: "Creators I Learned From",
    intro: "Everything here started with other people's work. These are the creators I actually learned from, in roughly the order they shaped how I think about this material. Listing them is credit and thanks, not endorsement, and none of them are affiliated with this site or answerable for anything on it.",
    note: "Every entry in this codex is written from primary sources and graded on its own evidence. Where a creator's view and the published record disagree, the codex follows the record.",
    people: [
      {
        name: "Tanner Tattered", handle: "tanner.tattered", href: "https://hoo.be/tattered",
        image: "img/creator-tattered.webp", accent: "#c89a5b", accent2: "#8a6224",
        known: "Long-running Q&As and a large public FAQ covering peptides, anabolics and harm reduction.",
        text: "The one I trust most, on all of it. He puts his clients' health ahead of everything else, and he gives the entire FAQ away for free. A lot of the compound list here still overlaps with his, and most of the blood work and monitoring guidance came from it. I'm adding compounds he doesn't cover and leaving out ones I don't think belong, so the overlap will shrink as this becomes its own thing.",
        topics: [["Peptides", "codex.html?cat=repair"], ["AAS", "codex.html?cat=aas"], ["Blood work", "entry.html?slug=blood-work-and-monitoring"]],
        linkLabel: "hoo.be/tattered"
      },
      {
        name: "1MinAnabolics", handle: "Maximum Pharma Archive", href: "https://maxpharma.wiki/",
        image: "img/creator-1minanabolics.png", accent: "#a69d88", accent2: "#6e6757",
        known: "The Maximum Pharma Archive, a searchable reference of compounds with per-claim evidence grading.",
        text: "Along with ScientificSean, the reason this codex exists at all — his archive gave me the idea, and I'm taking this somewhere of its own rather than leaving it a copy of his. He's who I watch for the extreme end: he pushes the envelope in his own research and reports what he finds either way, good or bad, so nobody else has to.",
        topics: [["Archive", "archive.html"], ["Evidence grades", "about.html"]],
        linkLabel: "maxpharma.wiki"
      },
      {
        name: "ScientificSean", handle: "scientificsean.wiki", href: "https://www.scientificsean.wiki/support",
        image: "img/creator-scientificsean.png", accent: "#6fa89a", accent2: "#2f6b5c",
        known: "A compound wiki written with an emphasis on citations and mechanism.",
        text: "The other half of where this codex came from. He's who I go to for nootropics, and he digs deeper than anyone else I follow. If you want to understand what these compounds are doing at the receptor level, his work is where to go.",
        topics: [["Mechanisms", "codex.html?cat=metabolic"], ["Guides", "codex.html?cat=guides"]],
        linkLabel: "scientificsean.wiki"
      },
      {
        name: "Vigorous Steve", handle: "vigoroussteve.com", href: "https://vigoroussteve.com/",
        image: "img/creator-vigorous-steve.png", imagePos: "50% 22%", accent: "#86a877", accent2: "#4a6b32",
        known: "Years of harm-reduction education on performance-enhancing drugs, their side effects and what to monitor.",
        text: "One of the two who started all of this for me. Steve and Leo are why I got into this side of research in the first place, and his harm-reduction framing — what to watch and when to stop, rather than how much to take — is the line this codex tries to hold.",
        topics: [["Monitoring", "entry.html?slug=blood-work-and-monitoring"], ["AAS", "codex.html?cat=aas"]],
        linkLabel: "vigoroussteve.com"
      },
      {
        name: "Leo and Longevity", handle: "YouTube", href: "https://www.youtube.com/c/LeoandLongevity", memorial: "In memoriam",
        image: "img/creator-leo.png", accent: "#cf7a6b", accent2: "#9b3127",
        known: "Video essays on hormones, body composition and longevity, aimed at the mechanism rather than the protocol.",
        text: "Rest in peace. Leo and Steve are the two who got me into this, and none of what I've written here would exist without him. He taught the mechanism instead of the protocol, which is the standard I've tried to keep. If you still use his codes, that support goes directly to his wife and daughter.",
        topics: [["Longevity", "codex.html?cat=longevity"], ["GH axis", "codex.html?cat=gh"]],
        linkLabel: "youtube.com"
      }
    ]
  },

  /*
   * Sources shown on the Support Me page (support.html). Add one object per source.
   *   logo:       optional image path (e.g. "img/halfnattys.png"); initials are shown if omitted
   *   attributes: outlined tags (e.g. "US shipping")
   *   sells:      gray tags under "what they sell"
   *   logoBg:     background color behind the logo (default light gray)
   *   popular:    [{ name, slug }]; items with a slug link to that codex entry
   *   code:       the referral code. A source without one is not an affiliate: it stays off this page and its
   *               product links carry no commission note. The first source is the one promoted site-wide.
   */
  support: {
    eyebrow: "Trusted sources",
    title: "Support me",
    intro: "Using my code at the source below supports Atlas Codex at no extra cost to you. Thank you for keeping the archive running.",
    disclosure: "Atlas Codex earns a commission on purchases made with these codes. A listing here is not an endorsement of any product, and nothing on this page is medical advice.",
    sources: [
      {
        id: "halfnattys",
        name: "Half Nattys",
        href: "https://halfnattys.is/?ref=ATLAS",
        code: "ATLAS",
        logo: "img/halfnattys.png",
        logoBg: "#000",
        blurb: "Research-market products across peptides, capsules, sprays and topicals. The source says it publishes a COA library; the codex has not checked it.",
        attributes: ["COA library (the source's claim)", "Research market"],
        sells: ["Peptides", "Capsules", "Sprays", "Topicals", "Aminos", "Liquids", "Lab Supplies"],
        popular: [
          { name: "GHK-Cu", slug: "ghk-cu" },
          { name: "BPC-157", slug: "bpc-157" },
          { name: "Dihexa", slug: "dihexa" },
          { name: "Tri-Blend Hair Loss Topical", slug: "tri-blend-topical" }
        ]
      },
      {
        // Linked for its own products only; no referral code, so the codex earns nothing from it.
        id: "throne",
        name: "Throne",
        href: "https://www.madebythrone.com/",
        blurb: "Peptide skincare, hair care and a microneedling pen. Publishes full ingredient lists; strengths only for some products.",
        sells: ["Skincare", "Hair care", "Supplements", "Devices"]
      }
    ]
  },

  categories: [
    { id: "metabolic", name: "Metabolic", blurb: "Incretin mimetics and compounds studied for weight and glucose control." },
    { id: "repair", name: "Repair", blurb: "Peptides studied for wound healing, tendon and gut repair." },
    { id: "gh", name: "GH Axis", blurb: "Secretagogues and GHRH analogs that act on the GH pathway." },
    { id: "nootropic", name: "Nootropics", blurb: "Peptides studied for anxiety, cognition and neuroprotection." },
    { id: "longevity", name: "Longevity", blurb: "Compounds investigated for aging biology and mitochondrial function." },
    { id: "immune", name: "Immune", blurb: "Thymic peptides and immunomodulators." },
    { id: "skin", name: "Skin & Hair", blurb: "Cosmetic and dermatological peptides, and topical treatments for hair loss." },
    { id: "melanocortin", name: "Melanocortin", blurb: "Agonists of the melanocortin receptor family." },
    { id: "guides", name: "Guides", blurb: "Background reading on how to evaluate research." }
  ],

  entries: [
    /* ------------------------------------------------------------ metabolic */
    {
      slug: "semaglutide", type: "compound", name: "Semaglutide",
      aliases: ["Ozempic", "Wegovy", "Rybelsus"], category: "metabolic", status: "Approved",
      class: "GLP-1 receptor agonist", developer: "Novo Nordisk",
      added: "2026-01-12", updated: "2026-10-17",
      tags: ["GLP-1", "obesity", "type 2 diabetes", "incretin"],
      summary: "A long-acting GLP-1 receptor agonist approved for type 2 diabetes and chronic weight management, given as a weekly injection or a daily tablet.",
      names: "Sold as Ozempic (weekly injection for type 2 diabetes), Wegovy (weekly injection for weight management) and Rybelsus (daily tablet for type 2 diabetes). Novo Nordisk developed it as the once-weekly successor to liraglutide. Semaglutide has large outcome trials behind it, so its clinical record below is long; most entries in the codex have little or none.",
      structure: "C<sub>187</sub>H<sub>291</sub>N<sub>45</sub>O<sub>59</sub>, molecular weight about 4113.6 g/mol. It is an analog of human GLP-1(7–37) with about 94% sequence homology. An Aib substitution at position 8 blocks cleavage by DPP-4. A C18 fatty diacid on lysine 26 lets it bind albumin, which slows renal clearance and gives it a half-life of about a week.",
      pubchem: "semaglutide",
      profile: {
        note: "Scored relative to other metabolic compounds in the codex at studied doses, not on an absolute scale.",
        rows: [
          { label: "Weight loss", score: 4 },
          { label: "Glycemic control", score: 5 },
          { label: "GI side effects", score: 3, neg: true },
          { label: "Risk load", score: 2, neg: true },
          { label: "Evidence quality", score: 5 }
        ]
      },
      risks: [
        { system: "Gastrointestinal", level: "moderate", text: "Nausea, vomiting, diarrhea and constipation are the most common adverse effects. They cluster during dose escalation.", evidence: "human rct", detail: "GI effects were the main reason for stopping treatment in the STEP and SELECT trials. Slow dose escalation is the standard way to reduce them." },
        { system: "Gallbladder", level: "low", text: "Higher rates of gallstones and cholecystitis than placebo", evidence: "human rct", detail: "Rapid weight loss itself raises gallstone risk, so part of the signal may come from weight loss rather than the drug." },
        { system: "Pancreas", level: "low", text: "Acute pancreatitis has been reported. Events are rare and whether the drug causes them is unsettled.", evidence: "contested", detail: "Large outcome trials did not show a clear excess, but the label carries a warning. Treatment is stopped if pancreatitis is suspected." },
        { system: "Retina", level: "moderate", text: "More diabetic retinopathy complications in people with type 2 diabetes in SUSTAIN-6", evidence: "human rct", detail: "The excess was concentrated in people with pre-existing retinopathy and was linked to rapid HbA1c reduction.", refs: [2] },
        { system: "Thyroid", level: "low", text: "Thyroid C-cell tumors occurred in rodents. Whether this is relevant to humans has not been established.", evidence: "animal", detail: "Carries a boxed warning. It is contraindicated with a personal or family history of medullary thyroid carcinoma or MEN2." },
        { system: "Lean mass", level: "moderate", text: "A meaningful share of the weight lost is lean mass", evidence: "human rct", detail: "This holds for most large weight losses, whatever the method. Resistance training and adequate protein are the usual countermeasures." },
        { system: "Eye", level: "unknown", text: "A retrospective record review found a higher rate of non-arteritic anterior ischemic optic neuropathy in people prescribed semaglutide", evidence: "contested", detail: "In a single-centre neuro-ophthalmology population, 17 events occurred among 194 people with type 2 diabetes prescribed semaglutide, against 6 among 516 prescribed other diabetes drugs (HR 4.28). The patients had been referred to a specialist eye hospital, so they are not representative, and no randomized trial has confirmed the finding.", refs: [404] }
      ],
      activity: [
        { title: "GLP-1 receptor", evidence: "human rct", summary: "Full agonist. Increases glucose-dependent insulin secretion and suppresses glucagon", detail: "The receptor response is glucose-dependent, so semaglutide on its own carries a low risk of hypoglycemia. The risk rises when it is combined with insulin or sulfonylureas.", refs: [26] },
        { title: "DPP-4 resistance", evidence: "established", summary: "The Aib substitution at position 8 blocks the enzyme that inactivates native GLP-1 within minutes", detail: "Native GLP-1 has a half-life of about two minutes. DPP-4 resistance is one of the two changes that turn it into a weekly drug.", refs: [26] },
        { title: "Albumin binding", evidence: "established", summary: "The fatty-acid side chain binds serum albumin, giving a half-life of about a week", detail: "Reversible albumin binding protects the peptide from renal filtration and from proteolysis.", refs: [26] },
        { title: "Gastric emptying", evidence: "human rct", summary: "Slows gastric emptying. The effect weakens with continued dosing", detail: "This drives early satiety and much of the nausea. It also matters for anesthesia because of the risk of aspiration." },
        { title: "Central appetite", evidence: "human rct", summary: "Lowers energy intake and food cravings through receptors in the hypothalamus and hindbrain", detail: "Studies of energy intake show lower ad libitum calorie consumption and less preference for high-fat foods. Appetite reduction, not a change in energy expenditure, appears to drive the weight loss." }
      ],
      trials: [
        { title: "STEP 1: Weight management without diabetes", evidence: "human rct", meta: ["1,961 adults, BMI ≥30 or ≥27 with a comorbidity, no diabetes", "semaglutide 2.4 mg weekly or placebo, plus lifestyle intervention", "68 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean body weight changed by −14.9% with semaglutide against −2.4% with placebo. 86.4% of the semaglutide group lost at least 5% of body weight, against 31.5% on placebo. GI events were the most common adverse effects.", note: "In the off-treatment extension, participants regained about two-thirds of the weight they had lost within a year of stopping. The effect lasts only while the drug is taken.", refs: [1, 4] },
        { title: "SUSTAIN-6: Cardiovascular safety in type 2 diabetes", evidence: "human rct", meta: ["3,297 adults with type 2 diabetes at high cardiovascular risk", "semaglutide 0.5 or 1.0 mg weekly or placebo", "104 weeks", "randomized, double-blind, non-inferiority"], body: "The primary composite of cardiovascular death, non-fatal MI or non-fatal stroke occurred in 6.6% on semaglutide against 8.9% on placebo (HR 0.74). Retinopathy complications were higher: 3.0% against 1.8%.", note: "This trial was designed to show non-inferiority, so the superiority finding was not pre-specified. SELECT later tested superiority directly.", refs: [2] },
        { title: "SELECT: Cardiovascular outcomes in obesity without diabetes", evidence: "human rct", meta: ["17,604 adults ≥45 years with established cardiovascular disease and BMI ≥27, no diabetes", "semaglutide 2.4 mg weekly or placebo", "mean follow-up 39.8 months", "randomized, double-blind, event-driven"], body: "Major adverse cardiovascular events occurred in 6.5% against 8.0% (HR 0.80). Treatment was stopped because of adverse events in 16.6% against 8.2%.", note: "This is the first trial to show a cardiovascular outcome benefit for an anti-obesity drug in people without diabetes.", refs: [3] },
        { title: "FLOW: Kidney outcomes in type 2 diabetes with chronic kidney disease", evidence: "human rct", meta: ["3,533 adults with type 2 diabetes and chronic kidney disease", "semaglutide 1.0 mg weekly or placebo", "median follow-up 3.4 years", "randomized, double-blind, placebo-controlled"], body: "The risk of the composite kidney outcome was 24% lower with semaglutide (331 against 410 first events; HR 0.76). The annual eGFR slope was less steep by 1.16 mL/min/1.73 m², major cardiovascular events were 18% lower and death from any cause 20% lower.", note: "The trial was stopped early at a prespecified interim analysis because the benefit was clear.", refs: [400] },
        { title: "STEP-HFpEF: Heart failure with preserved ejection fraction and obesity", evidence: "human rct", meta: ["529 adults with HFpEF and BMI ≥30, no diabetes", "semaglutide 2.4 mg weekly or placebo", "52 weeks", "randomized, double-blind, placebo-controlled"], body: "The symptom score (KCCQ-CSS) rose 16.6 points with semaglutide against 8.7 with placebo. Weight fell 13.3% against 2.6%, and six-minute walk distance improved by 20.3 m more. CRP fell 43.5% against 7.3%.", note: "Serious adverse events were less frequent on semaglutide than on placebo. That is unusual, and it reflects how much of the burden in this population comes from the obesity itself.", refs: [401] },
        { title: "STEP 4: What happens when it is stopped", evidence: "human rct", meta: ["803 adults who had reached semaglutide 2.4 mg weekly after a 20-week run-in", "continued semaglutide 2.4 mg weekly or switched to placebo", "48 weeks after randomization", "randomized withdrawal, double-blind"], body: "After a mean loss of 10.6% during the run-in, those who continued lost a further 7.9%, while those switched to placebo regained 6.9%.", note: "This is the clearest available evidence that the effect depends on continued dosing rather than on a change that persists after stopping.", refs: [402] },
        { title: "ESSENCE: Steatohepatitis with fibrosis", evidence: "human rct", meta: ["800 adults with biopsy-confirmed MASH and fibrosis stage 2 or 3", "semaglutide 2.4 mg weekly or placebo", "72 weeks to the biopsy endpoint", "randomized, double-blind, placebo-controlled"], body: "Steatohepatitis resolved without worsening fibrosis in 62.9% on semaglutide against 34.3% on placebo. Fibrosis improved without worsening steatohepatitis in 36.8% against 22.4%. Mean weight change was −10.5% against −2.0%.", refs: [403] }
      ],
      related: ["tirzepatide", "retatrutide"]
    },
    {
      slug: "tirzepatide", type: "compound", name: "Tirzepatide",
      aliases: ["Mounjaro", "Zepbound", "LY3298176"], category: "metabolic", status: "Approved",
      class: "Dual GIP / GLP-1 receptor agonist", developer: "Eli Lilly",
      added: "2026-01-12", updated: "2026-10-17",
      tags: ["GIP", "GLP-1", "obesity", "type 2 diabetes", "incretin"],
      summary: "A once-weekly peptide that activates both the GIP and GLP-1 receptors, approved for type 2 diabetes and chronic weight management.",
      names: "Sold as Mounjaro for type 2 diabetes and Zepbound for weight management, both once-weekly injections. Its development code was LY3298176. It was the first approved drug to activate two incretin receptors.",
      structure: "C<sub>225</sub>H<sub>348</sub>N<sub>48</sub>O<sub>68</sub>, molecular weight about 4813.5 g/mol. It is a 39-amino-acid peptide built on the GIP sequence, with Aib residues at positions 2 and 13 and a C20 fatty diacid on lysine 20 for albumin binding. Its half-life is about 5 days.",
      pubchem: "tirzepatide",
      profile: {
        note: "Scored relative to other metabolic compounds in the codex at studied doses.",
        rows: [
          { label: "Weight loss", score: 5 },
          { label: "Glycemic control", score: 5 },
          { label: "GI side effects", score: 3, neg: true },
          { label: "Risk load", score: 2, neg: true },
          { label: "Evidence quality", score: 5 }
        ]
      },
      risks: [
        { system: "Gastrointestinal", level: "moderate", text: "Nausea, diarrhea, vomiting and constipation, mostly during dose escalation", evidence: "human rct", detail: "The profile is similar to selective GLP-1 agonists. Rates rise with dose." },
        { system: "Gallbladder", level: "low", text: "Gallbladder events are more frequent than with placebo", evidence: "human rct" },
        { system: "Pancreas", level: "low", text: "Pancreatitis is a labeled warning. Events are rare", evidence: "contested" },
        { system: "Thyroid", level: "low", text: "C-cell tumors in rodents. Relevance to humans is unknown", evidence: "animal", detail: "Carries the same boxed warning as other long-acting GLP-1 agonists." },
        { system: "Hypoglycemia", level: "low", text: "Low risk on its own. Higher when combined with insulin or sulfonylureas", evidence: "established" }
      ],
      activity: [
        { title: "GIP receptor", evidence: "in vitro", summary: "Potency at the GIP receptor is similar to native GIP", detail: "The molecule is deliberately imbalanced: it favors the GIP receptor and is several-fold weaker than native GLP-1 at the GLP-1 receptor.", refs: [25] },
        { title: "GLP-1 receptor", evidence: "in vitro", summary: "A biased agonist that favors cAMP signaling over β-arrestin recruitment", detail: "Biased signaling may reduce receptor internalisation. Whether this explains its larger clinical effect is still debated.", refs: [25] },
        { title: "Insulin sensitivity", evidence: "human rct", summary: "Improves insulin sensitivity more than its weight loss alone would predict", detail: "Clamp studies suggest a GIP-related contribution in addition to weight reduction." }
      ],
      trials: [
        { title: "SURPASS-2: Against semaglutide 1 mg in type 2 diabetes", evidence: "human rct", meta: ["1,879 adults with type 2 diabetes on metformin", "tirzepatide 5, 10 or 15 mg weekly or semaglutide 1 mg weekly", "40 weeks", "randomized, open-label, active-controlled"], body: "HbA1c fell by 2.01, 2.24 and 2.30 percentage points with the three tirzepatide doses, against 1.86 with semaglutide 1 mg. Weight reductions were also larger at every tirzepatide dose.", note: "The comparator was semaglutide 1 mg, not the 2.0 mg or 2.4 mg doses used later.", refs: [5] },
        { title: "SURMOUNT-1: Weight management without diabetes", evidence: "human rct", meta: ["2,539 adults, BMI ≥30 or ≥27 with a comorbidity, no diabetes", "tirzepatide 5, 10 or 15 mg weekly or placebo", "72 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −15.0%, −19.5% and −20.9% across the three doses, against −3.1% with placebo.", refs: [6] },
        { title: "SURMOUNT-5: Head to head with semaglutide in obesity", evidence: "human rct", meta: ["751 adults with obesity, no diabetes", "tirzepatide at maximum tolerated dose or semaglutide at maximum tolerated dose", "72 weeks", "randomized, open-label"], body: "Mean weight change was −20.2% with tirzepatide against −13.7% with semaglutide.", note: "This is the first direct comparison of the two drugs at their obesity doses.", refs: [7] },
        { title: "SURPASS-CVOT: Cardiovascular outcomes against dulaglutide", evidence: "human rct", meta: ["13,165 adults with type 2 diabetes and atherosclerotic cardiovascular disease", "tirzepatide or dulaglutide 1.5 mg weekly", "event-driven follow-up", "randomized, double-blind, active-controlled non-inferiority"], body: "A primary endpoint event occurred in 12.2% on tirzepatide and 13.1% on dulaglutide (HR 0.92). Non-inferiority was met; superiority was not (p = 0.09).", note: "The comparator was an active drug already shown to reduce events, so this shows tirzepatide is not worse, not that it is better. Gastrointestinal adverse events were more common on tirzepatide; the overall adverse event profile was otherwise similar.", refs: [407] },
        { title: "SURMOUNT-OSA: Obstructive sleep apnea with obesity", evidence: "human rct", meta: ["469 adults with moderate-to-severe obstructive sleep apnea and obesity, in two trials (without and with PAP therapy)", "tirzepatide at maximum tolerated dose (10 or 15 mg weekly) or placebo", "52 weeks", "two randomized, double-blind, placebo-controlled trials"], body: "From baselines around 50 events per hour, the apnea-hypopnea index fell by 25.3 events per hour against 5.3 with placebo in the trial without PAP, and by 29.3 against 5.5 in the trial with PAP.", refs: [405] },
        { title: "SUMMIT: Heart failure with preserved ejection fraction and obesity", evidence: "human rct", meta: ["731 adults with HFpEF and BMI ≥30", "tirzepatide up to 15 mg weekly or placebo", "median follow-up 104 weeks", "randomized, double-blind, placebo-controlled"], body: "Cardiovascular death or a worsening heart failure event occurred in 9.9% on tirzepatide against 15.3% on placebo (HR 0.62). The difference came from worsening heart failure events rather than deaths. The symptom score improved 19.5 points against 12.7.", refs: [406] },
        { title: "SURMOUNT-4: What happens when it is stopped", evidence: "human rct", meta: ["670 adults who had lost a mean 20.9% during a 36-week open-label lead-in", "continued tirzepatide 10 or 15 mg weekly or switched to placebo", "52 weeks after randomization", "randomized withdrawal, double-blind"], body: "Those who continued lost a further 5.5%; those switched to placebo regained 14.0%. Among those who continued, 89.5% kept at least 80% of the weight they had lost.", refs: [408] }
      ],
      related: ["semaglutide", "retatrutide"]
    },
    {
      slug: "retatrutide", type: "compound", name: "Retatrutide",
      aliases: ["LY3437943"], category: "metabolic", status: "Investigational",
      class: "Triple GIP / GLP-1 / glucagon receptor agonist", developer: "Eli Lilly",
      added: "2026-02-03", updated: "2026-10-17",
      tags: ["GIP", "GLP-1", "glucagon", "obesity", "triple agonist"],
      summary: "An investigational once-weekly peptide that activates three receptors (GIP, GLP-1 and glucagon) and is in Phase 3 trials for obesity.",
      names: "Known by its development code LY3437943. It has no brand name and is not approved anywhere. It is available legitimately only inside clinical trials. Material sold online under this name is unregulated and unverified.",
      structure: "A single peptide built on a GIP-like backbone, with a fatty-acid moiety for once-weekly dosing. It is engineered to activate three receptors. The glucagon activity is the addition over tirzepatide.",
      pubchem: "retatrutide",
      profile: {
        note: "Scored relative to other metabolic compounds in the codex. Risk load is scored higher because long-term data do not yet exist.",
        rows: [
          { label: "Weight loss", score: 5 },
          { label: "Glycemic control", score: 4 },
          { label: "GI side effects", score: 3, neg: true },
          { label: "Risk load", score: 3, neg: true },
          { label: "Evidence quality", score: 3 }
        ]
      },
      risks: [
        { system: "Gastrointestinal", level: "moderate", text: "Nausea, vomiting and diarrhea, dose-related and mostly early", evidence: "human rct", detail: "Lower starting doses reduced GI events in the phase 2 trial.", refs: [8] },
        { system: "Heart rate", level: "moderate", text: "Resting heart rate rose with dose, peaked around 24 weeks, then declined", evidence: "human rct", refs: [8] },
        { system: "Long-term safety", level: "unknown", text: "No long-term outcome data. The longest published trials ran 80 weeks", evidence: "unknown", refs: [410, 411] },
        { system: "Product quality", level: "high", text: "Material sold outside trials is unregulated. Its identity, dose and sterility are unknown", evidence: "established" },
        { system: "Sensory nerves", level: "moderate", text: "Dysesthesia, an abnormal skin sensation, occurred more often than with placebo and more often at higher doses", evidence: "human rct", detail: "Lilly's topline release for TRIUMPH-1 reported dysesthesia in 5.1%, 12.3% and 12.5% at 4, 9 and 12 mg, against 0.9% on placebo, mostly mild to moderate and mostly resolving during treatment. The peer-reviewed NEJM report states only that gastrointestinal events were the most common, so these per-dose figures come from the sponsor, not the paper.", refs: [410, 477] },
        { system: "Discontinuation", level: "moderate", text: "Stopping because of an adverse event rose with dose", evidence: "human rct", detail: "In the sponsor's TRIUMPH-1 release, 4.1%, 6.9% and 11.3% stopped at 4, 9 and 12 mg, against 4.9% on placebo. These figures are from the sponsor, not a peer-reviewed paper.", refs: [477] }
      ],
      activity: [
        { title: "Glucagon receptor", evidence: "human rct", summary: "Adds glucagon receptor agonism, which is thought to raise energy expenditure and liver fat oxidation", detail: "Glucagon raises blood glucose on its own. In this molecule the incretin activity offsets that effect.", refs: [8] },
        { title: "GIP and GLP-1 receptors", evidence: "human rct", summary: "Incretin agonism similar to tirzepatide drives the appetite and insulin effects", refs: [8, 9] },
        { title: "Liver fat", evidence: "human rct", summary: "Large reductions in liver fat in a phase 2 substudy", detail: "Most participants with fatty liver at baseline reached normal liver fat levels at higher doses." }
      ],
      trials: [
        { title: "Phase 2: Obesity without diabetes", evidence: "human rct", meta: ["338 adults, BMI ≥30 or ≥27 with a comorbidity", "retatrutide 1, 4, 8 or 12 mg weekly or placebo", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change at 48 weeks was −8.7%, −17.1%, −22.8% and −24.2% across the four doses, against −2.1% with placebo. Weight was still falling at 48 weeks in the higher-dose groups.", note: "These are the largest mean reductions reported for a drug in a trial of this length. This was phase 2, with small arms. The phase 3 TRIUMPH-1 trial later reported reductions of a similar size over 80 weeks.", refs: [8] },
        { title: "Phase 2: Type 2 diabetes", evidence: "human rct", meta: ["281 adults with type 2 diabetes", "retatrutide at several doses, placebo, or dulaglutide 1.5 mg", "36 weeks", "randomized, double-blind, active and placebo-controlled"], body: "HbA1c fell by up to about 2 percentage points at 24 weeks. Weight fell by up to about 17% at 36 weeks at the highest dose.", refs: [9] },
        { title: "TRIUMPH-1: Obesity without diabetes", evidence: "human rct", meta: ["2,339 adults with obesity, no diabetes", "retatrutide 4, 9 or 12 mg weekly or placebo", "80 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −17.6%, −23.7% and −25.0% across the three doses, against −3.9% with placebo. In the 574 participants with knee osteoarthritis, pain scores fell more than with placebo. In the 243 with obstructive sleep apnea, the apnea-hypopnea index fell by 22.9 to 34.3 events per hour against 9.9.", note: "This is the largest weight reduction recorded in a phase 3 obesity trial to date. The most common adverse events were gastrointestinal.", refs: [410] },
        { title: "TRIUMPH-2: Obesity with type 2 diabetes", evidence: "human rct", meta: ["1,152 adults with BMI ≥27 and type 2 diabetes, 92% on oral glucose-lowering drugs", "retatrutide 4, 9 or 12 mg weekly or placebo", "80 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change was −11.9%, −16.8% and −18.8%, against −5.1% with placebo. Diarrhea occurred in 27% at 4 mg and 34% at 9 mg, against a lower rate on placebo.", note: "Weight loss was smaller than in people without diabetes, the usual pattern across this drug class.", refs: [411] },
        { title: "Phase 2a in steatotic liver disease", evidence: "human rct", meta: ["98 adults with MASLD and at least 10% liver fat", "retatrutide 1, 4, 8 or 12 mg weekly or placebo", "48 weeks", "randomized, double-blind, placebo-controlled sub-study"], body: "Liver fat measured by MRI-PDFF fell in a dose-dependent way, alongside weight loss.", note: "This was a sub-study of the phase 2 obesity trial rather than a separate trial.", refs: [413] }
      ],
      related: ["tirzepatide", "semaglutide"]
    },

    /* ------------------------------------------------------------ repair */
    {
      slug: "bpc-157", type: "compound", name: "BPC-157",
      aliases: ["Body Protection Compound-157", "PL 14736", "PL-10", "Bepecin"], category: "repair", status: "Research only",
      class: "Synthetic pentadecapeptide", developer: "University of Zagreb (research origin)",
      added: "2026-01-20", updated: "2026-10-17",
      tags: ["gut", "tendon", "angiogenesis", "preclinical"],
      summary: "A 15-amino-acid peptide derived from a protein found in gastric juice. It is widely studied in animal models of tissue and gut injury but has very little human clinical data.",
      names: "Also called PL 14736 or PL-10 in development, and sold as BPC 15 or \"Body Protection Compound\". It is not a licensed medicine anywhere. Everything sold under the name comes from research-chemical vendors. Most of the published literature comes from one research group in Zagreb, which is the most important fact about this entry.",
      structure: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val. C<sub>62</sub>H<sub>98</sub>N<sub>16</sub>O<sub>22</sub>, molecular weight about 1419.5 g/mol. It is described as stable in gastric juice, and the oral-use claims rest on this. Stability in the gut does not by itself establish oral bioavailability in humans.",
      pubchem: "BPC 157",
      profile: {
        note: "Risk load reflects the absence of human safety data rather than observed harms.",
        rows: [
          { label: "Preclinical signal", score: 4 },
          { label: "Human evidence", score: 1 },
          { label: "Risk load", score: 2, neg: true },
          { label: "Evidence quality", score: 1 }
        ]
      },
      risks: [
        { system: "Human safety", level: "unknown", text: "No controlled human safety data exist", evidence: "unknown", detail: "The absence of reported harm reflects the absence of trials, not evidence of safety." },
        { system: "Angiogenesis", level: "unknown", text: "Pro-angiogenic signaling raises a theoretical concern about tumor growth", evidence: "contested", detail: "No study has shown this effect. The concern is mechanistic: anything that promotes new blood vessels could in principle support existing tumors." },
        { system: "Product quality", level: "high", text: "Vendor material is unregulated. Purity, dose and sterility are unverified", evidence: "established", detail: "The FDA placed BPC-157 on its list of bulk substances that raise significant safety concerns for compounding, citing a lack of human safety data and risks from impurities." },
        { system: "Sport", level: "moderate", text: "Prohibited by WADA as an unapproved substance (S0)", evidence: "established" },
        { system: "Evidence base", level: "moderate", text: "The published human record is three uncontrolled studies with 30 people in total, all from one clinic group", evidence: "human obs", detail: "A 2026 systematic review found only these three studies. It judged all of them poor quality and rated the certainty of evidence very low.", refs: [600, 601, 602, 603] },
        { system: "Unreported trial", level: "unknown", text: "A phase 1 safety trial registered in 2015 has no posted or published results", evidence: "established", detail: "Whatever that trial found about safety or absorption is unknown.", refs: [604] }
      ],
      activity: [
        { title: "Angiogenesis / VEGFR2", evidence: "animal", summary: "Promotes new blood vessel formation in injury models, with VEGFR2 signaling proposed", detail: "Most data come from rodent models of tendon, muscle, gut and vascular injury.", refs: [10] },
        { title: "Nitric oxide system", evidence: "animal", summary: "Reported to modulate nitric oxide pathways and to counteract both NOS blockers and NO donors", refs: [10] },
        { title: "Tendon fibroblasts", evidence: "in vitro", summary: "Increased fibroblast outgrowth, migration and growth hormone receptor expression in cultured tendon cells", detail: "These findings are cell-culture results. They do not by themselves predict an effect on tendon healing in humans." }
      ],
      trials: [
        { title: "Pilot: bladder injection for interstitial cystitis", evidence: "human obs", meta: ["12 women aged 39–76 with moderate to severe interstitial cystitis that had not responded to pentosan polysulfate", "BPC-157 10 mg total from a 503A compounding pharmacy, injected around the inflamed area of the bladder during one cystoscopy", "single procedure; follow-up length not reported", "uncontrolled single-clinic pilot"], body: "Ten of 12 reported complete resolution of symptoms. The other two reported about 80% improvement. No adverse events were reported.", note: "There was no control group and no blinding, and the outcome was self-rated at one private clinic. Interstitial cystitis has a large placebo response. A 2026 systematic review graded this study poor quality.", refs: [600, 603] },
        { title: "Retrospective: knee injection for mixed knee pain", evidence: "human obs", meta: ["16 patients with knee pain from mixed causes at one clinic", "intra-articular BPC-157 alone (12) or with thymosin β4 (4); dose not reported", "most injected 6–12 months before follow-up", "retrospective chart review with a telephone survey"], body: "Eleven of 12 who received BPC-157 alone, and 3 of 4 who received the combination, reported meaningful pain relief. No validated pain, function or imaging measures were used.", note: "This is a recall-based phone survey with no comparison group. It cannot separate any effect of the peptide from placebo or natural recovery.", refs: [601, 603] },
        { title: "Pilot: intravenous safety in two adults", evidence: "human obs", meta: ["2 adults aged 58 and 68 who had received IV BPC-157 before", "10 mg in 250 mL saline over 1 hour on day 1, then 20 mg on day 2", "3 days", "uncontrolled safety pilot"], body: "Heart, liver, kidney, thyroid and glucose markers did not change. No side effects were reported.", note: "Two people followed for three days cannot establish safety. The study shows only that these two had no acute problem.", refs: [602] },
        { title: "Registered trials without results", evidence: "unknown", meta: ["42 healthy volunteers planned (PCO-02, PharmaCotherapia, Zagreb)", "oral 1 mg BPC-157 tablets: single doses of 1, 3 or 6 tablets, then 3 tablets every 8 hours for 2 weeks, against placebo", "registered start October 2015; status unknown", "phase 1, placebo-controlled"], body: "No results have been posted or published. A separate randomized, placebo-controlled phase 2 trial of daily subcutaneous BPC-157 for 14 days in grade II hamstring strain (120 planned) began recruiting in 2026. Earlier, PL 14736 entered a phase 2 trial for ulcerative colitis in the 2000s, and no peer-reviewed results were published.", note: "The only formal human safety study on record has never reported, and that gap is itself information. The hamstring trial would be the first randomized test of BPC-157 in an injury.", refs: [604, 605] }
      ],
      related: ["tb-500", "ghk-cu"]
    },
    {
      slug: "tb-500", type: "compound", name: "TB-500",
      aliases: ["Thymosin beta-4 fragment", "Tβ4 (17–23)"], category: "repair", status: "Research only",
      class: "Synthetic fragment of thymosin β4", developer: "N/A",
      added: "2026-01-20", updated: "2026-10-17",
      tags: ["actin", "wound healing", "preclinical", "WADA prohibited"],
      summary: "A synthetic peptide based on the active region of thymosin beta-4, a naturally occurring actin-binding protein involved in cell migration and wound repair.",
      names: "TB-500 is a vendor name, not a pharmacological one. It usually refers to a fragment of thymosin β4 (Tβ4), but some products sold under the name are full-length Tβ4. Clinical research on full-length Tβ4 includes eye drops (RGN-259) for dry eye and neurotrophic keratitis. None of that research applies directly to the fragment.",
      structure: "Commonly described as the acetylated 17–23 fragment of Tβ4 (LKKTETQ), the actin-binding motif. Full-length Tβ4 is a 43-amino-acid protein that is abundant in platelets and white blood cells.",
      pubchem: false,
      profile: {
        rows: [
          { label: "Preclinical signal", score: 3 },
          { label: "Human evidence", score: 1 },
          { label: "Risk load", score: 2, neg: true },
          { label: "Evidence quality", score: 1 }
        ]
      },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data for the fragment", evidence: "unknown" },
        { system: "Product identity", level: "high", text: "The same name is used for different molecules", evidence: "established" },
        { system: "Sport", level: "moderate", text: "Prohibited by WADA, with positive tests in horse racing and human sport", evidence: "established" },
        { system: "Evidence transfer", level: "moderate", text: "Every human trial used full-length thymosin β4 as eye drops, topical gel or IV infusion. None tested the 17–23 fragment", evidence: "established", detail: "The fragment is a 7-amino-acid piece of a 43-amino-acid protein. Neither the benefits nor the safety findings of those trials can be assumed to carry over.", refs: [606, 608, 609, 610, 611] },
        { system: "Angiogenesis", level: "unknown", text: "Thymosin β4 promotes blood vessel growth and cell migration, a theoretical concern with existing tumors", evidence: "contested", detail: "No human study has shown this effect. The concern is mechanistic, as for BPC-157.", refs: [11] }
      ],
      activity: [
        { title: "G-actin sequestration", evidence: "established", summary: "Full-length Tβ4 binds monomeric actin and regulates its polymerisation", refs: [11] },
        { title: "Cell migration and angiogenesis", evidence: "animal", summary: "Promotes keratinocyte and endothelial cell migration in wound models", refs: [11] },
        { title: "Anti-inflammatory signaling", evidence: "animal", summary: "Reduced inflammatory signaling in models of cardiac and corneal injury", refs: [11] }
      ],
      trials: [
        { title: "Full-length Tβ4 eye drops (RGN-259): severe dry eye", evidence: "human rct", meta: ["9 patients with severe dry eye, including graft-versus-host disease", "RGN-259 (thymosin β4 0.1%) eye drops 6 times daily, or vehicle", "28 days of treatment plus 28 days of follow-up", "randomized, double-masked, placebo-controlled, phase 2"], body: "At day 56 the treated group had 35% less ocular discomfort and 59% less corneal staining than vehicle. The drops were well tolerated. In a larger 72-person phase 2 trial in moderate to severe dry eye, neither primary endpoint differed from placebo.", note: "This is full-length thymosin β4 applied to the eye. It tells us nothing about injected TB-500.", refs: [606, 607] },
        { title: "Full-length Tβ4 eye drops (RGN-259): neurotrophic keratopathy", evidence: "human rct", meta: ["18 patients with stage 2–3 neurotrophic keratopathy", "RGN-259 0.1% eye drops or placebo", "4 weeks of treatment, follow-up to day 43", "randomized, double-masked, placebo-controlled, phase 3"], body: "At 4 weeks, 6 of 10 treated eyes had completely healed, against 1 of 8 on placebo (p = 0.066), which missed conventional significance. Comfort scores improved and no significant adverse effects were seen.", note: "Very small for a phase 3 trial. Sponsor employees designed it, and the main healing result was a trend, not a significant effect.", refs: [608] },
        { title: "Full-length Tβ4 topical gel: venous leg ulcers", evidence: "human rct", meta: ["73 patients with venous stasis ulcers at 8 European sites", "topical Tβ4 at escalating concentrations, or placebo", "duration not reported", "randomized, double-blind, placebo-controlled, dose-escalation, phase 2"], body: "Safety was comparable to placebo. The authors reported a possible effect on healing at 0.03%, with about a quarter of patients fully healed within 3 months.", note: "The trial reports efficacy only descriptively, without effect sizes against placebo.", refs: [609] },
        { title: "Full-length Tβ4 intravenous: healthy volunteers", evidence: "human rct", meta: ["4 cohorts of 10 healthy adults", "single IV doses of 42, 140, 420 or 1260 mg synthetic Tβ4 or placebo, then the same dose daily for 14 days", "14 days", "randomized, placebo-controlled, phase 1"], body: "Adverse events were infrequent and mild or moderate. There were no dose-limiting toxicities or serious adverse events.", note: "This is short-term tolerability of the full protein, given by vein, in 40 people. It is not safety data for the fragment sold as TB-500.", refs: [610] }
      ],
      related: ["bpc-157", "thymosin-alpha-1"]
    },

    /* ------------------------------------------------------------ skin */
    {
      slug: "ghk-cu", type: "compound", name: "GHK-Cu",
      aliases: ["Copper peptide", "Copper tripeptide-1"], category: "skin", status: "Approved",
      class: "Copper-binding tripeptide", developer: "Discovered by Loren Pickart (1973)",
      added: "2026-02-10", updated: "2026-10-17",
      tags: ["collagen", "cosmetic", "copper", "skin"],
      summary: "A naturally occurring tripeptide–copper complex found in human plasma. It is widely used in topical cosmetics for its effects on skin remodelling.",
      names: "Listed on cosmetic labels as copper tripeptide-1. It was first isolated from human plasma by Loren Pickart in 1973. The \"Approved\" status here covers cosmetic use only; GHK-Cu is not an approved drug. Injectable products sold by peptide vendors fall outside that cosmetic status.",
      structure: "Glycyl-L-histidyl-L-lysine complexed with copper(II). The GHK peptide alone has a molecular weight of about 340.4 g/mol. Reported plasma levels fall with age.",
      pubchem: "GHK-Cu",
      profile: {
        note: "Scored for topical use.",
        rows: [
          { label: "Topical skin effect", score: 3 },
          { label: "Evidence quality", score: 2 },
          { label: "Risk load", score: 1, neg: true }
        ]
      },
      risks: [
        { system: "Skin", level: "low", text: "Occasional irritation with topical use", evidence: "anecdotal" },
        { system: "Injectable use", level: "unknown", text: "Systemic dosing of copper peptides has no human safety data", evidence: "unknown" },
        { system: "Evidence base", level: "moderate", text: "The peer-reviewed human trials are one 1994 ulcer trial and one 13-patient laser study, and the laser study's objective endpoints were negative", evidence: "human rct", detail: "Most cosmetic claims rest on small, manufacturer-linked studies that are not indexed in PubMed.", refs: [612, 613] }
      ],
      activity: [
        { title: "Collagen and GAG synthesis", evidence: "in vitro", summary: "Increases collagen and glycosaminoglycan synthesis in fibroblast cultures", refs: [12, 13] },
        { title: "Wound remodelling", evidence: "animal", summary: "Accelerated wound contraction and healing in animal models", refs: [13] },
        { title: "Gene expression", evidence: "in vitro", summary: "Connectivity-map analyses suggest it shifts the expression of many repair-related genes", detail: "These are computational analyses of expression data, not clinical outcomes.", refs: [13] }
      ],
      trials: [
        { title: "Topical GHK-Cu gel: diabetic foot ulcers", evidence: "human rct", meta: ["patients with diabetic neuropathic ulcers, mostly plantar; number not reported", "GHK-Cu gel (Iamin Gel) at a metered daily dose, or vehicle, alongside standardized wound care", "duration not reported", "multicenter, randomized, evaluator-blinded, vehicle-controlled"], body: "Median closure of plantar ulcers was 98.5% with the gel against 60.8% with vehicle. Ulcer infections were less common (7% against 34%). The effect was largest in ulcers over 100 mm².", note: "This is a single trial from 1994, and no published replication was found. It tested a wound gel on open ulcers, not a cosmetic product on intact skin.", refs: [612] },
        { title: "Topical GHK-Cu after CO2 laser resurfacing", evidence: "human rct", meta: ["13 patients after circumoral CO2 laser resurfacing", "skin care regimen with or without GHK-Cu", "12 weeks", "randomized, blinded-evaluator"], body: "There was no difference in redness, wrinkles or overall skin quality on objective or blinded assessment. Patient-rated satisfaction was higher with GHK-Cu (p = 0.04).", note: "The objective endpoints were negative. Only the unblinded patient questionnaire favored the copper peptide. There is still no large randomized trial, and most topical cosmetic studies are small and manufacturer-sponsored.", refs: [613] }
      ],
      related: ["bpc-157"]
    },

    /* ------------------------------------------------------------ gh axis */
    {
      slug: "ipamorelin", type: "compound", name: "Ipamorelin",
      aliases: ["NNC 26-0161"], category: "gh", status: "Research only",
      class: "Growth hormone secretagogue (ghrelin receptor agonist)", developer: "Novo Nordisk (1990s)",
      added: "2026-03-01", updated: "2026-10-17",
      tags: ["GHS-R1a", "growth hormone", "pentapeptide"],
      summary: "A selective pentapeptide agonist of the ghrelin receptor. It triggers growth hormone release with little effect on cortisol or prolactin.",
      names: "Developed by Novo Nordisk in the 1990s as NNC 26-0161. Helsinn later licensed it for postoperative ileus. It never received approval, and today it is sold only as a research chemical.",
      structure: "Aib-His-D-2-Nal-D-Phe-Lys-NH<sub>2</sub>, molecular weight about 711.9 g/mol. The unnatural amino acids make it resistant to proteolysis. It was presented as the first selective GH secretagogue.",
      pubchem: "ipamorelin",
      profile: {
        rows: [
          { label: "GH release", score: 3 },
          { label: "Selectivity", score: 4 },
          { label: "Risk load", score: 2, neg: true },
          { label: "Evidence quality", score: 2 }
        ]
      },
      risks: [
        { system: "Glucose", level: "low", text: "Raising GH can reduce insulin sensitivity", evidence: "contested", detail: "This is a class effect of raising growth hormone. It has not been quantified for ipamorelin in long-term human use." },
        { system: "Sport", level: "moderate", text: "Prohibited by WADA as a GH secretagogue", evidence: "established" },
        { system: "Long-term safety", level: "unknown", text: "No human study has run longer than 7 days of repeated dosing, so nothing is known about effects beyond a week", evidence: "unknown", detail: "The 2014 ileus trial dosed for up to 7 days. The only other human data are single infusions.", refs: [15, 306] },
        { system: "Product quality", level: "moderate", text: "Sold only as a research chemical or through compounding. In 2023 the FDA placed ipamorelin acetate on its Category 2 list of bulk substances with significant safety risks, citing immunogenicity and impurities. The nomination was later withdrawn", evidence: "established", detail: "The regulatory status of compounded peptides has changed more than once. The current FDA 503A bulks list is the reliable source, not any snapshot.", refs: [352] }
      ],
      activity: [
        { title: "Ghrelin receptor (GHS-R1a)", evidence: "animal", summary: "Agonist that triggers GH release from the pituitary", refs: [14] },
        { title: "Selectivity", evidence: "animal", summary: "Did not raise ACTH or cortisol at doses well above those that release GH", detail: "This set it apart from GHRP-6 and GHRP-2, which raise cortisol and prolactin. The data come mainly from studies in swine.", refs: [14] }
      ],
      trials: [
        { title: "Dose-escalation pharmacokinetics and GH response in healthy men", evidence: "human rct", meta: ["40 healthy men, eight per dose level", "ipamorelin infused intravenously at 4.21, 14.02, 42.13, 84.27 or 140.45 nmol/kg over 15 minutes", "single doses", "dose-escalation pharmacokinetic and pharmacodynamic study"], body: "Kinetics were dose-proportional, with a terminal half-life of about 2 hours, clearance of 0.078 L/h/kg and a steady-state volume of distribution of 0.22 L/kg. Every dose level triggered a single episode of GH release that peaked at about 0.67 hours and then fell to negligible levels.", note: "This is the only published human dose-ranging work on ipamorelin, and it measured GH release, not any clinical outcome. The single-pulse pattern is the key finding: the pituitary response is self-limiting.", refs: [306] },
        { title: "Postoperative ileus after bowel resection", evidence: "human rct", meta: ["about 114 adults undergoing bowel resection", "ipamorelin 0.03 mg/kg IV twice daily or placebo, for up to 7 days", "proof of concept", "randomized, double-blind, placebo-controlled"], body: "There was no significant difference between groups in time to the first tolerated meal. The drug was well tolerated.", note: "This is the only published efficacy trial. It was negative on its primary endpoint, and development for the indication did not continue.", refs: [15] }
      ],
      related: ["cjc-1295"]
    },
    {
      slug: "cjc-1295", type: "compound", name: "CJC-1295",
      aliases: ["CJC-1295 with DAC", "DAC:GRF"], category: "gh", status: "Research only",
      class: "GHRH analog", developer: "ConjuChem",
      added: "2026-03-01", updated: "2026-10-17",
      tags: ["GHRH", "growth hormone", "albumin binding"],
      summary: "A synthetic analog of growth-hormone-releasing hormone (GHRH). The DAC version binds albumin and stays in the body for days rather than minutes.",
      names: "Developed by ConjuChem. Clinical development stopped in 2006. Vendors often sell \"CJC-1295 without DAC\"; that compound is more accurately called Modified GRF (1-29), a different molecule with a half-life of about 30 minutes.",
      structure: "GHRH(1-29) with four substitutions (D-Ala2, Gln8, Ala15, Leu27) that resist enzymatic breakdown, plus a C-terminal lysine carrying a maleimide group (the Drug Affinity Complex). The DAC binds covalently to albumin, which extends the half-life to roughly 6–8 days.",
      pubchem: "CJC-1295",
      profile: {
        rows: [
          { label: "GH / IGF-1 elevation", score: 4 },
          { label: "Risk load", score: 3, neg: true },
          { label: "Evidence quality", score: 2 }
        ]
      },
      risks: [
        { system: "Injection site", level: "moderate", text: "Injection-site reactions were the most common adverse effect", evidence: "human rct", refs: [16] },
        { system: "Vasodilation", level: "low", text: "Transient flushing and headache", evidence: "human rct", refs: [16] },
        { system: "GH excess", level: "moderate", text: "Elevated IGF-1 lasting weeks brings the class risks of GH excess, such as fluid retention and insulin resistance", evidence: "contested", detail: "A single dose raises IGF-1 for 9 to 11 days, and repeated dosing keeps it raised for at least 28 days, so exposure cannot be dialled back quickly once it is on.", refs: [16] },
        { system: "Development status", level: "moderate", text: "Clinical development stopped in 2006 and no phase 2 efficacy trial was ever published, so no human outcome beyond hormone levels has been measured", evidence: "established", refs: [16] },
        { system: "Product quality", level: "moderate", text: "In 2023 the FDA placed CJC-1295 on its Category 2 list of bulk substances with significant safety risks, citing immunogenicity. The nomination was later withdrawn. Vendors also often sell Modified GRF (1-29) under this name", evidence: "established", refs: [352] }
      ],
      activity: [
        { title: "GHRH receptor", evidence: "human rct", summary: "Agonist that increases GH secretion from the pituitary", refs: [16] },
        { title: "Pulsatility", evidence: "human rct", summary: "GH pulses persisted, with a large rise in trough GH levels", detail: "Continuous GHRH stimulation did not abolish the natural pulsatile pattern of GH release.", refs: [17] }
      ],
      trials: [
        { title: "Single and repeated dosing in healthy adults", evidence: "human rct", meta: ["healthy adults aged 21–61", "single subcutaneous doses of 30–250 µg/kg, or repeated doses, or placebo", "up to 28 days of follow-up", "randomized, double-blind, placebo-controlled"], body: "After a single dose, GH rose 2- to 10-fold for 6 days or more, and IGF-1 rose 1.5- to 3-fold for 9 to 11 days. The estimated half-life was 5.8 to 8.1 days. Repeated dosing kept IGF-1 raised for up to 28 days.", refs: [16] },
        { title: "Whether pulsatility survives continuous stimulation", evidence: "human rct", meta: ["healthy young men", "CJC-1295 as a single subcutaneous dose, with frequent blood sampling", "sampling over days after dosing", "controlled pharmacodynamic study"], body: "GH secretion stayed pulsatile during continuous GHRH-receptor stimulation. Pulse frequency was unchanged and trough GH levels rose markedly.", note: "This is the direct test of the claim that CJC-1295 preserves the natural GH rhythm. It does, but by lifting the troughs rather than leaving the pattern untouched.", refs: [308] }
      ],
      related: ["ipamorelin"]
    },

    /* ------------------------------------------------------------ longevity */
    {
      slug: "epitalon", type: "compound", name: "Epitalon",
      aliases: ["Epithalon", "AEDG peptide"], category: "longevity", status: "Research only",
      class: "Synthetic tetrapeptide", developer: "V. Khavinson, St. Petersburg Institute of Bioregulation",
      added: "2026-04-14", updated: "2026-10-17",
      tags: ["telomerase", "pineal", "aging"],
      summary: "A four-amino-acid peptide modeled on a pineal gland extract, studied mainly in Russia for effects on aging markers.",
      names: "A synthetic version of the claimed active component of epithalamin, a bovine pineal extract. Almost all published work comes from Vladimir Khavinson's institute.",
      structure: "Ala-Glu-Asp-Gly, molecular weight about 390.3 g/mol.",
      pubchem: "epitalon",
      profile: {
        rows: [
          { label: "Preclinical signal", score: 2 },
          { label: "Human evidence", score: 1 },
          { label: "Evidence quality", score: 1 }
        ]
      },
      risks: [
        { system: "Human safety", level: "unknown", text: "No independent controlled human safety data", evidence: "unknown" },
        { system: "Telomerase", level: "unknown", text: "Activating telomerase is a theoretical cancer concern", evidence: "contested" },
        { system: "Evidence transfer", level: "moderate", text: "Most human claims come from epithalamin, a bovine pineal extract, not the synthetic tetrapeptide", evidence: "established", detail: "A 2026 review treats the two as chemically distinct. It found no adequately powered randomized trial of epitalon itself and no adequate pharmacokinetic or long-term safety data.", refs: [619] },
        { system: "Product identity", level: "moderate", text: "Epitalon has been found in illegal pharmaceutical preparations seized by regulators", evidence: "established", detail: "Belgian public health scientists identified it in two illegal products marketed for cancer, aging and retinitis pigmentosa.", refs: [618] }
      ],
      activity: [
        { title: "Telomerase", evidence: "in vitro", summary: "Reported to induce telomerase activity and telomere elongation in human somatic cells", refs: [18] },
        { title: "Lifespan", evidence: "animal", summary: "Lifespan extension reported in rodents and fruit flies, mostly from a single group" }
      ],
      trials: [
        { title: "Epitalon in retinitis pigmentosa", evidence: "human obs", meta: ["patients with degenerative retinal disease; number not reported", "epitalon; dose and route not reported", "duration not given", "described as controlled; design details not reported"], body: "The authors report a positive clinical effect in 90% of cases. The paper also includes rat data.", note: "This is the only human study of the synthetic tetrapeptide on PubMed with a clinical outcome. It comes from the originating institute, and the report gives no group sizes, comparator or measured outcome. There are no randomized human trials from independent groups.", refs: [616] },
        { title: "Epithalamin (pineal extract) and thymalin in older adults", evidence: "contested", meta: ["older adults in St Petersburg and Kiev; group sizes not reported", "epithalamin, thymalin, or both, given during the first 2–3 years", "6–8 years of observation", "reported as randomized and controlled"], body: "The authors report 1.6- to 1.8-fold lower mortality with epithalamin and 2.5-fold lower with both combined, against controls. A group treated annually for 6 years had 4.1-fold lower mortality.", note: "Epithalamin is a bovine pineal extract, not epitalon. Effects this large on all-cause mortality are implausible for any intervention. Nobody outside the originating institutes has reproduced them.", refs: [614] },
        { title: "Epithalamin in older adults with coronary disease", evidence: "contested", meta: ["older adults with coronary disease and 'accelerated aging'; number not reported", "epithalamin with usual care, or usual care alone", "12 years", "reported as randomized"], body: "Deaths were 28% lower, and cardiovascular deaths 2-fold lower, in the epithalamin group.", note: "Same research group and the same extract, not the tetrapeptide. Neither this study nor any other has been independently replicated.", refs: [615] },
        { title: "Animal: lifespan and tumors in mice", evidence: "animal", meta: ["female SHR mice, 54 per group", "epitalon 1 µg per mouse subcutaneously, 5 days a month from 3 months of age", "lifelong", "controlled animal study"], body: "Mean lifespan did not change. Survival of the longest-lived 10% rose by 13%. Total tumor incidence was unchanged, and leukemia was less frequent.", refs: [617] }
      ],
      related: ["mots-c"]
    },
    {
      slug: "mots-c", type: "compound", name: "MOTS-c",
      aliases: ["Mitochondrial ORF of the 12S rRNA type-c"], category: "longevity", status: "Research only",
      class: "Mitochondrial-derived peptide", developer: "Discovered by Lee et al., 2015",
      added: "2026-05-09", updated: "2026-10-17",
      tags: ["mitochondria", "AMPK", "exercise mimetic", "metabolism"],
      summary: "A 16-amino-acid peptide encoded in the mitochondrial genome. It regulates metabolism and is studied as an exercise mimetic.",
      names: "Described in <em>Cell Metabolism</em> in 2015. CohBar developed an analog, CB4211, which entered early clinical trials for fatty liver disease and obesity. MOTS-c itself has not been through clinical development.",
      structure: "MRWQEMGYIFYPRKLR, 16 amino acids, molecular weight about 2174.6 g/mol. It is encoded by a short open reading frame inside the mitochondrial 12S rRNA gene.",
      pubchem: "MOTS-c",
      profile: {
        rows: [
          { label: "Preclinical signal", score: 3 },
          { label: "Human evidence", score: 1 },
          { label: "Evidence quality", score: 2 }
        ]
      },
      risks: [
        { system: "Human safety", level: "unknown", text: "No published human safety data for MOTS-c itself", evidence: "unknown" },
        { system: "Human evidence", level: "unknown", text: "Everything claimed for it rests on mouse studies plus measurements of the body's own peptide during exercise", evidence: "animal", detail: "No trial has given MOTS-c to a human and published the result.", refs: [437, 438] }
      ],
      activity: [
        { title: "AMPK activation", evidence: "animal", summary: "Activated AMPK through the folate cycle and AICAR accumulation, which improved insulin sensitivity in mice", refs: [20] },
        { title: "Nuclear translocation", evidence: "in vitro", summary: "Moves to the nucleus under metabolic stress and regulates stress-response genes", refs: [27] },
        { title: "Physical capacity", evidence: "animal", summary: "Improved physical performance in young and old mice. Levels rise with exercise in humans", refs: [21] }
      ],
      trials: [
        { title: "The paper that identified it", evidence: "animal", meta: ["mice, and human cell lines", "MOTS-c by injection in mice", "weeks", "preclinical"], body: "MOTS-c injection improved insulin sensitivity and prevented diet-induced obesity in mice, acting through a folate-AICAR-AMPK pathway.", note: "This is the origin of every claim made for the peptide, and it is a mouse paper. There are no human trials of MOTS-c.", refs: [437] },
        { title: "Exercise and age in mice, with human exercise measurements", evidence: "animal", meta: ["mice, plus skeletal muscle and plasma from exercising humans", "MOTS-c injection in mice; measurement only in humans", "mice treated over weeks", "preclinical, with human observational measurement"], body: "MOTS-c levels rose in human skeletal muscle and plasma with acute exercise, and MOTS-c treatment in mice improved physical capacity in young, middle-aged and old animals.", note: "The human part of this paper measured a naturally occurring peptide during exercise. It did not give MOTS-c to anyone.", refs: [438] }
      ],
      related: ["epitalon"]
    },

    /* ------------------------------------------------------------ noots */
    {
      slug: "selank", type: "compound", name: "Selank",
      aliases: ["TP-7"], category: "nootropic", status: "Approved",
      class: "Synthetic analog of tuftsin", developer: "Institute of Molecular Genetics, Russian Academy of Sciences",
      added: "2026-04-02", updated: "2026-10-17",
      tags: ["anxiolytic", "tuftsin", "intranasal"],
      summary: "A heptapeptide derived from the immunomodulatory peptide tuftsin. It is registered in Russia as an anxiolytic nasal spray.",
      names: "Registered in Russia as an anxiolytic nasal spray. It is not approved by the FDA or EMA, so the \"Approved\" status here applies to Russia only.",
      structure: "Thr-Lys-Pro-Arg-Pro-Gly-Pro, molecular weight about 751.9 g/mol. It is tuftsin (TKPR) with a Pro-Gly-Pro tail that improves stability.",
      pubchem: "selank",
      profile: {
        rows: [
          { label: "Anxiolytic signal", score: 2 },
          { label: "Risk load", score: 1, neg: true },
          { label: "Evidence quality", score: 2 }
        ]
      },
      risks: [
        { system: "Human safety", level: "low", text: "Few adverse effects reported in Russian clinical use", evidence: "anecdotal" }
      ],
      activity: [
        { title: "GABA-A modulation", evidence: "animal", summary: "Proposed allosteric modulation of GABA-A receptors" },
        { title: "Enkephalin degradation", evidence: "in vitro", summary: "Inhibits enzymes that break down enkephalins" }
      ],
      trials: [
        { title: "Selank added to phenazepam in anxiety disorders", evidence: "human rct", meta: ["70 patients with anxiety-phobic, hypochondriac or somatoform disorders (ICD-10 F40–F45)", "phenazepam alone (30) or phenazepam plus selank (40); selank dose not reported", "course length not reported", "randomized comparative trial, open design as far as the report shows"], body: "Adding selank brought the phenazepam response on the Hamilton scale forward. It also reduced benzodiazepine side effects such as sedation, memory and attention problems and asthenia, during treatment and after withdrawal.", note: "Small, Russian-language, and from the developer's institute. It tests selank as an add-on to a benzodiazepine, not on its own, and there was no placebo arm.", refs: [500] },
        { title: "Selank compared with medazepam in generalized anxiety and neurasthenia", evidence: "human rct", meta: ["62 patients with generalized anxiety disorder or neurasthenia", "selank (30) or medazepam (32); doses not reported", "course length not reported", "randomized comparative trial against a benzodiazepine; no placebo"], body: "Both drugs reduced anxiety to a similar degree. The authors reported extra anti-asthenic and stimulant effects with selank, and a rise in the serum half-life of leu-enkephalin that tracked anxiety scores.", note: "With no placebo arm, 'similar to medazepam' cannot separate a drug effect from natural improvement. The trial was run by the developer group.", refs: [501] }
      ],
      related: ["semax"]
    },
    {
      slug: "semax", type: "compound", name: "Semax",
      aliases: ["ACTH(4-7)-Pro-Gly-Pro"], category: "nootropic", status: "Approved",
      class: "Synthetic ACTH(4-10) analog", developer: "Institute of Molecular Genetics, Russian Academy of Sciences",
      added: "2026-04-02", updated: "2026-10-17",
      tags: ["neuroprotection", "BDNF", "stroke", "intranasal"],
      summary: "A heptapeptide based on a fragment of adrenocorticotropic hormone, without hormonal activity. It is used in Russia for stroke and cognitive disorders.",
      names: "On Russia's list of essential medicines as a nasal spray. It is not approved by the FDA or EMA, so the \"Approved\" status here applies to Russia only.",
      structure: "Met-Glu-His-Phe-Pro-Gly-Pro, molecular weight about 813.9 g/mol. It keeps the ACTH(4–7) sequence, which has no corticotropic activity, and adds Pro-Gly-Pro for stability.",
      pubchem: "semax",
      profile: {
        rows: [
          { label: "Neuroprotective signal", score: 2 },
          { label: "Risk load", score: 1, neg: true },
          { label: "Evidence quality", score: 2 }
        ]
      },
      risks: [
        { system: "Human safety", level: "low", text: "Few adverse effects reported in Russian clinical use", evidence: "anecdotal" }
      ],
      activity: [
        { title: "BDNF", evidence: "animal", summary: "Increased BDNF and TrkB expression in rat hippocampus", refs: [19] },
        { title: "Melanocortin receptors", evidence: "in vitro", summary: "Interacts with melanocortin receptors without stimulating the adrenal cortex" }
      ],
      trials: [
        { title: "Semax in acute hemispheric ischemic stroke", evidence: "human obs", meta: ["110 patients with acute ischemic stroke: 30 given semax, 80 conventionally treated controls", "intranasal semax 12 mg a day (moderate stroke) or 18 mg a day (severe stroke) added to standard care", "5- or 10-day course", "non-randomized controlled comparison"], body: "The authors reported faster recovery of general and focal deficits, especially motor deficits, with semax added. Evoked potentials and EEG mapping were used as supporting measures.", note: "Controls were matched for severity, not randomized, and the groups were very different in size. This cannot establish efficacy.", refs: [503] },
        { title: "Semax, BDNF and recovery at different stages of ischemic stroke", evidence: "human obs", meta: ["110 patients after ischemic stroke, split into semax and no-semax subgroups by timing of rehabilitation", "two 10-day courses of semax 6,000 mcg a day, 20 days apart", "about 2 months", "clinical study; the report does not describe randomization or blinding"], body: "Plasma BDNF rose with semax and stayed raised through the study. Barthel index scores improved faster and ended higher with semax, and BDNF levels correlated with Barthel scores.", note: "Plasma BDNF is a surrogate marker. Without randomization, the functional result is weak evidence.", refs: [502] }
      ],
      related: ["selank"]
    },

    /* ------------------------------------------------------------ melanocortin */
    {
      slug: "bremelanotide", type: "compound", name: "Bremelanotide",
      aliases: ["PT-141", "Vyleesi"], category: "melanocortin", status: "Approved",
      class: "Melanocortin receptor agonist", developer: "Palatin Technologies",
      added: "2026-05-22", updated: "2026-10-17",
      tags: ["MC4R", "melanocortin", "HSDD"],
      summary: "A cyclic melanocortin agonist approved in the US for hypoactive sexual desire disorder (HSDD) in premenopausal women.",
      names: "Sold as Vyleesi, an on-demand subcutaneous autoinjector, after FDA approval in 2019. It was developed from melanotan II, which is why it was known as PT-141.",
      structure: "A cyclic heptapeptide: Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH. C<sub>50</sub>H<sub>68</sub>N<sub>14</sub>O<sub>10</sub>, molecular weight about 1025.2 g/mol.",
      pubchem: "bremelanotide",
      profile: {
        rows: [
          { label: "Efficacy for indication", score: 2 },
          { label: "Nausea", score: 4, neg: true },
          { label: "Risk load", score: 2, neg: true },
          { label: "Evidence quality", score: 4 }
        ]
      },
      risks: [
        { system: "Nausea", level: "high", text: "Nausea affected about 40% of users in phase 3", evidence: "human rct", refs: [22] },
        { system: "Blood pressure", level: "moderate", text: "Transient rise in blood pressure and fall in heart rate after each dose", evidence: "human rct", detail: "Contraindicated with uncontrolled hypertension or known cardiovascular disease.", refs: [24] },
        { system: "Pigmentation", level: "low", text: "Focal hyperpigmentation of the face, gums or breasts, which may not resolve", evidence: "human rct", refs: [24] },
        { system: "Interactions", level: "moderate", text: "Lowers exposure to oral naltrexone", evidence: "established", refs: [24] }
      ],
      activity: [
        { title: "MC4 receptor", evidence: "human rct", summary: "Agonist in the central nervous system. Thought to drive the effect on desire", refs: [22] },
        { title: "MC1 receptor", evidence: "human rct", summary: "Activity at MC1R explains the hyperpigmentation", refs: [24] }
      ],
      trials: [
        { title: "RECONNECT: Two phase 3 trials in HSDD", evidence: "human rct", meta: ["about 1,250 premenopausal women with HSDD across two trials", "bremelanotide 1.75 mg subcutaneous as needed, or placebo", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "Both trials showed significant improvement in desire and reduced distress about low desire compared with placebo. The number of satisfying sexual events did not differ significantly.", note: "The effect sizes were modest. Nausea was common, and few users continue the drug long term.", refs: [22] },
        { title: "Phase 2b dose-finding in premenopausal women", evidence: "human rct", meta: ["327 premenopausal women with female sexual dysfunction (efficacy population)", "bremelanotide 0.75, 1.25 or 1.75 mg subcutaneously as desired, or placebo", "12 weeks", "randomized, placebo-controlled"], body: "Pooled 1.25 and 1.75 mg raised satisfying sexual events by 0.7 a month, against 0.2 on placebo (p = 0.018), and improved sexual function and distress scores. Nausea, flushing and headache were the main side effects.", refs: [738] },
        { title: "RECONNECT 52-week open-label extension", evidence: "human obs", meta: ["684 women from the RECONNECT trials; 272 completed", "bremelanotide 1.75 mg as needed", "52 weeks", "open-label extension"], body: "Desire and distress scores improved further. Nausea (40.4%), flushing (20.6%) and headache (12.0%) were the most common drug-related events. Fewer than half finished the year.", refs: [739] },
        { title: "Intranasal PT-141 with low-dose sildenafil in men", evidence: "human rct", meta: ["19 men with erectile dysfunction who responded to PDE5 inhibitors", "sildenafil 25 mg plus PT-141 7.5 mg intranasal, sildenafil plus placebo spray, or double placebo", "single doses, 6-hour monitoring", "randomized crossover"], body: "The combination produced a larger erectile response than sildenafil alone, with no new or worse side effects.", note: "Intranasal development was dropped. The approved product is a subcutaneous injection for women.", refs: [741] }
      ],
      related: []
    },

    /* ------------------------------------------------------------ immune */
    {
      slug: "thymosin-alpha-1", type: "compound", name: "Thymosin Alpha-1",
      aliases: ["Thymalfasin", "Zadaxin", "Tα1"], category: "immune", status: "Approved",
      class: "Thymic peptide", developer: "SciClone Pharmaceuticals (Zadaxin)",
      added: "2026-06-03", updated: "2026-10-17",
      tags: ["T-cell", "hepatitis B", "immunomodulator", "sepsis"],
      summary: "A 28-amino-acid peptide originally isolated from thymus tissue. As thymalfasin it is approved in a number of countries as an immunomodulator.",
      names: "Sold as Zadaxin (thymalfasin) and approved in several countries outside the US and EU, mainly for chronic hepatitis B and as a vaccine adjuvant. It is not FDA approved, so the \"Approved\" status here does not apply to the US.",
      structure: "An N-acetylated 28-amino-acid peptide, molecular weight about 3108.3 g/mol, derived from prothymosin α.",
      pubchem: "thymalfasin",
      profile: {
        rows: [
          { label: "Immune modulation", score: 2 },
          { label: "Risk load", score: 1, neg: true },
          { label: "Evidence quality", score: 3 }
        ]
      },
      risks: [
        { system: "Tolerability", level: "low", text: "Generally well tolerated in clinical trials", evidence: "human rct", refs: [23] },
        { system: "Efficacy", level: "moderate", text: "Benefit in chronic hepatitis B is uncertain: trials conflict, and a 2026 Cochrane review rated the evidence low to very low", evidence: "human rct", detail: "The positive Taiwanese trial was not confirmed by the placebo-controlled phase 3 trial.", refs: [621, 622, 623] },
        { system: "Sepsis subgroup", level: "unknown", text: "In the TESTS sepsis trial, patients under 60 had higher 28-day mortality on thymosin α1 than on placebo in a prespecified subgroup", evidence: "human rct", detail: "Hazard ratio 1.67 (95% CI 1.04 to 2.67) under 60, against 0.81 at 60 or over. Overall mortality did not differ (HR 0.99). Subgroup findings generate hypotheses and do not prove harm.", refs: [23] },
        { system: "Product quality", level: "moderate", text: "Research-peptide material is not Zadaxin. Its identity, dose and sterility are unverified", evidence: "established" }
      ],
      activity: [
        { title: "Toll-like receptors", evidence: "in vitro", summary: "Signals through TLR2 and TLR9 on dendritic cells" },
        { title: "T-cell maturation", evidence: "animal", summary: "Promotes T-cell differentiation and function" }
      ],
      trials: [
        { title: "TESTS: Thymosin alpha 1 in sepsis", evidence: "human rct", meta: ["1,106 adults with sepsis randomized, 1,089 analyzed", "thymosin α1 subcutaneous every 12 hours or placebo, for 7 days", "28-day follow-up", "multicentre, randomized, double-blind, placebo-controlled"], body: "There was no significant difference in 28-day all-cause mortality between groups (HR 0.99).", note: "This was a large, well-run trial that overturned earlier optimism from smaller studies.", refs: [23] },
        { title: "Chronic hepatitis B: 26 versus 52 weeks against no treatment", evidence: "human rct", meta: ["98 adults with chronic hepatitis B in Taiwan", "thymalfasin 1.6 mg subcutaneously twice weekly for 26 or 52 weeks, or no treatment", "18 months of follow-up", "randomized, controlled, open (untreated control)"], body: "At 18 months, 40.6% of the 26-week group had cleared HBV DNA and HBeAg, against 9.4% of controls. The 52-week group reached 26.5%, which was not significant. Responses built up after treatment ended, and no one lost HBsAg.", refs: [621] },
        { title: "Chronic hepatitis B: phase 3 against placebo", evidence: "human rct", meta: ["97 adults with HBV DNA- and HBeAg-positive chronic hepatitis B", "thymalfasin 1.6 mg or placebo, twice weekly for 6 months", "12 months, with later follow-up", "multicenter, randomized, double-blind, placebo-controlled, phase 3"], body: "Complete response occurred in 14% on thymalfasin against 4% on placebo (p = 0.084). The authors concluded that their results did not confirm earlier reports of efficacy.", refs: [622] },
        { title: "Cochrane review: chronic hepatitis B", evidence: "human rct", meta: ["10 trials, 1,349 adults, published 1991–2018", "thymosin α1 alone or added to interferon, lamivudine, entecavir or tenofovir", "follow-up 6 months to 5 years", "systematic review and meta-analysis"], body: "Pooled data suggested fewer deaths (RR 0.53) and fewer serious adverse events (RR 0.72), with little effect on quality of life or liver histology. The certainty of evidence was very low for every outcome except serious adverse events, where it was low.", note: "The reviewers concluded they are not sure whether it changes any outcome.", refs: [623] },
        { title: "Metastatic melanoma with chemotherapy", evidence: "human rct", meta: ["488 patients with metastatic melanoma", "thymosin α1 1.6, 3.2 or 6.4 mg added to dacarbazine with or without interferon alfa, against dacarbazine plus interferon", "12-month primary endpoint, follow-up to 24 months", "multicenter, randomized"], body: "More tumors responded in two of the 3.2 mg arms than in controls. Median overall survival was 9.4 against 6.6 months (HR 0.80, p = 0.08), which was not significant. No added toxicity was seen.", note: "A response signal of the kind phase 2 trials produce, not proof of survival benefit. No confirmatory trial is on PubMed.", refs: [624] }
      ],
      related: ["tb-500"]
    },

    /* ------------------------------------------------------------ noots: dihexa */
    {
      slug: "dihexa", type: "compound", name: "Dihexa",
      aliases: ["PNB-0408", "N-hexanoic-Tyr-Ile-(6) aminohexanoic amide"], category: "nootropic", status: "Research only",
      class: "Angiotensin IV analog / HGF–c-Met potentiator", developer: "Washington State University (Harding & Wright labs)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["HGF", "c-Met", "synaptogenesis", "angiotensin IV", "cognition", "preclinical"],
      summary: "A small, orally active peptide-like molecule derived from angiotensin IV. In animal studies it improved memory by strengthening hepatocyte growth factor signaling. It has never been tested in humans.",
      names: "Developed at Washington State University in research on angiotensin IV analogs as possible anti-dementia drugs. It is often quoted as being \"seven orders of magnitude more potent than BDNF\". That figure comes from a cell-culture synapse-formation assay, not from any measure of effect in a living brain. The same research program led to Athira Pharma (formerly M3 Biotechnology). Athira's clinical candidate was fosgonimeton, a different molecule, not Dihexa. In 2021 Athira's chief executive, a co-author on the foundational papers, resigned after an internal review found she had altered images in research from her doctoral work.",
      structure: "C<sub>27</sub>H<sub>44</sub>N<sub>4</sub>O<sub>5</sub>, molecular weight about 504.7 g/mol. It is a modified fragment of angiotensin IV. N-terminal hexanoylation and a C-terminal aminohexanoic amide protect it from peptidases, which makes it stable enough to be active orally in rodents and lets it cross the blood–brain barrier.",
      pubchem: "dihexa",
      profile: {
        note: "Risk load reflects a plausible mechanistic concern and the complete absence of human data, not observed harms.",
        rows: [
          { label: "Preclinical signal", score: 3 },
          { label: "Human evidence", score: 0 },
          { label: "Risk load", score: 3, neg: true },
          { label: "Evidence quality", score: 1 }
        ]
      },
      risks: [
        { system: "Human safety", level: "unknown", text: "No published human pharmacokinetic or safety data", evidence: "unknown", detail: "No phase 1 trial of Dihexa has been published. Every dose in circulation is extrapolated from rodents." },
        { system: "Oncogenic signaling", level: "unknown", text: "HGF/c-Met is a proto-oncogenic pathway, and potentiating it raises a theoretical cancer concern", evidence: "contested", detail: "Abnormal c-Met activation drives several cancers, and c-Met inhibitors are approved cancer drugs. Whether brief, low-level potentiation by Dihexa carries meaningful risk is unknown. No study has looked." },
        { system: "Persistence", level: "unknown", text: "Synapse formation is meant to be lasting, so unwanted effects may not simply wear off", evidence: "contested" },
        { system: "Product quality", level: "high", text: "Vendor material is unregulated. Purity and identity are unverified", evidence: "established" }
      ],
      activity: [
        { title: "HGF / c-Met system", evidence: "animal", summary: "Binds hepatocyte growth factor and promotes its dimerization, which strengthens c-Met receptor signaling", detail: "Blocking c-Met abolished both the pro-cognitive and the synapse-forming effects. This was the key experiment linking Dihexa's activity to the HGF system.", refs: [29] },
        { title: "Synaptogenesis", evidence: "in vitro", summary: "Increased dendritic spine density and new synapse formation in cultured hippocampal neurons", refs: [29] },
        { title: "Memory models", evidence: "animal", summary: "Reversed scopolamine-induced spatial learning deficits and improved performance in aged rats in the water maze", detail: "Dosing was oral or intraperitoneal in rats. These are standard acute-deficit models. They do not show disease modification in humans.", refs: [28] },
        { title: "Angiotensin IV / AT4 site", evidence: "contested", summary: "Originally framed as acting at the \"AT4 receptor\"; later work attributed its effects to the HGF/c-Met system instead", refs: [29] }
      ],
      trials: [],
      noTrials: "There are no human trials of Dihexa. The closest human data come from fosgonimeton (ATH-1017), a different HGF positive modulator from the same research lineage. It failed its primary endpoint in the ACT-AD phase 2 trial and again in the LIFT-AD phase 2/3 trial in mild-to-moderate Alzheimer's disease. That does not directly test Dihexa, but it is the best evidence available that this mechanism may not carry over to people.",
      noTrialsRefs: [30],
      related: ["semax", "selank"]
    },

    /* ------------------------------------------------------------ skin & hair: tri-blend */
    {
      slug: "tri-blend-topical", type: "compound", name: "Tri-Blend Topical",
      aliases: ["Minoxidil + RU-58841 + Finasteride", "Tri-Blend Hair Loss Topical"], category: "skin", status: "Research only",
      class: "Topical combination: K⁺ channel opener + androgen receptor antagonist + 5α-reductase inhibitor", developer: "Compounded / research-market blend",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["hair loss", "androgenetic alopecia", "minoxidil", "finasteride", "RU-58841", "DHT", "topical"],
      summary: "A scalp solution that combines three ways of fighting androgenetic hair loss: minoxidil 10%, the research antiandrogen RU-58841 at 25 mg/mL, and finasteride at 500 µg/mL (0.05%). Two of the ingredients are approved drugs. The combination as a whole has never been tested.",
      names: "Sold as a 30 mL research-market topical labeled \"Minoxidil + RU-58841 + Finasteride, 10%, 25 mg/mL, 500 mcg/mL\". Each ingredient has a different regulatory status. Minoxidil is approved over the counter at 2% and 5%; 10% is above any approved strength. Oral finasteride 1 mg (Propecia) is approved for male pattern hair loss, and topical finasteride is approved in some countries. RU-58841 has never been approved anywhere and never finished clinical development. The \"Research only\" status here applies to the blend, mainly because it contains RU-58841.",
      structure: "<strong>Minoxidil</strong>: C<sub>9</sub>H<sub>15</sub>N<sub>5</sub>O, molecular weight about 209.2 g/mol. It is a prodrug, activated in the hair follicle by the enzyme sulfotransferase (SULT1A1). <strong>RU-58841</strong>: C<sub>17</sub>H<sub>18</sub>F<sub>3</sub>N<sub>3</sub>O<sub>3</sub>, molecular weight about 369.3 g/mol. It is a non-steroidal antiandrogen (a cyanophenyl-imidazolidinedione) designed for topical use. <strong>Finasteride</strong>: C<sub>23</sub>H<sub>36</sub>N<sub>2</sub>O<sub>2</sub>, molecular weight about 372.5 g/mol. It is a 4-azasteroid that inhibits type II 5α-reductase.",
      pubchem: false,
      profile: {
        note: "Scored for the blend as labeled. Efficacy is inferred from trials of the individual ingredients; no trial has tested this combination.",
        rows: [
          { label: "Hair retention (expected)", score: 4 },
          { label: "Regrowth (expected)", score: 3 },
          { label: "Scalp irritation", score: 3, neg: true },
          { label: "Risk load", score: 3, neg: true },
          { label: "Evidence quality", score: 2 }
        ]
      },
      risks: [
        { system: "Scalp", level: "moderate", text: "Itching, flaking and contact dermatitis. These are more common at higher minoxidil strengths and with propylene glycol bases", evidence: "human rct", detail: "In the 5% against 2% minoxidil trial, local irritation and itching were more frequent at the higher strength. At 10% this is likely to be more pronounced.", refs: [31] },
        { system: "Initial shedding", level: "moderate", text: "Temporary increase in shedding in the first weeks of minoxidil", evidence: "established", detail: "Follicles leave the resting phase and push out old hairs as they re-enter growth. It typically settles within 2–3 months." },
        { system: "Cardiovascular", level: "low", text: "Systemic minoxidil absorption can cause palpitations, a faster heart rate, dizziness or fluid retention", evidence: "human obs", detail: "This is uncommon with topical use, but more likely at 10%, with large application volumes or on broken skin. Minoxidil was originally an oral blood-pressure drug." },
        { system: "Facial / body hair", level: "low", text: "Unwanted hair growth where the solution runs or is transferred", evidence: "human rct", refs: [31] },
        { system: "Sexual function", level: "low", text: "Decreased libido, erectile dysfunction and lower ejaculate volume have been reported with finasteride. A topical RU-58841 dose that reaches the bloodstream could add to this", evidence: "human rct", detail: "In the oral finasteride 1 mg trials, sexual adverse events occurred in 3.8% on finasteride against 2.1% on placebo. Topical finasteride lowered serum DHT less than oral, but still lowered it. Reports of lasting symptoms after stopping (\"post-finasteride syndrome\") are disputed and poorly characterized.", refs: [32, 33] },
        { system: "Mood", level: "low", text: "Depression and suicidal ideation are listed as post-marketing reports on the finasteride label", evidence: "contested" },
        { system: "Unknown component", level: "unknown", text: "RU-58841 has no human safety, pharmacokinetic or long-term data", evidence: "unknown", detail: "Users report systemic antiandrogen effects such as low libido, fatigue and breast tenderness. None of this has been studied. How much RU-58841 reaches the bloodstream from the scalp in humans is not known." },
        { system: "Pregnancy / handling", level: "high", text: "Finasteride and antiandrogens can feminise a male fetus. Anyone who is or may become pregnant should not handle the product", evidence: "established", detail: "Skin contact with finasteride is a labeled hazard. Treated scalp and pillowcases are realistic routes of exposure." },
        { system: "Pets", level: "high", text: "Topical minoxidil is highly toxic to cats, even from small amounts of residue", evidence: "established", detail: "Cats lack the enzyme activity needed to clear minoxidil. Fatal poisonings have followed contact with treated skin, bedding or licked fur." }
      ],
      activity: [
        { title: "Minoxidil: Follicle stimulation", evidence: "human rct", summary: "Lengthens the growth phase (anagen) and enlarges shrunken follicles. Its exact mechanism remains unclear", detail: "Minoxidil sulfate opens ATP-sensitive potassium channels and increases local blood flow and growth-factor signaling (VEGF). Response depends on how much follicular sulfotransferase a person has, which is why some people respond poorly.", refs: [31] },
        { title: "Finasteride: 5α-reductase type II", evidence: "human rct", summary: "Blocks the conversion of testosterone to DHT, the androgen that drives shrinkage of genetically susceptible follicles", detail: "At 500 µg/mL (0.05%), the finasteride in this blend is one-fifth the strength of the 0.25% spray tested in phase 3. Systemic DHT suppression from topical use is real but smaller than from the oral drug.", refs: [32, 33] },
        { title: "RU-58841: Androgen receptor", evidence: "animal", summary: "Competitive androgen receptor antagonist designed for topical activity with limited systemic exposure", detail: "It prevented and partly reversed balding on the scalp of stumptail macaques, a primate model of androgenetic alopecia. Development by Roussel Uclaf stopped before any controlled human trial was completed.", refs: [34, 35] },
        { title: "Rationale for combining", evidence: "contested", summary: "Lower DHT (finasteride), block what remains at the receptor (RU-58841), and stimulate growth directly (minoxidil)", detail: "Combining oral finasteride with topical minoxidil works better than either alone in clinical studies. Adding a topical antiandrogen is a plausible extension, but nobody has tested it." }
      ],
      trials: [
        { title: "Topical minoxidil 5% against 2% and placebo", evidence: "human rct", meta: ["393 men aged 18–49 with androgenetic alopecia", "5% minoxidil, 2% minoxidil or placebo, twice daily", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "5% minoxidil was significantly better than 2% and placebo on hair counts and on patient and investigator ratings. It produced about 45% more regrowth than 2% at 48 weeks. Itching and local irritation were more frequent with 5%.", note: "This is the basis for the 5% strength. No comparably large trial supports 10% over 5% topically.", refs: [31] },
        { title: "Oral finasteride 1 mg in men", evidence: "human rct", meta: ["1,553 men aged 18–41 with vertex or frontal hair loss", "finasteride 1 mg daily or placebo", "1 year, with a blinded extension to 2 years", "two randomized, double-blind, placebo-controlled trials"], body: "Finasteride increased hair counts and slowed further loss compared with placebo, and the benefit held at 2 years. Sexual adverse events occurred in 3.8% against 2.1% and resolved in men who stopped treatment.", note: "This is the oral drug. It is included because it establishes that lowering DHT works. The blend delivers finasteride topically at a lower and more variable systemic exposure.", refs: [32] },
        { title: "Topical finasteride 0.25% spray (phase 3)", evidence: "human rct", meta: ["458 men with androgenetic alopecia", "topical finasteride 0.25%, oral finasteride 1 mg, or placebo spray", "24 weeks", "randomized, controlled"], body: "Target-area hair counts improved with topical finasteride by about as much as with oral finasteride, and significantly more than with placebo. Plasma finasteride was far lower with the topical, and serum DHT fell by about a third against about half with oral dosing.", note: "The blend contains 0.05% finasteride, one-fifth of the strength tested here, so this trial does not show that the blend's finasteride component is effective.", refs: [33] }
      ],
      noTrials: "",
      related: ["ghk-cu"]
    },

    /* ------------------------------------------------------------ guides */
    {
      slug: "reading-clinical-trial-phases", type: "article", name: "Reading Clinical Trial Phases",
      category: "guides", status: "Guide", added: "2026-02-15", updated: "2026-05-01",
      tags: ["methodology", "evidence"],
      summary: "What Phase 1, 2, 3 and 4 trials actually test, and why a preclinical result says little about effects in humans.",
      sections: [
        { heading: "Preclinical", body: "<p>Cell and animal work shows whether a mechanism is plausible. It does not show that the compound is safe or effective in humans.</p>" },
        { heading: "Phase 1", body: "<p>Small studies, often in healthy volunteers, that look at safety, tolerability and pharmacokinetics.</p>" },
        { heading: "Phase 2", body: "<p>Dose-finding and early efficacy in the target population.</p>" },
        { heading: "Phase 3", body: "<p>Large randomized controlled trials that confirm efficacy and safety. Regulators base approval decisions on these.</p>" },
        { heading: "Phase 4", body: "<p>Monitoring after approval, including rare adverse events.</p>" }
      ]
    },
    {
      slug: "understanding-half-life", type: "article", name: "Understanding Peptide Half-Life",
      category: "guides", status: "Guide", added: "2026-03-20", updated: "2026-06-12",
      tags: ["pharmacokinetics", "chemistry"],
      summary: "Why native peptides break down within minutes and how chemists stretch that to days.",
      sections: [
        { heading: "The problem", body: "<p>Native peptides are cleaved quickly by proteases and filtered by the kidneys.</p>" },
        { heading: "Common strategies", body: "<ul><li>Amino-acid substitution (e.g. D-amino acids, Aib)</li><li>Fatty-acid acylation for albumin binding (semaglutide)</li><li>Albumin-binding complexes (CJC-1295 with DAC)</li><li>PEGylation and cyclization</li></ul>" }
      ]
    },
    {
      slug: "evaluating-evidence", type: "article", name: "Evaluating the Evidence",
      category: "guides", status: "Guide", added: "2026-07-07", updated: "2026-09-25",
      tags: ["methodology", "evidence", "critical reading"],
      summary: "A short checklist for judging claims about any compound: who ran the study, in whom, and how large it was.",
      sections: [
        { heading: "Checklist", body: "<ol><li>Was it done in humans, animals or cells?</li><li>Was it randomized and controlled?</li><li>How many participants?</li><li>Has an independent group replicated it?</li><li>Who funded it?</li></ol>" },
        { heading: "Evidence badges in the codex", body: "<p><strong>human rct</strong>: randomized controlled trials in people. <strong>established</strong>: settled pharmacology. <strong>human obs</strong>: observational human data. <strong>animal</strong> and <strong>in vitro</strong>: preclinical only. <strong>anecdotal</strong>: user reports. <strong>contested</strong>: evidence points both ways. <strong>unknown</strong>: no data.</p>" }
      ]
    }
  ],

  references: {
    1: "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med 2021;384:989–1002.",
    2: "Marso SP et al. Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes. N Engl J Med 2016;375:1834–1844.",
    3: "Lincoff AM et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. N Engl J Med 2023;389:2221–2232.",
    4: "Wilding JPH et al. Weight regain and cardiometabolic effects after withdrawal of semaglutide: The STEP 1 trial extension. Diabetes Obes Metab 2022;24:1553–1564.",
    5: "Frías JP et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes. N Engl J Med 2021;385:503–515.",
    6: "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med 2022;387:205–216.",
    7: "Aronne LJ et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity. N Engl J Med 2025.",
    8: "Jastreboff AM et al. Triple–Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial. N Engl J Med 2023;389:514–526.",
    9: "Rosenstock J et al. Retatrutide, a GIP, GLP-1 and glucagon receptor agonist, for people with type 2 diabetes: a randomised, double-blind, placebo and active-controlled, parallel-group, phase 2 trial. Lancet 2023;402:529–544.",
    10: "Seiwerth S et al. BPC 157 and Standard Angiogenic Growth Factors. Gastrointestinal Tract Healing, Lessons from Tendon, Ligament, Muscle and Bone Healing. Curr Pharm Des 2018;24:1972–1989.",
    11: "Goldstein AL, Hannappel E, Kleinman HK. Thymosin β4: actin-sequestering protein moonlights to repair injured tissues. Trends Mol Med 2005;11:421–429.",
    12: "Pickart L, Thaler MM. Tripeptide in human serum which prolongs survival of normal liver cells and stimulates growth in neoplastic liver. Nat New Biol 1973;243:85–87.",
    13: "Pickart L, Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. Int J Mol Sci 2018;19:1987.",
    14: "Raun K et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol 1998;139:552–561.",
    15: "Beck DE et al. Prospective, randomized, controlled, proof-of-concept study of the Ghrelin mimetic ipamorelin for the management of postoperative ileus in bowel resection patients. Int J Colorectal Dis 2014;29:1527–1534.",
    16: "Teichman SL et al. Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults. J Clin Endocrinol Metab 2006;91:799–805.",
    17: "Ionescu M, Frohman LA. Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GH-releasing hormone analog. J Clin Endocrinol Metab 2006;91:4792–4797.",
    18: "Khavinson VKh et al. Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells. Bull Exp Biol Med 2003;135:590–592.",
    19: "Dolotov OV et al. Semax, an analog of ACTH(4-10) with cognitive effects, regulates BDNF and trkB expression in the rat hippocampus. Brain Res 2006;1117:54–60.",
    20: "Lee C et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metab 2015;21:443–454.",
    21: "Reynolds JC et al. MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis. Nat Commun 2021;12:470.",
    22: "Kingsberg SA et al. Bremelanotide for the Treatment of Hypoactive Sexual Desire Disorder: Two Randomized Phase 3 Trials. Obstet Gynecol 2019;134:899–908.",
    23: "Wu J et al. Efficacy of thymosin alpha 1 in sepsis (TESTS): multicentre, double blinded, randomised, placebo controlled trial. BMJ 2025.",
    24: "Vyleesi (bremelanotide injection) prescribing information. US FDA, 2019.",
    25: "Coskun T et al. LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus: from discovery to clinical proof of concept. Mol Metab 2018;18:3–14.",
    26: "Lau J et al. Discovery of the Once-Weekly Glucagon-Like Peptide-1 (GLP-1) Analogue Semaglutide. J Med Chem 2015;58:7370–7380.",
    28: "McCoy AT et al. Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents. J Pharmacol Exp Ther 2013;344:141–154.",
    29: "Benoist CC et al. The procognitive and synaptogenic effects of angiotensin IV-derived peptides are dependent on activation of the hepatocyte growth factor/c-Met system. J Pharmacol Exp Ther 2014;351:390–402.",
    30: "Athira Pharma. LIFT-AD phase 2/3 trial of fosgonimeton in mild-to-moderate Alzheimer's disease: topline results. Company announcement, 2024.",
    31: "Olsen EA et al. A randomized clinical trial of 5% topical minoxidil versus 2% topical minoxidil and placebo in the treatment of androgenetic alopecia in men. J Am Acad Dermatol 2002;47:377–385.",
    32: "Kaufman KD et al. Finasteride in the treatment of men with androgenetic alopecia. J Am Acad Dermatol 1998;39:578–589.",
    33: "Piraccini BM et al. Efficacy and safety of topical finasteride spray solution for male androgenetic alopecia: a phase III, randomized, controlled clinical trial. J Eur Acad Dermatol Venereol 2022;36:286–294.",
    34: "Battmann T et al. RU 58841, a new specific topical antiandrogen: a candidate of choice for the treatment of acne, androgenetic alopecia and hirsutism. J Steroid Biochem Mol Biol 1994;48:55–60.",
    35: "Pan HJ et al. Evaluation of RU58841 as an anti-androgen in prostate PC3 cells and a topical anti-alopecia agent in the bald scalp of stumptailed macaques. Endocrine 1998;9:39–43.",
    27: "Kim KH et al. The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress. Cell Metab 2018;28:516–524."
  }
};

