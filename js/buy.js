/*
 * Atlas Codex: where to buy each compound, keyed by entry slug.
 *
 * Each item points at a source defined in `support.sources` (js/data.js) by its `id`.
 * Paste the product URL as `href`. If it has no ?ref= parameter, the page adds the
 * source's code automatically, so these two are equivalent:
 *   "https://halfnattys.is/product/dihexa-capsules/"
 *   "https://halfnattys.is/product/dihexa-capsules/?ref=ATLAS"
 *
 * A compound with no entry here shows "No current stock".
 * Optional per item: `label` to override the button text (e.g. "Half Nattys · 30 mL").
 */
window.ATLAS.buy = {
  dihexa: [
    { source: "halfnattys", href: "https://halfnattys.is/product/dihexa-capsules/?ref=ATLAS" }
  ],
  // The source sells these under code names and gives only the drug class; labels keep its names.
  "semaglutide": [
    { source: "halfnattys", href: "https://halfnattys.is/product/glp-1s-peptide/", label: "Half Nattys · GLP-1S vial, 10 mg" }
  ],
  "tirzepatide": [
    { source: "halfnattys", href: "https://halfnattys.is/product/glp-tz-peptide/", label: "Half Nattys · GLP-TZ vial, 10 mg" }
  ],
  "retatrutide": [
    { source: "halfnattys", href: "https://halfnattys.is/product/glp-rt-peptide/", label: "Half Nattys · GLP-RT vial, 20 mg" }
  ],
  "pp405": [
    { source: "halfnattys", href: "https://halfnattys.is/product/pp405-topical/", label: "Half Nattys · Topical" }
  ],
  "ss-31": [
    { source: "halfnattys", href: "https://halfnattys.is/product/ss-31-peptide/", label: "Half Nattys · Vial" }
  ],
  "thymosin-alpha-1": [
    { source: "halfnattys", href: "https://halfnattys.is/product/thymosin-alpha-1-10mg-peptide/", label: "Half Nattys · Vial, 10 mg" }
  ],
  "selank": [
    { source: "halfnattys", href: "https://halfnattys.is/product/selank-10mg-peptide/", label: "Half Nattys · Vial, 10 mg" },
    { source: "halfnattys", href: "https://halfnattys.is/product/selank-spray/", label: "Half Nattys · Spray" }
  ],
  "ipamorelin": [
    { source: "halfnattys", href: "https://halfnattys.is/product/ipamorelin-10mg-peptide/", label: "Half Nattys · Vial, 10 mg" }
  ],
  "kpv": [
    { source: "halfnattys", href: "https://halfnattys.is/product/kpv-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/kpv-10mg/", label: "Half Nattys · Spray, 10 mg" },
    { source: "halfnattys", href: "https://halfnattys.is/product/kpv-capsules/", label: "Half Nattys · Capsules" }
  ],
  "cjc-1295": [
    { source: "halfnattys", href: "https://halfnattys.is/product/cjc-w-dac-5mg/", label: "Half Nattys · Vial, 5 mg" }
  ],
  "pinealon": [
    { source: "halfnattys", href: "https://halfnattys.is/product/pinealon-20mg-2/", label: "Half Nattys · Vial, 20 mg" },
    { source: "halfnattys", href: "https://halfnattys.is/product/pinealon-20mg/", label: "Half Nattys · Spray, 20 mg" }
  ],
  "adamax": [
    { source: "halfnattys", href: "https://halfnattys.is/product/adamax-10mg/", label: "Half Nattys · Vial, 10 mg" },
    { source: "halfnattys", href: "https://halfnattys.is/product/adamax-spray/", label: "Half Nattys · Spray" }
  ],
  "5-amino-1mq": [
    { source: "halfnattys", href: "https://halfnattys.is/product/5-amino-1mq-10mg/", label: "Half Nattys · Vial, 10 mg" },
    { source: "halfnattys", href: "https://halfnattys.is/product/5-amino-1mq-capsules/", label: "Half Nattys · Capsules" }
  ],
  "prostamax": [
    { source: "halfnattys", href: "https://halfnattys.is/product/prostamax-20mg/", label: "Half Nattys · Vial, 20 mg" }
  ],
  "testagen": [
    { source: "halfnattys", href: "https://halfnattys.is/product/testagen-20mg/", label: "Half Nattys · Vial, 20 mg" }
  ],
  "vip": [
    { source: "halfnattys", href: "https://halfnattys.is/product/vip-10mg/", label: "Half Nattys · Vial, 10 mg" }
  ],
  "noopept": [
    { source: "halfnattys", href: "https://halfnattys.is/product/noopept-20mg/", label: "Half Nattys · Spray, 20 mg" }
  ],
  "orforglipron": [
    { source: "halfnattys", href: "https://halfnattys.is/product/orforglipron/", label: "Half Nattys · Capsules" }
  ],
  "kisspeptin": [
    { source: "halfnattys", href: "https://halfnattys.is/product/kisspeptin-peptide/", label: "Half Nattys · Vial" }
  ],
  "foxo4-dri": [
    { source: "halfnattys", href: "https://halfnattys.is/product/fox04-10mg-peptide/", label: "Half Nattys · Vial, 10 mg" }
  ],
  "aod-9604": [
    { source: "halfnattys", href: "https://halfnattys.is/product/aod-9604-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/aod-9604-spray/", label: "Half Nattys · Spray" }
  ],
  "nad-plus": [
    { source: "halfnattys", href: "https://halfnattys.is/product/nad-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/nad-spray/", label: "Half Nattys · Spray" }
  ],
  "bam15": [
    { source: "halfnattys", href: "https://halfnattys.is/product/bam15-capsules/", label: "Half Nattys · Capsules" }
  ],
  "fladrafinil": [
    { source: "halfnattys", href: "https://halfnattys.is/product/crl-40-941-capsules/", label: "Half Nattys · Capsules" }
  ],
  "dapoxetine": [
    { source: "halfnattys", href: "https://halfnattys.is/product/dapoxetine-capsules/", label: "Half Nattys · Capsules" }
  ],
  "tesofensine": [
    { source: "halfnattys", href: "https://halfnattys.is/product/tesofensine-capsules/", label: "Half Nattys · Capsules" }
  ],
  "raloxifene": [
    { source: "halfnattys", href: "https://halfnattys.is/product/raloxifene-capsules/", label: "Half Nattys · Capsules" }
  ],
  "metformin": [
    { source: "halfnattys", href: "https://halfnattys.is/product/metformin-capsules/", label: "Half Nattys · Capsules" }
  ],
  "gw501516": [
    { source: "halfnattys", href: "https://halfnattys.is/product/cardarine-capsules/", label: "Half Nattys · Capsules" }
  ],
  "ghk-cu": [
    { source: "halfnattys", href: "https://halfnattys.is/product/ghk-cu-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/ghk-cu-capsules/", label: "Half Nattys · Capsules" }
  ],
  "slu-pp-332": [
    { source: "halfnattys", href: "https://halfnattys.is/product/slu-pp-332-1mg-capsules/", label: "Half Nattys · Capsules, 1 mg" }
  ],
  "mk-677": [
    { source: "halfnattys", href: "https://halfnattys.is/product/mk-677-capsules/", label: "Half Nattys · Capsules" }
  ],
  "tadalafil": [
    { source: "halfnattys", href: "https://halfnattys.is/product/tadalafil-capsules/", label: "Half Nattys · Capsules" }
  ],
  "enclomiphene": [
    { source: "halfnattys", href: "https://halfnattys.is/product/enclomiphene-capsules-12-5mg/", label: "Half Nattys · Capsules, 12.5 mg" }
  ],
  "cagrilintide": [
    { source: "halfnattys", href: "https://halfnattys.is/product/cagrilintide-peptide/", label: "Half Nattys · Vial" }
  ],
  "sermorelin": [
    { source: "halfnattys", href: "https://halfnattys.is/product/sermorelin-peptide/", label: "Half Nattys · Vial" }
  ],
  "epitalon": [
    { source: "halfnattys", href: "https://halfnattys.is/product/epithalon-peptide/", label: "Half Nattys · Vial" }
  ],
  "igf-1-des": [
    { source: "halfnattys", href: "https://halfnattys.is/product/igf-des-2mg/", label: "Half Nattys · Vial, 2 mg" }
  ],
  "oxytocin": [
    { source: "halfnattys", href: "https://halfnattys.is/product/oxytocin-peptide/", label: "Half Nattys · Vial" }
  ],
  "hmg": [
    { source: "halfnattys", href: "https://halfnattys.is/product/hmg-peptide/", label: "Half Nattys · Vial" }
  ],
  "snap-8": [
    { source: "halfnattys", href: "https://halfnattys.is/product/snap-8-peptide/", label: "Half Nattys · Vial" }
  ],
  "klow": [
    { source: "halfnattys", href: "https://halfnattys.is/product/klow-peptide/", label: "Half Nattys · Vial" }
  ],
  "glow": [
    { source: "halfnattys", href: "https://halfnattys.is/product/glow-blend-peptide/", label: "Half Nattys · Vial" }
  ],
  "tesamorelin": [
    { source: "halfnattys", href: "https://halfnattys.is/product/tesamorelin-peptide/", label: "Half Nattys · Vial" }
  ],
  "melanotan-2": [
    { source: "halfnattys", href: "https://halfnattys.is/product/melanotan-ii-mt-2-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/melanotan-2-spray/", label: "Half Nattys · Spray" }
  ],
  "tb-500": [
    { source: "halfnattys", href: "https://halfnattys.is/product/tb-500-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/tb-500-spray/", label: "Half Nattys · Spray" }
  ],
  "bremelanotide": [
    { source: "halfnattys", href: "https://halfnattys.is/product/pt-141-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/pt-141-spray/", label: "Half Nattys · Spray" }
  ],
  "dsip": [
    { source: "halfnattys", href: "https://halfnattys.is/product/dsip/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/dsip-spray/", label: "Half Nattys · Spray" }
  ],
  "bpc-157": [
    { source: "halfnattys", href: "https://halfnattys.is/product/bpc-157-10mg/", label: "Half Nattys · Vial, 10 mg" },
    { source: "halfnattys", href: "https://halfnattys.is/product/bpc-157-spray/", label: "Half Nattys · Spray" }
  ],
  "semax": [
    { source: "halfnattys", href: "https://halfnattys.is/product/semax-peptide/", label: "Half Nattys · Vial" },
    { source: "halfnattys", href: "https://halfnattys.is/product/semax-spray/", label: "Half Nattys · Spray" }
  ],
  "vitamin-b12": [
    { source: "halfnattys", href: "https://halfnattys.is/product/b-12-amino/", label: "Half Nattys · Injectable" }
  ],
  "l-carnitine": [
    { source: "halfnattys", href: "https://halfnattys.is/product/l-carnitine-amino/", label: "Half Nattys · Injectable" }
  ],
  "tri-blend-topical": [
    { source: "halfnattys", href: "https://halfnattys.is/product/tri-blend-topical/", label: "Half Nattys · Topical" }
  ],
  "minoxidil": [
    { source: "halfnattys", href: "https://halfnattys.is/product/minoxidil-topical/", label: "Half Nattys · Topical" }
  ],
  "finasteride": [
    { source: "halfnattys", href: "https://halfnattys.is/product/finasteride-topical/", label: "Half Nattys · Topical" }
  ],
  "ru-58841": [
    { source: "halfnattys", href: "https://halfnattys.is/product/ru-58841-topical/", label: "Half Nattys · Topical" }
  ],
  "methylene-blue": [
    { source: "halfnattys", href: "https://halfnattys.is/product/methylene-blue-liquid/", label: "Half Nattys · Liquid" }
  ],
  "mots-c": [
    { source: "halfnattys", href: "https://halfnattys.is/product/mots-c/", label: "Half Nattys · Vial" }
  ]
};
