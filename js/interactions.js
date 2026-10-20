/*
 * Atlas Codex: interactions and cautions, keyed by entry slug.
 *
 * Every compound page has an Interactions section. It shows, in this order:
 *   1. the rows below for that slug, and
 *   2. any risk row in the entry whose system names an interaction ("Interactions", "CYP2D6 interactions"),
 *      which moves out of the risk grid into this section.
 * An entry with neither shows an honest "none recorded" panel. That is a gap in the codex, never a claim
 * that the compound interacts with nothing.
 *
 * Each row: { with, level, text, evidence, detail, refs }
 *   with      what it interacts with, e.g. "Nitrates", "Insulin and sulfonylureas", "Pregnancy"
 *   level     "low" | "moderate" | "high" | "unknown", as in the risk grid
 *   evidence  the usual grades; a label warning is "established"
 *   refs      ids from the references list
 *
 * Same sourcing rules as the rest of the codex: an approved label or a published study, verified, and cited.
 */
(function (A) {
  A.interactions = {
    "acarbose": [
      {
        "with": "Insulin and sulfonylureas",
        "level": "moderate",
        "text": "Raise the risk of low blood sugar",
        "evidence": "established",
        "detail": "Acarbose alone should not cause hypoglycemia, but it lowers glucose further when combined. The label advises adjusting the insulin or sulfonylurea dose, and says to treat lows with glucose, not table sugar.",
        "refs": [
          2114
        ]
      },
      {
        "with": "Charcoal and digestive enzyme products (amylase, pancreatin)",
        "level": "moderate",
        "text": "Weaken the effect of acarbose",
        "evidence": "established",
        "detail": "The label says intestinal adsorbents and enzyme preparations that split carbohydrates may reduce the effect of acarbose and should not be taken with it.",
        "refs": [
          2114
        ]
      },
      {
        "with": "Digoxin",
        "level": "moderate",
        "text": "May lower digoxin availability",
        "evidence": "established",
        "detail": "Acarbose has been shown to change digoxin bioavailability, which may need a digoxin dose adjustment.",
        "refs": [
          2114
        ]
      },
      {
        "with": "Drugs that raise blood sugar (thiazides, corticosteroids, thyroid products, estrogens, phenytoin and others)",
        "level": "low",
        "text": "Can undo glucose control",
        "evidence": "established",
        "detail": "The label asks for close watch for loss of glucose control when these are given with acarbose, and for hypoglycemia when they are stopped.",
        "refs": [
          2114
        ]
      }
    ],
    "albuterol": [
      {
        "with": "Beta-blockers",
        "level": "moderate",
        "text": "Can block albuterol and cause severe bronchospasm",
        "evidence": "established",
        "detail": "The label says people with asthma should not normally be treated with beta-blockers, which can block the lung effect of albuterol. Cardioselective types may be used with caution in some cases.",
        "refs": [
          2003
        ]
      },
      {
        "with": "Other short-acting sympathomimetic bronchodilators",
        "level": "moderate",
        "text": "Should not be used together",
        "evidence": "established",
        "detail": "The label says other short-acting sympathomimetic bronchodilators should not be used at the same time. Other adrenergic drugs call for caution.",
        "refs": [
          2003
        ]
      },
      {
        "with": "MAO inhibitors and tricyclic antidepressants",
        "level": "high",
        "text": "Can strengthen the effect of albuterol on the heart and blood vessels",
        "evidence": "established",
        "detail": "The label says albuterol should be given with extreme caution to people taking MAO inhibitors or tricyclic antidepressants, or within 2 weeks of stopping them.",
        "refs": [
          2003
        ]
      },
      {
        "with": "Non-potassium-sparing diuretics",
        "level": "moderate",
        "text": "Can add to low potassium",
        "evidence": "established",
        "detail": "Albuterol can lower blood potassium. The label advises caution when it is combined with these diuretics and says to monitor potassium.",
        "refs": [
          2003
        ]
      },
      {
        "with": "Digoxin",
        "level": "low",
        "text": "May lower digoxin levels",
        "evidence": "established",
        "detail": "The label says albuterol may decrease serum digoxin levels and advises checking digoxin levels in people taking both.",
        "refs": [
          2003
        ]
      }
    ],
    "amphetamine": [
      {
        "with": "MAO inhibitors (including linezolid and IV methylene blue)",
        "level": "high",
        "text": "Contraindicated together or within 14 days",
        "evidence": "established",
        "detail": "The combination can cause hypertensive crisis, with outcomes that include death, stroke and heart attack.",
        "refs": [
          125
        ]
      },
      {
        "with": "Serotonergic drugs",
        "level": "moderate",
        "text": "Raises the risk of serotonin syndrome",
        "evidence": "established",
        "detail": "The label advises starting low and watching for serotonin syndrome, especially when starting or raising the dose.",
        "refs": [
          125
        ]
      },
      {
        "with": "CYP2D6 inhibitors (e.g. bupropion, fluoxetine, paroxetine)",
        "level": "moderate",
        "text": "May raise amphetamine exposure and serotonin syndrome risk",
        "evidence": "established",
        "detail": "The label advises lower starting doses and monitoring for serotonin syndrome.",
        "refs": [
          125
        ]
      },
      {
        "with": "Gastrointestinal and urinary alkalinizing agents (e.g. antacids)",
        "level": "moderate",
        "text": "Raise amphetamine levels; avoid together",
        "evidence": "established",
        "detail": "Alkalinizing agents increase blood levels and potentiate the action of amphetamine. The label says to avoid combining them.",
        "refs": [
          125
        ]
      },
      {
        "with": "Acidifying agents",
        "level": "low",
        "text": "Lower amphetamine levels and effect",
        "evidence": "established",
        "detail": "Gastrointestinal and urinary acidifying agents reduce amphetamine blood levels.",
        "refs": [
          125
        ]
      },
      {
        "with": "Tricyclic antidepressants",
        "level": "moderate",
        "text": "Can raise brain amphetamine levels and add to heart effects",
        "evidence": "established",
        "detail": "The label advises frequent monitoring and adjusting or changing therapy as needed.",
        "refs": [
          125
        ]
      }
    ],
    "anadrol": [
      {
        "with": "Warfarin and other oral anticoagulants",
        "level": "moderate",
        "text": "Raises sensitivity to anticoagulants and bleeding risk",
        "evidence": "established",
        "detail": "The label reports clinically significant warfarin interactions with anabolic steroids in healthy volunteers. It calls for close INR or prothrombin time monitoring, warfarin dose adjustment when oxymetholone is started, changed or stopped, and watching for signs of hidden bleeding.",
        "refs": [
          2200
        ]
      }
    ],
    "anastrozole": [
      {
        "with": "Tamoxifen",
        "level": "moderate",
        "text": "Lowers anastrozole levels and adds no benefit",
        "evidence": "established",
        "detail": "The label says tamoxifen should not be given with anastrozole. Together, anastrozole levels fell by 27% and the combination worked no better than tamoxifen alone.",
        "refs": [
          2201
        ]
      },
      {
        "with": "Estrogen-containing therapies",
        "level": "moderate",
        "text": "May blunt the effect of anastrozole",
        "evidence": "established",
        "detail": "The label says estrogen-containing therapies may reduce anastrozole's action and should not be used with it.",
        "refs": [
          2201
        ]
      },
      {
        "with": "Warfarin",
        "level": "low",
        "text": "No change in warfarin levels or effect",
        "evidence": "established",
        "detail": "In a study of 16 men, anastrozole did not change warfarin exposure or clotting times.",
        "refs": [
          2201
        ]
      }
    ],
    "anavar": [
      {
        "with": "Warfarin",
        "level": "moderate",
        "text": "Sharply raises warfarin levels and bleeding risk",
        "evidence": "established",
        "detail": "In a label study of 15 healthy people on warfarin, oxandrolone more than doubled warfarin exposure, and the warfarin dose had to be cut by about 80 to 85% to hold the target INR; microscopic blood in the urine and gum bleeding were seen. The label calls for close INR or prothrombin time monitoring and warfarin dose adjustment whenever oxandrolone is started, changed or stopped.",
        "refs": [
          79
        ]
      },
      {
        "with": "Oral diabetes medicines",
        "level": "moderate",
        "text": "May slow the breakdown of oral diabetes medicines",
        "evidence": "established",
        "detail": "The label says oxandrolone may inhibit the metabolism of oral hypoglycemic agents.",
        "refs": [
          79
        ]
      },
      {
        "with": "Corticosteroids and ACTH",
        "level": "moderate",
        "text": "Can worsen swelling (edema)",
        "evidence": "established",
        "detail": "The label says that in people with edema, taking oxandrolone with adrenal corticosteroids or ACTH may increase the edema.",
        "refs": [
          79
        ]
      }
    ],
    "ashwagandha": [
      {
        "with": "Thyroid hormone medicines",
        "level": "unknown",
        "text": "Raised thyroid hormone levels in small human trials",
        "evidence": "human rct",
        "detail": "In 50 people with subclinical hypothyroidism, an 8-week course raised T3 and T4 and lowered TSH versus placebo. In a smaller bipolar disorder trial, T4 rose in the three people given ashwagandha. Use with thyroid medicine has not been studied.",
        "refs": [
          2117,
          2118
        ]
      }
    ],
    "atomoxetine": [
      {
        "with": "MAO inhibitors (including linezolid and IV methylene blue)",
        "level": "high",
        "text": "Contraindicated together or within 14 days of stopping an MAOI",
        "evidence": "established",
        "detail": "The label reports serious, sometimes fatal reactions such as high fever, rigidity, unstable vital signs and agitation progressing to delirium or coma.",
        "refs": [
          128
        ]
      },
      {
        "with": "Strong CYP2D6 inhibitors (e.g. fluoxetine, paroxetine, quinidine)",
        "level": "moderate",
        "text": "Raises atomoxetine exposure",
        "evidence": "established",
        "detail": "Atomoxetine is cleared by CYP2D6. The label tells prescribers to lengthen the titration interval when a strong CYP2D6 inhibitor is also taken.",
        "refs": [
          128
        ]
      },
      {
        "with": "Antihypertensives and pressor drugs",
        "level": "moderate",
        "text": "Can push blood pressure up and blunt blood pressure control",
        "evidence": "established",
        "detail": "The label advises more frequent blood pressure checks and caution with antihypertensives and with pressor drugs such as dopamine or dobutamine.",
        "refs": [
          128
        ]
      },
      {
        "with": "Albuterol and other systemic beta-2 agonists",
        "level": "moderate",
        "text": "Heart rate and blood pressure rises can be amplified",
        "evidence": "established",
        "detail": "The label says atomoxetine can potentiate the cardiovascular effects of systemic albuterol and advises closer monitoring of heart rate and blood pressure.",
        "refs": [
          128
        ]
      }
    ],
    "berberine": [
      {
        "with": "Midazolam and other CYP3A4-processed drugs",
        "level": "moderate",
        "text": "Raised midazolam levels in healthy men",
        "evidence": "human rct",
        "detail": "After 2 weeks of berberine, midazolam exposure rose by about 40%, which points to CYP3A4 inhibition. Other drugs cleared by CYP3A4 may be affected the same way.",
        "refs": [
          2005
        ]
      },
      {
        "with": "Cyclosporine",
        "level": "low",
        "text": "Raised cyclosporine exposure modestly in healthy men",
        "evidence": "human rct",
        "detail": "In healthy volunteers, berberine raised total cyclosporine exposure by about 19% at one cyclosporine dose and had no significant effect at a higher dose.",
        "refs": [
          2006
        ]
      }
    ],
    "bremelanotide": [
      {
        "with": "Oral drugs that need a threshold level to work (e.g. antibiotics)",
        "level": "moderate",
        "text": "May slow absorption by delaying stomach emptying",
        "evidence": "established",
        "detail": "The Vyleesi label tells patients to avoid it when taking such drugs, and to consider stopping it if a fast-acting oral drug, such as a pain reliever, works later than expected.",
        "refs": [
          24
        ]
      }
    ],
    "bupropion": [
      {
        "with": "MAO inhibitors (including linezolid and IV methylene blue)",
        "level": "high",
        "text": "Contraindicated together or within 14 days",
        "evidence": "established",
        "detail": "The label warns of hypertensive reactions. Bupropion should not be started in someone being treated with linezolid or IV methylene blue.",
        "refs": [
          132
        ]
      },
      {
        "with": "Abrupt withdrawal of alcohol, benzodiazepines, barbiturates or antiepileptics",
        "level": "high",
        "text": "Contraindicated because of seizure risk",
        "evidence": "established",
        "detail": "The label contraindicates bupropion during abrupt discontinuation of these drugs, as it raises the risk of seizures.",
        "refs": [
          132
        ]
      },
      {
        "with": "Drugs that lower the seizure threshold (antipsychotics, antidepressants, theophylline, systemic steroids, other bupropion)",
        "level": "moderate",
        "text": "Raises seizure risk",
        "evidence": "established",
        "detail": "The label advises extreme caution, with low starting doses and slow increases.",
        "refs": [
          132
        ]
      },
      {
        "with": "CYP2D6 substrates (e.g. venlafaxine, nortriptyline, paroxetine, fluoxetine, haloperidol, risperidone, metoprolol, flecainide)",
        "level": "moderate",
        "text": "Bupropion inhibits CYP2D6 and raises their levels",
        "evidence": "established",
        "detail": "The label says to consider a lower dose of the other drug. Drugs that need CYP2D6 to work, such as tamoxifen, may work less well.",
        "refs": [
          132
        ]
      },
      {
        "with": "CYP2B6 inhibitors and inducers (e.g. clopidogrel, ticlopidine; ritonavir, efavirenz, carbamazepine)",
        "level": "moderate",
        "text": "Changes bupropion exposure",
        "evidence": "established",
        "detail": "Bupropion is activated mainly by CYP2B6. The label says its dose may need adjusting with inhibitors or inducers of this enzyme.",
        "refs": [
          132
        ]
      },
      {
        "with": "Levodopa and amantadine",
        "level": "moderate",
        "text": "CNS toxicity reported",
        "evidence": "established",
        "detail": "Restlessness, agitation, tremor, unsteady gait and dizziness have been reported, presumably from added dopamine effects. The label advises caution.",
        "refs": [
          132
        ]
      },
      {
        "with": "Nicotine patch",
        "level": "moderate",
        "text": "More high blood pressure with the combination",
        "evidence": "established",
        "detail": "In a smoking-cessation trial, treatment-emergent hypertension was more common with sustained-release bupropion plus a nicotine patch than with either alone.",
        "refs": [
          132
        ]
      },
      {
        "with": "Alcohol",
        "level": "moderate",
        "text": "Rare neuropsychiatric events and lower alcohol tolerance",
        "evidence": "established",
        "detail": "The label says alcohol should be minimized or avoided during treatment.",
        "refs": [
          132
        ]
      },
      {
        "with": "Urine drug screens for amphetamine",
        "level": "low",
        "text": "Can cause false-positive results",
        "evidence": "established",
        "detail": "Some immunoassays read bupropion as amphetamine, even after it is stopped. Confirmatory testing such as GC-MS tells them apart.",
        "refs": [
          132
        ]
      }
    ],
    "cabergoline": [
      {
        "with": "Dopamine antagonists (phenothiazines, butyrophenones, thioxanthenes, metoclopramide)",
        "level": "moderate",
        "text": "Combination not recommended",
        "evidence": "established",
        "detail": "These drugs block the dopamine receptors that cabergoline acts on, so the label advises against using them together.",
        "refs": [
          2112
        ]
      },
      {
        "with": "Other drugs linked to heart valve disease",
        "level": "moderate",
        "text": "Use together only if benefit outweighs risk",
        "evidence": "established",
        "detail": "Cabergoline can cause valve damage and fibrosis. The label says to use it with other valvulopathy-associated drugs only when the benefit outweighs the risk.",
        "refs": [
          2112
        ]
      }
    ],
    "caffeine": [
      {
        "with": "Fluvoxamine",
        "level": "moderate",
        "text": "Sharply slows caffeine clearance",
        "evidence": "human rct",
        "detail": "In healthy volunteers, fluvoxamine cut caffeine clearance by about 80 to 90% and stretched its half-life from about 5 hours to 31 to 56 hours, by blocking CYP1A2. One study found no extra stimulant effect from a single dose, but its authors note that caffeine may build up with daily intake.",
        "refs": [
          2304,
          2305
        ]
      },
      {
        "with": "Ciprofloxacin and other quinolone antibiotics",
        "level": "moderate",
        "text": "Raises caffeine levels and prolongs its effects",
        "evidence": "established",
        "detail": "The ciprofloxacin label says to use caffeine with caution and monitor for toxicity, because ciprofloxacin blocks CYP1A2 and reduces caffeine clearance. It warns that caffeine can build up when caffeine products are taken with quinolones.",
        "refs": [
          2303
        ]
      },
      {
        "with": "Other drugs that block or speed up CYP1A2 (e.g. cimetidine, ketoconazole, phenobarbital, phenytoin)",
        "level": "moderate",
        "text": "Can raise or lower caffeine levels",
        "evidence": "established",
        "detail": "The US caffeine citrate label names CYP1A2 as the main enzyme that breaks caffeine down. Based on adult data, drugs like cimetidine and ketoconazole slow its elimination and phenobarbital and phenytoin speed it up.",
        "refs": [
          2302
        ]
      },
      {
        "with": "Theophylline",
        "level": "moderate",
        "text": "Combined use not recommended in preterm infants",
        "evidence": "established",
        "detail": "The US caffeine citrate label says caffeine and theophylline convert into each other in preterm newborns and that using them together is not recommended.",
        "refs": [
          2302
        ]
      }
    ],
    "cerebroprotein-hydrolysate": [
      {
        "with": "Antidepressants and MAO inhibitors",
        "level": "moderate",
        "text": "The label says the dose of the antidepressant may need lowering",
        "evidence": "established",
        "detail": "The Romanian package leaflet for Cerebrolysin (pig brain protein hydrolysate) tells people to report antidepressant or MAO inhibitor use, because the dose of those medicines may need to be reduced.",
        "refs": [
          2306
        ]
      },
      {
        "with": "Amino acid infusion solutions",
        "level": "moderate",
        "text": "Must not be mixed in the same infusion",
        "evidence": "established",
        "detail": "The leaflet says Cerebrolysin must not be mixed with amino acid solutions in an infusion. Vitamins and heart medicines can be given at the same time but not mixed in the same syringe or infusion.",
        "refs": [
          2306
        ]
      }
    ],
    "cytisine": [
      {
        "with": "Anti-tuberculosis drugs",
        "level": "high",
        "text": "Should not be used together",
        "evidence": "established",
        "detail": "The UK label says cytisinicline should not be used with anti-tuberculosis drugs.",
        "refs": [
          2405
        ]
      },
      {
        "with": "Nicotine products and smoking",
        "level": "moderate",
        "text": "Can aggravate nicotine's side effects",
        "evidence": "established",
        "detail": "The label warns that smoking or using nicotine-containing products while taking cytisinicline could worsen nicotine's adverse reactions.",
        "refs": [
          2405
        ]
      },
      {
        "with": "Systemic hormonal contraceptives",
        "level": "moderate",
        "text": "May reduce contraceptive effectiveness; the effect is unknown",
        "evidence": "established",
        "detail": "The label says it is unknown whether cytisinicline lowers the effectiveness of systemically acting hormonal contraceptives. It advises adding a second barrier method.",
        "refs": [
          2405
        ]
      }
    ],
    "dapoxetine": [
      {
        "with": "MAO inhibitors",
        "level": "high",
        "text": "Contraindicated: serious, sometimes fatal reactions",
        "evidence": "established",
        "detail": "Dapoxetine is an SSRI. The SmPC bars it with an MAO inhibitor or within 14 days of stopping one, and bars an MAO inhibitor within 7 days of stopping dapoxetine.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Other SSRIs, SNRIs, tricyclics and serotonergic products (triptans, tramadol, linezolid, lithium, St. John's Wort, L-tryptophan)",
        "level": "high",
        "text": "Contraindicated: risk of serotonin effects",
        "evidence": "established",
        "detail": "The SmPC contraindicates dapoxetine with these medicines or herbal products, or within 14 days of stopping them.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Thioridazine",
        "level": "high",
        "text": "Contraindicated: longer QTc and risk of arrhythmia",
        "evidence": "established",
        "detail": "Dapoxetine inhibits CYP2D6, which clears thioridazine, so thioridazine levels and QTc prolongation are expected to rise.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Potent CYP3A4 inhibitors (ketoconazole, itraconazole, ritonavir, saquinavir, telithromycin, nefazodone, nelfinavir, atazanavir)",
        "level": "high",
        "text": "Contraindicated: roughly double the active exposure",
        "evidence": "established",
        "detail": "Ketoconazole raised dapoxetine AUC by 99%. The SmPC also says to avoid grapefruit juice within 24 hours before a dose.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Moderate CYP3A4 inhibitors (erythromycin, clarithromycin, fluconazole, aprepitant, verapamil, diltiazem)",
        "level": "moderate",
        "text": "Raise dapoxetine exposure; the SmPC caps the dose",
        "evidence": "established",
        "detail": "The SmPC limits the maximum dose when dapoxetine is combined with any of these.",
        "refs": [
          2116
        ]
      },
      {
        "with": "PDE5 inhibitors (sildenafil, tadalafil)",
        "level": "moderate",
        "text": "Not to be used together: lower tolerance to standing",
        "evidence": "established",
        "detail": "The SmPC says dapoxetine should not be used in men taking PDE5 inhibitors because of possible orthostatic hypotension. Tadalafil did not change dapoxetine levels, and sildenafil changed them only slightly.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Alpha blockers and nitrates",
        "level": "moderate",
        "text": "Caution: may lower tolerance to standing",
        "evidence": "established",
        "detail": "The SmPC advises caution with vasodilating medicines. Tamsulosin did not change the orthostatic profile in the study cited.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Alcohol and recreational drugs",
        "level": "moderate",
        "text": "Raise the risk of fainting and serious reactions",
        "evidence": "established",
        "detail": "The SmPC advises against alcohol, which may increase fainting and cognitive effects. Serotonergic recreational drugs such as MDMA, ketamine and LSD can cause arrhythmia, high body temperature and serotonin syndrome.",
        "refs": [
          2116
        ]
      },
      {
        "with": "Potent CYP2D6 inhibitors (such as fluoxetine)",
        "level": "moderate",
        "text": "Roughly double the active exposure",
        "evidence": "established",
        "detail": "Fluoxetine raised dapoxetine AUC by 88%. The SmPC advises caution before increasing to the higher dose.",
        "refs": [
          2116
        ]
      },
      {
        "with": "NSAIDs, aspirin, antiplatelets and warfarin",
        "level": "low",
        "text": "SSRIs can add to bleeding risk",
        "evidence": "established",
        "detail": "The SmPC advises caution with medicines that affect platelet function or clotting.",
        "refs": [
          2116
        ]
      }
    ],
    "doxepin": [
      {
        "with": "MAO inhibitors",
        "level": "high",
        "text": "Contraindicated: serious side effects and deaths reported",
        "evidence": "established",
        "detail": "The label says not to give low-dose doxepin to anyone taking an MAO inhibitor or who has used one in the past two weeks.",
        "refs": [
          795
        ]
      },
      {
        "with": "Cimetidine",
        "level": "moderate",
        "text": "Doubles doxepin exposure",
        "evidence": "established",
        "detail": "Cimetidine blocks several liver enzymes that clear doxepin. The label sets a lower maximum dose when the two are taken together.",
        "refs": [
          795
        ]
      },
      {
        "with": "Alcohol",
        "level": "moderate",
        "text": "Adds to the sedative effect",
        "evidence": "established",
        "detail": "The label says not to drink alcohol with doxepin. Alcohol also raises the risk of complex sleep behaviours such as sleep-driving.",
        "refs": [
          795
        ]
      },
      {
        "with": "Sedating antihistamines and other CNS depressants",
        "level": "moderate",
        "text": "Add to the sedative effect",
        "evidence": "established",
        "detail": "The label warns of additive sedation and says a dose reduction may be needed.",
        "refs": [
          795
        ]
      },
      {
        "with": "Tolazamide",
        "level": "moderate",
        "text": "Case of severe low blood sugar",
        "evidence": "established",
        "detail": "A severe hypoglycemia case was reported in a person with type 2 diabetes on tolazamide 11 days after oral doxepin was added.",
        "refs": [
          795
        ]
      },
      {
        "with": "CYP2C19 and CYP2D6 inhibitors",
        "level": "moderate",
        "text": "May raise doxepin exposure",
        "evidence": "established",
        "detail": "Doxepin is cleared mainly by CYP2C19 and CYP2D6, and the label says inhibitors of these enzymes may increase its exposure.",
        "refs": [
          795
        ]
      }
    ],
    "dutasteride": [
      {
        "with": "Potent, long-term CYP3A4 inhibitors (e.g. ritonavir)",
        "level": "moderate",
        "text": "May raise dutasteride levels",
        "evidence": "established",
        "detail": "Dutasteride is cleared by CYP3A4 and CYP3A5. The effect has not been studied, and the label advises caution.",
        "refs": [
          2400
        ]
      },
      {
        "with": "Verapamil and diltiazem",
        "level": "low",
        "text": "Raise dutasteride exposure slightly",
        "evidence": "established",
        "detail": "The label calls the change not clinically significant and recommends no dose change.",
        "refs": [
          2400
        ]
      },
      {
        "with": "PSA blood test",
        "level": "moderate",
        "text": "Cuts PSA by about half",
        "evidence": "established",
        "detail": "A new PSA baseline is set at least 3 months after starting. Any confirmed rise from the lowest value should be checked for prostate cancer.",
        "refs": [
          2400
        ]
      }
    ],
    "ephedrine": [
      {
        "with": "Oxytocic drugs such as methylergonovine",
        "level": "high",
        "text": "Serious high blood pressure after childbirth has been reported",
        "evidence": "established",
        "detail": "The label describes serious postpartum hypertension, with stroke in some cases, when a vasopressor like ephedrine is combined with an oxytocic. It advises close blood pressure monitoring.",
        "refs": [
          2002
        ]
      },
      {
        "with": "MAO inhibitors, clonidine, propofol and atropine",
        "level": "moderate",
        "text": "Increase the blood-pressure-raising effect of ephedrine",
        "evidence": "established",
        "detail": "The label says these drugs augment the pressor effect and advises careful blood pressure monitoring.",
        "refs": [
          2002
        ]
      },
      {
        "with": "Alpha- and beta-blockers, reserpine and quinidine",
        "level": "moderate",
        "text": "Reduce the blood-pressure-raising effect of ephedrine",
        "evidence": "established",
        "detail": "The label says these drugs antagonize the pressor effect and advises careful blood pressure monitoring.",
        "refs": [
          2002
        ]
      },
      {
        "with": "Guanethidine",
        "level": "moderate",
        "text": "May cancel its blood-pressure-lowering effect",
        "evidence": "established",
        "detail": "The label says ephedrine may inhibit the nerve blockade produced by guanethidine and cause loss of antihypertensive effect.",
        "refs": [
          2002
        ]
      },
      {
        "with": "Cardiac glycosides such as digoxin",
        "level": "moderate",
        "text": "May increase the chance of abnormal heart rhythms",
        "evidence": "established",
        "detail": "The label advises careful monitoring of people on cardiac glycosides who are given ephedrine.",
        "refs": [
          2002
        ]
      },
      {
        "with": "Theophylline",
        "level": "low",
        "text": "May add to nausea, nervousness and sleeplessness",
        "evidence": "established",
        "detail": "The label says combined use may increase how often these effects occur.",
        "refs": [
          2002
        ]
      }
    ],
    "exemestane": [
      {
        "with": "Strong CYP3A4 inducers (rifampin, phenytoin, carbamazepine, phenobarbital, St John's wort)",
        "level": "moderate",
        "text": "Cut exemestane levels by about half",
        "evidence": "established",
        "detail": "Rifampin lowered exemestane exposure by 54% and peak level by 41%. The label recommends a dose change when exemestane is taken with a strong CYP3A4 inducer.",
        "refs": [
          2202
        ]
      },
      {
        "with": "Estrogen-containing medicines (HRT, estrogen birth control)",
        "level": "moderate",
        "text": "May interfere with how exemestane works",
        "evidence": "established",
        "detail": "The label says exemestane should not be taken with systemic estrogen-containing agents.",
        "refs": [
          2202
        ]
      },
      {
        "with": "Ketoconazole and other strong CYP3A4 inhibitors",
        "level": "low",
        "text": "No meaningful change in exemestane levels",
        "evidence": "established",
        "detail": "The label reports ketoconazole had no significant effect on exemestane pharmacokinetics.",
        "refs": [
          2202
        ]
      }
    ],
    "ezetimibe": [
      {
        "with": "Cyclosporine",
        "level": "moderate",
        "text": "Raises levels of both drugs",
        "evidence": "established",
        "detail": "Ezetimibe and cyclosporine each raise the other's concentration, more so with severe kidney disease. The label advises monitoring cyclosporine levels.",
        "refs": [
          2102
        ]
      },
      {
        "with": "Fibrates",
        "level": "moderate",
        "text": "May raise the risk of gallstones",
        "evidence": "established",
        "detail": "Fenofibrate and ezetimibe can both push cholesterol into bile. The label does not recommend combining ezetimibe with fibrates other than fenofibrate, and calls for gallbladder tests if gallstones are suspected.",
        "refs": [
          2102
        ]
      },
      {
        "with": "Bile acid sequestrants (cholestyramine)",
        "level": "moderate",
        "text": "Lower ezetimibe absorption",
        "evidence": "established",
        "detail": "Cholestyramine reduced total ezetimibe exposure. The label says to separate the doses by at least 2 hours before or 4 hours after the sequestrant.",
        "refs": [
          2102
        ]
      },
      {
        "with": "Statins",
        "level": "low",
        "text": "Slightly more liver enzyme rises than a statin alone",
        "evidence": "established",
        "detail": "In combination trials, repeated liver enzyme elevations occurred in 1.3% on ezetimibe plus a statin versus 0.4% on a statin alone. Most rhabdomyolysis reports on ezetimibe were in people also taking a statin or fibrate.",
        "refs": [
          2102
        ]
      }
    ],
    "finasteride": [
      {
        "with": "PSA blood test",
        "level": "moderate",
        "text": "Lowers PSA, which can mask a rise",
        "evidence": "established",
        "detail": "The label says any confirmed PSA increase on finasteride may signal prostate cancer and should be evaluated, even within the normal range. No drug interactions of clinical importance have been found.",
        "refs": [
          82
        ]
      }
    ],
    "growth-hormone": [
      {
        "with": "Glucocorticoid replacement (hydrocortisone, cortisone acetate, prednisone)",
        "level": "moderate",
        "text": "Can lower cortisol and unmask or worsen adrenal insufficiency",
        "evidence": "established",
        "detail": "Somatropin inhibits 11βHSD-1, the enzyme that activates cortisone, so serum cortisol can fall when treatment starts. The label says people on glucocorticoid replacement may need higher maintenance or stress doses, especially with cortisone acetate and prednisone.",
        "refs": [
          305
        ]
      },
      {
        "with": "High-dose glucocorticoid therapy in children",
        "level": "moderate",
        "text": "Can blunt the growth-promoting effect",
        "evidence": "established",
        "detail": "The label says pharmacologic or supraphysiologic glucocorticoid doses may reduce somatropin's effect on growth in children, and that glucocorticoid replacement should be carefully adjusted when both are used.",
        "refs": [
          305
        ]
      },
      {
        "with": "Drugs cleared by CYP450 enzymes (corticosteroids, sex steroids, anticonvulsants, cyclosporine)",
        "level": "moderate",
        "text": "May change how fast these drugs are cleared",
        "evidence": "established",
        "detail": "Somatropin raises CYP450-mediated antipyrine clearance in people. Formal interaction studies have not been done, and the label advises careful monitoring when it is combined with drugs cleared this way.",
        "refs": [
          305
        ]
      },
      {
        "with": "Oral estrogen",
        "level": "moderate",
        "text": "Can reduce the response to somatropin",
        "evidence": "established",
        "detail": "The label says women taking oral estrogen may need a larger somatropin dose to reach the treatment goal.",
        "refs": [
          305
        ]
      },
      {
        "with": "Insulin and other diabetes medicines",
        "level": "moderate",
        "text": "May change how much insulin or diabetes medicine is needed",
        "evidence": "established",
        "detail": "The label says the dose of insulin or oral or injectable diabetes medicines may need adjusting when somatropin is started.",
        "refs": [
          305
        ]
      }
    ],
    "guanfacine": [
      {
        "with": "Strong and moderate CYP3A4 inhibitors (e.g. ketoconazole, fluconazole)",
        "level": "moderate",
        "text": "Raises guanfacine exposure",
        "evidence": "established",
        "detail": "Guanfacine is cleared mainly by CYP3A4. The Intuniv label tells prescribers to reduce the guanfacine dose when these are taken together.",
        "refs": [
          130
        ]
      },
      {
        "with": "Strong and moderate CYP3A4 inducers (e.g. rifampin, efavirenz)",
        "level": "moderate",
        "text": "Lowers guanfacine exposure",
        "evidence": "established",
        "detail": "The label says a dose increase may be considered, based on response.",
        "refs": [
          130
        ]
      },
      {
        "with": "Alcohol and other CNS depressants",
        "level": "moderate",
        "text": "Adds to sleepiness and sedation",
        "evidence": "established",
        "detail": "The label warns of additive sedative effects and advises avoiding alcohol.",
        "refs": [
          130
        ]
      }
    ],
    "halotestin": [
      {
        "with": "Warfarin and other oral anticoagulants",
        "level": "moderate",
        "text": "Raises sensitivity to anticoagulants and bleeding risk",
        "evidence": "established",
        "detail": "The label says androgens may increase sensitivity to oral anticoagulants and the anticoagulant dose may need to be reduced.",
        "refs": [
          269
        ]
      },
      {
        "with": "Insulin and other diabetes medicines",
        "level": "moderate",
        "text": "May lower blood sugar and insulin needs",
        "evidence": "established",
        "detail": "The label says that in people with diabetes, the metabolic effects of androgens may lower blood glucose and therefore insulin requirements.",
        "refs": [
          269
        ]
      }
    ],
    "hmg": [
      {
        "with": "Clomiphene citrate",
        "level": "moderate",
        "text": "May increase the ovarian response",
        "evidence": "established",
        "detail": "The SmPC says no interaction studies have been done in humans, but using Menopur with clomiphene citrate is expected to enhance the follicular response.",
        "refs": [
          267
        ]
      },
      {
        "with": "GnRH agonists",
        "level": "low",
        "text": "A higher Menopur dose may be needed",
        "evidence": "established",
        "detail": "The SmPC says that when a GnRH agonist is used to suppress the pituitary, a higher dose of Menopur may be needed to get an adequate follicular response.",
        "refs": [
          267
        ]
      }
    ],
    "ketoconazole": [
      {
        "with": "Oral tablet only: QT-prolonging CYP3A4 substrates (e.g. dofetilide, quinidine, pimozide, methadone, dronedarone)",
        "level": "high",
        "text": "Contraindicated with oral ketoconazole",
        "evidence": "established",
        "detail": "Oral ketoconazole is a strong CYP3A4 inhibitor and can raise these drugs to levels that cause fatal heart rhythm problems. The shampoo label lists no drug interactions.",
        "refs": [
          2403,
          713
        ]
      },
      {
        "with": "Oral tablet only: oral midazolam, triazolam, alprazolam, simvastatin, lovastatin, ergot alkaloids, colchicine",
        "level": "high",
        "text": "Contraindicated with oral ketoconazole",
        "evidence": "established",
        "detail": "The tablet label warns of deep, prolonged sedation, muscle injury and ergotism. These warnings do not apply to the shampoo.",
        "refs": [
          2403
        ]
      },
      {
        "with": "Oral tablet only: antacids, H2 blockers and proton pump inhibitors",
        "level": "moderate",
        "text": "Reduce absorption of oral ketoconazole",
        "evidence": "established",
        "detail": "The tablet needs stomach acid to be absorbed. The label advises caution and spacing antacids at least 1 hour before or 2 hours after.",
        "refs": [
          2403
        ]
      }
    ],
    "l-carnitine": [
      {
        "with": "Warfarin",
        "level": "moderate",
        "text": "Reports of a rise in INR",
        "evidence": "established",
        "detail": "The Carnitor label notes reports of INR increases with warfarin and advises monitoring INR after starting treatment.",
        "refs": [
          2004
        ]
      }
    ],
    "letrozole": [
      {
        "with": "Tamoxifen",
        "level": "moderate",
        "text": "Lowers letrozole levels by about 38%",
        "evidence": "established",
        "detail": "The letrozole label reports a 38% average drop in letrozole levels with tamoxifen. The tamoxifen label says the two should not be used together because the combination's benefit is not established.",
        "refs": [
          2203,
          2204
        ]
      },
      {
        "with": "Warfarin and cimetidine",
        "level": "low",
        "text": "No clinically meaningful interaction",
        "evidence": "established",
        "detail": "Label studies found letrozole did not meaningfully change warfarin pharmacokinetics, and cimetidine did not meaningfully change letrozole.",
        "refs": [
          2203
        ]
      }
    ],
    "liraglutide": [
      {
        "with": "Other GLP-1 receptor agonists",
        "level": "moderate",
        "text": "Not to be combined with other liraglutide products or GLP-1 drugs",
        "evidence": "established",
        "detail": "The Saxenda label states that use with other liraglutide-containing products or any other GLP-1 receptor agonist is not recommended.",
        "refs": [
          804
        ]
      },
      {
        "with": "Insulin and sulfonylureas",
        "level": "moderate",
        "text": "Raises the risk of low blood sugar in people with type 2 diabetes",
        "evidence": "established",
        "detail": "The label says lowering the dose of the insulin or insulin secretagogue may reduce the risk, and that blood glucose should be checked before and during treatment.",
        "refs": [
          804
        ]
      },
      {
        "with": "Oral medications",
        "level": "low",
        "text": "Slowed stomach emptying lowers and delays peak levels of some oral drugs",
        "evidence": "established",
        "detail": "In label studies, peak levels fell 31% for acetaminophen and digoxin and 38% for atorvastatin, with little or no change in total exposure. The label advises watching for effects of delayed absorption.",
        "refs": [
          804
        ]
      },
      {
        "with": "General anesthesia or deep sedation",
        "level": "moderate",
        "text": "Rare reports of food in the stomach being inhaled during anesthesia",
        "evidence": "established",
        "detail": "The label warns of rare postmarketing reports of pulmonary aspiration during general anesthesia or deep sedation, and asks patients to tell their care team about planned procedures.",
        "refs": [
          804
        ]
      }
    ],
    "lisdexamfetamine": [
      {
        "with": "Serotonergic drugs",
        "level": "moderate",
        "text": "Raises the risk of serotonin syndrome",
        "evidence": "established",
        "detail": "The label advises starting low and watching for serotonin syndrome, especially when starting or raising the dose.",
        "refs": [
          126
        ]
      },
      {
        "with": "Urinary alkalinizing agents",
        "level": "moderate",
        "text": "Raise amphetamine levels; avoid together",
        "evidence": "established",
        "detail": "Agents that make urine more alkaline increase blood levels of the active dextroamphetamine. The label says to avoid combining them.",
        "refs": [
          126
        ]
      },
      {
        "with": "Urinary acidifying agents",
        "level": "low",
        "text": "Lower amphetamine levels and effect",
        "evidence": "established",
        "detail": "Agents that acidify urine reduce dextroamphetamine blood levels.",
        "refs": [
          126
        ]
      },
      {
        "with": "Tricyclic antidepressants",
        "level": "moderate",
        "text": "Can raise brain amphetamine levels and add to heart effects",
        "evidence": "established",
        "detail": "The label advises frequent monitoring and adjusting or changing therapy as needed.",
        "refs": [
          126
        ]
      }
    ],
    "melanotan-1": [
      {
        "with": "Anticoagulants, aspirin and NSAIDs",
        "level": "low",
        "text": "More bruising or bleeding at the implant site",
        "evidence": "established",
        "detail": "This applies to the licensed afamelanotide implant (Scenesse). The EU label notes no interaction studies have been done and urges caution because data are limited.",
        "refs": [
          2404
        ]
      }
    ],
    "melatonin": [
      {
        "with": "Zolpidem, benzodiazepines and other sedative hypnotics",
        "level": "moderate",
        "text": "Add to the sedative effect",
        "evidence": "established",
        "detail": "In a clinical trial, melatonin plus zolpidem impaired attention, memory and coordination more than zolpidem alone one hour after dosing.",
        "refs": [
          871
        ]
      },
      {
        "with": "Alcohol",
        "level": "moderate",
        "text": "Reduces melatonin's effect on sleep",
        "evidence": "established",
        "detail": "The SmPC says alcohol should not be taken with melatonin because it makes it less effective for sleep.",
        "refs": [
          871
        ]
      },
      {
        "with": "Other CYP1A2 inhibitors (quinolone antibiotics, cimetidine, estrogens, methoxsalen)",
        "level": "low",
        "text": "Can raise melatonin levels",
        "evidence": "established",
        "detail": "The SmPC advises caution with these medicines because they slow melatonin's breakdown and raise its levels.",
        "refs": [
          871
        ]
      },
      {
        "with": "Carbamazepine, rifampicin and cigarette smoking",
        "level": "low",
        "text": "May lower melatonin levels",
        "evidence": "established",
        "detail": "These induce CYP1A2, which clears melatonin, and may reduce its plasma concentration.",
        "refs": [
          871
        ]
      }
    ],
    "meldonium": [
      {
        "with": "Heart and blood pressure medicines (glyceryl trinitrate, nifedipine, beta blockers, other blood pressure drugs, peripheral vasodilators)",
        "level": "moderate",
        "text": "May strengthen the effect of these medicines",
        "evidence": "established",
        "detail": "The SmPC says meldonium may intensify the action of these cardiovascular medicines and that their doses might need to be reduced. It also says meldonium may be used together with anticoagulants, antianginals, antiarrhythmics, diuretics and cardiac glycosides.",
        "refs": [
          2207
        ]
      }
    ],
    "metformin": [
      {
        "with": "Carbonic anhydrase inhibitors (topiramate, zonisamide, acetazolamide)",
        "level": "moderate",
        "text": "Can add to the risk of lactic acidosis",
        "evidence": "established",
        "detail": "These drugs lower bicarbonate and can cause metabolic acidosis. The label names them as a lactic acidosis risk factor and advises more frequent monitoring.",
        "refs": [
          2000
        ]
      },
      {
        "with": "Drugs that slow metformin clearance (ranolazine, vandetanib, dolutegravir, cimetidine)",
        "level": "moderate",
        "text": "Raise metformin levels and the risk of lactic acidosis",
        "evidence": "established",
        "detail": "Drugs that block the kidney transporters OCT2 and MATE reduce metformin clearance. The label advises weighing benefits and risks before combining them.",
        "refs": [
          2000
        ]
      },
      {
        "with": "Iodinated contrast (imaging)",
        "level": "moderate",
        "text": "Contrast dye can harm the kidneys and lead to metformin build-up",
        "evidence": "established",
        "detail": "The label says to stop metformin at or before contrast imaging in people with reduced kidney function, liver disease, alcoholism or heart failure, or with contrast given into an artery, and to restart only once kidney function is rechecked as stable 48 hours later.",
        "refs": [
          2000
        ]
      },
      {
        "with": "Alcohol",
        "level": "moderate",
        "text": "Heavy or binge drinking raises the risk of lactic acidosis",
        "evidence": "established",
        "detail": "Alcohol adds to metformin's effect on lactate metabolism. The label advises warning patients against excessive intake.",
        "refs": [
          2000
        ]
      },
      {
        "with": "Insulin and sulfonylureas",
        "level": "moderate",
        "text": "Raises the risk of low blood sugar",
        "evidence": "established",
        "detail": "Metformin adds to the effect of insulin and insulin secretagogues. The label says their dose may need lowering.",
        "refs": [
          2000
        ]
      },
      {
        "with": "Drugs that raise blood sugar (steroids, thiazides, thyroid hormone, estrogens and others)",
        "level": "low",
        "text": "Can undo glucose control",
        "evidence": "established",
        "detail": "The label advises watching blood glucose closely when such drugs are started, and watching for low blood sugar when they are stopped.",
        "refs": [
          2000
        ]
      }
    ],
    "methylene-blue": [
      {
        "with": "SSRIs, SNRIs, MAOIs and other serotonergic drugs",
        "level": "high",
        "text": "Can cause serious or fatal serotonin syndrome",
        "evidence": "established",
        "detail": "This is a boxed warning on the US label. The label says to avoid the combination, to stop methylene blue if signs of serotonin syndrome appear, and that serotonergic drugs should not be taken within 72 hours after the last dose.",
        "refs": [
          550
        ]
      },
      {
        "with": "Opioids",
        "level": "high",
        "text": "Can cause serious or fatal serotonin syndrome",
        "evidence": "established",
        "detail": "The boxed warning names opioids alongside serotonergic drugs. The label says to avoid using them together.",
        "refs": [
          550
        ]
      },
      {
        "with": "Midazolam, caffeine, warfarin and dextromethorphan",
        "level": "low",
        "text": "No change in their blood levels in a clinical study",
        "evidence": "established",
        "detail": "In a cocktail study described on the label, one intravenous dose of methylene blue did not change exposure to these probe drugs for CYP3A4, CYP1A2, CYP2C9 and CYP2D6. In lab tests it does inhibit several CYP and UGT enzymes and the P-gp, OCT2 and MATE transporters.",
        "refs": [
          550
        ]
      }
    ],
    "methylphenidate": [
      {
        "with": "MAO inhibitors",
        "level": "high",
        "text": "Contraindicated together or within 14 days",
        "evidence": "established",
        "detail": "The combination can cause hypertensive crisis, with outcomes that include death, stroke and heart attack.",
        "refs": [
          127
        ]
      },
      {
        "with": "Antihypertensives",
        "level": "moderate",
        "text": "May weaken blood pressure control",
        "evidence": "established",
        "detail": "The label advises closer blood pressure monitoring and adjusting the antihypertensive as needed.",
        "refs": [
          127
        ]
      },
      {
        "with": "Halogenated anesthetics",
        "level": "moderate",
        "text": "Risk of sudden blood pressure and heart rate rises in surgery",
        "evidence": "established",
        "detail": "The label advises avoiding methylphenidate on the day of surgery when these anesthetics are used.",
        "refs": [
          127
        ]
      },
      {
        "with": "Risperidone",
        "level": "moderate",
        "text": "More risk of movement side effects",
        "evidence": "established",
        "detail": "Extrapyramidal symptoms may increase when either drug's dose is changed. The label advises monitoring.",
        "refs": [
          127
        ]
      }
    ],
    "minoxidil": [
      {
        "with": "Guanethidine (oral minoxidil)",
        "level": "moderate",
        "text": "Can cause profound drops in blood pressure on standing",
        "evidence": "established",
        "detail": "This is on the oral tablet label. It advises stopping guanethidine well before starting oral minoxidil, or starting in hospital if that is not possible.",
        "refs": [
          2401
        ]
      },
      {
        "with": "Other medicines on the scalp (topical minoxidil)",
        "level": "unknown",
        "text": "Do not combine, per the over-the-counter label",
        "evidence": "established",
        "detail": "The Men's Rogaine foam Drug Facts label says not to use it if other medicines are used on the scalp.",
        "refs": [
          2402
        ]
      }
    ],
    "mirabegron": [
      {
        "with": "Digoxin",
        "level": "moderate",
        "text": "Raises digoxin levels",
        "evidence": "established",
        "detail": "Mirabegron 100 mg modestly raised digoxin levels. The label advises starting digoxin at the lowest dose and adjusting by blood levels.",
        "refs": [
          87
        ]
      },
      {
        "with": "Antimuscarinic bladder drugs such as solifenacin",
        "level": "moderate",
        "text": "Urinary retention has been reported with the combination",
        "evidence": "established",
        "detail": "Urinary retention has occurred in people taking mirabegron with antimuscarinic overactive-bladder drugs and in people with bladder outlet obstruction. The label advises caution and watching for symptoms.",
        "refs": [
          87
        ]
      },
      {
        "with": "Ketoconazole and other strong CYP3A4 inhibitors",
        "level": "low",
        "text": "Raise mirabegron exposure without a dose change",
        "evidence": "established",
        "detail": "Ketoconazole raised mirabegron's peak level 45% and total exposure 80%. The label does not require a dose adjustment.",
        "refs": [
          87
        ]
      }
    ],
    "modafinil": [
      {
        "with": "Hormonal contraceptives (e.g. ethinyl estradiol)",
        "level": "moderate",
        "text": "May make hormonal contraception fail",
        "evidence": "established",
        "detail": "Modafinil induces CYP3A4, which clears steroidal contraceptives. The label recommends another or an added method of contraception during treatment and for one month after stopping.",
        "refs": [
          131
        ]
      },
      {
        "with": "Cyclosporine",
        "level": "moderate",
        "text": "Lowers cyclosporine blood levels",
        "evidence": "established",
        "detail": "The label advises monitoring cyclosporine levels and adjusting its dose.",
        "refs": [
          131
        ]
      },
      {
        "with": "CYP2C19 substrates (e.g. phenytoin, diazepam, omeprazole, clomipramine)",
        "level": "moderate",
        "text": "Raises their exposure",
        "evidence": "established",
        "detail": "Modafinil inhibits CYP2C19. The label says the dose of these drugs may need adjusting. In people who lack CYP2D6, some tricyclic and SSRI antidepressants may also rise.",
        "refs": [
          131
        ]
      },
      {
        "with": "Warfarin",
        "level": "moderate",
        "text": "May change anticoagulant effect",
        "evidence": "established",
        "detail": "The label advises more frequent prothrombin time or INR checks when the two are combined.",
        "refs": [
          131
        ]
      },
      {
        "with": "MAO inhibitors",
        "level": "moderate",
        "text": "Use with caution",
        "evidence": "established",
        "detail": "The label asks for caution when an MAOI and modafinil are taken together.",
        "refs": [
          131
        ]
      }
    ],
    "naltrexone": [
      {
        "with": "Opioid painkillers, methadone and buprenorphine",
        "level": "high",
        "text": "Contraindicated: blocks opioids and can trigger severe withdrawal",
        "evidence": "established",
        "detail": "Naltrexone is contraindicated in anyone taking opioid analgesics or dependent on opioids. In a dependent person it can set off withdrawal within minutes that may need hospital or intensive care. The label asks for an opioid-free gap of 7 to 10 days, and up to two weeks after methadone or buprenorphine.",
        "refs": [
          2107
        ]
      },
      {
        "with": "Large doses of opioids taken to overcome the block",
        "level": "high",
        "text": "Can cause fatal overdose",
        "evidence": "established",
        "detail": "The blockade can be overcome, and trying to do so with large opioid doses can cause life-threatening intoxication. After naltrexone stops, tolerance is lower and previously tolerated doses can be fatal.",
        "refs": [
          2107
        ]
      },
      {
        "with": "Opioid-containing cough, cold and antidiarrheal medicines",
        "level": "moderate",
        "text": "These medicines may not work",
        "evidence": "established",
        "detail": "Naltrexone blocks their opioid effect. If opioid pain relief is needed in an emergency, more may be required and breathing can be suppressed more deeply and for longer.",
        "refs": [
          2107
        ]
      },
      {
        "with": "Disulfiram and other liver-toxic drugs",
        "level": "moderate",
        "text": "Combining two liver-toxic drugs is not usually recommended",
        "evidence": "established",
        "detail": "Naltrexone has been linked to hepatitis. The label says the safety of combining it with disulfiram is unknown and advises against pairing two potentially liver-toxic drugs unless the benefit is clear.",
        "refs": [
          2107
        ]
      },
      {
        "with": "Thioridazine",
        "level": "low",
        "text": "Drowsiness and lethargy reported",
        "evidence": "established",
        "detail": "The label notes lethargy and somnolence after naltrexone with thioridazine.",
        "refs": [
          2107
        ]
      }
    ],
    "nandrolone": [
      {
        "with": "Warfarin and other oral anticoagulants",
        "level": "moderate",
        "text": "Raises sensitivity to anticoagulants and bleeding risk",
        "evidence": "established",
        "detail": "The label says anabolic steroids may increase sensitivity to oral anticoagulants, so the anticoagulant dose may need to be lowered. It calls for close monitoring of prothrombin time, especially when nandrolone is started or stopped.",
        "refs": [
          268
        ]
      }
    ],
    "nebivolol": [
      {
        "with": "CYP2D6 inhibitors (fluoxetine, paroxetine, quinidine, propafenone)",
        "level": "moderate",
        "text": "Raise nebivolol levels",
        "evidence": "established",
        "detail": "Nebivolol is cleared mainly by CYP2D6. The label urges caution and says the nebivolol dose may need to be reduced.",
        "refs": [
          2104
        ]
      },
      {
        "with": "Verapamil and diltiazem",
        "level": "moderate",
        "text": "Can slow the heart and drop blood pressure too far",
        "evidence": "established",
        "detail": "Both drug types depress heart rate, conduction and contractility. The label advises monitoring ECG and blood pressure with the combination.",
        "refs": [
          2104
        ]
      },
      {
        "with": "Digoxin and other digitalis glycosides",
        "level": "moderate",
        "text": "Raise the risk of a slow heart rate",
        "evidence": "established",
        "detail": "Both slow conduction through the heart and lower heart rate.",
        "refs": [
          2104
        ]
      },
      {
        "with": "Clonidine",
        "level": "moderate",
        "text": "Stopping clonidine while on a beta blocker can cause rebound high blood pressure",
        "evidence": "established",
        "detail": "The label says to stop nebivolol several days before tapering clonidine. It also warns against combining nebivolol with other beta blockers, and to watch closely with reserpine or guanethidine.",
        "refs": [
          2104
        ]
      },
      {
        "with": "Insulin and other diabetes drugs",
        "level": "moderate",
        "text": "Can hide the warning signs of low blood sugar",
        "evidence": "established",
        "detail": "Beta blockers can blunt a fast heartbeat, an early sign of hypoglycemia, and raise the risk of severe or prolonged lows, especially in diabetes or when fasting.",
        "refs": [
          2104
        ]
      }
    ],
    "nicotine": [
      {
        "with": "Prescription medicines for depression or asthma",
        "level": "moderate",
        "text": "Dose may need adjusting",
        "evidence": "established",
        "detail": "The NicoDerm CQ Drug Facts label tells users to ask a doctor or pharmacist first, because the prescription dose may need to change.",
        "refs": [
          135
        ]
      },
      {
        "with": "Non-nicotine stop-smoking drugs",
        "level": "unknown",
        "text": "Ask a doctor or pharmacist first",
        "evidence": "established",
        "detail": "The Drug Facts label asks users of other stop-smoking medicines to check before using the patch.",
        "refs": [
          135
        ]
      }
    ],
    "ondansetron": [
      {
        "with": "Apomorphine",
        "level": "high",
        "text": "Contraindicated: profound low blood pressure and fainting",
        "evidence": "established",
        "detail": "The label lists apomorphine as a contraindication because the combination can cause profound hypotension and loss of consciousness.",
        "refs": [
          2106
        ]
      },
      {
        "with": "Serotonergic drugs (SSRIs, SNRIs, MAO inhibitors, mirtazapine, fentanyl, lithium, tramadol, IV methylene blue)",
        "level": "moderate",
        "text": "Raise the risk of serotonin syndrome",
        "evidence": "established",
        "detail": "Most serotonin syndrome reports with 5-HT3 blockers involved another serotonergic drug, and some were fatal. The label advises watching for symptoms and stopping ondansetron if they appear.",
        "refs": [
          2106
        ]
      },
      {
        "with": "Other QT-prolonging drugs",
        "level": "moderate",
        "text": "Add to the risk of an abnormal heart rhythm",
        "evidence": "established",
        "detail": "Ondansetron prolongs the QT interval, and torsade de pointes has been reported. The label recommends ECG monitoring with other QT-prolonging drugs or low potassium or magnesium.",
        "refs": [
          2106
        ]
      },
      {
        "with": "Strong CYP3A4 inducers (phenytoin, carbamazepine, rifampin)",
        "level": "low",
        "text": "Lower ondansetron levels",
        "evidence": "established",
        "detail": "These drugs significantly speed ondansetron clearance, but the label recommends no dose change.",
        "refs": [
          2106
        ]
      },
      {
        "with": "Tramadol",
        "level": "low",
        "text": "May weaken tramadol's pain relief",
        "evidence": "established",
        "detail": "Two small trials found people used more patient-controlled tramadol alongside ondansetron. The label advises checking that pain stays controlled.",
        "refs": [
          2106
        ]
      }
    ],
    "orforglipron": [
      {
        "with": "Strong CYP3A4 inhibitors",
        "level": "moderate",
        "text": "The label caps the orforglipron dose",
        "evidence": "established",
        "detail": "Strong CYP3A4 inhibitors raise orforglipron levels, so the label sets a lower maximum dose. It also says to avoid strong CYP3A4 inhibitors that block OATP1B, such as ritonavir.",
        "refs": [
          476
        ]
      },
      {
        "with": "Strong CYP3A4 inducers",
        "level": "moderate",
        "text": "May make orforglipron less effective",
        "evidence": "established",
        "detail": "The label says to avoid strong CYP3A4 inducers. For moderate inducers it advises watching how well the drug works and raising the dose if needed.",
        "refs": [
          476
        ]
      },
      {
        "with": "Insulin and sulfonylureas",
        "level": "moderate",
        "text": "Raises the risk of low blood sugar",
        "evidence": "established",
        "detail": "Orforglipron stimulates insulin release when blood sugar is high. The label advises considering a lower dose of insulin or insulin secretagogues when starting.",
        "refs": [
          476
        ]
      },
      {
        "with": "Simvastatin",
        "level": "moderate",
        "text": "The label caps the simvastatin dose",
        "evidence": "established",
        "detail": "The label says not to exceed simvastatin 20 mg once daily while taking orforglipron.",
        "refs": [
          476
        ]
      },
      {
        "with": "Oral hormonal contraceptives",
        "level": "moderate",
        "text": "May be absorbed less reliably",
        "evidence": "established",
        "detail": "Orforglipron slows stomach emptying, which can change how other oral drugs are absorbed. The label advises a non-oral method or an added barrier method for 30 days after starting and after each dose increase.",
        "refs": [
          476
        ]
      }
    ],
    "ostarine": [
      {
        "with": "Rifampin (strong CYP3A4 inducer)",
        "level": "low",
        "text": "Lowers enobosarm blood levels",
        "evidence": "human obs",
        "detail": "In an open-label phase I study, rifampin had the largest effect of the drugs tested and lowered both peak level and total exposure of enobosarm. The authors judged the risk of clinically relevant interactions to be low.",
        "refs": [
          2208
        ]
      },
      {
        "with": "Probenecid (UGT inhibitor)",
        "level": "low",
        "text": "Raises levels of enobosarm and its main metabolite",
        "evidence": "human obs",
        "detail": "In the same phase I series, probenecid increased exposure to both enobosarm and its glucuronide metabolite.",
        "refs": [
          2208
        ]
      },
      {
        "with": "Itraconazole, celecoxib and rosuvastatin",
        "level": "low",
        "text": "No meaningful change in either drug’s levels",
        "evidence": "human obs",
        "detail": "Itraconazole did not change enobosarm exposure, and enobosarm did not meaningfully change celecoxib or rosuvastatin levels in healthy volunteers.",
        "refs": [
          2208
        ]
      }
    ],
    "oxytocin": [
      {
        "with": "Prostaglandins and their analogues",
        "level": "high",
        "text": "Each can strengthen the other's effect on the uterus",
        "evidence": "established",
        "detail": "The UK label says oxytocin must not be given within 6 hours after vaginal prostaglandins. It notes that the two drugs can boost each other's contractions of the uterus.",
        "refs": [
          2301
        ]
      },
      {
        "with": "Drugs that prolong the QT interval",
        "level": "moderate",
        "text": "May add to the risk of a dangerous heart rhythm",
        "evidence": "established",
        "detail": "The UK label calls oxytocin potentially arrhythmogenic and advises caution in people taking drugs that prolong the QT interval or with long QT syndrome.",
        "refs": [
          2301
        ]
      },
      {
        "with": "Vasoconstrictors and sympathomimetics, including those in local anesthetics and caudal block",
        "level": "moderate",
        "text": "Can raise blood pressure sharply",
        "evidence": "established",
        "detail": "The US label reports severe high blood pressure when oxytocin was given 3 to 4 hours after a vasoconstrictor used with caudal block anesthesia. The UK label says oxytocin may strengthen the pressor effect of these drugs.",
        "refs": [
          2300,
          2301
        ]
      },
      {
        "with": "Inhalation anesthetics (cyclopropane, halothane, sevoflurane, desflurane)",
        "level": "moderate",
        "text": "Can weaken oxytocin's effect and disturb heart rhythm",
        "evidence": "established",
        "detail": "The UK label says these anesthetics relax the uterus and may reduce oxytocin's effect, and that using them together has been reported to cause heart rhythm problems. The US label reports low blood pressure and slow heart rate with abnormal rhythm with cyclopropane.",
        "refs": [
          2300,
          2301
        ]
      }
    ],
    "piracetam": [
      {
        "with": "Anticoagulants and antiplatelet drugs, including low-dose aspirin",
        "level": "moderate",
        "text": "May add to bleeding risk",
        "evidence": "established",
        "detail": "Piracetam reduces platelet aggregation. The UK label advises caution in people using anticoagulants or antiplatelet drugs. In a study with acenocoumarol, piracetam did not change the anticoagulant dose needed but further lowered platelet aggregation, fibrinogen and blood viscosity.",
        "refs": [
          80
        ]
      },
      {
        "with": "Thyroid extract (T3 + T4)",
        "level": "moderate",
        "text": "Confusion, irritability and sleep problems reported",
        "evidence": "established",
        "detail": "The UK label reports these effects during combined use with thyroid extract.",
        "refs": [
          80
        ]
      },
      {
        "with": "Carbamazepine, phenytoin, phenobarbital and valproate",
        "level": "low",
        "text": "No change in their blood levels",
        "evidence": "established",
        "detail": "The UK label reports that piracetam taken for 4 weeks did not change blood levels of these seizure drugs in people with stable epilepsy. About 90% of piracetam leaves the body unchanged in urine, so metabolic interactions are considered unlikely.",
        "refs": [
          80
        ]
      },
      {
        "with": "Alcohol",
        "level": "low",
        "text": "No change in levels of either",
        "evidence": "established",
        "detail": "The UK label reports that alcohol did not change piracetam levels and piracetam did not change blood alcohol levels.",
        "refs": [
          80
        ]
      }
    ],
    "pitavastatin": [
      {
        "with": "Cyclosporine",
        "level": "high",
        "text": "Contraindicated: sharply raises pitavastatin levels",
        "evidence": "established",
        "detail": "Cyclosporine significantly increases pitavastatin exposure and the risk of myopathy and rhabdomyolysis. The label lists the combination as a contraindication.",
        "refs": [
          2101
        ]
      },
      {
        "with": "Gemfibrozil",
        "level": "moderate",
        "text": "Raises the risk of muscle breakdown",
        "evidence": "established",
        "detail": "Gemfibrozil can cause myopathy on its own, and the risk rises when it is combined with a statin. The label says to avoid the combination.",
        "refs": [
          2101
        ]
      },
      {
        "with": "Erythromycin",
        "level": "moderate",
        "text": "Significantly raises pitavastatin exposure",
        "evidence": "established",
        "detail": "The label caps the pitavastatin dose in people taking erythromycin because of the higher risk of muscle damage.",
        "refs": [
          2101
        ]
      },
      {
        "with": "Rifampin",
        "level": "moderate",
        "text": "Raises peak pitavastatin levels",
        "evidence": "established",
        "detail": "The label caps the pitavastatin dose in people taking rifampin.",
        "refs": [
          2101
        ]
      },
      {
        "with": "Fenofibrate, niacin and colchicine",
        "level": "moderate",
        "text": "Add to the risk of muscle damage",
        "evidence": "established",
        "detail": "Each can cause myopathy alone, and cases have been reported with the combinations. The label asks prescribers to weigh benefit against risk.",
        "refs": [
          2101
        ]
      }
    ],
    "pramipexole": [
      {
        "with": "Dopamine antagonists (antipsychotics such as phenothiazines, butyrophenones, thioxanthenes; metoclopramide)",
        "level": "moderate",
        "text": "May weaken the effect of pramipexole",
        "evidence": "established",
        "detail": "Because pramipexole is a dopamine agonist, drugs that block dopamine receptors may reduce how well it works.",
        "refs": [
          2111
        ]
      },
      {
        "with": "Sedating medicines and alcohol",
        "level": "moderate",
        "text": "Raise the risk of sleepiness and falling asleep during daily activities",
        "evidence": "established",
        "detail": "The label tells prescribers to ask about sedating medicines and alcohol before starting, because sudden sleep episodes have caused accidents, including while driving.",
        "refs": [
          2111
        ]
      },
      {
        "with": "Cimetidine",
        "level": "moderate",
        "text": "Raises pramipexole levels",
        "evidence": "established",
        "detail": "The label names cimetidine among medicines that increase pramipexole plasma levels and so may add to somnolence.",
        "refs": [
          2111
        ]
      }
    ],
    "propranolol": [
      {
        "with": "Verapamil and diltiazem",
        "level": "moderate",
        "text": "Can cause severe slowing of the heart, heart block or heart failure",
        "evidence": "established",
        "detail": "The label reports significant bradycardia, heart failure and cardiovascular collapse with verapamil plus beta blockers, and heart block and heart failure with diltiazem in people with heart disease.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Epinephrine",
        "level": "moderate",
        "text": "Can cause a sharp rise in blood pressure",
        "evidence": "established",
        "detail": "With the beta effect blocked, epinephrine's alpha effect goes unopposed, which can cause uncontrolled hypertension. Allergy patients on beta blockers may also respond poorly to usual epinephrine doses.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Quinidine, propafenone and amiodarone",
        "level": "moderate",
        "text": "Add to beta blockade and slow the heart",
        "evidence": "established",
        "detail": "Quinidine raises propranolol levels and can cause low blood pressure on standing; propafenone and amiodarone have additive heart-slowing effects.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Lidocaine",
        "level": "moderate",
        "text": "Propranolol slows lidocaine clearance",
        "evidence": "established",
        "detail": "Lidocaine toxicity has been reported with the combination.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Clonidine",
        "level": "moderate",
        "text": "Withdrawing clonidine on a beta blocker needs care",
        "evidence": "established",
        "detail": "The label says to give propranolol cautiously to people coming off clonidine, since rebound high blood pressure can occur.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Warfarin",
        "level": "moderate",
        "text": "Raises warfarin levels",
        "evidence": "established",
        "detail": "The label advises monitoring prothrombin time.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Haloperidol",
        "level": "moderate",
        "text": "Low blood pressure and cardiac arrest have been reported",
        "evidence": "established",
        "detail": "The label lists hypotension and cardiac arrest with propranolol and haloperidol together.",
        "refs": [
          2105
        ]
      },
      {
        "with": "Insulin and other diabetes drugs",
        "level": "moderate",
        "text": "Can hide the warning signs of low blood sugar",
        "evidence": "established",
        "detail": "Beta blockade can mask the fast pulse of hypoglycemia, and propranolol itself has been linked to low blood sugar during fasting or after long exertion.",
        "refs": [
          2105
        ]
      }
    ],
    "proviron": [
      {
        "with": "Warfarin and other coumarin anticoagulants",
        "level": "moderate",
        "text": "Can strengthen the effect of anticoagulants",
        "evidence": "established",
        "detail": "The SmPC says mesterolone can raise the effect of coumarin anticoagulants and calls for closer INR checks, especially when the androgen is started or stopped.",
        "refs": [
          2206
        ]
      },
      {
        "with": "Insulin and oral diabetes medicines",
        "level": "moderate",
        "text": "May improve glucose control and lower drug needs",
        "evidence": "established",
        "detail": "The SmPC says anabolic steroids can improve insulin sensitivity, so insulin or oral diabetes medicine doses may need to come down.",
        "refs": [
          2206
        ]
      },
      {
        "with": "Strong CYP3A4 inhibitors (azole antifungals, clarithromycin, fluvoxamine, verapamil, diltiazem, grapefruit juice)",
        "level": "moderate",
        "text": "Expected to raise mesterolone levels",
        "evidence": "established",
        "detail": "The SmPC expects higher mesterolone exposure with strong CYP3A4 inhibitors and advises watching the response. If androgen side effects appear, a dose cut or stopping one of the drugs should be considered. No specific studies have been done.",
        "refs": [
          2206
        ]
      },
      {
        "with": "Enzyme inducers (rifampin, carbamazepine, phenobarbital, phenytoin)",
        "level": "moderate",
        "text": "May lower mesterolone's effect",
        "evidence": "established",
        "detail": "The SmPC says enzyme inducers can speed the clearance of sex hormones and reduce their effect.",
        "refs": [
          2206
        ]
      },
      {
        "with": "Corticosteroids and ACTH",
        "level": "moderate",
        "text": "Can add to fluid retention",
        "evidence": "established",
        "detail": "The SmPC says the combination may raise the risk of fluid retention and edema and should be used carefully, especially with heart, kidney or liver disease.",
        "refs": [
          2206
        ]
      },
      {
        "with": "Ciclosporin",
        "level": "moderate",
        "text": "May raise ciclosporin levels and toxicity",
        "evidence": "established",
        "detail": "The SmPC advises caution and checking ciclosporin levels, especially when the androgen is started or stopped.",
        "refs": [
          2206
        ]
      },
      {
        "with": "Bupropion",
        "level": "moderate",
        "text": "May lower the seizure threshold",
        "evidence": "established",
        "detail": "The SmPC says androgens taken with bupropion may lower the seizure threshold.",
        "refs": [
          2206
        ]
      }
    ],
    "raloxifene": [
      {
        "with": "Cholestyramine and other bile acid resins",
        "level": "moderate",
        "text": "Cut raloxifene absorption by about 60%",
        "evidence": "established",
        "detail": "The label says not to take raloxifene with cholestyramine or other anion exchange resins.",
        "refs": [
          2205
        ]
      },
      {
        "with": "Warfarin",
        "level": "moderate",
        "text": "Can shorten prothrombin time",
        "evidence": "established",
        "detail": "Raloxifene lowered prothrombin time by about 10% in a label study. The label advises closer prothrombin time checks when raloxifene is started or stopped.",
        "refs": [
          2205
        ]
      },
      {
        "with": "Systemic estrogens",
        "level": "moderate",
        "text": "Combined use is not recommended",
        "evidence": "established",
        "detail": "The label says the safety of raloxifene with systemic estrogens has not been established and the combination is not recommended.",
        "refs": [
          2205
        ]
      },
      {
        "with": "Other highly protein-bound drugs (diazepam, diazoxide, lidocaine)",
        "level": "unknown",
        "text": "Possible changes in protein binding",
        "evidence": "established",
        "detail": "Raloxifene is more than 95% protein-bound, and the label advises caution with other highly protein-bound drugs.",
        "refs": [
          2205
        ]
      }
    ],
    "resmetirom": [
      {
        "with": "Moderate CYP2C8 inhibitors such as clopidogrel",
        "level": "moderate",
        "text": "Raise resmetirom levels; the label lowers the dose",
        "evidence": "established",
        "detail": "Clopidogrel raised resmetirom exposure about 1.7-fold. The label tells prescribers to use a reduced dose with moderate CYP2C8 inhibitors and not to combine it with strong ones such as gemfibrozil.",
        "refs": [
          2001
        ]
      },
      {
        "with": "CYP2C8 substrates such as pioglitazone",
        "level": "low",
        "text": "Resmetirom raises exposure to drugs cleared by CYP2C8",
        "evidence": "established",
        "detail": "Pioglitazone exposure rose about 1.5-fold. The label advises closer monitoring for side effects of the other drug, especially where small level changes matter.",
        "refs": [
          2001
        ]
      }
    ],
    "rosuvastatin": [
      {
        "with": "Gemfibrozil",
        "level": "moderate",
        "text": "Raises rosuvastatin levels and the risk of muscle breakdown",
        "evidence": "established",
        "detail": "Gemfibrozil significantly increases rosuvastatin exposure and can cause muscle damage on its own. The label says to avoid the combination, and to cap the rosuvastatin dose if it cannot be avoided.",
        "refs": [
          2100
        ]
      },
      {
        "with": "Cyclosporine",
        "level": "moderate",
        "text": "Raises rosuvastatin exposure about 7-fold",
        "evidence": "established",
        "detail": "The label caps the rosuvastatin dose in people taking cyclosporine because of the higher risk of myopathy and rhabdomyolysis.",
        "refs": [
          2100
        ]
      },
      {
        "with": "Hepatitis C and HIV antivirals",
        "level": "moderate",
        "text": "Many raise rosuvastatin levels sharply",
        "evidence": "established",
        "detail": "The label says to avoid sofosbuvir/velpatasvir/voxilaprevir and ledipasvir/sofosbuvir, and to start low and cap the dose with others such as glecaprevir/pibrentasvir, elbasvir/grazoprevir, and atazanavir or lopinavir boosted with ritonavir.",
        "refs": [
          2100
        ]
      },
      {
        "with": "Other transporter inhibitors (darolutamide, belumosudil, ticagrelor, febuxostat, teriflunomide and others)",
        "level": "moderate",
        "text": "Raise rosuvastatin exposure about 2- to 5-fold",
        "evidence": "established",
        "detail": "Rosuvastatin is carried by OATP1B1 and BCRP and partly cleared by CYP2C9. The label lists a maximum rosuvastatin dose for each of these drugs, and says to avoid tafamidis where possible.",
        "refs": [
          2100
        ]
      },
      {
        "with": "Fenofibrate, niacin and colchicine",
        "level": "moderate",
        "text": "Add to the risk of muscle damage",
        "evidence": "established",
        "detail": "Each can cause myopathy alone, and cases of myopathy and rhabdomyolysis have been reported with the combinations. The label asks prescribers to weigh benefit against risk and watch for muscle symptoms.",
        "refs": [
          2100
        ]
      },
      {
        "with": "Warfarin",
        "level": "moderate",
        "text": "Can raise the INR",
        "evidence": "established",
        "detail": "Rosuvastatin significantly increased the INR in people on warfarin. The label advises checking INR before starting and often after any change.",
        "refs": [
          2100
        ]
      },
      {
        "with": "Aluminum and magnesium hydroxide antacids",
        "level": "low",
        "text": "Halve rosuvastatin absorption when taken together",
        "evidence": "established",
        "detail": "Taking the antacid at the same time cut rosuvastatin exposure by about 50%. The label says to take rosuvastatin at least 2 hours before the antacid.",
        "refs": [
          2100
        ]
      }
    ],
    "scar-cream": [
      {
        "with": "Class I antiarrhythmics (mexiletine, tocainide)",
        "level": "moderate",
        "text": "Absorbed lidocaine adds to their toxic effects",
        "evidence": "established",
        "detail": "Labels for topical lidocaine advise caution in people taking Class I antiarrhythmics because the toxic effects are additive and may be synergistic. This applies to the lidocaine in the cream.",
        "refs": [
          2501
        ]
      },
      {
        "with": "Other local anesthetic products",
        "level": "moderate",
        "text": "Lidocaine from every product adds up",
        "evidence": "established",
        "detail": "Topical lidocaine labels say the total amount absorbed from all local anesthetic products used at the same time must be considered.",
        "refs": [
          2501
        ]
      },
      {
        "with": "Drugs that can cause methemoglobinemia (nitrates, dapsone, sulfonamides, primaquine, other local anesthetics)",
        "level": "moderate",
        "text": "Raises the risk of methemoglobinemia",
        "evidence": "established",
        "detail": "Lidocaine labels list drugs that raise the risk of methemoglobinemia, a blood disorder that reduces oxygen delivery and can turn skin blue-gray.",
        "refs": [
          2501,
          2502
        ]
      }
    ],
    "semaglutide": [
      {
        "with": "Insulin and sulfonylureas",
        "level": "moderate",
        "text": "Raises the risk of low blood sugar, including severe episodes",
        "evidence": "established",
        "detail": "Semaglutide adds to the glucose-lowering effect of insulin and insulin secretagogues. The label tells prescribers to consider lowering the insulin or sulfonylurea dose when semaglutide is started.",
        "refs": [
          76
        ]
      },
      {
        "with": "Levothyroxine (oral semaglutide)",
        "level": "moderate",
        "text": "Oral semaglutide raised levothyroxine exposure by about a third",
        "evidence": "established",
        "detail": "In a drug interaction study, total thyroxine exposure (AUC) rose 33% when levothyroxine was taken with semaglutide tablets; peak level did not change. The tablet label advises closer clinical or laboratory monitoring of oral drugs with a narrow therapeutic index.",
        "refs": [
          76
        ]
      },
      {
        "with": "Other oral medications",
        "level": "low",
        "text": "Slowed stomach emptying can change how oral drugs are absorbed",
        "evidence": "established",
        "detail": "In clinical pharmacology studies semaglutide did not change the absorption of the oral drugs tested to a clinically relevant degree, including warfarin, metformin, digoxin, lisinopril and oral contraceptives. The labels still advise caution with oral medicines.",
        "refs": [
          76
        ]
      },
      {
        "with": "General anesthesia or deep sedation",
        "level": "moderate",
        "text": "Rare reports of food in the stomach being inhaled during anesthesia",
        "evidence": "established",
        "detail": "There are rare postmarketing reports of pulmonary aspiration in people on GLP-1 receptor agonists having general anesthesia or deep sedation, some with food still in the stomach despite fasting. The label asks patients to tell their care team about planned procedures.",
        "refs": [
          76
        ]
      }
    ],
    "sildenafil": [
      {
        "with": "Nitrates and nitrites in any form (nitroglycerin, isosorbide, amyl nitrite 'poppers')",
        "level": "high",
        "text": "Contraindicated: can drop blood pressure dangerously",
        "evidence": "established",
        "detail": "Sildenafil strengthens the blood-pressure-lowering effect of nitric oxide donors, taken regularly or occasionally. The label says it is unknown when nitrates can be given safely after a dose.",
        "refs": [
          2108
        ]
      },
      {
        "with": "Riociguat and other guanylate cyclase stimulators",
        "level": "high",
        "text": "Contraindicated: added blood pressure drop",
        "evidence": "established",
        "detail": "PDE5 inhibitors may potentiate the hypotensive effect of GC stimulators, so the label says not to combine them.",
        "refs": [
          2108
        ]
      },
      {
        "with": "Ritonavir and other strong CYP3A4 inhibitors (ketoconazole, itraconazole, saquinavir)",
        "level": "moderate",
        "text": "Raise sildenafil levels many-fold",
        "evidence": "established",
        "detail": "Ritonavir raised sildenafil exposure 11-fold, and saquinavir and erythromycin roughly doubled to tripled it. The label recommends a lower sildenafil dose and limits how often it is taken with ritonavir.",
        "refs": [
          2108
        ]
      },
      {
        "with": "Alpha blockers (doxazosin, terazosin, tamsulosin and others)",
        "level": "moderate",
        "text": "Can cause symptomatic low blood pressure",
        "evidence": "established",
        "detail": "Both are vasodilators. The label says to be stable on the alpha blocker first and to start sildenafil at the lowest dose.",
        "refs": [
          2108
        ]
      },
      {
        "with": "Blood pressure medicines",
        "level": "low",
        "text": "Add a small further drop in blood pressure",
        "evidence": "established",
        "detail": "With amlodipine, blood pressure fell a further 8/7 mmHg on average.",
        "refs": [
          2108
        ]
      },
      {
        "with": "Other PDE5 inhibitors or erectile dysfunction treatments",
        "level": "moderate",
        "text": "Combination not recommended",
        "evidence": "established",
        "detail": "These combinations have not been studied and may lower blood pressure further.",
        "refs": [
          2108
        ]
      }
    ],
    "sirolimus": [
      {
        "with": "Strong CYP3A4 and P-gp inhibitors (ketoconazole, voriconazole, itraconazole, erythromycin, telithromycin, clarithromycin)",
        "level": "high",
        "text": "Label says to avoid: raise sirolimus levels",
        "evidence": "established",
        "detail": "Sirolimus is cleared by CYP3A4 and P-gp. The label says to avoid strong inhibitors and consider alternatives with less interaction.",
        "refs": [
          2113
        ]
      },
      {
        "with": "Strong CYP3A4 and P-gp inducers (rifampin, rifabutin)",
        "level": "moderate",
        "text": "Label says to avoid: lower sirolimus levels",
        "evidence": "established",
        "detail": "Inducers can drop sirolimus below the level needed to work. The label says to avoid them and consider other agents.",
        "refs": [
          2113
        ]
      },
      {
        "with": "Grapefruit juice",
        "level": "moderate",
        "text": "Raises sirolimus levels",
        "evidence": "established",
        "detail": "The label says grapefruit juice must not be taken with sirolimus or used to dilute it.",
        "refs": [
          2113
        ]
      },
      {
        "with": "Cyclosporine",
        "level": "moderate",
        "text": "Raises sirolimus levels",
        "evidence": "established",
        "detail": "Cyclosporine increases sirolimus concentrations. The label says to take sirolimus 4 hours after cyclosporine, and long-term use of the pair is linked to worse kidney function.",
        "refs": [
          2113
        ]
      },
      {
        "with": "Cannabidiol",
        "level": "moderate",
        "text": "May raise sirolimus levels",
        "evidence": "established",
        "detail": "The label says to monitor for sirolimus toxicity and to consider reducing the sirolimus dose.",
        "refs": [
          2113
        ]
      },
      {
        "with": "ACE inhibitors",
        "level": "moderate",
        "text": "Raise the risk of angioedema",
        "evidence": "established",
        "detail": "Sirolimus is linked to angioedema, and other drugs that cause it, such as ACE inhibitors, may add to the risk.",
        "refs": [
          2113
        ]
      },
      {
        "with": "Statins and fibrates",
        "level": "moderate",
        "text": "Muscle injury reported with sirolimus",
        "evidence": "established",
        "detail": "Sirolimus raises cholesterol and triglycerides. Used with statins in trials it was linked to raised CPK, muscle pain and rare rhabdomyolysis.",
        "refs": [
          2113
        ]
      },
      {
        "with": "Live vaccines",
        "level": "moderate",
        "text": "Label says to avoid",
        "evidence": "established",
        "detail": "Live vaccines such as measles, mumps, rubella, oral polio, BCG, yellow fever and varicella should be avoided during sirolimus treatment.",
        "refs": [
          2113
        ]
      }
    ],
    "t3": [
      {
        "with": "Oral anticoagulants such as warfarin",
        "level": "moderate",
        "text": "Increases the blood-thinning effect",
        "evidence": "established",
        "detail": "The label says liothyronine increases the response to oral anticoagulants. The anticoagulant dose may need to be lowered, with close clotting tests.",
        "refs": [
          95
        ]
      },
      {
        "with": "Insulin and other diabetes drugs",
        "level": "moderate",
        "text": "May worsen blood sugar control",
        "evidence": "established",
        "detail": "The label says adding liothyronine may worsen glycemic control and raise the need for diabetes drugs or insulin. It advises close glucose monitoring when starting, changing or stopping it.",
        "refs": [
          95
        ]
      },
      {
        "with": "Digitalis glycosides",
        "level": "moderate",
        "text": "May weaken the effect of digoxin",
        "evidence": "established",
        "detail": "The label says liothyronine may reduce digitalis effects, and the digoxin dose may need to rise as the patient becomes euthyroid.",
        "refs": [
          95
        ]
      },
      {
        "with": "Ketamine",
        "level": "moderate",
        "text": "Can cause marked high blood pressure and fast heart rate",
        "evidence": "established",
        "detail": "The label advises close monitoring of blood pressure and heart rate when ketamine is given with liothyronine.",
        "refs": [
          95
        ]
      },
      {
        "with": "Sympathomimetics",
        "level": "moderate",
        "text": "Can add to each other and strain the heart",
        "evidence": "established",
        "detail": "The label says the effects of both drugs may increase, and thyroid hormones may raise the risk of coronary insufficiency in people with coronary artery disease.",
        "refs": [
          95
        ]
      },
      {
        "with": "Tricyclic and tetracyclic antidepressants",
        "level": "moderate",
        "text": "May raise the effect and toxicity of both",
        "evidence": "established",
        "detail": "The label says the combination may increase the effects and toxicity of both, including arrhythmia and CNS stimulation.",
        "refs": [
          95
        ]
      },
      {
        "with": "Bile acid sequestrants such as cholestyramine",
        "level": "moderate",
        "text": "Reduce absorption of liothyronine",
        "evidence": "established",
        "detail": "The label advises taking liothyronine at least 4 hours before these drugs or monitoring TSH.",
        "refs": [
          95
        ]
      }
    ],
    "tadalafil": [
      {
        "with": "Nitrates in any form (nitroglycerin, isosorbide, amyl nitrite 'poppers')",
        "level": "high",
        "text": "Contraindicated: can drop blood pressure dangerously",
        "evidence": "established",
        "detail": "Tadalafil strengthens the blood-pressure-lowering effect of nitrates. If a nitrate is needed in a life-threatening emergency, the label says at least 48 hours should pass after the last tadalafil dose, with close monitoring.",
        "refs": [
          2109
        ]
      },
      {
        "with": "Riociguat and other guanylate cyclase stimulators",
        "level": "high",
        "text": "Contraindicated: added blood pressure drop",
        "evidence": "established",
        "detail": "The label lists GC stimulators as a contraindication.",
        "refs": [
          2109
        ]
      },
      {
        "with": "Strong CYP3A4 inhibitors (ketoconazole, ritonavir and other HIV protease inhibitors, itraconazole, grapefruit juice)",
        "level": "moderate",
        "text": "Raise tadalafil levels",
        "evidence": "established",
        "detail": "Ketoconazole raised tadalafil exposure by 312% and ritonavir by up to 124%. The label limits the tadalafil dose and how often it is taken with these drugs.",
        "refs": [
          2109
        ]
      },
      {
        "with": "CYP3A4 inducers (rifampin, carbamazepine, phenytoin, phenobarbital)",
        "level": "low",
        "text": "Lower tadalafil levels and may weaken it",
        "evidence": "established",
        "detail": "Rifampin cut tadalafil exposure by 88%. The label gives no dose change but expects reduced effect for once-daily use.",
        "refs": [
          2109
        ]
      },
      {
        "with": "Alpha blockers (doxazosin, tamsulosin, alfuzosin)",
        "level": "moderate",
        "text": "Add to the drop in blood pressure",
        "evidence": "established",
        "detail": "Both are vasodilators, and the label advises caution when combining them.",
        "refs": [
          2109
        ]
      },
      {
        "with": "Alcohol (5 or more units)",
        "level": "moderate",
        "text": "More dizziness and low blood pressure on standing",
        "evidence": "established",
        "detail": "Heavy drinking with tadalafil raised heart rate, lowered standing blood pressure and caused dizziness and headache. Neither changed the other's blood levels.",
        "refs": [
          2109
        ]
      }
    ],
    "tamoxifen": [
      {
        "with": "Warfarin and other coumarin anticoagulants",
        "level": "high",
        "text": "Can sharply raise bleeding risk",
        "evidence": "established",
        "detail": "Tamoxifen is contraindicated with warfarin when used to lower breast cancer risk in high-risk women or after DCIS. In other uses the label warns of a marked rise in anticoagulant effect and calls for close clotting checks.",
        "refs": [
          2204
        ]
      },
      {
        "with": "Strong CYP3A4 inducers (rifampin)",
        "level": "moderate",
        "text": "Sharply lower tamoxifen levels",
        "evidence": "established",
        "detail": "Rifampin cut tamoxifen exposure by 86%. The label says strong CYP3A4 inducers should not be used with tamoxifen.",
        "refs": [
          2204
        ]
      },
      {
        "with": "Anastrozole and letrozole",
        "level": "moderate",
        "text": "Lowers aromatase inhibitor levels and adds no benefit",
        "evidence": "established",
        "detail": "The label says to avoid tamoxifen with anastrozole and not to combine it with letrozole. Tamoxifen lowered anastrozole levels by 27% and letrozole levels by 38%.",
        "refs": [
          2204
        ]
      }
    ],
    "telmisartan": [
      {
        "with": "Aliskiren",
        "level": "high",
        "text": "Contraindicated in people with diabetes",
        "evidence": "established",
        "detail": "The label says not to combine aliskiren with telmisartan in diabetes, and to avoid it when kidney function is reduced (GFR under 60).",
        "refs": [
          2103
        ]
      },
      {
        "with": "ACE inhibitors and other RAS blockers",
        "level": "moderate",
        "text": "No added benefit, more kidney failure, low blood pressure and high potassium",
        "evidence": "established",
        "detail": "In the ONTARGET trial of 25,620 people, telmisartan plus ramipril added no benefit over either alone but caused more kidney dysfunction. The label says to avoid combined RAS blockade in general.",
        "refs": [
          2103
        ]
      },
      {
        "with": "Potassium supplements, potassium-sparing diuretics and salt substitutes",
        "level": "moderate",
        "text": "Raise the risk of high potassium",
        "evidence": "established",
        "detail": "The label names these as risk factors for hyperkalemia on ARBs and suggests periodic electrolyte checks.",
        "refs": [
          2103
        ]
      },
      {
        "with": "NSAIDs, including COX-2 inhibitors",
        "level": "moderate",
        "text": "Can harm the kidneys and blunt the blood pressure effect",
        "evidence": "established",
        "detail": "In older, volume-depleted or kidney-impaired people the combination can cause kidney deterioration, including acute kidney failure, usually reversible. The label advises periodic kidney monitoring.",
        "refs": [
          2103
        ]
      },
      {
        "with": "Lithium",
        "level": "moderate",
        "text": "Can raise lithium to toxic levels",
        "evidence": "established",
        "detail": "Reversible rises in lithium levels and toxicity have been reported with ARBs including telmisartan. The label advises monitoring lithium levels.",
        "refs": [
          2103
        ]
      },
      {
        "with": "Digoxin",
        "level": "moderate",
        "text": "Raises digoxin peak levels by about half",
        "evidence": "established",
        "detail": "Median digoxin peak concentration rose 49% and trough 20%. The label advises monitoring digoxin levels when telmisartan is started, changed or stopped.",
        "refs": [
          2103
        ]
      }
    ],
    "teriparatide": [
      {
        "with": "Digoxin",
        "level": "moderate",
        "text": "Raised calcium can make digoxin toxicity more likely",
        "evidence": "established",
        "detail": "Teriparatide briefly raises serum calcium, and high calcium can predispose to digitalis toxicity. The label tells prescribers to watch for signs of digoxin toxicity in people taking both.",
        "refs": [
          649
        ]
      },
      {
        "with": "Hydrochlorothiazide",
        "level": "low",
        "text": "No change in the calcium response at the dose studied",
        "evidence": "established",
        "detail": "In 20 healthy people, hydrochlorothiazide 25 mg did not change teriparatide's effect on serum calcium and lowered urine calcium by about 15%, which the label calls clinically unimportant. Higher thiazide doses have not been studied.",
        "refs": [
          649
        ]
      },
      {
        "with": "Furosemide",
        "level": "low",
        "text": "Small rises in blood and urine calcium",
        "evidence": "established",
        "detail": "With intravenous furosemide, serum calcium rose about 2% and 24-hour urine calcium about 37%. The label says these changes did not appear clinically important.",
        "refs": [
          649
        ]
      }
    ],
    "tesamorelin": [
      {
        "with": "Glucocorticoid replacement (hydrocortisone, cortisone acetate, prednisone)",
        "level": "moderate",
        "text": "Can lower cortisol in people treated for adrenal insufficiency",
        "evidence": "established",
        "detail": "Tesamorelin raises growth hormone, which inhibits 11βHSD-1, the enzyme that converts cortisone to cortisol. The label says people on glucocorticoid replacement may need higher maintenance or stress doses after starting, especially with cortisone acetate and prednisone.",
        "refs": [
          336
        ]
      },
      {
        "with": "Drugs cleared by CYP450 enzymes (corticosteroids, sex steroids, anticonvulsants, cyclosporine)",
        "level": "moderate",
        "text": "Raised growth hormone may change how fast these drugs are cleared",
        "evidence": "established",
        "detail": "Published data suggest growth hormone can alter CYP450-mediated drug clearance. The label advises monitoring for interactions when tesamorelin is combined with drugs cleared this way.",
        "refs": [
          336
        ]
      },
      {
        "with": "Simvastatin",
        "level": "low",
        "text": "No meaningful change in simvastatin levels",
        "evidence": "human rct",
        "detail": "In a crossover study in healthy volunteers, a week of tesamorelin lowered simvastatin exposure by about 8% and simvastatin acid by about 15%. The authors judged the effect on CYP3A minimal and saw no need to change the regimen.",
        "refs": [
          336,
          2500
        ]
      },
      {
        "with": "Ritonavir",
        "level": "low",
        "text": "Small drop in ritonavir levels, not judged clinically meaningful",
        "evidence": "human rct",
        "detail": "In healthy volunteers, tesamorelin lowered ritonavir exposure by about 9% and peak level by about 11%. The authors saw no need to adjust the ritonavir dose.",
        "refs": [
          336,
          2500
        ]
      }
    ],
    "testosterone": [
      {
        "with": "Warfarin and other oral anticoagulants",
        "level": "moderate",
        "text": "Androgens can change how strongly anticoagulants work",
        "evidence": "established",
        "detail": "The labels say androgens may increase sensitivity to oral anticoagulants, so the anticoagulant dose may need to come down. INR or prothrombin time should be checked more often, especially when testosterone is started or stopped.",
        "refs": [
          78
        ]
      },
      {
        "with": "Insulin and other diabetes medicines",
        "level": "moderate",
        "text": "May lower blood sugar and insulin needs",
        "evidence": "established",
        "detail": "The labels say androgens can change insulin sensitivity and glycemic control, and in people with diabetes may lower blood glucose and insulin requirements.",
        "refs": [
          78
        ]
      },
      {
        "with": "Corticosteroids and ACTH",
        "level": "moderate",
        "text": "Can add to fluid retention",
        "evidence": "established",
        "detail": "The label says using testosterone with ACTH or corticosteroids may increase fluid retention and needs careful monitoring, especially in people with heart, kidney or liver disease.",
        "refs": [
          78
        ]
      }
    ],
    "tirzepatide": [
      {
        "with": "Oral hormonal contraceptives",
        "level": "moderate",
        "text": "May make the pill less reliable after starting or raising the dose",
        "evidence": "established",
        "detail": "A single tirzepatide dose cut peak levels of the pill's hormones by 55-66% and total exposure by about 20%. The label advises switching to a non-oral method or adding a barrier method for 4 weeks after starting and for 4 weeks after each dose increase.",
        "refs": [
          77
        ]
      },
      {
        "with": "Insulin and sulfonylureas",
        "level": "moderate",
        "text": "Raises the risk of low blood sugar, including severe episodes",
        "evidence": "established",
        "detail": "The label tells prescribers to consider lowering the insulin or sulfonylurea dose when tirzepatide is started.",
        "refs": [
          77
        ]
      },
      {
        "with": "Narrow-margin oral drugs such as warfarin",
        "level": "moderate",
        "text": "Slowed stomach emptying can delay or blunt absorption of oral drugs",
        "evidence": "established",
        "detail": "After the first dose, the peak level of acetaminophen fell by half and came about an hour later; by week 4 the effect was gone. The label advises monitoring oral drugs with a narrow therapeutic index or that depend on reaching a threshold level.",
        "refs": [
          77
        ]
      },
      {
        "with": "General anesthesia or deep sedation",
        "level": "moderate",
        "text": "Rare reports of food in the stomach being inhaled during anesthesia",
        "evidence": "established",
        "detail": "The label warns of rare postmarketing reports of pulmonary aspiration in people on GLP-1 receptor agonists having general anesthesia or deep sedation, and asks patients to tell their care team about planned procedures.",
        "refs": [
          77
        ]
      }
    ],
    "tongkat-ali": [
      {
        "with": "Propranolol",
        "level": "low",
        "text": "Lowered propranolol absorption in a small crossover study",
        "evidence": "human rct",
        "detail": "In 14 healthy men, a water extract cut propranolol AUC by 29% and peak level by 42%. The drug's own effects were not changed in these healthy volunteers.",
        "refs": [
          2119
        ]
      }
    ],
    "trazodone": [
      {
        "with": "MAO inhibitors (including linezolid and IV methylene blue)",
        "level": "high",
        "text": "Contraindicated: risk of serotonin syndrome",
        "evidence": "established",
        "detail": "Trazodone must not be taken with an MAO inhibitor or within 14 days of stopping one.",
        "refs": [
          2110
        ]
      },
      {
        "with": "Other serotonergic drugs (antidepressants, triptans, fentanyl, lithium, tramadol, tryptophan, buspirone, St John's wort)",
        "level": "moderate",
        "text": "Raise the risk of serotonin syndrome",
        "evidence": "established",
        "detail": "The label advises watching for serotonin syndrome, especially when trazodone is started.",
        "refs": [
          2110
        ]
      },
      {
        "with": "Other QT-prolonging drugs",
        "level": "moderate",
        "text": "Add to the risk of an abnormal heart rhythm",
        "evidence": "established",
        "detail": "The label says to avoid trazodone with drugs known to prolong the QT interval, such as quinidine, amiodarone, sotalol, ziprasidone and thioridazine.",
        "refs": [
          2110
        ]
      },
      {
        "with": "Strong CYP3A4 inhibitors (ketoconazole, itraconazole, clarithromycin, indinavir)",
        "level": "moderate",
        "text": "Raise trazodone levels and the risk of side effects, including arrhythmia",
        "evidence": "established",
        "detail": "The label says a lower trazodone dose should be considered.",
        "refs": [
          2110
        ]
      },
      {
        "with": "CYP3A4 inducers (rifampin, carbamazepine, phenytoin, St John's wort)",
        "level": "low",
        "text": "Lower trazodone levels",
        "evidence": "established",
        "detail": "The label advises monitoring in case the effect is weakened.",
        "refs": [
          2110
        ]
      },
      {
        "with": "Anticoagulants and antiplatelet drugs (warfarin, rivaroxaban, dabigatran, clopidogrel)",
        "level": "moderate",
        "text": "Raise the risk of bleeding",
        "evidence": "established",
        "detail": "The label advises careful INR monitoring when trazodone is started or stopped in people on warfarin.",
        "refs": [
          2110
        ]
      },
      {
        "with": "Digoxin and phenytoin",
        "level": "moderate",
        "text": "Trazodone can raise their levels",
        "evidence": "established",
        "detail": "Both have a narrow safety margin, so the label advises checking their blood levels.",
        "refs": [
          2110
        ]
      },
      {
        "with": "Alcohol, barbiturates and other sedatives",
        "level": "moderate",
        "text": "Adds to sedation",
        "evidence": "established",
        "detail": "Trazodone may enhance the response to CNS depressants.",
        "refs": [
          2110
        ]
      }
    ],
    "varenicline": [
      {
        "with": "Alcohol",
        "level": "moderate",
        "text": "Stronger intoxicating effects reported",
        "evidence": "established",
        "detail": "Post-marketing reports describe heightened intoxication, sometimes with unusual or aggressive behavior and memory loss. The label advises drinking less until people know how varenicline affects them.",
        "refs": [
          112
        ]
      },
      {
        "with": "Nicotine replacement therapy",
        "level": "low",
        "text": "More nausea, headache and vomiting together",
        "evidence": "established",
        "detail": "In a short study with a nicotine patch, 36% stopped the combination early because of side effects, against 6% on the patch alone. Safety and efficacy of combining smoking-cessation drugs is not established.",
        "refs": [
          112
        ]
      },
      {
        "with": "Theophylline, warfarin and insulin (effect of quitting smoking)",
        "level": "moderate",
        "text": "Stopping smoking can change how these drugs act",
        "evidence": "established",
        "detail": "The label notes that quitting, with or without varenicline, may alter these drugs and require dose adjustment.",
        "refs": [
          112
        ]
      }
    ],
    "viloxazine": [
      {
        "with": "MAO inhibitors",
        "level": "high",
        "text": "Contraindicated together or within 14 days of stopping an MAOI",
        "evidence": "established",
        "detail": "The label warns the combination may cause a life-threatening hypertensive crisis.",
        "refs": [
          129
        ]
      },
      {
        "with": "Sensitive or narrow-range CYP1A2 substrates",
        "level": "high",
        "text": "Contraindicated: viloxazine is a strong CYP1A2 inhibitor",
        "evidence": "established",
        "detail": "Viloxazine significantly raises the total exposure of drugs cleared by CYP1A2, which can increase their side effects. The label contraindicates sensitive CYP1A2 substrates and those with a narrow therapeutic range.",
        "refs": [
          129
        ]
      },
      {
        "with": "Moderate sensitive CYP1A2 substrates",
        "level": "moderate",
        "text": "Not recommended together; their exposure rises",
        "evidence": "established",
        "detail": "The label says a dose reduction of the other drug may be warranted if they are used together.",
        "refs": [
          129
        ]
      },
      {
        "with": "CYP2D6 and CYP3A4 substrates",
        "level": "low",
        "text": "Weak inhibition raises their exposure",
        "evidence": "established",
        "detail": "Viloxazine is a weak inhibitor of both enzymes. The label advises monitoring for side effects and adjusting the other drug as needed.",
        "refs": [
          129
        ]
      }
    ],
    "vitamin-b12": [
      {
        "with": "Colchicine, para-aminosalicylic acid and heavy alcohol use",
        "level": "low",
        "text": "May reduce B12 absorption",
        "evidence": "established",
        "detail": "The label says these, and heavy alcohol intake beyond two weeks, may cause malabsorption of vitamin B12.",
        "refs": [
          2115
        ]
      },
      {
        "with": "Most antibiotics, methotrexate and pyrimethamine",
        "level": "low",
        "text": "Can invalidate B12 and folate blood tests",
        "evidence": "established",
        "detail": "These drugs interfere with the diagnostic blood assays for vitamin B12 and folic acid, so results can mislead.",
        "refs": [
          2115
        ]
      }
    ],
    "yohimbine": [
      {
        "with": "Paroxetine and other CYP2D6 inhibitors",
        "level": "moderate",
        "text": "Greatly slow the clearance of yohimbine",
        "evidence": "human rct",
        "detail": "In a phase 1 trial, paroxetine cut yohimbine clearance more than fivefold in people with normal CYP2D6 activity. It had no effect in poor metabolizers.",
        "refs": [
          2007
        ]
      }
    ]
  };
})(window.ATLAS);
