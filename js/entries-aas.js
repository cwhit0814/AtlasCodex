/* Atlas Codex: anabolic-androgenic steroids and growth hormone. Same schema as data.js. */
(function (A) {
  A.categories.splice(A.categories.findIndex((c) => c.id === "guides"), 0,
    { id: "aas", name: "aas", blurb: "Anabolic-androgenic steroids: testosterone and its synthetic derivatives." });

  const aasNote = "Scored relative to other AAS at doses used in the studies cited, not on an absolute scale.";
  const hpta = { system: "HPTA / fertility", level: "high", text: "Suppresses the body's own testosterone production and sperm production", evidence: "established", detail: "Exogenous androgens shut down LH and FSH through negative feedback. Testosterone alone was tested as a male contraceptive because it reliably causes azoospermia. Recovery after stopping is usually possible but can take months and is not guaranteed.", refs: [40] };

  A.entries.push(
    /* ------------------------------------------------------------ testosterone */
    {
      slug: "testosterone", type: "compound", name: "Testosterone",
      aliases: ["Testosterone cypionate", "Testosterone enanthate", "Depo-Testosterone", "AndroGel", "TRT"], category: "aas", status: "Approved",
      class: "Endogenous androgen (reference AAS)", developer: "Isolated and synthesised 1935",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["androgen", "AAS", "TRT", "hypogonadism", "Schedule III"],
      summary: "The body's main male sex hormone, and the reference compound that every other anabolic steroid is measured against. It is an approved medicine for low testosterone and a controlled substance.",
      names: "Cypionate is sold as Depo-Testosterone and enanthate as Xyosted (and formerly Delatestryl). Undecanoate is sold as Aveed or Nebido by injection and as Jatenzo, Tlando or Kyzatrex by mouth. Gels include AndroGel and Testim. Ester names such as \"enanthate\" describe how long the injection lasts; they are not brands. In the US testosterone is a Schedule III controlled substance. It is the one compound in this category with large modern outcome trials, which is why its clinical record below is long.",
      structure: "C<sub>19</sub>H<sub>28</sub>O<sub>2</sub>, molecular weight about 288.4 g/mol. It is the parent androgen. By convention its anabolic-to-androgenic ratio is fixed at 100:100, and other compounds are rated against it. It is not 17α-alkylated, so injected esters are not meaningfully toxic to the liver. Unmodified testosterone taken by mouth is mostly destroyed by the liver, which is why alkylated oral steroids were developed.",
      pubchem: "testosterone",
      profile: { note: aasNote, rows: [
        { label: "Anabolism", score: 4 }, { label: "Strength", score: 4 },
        { label: "Androgenic effects", score: 3, neg: true }, { label: "Estrogenic effects", score: 3, neg: true },
        { label: "Liver strain", score: 1, neg: true }, { label: "Risk load", score: 2, neg: true },
        { label: "Evidence quality", score: 5 } ] },
      risks: [
        hpta,
        { system: "Hematocrit", level: "moderate", text: "Raises red blood cell mass in proportion to dose, more in older men", evidence: "human rct", detail: "A hematocrit above about 54% is the usual threshold for stopping or reducing treatment. Higher hematocrit thickens the blood.", refs: [37] },
        { system: "Lipids", level: "moderate", text: "Lowers HDL cholesterol, especially at doses above replacement", evidence: "human rct", refs: [37] },
        { system: "Cardiac", level: "moderate", text: "Replacement doses were non-inferior to placebo for major cardiac events, but atrial fibrillation and pulmonary embolism were more common", evidence: "human rct", detail: "That result comes from TRAVERSE, in older men with low testosterone at replacement doses. It does not cover doses above replacement, where observational studies of steroid users suggest heart muscle changes and atherosclerosis.", refs: [39] },
        { system: "Estrogenic", level: "moderate", text: "Converts to estradiol. Gynecomastia and water retention scale with dose", evidence: "human rct", refs: [38] },
        { system: "Androgenic", level: "moderate", text: "Acne, scalp hair loss (through conversion to DHT) and prostate growth", evidence: "established" },
        { system: "Liver", level: "low", text: "Injected esters are not meaningfully toxic to the liver", evidence: "established" }
      ],
      activity: [
        { title: "Androgen receptor", evidence: "human rct", summary: "Binds the androgen receptor directly. Muscle gain rises steadily with dose across the whole range studied", detail: "In the dose-response trial, men had their own testosterone production suppressed, then received fixed weekly doses from 25 to 600 mg of enanthate for 20 weeks. Lean mass, muscle size and strength rose with every dose step, with no plateau. 600 mg weekly is the highest dose tested in a controlled trial, so anything above that is extrapolation.", refs: [37] },
        { title: "Aromatase", evidence: "human rct", summary: "Converted to estradiol, which drives fat changes, libido and part of the bone effect", detail: "A factorial trial that suppressed estradiol separately showed that lean mass and strength tracked testosterone, while fat mass tracked estradiol.", refs: [38] },
        { title: "5α-reductase", evidence: "established", summary: "Converted to DHT, which drives scalp hair loss, prostate growth and body hair" },
        { title: "SHBG", evidence: "human rct", summary: "Lowers SHBG, which raises free testosterone" }
      ],
      trials: [
        { title: "Supraphysiologic testosterone with and without training", evidence: "human rct", meta: ["43 men aged 19–40 with weight-training experience", "600 mg testosterone enanthate weekly or placebo, each with or without supervised training", "10 weeks", "randomised, placebo-controlled, four-arm"], body: "Testosterone plus training increased fat-free mass by about 6.1 kg, more than any other group. Testosterone without training still increased muscle size and strength more than placebo.", note: "This trial is often cited for the claim that the drug alone beat training alone on fat-free mass. The paper does not report that comparison.", refs: [36] },
        { title: "Dose-response with the body's own production suppressed", evidence: "human rct", meta: ["61 healthy men aged 18–35", "GnRH agonist plus testosterone enanthate 25, 50, 125, 300 or 600 mg weekly", "20 weeks", "randomised, dose-response"], body: "Fat-free mass, muscle size, strength and leg power all rose with dose across the five groups, with no plateau. Sexual function did not improve beyond replacement levels.", note: "Claims that a compound is \"X times as anabolic as testosterone\" are implicitly measured against this curve.", refs: [37] },
        { title: "Separating testosterone from estradiol", evidence: "human rct", meta: ["400 healthy men aged 20–50", "goserelin plus placebo gel or testosterone gel 1.25–10 g daily; a second group also received anastrozole", "16 weeks", "randomised, placebo-controlled, factorial"], body: "Lean mass, thigh muscle and leg-press strength tracked testosterone. Fat mass tracked estradiol. Suppressing estradiol worsened sexual function regardless of the testosterone level.", refs: [38] },
        { title: "TRAVERSE: cardiovascular safety of replacement", evidence: "human rct", meta: ["5,246 men aged 45–80 with low testosterone and cardiovascular disease or high risk", "testosterone gel or placebo", "mean follow-up about 22 months", "randomised, double-blind, non-inferiority"], body: "Major adverse cardiac events occurred in 7.0% against 7.3% (non-inferior). Atrial fibrillation, acute kidney injury and pulmonary embolism were more frequent with testosterone.", note: "This trial used replacement doses in older men. It says nothing about the doses used for performance.", refs: [39] }
      ],
      related: ["masteron", "equipoise", "anavar", "anadrol"]
    },

    /* ------------------------------------------------------------ masteron */
    {
      slug: "masteron", type: "compound", name: "Masteron",
      aliases: ["Drostanolone propionate", "Drostanolone enanthate", "Drolban"], category: "aas", status: "Discontinued",
      class: "DHT derivative (2α-methyl-DHT)", developer: "Syntex (1959)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["DHT", "AAS", "non-aromatizing", "Schedule III"],
      summary: "A modified form of DHT, once used to treat advanced breast cancer. It does not convert to estrogen, and today it is found almost only on the illicit market.",
      names: "Drostanolone propionate was sold as Masteron and Drolban for metastatic breast cancer in women from the 1960s. It is no longer marketed for humans anywhere. The enanthate ester is an illicit-market product only. It is a Schedule III controlled substance in the US.",
      structure: "Drostanolone is 2α-methyl-5α-dihydrotestosterone. It is already 5α-reduced, so 5α-reductase cannot strengthen it further, and it cannot be aromatised to estrogen. It is not 17α-alkylated, so it is not taken orally. Molecular weight about 304.5 g/mol (free steroid).",
      pubchem: "drostanolone",
      profile: { note: aasNote, rows: [
        { label: "Anabolism", score: 2 }, { label: "Strength", score: 3 },
        { label: "Androgenic effects", score: 3, neg: true }, { label: "Estrogenic effects", score: 0, neg: true },
        { label: "Liver strain", score: 1, neg: true }, { label: "Risk load", score: 2, neg: true },
        { label: "Evidence quality", score: 1 } ] },
      risks: [
        hpta,
        { system: "Scalp hair", level: "moderate", text: "Because it is a DHT derivative, it is commonly linked to accelerated pattern hair loss in susceptible men", evidence: "anecdotal" },
        { system: "Lipids", level: "moderate", text: "Expected to lower HDL like other non-aromatising androgens", evidence: "contested" },
        { system: "Product quality", level: "high", text: "All current supply is illicit. Concentration and sterility are unverified", evidence: "established" }
      ],
      activity: [
        { title: "Androgen receptor", evidence: "established", summary: "Binds the androgen receptor directly; there is no further 5α-reduction step" },
        { title: "Aromatase", evidence: "established", summary: "Not a substrate. It produces no estradiol, so estrogenic side effects come only from any other compounds taken with it" },
        { title: "Breast cancer use", evidence: "human obs", summary: "Historically used as an anti-estrogenic, androgenic therapy for metastatic breast cancer, before modern hormonal drugs" }
      ],
      trials: [],
      noTrials: "No modern controlled trials exist. The clinical literature is limited to breast cancer case series from the 1960s and 1970s.",
      related: ["testosterone", "anavar", "superdrol"]
    },

    /* ------------------------------------------------------------ equipoise */
    {
      slug: "equipoise", type: "compound", name: "Equipoise",
      aliases: ["EQ", "Boldenone undecylenate", "Boldenone"], category: "aas", status: "Veterinary",
      class: "Δ1-testosterone derivative", developer: "Ciba (1950s)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["boldenone", "AAS", "veterinary", "Schedule III"],
      summary: "A long-acting steroid ester made for horses. Chemically it is testosterone with one added double bond. It has essentially no human clinical data.",
      names: "Equipoise is the veterinary brand of boldenone undecylenate, licensed for horses in some countries. It has never been approved for humans. All human use relies on veterinary diversion or illicit production. It is a Schedule III controlled substance in the US.",
      structure: "Boldenone is 1-dehydrotestosterone: testosterone with a double bond between carbons 1 and 2. The undecylenate ester has a long half-life, so blood levels change slowly over weeks. Boldenone free steroid: C<sub>19</sub>H<sub>26</sub>O<sub>2</sub>, about 286.4 g/mol.",
      pubchem: "boldenone undecylenate",
      profile: { note: aasNote, rows: [
        { label: "Anabolism", score: 3 }, { label: "Strength", score: 2 },
        { label: "Androgenic effects", score: 2, neg: true }, { label: "Estrogenic effects", score: 2, neg: true },
        { label: "Liver strain", score: 1, neg: true }, { label: "Risk load", score: 3, neg: true },
        { label: "Evidence quality", score: 1 } ] },
      risks: [
        hpta,
        { system: "Hematocrit", level: "high", text: "Widely reported to raise red blood cell counts markedly", evidence: "anecdotal", detail: "Like other androgens it stimulates red blood cell production. User reports and clinic experience suggest it does so strongly, but no controlled human data exist." },
        { system: "Estrogenic", level: "low", text: "Aromatises to estradiol at a lower rate than testosterone", evidence: "in vitro" },
        { system: "Product quality", level: "high", text: "Veterinary or illicit material, with unverified concentration and sterility", evidence: "established" }
      ],
      activity: [
        { title: "Androgen receptor", evidence: "animal", summary: "Androgen receptor agonist with anabolic effects shown in livestock" },
        { title: "Aromatase", evidence: "in vitro", summary: "A weaker substrate than testosterone; it converts to an estrogen at a reduced rate" },
        { title: "5α-reductase", evidence: "in vitro", summary: "Converts to a 5α-reduced metabolite with low androgenic potency" }
      ],
      trials: [],
      noTrials: "There are no human clinical trials. Evidence comes from veterinary studies and user reports.",
      related: ["testosterone", "masteron"]
    },

    /* ------------------------------------------------------------ anavar */
    {
      slug: "anavar", type: "compound", name: "Anavar",
      aliases: ["Oxandrolone", "Oxandrin", "Var"], category: "aas", status: "Discontinued",
      class: "17α-alkylated DHT derivative (oral)", developer: "G.D. Searle (1964)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["oxandrolone", "AAS", "oral", "17α-alkylated", "burns"],
      summary: "An oral steroid used for decades to help patients regain weight after burns, surgery or trauma. It has real human trial data, but the FDA withdrew its approval in 2023.",
      names: "Sold as Anavar and later Oxandrin, for weight regain after surgery, trauma and severe burns, and in some cases for Turner syndrome and HIV wasting. The FDA withdrew approval of all oxandrolone products in 2023, citing liver and lipid risks and too little evidence of benefit. It is a Schedule III controlled substance in the US.",
      structure: "17α-methyl-2-oxa-5α-dihydrotestosterone: an oxygen atom replaces carbon 2 in the A-ring. C<sub>19</sub>H<sub>30</sub>O<sub>3</sub>, about 306.4 g/mol. The 17α-methyl group lets it survive the liver when taken orally, and is also the source of its liver toxicity. It does not aromatise.",
      pubchem: "oxandrolone",
      profile: { note: aasNote, rows: [
        { label: "Anabolism", score: 3 }, { label: "Strength", score: 3 },
        { label: "Androgenic effects", score: 1, neg: true }, { label: "Estrogenic effects", score: 0, neg: true },
        { label: "Liver strain", score: 3, neg: true }, { label: "Risk load", score: 3, neg: true },
        { label: "Evidence quality", score: 4 } ] },
      risks: [
        hpta,
        { system: "Lipids", level: "high", text: "Lowers HDL cholesterol sharply, a typical effect of oral 17α-alkylated androgens", evidence: "human rct", refs: [44] },
        { system: "Liver", level: "moderate", text: "17α-alkylation brings a risk of cholestasis, peliosis hepatis and liver tumours with prolonged use", evidence: "established", detail: "It is milder than oxymetholone at clinical doses, but the boxed warning applied to the whole class. Liver-enzyme rises were common in the burn trials." },
        { system: "Regulatory", level: "moderate", text: "Approval withdrawn in the US in 2023. Current supply is mostly illicit and often underdosed or substituted", evidence: "established", refs: [43] }
      ],
      activity: [
        { title: "Androgen receptor", evidence: "human rct", summary: "Gains in lean mass and strength in clinical populations, with relatively mild androgenic effects", refs: [41, 42, 44] },
        { title: "Aromatase", evidence: "established", summary: "Not a substrate. It produces no estrogen" },
        { title: "Protein catabolism", evidence: "human rct", summary: "In severe burns it reduced muscle wasting and sped up wound healing", refs: [41, 42] }
      ],
      trials: [
        { title: "Severe burns in adults", evidence: "human rct", meta: ["81 adults with severe burns", "oxandrolone 10 mg twice daily or placebo", "during acute hospitalisation", "multicentre, randomised, double-blind, placebo-controlled"], body: "Oxandrolone shortened length of stay and reduced weight loss compared with placebo.", refs: [41] },
        { title: "Severe burns in children: five-year follow-up", evidence: "human rct", meta: ["children with burns over 40% of body surface", "oxandrolone 0.1 mg/kg twice daily for one year or placebo", "5 years of follow-up", "randomised"], body: "Oxandrolone improved lean body mass, bone mineral content and height compared with placebo.", refs: [42] },
        { title: "Older community-dwelling men", evidence: "human rct", meta: ["32 men aged 60–87", "oxandrolone 20 mg daily or placebo", "12 weeks", "randomised, double-blind, placebo-controlled"], body: "Lean mass and strength increased and fat mass fell. HDL cholesterol dropped markedly and recovered after stopping.", refs: [44] }
      ],
      related: ["anadrol", "superdrol", "testosterone"]
    },

    /* ------------------------------------------------------------ anadrol */
    {
      slug: "anadrol", type: "compound", name: "Anadrol",
      aliases: ["Oxymetholone", "Anadrol-50", "Drol"], category: "aas", status: "Approved",
      class: "17α-alkylated DHT derivative (oral)", developer: "Syntex (1959)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["oxymetholone", "AAS", "oral", "17α-alkylated", "anemia"],
      summary: "A potent oral steroid still approved in the US for some anemias. It produces fast gains in weight and strength and carries some of the heaviest liver risk in the class.",
      names: "Sold as Anadrol-50, approved for anemias caused by poor red blood cell production, such as aplastic anemia and myelofibrosis. It has also been studied for HIV wasting. It is a Schedule III controlled substance in the US.",
      structure: "17α-methyl-2-hydroxymethylene-dihydrotestosterone. C<sub>21</sub>H<sub>32</sub>O<sub>3</sub>, about 332.5 g/mol. It is 17α-alkylated so it can be taken orally. It binds the androgen receptor only weakly for its potency, and it cannot aromatise, yet it is still associated with estrogen-like side effects.",
      pubchem: "oxymetholone",
      profile: { note: aasNote, rows: [
        { label: "Anabolism", score: 5 }, { label: "Strength", score: 5 },
        { label: "Androgenic effects", score: 3, neg: true }, { label: "Estrogenic effects", score: 4, neg: true },
        { label: "Liver strain", score: 5, neg: true }, { label: "Risk load", score: 5, neg: true },
        { label: "Evidence quality", score: 3 } ] },
      risks: [
        hpta,
        { system: "Liver", level: "high", text: "Carries a boxed warning for peliosis hepatis, liver tumours and cholestatic jaundice", evidence: "established", detail: "Liver-enzyme elevations were common in the HIV wasting trial, especially at higher doses.", refs: [45] },
        { system: "Lipids", level: "high", text: "Severe HDL reduction", evidence: "human rct" },
        { system: "Fluid / blood pressure", level: "high", text: "Marked water retention and blood-pressure increases", evidence: "established" },
        { system: "Estrogenic", level: "moderate", text: "Gynecomastia is reported even though it cannot aromatise. Direct estrogen-receptor activity has been proposed but not established", evidence: "contested" }
      ],
      activity: [
        { title: "Red blood cell production", evidence: "established", summary: "Stimulates erythropoietin, which underlies its approved use in anemia" },
        { title: "Androgen receptor", evidence: "contested", summary: "Weak receptor binding relative to its effect in the body, which suggests other mechanisms contribute" },
        { title: "Body mass", evidence: "human rct", summary: "Increased body weight and lean mass in a trial of HIV wasting", refs: [45] }
      ],
      trials: [
        { title: "HIV-associated wasting", evidence: "human rct", meta: ["men and women with HIV-associated wasting", "oxymetholone at two dose levels or placebo", "16 weeks", "randomised, double-blind, placebo-controlled, phase 3"], body: "Oxymetholone increased body weight and body cell mass compared with placebo. Liver-enzyme elevations were frequent, especially at the higher dose.", refs: [45] }
      ],
      related: ["anavar", "superdrol", "testosterone"]
    },

    /* ------------------------------------------------------------ superdrol */
    {
      slug: "superdrol", type: "compound", name: "Superdrol",
      aliases: ["Methasterone", "Methyldrostanolone"], category: "aas", status: "Never approved",
      class: "17α-alkylated DHT derivative (oral)", developer: "Syntex (1950s research); sold as a supplement in 2005",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["methasterone", "designer steroid", "oral", "17α-alkylated", "Schedule III"],
      summary: "An oral steroid that was never approved as a medicine. In the mid-2000s it was sold legally as a \"supplement\", and it has since been linked to many reported cases of serious liver injury.",
      names: "Methasterone was made in early steroid research but never developed into a medicine. In 2005 it was sold over the counter as Superdrol, a designer \"prohormone\". It was later restricted and is now a Schedule III controlled substance in the US under the Designer Anabolic Steroid Control Act of 2014.",
      structure: "2α,17α-dimethyl-5α-androstan-17β-ol-3-one, which is 17α-methylated drostanolone. C<sub>21</sub>H<sub>36</sub>O<sub>2</sub>, about 320.5 g/mol. It cannot aromatise.",
      pubchem: "methasterone",
      profile: { note: aasNote, rows: [
        { label: "Anabolism", score: 5 }, { label: "Strength", score: 4 },
        { label: "Androgenic effects", score: 2, neg: true }, { label: "Estrogenic effects", score: 0, neg: true },
        { label: "Liver strain", score: 5, neg: true }, { label: "Risk load", score: 5, neg: true },
        { label: "Evidence quality", score: 1 } ] },
      risks: [
        hpta,
        { system: "Liver", level: "high", text: "Severe cholestatic liver injury in multiple case reports, sometimes with kidney failure", evidence: "human obs", detail: "Cases typically present with jaundice and intense itching weeks into use. Some required hospitalisation, and the evidence base is a series of case reports.", refs: [46] },
        { system: "Lipids", level: "high", text: "Severe HDL suppression, typical of oral 17α-alkylated androgens", evidence: "contested" },
        { system: "Product quality", level: "high", text: "No pharmaceutical-grade source has ever existed", evidence: "established" }
      ],
      activity: [
        { title: "Androgen receptor", evidence: "animal", summary: "A potent oral anabolic in early rodent assays, with relatively low androgenic activity" },
        { title: "Aromatase", evidence: "established", summary: "Not a substrate. It produces no estrogen" }
      ],
      trials: [],
      noTrials: "It has never been tested in a human clinical trial. Human data are limited to case reports of liver injury.",
      noTrialsRefs: [46],
      related: ["anadrol", "anavar", "masteron"]
    },

    /* ------------------------------------------------------------ growth hormone */
    {
      slug: "growth-hormone", type: "compound", name: "Growth Hormone",
      aliases: ["GH", "HGH", "Somatropin", "Genotropin", "Norditropin", "Humatrope"], category: "gh", status: "Approved",
      class: "Recombinant human growth hormone (191-aa protein)", developer: "Genentech (first recombinant GH, 1985)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["somatropin", "IGF-1", "growth hormone", "GH axis", "anti-aging"],
      summary: "Recombinant human growth hormone, approved for growth hormone deficiency and several growth disorders. In healthy adults it adds lean mass, mostly as water and connective tissue, with little evidence of better strength.",
      names: "Sold as somatropin under brands including Genotropin, Norditropin, Humatrope, Omnitrope and Saizen. Long-acting weekly versions include Skytrofa, Sogroya and Ngenla. Recombinant GH replaced cadaver-derived pituitary GH in 1985 after that was linked to Creutzfeldt-Jakob disease. In the US, distributing GH for off-label uses such as anti-aging or bodybuilding is a federal crime.",
      structure: "A 191-amino-acid, 22 kDa protein identical to the main form of pituitary GH. It acts directly, and indirectly through IGF-1 made by the liver. Its half-life is under an hour after IV injection and a few hours after subcutaneous injection, but IGF-1 stays elevated much longer.",
      pubchem: false,
      profile: {
        note: "Scored for use in healthy adults, not for approved replacement in deficiency.",
        rows: [
          { label: "Lean mass", score: 3 }, { label: "Strength / performance", score: 1 },
          { label: "Fat loss", score: 3 }, { label: "Side-effect burden", score: 3, neg: true },
          { label: "Risk load", score: 3, neg: true }, { label: "Evidence quality", score: 4 }
        ]
      },
      risks: [
        { system: "Fluid retention", level: "high", text: "Swelling, joint pain and carpal tunnel symptoms are the most common adverse effects", evidence: "human rct", refs: [48] },
        { system: "Glucose", level: "moderate", text: "Reduces insulin sensitivity and can raise fasting glucose", evidence: "human rct", refs: [48] },
        { system: "Acromegalic changes", level: "moderate", text: "Long-term excess can cause the features of acromegaly: soft-tissue and bone overgrowth, organ enlargement and cardiomyopathy", evidence: "established" },
        { system: "Cancer", level: "unknown", text: "IGF-1 promotes cell growth, and whether long-term supraphysiologic use raises cancer risk is unresolved", evidence: "contested" },
        { system: "Product quality", level: "high", text: "Grey-market GH is often counterfeit, underdosed or degraded by poor storage", evidence: "established" }
      ],
      activity: [
        { title: "GH receptor / IGF-1", evidence: "established", summary: "Activates the GH receptor and JAK2–STAT5 signalling, and raises IGF-1 production in the liver and tissues" },
        { title: "Lipolysis", evidence: "human rct", summary: "Increases fat breakdown and reduces abdominal fat", refs: [47, 48] },
        { title: "Lean mass", evidence: "human rct", summary: "Raises lean body mass, but much of the gain is extracellular water and connective tissue rather than muscle protein", refs: [49] }
      ],
      trials: [
        { title: "GH in men over 60", evidence: "human rct", meta: ["21 healthy men aged 61–81 with low IGF-1", "GH injections three times weekly or no treatment", "6 months", "randomised, controlled"], body: "Lean body mass rose about 8.8% and fat tissue fell about 14.4% in the GH group.", note: "This small trial started much of the anti-aging interest in GH. Later systematic reviews found side effects common and benefits limited to body composition.", refs: [47, 48] },
        { title: "Systematic review: GH and athletic performance", evidence: "human rct", meta: ["44 articles, 27 study samples, about 300 healthy young participants", "GH against placebo or no treatment", "systematic review of randomised trials"], body: "GH increased lean body mass by about 2 kg but did not improve strength or exercise capacity. Fluid retention and fatigue were more common.", refs: [49] },
        { title: "Recreational athletes", evidence: "human rct", meta: ["96 recreationally trained men and women", "GH, testosterone (men), both, or placebo", "8 weeks", "randomised, double-blind, placebo-controlled"], body: "GH lowered fat mass and raised lean mass, mostly extracellular water. It improved sprint capacity by a few percent, more when combined with testosterone in men. Strength, power and endurance did not improve.", refs: [50] }
      ],
      related: ["cjc-1295", "ipamorelin", "testosterone"]
    }
  );

  Object.assign(A.references, {
    36: "Bhasin S et al. The effects of supraphysiologic doses of testosterone on muscle size and strength in normal men. N Engl J Med 1996;335:1–7.",
    37: "Bhasin S et al. Testosterone dose-response relationships in healthy young men. Am J Physiol Endocrinol Metab 2001;281:E1172–E1181.",
    38: "Finkelstein JS et al. Gonadal steroids and body composition, strength, and sexual function in men. N Engl J Med 2013;369:1011–1022.",
    39: "Lincoff AM et al. Cardiovascular Safety of Testosterone-Replacement Therapy. N Engl J Med 2023;389:107–117.",
    40: "World Health Organization Task Force on Methods for the Regulation of Male Fertility. Contraceptive efficacy of testosterone-induced azoospermia in normal men. Lancet 1990;336:955–959.",
    41: "Wolf SE et al. Effects of oxandrolone on outcome measures in the severely burned: a multicenter prospective randomized double-blind trial. J Burn Care Res 2006;27:131–139.",
    42: "Porro LJ et al. Five-year outcomes after oxandrolone administration in severely burned children: a randomized clinical trial of safety and efficacy. J Am Coll Surg 2012;214:489–502.",
    43: "US Food and Drug Administration. Withdrawal of approval of oxandrolone drug products. Federal Register, 2023.",
    44: "Schroeder ET et al. Effects of an oral androgen on muscle and metabolism in older, community-dwelling men. Am J Physiol Endocrinol Metab 2003;284:E120–E128.",
    45: "Hengge UR et al. Oxymetholone for the treatment of HIV-wasting: a double-blind, randomized, placebo-controlled phase III trial in eugonadal men and women. HIV Clin Trials 2003;4:150–163.",
    46: "Nasr J, Ahmad J. Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron): a case report and literature review. Dig Dis Sci 2009;54:1144–1146.",
    47: "Rudman D et al. Effects of human growth hormone in men over 60 years old. N Engl J Med 1990;323:1–6.",
    48: "Liu H et al. Systematic review: the safety and efficacy of growth hormone in the healthy elderly. Ann Intern Med 2007;146:104–115.",
    49: "Liu H et al. Systematic review: the effects of growth hormone on athletic performance. Ann Intern Med 2008;148:747–758.",
    50: "Meinhardt U et al. The effects of growth hormone on body composition and physical performance in recreational athletes: a randomized trial. Ann Intern Med 2010;152:568–577."
  });
})(window.ATLAS);
