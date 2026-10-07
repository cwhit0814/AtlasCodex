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
      "tak-653": "In clinical trials as an add-on for depression. Trial doses were not published in a peer-reviewed source when this entry was written.",
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
      default: "No dose-finding study or approved label establishes a human dose for this compound."
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
      { icon: "form", tone: "violet", title: "Request an Entry", text: "Tell us which compound to cover next and what you want to know about it.", href: "about.html#contact" },
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
        name: "Tanner Tattered", handle: "@tattered", href: "https://hoo.be/tattered",
        image: "img/creator-tattered.webp", accent: "#c9a227", accent2: "#8a6d12",
        known: "Long-running Q&As and a large public FAQ covering peptides, anabolics and harm reduction.",
        text: "The one I trust most, on all of it. He puts his clients' health ahead of everything else, and he gives the entire FAQ away for free. That document is where this codex's compound list came from, and most of the blood work and monitoring guidance with it.",
        topics: [["Peptides", "codex.html?cat=repair"], ["AAS", "codex.html?cat=aas"], ["Blood work", "entry.html?slug=blood-work-and-monitoring"]],
        linkLabel: "hoo.be/tattered"
      },
      {
        name: "1MinAnabolics", handle: "Maximum Pharma Archive", href: "https://maxpharma.wiki/",
        image: "img/creator-1minanabolics.png", accent: "#8b8cf6", accent2: "#4b4ab0",
        known: "The Maximum Pharma Archive, a searchable reference of compounds with per-claim evidence grading.",
        text: "Along with ScientificSean, the reason this codex exists at all — his archive gave me the idea, and I'm taking this somewhere of its own rather than leaving it a copy of his. He's who I watch for the extreme end: he pushes the envelope in his own research and reports what he finds either way, good or bad, so nobody else has to.",
        topics: [["Archive", "archive.html"], ["Evidence grades", "about.html"]],
        linkLabel: "maxpharma.wiki"
      },
      {
        name: "ScientificSean", handle: "scientificsean.wiki", href: "https://www.scientificsean.wiki/support",
        image: "img/creator-scientificsean.png", accent: "#5fcbc0", accent2: "#19857a",
        known: "A compound wiki written with an emphasis on citations and mechanism.",
        text: "The other half of where this codex came from. He's who I go to for nootropics, and he digs deeper than anyone else I follow. If you want to understand what these compounds are doing at the receptor level, his work is where to go.",
        topics: [["Mechanisms", "codex.html?cat=metabolic"], ["Guides", "codex.html?cat=guides"]],
        linkLabel: "scientificsean.wiki"
      },
      {
        name: "Vigorous Steve", handle: "vigoroussteve.com", href: "https://vigoroussteve.com/",
        image: "img/creator-vigorous-steve.png", imagePos: "50% 22%", accent: "#8fd16a", accent2: "#3f7f1f",
        known: "Years of harm-reduction education on performance-enhancing drugs, their side effects and what to monitor.",
        text: "One of the two who started all of this for me. Steve and Leo are why I got into this side of research in the first place, and his harm-reduction framing — what to watch and when to stop, rather than how much to take — is the line this codex tries to hold.",
        topics: [["Monitoring", "entry.html?slug=blood-work-and-monitoring"], ["AAS", "codex.html?cat=aas"]],
        linkLabel: "vigoroussteve.com"
      },
      {
        name: "Leo and Longevity", handle: "YouTube", href: "https://www.youtube.com/c/LeoandLongevity", memorial: "In memoriam",
        image: "img/creator-leo.png", accent: "#f0776a", accent2: "#a23a3a",
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
   */
  support: {
    eyebrow: "Trusted sources",
    title: "Support Me",
    intro: "Using my code at the sources below supports Atlas Codex at no extra cost to you. Thank you for keeping the archive running.",
    disclosure: "Atlas Codex earns a commission on purchases made with these codes. A listing here is not an endorsement of any product, and nothing on this page is medical advice.",
    sources: [
      {
        id: "halfnattys",
        name: "Half Nattys",
        href: "https://halfnattys.is/?ref=ATLAS",
        code: "ATLAS",
        logo: "img/halfnattys.png",
        logoBg: "#000",
        blurb: "Research-market products across peptides, capsules, sprays and topicals, with a public COA library.",
        attributes: ["COA Library", "Research Market"],
        sells: ["Peptides", "Capsules", "Sprays", "Topicals", "Aminos", "Liquids", "Lab Supplies"],
        popular: [
          { name: "GHK-Cu", slug: "ghk-cu" },
          { name: "BPC-157", slug: "bpc-157" },
          { name: "Dihexa", slug: "dihexa" },
          { name: "Tri-Blend Hair Loss Topical", slug: "tri-blend-topical" }
        ]
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
      added: "2026-01-12", updated: "2026-09-18",
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
        { system: "Lean mass", level: "moderate", text: "A meaningful share of the weight lost is lean mass", evidence: "human rct", detail: "This holds for most large weight losses, whatever the method. Resistance training and adequate protein are the usual countermeasures." }
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
        { title: "SELECT: Cardiovascular outcomes in obesity without diabetes", evidence: "human rct", meta: ["17,604 adults ≥45 years with established cardiovascular disease and BMI ≥27, no diabetes", "semaglutide 2.4 mg weekly or placebo", "mean follow-up 39.8 months", "randomized, double-blind, event-driven"], body: "Major adverse cardiovascular events occurred in 6.5% against 8.0% (HR 0.80). Treatment was stopped because of adverse events in 16.6% against 8.2%.", note: "This is the first trial to show a cardiovascular outcome benefit for an anti-obesity drug in people without diabetes.", refs: [3] }
      ],
      related: ["tirzepatide", "retatrutide"]
    },
    {
      slug: "tirzepatide", type: "compound", name: "Tirzepatide",
      aliases: ["Mounjaro", "Zepbound", "LY3298176"], category: "metabolic", status: "Approved",
      class: "Dual GIP / GLP-1 receptor agonist", developer: "Eli Lilly",
      added: "2026-01-12", updated: "2026-08-30",
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
        { title: "SURMOUNT-5: Head to head with semaglutide in obesity", evidence: "human rct", meta: ["751 adults with obesity, no diabetes", "tirzepatide at maximum tolerated dose or semaglutide at maximum tolerated dose", "72 weeks", "randomized, open-label"], body: "Mean weight change was −20.2% with tirzepatide against −13.7% with semaglutide.", note: "This is the first direct comparison of the two drugs at their obesity doses.", refs: [7] }
      ],
      related: ["semaglutide", "retatrutide"]
    },
    {
      slug: "retatrutide", type: "compound", name: "Retatrutide",
      aliases: ["LY3437943"], category: "metabolic", status: "Investigational",
      class: "Triple GIP / GLP-1 / glucagon receptor agonist", developer: "Eli Lilly",
      added: "2026-02-03", updated: "2026-09-02",
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
        { system: "Long-term safety", level: "unknown", text: "No long-term outcome data. Phase 3 is ongoing", evidence: "unknown" },
        { system: "Product quality", level: "high", text: "Material sold outside trials is unregulated. Its identity, dose and sterility are unknown", evidence: "established" }
      ],
      activity: [
        { title: "Glucagon receptor", evidence: "human rct", summary: "Adds glucagon receptor agonism, which is thought to raise energy expenditure and liver fat oxidation", detail: "Glucagon raises blood glucose on its own. In this molecule the incretin activity offsets that effect.", refs: [8] },
        { title: "GIP and GLP-1 receptors", evidence: "human rct", summary: "Incretin agonism similar to tirzepatide drives the appetite and insulin effects", refs: [8, 9] },
        { title: "Liver fat", evidence: "human rct", summary: "Large reductions in liver fat in a phase 2 substudy", detail: "Most participants with fatty liver at baseline reached normal liver fat levels at higher doses." }
      ],
      trials: [
        { title: "Phase 2: Obesity without diabetes", evidence: "human rct", meta: ["338 adults, BMI ≥30 or ≥27 with a comorbidity", "retatrutide 1, 4, 8 or 12 mg weekly or placebo", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight change at 48 weeks was −8.7%, −17.1%, −22.8% and −24.2% across the four doses, against −2.1% with placebo. Weight was still falling at 48 weeks in the higher-dose groups.", note: "These are the largest mean reductions reported for a drug in a trial of this length. This is phase 2, with small arms; phase 3 has to confirm them.", refs: [8] },
        { title: "Phase 2: Type 2 diabetes", evidence: "human rct", meta: ["281 adults with type 2 diabetes", "retatrutide at several doses, placebo, or dulaglutide 1.5 mg", "36 weeks", "randomized, double-blind, active and placebo-controlled"], body: "HbA1c fell by up to about 2 percentage points at 24 weeks. Weight fell by up to about 17% at 36 weeks at the highest dose.", refs: [9] }
      ],
      related: ["tirzepatide", "semaglutide"]
    },

    /* ------------------------------------------------------------ repair */
    {
      slug: "bpc-157", type: "compound", name: "BPC-157",
      aliases: ["Body Protection Compound-157", "PL 14736", "PL-10", "Bepecin"], category: "repair", status: "Research only",
      class: "Synthetic pentadecapeptide", developer: "University of Zagreb (research origin)",
      added: "2026-01-20", updated: "2026-07-14",
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
        { system: "Sport", level: "moderate", text: "Prohibited by WADA as an unapproved substance (S0)", evidence: "established" }
      ],
      activity: [
        { title: "Angiogenesis / VEGFR2", evidence: "animal", summary: "Promotes new blood vessel formation in injury models, with VEGFR2 signaling proposed", detail: "Most data come from rodent models of tendon, muscle, gut and vascular injury.", refs: [10] },
        { title: "Nitric oxide system", evidence: "animal", summary: "Reported to modulate nitric oxide pathways and to counteract both NOS blockers and NO donors", refs: [10] },
        { title: "Tendon fibroblasts", evidence: "in vitro", summary: "Increased fibroblast outgrowth, migration and growth hormone receptor expression in cultured tendon cells", detail: "These findings are cell-culture results. They do not by themselves predict an effect on tendon healing in humans." }
      ],
      trials: [],
      noTrials: "There are no randomized controlled trials in humans. PL 14736 entered a phase 2 trial for ulcerative colitis in the 2000s, but no peer-reviewed results were published. Human reports are limited to small case series.",
      related: ["tb-500", "ghk-cu"]
    },
    {
      slug: "tb-500", type: "compound", name: "TB-500",
      aliases: ["Thymosin beta-4 fragment", "Tβ4 (17–23)"], category: "repair", status: "Research only",
      class: "Synthetic fragment of thymosin β4", developer: "N/A",
      added: "2026-01-20", updated: "2026-06-21",
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
        { system: "Sport", level: "moderate", text: "Prohibited by WADA, with positive tests in horse racing and human sport", evidence: "established" }
      ],
      activity: [
        { title: "G-actin sequestration", evidence: "established", summary: "Full-length Tβ4 binds monomeric actin and regulates its polymerisation", refs: [11] },
        { title: "Cell migration and angiogenesis", evidence: "animal", summary: "Promotes keratinocyte and endothelial cell migration in wound models", refs: [11] },
        { title: "Anti-inflammatory signaling", evidence: "animal", summary: "Reduced inflammatory signaling in models of cardiac and corneal injury", refs: [11] }
      ],
      trials: [],
      noTrials: "There are no human trials of the TB-500 fragment. Full-length Tβ4 has been tested in humans as eye drops and in cardiac studies, with mixed results.",
      related: ["bpc-157", "thymosin-alpha-1"]
    },

    /* ------------------------------------------------------------ skin */
    {
      slug: "ghk-cu", type: "compound", name: "GHK-Cu",
      aliases: ["Copper peptide", "Copper tripeptide-1"], category: "skin", status: "Approved",
      class: "Copper-binding tripeptide", developer: "Discovered by Loren Pickart (1973)",
      added: "2026-02-10", updated: "2026-08-05",
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
        { system: "Injectable use", level: "unknown", text: "Systemic dosing of copper peptides has no human safety data", evidence: "unknown" }
      ],
      activity: [
        { title: "Collagen and GAG synthesis", evidence: "in vitro", summary: "Increases collagen and glycosaminoglycan synthesis in fibroblast cultures", refs: [12, 13] },
        { title: "Wound remodelling", evidence: "animal", summary: "Accelerated wound contraction and healing in animal models", refs: [13] },
        { title: "Gene expression", evidence: "in vitro", summary: "Connectivity-map analyses suggest it shifts the expression of many repair-related genes", detail: "These are computational analyses of expression data, not clinical outcomes.", refs: [13] }
      ],
      trials: [],
      noTrials: "There is no large randomized human trial on record. Topical cosmetic studies are small and often sponsored by manufacturers.",
      related: ["bpc-157"]
    },

    /* ------------------------------------------------------------ gh axis */
    {
      slug: "ipamorelin", type: "compound", name: "Ipamorelin",
      aliases: ["NNC 26-0161"], category: "gh", status: "Research only",
      class: "Growth hormone secretagogue (ghrelin receptor agonist)", developer: "Novo Nordisk (1990s)",
      added: "2026-03-01", updated: "2026-07-28",
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
        { system: "Sport", level: "moderate", text: "Prohibited by WADA as a GH secretagogue", evidence: "established" }
      ],
      activity: [
        { title: "Ghrelin receptor (GHS-R1a)", evidence: "animal", summary: "Agonist that triggers GH release from the pituitary", refs: [14] },
        { title: "Selectivity", evidence: "animal", summary: "Did not raise ACTH or cortisol at doses well above those that release GH", detail: "This set it apart from GHRP-6 and GHRP-2, which raise cortisol and prolactin. The data come mainly from studies in swine.", refs: [14] }
      ],
      trials: [
        { title: "Postoperative ileus after bowel resection", evidence: "human rct", meta: ["about 114 adults undergoing bowel resection", "ipamorelin 0.03 mg/kg IV twice daily or placebo, for up to 7 days", "proof of concept", "randomized, double-blind, placebo-controlled"], body: "There was no significant difference between groups in time to the first tolerated meal. The drug was well tolerated.", note: "This is the only published efficacy trial. It was negative on its primary endpoint, and development for the indication did not continue.", refs: [15] }
      ],
      related: ["cjc-1295"]
    },
    {
      slug: "cjc-1295", type: "compound", name: "CJC-1295",
      aliases: ["CJC-1295 with DAC", "DAC:GRF"], category: "gh", status: "Research only",
      class: "GHRH analog", developer: "ConjuChem",
      added: "2026-03-01", updated: "2026-07-28",
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
        { system: "GH excess", level: "moderate", text: "Elevated IGF-1 lasting weeks brings the class risks of GH excess, such as fluid retention and insulin resistance", evidence: "contested" }
      ],
      activity: [
        { title: "GHRH receptor", evidence: "human rct", summary: "Agonist that increases GH secretion from the pituitary", refs: [16] },
        { title: "Pulsatility", evidence: "human rct", summary: "GH pulses persisted, with a large rise in trough GH levels", detail: "Continuous GHRH stimulation did not abolish the natural pulsatile pattern of GH release.", refs: [17] }
      ],
      trials: [
        { title: "Single and repeated dosing in healthy adults", evidence: "human rct", meta: ["healthy adults aged 21–61", "single subcutaneous doses of 30–250 µg/kg, or repeated doses, or placebo", "up to 28 days of follow-up", "randomized, double-blind, placebo-controlled"], body: "After a single dose, GH rose 2- to 10-fold for 6 days or more, and IGF-1 rose 1.5- to 3-fold for 9 to 11 days. The estimated half-life was 5.8 to 8.1 days. Repeated dosing kept IGF-1 raised for up to 28 days.", refs: [16] }
      ],
      related: ["ipamorelin"]
    },

    /* ------------------------------------------------------------ longevity */
    {
      slug: "epitalon", type: "compound", name: "Epitalon",
      aliases: ["Epithalon", "AEDG peptide"], category: "longevity", status: "Research only",
      class: "Synthetic tetrapeptide", developer: "V. Khavinson, St. Petersburg Institute of Bioregulation",
      added: "2026-04-14", updated: "2026-08-11",
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
        { system: "Telomerase", level: "unknown", text: "Activating telomerase is a theoretical cancer concern", evidence: "contested" }
      ],
      activity: [
        { title: "Telomerase", evidence: "in vitro", summary: "Reported to induce telomerase activity and telomere elongation in human somatic cells", refs: [18] },
        { title: "Lifespan", evidence: "animal", summary: "Lifespan extension reported in rodents and fruit flies, mostly from a single group" }
      ],
      trials: [],
      noTrials: "There are no randomized human trials from independent groups.",
      related: ["mots-c"]
    },
    {
      slug: "mots-c", type: "compound", name: "MOTS-c",
      aliases: ["Mitochondrial ORF of the 12S rRNA type-c"], category: "longevity", status: "Research only",
      class: "Mitochondrial-derived peptide", developer: "Discovered by Lee et al., 2015",
      added: "2026-05-09", updated: "2026-09-10",
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
        { system: "Human safety", level: "unknown", text: "No published human safety data for MOTS-c itself", evidence: "unknown" }
      ],
      activity: [
        { title: "AMPK activation", evidence: "animal", summary: "Activated AMPK through the folate cycle and AICAR accumulation, which improved insulin sensitivity in mice", refs: [20] },
        { title: "Nuclear translocation", evidence: "in vitro", summary: "Moves to the nucleus under metabolic stress and regulates stress-response genes", refs: [27] },
        { title: "Physical capacity", evidence: "animal", summary: "Improved physical performance in young and old mice. Levels rise with exercise in humans", refs: [21] }
      ],
      trials: [],
      noTrials: "There are no human efficacy trials of MOTS-c. Human data are observational measurements of circulating levels.",
      related: ["epitalon"]
    },

    /* ------------------------------------------------------------ noots */
    {
      slug: "selank", type: "compound", name: "Selank",
      aliases: ["TP-7"], category: "nootropic", status: "Approved",
      class: "Synthetic analog of tuftsin", developer: "Institute of Molecular Genetics, Russian Academy of Sciences",
      added: "2026-04-02", updated: "2026-06-30",
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
      trials: [],
      noTrials: "Russian clinical studies exist but are small, often unblinded, and mostly untranslated. None meet the bar for this record.",
      related: ["semax"]
    },
    {
      slug: "semax", type: "compound", name: "Semax",
      aliases: ["ACTH(4-7)-Pro-Gly-Pro"], category: "nootropic", status: "Approved",
      class: "Synthetic ACTH(4-10) analog", developer: "Institute of Molecular Genetics, Russian Academy of Sciences",
      added: "2026-04-02", updated: "2026-06-30",
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
      trials: [],
      noTrials: "Russian stroke studies exist but are small and of limited quality.",
      related: ["selank"]
    },

    /* ------------------------------------------------------------ melanocortin */
    {
      slug: "bremelanotide", type: "compound", name: "Bremelanotide",
      aliases: ["PT-141", "Vyleesi"], category: "melanocortin", status: "Approved",
      class: "Melanocortin receptor agonist", developer: "Palatin Technologies",
      added: "2026-05-22", updated: "2026-08-19",
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
        { title: "RECONNECT: Two phase 3 trials in HSDD", evidence: "human rct", meta: ["about 1,250 premenopausal women with HSDD across two trials", "bremelanotide 1.75 mg subcutaneous as needed, or placebo", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "Both trials showed significant improvement in desire and reduced distress about low desire compared with placebo. The number of satisfying sexual events did not differ significantly.", note: "The effect sizes were modest. Nausea was common, and few users continue the drug long term.", refs: [22] }
      ],
      related: []
    },

    /* ------------------------------------------------------------ immune */
    {
      slug: "thymosin-alpha-1", type: "compound", name: "Thymosin Alpha-1",
      aliases: ["Thymalfasin", "Zadaxin", "Tα1"], category: "immune", status: "Approved",
      class: "Thymic peptide", developer: "SciClone Pharmaceuticals (Zadaxin)",
      added: "2026-06-03", updated: "2026-09-01",
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
        { system: "Tolerability", level: "low", text: "Generally well tolerated in clinical trials", evidence: "human rct", refs: [23] }
      ],
      activity: [
        { title: "Toll-like receptors", evidence: "in vitro", summary: "Signals through TLR2 and TLR9 on dendritic cells" },
        { title: "T-cell maturation", evidence: "animal", summary: "Promotes T-cell differentiation and function" }
      ],
      trials: [
        { title: "TESTS: Thymosin alpha 1 in sepsis", evidence: "human rct", meta: ["about 1,100 adults with sepsis", "thymosin α1 subcutaneous or placebo, for 7 days", "28-day follow-up", "multicentre, randomized, double-blind, placebo-controlled"], body: "There was no significant difference in 28-day all-cause mortality between groups.", note: "This was a large, well-run trial that overturned earlier optimism from smaller studies.", refs: [23] }
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
