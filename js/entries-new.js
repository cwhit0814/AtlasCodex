/*
 * Atlas Codex: fifteen compounds added 2026-10-17 (compound record expansion).
 * Short-form entries via A.add (see builder.js), plus their dosing, monitoring and references (ids 800-899).
 */
(function (A) {
  A.add({
    slug: "liraglutide",
    name: "Liraglutide",
    aliases: ["Saxenda","Victoza","NN2211"],
    category: "metabolic",
    status: "Approved",
    class: "GLP-1 receptor agonist (daily)",
    tags: ["GLP-1","weight management","type 2 diabetes","daily injection","Saxenda","Victoza"],
    summary: "The first daily GLP-1 drug approved for weight management, at 3 mg, and a diabetes drug that lowered cardiovascular events in LEADER; it produces less weight loss than weekly semaglutide or tirzepatide.",
    names: "Developed by Novo Nordisk. Approved for type 2 diabetes as Victoza (US 2010) and for chronic weight management as Saxenda (US 2014), which uses a higher 3 mg daily dose. The weekly drugs that followed it, semaglutide and tirzepatide, have largely replaced it for weight.",
    structure: "C<sub>172</sub>H<sub>265</sub>N<sub>43</sub>O<sub>51</sub>, about 3751 g/mol. Human GLP-1(7-37) with arginine in place of lysine at position 34 and a C16 fatty acid attached through a glutamic acid spacer at lysine 26. The label gives 97% sequence homology to native GLP-1.",
    pubchem: "liraglutide",
    p: [["Weight effect",3],["Glucose effect",4],["Risk load",2,1],["Evidence quality",5]],
    r: [
      ["Gut","moderate","Nausea, diarrhea, constipation and vomiting are the most common effects and cluster around dose steps","human rct","The weekly 0.6 mg escalation on the label exists to limit these. Most were mild or moderate in SCALE.",[800,804]],
      ["Gallbladder","moderate","More gallstones and gallbladder inflammation than placebo","human rct","In the Saxenda trials gallstones were reported in 2.2% against 0.8% on placebo, and cholecystitis in 0.8% against 0.4%. Most affected patients needed their gallbladder removed.",[804]],
      ["Pancreas","low","Acute pancreatitis was rare, and slightly more frequent than placebo in the weight trials","human rct","Adjudicated pancreatitis was 0.3% on Saxenda against 0.1% on placebo. In LEADER it was not higher than placebo. The label says to stop if pancreatitis is suspected and not restart if confirmed.",[804,801]],
      ["Heart rate","low","Raises resting heart rate by a few beats per minute","human rct","A mean rise of 2 to 3 bpm in routine monitoring, and 4 to 9 bpm higher than placebo on 24-hour monitoring.",[804]],
      ["Thyroid","unknown","Boxed warning for thyroid C-cell tumors, based on rodent studies","animal","Whether this applies to people is not established. It is contraindicated with a personal or family history of medullary thyroid carcinoma or MEN 2.",[804]],
      ["Mood","low","Suicidal thoughts were reported slightly more often than on placebo in the weight trials","human rct","0.3% against 0.1%. The label says to monitor for depression and stop if suicidal thoughts develop.",[804]]
    ],
    a: [
      ["GLP-1 receptor","established","A full agonist that raises glucose-dependent insulin release, lowers glucagon and slows stomach emptying","Because the insulin effect depends on glucose, low blood sugar is uncommon unless it is combined with insulin or a sulfonylurea."],
      ["Appetite","human rct","Reduces hunger and food intake through GLP-1 receptors in the brain","Lower intake, rather than higher energy expenditure, is thought to account for most of the weight loss."],
      ["Albumin binding","established","The fatty acid chain binds albumin, which slows clearance to a half-life of about 13 hours","Long enough for once-daily dosing but not weekly. Semaglutide later reached a weekly schedule with a longer fatty acid and a DPP-4-resistant substitution."]
    ],
    t: [
      { title: "SCALE Obesity and Prediabetes", evidence: "human rct", meta: ["3,731 adults without diabetes, BMI 30 or more, or 27 or more with dyslipidemia or hypertension","liraglutide 3.0 mg daily or placebo, both with lifestyle counseling","56 weeks","randomized, double-blind, placebo-controlled"], body: "Mean weight loss was 8.4 kg on liraglutide against 2.8 kg on placebo. 63.2% lost at least 5% of body weight against 27.1%, and 33.1% lost more than 10% against 10.6%. Serious adverse events occurred in 6.2% against 5.0%.", refs: [800] },
      { title: "SCALE three-year extension in prediabetes", evidence: "human rct", meta: ["2,254 adults with prediabetes and obesity or overweight with comorbidities","liraglutide 3.0 mg daily or placebo","160 weeks","randomized, double-blind, placebo-controlled"], body: "Diabetes was diagnosed in 2% on liraglutide against 6% on placebo, a hazard ratio for onset of 0.21. Weight change at 160 weeks was −6.1% against −1.9%.", note: "Only half of participants completed 160 weeks, and those who withdrew were not followed up, which weakens the long-term estimate.", refs: [802] },
      { title: "LEADER: cardiovascular outcomes in type 2 diabetes", evidence: "human rct", meta: ["9,340 adults with type 2 diabetes at high cardiovascular risk","liraglutide (diabetes dosing) or placebo, added to standard care","median 3.8 years","randomized, double-blind, event-driven"], body: "Cardiovascular death, non-fatal heart attack or non-fatal stroke occurred in 13.0% on liraglutide against 14.9% on placebo (HR 0.87). Cardiovascular death was 4.7% against 6.0%, and death from any cause 8.2% against 9.6%.", note: "This used the diabetes dose, not the 3 mg weight-management dose.", refs: [801] },
      { title: "Adolescents with obesity", evidence: "human rct", meta: ["251 adolescents aged 12 to under 18 with obesity","liraglutide 3.0 mg daily or placebo, with lifestyle therapy","56 weeks, then 26 weeks off treatment","randomized, double-blind, placebo-controlled"], body: "BMI fell by at least 5% in 43.3% against 18.7%. Gut side effects affected 64.8% against 36.5%, and 10.4% stopped treatment for adverse events against none on placebo. After stopping, BMI rose faster in the liraglutide group.", refs: [803] }
    ],
    k: [["Route","Subcutaneous injection, once daily"],["Bioavailability","About 55%"],["Time to peak","About 11 hours"],["Half-life","About 13 hours"],["Metabolism","Broken down like large proteins, with no single organ as the main route"],["Excretion","No intact drug in urine or feces; about 6% and 5% of the dose appear there as metabolites"]],
    ke: "established",
    kr: [804],
    related: ["semaglutide","tirzepatide","cagrilintide","orforglipron","metformin"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "clomiphene",
    name: "Clomiphene",
    aliases: ["Clomid","Serophene","Clomiphene citrate","Clomifene"],
    category: "pct",
    status: "Approved",
    class: "Selective estrogen receptor modulator (SERM)",
    tags: ["SERM","PCT","fertility","secondary hypogonadism","off-label","zuclomiphene","enclomiphene"],
    summary: "A fertility drug for women that men take off-label to raise their own testosterone, including after a steroid cycle. It is a mix of enclomiphene and zuclomiphene, a longer-lasting isomer with more estrogen-like activity.",
    names: "Approved in the US in 1967 for ovulation induction and sold as Clomid, Serophene and generics (50 mg tablets). No regulator has approved it for men, so male use is off-label. It is a mixture of two geometric isomers: enclomiphene (trans), which has its own entry, and zuclomiphene (cis), which the label puts at 30 to 50% of the mix. Prohibited in sport at all times by WADA.",
    structure: "Clomiphene citrate is C<sub>26</sub>H<sub>28</sub>ClNO·C<sub>6</sub>H<sub>8</sub>O<sub>7</sub>, about 598 g/mol; the free base is about 406 g/mol. A triphenylethylene, the same family as tamoxifen, with a chlorine on the central double bond.",
    pubchem: "clomiphene",
    p: [["Testosterone rise in men",3],["Ovulation induction",4],["Risk load",2,1],["Evidence quality",3]],
    pnote: "Strong evidence at its labeled use in women. In men the testosterone rise is consistent, but most data are retrospective or uncontrolled, and few trials measured symptoms against placebo.",
    r: [
      ["Vision","moderate","Blurring, spots, flashes and lingering afterimages, more common with higher doses and longer use","established","The label says anyone with visual symptoms should stop and have a full eye examination promptly. Postmarketing reports include prolonged and possibly irreversible vision loss.",[809]],
      ["Long persistence","low","Zuclomiphene stays detectable for more than a month after a single dose","established","The label raises this as possible exposure in early pregnancy. In men it means effects and side effects outlast stopping, and the isomer builds up with daily use.",[809]],
      ["Mood","low","Irritability and mood swings are commonly reported by men using it","anecdotal","Users and prescribers often attribute this to zuclomiphene. No head-to-head trial has shown that."],
      ["Liver","low","Raised transaminases and hepatitis appear in postmarketing reports","established","",[809]],
      ["Ovarian hyperstimulation","moderate","In women, ovarian enlargement and hyperstimulation syndrome, which can progress within a day","established","Relevant to its approved use only.",[809]]
    ],
    a: [
      ["Hypothalamic estrogen receptor","established","Blocks estrogen's negative feedback in the hypothalamus, so GnRH, LH and FSH rise","In women this triggers ovulation. In men the extra LH drives the testes to make more testosterone, and FSH supports sperm production."],
      ["Two isomers","established","Enclomiphene is the anti-estrogenic isomer; zuclomiphene is more estrogen-like and much longer-lived","The label says some data suggest zuclomiphene has greater estrogenic activity. This difference is the rationale for developing enclomiphene alone."],
      ["Testosterone without testicular shutdown","human obs","Raises testosterone while keeping the testes producing, unlike testosterone therapy","This is why it is used in men who want to keep fertility, and for restarting natural production after anabolic steroids."]
    ],
    t: [
      { title: "Long-term use in young hypogonadal men", evidence: "human obs", meta: ["86 men aged 22 to 37 with testosterone below 300 ng/dL","clomiphene 25 mg every other day, titrated to 50 mg every other day","mean 19 months","prospective case series, no control group"], body: "Testosterone, LH and FSH rose and stayed raised. Symptom scores improved on all but one ADAM questionnaire item, and no major side effects were recorded.", note: "Single clinic and uncontrolled, so the symptom gains have no placebo comparison.", refs: [805] },
      { title: "Clomiphene against testosterone injections and gel", evidence: "human obs", meta: ["93 men with symptomatic low testosterone, age-matched","clomiphene, testosterone injections or testosterone gel (31 each)","retrospective comparison"], body: "Median testosterone rose from 247 to 504 ng/dL on clomiphene, similar to gel and lower than injections. Satisfaction scores were similar across all three; men on injections reported more libido.", refs: [806] },
      { title: "Polycythemia: clomiphene against testosterone", evidence: "human obs", meta: ["188 men on clomiphene and 175 on testosterone replacement","retrospective, multi-institutional"], body: "Testosterone rose by a similar amount in both. Hematocrit rose 0.6% on clomiphene against 3.0% on testosterone, and polycythemia occurred in 1.7% against 11.2%.", note: "The clomiphene group was younger and treated for less time; the difference held after adjusting for age, site, smoking and starting hematocrit.", refs: [807] },
      { title: "Meta-analysis of SERMs in male hypogonadism", evidence: "human rct", meta: ["randomized trials of clomiphene or enclomiphene in men with functional hypogonadism","against placebo, testosterone gel or hCG","systematic review and meta-analysis"], body: "Against placebo, the SERMs raised total testosterone by about 274 ng/dL, with rises in LH and FSH. Total testosterone did not differ from testosterone gel.", note: "Heterogeneity was high, and the pooled trials mix clomiphene with enclomiphene.", refs: [808] }
    ],
    k: [["Route","Oral"],["Bioavailability","Readily absorbed; the label gives no absolute figure"],["Half-life","Zuclomiphene far longer than enclomiphene; zuclomiphene is detectable for more than a month after one dose"],["Metabolism","Liver; the label suggests enterohepatic recycling or sequestration of zuclomiphene"],["Excretion","Mainly feces (about 42% in 5 days), about 8% in urine"]],
    ke: "established",
    kr: [809],
    related: ["enclomiphene","tamoxifen","raloxifene","hcg","testosterone","anastrozole"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "cabergoline",
    name: "Cabergoline",
    aliases: ["Dostinex","Cabaser","Caber"],
    category: "health",
    status: "Approved",
    class: "Ergot-derived dopamine D2 agonist",
    tags: ["prolactin","dopamine agonist","prolactinoma","AAS ancillary","heart valves"],
    summary: "A long-acting dopamine agonist that lowers prolactin and is taken twice a week. Steroid users take it off-label against prolactin effects they blame on nandrolone or trenbolone, and at high doses it damages heart valves.",
    names: "Developed by Farmitalia-Carlo Erba and approved in the US in 1996 as Dostinex (0.5 mg tablets) for high prolactin. In Europe it was also approved for Parkinson's disease, at much higher doses, and to stop lactation. Its use with anabolic steroids is off-label and has no trial behind it.",
    structure: "C<sub>26</sub>H<sub>37</sub>N<sub>5</sub>O<sub>2</sub>, about 451.6 g/mol. An ergoline, the ring system shared with bromocriptine and LSD, with an acylurea side chain.",
    pubchem: "cabergoline",
    p: [["Prolactin lowering",5],["Risk load",2,1],["Evidence quality",4]],
    r: [
      ["Heart valves","moderate","Valve thickening and leakage, clearest at the high doses once used in Parkinson's disease","human obs","In Parkinson's patients, moderate to severe regurgitation was found in 28.6% on cabergoline against 5.6% of controls, and current use raised newly diagnosed regurgitation about five-fold. At the lower doses used for high prolactin, a meta-analysis found more tricuspid regurgitation without symptoms. The label calls for a cardiovascular evaluation, with echocardiography, before treatment.",[811,812,813,815]],
      ["Fibrosis","low","Fibrosis of the lungs, pleura, pericardium and retroperitoneum has been reported","established","The label contraindicates it with a history of fibrotic disorders.",[815]],
      ["Impulse control","moderate","Compulsive gambling, hypersexuality, shopping and binge eating","human obs","A review put the reported prevalence at 7.5% to 46% in people treated for high prolactin, more often with cabergoline than bromocriptine, and more in younger men. It usually resolves when the dose is lowered or the drug stopped.",[814,815]],
      ["Blood pressure","low","Dizziness and low blood pressure on standing, mostly early in treatment","established","Uncontrolled hypertension is a contraindication on the label.",[815]],
      ["Gut and headache","low","Nausea, headache and dizziness are the commonest effects, and less frequent than with bromocriptine","human rct","In the main comparison trial, 3% stopped cabergoline for intolerance against 12% on bromocriptine.",[810]]
    ],
    a: [
      ["Dopamine D2 receptor","established","A long-acting agonist at D2 receptors on prolactin-secreting pituitary cells, which suppresses prolactin release","Prolactin stays down for days after a dose, which allows twice-weekly dosing."],
      ["Serotonin 5-HT2B receptor","established","Also stimulates 5-HT2B receptors on heart valve cells, which is linked to valve fibrosis","The same off-target action is behind the valve problems with pergolide and fenfluramine. Non-ergot dopamine agonists such as pramipexole lack it."],
      ["Pituitary retention","animal","Concentrates in the pituitary, where radioactivity in animals exceeded plasma levels more than 100-fold","The label links this to its long prolactin-lowering effect."]
    ],
    t: [
      { title: "Cabergoline against bromocriptine", evidence: "human rct", meta: ["459 women with high prolactin and absent periods","cabergoline 0.5 to 1.0 mg twice weekly or bromocriptine 2.5 to 5.0 mg twice daily","24 weeks (8 double-blind, then open-label)","randomized"], body: "Stable normal prolactin was reached in 83% on cabergoline against 59% on bromocriptine, and 72% against 52% ovulated or became pregnant. 3% stopped cabergoline for side effects against 12% on bromocriptine.", refs: [810] },
      { title: "Valve disease on dopamine agonists in Parkinson's disease", evidence: "human obs", meta: ["155 Parkinson's patients on dopamine agonists and 90 controls","pergolide, cabergoline or non-ergot agonists","echocardiographic prevalence study"], body: "Moderate to severe valve regurgitation was found in 28.6% on cabergoline, 23.4% on pergolide, none on non-ergot agonists and 5.6% of controls. Those affected had taken higher cumulative doses.", refs: [812] },
      { title: "Valve regurgitation in a UK population", evidence: "human obs", meta: ["11,417 people aged 40 to 80 prescribed antiparkinsonian drugs","UK General Practice Research Database","nested case-control"], body: "Current cabergoline use was linked to a 4.9-fold rate of newly diagnosed valve regurgitation and pergolide to 7.1-fold. Other dopamine agonists showed no increase.", refs: [811] },
      { title: "Valve risk at prolactin-lowering doses", evidence: "human obs", meta: ["6 studies of cabergoline for high prolactin","meta-analysis"], body: "Tricuspid regurgitation was more common on cabergoline (prevalence ratio 1.40); aortic and mitral regurgitation were not. No patient had symptoms of valve disease.", note: "These doses are far lower than Parkinson's doses. The risk at the small doses used alongside anabolic steroids has not been studied.", refs: [813] }
    ],
    k: [["Route","Oral"],["Bioavailability","Unknown; a significant fraction undergoes first-pass metabolism"],["Time to peak","2 to 3 hours"],["Half-life","63 to 69 hours"],["Metabolism","Extensive hydrolysis of the acylurea or urea group; minimal CYP450 involvement"],["Excretion","About 60% feces and 22% urine over 20 days; under 4% unchanged in urine"]],
    ke: "established",
    kr: [815],
    related: ["pramipexole","nandrolone","trenbolone","testosterone"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "sirolimus",
    name: "Sirolimus",
    aliases: ["Rapamycin","Rapamune","Fyarro","Hyftor"],
    category: "longevity",
    status: "Approved",
    class: "mTOR inhibitor (macrolide)",
    tags: ["rapamycin","mTOR","longevity","immunosuppressant","transplant","LAM","off-label"],
    summary: "A transplant immunosuppressant that is the most consistent lifespan-extending drug in mice. Longevity users take it off-label in weekly doses, and the one completed 48-week trial of that missed its primary outcome.",
    names: "Isolated in the 1970s from Streptomyces hygroscopicus in a soil sample from Easter Island (Rapa Nui), which gives it the name rapamycin. Approved in the US in 1999 as Rapamune to prevent kidney transplant rejection, and later for lymphangioleiomyomatosis (LAM). Other forms are approved for a rare sarcoma (Fyarro, an albumin-bound infusion) and as a topical gel (Hyftor). Longevity use is off-label, sometimes as compounded capsules.",
    structure: "C<sub>51</sub>H<sub>79</sub>NO<sub>13</sub>, about 914.2 g/mol. A 31-membered macrolide ring.",
    pubchem: "sirolimus",
    refs: [817],
    p: [["Approved-use efficacy",4],["Human longevity evidence",1],["Risk load",3,1],["Evidence quality",3]],
    pnote: "Strong in transplant and LAM. Lifespan extension is shown in mice; in people there are only small safety and biomarker studies.",
    r: [
      ["Infection and cancer","high","Suppresses immunity; the label's boxed warning covers serious infection and lymphoma and other cancers, particularly of the skin","established","The warning rests on daily transplant regimens combined with other immunosuppressants. Whether low intermittent doses carry the same risk is not established.",[821]],
      ["Lipids","moderate","Raises cholesterol and triglycerides","established","The label says to monitor for hyperlipidemia. In transplant trials with cyclosporine, up to 90% needed lipid-lowering treatment.",[821]],
      ["Mouth ulcers","moderate","Mouth sores (stomatitis) are among its most common effects, including at low doses","human rct","Stomatitis is the most common adverse reaction in LAM on the label, and appeared in the small trial of 1 mg daily in older adults.",[821,820]],
      ["Wound healing","moderate","Delays wound healing and causes fluid build-up","established","",[821]],
      ["Glucose","low","Hyperglycemia and diabetes are listed on the label; a short low-dose trial in older adults found no change in glucose tolerance","contested","",[821,820]],
      ["Lungs","low","Non-infectious pneumonitis and interstitial lung disease, some fatal","established","",[821]],
      ["Blood counts","low","Small falls in hemoglobin and red cell indices in older adults on 1 mg daily","human rct","Not clinically significant over the short study.",[820]]
    ],
    a: [
      ["mTORC1","established","Binds FKBP12, and the complex blocks mTOR complex 1, the cell's main growth and nutrient sensor","This slows protein synthesis and cell growth and switches on autophagy. The same action underlies both its immune suppression and its proposed anti-aging effect."],
      ["mTORC2 with continuous use","animal","Continuous dosing also inhibits mTOR complex 2, which is linked in mice to insulin resistance and lipid changes","This is the reasoning behind weekly dosing. It is a hypothesis from animal work and has not been shown to separate benefit from harm in people."],
      ["Lifespan in mice","animal","Extended median and maximum lifespan in genetically diverse mice of both sexes, even when started late in life","Started at 600 days of age, it raised lifespan at 90% mortality by 14% in females and 9% in males, at three separate sites."],
      ["Immune aging","human rct","Low doses of the related drug everolimus improved influenza vaccine response in older adults by about 20%","That trial used everolimus, not sirolimus, and measured vaccine response, not aging."]
    ],
    t: [
      { title: "MILES: sirolimus in lymphangioleiomyomatosis", evidence: "human rct", meta: ["89 patients with LAM and moderate lung impairment","sirolimus or placebo","12 months of treatment, then 12 months of observation","randomized, double-blind, placebo-controlled"], body: "FEV1 fell by 12 ml a month on placebo and was stable on sirolimus, a difference of 153 ml over the year. After stopping, decline resumed at the placebo rate.", refs: [816] },
      { title: "mTOR inhibition and vaccine response in older adults", evidence: "human rct", meta: ["older volunteers given influenza vaccine","everolimus (RAD001) at several doses or placebo","randomized, double-blind, placebo-controlled"], body: "Antibody response to the vaccine rose by about 20% at relatively well-tolerated doses, and fewer T cells carried the PD-1 receptor.", note: "Everolimus, not sirolimus.", refs: [819] },
      { title: "Low-dose sirolimus in adults aged 70 to 95", evidence: "human rct", meta: ["25 generally healthy adults aged 70 to 95","sirolimus 1 mg daily or placebo","at least 8 weeks","randomized, placebo-controlled pilot"], body: "No change in glucose tolerance, cognition, physical performance or self-rated health. Hemoglobin, hematocrit and red cell counts fell slightly on sirolimus. Side effects were mouth sores, rash and gut symptoms.", refs: [820] },
      { title: "PEARL: weekly low-dose rapamycin", evidence: "human rct", meta: ["healthy, normally aging adults","compounded rapamycin 5 mg or 10 mg weekly, or placebo","48 weeks","randomized, double-blind, placebo-controlled, decentralized"], body: "Adverse events were similar across groups. The primary outcome, visceral fat, did not change. Lean mass and pain improved in women on 10 mg, and some well-being scores improved on 5 mg.", note: "The primary outcome was negative; the positive findings are secondary and subgroup results.", refs: [818] }
    ],
    k: [["Route","Oral tablet or solution; also intravenous and topical forms"],["Bioavailability","About 14% (solution) and 27% (tablet)"],["Time to peak","1 to 2 hours"],["Half-life","About 62 hours"],["Metabolism","CYP3A4 in the liver and gut; a P-glycoprotein substrate"],["Excretion","About 91% feces, 2% urine"]],
    ke: "established",
    kr: [821],
    related: ["metformin","acarbose","nad-plus","foxo4-dri"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "acarbose",
    name: "Acarbose",
    aliases: ["Precose","Glucobay"],
    category: "longevity",
    status: "Approved",
    class: "Alpha-glucosidase inhibitor",
    tags: ["type 2 diabetes","post-meal glucose","longevity","Interventions Testing Program","starch blocker"],
    summary: "An old diabetes drug that slows starch digestion and flattens the glucose rise after meals. It delayed diabetes in two large trials, did not reduce heart events, and extended lifespan in male mice.",
    names: "Discovered by Bayer from Actinoplanes bacteria and sold as Glucobay, and in the US as Precose. Widely used in China and other parts of Asia. Longevity interest comes from the US National Institute on Aging's Interventions Testing Program in mice.",
    structure: "C<sub>25</sub>H<sub>43</sub>NO<sub>18</sub>, about 645.6 g/mol. A pseudo-tetrasaccharide that digestive enzymes bind in place of real starch.",
    pubchem: "acarbose",
    p: [["Post-meal glucose effect",3],["Diabetes prevention",3],["Risk load",1,1],["Evidence quality",4]],
    r: [
      ["Gut","high","Gas, diarrhea and abdominal pain are very common and the main reason people stop","human rct","In US placebo-controlled trials, flatulence occurred in 74%, diarrhea in 31% and abdominal pain in 19%. Effects usually ease over the first weeks; slower titration helps.",[825]],
      ["Liver","low","Raised transaminases, mainly above 50 mg three times daily, and rarely raised bilirubin","established","The label advises checking transaminases every 3 months during the first year.",[825]],
      ["Low blood sugar with other drugs","moderate","Alone it should not cause hypoglycemia, but it adds to the effect of insulin or sulfonylureas","established","Because it blocks sucrose breakdown, the label says low blood sugar must be treated with glucose (dextrose), not table sugar.",[825]],
      ["Heart","low","No reduction in cardiovascular events in people with heart disease and impaired glucose tolerance","human rct","ACE found a hazard ratio of 0.98 for major cardiovascular events.",[823]]
    ],
    a: [
      ["Alpha-glucosidase","established","Competitively blocks enzymes in the small intestine that split starch and sucrose into absorbable sugars","Carbohydrate is absorbed more slowly and further down the gut, which lowers the glucose peak after meals."],
      ["Colon fermentation","established","Undigested carbohydrate reaches the colon, where bacteria ferment it","This causes the gas and diarrhea. Changes in bacterial fermentation products are one proposed explanation for its effects in mice."],
      ["Lifespan in mice","animal","Raised median lifespan by 22% in male mice and 5% in females","Maximum lifespan rose 11% in males and 9% in females, and the sex difference was not explained by weight. No human study has tested aging outcomes."]
    ],
    t: [
      { title: "STOP-NIDDM: diabetes prevention", evidence: "human rct", meta: ["1,429 adults with impaired glucose tolerance","acarbose 100 mg three times daily or placebo","randomized, placebo-controlled, multicentre"], body: "Diabetes developed in 32% on acarbose against 42% on placebo (relative hazard 0.75), and more people returned to normal glucose tolerance. 31% stopped acarbose early against 19% on placebo; flatulence and diarrhea were the commonest effects.", refs: [822] },
      { title: "ACE: cardiovascular outcomes", evidence: "human rct", meta: ["6,522 Chinese adults with coronary heart disease and impaired glucose tolerance","acarbose 50 mg three times daily or placebo","median 5 years","randomized, double-blind, placebo-controlled"], body: "Major cardiovascular events did not differ: 14% against 15% (HR 0.98). New diabetes was less common, 13% against 16% (rate ratio 0.82).", refs: [823] },
      { title: "Interventions Testing Program in mice", evidence: "animal", meta: ["genetically heterogeneous mice at three sites","acarbose in the diet"], body: "Median lifespan rose 22% in males and 5% in females; maximum lifespan rose 11% and 9%.", note: "Mouse data only.", refs: [824] }
    ],
    k: [["Route","Oral, with the first bite of a main meal"],["Bioavailability","Under 2% absorbed as active drug"],["Metabolism","In the gut, mainly by intestinal bacteria and digestive enzymes"],["Excretion","About half of a dose leaves in feces unabsorbed; absorbed metabolites (about a third) in urine"]],
    ke: "established",
    kr: [825],
    related: ["metformin","berberine","sirolimus"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "creatine",
    name: "Creatine monohydrate",
    aliases: ["Creatine"],
    category: "muscle",
    status: "Supplement",
    class: "Amino acid derivative (phosphocreatine precursor)",
    tags: ["creatine","strength","lean mass","supplement","phosphocreatine","cognition"],
    summary: "The best-studied sports supplement. It raises muscle phosphocreatine and reliably adds a small amount of strength and lean mass alongside training; the early weight gain is mostly water.",
    names: "Made in the liver and kidneys from three amino acids and eaten in meat and fish. The monohydrate form is the one used in nearly all research. Sold as a supplement worldwide and not prohibited in sport.",
    structure: "C<sub>4</sub>H<sub>9</sub>N<sub>3</sub>O<sub>2</sub>·H<sub>2</sub>O, about 149.2 g/mol (anhydrous creatine is about 131.1 g/mol). N-methylguanidinoacetic acid.",
    pubchem: "creatine",
    p: [["Strength effect",3],["Lean mass effect",2],["Risk load",1,1],["Evidence quality",5]],
    r: [
      ["Kidney tests","low","Raises blood creatinine, which can make kidney function look worse on a standard eGFR without harming the kidney","established","Creatine breaks down to creatinine. Reviews of trials in healthy people have not found kidney damage at studied doses; data in people with existing kidney disease are limited.",[827]],
      ["Water and weight","low","Body weight rises from water held in muscle, mostly during a loading phase","human rct","",[827]],
      ["Gut","low","Stomach upset and diarrhea, mainly with large single doses during loading","human rct","",[826]],
      ["DHT","unknown","One small trial found DHT rose 56% during loading while testosterone did not change","human rct","Not replicated, and no trial has measured hair loss. Whether it matters for hair is unknown.",[829,827]]
    ],
    a: [
      ["Phosphocreatine","established","Raises muscle creatine and phosphocreatine, which rebuild ATP during short, intense efforts","This supports slightly more work per set or sprint and, over weeks of training, more total training volume."],
      ["Training adaptation","human rct","The small gain per session adds up to more strength and lean mass with resistance training","Effects are largest for efforts under 30 seconds and repeated bouts, and weak for running or swimming."],
      ["Brain energy","contested","The brain also uses creatine; supplements may help short-term memory and reasoning, more in vegetarians","Trials are small and results across cognitive domains conflict. Young people showed no change."]
    ],
    t: [
      { title: "Meta-analysis of body composition and performance", evidence: "human rct", meta: ["100 randomized, placebo-controlled, blinded studies","meta-analysis"], body: "Creatine had small, significant effects on body composition and on short high-intensity exercise. Effects were larger for upper-body and repeated-bout laboratory tasks. Running and swimming did not improve. Sex and training status made no difference.", refs: [832] },
      { title: "Meta-analyses of strength", evidence: "human rct", meta: ["60 trials of lower-limb and 53 of upper-limb strength, about 2,400 people in all","creatine against placebo, tests under 3 minutes","systematic reviews and meta-analyses"], body: "Strength improved in both, with an overall effect size of about 0.24 for the lower limbs and 0.32 for the upper limbs, regardless of age, sex, dose or training protocol.", note: "A real but small to moderate effect.", refs: [831,830] },
      { title: "Cognition in healthy people", evidence: "human rct", meta: ["6 trials, 281 healthy people","oral creatine against placebo","systematic review"], body: "Short-term memory and reasoning may improve; other domains gave conflicting results. Young people showed no change, and vegetarians responded more on memory tasks.", refs: [828] },
      { title: "Creatine and DHT in rugby players", evidence: "human rct", meta: ["20 college rugby players","creatine 25 g daily for 7 days, then 5 g daily for 14 days, or placebo","randomized, double-blind, crossover"], body: "Testosterone did not change. DHT rose 56% after loading and stayed 40% above baseline during maintenance.", note: "One small study, not replicated. It measured DHT in blood, not hair.", refs: [829] }
    ],
    k: [["Route","Oral"],["Absorption","Well absorbed from the gut"],["Uptake","Into muscle through a creatine transporter; stores fill faster with a loading phase than with a maintenance dose alone"],["Metabolism","Non-enzymatic conversion to creatinine"],["Excretion","Urine, as creatine and creatinine"]],
    ke: "human obs",
    kr: [827],
    related: ["ecdysterone","l-carnitine","ostarine","testosterone"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "nmn",
    name: "NMN (nicotinamide mononucleotide)",
    aliases: ["NMN","β-NMN","Beta-nicotinamide mononucleotide","Nicotinamide mononucleotide"],
    category: "longevity",
    status: "Supplement",
    class: "NAD+ precursor (nucleotide)",
    tags: ["NAD+","longevity","supplement","sirtuins","aging"],
    summary: "An NAD+ precursor sold to slow aging. Human trials show it raises blood NAD+ and is well tolerated over weeks, while effects on health outcomes are small, inconsistent or untested.",
    names: "Made in the body from nicotinamide by the enzyme NAMPT, one step before NAD+. Popularized by mouse studies. In late 2022 the FDA said it could not be sold as a supplement because it had first been investigated as a drug. On 29 September 2025 the FDA reversed that position after a lawsuit and petition by the Natural Products Association.",
    structure: "C<sub>11</sub>H<sub>15</sub>N<sub>2</sub>O<sub>8</sub>P, about 334.2 g/mol. Nicotinamide riboside with a phosphate group on the ribose.",
    pubchem: "nicotinamide mononucleotide",
    refs: [837],
    p: [["NAD+ raising",4],["Health outcome evidence",1],["Risk load",1,1],["Evidence quality",2]],
    r: [
      ["Long-term safety","unknown","Trials last weeks to a few months; longer use is unstudied","unknown","Doses up to 900 mg daily for 60 days showed no safety signals.",[836]],
      ["Methylation load","unknown","Excess nicotinamide is cleared by methylation, and methylated metabolites rise with dose","human obs","Whether this matters for health is unknown.",[834]],
      ["Cancer and senescence","unknown","Raising NAD+ could in theory support cancer cell metabolism or inflammatory senescent cells","in vitro","A hypothesis from cell and animal work, with no human data either way."],
      ["Minor lab changes","low","Small shifts in bilirubin, creatinine, chloride and glucose, within normal ranges, after single doses","human obs","",[834]]
    ],
    a: [
      ["NAD+ synthesis","human rct","Converted to NAD+ through the salvage pathway; oral doses raise blood NAD+ dose-dependently","In the largest dose trial the rise was greatest at 600 and 900 mg daily. A higher blood NAD+ is the most consistent finding across trials."],
      ["Sirtuins and PARPs","animal","NAD+ is used by sirtuins and DNA-repair PARP enzymes, whose activity falls with age in mice","Whether topping up NAD+ restores these in people is untested."],
      ["Muscle insulin sensitivity","human rct","Raised muscle insulin sensitivity and signaling in one trial of women with prediabetes","Not shown in other groups. A separate trial found no change in HOMA-IR."]
    ],
    t: [
      { title: "Insulin sensitivity in women with prediabetes", evidence: "human rct", meta: ["postmenopausal women with prediabetes and overweight or obesity","NMN or placebo","10 weeks","randomized, double-blind, placebo-controlled"], body: "Insulin-stimulated glucose disposal measured by clamp, and muscle insulin signaling, increased on NMN and did not change on placebo.", note: "Small and limited to one population.", refs: [833] },
      { title: "Dose-ranging trial in middle-aged adults", evidence: "human rct", meta: ["80 healthy middle-aged adults","NMN 300, 600 or 900 mg daily or placebo","60 days","randomized, double-blind, placebo-controlled, multicenter"], body: "Blood NAD+ rose in all NMN groups, most at 600 and 900 mg. Six-minute walk distance improved more than placebo; HOMA-IR did not change. No safety issues were found.", note: "The biological-age result comes from a blood-based calculator, not an established aging outcome.", refs: [836] },
      { title: "Older men", evidence: "human rct", meta: ["healthy older men","NMN 250 mg daily or placebo","6 or 12 weeks","randomized, double-blind, placebo-controlled"], body: "Blood NAD+ and its metabolites rose. Gait speed and left grip performance improved nominally; body composition did not change.", refs: [835] },
      { title: "Single doses in healthy men", evidence: "human obs", meta: ["10 healthy men","single doses of 100, 250 and 500 mg","single-arm, non-randomized"], body: "No symptoms or changes in vital signs, sleep or eye examination. Nicotinamide breakdown products rose with dose.", refs: [834] }
    ],
    k: [["Route","Oral"],["Bioavailability","Not established; blood NAD+ and nicotinamide metabolites rise after oral doses"],["Half-life","Not established in humans"],["Metabolism","Converted to NAD+; excess cleared to methylated nicotinamide metabolites"],["Excretion","Urine, as nicotinamide metabolites"]],
    ke: "human obs",
    kr: [834],
    related: ["nad-plus","nicotinamide-riboside","sirolimus","metformin"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "nicotinamide-riboside",
    name: "Nicotinamide riboside",
    aliases: ["NR","Niagen","Tru Niagen","Nicotinamide riboside chloride"],
    category: "longevity",
    status: "Supplement",
    class: "NAD+ precursor (vitamin B3 form)",
    tags: ["NAD+","vitamin B3","longevity","supplement"],
    summary: "A vitamin B3 form that raises blood NAD+ reliably in people. Trials show that rise and good tolerance, but no benefit for insulin sensitivity, muscle mitochondria or body composition.",
    names: "Identified as an NAD+ precursor in 2004. Sold mainly as Niagen (nicotinamide riboside chloride), which is GRAS for foods and has been the subject of new dietary ingredient notifications for supplements. Unlike niacin, it was not reported to cause flushing in trials.",
    structure: "The cation is C<sub>11</sub>H<sub>15</sub>N<sub>2</sub>O<sub>5</sub><sup>+</sup>, about 255.2 g/mol; the chloride salt used in supplements is about 290.7 g/mol. Nicotinamide joined to ribose, without the phosphate NMN carries.",
    pubchem: "nicotinamide riboside",
    p: [["NAD+ raising",4],["Health outcome evidence",1],["Risk load",1,1],["Evidence quality",3]],
    r: [
      ["Long-term safety","unknown","Trials last up to about 12 weeks","unknown","2,000 mg daily for 12 weeks gave normal safety blood tests in obese men.",[840]],
      ["Side effects","low","Adverse events did not differ from placebo, with no flushing","human rct","LDL cholesterol did not rise.",[842]],
      ["Cancer and senescence","unknown","The same theoretical concern as other NAD+ precursors","in vitro","No human data either way."]
    ],
    a: [
      ["NAD+ synthesis","human rct","Converted by NRK enzymes to NMN and then NAD+; oral doses raise blood NAD+ dose-dependently","100, 300 and 1,000 mg daily raised whole-blood NAD+ by 22%, 51% and 142%."],
      ["NAAD as a marker","human obs","Raises NAAD, a metabolite found to be a sensitive marker of NAD+ repletion","An unexpected finding of the first human pharmacokinetic study."],
      ["Muscle and inflammation","human rct","In aged men it raised muscle NAD+ metabolites and lowered circulating inflammatory cytokines, without changing mitochondrial function","Muscle gene expression shifted toward lower energy-metabolism pathways, not the rise the mouse work predicted."]
    ],
    t: [
      { title: "Healthy middle-aged and older adults", evidence: "human rct", meta: ["healthy middle-aged and older adults","NR or placebo","two 6-week periods","randomized, double-blind, crossover"], body: "NR was well tolerated and raised NAD+ metabolism. The authors reported possible effects on blood pressure and arterial stiffness worth testing in larger trials.", refs: [838] },
      { title: "Obese, insulin-resistant men", evidence: "human rct", meta: ["40 sedentary men aged 40 to 70 with BMI over 30","NR 1,000 mg twice daily or placebo","12 weeks","randomized, double-blind, placebo-controlled"], body: "No improvement in insulin sensitivity, glucose production, energy expenditure, fat breakdown or body composition. Safety blood tests were normal.", refs: [840] },
      { title: "Aged human muscle", evidence: "human rct", meta: ["12 aged men","NR 1 g daily or placebo","21 days","randomized, double-blind, crossover"], body: "Muscle NAD+ metabolites rose and circulating inflammatory cytokines fell. Mitochondrial function did not change.", refs: [839] },
      { title: "Dose-ranging safety trial", evidence: "human rct", meta: ["overweight, otherwise healthy adults","NR 100, 300 or 1,000 mg daily or placebo","8 weeks","randomized, double-blind, placebo-controlled"], body: "Whole-blood NAD+ rose 22%, 51% and 142% within 2 weeks and stayed raised. Adverse events did not differ from placebo, and no flushing was reported.", note: "Sponsored by the manufacturer.", refs: [842] }
    ],
    k: [["Route","Oral"],["Bioavailability","Orally available; blood NAD+ metabolites rise within hours of a single dose"],["Half-life","Not established in humans"],["Metabolism","NRK enzymes to NMN and NAD+; part is split to nicotinamide"],["Excretion","Urine, as nicotinamide metabolites"]],
    ke: "human obs",
    kr: [841],
    related: ["nad-plus","nmn","metformin"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "ashwagandha",
    name: "Ashwagandha",
    aliases: ["Withania somnifera","KSM-66","Sensoril","Shoden","Indian ginseng","Winter cherry"],
    category: "health",
    status: "Supplement",
    class: "Herbal extract (Ayurvedic adaptogen)",
    tags: ["adaptogen","stress","cortisol","sleep","testosterone","Ayurveda","liver injury"],
    summary: "An Ayurvedic root extract with several small trials showing lower stress scores and cortisol. Its effects on strength and testosterone rest on a few small trials, and it has caused liver injury and thyroid changes.",
    names: "A shrub in the nightshade family used in Ayurvedic medicine. Commercial extracts differ: KSM-66 is a root extract, Sensoril uses root and leaf, and Shoden is a high-withanolide extract. Results from one extract do not carry over to another.",
    structure: "A plant extract, not a single compound. The withanolides, steroidal lactones such as withaferin A (C<sub>28</sub>H<sub>38</sub>O<sub>6</sub>, about 470.6 g/mol), are thought to be the main active compounds. Products are standardized to withanolide content, which varies between them.",
    pubchem: "withaferin A",
    p: [["Stress and anxiety effect",3],["Strength effect",2],["Risk load",2,1],["Evidence quality",2]],
    pnote: "Mostly small, short trials, each using a different proprietary extract.",
    r: [
      ["Liver","moderate","Cholestatic liver injury with jaundice and itching, starting 2 to 12 weeks after beginning","human obs","In a case series from Iceland and the US Drug-Induced Liver Injury Network, all five patients had jaundice. Liver tests normalized in 1 to 5 months and none developed liver failure.",[846]],
      ["Thyroid","low","May raise thyroid hormone; thyrotoxicosis has been reported","human obs","In an 8-week trial, the three treated patients with abnormal thyroid tests all had rises in T4. Relevant for anyone with thyroid disease or on thyroid medication.",[848]],
      ["Hormones","unknown","Raised testosterone and DHEA-S modestly in some trials, which matters for hormone-sensitive conditions","human rct","",[845]],
      ["Sedation","low","Improves sleep in trials, so it may add to the effect of sedative drugs","human rct","",[847]],
      ["Pregnancy","unknown","Safety in pregnancy is not established","unknown"]
    ],
    a: [
      ["Stress axis","human rct","Lowered serum cortisol and stress scores in stressed adults","Two separate trials found lower cortisol and perceived stress than placebo. The mechanism is unknown; GABA-like and HPA-axis effects are proposed from animal work."],
      ["Testosterone","human rct","Small testosterone rises in men in some trials","In aging overweight men, testosterone rose 14.7% more than on placebo, without any change in fatigue or sexual well-being."],
      ["Strength with training","human rct","One 8-week trial in untrained young men found larger strength and muscle size gains than placebo","Not replicated at scale."]
    ],
    t: [
      { title: "Stress and anxiety in chronically stressed adults", evidence: "human rct", meta: ["64 adults with chronic stress","root extract 300 mg twice daily or placebo","60 days","randomized, double-blind, placebo-controlled"], body: "Scores fell more than on placebo on every stress scale, and serum cortisol fell. Side effects were mild and similar to placebo.", refs: [843] },
      { title: "Dose comparison for stress", evidence: "human rct", meta: ["60 stressed healthy adults","root extract 125 mg or 300 mg twice daily, or placebo","8 weeks","randomized, double-blind, placebo-controlled"], body: "Perceived stress and serum cortisol fell at both doses, and sleep quality improved compared with placebo.", refs: [847] },
      { title: "Strength training in young men", evidence: "human rct", meta: ["57 young men new to resistance training","root extract 300 mg twice daily or placebo","8 weeks","randomized, double-blind, placebo-controlled"], body: "Bench press rose 46.0 kg against 26.4 kg on placebo, with larger arm and chest size gains, a larger testosterone rise (96 against 18 ng/dL) and more fat loss.", note: "Large effects in a small trial of beginners. Treat as unconfirmed.", refs: [844] },
      { title: "Hormones in aging overweight men", evidence: "human rct", meta: ["57 overweight men aged 40 to 70 with mild fatigue","Shoden extract (21 mg withanolide glycosides daily) or placebo","8 weeks per arm","randomized, double-blind, crossover"], body: "DHEA-S rose 18% and testosterone 14.7% more than on placebo. Fatigue, vigor and sexual well-being did not differ from placebo.", refs: [845] }
    ],
    k: [["Route","Oral"],["Bioavailability","Not established in humans"],["Half-life","Not established in humans"],["Metabolism","Not established in humans"],["Excretion","Not established in humans"]],
    ke: "unknown",
    related: ["tongkat-ali","dhea","selank"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "tongkat-ali",
    name: "Tongkat ali",
    aliases: ["Eurycoma longifolia","Longjack","Malaysian ginseng","Physta"],
    category: "health",
    status: "Supplement",
    class: "Herbal extract",
    tags: ["testosterone","herbal","supplement","libido","stress"],
    summary: "A Southeast Asian root extract sold to raise testosterone. A meta-analysis of small trials found a rise in total testosterone, clearest in men with low levels, but the trials are few, short and small.",
    names: "A shrub native to Malaysia, Indonesia and Thailand, with a long traditional use as a tonic. Most trials used standardized hot-water root extracts. Products vary widely in what they contain.",
    structure: "A plant extract. Most extracts are standardized to the quassinoid eurycomanone (C<sub>20</sub>H<sub>24</sub>O<sub>9</sub>, about 408.4 g/mol). Peptide and glycoprotein fractions are also proposed as active.",
    pubchem: "eurycomanone",
    p: [["Testosterone effect",2],["Risk load",1,1],["Evidence quality",2]],
    r: [
      ["Hematocrit","low","Hemoglobin, hematocrit and red cell count rose slightly in older men","human obs","From a small uncontrolled pilot.",[850]],
      ["Long-term safety","unknown","Trials last weeks; longer use is unstudied","unknown"],
      ["Hormone-sensitive conditions","unknown","Any real testosterone rise matters for prostate and other hormone-sensitive conditions","unknown"]
    ],
    a: [
      ["Testosterone","human rct","Raised total testosterone in pooled small trials, most clearly in hypogonadal men","How it works is not established in people. Higher production and lower SHBG binding are both proposed."],
      ["SHBG","human obs","In older women in a pilot study, free testosterone rose with a fall in SHBG","Uncontrolled and small."],
      ["Stress hormones","human rct","Lower salivary cortisol and higher salivary testosterone in moderately stressed adults","One 4-week trial."]
    ],
    t: [
      { title: "Meta-analysis of testosterone", evidence: "human rct", meta: ["9 studies reviewed, 5 randomized trials pooled","E. longifolia alone against placebo","systematic review and meta-analysis"], body: "Total testosterone rose (standardized mean difference 1.35), and the effect held in the hypogonadal subgroup.", note: "Few, small and varied trials. Large standardized effects from small trials often shrink in larger ones.", refs: [852] },
      { title: "Late-onset hypogonadism", evidence: "human obs", meta: ["76 men with late-onset hypogonadism","200 mg standardized water extract daily","1 month","uncontrolled"], body: "The share with normal testosterone rose from 35.5% to 90.8%, and symptom scores improved.", note: "No placebo group.", refs: [851] },
      { title: "Stress hormones and mood", evidence: "human rct", meta: ["63 moderately stressed adults (32 men, 31 women)","standardized hot-water root extract or placebo","4 weeks","randomized, placebo-controlled"], body: "Tension, anger and confusion scores improved. Salivary cortisol fell 16% and salivary testosterone rose 37%.", refs: [849] },
      { title: "Active older adults", evidence: "human obs", meta: ["25 physically active adults aged 57 to 72","400 mg extract daily","5 weeks","uncontrolled pilot"], body: "Total and free testosterone and grip strength rose in both men and women.", refs: [850] }
    ],
    k: [["Route","Oral"],["Bioavailability","Not established in humans"],["Half-life","Not established in humans"],["Metabolism","Not established in humans"],["Excretion","Not established in humans"]],
    ke: "unknown",
    related: ["ashwagandha","dhea","clomiphene","enclomiphene"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "yk-11",
    name: "YK-11",
    aliases: ["YK11"],
    category: "sarms",
    status: "Research only",
    class: "Steroidal SARM (androgen receptor partial agonist)",
    tags: ["SARM","myostatin","follistatin","steroidal","doping","black market"],
    summary: "A steroid sold as a SARM and a myostatin inhibitor. Its muscle claims rest on cell culture; it has never been in a clinical trial, and the little animal work is on the rat brain.",
    names: "Synthesized and described by Yuichiro Kanno and colleagues in Japan in 2011. It was never developed as a medicine. It has turned up in black-market products and doping samples, and falls under WADA's prohibited anabolic agents.",
    structure: "C<sub>25</sub>H<sub>34</sub>O<sub>6</sub>, about 430.5 g/mol. A 19-norpregnane steroid with an orthoester-derived group at the D-ring. Unlike most products sold as SARMs, it has a steroid skeleton.",
    pubchem: "YK-11",
    refs: [883],
    p: [["Muscle evidence",1],["Risk load",3,1],["Evidence quality",0]],
    r: [
      ["Liver","unknown","Liver injury is reported with SARMs as a class; there are no YK-11-specific data","human obs","An Australian case series of liver injury from SARMs, anabolic steroids and bodybuilding supplements found a median 175 days to normal liver tests, and one patient needed a transplant. Products often contain more than one substance.",[856,857]],
      ["Hormone suppression","unknown","As an androgen receptor agonist it would be expected to suppress LH, FSH and natural testosterone","unknown","Never measured in people."],
      ["Brain","unknown","In rats it caused oxidative stress and mitochondrial dysfunction in the hippocampus","animal","",[882]],
      ["Product identity","high","No pharmaceutical source exists, so every product is unregulated","established"]
    ],
    a: [
      ["Androgen receptor partial agonist","in vitro","Activates the androgen receptor without the usual N/C-terminal interaction, giving partial, gene-selective activity","Shown in reporter and breast cancer cell assays."],
      ["Follistatin","in vitro","In mouse muscle cells it raised follistatin, a myostatin blocker, and blocking follistatin reversed its effect on muscle cell differentiation","This single cell study is the source of its myostatin-inhibitor label. It has not been shown in an animal or a person."],
      ["Bone cells","in vitro","Increased proliferation and differentiation of osteoblast cells",""]
    ],
    t: [],
    noTrials: "No human trials. The only published human-relevant data are doping-control studies. In an administration study no intact YK-11 appeared in urine, and its metabolites stayed detectable for more than 48 hours.",
    noTrialsRefs: [855,853,854],
    k: [["Route","Oral (black-market products)"],["Bioavailability","Not established in humans"],["Half-life","Not established in humans"],["Metabolism","Extensive; no intact drug in urine after administration, with 14 metabolites identified"],["Excretion","Urine, as glucuronide and sulfate conjugates detectable beyond 48 hours"]],
    ke: "unknown",
    kr: [855],
    related: ["ostarine","lgd-4033","rad-140","ace-031","andarine"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "andarine",
    name: "Andarine",
    aliases: ["S-4","S4","GTx-007"],
    category: "sarms",
    status: "Never approved",
    class: "Nonsteroidal SARM (aryl propionamide)",
    tags: ["SARM","S4","vision","doping","black market"],
    summary: "An early SARM from the same program as ostarine, studied in rats and dropped before any published human trial. Users report vision changes, but no controlled data exist.",
    names: "Developed at the University of Tennessee in the group that also made ostarine, and licensed to GTx as GTx-007. Development moved to ostarine instead. Prohibited in sport by WADA, and found in doping samples since 2010.",
    structure: "C<sub>19</sub>H<sub>18</sub>F<sub>3</sub>N<sub>3</sub>O<sub>6</sub>, about 441.4 g/mol. An aryl propionamide like ostarine, with a nitro group where ostarine has a cyano group, and an acetamidophenoxy ring.",
    pubchem: "andarine",
    p: [["Muscle evidence",1],["Risk load",3,1],["Evidence quality",1]],
    r: [
      ["Vision","unknown","A yellow tint and poor adjustment to darkness are widely reported by users","anecdotal","No controlled study has examined it."],
      ["Hormone suppression","moderate","Lowered LH and FSH dose-dependently in castrated rats, which predicts suppression of natural testosterone","animal","",[858]],
      ["Liver","unknown","Liver injury is reported with SARMs as a class","human obs","",[856,857]],
      ["Product identity","high","No pharmaceutical source exists, so every product is unregulated","established"]
    ],
    a: [
      ["Androgen receptor","animal","A full agonist in rat muscle and bone and a weak partial agonist in the prostate","In castrated rats, 3 mg/kg restored muscle mass and strength while prostate weight returned to only 16% of intact levels."],
      ["Bone and fat","animal","Maintained bone density and strength and reduced body fat in ovariectomized female rats",""],
      ["Pituitary","animal","Suppressed LH and FSH in a dose-dependent way",""]
    ],
    t: [],
    noTrials: "No published human trials. Its record is rat pharmacology and doping-control case reports.",
    noTrialsRefs: [858,859,861,881],
    k: [["Route","Oral"],["Bioavailability","Complete at low doses in rats; no human data"],["Half-life","2.6 to 5.3 hours in rats"],["Metabolism","Not established in humans"],["Excretion","Not established in humans"]],
    ke: "animal",
    kr: [860],
    related: ["ostarine","lgd-4033","rad-140","yk-11"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "dhea",
    name: "DHEA",
    aliases: ["Dehydroepiandrosterone","Prasterone","Intrarosa","DHEA-S"],
    category: "health",
    status: "Supplement",
    class: "Adrenal steroid prohormone",
    tags: ["prohormone","adrenal","aging","testosterone","estrogen","supplement"],
    summary: "An adrenal hormone that falls with age and is sold over the counter in the US. Year-long trials in older adults found it restores blood levels but does little for body composition, strength or quality of life; women with adrenal failure are the clearest exception.",
    names: "Made mainly by the adrenal glands and converted in tissues to testosterone and estrogens. Sold over the counter as a supplement in the US and prescription-only in several other countries. Approved by the FDA as Intrarosa (prasterone), a vaginal insert for painful sex after menopause. Prohibited in sport at all times by WADA.",
    structure: "C<sub>19</sub>H<sub>28</sub>O<sub>2</sub>, about 288.4 g/mol. A 17-keto androstene with a 3β-hydroxyl group. Most circulates as its sulfate, DHEA-S.",
    pubchem: "dehydroepiandrosterone",
    p: [["Effect in healthy older adults",1],["Effect in adrenal insufficiency",3],["Risk load",2,1],["Evidence quality",4]],
    r: [
      ["Androgen effects in women","moderate","Acne, oily skin and unwanted hair growth from conversion to testosterone","human rct","In women with adrenal insufficiency, 50 mg daily raised testosterone into the normal range.",[864]],
      ["Estrogen","low","Part is converted to estradiol","human rct","Small rises in testosterone and estradiol were seen, mainly in women.",[862]],
      ["HDL","low","Total and HDL cholesterol fell in women with adrenal insufficiency","human rct","",[864]],
      ["Hormone-sensitive cancers","unknown","Conversion to sex hormones is a theoretical concern for breast and prostate cancer","unknown","No trial has been long enough to tell."],
      ["Sport","high","Prohibited at all times in tested sport","established"]
    ],
    a: [
      ["Sex hormone precursor","established","Converted inside tissues to androstenedione, testosterone and estrogens","How much becomes each depends on sex and tissue, which is why effects differ between men and women."],
      ["Restoring age-related decline","human rct","50 mg daily restores youthful DHEA-S levels in older adults","Restoring the level did not restore function in the 2-year trial."],
      ["Local vaginal action","human rct","Intravaginal DHEA is converted locally, improving vaginal tissue while serum steroids stay within normal postmenopausal values",""]
    ],
    t: [
      { title: "DHEAge", evidence: "human rct", meta: ["280 healthy adults aged 60 to 79","DHEA 50 mg daily or placebo","1 year","randomized, double-blind, placebo-controlled"], body: "DHEA-S returned to young levels, with small rises in testosterone and estradiol, mainly in women. Bone turnover improved in women over 70, and women reported higher libido and skin changes. No harmful accumulation was recorded.", refs: [862] },
      { title: "DHEA or testosterone in older adults", evidence: "human rct", meta: ["87 older men with low DHEA-S and testosterone, 57 older women with low DHEA-S","DHEA, testosterone (men only) or placebo","2 years","randomized, double-blind, placebo-controlled"], body: "Neither hormone improved body composition, aerobic capacity, strength, insulin sensitivity or quality of life. Women on DHEA gained bone density at one wrist site.", note: "The longest DHEA trial in older adults, and a negative one.", refs: [863] },
      { title: "Women with adrenal insufficiency", evidence: "human rct", meta: ["24 women with adrenal insufficiency","DHEA 50 mg each morning or placebo","4 months each, with a washout","randomized, double-blind, crossover"], body: "Well-being, depression and anxiety scores improved, as did sexual thoughts, interest and satisfaction.", refs: [864] },
      { title: "Intravaginal DHEA after menopause", evidence: "human rct", meta: ["482 postmenopausal women with moderate to severe painful sex","intravaginal DHEA 6.5 mg daily or placebo","12 weeks","randomized, double-blind, placebo-controlled, phase 3"], body: "Vaginal cell measures and pH improved, and pain during sex fell 0.36 points more than on placebo. Vaginal discharge, in about 6%, was the only related side effect.", refs: [865] }
    ],
    k: [["Route","Oral; vaginal insert (Intrarosa)"],["Metabolism","Sulfated to DHEA-S, and converted in tissues to androgens and estrogens"],["Half-life","DHEA itself clears quickly; DHEA-S lasts much longer and is what blood tests measure"],["Excretion","Urine, as steroid metabolites"]],
    ke: "established",
    related: ["testosterone","anastrozole","ashwagandha","tongkat-ali"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "melatonin",
    name: "Melatonin",
    aliases: ["N-acetyl-5-methoxytryptamine","Circadin","Slenyto"],
    category: "health",
    status: "Supplement",
    class: "Pineal hormone (MT1/MT2 receptor agonist)",
    tags: ["sleep","circadian rhythm","jet lag","supplement","insomnia"],
    summary: "The body's darkness signal, sold over the counter in the US and as a prescription drug in Europe. It shortens time to fall asleep by minutes, not hours, and supplements often do not contain what the label says.",
    names: "Made by the pineal gland at night. A dietary supplement in the US, where use rose sharply between 1999 and 2018. In the EU, prolonged-release Circadin 2 mg is approved for insomnia in people 55 and over, and Slenyto for sleep problems in children with autism.",
    structure: "C<sub>13</sub>H<sub>16</sub>N<sub>2</sub>O<sub>2</sub>, about 232.3 g/mol. An indoleamine made from serotonin.",
    pubchem: "melatonin",
    refs: [879],
    p: [["Sleep onset effect",2],["Body clock shifting",3],["Risk load",1,1],["Evidence quality",4]],
    r: [
      ["Dose accuracy","moderate","Content often does not match the label, and some products contain serotonin","human obs","In 31 supplements tested, content ranged from 83% below to 478% above the label, and 26% contained serotonin. US gummies tested later also differed from their labels.",[867,868]],
      ["Next-day effects","low","Drowsiness, headache and dizziness, mainly with higher immediate-release doses","human rct","Prolonged-release 2 mg showed no hangover, rebound or withdrawal effects in its trials.",[869]],
      ["Drug interactions","moderate","Fluvoxamine raises melatonin levels sharply; caffeine, smoking and oral contraceptives change them too","human obs","",[870]],
      ["Children","unknown","Long-term effects on puberty and development are not established","unknown"]
    ],
    a: [
      ["MT1 and MT2 receptors","established","Activates melatonin receptors in the brain's master clock, signaling night","This lowers alertness and shifts the timing of the body clock."],
      ["Phase shifting","established","Taken in the evening it moves the body clock earlier; taken in the morning, later","The timing effect, more than sedation, is what makes it useful for jet lag and delayed sleep phase."],
      ["Sleep onset","human rct","Shortens time to fall asleep by about 7 minutes on average","The effect is modest and did not fade with continued use."]
    ],
    t: [
      { title: "Meta-analysis in primary sleep disorders", evidence: "human rct", meta: ["19 trials, 1,683 people","melatonin against placebo","meta-analysis"], body: "Sleep onset was 7 minutes faster, total sleep 8 minutes longer, and sleep quality slightly better. Higher doses and longer trials showed larger effects on onset and total sleep.", refs: [866] },
      { title: "Prolonged-release melatonin in adults 55 and over", evidence: "human rct", meta: ["published trials of prolonged-release melatonin 2 mg","review"], body: "Sleep quality, sleep onset and morning alertness improved over up to 3 months, with no rebound, withdrawal or hangover effects.", note: "Written by researchers including the product's developer.", refs: [869] },
      { title: "What melatonin supplements contain", evidence: "human obs", meta: ["31 commercial supplements","laboratory analysis"], body: "More than 71% were outside 10% of their labeled melatonin, the range ran from −83% to +478%, and lots of the same product differed by up to 465%.", refs: [867] }
    ],
    k: [["Route","Oral (immediate- or prolonged-release)"],["Bioavailability","About 15% (studies range from 9% to 33%)"],["Time to peak","About 50 minutes for immediate-release"],["Half-life","About 45 minutes"],["Metabolism","Liver, mainly CYP1A2"],["Excretion","Urine, mainly as 6-sulfatoxymelatonin"]],
    ke: "human obs",
    kr: [870],
    related: ["trazodone","doxepin","dsip","caffeine"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "caffeine",
    name: "Caffeine",
    aliases: ["1,3,7-trimethylxanthine","NoDoz","Vivarin","Caffeine anhydrous"],
    category: "nootropic",
    status: "Approved",
    class: "Methylxanthine (adenosine receptor antagonist)",
    tags: ["stimulant","adenosine","alertness","endurance","pre-workout","OTC"],
    summary: "The world's most used psychoactive drug. It reliably improves alertness and endurance and modestly improves strength, and the US approves it over the counter as a stimulant at 100 to 200 mg a dose.",
    names: "Found in coffee, tea, cacao, guarana and kola. Approved in the US as an over-the-counter alertness aid, and as caffeine citrate for apnea in premature babies. Taken off WADA's prohibited list in 2004.",
    structure: "C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, about 194.2 g/mol. A xanthine with methyl groups at positions 1, 3 and 7.",
    pubchem: "caffeine",
    p: [["Alertness effect",4],["Exercise effect",3],["Risk load",1,1],["Evidence quality",5]],
    r: [
      ["Sleep","moderate","Disrupts sleep even when taken 6 hours before bed","human rct","400 mg at bedtime, 3 hours before or 6 hours before each disturbed sleep compared with placebo.",[876]],
      ["Anxiety and jitteriness","low","Anxiety and jitteriness rise with dose and vary with genetics and habit","human obs","Very high doses, around 9 mg/kg, cause frequent side effects without adding performance.",[872]],
      ["Heart rate and blood pressure","low","Palpitations and short-lived rises in blood pressure, more in people not used to it","established","",[877]],
      ["Pregnancy","moderate","High intake is associated with low birth weight and pregnancy loss","human obs","EFSA puts 200 mg a day as the intake without fetal safety concerns.",[874,877]],
      ["Withdrawal","low","Headache, tiredness and low mood when regular use stops","established"],
      ["Concentrated powder","high","Pure caffeine powders and liquids make a dangerous overdose easy to measure out by mistake","established"]
    ],
    a: [
      ["Adenosine receptors","established","Blocks A1 and A2A adenosine receptors, which carry the sleep pressure that builds through the day","It masks tiredness rather than supplying energy, which is why sleep debt returns when it wears off."],
      ["Exercise performance","human rct","Improves endurance most, and strength, power and speed less, at 3 to 6 mg/kg","The evidence is mostly moderate quality, and most studies were in young men."],
      ["With L-theanine","human rct","With L-theanine it improved attention switching more than caffeine alone in one small trial",""]
    ],
    t: [
      { title: "Umbrella review of exercise performance", evidence: "human rct", meta: ["21 meta-analyses from 11 reviews","caffeine against placebo","umbrella review"], body: "Caffeine improved aerobic endurance, muscle strength, muscle endurance, power, jumping and speed. Effects were generally larger for aerobic than anaerobic exercise; evidence quality was mostly moderate.", refs: [873] },
      { title: "Caffeine timing and sleep", evidence: "human rct", meta: ["healthy normal sleepers at home","caffeine 400 mg at bedtime, 3 or 6 hours before, or placebo","objective and self-reported sleep","randomized, placebo-controlled"], body: "All three timings disturbed sleep compared with placebo, and the loss of total sleep at 6 hours before bed was large enough for the authors to judge it important.", refs: [876] },
      { title: "Caffeine with L-theanine", evidence: "human rct", meta: ["27 healthy volunteers","caffeine 50 mg with or without L-theanine 100 mg, or placebo","crossover with 7-day washouts"], body: "Caffeine alone raised alertness and attention-switching accuracy. With L-theanine, attention switching was faster and more accurate, and memory was less distracted.", refs: [875] },
      { title: "Coffee and health outcomes", evidence: "human obs", meta: ["201 meta-analyses of observational studies and 17 of trials","umbrella review"], body: "Three to four cups a day were linked with the largest risk reductions, including all-cause mortality (relative risk 0.83). Harms were concentrated in pregnancy.", note: "Mostly observational, about coffee rather than caffeine, and cannot show cause.", refs: [874] }
    ],
    k: [["Route","Oral"],["Bioavailability","Close to complete"],["Time to peak","Within about an hour"],["Half-life","Several hours in adults; longer in pregnancy and with oral contraceptives, shorter in smokers"],["Metabolism","Liver, mainly CYP1A2, to paraxanthine, theobromine and theophylline"],["Excretion","Urine, almost entirely as metabolites"]],
    ke: "established",
    kr: [877],
    related: ["ephedrine","yohimbine","modafinil","nicotine","melatonin"],
    added: "2026-10-17",
    updated: "2026-10-17"
  });

  A.add({
    slug: "sana",
    name: "SANA (MVD1)",
    aliases: ["MVD1","5-(2-nitroethenyl)salicylic acid","Nitroalkene salicylate"],
    category: "metabolic",
    status: "Investigational",
    class: "Activator of creatine-dependent thermogenesis",
    developer: "Institut Pasteur Montevideo and EOLO USA",
    tags: ["thermogenesis","futile creatine cycle","energy expenditure","fat loss","insulin resistance","salicylate"],
    summary: "An oral salicylate derivative that raised energy expenditure in mouse fat through the creatine cycle rather than by uncoupling mitochondria. Its only human study is a 15-day phase 1 safety trial, in which the top multiple dose was followed by about 3% weight loss and single doses of 800 mg caused reversible kidney damage.",
    names: "Developed at Institut Pasteur Montevideo, Uruguay, and run in the clinic as MVD1 by EOLO USA, in which several of the authors hold shares. It has completed one phase 1 trial (ACTRN12622001519741) and is approved nowhere. Material sold online is unregulated.",
    structure: "5-(2-nitroethenyl)salicylic acid. C<sub>9</sub>H<sub>7</sub>NO<sub>5</sub>, about 209.2 g/mol. Salicylic acid carrying a nitroalkene group, which reacts with proteins as an electrophile.",
    p: [["Weight effect",2],["Glucose effect",2],["Risk load",2,1],["Evidence quality",1]],
    pnote: "Scored from one 15-day phase 1 trial with six people per dose group, run by the developer.",
    r: [
      ["Kidney","moderate","Single 800 mg doses caused reversible kidney tubular damage","human rct","Two of the three people given 800 mg had protein and glucose in their urine, judged definitely caused by the drug, and the safety committee stopped dose escalation there. At up to 400 mg a day for 15 days no drug-related kidney injury was reported; one person was withdrawn for mild proteinuria judged unrelated and most likely due to undiagnosed kidney disease.",[884]],
      ["Tolerability","low","Mild side effects were common at every multiple dose","human rct","Most people on 100 to 200 mg twice daily had an adverse event judged possibly related, such as diarrhea, headache or tiredness. No moderate or severe gut effects were reported.",[884]],
      ["Long-term safety","unknown","Nothing is known past 15 days of use","unknown","Human exposure totals 29 people in one trial. In mice, 8 weeks at high doses showed no signs of liver or kidney toxicity, which says little about people.",[884]]
    ],
    a: [
      ["Creatine-dependent thermogenesis","animal","Raised energy expenditure in mouse fat by driving the futile creatine cycle, a heat-producing pathway separate from UCP1","The effect did not need UCP1 or AMPK and disappeared when creatine was depleted. Treated mice had warmer skin over their fat on thermal imaging."],
      ["Not a direct uncoupler","in vitro","Did not uncouple isolated mitochondria, unlike DNP and BAM15","It raised respiration in intact fat cells only, which is the paper's main evidence that it works by a different route from the classic uncouplers."],
      ["Obesity models","animal","Reduced weight gain, liver fat and insulin resistance in mice on a high-fat diet, including at thermoneutral temperature","Thermoneutral housing is closer to how humans live, which matters because many thermogenic drugs lose their effect there."]
    ],
    t: [
      { title: "Phase 1A: single ascending doses", evidence: "human rct", meta: ["17 healthy lean adults, 11 given SANA","one oral dose of 200, 400 or 800 mg, or placebo","single dose","randomized, double-blind, placebo-controlled, phase 1A"], body: "Single doses up to 400 mg were well tolerated. At 800 mg, two of three people developed reversible kidney tubular damage judged definitely drug-related, and the safety committee ended dose escalation at that level.", refs: [884] },
      { title: "Phase 1B: 15 days in overweight and obesity", evidence: "human rct", meta: ["24 adults with overweight or obesity, 18 given SANA","100, 150 or 200 mg twice daily, or placebo","15 days","randomized, double-blind, placebo-controlled, phase 1B"], body: "At 200 mg twice daily, body weight fell by about 3% over 15 days with no significant change on placebo, alongside lower insulin resistance (HOMA-IR) and fructosamine; one person in that group had higher fasting glucose. The trial was designed for safety, not weight loss, and body weight was not recorded for six people in the lowest dose group because of a protocol error.", note: "Six people per dose group, run by the developer, over two weeks. The weight and glucose results are exploratory.", refs: [884] }
    ],
    refs: [884],
    related: ["bam15","atx-304","dnp","creatine","slu-pp-332"],
    added: "2026-10-18",
    updated: "2026-10-18"
  });

  A.dosing = A.dosing || {};
  Object.assign(A.dosing, {
    liraglutide: { source: "FDA label (Saxenda)", evidence: "established", rows: [["Weight management (Saxenda)","0.6 mg daily in week 1, rising by 0.6 mg each week to 3 mg daily from week 5"],["If 3 mg is not tolerated","The label says to stop; efficacy was not established at 0.6 to 2.4 mg"],["Response check","Stop at 16 weeks if at least 4% of baseline body weight has not been lost"],["Missed doses","If more than 3 days have passed, restart at 0.6 mg and escalate again"]], note: "When starting alongside insulin or a sulfonylurea, the label suggests lowering those doses to reduce low blood sugar.", refs: [804] },
    clomiphene: { source: "FDA label (women) and a published male case series", evidence: "established", rows: [["Ovulation induction (label)","50 mg daily for 5 days; if no ovulation, 100 mg daily for 5 days in a later cycle"],["Label limit","No more than 100 mg daily for 5 days; if three courses do not produce ovulation, the label says to stop and reassess"],["Men with low testosterone (case series)","25 mg every other day, titrated to 50 mg every other day"]], note: "No regulator has approved clomiphene for men. The male figures come from an uncontrolled case series, not a label.", refs: [809,805] },
    cabergoline: { source: "FDA label (Dostinex)", evidence: "established", rows: [["Hyperprolactinemic disorders","0.25 mg twice a week to start"],["Increases","By 0.25 mg twice weekly, no more often than every 4 weeks, up to 1 mg twice a week, guided by prolactin"],["Stopping","May be stopped once prolactin has stayed normal for 6 months, with periodic prolactin checks afterward"]], note: "The label asks for a cardiovascular evaluation before starting, with echocardiography considered. No label or trial covers its off-label use with anabolic steroids.", refs: [815] },
    sirolimus: { source: "FDA label (Rapamune) and published trials", evidence: "established", rows: [["Lymphangioleiomyomatosis (label)","2 mg daily to start, then adjusted to whole-blood trough levels measured 10 to 20 days later"],["Kidney transplant with cyclosporine (label)","6 mg loading dose on day 1, then 2 mg daily, in low to moderate immunologic risk"],["Older adults (pilot trial)","1 mg daily for at least 8 weeks"],["Healthy aging (PEARL trial)","5 mg or 10 mg weekly for 48 weeks, compounded"]], note: "The weekly longevity schedule has one completed 48-week trial behind it, whose primary outcome was negative. The label says to avoid strong CYP3A4 or P-glycoprotein inhibitors and inducers, which change levels sharply.", refs: [821,820,818] },
    acarbose: { source: "FDA label (Precose) and a published trial", evidence: "established", rows: [["Type 2 diabetes (label)","25 mg three times daily with the first bite of each main meal; some start lower and build up"],["Increases (label)","Every 4 to 8 weeks, to 50 mg three times daily, guided by post-meal glucose or HbA1c"],["Maximum (label)","50 mg three times daily up to 60 kg; 100 mg three times daily above 60 kg"],["Diabetes prevention (STOP-NIDDM)","100 mg three times daily"]], note: "No label or trial covers its use for aging.", refs: [825,822] },
    creatine: { source: "Published trials", evidence: "human rct", rows: [["Loading (trials)","About 20 to 25 g daily in divided doses for 5 to 7 days"],["Maintenance (trials)","About 3 to 5 g daily, or 0.1 g/kg"],["Without loading","A daily maintenance dose alone reaches similar muscle stores more slowly"]], note: "No regulator label exists; it is a food supplement. The ISSN review reports doses up to 30 g daily for 5 years in healthy people without safety signals.", refs: [829,827,826] },
    nmn: { source: "Published trials", evidence: "human rct", rows: [["Doses studied","250 mg daily (6 or 12 weeks); 300, 600 or 900 mg daily (60 days); single doses of 100 to 500 mg"]], note: "No regulator label exists.", refs: [835,836,834] },
    "nicotinamide-riboside": { source: "Published trials", evidence: "human rct", rows: [["Doses studied","100 to 1,000 mg daily (8 weeks); 1,000 mg daily (21 days); 2,000 mg daily (12 weeks)"]], note: "No regulator label exists.", refs: [842,839,840] },
    ashwagandha: { source: "Published trials", evidence: "human rct", rows: [["Root extract (stress trials)","300 mg twice daily for 60 days; 125 mg or 300 mg twice daily for 8 weeks"],["Root extract (training trial)","300 mg twice daily for 8 weeks"],["High-withanolide extract","A daily dose giving 21 mg withanolide glycosides, for 8 weeks"]], note: "Each dose applies only to the specific extract that trial used. No regulator label exists.", refs: [843,847,844,845] },
    "tongkat-ali": { source: "Published trials", evidence: "human obs", rows: [["Doses studied","200 mg daily of standardized water extract for 1 month; 400 mg daily for 5 weeks"]], note: "Doses apply only to the standardized extracts those studies used. No regulator label exists.", refs: [851,850] },
    dhea: { source: "Phase 3 trial of the approved product (Intrarosa) and published trials", evidence: "established", rows: [["Painful sex after menopause (Intrarosa, phase 3 trial)","6.5 mg vaginal insert once daily"],["Older adults (trial)","50 mg by mouth daily for 1 year"],["Women with adrenal insufficiency (trial)","50 mg by mouth each morning for 4 months"]], note: "Oral DHEA has no approved indication in the US.", refs: [865,862,864] },
    melatonin: { source: "EMA label (Circadin)", evidence: "established", rows: [["Insomnia, age 55 and over","2 mg prolonged-release once daily, 1 to 2 hours before bedtime and after food"],["Duration","Up to 13 weeks"]], note: "Tablets are swallowed whole. US supplements carry no regulator-reviewed dose.", refs: [871] },
    caffeine: { source: "FDA OTC monograph, EFSA opinion and published trials", evidence: "established", rows: [["Alertness (US OTC label)","100 to 200 mg, not more often than every 3 to 4 hours, for adults and children 12 and over"],["Label warnings","For occasional use only; not a substitute for sleep"],["Safety thresholds (EFSA)","Single doses up to 200 mg and habitual intake up to 400 mg a day raise no concern in healthy non-pregnant adults; up to 200 mg a day in pregnancy"],["Exercise (trials)","3 to 6 mg/kg, most often taken 60 minutes before"]], note: "Caffeine from coffee, energy drinks and pre-workouts all counts toward the total.", refs: [878,877,872] }
  });

  A.monitoring = A.monitoring || {};
  Object.assign(A.monitoring, {
    liraglutide: { markers: [["Body weight","The label's 16-week stop rule depends on it"],["Resting heart rate","The label advises checking at regular intervals"],["Blood glucose","When combined with insulin or a sulfonylurea"],["Kidney function","Kidney injury has followed dehydration from vomiting or diarrhea"]], watch: ["Severe, persistent abdominal pain, sometimes spreading to the back","Pain under the right ribs, fever or yellowing of the skin or eyes","A lump in the neck, hoarseness or trouble swallowing","New or worsening low mood or thoughts of self-harm"] },
    clomiphene: { markers: [["Total testosterone, LH and FSH","Show whether the axis is responding"],["Estradiol","Testicular estrogen output rises along with testosterone"],["Hematocrit","Rises less than on testosterone, but still rises"],["Liver enzymes","Hepatitis appears in postmarketing reports"]], watch: ["Blurred vision, spots, flashes or lingering afterimages","Marked irritability or mood change","Breast tenderness or swelling","In women, pelvic pain or rapid abdominal swelling"] },
    cabergoline: { markers: [["Prolactin","The label adjusts dose by it"],["Echocardiogram","Before starting and during long-term treatment, per the label"],["Blood pressure","Can fall on standing early in treatment"]], watch: ["New breathlessness, cough, chest pain or leg swelling","New compulsive gambling, spending, eating or sexual urges","Fainting or dizziness on standing","Persistent back or flank pain"] },
    sirolimus: { markers: [["Sirolimus trough level","Required by the label in transplant and LAM use"],["Lipid panel","The label says to monitor for hyperlipidemia"],["Fasting glucose or HbA1c","Hyperglycemia is a listed effect"],["Complete blood count","Red cell indices fell in older adults"],["Kidney function and urine protein","Proteinuria and declining kidney function are label warnings"]], watch: ["Fever, persistent cough or other signs of infection","Mouth ulcers","Wounds that heal slowly or reopen","Swelling of the face, lips or tongue","New breathlessness or dry cough"] },
    acarbose: { markers: [["HbA1c and post-meal glucose","The label uses them to adjust dose"],["Liver enzymes","Every 3 months in the first year, per the label"]], watch: ["Yellowing of the skin or eyes","Severe or persistent diarrhea or abdominal pain","Symptoms of low blood sugar when taken with insulin or a sulfonylurea"] },
    creatine: { markers: [["Creatinine and eGFR","Rise from creatine itself; a creatinine-independent marker such as cystatin C is sometimes used if kidney function is in question"],["Body weight","Expected early rise from water"]], watch: ["Persistent diarrhea or stomach cramps","Reduced urine or swelling in anyone with kidney disease"] },
    nmn: { markers: [["Nothing specific is established","Trials checked routine blood chemistry and found no consistent change"]] },
    "nicotinamide-riboside": { markers: [["Nothing specific is established","Trials checked routine safety blood tests and found no consistent change"]] },
    ashwagandha: { markers: [["Liver enzymes and bilirubin","Cholestatic liver injury is reported"],["TSH and free T4","Thyroid hormone may rise"]], watch: ["Yellowing of the skin or eyes, dark urine or itching","Palpitations, tremor, heat intolerance or unexplained weight loss","Marked daytime drowsiness"] },
    "tongkat-ali": { markers: [["Total testosterone, SHBG and LH","Show whether anything changed"],["Hematocrit","Rose slightly in one pilot"]] },
    "yk-11": { markers: [["Liver enzymes and bilirubin","Liver injury is reported across SARMs"],["Lipid panel","Androgen receptor agonists lower HDL"],["Total testosterone, LH and FSH","Expected suppression"],["Hematocrit","Androgens raise it"]], watch: ["Yellowing of the skin or eyes, dark urine or itching","Low libido or erectile problems after stopping","Marked mood change"] },
    andarine: { markers: [["Liver enzymes and bilirubin","Liver injury is reported across SARMs"],["Lipid panel","Androgen receptor agonists lower HDL"],["Total testosterone, LH and FSH","Suppressed in animals"]], watch: ["A yellow tint to vision or poor night vision","Yellowing of the skin or eyes, dark urine or itching","Low libido or erectile problems after stopping"] },
    dhea: { markers: [["DHEA-S","Shows the level reached"],["Total testosterone and estradiol","Both rise from conversion"],["Lipid panel","HDL fell in one trial"],["PSA (men)","Androgen exposure"]], watch: ["Acne, oily skin or new facial or body hair (women)","Breast tenderness or swelling (men)","Marked mood change"] },
    melatonin: { markers: [["Nothing specific is established","No routine blood test applies"]], watch: ["Daytime sleepiness","Headache or dizziness"] },
    sana: { markers: [["Urine protein and glucose","Both appeared with the kidney tubular damage seen at 800 mg in the phase 1 trial"]] },
    caffeine: { markers: [["Blood pressure","Rises acutely, more in people not used to caffeine"]], watch: ["Palpitations or a racing heart","Tremor, agitation or anxiety","Trouble falling or staying asleep","Chest pain or fainting, which need urgent care"] }
  });

  A.references = A.references || {};
  Object.assign(A.references, {
    800: "Pi-Sunyer X et al. A randomized, controlled trial of 3.0 mg of liraglutide in weight management. N Engl J Med 2015;373:11-22.",
    801: "Marso SP et al. Liraglutide and cardiovascular outcomes in type 2 diabetes. N Engl J Med 2016;375:311-22.",
    802: "le Roux CW et al. 3 years of liraglutide versus placebo for type 2 diabetes risk reduction and weight management in individuals with prediabetes: a randomised, double-blind trial. Lancet 2017;389:1399-1409.",
    803: "Kelly AS et al. A randomized, controlled trial of liraglutide for adolescents with obesity. N Engl J Med 2020;382:2117-2128.",
    804: "Novo Nordisk. Saxenda (liraglutide) injection, for subcutaneous use: prescribing information. US Food and Drug Administration 2020.",
    805: "Katz DJ et al. Outcomes of clomiphene citrate treatment in young hypogonadal men. BJU Int 2012;110:573-8.",
    806: "Ramasamy R et al. Testosterone supplementation versus clomiphene citrate for hypogonadism: an age matched comparison of satisfaction and efficacy. J Urol 2014;192:875-9.",
    807: "Wheeler KM et al. A comparison of secondary polycythemia in hypogonadal men treated with clomiphene citrate versus testosterone replacement: a multi-institutional study. J Urol 2017;197:1127-1131.",
    808: "Hohl A et al. Clomiphene or enclomiphene citrate for the treatment of male hypogonadism: a systematic review and meta-analysis of randomized controlled trials. Arch Endocrinol Metab 2025;69:e250093.",
    809: "Sanofi-aventis. Clomid (clomiphene citrate tablets USP): prescribing information. US Food and Drug Administration 2012.",
    810: "Webster J et al. A comparison of cabergoline and bromocriptine in the treatment of hyperprolactinemic amenorrhea. N Engl J Med 1994;331:904-9.",
    811: "Schade R et al. Dopamine agonists and the risk of cardiac-valve regurgitation. N Engl J Med 2007;356:29-38.",
    812: "Zanettini R et al. Valvular heart disease and the use of dopamine agonists for Parkinson's disease. N Engl J Med 2007;356:39-46.",
    813: "Bogazzi F et al. Cabergoline therapy and the risk of cardiac valve regurgitation in patients with hyperprolactinemia: a meta-analysis from clinical studies. J Endocrinol Invest 2008;31:1119-23.",
    814: "Daftari G et al. Impulse control disorders in patients with hyperprolactinemia on dopamine agonist therapy: how concerned should we be? Endocr Pract 2025;31:938-945.",
    815: "Pfizer. Dostinex (cabergoline tablets): prescribing information. US Food and Drug Administration 2011.",
    816: "McCormack FX et al. Efficacy and safety of sirolimus in lymphangioleiomyomatosis. N Engl J Med 2011;364:1595-606.",
    817: "Harrison DE et al. Rapamycin fed late in life extends lifespan in genetically heterogeneous mice. Nature 2009;460:392-5.",
    818: "Moel M et al. Influence of rapamycin on safety and healthspan metrics after one year: PEARL trial results. Aging (Albany NY) 2025;17:908-936.",
    819: "Mannick JB et al. mTOR inhibition improves immune function in the elderly. Sci Transl Med 2014;6:268ra179.",
    820: "Kraig E et al. A randomized control trial to establish the feasibility and safety of rapamycin treatment in an older human cohort: immunological, physical performance, and cognitive effects. Exp Gerontol 2018;105:53-69.",
    821: "Pfizer (Wyeth). Rapamune (sirolimus) oral solution and tablets: prescribing information. US Food and Drug Administration 2017.",
    822: "Chiasson JL et al. Acarbose for prevention of type 2 diabetes mellitus: the STOP-NIDDM randomised trial. Lancet 2002;359:2072-7.",
    823: "Holman RR et al. Effects of acarbose on cardiovascular and diabetes outcomes in patients with coronary heart disease and impaired glucose tolerance (ACE): a randomised, double-blind, placebo-controlled trial. Lancet Diabetes Endocrinol 2017;5:877-886.",
    824: "Harrison DE et al. Acarbose, 17-α-estradiol, and nordihydroguaiaretic acid extend mouse lifespan preferentially in males. Aging Cell 2014;13:273-82.",
    825: "Bayer. Precose (acarbose tablets): prescribing information. US Food and Drug Administration 2008.",
    826: "Kreider RB et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr 2017;14:18.",
    827: "Antonio J et al. Common questions and misconceptions about creatine supplementation: what does the scientific evidence really show? J Int Soc Sports Nutr 2021;18:13.",
    828: "Avgerinos KI et al. Effects of creatine supplementation on cognitive function of healthy individuals: a systematic review of randomized controlled trials. Exp Gerontol 2018;108:166-173.",
    829: "van der Merwe J et al. Three weeks of creatine monohydrate supplementation affects dihydrotestosterone to testosterone ratio in college-aged rugby players. Clin J Sport Med 2009;19:399-404.",
    830: "Lanhers C et al. Creatine supplementation and upper limb strength performance: a systematic review and meta-analysis. Sports Med 2017;47:163-173.",
    831: "Lanhers C et al. Creatine supplementation and lower limb strength performance: a systematic review and meta-analyses. Sports Med 2015;45:1285-1294.",
    832: "Branch JD. Effect of creatine supplementation on body composition and performance: a meta-analysis. Int J Sport Nutr Exerc Metab 2003;13:198-226.",
    833: "Yoshino M et al. Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women. Science 2021;372:1224-1229.",
    834: "Irie J et al. Effect of oral administration of nicotinamide mononucleotide on clinical parameters and nicotinamide metabolite levels in healthy Japanese men. Endocr J 2020;67:153-160.",
    835: "Igarashi M et al. Chronic nicotinamide mononucleotide supplementation elevates blood nicotinamide adenine dinucleotide levels and alters muscle function in healthy older men. NPJ Aging 2022;8:5.",
    836: "Yi L et al. The efficacy and safety of β-nicotinamide mononucleotide (NMN) supplementation in healthy middle-aged adults: a randomized, multicenter, double-blind, placebo-controlled, parallel-group, dose-dependent clinical trial. Geroscience 2023;45:29-43.",
    837: "Natural Products Association. Amid pressure from NPA, FDA declares NMN lawful in dietary supplements. NPA news release 2025 (npanational.org).",
    838: "Martens CR et al. Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults. Nat Commun 2018;9:1286.",
    839: "Elhassan YS et al. Nicotinamide riboside augments the aged human skeletal muscle NAD+ metabolome and induces transcriptomic and anti-inflammatory signatures. Cell Rep 2019;28:1717-1728.",
    840: "Dollerup OL et al. A randomized placebo-controlled clinical trial of nicotinamide riboside in obese men: safety, insulin-sensitivity, and lipid-mobilizing effects. Am J Clin Nutr 2018;108:343-353.",
    841: "Trammell SA et al. Nicotinamide riboside is uniquely and orally bioavailable in mice and humans. Nat Commun 2016;7:12948.",
    842: "Conze D et al. Safety and metabolism of long-term administration of NIAGEN (nicotinamide riboside chloride) in a randomized, double-blind, placebo-controlled clinical trial of healthy overweight adults. Sci Rep 2019;9:9772.",
    843: "Chandrasekhar K et al. A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults. Indian J Psychol Med 2012;34:255-62.",
    844: "Wankhede S et al. Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial. J Int Soc Sports Nutr 2015;12:43.",
    845: "Lopresti AL et al. A randomized, double-blind, placebo-controlled, crossover study examining the hormonal and vitality effects of ashwagandha (Withania somnifera) in aging, overweight males. Am J Mens Health 2019;13:1557988319835985.",
    846: "Björnsson HK et al. Ashwagandha-induced liver injury: a case series from Iceland and the US Drug-Induced Liver Injury Network. Liver Int 2020;40:825-829.",
    847: "Salve J et al. Adaptogenic and anxiolytic effects of ashwagandha root extract in healthy adults: a double-blind, randomized, placebo-controlled clinical study. Cureus 2019;11:e6466.",
    848: "Gannon JM et al. Subtle changes in thyroid indices during a placebo-controlled study of an extract of Withania somnifera in persons with bipolar disorder. J Ayurveda Integr Med 2014;5:241-5.",
    849: "Talbott SM et al. Effect of tongkat ali on stress hormones and psychological mood state in moderately stressed subjects. J Int Soc Sports Nutr 2013;10:28.",
    850: "Henkel RR et al. Tongkat ali as a potential herbal supplement for physically active male and female seniors: a pilot study. Phytother Res 2014;28:544-50.",
    851: "Tambi MI et al. Standardised water-soluble extract of Eurycoma longifolia, tongkat ali, as testosterone booster for managing men with late-onset hypogonadism? Andrologia 2012;44 Suppl 1:226-30.",
    852: "Leisegang K et al. Eurycoma longifolia (Jack) improves serum total testosterone in men: a systematic review and meta-analysis of clinical trials. Medicina (Kaunas) 2022;58:1047.",
    853: "Kanno Y et al. (17α,20E)-17,20-[(1-methoxyethylidene)bis(oxy)]-3-oxo-19-norpregna-4,20-diene-21-carboxylic acid methyl ester (YK11) is a partial agonist of the androgen receptor. Biol Pharm Bull 2011;34:318-23.",
    854: "Kanno Y et al. Selective androgen receptor modulator, YK11, regulates myogenic differentiation of C2C12 myoblasts by follistatin expression. Biol Pharm Bull 2013;36:1460-5.",
    855: "Piper T et al. Studies on the in vivo metabolism of the SARM YK11: identification and characterization of metabolites potentially useful for doping controls. Drug Test Anal 2018;10:1646-1656.",
    856: "Nash E et al. Drug-induced liver injury from selective androgen receptor modulators, anabolic-androgenic steroids and bodybuilding supplements in Australia. Aliment Pharmacol Ther 2024;59:953-961.",
    857: "Vignali JD et al. Systematic review of safety of selective androgen receptor modulators in healthy adults: implications for recreational users. J Xenobiot 2023;13:218-236.",
    858: "Gao W et al. Selective androgen receptor modulator treatment improves muscle strength and body composition and prevents bone loss in orchidectomized rats. Endocrinology 2005;146:4887-97.",
    859: "Kearbey JD et al. Selective androgen receptor modulator (SARM) treatment prevents bone loss and reduces body fat in ovariectomized rats. Pharm Res 2007;24:328-35.",
    860: "Kearbey JD et al. Pharmacokinetics of S-3-(4-acetylamino-phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamide in rats, a non-steroidal selective androgen receptor modulator. Xenobiotica 2004;34:273-80.",
    861: "Grata E et al. SARM-S4 and metabolites detection in sports drug testing: a case report. Forensic Sci Int 2011;213:104-8.",
    862: "Baulieu EE et al. Dehydroepiandrosterone (DHEA), DHEA sulfate, and aging: contribution of the DHEAge Study to a sociobiomedical issue. Proc Natl Acad Sci U S A 2000;97:4279-84.",
    863: "Nair KS et al. DHEA in elderly women and DHEA or testosterone in elderly men. N Engl J Med 2006;355:1647-59.",
    864: "Arlt W et al. Dehydroepiandrosterone replacement in women with adrenal insufficiency. N Engl J Med 1999;341:1013-20.",
    865: "Labrie F et al. Efficacy of intravaginal dehydroepiandrosterone (DHEA) on moderate to severe dyspareunia and vaginal dryness, symptoms of vulvovaginal atrophy, and of the genitourinary syndrome of menopause. Menopause 2016;23:243-56.",
    866: "Ferracioli-Oda E et al. Meta-analysis: melatonin for the treatment of primary sleep disorders. PLoS One 2013;8:e63773.",
    867: "Erland LA et al. Melatonin natural health products and supplements: presence of serotonin and significant variability of melatonin content. J Clin Sleep Med 2017;13:275-281.",
    868: "Cohen PA et al. Quantity of melatonin and CBD in melatonin gummies sold in the US. JAMA 2023;329:1401-1402.",
    869: "Lemoine P et al. Prolonged-release formulation of melatonin (Circadin) for the treatment of insomnia. Expert Opin Pharmacother 2012;13:895-905.",
    870: "Harpsøe NG et al. Clinical pharmacokinetics of melatonin: a systematic review. Eur J Clin Pharmacol 2015;71:901-9.",
    871: "European Medicines Agency. Circadin 2 mg prolonged-release tablets: summary of product characteristics. EMA EPAR product information.",
    872: "Guest NS et al. International society of sports nutrition position stand: caffeine and exercise performance. J Int Soc Sports Nutr 2021;18:1.",
    873: "Grgic J et al. Wake up and smell the coffee: caffeine supplementation and exercise performance, an umbrella review of 21 published meta-analyses. Br J Sports Med 2020;54:681-688.",
    874: "Poole R et al. Coffee consumption and health: umbrella review of meta-analyses of multiple health outcomes. BMJ 2017;359:j5024.",
    875: "Owen GN et al. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutr Neurosci 2008;11:193-8.",
    876: "Drake C et al. Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med 2013;9:1195-200.",
    877: "EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific opinion on the safety of caffeine. EFSA Journal 2015.",
    878: "US Food and Drug Administration. OTC Monograph M011: stimulant drug products for over-the-counter human use. FDA 2022.",
    879: "Li J et al. Trends in use of melatonin supplements among US adults, 1999-2018. JAMA 2022;327:483-485.",
    881: "Starcevic B et al. Detection of the selective androgen receptor modulator S-4 (andarine) in a doping control sample. Drug Test Anal 2013;5:377-9.",
    882: "Dahleh MMM et al. YK11 induces oxidative stress and mitochondrial dysfunction in hippocampus: the interplay between a selective androgen receptor modulator (SARM) and exercise. J Steroid Biochem Mol Biol 2023;233:106364.",
    884: "Cal K et al. A nitroalkene derivative of salicylate, SANA, induces creatine-dependent thermogenesis and promotes weight loss. Nat Metab 2025;7:1550-1569.",
    883: "Yatsu T et al. Selective androgen receptor modulator, YK11, up-regulates osteoblastic proliferation and differentiation in MC3T3-E1 cells. Biol Pharm Bull 2018;41:394-398."
  });
})(window.ATLAS);
