/*
 * Atlas Codex: stacks. Combinations people run, sorted by how far the record goes.
 *
 * Each stack:
 *   id        anchor on stacks.html (#stack-id) and the link target from entry pages
 *   group     "together" | "parts" | "pushback"  (see groups below)
 *   uses      use-case ids from js/uses.js, used by the filters
 *   added, updated  dates; the list can sort by them
 *   parts     [{ slug, name, role, ev }]  slug links to the entry; name is used when there is no entry.
 *             ev grades that part's own record for this purpose.
 *   basis     optional extra ledger rows: [{ name, ev }] for a class-level finding the pair borrows from
 *   together  the grade of the combination itself. It is never higher than what the pairing has been shown to do.
 *   theory, record   prose (HTML allowed)
 *   studied   doses a published trial gave the combination, or null. Never forum or vendor protocols.
 *   watch     warning signs and markers the combination makes worth watching
 *   note      the editor's reading
 *   refs      strings, or numbers that point into ATLAS.references
 */
(function (A) {
  const today = "2026-10-17";
  const WADA = "World Anti-Doping Agency. Prohibited List.";
  A.stacks = {
    groups: [
      { id: "together", name: "Tested together", note: "The combination itself has been through a controlled trial in people." },
      { id: "parts", name: "Tested only in parts", note: "Each part has some record. The pair has never been studied as a pair." },
      { id: "pushback", name: "Where the record pushes back", note: "A popular theory, where trials found a cost or a cancellation." }
    ],
    items: [
      {
        id: "cagrisema", name: "Semaglutide with cagrilintide", aka: "CagriSema", group: "together", uses: ["fatloss", "sugar"],
        parts: [
          { slug: "semaglutide", role: "GLP-1 agonist. Slows the stomach and cuts appetite", ev: "human rct" },
          { slug: "cagrilintide", role: "Long-acting amylin analog. Signals fullness by a separate route", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Amylin and GLP-1 are both released after a meal and signal fullness through partly separate parts of the brain. A long-acting analog of each should add to the other rather than duplicate it.",
        record: "In REDEFINE 1, 3,417 adults with obesity and without diabetes took the fixed combination or placebo for 68 weeks. Mean body weight fell 20.4% on the combination and 3.0% on placebo, and the combination did better than either part given alone.",
        studied: "Cagrilintide 2.4 mg with semaglutide 2.4 mg, injected under the skin once weekly after a dose-escalation period, for 68 weeks.",
        watch: [
          "Nausea, vomiting and constipation, mostly while the dose is rising, as with each part alone",
          "Gallbladder problems and pancreatitis, the known risks of the GLP-1 class",
          "Material sold online under this name is not the trial product, and its contents are unverified"
        ],
        note: "The strongest stack here: a fixed combination designed, dosed and tested as one product. It shows what a combination claim looks like when it has been earned.",
        refs: ["Garvey WT et al. Coadministered Cagrilintide and Semaglutide in Adults with Overweight or Obesity. N Engl J Med 2025."]
      },
      {
        id: "statin-ezetimibe", name: "A statin with ezetimibe", group: "together", uses: ["heart"],
        parts: [
          { slug: "rosuvastatin", role: "Or another statin. Blocks cholesterol synthesis in the liver", ev: "human rct" },
          { slug: "ezetimibe", role: "Blocks cholesterol absorption in the gut", ev: "human rct" }
        ],
        together: "human rct",
        theory: "When a statin cuts the liver's own cholesterol production, the gut absorbs more to make up for it. Ezetimibe closes that route, so the pair works on both sources of supply.",
        record: "IMPROVE-IT gave 18,144 patients who had had an acute coronary syndrome either simvastatin with ezetimibe or simvastatin alone. LDL fell further on the combination, and major cardiovascular events at 7 years were 32.7% against 34.7%. RACING later found a moderate statin dose with ezetimibe no worse than a high statin dose alone over 3 years, with fewer people stopping because of side effects.",
        studied: "Simvastatin 40 mg with ezetimibe 10 mg daily in IMPROVE-IT. Rosuvastatin 10 mg with ezetimibe 10 mg daily in RACING.",
        watch: [
          "Muscle pain or weakness, and creatine kinase if it appears",
          "Liver enzymes"
        ],
        note: "The textbook case of complementary mechanisms, and one of the few stacks measured against heart attacks and strokes rather than a lab number. The extra benefit is real and modest.",
        refs: [
          "Cannon CP et al. Ezetimibe Added to Statin Therapy after Acute Coronary Syndromes. N Engl J Med 2015;372:2387–2397.",
          "Kim BK et al. Long-term efficacy and safety of moderate-intensity statin with ezetimibe combination therapy versus high-intensity statin monotherapy in patients with atherosclerotic cardiovascular disease (RACING): a randomised, open-label, non-inferiority trial. Lancet 2022;400:380–390."
        ]
      },
      {
        id: "naltrexone-bupropion", name: "Naltrexone with bupropion", aka: "Contrave, Mysimba", group: "together", uses: ["fatloss"],
        parts: [
          { slug: "bupropion", role: "Dopamine and noradrenaline reuptake inhibitor. Switches on appetite-reducing POMC neurons", ev: "human rct" },
          { slug: "naltrexone", role: "Opioid antagonist. Removes the brake those neurons put on themselves", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Bupropion stimulates the POMC neurons in the hypothalamus that reduce appetite, but the same neurons release β-endorphin, which switches them back off. Naltrexone blocks that feedback, so the signal lasts. Neither drug does much for weight alone.",
        record: "COR-I randomized 1,742 adults with obesity for 56 weeks. Weight fell 6.1% on the full-dose combination and 1.3% on placebo. The combination is approved for weight management in the US and the EU.",
        studied: "Naltrexone 32 mg with bupropion 360 mg daily as extended-release tablets, built up over four weeks, for 56 weeks.",
        watch: [
          "Blood pressure and heart rate, which can rise",
          "Seizures: bupropion lowers the seizure threshold and is not used with seizure or eating disorders",
          "A boxed warning for suicidal thoughts, carried over from antidepressants",
          "Naltrexone blocks opioid pain medicine and brings on withdrawal in anyone dependent on opioids"
        ],
        note: "A pairing that only makes sense as a pair: each part is weak alone, and the effect comes from one removing the other's brake. The weight loss is smaller than with current incretin drugs.",
        refs: [
          "Greenway FL et al. Effect of naltrexone plus bupropion on weight loss in overweight and obese adults (COR-I): a multicentre, randomised, double-blind, placebo-controlled, phase 3 trial. Lancet 2010;376:595–605.",
          "Contrave (naltrexone HCl and bupropion HCl) extended-release tablets, prescribing information."
        ]
      },
      {
        id: "varenicline-nrt", name: "Varenicline with a nicotine patch", group: "together", uses: ["quitting"],
        parts: [
          { slug: "varenicline", role: "α4β2 partial agonist. Dulls craving and the reward of a cigarette", ev: "human rct" },
          { slug: "nicotine", name: "Nicotine replacement", role: "Steady nicotine from a patch. Covers withdrawal", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Varenicline only partly activates the receptor, so some withdrawal can break through. A patch fills that gap, while varenicline blunts the reward of any cigarette smoked on top.",
        record: "In a trial of 446 smokers, adding a nicotine patch to varenicline raised continuous abstinence at 12 and 24 weeks compared with varenicline and a placebo patch. Not every trial of the pair has found a gain. Separately, Cochrane reviewers found that a patch combined with a fast-acting form of nicotine works better than a single form.",
        studied: null,
        watch: [
          "Nausea and vivid dreams from varenicline",
          "Too much nicotine when a patch and smoking overlap: nausea, palpitations, dizziness",
          "Caffeine levels roughly double after quitting smoke, which is easily mistaken for withdrawal"
        ],
        note: "Both parts are approved quit aids and the pair is used in practice. The direction of the effect is consistent; its size is not.",
        refs: [
          "Koegelenberg CFN et al. Efficacy of varenicline combined with nicotine replacement therapy vs varenicline alone for smoking cessation: a randomized clinical trial. JAMA 2014;312:155–161.",
          "Lindson N et al. Different doses, durations and modes of delivery of nicotine replacement therapy for smoking cessation. Cochrane Database Syst Rev 2019;4:CD013308."
        ]
      },
      {
        id: "finasteride-minoxidil", name: "Finasteride with minoxidil", group: "together", uses: ["hair"],
        parts: [
          { slug: "finasteride", role: "5α-reductase inhibitor. Lowers the DHT that shrinks follicles", ev: "human rct" },
          { slug: "minoxidil", role: "Lengthens the growth phase of the follicle", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Two routes to one outcome: one drug removes the hormone that miniaturizes susceptible follicles, the other pushes follicles to grow for longer. Their effects should add.",
        record: "In a randomized comparison in men with androgenetic alopecia, the combination improved hair more than either drug alone at 12 months. The trials of the pair are smaller and less rigorous than the trials that got each drug approved.",
        studied: "Finasteride 1 mg by mouth daily with 5% minoxidil solution on the scalp twice daily.",
        watch: [
          "Finasteride roughly halves PSA, which matters for prostate screening",
          "Sexual side effects from finasteride, uncommon, and reported to persist in some men",
          "Scalp irritation and a temporary shed in the first weeks of minoxidil"
        ],
        note: "Both parts are approved for hair loss and the pair is standard dermatology practice. Here the combination trial is the weak link, not the parts.",
        refs: ["Hu R et al. Combined treatment with oral finasteride and topical minoxidil in male androgenetic alopecia: a randomized and comparative study in Chinese patients. Dermatol Ther 2015;28:303–308."]
      },
      {
        id: "caffeine-theanine", name: "Caffeine with L-theanine", group: "together", uses: ["cognition"],
        parts: [
          { name: "Caffeine", role: "Adenosine receptor antagonist. Alertness and reaction time", ev: "human rct" },
          { name: "L-theanine", role: "An amino acid from tea, said to smooth caffeine's edge", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Tea contains both. The idea is that theanine takes the jitter out of caffeine while caffeine keeps the alertness.",
        record: "Small crossover trials found that the pair improved accuracy when switching between tasks and reduced distractibility in the hour or two after a dose, on some measures more than caffeine alone. The samples were a few dozen people, the effects were modest and short-term, and some of the early work was done with a tea company.",
        studied: "Caffeine 50 mg with L-theanine 100 mg in one trial, and caffeine 150 mg with L-theanine 250 mg in another, each as a single dose.",
        watch: [
          "Caffeine's own effects on sleep, heart rate and blood pressure, which theanine does not cancel"
        ],
        note: "Well tested for a supplement pair, but tested here means lab tasks after one dose. Nothing shows the combination matters over weeks of daily use.",
        refs: [
          "Owen GN et al. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutr Neurosci 2008;11:193–198.",
          "Haskell CF et al. The effects of L-theanine, caffeine and their combination on cognition and mood. Biol Psychol 2008;77:113–122."
        ]
      },
      {
        id: "testosterone-hcg", name: "Testosterone with hCG", group: "together", uses: ["hormones"],
        parts: [
          { slug: "testosterone", role: "Suppresses LH and FSH, which shuts down the testes", ev: "human rct" },
          { slug: "hcg", role: "Acts on the LH receptor, standing in for the missing signal", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Testosterone from outside switches off LH, and without LH the testes stop making their own testosterone and shrink. hCG acts on the LH receptor directly, so the testes keep working.",
        record: "In 29 healthy men suppressed with testosterone for three weeks, testosterone inside the testes fell by about 94% without hCG. Low-dose hCG every other day kept it near baseline, and more hCG kept more of it.",
        studied: "Testosterone enanthate 200 mg weekly by injection with hCG 125, 250 or 500 IU every other day, for three weeks.",
        watch: [
          "Estradiol, which rises because the stimulated testes aromatize",
          "Hematocrit and the usual androgen markers",
          "Fertility was not measured: only a semen analysis shows sperm production"
        ],
        note: "The trial shows the testes keep making testosterone. It was short and small, and it did not test fertility or long-term use, which is what most people adding hCG want to know.",
        refs: ["Coviello AD et al. Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression. J Clin Endocrinol Metab 2005;90:2595–2602."]
      },
      {
        id: "nr-pterostilbene", name: "Nicotinamide riboside with pterostilbene", aka: "NRPT", group: "together", uses: ["longevity"],
        parts: [
          { slug: "nad-plus", name: "Nicotinamide riboside", role: "A precursor that raises NAD+", ev: "human rct" },
          { name: "Pterostilbene", role: "A resveratrol relative, said to activate sirtuins", ev: "animal" }
        ],
        together: "human rct",
        theory: "Sirtuins use NAD+ to do their work. NR supplies the NAD+ and pterostilbene is claimed to switch the sirtuins on: fuel and an accelerator together.",
        record: "An 8-week trial in 120 older adults raised blood NAD+ in a dose-dependent way, and levels stayed raised through the trial. It measured no clinical outcome. In a separate trial, pterostilbene alone raised LDL cholesterol.",
        studied: "Nicotinamide riboside 250 mg with pterostilbene 50 mg daily, or twice that, for 8 weeks.",
        watch: [
          "LDL cholesterol, which pterostilbene raised in its own trial"
        ],
        note: "A raised blood level is a biomarker, not a benefit. That is the pattern for most longevity stacks: the chemistry moves, and nobody has shown that health does.",
        refs: [
          "Dellinger RW et al. Repeat dose NRPT (nicotinamide riboside and pterostilbene) increases NAD+ levels in humans safely and sustainably: a randomized, double-blind, placebo-controlled study. NPJ Aging Mech Dis 2017;3:17.",
          "Riche DM et al. Pterostilbene on metabolic parameters: a randomized, double-blind, and placebo-controlled trial. Evid Based Complement Alternat Med 2014;2014:459165."
        ]
      },

      {
        id: "ipamorelin-cjc", name: "Ipamorelin with CJC-1295", group: "parts", uses: ["muscle"],
        parts: [
          { slug: "cjc-1295", role: "GHRH analog. Raises the signal to release growth hormone", ev: "human rct" },
          { slug: "ipamorelin", role: "Ghrelin receptor agonist. Lowers somatostatin, the brake on that signal", ev: "human rct" }
        ],
        basis: [{ name: "Any GHRH with a ghrelin agonist", ev: "established" }],
        together: "unknown",
        theory: "One raises the release signal and the other takes the brake off it, so together they should release more growth hormone than either alone.",
        record: "That synergy is real for the class: in healthy men, GHRP-6 with GHRH released far more growth hormone than either alone. That was one intravenous dose of different molecules. CJC-1295 and ipamorelin have each been given to people on their own, and the pair has never been tested. CJC-1295 with its drug-affinity complex lasts about a week, which gives a raised baseline rather than pulses; what is sold as \"CJC-1295 no DAC\" is a different molecule, modified GRF(1-29).",
        studied: null,
        watch: [
          "IGF-1, the marker that shows growth hormone exposure",
          "Water retention, tingling or numbness in the hands, and rising fasting glucose",
          "Both are prohibited in sport"
        ],
        note: "A sound mechanism and an untested product. Synergy here describes acute hormone release in a lab, not body composition.",
        refs: [
          "Bowers CY et al. Growth hormone (GH)-releasing peptide stimulates GH release in normal men and acts synergistically with GH-releasing hormone. J Clin Endocrinol Metab 1990;70:975–982.",
          16,
          "Raun K et al. Ipamorelin, the first selective growth hormone secretagogue. Eur J Endocrinol 1998;139:552–561.",
          WADA
        ]
      },
      {
        id: "bpc-tb500", name: "BPC-157 with TB-500", group: "parts", uses: ["healing"],
        parts: [
          { slug: "bpc-157", role: "Said to promote new blood vessels and tendon repair", ev: "animal" },
          { slug: "tb-500", role: "A thymosin β4 fragment, said to help cells move into an injury", ev: "animal" }
        ],
        together: "unknown",
        theory: "The two are said to act on different steps of healing, blood supply and cell migration, so their effects are claimed to add.",
        record: "Each rests on rodent and cell studies, many from a small number of labs. No study of the combination has been published, in animals or in people, and neither has an established human dose. Both are prohibited in sport, and the FDA lists BPC-157 among substances that raise significant safety concerns for compounding.",
        studied: null,
        watch: [
          "Purity, sterility and identity of vendor material, which nobody has checked",
          "The theoretical concern that anything promoting new blood vessels could feed an existing tumor",
          "Infection at the injection site"
        ],
        note: "Two animal-grade compounds do not make a human-grade pair. This is one of the most widely sold stacks and one of the least studied.",
        refs: [10, 11, WADA]
      },
      {
        id: "piracetam-choline", name: "Piracetam with choline", group: "parts", uses: ["cognition"],
        parts: [
          { slug: "piracetam", role: "Racetam. Thought to increase acetylcholine use in the brain", ev: "contested" },
          { name: "A choline source", role: "Alpha-GPC, citicoline or choline bitartrate, added to keep supply up", ev: "anecdotal" }
        ],
        together: "animal",
        theory: "If racetams make the brain use more acetylcholine, extra choline should keep the supply up. The usual claim is that it prevents racetam headaches.",
        record: "The idea traces to a 1981 study in aged rats, where piracetam with choline improved memory more than either alone. It has not been tested in people. The headache claim comes from user reports.",
        studied: null,
        watch: [
          "Large amounts of choline cause a fishy body odor, sweating and low blood pressure"
        ],
        note: "The most repeated nootropic stack still rests on one rat study from 1981.",
        refs: ["Bartus RT et al. Profound effects of combining choline and piracetam on memory enhancement and cholinergic function in aged rats. Neurobiol Aging 1981;2:105–111."]
      },

      {
        id: "testosterone-ai", name: "Testosterone with an aromatase inhibitor", group: "pushback", uses: ["hormones", "muscle"],
        parts: [
          { slug: "testosterone", role: "Converts partly to estradiol through aromatase", ev: "human rct" },
          { slug: "anastrozole", role: "Blocks aromatase, lowering estradiol", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Less estradiol should mean less water retention and less risk of breast tissue growth while testosterone is high.",
        record: "When estradiol was removed experimentally in men, with testosterone held steady, body fat rose and sexual desire and erectile function fell. In older men with low testosterone, a year of anastrozole raised testosterone but lowered spine bone density compared with placebo.",
        studied: "Anastrozole 1 mg daily in both trials, for 16 weeks alongside controlled testosterone replacement in one and for a year on its own in the other.",
        watch: [
          "Sensitive estradiol, measured rather than guessed from symptoms",
          "Joint pain, low libido, low mood and dry skin, the signs of estradiol pushed too low",
          "Bone density with long use",
          "HDL cholesterol"
        ],
        note: "Common, and the record cuts against it as a routine add-on. The trials treat estradiol as part of what testosterone does in men, not as a byproduct to remove.",
        refs: [
          "Finkelstein JS et al. Gonadal steroids and body composition, strength, and sexual function in men. N Engl J Med 2013;369:1011–1022.",
          "Burnett-Bowie SA et al. Effects of aromatase inhibition on bone mineral density and bone turnover in older men with low testosterone levels. J Clin Endocrinol Metab 2009;94:4785–4792."
        ]
      },
      {
        id: "ephedrine-caffeine", name: "Ephedrine with caffeine", aka: "EC", group: "pushback", uses: ["fatloss"],
        parts: [
          { slug: "ephedrine", role: "Releases noradrenaline and raises energy expenditure", ev: "human rct" },
          { name: "Caffeine", role: "Blocks adenosine, so ephedrine's signal lasts longer", ev: "human rct" }
        ],
        together: "human rct",
        theory: "Caffeine removes a brake on the noradrenaline signal that ephedrine starts, so the two raise energy expenditure more together than either alone.",
        record: "In a 24-week trial in 180 dieting adults with obesity, the combination produced more weight loss than ephedrine, caffeine or placebo. A later meta-analysis found modest short-term weight loss with ephedra or ephedrine, and two to three times the risk of psychiatric, autonomic and gut symptoms and palpitations. In 2004 the FDA banned dietary supplements containing ephedra alkaloids.",
        studied: "Ephedrine 20 mg with caffeine 200 mg three times daily for 24 weeks, alongside a calorie-restricted diet.",
        watch: [
          "Blood pressure and heart rate",
          "Palpitations, anxiety, insomnia and tremor",
          "Strokes, heart attacks and deaths were reported with ephedra supplements"
        ],
        note: "It is here because it works. A stack can do what it claims in a trial and still carry a risk that regulators judged unacceptable.",
        refs: [
          "Astrup A et al. The effect and safety of an ephedrine/caffeine compound compared to ephedrine, caffeine and placebo in obese subjects on an energy restricted diet. A double blind trial. Int J Obes Relat Metab Disord 1992;16:269–277.",
          "Shekelle PG et al. Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: a meta-analysis. JAMA 2003;289:1537–1545.",
          "Final rule declaring dietary supplements containing ephedrine alkaloids adulterated because they present an unreasonable risk. Federal Register 2004;69:6788–6854."
        ]
      },
      {
        id: "creatine-caffeine", name: "Creatine with caffeine", group: "pushback", uses: ["performance", "muscle"],
        parts: [
          { name: "Creatine", role: "Tops up muscle phosphocreatine for repeated sprints", ev: "human rct" },
          { name: "Caffeine", role: "Alertness and endurance", ev: "human rct" }
        ],
        together: "contested",
        theory: "Both are well supported on their own, so together they should help twice.",
        record: "In 1996, daily caffeine wiped out the gain in repeated high-intensity performance that creatine loading produced, even though muscle creatine still rose. Later studies have been mixed. Reviewers suggest the clash may depend on high daily caffeine during loading, on timing and on stomach upset, rather than on a fixed interaction.",
        studied: "Creatine 0.5 g per kg of body weight daily, with or without caffeine 5 mg per kg daily, for six days.",
        watch: [
          "Stomach upset when the two are taken together"
        ],
        note: "Not dangerous. A reminder that two effective parts can cancel each other, and the question is still open.",
        refs: [
          "Vandenberghe K et al. Caffeine counteracts the ergogenic action of muscle creatine loading. J Appl Physiol 1996;80:452–457.",
          "Trexler ET, Smith-Ryan AE. Creatine and caffeine: considerations for concurrent supplementation. Int J Sport Nutr Exerc Metab 2015;25:607–623."
        ]
      }
    ]
  };
  A.stacks.items.forEach((s) => { s.added = s.added || today; s.updated = s.updated || s.added; });
})(window.ATLAS);
