/* Atlas Codex: additional compounds, part 2 of 2 — nootropics, longevity, repair & immune, skin & hair,
   melanocortins, bioregulators, health & support. Uses ATLAS.add / ATLAS.cat from builder.js. */
(function (A) {
  const NE = A.NE;
  A.cat("bioregulators", "Bioregulators", "Short peptides from the Khavinson school, each claimed to act on a specific organ.");
  A.cat("health", "Health & Support", "Approved medicines used to manage blood pressure, cholesterol, sleep, nausea and sexual function.");

  const vendor = ["Product quality", "moderate", "Sold as an unregulated research peptide or chemical; identity and dose unverified", "established"];
  const noHuman = ["Human safety", "unknown", "No published human safety data", "unknown"];
  const nootNote = "Scored relative to other nootropics in the codex.";
  const hairNote = "Scored relative to other hair loss treatments in the codex.";

  /* ================================================================ Nootropics */
  A.add({ slug: "noopept", name: "Noopept", aliases: ["Omberacetam", "GVS-111"], category: "nootropic", status: "Approved",
    class: "Dipeptide nootropic (racetam-like)", developer: "Russian Academy of Medical Sciences", tags: ["racetam-like", "cognition", "BDNF"],
    summary: "A Russian prescription nootropic that is potent per milligram. Its effects may come mainly from its metabolite, cycloprolylglycine.",
    names: "Sold in Russia as Noopept for cognitive impairment. Not approved in the US, where the FDA does not consider it a lawful supplement ingredient.",
    structure: "N-phenylacetyl-L-prolylglycine ethyl ester. C<sub>17</sub>H<sub>22</sub>N<sub>2</sub>O<sub>4</sub>, about 318.4 g/mol. Often grouped with racetams, though it is a dipeptide.",
    pubchem: "omberacetam", pnote: nootNote, p: [["Cognitive effect", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Tolerability", "low", "Headache, irritability and sleep disturbance", "anecdotal"], vendor],
    a: [["Cycloprolylglycine", "animal", "Converted to cycloprolylglycine, an endogenous neuropeptide that may modulate AMPA receptors"], ["BDNF / NGF", "animal", "Increased BDNF and NGF expression in rat hippocampus"]],
    t: [], noTrials: "Russian clinical studies in mild cognitive impairment are small.",
    k: [["Route", "Oral"], ["Time to peak", "About 15–20 minutes"], ["Half-life", "Under an hour for the parent drug"], ["Metabolism", "Converted to cycloprolylglycine"], ["Excretion", "Urine as metabolites"]], ke: "human obs",
    related: ["piracetam", "semax"] });

  A.add({ slug: "bromantane", name: "Bromantane", aliases: ["Ladasten", "Bromantan"], category: "nootropic", status: "Approved",
    class: "Adamantane derivative (actoprotector)", developer: "Russian Academy of Medical Sciences", tags: ["dopamine", "fatigue", "WADA prohibited"],
    summary: "A Russian drug for fatigue and low motivation that increases dopamine production rather than release. It is banned in sport after positive tests at the 1996 Olympics.",
    names: "Sold in Russia as Ladasten for neurasthenia and fatigue. Not approved elsewhere. WADA lists it as a prohibited stimulant.",
    structure: "N-(4-bromophenyl)adamantan-2-amine. C<sub>16</sub>H<sub>20</sub>BrN, about 306.2 g/mol.",
    pubchem: "bromantane", pnote: nootNote, p: [["Drive / motivation", 3], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [["Sleep", "low", "Insomnia if taken late", "anecdotal"], ["Sport", "high", "Prohibited by WADA", "established"], vendor],
    a: [["Dopamine synthesis", "animal", "Increases tyrosine hydroxylase expression, raising dopamine production"], ["Anxiolytic", "human obs", "Reduced anxiety and fatigue in Russian clinical studies"]],
    t: [], noTrials: "Russian clinical studies in asthenia exist but are not widely available in English.",
    k: [["Route", "Oral"], ["Half-life", "About 11 hours"], ["Metabolism", "Liver, hydroxylation"], ["Excretion", "Urine"]], ke: "human obs",
    related: ["phenylpiracetam", "semax"] });

  A.add({ slug: "cerebroprotein-hydrolysate", name: "Cerebroprotein Hydrolysate", aliases: ["Cerebrolysin"], category: "nootropic", status: "Approved",
    class: "Porcine brain peptide mixture", developer: "EVER Pharma (Cerebrolysin); various Chinese manufacturers", tags: ["neurotrophic", "stroke", "dementia"],
    summary: "A mixture of peptides derived from pig brain, given by injection after stroke and for dementia in parts of Europe, Russia and Asia. A Cochrane review found no clear benefit after stroke.",
    names: "Sold as Cerebrolysin in over 40 countries and as cerebroprotein hydrolysate in China. Not approved in the US. It must be injected or infused.",
    structure: "A standardized mix of low-molecular-weight peptides and free amino acids from purified pig brain proteins.",
    pubchem: false, pnote: nootNote, p: [["Cognitive effect", 1], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [["Serious adverse events", "moderate", "A Cochrane review found a possible increase in non-fatal serious adverse events after stroke", "human rct"], ["Administration", "moderate", "Requires injection or infusion; allergic reactions possible", "established"]],
    a: [["Neurotrophic activity", "animal", "Mimics neurotrophic factor effects in animal models"]],
    t: [{ title: "Cochrane review: acute ischemic stroke", evidence: "human rct", meta: ["randomized trials of Cerebrolysin after acute ischemic stroke", "systematic review"], body: "Cerebrolysin did not reduce death and probably did not improve functional outcome. There may have been more non-fatal serious adverse events." }],
    k: [["Route", "Intravenous or intramuscular"], ["Bioavailability", "Not applicable orally"], ["Half-life", "Not defined (peptide mixture)"]], ke: "human rct",
    related: ["semax", "noopept"] });

  A.add({ slug: "emoxypine", name: "Emoxypine", aliases: ["Mexidol", "Emoxypine succinate", "Mexicor"], category: "nootropic", status: "Approved",
    class: "3-hydroxypyridine antioxidant", developer: "Russian research (1980s)", tags: ["antioxidant", "anxiolytic", "neuroprotection"],
    summary: "A Russian antioxidant drug prescribed for anxiety, stroke and alcohol withdrawal. It is widely used there but barely known or studied elsewhere.",
    names: "Sold in Russia and neighboring countries as Mexidol (succinate salt). Not approved in the US or the EU.",
    structure: "2-ethyl-6-methyl-3-hydroxypyridine, usually as its succinate salt.",
    pubchem: "emoxipine", pnote: nootNote, p: [["Anxiolytic signal", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Tolerability", "low", "Nausea and drowsiness", "human obs"], vendor],
    a: [["Antioxidant", "animal", "Reduces lipid peroxidation"], ["Membrane effects", "in vitro", "Modulates membrane-bound enzymes and GABA-A receptor function"]],
    t: [], noTrials: "Clinical evidence comes mostly from Russian studies of variable quality.",
    k: [["Route", "Oral or injection"], ["Half-life", "About 2–3 hours"], ["Metabolism", "Liver, glucuronidation"], ["Excretion", "Urine"]], ke: "human obs",
    related: ["semax", "selank"] });

  A.add({ slug: "fladrafinil", name: "Fladrafinil", aliases: ["CRL-40,941", "Fluorafinil"], category: "nootropic", status: "Research only",
    class: "Modafinil analog (eugeroic)", developer: "Laboratoire L. Lafon (1970s)", tags: ["eugeroic", "wakefulness", "modafinil analog"],
    summary: "A bis-fluorinated analog of adrafinil, related to modafinil. It was never developed as a drug and has no human data.",
    names: "Synthesized by Lafon alongside adrafinil and modafinil. Never developed. Sold online as a research chemical.",
    structure: "A bis(4-fluorophenyl) analog of adrafinil, a hydroxamic acid.",
    pubchem: "fladrafinil", pnote: nootNote, p: [["Wakefulness", 3], ["Human evidence", 0], ["Risk load", 3, 1], ["Evidence quality", 1]],
    r: [noHuman, ["Liver", "unknown", "Adrafinil, its parent, is metabolized by the liver and raises liver enzymes; fladrafinil likely shares this", "contested"], vendor],
    a: [["Wakefulness", "animal", "Wake-promoting in animals; may be partly a prodrug like adrafinil"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Oral"], ["Half-life", NE], ["Metabolism", NE]], ke: "unknown",
    related: ["phenylpiracetam", "bromantane"] });

  A.add({ slug: "adamax", name: "Adamax", aliases: ["Adamantane-Semax"], category: "nootropic", status: "Research only",
    class: "Semax analog (adamantane-modified peptide)", developer: "Research-chemical vendors", tags: ["semax analog", "BDNF", "peptide"],
    summary: "A Semax-derived peptide with an added adamantane group. It is a vendor product with no published research.",
    names: "Marketed by research-chemical vendors as a longer-acting, more potent Semax. There are no peer-reviewed studies.",
    structure: "Described as Semax (Met-Glu-His-Phe-Pro-Gly-Pro) with an adamantane moiety. The exact structure varies by vendor.",
    pubchem: false, pnote: nootNote, p: [["Cognitive effect", 1], ["Human evidence", 0], ["Risk load", 3, 1], ["Evidence quality", 0]],
    r: [noHuman, ["Identity", "high", "No standard structure or published characterization", "established"], vendor],
    a: [["Mechanism", "unknown", "Presumed similar to Semax; not studied"]],
    t: [], noTrials: "There are no published studies of any kind.",
    k: [["Route", "Intranasal or injection (informal)"], ["Half-life", NE]], ke: "unknown",
    related: ["semax", "selank"] });

  A.add({ slug: "p-21", name: "P-21", aliases: ["P021", "Peptide 021"], category: "nootropic", status: "Research only",
    class: "CNTF-derived peptidergic compound", developer: "New York State Institute for Basic Research (Iqbal lab)", tags: ["neurogenesis", "Alzheimer's", "CNTF"],
    summary: "A small, brain-penetrant compound based on ciliary neurotrophic factor. It improved memory and neurogenesis in Alzheimer's mouse models. There are no human studies.",
    names: "Developed by Khalid Iqbal's group as an orally active neurotrophic compound. Not in clinical development.",
    structure: "An adamantane-modified tetrapeptide derived from the biologically active region of CNTF.",
    pubchem: false, pnote: nootNote, p: [["Preclinical signal", 3], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["Neurogenesis", "animal", "Increased hippocampal neurogenesis and synaptic markers in mice"], ["Alzheimer's models", "animal", "Reduced cognitive deficits and tau pathology in mouse models"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Oral in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["dihexa", "semax"] });

  A.add({ slug: "pe-22-28", name: "PE-22-28", aliases: ["Spadin analog"], category: "nootropic", status: "Research only",
    class: "TREK-1 channel inhibitor (spadin analog)", developer: "Academic research (France)", tags: ["TREK-1", "depression", "peptide"],
    summary: "A short analog of spadin, a peptide that blocks the TREK-1 potassium channel. It produced fast antidepressant-like effects in mice. There are no human studies.",
    names: "Derived from spadin research in France. Not in clinical development. Sold as a research peptide.",
    structure: "A 7-amino-acid fragment of spadin, which itself derives from the sortilin propeptide.",
    pubchem: false, pnote: nootNote, p: [["Preclinical signal", 2], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["TREK-1", "animal", "Blocks TREK-1 channels, a target linked to depression resistance in knockout mice"], ["Neurogenesis", "animal", "Increased hippocampal neurogenesis within days in mice"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Injection or intranasal in animal studies"], ["Half-life", "Longer than spadin in mice; not established in humans"]], ke: "animal",
    related: ["nemifitide", "selank"] });

  A.add({ slug: "nemifitide", name: "Nemifitide", aliases: ["INN 00835"], category: "nootropic", status: "Research only",
    class: "Pentapeptide antidepressant", developer: "Innapharma", tags: ["depression", "peptide", "MSH-related"],
    summary: "A small peptide antidepressant that reached phase 2 trials in the 2000s. Results were mixed and development stopped.",
    names: "Developed by Innapharma as an injectable antidepressant with a reportedly fast onset. Development was discontinued.",
    structure: "A pentapeptide analog related to the melanocyte-inhibiting factor (MIF-1) family.",
    pubchem: "nemifitide", pnote: nootNote, p: [["Antidepressant signal", 1], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [["Efficacy", "moderate", "Phase 2 results did not lead to further development", "human rct"], vendor],
    a: [["Mechanism", "contested", "Not fully characterized; proposed to act on serotonin and melanocortin systems"]],
    t: [], noTrials: "Phase 2 trials in major depression were run but not fully published.",
    k: [["Route", "Subcutaneous injection"], ["Half-life", "Short"]], ke: "human obs",
    related: ["pe-22-28", "nsi-189"] });

  A.add({ slug: "dnsp-11", name: "DNSP-11", aliases: ["Dopamine neuron stimulating peptide-11"], category: "nootropic", status: "Research only",
    class: "GDNF prodomain peptide", developer: "University of Kentucky (Gerhardt lab)", tags: ["dopamine", "Parkinson's", "GDNF"],
    summary: "An 11-amino-acid peptide from the precursor of GDNF, a growth factor for dopamine neurons. It protected dopamine neurons in rodents. There are no human studies.",
    names: "Discovered in academic Parkinson's research. Not in clinical development.",
    structure: "An 11-amino-acid peptide from the prodomain of glial cell line–derived neurotrophic factor.",
    pubchem: false, pnote: nootNote, p: [["Preclinical signal", 2], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["Dopamine neurons", "animal", "Increased dopamine function and protected neurons in rodent Parkinson's models"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Direct brain or intranasal delivery in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["9-me-bc", "semax"] });

  A.add({ slug: "fgl", name: "FGL", aliases: ["FG loop peptide", "NCAM mimetic"], category: "nootropic", status: "Research only",
    class: "NCAM-derived FGF receptor agonist peptide", developer: "University of Copenhagen / Enkam Pharmaceuticals", tags: ["synaptic plasticity", "NCAM", "FGFR"],
    summary: "A 15-amino-acid peptide copied from the NCAM adhesion molecule. It activates FGF receptors and improved memory and plasticity in rodents.",
    names: "Developed by Danish researchers and Enkam as a neuroprotective and memory peptide. It reached early clinical testing but has no approval.",
    structure: "A 15-amino-acid peptide from the FG loop of the second fibronectin domain of NCAM.",
    pubchem: false, pnote: nootNote, p: [["Preclinical signal", 2], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [["Human safety", "unknown", "Very limited human data", "unknown"], vendor],
    a: [["FGF receptor", "in vitro", "Activates FGFR1, promoting neurite outgrowth and synapse formation"], ["Memory", "animal", "Improved memory and reduced inflammation in rodent models"]],
    t: [], noTrials: "No published efficacy trials in humans.",
    k: [["Route", "Subcutaneous or intranasal in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["dihexa", "p-21"] });

  A.add({ slug: "epobis", name: "Epobis", aliases: ["EPO-derived peptide"], category: "nootropic", status: "Research only",
    class: "Erythropoietin-mimetic peptide", developer: "University of Copenhagen", tags: ["EPO", "neuroprotection", "anti-inflammatory"],
    summary: "A small EPO-derived peptide designed to keep EPO's protective effects on nerves without raising red blood cells. It has only been studied in animals.",
    names: "Developed in Danish academic research. Not in clinical development.",
    structure: "A short dimeric peptide designed from the EPO receptor–binding region.",
    pubchem: false, pnote: nootNote, p: [["Preclinical signal", 2], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["EPO receptor", "animal", "Neuroprotective and anti-inflammatory in rodent models, without increasing red blood cells"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Injection in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["ara-290", "fgl"] });

  A.add({ slug: "taltirelin", name: "Taltirelin", aliases: ["Ceredist", "TA-0910"], category: "nootropic", status: "Approved",
    class: "TRH analog", developer: "Tanabe Seiyaku", tags: ["TRH", "spinocerebellar ataxia", "neuroprotection"],
    summary: "A longer-acting analog of thyrotropin-releasing hormone, approved in Japan for spinocerebellar degeneration. It acts mainly on the brain with less effect on the thyroid than TRH.",
    names: "Sold in Japan as Ceredist for ataxia in spinocerebellar degeneration. Not approved elsewhere.",
    structure: "A modified TRH tripeptide analog. C<sub>17</sub>H<sub>23</sub>N<sub>7</sub>O<sub>5</sub>, about 405.4 g/mol.",
    pubchem: "taltirelin", pnote: nootNote, p: [["Clinical effect (ataxia)", 2], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [["Thyroid", "low", "Can raise TSH, though less than TRH", "established"], vendor],
    a: [["TRH receptor", "established", "Central TRH receptor agonist that raises acetylcholine and dopamine release"]],
    t: [], noTrials: "Approval in Japan rests on clinical trials in spinocerebellar degeneration.",
    k: [["Route", "Oral"], ["Half-life", "Longer than TRH"], ["Excretion", "Urine"]], ke: "established",
    related: ["semax"] });

  A.add({ slug: "phenibut", name: "Phenibut", aliases: ["β-Phenyl-GABA", "Anvifen", "Noofen"], category: "nootropic", status: "Approved",
    class: "GABA-B agonist (GABA analog)", developer: "Soviet research (1960s)", tags: ["GABA-B", "anxiety", "dependence"],
    summary: "A Soviet-era anxiety and sleep drug that acts like baclofen. Tolerance and dependence develop quickly, and withdrawal can be severe.",
    names: "Prescribed in Russia and some Eastern European countries for anxiety and insomnia. It is sold as a supplement in the US despite FDA warnings, and is a controlled substance in Australia and several European countries.",
    structure: "4-amino-3-phenylbutanoic acid. C<sub>10</sub>H<sub>13</sub>NO<sub>2</sub>, about 179.2 g/mol. The phenyl ring helps it cross the blood–brain barrier, which GABA does not.",
    pubchem: "phenibut", pnote: nootNote, p: [["Anxiolytic effect", 3], ["Dependence risk", 5, 1], ["Risk load", 4, 1], ["Evidence quality", 2]],
    r: [["Dependence and withdrawal", "high", "Withdrawal can include rebound anxiety, insomnia, agitation, hallucinations and psychosis, sometimes needing hospital care", "human obs"],
      ["Overdose", "high", "Sedation and reduced consciousness, especially with alcohol or other depressants", "human obs"], ["Product quality", "moderate", "Supplement products vary in dose", "human obs"]],
    a: [["GABA-B receptor", "established", "Agonist, like baclofen but weaker"], ["α2δ calcium channel subunit", "in vitro", "Also binds α2δ, like gabapentin"]],
    t: [], noTrials: "Clinical evidence is from older Russian studies. Poison center reports document withdrawal and toxicity.",
    k: [["Route", "Oral"], ["Onset", "Slow; peak effects after several hours"], ["Half-life", "About 5 hours"], ["Excretion", "Mostly unchanged in urine"]], ke: "human obs",
    related: ["picamilon", "selank"] });

  A.add({ slug: "picamilon", name: "Picamilon", aliases: ["Nicotinoyl-GABA", "Pikamilon"], category: "nootropic", status: "Approved",
    class: "GABA–niacin conjugate", developer: "Soviet research (1960s–70s)", tags: ["GABA", "niacin", "anxiety"],
    summary: "GABA bonded to niacin, designed to cross into the brain and release GABA. Prescribed in Russia; the FDA says it is not a lawful supplement ingredient.",
    names: "Prescribed in Russia for anxiety, migraine and cerebrovascular conditions. In 2015 the FDA said it does not qualify as a dietary ingredient.",
    structure: "N-nicotinoyl-γ-aminobutyric acid. C<sub>10</sub>H<sub>12</sub>N<sub>2</sub>O<sub>3</sub>, about 208.2 g/mol.",
    pubchem: "picamilon", pnote: nootNote, p: [["Anxiolytic effect", 1], ["Risk load", 1, 1], ["Evidence quality", 1]],
    r: [["Flushing", "low", "Niacin-related flushing", "established"], vendor],
    a: [["GABA delivery", "animal", "Proposed to cross the blood–brain barrier and release GABA and niacin; evidence is limited"], ["Cerebral blood flow", "animal", "Vasodilation through its niacin component"]],
    t: [], noTrials: "Evidence comes from Russian studies with limited availability.",
    k: [["Route", "Oral"], ["Half-life", NE], ["Metabolism", "Hydrolyzed to GABA and niacin"]], ke: "human obs",
    related: ["phenibut"] });

  A.add({ slug: "methylene-blue", name: "Methylene Blue", aliases: ["Methylthioninium chloride", "ProvayBlue"], category: "nootropic", status: "Approved",
    class: "Phenothiazine dye (redox agent)", developer: "Heinrich Caro (1876)", tags: ["mitochondria", "MAO inhibitor", "methemoglobinemia"],
    summary: "A 19th-century dye approved as an antidote for methemoglobinemia. It is popular for energy and cognition, but it is a potent MAO-A inhibitor and can cause dangerous serotonin syndrome with antidepressants.",
    names: "Sold as ProvayBlue for drug-induced methemoglobinemia. The FDA has warned about serious serotonin syndrome when it is combined with serotonergic drugs.",
    structure: "C<sub>16</sub>H<sub>18</sub>ClN<sub>3</sub>S, about 319.9 g/mol. It cycles between a blue oxidized form and a colorless reduced form, which lets it shuttle electrons.",
    pubchem: "methylene blue", pnote: nootNote, p: [["Cognitive signal", 2], ["Interaction risk", 4, 1], ["Risk load", 3, 1], ["Evidence quality", 3]],
    r: [["Serotonin syndrome", "high", "Potent MAO-A inhibitor; dangerous with SSRIs, SNRIs and other serotonergic drugs", "established"],
      ["G6PD deficiency", "high", "Can cause hemolysis in people with G6PD deficiency", "established"], ["Blue urine", "low", "Turns urine blue-green", "established"],
      ["Product quality", "moderate", "Aquarium or industrial grades may contain heavy metals; pharmaceutical grade is what's used clinically", "established"]],
    a: [["Mitochondrial electron transport", "in vitro", "Can bypass blocks in the electron transport chain"], ["MAO-A", "established", "Potent inhibitor at clinically relevant doses"], ["Memory", "human rct", "Small studies report memory effects at low doses"]],
    t: [], noTrials: "Approved use rests on methemoglobinemia experience. Cognitive studies are small.",
    k: [["Route", "Intravenous (approved); oral in informal use"], ["Bioavailability", "About 70–80% oral"], ["Half-life", "About 5–24 hours"], ["Metabolism", "Reduced to leukomethylene blue"], ["Excretion", "Urine, colored blue-green"]], ke: "established",
    related: ["nad-plus", "ss-31"] });

  A.add({ slug: "oxytocin", name: "Oxytocin", aliases: ["Pitocin", "Syntocinon"], category: "nootropic", status: "Approved",
    class: "Neuropeptide hormone", developer: "Endogenous hormone; synthesized by Vincent du Vigneaud (1953)", tags: ["social bonding", "intranasal", "labor"],
    summary: "The hormone of labor and bonding. It is approved to induce labor. Intranasal use for social and anxiety effects has produced inconsistent results.",
    names: "Sold as Pitocin (injection) to induce or augment labor. A nasal spray (Syntocinon) was used for milk letdown in some countries.",
    structure: "A cyclic nonapeptide (9 amino acids) with a disulfide bridge. Molecular weight about 1007 g/mol.",
    pubchem: "oxytocin", pnote: nootNote, p: [["Social / mood effect", 2], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [["Water retention", "moderate", "Antidiuretic effect can cause low sodium at high doses", "established"], ["Inconsistent effect", "moderate", "Intranasal effects on social behavior have often failed to replicate", "human rct"]],
    a: [["Oxytocin receptor", "established", "Uterine contraction and milk ejection"], ["Social cognition", "contested", "Early intranasal studies reported increased trust; later larger studies were mixed"]],
    t: [], noTrials: "Intranasal trials in autism, anxiety and social cognition have produced mixed or negative results.",
    k: [["Route", "Intravenous or intramuscular (approved); intranasal in research"], ["Half-life", "About 3–5 minutes in blood"], ["Metabolism", "Oxytocinase (liver, kidney, placenta)"], ["Excretion", "Urine"]], ke: "established",
    related: ["kisspeptin", "bremelanotide"] });

  A.add({ slug: "dsip", name: "DSIP", aliases: ["Delta sleep-inducing peptide", "Emideltide"], category: "nootropic", status: "Research only",
    class: "Neuropeptide", developer: "Discovered in rabbit brain (1977)", tags: ["sleep", "peptide"],
    summary: "A nonapeptide named for inducing deep sleep in rabbits in 1977. Human sleep studies were inconsistent, and its natural role is still unclear.",
    names: "Isolated by Swiss researchers from the blood of sleeping rabbits. Never developed as a drug.",
    structure: "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu. Molecular weight about 849 g/mol. No specific receptor or gene has been identified.",
    pubchem: "delta sleep-inducing peptide", pnote: nootNote, p: [["Sleep effect", 1], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Efficacy", "moderate", "Human sleep studies have been inconsistent", "human rct"], vendor],
    a: [["Sleep architecture", "contested", "Some small human studies reported more slow-wave sleep; others found no effect"]],
    t: [], noTrials: "Small human sleep studies from the 1980s gave mixed results.",
    k: [["Route", "Intravenous or subcutaneous"], ["Half-life", "Minutes in blood"]], ke: "human obs",
    related: ["pinealon", "epitalon"] });

  /* ================================================================ Longevity */
  A.add({ slug: "foxo4-dri", name: "FOXO4-DRI", aliases: ["Proxofim", "FOX04-DRI"], category: "longevity", status: "Research only",
    class: "Senolytic peptide (D-retro-inverso)", developer: "Erasmus University Medical Center (de Keizer lab)", tags: ["senolytic", "senescence", "aging"],
    summary: "A peptide that pushes senescent \"zombie\" cells into self-destruction by disrupting FOXO4's hold on p53. It restored fitness, fur and kidney function in aged mice. There are no human data.",
    names: "Described in a 2017 Cell paper by Baar et al. Not in clinical development. Expensive and widely counterfeited.",
    structure: "A 46-amino-acid peptide built from D-amino acids in reversed sequence (D-retro-inverso), which resists breakdown.",
    pubchem: false, p: [["Preclinical signal", 3], ["Human evidence", 0], ["Risk load", 3, 1], ["Evidence quality", 1]],
    r: [noHuman, ["Off-target cell death", "unknown", "Interfering with p53 in normal cells is a theoretical risk", "contested"], vendor],
    a: [["FOXO4–p53 interaction", "animal", "Frees p53 in senescent cells, causing them to die by apoptosis"], ["Aging models", "animal", "Improved fitness, hair coat and kidney function in aged and accelerated-aging mice"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Injection in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["humanin", "epitalon"] });

  A.add({ slug: "humanin", name: "Humanin", aliases: ["HN", "HNG (S14G analog)"], category: "longevity", status: "Research only",
    class: "Mitochondrial-derived peptide", developer: "Discovered by Hashimoto et al. (2001)", tags: ["mitochondria", "neuroprotection", "aging"],
    summary: "A small peptide encoded in mitochondrial DNA that protects cells from stress. Its levels fall with age, and it has protective effects in animal models. Human studies are observational.",
    names: "Discovered in 2001 while screening for factors that protect neurons against Alzheimer's-related damage. Not in clinical development.",
    structure: "A 24-amino-acid peptide encoded in the mitochondrial 16S rRNA gene. HNG is a far more potent analog with glycine at position 14.",
    pubchem: false, p: [["Preclinical signal", 3], ["Human evidence", 1], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["Cytoprotection", "in vitro", "Blocks cell death signaling, including through Bax and IGFBP3"], ["Metabolism", "animal", "Improved insulin sensitivity in rodents"], ["Longevity association", "human obs", "Higher circulating levels found in children of centenarians"]],
    t: [], noTrials: "No human intervention studies.",
    k: [["Route", "Injection in animal studies"], ["Half-life", NE], ["Endogenous levels", "Circulates naturally and declines with age"]], ke: "animal",
    related: ["mots-c", "ss-31"] });

  A.add({ slug: "ss-31", name: "SS-31", aliases: ["Elamipretide", "MTP-131", "Bendavia", "Forzinity"], category: "longevity", status: "Approved",
    class: "Mitochondria-targeted tetrapeptide", developer: "Stealth BioTherapeutics", tags: ["mitochondria", "cardiolipin", "Barth syndrome"],
    summary: "A peptide that concentrates in the inner mitochondrial membrane and stabilizes cardiolipin. It received FDA accelerated approval for Barth syndrome in 2025 after failing trials in other conditions.",
    names: "Developed by Stealth BioTherapeutics as elamipretide. It received FDA accelerated approval in 2025 for Barth syndrome, a rare mitochondrial disease. A phase 3 trial in primary mitochondrial myopathy did not meet its primary endpoint.",
    structure: "D-Arg-Dmt-Lys-Phe-NH<sub>2</sub>, an aromatic-cationic tetrapeptide that crosses cell membranes and targets mitochondria.",
    pubchem: "elamipretide", p: [["Mitochondrial effect", 3], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [["Injection site", "moderate", "Injection-site reactions are the most common adverse effect", "human rct"], ["Efficacy", "moderate", "Failed primary endpoints in several trials outside Barth syndrome", "human rct"]],
    a: [["Cardiolipin", "in vitro", "Binds cardiolipin and stabilizes the inner mitochondrial membrane, improving electron transport efficiency"]],
    t: [], noTrials: "Trials in mitochondrial myopathy, heart failure and other conditions were mostly negative on primary endpoints. Its approval rests on Barth syndrome data.",
    k: [["Route", "Subcutaneous injection"], ["Half-life", "Short, a few hours"], ["Excretion", "Urine"]], ke: "human rct",
    related: ["mots-c", "humanin", "nad-plus"] });

  A.add({ slug: "nad-plus", name: "NAD+", aliases: ["Nicotinamide adenine dinucleotide", "NMN", "NR"], category: "longevity", status: "Supplement",
    class: "Coenzyme", developer: "Endogenous molecule", tags: ["NAD+", "sirtuins", "aging", "IV therapy"],
    summary: "A coenzyme essential to energy metabolism whose levels fall with age. Boosting it with infusions, injections or precursors (NMN, NR) raises levels, but clear health benefits in people haven't been shown.",
    names: "Sold as IV and injectable NAD+ at wellness clinics and as precursors NMN and NR in supplements. Not approved as a drug for any condition.",
    structure: "A dinucleotide of adenine and nicotinamide. Molecular weight about 663.4 g/mol. Large and charged, so cells take it up poorly as an intact molecule.",
    pubchem: "NAD+", p: [["Health benefit (human)", 1], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Infusion reactions", "moderate", "Rapid IV infusion causes chest tightness, nausea and cramping", "human obs"], ["Cost vs evidence", "low", "Expensive with little proven benefit", "established"]],
    a: [["Sirtuins and PARPs", "animal", "Substrate for enzymes involved in DNA repair and aging biology"], ["Precursor supplementation", "human rct", "NR and NMN raise blood NAD+ levels; effects on function have been small or absent"]],
    t: [], noTrials: "Small precursor trials show raised NAD+ levels with inconsistent functional benefits.",
    k: [["Route", "Intravenous, subcutaneous, or oral precursors"], ["Uptake", "Mostly broken down to precursors before entering cells"], ["Half-life", "Short in blood"]], ke: "human obs",
    related: ["mots-c", "ss-31", "methylene-blue"] });

  /* ================================================================ Repair & immune */
  A.add({ slug: "kpv", name: "KPV", aliases: ["Lys-Pro-Val", "α-MSH (11-13)"], category: "repair", status: "Research only",
    class: "α-MSH C-terminal tripeptide", developer: "Derived from α-MSH research", tags: ["anti-inflammatory", "colitis", "peptide"],
    summary: "The last three amino acids of α-MSH, which keep its anti-inflammatory effect. It reduced colitis in mice. There are no human trials.",
    names: "A research peptide derived from α-melanocyte-stimulating hormone. Not in clinical development.",
    structure: "Lys-Pro-Val. Molecular weight about 342.4 g/mol.",
    pubchem: "KPV peptide", p: [["Anti-inflammatory signal", 2], ["Human evidence", 0], ["Risk load", 1, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["NF-κB", "animal", "Reduced inflammatory signaling; enters intestinal cells through the PepT1 transporter"], ["Colitis", "animal", "Reduced inflammation in mouse colitis models"]],
    t: [], noTrials: "It has never been tested in human trials.",
    k: [["Route", "Oral or injection in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["bpc-157", "ll-37"] });

  A.add({ slug: "ara-290", name: "ARA-290", aliases: ["Cibinetide"], category: "repair", status: "Investigational",
    class: "EPO-derived innate repair receptor agonist", developer: "Araim Pharmaceuticals", tags: ["neuropathy", "EPO", "inflammation"],
    summary: "An 11-amino-acid peptide based on erythropoietin that activates tissue-protective signaling without raising red blood cells. Small trials in sarcoidosis nerve pain were encouraging.",
    names: "Developed by Araim as cibinetide for small fiber neuropathy and diabetic complications. Not approved.",
    structure: "An 11-amino-acid peptide modeled on a surface helix of EPO.",
    pubchem: "cibinetide", p: [["Neuropathy signal", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Human safety", "low", "Well tolerated in small trials", "human rct"], vendor],
    a: [["Innate repair receptor", "human rct", "Activates the EPO receptor–CD131 complex, which reduces inflammation and supports nerve repair"]],
    t: [{ title: "Sarcoidosis small fiber neuropathy", evidence: "human rct", meta: ["patients with sarcoidosis and small fiber neuropathy", "cibinetide or placebo", "28 days", "randomized, double-blind, placebo-controlled, phase 2"], body: "Cibinetide improved corneal nerve fiber measures and some neuropathy symptoms compared with placebo." }],
    k: [["Route", "Subcutaneous injection"], ["Half-life", "Minutes in blood, though effects last longer"]], ke: "human rct",
    related: ["epobis", "bpc-157"] });

  A.add({ slug: "b7-33", name: "B7-33", aliases: ["Single-chain relaxin analog"], category: "repair", status: "Research only",
    class: "Relaxin-2 mimetic peptide", developer: "University of Melbourne", tags: ["relaxin", "fibrosis", "heart"],
    summary: "A small single-chain version of relaxin-2 that keeps its anti-fibrotic effects. It reduced fibrosis in rodent heart and lung models.",
    names: "Designed by Australian researchers as a simpler, cheaper relaxin mimetic. Not in clinical development.",
    structure: "A modified B-chain of human relaxin-2.",
    pubchem: false, p: [["Preclinical signal", 2], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["RXFP1", "animal", "Biased agonist of the relaxin receptor favoring anti-fibrotic signaling"], ["Fibrosis", "animal", "Reduced cardiac and lung fibrosis in rodents"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Injection in animal studies"], ["Half-life", NE]], ke: "animal",
    related: ["bpc-157", "tb-500"] });

  A.add({ slug: "teriparatide", name: "Teriparatide", aliases: ["Forteo", "PTH (1-34)"], category: "repair", status: "Approved",
    class: "Parathyroid hormone analog (bone anabolic)", developer: "Eli Lilly", tags: ["osteoporosis", "bone", "PTH"],
    summary: "An approved osteoporosis drug that builds new bone. It is sometimes promoted for height gain, but its label warns against use when growth plates are open.",
    names: "Sold as Forteo and biosimilars for severe osteoporosis. The label advises against use in children and young adults with open growth plates because of an osteosarcoma signal in rats. There is no evidence it increases height.",
    structure: "The first 34 amino acids of human parathyroid hormone, made recombinantly.",
    pubchem: false, p: [["Bone formation", 4], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [["Open growth plates", "high", "Contraindicated with open epiphyses; rats developed osteosarcoma in a dose- and duration-dependent way", "established"], ["Calcium", "moderate", "Can raise blood calcium", "human rct"], ["Dizziness", "low", "Orthostatic dizziness after injection", "human rct"]],
    a: [["PTH1 receptor", "human rct", "Intermittent dosing stimulates osteoblasts and new bone formation"]],
    t: [{ title: "Postmenopausal osteoporosis", evidence: "human rct", meta: ["1,637 postmenopausal women with prior vertebral fractures", "teriparatide 20 or 40 µg daily, or placebo", "median 21 months", "randomized, double-blind, placebo-controlled"], body: "Teriparatide reduced new vertebral fractures by about 65–69% and increased spine bone density." }],
    k: [["Route", "Subcutaneous injection"], ["Bioavailability", "About 95%"], ["Half-life", "About 1 hour"], ["Metabolism", "Liver and kidney proteolysis"]], ke: "established",
    related: ["growth-hormone"] });

  A.add({ slug: "ll-37", name: "LL-37", aliases: ["Cathelicidin", "hCAP18 (precursor)"], category: "immune", status: "Research only",
    class: "Human antimicrobial peptide", developer: "Endogenous peptide", tags: ["antimicrobial", "innate immunity", "wound healing"],
    summary: "The only human cathelicidin, a natural antimicrobial peptide. It kills microbes and modulates immunity, but it also drives inflammation in psoriasis and rosacea.",
    names: "Made by immune and skin cells from the precursor hCAP18. Topical forms were tested for chronic leg ulcers. Not approved.",
    structure: "A 37-amino-acid amphipathic α-helical peptide beginning with two leucines.",
    pubchem: false, p: [["Antimicrobial signal", 2], ["Risk load", 3, 1], ["Evidence quality", 2]],
    r: [["Inflammation", "moderate", "Elevated LL-37 drives inflammation in rosacea, psoriasis and some autoimmune diseases", "human obs"], ["Cytotoxicity", "moderate", "Toxic to human cells at higher concentrations", "in vitro"], vendor],
    a: [["Microbial membranes", "in vitro", "Disrupts bacterial membranes and biofilms"], ["Immune modulation", "in vitro", "Recruits immune cells and modulates TLR signaling"]],
    t: [{ title: "Hard-to-heal venous leg ulcers", evidence: "human rct", meta: ["patients with venous leg ulcers", "topical LL-37 or placebo", "4 weeks", "randomized, double-blind, placebo-controlled, phase 1/2"], body: "Topical LL-37 improved healing rate at lower concentrations compared with placebo." }],
    k: [["Route", "Topical in trials; injection in informal use"], ["Half-life", "Short; degraded by proteases"]], ke: "human rct",
    related: ["kpv", "thymosin-alpha-1"] });

  A.add({ slug: "vip", name: "VIP", aliases: ["Vasoactive intestinal peptide", "Aviptadil", "Invicorp"], category: "immune", status: "Approved",
    class: "Neuropeptide", developer: "Endogenous peptide (discovered by Said and Mutt, 1970)", tags: ["vasodilator", "lungs", "erectile dysfunction"],
    summary: "A gut and nerve peptide that relaxes blood vessels and smooth muscle. Combined with phentolamine it is approved for erectile dysfunction in some countries, but trials in lung disease were disappointing.",
    names: "Aviptadil with phentolamine (Invicorp) is approved for erectile dysfunction in some European countries. Inhaled and IV aviptadil was tested for COVID-19 respiratory failure without clear benefit.",
    structure: "A 28-amino-acid peptide of the glucagon/secretin family.",
    pubchem: false, p: [["Vasodilation", 3], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [["Low blood pressure", "moderate", "Flushing, hypotension and rapid heart rate", "human rct"], ["Diarrhea", "moderate", "VIP-secreting tumors cause severe watery diarrhea, showing its effect on the gut", "established"]],
    a: [["VPAC1 / VPAC2", "established", "Vasodilation, smooth muscle relaxation and anti-inflammatory effects"]],
    t: [], noTrials: "Trials in COVID-19 respiratory failure did not show a clear benefit on primary endpoints.",
    k: [["Route", "Intravenous, inhaled or intracavernosal"], ["Half-life", "About 1–2 minutes in blood"]], ke: "established",
    related: ["thymosin-alpha-1", "ll-37"] });

  A.add({ slug: "pnc-27", name: "PNC-27", aliases: ["p53-derived peptide"], category: "immune", status: "Research only",
    class: "Anticancer membrane-active peptide", developer: "Academic research (SUNY Downstate)", tags: ["cancer", "p53", "HDM-2"],
    summary: "A peptide that punches holes in cancer cells in lab dishes by binding a protein on their surface. There are no human trials, and claims that it treats cancer are unproven.",
    names: "Developed in academic research. Not in clinical development. Promoted online for cancer, which the evidence does not support.",
    structure: "A 32-amino-acid peptide joining an HDM-2–binding region of p53 to a penetratin cell-entry sequence.",
    pubchem: false, p: [["Preclinical signal", 2], ["Human evidence", 0], ["Risk load", 3, 1], ["Evidence quality", 1]],
    r: [["Delayed treatment", "high", "Using unproven peptides instead of proven cancer treatment can be fatal", "established"], noHuman, vendor],
    a: [["Membrane HDM-2", "in vitro", "Binds HDM-2 on cancer cell membranes and forms pores that kill the cell"]],
    t: [], noTrials: "It has never been tested in human cancer trials.",
    k: [["Route", "Injection (informal)"], ["Half-life", NE]], ke: "in vitro",
    related: ["ll-37"] });

  /* ================================================================ Skin & hair */
  A.add({ slug: "finasteride", name: "Finasteride", aliases: ["Propecia", "Proscar"], category: "skin", status: "Approved",
    class: "Type II 5α-reductase inhibitor", developer: "Merck", tags: ["hair loss", "DHT", "BPH"],
    summary: "The standard hair-loss pill. It lowers DHT by about two-thirds and slows or stops male pattern hair loss in most men.",
    names: "Sold as Propecia (1 mg) for male pattern hair loss and Proscar (5 mg) for benign prostatic hyperplasia. Topical versions are approved in some countries.",
    structure: "A 4-azasteroid. C<sub>23</sub>H<sub>36</sub>N<sub>2</sub>O<sub>2</sub>, about 372.5 g/mol.",
    pubchem: "finasteride", pnote: hairNote, p: [["Hair retention", 4], ["Regrowth", 2], ["Sexual side effects", 2, 1], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [["Sexual function", "low", "Sexual side effects in about 2–4% in trials, usually resolving on stopping", "human rct", "In the pivotal trials, 3.8% on finasteride reported sexual adverse events against 2.1% on placebo. Persistent symptoms after stopping are reported but disputed."],
      ["Mood", "low", "Depression and suicidal ideation are post-marketing label warnings", "contested"], ["Pregnancy", "high", "Can feminize a male fetus; pregnant people should not handle broken tablets", "established"], ["PSA", "low", "Halves PSA readings, which matters for prostate cancer screening", "established"]],
    a: [["5α-reductase type II", "human rct", "Lowers scalp and serum DHT, the androgen that miniaturizes susceptible follicles"]],
    t: [{ title: "Men with male pattern hair loss", evidence: "human rct", meta: ["1,553 men aged 18–41", "finasteride 1 mg daily or placebo", "1 year, extended to 2 years", "two randomized, double-blind, placebo-controlled trials"], body: "Finasteride increased hair counts and halted visible progression in most men; placebo groups continued to lose hair.", refs: [32] }],
    k: [["Route", "Oral (topical in some countries)"], ["Bioavailability", "About 65%"], ["Half-life", "About 5–6 hours; longer in older men"], ["Duration of effect", "DHT suppression lasts longer than its half-life"], ["Metabolism", "Liver, CYP3A4"], ["Excretion", "Feces and urine"]], ke: "established", kr: [82],
    related: ["dutasteride", "minoxidil", "tri-blend-topical"] });

  A.add({ slug: "dutasteride", name: "Dutasteride", aliases: ["Avodart"], category: "skin", status: "Approved",
    class: "Dual type I and II 5α-reductase inhibitor", developer: "GlaxoSmithKline", tags: ["hair loss", "DHT", "BPH"],
    summary: "A stronger relative of finasteride that blocks both forms of 5α-reductase and lowers DHT by over 90%. It worked better than finasteride in a head-to-head hair trial.",
    names: "Sold as Avodart for benign prostatic hyperplasia. Approved for male pattern hair loss in Japan and South Korea; used off-label for hair elsewhere.",
    structure: "A 4-azasteroid with a bulky fluorinated side group. C<sub>27</sub>H<sub>30</sub>F<sub>6</sub>N<sub>2</sub>O<sub>2</sub>, about 528.5 g/mol.",
    pubchem: "dutasteride", pnote: hairNote, p: [["Hair retention", 5], ["Regrowth", 3], ["Sexual side effects", 2, 1], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Sexual function", "low", "Sexual side effects similar to finasteride", "human rct"], ["Long half-life", "moderate", "Effects and side effects persist for months after stopping", "established"],
      ["Pregnancy", "high", "Feminizes a male fetus; men should not donate blood during and for 6 months after use", "established"], ["PSA", "low", "Halves PSA readings", "established"]],
    a: [["5α-reductase types I and II", "human rct", "Suppresses serum DHT by more than 90%"]],
    t: [{ title: "Dutasteride against finasteride in hair loss", evidence: "human rct", meta: ["917 men with male pattern hair loss", "dutasteride 0.02–0.5 mg, finasteride 1 mg, or placebo", "24 weeks", "randomized, double-blind, phase 3"], body: "Dutasteride 0.5 mg increased hair count more than finasteride 1 mg and placebo." }],
    k: [["Route", "Oral"], ["Bioavailability", "About 60%"], ["Half-life", "About 5 weeks"], ["Metabolism", "Liver, CYP3A4"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["finasteride", "minoxidil"] });

  A.add({ slug: "minoxidil", name: "Minoxidil", aliases: ["Rogaine", "Regaine", "Loniten"], category: "skin", status: "Approved",
    class: "Potassium channel opener (vasodilator)", developer: "Upjohn", tags: ["hair loss", "beard", "vasodilator"],
    summary: "The standard topical treatment for hair loss, originally an oral blood pressure drug. Low-dose oral minoxidil is now widely prescribed off-label.",
    names: "Topical Rogaine (2% and 5%) is approved over the counter for pattern hair loss. Oral Loniten is approved for severe hypertension; low-dose oral use for hair is off-label.",
    structure: "C<sub>9</sub>H<sub>15</sub>N<sub>5</sub>O, about 209.2 g/mol. A prodrug activated in the follicle by sulfotransferase.",
    pubchem: "minoxidil", pnote: hairNote, p: [["Regrowth", 3], ["Hair retention", 2], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Scalp irritation", "moderate", "Itching and dermatitis, often from propylene glycol", "human rct", undefined], ["Initial shedding", "moderate", "Temporary shedding in the first months", "established"],
      ["Cardiovascular (oral)", "moderate", "Oral use can cause fluid retention, fast heart rate and, rarely, pericardial effusion", "human obs"], ["Unwanted hair", "low", "Facial and body hair growth", "human rct"],
      ["Pets", "high", "Highly toxic to cats, even from residue on skin or bedding", "established"]],
    a: [["Follicle stimulation", "human rct", "Prolongs the growth phase and enlarges miniaturized follicles", undefined]],
    t: [{ title: "Topical 5% against 2% and placebo", evidence: "human rct", meta: ["393 men aged 18–49", "5% minoxidil, 2% minoxidil or placebo, twice daily", "48 weeks", "randomized, double-blind, placebo-controlled"], body: "5% minoxidil produced about 45% more regrowth than 2%, with more itching and irritation.", refs: [31] }],
    k: [["Route", "Topical or oral"], ["Topical absorption", "About 1–2% reaches the bloodstream"], ["Oral bioavailability", "About 90%"], ["Half-life", "About 4 hours (oral)"], ["Metabolism", "Sulfation (active) and glucuronidation"], ["Excretion", "Urine"]], ke: "established",
    related: ["finasteride", "dutasteride", "tri-blend-topical"] });

  A.add({ slug: "ketoconazole", name: "Ketoconazole", aliases: ["Nizoral"], category: "skin", status: "Approved",
    class: "Imidazole antifungal", developer: "Janssen", tags: ["antifungal", "shampoo", "hair loss"],
    summary: "An antifungal shampoo used for dandruff. Small studies suggest it modestly helps hair density in pattern hair loss, possibly through mild anti-androgen and anti-inflammatory effects.",
    names: "Sold as Nizoral shampoo (1% OTC, 2% prescription) and cream. Oral ketoconazole carries an FDA boxed warning for liver injury and should not be used for hair.",
    structure: "C<sub>26</sub>H<sub>28</sub>Cl<sub>2</sub>N<sub>4</sub>O<sub>4</sub>, about 531.4 g/mol.",
    pubchem: "ketoconazole", pnote: hairNote, p: [["Hair density", 1], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Scalp dryness", "low", "Dryness and irritation", "established"], ["Oral use", "high", "Oral ketoconazole can cause severe liver injury and adrenal problems", "established"]],
    a: [["Malassezia", "established", "Antifungal; reduces scalp yeast and inflammation"], ["Androgen pathway", "contested", "Weakly inhibits steroid synthesis; whether topical use has a meaningful anti-androgen effect is uncertain"]],
    t: [], noTrials: "Small comparative studies suggest a modest benefit on hair density, but there are no large trials for hair loss.",
    k: [["Route", "Topical shampoo"], ["Systemic absorption", "Negligible from shampoo"], ["Half-life (oral)", "About 8 hours"]], ke: "established",
    related: ["finasteride", "minoxidil"] });

  A.add({ slug: "clascoterone", name: "Clascoterone", aliases: ["CB-03-01", "Winlevi", "Breezula"], category: "skin", status: "Approved",
    class: "Topical androgen receptor antagonist", developer: "Cassiopea / Cosmo Pharmaceuticals", tags: ["acne", "hair loss", "anti-androgen"],
    summary: "A topical anti-androgen approved for acne in 2020. It breaks down to inactive cortexolone in the blood, so it acts locally. A higher-strength solution is being developed for hair loss.",
    names: "Sold as Winlevi 1% cream for acne. A solution (Breezula) is in late-stage trials for male pattern hair loss.",
    structure: "Cortexolone 17α-propionate, a steroidal androgen receptor antagonist.",
    pubchem: "clascoterone", pnote: hairNote, p: [["Acne effect", 3], ["Hair effect", 2], ["Risk load", 1, 1], ["Evidence quality", 4]],
    r: [["HPA axis", "low", "HPA axis suppression was seen in some patients under maximal use", "human rct"], ["Local irritation", "low", "Redness and dryness", "human rct"]],
    a: [["Androgen receptor", "human rct", "Competes with DHT in the skin; hydrolyzed systemically to cortexolone"]],
    t: [], noTrials: "Approval for acne rests on two phase 3 trials. Hair loss phase 3 data are emerging.",
    k: [["Route", "Topical"], ["Systemic exposure", "Low; rapidly hydrolyzed to cortexolone"], ["Half-life", "Short systemically"]], ke: "established",
    related: ["pyrilutamide", "ru-58841", "finasteride"] });

  A.add({ slug: "pyrilutamide", name: "Pyrilutamide", aliases: ["KX-826"], category: "skin", status: "Investigational",
    class: "Topical androgen receptor antagonist", developer: "Kintor Pharmaceutical", tags: ["hair loss", "anti-androgen", "topical"],
    summary: "A topical androgen receptor blocker developed in China for hair loss and acne. Early trials were encouraging; later-phase results have been mixed.",
    names: "Developed by Kintor in China and the US. Not approved.",
    structure: "A nonsteroidal androgen receptor antagonist designed for topical use with limited systemic exposure.",
    pubchem: "pyrilutamide", pnote: hairNote, p: [["Hair effect", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Local irritation", "low", "Scalp irritation", "human rct"], vendor],
    a: [["Androgen receptor", "human rct", "Blocks DHT at the follicle"]],
    t: [], noTrials: "Phase 2 trials reported improvements in hair count; later-stage trial results were mixed.",
    k: [["Route", "Topical"], ["Systemic exposure", "Low"]], ke: "human rct",
    related: ["clascoterone", "ru-58841", "topilutamide"] });

  A.add({ slug: "topilutamide", name: "Topilutamide", aliases: ["Fluridil", "Eucapil"], category: "skin", status: "Approved",
    class: "Topical androgen receptor antagonist", developer: "Interpharma Praha (Czech Republic)", tags: ["hair loss", "anti-androgen", "topical"],
    summary: "A topical anti-androgen registered as a cosmetic in the Czech Republic. A small trial found more hairs in the growth phase.",
    names: "Sold as Eucapil, registered as a cosmetic in the Czech Republic and some other European countries. Not approved as a drug.",
    structure: "A nonsteroidal androgen receptor antagonist that is hydrolyzed in the body to an inactive form.",
    pubchem: "topilutamide", pnote: hairNote, p: [["Hair effect", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Local irritation", "low", "Scalp irritation", "human obs"]],
    a: [["Androgen receptor", "human rct", "Local androgen receptor blockade"]],
    t: [], noTrials: "Evidence is a small Czech trial showing an increase in growth-phase hairs.",
    k: [["Route", "Topical"], ["Systemic exposure", "Low; hydrolyzed to an inactive form"]], ke: "human obs",
    related: ["pyrilutamide", "ru-58841"] });

  A.add({ slug: "ru-58841", name: "RU-58841", aliases: ["PSK-3841", "HMR-3841"], category: "skin", status: "Research only",
    class: "Topical nonsteroidal androgen receptor antagonist", developer: "Roussel Uclaf (1990s)", tags: ["hair loss", "anti-androgen", "topical"],
    summary: "A topical anti-androgen that prevented balding in macaques in the 1990s. It never completed human trials, so its human safety and systemic absorption are unknown.",
    names: "Developed by Roussel Uclaf and later licensed, but development stopped before controlled human trials were completed. It is sold as a research chemical, and is one ingredient in the tri-blend topical.",
    structure: "4-[3-(4-hydroxybutyl)-4,4-dimethyl-2,5-dioxoimidazolidin-1-yl]-2-(trifluoromethyl)benzonitrile. C<sub>17</sub>H<sub>18</sub>F<sub>3</sub>N<sub>3</sub>O<sub>3</sub>, about 369.3 g/mol.",
    pubchem: "RU58841", pnote: hairNote, p: [["Hair effect", 3], ["Human evidence", 0], ["Risk load", 3, 1], ["Evidence quality", 1]],
    r: [["Human safety", "unknown", "No human safety or pharmacokinetic data", "unknown"], ["Systemic anti-androgen effects", "unknown", "Users report low libido and fatigue; not studied", "anecdotal"], vendor],
    a: [["Androgen receptor", "animal", "Prevented and partly reversed balding in stumptail macaques"]],
    t: [], noTrials: "It has never completed a controlled human trial.",
    k: [["Route", "Topical"], ["Systemic absorption", NE], ["Half-life", NE]], ke: "animal", kr: [35],
    related: ["tri-blend-topical", "pyrilutamide", "clascoterone"] });

  A.add({ slug: "pp405", name: "PP405", aliases: ["JXL-069"], category: "skin", status: "Investigational",
    class: "Topical LDH inhibitor (follicle stem cell activator)", developer: "Pelage Pharmaceuticals (UCLA research)", tags: ["hair loss", "stem cells", "topical"],
    summary: "A topical drug designed to reactivate dormant hair follicle stem cells by inhibiting lactate dehydrogenase. It is in early clinical trials.",
    names: "Developed by Pelage from UCLA research on follicle stem cell metabolism. In phase 2 trials. Not approved.",
    structure: "A small-molecule mitochondrial pyruvate carrier / LDH pathway modulator formulated for topical use.",
    pubchem: false, pnote: hairNote, p: [["Hair effect", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Long-term safety", "unknown", "Early-stage human data only", "unknown"], vendor],
    a: [["Hair follicle stem cells", "animal", "Shifting stem cell metabolism activated hair growth in mice"]],
    t: [], noTrials: "Early-phase human trials have been reported by the company; full peer-reviewed results are pending.",
    k: [["Route", "Topical"], ["Systemic exposure", "Low by design"]], ke: "human rct",
    related: ["sm04554", "ptd-dbm", "minoxidil"] });

  A.add({ slug: "sm04554", name: "SM04554", aliases: ["Dalosirvat"], category: "skin", status: "Investigational",
    class: "Topical Wnt pathway activator", developer: "Samumed (now Biosplice)", tags: ["hair loss", "Wnt", "topical"],
    summary: "A topical Wnt pathway activator tested for male pattern hair loss. Phase 2 results showed modest improvements, and development has since gone quiet.",
    names: "Developed by Samumed for androgenetic alopecia. Not approved.",
    structure: "A small-molecule Wnt pathway modulator formulated as a topical solution.",
    pubchem: false, pnote: hairNote, p: [["Hair effect", 2], ["Risk load", 1, 1], ["Evidence quality", 2]],
    r: [["Wnt activation", "unknown", "Wnt signaling is linked to cancer; local, low exposure limits but doesn't rule out risk", "contested"], vendor],
    a: [["Wnt pathway", "human rct", "Activates Wnt signaling to promote follicle growth"]],
    t: [], noTrials: "Phase 2 trials reported modest increases in hair count.",
    k: [["Route", "Topical"], ["Systemic exposure", "Low"]], ke: "human rct",
    related: ["ptd-dbm", "pp405"] });

  A.add({ slug: "ptd-dbm", name: "PTD-DBM", aliases: ["PTD-DBM peptide"], category: "skin", status: "Research only",
    class: "Wnt pathway–activating peptide (CXXC5 inhibitor)", developer: "Yonsei University (Korea)", tags: ["hair loss", "Wnt", "peptide"],
    summary: "A peptide that blocks CXXC5, a brake on Wnt signaling in hair follicles. It promoted hair regrowth in mice, especially with valproic acid. There are no human trials.",
    names: "Developed in Korean academic research. Not in clinical development.",
    structure: "A Dishevelled-binding motif peptide fused to a protein transduction domain (PTD) for cell entry.",
    pubchem: false, pnote: hairNote, p: [["Preclinical signal", 2], ["Human evidence", 0], ["Risk load", 2, 1], ["Evidence quality", 1]],
    r: [noHuman, vendor],
    a: [["CXXC5–Dishevelled", "animal", "Disrupts CXXC5 binding to Dishevelled, releasing Wnt signaling"], ["Hair regrowth", "animal", "Promoted hair regrowth and wound-induced hair neogenesis in mice"]],
    t: [], noTrials: "It has never been tested in humans.",
    k: [["Route", "Topical in mouse studies"], ["Half-life", NE]], ke: "animal",
    related: ["sm04554", "pp405"] });

  A.add({ slug: "ahk-cu", name: "AHK-Cu", aliases: ["Copper tripeptide AHK"], category: "skin", status: "Approved",
    class: "Copper-binding tripeptide", developer: "Cosmetic peptide research", tags: ["copper peptide", "hair", "cosmetic"],
    summary: "A copper peptide related to GHK-Cu, used in hair and skin cosmetics. Cell studies suggest it supports hair follicle growth. Human evidence is minimal.",
    names: "Used as a cosmetic ingredient in hair and skin products. The \"Approved\" status refers to cosmetic use only.",
    structure: "Ala-His-Lys complexed with copper(II).",
    pubchem: false, pnote: hairNote, p: [["Hair / skin effect", 1], ["Risk load", 1, 1], ["Evidence quality", 1]],
    r: [["Skin irritation", "low", "Occasional irritation", "anecdotal"], vendor],
    a: [["Dermal papilla cells", "in vitro", "Promoted dermal papilla cell growth and reduced apoptosis in culture"]],
    t: [], noTrials: "There are no controlled human trials.",
    k: [["Route", "Topical; injection in informal use"], ["Half-life", NE]], ke: "in vitro",
    related: ["ghk-cu", "minoxidil"] });

  A.add({ slug: "snap-8", name: "SNAP-8", aliases: ["Acetyl octapeptide-3"], category: "skin", status: "Approved",
    class: "SNARE-mimicking cosmetic peptide", developer: "Lipotec", tags: ["wrinkles", "cosmetic", "peptide"],
    summary: "A cosmetic peptide that mimics part of the SNAP-25 protein to reduce muscle contraction in expression lines, a \"topical Botox\" claim with modest evidence.",
    names: "Sold by Lipotec as a cosmetic ingredient (INCI: acetyl glutamyl heptapeptide-1 / acetyl octapeptide-3). An extended version of argireline. The \"Approved\" status refers to cosmetic use only.",
    structure: "An acetylated 8-amino-acid peptide based on the N-terminus of SNAP-25.",
    pubchem: false, p: [["Wrinkle reduction", 1], ["Risk load", 1, 1], ["Evidence quality", 1]],
    r: [["Skin irritation", "low", "Occasional irritation", "anecdotal"]],
    a: [["SNARE complex", "in vitro", "Competes with SNAP-25, reducing neurotransmitter release in cell assays"]],
    t: [], noTrials: "Evidence comes from manufacturer-sponsored cosmetic studies.",
    k: [["Route", "Topical"], ["Skin penetration", "Limited"]], ke: "in vitro",
    related: ["ghk-cu", "ahk-cu"] });

  /* ================================================================ Melanocortin */
  A.add({ slug: "melanotan-1", name: "Melanotan I", aliases: ["Afamelanotide", "Scenesse", "MT-1"], category: "melanocortin", status: "Approved",
    class: "α-MSH analog (MC1R agonist)", developer: "University of Arizona; Clinuvel", tags: ["tanning", "MC1R", "photoprotection"],
    summary: "A stable α-MSH analog that darkens skin through MC1R. As the implant Scenesse it is approved for a rare light-sensitivity disorder.",
    names: "Approved as Scenesse, a slow-release implant, for erythropoietic protoporphyria (EU 2014, US 2019). Injectable \"Melanotan I\" sold online is unregulated.",
    structure: "[Nle4, D-Phe7]-α-MSH, a linear 13-amino-acid peptide.",
    pubchem: "afamelanotide", p: [["Tanning effect", 3], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Nausea and headache", "low", "Common after dosing", "human rct"], ["Moles", "moderate", "Darkening of moles; skin checks are recommended", "human rct"], vendor],
    a: [["MC1R", "human rct", "Stimulates eumelanin production without UV exposure"]],
    t: [{ title: "Erythropoietic protoporphyria", evidence: "human rct", meta: ["adults with erythropoietic protoporphyria", "afamelanotide implant or placebo", "6–9 months", "randomized, double-blind, placebo-controlled, phase 3"], body: "Afamelanotide increased the time patients could spend in direct sunlight without pain and improved quality of life." }],
    k: [["Route", "Subcutaneous implant (approved); injection (informal)"], ["Duration", "Implant releases drug over about 2 months"], ["Half-life", "Short for free peptide"]], ke: "established",
    related: ["melanotan-2", "bremelanotide"] });

  A.add({ slug: "melanotan-2", name: "Melanotan II", aliases: ["MT-2", "MT-II"], category: "melanocortin", status: "Research only",
    class: "Nonselective cyclic melanocortin agonist", developer: "University of Arizona (1990s)", tags: ["tanning", "libido", "MC4R"],
    summary: "A cyclic α-MSH analog that tans skin and raises libido. It acts on several melanocortin receptors and was never approved. Moles changing and new moles are a real concern.",
    names: "Developed alongside Melanotan I. Bremelanotide (PT-141) is its metabolite and was developed separately. Melanotan II itself was never approved, and several countries have issued warnings about unlicensed tanning injections.",
    structure: "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH<sub>2</sub>, a cyclic heptapeptide. Molecular weight about 1024 g/mol.",
    pubchem: "melanotan II", p: [["Tanning effect", 4], ["Libido effect", 3], ["Risk load", 3, 1], ["Evidence quality", 2]],
    r: [["Moles and melanoma", "high", "New and changing moles; case reports of melanoma, though causation is unproven", "human obs"], ["Nausea and flushing", "moderate", "Very common after dosing", "human rct"],
      ["Priapism", "moderate", "Spontaneous erections; rare priapism", "human obs"], ["Blood pressure", "moderate", "Transient rises", "human rct"], vendor],
    a: [["MC1R", "human rct", "Skin darkening"], ["MC4R", "human rct", "Sexual arousal and appetite suppression"]],
    t: [], noTrials: "Small early human studies showed tanning and erectile effects. There are no large trials.",
    k: [["Route", "Subcutaneous injection; nasal sprays sold online"], ["Half-life", "About 1 hour or less"]], ke: "human obs",
    related: ["melanotan-1", "bremelanotide"] });

  /* ================================================================ Bioregulators */
  const bioNote = "Khavinson peptide bioregulators: evidence comes almost entirely from one Russian research school, with little independent replication.";
  const bioRisks = [["Evidence base", "moderate", "Nearly all studies come from the St. Petersburg Institute of Bioregulation and Gerontology", "established"], ["Human safety", "unknown", "No independent controlled human safety data", "unknown"], vendor];
  const bio = (slug, name, target, seq, extra) => A.add({ slug, name, aliases: extra.aliases || [], category: "bioregulators", status: extra.status || "Research only",
    class: "Short peptide bioregulator", developer: "V. Khavinson, St. Petersburg Institute of Bioregulation and Gerontology", tags: ["bioregulator", "Khavinson", ...(extra.tags || [])],
    summary: extra.summary,
    names: extra.names || `One of the short-peptide \"bioregulators\" developed by Vladimir Khavinson's institute. It is claimed to act selectively on ${target}. Sold as a research peptide and, in Russia, in supplement form.`,
    structure: seq ? `Commonly listed as ${seq}. Peptides this short are claimed to enter the cell nucleus and regulate gene expression, a mechanism that has not been independently confirmed.` : "A polypeptide complex.",
    pubchem: false, pnote: bioNote, p: [["Claimed organ effect", 2], ["Risk load", 1, 1], ["Evidence quality", 1]],
    r: bioRisks, a: [["Gene expression", "in vitro", `Reported to change gene expression in ${target} cells in culture`], ...(extra.a || [])],
    t: [], noTrials: "Clinical claims come from Russian studies that are small and mostly not independently replicated.",
    k: [["Route", extra.route || "Oral capsules, injection or sublingual"], ["Half-life", "Minutes for short peptides; not established"], ["Metabolism", "Peptidase cleavage"]], ke: "unknown",
    related: ["epitalon", ...(extra.related || [])] });

  bio("bronchogen", "Bronchogen", "the bronchial lining", "Ala-Asp-Glu-Leu (AEDL)", { tags: ["lungs"], summary: "A four-amino-acid bioregulator claimed to support the bronchial lining and reduce lung inflammation.", related: ["chonluten"] });
  bio("chonluten", "Chonluten", "bronchial and gastric mucosa", "Glu-Asp-Gly (EDG)", { tags: ["lungs"], summary: "A three-amino-acid bioregulator claimed to support lung and stomach lining health.", related: ["bronchogen"] });
  bio("cardiogen", "Cardiogen", "heart muscle", "Ala-Glu-Asp-Arg (AEDR)", { tags: ["heart"], summary: "A four-amino-acid bioregulator claimed to support heart tissue repair.", related: ["vesugen"] });
  bio("cortagen", "Cortagen", "the brain cortex", "Ala-Glu-Asp-Pro (AEDP)", { tags: ["brain"], summary: "A four-amino-acid bioregulator claimed to support brain cortex function, stress resilience and memory.", related: ["pinealon"] });
  bio("crystagen", "Crystagen", "the immune system", "Glu-Asp-Pro (EDP)", { tags: ["immune"], summary: "A three-amino-acid bioregulator claimed to support immune function.", related: ["vilon", "thymalin"] });
  bio("livagen", "Livagen", "the liver", "Lys-Glu-Asp-Ala (KEDA)", { tags: ["liver"], summary: "A four-amino-acid bioregulator claimed to support liver function and to relax chromatin in aging cells.", related: ["ovagen"] });
  bio("ovagen", "Ovagen", "the liver and gastrointestinal tract", "Glu-Asp-Leu (EDL)", { tags: ["liver"], summary: "A three-amino-acid bioregulator claimed to support the liver and digestive tract.", related: ["livagen"] });
  bio("pinealon", "Pinealon", "the brain and pineal gland", "Glu-Asp-Arg (EDR)", { tags: ["brain", "sleep"], summary: "A three-amino-acid bioregulator claimed to protect neurons and normalize circadian rhythm.", related: ["cortagen", "dsip"] });
  bio("prostamax", "Prostamax", "the prostate", "Lys-Glu-Asp-Pro (KEDP)", { tags: ["prostate"], summary: "A four-amino-acid bioregulator claimed to support prostate health.", related: ["testagen"] });
  bio("testagen", "Testagen", "the testes", "Lys-Glu-Asp-Gly (KEDG)", { tags: ["testes"], summary: "A four-amino-acid bioregulator claimed to support testicular function. There is no controlled evidence that it raises testosterone.", related: ["prostamax"] });
  bio("vesugen", "Vesugen", "blood vessel walls", "Lys-Glu-Asp (KED)", { tags: ["blood vessels"], summary: "A three-amino-acid bioregulator claimed to support blood vessel health.", related: ["cardiogen"] });
  bio("vilon", "Vilon", "the thymus and immune system", "Lys-Glu (KE)", { tags: ["immune", "thymus"], summary: "A two-amino-acid bioregulator, the shortest in the series, claimed to support thymus and immune function.", related: ["thymalin", "crystagen"] });
  bio("thymalin", "Thymalin", "the thymus and immune system", null, { status: "Approved", tags: ["immune", "thymus"], route: "Intramuscular injection",
    summary: "A polypeptide extract of calf thymus, prescribed in Russia as an immune modulator. It is the original product from which Vilon and other short peptides were derived.",
    names: "Approved in Russia as an immunomodulator since the 1980s. Not approved elsewhere.", related: ["vilon", "thymosin-alpha-1"] });

  /* ================================================================ Health & support */
  A.add({ slug: "rosuvastatin", name: "Rosuvastatin", aliases: ["Crestor"], category: "health", status: "Approved",
    class: "HMG-CoA reductase inhibitor (statin)", developer: "Shionogi / AstraZeneca", tags: ["statin", "LDL", "cardiovascular"],
    summary: "A potent statin that lowers LDL cholesterol by up to about half. It cut cardiovascular events in a large trial of people with normal LDL but raised inflammation markers.",
    names: "Sold as Crestor and generics for high cholesterol and cardiovascular prevention.",
    structure: "C<sub>22</sub>H<sub>28</sub>FN<sub>3</sub>O<sub>6</sub>S, about 481.5 g/mol. It is water-soluble and acts mainly in the liver.",
    pubchem: "rosuvastatin", p: [["LDL lowering", 5], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Muscle", "low", "Muscle aches; rarely myopathy or rhabdomyolysis", "human rct"], ["Diabetes", "low", "Small increase in new-onset diabetes", "human rct"], ["Liver", "low", "Occasional liver enzyme rises", "established"]],
    a: [["HMG-CoA reductase", "established", "Blocks cholesterol synthesis, which increases LDL receptor clearance in the liver"]],
    t: [{ title: "JUPITER", evidence: "human rct", meta: ["17,802 adults with normal LDL and raised hs-CRP", "rosuvastatin 20 mg daily or placebo", "median 1.9 years (stopped early)", "randomized, double-blind, placebo-controlled"], body: "Rosuvastatin reduced the composite of major cardiovascular events by about 44%." }],
    k: [["Route", "Oral"], ["Bioavailability", "About 20%"], ["Half-life", "About 19 hours"], ["Metabolism", "Minimal, mainly CYP2C9"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["pitavastatin", "ezetimibe", "telmisartan"] });

  A.add({ slug: "pitavastatin", name: "Pitavastatin", aliases: ["Livalo", "Zypitamag"], category: "health", status: "Approved",
    class: "HMG-CoA reductase inhibitor (statin)", developer: "Kowa", tags: ["statin", "LDL", "cardiovascular"],
    summary: "A moderate-intensity statin with few drug interactions and little effect on blood sugar. It reduced cardiovascular events in people with HIV in a large 2023 trial.",
    names: "Sold as Livalo and Zypitamag for high cholesterol.",
    structure: "C<sub>25</sub>H<sub>24</sub>FNO<sub>4</sub>, about 421.5 g/mol.",
    pubchem: "pitavastatin", p: [["LDL lowering", 3], ["Risk load", 1, 1], ["Evidence quality", 4]],
    r: [["Muscle", "low", "Muscle aches; rarely myopathy", "human rct"]],
    a: [["HMG-CoA reductase", "established", "Blocks cholesterol synthesis"]],
    t: [{ title: "REPRIEVE: people with HIV", evidence: "human rct", meta: ["7,769 adults with HIV at low to moderate cardiovascular risk", "pitavastatin 4 mg daily or placebo", "median 5.1 years", "randomized, double-blind, placebo-controlled"], body: "Pitavastatin reduced major adverse cardiovascular events by about 35%." }],
    k: [["Route", "Oral"], ["Bioavailability", "About 50%"], ["Half-life", "About 12 hours"], ["Metabolism", "Mainly glucuronidation; minimal CYP"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["rosuvastatin", "ezetimibe"] });

  A.add({ slug: "ezetimibe", name: "Ezetimibe", aliases: ["Zetia", "Ezetrol"], category: "health", status: "Approved",
    class: "Cholesterol absorption inhibitor (NPC1L1)", developer: "Schering-Plough", tags: ["LDL", "cholesterol absorption"],
    summary: "A pill that blocks cholesterol absorption in the gut, lowering LDL by about 20%. It is usually added to a statin.",
    names: "Sold as Zetia and Ezetrol, and combined with simvastatin as Vytorin.",
    structure: "C<sub>24</sub>H<sub>21</sub>F<sub>2</sub>NO<sub>3</sub>, about 409.4 g/mol.",
    pubchem: "ezetimibe", p: [["LDL lowering", 2], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Tolerability", "low", "Generally well tolerated", "human rct"]],
    a: [["NPC1L1", "established", "Blocks intestinal uptake of dietary and biliary cholesterol"]],
    t: [{ title: "IMPROVE-IT", evidence: "human rct", meta: ["18,144 patients after acute coronary syndrome", "simvastatin plus ezetimibe or simvastatin alone", "median 6 years", "randomized, double-blind"], body: "Adding ezetimibe lowered LDL further and modestly reduced cardiovascular events (32.7% vs 34.7%)." }],
    k: [["Route", "Oral"], ["Half-life", "About 22 hours (with enterohepatic recycling)"], ["Metabolism", "Glucuronidation to an active form"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["rosuvastatin", "pitavastatin"] });

  A.add({ slug: "telmisartan", name: "Telmisartan", aliases: ["Micardis"], category: "health", status: "Approved",
    class: "Angiotensin II receptor blocker (ARB)", developer: "Boehringer Ingelheim", tags: ["blood pressure", "ARB", "PPAR-γ"],
    summary: "A long-acting blood pressure drug that also partly activates PPAR-γ, which may help insulin sensitivity. It is commonly used to control blood pressure on cycle.",
    names: "Sold as Micardis for hypertension and cardiovascular risk reduction.",
    structure: "C<sub>33</sub>H<sub>30</sub>N<sub>4</sub>O<sub>2</sub>, about 514.6 g/mol.",
    pubchem: "telmisartan", p: [["Blood pressure lowering", 4], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Potassium and kidney", "moderate", "Can raise potassium and affect kidney function, especially with dehydration", "established"], ["Pregnancy", "high", "Contraindicated in pregnancy", "established"]],
    a: [["AT1 receptor", "established", "Blocks angiotensin II, lowering blood pressure"], ["PPAR-γ", "in vitro", "Partial agonist, unusual among ARBs"]],
    t: [], noTrials: "Approval rests on large hypertension and cardiovascular trials, including ONTARGET.",
    k: [["Route", "Oral"], ["Bioavailability", "About 42–58%"], ["Half-life", "About 24 hours"], ["Metabolism", "Glucuronidation"], ["Excretion", "Almost entirely feces"]], ke: "established",
    related: ["nebivolol", "rosuvastatin"] });

  A.add({ slug: "nebivolol", name: "Nebivolol", aliases: ["Bystolic", "Nebilet"], category: "health", status: "Approved",
    class: "β1-selective blocker with nitric oxide–mediated vasodilation", developer: "Janssen", tags: ["blood pressure", "beta blocker", "heart rate"],
    summary: "A highly β1-selective beta blocker that also dilates blood vessels through nitric oxide. It lowers heart rate and blood pressure with fewer sexual and metabolic side effects than older beta blockers.",
    names: "Sold as Bystolic (US) and Nebilet (Europe) for hypertension and, in Europe, heart failure.",
    structure: "C<sub>22</sub>H<sub>25</sub>F<sub>2</sub>NO<sub>4</sub>, about 405.4 g/mol. A racemate; one enantiomer blocks β1 and the other drives nitric oxide release.",
    pubchem: "nebivolol", p: [["Heart rate / BP control", 4], ["Risk load", 1, 1], ["Evidence quality", 4]],
    r: [["Fatigue and slow heart rate", "low", "Fatigue, dizziness and bradycardia", "human rct"], ["Abrupt stopping", "moderate", "Stopping suddenly can cause rebound high heart rate", "established"]],
    a: [["β1 receptor", "established", "Highly selective blockade"], ["Nitric oxide", "human rct", "Vasodilation via β3 / eNOS"]],
    t: [], noTrials: "Approval rests on hypertension trials.",
    k: [["Route", "Oral"], ["Half-life", "About 12 hours (extensive CYP2D6 metabolizers); about 19 hours (poor metabolizers)"], ["Metabolism", "Liver, CYP2D6"], ["Excretion", "Urine and feces"]], ke: "established",
    related: ["telmisartan", "propranolol"] });

  A.add({ slug: "propranolol", name: "Propranolol", aliases: ["Inderal"], category: "health", status: "Approved",
    class: "Nonselective beta blocker", developer: "ICI (James Black, 1960s)", tags: ["beta blocker", "anxiety", "heart rate"],
    summary: "The original beta blocker. It is used for blood pressure, migraine prevention and off-label for performance anxiety. It blocks both β1 and β2, so it can trigger asthma.",
    names: "Sold as Inderal and generics. James Black received a Nobel Prize partly for its development.",
    structure: "C<sub>16</sub>H<sub>21</sub>NO<sub>2</sub>, about 259.3 g/mol. Lipophilic, so it enters the brain.",
    pubchem: "propranolol", p: [["Heart rate / anxiety control", 4], ["Risk load", 2, 1], ["Evidence quality", 5]],
    r: [["Asthma", "high", "Can trigger bronchospasm; avoid in asthma", "established"], ["Low blood sugar masking", "moderate", "Hides warning signs of hypoglycemia", "established"], ["Fatigue and vivid dreams", "low", "Common", "established"]],
    a: [["β1 and β2 receptors", "established", "Blocks adrenaline's effects on heart rate, tremor and other physical anxiety symptoms"]],
    t: [], noTrials: "Decades of trials in hypertension, angina and migraine.",
    k: [["Route", "Oral"], ["Bioavailability", "About 25% (extensive first-pass)"], ["Half-life", "About 3–6 hours"], ["Metabolism", "Liver, CYP2D6 and CYP1A2"], ["Excretion", "Urine"]], ke: "established",
    related: ["nebivolol"] });

  A.add({ slug: "ondansetron", name: "Ondansetron", aliases: ["Zofran"], category: "health", status: "Approved",
    class: "5-HT3 receptor antagonist", developer: "Glaxo", tags: ["nausea", "antiemetic"],
    summary: "A widely used anti-nausea drug. It is often used for nausea from GLP-1 agonists, though that use is off-label. It can prolong the QT interval.",
    names: "Sold as Zofran and generics for chemotherapy, radiation and postoperative nausea.",
    structure: "C<sub>18</sub>H<sub>19</sub>N<sub>3</sub>O, about 293.4 g/mol.",
    pubchem: "ondansetron", p: [["Nausea control", 4], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["QT prolongation", "moderate", "Dose-dependent QT prolongation; caution with other QT-prolonging drugs", "established"], ["Constipation and headache", "low", "Common", "established"], ["Serotonin syndrome", "low", "Possible with other serotonergic drugs", "established"]],
    a: [["5-HT3 receptor", "established", "Blocks serotonin signaling in the gut and brainstem vomiting center"]],
    t: [], noTrials: "Approval rests on chemotherapy and postoperative nausea trials.",
    k: [["Route", "Oral, dissolving tablet or intravenous"], ["Bioavailability", "About 60%"], ["Half-life", "About 3–6 hours"], ["Metabolism", "Liver, CYP3A4/1A2/2D6"], ["Excretion", "Urine as metabolites"]], ke: "established",
    related: ["semaglutide", "tirzepatide"] });

  A.add({ slug: "naltrexone", name: "Naltrexone", aliases: ["LDN", "Low-dose naltrexone", "Revia", "Vivitrol"], category: "health", status: "Approved",
    class: "Opioid receptor antagonist", developer: "Endo Laboratories", tags: ["opioid antagonist", "LDN", "alcohol"],
    summary: "An opioid blocker approved for alcohol and opioid dependence. At very low doses (LDN) it is used off-label for pain and inflammation, with small and mixed evidence.",
    names: "Sold as Revia (oral) and Vivitrol (monthly injection). Low-dose naltrexone is compounded off-label.",
    structure: "C<sub>20</sub>H<sub>23</sub>NO<sub>4</sub>, about 341.4 g/mol.",
    pubchem: "naltrexone", p: [["Approved-use efficacy", 4], ["LDN evidence", 2], ["Risk load", 1, 1], ["Evidence quality", 3]],
    r: [["Opioid withdrawal", "high", "Triggers immediate withdrawal in anyone taking opioids", "established"], ["Vivid dreams and insomnia", "low", "Common at low doses", "human rct"], ["Liver", "low", "Liver enzyme rises at high doses", "established"]],
    a: [["μ-opioid receptor", "established", "Blocks opioid effects"], ["Microglia (LDN)", "contested", "Proposed to reduce neuroinflammation via TLR4 at low doses"]],
    t: [], noTrials: "Approval rests on dependence trials. LDN trials in fibromyalgia and other conditions are small with mixed results.",
    k: [["Route", "Oral or monthly intramuscular injection"], ["Bioavailability", "5–40% oral"], ["Half-life", "About 4 hours (6β-naltrexol about 13 hours)"], ["Metabolism", "Liver, to 6β-naltrexol"], ["Excretion", "Urine"]], ke: "established",
    related: ["bremelanotide"] });

  A.add({ slug: "sildenafil", name: "Sildenafil", aliases: ["Viagra", "Revatio"], category: "health", status: "Approved",
    class: "PDE5 inhibitor", developer: "Pfizer", tags: ["erectile dysfunction", "PDE5", "vasodilator"],
    summary: "The original erectile dysfunction pill. It is also approved for pulmonary hypertension and used as a pre-workout \"pump\" enhancer.",
    names: "Sold as Viagra (erectile dysfunction) and Revatio (pulmonary arterial hypertension).",
    structure: "C<sub>22</sub>H<sub>30</sub>N<sub>6</sub>O<sub>4</sub>S, about 474.6 g/mol.",
    pubchem: "sildenafil", p: [["Erectile effect", 4], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Nitrates", "high", "Combining with nitrates can cause a dangerous drop in blood pressure", "established"], ["Headache and flushing", "low", "Common", "human rct"], ["Vision", "low", "Blue tinge to vision; rare NAION", "established"]],
    a: [["PDE5", "established", "Prolongs cGMP signaling, relaxing smooth muscle in blood vessels"]],
    t: [], noTrials: "Approval rests on large erectile dysfunction and pulmonary hypertension trials.",
    k: [["Route", "Oral"], ["Bioavailability", "About 40%"], ["Time to peak", "About 1 hour (delayed by fatty meals)"], ["Half-life", "About 4 hours"], ["Metabolism", "Liver, CYP3A4"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["tadalafil", "bremelanotide"] });

  A.add({ slug: "tadalafil", name: "Tadalafil", aliases: ["Cialis", "Adcirca"], category: "health", status: "Approved",
    class: "PDE5 inhibitor (long-acting)", developer: "ICOS / Eli Lilly", tags: ["erectile dysfunction", "PDE5", "BPH"],
    summary: "A long-acting PDE5 inhibitor (\"the weekend pill\"). It is approved daily for urinary symptoms of an enlarged prostate.",
    names: "Sold as Cialis (erectile dysfunction, BPH) and Adcirca (pulmonary arterial hypertension).",
    structure: "C<sub>22</sub>H<sub>19</sub>N<sub>3</sub>O<sub>4</sub>, about 389.4 g/mol.",
    pubchem: "tadalafil", p: [["Erectile effect", 4], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Nitrates", "high", "Dangerous with nitrates", "established"], ["Back and muscle pain", "low", "More common than with sildenafil", "human rct"], ["Headache", "low", "Common", "human rct"]],
    a: [["PDE5", "established", "Long-lasting smooth muscle relaxation"]],
    t: [], noTrials: "Approval rests on large trials in erectile dysfunction, BPH and pulmonary hypertension.",
    k: [["Route", "Oral"], ["Time to peak", "About 2 hours"], ["Half-life", "About 17.5 hours"], ["Metabolism", "Liver, CYP3A4"], ["Excretion", "Mainly feces"]], ke: "established",
    related: ["sildenafil"] });

  A.add({ slug: "dapoxetine", name: "Dapoxetine", aliases: ["Priligy"], category: "health", status: "Approved",
    class: "Short-acting SSRI", developer: "Eli Lilly; later Janssen / Menarini", tags: ["premature ejaculation", "SSRI"],
    summary: "A fast-acting, short-lived SSRI designed to be taken on demand for premature ejaculation. It is approved in many countries but not the US.",
    names: "Sold as Priligy in Europe, Asia and Latin America. The FDA did not approve it.",
    structure: "C<sub>21</sub>H<sub>23</sub>NO, about 305.4 g/mol.",
    pubchem: "dapoxetine", p: [["Ejaculation delay", 3], ["Risk load", 2, 1], ["Evidence quality", 4]],
    r: [["Fainting", "moderate", "Syncope, especially with alcohol or dehydration", "human rct"], ["Nausea and dizziness", "moderate", "Common", "human rct"], ["Interactions", "high", "Avoid with other serotonergic drugs and MAO inhibitors", "established"]],
    a: [["Serotonin transporter", "human rct", "Briefly raises serotonin, delaying ejaculation by a few minutes on average"]],
    t: [], noTrials: "Approval rests on phase 3 trials showing roughly a 2.5- to 3-fold increase in time to ejaculation.",
    k: [["Route", "Oral, 1–3 hours before sex"], ["Time to peak", "About 1 hour"], ["Half-life", "About 1.3 hours initially, then about 19 hours terminal"], ["Metabolism", "Liver, CYP2D6 and CYP3A4"], ["Excretion", "Urine"]], ke: "established",
    related: ["tadalafil"] });

  A.add({ slug: "trazodone", name: "Trazodone", aliases: ["Desyrel"], category: "health", status: "Approved",
    class: "Serotonin antagonist and reuptake inhibitor (SARI)", developer: "Angelini (Italy)", tags: ["sleep", "antidepressant"],
    summary: "An antidepressant mostly used at low doses as a sleep aid. It is non-habit-forming but can cause morning grogginess and, rarely, priapism.",
    names: "Approved for depression as Desyrel and generics. Low-dose use for insomnia is off-label but very common.",
    structure: "C<sub>19</sub>H<sub>22</sub>ClN<sub>5</sub>O, about 371.9 g/mol.",
    pubchem: "trazodone", p: [["Sleep effect", 3], ["Risk load", 2, 1], ["Evidence quality", 3]],
    r: [["Priapism", "moderate", "A rare but urgent side effect", "established"], ["Orthostatic hypotension", "moderate", "Dizziness on standing", "established"], ["Next-day grogginess", "low", "Common", "human rct"]],
    a: [["5-HT2A and H1 receptors", "established", "Sedation through 5-HT2A and histamine blockade at low doses"]],
    t: [], noTrials: "Evidence for insomnia comes from small trials; its approval is for depression.",
    k: [["Route", "Oral"], ["Time to peak", "About 1 hour"], ["Half-life", "About 5–9 hours"], ["Metabolism", "Liver, CYP3A4 (to active mCPP)"], ["Excretion", "Urine"]], ke: "established",
    related: ["doxepin", "dsip"] });

  A.add({ slug: "doxepin", name: "Doxepin", aliases: ["Silenor", "Sinequan"], category: "health", status: "Approved",
    class: "Tricyclic (low-dose H1 antagonist)", developer: "Pfizer", tags: ["sleep", "antihistamine"],
    summary: "An old tricyclic antidepressant that at very low doses (3–6 mg) acts almost purely as an antihistamine. At these doses it is approved for staying asleep.",
    names: "Low-dose doxepin is sold as Silenor for insomnia with difficulty staying asleep. Higher doses are used for depression and anxiety.",
    structure: "C<sub>19</sub>H<sub>21</sub>NO, about 279.4 g/mol.",
    pubchem: "doxepin", p: [["Sleep maintenance", 3], ["Risk load", 1, 1], ["Evidence quality", 4]],
    r: [["Next-day drowsiness", "low", "Possible", "human rct"], ["Higher doses", "moderate", "Antidepressant doses bring anticholinergic and cardiac side effects", "established"]],
    a: [["H1 receptor", "human rct", "Highly selective histamine blockade at low doses"]],
    t: [], noTrials: "Low-dose approval rests on trials in adults and older adults with insomnia.",
    k: [["Route", "Oral"], ["Time to peak", "About 3.5 hours"], ["Half-life", "About 15 hours (metabolite about 31 hours)"], ["Metabolism", "Liver, CYP2C19 and CYP2D6"], ["Excretion", "Urine"]], ke: "established",
    related: ["trazodone"] });

  A.add({ slug: "pramipexole", name: "Pramipexole", aliases: ["Mirapex"], category: "health", status: "Approved",
    class: "Dopamine D2/D3 agonist", developer: "Boehringer Ingelheim", tags: ["dopamine", "prolactin", "Parkinson's"],
    summary: "A dopamine agonist approved for Parkinson's and restless legs. It lowers prolactin and is used off-label for that on cycle, though cabergoline is the standard prolactin drug.",
    names: "Sold as Mirapex for Parkinson's disease and restless legs syndrome.",
    structure: "C<sub>10</sub>H<sub>17</sub>N<sub>3</sub>S, about 211.3 g/mol.",
    pubchem: "pramipexole", p: [["Prolactin lowering", 2], ["Risk load", 3, 1], ["Evidence quality", 4]],
    r: [["Impulse control", "high", "Compulsive gambling, shopping, eating and hypersexuality are well documented", "established"], ["Sleep attacks", "moderate", "Sudden sleep onset, a driving risk", "established"], ["Nausea and dizziness", "moderate", "Common at the start", "established"]],
    a: [["D2 / D3 receptors", "established", "Dopamine agonist; D2 activation suppresses prolactin"]],
    t: [], noTrials: "Approval rests on Parkinson's and restless legs trials.",
    k: [["Route", "Oral"], ["Bioavailability", "Over 90%"], ["Half-life", "About 8–12 hours"], ["Metabolism", "Minimal"], ["Excretion", "Mostly unchanged in urine"]], ke: "established",
    related: ["nandrolone", "trenbolone"] });

  A.add({ slug: "vitamin-b12", name: "Vitamin B12", aliases: ["B12", "Cyanocobalamin", "Methylcobalamin", "B12 injection"], category: "health", status: "Approved",
    class: "Vitamin (cobalamin)", developer: "Essential nutrient", tags: ["vitamin", "energy", "deficiency"],
    summary: "An essential vitamin for nerves and red blood cells. Injections fix deficiency, but in people with normal levels they don't boost energy.",
    names: "Cyanocobalamin and hydroxocobalamin injections are approved for B12 deficiency and pernicious anemia. Methylcobalamin is sold as a supplement.",
    structure: "A large cobalt-containing corrinoid. Cyanocobalamin is about 1355 g/mol.",
    pubchem: "cyanocobalamin", p: [["Benefit if deficient", 5], ["Benefit if replete", 1], ["Risk load", 1, 1], ["Evidence quality", 5]],
    r: [["Acne", "low", "High-dose injections can trigger acne", "human obs"], ["Masking", "low", "High folate or B12 intake can complicate diagnosis of deficiency", "established"]],
    a: [["Methylation and DNA synthesis", "established", "Required for red blood cell formation and myelin"]],
    t: [], noTrials: "Its use in deficiency is well established.",
    k: [["Route", "Intramuscular, subcutaneous, oral or sublingual"], ["Oral absorption", "Needs intrinsic factor; about 1% by passive absorption at high doses"], ["Storage", "Stored in the liver for years"], ["Excretion", "Excess cleared in urine"]], ke: "established",
    related: ["metformin", "glutathione"] });

  A.add({ slug: "glutathione", name: "Glutathione", aliases: ["GSH", "L-Glutathione"], category: "health", status: "Supplement",
    class: "Tripeptide antioxidant", developer: "Endogenous molecule", tags: ["antioxidant", "skin lightening", "detox"],
    summary: "The body's main internal antioxidant. Oral glutathione is poorly absorbed, and IV use for skin lightening has drawn regulatory warnings in several countries.",
    names: "Sold as a supplement and given by IV infusion at wellness clinics. Not approved as a drug for skin lightening or detoxification.",
    structure: "γ-L-glutamyl-L-cysteinylglycine. C<sub>10</sub>H<sub>17</sub>N<sub>3</sub>O<sub>6</sub>S, about 307.3 g/mol.",
    pubchem: "glutathione", p: [["Health benefit (human)", 1], ["Risk load", 2, 1], ["Evidence quality", 2]],
    r: [["IV use", "moderate", "Infusion risks and unregulated compounding; regulators have warned about IV skin-lightening use", "established"], ["Asthma", "low", "Inhaled glutathione can trigger bronchospasm", "established"]],
    a: [["Redox balance", "established", "Neutralizes reactive oxygen species and supports liver detoxification"], ["Skin pigment", "contested", "May shift melanin toward lighter pheomelanin; small trials are inconsistent"]],
    t: [], noTrials: "Small trials for skin lightening and other uses have inconsistent results.",
    k: [["Route", "Oral, intravenous or inhaled"], ["Oral bioavailability", "Low; mostly broken down in the gut"], ["Half-life", "Minutes in blood"]], ke: "human obs",
    related: ["nad-plus", "vitamin-b12"] });
})(window.ATLAS);
