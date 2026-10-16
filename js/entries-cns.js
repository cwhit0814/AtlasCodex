/* Atlas Codex: nicotine and the medicines used to quit it; ADHD medicines and wakefulness agents.
   Uses the compact builder (js/builder.js). */
(function (A) {
  A.cat("dependence", "Dependence & Cessation", "Nicotine, and the medicines tested for quitting it.");
  A.cat("adhd", "ADHD & Wakefulness", "Stimulant and non-stimulant ADHD medicines, and wakefulness agents.");

  const day = "2026-10-16";
  const add = (o) => A.add({ added: day, updated: day, ...o });
  const adhdNote = "Scored against the other ADHD and wakefulness medicines in the codex. Effect scores describe diagnosed ADHD unless the row says otherwise.";
  const cessNote = "Scored against the other quit-smoking medicines in the codex. Quit rates are long-term, verified abstinence against placebo.";
  const stimCardio = ["Heart and blood pressure", "moderate", "Raises resting heart rate by a few beats a minute and blood pressure by a few mmHg on average. Long-term use is linked to a small rise in hypertension and arterial disease", "human obs",
    "Large cohort studies did not find a rise in heart attack, stroke or sudden death in children and young to middle-aged adults. A Swedish study found cardiovascular risk rose about 4% for each year of use, driven mainly by hypertension and arterial disease. Blood pressure is the cheapest thing to measure and the one most worth tracking."];
  const stimPsych = ["Psychosis and mania", "low", "New psychotic symptoms occurred in about 1 in 660 young people started on a stimulant, more often with amphetamine (0.21%) than with methylphenidate (0.10%)", "human obs"];
  const sched2 = ["Misuse and dependence", "moderate", "Schedule II in the US. Misuse risk rises with dose, with immediate-release forms, and with snorting or injecting", "established"];

  /* ------------------------------------------------------------ nicotine */
  add({ slug: "nicotine", name: "Nicotine", aliases: ["NRT", "Nicorette", "NicoDerm", "Nicotine pouches", "Zyn", "Nicotine gum", "Nicotine patch"], category: "dependence", status: "Approved",
    class: "Nicotinic acetylcholine receptor agonist", developer: "Tobacco alkaloid; nicotine replacement first approved 1984 (gum)",
    tags: ["nicotine", "nAChR", "α4β2", "α7", "stimulant", "cognition", "vaping", "pouches", "NRT"],
    summary: "The tobacco alkaloid that makes smoking addictive. On its own it is a mild stimulant with a real, modest effect on attention and fine motor speed. How quickly it reaches the brain, and how often it is taken, largely decide how addictive it is.",
    names: "Approved as nicotine replacement therapy (patch, gum, lozenge, inhaler, nasal spray), mostly over the counter. Pouches such as Zyn and e-cigarette liquids are consumer products, not medicines, and carry no dosing label. Nicotine is not what makes tobacco smoke cause cancer and lung disease; the combustion products are. The \"Approved\" status refers to replacement products.",
    structure: "3-(1-methylpyrrolidin-2-yl)pyridine. C<sub>10</sub>H<sub>14</sub>N<sub>2</sub>, about 162.2 g/mol. A small, fat-soluble base. It crosses membranes far faster in its unionized (freebase) form, which is why pH matters: nicotine salts in vapes and alkaline pouches are tuned to change how quickly it is absorbed.",
    pubchem: "nicotine",
    pnote: "Scored as pure nicotine, not tobacco. The dependence score is for frequent, fast delivery (smoking or vaping); a patch alone is far lower.",
    p: [["Attention / motor speed (acute)", 2], ["Quit aid (as NRT)", 3], ["Dependence potential", 5, 1], ["Risk load", 3, 1], ["Evidence quality", 4]],
    r: [["Dependence", "high", "Highly addictive when delivered quickly and often. Dependence builds faster with frequent daily dosing, and with smoked or vaped delivery that reaches the brain in seconds", "established",
          "Each dose activates and then desensitizes α4β2 receptors. Dosing many times a day keeps them desensitized, and the brain responds by building more of them. That upregulation is what makes the first dose after a gap feel so rewarding and the gaps feel so bad. Slow delivery (a patch) produces little reward and little craving, which is why the patch is the hardest form to misuse."],
        ["Tolerance within the day", "moderate", "Acute tolerance builds within hours, so later doses in the day produce less effect. Higher and more frequent dosing mostly maintains effect and relieves withdrawal rather than adding benefit", "established",
          "This is the core problem with chasing the cognitive effect. In regular users, much of the apparent boost from a dose is reversal of overnight or between-dose withdrawal. Raising the dose or frequency buys mainly more dependence."],
        ["Heart and blood vessels", "moderate", "Raises heart rate and blood pressure and narrows blood vessels, in proportion to dose. Replacement-level doses did not raise major cardiac events in large trials, but sustained high intake has not been shown to be safe", "human rct",
          "The sympathetic effects add up across doses taken through the day. People with coronary disease, arrhythmia or uncontrolled blood pressure carry the most risk."],
        ["Blood sugar", "low", "Chronic exposure reduces insulin sensitivity", "human obs"],
        ["Pregnancy and adolescence", "high", "Harms fetal development and affects the developing adolescent brain, which is more sensitive to dependence", "established"],
        ["Acute poisoning", "moderate", "Nausea, vomiting, sweating and a racing heart signal too much. E-liquid swallowed by children is the most dangerous exposure", "established",
          "The old 60 mg lethal-dose figure is unreliable; the true adult lethal dose is likely far higher, in the region of 500 mg or more. Concentrated e-liquid can still contain that much."],
        ["Sleep", "low", "Disrupts sleep, especially doses taken in the evening or a patch worn overnight, which also causes vivid dreams", "established"],
        ["Mouth (pouches, gum)", "low", "Local irritation and gum recession at the placement site are reported", "human obs"]],
    a: [["α4β2 nicotinic receptor", "established", "High-affinity agonist on dopamine neurons of the reward circuit. This is the receptor behind reward and dependence"],
        ["α7 nicotinic receptor", "established", "Low-affinity agonist. Involved in attention and sensory gating"],
        ["Dopamine and noradrenaline release", "established", "Releases dopamine in the reward circuit and adrenaline from the adrenal glands, which explains the alertness, raised heart rate and appetite suppression"],
        ["Attention and fine motor speed", "human rct", "A meta-analysis of 41 controlled studies found reliable acute improvements in fine motor speed, alerting and orienting attention, and short-term and working memory", "The analysis was restricted to non-smokers and minimally deprived smokers, so the effects are not simply relief of withdrawal. The effects were small to moderate."],
        ["Metabolic rate and appetite", "established", "Raises energy expenditure and suppresses appetite, which is why quitting is followed by weight gain"],
        ["Ulcerative colitis", "human rct", "Transdermal nicotine improved active ulcerative colitis in a randomized trial, mirroring the lower rate of the disease in smokers", "Side effects limited its use, and it is not a standard treatment."]],
    t: [
      { title: "Meta-analysis of acute effects on performance", evidence: "human rct", meta: ["41 double-blind, placebo-controlled studies", "nicotine by patch, gum, spray or injection, or smoking", "non-smokers and minimally deprived smokers", "meta-analysis"], body: "Nicotine improved fine motor speed, alerting and orienting attention, short-term episodic memory and working memory, with small to moderate effects. Several other cognitive domains showed no effect.", note: "This is the strongest evidence for a direct positive effect that is not just withdrawal relief. It describes single doses, not regular daily use.", refs: [120] },
      { title: "Transdermal nicotine in mild cognitive impairment", evidence: "human rct", meta: ["74 non-smoking adults with amnestic mild cognitive impairment", "nicotine patch 15 mg a day, or placebo", "6 months", "randomized, double-blind, placebo-controlled pilot"], body: "Attention improved on the primary measure, with gains in memory and processing speed. Clinician-rated global impression did not improve. It was given safely to non-smokers for 6 months.", note: "A pilot, so the effect still needs confirming in a larger trial.", refs: [121] },
      { title: "Transdermal nicotine in early Parkinson's disease", evidence: "human rct", meta: ["163 people with early, untreated Parkinson's disease", "transdermal nicotine or placebo", "52 weeks of treatment plus 8 weeks of washout", "randomized, double-blind, placebo-controlled, multicentre"], body: "Nicotine did not slow progression. Symptom scores worsened somewhat more with nicotine than with placebo (6.0 against 3.5 points on the primary measure, a difference just short of significance). Skin reactions at the patch site were common.", note: "Smokers get Parkinson's less often, but this trial did not show that nicotine is the reason, or that it helps once the disease has started.", refs: [124] },
      { title: "Transdermal nicotine in active ulcerative colitis", evidence: "human rct", meta: ["72 patients with active ulcerative colitis", "nicotine patch, mostly tolerated at 15–25 mg a day, or placebo", "6 weeks", "randomized, double-blind, placebo-controlled"], body: "17 of 35 patients on nicotine went into complete remission, against 9 of 37 on placebo. Nausea, lightheadedness and tremor were common, especially in non-smokers.", refs: [122] },
      { title: "Cardiovascular safety of nicotine patch, varenicline and bupropion", evidence: "human rct", meta: ["about 8,000 smokers in the EAGLES trial and its extension", "nicotine patch, varenicline, bupropion or placebo", "12 weeks of treatment, 52 weeks of follow-up", "randomized, double-blind"], body: "None of the three treatments significantly raised the rate of major cardiovascular events compared with placebo.", note: "This describes replacement-level doses in people quitting smoking, not heavy recreational use.", refs: [118] }
    ],
    k: [["Route", "Inhaled (smoke or vapor), oral (gum, lozenge, pouch), transdermal, nasal"], ["Time to brain", "About 10–20 seconds inhaled; minutes for gum, lozenge or pouch; hours for a patch"], ["Oral bioavailability", "About 20–45% if swallowed, because of first-pass metabolism; buccal absorption avoids most of this"], ["Half-life", "About 2 hours (nicotine); about 16 hours (cotinine, its main metabolite)"], ["Metabolism", "Liver, mainly CYP2A6 to cotinine. Slow CYP2A6 metabolizers smoke less and find quitting easier"], ["Excretion", "Urine, mostly as metabolites; faster in acidic urine"]], ke: "established", kr: [107],
    related: ["varenicline", "cytisine", "bupropion", "quitting-nicotine-tropisetron", "tropisetron"] });

  /* ------------------------------------------------------------ varenicline */
  add({ slug: "varenicline", name: "Varenicline", aliases: ["Chantix", "Champix", "Tyrvaya"], category: "dependence", status: "Approved",
    class: "α4β2 nicotinic receptor partial agonist", developer: "Pfizer (approved 2006)",
    tags: ["smoking cessation", "α4β2", "partial agonist", "nicotine"],
    summary: "The most effective single quit-smoking medicine. It partly stimulates nicotine's main addiction receptor to blunt withdrawal, and occupies it so that nicotine produces less reward. It was modelled on cytisine.",
    names: "Sold as Chantix in the US and Champix elsewhere, and as generics. Pfizer withdrew branded Chantix in 2021 after finding a nitrosamine impurity (N-nitroso-varenicline) above the acceptable limit. Generics meeting the limit remain available. A nasal spray (Tyrvaya) is approved for dry eye, an unrelated use.",
    structure: "C<sub>13</sub>H<sub>13</sub>N<sub>3</sub>, about 211.3 g/mol, usually as the tartrate salt. A rigid, synthetic analog designed from the cytisine scaffold.",
    pubchem: "varenicline",
    pnote: cessNote,
    p: [["Quit rate vs placebo", 5], ["Withdrawal relief", 4], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [["Nausea", "moderate", "Affects about 30% of users. Usually mild, and reduced by taking it after food with a full glass of water and by the gradual start", "human rct"],
        ["Sleep and dreams", "low", "Insomnia and vivid or abnormal dreams are common", "human rct"],
        ["Psychiatric effects", "low", "The 2009 boxed warning on mood and suicidal behavior was removed in 2016, after the EAGLES trial found no significant rise in serious psychiatric events against placebo, including in people with psychiatric illness", "human rct", "Mood changes during a quit attempt are common whatever is used, because nicotine withdrawal itself lowers mood."],
        ["Serious adverse events", "low", "Reported slightly more often than with placebo in pooled trials (risk ratio 1.23). The data on cardiac events specifically are too imprecise to show a difference either way", "human rct"],
        ["Alcohol", "low", "The label warns of reduced tolerance to alcohol, with unusual or aggressive behavior in some reports", "established"],
        ["Kidney", "low", "Cleared almost entirely unchanged by the kidneys, so the dose is reduced in severe kidney impairment", "established"],
        ["Seizures", "low", "Rare reports, mostly in people with risk factors", "established"]],
    a: [["α4β2 nicotinic receptor", "established", "Partial agonist with very high affinity. It releases some dopamine, which eases craving and withdrawal, and blocks nicotine from producing a full response"],
        ["α7 nicotinic receptor", "in vitro", "Full agonist at α7, but at much lower affinity, so this action is small at clinical doses"]],
    t: [
      { title: "Varenicline against bupropion and placebo", evidence: "human rct", meta: ["1,025 adult smokers", "varenicline 1 mg twice daily, bupropion SR 150 mg twice daily, or placebo", "12 weeks of treatment, 52 weeks of follow-up", "randomized, double-blind, placebo-controlled"], body: "Continuous abstinence over weeks 9 to 12 was 44% with varenicline, 30% with bupropion and 18% with placebo. Nausea affected 28% on varenicline. Over weeks 9 to 52, varenicline still beat placebo (21.9% against 8.4%), but its lead over bupropion (16.1%) fell just short of significance.", refs: [117] },
      { title: "EAGLES: neuropsychiatric safety and efficacy", evidence: "human rct", meta: ["8,144 smokers, about half with a psychiatric diagnosis", "varenicline, bupropion, nicotine patch or placebo", "12 weeks of treatment, 24 weeks of follow-up", "randomized, double-blind, double-dummy"], body: "Varenicline produced the highest abstinence rates of the four arms. Serious neuropsychiatric events were not significantly more frequent with varenicline or bupropion than with placebo.", refs: [109] },
      { title: "Cochrane review of receptor partial agonists", evidence: "human rct", meta: ["75 randomized trials", "varenicline and cytisine against placebo and other treatments", "at least 6 months of follow-up", "systematic review and meta-analysis"], body: "High-certainty evidence that varenicline more than doubles long-term quit rates against placebo (risk ratio 2.32) and beats bupropion (1.36) and single-form nicotine replacement (1.25). It showed no clear difference from combination nicotine replacement. Serious adverse events were reported slightly more often than with placebo (risk ratio 1.23, moderate certainty), and the evidence on cardiac and psychiatric events specifically was too imprecise to settle either way. Cytisine also beat placebo, and in two head-to-head trials varenicline was slightly ahead, though not clearly.", refs: [108] }
    ],
    k: [["Route", "Oral tablet"], ["Bioavailability", "Over 90%, unaffected by food"], ["Time to peak", "About 3–4 hours"], ["Half-life", "About 24 hours"], ["Steady state", "About 4 days"], ["Metabolism", "Minimal; no meaningful CYP involvement, so few drug interactions"], ["Excretion", "About 92% unchanged in urine"]], ke: "established", kr: [112],
    related: ["cytisine", "nicotine", "bupropion", "quitting-nicotine-tropisetron"] });

  /* ------------------------------------------------------------ cytisine */
  add({ slug: "cytisine", name: "Cytisine", aliases: ["Cytisinicline", "Tabex", "Desmoxan", "Recigarum"], category: "dependence", status: "Approved",
    class: "α4β2 nicotinic receptor partial agonist", developer: "Sopharma, Bulgaria (marketed 1964); Achieve Life Sciences (US development as cytisinicline)",
    tags: ["smoking cessation", "α4β2", "partial agonist", "plant alkaloid", "nicotine"],
    summary: "A plant alkaloid that works the same way as varenicline and was its template. It has been used to quit smoking in Eastern Europe since the 1960s, costs a fraction of varenicline, and performed at least as well as nicotine replacement in a head-to-head trial.",
    names: "Sold as Tabex and Desmoxan in Central and Eastern Europe, as cytisinicline 1.5 mg tablets in the UK, and approved in Canada and several other countries. In the US it is in development as cytisinicline; a new drug application was filed in 2025, so check its current FDA status. The \"Approved\" status refers to approval outside the US.",
    structure: "C<sub>11</sub>H<sub>14</sub>N<sub>2</sub>O, about 190.2 g/mol. Extracted from the seeds of the golden rain tree (<i>Laburnum anagyroides</i>), which is poisonous because of it.",
    pubchem: "cytisine",
    pnote: cessNote,
    p: [["Quit rate vs placebo", 4], ["Withdrawal relief", 3], ["Risk load", 1, 1], ["Evidence quality", 4]],
    r: [["Stomach upset", "low", "Nausea, stomach upset and dry mouth, generally milder than with varenicline", "human rct"],
        ["Sleep", "low", "Sleep disturbance and abnormal dreams", "human rct"],
        ["Short half-life schedule", "low", "The traditional course needs dosing up to six times a day, and missed doses are common", "established"]],
    a: [["α4β2 nicotinic receptor", "established", "Partial agonist with high affinity, the same mechanism as varenicline"]],
    t: [
      { title: "Cytisine against placebo", evidence: "human rct", meta: ["740 smokers in Poland", "standard 25-day Tabex course, or placebo, with minimal counseling", "12 months", "randomized, double-blind, placebo-controlled"], body: "Sustained 12-month abstinence was 8.4% with cytisine against 2.4% with placebo.", refs: [119] },
      { title: "Cytisine against nicotine replacement", evidence: "human rct", meta: ["1,310 smokers in New Zealand", "25 days of cytisine or 8 weeks of nicotine replacement, both with phone support", "6 months", "randomized, open-label, non-inferiority"], body: "Continuous abstinence at one month was 40% with cytisine and 31% with nicotine replacement, meeting the test for non-inferiority and suggesting it may be better. Mild nausea, vomiting and sleep disturbance were more common with cytisine.", refs: [110] },
      { title: "ORCA-2: cytisinicline", evidence: "human rct", meta: ["810 adult smokers in the US", "cytisinicline 3 mg three times daily for 6 or 12 weeks, or placebo", "24 weeks", "randomized, double-blind, placebo-controlled"], body: "Both courses beat placebo on biochemically verified abstinence. With the 12-week course, 32.6% were abstinent over weeks 9 to 12 against 7.0% with placebo, and 21.1% against 4.8% through week 24. Tolerability was good.", note: "Uses a simpler three-times-daily schedule than the traditional Tabex course.", refs: [111] }
    ],
    k: [["Route", "Oral tablet"], ["Time to peak", "About 1–2 hours"], ["Half-life", "About 4.8 hours"], ["Metabolism", "Minimal"], ["Excretion", "Mostly unchanged in urine"]], ke: "human rct",
    related: ["varenicline", "nicotine", "quitting-nicotine-tropisetron"] });

  /* ------------------------------------------------------------ bupropion */
  add({ slug: "bupropion", name: "Bupropion", aliases: ["Wellbutrin", "Zyban", "Aplenzin", "Contrave (with naltrexone)", "Auvelity (with dextromethorphan)"], category: "dependence", status: "Approved",
    class: "Norepinephrine-dopamine reuptake inhibitor (NDRI) and nicotinic antagonist", developer: "Burroughs Wellcome (approved 1985)",
    tags: ["antidepressant", "smoking cessation", "NDRI", "ADHD off-label", "CYP2D6 inhibitor", "seizures"],
    summary: "An antidepressant that is also an approved quit-smoking drug and an off-label ADHD treatment. It raises dopamine and noradrenaline, does not cause the sexual side effects of SSRIs, and strongly blocks the enzyme CYP2D6, which changes how several other drugs, amphetamine included, are cleared.",
    names: "Sold as Wellbutrin (SR, XL) for depression and seasonal depression, and as Zyban for quitting smoking; they are the same drug. It is combined with naltrexone as Contrave for weight loss and with dextromethorphan as Auvelity for depression. It is used off-label for ADHD.",
    structure: "C<sub>13</sub>H<sub>18</sub>ClNO, about 239.7 g/mol. A substituted cathinone, chemically related to amphetamine. It is extensively converted to active metabolites, mainly hydroxybupropion, which circulate at higher levels than the parent drug.",
    pubchem: "bupropion",
    pnote: "Scored against the other quit-smoking medicines; the ADHD row is scored against the ADHD medicines.",
    p: [["Quit rate vs placebo", 3], ["ADHD effect (off-label)", 2], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [["Seizures", "moderate", "Dose-related. About 0.1% at up to 300 mg a day of the SR form, rising to about 0.4% at up to 400 mg. The label limits the dose to 300 mg for quitting smoking and 450 mg for depression. It is not used with eating disorders, seizure disorders or abrupt alcohol or sedative withdrawal", "established",
          "The label also lists stimulant use and misuse among the risk factors. That matters for anyone combining it with amphetamine or other stimulants."],
        ["CYP2D6 inhibition", "high", "A strong CYP2D6 inhibitor. It raises levels of amphetamine, atomoxetine, tropisetron, many antidepressants and antipsychotics, metoprolol and others, and blocks the conversion of codeine and tramadol to their active forms", "established",
          "The effect builds over a week or two and lasts a similar time after stopping. Atomoxetine levels can rise several-fold, which is why atomoxetine is started low alongside it."],
        ["Combining with amphetamine", "moderate", "Bupropion raises amphetamine exposure through CYP2D6, and both raise dopamine and noradrenaline. The effects on heart rate, blood pressure, sleep, anxiety, appetite and seizure risk add up. The combination is used clinically, but it has not been tested in a controlled trial", "established",
          "This is the sense in which one \"potentiates\" the other. It is not a synergy that has been shown to improve outcomes; it is a known interaction that increases exposure. The Adderall XR label says the combination may increase amphetamine exposure and risk, and advises considering an alternative drug that does not inhibit CYP2D6."],
        ["Insomnia, anxiety, dry mouth", "low", "Common, especially early on and with doses taken late in the day", "human rct"],
        ["Blood pressure", "low", "Can raise it, particularly when combined with nicotine replacement", "human rct"],
        ["Mood and suicidality", "low", "Carries the antidepressant class boxed warning for young people. EAGLES found no significant rise in serious neuropsychiatric events in adults quitting smoking", "human rct"]],
    a: [["Dopamine and noradrenaline transporters", "established", "Weak reuptake inhibitor of both. Its metabolite hydroxybupropion carries much of the noradrenergic effect"],
        ["Nicotinic receptors", "in vitro", "Non-competitive antagonist at several nicotinic subtypes, including α4β2 and α3β4, which may add to its effect on quitting"],
        ["CYP2D6", "established", "Strong inhibitor of the enzyme, through the parent drug and its metabolites"],
        ["Adult ADHD", "human rct", "Improved ADHD symptoms against placebo in a controlled trial, with smaller effects than stimulants"]],
    t: [
      { title: "Bupropion in adult ADHD", evidence: "human rct", meta: ["40 adults with ADHD", "bupropion SR up to 200 mg twice daily, or placebo", "6 weeks", "randomized, double-blind, placebo-controlled"], body: "76% improved with bupropion against 37% with placebo, on clinician-rated ADHD symptoms.", note: "Small. In network meta-analysis of adults, its effect was below amphetamines and about level with methylphenidate and atomoxetine.", refs: [140] },
      { title: "Bupropion against varenicline and placebo", evidence: "human rct", meta: ["1,025 adult smokers", "bupropion SR 150 mg twice daily, varenicline or placebo", "12 weeks of treatment, 52 weeks of follow-up", "randomized, double-blind, placebo-controlled"], body: "Bupropion beat placebo (30% against 18% continuous abstinence at weeks 9 to 12) but was less effective than varenicline.", refs: [117] }
    ],
    k: [["Route", "Oral (IR, SR or XL tablets)"], ["Time to peak", "About 2 hours (IR), 3 hours (SR), 5 hours (XL)"], ["Half-life", "About 21 hours (bupropion); about 20 hours (hydroxybupropion), longer for other metabolites"], ["Steady state", "About 8 days"], ["Metabolism", "Liver, mainly CYP2B6 to hydroxybupropion"], ["Excretion", "Urine, as metabolites"]], ke: "established", kr: [132],
    related: ["amphetamine", "varenicline", "nicotine", "atomoxetine", "naltrexone", "tropisetron"] });

  /* ------------------------------------------------------------ amphetamine */
  add({ slug: "amphetamine", name: "Amphetamine (Adderall)", aliases: ["Adderall", "Adderall XR", "Mydayis", "Dextroamphetamine", "Dexedrine", "Evekeo", "Mixed amphetamine salts"], category: "adhd", status: "Approved",
    class: "Stimulant: dopamine and noradrenaline releaser", developer: "Smith, Kline & French (Benzedrine, 1930s); Adderall 1996",
    tags: ["ADHD", "stimulant", "Schedule II", "narcolepsy", "dopamine", "TAAR1", "CYP2D6"],
    summary: "The most prescribed ADHD stimulant in the US, and one of the most effective drugs for ADHD symptoms in adults. Unlike methylphenidate, it actively pushes dopamine and noradrenaline out of nerve endings rather than only blocking their reuptake. That is part of why it is stronger, and why misuse at high doses is more harmful.",
    names: "Adderall is a mixture of four amphetamine salts, about 3 parts dextro- to 1 part levo-amphetamine. Dexedrine and Zenzedi are dextroamphetamine alone. Mydayis is a 16-hour form. Approved for ADHD and narcolepsy. Schedule II in the US.",
    structure: "α-methylphenethylamine. C<sub>9</sub>H<sub>13</sub>N, about 135.2 g/mol. The dextro (d-) isomer is several times more potent on dopamine; the levo (l-) isomer has relatively more noradrenergic and peripheral effect, which slightly lengthens the effect of Adderall compared with pure dextroamphetamine.",
    pubchem: "amphetamine",
    pnote: adhdNote,
    p: [["ADHD symptom control (adults)", 5], ["Cognition in healthy people", 2], ["Dependence potential", 4, 1], ["Risk load", 3, 1], ["Evidence quality", 5]],
    r: [sched2, stimCardio, stimPsych,
        ["Appetite and weight", "moderate", "Appetite loss is the most common side effect, with weight loss and, in children, a small reduction in height gain", "human rct"],
        ["Sleep", "moderate", "Insomnia, especially with long-acting forms or late doses", "human rct"],
        ["CYP2D6 inhibitors", "moderate", "Bupropion, fluoxetine and paroxetine can raise amphetamine exposure. The label warns of increased risk, including serotonin syndrome, and advises considering an alternative drug that does not inhibit CYP2D6", "established",
          "Bupropion also adds its own dopamine, blood pressure and seizure effects. See the <a href=\"entry.html?slug=bupropion\">bupropion entry</a>."],
        ["MAO inhibitors", "high", "Contraindicated within 14 days of an MAO inhibitor because of the risk of a hypertensive crisis", "established"],
        ["High doses", "high", "Doses far above the label range, and snorting or injecting, cause hypertension, arrhythmia, hyperthermia, psychosis and, with repeated binges, dopamine nerve terminal damage in animals", "established"]],
    a: [["Dopamine and noradrenaline release", "established", "Enters nerve endings through the transporters, displaces dopamine and noradrenaline from storage vesicles via VMAT2, and reverses the transporters so they pump transmitter out"],
        ["TAAR1", "in vitro", "Activates the trace amine receptor TAAR1, which contributes to transporter reversal"],
        ["ADHD efficacy", "human rct", "In a large network meta-analysis, amphetamines were the most effective drug class for core ADHD symptoms in adults"],
        ["Healthy cognition", "human rct", "In people without ADHD, effects on memory and inhibition are small, and much of the perceived benefit is in motivation and confidence"]],
    t: [
      { title: "Network meta-analysis of ADHD medicines", evidence: "human rct", meta: ["133 double-blind randomized trials; efficacy data on about 10,000 children and adolescents and 8,000 adults", "amphetamines, methylphenidate, atomoxetine, guanfacine, clonidine, bupropion, modafinil", "about 12 weeks", "systematic review and network meta-analysis"], body: "All medicines beat placebo in children. In adults, amphetamines had the largest effect on clinician-rated symptoms. The authors recommended methylphenidate first in children and amphetamines first in adults, balancing efficacy against tolerability.", refs: [133] },
      { title: "Stimulants in healthy people", evidence: "human rct", meta: ["48 studies, 1,409 healthy participants", "amphetamine or methylphenidate, or placebo", "meta-analysis"], body: "There were small but significant effects on inhibitory control and short-term episodic memory. Effects on working memory were small and significant in only one of two analyses. The authors suggest healthy users may be getting more energy and motivation than cognition.", note: "Far smaller than users typically expect.", refs: [143] },
      { title: "Psychosis with amphetamine or methylphenidate", evidence: "human obs", meta: ["221,846 patients aged 13–25 starting a stimulant for ADHD", "amphetamine or methylphenidate", "US insurance claims cohort"], body: "New psychosis occurred in about 1 in 660 patients: 0.21% with amphetamine against 0.10% with methylphenidate, a hazard ratio of 1.65.", refs: [137] },
      { title: "Long-term use and cardiovascular disease", evidence: "human obs", meta: ["278,027 people with ADHD in Sweden", "cumulative ADHD medicine use", "up to 14 years", "nested case-control study"], body: "Each additional year of use was linked to about a 4% higher cardiovascular risk, mainly hypertension and arterial disease, with the largest increase in the first three years.", refs: [136] }
    ],
    k: [["Route", "Oral (IR tablet, XR capsule)"], ["Bioavailability", "Over 75%"], ["Time to peak", "About 3 hours (IR); about 7 hours (XR)"], ["Half-life", "About 10 hours (d-amphetamine); about 13 hours (l-amphetamine), shorter in children"], ["Metabolism", "Liver, partly CYP2D6 (4-hydroxylation) and deamination"], ["Excretion", "Urine; strongly pH-dependent. Acidic urine speeds removal, and alkaline urine (antacids, sodium bicarbonate) prolongs it"]], ke: "established", kr: [125],
    related: ["lisdexamfetamine", "methylphenidate", "bupropion", "atomoxetine", "modafinil"] });

  /* ------------------------------------------------------------ lisdexamfetamine */
  add({ slug: "lisdexamfetamine", name: "Lisdexamfetamine", aliases: ["Vyvanse", "Elvanse", "Tyvense"], category: "adhd", status: "Approved",
    class: "Stimulant prodrug of dextroamphetamine", developer: "New River Pharmaceuticals / Shire (approved 2007)",
    tags: ["ADHD", "stimulant", "prodrug", "Schedule II", "binge eating disorder"],
    summary: "Dextroamphetamine bound to the amino acid lysine. It is inactive until enzymes in red blood cells cut it free, which gives a smooth, long effect and makes snorting or injecting it pointless. It is also the only drug approved for binge eating disorder.",
    names: "Sold as Vyvanse in the US and Elvanse in Europe, with generics from 2023. Approved for ADHD from age 6 and for moderate to severe binge eating disorder in adults. Schedule II.",
    structure: "L-lysine-d-amphetamine. C<sub>15</sub>H<sub>25</sub>N<sub>3</sub>O, about 263.4 g/mol, as the dimesylate salt. Each 70 mg of lisdexamfetamine dimesylate releases about 20.8 mg of dextroamphetamine base.",
    pubchem: "lisdexamfetamine",
    pnote: adhdNote,
    p: [["ADHD symptom control (adults)", 5], ["Smoothness / duration", 5], ["Dependence potential", 3, 1], ["Risk load", 3, 1], ["Evidence quality", 5]],
    r: [sched2, stimCardio, stimPsych,
        ["Appetite and weight", "moderate", "Appetite loss and weight loss, which is part of why it works for binge eating", "human rct"],
        ["Sleep", "moderate", "Insomnia if taken late; the effect lasts 12–14 hours", "human rct"],
        ["Interactions", "moderate", "The same as amphetamine once converted: MAO inhibitors are contraindicated, and CYP2D6 inhibitors such as bupropion raise exposure", "established"]],
    a: [["Prodrug conversion", "established", "Hydrolyzed by enzymes in red blood cells into dextroamphetamine and lysine. Conversion speed, not the gut, sets the rate, so the effect starts gradually and is the same whether swallowed or not"],
        ["Dopamine and noradrenaline release", "established", "Identical to dextroamphetamine once released"],
        ["Abuse deterrence", "human rct", "Snorting or injecting produced no faster or stronger effect than swallowing, unlike immediate-release amphetamine. Oral overdose still produces stimulant effects"]],
    t: [], noTrials: "Approval rests on randomized controlled trials in children, adolescents and adults with ADHD, and in adults with binge eating disorder. Its efficacy in network meta-analyses matches that of other amphetamines.", noTrialsRefs: [133],
    k: [["Route", "Oral capsule or chewable tablet"], ["Bioavailability", "About 96% as dextroamphetamine"], ["Time to peak", "About 1 hour (lisdexamfetamine); about 3.5 hours (dextroamphetamine)"], ["Half-life", "Under 1 hour (prodrug); about 10–12 hours (dextroamphetamine)"], ["Duration of effect", "About 12–14 hours"], ["Metabolism", "Red blood cell hydrolysis; dextroamphetamine then as for amphetamine"], ["Excretion", "Urine"]], ke: "established", kr: [126],
    related: ["amphetamine", "methylphenidate", "atomoxetine"] });

  /* ------------------------------------------------------------ methylphenidate */
  add({ slug: "methylphenidate", name: "Methylphenidate", aliases: ["Ritalin", "Concerta", "Focalin", "Dexmethylphenidate", "Medikinet", "Daytrana", "Jornay PM"], category: "adhd", status: "Approved",
    class: "Stimulant: dopamine and noradrenaline reuptake inhibitor", developer: "Ciba (synthesized 1944; Ritalin 1955)",
    tags: ["ADHD", "stimulant", "Schedule II", "DAT", "NET", "narcolepsy"],
    summary: "The most studied ADHD medicine and the first choice for children in most guidelines. It blocks the reuptake of dopamine and noradrenaline without forcing their release, which makes it a little less potent than amphetamine and a little less likely to cause psychosis.",
    names: "Ritalin is the immediate-release form; Concerta is a 12-hour osmotic tablet; Focalin is dexmethylphenidate, the active d-isomer alone at half the dose; Daytrana is a patch. Approved for ADHD and, in some countries, narcolepsy. Schedule II in the US.",
    structure: "Methyl phenyl(piperidin-2-yl)acetate. C<sub>14</sub>H<sub>19</sub>NO<sub>2</sub>, about 233.3 g/mol. Most forms are racemic d,l-threo-methylphenidate; the d-isomer carries nearly all of the activity.",
    pubchem: "methylphenidate",
    pnote: adhdNote,
    p: [["ADHD symptom control (children)", 5], ["ADHD symptom control (adults)", 4], ["Dependence potential", 3, 1], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [sched2, stimCardio,
        ["Psychosis", "low", "Rare: about 0.10% of young patients in a large cohort, against 0.21% with amphetamine", "human obs"],
        ["Appetite, sleep, headache", "moderate", "The most common side effects", "human rct"],
        ["Alcohol", "low", "Alcohol converts it to ethylphenidate and raises methylphenidate levels, and can make extended-release forms release faster", "established"],
        ["MAO inhibitors", "high", "Contraindicated within 14 days of an MAO inhibitor", "established"]],
    a: [["Dopamine and noradrenaline transporters", "established", "Blocks reuptake by DAT and NET, raising both transmitters in the prefrontal cortex and striatum"],
        ["ADHD efficacy", "human rct", "Effective in children, adolescents and adults. Guidelines rank it first in children for its balance of effect and tolerability"]],
    t: [
      { title: "MTA: the Multimodal Treatment Study of ADHD", evidence: "human rct", meta: ["579 children aged 7–9 with ADHD", "carefully managed medication (mostly methylphenidate), intensive behavioral treatment, the combination, or community care", "14 months", "randomized, multisite"], body: "Carefully managed medication beat both behavioral treatment alone and community care on core ADHD symptoms. Adding behavioral treatment gave modest extra benefit for some outcomes.", note: "Long-term follow-up found the groups converged over the following years, a reminder that adherence and dose management matter.", refs: [134] },
      { title: "Network meta-analysis of ADHD medicines", evidence: "human rct", meta: ["133 double-blind randomized trials", "all main ADHD medicines", "systematic review and network meta-analysis"], body: "Methylphenidate was effective in all age groups and was the recommended first choice in children. In adults it was effective but somewhat less so than amphetamines.", refs: [133] }
    ],
    k: [["Route", "Oral (IR, extended-release), transdermal patch"], ["Bioavailability", "About 30% (extensive first-pass), variable"], ["Time to peak", "About 2 hours (IR); about 6–8 hours (Concerta)"], ["Half-life", "About 2–3 hours"], ["Duration of effect", "3–4 hours (IR); up to 12 hours (Concerta)"], ["Metabolism", "Carboxylesterase CES1 to inactive ritalinic acid; not CYP-dependent"], ["Excretion", "Urine, mostly as ritalinic acid"]], ke: "established", kr: [127],
    related: ["amphetamine", "lisdexamfetamine", "atomoxetine", "modafinil"] });

  /* ------------------------------------------------------------ atomoxetine */
  add({ slug: "atomoxetine", name: "Atomoxetine", aliases: ["Strattera"], category: "adhd", status: "Approved",
    class: "Non-stimulant: selective noradrenaline reuptake inhibitor", developer: "Eli Lilly (approved 2002)",
    tags: ["ADHD", "non-stimulant", "NET", "CYP2D6", "not controlled"],
    summary: "The first non-stimulant approved for ADHD. It is not a controlled substance and has essentially no misuse potential, but it takes several weeks to work fully and is less effective on average than stimulants. Its levels depend heavily on CYP2D6, which makes bupropion a significant interaction.",
    names: "Sold as Strattera and generics. Approved for ADHD in children from 6 and in adults. Not a controlled substance.",
    structure: "C<sub>17</sub>H<sub>21</sub>NO, about 255.4 g/mol, as the hydrochloride. The R-enantiomer of a tomoxetine scaffold; structurally related to fluoxetine.",
    pubchem: "atomoxetine",
    pnote: adhdNote,
    p: [["ADHD symptom control", 3], ["Dependence potential", 1, 1], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [["Suicidal thinking", "moderate", "Boxed warning for suicidal ideation in children and adolescents, seen in about 0.4% against none with placebo in pooled trials", "human rct"],
        ["CYP2D6", "moderate", "Poor CYP2D6 metabolizers, and people taking strong inhibitors such as bupropion, fluoxetine or paroxetine, reach about 5 to 10 times the exposure. The label sets a slower titration for them", "established"],
        ["Liver", "low", "Rare severe liver injury has been reported", "established"],
        ["Heart rate and blood pressure", "low", "Small increases, similar to stimulants", "human rct"],
        ["Stomach, appetite, sedation", "moderate", "Nausea, reduced appetite and tiredness are common early", "human rct"],
        ["Sexual and urinary", "low", "Erectile problems and urinary hesitancy in adults", "human rct"]],
    a: [["Noradrenaline transporter", "established", "Selective NET blocker. In the prefrontal cortex, where dopamine is also cleared by NET, it raises dopamine too, but not in the reward circuit, which is why it is not addictive"]],
    t: [], noTrials: "Approval rests on placebo-controlled trials in children and adults. In network meta-analysis it was effective, below amphetamines in adults and about level with methylphenidate.", noTrialsRefs: [133],
    k: [["Route", "Oral capsule"], ["Bioavailability", "About 63% (extensive metabolizers); 94% (poor metabolizers)"], ["Time to peak", "About 1–2 hours"], ["Half-life", "About 5 hours (extensive CYP2D6 metabolizers); about 22 hours (poor metabolizers)"], ["Onset of full effect", "Several weeks"], ["Metabolism", "Liver, CYP2D6"], ["Excretion", "Urine"]], ke: "established", kr: [128],
    related: ["viloxazine", "guanfacine", "methylphenidate", "bupropion"] });

  /* ------------------------------------------------------------ viloxazine */
  add({ slug: "viloxazine", name: "Viloxazine", aliases: ["Qelbree", "Vivalan"], category: "adhd", status: "Approved",
    class: "Non-stimulant: noradrenaline reuptake inhibitor with serotonergic activity", developer: "ICI (antidepressant, 1970s); Supernus (ADHD, approved 2021)",
    tags: ["ADHD", "non-stimulant", "NET", "CYP1A2 inhibitor", "not controlled"],
    summary: "An old European antidepressant revived as a once-daily non-stimulant for ADHD. It works faster than atomoxetine in some patients and is not controlled, but it strongly blocks CYP1A2, which raises caffeine and several other drugs.",
    names: "Sold in Europe as the antidepressant Vivalan from the 1970s until it was withdrawn for commercial reasons. Approved in the US as Qelbree for ADHD in children from 6 (2021) and adults (2022). Not a controlled substance.",
    structure: "C<sub>13</sub>H<sub>19</sub>NO<sub>3</sub>, about 237.3 g/mol. A morpholine derivative.",
    pubchem: "viloxazine",
    pnote: adhdNote,
    p: [["ADHD symptom control", 3], ["Dependence potential", 1, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Suicidal thinking", "moderate", "Boxed warning for suicidal thoughts and behavior", "human rct"],
        ["CYP1A2 inhibition", "moderate", "A strong CYP1A2 inhibitor. It is contraindicated with tizanidine and theophylline and markedly raises caffeine levels", "established"],
        ["Sleepiness, appetite, nausea", "moderate", "The most common side effects", "human rct"],
        ["Heart rate and blood pressure", "low", "Small increases", "human rct"]],
    a: [["Noradrenaline transporter", "established", "Moderate NET inhibitor"], ["Serotonin receptors", "in vitro", "5-HT2B antagonist and 5-HT2C agonist activity, which may contribute to its effect"]],
    t: [], noTrials: "Approval rests on four phase 3 placebo-controlled trials in children and adolescents and one in adults.",
    k: [["Route", "Oral extended-release capsule (can be sprinkled)"], ["Time to peak", "About 5 hours"], ["Half-life", "About 7 hours"], ["Metabolism", "Liver, CYP2D6, UGT1A9 and UGT2B15"], ["Excretion", "Urine"]], ke: "established", kr: [129],
    related: ["atomoxetine", "guanfacine"] });

  /* ------------------------------------------------------------ guanfacine */
  add({ slug: "guanfacine", name: "Guanfacine", aliases: ["Intuniv", "Tenex"], category: "adhd", status: "Approved",
    class: "Non-stimulant: α2A-adrenergic receptor agonist", developer: "Sandoz (Tenex, for hypertension, 1986); Shire (Intuniv, 2009)",
    tags: ["ADHD", "non-stimulant", "α2A", "blood pressure", "not controlled"],
    summary: "A blood pressure drug that strengthens prefrontal signaling through α2A receptors. The extended-release form is approved for ADHD in children and adolescents, alone or added to a stimulant. It sedates rather than stimulates, and it must not be stopped suddenly.",
    names: "Immediate-release guanfacine (Tenex) is approved for hypertension. Extended-release guanfacine (Intuniv) is approved in the US for ADHD from 6 to 17, alone or with a stimulant; it is used off-label in adults. Not a controlled substance.",
    structure: "C<sub>9</sub>H<sub>9</sub>Cl<sub>2</sub>N<sub>3</sub>O, about 246.1 g/mol.",
    pubchem: "guanfacine",
    pnote: adhdNote,
    p: [["ADHD symptom control", 3], ["Dependence potential", 1, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Low blood pressure and heart rate", "moderate", "Lowers both, with dizziness and fainting possible, especially at the start or with dehydration", "human rct"],
        ["Rebound on stopping", "moderate", "Stopping suddenly can cause a rebound rise in blood pressure, so it is tapered", "established"],
        ["Sedation", "moderate", "Sleepiness and tiredness are the most common side effects, mostly early", "human rct"],
        ["CYP3A4", "low", "Strong CYP3A4 inhibitors raise its levels and inducers lower them", "established"]],
    a: [["α2A-adrenergic receptor", "established", "Selective agonist. In the prefrontal cortex it strengthens network signaling involved in working memory and impulse control"]],
    t: [], noTrials: "Approval rests on placebo-controlled trials in children and adolescents, alone and added to stimulants. Adult evidence is limited.", noTrialsRefs: [133],
    k: [["Route", "Oral (IR or extended-release tablet)"], ["Time to peak", "About 5 hours (extended-release)"], ["Half-life", "About 17 hours"], ["Metabolism", "Liver, CYP3A4"], ["Excretion", "Urine"]], ke: "established", kr: [130],
    related: ["atomoxetine", "viloxazine", "methylphenidate"] });

  /* ------------------------------------------------------------ modafinil */
  add({ slug: "modafinil", name: "Modafinil", aliases: ["Provigil", "Modalert", "Armodafinil", "Nuvigil"], category: "adhd", status: "Approved",
    class: "Wakefulness-promoting agent (weak dopamine reuptake inhibitor)", developer: "Lafon Laboratories, France (1970s); Cephalon (US, 1998)",
    tags: ["wakefulness", "narcolepsy", "nootropic", "DAT", "Schedule IV", "ADHD off-label"],
    summary: "A wakefulness drug approved for narcolepsy, sleep apnea and shift-work sleepiness. It is widely used off-label as a cognitive enhancer. In people who are not sleep-deprived, the measurable cognitive benefit is modest and mostly limited to complex tasks.",
    names: "Sold as Provigil, and armodafinil (the longer-lasting R-isomer) as Nuvigil. Generic modafinil from India (Modalert, Modvigil) is widely bought online without a prescription. It was tested for childhood ADHD, but approval was refused after cases of serious skin reactions. Schedule IV in the US.",
    structure: "2-(benzhydrylsulfinyl)acetamide. C<sub>15</sub>H<sub>15</sub>NO<sub>2</sub>S, about 273.4 g/mol. A racemate; armodafinil is the R-enantiomer.",
    pubchem: "modafinil",
    pnote: adhdNote,
    p: [["Wakefulness (sleep disorders)", 4], ["Cognition in healthy people", 2], ["ADHD effect (off-label)", 1], ["Dependence potential", 2, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Serious skin reactions", "moderate", "Stevens-Johnson syndrome and related reactions are rare but life-threatening, and more frequent in children. Any rash is a reason to stop", "established"],
        ["Hormonal contraception", "moderate", "Induces CYP3A4 and reduces the effectiveness of hormonal contraceptives during use and for a month afterwards", "established"],
        ["Headache, insomnia, anxiety", "low", "The most common side effects", "human rct"],
        ["Heart rate and blood pressure", "low", "Small increases", "human rct"],
        ["Grey-market product", "moderate", "Online generics are bought without a prescription; quality is unverified", "established"]],
    a: [["Dopamine transporter", "established", "Weak dopamine reuptake inhibitor; this is now thought to be its main mechanism"],
        ["Orexin and histamine", "animal", "Activates orexin and histamine wake-promoting systems"],
        ["Healthy cognition", "human rct", "Improves attention, executive function and learning on complex tasks in non-sleep-deprived adults, with inconsistent effects on simple tasks"],
        ["Adult ADHD", "human rct", "Not better than placebo in network meta-analysis of adult ADHD trials, and less well tolerated"]],
    t: [
      { title: "Modafinil in healthy, rested adults", evidence: "human rct", meta: ["studies of modafinil in healthy, non-sleep-deprived adults, 1990–2014", "systematic review"], body: "On simple tests, most studies found better executive function but only half found better attention or memory, and a few found worse creative thinking. On more complex tests, modafinil consistently improved attention, executive function and learning. No excess of side effects or mood changes was seen.", refs: [139] },
      { title: "Modafinil and methylphenidate for enhancement", evidence: "human rct", meta: ["studies of healthy individuals given modafinil or methylphenidate", "systematic review"], body: "Expectations of both drugs exceeded their measured effects. Methylphenidate improved memory, with no consistent evidence of other benefits. Modafinil improved attention in rested people and preserved wakefulness, memory and executive function in sleep-deprived people, though repeated doses did not prevent decline over prolonged sleep loss.", refs: [138] }
    ],
    k: [["Route", "Oral tablet"], ["Time to peak", "About 2–4 hours"], ["Half-life", "About 12–15 hours (modafinil); about 15 hours (armodafinil)"], ["Metabolism", "Liver, amide hydrolysis and CYP3A4; it induces CYP3A4 and inhibits CYP2C19"], ["Excretion", "Urine, as metabolites"]], ke: "established", kr: [131],
    related: ["methylphenidate", "amphetamine", "fladrafinil"] });

  // The compact builder takes no refs on risk rows, so attach them here by slug and row name.
  const cites = {
    nicotine: { "Dependence": [107], "Tolerance within the day": [107], "Heart and blood vessels": [118, 123], "Blood sugar": [123], "Acute poisoning": [141] },
    varenicline: { "Psychiatric effects": [109], "Nausea": [117] },
    cytisine: { "Stomach upset": [110] },
    bupropion: { "Seizures": [132], "CYP2D6 inhibition": [132], "Combining with amphetamine": [125, 132], "Mood and suicidality": [109] },
    amphetamine: { "Heart and blood pressure": [136], "Psychosis and mania": [137], "CYP2D6 inhibitors": [125] },
    lisdexamfetamine: { "Heart and blood pressure": [136], "Psychosis and mania": [137] },
    methylphenidate: { "Heart and blood pressure": [136], "Psychosis": [137] },
    atomoxetine: { "Suicidal thinking": [128], "CYP2D6": [128] },
    viloxazine: { "CYP1A2 inhibition": [129] },
    modafinil: { "Serious skin reactions": [131], "Hormonal contraception": [131] }
  };
  Object.entries(cites).forEach(([slug, rows]) => {
    const e = A.entries.find((x) => x.slug === slug);
    e.risks.forEach((r) => { if (rows[r.system]) r.refs = rows[r.system]; });
  });

  Object.assign(A.references, {
    117: "Gonzales D et al. Varenicline, an α4β2 nicotinic acetylcholine receptor partial agonist, vs sustained-release bupropion and placebo for smoking cessation: a randomized controlled trial. JAMA 2006;296:47–55.",
    118: "Benowitz NL et al. Cardiovascular safety of varenicline, bupropion, and nicotine patch in smokers: a randomized clinical trial. JAMA Intern Med 2018;178:622–631.",
    119: "West R et al. Placebo-controlled trial of cytisine for smoking cessation. N Engl J Med 2011;365:1193–1200.",
    120: "Heishman SJ, Kleykamp BA, Singleton EG. Meta-analysis of the acute effects of nicotine and smoking on human performance. Psychopharmacology 2010;210:453–469.",
    121: "Newhouse P et al. Nicotine treatment of mild cognitive impairment: a 6-month double-blind pilot clinical trial. Neurology 2012;78:91–101.",
    122: "Pullan RD et al. Transdermal nicotine for active ulcerative colitis. N Engl J Med 1994;330:811–815.",
    123: "Benowitz NL, Burbank AD. Cardiovascular toxicity of nicotine: implications for electronic cigarette use. Trends Cardiovasc Med 2016;26:515–523.",
    124: "Oertel WH et al. Transdermal nicotine treatment and progression of early Parkinson's disease. NEJM Evid 2023;2(9).",
    125: "Adderall XR (mixed salts of a single-entity amphetamine product) prescribing information. Takeda.",
    126: "Vyvanse (lisdexamfetamine dimesylate) prescribing information. Takeda.",
    127: "Concerta and Ritalin (methylphenidate hydrochloride) prescribing information. Janssen; Novartis.",
    128: "Strattera (atomoxetine) prescribing information. Eli Lilly.",
    129: "Qelbree (viloxazine extended-release) prescribing information. Supernus Pharmaceuticals.",
    130: "Intuniv (guanfacine extended-release) prescribing information. Takeda.",
    131: "Provigil (modafinil) prescribing information. Cephalon.",
    132: "Wellbutrin XL and Zyban (bupropion hydrochloride) prescribing information. Bausch Health; GlaxoSmithKline.",
    133: "Cortese S et al. Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. Lancet Psychiatry 2018;5:727–738.",
    134: "MTA Cooperative Group. A 14-month randomized clinical trial of treatment strategies for attention-deficit/hyperactivity disorder. Arch Gen Psychiatry 1999;56:1073–1086.",
    135: "Nicotine transdermal system and nicotine polacrilex (NicoDerm CQ, Nicorette) prescribing information and Drug Facts labeling. GlaxoSmithKline Consumer Healthcare.",
    136: "Zhang L et al. ADHD medications and long-term risk of cardiovascular diseases. JAMA Psychiatry 2024;81:178–187.",
    137: "Moran LV et al. Psychosis with methylphenidate or amphetamine in patients with ADHD. N Engl J Med 2019;380:1128–1138.",
    138: "Repantis D et al. Modafinil and methylphenidate for neuroenhancement in healthy individuals: a systematic review. Pharmacol Res 2010;62:187–206.",
    139: "Battleday RM, Brem AK. Modafinil for cognitive neuroenhancement in healthy non-sleep-deprived subjects: a systematic review. Eur Neuropsychopharmacol 2015;25:1865–1881.",
    140: "Wilens TE et al. A controlled clinical trial of bupropion for attention deficit hyperactivity disorder in adults. Am J Psychiatry 2001;158:282–288.",
    141: "Mayer B. How much nicotine kills a human? Tracing back the generally accepted lethal dose to dubious self-experiments in the nineteenth century. Arch Toxicol 2014;88:5–7.",
    142: "Cytisinicline 1.5 mg tablets summary of product characteristics. Bonteque Consulting (UK), revised October 2025.",
    143: "Ilieva IP, Hook CJ, Farah MJ. Prescription stimulants' effects on healthy inhibitory control, working memory, and episodic memory: a meta-analysis. J Cogn Neurosci 2015;27:1069–1089."
  });
})(window.ATLAS);
