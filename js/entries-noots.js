/* Atlas Codex: racetams and other nootropics. Same schema as data.js. */
(function (A) {
  const racetamNote = "Scored relative to other nootropics in the codex. Most cognitive claims here rest on animal or small human studies.";
  const greyMarket = { system: "Product quality", level: "moderate", text: "Usually bought as unregulated bulk powder. Purity and identity are unverified", evidence: "established" };

  A.entries.push(
    /* ------------------------------------------------------------ piracetam */
    {
      slug: "piracetam", type: "compound", name: "Piracetam",
      aliases: ["Nootropil", "UCB-6215", "2-oxo-1-pyrrolidine acetamide"], category: "nootropic", status: "Approved",
      class: "Racetam (cyclic GABA derivative)", developer: "UCB (1964), Corneliu Giurgea",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["racetam", "myoclonus", "AMPA", "cognition"],
      summary: "The original racetam and the drug the word \"nootropic\" was coined for. It is approved in many European countries for a movement disorder called cortical myoclonus. Evidence for improving cognition is weak.",
      names: "Sold as Nootropil and other brands in Europe and elsewhere, mainly as an add-on treatment for cortical myoclonus. It is not approved in the US, and the FDA does not allow it to be sold as a dietary supplement. Corneliu Giurgea coined the term \"nootropic\" in 1972 to describe it. The \"Approved\" status refers to its European approval.",
      structure: "C<sub>6</sub>H<sub>10</sub>N<sub>2</sub>O<sub>2</sub>, about 142.2 g/mol. It is a cyclic derivative of GABA, but it does not act on GABA receptors. It is highly water-soluble, almost completely absorbed when taken orally, and leaves the body unchanged in urine.",
      pubchem: "piracetam",
      profile: { note: racetamNote, rows: [
        { label: "Cognitive effect (healthy)", score: 1 }, { label: "Clinical use (myoclonus)", score: 3 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Generally well tolerated. Nervousness, weight gain and drowsiness are reported", evidence: "human rct", refs: [52] },
        { system: "Bleeding", level: "low", text: "Reduces platelet aggregation. Use caution with anticoagulants or bleeding disorders", evidence: "established" },
        { system: "Kidney", level: "low", text: "Cleared unchanged by the kidneys, so it accumulates when kidney function is reduced", evidence: "established" },
        { system: "Acute stroke", level: "unknown", text: "In acute stroke trials, deaths ran non-significantly higher on piracetam than on placebo", evidence: "human rct", detail: "A Cochrane review found about a 31% non-significant increase in death at one month, which may reflect baseline differences in stroke severity. The largest trial found 23.9% against 19.2% mortality at 12 weeks.", refs: [504, 505] }
      ],
      activity: [
        { title: "AMPA receptor", evidence: "in vitro", summary: "Weak positive modulation of AMPA glutamate receptors", refs: [51] },
        { title: "Membrane fluidity", evidence: "in vitro", summary: "Proposed to restore cell membrane fluidity, especially in aged membranes", refs: [51] },
        { title: "Myoclonus", evidence: "human rct", summary: "Reduces cortical myoclonus at high doses", refs: [53] }
      ],
      trials: [
        { title: "Progressive myoclonus epilepsy", evidence: "human rct", meta: ["20 patients with Unverricht-Lundborg disease", "piracetam 9.6, 16.8 or 24 g daily or placebo", "crossover", "multicentre, randomized, double-blind"], body: "Piracetam improved myoclonus and functional disability scores, with the largest effect at the highest dose.", note: "This is the indication it is actually approved for. The doses are many times those used for nootropic purposes.", refs: [53] },
        { title: "Cochrane review: Dementia and cognitive impairment", evidence: "human rct", meta: ["randomized trials of piracetam in dementia or cognitive impairment", "systematic review"], body: "Global impression scores favored piracetam, but the trials were heterogeneous and showed signs of publication bias. Measures of cognition did not support a benefit, and the review did not support its use for dementia.", refs: [52] },
        { title: "Cochrane review: acute ischaemic stroke", evidence: "human rct", meta: ["3 trials, 1,002 patients with presumed ischaemic stroke, treated within 3 days of onset", "piracetam against control", "follow-up to 1 month and beyond", "systematic review and meta-analysis (2012 update)"], body: "Piracetam was linked to a non-significant rise in death at one month, about 31% (95% CI from a 5% reduction to an 81% increase). The trend disappeared in the largest trial after correcting for imbalances in stroke severity. There was no difference in function or dependence.", note: "One trial supplied 93% of the data. There is no evidence of benefit and a weak signal of harm that may be an artefact.", refs: [504] },
        { title: "PASS: piracetam within 12 hours of acute ischemic stroke", evidence: "human rct", meta: ["927 patients with acute ischemic stroke", "12 g IV bolus, then 12 g a day for 4 weeks and 4.8 g a day for 8 weeks, or placebo", "12 weeks", "multicentre, randomized, double-blind, placebo-controlled"], body: "Outcomes were the same in both groups at 4 and 12 weeks. Mortality at 12 weeks was 23.9% with piracetam and 19.2% with placebo (RR 1.24, 95% CI 0.97–1.59, P = .15). Benefit appeared only in post hoc subgroups treated within 7 hours.", note: "Negative on its primary endpoint. Post hoc subgroup findings are hypotheses, not results.", refs: [505] },
        { title: "Piracetam in children with dyslexia", evidence: "human rct", meta: ["225 children aged 7.5–13 with dyslexia and normal intelligence", "piracetam or placebo; dose not reported", "36 weeks", "multicentre, double-blind, placebo-controlled"], body: "Children on piracetam improved more on reading ability (Gray Oral Reading Test) and reading comprehension (Gilmore). Effects were seen by 12 weeks and held to 36 weeks. No serious adverse effects were reported.", note: "A 1987 sponsor-era trial that later trials did not build into an approved use. Other small dyslexia trials from the same period gave mixed results.", refs: [506] }
      ],
      related: ["aniracetam", "oxiracetam", "phenylpiracetam", "pramiracetam"]
    },

    /* ------------------------------------------------------------ aniracetam */
    {
      slug: "aniracetam", type: "compound", name: "Aniracetam",
      aliases: ["Ro 13-5057", "Draganon", "Ampamet"], category: "nootropic", status: "Research only",
      class: "Racetam / AMPA positive allosteric modulator", developer: "Hoffmann-La Roche (1970s)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["racetam", "AMPA", "ampakine", "fat-soluble"],
      summary: "A fat-soluble racetam that was the first drug shown to boost the brain's AMPA glutamate receptors. When swallowed, almost all of it is broken down before it reaches the bloodstream.",
      names: "Developed by Roche and marketed in some European countries and Japan in the past. It has never been approved in the US. The \"Research only\" status reflects its current status in the US and most countries.",
      structure: "1-(4-methoxybenzoyl)-2-pyrrolidinone. C<sub>12</sub>H<sub>13</sub>NO<sub>3</sub>, about 219.2 g/mol. It is fat-soluble, unlike piracetam. Its oral bioavailability is very low, about 0.2%, because the liver rapidly converts it to N-anisoyl-GABA and other metabolites, which may carry part of its activity.",
      pubchem: "aniracetam",
      profile: { note: racetamNote, rows: [
        { label: "Cognitive effect (healthy)", score: 1 }, { label: "Anxiolytic signal", score: 2 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Headache, anxiety and insomnia are reported", evidence: "anecdotal" },
        { system: "Confusion", level: "unknown", text: "Confusion led to stopping treatment in 4 of 22 patients on aniracetam against 1 on placebo in a small dementia trial", evidence: "human rct", detail: "From a 44-patient trial in elderly people with dementia. Too small to estimate a rate, and not studied in younger adults.", refs: [507] },
        greyMarket
      ],
      activity: [
        { title: "AMPA receptor", evidence: "in vitro", summary: "Slows AMPA receptor desensitization and deactivation, increasing excitatory currents", detail: "This was the first demonstration of an \"ampakine\" mechanism, and it made aniracetam the template for later AMPA modulators.", refs: [54] },
        { title: "Metabolites", evidence: "animal", summary: "N-anisoyl-GABA and other metabolites are thought to contribute to its effects after oral dosing" },
        { title: "Anxiety models", evidence: "animal", summary: "Reduced anxiety-like behavior in rodent tests" }
      ],
      trials: [
        { title: "Aniracetam in Alzheimer-type dementia, 6-month multicentre trial", evidence: "human rct", meta: ["109 elderly patients with mild to moderate probable Alzheimer's disease (NINCDS-ADRDA)", "aniracetam or placebo; dose not reported", "6 months", "multicentre, randomized, double-blind, placebo-controlled"], body: "The aniracetam group differed significantly from placebo by the end of the study. It improved on psychobehavioural measures against baseline while the placebo group declined. Tolerability was reported as excellent.", note: "A 1991 trial with pre-modern outcome measures. It was never followed by a trial that led to approval in the West.", refs: [508] },
        { title: "Aniracetam 1 g a day in Alzheimer-type dementia", evidence: "human rct", meta: ["44 patients with senile dementia of the Alzheimer type", "aniracetam 1 g a day or placebo", "3 months", "randomized, double-blind, placebo-controlled"], body: "Cognitive scores improved in both groups, and there was no difference in efficacy between aniracetam and placebo. Treatment was stopped for confusion in 4 patients on aniracetam and 1 on placebo.", note: "A negative trial. Together with the 1991 trial it gives a mixed picture from old, small studies. There are no meaningful trials in healthy people.", refs: [507] }
      ],
      related: ["piracetam", "oxiracetam", "nefiracetam"]
    },

    /* ------------------------------------------------------------ oxiracetam */
    {
      slug: "oxiracetam", type: "compound", name: "Oxiracetam",
      aliases: ["ISF 2522", "Neuromet"], category: "nootropic", status: "Approved",
      class: "Racetam (hydroxylated piracetam)", developer: "ISF (Italy, 1970s)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["racetam", "vascular dementia", "cognition"],
      summary: "A water-soluble racetam, chemically piracetam with an added hydroxyl group. It was marketed in Italy, and in China it is widely used as an injection for vascular cognitive impairment.",
      names: "Marketed in Italy as Neuromet in the past. In China, injectable oxiracetam is widely prescribed after stroke and for vascular cognitive impairment. It is not approved in the US or the EU. The \"Approved\" status reflects its use in China.",
      structure: "4-hydroxy-2-oxo-1-pyrrolidine acetamide. C<sub>6</sub>H<sub>10</sub>N<sub>2</sub>O<sub>3</sub>, about 158.2 g/mol. It is a racemic mixture; the S-enantiomer is reported to be the more active form.",
      pubchem: "oxiracetam",
      profile: { note: racetamNote, rows: [
        { label: "Cognitive effect (healthy)", score: 1 }, { label: "Clinical use (vascular)", score: 2 },
        { label: "Risk load", score: 1, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Headache, insomnia and nervousness are reported", evidence: "anecdotal" },
        greyMarket
      ],
      activity: [
        { title: "AMPA receptor", evidence: "in vitro", summary: "Positive modulation of AMPA receptors and increased glutamate release in hippocampal slices" },
        { title: "Memory models", evidence: "animal", summary: "Improved learning and memory in rodent models of induced amnesia and brain injury" }
      ],
      trials: [
        { title: "Oxiracetam to prevent cognitive decline after stroke (Korea)", evidence: "human rct", meta: ["500 patients at high risk of post-stroke cognitive impairment with subjective decline at least 3 months after stroke; 457 completed", "oxiracetam 800 mg twice daily, or placebo", "36 weeks", "multicentre, randomized, double-blind, placebo-controlled phase 4; commissioned by Korea's drug regulator"], body: "There was no difference in MMSE change (+0.13 against +0.27, p = 0.49) or CDR-SB change (−0.14 against −0.08, p = 0.38). Physical activity did not modify the effect.", note: "The largest and best-run trial of oxiracetam. The authors say the result supports South Korea's decision to suspend its use. The 800 mg twice-daily dose is from the published protocol.", refs: [509, 510] },
        { title: "LOCATE: oxiracetam and L-oxiracetam after traumatic brain injury (China)", evidence: "human rct", meta: ["590 adults aged 18–75 with mild to moderate TBI (GCS 10–15) at 51 hospitals", "L-oxiracetam 4 g a day, oxiracetam 6 g a day, or placebo (2:2:1)", "90 days after treatment (treatment length not reported)", "multicentre, randomized, double-blind phase 3"], body: "LOTCA cognitive scores rose in all groups: 20.5 with L-oxiracetam, 15.9 with oxiracetam and 11.5 with placebo. L-oxiracetam beat placebo by 9.0 points (Cohen's d 0.48). Serious adverse events did not differ between groups.", note: "Funded in part by an L-oxiracetam manufacturer, with loss to follow-up acknowledged. The headline comparison is for L-oxiracetam. The trial report does not give the racemic oxiracetam-versus-placebo difference directly.", refs: [511] }
      ],
      related: ["piracetam", "pramiracetam", "aniracetam"]
    },

    /* ------------------------------------------------------------ pramiracetam */
    {
      slug: "pramiracetam", type: "compound", name: "Pramiracetam",
      aliases: ["CI-879", "Pramistar"], category: "nootropic", status: "Research only",
      class: "Racetam (fat-soluble amide)", developer: "Parke-Davis (late 1970s)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["racetam", "choline uptake", "fat-soluble"],
      summary: "A fat-soluble racetam that is potent per milligram. It is said to work by increasing choline uptake in the hippocampus. Its human evidence is thin.",
      names: "Developed by Parke-Davis as CI-879 and later marketed in parts of Europe as Pramistar. It is not approved in the US. The \"Research only\" status reflects its current status in most countries.",
      structure: "N-[2-(diisopropylamino)ethyl]-2-oxo-1-pyrrolidineacetamide. C<sub>14</sub>H<sub>27</sub>N<sub>3</sub>O<sub>2</sub>, about 269.4 g/mol. The bulky fat-soluble side chain sets it apart from piracetam.",
      pubchem: "pramiracetam",
      profile: { note: racetamNote, rows: [
        { label: "Cognitive effect (healthy)", score: 1 }, { label: "Risk load", score: 1, neg: true },
        { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Headache is commonly reported", evidence: "anecdotal" },
        greyMarket
      ],
      activity: [
        { title: "High-affinity choline uptake", evidence: "animal", summary: "Increased high-affinity choline uptake in the rat hippocampus, which is thought to support acetylcholine production", refs: [55] },
        { title: "Receptor binding", evidence: "in vitro", summary: "Little affinity for major neurotransmitter receptors", refs: [55] }
      ],
      trials: [
        { title: "Pramiracetam against scopolamine-induced amnesia in healthy volunteers", evidence: "human rct", meta: ["24 healthy men in two age groups (18–42 and 55–65)", "pramiracetam 600 mg twice daily or placebo for 10 days, then scopolamine 0.5 mg IM on day 11", "10 days plus a single challenge day", "randomized, placebo-controlled"], body: "Scopolamine impaired episodic memory and attention in both groups. Pramiracetam partly reduced the amnesic effect in young and older subjects.", note: "A drug-induced deficit model in 24 people. It does not show improvement in unimpaired memory.", refs: [513] },
        { title: "Pramiracetam in Alzheimer's disease (NIH enrichment trial)", evidence: "human rct", meta: ["10 patients with probable Alzheimer's disease", "pramiracetam up to 4,000 mg a day, with dose-finding then a replication phase", "two phases (durations not reported)", "placebo-controlled enrichment design"], body: "Eight patients showed a best dose in the dose-finding phase, but only two improved to a similar degree on replication. FDG-PET in two patients showed no definite change.", note: "The authors concluded that doses up to 4,000 mg are unlikely to help Alzheimer's disease.", refs: [512] }
      ],
      related: ["piracetam", "oxiracetam", "phenylpiracetam"]
    },

    /* ------------------------------------------------------------ phenylpiracetam */
    {
      slug: "phenylpiracetam", type: "compound", name: "Phenylpiracetam",
      aliases: ["Fonturacetam", "Phenotropil", "Carphedon"], category: "nootropic", status: "Approved",
      class: "Racetam with stimulant activity", developer: "Russian Academy of Sciences (1983)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["racetam", "stimulant", "dopamine", "WADA prohibited"],
      summary: "Piracetam with an added phenyl ring. It acts as a stimulant, it is a prescription drug in Russia, and it is banned in sport.",
      names: "Sold in Russia as Phenotropil (INN fonturacetam). It was developed partly for Soviet cosmonauts. It is not approved in the US or the EU. As \"carphedon\" it is on the WADA list of prohibited stimulants. The \"Approved\" status reflects its use in Russia.",
      structure: "4-phenyl-2-oxo-1-pyrrolidine acetamide. C<sub>12</sub>H<sub>14</sub>N<sub>2</sub>O<sub>2</sub>, about 218.3 g/mol. It is sold as a racemic mixture. The R-enantiomer accounts for most of the stimulant and locomotor effects in animals.",
      pubchem: "phenylpiracetam",
      profile: { note: racetamNote, rows: [
        { label: "Stimulant effect", score: 3 }, { label: "Cognitive effect (healthy)", score: 2 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Sleep", level: "moderate", text: "Insomnia and restlessness, especially when taken later in the day", evidence: "anecdotal" },
        { system: "Tolerance", level: "moderate", text: "Users widely report that the stimulant effect fades with repeated use", evidence: "anecdotal" },
        { system: "Sport", level: "high", text: "Prohibited by WADA in competition as a stimulant", evidence: "established" },
        greyMarket
      ],
      activity: [
        { title: "Dopamine transporter", evidence: "in vitro", summary: "The R-enantiomer inhibits dopamine reuptake, consistent with its stimulant profile", refs: [56] },
        { title: "Locomotor activity", evidence: "animal", summary: "Increased locomotor activity and physical endurance in rodents, mainly from the R-enantiomer", refs: [56] }
      ],
      trials: [],
      noTrials: "Russian clinical studies exist, for example after stroke and in fatigue, but they are small and mostly not available in English. There are no Western randomized trials.",
      related: ["piracetam", "pramiracetam"]
    },

    /* ------------------------------------------------------------ nefiracetam */
    {
      slug: "nefiracetam", type: "compound", name: "Nefiracetam",
      aliases: ["DM-9384", "Translon"], category: "nootropic", status: "Research only",
      class: "Racetam (calcium channel modulator)", developer: "Daiichi Pharmaceutical",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["racetam", "calcium channels", "nicotinic", "post-stroke"],
      summary: "A fat-soluble racetam that Daiichi took into clinical trials for post-stroke apathy and Alzheimer's disease. Unlike most racetams, its main proposed action is on calcium channels.",
      names: "Developed by Daiichi as DM-9384 (proposed brand Translon). It reached clinical trials in Japan and the US for post-stroke depression and apathy and for dementia, but was never approved.",
      structure: "N-(2,6-dimethylphenyl)-2-(2-oxopyrrolidin-1-yl)acetamide. C<sub>14</sub>H<sub>18</sub>N<sub>2</sub>O<sub>2</sub>, about 246.3 g/mol.",
      pubchem: "nefiracetam",
      profile: { note: racetamNote, rows: [
        { label: "Cognitive effect (healthy)", score: 1 }, { label: "Risk load", score: 2, neg: true },
        { label: "Evidence quality", score: 2 } ] },
      risks: [
        { system: "Animal toxicology", level: "moderate", text: "Kidney and testicular effects were reported in dogs at high doses during preclinical safety testing", evidence: "animal", detail: "What this means for humans at typical doses is not established, but it is the main safety flag in the published record." },
        greyMarket
      ],
      activity: [
        { title: "Calcium channels", evidence: "in vitro", summary: "Increased neuronal N- and L-type calcium channel currents through a G-protein-dependent mechanism", refs: [57] },
        { title: "Nicotinic acetylcholine receptors", evidence: "in vitro", summary: "Increased the response of nicotinic acetylcholine receptors" },
        { title: "Memory models", evidence: "animal", summary: "Reversed induced amnesia in rodent models" }
      ],
      trials: [
        { title: "Nefiracetam for depression after stroke", evidence: "human rct", meta: ["159 patients with major depression within 3 months of stroke", "nefiracetam 600 mg or 900 mg a day, or placebo", "duration not reported", "randomized, double-blind, placebo-controlled, multicentre"], body: "There was no significant time-by-treatment effect. Response rates were over 70% and remission over 40% in both the drug and placebo groups. Only the most severely depressed fifth improved more on 900 mg.", note: "Negative on its primary analysis. The severe-subgroup finding is post hoc.", refs: [514] },
        { title: "Nefiracetam for apathy in post-stroke depression", evidence: "human rct", meta: ["70 of 137 post-stroke depression patients who also met criteria for apathy", "nefiracetam 600 mg or 900 mg a day, or placebo", "at least 4 weeks", "secondary analysis of a randomized, double-blind trial"], body: "Apathy Scale scores improved significantly more on 900 mg than on 600 mg or placebo.", note: "A subgroup drawn from the negative depression trial above. A prospective trial was later run to test it.", refs: [515] },
        { title: "Nefiracetam for post-stroke apathy (Perth)", evidence: "human rct", meta: ["13 randomized patients with apathy 8–36 weeks after stroke (2,514 screened)", "nefiracetam 900 mg a day or placebo", "12 weeks", "randomized, double-blind, placebo-controlled, two-centre"], body: "Apathy scores fell overall, but there was no significant difference between nefiracetam and placebo at 12 weeks.", note: "Badly underpowered because of recruitment failure. It neither confirms nor rules out the earlier subgroup signal.", refs: [516] }
      ],
      related: ["aniracetam", "piracetam"]
    },

    /* ------------------------------------------------------------ prl-8-53 */
    {
      slug: "prl-8-53", type: "compound", name: "PRL-8-53",
      aliases: ["Methyl 3-[2-[benzyl(methyl)amino]ethyl]benzoate"], category: "nootropic", status: "Research only",
      class: "Phenethylamine-derived memory compound", developer: "Nikolaus Hansl, Creighton University (1970s)",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["memory", "single study", "phenethylamine"],
      summary: "A compound tested once in humans, in 1978, where a single dose improved word-list recall. That study has never been replicated, and nothing is known about its long-term safety.",
      names: "Named after its inventor's lab code. It was patented by Nikolaus Hansl at Creighton University and never commercially developed. All current supply is gray-market powder.",
      structure: "Methyl 3-[2-[benzyl(methyl)amino]ethyl]benzoate. C<sub>18</sub>H<sub>21</sub>NO<sub>2</sub>, about 283.4 g/mol. It is a benzoic-acid ester with a phenethylamine-type side chain.",
      pubchem: "PRL-8-53",
      profile: { note: "There is a single human study, so every score here rests on that study.", rows: [
        { label: "Memory effect (claimed)", score: 3 }, { label: "Human evidence", score: 1 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No safety data beyond a single-dose study", evidence: "unknown" },
        greyMarket
      ],
      activity: [
        { title: "Mechanism", evidence: "animal", summary: "Unclear. Early animal work suggested cholinergic potentiation and partial dopamine enhancement, with some serotonin inhibition" }
      ],
      trials: [
        { title: "Word-list learning in healthy volunteers", evidence: "human rct", meta: ["47 healthy adults", "a single 5 mg oral dose or placebo before learning", "recall tested at 24 hours and one week", "double-blind, placebo-controlled"], body: "Recall of a 12-word list improved with PRL-8-53, and the effect was larger in people whose baseline recall was poor. Volunteers aged 30 and over appeared to benefit more.", note: "This is the only human study. It was run by the compound's inventor, has never been independently replicated, and is now more than 45 years old.", refs: [58] }
      ],
      related: ["piracetam", "nsi-189"]
    },

    /* ------------------------------------------------------------ 9-me-bc */
    {
      slug: "9-me-bc", type: "compound", name: "9-Me-BC",
      aliases: ["9-Methyl-β-carboline", "9-Methylnorharmane"], category: "nootropic", status: "Research only",
      class: "β-carboline", developer: "Academic research (Germany, 2000s)",
      added: "2026-10-06", updated: "2026-10-17",
      tags: ["β-carboline", "dopamine", "neurogenesis", "MAO inhibitor"],
      summary: "A β-carboline that increased dopamine neuron growth in cell cultures and in rodent Parkinson's models. Related β-carbolines raise neurotoxicity concerns, and there are no human data.",
      names: "It was studied by a small group of German researchers as a possible restorative treatment for Parkinson's disease, and was then adopted by the nootropic community. There has been no clinical development.",
      structure: "9-methyl-9H-pyrido[3,4-b]indole. C<sub>12</sub>H<sub>10</sub>N<sub>2</sub>, about 182.2 g/mol. It is the N9-methylated form of norharmane, a β-carboline found in cooked food and tobacco smoke.",
      pubchem: "9-methyl-beta-carboline",
      profile: { note: "Risk load reflects concerns from related compounds, since there are no human data.", rows: [
        { label: "Preclinical signal", score: 3 }, { label: "Human evidence", score: 0 },
        { label: "Risk load", score: 3, neg: true }, { label: "Evidence quality", score: 1 } ] },
      risks: [
        { system: "Human safety", level: "unknown", text: "No human data of any kind", evidence: "unknown" },
        { system: "Neurotoxicity", level: "unknown", text: "Some N-methylated β-carbolines can be converted to MPP+-like dopamine-neuron toxins", evidence: "contested", detail: "The papers on 9-Me-BC report protective effects. The concern comes from its chemical class, not from a direct finding." },
        { system: "Photosensitivity", level: "unknown", text: "β-carbolines can be activated by UV light. Users report avoiding sunlight, but this has not been studied in humans", evidence: "contested" },
        { system: "MAO inhibition", level: "moderate", text: "Inhibits monoamine oxidase, which raises a risk of interactions with serotonergic drugs and tyramine", evidence: "in vitro" }
      ],
      activity: [
        { title: "Dopamine neurons", evidence: "in vitro", summary: "Increased the number of differentiated dopamine neurons in mesencephalic cultures", refs: [59] },
        { title: "Parkinson's models", evidence: "animal", summary: "Partly restored dopamine function in rodent toxin models of Parkinson's disease", refs: [60] },
        { title: "Cognition and hippocampus", evidence: "animal", summary: "Improved spatial learning in rats, with higher hippocampal dopamine and more dendritic growth", refs: [61] },
        { title: "Monoamine oxidase", evidence: "in vitro", summary: "Inhibits MAO-A and MAO-B", refs: [566] }
      ],
      trials: [],
      noTrials: "It has never been given to humans in a published study.",
      related: ["nsi-189", "semax"]
    },

    /* ------------------------------------------------------------ nsi-189 */
    {
      slug: "nsi-189", type: "compound", name: "NSI-189 Phosphate",
      aliases: ["NSI-189", "ALTO-100"], category: "nootropic", status: "Investigational",
      class: "Neurogenic small molecule (benzylpiperazine-aminopyridine)", developer: "Neuralstem",
      added: "2026-10-06", updated: "2026-10-06",
      tags: ["neurogenesis", "depression", "hippocampus", "cognition"],
      summary: "An experimental drug that stimulated new neuron growth in the hippocampus of animals. It was tested for depression, failed its main endpoint in phase 2, but showed signals on some cognitive measures.",
      names: "Developed by Neuralstem as a hippocampal neurogenesis drug for major depressive disorder and cognitive impairment. The phosphate salt is the form used in clinical trials. It was later licensed to Alto Neuroscience as ALTO-100, whose biomarker-guided phase 2b trial in depression did not meet its primary endpoint in 2024. It is not approved anywhere.",
      structure: "(4-benzylpiperazin-1-yl)-[2-(3-methylbutylamino)pyridin-3-yl]methanone, a small molecule that crosses the blood–brain barrier. Its target is not publicly established.",
      pubchem: "NSI-189",
      profile: { note: racetamNote, rows: [
        { label: "Antidepressant effect", score: 1 }, { label: "Cognitive signal", score: 2 },
        { label: "Risk load", score: 2, neg: true }, { label: "Evidence quality", score: 3 } ] },
      risks: [
        { system: "Tolerability", level: "low", text: "Well tolerated in trials up to 12 weeks", evidence: "human rct", refs: [62, 63] },
        { system: "Long-term safety", level: "unknown", text: "No data beyond short trials", evidence: "unknown" },
        greyMarket
      ],
      activity: [
        { title: "Hippocampal neurogenesis", evidence: "animal", summary: "Stimulated new neuron growth and increased hippocampal volume in mice" },
        { title: "Synaptic plasticity", evidence: "animal", summary: "Raised BDNF and synaptic markers in rodent models" }
      ],
      trials: [
        { title: "Phase 1b in major depression", evidence: "human rct", meta: ["24 adults with major depressive disorder", "NSI-189 at three dose levels or placebo", "28 days", "randomized, double-blind, placebo-controlled"], body: "Depression and cognition scores improved more with NSI-189 than placebo. The study was small and exploratory.", refs: [62] },
        { title: "Phase 2 in major depression", evidence: "human rct", meta: ["220 outpatients with major depressive disorder", "NSI-189 40 mg or 80 mg daily or placebo", "12 weeks", "randomized, double-blind, placebo-controlled"], body: "NSI-189 did not beat placebo on the primary depression rating scale (MADRS). The 40 mg dose improved some secondary self-rated depression and cognitive measures.", note: "This trial failed its primary endpoint. The cognitive findings are secondary and need confirmation.", refs: [63] }
      ],
      related: ["9-me-bc", "prl-8-53"]
    }
  );

  Object.assign(A.references, {
    51: "Winblad B. Piracetam: a review of pharmacological properties and clinical uses. CNS Drug Rev 2005;11:169–182.",
    52: "Flicker L, Grimley Evans J. Piracetam for dementia or cognitive impairment. Cochrane Database Syst Rev 2001;(2):CD001011.",
    53: "Koskiniemi M et al. Piracetam relieves symptoms in progressive myoclonus epilepsy: a multicentre, randomised, double blind, crossover study comparing the efficacy and safety of three dosages of oral piracetam with placebo. J Neurol Neurosurg Psychiatry 1998;64:344–348.",
    54: "Ito I et al. Allosteric potentiation of quisqualate receptors by a nootropic drug aniracetam. J Physiol 1990;424:533–543.",
    55: "Pugsley TA et al. Some neurochemical properties of pramiracetam (CI-879), a new cognition-enhancing agent. Drug Dev Res 1983;3:407–420.",
    56: "Zvejniece L et al. Investigation into stereoselective pharmacological activity of phenotropil. Basic Clin Pharmacol Toxicol 2011;109:407–412.",
    57: "Yoshii M, Watabe S. Enhancement of neuronal calcium channel currents by the nootropic agent, nefiracetam (DM-9384), in NG108-15 cells. Brain Res 1994;642:123–131.",
    58: "Hansl NR, Mead BT. PRL-8-53: Enhanced learning and subsequent retention in humans as a result of low oral doses of new psychotropic agent. Drug Dev Res 1978;3:245–256.",
    59: "Hamann J et al. 9-Methyl-β-carboline up-regulates the appearance of differentiated dopaminergic neurones in primary mesencephalic culture. Neurochem Int 2008;52:688–700.",
    60: "Wernicke C et al. 9-Methyl-β-carboline has restorative effects in an animal model of Parkinson's disease. Pharmacol Rep 2010;62:35–53.",
    61: "Gruss M et al. 9-Methyl-β-carboline-induced cognitive enhancement is associated with elevated hippocampal dopamine levels and dendritic and synaptic proliferation. J Neurochem 2012;121:924–931.",
    62: "Fava M et al. A Phase 1B, randomized, double blind, placebo controlled, multiple-dose escalation study of NSI-189 phosphate, a neurogenic compound, in depressed patients. Mol Psychiatry 2016;21:1372–1380.",
    63: "Papakostas GI et al. A phase 2, double-blind, placebo-controlled study of NSI-189 phosphate, a neurogenic compound, among outpatients with major depressive disorder. Mol Psychiatry 2020;25:1569–1579."
  });
})(window.ATLAS);
