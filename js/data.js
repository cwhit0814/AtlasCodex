/*
 * Atlas Codex content.
 * Every page on the site is rendered from this file. To add an entry, copy
 * one of the objects below, give it a unique `slug`, and fill in the fields.
 *
 *   type:     "compound" (shows in the Codex index) or "article" (guides/notes)
 *   status:   "Approved" | "Investigational" | "Research only"
 *   sections: [{ heading, body }]  — body is HTML
 */
window.ATLAS = {
  site: {
    title: "Atlas Codex",
    tagline: "An open reference library of peptides and research compounds.",
    disclaimer:
      "Atlas Codex is an educational reference. Nothing here is medical advice, and nothing here is an endorsement of using any compound. Talk to a licensed clinician before making health decisions."
  },

  categories: [
    { id: "metabolic", name: "Metabolic", blurb: "Incretin mimetics and compounds studied for weight and glucose control." },
    { id: "repair", name: "Tissue Repair", blurb: "Peptides studied for wound healing, tendon and gut repair." },
    { id: "gh", name: "Growth Hormone Axis", blurb: "Secretagogues and GHRH analogs that act on the GH pathway." },
    { id: "nootropic", name: "Neuro & Cognitive", blurb: "Peptides studied for anxiety, cognition and neuroprotection." },
    { id: "longevity", name: "Longevity", blurb: "Compounds investigated for ageing biology and mitochondrial function." },
    { id: "immune", name: "Immune", blurb: "Thymic peptides and immunomodulators." },
    { id: "skin", name: "Skin & Hair", blurb: "Cosmetic and dermatological peptides." },
    { id: "melanocortin", name: "Melanocortin", blurb: "Agonists of the melanocortin receptor family." },
    { id: "guides", name: "Guides", blurb: "Background reading on how to evaluate research." }
  ],

  entries: [
    {
      slug: "semaglutide",
      type: "compound",
      name: "Semaglutide",
      aliases: ["Ozempic", "Wegovy", "Rybelsus"],
      category: "metabolic",
      status: "Approved",
      class: "GLP-1 receptor agonist",
      developer: "Novo Nordisk",
      added: "2026-01-12",
      updated: "2026-09-18",
      tags: ["GLP-1", "obesity", "type 2 diabetes", "incretin"],
      summary:
        "A long-acting GLP-1 receptor agonist approved for type 2 diabetes and chronic weight management, given as a weekly injection or a daily tablet.",
      sections: [
        { heading: "Overview", body: "<p>Semaglutide is an analog of human glucagon-like peptide-1 (GLP-1). A fatty-acid side chain lets it bind albumin, which slows clearance and gives it a half-life of about a week.</p>" },
        { heading: "Mechanism", body: "<p>It activates the GLP-1 receptor. That increases glucose-dependent insulin release, suppresses glucagon, slows gastric emptying, and acts on appetite centres in the brain.</p>" },
        { heading: "Regulatory history", body: "<ul><li><strong>2017</strong>: FDA approval for type 2 diabetes (Ozempic).</li><li><strong>2019</strong>: oral form approved (Rybelsus).</li><li><strong>2021</strong>: approved for chronic weight management (Wegovy).</li></ul>" },
        { heading: "Key research", body: "<p>The STEP trial programme studied semaglutide 2.4 mg for weight management. The SELECT trial studied cardiovascular outcomes in adults with overweight or obesity who did not have diabetes.</p>" }
      ],
      related: ["tirzepatide", "retatrutide"]
    },
    {
      slug: "tirzepatide",
      type: "compound",
      name: "Tirzepatide",
      aliases: ["Mounjaro", "Zepbound"],
      category: "metabolic",
      status: "Approved",
      class: "Dual GIP / GLP-1 receptor agonist",
      developer: "Eli Lilly",
      added: "2026-01-12",
      updated: "2026-08-30",
      tags: ["GIP", "GLP-1", "obesity", "type 2 diabetes", "incretin"],
      summary:
        "A once-weekly peptide that activates both the GIP and GLP-1 receptors, approved for type 2 diabetes and chronic weight management.",
      sections: [
        { heading: "Overview", body: "<p>Tirzepatide is a 39-amino-acid peptide built on the GIP sequence. It is engineered to also activate the GLP-1 receptor, which makes it the first approved dual incretin agonist.</p>" },
        { heading: "Mechanism", body: "<p>Activating both GIP and GLP-1 receptors improves insulin secretion and sensitivity and reduces appetite. In trials it lowered weight more than single GLP-1 agonism did.</p>" },
        { heading: "Regulatory history", body: "<ul><li><strong>2022</strong>: FDA approval for type 2 diabetes (Mounjaro).</li><li><strong>2023</strong>: approved for chronic weight management (Zepbound).</li></ul>" },
        { heading: "Key research", body: "<p>The SURPASS programme covered glycaemic control and the SURMOUNT programme covered weight management.</p>" }
      ],
      related: ["semaglutide", "retatrutide"]
    },
    {
      slug: "retatrutide",
      type: "compound",
      name: "Retatrutide",
      aliases: ["LY3437943"],
      category: "metabolic",
      status: "Investigational",
      class: "Triple GIP / GLP-1 / glucagon receptor agonist",
      developer: "Eli Lilly",
      added: "2026-02-03",
      updated: "2026-09-02",
      tags: ["GIP", "GLP-1", "glucagon", "obesity", "triple agonist"],
      summary:
        "An investigational once-weekly peptide that activates three receptors (GIP, GLP-1 and glucagon) and is in Phase 3 trials for obesity.",
      sections: [
        { heading: "Overview", body: "<p>Retatrutide adds glucagon-receptor activity to the dual incretin approach. Glucagon signalling is thought to raise energy expenditure on top of the appetite effects of the incretins.</p>" },
        { heading: "Key research", body: "<p>In a 48-week Phase 2 trial published in the <em>New England Journal of Medicine</em> in 2023, the highest dose produced mean weight reductions of about 24%. The Phase 3 TRIUMPH programme is ongoing.</p>" },
        { heading: "Status", body: "<p>Not approved by any major regulator. It is available only inside clinical trials.</p>" }
      ],
      related: ["tirzepatide", "semaglutide"]
    },
    {
      slug: "bpc-157",
      type: "compound",
      name: "BPC-157",
      aliases: ["Body Protection Compound-157", "PL 14736"],
      category: "repair",
      status: "Research only",
      class: "Synthetic pentadecapeptide",
      developer: "University of Zagreb (research origin)",
      added: "2026-01-20",
      updated: "2026-07-14",
      tags: ["gut", "tendon", "angiogenesis", "preclinical"],
      summary:
        "A 15-amino-acid peptide derived from a protein found in gastric juice. It is widely studied in animal models of tissue and gut injury but has very little human clinical data.",
      sections: [
        { heading: "Overview", body: "<p>BPC-157 is a partial sequence of a larger \"body protection compound\" isolated from gastric juice. Most of the published work comes from one research group and uses rodent models.</p>" },
        { heading: "Proposed mechanisms", body: "<p>Preclinical papers describe effects on angiogenesis (VEGFR2 signalling), nitric-oxide pathways and growth-factor expression. None of these have been confirmed in controlled human trials.</p>" },
        { heading: "Evidence quality", body: "<p>The literature is mostly animal studies. Human data are limited to small or early-stage reports. Treat claims of human benefit with caution.</p>" },
        { heading: "Regulatory notes", body: "<p>Not approved for human use. In 2023 the US FDA listed it among bulk substances that raise significant safety concerns for compounding.</p>" }
      ],
      related: ["tb-500", "ghk-cu"]
    },
    {
      slug: "tb-500",
      type: "compound",
      name: "TB-500",
      aliases: ["Thymosin beta-4 fragment"],
      category: "repair",
      status: "Research only",
      class: "Synthetic fragment of thymosin β4",
      developer: "N/A",
      added: "2026-01-20",
      updated: "2026-06-21",
      tags: ["actin", "wound healing", "preclinical", "WADA prohibited"],
      summary:
        "A synthetic peptide based on the active region of thymosin beta-4, a naturally occurring actin-binding protein involved in cell migration and wound repair.",
      sections: [
        { heading: "Overview", body: "<p>Thymosin β4 (Tβ4) is a 43-amino-acid protein that sequesters G-actin. TB-500 is marketed as a synthetic analog of its actin-binding region.</p>" },
        { heading: "Research", body: "<p>Full-length Tβ4 has been studied for dermal and corneal wound healing and cardiac repair. Evidence specific to the TB-500 fragment comes mostly from preclinical and veterinary sources.</p>" },
        { heading: "Regulatory notes", body: "<p>Not approved for human use. It is prohibited in sport under the WADA list.</p>" }
      ],
      related: ["bpc-157", "thymosin-alpha-1"]
    },
    {
      slug: "ghk-cu",
      type: "compound",
      name: "GHK-Cu",
      aliases: ["Copper peptide", "Glycyl-L-histidyl-L-lysine copper"],
      category: "skin",
      status: "Approved",
      class: "Copper-binding tripeptide",
      developer: "Discovered by Loren Pickart (1973)",
      added: "2026-02-10",
      updated: "2026-08-05",
      tags: ["collagen", "cosmetic", "copper", "skin"],
      summary:
        "A naturally occurring tripeptide–copper complex found in human plasma. It is widely used in topical cosmetics for its effects on skin remodelling.",
      sections: [
        { heading: "Overview", body: "<p>GHK was first isolated from human plasma, and its levels fall with age. It binds copper(II) with high affinity, and the complex is the form most often studied.</p>" },
        { heading: "Research", body: "<p>In vitro and topical studies report increased collagen and glycosaminoglycan synthesis and support for wound remodelling. Gene-expression analyses suggest broad effects on tissue-repair pathways.</p>" },
        { heading: "Status", body: "<p>Common as a cosmetic ingredient. The \"Approved\" label here refers to cosmetic use only; it is not an approved drug.</p>" }
      ],
      related: ["bpc-157"]
    },
    {
      slug: "ipamorelin",
      type: "compound",
      name: "Ipamorelin",
      aliases: ["NNC 26-0161"],
      category: "gh",
      status: "Research only",
      class: "Growth hormone secretagogue (ghrelin receptor agonist)",
      developer: "Novo Nordisk (1990s)",
      added: "2026-03-01",
      updated: "2026-07-28",
      tags: ["GHS-R1a", "growth hormone", "pentapeptide"],
      summary:
        "A selective pentapeptide agonist of the ghrelin receptor. It triggers growth hormone release with little effect on cortisol or prolactin.",
      sections: [
        { heading: "Overview", body: "<p>Ipamorelin was developed as a selective growth hormone secretagogue. Earlier compounds in the class also raised ACTH and cortisol; its selectivity set it apart from them.</p>" },
        { heading: "Clinical history", body: "<p>It reached mid-stage clinical trials for postoperative ileus but was not taken to approval.</p>" },
        { heading: "Regulatory notes", body: "<p>Not approved for human use. It is prohibited in sport under the WADA list.</p>" }
      ],
      related: ["cjc-1295"]
    },
    {
      slug: "cjc-1295",
      type: "compound",
      name: "CJC-1295",
      aliases: ["DAC:GRF", "Modified GRF (1-29)"],
      category: "gh",
      status: "Research only",
      class: "GHRH analog",
      developer: "ConjuChem",
      added: "2026-03-01",
      updated: "2026-07-28",
      tags: ["GHRH", "growth hormone", "albumin binding"],
      summary:
        "A synthetic analog of growth-hormone-releasing hormone (GHRH). The DAC version binds albumin and stays in the body for days rather than minutes.",
      sections: [
        { heading: "Overview", body: "<p>CJC-1295 modifies the first 29 amino acids of GHRH to resist enzymatic breakdown. The \"with DAC\" form adds a Drug Affinity Complex that binds serum albumin, which extends its half-life to several days.</p>" },
        { heading: "Research", body: "<p>Early human studies showed sustained rises in GH and IGF-1 after a single dose. Clinical development was discontinued.</p>" },
        { heading: "Terminology", body: "<p>Vendors often sell \"CJC-1295 without DAC\". That compound is more accurately called Modified GRF (1-29) and is a different molecule.</p>" }
      ],
      related: ["ipamorelin"]
    },
    {
      slug: "epitalon",
      type: "compound",
      name: "Epitalon",
      aliases: ["Epithalon", "AEDG peptide"],
      category: "longevity",
      status: "Research only",
      class: "Synthetic tetrapeptide (Ala-Glu-Asp-Gly)",
      developer: "V. Khavinson, St. Petersburg Institute of Bioregulation",
      added: "2026-04-14",
      updated: "2026-08-11",
      tags: ["telomerase", "pineal", "ageing"],
      summary:
        "A four-amino-acid peptide modelled on a pineal gland extract, studied mainly in Russia for effects on ageing markers.",
      sections: [
        { heading: "Overview", body: "<p>Epitalon is a synthetic version of the active component claimed for epithalamin, a bovine pineal extract.</p>" },
        { heading: "Research", body: "<p>Reports include telomerase activation in cell cultures and lifespan effects in rodents. Most studies come from a single research school, and independent replication is limited.</p>" }
      ],
      related: ["mots-c"]
    },
    {
      slug: "selank",
      type: "compound",
      name: "Selank",
      aliases: ["TP-7"],
      category: "nootropic",
      status: "Approved",
      class: "Synthetic analog of tuftsin (heptapeptide)",
      developer: "Institute of Molecular Genetics, Russian Academy of Sciences",
      added: "2026-04-02",
      updated: "2026-06-30",
      tags: ["anxiolytic", "tuftsin", "intranasal"],
      summary:
        "A heptapeptide derived from the immunomodulatory peptide tuftsin. It is registered in Russia as an anxiolytic nasal spray.",
      sections: [
        { heading: "Overview", body: "<p>Selank extends tuftsin (Thr-Lys-Pro-Arg) with a Pro-Gly-Pro tail that improves its stability.</p>" },
        { heading: "Status", body: "<p>Approved in Russia. It is not approved by the FDA or EMA, so the \"Approved\" label here applies to Russia only.</p>" }
      ],
      related: ["semax"]
    },
    {
      slug: "semax",
      type: "compound",
      name: "Semax",
      aliases: ["ACTH(4-7)-Pro-Gly-Pro"],
      category: "nootropic",
      status: "Approved",
      class: "Synthetic ACTH(4-10) analog",
      developer: "Institute of Molecular Genetics, Russian Academy of Sciences",
      added: "2026-04-02",
      updated: "2026-06-30",
      tags: ["neuroprotection", "BDNF", "stroke", "intranasal"],
      summary:
        "A heptapeptide based on a fragment of adrenocorticotropic hormone, without hormonal activity. It is used in Russia for stroke and cognitive disorders.",
      sections: [
        { heading: "Overview", body: "<p>Semax keeps the ACTH(4-7) sequence and adds Pro-Gly-Pro. This removes the hormone's corticotropic effects and improves stability.</p>" },
        { heading: "Research", body: "<p>Studies report increased BDNF expression and neuroprotective effects in ischaemia models.</p>" },
        { heading: "Status", body: "<p>On Russia's list of essential medicines. It is not approved by the FDA or EMA, so the \"Approved\" label here applies to Russia only.</p>" }
      ],
      related: ["selank"]
    },
    {
      slug: "mots-c",
      type: "compound",
      name: "MOTS-c",
      aliases: ["Mitochondrial ORF of the 12S rRNA type-c"],
      category: "longevity",
      status: "Research only",
      class: "Mitochondrial-derived peptide (16 aa)",
      developer: "Discovered by Lee et al., 2015",
      added: "2026-05-09",
      updated: "2026-09-10",
      tags: ["mitochondria", "AMPK", "exercise mimetic", "metabolism"],
      summary:
        "A 16-amino-acid peptide encoded in the mitochondrial genome. It regulates metabolism and is studied as an exercise mimetic.",
      sections: [
        { heading: "Overview", body: "<p>MOTS-c was described in <em>Cell Metabolism</em> in 2015. It is encoded by a short open reading frame inside the mitochondrial 12S rRNA gene.</p>" },
        { heading: "Research", body: "<p>In mice, MOTS-c activated AMPK, improved insulin sensitivity and protected against diet-induced obesity. Human data are early-stage.</p>" }
      ],
      related: ["epitalon"]
    },
    {
      slug: "bremelanotide",
      type: "compound",
      name: "Bremelanotide",
      aliases: ["PT-141", "Vyleesi"],
      category: "melanocortin",
      status: "Approved",
      class: "Melanocortin receptor agonist",
      developer: "Palatin Technologies",
      added: "2026-05-22",
      updated: "2026-08-19",
      tags: ["MC4R", "melanocortin", "HSDD"],
      summary:
        "A cyclic melanocortin agonist approved in the US for hypoactive sexual desire disorder (HSDD) in premenopausal women.",
      sections: [
        { heading: "Overview", body: "<p>Bremelanotide is a metabolite of melanotan II. It acts mainly on the MC4 receptor in the central nervous system.</p>" },
        { heading: "Regulatory history", body: "<p>FDA approved in 2019 as an on-demand subcutaneous autoinjector (Vyleesi).</p>" },
        { heading: "Known effects", body: "<p>Common adverse effects in trials included nausea, flushing and transient increases in blood pressure.</p>" }
      ],
      related: []
    },
    {
      slug: "thymosin-alpha-1",
      type: "compound",
      name: "Thymosin Alpha-1",
      aliases: ["Thymalfasin", "Zadaxin", "Tα1"],
      category: "immune",
      status: "Approved",
      class: "Thymic peptide (28 aa)",
      developer: "SciClone Pharmaceuticals (Zadaxin)",
      added: "2026-06-03",
      updated: "2026-09-01",
      tags: ["T-cell", "hepatitis B", "immunomodulator"],
      summary:
        "A 28-amino-acid peptide originally isolated from thymus tissue. As thymalfasin it is approved in a number of countries as an immunomodulator.",
      sections: [
        { heading: "Overview", body: "<p>Tα1 promotes T-cell maturation and modulates innate immune signalling, including Toll-like receptor pathways.</p>" },
        { heading: "Status", body: "<p>Approved in several countries, mainly for chronic hepatitis B and as a vaccine adjuvant. It is not FDA approved, so the \"Approved\" label here does not apply to the US.</p>" }
      ],
      related: ["tb-500"]
    },

    /* ---- Articles / guides ---- */
    {
      slug: "reading-clinical-trial-phases",
      type: "article",
      name: "Reading Clinical Trial Phases",
      category: "guides",
      status: "Guide",
      added: "2026-02-15",
      updated: "2026-05-01",
      tags: ["methodology", "evidence"],
      summary: "What Phase 1, 2, 3 and 4 trials actually test, and why a preclinical result says little about effects in humans.",
      sections: [
        { heading: "Preclinical", body: "<p>Cell and animal work shows whether a mechanism is plausible. It does not show that the compound is safe or effective in humans.</p>" },
        { heading: "Phase 1", body: "<p>Small studies, often in healthy volunteers, that look at safety, tolerability and pharmacokinetics.</p>" },
        { heading: "Phase 2", body: "<p>Dose-finding and early efficacy in the target population.</p>" },
        { heading: "Phase 3", body: "<p>Large randomised controlled trials that confirm efficacy and safety. Regulators base approval decisions on these.</p>" },
        { heading: "Phase 4", body: "<p>Monitoring after approval, including rare adverse events.</p>" }
      ]
    },
    {
      slug: "understanding-half-life",
      type: "article",
      name: "Understanding Peptide Half-Life",
      category: "guides",
      status: "Guide",
      added: "2026-03-20",
      updated: "2026-06-12",
      tags: ["pharmacokinetics", "chemistry"],
      summary: "Why native peptides break down within minutes and how chemists stretch that to days.",
      sections: [
        { heading: "The problem", body: "<p>Native peptides are cleaved quickly by proteases and filtered by the kidneys.</p>" },
        { heading: "Common strategies", body: "<ul><li>Amino-acid substitution (e.g. D-amino acids, Aib)</li><li>Fatty-acid acylation for albumin binding (semaglutide)</li><li>Albumin-binding complexes (CJC-1295 with DAC)</li><li>PEGylation and cyclisation</li></ul>" }
      ]
    },
    {
      slug: "evaluating-evidence",
      type: "article",
      name: "Evaluating the Evidence",
      category: "guides",
      status: "Guide",
      added: "2026-07-07",
      updated: "2026-09-25",
      tags: ["methodology", "evidence", "critical reading"],
      summary: "A short checklist for judging claims about any compound: who ran the study, in whom, and how large it was.",
      sections: [
        { heading: "Checklist", body: "<ol><li>Was it done in humans, animals or cells?</li><li>Was it randomised and controlled?</li><li>How many participants?</li><li>Has an independent group replicated it?</li><li>Who funded it?</li></ol>" }
      ]
    }
  ]
};
