/*
 * Atlas Codex: use cases. Why people look a compound up, shared by the codex filter and the stacks.
 *
 * A use case says what a compound is studied for or used for, by trial or by reputation.
 * It is a way to find entries, not a claim that the compound works for that use, and never a
 * recommendation: each entry's own evidence grades say how far the record goes.
 *
 * Each use: { id, name, note, slugs }  slugs are entry slugs; an entry can sit under several uses.
 * Stacks carry their own `uses` ids in js/stacks.js.
 */
(function (A) {
  A.uses = [
    {
      id: "healing", name: "Healing and recovery",
      note: "Tendons, gut, wounds, bone and inflammation.",
      slugs: ["bpc-157", "tb-500", "kpv", "ara-290", "b7-33", "teriparatide", "ll-37", "ghk-cu", "mgf", "thymosin-alpha-1", "glow", "klow", "scar-cream",
        "growth-hormone", "igf-1-lr3"]
    },
    {
      id: "muscle", name: "Muscle building",
      note: "Anabolics, SARMs, growth hormone and the growth factors.",
      slugs: ["testosterone", "masteron", "equipoise", "anavar", "anadrol", "superdrol", "nandrolone", "dianabol", "halotestin", "primobolan", "trenbolone", "turinabol", "winstrol",
        "ostarine", "lgd-4033", "rad-140", "ace-031", "ecdysterone", "growth-hormone", "mk-677", "igf-1-lr3", "igf-1-des", "mgf", "ipamorelin", "cjc-1295", "ghrp-2", "ghrp-6", "hexarelin", "sermorelin",
        "ment", "tri-amino",
        "creatine", "yk-11", "andarine"]
    },
    {
      id: "fatloss", name: "Fat loss",
      note: "Appetite, energy expenditure and fat breakdown.",
      slugs: ["semaglutide", "tirzepatide", "retatrutide", "cagrilintide", "mazdutide", "survodutide", "orforglipron", "naltrexone", "bupropion", "tesofensine",
        "clenbuterol", "albuterol", "mirabegron", "t3", "ephedrine", "yohimbine", "dnp", "bam15", "1-3-dmaa", "1-4-dmaa",
        "aod-9604", "hgh-frag-176-191", "tesamorelin", "5-amino-1mq", "l-carnitine",
        "metformin", "berberine", "gw501516", "slu-pp-332", "mots-c", "growth-hormone", "amphetamine", "anavar",
        "liraglutide", "andarine", "sana"]
    },
    {
      id: "performance", name: "Endurance and performance",
      note: "Exercise mimetics, stimulants and endurance aids.",
      slugs: ["gw501516", "slu-pp-332", "aicar", "sr-9009", "mots-c", "atx-304", "meldonium", "bromantane", "1-3-dmaa", "clenbuterol", "tri-amino",
        "ephedrine", "amphetamine", "modafinil", "albuterol", "propranolol", "l-carnitine", "ecdysterone", "turinabol",
        "creatine", "caffeine"]
    },
    {
      id: "cognition", name: "Focus and memory",
      note: "Nootropics, stimulants and the ADHD medicines.",
      slugs: ["piracetam", "aniracetam", "oxiracetam", "pramiracetam", "phenylpiracetam", "nefiracetam", "noopept", "prl-8-53", "9-me-bc", "nsi-189", "tak-653", "dihexa",
        "semax", "adamax", "p-21", "fgl", "dnsp-11", "cerebroprotein-hydrolysate", "methylene-blue", "fladrafinil", "modafinil",
        "amphetamine", "lisdexamfetamine", "methylphenidate", "atomoxetine", "viloxazine", "guanfacine", "nicotine",
        "bromantane", "tropisetron", "picamilon", "cortagen", "pinealon", "epobis",
        "creatine", "caffeine"]
    },
    {
      id: "mood", name: "Mood and anxiety",
      note: "Anxiolytics, antidepressant candidates and social peptides.",
      slugs: ["selank", "emoxypine", "naltrexone", "phenibut", "picamilon", "pe-22-28", "nemifitide", "oxytocin", "propranolol", "bupropion", "tak-653", "nsi-189",
        "bromantane", "trazodone", "doxepin", "methylene-blue", "pramipexole",
        "ashwagandha", "tongkat-ali"]
    },
    {
      id: "sleep", name: "Sleep",
      note: "Sleep aids and sleep-related peptides.",
      slugs: ["dsip", "trazodone", "doxepin", "pinealon",
        "epitalon", "mk-677", "phenibut",
        "ashwagandha", "melatonin"]
    },
    {
      id: "hormones", name: "Hormones and fertility",
      note: "Testosterone, estrogen control, PCT and fertility.",
      slugs: ["testosterone", "proviron", "anastrozole", "exemestane", "letrozole", "tamoxifen", "raloxifene", "enclomiphene", "hcg", "hmg", "kisspeptin", "pramipexole", "testagen",
        "t3", "ment",
        "clomiphene", "cabergoline", "ashwagandha", "tongkat-ali", "dhea"]
    },
    {
      id: "heart", name: "Heart and cholesterol",
      note: "Lipids, blood pressure and the heart.",
      slugs: ["rosuvastatin", "pitavastatin", "ezetimibe", "telmisartan", "nebivolol", "gc-1", "resmetirom", "cardiogen", "vesugen", "b7-33",
        "semaglutide", "tirzepatide", "propranolol", "ss-31", "hexarelin", "berberine", "sildenafil", "tadalafil",
        "liraglutide"]
    },
    {
      id: "sugar", name: "Blood sugar",
      note: "Insulin sensitivity and glucose control.",
      slugs: ["metformin", "berberine", "semaglutide", "tirzepatide", "orforglipron", "atx-304",
        "retatrutide", "mazdutide",
        "liraglutide", "acarbose", "nmn", "sana"]
    },
    {
      id: "longevity", name: "Longevity",
      note: "NAD, mitochondria, senescence and the bioregulators.",
      slugs: ["epitalon", "mots-c", "foxo4-dri", "humanin", "ss-31", "nad-plus", "metformin", "glutathione",
        "bronchogen", "chonluten", "cardiogen", "cortagen", "crystagen", "livagen", "ovagen", "pinealon", "prostamax", "testagen", "vesugen", "vilon", "thymalin",
        "growth-hormone", "5-amino-1mq", "methylene-blue",
        "sirolimus", "acarbose", "nmn", "nicotinamide-riboside", "dhea"]
    },
    {
      id: "immune", name: "Immune",
      note: "Immunomodulators and antimicrobial peptides.",
      slugs: ["thymosin-alpha-1", "ll-37", "kpv", "pnc-27", "thymalin", "vilon", "crystagen",
        "vip", "ara-290",
        "sirolimus"]
    },
    {
      id: "sexual", name: "Libido and sexual health",
      note: "Desire, erection and ejaculation.",
      slugs: ["bremelanotide", "melanotan-2", "kisspeptin", "sildenafil", "tadalafil", "dapoxetine", "vip",
        "testosterone", "yohimbine", "oxytocin",
        "cabergoline", "dhea"]
    },
    {
      id: "hair", name: "Hair and skin",
      note: "Hair loss, skin, tanning and cosmetics.",
      slugs: ["finasteride", "dutasteride", "minoxidil", "ketoconazole", "clascoterone", "pyrilutamide", "topilutamide", "ru-58841", "pp405", "sm04554", "ptd-dbm",
        "tri-blend-topical", "ghk-cu", "ahk-cu", "snap-8", "melanotan-1", "melanotan-2", "glutathione", "glow", "throne-ghk-soap", "throne-thr001", "throne-thr002", "throne-thr004"]
    },
    {
      id: "pain", name: "Pain and migraine",
      note: "Chronic pain, neuropathy and migraine prevention.",
      slugs: ["naltrexone", "ara-290", "propranolol", "bpc-157", "kpv"]
    },
    {
      id: "quitting", name: "Quitting and dependence",
      note: "Cessation medicines for nicotine, alcohol and opioids, and nicotine itself.",
      slugs: ["naltrexone", "nicotine", "varenicline", "cytisine", "bupropion", "tropisetron", "quitting-nicotine-tropisetron",
        "ondansetron", "semaglutide"]
    }
  ];
})(window.ATLAS);
