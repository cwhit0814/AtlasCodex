/* Atlas Codex: fat loss agents (stimulants, β-agonists, thyroid-axis drugs, uncouplers) and TAK-653.
   Same schema as data.js. Pharmacokinetics are set inline as `pk`. */
(function (A) {
  A.categories.splice(A.categories.findIndex((c) => c.id === "guides"), 0,
    { id: "fatloss", name: "Fat Loss", blurb: "Stimulants, β-agonists, thyroid-axis drugs and other compounds used for fat loss." });

  const flNote = "Scored relative to other fat loss agents in the codex, at doses used in the studies cited.";
  const supplementQuality = { system: "Product quality", level: "high", text: "Supplement and research-chemical products are frequently mislabeled, with doses that differ from the label or undeclared stimulants", evidence: "human obs", refs: [84] };
  const cardio = (detail) => ({ system: "Cardiovascular", level: "high", text: "Raises heart rate and blood pressure, with case reports of arrhythmia, heart attack and stroke", evidence: "human obs", detail });

  A.entries.push(
    /* ------------------------------------------------------------ tak-653 (nootropic) */
    {
      slug: "tak-653", type: "compound", name: "TAK-653",
      aliases: ["Osavampator", "NBI-1065845"], category: "nootropic", status: "Investigational",
      class: "AMPA receptor positive allosteric modulator", developer: "Takeda; licensed to Neurocrine Biosciences",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["AMPA", "ampakine", "depression", "cognition"],
      summary: "An AMPA receptor potentiator designed to boost glutamate signaling without directly switching the receptor on. It is in clinical development as an add-on treatment for depression.",
      names: "Discovered by Takeda as TAK-653 and licensed to Neurocrine Biosciences, which develops it as NBI-1065845 (INN osavampator) as an add-on treatment for major depressive disorder. It is not approved anywhere. Material sold online is unregulated research chemical.",
      structure: "A small-molecule AMPA potentiator. Its defining feature is minimal direct agonist activity: it amplifies the receptor's response to glutamate but barely activates the receptor on its own. Earlier AMPA potentiators that also activated the receptor directly ran into seizure risk.",
      pubchem: "TAK-653",
      profile: { note: "Scored relative to other nootropics in the codex.", rows: [
        { label: "Cognitive / mood signal", score: 3 }, { label: "Human evidence", score: 2 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Seizure threshold", level: "unknown", text: "AMPA potentiation as a class can lower the seizure threshold. TAK-653 was designed to minimize this, and the risk at higher doses in humans is not fully characterized", evidence: "contested" },
        { system: "Long-term safety", level: "unknown", text: "No long-term human data yet", evidence: "unknown" },
        { system: "Product quality", level: "high", text: "Research-chemical material is unregulated", evidence: "established" }
      ],
      activity: [
        { title: "AMPA receptor", evidence: "in vitro", summary: "Potentiates AMPA receptor currents in the presence of glutamate, with minimal activity on its own" },
        { title: "Antidepressant models", evidence: "animal", summary: "Produced rapid antidepressant-like effects in rodents, similar to those proposed for ketamine, which also acts downstream through AMPA signaling" },
        { title: "Cortical excitability", evidence: "human rct", summary: "Increased motor cortex excitability in healthy volunteers, as measured by transcranial magnetic stimulation, showing it engages its target in the human brain" }
      ],
      trials: [],
      noTrials: "Phase 1 studies in healthy volunteers and a phase 2 trial as an add-on treatment for major depression have been reported by the developers. Neurocrine reported a positive phase 2 result and moved to phase 3. Full peer-reviewed results were not available when this entry was written.",
      pk: { evidence: "human rct", rows: [
        ["Route", "Oral"], ["Dosing interval", "Once daily in clinical studies"],
        ["Half-life", "Not published"], ["Metabolism", "Not published"], ["Excretion", "Not published"] ] },
      related: ["aniracetam", "piracetam", "nsi-189"]
    },

    /* ------------------------------------------------------------ 1,3-dmaa */
    {
      slug: "1-3-dmaa", type: "compound", name: "1,3-DMAA",
      aliases: ["Methylhexanamine", "DMAA", "Geranamine", "Forthane", "4-methylhexan-2-amine"], category: "fatloss", status: "Banned",
      class: "Aliphatic amine stimulant (indirect sympathomimetic)", developer: "Eli Lilly (1940s nasal decongestant)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["stimulant", "pre-workout", "sympathomimetic", "WADA prohibited", "FDA banned"],
      summary: "A stimulant first sold as a nasal decongestant in the 1940s, then revived in pre-workout and fat burner supplements. The FDA considers it illegal in supplements after reports of strokes, heart problems and deaths.",
      names: "Eli Lilly sold it as the Forthane nasal inhaler from the 1940s until it was withdrawn in the 1980s. From about 2006 it appeared in supplements such as Jack3d and OxyELITE Pro, labeled as \"geranium oil extract\". Whether it occurs naturally in geranium is disputed, and it has not been reliably detected there. The FDA issued warning letters in 2012 and considers it unlawful in dietary supplements. It is prohibited in sport by WADA.",
      structure: "4-methylhexan-2-amine. C<sub>7</sub>H<sub>17</sub>N, about 115.2 g/mol. A simple branched aliphatic amine, structurally similar to amphetamine without the aromatic ring. It is a positional isomer of 1,4-DMAA.",
      pubchem: "methylhexanamine",
      profile: { note: flNote, rows: [
        { label: "Stimulant effect", score: 4 }, { label: "Fat loss effect", score: 1 },
        { label: "Cardiovascular strain", score: 4, neg: true }, { label: "Risk load", score: 5, neg: true },
        { label: "Evidence quality", score: 2 } ] },
      risks: [
        cardio("Reports include hemorrhagic stroke, heart attack, arrhythmia and deaths, two of them US soldiers in 2011. Risk is higher when combined with caffeine or other stimulants and with heavy exertion in heat."),
        { system: "Blood pressure", level: "high", text: "Raises systolic blood pressure in a dose-dependent way", evidence: "human rct", refs: [83] },
        { system: "Legal status", level: "high", text: "Unlawful in US dietary supplements and prohibited by WADA", evidence: "established" },
        supplementQuality
      ],
      activity: [
        { title: "Norepinephrine release", evidence: "in vitro", summary: "Acts on the norepinephrine transporter, increasing norepinephrine signaling. This drives its stimulant and blood-pressure effects" },
        { title: "Vasoconstriction", evidence: "established", summary: "Constricts blood vessels, which was the basis of its original use as a nasal decongestant" },
        { title: "Fat loss", evidence: "unknown", summary: "No controlled evidence that it causes meaningful fat loss" }
      ],
      trials: [
        { title: "Pharmacokinetics and blood pressure in men", evidence: "human rct", meta: ["healthy men", "single oral dose of 25 mg", "24 hours", "pharmacokinetic study"], body: "Blood levels peaked a few hours after dosing and declined with a half-life of roughly 8 hours. Systolic blood pressure rose modestly, without a meaningful change in heart rate at this dose.", note: "This is a small single-dose study. Supplement servings were often higher, and were taken with caffeine.", refs: [83] }
      ],
      pk: { evidence: "human rct", refs: [83], rows: [
        ["Route", "Oral (supplements); formerly inhaled"], ["Time to peak", "About 3–5 hours"],
        ["Half-life", "About 8.5 hours"], ["Metabolism", "Limited; largely excreted unchanged"],
        ["Excretion", "Urine. Detectable in doping tests for days"] ],
        note: "Its long half-life compared with caffeine means repeated servings stack up over the day." },
      related: ["1-4-dmaa", "ephedrine", "yohimbine"]
    },

    /* ------------------------------------------------------------ 1,4-dmaa */
    {
      slug: "1-4-dmaa", type: "compound", name: "1,4-DMAA",
      aliases: ["1,4-Dimethylamylamine", "5-methylhexan-2-amine"], category: "fatloss", status: "Banned",
      class: "Aliphatic amine stimulant", developer: "No pharmaceutical origin; appeared in supplements in the 2010s",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["stimulant", "pre-workout", "designer stimulant", "FDA banned"],
      summary: "A close chemical cousin of 1,3-DMAA that appeared in supplements after DMAA was banned. It has never been tested in humans.",
      names: "It began appearing in pre-workout and weight-loss supplements as a replacement for 1,3-DMAA after the FDA crackdown, sometimes under botanical-sounding names. The FDA has stated it is not a lawful dietary ingredient. Researchers have found it in commercial supplements alongside other untested stimulants.",
      structure: "5-methylhexan-2-amine. C<sub>7</sub>H<sub>17</sub>N, about 115.2 g/mol. It has the same formula as 1,3-DMAA, with the methyl branch one carbon further along the chain.",
      pubchem: "5-methylhexan-2-amine",
      profile: { note: flNote, rows: [
        { label: "Stimulant effect", score: 3 }, { label: "Fat loss effect", score: 0 },
        { label: "Risk load", score: 5, neg: true }, { label: "Evidence quality", score: 0 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "Never studied in humans. Its effects are assumed to resemble 1,3-DMAA", evidence: "unknown" },
        cardio("Expected from its close similarity to 1,3-DMAA, though no human data exist."),
        { system: "Legal status", level: "high", text: "Not a lawful dietary ingredient in the US", evidence: "established" },
        supplementQuality
      ],
      activity: [
        { title: "Sympathomimetic activity", evidence: "unknown", summary: "Presumed to act like 1,3-DMAA on norepinephrine signaling. This has not been measured" }
      ],
      trials: [],
      noTrials: "There are no human studies of any kind. Its only documented human exposure is through supplements that contained it.",
      noTrialsRefs: [84],
      pk: { evidence: "unknown", rows: [
        ["Route", "Oral (supplements)"], ["Half-life", "Not established in humans"],
        ["Metabolism", "Not established in humans"], ["Excretion", "Not established in humans"] ] },
      related: ["1-3-dmaa", "ephedrine"]
    },

    /* ------------------------------------------------------------ clenbuterol */
    {
      slug: "clenbuterol", type: "compound", name: "Clenbuterol",
      aliases: ["Clen", "Spiropent", "Ventipulmin"], category: "fatloss", status: "Approved",
      class: "Long-acting β2-adrenergic agonist", developer: "Boehringer Ingelheim (1960s)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["β2 agonist", "repartitioning", "thermogenic", "WADA prohibited"],
      summary: "A long-acting asthma drug that, in livestock, shifts the body toward more muscle and less fat. People use it for fat loss, but there are no human trials for that purpose, and its long half-life and effects on the heart are a concern.",
      names: "Sold for asthma in some countries (e.g. Spiropent). In the US it is approved only for horses (Ventipulmin) and is not approved for humans. Its use to promote leanness in livestock is banned in the US, EU and China after outbreaks of poisoning from contaminated meat. It is prohibited in sport at all times, and several athletes have blamed positive tests on contaminated meat.",
      structure: "4-amino-α-[(tert-butylamino)methyl]-3,5-dichlorobenzyl alcohol. C<sub>12</sub>H<sub>18</sub>Cl<sub>2</sub>N<sub>2</sub>O, about 277.2 g/mol. The two chlorine atoms on the ring slow its metabolism, which is why it lasts much longer than albuterol.",
      pubchem: "clenbuterol",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 2 }, { label: "Muscle-sparing signal", score: 2 },
        { label: "Cardiovascular strain", score: 4, neg: true }, { label: "Risk load", score: 4, neg: true },
        { label: "Evidence quality", score: 2 } ] },
      risks: [
        cardio("Poison center series describe rapid heart rate, palpitations, chest pain and heart muscle injury, with case reports of heart attack in young users. In animals, chronic dosing causes cardiac hypertrophy."),
        { system: "Electrolytes", level: "high", text: "Drives potassium into cells, which can cause dangerously low blood potassium, along with high blood sugar", evidence: "human obs", refs: [98] },
        { system: "Tremor and anxiety", level: "moderate", text: "Shakiness, anxiety, insomnia and muscle cramps are common", evidence: "human obs", refs: [98] },
        { system: "Tolerance", level: "moderate", text: "β2 receptors downregulate with continuous use, so effects fade", evidence: "animal" }
      ],
      activity: [
        { title: "β2-adrenergic receptor", evidence: "established", summary: "Long-acting agonist that relaxes airway smooth muscle" },
        { title: "Repartitioning", evidence: "animal", summary: "Increases muscle protein accretion and reduces fat in cattle, pigs and rodents. This is the basis for its illicit use" },
        { title: "Thermogenesis", evidence: "animal", summary: "Raises metabolic rate and lipolysis through β-adrenergic signaling" }
      ],
      trials: [],
      noTrials: "There are no controlled human trials of clenbuterol for fat loss or body composition. Human data on misuse come from poison center reports.",
      noTrialsRefs: [98],
      pk: { evidence: "established", rows: [
        ["Route", "Oral tablets or liquid"], ["Bioavailability", "High, roughly 70–80%"], ["Time to peak", "About 2–3 hours"],
        ["Half-life", "About 25–39 hours"], ["Metabolism", "Limited"], ["Excretion", "Mainly unchanged in urine"] ],
        note: "Its long half-life means levels and side effects build over several days, and stopping doesn't clear it quickly." },
      related: ["albuterol", "mirabegron", "ephedrine"]
    },

    /* ------------------------------------------------------------ albuterol */
    {
      slug: "albuterol", type: "compound", name: "Albuterol",
      aliases: ["Salbutamol", "Ventolin", "ProAir"], category: "fatloss", status: "Approved",
      class: "Short-acting β2-adrenergic agonist", developer: "Allen & Hanburys / Glaxo (1960s)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["β2 agonist", "asthma", "rescue inhaler", "WADA"],
      summary: "The standard asthma rescue inhaler. In oral form it is sometimes used as a milder, shorter-acting substitute for clenbuterol. Evidence that it helps fat loss in healthy people is weak.",
      names: "Called salbutamol outside North America. Sold as Ventolin, ProAir and many generics, mainly as an inhaler, with oral tablets and syrup also available. WADA allows inhaled use within set limits but prohibits oral use.",
      structure: "C<sub>13</sub>H<sub>21</sub>NO<sub>3</sub>, about 239.3 g/mol. A racemic mixture; the R-enantiomer (levalbuterol) carries the β2 activity.",
      pubchem: "albuterol",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 1 }, { label: "Muscle-sparing signal", score: 1 },
        { label: "Cardiovascular strain", score: 2, neg: true }, { label: "Risk load", score: 2, neg: true },
        { label: "Evidence quality", score: 4 } ] },
      risks: [
        { system: "Cardiovascular", level: "moderate", text: "Rapid heart rate and palpitations, more with oral than inhaled use", evidence: "established" },
        { system: "Electrolytes", level: "moderate", text: "Lowers blood potassium at higher doses", evidence: "established" },
        { system: "Tremor", level: "moderate", text: "Fine tremor and nervousness are common", evidence: "established" },
        { system: "Sport", level: "moderate", text: "Oral use is prohibited in sport. Inhaled use is allowed only up to a daily limit", evidence: "established", refs: [99] }
      ],
      activity: [
        { title: "β2-adrenergic receptor", evidence: "established", summary: "Short-acting agonist that relaxes airway smooth muscle within minutes" },
        { title: "Skeletal muscle", evidence: "human rct", summary: "High oral doses have increased muscle strength in small clinical studies, for example in neuromuscular disease" },
        { title: "Energy expenditure", evidence: "human rct", summary: "Acutely raises resting energy expenditure and fat oxidation, but the effect on body fat over time is small" }
      ],
      trials: [],
      noTrials: "There are no adequate trials of albuterol for fat loss in healthy adults. Its approved uses rest on decades of asthma and COPD trials.",
      pk: { evidence: "established", rows: [
        ["Route", "Inhaled (most common), oral tablets or syrup"], ["Bioavailability", "About 50% oral, because of first-pass sulfation in the gut and liver"],
        ["Onset", "Within minutes inhaled; about 30 minutes oral"], ["Half-life", "About 4–6 hours"],
        ["Metabolism", "Sulfate conjugation"], ["Excretion", "Urine, as parent drug and sulfate"] ] },
      related: ["clenbuterol", "mirabegron"]
    },

    /* ------------------------------------------------------------ mirabegron */
    {
      slug: "mirabegron", type: "compound", name: "Mirabegron",
      aliases: ["Myrbetriq", "Betmiga", "YM178"], category: "fatloss", status: "Approved",
      class: "β3-adrenergic agonist", developer: "Astellas",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["β3 agonist", "brown fat", "overactive bladder", "thermogenesis"],
      summary: "An overactive bladder drug that also activates brown fat in humans. That makes it the best-studied way to switch on human brown fat with a drug, though the weight effect is small.",
      names: "Sold as Myrbetriq (US) and Betmiga (Europe), approved in 2012 for overactive bladder. Its brown fat effects are an off-label research interest.",
      structure: "C<sub>21</sub>H<sub>24</sub>N<sub>4</sub>O<sub>2</sub>S, about 396.5 g/mol. A selective β3-adrenergic agonist. At high doses it also activates β1 receptors, which explains the rise in heart rate.",
      pubchem: "mirabegron",
      profile: { note: flNote, rows: [
        { label: "Brown fat activation", score: 3 }, { label: "Fat loss effect", score: 1 },
        { label: "Cardiovascular strain", score: 2, neg: true }, { label: "Risk load", score: 2, neg: true },
        { label: "Evidence quality", score: 4 } ] },
      risks: [
        { system: "Cardiovascular", level: "moderate", text: "Raises blood pressure and heart rate. These effects are more pronounced at the 200 mg dose used in brown fat studies, which is four times the maximum approved dose", evidence: "human rct", refs: [85, 87] },
        { system: "Urinary retention", level: "low", text: "Can cause urinary retention, especially with bladder outlet obstruction", evidence: "established", refs: [87] },
        { system: "Interactions", level: "moderate", text: "Moderately inhibits CYP2D6, which raises levels of drugs such as metoprolol and some antidepressants", evidence: "established", refs: [87] }
      ],
      activity: [
        { title: "β3-adrenergic receptor", evidence: "established", summary: "Relaxes bladder muscle, which is the basis of its approved use", refs: [87] },
        { title: "Brown adipose tissue", evidence: "human rct", summary: "Activates brown fat and raises resting energy expenditure in adults", refs: [85, 86] },
        { title: "Metabolic health", evidence: "human rct", summary: "Four weeks of treatment increased brown fat, HDL and insulin sensitivity", refs: [86] }
      ],
      trials: [
        { title: "Single high dose in healthy men", evidence: "human rct", meta: ["12 healthy young men", "single 200 mg dose or placebo", "acute", "randomized, crossover"], body: "Mirabegron activated brown fat on PET scans and raised resting energy expenditure by about 200 kcal per day. Heart rate and blood pressure also rose.", note: "200 mg is four times the maximum approved dose.", refs: [85] },
        { title: "Chronic treatment in women", evidence: "human rct", meta: ["14 healthy women of diverse ethnicities", "mirabegron 100 mg daily", "4 weeks", "open-label"], body: "Brown fat volume and activity increased. HDL cholesterol and insulin sensitivity improved, and resting energy expenditure rose. Body weight did not change significantly.", refs: [86] }
      ],
      pk: { evidence: "established", refs: [87], rows: [
        ["Route", "Oral (extended-release tablets)"], ["Bioavailability", "About 29% at 25 mg, rising to 35% at 50 mg"],
        ["Time to peak", "About 3–4 hours"], ["Half-life", "About 50 hours"],
        ["Metabolism", "Multiple routes including CYP3A4, CYP2D6 and glucuronidation"], ["Excretion", "About 55% urine and 34% feces"] ] },
      related: ["clenbuterol", "albuterol", "bam15"]
    },

    /* ------------------------------------------------------------ gc-1 */
    {
      slug: "gc-1", type: "compound", name: "GC-1",
      aliases: ["Sobetirome", "QRX-431"], category: "fatloss", status: "Investigational",
      class: "Thyroid hormone receptor β-selective agonist", developer: "UCSF (Scanlan lab, 1998); QuatRx",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["thyroid", "THR-β", "cholesterol", "thyromimetic"],
      summary: "A thyroid hormone mimic that prefers the β form of the thyroid receptor, found mainly in the liver. The aim was to get thyroid hormone's fat-burning and cholesterol-lowering effects without straining the heart.",
      names: "Designed at UC San Francisco in 1998 as one of the first receptor-selective thyromimetics. QuatRx took it into phase 1 trials for high cholesterol, where it lowered LDL, but stopped development. It has since been studied for X-linked adrenoleukodystrophy and, as a brain-targeted prodrug, for remyelination.",
      structure: "A thyroid hormone analog in which the iodines are replaced with methyl and isopropyl groups and the ether bridge with a methylene. These changes make it selective for THR-β over THR-α. C<sub>20</sub>H<sub>24</sub>O<sub>4</sub>, about 328.4 g/mol.",
      pubchem: "sobetirome",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 2 }, { label: "Lipid lowering", score: 4 },
        { label: "Risk load", score: 3, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Thyroid axis", level: "moderate", text: "Suppresses TSH and the body's own thyroid hormone production", evidence: "human rct" },
        { system: "Class concerns", level: "unknown", text: "A related THR-β agonist, eprotirome, was halted in phase 3 after cartilage damage in dogs. Whether this applies to GC-1 is unknown", evidence: "contested" },
        { system: "Selectivity at high doses", level: "unknown", text: "Selectivity is relative, so heart and bone effects through THR-α become possible at high doses", evidence: "animal" },
        { system: "Product quality", level: "high", text: "Research-chemical material is unregulated", evidence: "established" }
      ],
      activity: [
        { title: "THR-β", evidence: "in vitro", summary: "Binds THR-β with high affinity and much lower THR-α activity than T3", refs: [96] },
        { title: "Cholesterol", evidence: "human rct", summary: "Lowered LDL cholesterol in phase 1 studies by increasing liver LDL receptors and cholesterol clearance" },
        { title: "Body fat", evidence: "animal", summary: "Raised energy expenditure and reduced fat in rodents without the heart effects of T3 at matched doses" }
      ],
      trials: [],
      noTrials: "Phase 1 trials in people with high cholesterol were completed but not published in full. There are no fat loss trials in humans.",
      pk: { evidence: "human rct", rows: [
        ["Route", "Oral"], ["Half-life", "Not published"],
        ["Distribution", "Concentrates in the liver, which suits its THR-β target"],
        ["Metabolism", "Not published"], ["Excretion", "Not published"] ] },
      related: ["resmetirom", "t3", "atx-304"]
    },

    /* ------------------------------------------------------------ resmetirom */
    {
      slug: "resmetirom", type: "compound", name: "Resmetirom",
      aliases: ["Rezdiffra", "MGL-3196"], category: "fatloss", status: "Approved",
      class: "Thyroid hormone receptor β-selective agonist", developer: "Madrigal Pharmaceuticals",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["thyroid", "THR-β", "MASH", "fatty liver"],
      summary: "The first approved THR-β agonist, approved in 2024 for fatty liver disease with liver scarring. It shows that liver-targeted thyroid drugs can work, but it is not a weight-loss drug.",
      names: "Sold as Rezdiffra after FDA accelerated approval in March 2024 for noncirrhotic MASH (formerly NASH) with moderate to advanced liver fibrosis. It belongs to the same class as GC-1.",
      structure: "A pyridazinone THR-β agonist with high selectivity for THR-β over THR-α. Uptake into the liver is high, which further limits effects elsewhere.",
      pubchem: "resmetirom",
      profile: { note: flNote, rows: [
        { label: "Liver fat reduction", score: 4 }, { label: "Weight loss", score: 0 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 5 } ] },
      risks: [
        { system: "Gastrointestinal", level: "moderate", text: "Diarrhea and nausea are the most common adverse effects, mostly early in treatment", evidence: "human rct", refs: [89] },
        { system: "Liver", level: "low", text: "Monitoring for drug-induced liver injury is advised", evidence: "established" },
        { system: "Interactions", level: "moderate", text: "Interacts with statins and CYP2C8 inhibitors such as gemfibrozil", evidence: "established" }
      ],
      activity: [
        { title: "THR-β (liver)", evidence: "human rct", summary: "Increases liver fat breakdown and LDL clearance", refs: [89] },
        { title: "Body weight", evidence: "human rct", summary: "No meaningful effect on body weight", refs: [89] }
      ],
      trials: [
        { title: "MAESTRO-NASH", evidence: "human rct", meta: ["966 adults with biopsy-confirmed NASH and fibrosis stage F1B–F3", "resmetirom 80 mg or 100 mg daily, or placebo", "52 weeks (biopsy endpoints)", "randomized, double-blind, placebo-controlled, phase 3"], body: "NASH resolved without worsening fibrosis in about 26% and 30% of the two resmetirom groups against about 10% on placebo. Fibrosis improved by at least one stage in about 24% and 26% against 14%. LDL cholesterol also fell.", refs: [89] }
      ],
      pk: { evidence: "established", rows: [
        ["Route", "Oral, once daily"], ["Time to peak", "About 4 hours"],
        ["Half-life", "About 4.5 hours"], ["Metabolism", "Mainly CYP2C8"],
        ["Excretion", "Mainly as metabolites"] ] },
      related: ["gc-1", "t3"]
    },

    /* ------------------------------------------------------------ t3 */
    {
      slug: "t3", type: "compound", name: "T3",
      aliases: ["Liothyronine", "Cytomel", "Triiodothyronine"], category: "fatloss", status: "Approved",
      class: "Thyroid hormone (active form)", developer: "Endogenous hormone; synthetic since the 1950s",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["thyroid", "metabolic rate", "thermogenic"],
      summary: "The active thyroid hormone, approved for hypothyroidism. It is used off-label for fat loss because it raises metabolic rate, but it also breaks down muscle and strains the heart. Its label specifically warns against use for weight loss.",
      names: "Sold as Cytomel and generic liothyronine for hypothyroidism and for thyroid cancer management. Like all thyroid hormones, the US label carries a boxed warning that it should not be used to treat obesity or for weight loss.",
      structure: "3,5,3'-triiodo-L-thyronine. C<sub>15</sub>H<sub>12</sub>I<sub>3</sub>NO<sub>4</sub>, about 651.0 g/mol. It is about four times more potent than T4 (levothyroxine), which the body converts into T3.",
      pubchem: "liothyronine",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 3 }, { label: "Muscle loss", score: 4, neg: true },
        { label: "Cardiovascular strain", score: 4, neg: true }, { label: "Risk load", score: 4, neg: true },
        { label: "Evidence quality", score: 4 } ] },
      risks: [
        { system: "Label warning", level: "high", text: "Boxed warning: not for obesity or weight loss. Doses large enough to cause weight loss in people with normal thyroid function can cause serious or life-threatening toxicity", evidence: "established", refs: [95] },
        { system: "Heart", level: "high", text: "Rapid heart rate, palpitations and atrial fibrillation", evidence: "established", refs: [95] },
        { system: "Muscle and bone", level: "high", text: "Excess thyroid hormone breaks down muscle protein and accelerates bone loss", evidence: "established" },
        { system: "Thyroid axis", level: "moderate", text: "Suppresses the body's own thyroid production. Recovery after stopping can take weeks", evidence: "established" }
      ],
      activity: [
        { title: "Thyroid hormone receptors", evidence: "established", summary: "Activates THR-α and THR-β, raising metabolic rate in nearly every tissue" },
        { title: "Energy expenditure", evidence: "human rct", summary: "Raises resting energy expenditure. Much of the extra weight lost in people with normal thyroid function comes from lean mass" }
      ],
      trials: [],
      noTrials: "Thyroid hormone was used for weight loss in older trials, which consistently showed increased loss of lean mass and cardiac effects. Modern guidelines reject it for obesity.",
      pk: { evidence: "established", refs: [95], rows: [
        ["Route", "Oral"], ["Bioavailability", "About 95%"], ["Time to peak", "About 2–3 hours"],
        ["Half-life", "About 1 day (T4 is about 7 days)"],
        ["Metabolism", "Deiodination in the liver, kidney and other tissues"], ["Excretion", "Urine and bile"] ],
        note: "Its short half-life makes blood levels swing more than with T4, which is why it is often split into two daily doses." },
      related: ["gc-1", "resmetirom", "dnp"]
    },

    /* ------------------------------------------------------------ dnp */
    {
      slug: "dnp", type: "compound", name: "DNP",
      aliases: ["2,4-Dinitrophenol"], category: "fatloss", status: "Banned",
      class: "Mitochondrial uncoupler", developer: "Stanford (Tainter and Cutting, 1933)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["uncoupler", "hyperthermia", "toxic", "banned"],
      summary: "An industrial chemical that causes rapid fat loss by forcing cells to burn fuel as heat. It was banned for human use in 1938, and it still causes deaths: there is no antidote, and a fatal dose is close to one people take for fat loss.",
      names: "It was sold as a weight-loss drug in the US from 1933 until 1938, when it was declared \"extremely dangerous and not fit for human consumption\" after cases of cataracts and deaths. Today it is sold online, often labeled as a pesticide or dye, and deaths are still reported regularly, especially in young people.",
      structure: "2,4-dinitrophenol. C<sub>6</sub>H<sub>4</sub>N<sub>2</sub>O<sub>5</sub>, about 184.1 g/mol. A weak acid that carries protons across the inner mitochondrial membrane.",
      pubchem: "2,4-dinitrophenol",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 5 }, { label: "Lethality", score: 5, neg: true },
        { label: "Risk load", score: 5, neg: true }, { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Hyperthermia", level: "high", text: "Uncontrolled rise in body temperature that can progress to multi-organ failure and death. There is no antidote", evidence: "human obs", detail: "Toxicity can build over days because the drug lingers, and overdose often starts with sweating, rapid breathing and a racing heart. Treatment is only cooling and support.", refs: [88] },
        { system: "Narrow margin", level: "high", text: "Fatal doses overlap with doses taken for weight loss", evidence: "human obs", refs: [88] },
        { system: "Cataracts", level: "high", text: "Rapid-onset cataracts were a hallmark of the 1930s epidemic", evidence: "human obs", refs: [88] },
        { system: "Skin and nerves", level: "moderate", text: "Rashes and peripheral neuropathy", evidence: "human obs", refs: [88] }
      ],
      activity: [
        { title: "Mitochondrial uncoupling", evidence: "established", summary: "Lets protons leak back across the mitochondrial membrane, so energy from food is released as heat instead of ATP" },
        { title: "Weight loss", evidence: "human obs", summary: "Produced rapid weight loss in 1930s clinical use, alongside serious toxicity", refs: [88] }
      ],
      trials: [],
      noTrials: "There are no modern trials. Human evidence comes from 1930s clinical use and from poisoning case series.",
      noTrialsRefs: [88],
      pk: { evidence: "human obs", refs: [88], rows: [
        ["Route", "Oral"], ["Bioavailability", "Well absorbed"],
        ["Half-life", "Long and variable; reports range from about 1.5 days to over a week, and longer in overdose"],
        ["Metabolism", "Reduction to aminonitrophenols"], ["Excretion", "Urine"] ],
        note: "The slow, variable clearance is a major reason daily dosing leads to accumulation and delayed toxicity." },
      related: ["bam15", "t3"]
    },

    /* ------------------------------------------------------------ yohimbine */
    {
      slug: "yohimbine", type: "compound", name: "Yohimbine",
      aliases: ["Yohimbine HCl", "Yohimbe"], category: "fatloss", status: "Supplement",
      class: "α2-adrenergic antagonist", developer: "Alkaloid from Pausinystalia yohimbe bark",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["α2 antagonist", "stubborn fat", "stimulant", "supplement"],
      summary: "A bark alkaloid that blocks α2-adrenergic receptors, which normally act as a brake on fat breakdown. Fat loss evidence is limited to a few small studies, and side effects such as anxiety and blood pressure spikes are common.",
      names: "Yohimbine hydrochloride was once prescribed for erectile dysfunction in the US but was never formally approved. Yohimbe bark extract is sold as a dietary supplement, and studies have found many products do not contain the labeled amount.",
      structure: "An indole alkaloid. C<sub>21</sub>H<sub>26</sub>N<sub>2</sub>O<sub>3</sub>, about 354.4 g/mol.",
      pubchem: "yohimbine",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 1 }, { label: "Stimulant effect", score: 3 },
        { label: "Cardiovascular strain", score: 3, neg: true }, { label: "Risk load", score: 3, neg: true },
        { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Anxiety", level: "high", text: "Can trigger anxiety and panic attacks, and is used experimentally to provoke them", evidence: "established" },
        { system: "Cardiovascular", level: "moderate", text: "Raises blood pressure and heart rate", evidence: "established" },
        { system: "Interactions", level: "moderate", text: "Dangerous with MAO inhibitors and stimulants", evidence: "established" },
        supplementQuality
      ],
      activity: [
        { title: "α2-adrenergic receptor", evidence: "established", summary: "Blocks α2 receptors, increasing norepinephrine release and removing a brake on fat breakdown" },
        { title: "Fat breakdown", evidence: "human rct", summary: "Increases fat breakdown in the fasted state. Insulin from a meal blunts this, so the effect is mainly seen during fasting" }
      ],
      trials: [
        { title: "Body composition in soccer players", evidence: "human rct", meta: ["20 male professional soccer players", "yohimbine 20 mg daily or placebo", "21 days", "randomized, double-blind, placebo-controlled"], body: "Body fat percentage fell modestly with yohimbine, with no change in performance measures.", note: "This was a small, short study in lean athletes and has not been replicated at scale.", refs: [94] }
      ],
      pk: { evidence: "human obs", rows: [
        ["Route", "Oral"], ["Bioavailability", "Highly variable between people, from under 10% to over 80%"],
        ["Time to peak", "Under 1 hour"], ["Half-life", "Under 1 hour"],
        ["Metabolism", "Liver, by CYP2D6 and CYP3A4, to an active hydroxy metabolite"], ["Excretion", "Urine"] ],
        note: "The huge variation in absorption means the same dose can do very little in one person and cause marked side effects in another." },
      related: ["ephedrine", "1-3-dmaa"]
    },

    /* ------------------------------------------------------------ ephedrine */
    {
      slug: "ephedrine", type: "compound", name: "Ephedrine",
      aliases: ["ECA stack", "Ephedra", "Ma huang"], category: "fatloss", status: "Approved",
      class: "Mixed sympathomimetic (α and β agonist, norepinephrine releaser)", developer: "Alkaloid from Ephedra sinica; isolated in 1885",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["stimulant", "thermogenic", "ECA", "WADA prohibited"],
      summary: "A stimulant that, combined with caffeine, produced modest extra weight loss in clinical trials. Ephedra supplements were banned in the US in 2004 after reports of strokes and heart attacks, though ephedrine itself remains an approved drug.",
      names: "Ephedrine is approved as an injection to treat low blood pressure during anesthesia and in some over-the-counter asthma tablets, which are subject to purchase restrictions. Ephedra (ma huang) herbal supplements were banned by the FDA in 2004. The \"ECA stack\" is ephedrine, caffeine and aspirin.",
      structure: "C<sub>10</sub>H<sub>15</sub>NO, about 165.2 g/mol. A phenethylamine closely related to pseudoephedrine and amphetamine.",
      pubchem: "ephedrine",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 2 }, { label: "Stimulant effect", score: 3 },
        { label: "Cardiovascular strain", score: 3, neg: true }, { label: "Risk load", score: 3, neg: true },
        { label: "Evidence quality", score: 4 } ] },
      risks: [
        cardio("A meta-analysis found ephedra and ephedrine raised the odds of psychiatric, autonomic and gastrointestinal symptoms and palpitations two- to threefold. Case reports included strokes, heart attacks and deaths, which led to the 2004 supplement ban."),
        { system: "Psychiatric", level: "moderate", text: "Anxiety, insomnia, irritability and, rarely, psychosis", evidence: "human rct", refs: [90] },
        { system: "Sport", level: "moderate", text: "Prohibited in competition above a urinary threshold", evidence: "established" }
      ],
      activity: [
        { title: "Norepinephrine release", evidence: "established", summary: "Releases norepinephrine and directly activates α and β receptors" },
        { title: "Thermogenesis", evidence: "human rct", summary: "Raises energy expenditure. Caffeine amplifies the effect", refs: [91] },
        { title: "Appetite", evidence: "human rct", summary: "Suppresses appetite, which contributes to the weight loss seen in trials" }
      ],
      trials: [
        { title: "Ephedrine plus caffeine on a restricted diet", evidence: "human rct", meta: ["180 adults with obesity on an energy-restricted diet", "ephedrine 20 mg plus caffeine 200 mg, ephedrine alone, caffeine alone, or placebo, each three times daily", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "The combination produced more weight loss than placebo or either drug alone. Side effects such as tremor, insomnia and dizziness were common early and faded over the first weeks.", refs: [91] },
        { title: "Meta-analysis of ephedra and ephedrine", evidence: "human rct", meta: ["controlled trials of ephedra or ephedrine for weight loss and athletic performance", "systematic review and meta-analysis"], body: "Ephedrine-containing products produced about 0.9 kg more weight loss per month than placebo over short trials. Adverse psychiatric, autonomic and gastrointestinal effects and palpitations were two to three times more common.", refs: [90] }
      ],
      pk: { evidence: "established", rows: [
        ["Route", "Oral or injection"], ["Bioavailability", "About 85–90% oral"], ["Time to peak", "About 1–2 hours"],
        ["Half-life", "About 6 hours"], ["Metabolism", "Limited"],
        ["Excretion", "Mainly unchanged in urine; faster when urine is acidic"] ] },
      related: ["yohimbine", "1-3-dmaa", "clenbuterol"]
    },

    /* ------------------------------------------------------------ aod-9604 */
    {
      slug: "aod-9604", type: "compound", name: "AOD-9604",
      aliases: ["Tyr-hGH(177-191)", "Advanced Obesity Drug"], category: "fatloss", status: "Research only",
      class: "Growth hormone fragment analog", developer: "Metabolic Pharmaceuticals (Australia)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["GH fragment", "lipolysis", "peptide"],
      summary: "A fragment of growth hormone designed to keep its fat-burning effect without its other effects. It failed to beat placebo in a large phase 2b weight-loss trial and development stopped.",
      names: "Developed by Metabolic Pharmaceuticals as an obesity drug. After the phase 2b trial failed in 2007, the company stopped developing it for obesity. It is still sold by peptide vendors and compounding pharmacies.",
      structure: "The C-terminal 177–191 region of human growth hormone, with an added N-terminal tyrosine. It does not activate the GH receptor and does not raise IGF-1.",
      pubchem: "AOD-9604",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 1 }, { label: "Risk load", score: 1, neg: true },
        { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Well tolerated in clinical trials, with no IGF-1 increase or effect on glucose", evidence: "human rct" },
        { system: "Product quality", level: "moderate", text: "Vendor and compounded products are unregulated", evidence: "established" }
      ],
      activity: [
        { title: "Lipolysis", evidence: "animal", summary: "Stimulated fat breakdown and reduced fat in obese rodents", refs: [97] },
        { title: "GH receptor", evidence: "in vitro", summary: "Does not activate the GH receptor and does not raise IGF-1", refs: [97] }
      ],
      trials: [
        { title: "Phase 2b weight loss trial", evidence: "human rct", meta: ["about 500 adults with obesity", "AOD-9604 at several oral doses or placebo", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "AOD-9604 did not produce significantly more weight loss than placebo, and development for obesity ended.", note: "This was the decisive trial. Earlier signals from smaller studies did not hold up." }
      ],
      pk: { evidence: "human rct", rows: [
        ["Route", "Oral in obesity trials; injection in informal use"], ["Bioavailability", "Not published"],
        ["Half-life", "Short, as for other small peptides"], ["Metabolism", "Proteolysis"], ["Excretion", "Not published"] ] },
      related: ["growth-hormone", "5-amino-1mq"]
    },

    /* ------------------------------------------------------------ 5-amino-1mq */
    {
      slug: "5-amino-1mq", type: "compound", name: "5-Amino-1MQ",
      aliases: ["5-Amino-1-methylquinolinium"], category: "fatloss", status: "Research only",
      class: "NNMT inhibitor", developer: "University of Texas Medical Branch (Watowich lab)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["NNMT", "NAD+", "fat cells", "preclinical"],
      summary: "A small molecule that blocks the enzyme NNMT, which is overactive in fat tissue in obesity. It reduced fat in mice on a high-fat diet. It has never been tested in humans.",
      names: "It came from academic research on NNMT inhibitors at the University of Texas Medical Branch. It has not entered clinical development, and the capsules sold online are unregulated.",
      structure: "5-amino-1-methylquinolinium, usually sold as an iodide salt. C<sub>10</sub>H<sub>11</sub>N<sub>2</sub><sup>+</sup>, about 159.2 g/mol for the cation. It is a small, positively charged molecule designed to enter cells.",
      pubchem: "5-amino-1-methylquinolinium",
      profile: { note: flNote, rows: [
        { label: "Fat loss signal", score: 2 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 3, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data of any kind", evidence: "unknown" },
        { system: "Product quality", level: "high", text: "Only available as unregulated research chemical", evidence: "established" }
      ],
      activity: [
        { title: "NNMT inhibition", evidence: "in vitro", summary: "Inhibits nicotinamide N-methyltransferase, which may raise NAD+ and SAM levels in fat cells", refs: [93] },
        { title: "Diet-induced obesity", evidence: "animal", summary: "Reduced body weight, fat cell size and cholesterol in obese mice without changing food intake", refs: [93] }
      ],
      trials: [],
      noTrials: "It has never been given to humans in a published study.",
      pk: { evidence: "animal", refs: [93], rows: [
        ["Route", "Injection in mouse studies; oral capsules in informal use"], ["Bioavailability", "Not established in humans"],
        ["Half-life", "Not established in humans"], ["Metabolism", "Not established in humans"], ["Excretion", "Not established in humans"] ] },
      related: ["aod-9604", "mots-c", "bam15"]
    },

    /* ------------------------------------------------------------ tesofensine */
    {
      slug: "tesofensine", type: "compound", name: "Tesofensine",
      aliases: ["NS2330"], category: "fatloss", status: "Investigational",
      class: "Triple monoamine reuptake inhibitor", developer: "NeuroSearch; later Saniona",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["appetite", "dopamine", "serotonin", "norepinephrine"],
      summary: "A drug that blocks reuptake of serotonin, norepinephrine and dopamine. Originally developed for Parkinson's and Alzheimer's, it produced strong weight loss in a phase 2 obesity trial, along with raised heart rate.",
      names: "First developed by NeuroSearch for Parkinson's and Alzheimer's disease, where researchers noticed weight loss. Saniona later took over development for obesity. It is not approved in the US or Europe.",
      structure: "A tropane derivative that blocks the serotonin, norepinephrine and dopamine transporters. Molecular weight about 328.3 g/mol (free base).",
      pubchem: "tesofensine",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 4 }, { label: "Cardiovascular strain", score: 3, neg: true },
        { label: "Risk load", score: 3, neg: true }, { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Cardiovascular", level: "moderate", text: "Dose-dependent increases in heart rate, and blood pressure at higher doses", evidence: "human rct", refs: [92] },
        { system: "CNS effects", level: "moderate", text: "Dry mouth, insomnia, nausea and mood changes are more common at higher doses", evidence: "human rct", refs: [92] },
        { system: "Product quality", level: "high", text: "Research-chemical material is unregulated", evidence: "established" }
      ],
      activity: [
        { title: "Monoamine reuptake", evidence: "in vitro", summary: "Blocks the serotonin, norepinephrine and dopamine transporters" },
        { title: "Appetite", evidence: "human rct", summary: "Weight loss is mostly through reduced appetite and food intake", refs: [92] }
      ],
      trials: [
        { title: "Phase 2 in obesity (TIPO-1)", evidence: "human rct", meta: ["203 adults with obesity on a diet", "tesofensine 0.25, 0.5 or 1.0 mg daily, or placebo", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "Weight loss was dose-dependent. At 0.5 mg and 1.0 mg it exceeded placebo by roughly 9–10% of body weight. Heart rate rose, and side effects such as dry mouth and insomnia increased with dose.", note: "These are large effects for a short trial, but they come from a single phase 2 study. The 1.0 mg dose was dropped because of side effects.", refs: [92] }
      ],
      pk: { evidence: "human rct", rows: [
        ["Route", "Oral"], ["Half-life", "About 8–9 days"], ["Steady state", "Reached only after several weeks"],
        ["Metabolism", "Liver, by CYP3A4"], ["Excretion", "Mainly as metabolites"] ],
        note: "Its very long half-life means side effects can take weeks to appear and to clear." },
      related: ["ephedrine", "semaglutide"]
    }
  );

  Object.assign(A.references, {
    83: "Schilling BK et al. Physiological and pharmacokinetic effects of oral 1,3-dimethylamylamine administration in men. BMC Pharmacol Toxicol 2013;14:52.",
    84: "Cohen PA et al. Four experimental stimulants found in sports and weight loss supplements: 2-amino-6-methylheptane (octodrine), 1,4-dimethylamylamine (1,4-DMAA), 1,3-dimethylamylamine (1,3-DMAA) and 1,3-dimethylbutylamine (1,3-DMBA). Clin Toxicol 2018;56:421–426.",
    85: "Cypess AM et al. Activation of human brown adipose tissue by a β3-adrenergic receptor agonist. Cell Metab 2015;21:33–38.",
    86: "O'Mara AE et al. Chronic mirabegron treatment increases human brown fat, HDL cholesterol, and insulin sensitivity. J Clin Invest 2020;130:2209–2219.",
    87: "Myrbetriq (mirabegron) prescribing information. US FDA.",
    88: "Grundlingh J et al. 2,4-dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death. J Med Toxicol 2011;7:205–212.",
    89: "Harrison SA et al. A Phase 3, Randomized, Controlled Trial of Resmetirom in NASH with Liver Fibrosis. N Engl J Med 2024;390:497–509.",
    90: "Shekelle PG et al. Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: a meta-analysis. JAMA 2003;289:1537–1545.",
    91: "Astrup A et al. The effect and safety of an ephedrine/caffeine compound compared to ephedrine, caffeine and placebo in obese subjects on an energy restricted diet. A double blind trial. Int J Obes Relat Metab Disord 1992;16:269–277.",
    92: "Astrup A et al. Effect of tesofensine on bodyweight loss, body composition, and quality of life in obese patients: a randomised, double-blind, placebo-controlled trial. Lancet 2008;372:1906–1913.",
    93: "Neelakantan H et al. Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice. Biochem Pharmacol 2018;147:141–152.",
    94: "Ostojic SM. Yohimbine: the effects on body composition and exercise performance in soccer players. Res Sports Med 2006;14:289–299.",
    95: "Cytomel (liothyronine sodium) prescribing information. US FDA.",
    96: "Chiellini G et al. A high-affinity subtype-selective agonist ligand for the thyroid hormone receptor. Chem Biol 1998;5:299–306.",
    97: "Ng FM et al. Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone. Horm Res 2000;53:274–278.",
    98: "Spiller HA et al. A descriptive study of adverse events from clenbuterol misuse and abuse for weight loss and bodybuilding. Subst Abus 2013;34:306–312.",
    99: "World Anti-Doping Agency. Prohibited List (current edition)."
  });
})(window.ATLAS);
