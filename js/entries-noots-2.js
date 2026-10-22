/* Atlas Codex: nootropics added 2026-10-21 (maxpharma list, researched per batch). Same schema as data.js. */
/* batch a */
(function (A) {
  const note = "Scored relative to other nootropics in the codex. The evidence here is animal or in vitro unless a trial is listed.";
  const grey = { system: "Product quality", level: "moderate", text: "Usually bought as unregulated bulk powder. Purity and identity are unverified", evidence: "established" };

  A.entries.push(
    /* ---------------------------------------------------------------- coluracetam */
    {
      slug: "coluracetam", type: "compound", name: "Coluracetam",
      aliases: ["MKC-231"], category: "nootropic", status: "Research only",
      class: "Racetam-type high-affinity choline uptake enhancer", developer: "Japanese industry research (code MKC-231, 1990s)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["racetam", "choline uptake", "acetylcholine", "animal only"],
      summary: "A racetam-like compound developed in Japan as MKC-231. In rats it raised the uptake of choline into nerve endings and eased memory deficits. No published human study could be found.",
      names: "Known in the literature as MKC-231. It was never approved anywhere. It is sold online as a gray-market supplement.",
      structure: "2-(2-oxopyrrolidin-1-yl)-N-(2,3-dimethyl-5,6,7,8-tetrahydrofuro[2,3-b]quinolin-4-yl)acetamide. It joins the pyrrolidone ring of the racetams to a fused furoquinoline ring.",
      pubchem: "coluracetam",
      profile: { note: note, rows: [
        { label: "Preclinical signal", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No published human safety data", evidence: "unknown" },
        { system: "Blood sugar", level: "unknown", text: "Injected into the brain of rats, it raised plasma glucose, though less than neostigmine", evidence: "animal", detail: "The authors judged the effect pharmacologically negligible. How this applies to oral use in people is not known.", refs: [3009] },
        grey
      ],
      activity: [
        { title: "Choline uptake", evidence: "animal", summary: "In rats with a toxin-induced cholinergic deficit, it raised the maximal rate of high-affinity choline uptake about 1.6-fold. It did not do this in normal rats", refs: [3003, 3006] },
        { title: "Acetylcholine", evidence: "animal", summary: "Oral 10 mg/kg reversed the fall in basal hippocampal acetylcholine in the same rat model", refs: [3004] },
        { title: "Water-maze memory", evidence: "animal", summary: "Eight days of oral dosing improved water-maze performance in rats, and the benefit lasted up to 24 hours after the last dose, when the drug was no longer detectable in brain", refs: [3005, 3006] },
        { title: "Working memory in mice", evidence: "animal", summary: "Repeated dosing for 11 days improved a T-maze memory deficit in mice. A single dose did not", refs: [3007] },
        { title: "Phencyclidine model", evidence: "animal", summary: "Later treatment reversed cognitive deficits and loss of septal cholinergic cells caused by repeated phencyclidine in rats", refs: [3008] },
        { title: "Glutamate toxicity", evidence: "in vitro", summary: "Reduced glutamate-induced cell death in cultured rat cortical neurons", refs: [3009] },
        { title: "Stress-related gut pain", evidence: "animal", summary: "In rats under repeated stress, it relieved visceral pain and raised choline transporter levels and acetylcholine in the gut and spinal cord", refs: [3000, 3001, 3002] }
      ],
      trials: [],
      noTrials: "No human study of coluracetam was found in PubMed. Everything above comes from rats, mice and cell cultures.",
      related: ["piracetam", "aniracetam", "nefiracetam"]
    },

    /* ---------------------------------------------------------------- fasoracetam */
    {
      slug: "fasoracetam", type: "compound", name: "Fasoracetam",
      aliases: ["NS-105", "NFC-1"], category: "nootropic", status: "Investigational",
      class: "Racetam (metabotropic glutamate receptor modulator)", developer: "Japanese industry research (code NS-105)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["racetam", "mGluR", "ADHD", "investigational"],
      summary: "A racetam first developed in Japan for cerebrovascular disease and cognition. It acts on metabotropic glutamate receptors, and its main human test was a small open-label ADHD study in adolescents.",
      names: "Developed in Japan as NS-105 for cerebrovascular disease, and later studied in adolescents with ADHD under the code NFC-1. It has no approval in any country.",
      structure: "A pyrrolidone-ring racetam. The sources opened for this entry do not describe its structure in detail.",
      pubchem: "fasoracetam",
      profile: { note: note, rows: [
        { label: "Preclinical signal", score: 2 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "Safety data in people are limited to a single-dose study in healthy men and one small ADHD study", evidence: "unknown", refs: [3010, 3011] },
        { system: "Kidney clearance", level: "low", text: "About 90% of a dose left unchanged in urine in rats and monkeys. In elderly men, clearance was lower and blood levels higher than in young men", evidence: "established", detail: "The elderly difference came mainly from reduced renal clearance, so exposure may be higher in people with weaker kidney function.", refs: [3011, 3015] },
        grey
      ],
      activity: [
        { title: "Metabotropic glutamate receptors", evidence: "animal", summary: "In rat and mouse neuronal preparations it changed cAMP formation through group I, II and III metabotropic glutamate receptors", refs: [3013, 3014] },
        { title: "Acetylcholine and memory", evidence: "animal", summary: "At 10 mg/kg it raised cortical acetylcholine release and choline uptake in rats and reversed memory disruption from scopolamine, lesions and baclofen", refs: [3012] }
      ],
      trials: [
        { title: "Fasoracetam in adolescents with ADHD and glutamate-gene variants", evidence: "human obs", meta: ["30 adolescents aged 12 to 17 with ADHD and variants in glutamate receptor genes", "single doses of 50 to 800 mg for pharmacokinetics, then up to 400 mg twice a day", "5 weeks, including 4 weeks of dosing", "open-label, with a single-blind placebo phase"], body: "Clinical Global Impression of Improvement scores fell from 3.79 to 2.33, and severity scores from 4.83 to 3.86 (both P < 0.001). Parent-rated Vanderbilt scores improved in the group with the strongest gene-variant profile (P < 0.035). Adverse events did not differ between the placebo and active weeks.", note: "Small, short and not randomized. The group was selected by genetics. It cannot show that the drug works.", refs: [3010] },
        { title: "Blood levels in elderly and young men", evidence: "human obs", meta: ["14 healthy men, 7 aged 68 to 79 and 7 aged 20 to 32", "one 100 mg oral dose", "single dose, pharmacokinetics only"], body: "Peak and total exposure were higher in the elderly (peak 3.06 vs 2.13 µg/mL; AUC 24.6 vs 14.4 µg·h/mL). Clearance was lower in the elderly, mainly because the kidneys cleared less of the drug.", note: "A pharmacokinetic study. It tested no cognitive outcome.", refs: [3011] }
      ],
      related: ["piracetam", "nefiracetam", "aniracetam"]
    },

    /* ---------------------------------------------------------------- sunifiram */
    {
      slug: "sunifiram", type: "compound", name: "Sunifiram",
      aliases: ["DM-235", "DM235"], category: "nootropic", status: "Research only",
      class: "Acylpiperazine nootropic (not a racetam)", developer: "University of Florence (Italy, around 2000)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["piperazine", "NMDA glycine site", "AMPA", "animal only"],
      summary: "A compound designed in Florence as a simplified, more potent relative of the racetams. It improved memory in mice and rats at tiny doses, and it has never had a published human trial.",
      names: "Called DM-235 in the original papers. It was not patented, and it was never developed as a drug. It is sold online as a research chemical.",
      structure: "An acylpiperazine, made by simplifying a bicyclic racetam-like scaffold. Its structure differs from the pyrrolidone racetams.",
      pubchem: "sunifiram",
      profile: { note: note, rows: [
        { label: "Preclinical signal", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human trial and no published long-term toxicity data", evidence: "unknown", refs: [3027] },
        { system: "Unregulated sale", level: "moderate", text: "A 2016 review found dozens of websites selling it to healthy people as a cognitive enhancer, with only a few preclinical studies behind it", evidence: "established", refs: [3027] },
        grey
      ],
      activity: [
        { title: "Anti-amnesic effect", evidence: "animal", summary: "Prevented scopolamine-induced amnesia in mice at 0.001 to 0.1 mg/kg i.p. and prevented memory impairment in rats in the water maze at 0.1 mg/kg i.p.", refs: [3020] },
        { title: "Potency", evidence: "animal", summary: "Active in mouse passive-avoidance tests at 0.001 mg/kg subcutaneously. The authors report it as far more potent than piracetam by dose", refs: [3020, 3022, 3024] },
        { title: "AMPA and NMDA receptors", evidence: "in vitro", summary: "Its effects were linked to AMPA receptor activation in mice and hippocampal slices. In slices it enhanced long-term potentiation at 10 to 100 nM through the glycine-binding site of the NMDA receptor", refs: [3023, 3025] },
        { title: "Acetylcholine release", evidence: "animal", summary: "Increased acetylcholine release in rat brain", refs: [3022, 3024] },
        { title: "Bulbectomized mice", evidence: "animal", summary: "In bulbectomized mice, 0.01 to 1.0 mg/kg by mouth for 7 to 12 days improved Y-maze and object-recognition performance. It did not improve a depression-like measure", refs: [3026] }
      ],
      trials: [],
      noTrials: "No human study of sunifiram was found in PubMed. The evidence is from mice, rats and brain slices, mostly from the group that invented it.",
      related: ["unifiram", "piracetam", "aniracetam"]
    },

    /* ---------------------------------------------------------------- unifiram */
    {
      slug: "unifiram", type: "compound", name: "Unifiram",
      aliases: ["DM-232", "DM232"], category: "nootropic", status: "Research only",
      class: "Bicyclic nootropic (not a racetam)", developer: "University of Florence (Italy, around 2000)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["AMPA", "acetylcholine", "animal only"],
      summary: "A sister compound to sunifiram from the same Florence group. It improved memory in mice at very small doses and has no published human study.",
      names: "Called DM-232 in the original papers. Like sunifiram, it was not patented and was never developed as a drug.",
      structure: "A 1,4-diazabicyclo[4.3.0]nonan-9-one, the bicyclic compound from which sunifiram was later simplified.",
      pubchem: "unifiram",
      profile: { note: note, rows: [
        { label: "Preclinical signal", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human trial and no published long-term toxicity data", evidence: "unknown", refs: [3027] },
        { system: "Unregulated sale", level: "moderate", text: "Sold online to healthy people as a cognitive enhancer with only a few preclinical studies behind it", evidence: "established", refs: [3027] },
        grey
      ],
      activity: [
        { title: "Potency", evidence: "animal", summary: "Active in the mouse passive-avoidance test at 0.001 mg/kg subcutaneously, with a piracetam-like profile at much lower doses", refs: [3021] },
        { title: "AMPA receptors", evidence: "animal", summary: "At 0.1 mg/kg i.p. it reversed amnesia caused by an AMPA-receptor blocker in mice. It did not impair motor coordination. In rat hippocampal slices it increased excitatory transmission", refs: [3023] },
        { title: "Acetylcholine release", evidence: "animal", summary: "Increased acetylcholine release in rat brain", refs: [3022, 3024] }
      ],
      trials: [],
      noTrials: "No human study of unifiram was found in PubMed. The evidence is from mice, rats and brain slices.",
      related: ["sunifiram", "piracetam", "aniracetam"]
    },

    /* ---------------------------------------------------------------- RGPU-95 */
    {
      slug: "rgpu-95", type: "compound", name: "RGPU-95",
      aliases: ["p-chloro-phenylpiracetam"], category: "nootropic", status: "Research only",
      class: "Phenylpiracetam analog", developer: "Russian academic research",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["racetam", "phenylpiracetam analog", "single study", "animal only"],
      summary: "A research compound described as a structural analog of phenylpiracetam. The one study found was in rats, where it reduced anxiety and depression-like behavior more than phenylpiracetam did.",
      names: "RGPU-95 is a lab code. It has never been approved. The study found calls it a structural analog of Fenotropil (phenylpiracetam), and its abstract does not state the chemical structure.",
      structure: "The abstract read for this entry does not give the structure. The description \"p-chloro-phenylpiracetam\" is common but could not be confirmed in a primary source.",
      pubchem: false,
      profile: { note: "One animal study underlies every score here.", rows: [
        { label: "Preclinical signal", score: 1 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 0 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data of any kind", evidence: "unknown" },
        grey
      ],
      activity: [
        { title: "Anxiety and depression-like behavior", evidence: "animal", summary: "In rats it was more anxiolytic than Fenotropil but less than diazepam. Its antidepressant-like effect was similar to melipramin and greater than Fenotropil. The effects were larger in males than in females", refs: [3030] }
      ],
      trials: [],
      noTrials: "It has never been given to humans in a published study. The only primary source found is one Russian-language animal paper.",
      related: ["phenylpiracetam", "piracetam"]
    }
  );

  Object.assign(A.references, {
    3000: "Lin MJ, Yu BP. Upregulation of the high-affinity choline transporter in colon relieves stress-induced hyperalgesia. J Pain Res 2018;11:1971-1982.",
    3001: "Lin MJ, Yu BP. Role of high-affinity choline transporter 1 in colonic hypermotility in a rat model of irritable bowel syndrome. J Neurogastroenterol Motil 2018;24:643-655.",
    3002: "Lin M, Hu G, Wang Z, Yu B, Tan W. Activation of the high-affinity choline transporter 1 in the spinal cord relieves stress-induced hyperalgesia. Dig Dis Sci 2023;68:2414-2426.",
    3003: "Takashina K, Bessho T, Mori R, Kawai K, Eguchi J, Saito K. MKC-231, a choline uptake enhancer: (3) Mode of action of MKC-231 in the enhancement of high-affinity choline uptake. J Neural Transm 2008;115:1037-1046.",
    3004: "Takashina K, Bessho T, Mori R, Eguchi J, Saito K. MKC-231, a choline uptake enhancer: (2) Effect on synthesis and release of acetylcholine in AF64A-treated rats. J Neural Transm 2008;115:1027-1035.",
    3005: "Bessho T, Takashina K, Eguchi J, Komatsu T, Saito K. MKC-231, a choline-uptake enhancer: (1) long-lasting cognitive improvement after repeated administration in AF64A-treated rats. J Neural Transm 2008;115:1019-1025.",
    3006: "Bessho T, Takashina K, Tabata R, Ohshima C, Chaki H, Yamabe H, et al. Effect of the novel high affinity choline uptake enhancer 2-(2-oxopyrrolidin-1-yl)-N-(2,3-dimethyl-5,6,7,8-tetrahydrofuro[2,3-b]quinolin-4-yl)acetoamide on deficits of water maze learning in rats. Arzneimittelforschung 1996;46:369-373.",
    3007: "Murai S, Saito H, Abe E, Masuda Y, Odashima J, Itoh T. MKC-231, a choline uptake enhancer, ameliorates working memory deficits and decreased hippocampal acetylcholine induced by ethylcholine aziridinium ion in mice. J Neural Transm Gen Sect 1994;98:1-13.",
    3008: "Shirayama Y, Yamamoto A, Nishimura T, Katayama S, Kawahara R. Subsequent exposure to the choline uptake enhancer MKC-231 antagonizes phencyclidine-induced behavioral deficits and reduction of septal choline acetyltransferase-positive cells in rats. Eur Neuropsychopharmacol 2007;17:616-626.",
    3009: "Akaike A, Maeda T, Kaneko S, Tamura Y. Protective effect of MKC-231, a novel high affinity choline uptake enhancer, on glutamate cytotoxicity in cultured cortical neurons. Jpn J Pharmacol 1998;76:219-222.",
    3010: "Elia J, Ungal G, Kao C, Ambrosini A, De Jesus-Rosario N, Larsen L, et al. Fasoracetam in adolescents with ADHD and glutamatergic gene network variants disrupting mGluR neurotransmitter signaling. Nat Commun 2018;9:4.",
    3011: "Kumagai Y, Yokota S, Isawa S, Murasaki M, Mukai H, Miyatake S. Comparison of pharmacokinetics of NS-105, a novel agent for cerebrovascular disease, in elderly and young subjects. Int J Clin Pharmacol Res 1999;19:1-8.",
    3012: "Ogasawara T, Itoh Y, Tamura M, Mushiroi T, Ukai Y, Kise M, et al. Involvement of cholinergic and GABAergic systems in the reversal of memory disruption by NS-105, a cognition enhancer. Pharmacol Biochem Behav 1999;64:41-52.",
    3013: "Oka M, Itoh Y, Shimidzu T, Ukai Y, Yoshikuni Y, Kimura K. Involvement of metabotropic glutamate receptors in Gi- and Gs-dependent modulation of adenylate cyclase activity induced by a novel cognition enhancer NS-105 in rat brain. Brain Res 1997;754:121-130.",
    3014: "Hirouchi M, Oka M, Itoh Y, Ukai Y, Kimura K. Role of metabotropic glutamate receptor subclasses in modulation of adenylyl cyclase activity by a nootropic NS-105. Eur J Pharmacol 2000;387:9-17.",
    3015: "Mukai H, Sugimoto T, Ago M, Morino A. Pharmacokinetics of NS-105, a novel cognition enhancer. 1st communication: absorption, metabolism and excretion in rats, dogs and monkeys. Arzneimittelforschung 1999;49:881-890.",
    3020: "Ghelardini C, Galeotti N, Gualtieri F, Romanelli MN, Bucherelli C, Baldi E, et al. DM235 (sunifiram): a novel nootropic with potential as a cognitive enhancer. Naunyn Schmiedebergs Arch Pharmacol 2002;365:419-426.",
    3021: "Manetti D, Ghelardini C, Bartolini A, Bellucci C, Dei S, Galeotti N, et al. Design, synthesis, and preliminary pharmacological evaluation of 1,4-diazabicyclo[4.3.0]nonan-9-ones as a new class of highly potent nootropic agents. J Med Chem 2000;43:1969-1974.",
    3022: "Manetti D, Ghelardini C, Bartolini A, Dei S, Galeotti N, Gualtieri F, et al. Molecular simplification of 1,4-diazabicyclo[4.3.0]nonan-9-ones gives piperazine derivatives that maintain high nootropic activity. J Med Chem 2000;43:4499-4507.",
    3023: "Galeotti N, Ghelardini C, Pittaluga A, Pugliese AM, Bartolini A, Manetti D, et al. AMPA-receptor activation is involved in the antiamnesic effect of DM 232 (unifiram) and DM 235 (sunifiram). Naunyn Schmiedebergs Arch Pharmacol 2003;368:538-545.",
    3024: "Romanelli MN, Galeotti N, Ghelardini C, Manetti D, Martini E, Gualtieri F. Pharmacological characterization of DM232 (unifiram) and DM235 (sunifiram), new potent cognition enhancers. CNS Drug Rev 2006;12:39-52.",
    3025: "Moriguchi S, Tanaka T, Narahashi T, Fukunaga K. Novel nootropic drug sunifiram enhances hippocampal synaptic efficacy via glycine-binding site of NMDA receptor. Hippocampus 2013;23:942-951.",
    3026: "Moriguchi S, Tanaka T, Tagashira H, Narahashi T, Fukunaga K. Novel nootropic drug sunifiram improves cognitive deficits via CaM kinase II and protein kinase C activation in olfactory bulbectomized mice. Behav Brain Res 2013;242:150-157.",
    3027: "Gualtieri F. Unifi nootropics from the lab to the web: a story of academic (and industrial) shortcomings. J Enzyme Inhib Med Chem 2016;31:187-194.",
    3030: "Tiurenkov IN, Bagmetova VV, Shishkina AV, Berestovitskaia VM, Vasil'eva OS, Ostrogliadov ES. Gender differences in action of Fenotropil and its structural analog, compound RGPU-95, on anxiety-depressive behavior in animals. Eksp Klin Farmakol 2010;73(11):10-14."
  });
})(window.ATLAS);

/* batch b */
(function (A) {
  A.entries.push(
    /* ------------------------------------------------------------ flmodafinil */
    {
      slug: "flmodafinil", type: "compound", name: "Flmodafinil",
      aliases: ["CRL-40,940"], category: "nootropic", status: "Research only",
      class: "Modafinil analog (eugeroic)", developer: "Unknown (CRL-series code)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["eugeroic", "wakefulness", "modafinil analog", "WADA prohibited"],
      summary: "A modafinil analog with a fluorine on each phenyl ring, sold through online shops. No efficacy or safety trial has been published. The only human data come from an anti-doping study of how the body clears it.",
      names: "CRL-40,940 is its lab code. Fladrafinil acts as a prodrug for it. It is not an approved drug. WADA lists it among the S6 stimulants, which are prohibited in competition.",
      structure: "2-[bis(4-fluorophenyl)methylsulfinyl]acetamide. It is modafinil with a fluorine at the 4-position of both phenyl rings.",
      pubchem: "flmodafinil",
      profile: { note: "There are no efficacy data. The wakefulness score is estimated from its relation to modafinil.", rows: [
        { label: "Wakefulness (claimed)", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 0 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No published safety or efficacy trial", evidence: "unknown", detail: "The one human study gave six volunteers a single 20 mg dose to measure how the drug and its metabolites appear in urine and blood. It was not designed to assess safety.", refs: [3100] },
        { system: "Sport", level: "high", text: "Prohibited in competition as a WADA S6 stimulant", evidence: "established", detail: "The drug and its metabolites stay detectable for a relatively long time.", refs: [3100] },
        { system: "Product quality", level: "moderate", text: "Sold through online shops as an unregulated product. Identity and purity are unverified", evidence: "established", refs: [3101] }
      ],
      activity: [
        { title: "Metabolism", evidence: "human obs", summary: "Metabolised to flmodafinil acid and flmodafinil sulfone, seen in urine and blood after a single dose in six volunteers", refs: [3100] },
        { title: "Fladrafinil as a prodrug", evidence: "human obs", summary: "After fladrafinil, the same metabolites appear, with a short delay before flmodafinil peaks", refs: [3100] }
      ],
      trials: [],
      noTrials: "No trial has tested whether it promotes wakefulness or improves cognition, and none has tested its safety. The only human data are a six-volunteer excretion study for anti-doping labs.",
      noTrialsRefs: [3100],
      related: ["fladrafinil", "modafinil"]
    },

    /* ------------------------------------------------------------ cyclazodone */
    {
      slug: "cyclazodone", type: "compound", name: "Cyclazodone",
      aliases: ["Cyclazodon"], category: "nootropic", status: "Research only",
      class: "Pemoline-related stimulant", developer: "Unknown",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["stimulant", "pemoline analog"],
      summary: "A stimulant in the pemoline family with almost no published research. Pemoline was withdrawn from the market after fatal liver failure.",
      names: "It appears in the literature mainly as a target in doping-control chemistry, and a close N-methyl derivative has been studied as a designer stimulant. It has no approved use.",
      structure: "A pemoline-type compound. A close derivative, N-methyl-cyclazodone, is described in the literature as a pemoline derivative.",
      pubchem: "cyclazodone",
      profile: { note: "There are no pharmacology or human data on the compound itself. Scores are estimates, and risk is inferred from its drug family.", rows: [
        { label: "Stimulant effect (claimed)", score: 1 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 3, neg: true }, { label: "Evidence quality", score: 0 } ] },
      risks: [
        { system: "Liver (family concern)", level: "unknown", text: "Pemoline, the drug it is related to, caused fatal liver failure and was withdrawn", evidence: "contested", detail: "Pemoline showed a clear liver failure signal in FDA reports, and cases in children included one needing a liver transplant. Whether cyclazodone shares this is not known. The concern comes from its drug family, not from a finding on cyclazodone.", refs: [3105, 3106] },
        { system: "Human safety", level: "unknown", text: "No published human safety data", evidence: "unknown" },
        { system: "Drug interactions", level: "unknown", text: "Its N-methyl derivative is broken down mainly by the enzyme CYP2A6 in lab tests. Interactions with other drugs cannot be ruled out", evidence: "in vitro", refs: [3103] }
      ],
      activity: [
        { title: "Metabolism of N-methyl-cyclazodone", evidence: "in vitro", summary: "In liver fractions and rat urine the derivative lost its N-methyl group, mainly via CYP2A6. Plasma protein binding was low to moderate", refs: [3103] },
        { title: "Analytical detection", evidence: "in vitro", summary: "Cyclazodone is one of 11 stimulants in a mass-spectrometry method developed by a doping control lab", refs: [3104] }
      ],
      trials: [],
      noTrials: "No published human study of cyclazodone was found, and no animal study describing its pharmacology.",
      related: ["methylphenidate", "bromantane", "thozalinone"]
    },

    /* ------------------------------------------------------------ thozalinone */
    {
      slug: "thozalinone", type: "compound", name: "Thozalinone",
      aliases: ["Stimsen"], category: "nootropic", status: "Research only",
      class: "Pemoline-related stimulant", developer: "Unknown",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["stimulant", "dopaminergic", "historical", "pemoline analog"],
      summary: "A stimulant described in 1965 as a new excitant and tested in the 1960s and 1970s in depression and obesity. The surviving literature is thin, and the human studies have no abstracts.",
      names: "Marketed in the past as Stimsen. Analytical chemists group it with pemoline and fenozolone as psychostimulants that share a hydrolysis product. It has no current approved use.",
      structure: "A pemoline-related oxazolone. Acid hydrolysis converts it to 5-phenyl-2,4-oxazolidinedione, the same product pemoline gives.",
      pubchem: "thozalinone",
      profile: { note: "Scores rest on a few old animal and analytical papers. The human studies have no available abstracts.", rows: [
        { label: "Stimulant effect", score: 2 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No usable safety data. The old human studies have no accessible results", evidence: "unknown" },
        { system: "Liver (family concern)", level: "unknown", text: "Pemoline, a related stimulant, caused fatal liver failure", evidence: "contested", detail: "This is a concern about the drug family. No liver finding specific to thozalinone was found.", refs: [3105, 3109] }
      ],
      activity: [
        { title: "Stimulant", evidence: "animal", summary: "Described in 1965 as a new excitant, with its pharmacological properties reported in animals", refs: [3107] },
        { title: "Dopaminergic action", evidence: "animal", summary: "Described as a dopaminergic stimulant. At 50 mg/kg in mice it caused gnawing behavior, which was more common after four weeks of haloperidol, chlorpromazine, trifluoperazine or thioridazine", refs: [3108] }
      ],
      trials: [],
      noTrials: "Two clinical reports are indexed in PubMed, a double-blind study in depressed outpatients (1966) and a trial in obese patients (1971). Neither has an abstract, so their results are not summarised here.",
      noTrialsRefs: [3110, 3111],
      related: ["cyclazodone", "methylphenidate", "amphetamine"]
    },

    /* ------------------------------------------------------------ bpap */
    {
      slug: "bpap", type: "compound", name: "BPAP",
      aliases: ["(-)-BPAP", "(-)-1-(Benzofuran-2-yl)-2-propylaminopentane"], category: "nootropic", status: "Research only",
      class: "Catecholaminergic activity enhancer (tryptamine-derived)", developer: "Joseph Knoll and colleagues",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["enhancer", "TAAR1", "dopamine", "anti-aging claim", "rodent only"],
      summary: "A compound from Joseph Knoll's research group that increases impulse-driven release of dopamine, noradrenaline and serotonin in rat brain without acting as a releaser. Rats given it lived longer in the group's studies. There are no human data, and almost all the work comes from one research network.",
      names: "Knoll's group calls this class \"catecholaminergic activity enhancers\" and describes BPAP as the most potent known example. The same group created selegiline (deprenyl). The \"(-)\" form is the R enantiomer. It has not been developed as a drug.",
      structure: "(2R)-1-(1-benzofuran-2-yl)-N-propylpentan-2-amine. The active (-) form has R configuration, confirmed by X-ray crystallography.",
      pubchem: "1-(benzofuran-2-yl)-2-propylaminopentane",
      profile: { note: "All evidence is from rodents and cell culture, and nearly all of it from one lab group.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data of any kind", evidence: "unknown" },
        { system: "Dose response", level: "unknown", text: "Effects follow a two-peaked curve in rats. A dose 100 times higher than the best low dose had no effect on noradrenaline release", evidence: "animal", refs: [3112] },
        { system: "Independent replication", level: "unknown", text: "The longevity, tumor and cognition findings come from the originating group and collaborators. No independent confirmation was found", evidence: "contested", refs: [3115, 3116] }
      ],
      activity: [
        { title: "Impulse-driven release", evidence: "animal", summary: "In rats, a very low dose (0.0005 mg/kg) raised noradrenaline released from the locus coeruleus from 4.7 to 15.4 nmol/g, and enhanced dopamine and serotonin neuron activity. A dose 100 times higher had no effect", refs: [3112] },
        { title: "TAAR1", evidence: "in vitro", summary: "In rat striatal slices it boosted vesicular dopamine release through trace amine-associated receptor 1, and did not cause non-vesicular release as methamphetamine does", refs: [3117] },
        { title: "Pharmacokinetics", evidence: "animal", summary: "In rats it was well absorbed by mouth and reached the brain. Half-life was 5.5 to 5.8 hours, with signs of recirculation through the bile", refs: [3113] },
        { title: "Cell protection", evidence: "in vitro", summary: "Reduced cell loss in brain capillary endothelial cells and PC12 cells after oxygen deprivation", refs: [3114] },
        { title: "Lifespan and learning", evidence: "animal", summary: "Rats given BPAP three times weekly from week 10 lived significantly longer than saline-treated rats", refs: [3115] },
        { title: "Tumor incidence", evidence: "animal", summary: "In a rat longevity study, fewer BPAP-treated rats developed a fibromyxosarcoma (7 or 8 of 40) than saline-treated rats (20 of 40)", refs: [3116] },
        { title: "Cognitive decline in aged rats", evidence: "animal", summary: "Tested as a putative anti-aging compound in experienced aged rats across several cognitive tasks", refs: [3118] }
      ],
      trials: [],
      noTrials: "BPAP has never been given to people in a published study. A 2004 paper proposed a human trial design, and no results from one were found.",
      noTrialsRefs: [3133],
      related: ["9-me-bc", "nsi-189"]
    },

    /* ------------------------------------------------------------ ce-123 */
    {
      slug: "ce-123", type: "compound", name: "CE-123",
      aliases: ["5-((Benzhydrylsulfinyl)methyl)thiazole", "(S)-CE-123"], category: "nootropic", status: "Research only",
      class: "Modafinil analog (atypical dopamine transporter inhibitor)", developer: "Academic research program",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["modafinil analog", "dopamine transporter", "cognition", "rodent only"],
      summary: "A modafinil analog with a thiazole ring, designed to block the dopamine transporter more selectively. It improved memory and cognitive flexibility in rats. It has not been tested in people.",
      names: "A research compound from an academic program on modafinil analogues, chosen as the most promising of its series. The S enantiomer, (S)-CE-123, is the form studied in most recent work.",
      structure: "5-((benzhydrylsulfinyl)methyl)thiazole. A modafinil analog in which a thiazole ring replaces modafinil's acetamide group.",
      pubchem: "ce-123",
      profile: { note: "All evidence is from rats and cells.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data of any kind", evidence: "unknown" },
        { system: "Impulsivity", level: "low", text: "Impulsivity was not raised in healthy young rats, but it rose mildly in aged rats", evidence: "animal", refs: [3120, 3125] }
      ],
      activity: [
        { title: "Dopamine transporter", evidence: "in vitro", summary: "Blocked dopamine uptake in cells expressing human transporters (IC50 about 4.6 micromolar), with negligible effect on the serotonin and noradrenaline transporters", refs: [3121] },
        { title: "Spatial memory", evidence: "animal", summary: "Improved memory acquisition and retrieval in a rat hole-board task, and raised D1 receptor protein in hippocampal areas", refs: [3121] },
        { title: "Cognitive flexibility", evidence: "animal", summary: "Fewer extra-dimensional shifts in healthy rats at 0.3 and 1.0 mg/kg but not at 0.1 mg/kg", refs: [3120] },
        { title: "Motivation", evidence: "animal", summary: "Partly reversed the effort-related effects of tetrabenazine and increased progressive-ratio responding in rats", refs: [3122] },
        { title: "Brain dopamine", evidence: "animal", summary: "Raised extracellular dopamine in the prefrontal cortex of rats. It caused a small, brief rise in the nucleus accumbens shell and no 50-kHz vocalizations, a marker of reward", refs: [3124] },
        { title: "Aged rats", evidence: "animal", summary: "Raised motivation and improved performance on a cooperation task in 26-month-old rats. Attention and spatial learning were unchanged", refs: [3125] },
        { title: "Structure and activity", evidence: "in vitro", summary: "In a series of thiazole analogs, the S configuration generally gave the strongest and most selective dopamine transporter inhibition", refs: [3123] }
      ],
      trials: [],
      noTrials: "It has not been given to humans in a published study.",
      related: ["modafinil", "flmodafinil", "fladrafinil"]
    },

    /* ------------------------------------------------------------ kw-6356 */
    {
      slug: "kw-6356", type: "compound", name: "KW-6356",
      aliases: ["KW6356"], category: "nootropic", status: "Investigational",
      class: "Adenosine A2A receptor antagonist / inverse agonist", developer: "Not confirmed (trials run in Japan)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["adenosine A2A", "Parkinson's disease", "inverse agonist", "clinical stage"],
      summary: "An adenosine A2A receptor blocker in clinical testing for Parkinson's disease. In a 12-week randomized trial in early untreated patients, motor scores improved more than on placebo. It is not a cognitive enhancer and is not approved.",
      names: "It both blocks the receptor and reduces its baseline activity, which is why it is called an inverse agonist. It was compared in the lab with istradefylline, an approved A2A antagonist for Parkinson's disease. The codex lists it here because A2A blockers are discussed alongside wakefulness and stimulant compounds.",
      structure: "A small-molecule A2A antagonist and inverse agonist. Crystal structures of the receptor bound to it and to istradefylline have been solved.",
      pubchem: "kw-6356",
      profile: { note: "Scored on its Parkinson's record. There are no studies of cognition in healthy people.", rows: [
        { label: "Clinical effect (Parkinson's)", score: 2 }, { label: "Human evidence", score: 2 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Well tolerated in a 12-week trial. Constipation and nasopharyngitis were the most common adverse events", evidence: "human rct", refs: [3130] },
        { system: "Long-term safety", level: "unknown", text: "Only short trials are published", evidence: "unknown", refs: [3126, 3130] },
        { system: "Dyskinesia", level: "unknown", text: "In marmosets, 21 days of KW-6356 with low-dose L-DOPA increased dyskinesia, though less than an optimal L-DOPA dose caused", evidence: "animal", refs: [3129] }
      ],
      activity: [
        { title: "A2A receptor", evidence: "in vitro", summary: "A potent, selective A2A ligand with a very slow off-rate. It showed insurmountable antagonism and inverse agonism, where istradefylline showed surmountable antagonism", refs: [3127] },
        { title: "Marmoset model of Parkinson's", evidence: "animal", summary: "Reversed motor disability on its own, more than istradefylline did, with little dyskinesia", refs: [3128] },
        { title: "With L-DOPA", evidence: "animal", summary: "Enhanced the effects of L-DOPA in MPTP-treated marmosets", refs: [3129] },
        { title: "Pharmacokinetics", evidence: "human obs", summary: "Half-life ranged from 18.4 to 43.1 hours in healthy volunteers. A population model also describes an active metabolite, M6", refs: [3126, 3131] }
      ],
      trials: [
        { title: "Monotherapy in early Parkinson's disease", evidence: "human rct", meta: ["168 patients with early untreated Parkinson's disease, in Japan", "3 or 6 mg a day, or placebo", "12 weeks", "randomized, double-blind, placebo-controlled"], body: "MDS-UPDRS Part III scores fell by 5.37 points on 3 mg and 4.76 on 6 mg, against 3.14 on placebo. Secondary scores also favored the drug, and more than 90% in each group completed the study.", note: "Short and Japan-only. The abstract reports the changes but no test against placebo.", refs: [3130] },
        { title: "Phase 1 safety and pharmacokinetics in healthy volunteers", evidence: "human rct", meta: ["healthy Japanese and White volunteers", "single doses of 1 to 60 mg, and multiple doses up to 24 mg once daily for 14 days", "randomized, double-blind, placebo-controlled"], body: "It was well tolerated. Pharmacokinetics were linear after a single dose up to 60 mg. Safety and pharmacokinetics did not clearly differ between Japanese and White participants.", refs: [3126] }
      ],
      related: []
    }
  );
  Object.assign(A.references, {
    3100: "Krug O et al. Investigations into the metabolism and elimination of flmodafinil and fladrafinil for sports drug testing purposes. Drug Test Anal 2026;18:1076-1087.",
    3101: "Dowling G et al. Outsmarted by nootropics? An investigation into the thermal degradation of modafinil, modafinic acid, adrafinil, CRL-40,940 and CRL-40,941 in the GC injector: formation of 1,1,2,2-tetraphenylethane and its tetra fluoro analog. Drug Test Anal 2017;9:518-528.",
    3103: "Gampfer TM et al. Toxicokinetic studies of the two stimulants M-ALPHA and N-methyl-cyclazodone using in vitro and in vivo tools. Metabolites 2026;16.",
    3104: "Jeong ES et al. Online simultaneous hydrogen/deuterium exchange of multitarget gas-phase molecules by electrospray ionization mass spectrometry coupled with gas chromatography. Anal Chem 2017;89:12284-12292.",
    3105: "Etwel FA et al. A surveillance method for the early identification of idiosyncratic adverse drug reactions. Drug Saf 2008;31:169-180.",
    3106: "Marotta PJ, Roberts EA. Pemoline hepatotoxicity in children. J Pediatr 1998;132:894-897.",
    3107: "Greenblatt EN, Osterberg AC. Some pharmacologic properties of thozalinone, a new excitant. Toxicol Appl Pharmacol 1965;7:566-578.",
    3108: "Yen-Koo HC, Balazs T. Detection of dopaminergic supersensitivity induced by neuroleptic drugs in mice. Drug Chem Toxicol 1980;3:237-247.",
    3109: "Gielsdorf W. Determination of the psychostimulants pemoline, fenozolone and thozalinone in human urine by gas chromatography/mass spectrometry and thin layer chromatography. J Clin Chem Clin Biochem 1982;20:65-68.",
    3110: "Gallant DM et al. A double-blind study of thozalinone (C1 39,808) in depressed outpatients. Curr Ther Res Clin Exp 1966;8:621-622.",
    3111: "Leite AC, Liepen LL, Costa VP. Clinical trial of Stimsem thozalinone in the treatment of obese patients. Rev Bras Med 1971;28:475-478.",
    3112: "Knoll J, Miklya I, Knoll B. Stimulation of the catecholaminergic and serotoninergic neurons in the rat brain by R-(-)-1-(benzofuran-2-yl)-2-propylaminopentane, (-)-BPAP. Life Sci 2002;71:2137-2144.",
    3113: "Magyar K et al. The fate of (-)1-(benzofuran-2-yl)-2-propylaminopentane.HCl, (-)-BPAP, in rats, a potent enhancer of the impulse-evoked release of catecholamines and serotonin in the brain. Eur J Drug Metab Pharmacokinet 2002;27:157-161.",
    3114: "Denes L et al. Cytoprotective effect of two synthetic enhancer substances, (-)-BPAP and (-)-deprenyl, on human brain capillary endothelial cells and rat PC12 cells. Life Sci 2006;79:1034-1039.",
    3115: "Knoll J, Miklya I. Longevity study with low doses of selegiline/(-)-deprenyl and (2R)-1-(1-benzofuran-2-yl)-N-propylpentane-2-amine (BPAP). Life Sci 2016;167:32-38.",
    3116: "Knoll J et al. A longevity study with enhancer substances (selegiline, BPAP) detected an unknown tumor-manifestation-suppressing regulation in rat brain. Life Sci 2017;182:57-64.",
    3117: "Harsing LG, Knoll J, Miklya I. Enhancer regulation of dopaminergic neurochemical transmission in the striatum. Int J Mol Sci 2022;23.",
    3118: "Ernyey AJ et al. Age-related decline of various cognitive functions in well-experienced male rats treated with the putative anti-aging compound (2R)-1-(1-benzofuran-2-yl)-N-propylpentane-2-amine ((-)BPAP). Geroscience 2024;46:417-429.",
    3120: "Nikiforuk A et al. A novel dopamine transporter inhibitor CE-123 improves cognitive flexibility and maintains impulsivity in healthy male rats. Front Behav Neurosci 2017;11:222.",
    3121: "Kristofova M et al. A daily single dose of a novel modafinil analogue CE-123 improves memory acquisition and memory retrieval. Behav Brain Res 2018;343:83-94.",
    3122: "Rotolo RA et al. The novel atypical dopamine uptake inhibitor (S)-CE-123 partially reverses the effort-related effects of the dopamine depleting agent tetrabenazine and increases progressive ratio responding. Front Pharmacol 2019;10:682.",
    3123: "Kalaba P et al. Structure-activity relationships of novel thiazole-based modafinil analogues acting at monoamine transporters. J Med Chem 2020;63:391-417.",
    3124: "Sagheddu C et al. Neurophysiological and neurochemical effects of the putative cognitive enhancer (S)-CE-123 on mesocorticolimbic dopamine system. Biomolecules 2020;10.",
    3125: "Gyertyan I et al. Cognitive profiling and proteomic analysis of the modafinil analogue S-CE-123 in experienced aged rats. Sci Rep 2021;11:23962.",
    3126: "Tayama T et al. Safety, tolerability, and pharmacokinetics of the novel adenosine A2A antagonist/inverse agonist KW-6356 following single and multiple oral administration in healthy volunteers. Clin Pharmacol Drug Dev 2023;12:801-809.",
    3127: "Ohno Y et al. In vitro pharmacological profile of KW-6356, a novel adenosine A2A receptor antagonist/inverse agonist. Mol Pharmacol 2023;103:311-324.",
    3128: "Ohno Y et al. Anti-parkinsonian activity of the adenosine A2A receptor antagonist/inverse agonist KW-6356 as monotherapy in MPTP-treated common marmosets. Eur J Pharmacol 2023;950:175773.",
    3129: "Ohno Y et al. The adenosine A2A receptor antagonist/inverse agonist, KW-6356 enhances the anti-parkinsonian activity of L-DOPA with a low risk of dyskinesia in MPTP-treated common marmosets. J Pharmacol Sci 2023;152:193-199.",
    3130: "Maeda T et al. Randomized controlled trial of KW-6356 monotherapy in patients with early untreated Parkinson's disease. Parkinsonism Relat Disord 2023;117:105907.",
    3131: "Tayama T et al. Population pharmacokinetics of the novel adenosine A2A antagonist/inverse agonist KW-6356 and its active metabolite following single and multiple oral administration in healthy individuals and patients with Parkinson's disease. Clin Pharmacol Drug Dev 2024;13:549-559.",
    3133: "Miklya I, Gaszner P. Treatment possibilities of Alzheimer's disease. Neuropsychopharmacol Hung 2004;6:200-209."
  });
})(window.ATLAS);

/* batch c */
(function (A) {
  A.entries.push(
    /* ------------------------------------------------------------ tranylcypromine */
    {
      slug: "tranylcypromine", type: "compound", name: "Tranylcypromine",
      aliases: ["Parnate", "TCP", "trans-2-phenylcyclopropylamine"], category: "nootropic", status: "Approved",
      class: "Monoamine oxidase inhibitor (MAOI)", developer: "Marketed in the US as Parnate by Advanz Pharma",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["MAOI", "antidepressant", "tyramine", "serotonin syndrome"],
      summary: "An FDA-approved antidepressant that blocks both forms of monoamine oxidase. It is a prescription drug for depression that has not responded to other antidepressants. It is not approved as a nootropic, and it carries a boxed warning for hypertensive crisis and suicidal thoughts.",
      names: "Sold in the US as Parnate for major depressive disorder in adults who have not responded adequately to other antidepressants. The label says it is not for first-line treatment because of serious reactions, drug interactions and the need for dietary limits. Its approval is for depression only.",
      structure: "Trans-2-phenylcyclopropylamine. It is an irreversible, non-selective inhibitor of MAO-A and MAO-B.",
      pubchem: "tranylcypromine",
      profile: { note: "Scored relative to other nootropics in the codex. It is graded as an antidepressant, not as a cognitive enhancer.", rows: [
        { label: "Antidepressant effect", score: 3 }, { label: "Cognitive effect (healthy)", score: 0 },
        { label: "Risk load", score: 5, neg: true }, { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Hypertensive crisis", level: "high", text: "The boxed warning says large amounts of high-tyramine food or drink, or certain drugs, can cause a hypertensive crisis during treatment and after stopping", evidence: "established", detail: "The label tells prescribers to monitor blood pressure and to leave medication-free gaps between this drug and interacting drugs.", refs: [3200] },
        { system: "Serotonin syndrome", level: "high", text: "Combining it with serotonergic drugs can cause a life-threatening serotonin syndrome. The label lists SSRIs, SNRIs, tricyclics, triptans, fentanyl, lithium, tramadol, tryptophan, buspirone, St. John's wort and SAM-e", evidence: "established", detail: "Fatal outcomes have been reported, including in patients taking this drug.", refs: [3200] },
        { system: "Suicidal thoughts", level: "high", text: "The boxed warning covers more suicidal thoughts and behavior in children and young adults taking antidepressants. It is not approved for children", evidence: "established", refs: [3200] },
        { system: "Blood pressure", level: "moderate", text: "Postural hypotension is a major reaction at higher doses and may cause fainting", evidence: "established", detail: "The label says it is seen most often, but not only, in people who already have high blood pressure.", refs: [3200] },
        { system: "Liver", level: "moderate", text: "Hepatitis and raised liver enzymes have been reported", evidence: "established", refs: [3200] },
        { system: "Lingering enzyme block", level: "moderate", text: "MAO inhibition can last up to 10 days after the last dose, so interactions and diet limits still apply", evidence: "established", refs: [3200] },
        { system: "Tolerability", level: "moderate", text: "In one trial in highly treatment-resistant depression, more people stopped tranylcypromine because of side effects than stopped a comparison combination", evidence: "human rct", refs: [3201] },
        { system: "Pregnancy", level: "unknown", text: "There are limited reports of placental infarction and birth defects. The reports cannot show whether the drug caused them", evidence: "established", refs: [3200] }
      ],
      activity: [
        { title: "MAO inhibition", evidence: "established", summary: "An irreversible, non-selective inhibitor of MAO-A and MAO-B", refs: [3202] }
      ],
      trials: [
        { title: "Meta-analysis of controlled depression trials", evidence: "human rct", meta: ["controlled trials of tranylcypromine in depression", "meta-analysis (2017)"], body: "Tranylcypromine beat placebo in 4 studies and matched other antidepressants in 10 studies. In treatment-resistant depression it beat non-established antidepressants and matched other MAOIs and an antidepressant combination. The authors judged it effective and safe, but limited to third-line use because of the tyramine-restricted diet.", note: "Only one study compared it with placebo in treatment-resistant depression.", refs: [3202] },
        { title: "STAR*D: after three failed antidepressant trials", evidence: "human rct", meta: ["109 adults with nonpsychotic major depression who had not remitted after three prior trials", "tranylcypromine (58 people, mean exit dose 36.9 mg a day) or venlafaxine plus mirtazapine (51)", "open-label, randomized, masked telephone raters"], body: "Remission rates did not differ significantly: 6.9% with tranylcypromine and 13.7% with the combination. Tranylcypromine gave significantly less symptom reduction and more dropouts because of intolerance.", note: "Remission was low in both arms. The authors suggested the combination might be preferred in this group.", refs: [3201] },
        { title: "Tranylcypromine against phenelzine", evidence: "human rct", meta: ["77 severely depressed inpatients whose depression had not responded to a tricyclic or fluvoxamine", "tranylcypromine or phenelzine, flexible dose", "5 weeks", "double-blind"], body: "Response was 44% (17 of 39) on tranylcypromine and 47% (18 of 38) on phenelzine, with no significant difference. Severe side effects such as dizziness, agitation and insomnia occurred in 21% in each group.", refs: [3203] }
      ],
      related: ["9-me-bc", "phenibut"]
    },

    /* ------------------------------------------------------------ alpha-gpc */
    {
      slug: "alpha-gpc", type: "compound", name: "Alpha-GPC",
      aliases: ["Choline alfoscerate", "Choline alphoscerate", "L-α-glycerylphosphorylcholine", "α-GPC"], category: "nootropic", status: "Approved",
      class: "Choline-containing phospholipid (acetylcholine precursor)", developer: "Sold as a prescription medicine in some countries and as a supplement in others",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["choline", "acetylcholine", "memory", "stroke risk"],
      summary: "A choline compound used to support memory in older adults with cognitive decline. Small and mid-sized trials in dementia and mild cognitive impairment were positive. A large Korean database study linked its use to more strokes.",
      names: "Marketed as a medicine since 1985, but approval as a prescription drug differs between countries. Trials call it choline alfoscerate or choline alphoscerate. The \"Approved\" status refers to those countries. Evidence is in people with cognitive impairment, not in healthy adults.",
      structure: "A choline-containing phospholipid that is a precursor of acetylcholine.",
      pubchem: "choline alfoscerate",
      profile: { note: "Scored relative to other nootropics in the codex. Evidence is in people with cognitive impairment.", rows: [
        { label: "Cognitive effect (impaired)", score: 2 }, { label: "Cognitive effect (healthy)", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Stroke", level: "moderate", text: "In a Korean cohort of about 12 million adults aged 50 and over, people prescribed it had a higher 10-year risk of stroke, rising with more use", evidence: "human obs", detail: "After matching, the adjusted hazard ratio was 1.43 for total stroke (95% CI 1.41-1.46). The authors say the mechanism is unknown. They note that choline has been linked to heart disease through a gut-bacteria metabolite, TMAO.", refs: [3204] },
        { system: "Tolerability", level: "low", text: "In a 12-week trial in mild cognitive impairment, no serious adverse events were reported and adverse events did not differ from placebo", evidence: "human rct", refs: [3205] }
      ],
      activity: [
        { title: "Acetylcholine precursor", evidence: "established", summary: "Described in trials as a precursor of acetylcholine, the basis for using it in memory loss", refs: [3206] }
      ],
      trials: [
        { title: "Mild to moderate Alzheimer's dementia", evidence: "human rct", meta: ["261 patients with mild to moderate Alzheimer-type dementia, aged 60-80", "choline alfoscerate 400 mg three times a day or placebo", "180 days", "multicentre, randomized, double-blind, placebo-controlled"], body: "ADAS-Cog improved by 3.20 points on choline alfoscerate and worsened by 2.90 on placebo at 180 days. MMSE, global deterioration and clinical global scores also favored it.", note: "A 2003 trial. Earlier trials of other cholinergic precursors such as lecithin had not confirmed a benefit in Alzheimer's disease.", refs: [3206] },
        { title: "Amnestic mild cognitive impairment", evidence: "human rct", meta: ["100 people with mild cognitive impairment", "600 mg alpha-GPC (SHCog soft capsule) or placebo", "12 weeks", "multicentre, randomized, double-blind, placebo-controlled"], body: "ADAS-cog fell by 2.34 points with alpha-GPC, significantly more than on placebo. No serious adverse events were reported.", note: "Short, and the product was a branded capsule.", refs: [3205] },
        { title: "Meta-analysis in adult-onset cognitive impairment", evidence: "human rct", meta: ["7 randomized trials and 1 prospective cohort study", "alpha-GPC alone or with donepezil", "systematic review and meta-analysis (2023)"], body: "Adding alpha-GPC to donepezil improved cognition, function and behavior scores. Alpha-GPC alone gave better cognition than placebo or other medicines (mean difference 3.50, 95% CI 0.36 to 6.63).", note: "Few trials, with wide uncertainty. The review notes that approval status differs between countries.", refs: [3207] }
      ],
      related: ["piracetam", "noopept"]
    },

    /* ------------------------------------------------------------ bemethyl */
    {
      slug: "bemethyl", type: "compound", name: "Bemethyl",
      aliases: ["Bemitil", "Bemithyl", "2-ethylthiobenzimidazole hydrobromide"], category: "nootropic", status: "Research only",
      class: "Actoprotector (benzimidazole)", developer: "Russian research groups",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["actoprotector", "antihypoxant", "benzimidazole", "WADA"],
      summary: "A Russian drug of the \"actoprotector\" class, said to raise physical and mental work capacity under stress and low oxygen. Its human evidence is a set of small, old, Russian-language reports. It has been on the WADA monitoring program since 2018.",
      names: "The Russian literature calls it an actoprotector, an antihypoxant and a moderate psychostimulant. Its approval status was not confirmed from a primary source for this entry. The World Anti-Doping Agency has monitored it since 2018.",
      structure: "2-ethylthiobenzimidazole hydrobromide, a benzimidazole. In rats, its most abundant urinary metabolite is a benzimidazole-acetylcysteine conjugate, a detoxification product.",
      pubchem: "2-(ethylthio)benzimidazole",
      profile: { note: "Scored relative to other nootropics in the codex. Human data are small, dated and mostly unavailable in English.", rows: [
        { label: "Work-capacity signal", score: 2 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No modern safety trial was found. The human reports do not give a full account of side effects", evidence: "unknown" },
        { system: "Drug metabolism", level: "unknown", text: "In rats it induced liver cytochrome P-450 enzymes, which could change the levels of other drugs. This was not shown in people", evidence: "animal", refs: [3208] },
        { system: "Sport", level: "moderate", text: "It is on the WADA monitoring program, so it may draw anti-doping attention", evidence: "established", refs: [3209] }
      ],
      activity: [
        { title: "Cytochrome P-450 induction", evidence: "animal", summary: "Raised liver cytochrome P-450 content and monooxygenase activity in rats, and changed enzyme activity in human lymphocytes in vitro", refs: [3208] },
        { title: "Metabolism", evidence: "animal", summary: "Nine metabolites were found in rat urine, mostly through glutathione conjugation", refs: [3209] }
      ],
      trials: [
        { title: "Long sea voyages", evidence: "human obs", meta: ["operators on long-term voyages", "bemethyl 0.25-0.5 g in 24 hours", "Russian-language report"], body: "The author reported better nonspecific defence markers, working ability of operators and lower illness rates, and said the effect lasted after stopping.", note: "The abstract does not give the number of people or the controls. Treat as a weak signal.", refs: [3210] },
        { title: "Simulated spaceflight and 56-hour work", evidence: "human obs", meta: ["operators in simulated spaceflight conditions", "bemethyl against placebo controls", "Russian-language report"], body: "Operators on bemethyl did tracking tasks about 10% better, made 1.8 times fewer errors in pursuit tracking and detected visual signals 2.4 times faster than controls.", note: "A 1988 report. The abstract does not state the sample size or the design.", refs: [3211] },
        { title: "Progressive muscular dystrophy", evidence: "human obs", meta: ["22 patients with progressive myodystrophy", "bemethyl; dose not reported", "Russian-language report"], body: "Treatment lowered lipid peroxidation and shifted glucose and metabolite exchange. The report recommended it alongside drugs for the underlying metabolism.", note: "These are lab markers. Muscle strength or function was not reported in the abstract.", refs: [3212] }
      ],
      related: ["semax", "selank"]
    },

    /* ------------------------------------------------------------ nooglutyl */
    {
      slug: "nooglutyl", type: "compound", name: "Nooglutyl",
      aliases: ["Nooglutil", "N-5-hydroxynicotinoyl-L-glutamic acid"], category: "nootropic", status: "Research only",
      class: "Glutamate derivative (nootropic)", developer: "Russian research groups",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["glutamate", "AMPA", "neuroprotection", "memory"],
      summary: "A Russian nootropic made from glutamic acid and hydroxynicotinic acid. Rodent studies report better memory and some protection after brain injury. No human trial was found.",
      names: "Described in Russian papers as a nootropic with glutamatergic effects. One paper calls it a positive modulator of AMPA receptors. Regulatory approval was not confirmed from a primary source for this entry.",
      structure: "N-5-hydroxy(nicotinoyl)-L-glutamic acid, a derivative of L-glutamic acid and hydroxynicotinic acid.",
      pubchem: "nooglutyl",
      profile: { note: "Scored relative to other nootropics in the codex. All evidence is from animals.", rows: [
        { label: "Preclinical signal", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data of any kind were found", evidence: "unknown" }
      ],
      activity: [
        { title: "AMPA receptors", evidence: "animal", summary: "Described by its authors as a positive modulator of AMPA-type glutamate receptors", refs: [3213, 3214] },
        { title: "Aged mice", evidence: "animal", summary: "At 20 mg/kg it improved behavior, lowered anxiety and improved memory retrieval in 9-month-old SAMP10 accelerated-aging mice", refs: [3215] },
        { title: "Prenatal hypoxia", evidence: "animal", summary: "Prevented learning and memory problems in rats exposed to low oxygen before birth", refs: [3216] },
        { title: "Brain bleed model", evidence: "animal", summary: "Reduced neurological deficit and improved memory retrieval in rats with an induced brain hematoma", refs: [3213] }
      ],
      trials: [],
      noTrials: "No human trial was found. The evidence is a small group of rodent studies, mostly from one Russian research group, and a review by that group.",
      related: ["noopept", "piracetam"]
    },

    /* ------------------------------------------------------------ gb-115 */
    {
      slug: "gb-115", type: "compound", name: "GB-115",
      aliases: ["Talanax", "Ph(CH2)5CO-Gly-D-Trp-NH2"], category: "nootropic", status: "Investigational",
      class: "Dipeptide anxiolytic (cholecystokinin analog)", developer: "Russian research groups",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["dipeptide", "anxiolytic", "cholecystokinin", "anxiety"],
      summary: "A tryptophan-containing dipeptide that reduced anxiety in rodents without signs of tolerance or withdrawal. One small Russian clinical study in generalized anxiety disorder reported benefit. It is not an approved drug.",
      names: "A synthetic dipeptide built on endogenous cholecystokinin-4. Researchers describe it as a retroanalog of CCK-4 and as a low-affinity blocker of central cholecystokinin receptors. It has been studied in animals and in one small human study. The name Talanax appears in an animal paper.",
      structure: "Ph(CH2)5CO-Gly-D-Trp-NH2, a short peptide with a tryptophan residue.",
      profile: { note: "Scored relative to other nootropics in the codex. Human evidence is one small study.", rows: [
        { label: "Anxiolytic signal", score: 2 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Tolerability", level: "unknown", text: "A 31-patient, 21-day study reported good tolerability. The sample is too small to show rare harms", evidence: "human obs", refs: [3217] },
        { system: "Dependence", level: "unknown", text: "Rats given it for 30 days showed no withdrawal signs, unlike rats given diazepam. This has not been tested in people", evidence: "animal", refs: [3218] }
      ],
      activity: [
        { title: "Anxiety models", evidence: "animal", summary: "Reduced anxiety-like behavior in rats and mice, including after oral dosing", refs: [3219] },
        { title: "Benzodiazepine withdrawal", evidence: "animal", summary: "Eased anxiety in rats after withdrawal from phenazepam or diazepam", refs: [3220] },
        { title: "No tolerance or withdrawal", evidence: "animal", summary: "Kept its anxiolytic effect over 30 days in rats and caused no withdrawal signs when stopped", refs: [3218] },
        { title: "Depression-like behavior", evidence: "animal", summary: "Reduced immobility time in mouse forced-swim tests, less strongly than amitriptyline", refs: [3221] }
      ],
      trials: [
        { title: "Generalized anxiety disorder", evidence: "human obs", meta: ["31 adults aged 22-53 with generalized anxiety disorder", "GB-115 1 mg tablets; the study reported 6 mg a day as the effective dose", "21 days", "clinical study; the abstract describes no placebo group"], body: "Anxiety scores fell, with a fast onset and a stimulating effect. Sleep, autonomic symptoms, attention and reaction time also improved. The authors called it safe and well tolerated.", note: "Small, and apparently uncontrolled. It cannot show the drug beats placebo.", refs: [3217] }
      ],
      related: ["selank", "phenibut"]
    },

    /* ------------------------------------------------------------ neboglamine */
    {
      slug: "neboglamine", type: "compound", name: "Neboglamine",
      aliases: ["CR 2249", "(S)CR 2249"], category: "nootropic", status: "Research only",
      class: "NMDA receptor glycine-site modulator", developer: "Industry preclinical research (1990s-2010)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["NMDA", "glycine site", "schizophrenia", "cognition"],
      summary: "An experimental drug that boosts NMDA receptor activity through the glycine site. Rat studies suggested possible use in schizophrenia and memory. No human trial results were found.",
      names: "Described in 1997 as a putative cognition enhancer under the code (S)CR 2249, and in 2010 as neboglamine, a possible treatment for schizophrenia. It is not approved anywhere.",
      structure: "(S)-4-amino-5-[(4,4-dimethylcyclohexyl)amino]-5-oxo-pentanoic acid, a derivative of glutamic acid. In tissue it appears to act at a separate site from glycine and make glycine more effective.",
      pubchem: "neboglamine",
      profile: { note: "Scored relative to other nootropics in the codex. All evidence is from animals and tissue.", rows: [
        { label: "Preclinical signal", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human safety data were found", evidence: "unknown" }
      ],
      activity: [
        { title: "NMDA glycine site", evidence: "in vitro", summary: "In rat hippocampal slices it raised the efficacy of glycine at NMDA receptors and increased MK-801 binding, pointing to a separate allosteric site", refs: [3222] },
        { title: "Antipsychotic-like effects", evidence: "animal", summary: "Raised Fos activity in the prefrontal cortex and nucleus accumbens like clozapine. By mouth, it blocked phencyclidine-induced hyperactivity in rats without changing baseline activity", refs: [3223] }
      ],
      trials: [],
      noTrials: "No published human trial was found. The evidence is from rat brain slices and rat behavior.",
      related: ["nsi-189", "piracetam"]
    }
  );

  Object.assign(A.references, {
    3200: "Parnate (tranylcypromine sulfate) tablets prescribing information. Advanz Pharma (US) Corp. US FDA label via DailyMed, setid b72d8187-dfcc-4ea0-b5e9-c0be95b69a27, revised 11/2023 (DailyMed version July 2025): https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b72d8187-dfcc-4ea0-b5e9-c0be95b69a27",
    3201: "McGrath PJ et al. Tranylcypromine versus venlafaxine plus mirtazapine following three failed antidepressant medication trials for depression: a STAR*D report. Am J Psychiatry 2006;163:1531-1541.",
    3202: "Ricken R, Ulrich S, Schlattmann P, Adli M. Tranylcypromine in mind (Part II): Review of clinical pharmacology and meta-analysis of controlled studies in depression. Eur Neuropsychopharmacol 2017;27:714-731.",
    3203: "Birkenhager TK et al. Efficacy and tolerability of tranylcypromine versus phenelzine: a double-blind study in antidepressant-refractory depressed inpatients. J Clin Psychiatry 2004;65:1505-1510.",
    3204: "Lee G et al. Association of L-alpha glycerylphosphorylcholine with subsequent stroke risk after 10 years. JAMA Netw Open 2021;4:e2136008.",
    3205: "Jeon J et al. Efficacy and safety of choline alphoscerate for amnestic mild cognitive impairment: a randomized double-blind placebo-controlled trial. BMC Geriatr 2024;24:774.",
    3206: "De Jesus Moreno Moreno M. Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate: a multicenter, double-blind, randomized, placebo-controlled trial. Clin Ther 2003;25:178-193.",
    3207: "Sagaro GG, Traini E, Amenta F. Activity of choline alphoscerate on adult-onset cognitive dysfunctions: a systematic review and meta-analysis. J Alzheimers Dis 2023;92:59-70.",
    3208: "Sorokina EA et al. Effect of bemethyl on cytochrome P-450-dependent monoxygenases in the human liver and lymphocytes. Eksp Klin Farmakol 2002;65:31-34.",
    3209: "Belinskaia DA et al. Investigation of bemethyl biotransformation pathways by combination of LC-MS/HRMS and in silico methods. Int J Mol Sci 2021;22:9021.",
    3210: "Novikov VS. Efficiency of preventive use of bemethyl during long-term voyages. Gig Sanit 1991;(3):37-39.",
    3211: "Bobkov IuG, Epishkin AK. Effect of actoprotectors on the work capacity of operators during modeling of various factors of space flight. Kosm Biol Aviakosm Med 1988;22:20-23.",
    3212: "Lobzin VS et al. The use of bemitil in patients with progressive muscular dystrophies. Lik Sprava 1992;(4):85-87.",
    3213: "Garibova TL et al. Effect of nooglutil on rats with intracerebral posttraumatic hematoma (hemorrhagic stroke). Eksp Klin Farmakol 2003;66:13-16.",
    3214: "Voronina TA. New trends in the search for nootropic preparations. Vestn Ross Akad Med Nauk 1998.",
    3215: "Garibova TL et al. Effect of nooglutyl on the behavior and memory of SAMP10 mice with genetically determined accelerated aging. Eksp Klin Farmakol 2007.",
    3216: "Trofimov SS et al. The correction with nooglutil and L-pyroglutamyl-D-alanine amide of cognitive disorders in rats due to intrauterine hypoxia. Eksp Klin Farmakol 1995.",
    3217: "Neznamov GG et al. Results of a clinical study of a new anxiolytic, a blocker of central cholecystokinin receptors. Zh Nevrol Psikhiatr Im S S Korsakova 2019;119(8):53-60.",
    3218: "Kolik LG et al. The absence of tolerance and withdrawal syndrome after the treatment with the new L-tryptophane-containing dipeptide anxiolytic GB-115. Vestn Ross Akad Med Nauk 2011;(7):37-42.",
    3219: "Kolik LG et al. Anxiolytic activity of dipeptide GB-115 after oral administration. Bull Exp Biol Med 2013;155:200-203.",
    3220: "Kolik LG et al. Effect of GB-115 dipeptide on anxiety in rats with model benzodiazepine withdrawal syndrome. Eksp Klin Farmakol 2011;74(10):7-11.",
    3221: "Kolik LG. Experimental study of antidepressant effects of GB-115 dipeptide. Eksp Klin Farmakol 2011;74(1):3-5.",
    3222: "Lanza M et al. Characterization of a novel putative cognition enhancer mediating facilitation of glycine effect on strychnine-resistant sites coupled to NMDA receptor complex. Neuropharmacology 1997;36:1057-1064.",
    3223: "Chiusaroli R et al. Antipsychotic-like effects of the N-methyl-D-aspartate receptor modulator neboglamine: an immunohistochemical and behavioural study in the rat. Pharmacol Res 2010;61:430-436."
  });
})(window.ATLAS);

/* batch d */
(function (A) {
  A.entries.push(
    /* ------------------------------------------------------------ isrib */
    {
      slug: "isrib", type: "compound", name: "ISRIB",
      aliases: ["Integrated stress response inhibitor"], category: "nootropic", status: "Research only",
      class: "Integrated stress response inhibitor (eIF2B activator)", developer: "Peter Walter laboratory (academic research)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["integrated stress response", "eIF2B", "memory", "brain injury", "animal only"],
      summary: "A lab compound that switches off a cell stress program called the integrated stress response. It improved memory in healthy mice and reversed memory loss after brain injury and in old age in mice. It has not been tested in people.",
      names: "ISRIB stands for integrated stress response inhibitor. It was found in a cell-based screen and is used as a research tool. It is not approved anywhere, and no human study of ISRIB itself has been published.",
      structure: "C<sub>22</sub>H<sub>24</sub>Cl<sub>2</sub>N<sub>2</sub>O<sub>4</sub>, about 451.3 g/mol. It is a symmetric molecule: two identical chlorophenoxy-acetamide arms joined through a cyclohexane ring.",
      pubchem: "ISRIB",
      profile: { note: "Every score here rests on animal and cell studies.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No published human data of any kind", evidence: "unknown" },
        { system: "Stress response", level: "unknown", text: "The pathway it blocks protects cells under stress, so switching it off could be harmful in some settings", evidence: "in vitro", detail: "In cell culture, ISRIB reduced the survival of cells under chronic endoplasmic reticulum stress.", refs: [3300] },
        { system: "Pancreas", level: "low", text: "No pancreatic damage was seen in prion-infected mice treated with ISRIB, unlike with a different drug that blocks the same pathway upstream", evidence: "animal", refs: [3304] }
      ],
      activity: [
        { title: "eIF2B activation", evidence: "in vitro", summary: "Activates the protein-making factor eIF2B and makes cells insensitive to the stress signal that normally slows protein synthesis", detail: "ISRIB stabilizes active eIF2B dimers. Its effect is described as reversing the stress-driven shutdown of translation.", refs: [3300, 3301] },
        { title: "Memory in healthy mice", evidence: "animal", summary: "Mice treated with ISRIB showed better spatial and fear-associated learning", refs: [3300] },
        { title: "Traumatic brain injury", evidence: "animal", summary: "Reversed long-lasting memory deficits in two mouse injury models, even when given weeks after the injury, and restored long-term potentiation in the hippocampus", refs: [3302] },
        { title: "Age-related memory decline", evidence: "animal", summary: "Reversed spatial memory deficits and improved working memory in old mice, with restored spine density and lower immune signalling in the hippocampus", refs: [3303] },
        { title: "Prion disease", evidence: "animal", summary: "Protected prion-infected mice from neurodegeneration while restoring protein synthesis only partly", refs: [3304] }
      ],
      trials: [],
      noTrials: "No human study of ISRIB has been published. All the evidence on this page comes from cell and mouse experiments.",
      related: ["nsi-189", "9-me-bc"]
    },

    /* ------------------------------------------------------------ j-147 */
    {
      slug: "j-147", type: "compound", name: "J-147",
      aliases: ["J147"], category: "nootropic", status: "Investigational",
      class: "Curcumin-derived phenyl hydrazide (ATP synthase modulator)", developer: "Schubert laboratory (academic research); Abrexa Pharmaceuticals (phase 1 sponsor)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["Alzheimer's", "mitochondria", "ATP synthase", "BDNF", "animal only"],
      summary: "A curcumin-derived compound that improved memory and raised the growth factors NGF and BDNF in aged Alzheimer's model mice. A phase 1 trial is registered as completed, but no results have been published.",
      names: "Designed as an Alzheimer's drug candidate from a series of screens that mimic toxic changes in the aging brain. It is an analogue of curcumin made to be more stable. It is not approved anywhere.",
      structure: "C<sub>18</sub>H<sub>17</sub>F<sub>3</sub>N<sub>2</sub>O<sub>2</sub>, about 350.3 g/mol. It is a phenyl hydrazide. Because that group can give toxic breakdown products, its metabolism was checked in human and mouse liver microsomes. J147 was not broken down to aromatic amines or hydrazines.",
      pubchem: "J147",
      profile: { note: "There are no published human results, so every score rests on animal and cell studies.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No published human data. A phase 1 safety trial is registered but its results have not been published", evidence: "unknown" },
        { system: "Metabolites", level: "low", text: "The hydrazide group raised a concern about toxic breakdown products. J147 was not converted to aromatic amines or hydrazines in human or mouse liver microsomes", evidence: "in vitro", refs: [3313] }
      ],
      activity: [
        { title: "Aged Alzheimer's model mice", evidence: "animal", summary: "Rescued memory deficits in 20-month-old transgenic mice with advanced pathology, along with higher NGF, BDNF and BDNF-responsive proteins", refs: [3310] },
        { title: "Scopolamine amnesia", evidence: "animal", summary: "Matched donepezil on short-term memory in a drug-induced amnesia model in mice, and did better on spatial memory", refs: [3310] },
        { title: "ATP synthase", evidence: "in vitro", summary: "Binds the mitochondrial ATP synthase subunit ATP5A. This raises intracellular calcium and activates the CAMKK2, AMPK and mTOR pathway", detail: "In the same work, J147 slowed age-related drift in the hippocampal gene activity and blood metabolites of mice and extended lifespan in fruit flies.", refs: [3311] },
        { title: "Neurogenesis", evidence: "animal", summary: "Improved memory and dendrite structure and stimulated cell division in germinal regions of the brains of very old mice", refs: [3312] }
      ],
      trials: [],
      noTrials: "A phase 1 single-ascending-dose trial of J147 in healthy young and elderly volunteers (NCT03838185, sponsor Abrexa Pharmaceuticals) is registered as completed in 2020, with 64 participants. No peer-reviewed results were found. A phase 2 trial in acute ischemic stroke (NCT07430917) is registered as recruiting. Nothing about J147 in people can be reported from published sources.",
      related: ["nsi-189", "cms-121"]
    },

    /* ------------------------------------------------------------ cms-121 */
    {
      slug: "cms-121", type: "compound", name: "CMS121",
      aliases: ["CMS-121"], category: "nootropic", status: "Investigational",
      class: "Fisetin derivative (fatty acid synthase target)", developer: "Maher and Schubert laboratories (academic research)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["Alzheimer's", "fisetin", "ferroptosis", "fatty acid synthase"],
      summary: "A chemically modified form of the plant flavonol fisetin, made to be more potent and better absorbed. It protected cognition in several Alzheimer's mouse models and slowed disease in Huntington's mice. A phase 1 safety study in healthy adults exists only as an unreviewed preprint.",
      names: "One of about 160 fisetin derivatives made by the lab; CMS121 was picked for its pharmacology and for how it did in Alzheimer's mouse models. Its toxicology testing led to an approved IND, which allows human trials in the US. It is not approved for any use.",
      structure: "A synthetic derivative of fisetin, which is a flavonol found in fruit and vegetables. The changes were made to raise potency and improve fisetin's low fat solubility and poor absorption. Fatty acid synthase is reported as a key target.",
      pubchem: "cms-121",
      profile: { note: "There are no peer-reviewed human data, so scores rest on animal studies.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No peer-reviewed human safety data", evidence: "unknown" }
      ],
      activity: [
        { title: "Neuroprotection screen", evidence: "in vitro", summary: "Chosen from fisetin derivatives for stronger protection in a cell neuroprotection model while keeping other fisetin activities", refs: [3320] },
        { title: "Alzheimer's models", evidence: "animal", summary: "Maintained cognitive function in multiple preclinical Alzheimer's models. The review names fatty acid synthase as a key target", detail: "The review also describes the toxicology work behind the IND approval.", refs: [3321] },
        { title: "Huntington's models", evidence: "animal", summary: "Slowed motor decline and raised median lifespan in two Huntington's mouse models, and reduced disease-linked changes in proteasome and oxidative phosphorylation genes", refs: [3322] }
      ],
      trials: [],
      noTrials: "No peer-reviewed human study has been published. Results of a phase 1 safety study in healthy adults have so far appeared only as a preprint that has not been peer reviewed.",
      related: ["j-147", "nsi-189"]
    },

    /* ------------------------------------------------------------ acd856 */
    {
      slug: "acd856", type: "compound", name: "ACD856",
      aliases: ["Trk-PAM ACD856"], category: "nootropic", status: "Investigational",
      class: "Trk receptor positive allosteric modulator (triazinetrione)", developer: "AlzeCure Pharma AB",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["Trk", "BDNF", "Alzheimer's", "phase 1", "neurotrophin"],
      summary: "A drug candidate that boosts the signalling of brain growth-factor receptors (Trk receptors). It improved memory in mice, including old mice, and was well tolerated in two phase 1 studies in healthy people. It has not been tested for benefit in patients.",
      names: "Developed by AlzeCure Pharma for Alzheimer's disease and other conditions with impaired cognition, and considered for depression. It followed ACD855 (ponazuril), whose half-life in humans was too long for further development. It is not approved anywhere.",
      structure: "A triazinetrione. It does not bind the growth factor's own site. It acts as a positive allosteric modulator, raising the response of Trk receptors to their natural activators.",
      pubchem: false,
      profile: { note: "Human data are safety and blood-level studies in healthy volunteers. Nothing shows a cognitive benefit in people.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Short-term tolerability", level: "low", text: "No serious adverse events and no dose-related safety signals in healthy subjects, in single doses up to 150 mg and in 7 days of dosing up to 90 mg a day", evidence: "human rct", refs: [3333, 3334] },
        { system: "Long-term safety", level: "unknown", text: "No human data beyond 7 days of dosing in healthy volunteers, and none in patients", evidence: "unknown" }
      ],
      activity: [
        { title: "Trk receptor modulation", evidence: "in vitro", summary: "Raised cell signalling through TrkA and TrkB, with half-maximal concentrations of about 0.38 and 0.30 µM", detail: "It was found by screening 25,000 molecules for ones that enhance NGF and BDNF signalling.", refs: [3330] },
        { title: "Age-related cognitive loss", evidence: "animal", summary: "A single dose restored cognition in 18-month-old mice to the level of 2-month-old mice. Cognitive effects depended on TrkB", refs: [3330] },
        { title: "Neuroprotection and BDNF", evidence: "animal", summary: "Protected cultured cortical neurons against amyloid-beta and energy-deprivation toxicity and raised BDNF, including in the brains of 21-month-old mice", refs: [3331] },
        { title: "Depression-like behaviour", evidence: "animal", summary: "Trk-PAM compounds showed antidepressant-like activity in the forced swim test in rodents, and repeated ACD856 gave an effect lasting up to 7 days", refs: [3332, 3331] }
      ],
      trials: [
        { title: "Single ascending doses, including a microdose study", evidence: "human rct", meta: ["6 healthy men in the microdose study; 56 healthy subjects in the oral dose study", "intravenous microdose of 0.100 mg, then oral single doses of 1 to 150 mg or placebo", "single doses", "phase 0 followed by randomized, double-blind, placebo-controlled phase 1"], body: "ACD856 was well tolerated, with no treatment-emergent adverse events related to dose. It was absorbed quickly and almost completely, with a plasma half-life of about 20 hours, and exposure rose in proportion to dose. Food lowered and delayed peak levels but changed total exposure little. No unchanged drug was found in urine.", note: "A safety and blood-level study in healthy people. It does not test cognition.", refs: [3333] },
        { title: "Seven days of dosing with brain-wave measures", evidence: "human rct", meta: ["24 healthy men and women, 8 per dose group (6 on ACD856, 2 on placebo)", "ACD856 10 mg to 90 mg once daily, or placebo", "7 days", "double-blind, parallel-group, placebo-controlled phase 1"], body: "No serious adverse events were seen, and there were no dose-related safety trends. Steady state was reached before day 6, with a half-life of about 20 hours. The drug was found in cerebrospinal fluid. In the 30 mg and 90 mg groups, EEG showed more theta power and less fast alpha and beta power, which the authors read as evidence the drug reaches its brain target.", note: "The EEG changes show the drug acts in the brain. They do not show better memory or thinking.", refs: [3334] }
      ],
      related: ["nsi-189", "j-147"]
    }
  );

  Object.assign(A.references, {
    3300: "Sidrauski C et al. Pharmacological brake-release of mRNA translation enhances cognitive memory. eLife 2013;2:e00498.",
    3301: "Sidrauski C et al. Pharmacological dimerization and activation of the exchange factor eIF2B antagonizes the integrated stress response. eLife 2015;4:e07314.",
    3302: "Chou A et al. Inhibition of the integrated stress response reverses cognitive deficits after traumatic brain injury. Proc Natl Acad Sci U S A 2017;114:E6420-E6426.",
    3303: "Krukowski K et al. Small molecule cognitive enhancer reverses age-related memory decline in mice. eLife 2020;9:e62048.",
    3304: "Halliday M et al. Partial restoration of protein synthesis rates by the small molecule ISRIB prevents neurodegeneration without pancreatic toxicity. Cell Death Dis 2015;6:e1672.",
    3310: "Prior M et al. The neurotrophic compound J147 reverses cognitive impairment in aged Alzheimer's disease mice. Alzheimers Res Ther 2013;5:25.",
    3311: "Goldberg J et al. The mitochondrial ATP synthase is a shared drug target for aging and dementia. Aging Cell 2018;17:e12715.",
    3312: "Prior M et al. Selecting for neurogenic potential as an alternative for Alzheimer's disease drug discovery. Alzheimers Dement 2016;12:678-686.",
    3313: "Chiruta C et al. Metabolism of a potent neuroprotective hydrazide. Bioorg Med Chem 2013;21:2733-2741.",
    3320: "Chiruta C et al. Chemical modification of the multitarget neuroprotective compound fisetin. J Med Chem 2012;55:378-389.",
    3321: "Currais A, Raschke W, Maher P. CMS121, a novel drug candidate for the treatment of Alzheimer's disease and age-related dementia. J Alzheimers Dis 2024;101:S179-S192.",
    3322: "Ates G, Taguchi T, Maher P. CMS121 partially attenuates disease progression in mouse models of Huntington's disease. Mol Neurobiol 2024;61:2165-2175.",
    3330: "Dahlström M et al. Identification of novel positive allosteric modulators of neurotrophin receptors for the treatment of cognitive dysfunction. Cells 2021;10:1871.",
    3331: "Parrado Fernandez C et al. Neuroprotective and disease-modifying effects of the triazinetrione ACD856, a positive allosteric modulator of Trk-receptors for the treatment of cognitive dysfunction in Alzheimer's disease. Int J Mol Sci 2023;24:11159.",
    3332: "Madjid N et al. Antidepressant effects of novel positive allosteric modulators of Trk-receptor mediated signaling - a potential therapeutic concept? Psychopharmacology (Berl) 2023;240:1789-1804.",
    3333: "Nilsson B et al. ACD856, a novel positive allosteric modulator of Trk receptors, single ascending doses in healthy subjects: safety and pharmacokinetics. Eur J Clin Pharmacol 2024;80:717-727.",
    3334: "Önnestam K et al. Safety, tolerability, pharmacokinetics and quantitative electroencephalography assessment of ACD856, a novel positive allosteric modulator of Trk-receptors following multiple doses in healthy subjects. J Prev Alzheimers Dis 2023;10:778-789."
  });
})(window.ATLAS);


/* batch e */
(function (A) {
  A.entries.push(
    /* ------------------------------------------------------------ adrafinil */
    {
      slug: "adrafinil", type: "compound", name: "Adrafinil",
      aliases: ["CRL-40028", "Olmifon"], category: "nootropic", status: "Research only",
      class: "Wakefulness-promoting agent (modafinil prodrug)", developer: "Laboratoire L. Lafon (France, 1970s)",
      added: "2026-10-21", updated: "2026-10-21",
      tags: ["eugeroic", "wakefulness", "prodrug", "modafinil", "WADA prohibited", "withdrawn"],
      summary: "The parent of modafinil. The body converts it to modafinil, which is thought to do the work. It was sold only in France as Olmifon, for sleepiness and poor attention in older adults, until regulators judged its benefit unproven in 2011.",
      names: "Olmifon (300 mg tablets) was authorised in France in 1981 and sold only there from 1985. In 2011 the French regulator said the trial data could not show a benefit in older people, and its marketing commission proposed withdrawing the licence. The maker stopped selling it that year. It is not approved for sale as a drug today. \"Research only\" reflects that. WADA lists it as a prohibited stimulant.",
      structure: "2-(diphenylmethylsulfinyl)-N-hydroxyacetamide, a hydroxamic acid. It is modafinil with an N-hydroxy group on the amide. Fladrafinil and flmodafinil are its fluorinated relatives.",
      pubchem: "adrafinil",
      profile: { note: "There are no published controlled trials in people, so every score is low on evidence. The wakefulness score is borrowed from modafinil, its metabolite.", rows: [
        { label: "Wakefulness (via modafinil)", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Regulatory", level: "moderate", text: "French regulator judged the benefit-risk balance unfavourable", evidence: "established", detail: "In 2011 the regulator reviewed the drug. The trial results from the maker could not show a benefit for alertness problems in older adults. Given the known side effects, the marketing commission proposed withdrawing the licence. The text does not name the side effects.", refs: [3408] },
        { system: "Movement", level: "unknown", text: "A single case report of lasting mouth and face movements after use", evidence: "human obs", detail: "An older man developed orofacial dyskinesia on adrafinil. It did not clear in the four months after stopping, and improved only after tetrabenazine. One case cannot give a rate or show cause.", refs: [3403] },
        { system: "Sport", level: "high", text: "Prohibited in competition by WADA (S6.A, non-specified stimulants)", evidence: "established", detail: "Adrafinil is named on the 2026 Prohibited List. Its metabolite modafinil is also tested for.", refs: [1800, 3400] },
        { system: "Product quality", level: "moderate", text: "Sold online as an unregulated supplement or chemical. Identity and purity are unverified", evidence: "established" }
      ],
      activity: [
        { title: "Conversion to modafinil", evidence: "human obs", summary: "Metabolised mainly to modafinil. After a single 200 mg dose in one volunteer, both adrafinil and modafinil were found in hair", detail: "The same lab group noted adrafinil is primarily metabolised in the body to modafinil. This is a forensic, one-person study, not a full pharmacokinetic study.", refs: [3400] },
        { title: "Urinary metabolites", evidence: "human obs", summary: "Anti-doping labs test urine for adrafinil together with its metabolites modafinil and modafinil acid", refs: [3401] },
        { title: "Discovery", evidence: "animal", summary: "Raised motor activity in mice without peripheral sympathomimetic effects. Studying its kinetics led to the discovery of modafinil as an active metabolite", refs: [3402] },
        { title: "Activity in aged dogs", evidence: "animal", summary: "Raised locomotion over 14 days of dosing in aged dogs, though some dogs did not respond", refs: [3406] },
        { title: "Learning in aged dogs", evidence: "animal", summary: "Improved learning of a discrimination task in aged beagles at one dose", refs: [3404, 3405] },
        { title: "Working memory in aged dogs", evidence: "animal", summary: "At 20 mg/kg it worsened performance on a working-memory task in aged beagles", detail: "The authors suggested raised noradrenergic signalling in the prefrontal cortex as a cause.", refs: [3407] }
      ],
      trials: [],
      noTrials: "No human trial of adrafinil appears in PubMed. The French regulator reviewed the maker's clinical studies in older adults and found they could not show a benefit. Its other evidence comes from dogs and mice.",
      noTrialsRefs: [3408],
      related: ["modafinil", "fladrafinil", "flmodafinil"]
    }
  );
  Object.assign(A.references, {
    3400: "Ameline A et al. Identification of adrafinil and its main metabolite modafinil in human hair. Self-administration study and interpretation of an authentic case. Forensic Sci Res 2020;5:322-326.",
    3401: "Lu J et al. Doping control analysis for adrafinil and its major metabolites in human urine. Rapid Commun Mass Spectrom 2009;23:1592-1600.",
    3402: "Billiard M, Broughton R. Modafinil: its discovery, the early European and North American experience in the treatment of narcolepsy and idiopathic hypersomnia, and its subsequent use in other medical conditions. Sleep Med 2018;49:69-72.",
    3403: "Thobois S et al. Adrafinil-induced orofacial dyskinesia. Mov Disord 2004;19:965-966.",
    3404: "Siwak CT, Callahan H, Milgram NW. Adrafinil: effects on behavior and cognition in aged canines. Prog Neuropsychopharmacol Biol Psychiatry 2000;24:709-726.",
    3405: "Milgram NW et al. Oral administration of adrafinil improves discrimination learning in aged beagle dogs. Pharmacol Biochem Behav 2000;66:301-305.",
    3406: "Siwak CT et al. Behavioral activating effects of adrafinil in aged canines. Pharmacol Biochem Behav 2000;66:293-300.",
    3407: "Siwak CT, Tapp PD, Milgram NW. Adrafinil disrupts performance on a delayed nonmatching-to-position task in aged beagle dogs. Pharmacol Biochem Behav 2003;76:161-168.",
    3408: "Afssaps (now ANSM). Point d'information sur les dossiers discutés en commission d'AMM, séance du jeudi 1er décembre 2011 (communiqué, 2 December 2011). archive.ansm.sante.fr."
  });
})(window.ATLAS);

/* references for dosing, pharmacokinetics and monitoring */
(function (A) {
  Object.assign(A.references, {
    3900: "Gliatilin (colina alfoscerato) 400 mg capsule, 600 mg capsule and oral vial, and 1000 mg/4 mL injection: riassunto delle caratteristiche del prodotto. Agenzia Italiana del Farmaco (AIFA), document made available 20/08/2026: https://api.aifa.gov.it/aifa-bdf-eif-be/1.0.0/organizzazione/68/farmaci/25937/stampati?ts=RCP"
  });
})(window.ATLAS);
