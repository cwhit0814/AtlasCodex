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
      added: "2026-10-06", updated: "2026-10-17",
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
      trials: [
        { title: "SAVITRI: osavampator (TAK-653 / NBI-1065845) in major depression", evidence: "human rct", meta: ["183 adults with major depressive disorder and an inadequate response to current antidepressants", "low-dose or high-dose osavampator once daily by mouth, or placebo (dose amounts not given in the registry or the topline release)", "56 days, primary endpoint at day 28", "randomized, double-blind, placebo-controlled phase 2 (NCT05203341)"], body: "One dose beat placebo on MADRS by 4.3 points at day 28 (p = 0.016) and 7.5 points at day 56 (p = 0.002). The other dose showed a non-significant trend (−3.0 and −3.6). Headache was the most common adverse event, with no serious adverse events reported.", note: "Sponsor topline data, not yet a peer-reviewed paper. The lower dose did better than the higher one. Phase 3 adjunctive trials are now recruiting (for example NCT06911112 and NCT06963021).", refs: [518, 519] },
        { title: "CNS effects of TAK-653 in healthy volunteers", evidence: "human rct", meta: ["24 healthy volunteers", "single oral doses of TAK-653 0.5 mg and 6 mg, and placebo", "single-dose sessions, tested 3.5–4 hours after dosing", "randomized, double-blind, placebo-controlled, three-way crossover"], body: "Neither dose changed body sway or subjective drug effects. Both doses raised saccadic peak velocity, and 6 mg improved adaptive tracking. The authors describe a psychostimulant-like profile.", note: "A pharmacodynamic study, not an efficacy trial. Funded by Takeda.", refs: [517] }
      ],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { system: "Blood pressure", level: "high", text: "Linked in case reports to sharp blood pressure rises, stroke and heart attack", evidence: "contested", detail: "A single 25 mg dose in a small pharmacokinetic study did not meaningfully change blood pressure. The harm reports involved higher exposures, often with other stimulants, so the controlled data and the case reports do not describe the same use.", refs: [83] },
        { system: "Legal status", level: "high", text: "Unlawful in US dietary supplements and prohibited by WADA", evidence: "established" },
        { system: "Stacked stimulants", level: "high", text: "Products containing it were repeatedly found to contain other undeclared stimulants as well", evidence: "human obs", detail: "A market analysis found 1,3-DMAA at 24 to 35 mg per serving in products that also contained octodrine, 1,3-DMBA or 1,4-DMAA, so exposure in practice was to stimulant mixtures of unknown combined effect.", refs: [84] },
        supplementQuality
      ],
      activity: [
        { title: "Norepinephrine release", evidence: "in vitro", summary: "Acts on the norepinephrine transporter, increasing norepinephrine signaling. This drives its stimulant and blood-pressure effects" },
        { title: "Vasoconstriction", evidence: "established", summary: "Constricts blood vessels, which was the basis of its original use as a nasal decongestant" },
        { title: "Fat loss", evidence: "unknown", summary: "No controlled evidence that it causes meaningful fat loss" }
      ],
      trials: [
        { title: "Oral pharmacokinetics in men", evidence: "human rct", meta: ["8 healthy men (7 analyzed)", "a single 25 mg oral dose of DMAA", "single dose, sampled over hours", "pharmacokinetic study"], body: "Terminal half-life was 8.45 hours, peak concentration around 70 ng/mL at 3 to 5 hours, and a single 25 mg dose did not meaningfully change resting heart rate, blood pressure or body temperature. Peak levels were 15 to 30 times lower than those reported in case studies linking DMAA to adverse events.", note: "The useful finding is the gap between this dose and the blood levels seen in harm reports, not the reassuring vital signs: one 25 mg dose in eight men says nothing about repeated use, higher amounts, or use before exercise.", refs: [83] },
        { title: "Stimulant content of supplements sold with it", evidence: "human obs", meta: ["sports and weight loss supplements bought on the US market", "chemical analysis of product content", "not applicable", "analytical survey"], body: "Products contained 24 to 35 mg of 1,3-DMAA per serving, alongside other unapproved stimulants including octodrine, 1,3-DMBA and 1,4-DMAA.", note: "This is what people were actually exposed to, and it shows the same products often carried several undeclared stimulants at once, which makes any single-ingredient safety claim meaningless.", refs: [84] }
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { system: "Exposure amount", level: "high", text: "Supplements were found to contain 21 to 94 mg per serving of a compound never approved for human use", evidence: "human obs", detail: "The range across products was more than fourfold, so a label gives no indication of the dose taken.", refs: [84] },
        supplementQuality
      ],
      activity: [
        { title: "Sympathomimetic activity", evidence: "unknown", summary: "Presumed to act like 1,3-DMAA on norepinephrine signaling. This has not been measured" }
      ],
      trials: [
        { title: "Identification in supplements, with no human data", evidence: "human obs", meta: ["sports and weight loss supplements bought on the US market", "chemical analysis of product content", "not applicable", "analytical survey"], body: "1,4-DMAA was found at 21 to 94 mg per serving. The authors state it has never been approved for human consumption and that its safety in humans is unknown.", note: "This is the only published record of human exposure to the compound. It establishes the amounts people were taking, not any effect, and no study has given it to a person.", refs: [84] }
      ],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { system: "Tolerance", level: "moderate", text: "β2 receptors downregulate with continuous use, so effects fade", evidence: "animal" },
        { system: "Human evidence", level: "moderate", text: "The controlled human trials studied glucose uptake at 40 µg daily, not fat loss, and ran 2 to 4 weeks", evidence: "human rct", detail: "Two randomized crossover trials used 40 µg daily, well below the amounts described in case reports of harm, and neither measured body fat as a primary outcome.", refs: [451, 452] }
      ],
      activity: [
        { title: "β2-adrenergic receptor", evidence: "established", summary: "Long-acting agonist that relaxes airway smooth muscle" },
        { title: "Repartitioning", evidence: "animal", summary: "Increases muscle protein accretion and reduces fat in cattle, pigs and rodents. This is the basis for its illicit use" },
        { title: "Thermogenesis", evidence: "animal", summary: "Raises metabolic rate and lipolysis through β-adrenergic signaling" }
      ],
      trials: [
        { title: "Four weeks in people with overweight or obesity", evidence: "human rct", meta: ["adults with overweight or obesity", "clenbuterol 40 µg daily or placebo", "4 weeks per period", "randomized, double-blind, placebo-controlled crossover"], body: "The primary endpoint was insulin-stimulated glucose uptake in the quadriceps measured by FDG PET-MRI, with brown fat uptake secondary. Muscle-specific glucose uptake increased.", note: "The longest controlled human exposure published. It was designed around glucose uptake, not body composition, so it still does not tell you what clenbuterol does to body fat in people.", refs: [452] },
        { title: "Two weeks in healthy young men", evidence: "human rct", meta: ["11 healthy men aged 18 to 30, BMI 20 to 25", "clenbuterol 40 µg daily or placebo", "2 weeks per period", "randomized, double-blind, placebo-controlled crossover"], body: "Insulin-stimulated glucose disposal improved by 13%, while muscle GLUT4 translocation in fasted biopsies was unchanged. No serious adverse events were reported.", refs: [451] },
        { title: "Adverse events among athletes using it", evidence: "human obs", meta: ["24 athletes described in 23 published case reports and case series, 1990 to 2021", "clenbuterol, mostly taken orally and outside medical supervision", "not applicable", "systematic review of case reports"], body: "The review catalogues the reported harms in athletes using clenbuterol, most of it after oral ingestion.", note: "A systematic review of case reports is still case reports: it shows what has been reported, not how often it happens.", refs: [450] },
        { title: "Inhaled β2 agonist and muscle in young men", evidence: "human rct", meta: ["young men", "inhaled β2 agonist or placebo during training", "weeks", "randomized controlled trial"], body: "A muscle hypertrophic effect of an inhaled β2 agonist was associated with greater insulin-stimulated whole-body glucose disposal.", note: "Different drug and route, included because it is the closest controlled evidence for the repartitioning claim in people.", refs: [454] }
      ],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { system: "Sport", level: "moderate", text: "Oral use is prohibited in sport. Inhaled use is allowed only up to a daily limit", evidence: "established", refs: [99] },
        { system: "Aerobic capacity", level: "moderate", text: "High-dose oral use blocked the fitness gain from training and reduced muscle oxidative capacity", evidence: "human rct", detail: "In an 11-week resistance training trial, time to exhaustion rose 7% on placebo and did not change on salbutamol 16 mg daily, while muscle capillary density and citrate synthase and 3-hydroxyacyl-CoA dehydrogenase activity fell.", refs: [453] },
        { system: "Heart structure", level: "unknown", text: "Echocardiography showed thicker heart walls after 11 weeks of high-dose oral use, while cardiac MRI in the same trial showed no difference", evidence: "human rct", detail: "The two imaging methods disagreed in the same participants, so the finding is a signal rather than an established effect, and the trial lasted 11 weeks.", refs: [453] }
      ],
      activity: [
        { title: "β2-adrenergic receptor", evidence: "established", summary: "Short-acting agonist that relaxes airway smooth muscle within minutes" },
        { title: "Skeletal muscle", evidence: "human rct", summary: "High oral doses have increased muscle strength in small clinical studies, for example in neuromuscular disease" },
        { title: "Energy expenditure", evidence: "human rct", summary: "Acutely raises resting energy expenditure and fat oxidation, but the effect on body fat over time is small" }
      ],
      trials: [
        { title: "High-dose oral salbutamol during resistance training", evidence: "human rct", meta: ["30 healthy trained men, mean age 23", "oral salbutamol 16 mg daily or placebo during an 11-week supervised full-body resistance program, 3 sessions weekly", "11 weeks", "randomized, double-blind, placebo-controlled"], body: "Lean mass increased 1.8 kg more than placebo. Cardiac MRI showed no difference in structure or function, but echocardiography showed increased posterior, septal and relative wall thickness. Time to exhaustion did not change on salbutamol while it rose 7% on placebo, and muscle capillary density and oxidative enzyme activity fell on salbutamol.", note: "The clearest trade-off on record for this class in healthy trained people: more lean mass, worse muscle oxidative capacity, no gain in cardiopulmonary fitness, and echocardiographic wall thickening. The dose is several times the approved oral amount.", refs: [453] }
      ],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { system: "Published human record", level: "unknown", text: "No human trial of GC-1 has been published, so its effects in people are unknown", evidence: "unknown", detail: "A review of the compound discusses a clinical program and its open questions rather than reporting trial results.", refs: [475] },
        { system: "Product quality", level: "high", text: "Research-chemical material is unregulated", evidence: "established" }
      ],
      activity: [
        { title: "THR-β", evidence: "in vitro", summary: "Binds THR-β with high affinity and much lower THR-α activity than T3", refs: [96] },
        { title: "Cholesterol", evidence: "human rct", summary: "Lowered LDL cholesterol in phase 1 studies by increasing liver LDL receptors and cholesterol clearance" },
        { title: "Body fat", evidence: "animal", summary: "Raised energy expenditure and reduced fat in rodents without the heart effects of T3 at matched doses" }
      ],
      trials: [],
      noTrials: "Phase 1 trials in people with high cholesterol were completed but not published in full. There are no fat loss trials in humans.",
      noTrialsRefs: [475],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { title: "MAESTRO-NASH", evidence: "human rct", meta: ["966 adults with biopsy-confirmed NASH and fibrosis stage F1B–F3", "resmetirom 80 mg or 100 mg daily, or placebo", "52 weeks (biopsy endpoints)", "randomized, double-blind, placebo-controlled, phase 3"], body: "NASH resolved without worsening fibrosis in about 26% and 30% of the two resmetirom groups against about 10% on placebo. Fibrosis improved by at least one stage in about 24% and 26% against 14%. LDL cholesterol also fell.", refs: [89] },
        { title: "MAESTRO-NAFLD-1: Safety trial in fatty liver disease", evidence: "human rct", meta: ["adults with non-alcoholic fatty liver disease, no biopsy required", "resmetirom 80 mg or 100 mg daily, or placebo, plus an open-label 100 mg arm", "52 weeks", "randomized, double-blind, placebo-controlled"], body: "The trial was designed around safety and tolerability over a year, with imaging and lipid endpoints rather than biopsy.", note: "The larger of the two trials by exposure, and the one that supports what is known about tolerability over a year.", refs: [458] }
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
      added: "2026-10-06", updated: "2026-10-17",
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
      trials: [
        { title: "Protein loss during severe caloric restriction", evidence: "human obs", meta: ["6 adults with severe obesity, confined to a metabolic ward", "liquid diets of 600 to 800 kcal/day, with protein varied between groups; no drug given", "64 days", "controlled metabolic ward study"], body: "Weight lost per 1,000 kcal deficit was 36% water, 58.9% fat and 5.1% protein, with wide variation in nitrogen loss between people. The strongest correlate of nitrogen loss was the fall in serum triiodothyronine: the more T3 fell, the less protein was lost.", note: "No modern randomized trial of T3 for fat loss exists. This study did not give T3, so it is indirect, but it is the clearest human evidence that the fall in T3 during restriction protects muscle, and that replacing it removes that protection.", refs: [459] }
      ],
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
      added: "2026-10-06", updated: "2026-10-17",
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
      trials: [
        { title: "Published fatalities to 2011", evidence: "human obs", meta: ["62 deaths attributed to DNP in the medical literature", "DNP, mostly bought online as a slimming aid", "from the early twentieth century to 2011", "systematic review of published fatalities"], body: "The review describes the toxic syndrome as hyperthermia, fast heart rate, sweating and rapid breathing progressing to death, and counts 62 published deaths attributed to DNP exposure.", note: "There are no modern trials. A count of published deaths is a floor, not a rate: it captures only cases that reached the literature.", refs: [88] },
        { title: "The 1930s clinical episode and its regulation", evidence: "human obs", meta: ["US patients prescribed DNP for obesity in the 1930s", "DNP as a prescribed weight loss treatment", "1933 to 1938", "historical review of clinical use and regulatory response"], body: "DNP was widely prescribed for obesity in the mid-1930s before cataracts and deaths led to its withdrawal, an episode that shaped early US drug regulation.", note: "Doctors did use it, at doses they believed were safe, and the harms still happened.", refs: [461] }
      ],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { title: "Body composition in soccer players", evidence: "human rct", meta: ["20 top-level male soccer players", "yohimbine 20 mg daily in two divided doses, or cellulose placebo", "21 days", "randomized, placebo-controlled"], body: "Body fat fell from 9.3% to 7.1% in the yohimbine group and was lower than placebo at the end (7.1% against 9.2%). Body mass, muscle mass and every performance measure were unchanged, and no participant reported side effects.", note: "Twenty already-lean athletes for three weeks is the entire controlled evidence for yohimbine and fat loss. The men were at 9% body fat to begin with, and the trial is too small to say anything about the anxiety and blood pressure effects seen elsewhere.", refs: [94] }
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { system: "Symptom burden", level: "moderate", text: "Across 50 trials, the odds of psychiatric, autonomic or gastrointestinal symptoms and palpitations were 2.2 to 3.6 times higher than placebo", evidence: "human rct", detail: "The same meta-analysis found the published case reports too poorly documented to assess, and the trials too small to detect events rarer than 1 per 1,000.", refs: [90] },
        { system: "Sport", level: "moderate", text: "Prohibited in competition above a urinary threshold", evidence: "established" }
      ],
      activity: [
        { title: "Norepinephrine release", evidence: "established", summary: "Releases norepinephrine and directly activates α and β receptors" },
        { title: "Thermogenesis", evidence: "human rct", summary: "Raises energy expenditure. Caffeine amplifies the effect", refs: [91] },
        { title: "Appetite", evidence: "human rct", summary: "Suppresses appetite, which contributes to the weight loss seen in trials" }
      ],
      trials: [
        { title: "Ephedrine plus caffeine on a restricted diet", evidence: "human rct", meta: ["180 adults with obesity on an energy-restricted diet", "ephedrine 20 mg plus caffeine 200 mg, ephedrine alone, caffeine alone, or placebo, each three times daily", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "The combination produced more weight loss than placebo or either drug alone. Side effects such as tremor, insomnia and dizziness were common early and faded over the first weeks.", refs: [91] },
        { title: "Meta-analysis of ephedra and ephedrine", evidence: "human rct", meta: ["52 controlled trials and 65 case reports; weight loss trials required at least 8 weeks", "ephedrine, ephedrine with caffeine, ephedra, or ephedra with caffeine-containing herbs, against placebo", "no trial ran longer than 6 months", "systematic review and meta-analysis, with adverse event review"], body: "Weight loss beyond placebo was 0.6 kg per month for ephedrine alone, 1.0 kg for ephedrine with caffeine, 0.8 kg for ephedra and 1.0 kg for ephedra with caffeine-containing herbs, about 0.9 kg per month overall. Safety data from 50 trials showed 2.2- to 3.6-fold increases in the odds of psychiatric, autonomic or gastrointestinal symptoms and palpitations. No trial supported use for athletic performance.", note: "The figure usually quoted is about a kilogram a month, and it comes with a two- to threefold increase in symptomatic side effects. Nothing beyond six months has been studied.", refs: [90] },
        { title: "Ephedrine with caffeine and body composition on an energy-restricted diet", evidence: "human rct", meta: ["14 women with obesity", "ephedrine 20 mg with caffeine 200 mg three times daily, or placebo, on a 4.2 MJ/day diet", "8 weeks", "randomized, double-blind, placebo-controlled"], body: "Total weight loss did not differ between groups, but the treated group lost 4.5 kg more body fat and 2.8 kg less fat-free mass. The fall in 24-hour energy expenditure was smaller on treatment (7–8% against 10–13%), and the difference was covered entirely by fat oxidation.", note: "The finding is a shift in what was lost rather than how much: same weight, more fat, less fat-free mass. Fourteen people, eight weeks.", refs: [465] },
        { title: "Six-month randomized safety and efficacy trial", evidence: "human rct", meta: ["167 adults, mean BMI 31.8", "herbal ephedra/caffeine delivering 90 mg ephedrine alkaloids and 192 mg caffeine daily, or placebo", "6 months", "randomized, double-blind, placebo-controlled"], body: "Weight fell 5.3 kg against 2.6 kg on placebo and body fat 4.3 kg against 2.7 kg, with LDL down and HDL up. Heart rate rose 4 bpm against a fall of 3 bpm, blood pressure changed by +3 to −5 mmHg, and arrhythmias were not increased. Dry mouth, heartburn and insomnia were more frequent.", note: "The longest trial run, and it used a herbal preparation rather than ephedrine itself. A trial of 167 people for six months cannot rule out the rare events that led to the ban.", refs: [464] }
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
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["GH fragment", "lipolysis", "peptide"],
      summary: "A fragment of growth hormone designed to keep its fat-burning effect without its other effects. It failed to beat placebo in a large phase 2b weight-loss trial and development stopped.",
      names: "Developed by Metabolic Pharmaceuticals as an obesity drug. After the phase 2b trial failed in 2007, the company stopped developing it for obesity. It is still sold by peptide vendors and compounding pharmacies.",
      structure: "The C-terminal 177–191 region of human growth hormone, with an added N-terminal tyrosine. It does not activate the GH receptor and does not raise IGF-1.",
      pubchem: "AOD-9604",
      profile: { note: flNote, rows: [
        { label: "Fat loss effect", score: 1 }, { label: "Risk load", score: 1, neg: true },
        { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Efficacy", level: "high", text: "Across six randomized placebo-controlled trials in 893 participants, including a 24-week phase 2b trial in 502 patients, no weight-loss benefit over placebo was established and development for obesity ended", evidence: "human rct", detail: "The published pooled paper reports safety only and gives no efficacy figures, so even the negative result is incompletely published.", refs: [345] },
        { system: "Tolerability", level: "low", text: "Well tolerated in clinical trials, with no IGF-1 increase or effect on glucose, and no anti-drug antibodies detected", evidence: "human rct", detail: "Serious adverse events occurred in 3.6% of the 502-patient phase 2b trial, distributed similarly across dose groups and none judged definitely related.", refs: [345] },
        { system: "Headache", level: "low", text: "Headache occurred in 16 of 23 subjects (69.6%) in the intravenous phase 2a study in men with obesity, and euphoria was judged possibly related in 5 of 23", evidence: "human rct", detail: "This was at intravenous doses of 25-100 µg/kg, higher systemic exposure than the oral trials.", refs: [345] },
        { system: "Route mismatch", level: "moderate", text: "Every human trial gave it orally or intravenously. The subcutaneous injection sold today was never tested, and the trials that exist found no benefit at the routes they did test", evidence: "human rct", refs: [345] },
        { system: "Product quality", level: "moderate", text: "Vendor and compounded products are unregulated. FDA placed AOD-9604 in the Category 2 list of bulk substances with identified significant safety risks in 2023, citing possible immunogenicity, peptide-related impurities and characterization problems", evidence: "established", detail: "The compounding classification has since been subject to change, so the current FDA 503A bulks list is the thing to check.", refs: [352] }
      ],
      activity: [
        { title: "Lipolysis", evidence: "animal", summary: "Stimulated fat breakdown and reduced fat in obese rodents", refs: [97] },
        { title: "GH receptor", evidence: "in vitro", summary: "Does not activate the GH receptor and does not raise IGF-1", refs: [97] }
      ],
      trials: [
        { title: "Pooled safety and tolerability across six controlled trials", evidence: "human rct", meta: ["893 participants across six trials: healthy men and adults with obesity", "AOD-9604 intravenously 25-400 µg/kg, or orally 0.25-54 mg daily", "single doses up to 24 weeks", "pooled analysis of six randomized, double-blind, placebo-controlled trials"], body: "IGF-1 did not change significantly in any trial, and oral glucose tolerance testing showed no impairment of carbohydrate metabolism, in contrast with intact growth hormone. No anti-AOD9604 antibodies were detected in any tested subject. In the 24-week phase 2b trial, 78.7% had at least one adverse event and 18 of 502 patients (3.6%) had a serious adverse event, distributed similarly across groups and none judged definitely related. The intravenous phase 2a study reported headache in 16 of 23 subjects (69.6%).", note: "The paper was funded by the developer and two of three authors had ties to it, and it reports safety only: it gives no body-weight results for either phase 2b trial. Read as a safety record it is informative; read as evidence the compound works it says nothing. Its trial table is also the clearest published statement of what was actually dosed.", refs: [345] },
        { title: "Phase 2b weight loss trial", evidence: "human rct", meta: ["502 randomized adults with obesity (534 enrolled)", "AOD-9604 tablets 0.25, 0.5 or 1 mg daily or placebo, after a 4-week run-in", "24 weeks plus 4 weeks follow-up", "randomized, double-blind, placebo-controlled phase 2b"], body: "AOD-9604 did not produce significantly more weight loss than placebo, and development for obesity ended.", note: "This was the decisive trial. The pooled safety paper confirms its size and design but publishes no efficacy numbers, so the negative result rests on the company's reporting rather than on a full published efficacy paper.", refs: [345] },
        { title: "Oral dosing in rodents and in rodent and human adipose tissue", evidence: "animal", meta: ["ob/ob obese mice, obese Zucker rats, and isolated adipose tissue from obese rodents and humans", "AOD-9401 orally for 20-30 days, or applied to tissue in vitro", "up to 30 days", "controlled animal and ex vivo experiments"], body: "Oral treatment slowed body weight gain from day 16 without changing food intake, reduced lipogenic and raised lipolytic activity in adipose tissue, and raised energy expenditure and fat oxidation acutely. Adipocyte diameter fell from about 110 to 80 µm in Zucker rats. Unlike intact growth hormone, it did not induce insulin resistance or glucose intolerance.", note: "This preclinical package is why the compound went into trials, and it predicted the one thing that held up in humans: no effect on glucose or IGF-1. The fat loss did not transfer.", refs: [346, 347] },
        { title: "Does not interfere with the WADA GH isoform test", evidence: "human obs", meta: ["laboratory analysis", "AOD-9604", "not applicable", "analytical validation study"], body: "AOD-9604 does not influence the WADA human GH isoform immunoassay.", note: "Narrow but factual: a positive GH isoform test cannot be explained by AOD-9604 use, and AOD-9604 use is not detected by it.", refs: [351] }
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
      added: "2026-10-06", updated: "2026-10-17",
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
      noTrials: "It has never been given to humans in a published study. The strongest evidence is a 28-day study in diet-induced obese mice, in which it dose-dependently limited gains in body weight and fat mass, improved glucose tolerance and insulin sensitivity, and reduced fatty liver.",
      noTrialsRefs: [466],
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
      added: "2026-10-06", updated: "2026-10-17",
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
        { title: "Phase 2 in obesity (TIPO-1)", evidence: "human rct", meta: ["203 adults with obesity on a diet", "tesofensine 0.25, 0.5 or 1.0 mg daily, or placebo", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "Mean weight loss was 4.5%, 9.2% and 10.6% across the three doses against 2.0% with diet and placebo. Dry mouth, nausea, constipation, hard stools, diarrhea and insomnia were the common adverse events. At 0.25 and 0.5 mg blood pressure did not differ from placebo, but heart rate rose by 7.4 bpm at 0.5 mg.", note: "These are large effects for a short trial, but they come from a single phase 2 study, and the authors wrote that they needed phase 3 confirmation. That confirmation does not appear in the published literature. The 1.0 mg dose was dropped because of side effects.", refs: [92] },
        { title: "Weight loss noticed in Parkinson's and Alzheimer's trials", evidence: "human rct", meta: ["adults with Parkinson's or Alzheimer's disease", "tesofensine at doses used for the neurological indications, or placebo", "14 weeks in the reported analyses", "pooled analysis of randomized trials"], body: "Weight loss during trials for the original neurological indications was what prompted its development as an obesity drug.", note: "The weight data came from people who had not been selected for wanting to lose weight.", refs: [468] }
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
