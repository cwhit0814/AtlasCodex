/*
 * Atlas Codex: the structure comparison page (compare.html).
 *
 * Two skeletal drawings printed one over the other, the way a two-colour press prints two plates: the
 * reference in ink, the comparison in gold, locked in register on the skeleton they share. The chemistry
 * (shared skeleton, alignment, similarity) is in compare-chem.js and runs on RDKit.js, which loads only
 * here, from jsDelivr, the first time the page needs it.
 */
(function () {
  const A = window.ATLAS, X = A.structures, CHEM = window.ATLAS_CHEM;
  const RD_BASE = "https://cdn.jsdelivr.net/npm/@rdkit/rdkit@2026.3.6/dist/";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const bySlug = (s) => A.entries.find((e) => e.slug === s);
  const has = (s) => !!(s && X.smiles[s] && bySlug(s));
  const nameOf = (s) => bySlug(s).name;
  const poss = (n) => (/s$/i.test(n) ? n + "’" : n + "’s");
  const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const plateUrl = (name) => `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/PNG?image_size=400x400`;

  const MODES = {
    skeleton: { label: "Skeleton", note: "Same atoms in the same rings and chains. Bond order is ignored, so a moved double bond still counts as shared." },
    exact: { label: "Exact", note: "Same atoms joined by the same bonds, single, double or aromatic." },
    shape: { label: "Shape only", note: "The bare framework: any atom, any bond. Useful when a ring swaps a carbon for a nitrogen." }
  };

  const icons = {
    chev: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    swap: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" aria-hidden="true"><path d="M8 4v15M4.5 8 8 4.5 11.5 8M16 20V5M12.5 16l3.5 3.5 3.5-3.5"/></svg>',
    reg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true"><circle cx="12" cy="12" r="6.2"/><path d="M12 1.5v21M1.5 12h21"/></svg>'
  };

  /* ---------- state ---------- */
  const q = new URLSearchParams(location.search);
  const first = (X.presets[0] || { items: [{}] }).items[0];
  // hideA, hideB and hideCore are the reader's view settings: they hold across every change of compound or mode.
  const state = { a: null, b: null, mode: MODES[q.get("mode")] ? q.get("mode") : "skeleton", t: 0, hideA: false, hideB: false, hideCore: false };
  state.a = has(q.get("a")) ? q.get("a") : has(first.a) ? first.a : Object.keys(X.smiles).find(has);
  const nearestOf = (s) => (X.nearest[s] || []).filter(([k]) => has(k));
  state.b = has(q.get("b")) && q.get("b") !== state.a ? q.get("b")
    : !q.get("a") && has(first.b) ? first.b
    : (nearestOf(state.a)[0] || [Object.keys(X.smiles).find((k) => has(k) && k !== state.a)])[0];

  /* ---------- the engine ---------- */
  let engine = null;
  function loadEngine() {
    if (!engine) {
      engine = new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = RD_BASE + "RDKit_minimal.js";
        s.async = true;
        s.onload = () => window.initRDKitModule({ locateFile: () => RD_BASE + "RDKit_minimal.wasm" }).then(resolve, reject);
        s.onerror = () => reject(new Error("script"));
        document.head.appendChild(s);
      }).catch((err) => { engine = null; throw err; });
    }
    return engine;
  }
  const cache = new Map();

  /* ---------- drawing ---------- */
  const L = 40;             // one bond, in drawing units
  const FONT = 0.36 * L;    // atom label size (matches the 14.4px set in style.css)
  const TRIM = 0.3 * L;     // how far a bond stops short of a labelled atom
  const VALENCE = { N: 3, O: 2, S: 2, P: 3, B: 3, Se: 2, F: 1, Cl: 1, Br: 1, I: 1 };
  const f1 = (n) => Math.round(n * 10) / 10;

  function prepare(P) {
    const pts = P.atoms.map((a) => ({ x: a.x * L, y: -a.y * L }));
    const adj = P.atoms.map(() => []);
    P.bonds.forEach((b, i) => { adj[b.a].push([b.b, i]); adj[b.b].push([b.a, i]); });
    const orderSum = P.atoms.map((_, i) => adj[i].reduce((s, [, bi]) => s + Math.min(P.bonds[bi].o, 3), 0));
    // shortest ring through each bond, for placing the inner line of ring double bonds
    const ringOf = P.bonds.map((b, bi) => {
      const prev = new Map([[b.a, -1]]), queue = [b.a];
      while (queue.length) {
        const i = queue.shift();
        if (i === b.b) break;
        for (const [j, k] of adj[i]) if (k !== bi && !prev.has(j)) { prev.set(j, i); queue.push(j); }
      }
      if (!prev.has(b.b)) return null;
      const ring = []; for (let i = b.b; i !== -1; i = prev.get(i)) ring.push(i);
      return ring.length <= 8 ? ring : null;
    });
    const labels = P.atoms.map((a, i) => {
      if (a.s === "C" && !a.chg && adj[i].length) return null;
      let v = VALENCE[a.s];
      if (v != null && /^(N|P|O|S)$/.test(a.s)) v += a.chg;
      const h = v != null ? Math.max(0, v - orderSum[i]) : 0;
      const mx = adj[i].reduce((s, [j]) => s + (pts[j].x - pts[i].x), 0);
      return { s: a.s, h, chg: a.chg, left: h > 0 && mx > 0.1 * L };
    });
    return { P, pts, adj, ringOf, labels };
  }

  function seg(p, q) { return `M${f1(p.x)} ${f1(p.y)}L${f1(q.x)} ${f1(q.y)}`; }

  function bondShapes(M, bi) {
    const { P, pts, adj, ringOf, labels } = M, b = P.bonds[bi];
    const p = pts[b.a], q = pts[b.b];
    const dx = q.x - p.x, dy = q.y - p.y, len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len, nx = -uy, ny = ux;
    const ta = labels[b.a] ? TRIM : 0, tb = labels[b.b] ? TRIM : 0;
    const at = (t, off) => ({ x: p.x + ux * t + nx * off, y: p.y + uy * t + ny * off });
    const line = (s, e, off) => seg(at(s, off), at(len - e, off));
    // the highlight follows the bond but stops short of atom labels, like the bond itself
    const out = { d: "", band: line(ta, tb, 0), wedge: "" };
    if (b.o === 1 && b.st === 1) {
      const w = 0.13 * L, s = at(ta, 0), e1 = at(len - tb, w), e2 = at(len - tb, -w);
      out.wedge = `M${f1(s.x)} ${f1(s.y)}L${f1(e1.x)} ${f1(e1.y)}L${f1(e2.x)} ${f1(e2.y)}Z`;
    } else if (b.o === 1 && b.st === 6) {
      const n = 6;
      for (let k = 1; k <= n; k++) { const t = ta + (len - ta - tb) * (k / n), w = 0.13 * L * (k / n); out.d += seg(at(t, w), at(t, -w)); }
    } else if (b.o === 2) {
      let side = 0;
      const ring = ringOf[bi];
      if (ring) {
        const c = ring.reduce((s, i) => ({ x: s.x + pts[i].x / ring.length, y: s.y + pts[i].y / ring.length }), { x: 0, y: 0 });
        side = Math.sign(nx * (c.x - p.x) + ny * (c.y - p.y)) || 1;
      } else {
        const others = [...adj[b.a].filter(([j]) => j !== b.b).map(([j]) => [j, p]), ...adj[b.b].filter(([j]) => j !== b.a).map(([j]) => [j, q])];
        const terminal = adj[b.a].length === 1 || adj[b.b].length === 1;
        if (!terminal && others.length) side = Math.sign(others.reduce((s, [j, o]) => s + nx * (pts[j].x - o.x) + ny * (pts[j].y - o.y), 0)) || 1;
      }
      if (side === 0) { const o = 0.085 * L; out.d += line(ta, tb, o) + line(ta, tb, -o); }
      else { const o = 0.17 * L * side, sh = 0.15 * L; out.d += line(ta, tb, 0) + line(Math.max(ta, sh), Math.max(tb, sh), o); }
    } else if (b.o === 3) {
      const o = 0.15 * L; out.d += line(ta, tb, 0) + line(ta, tb, o) + line(ta, tb, -o);
    } else {
      out.d += line(ta, tb, 0);
    }
    return out;
  }

  function labelSvg(M, i) {
    const lab = M.labels[i]; if (!lab) return "";
    const p = M.pts[i], y = f1(p.y + FONT * 0.34);
    const cw = FONT * 0.6, half = (lab.s.length * cw) / 2;
    const hTxt = lab.h ? `H${lab.h > 1 ? `<tspan class="sub" dy="${f1(FONT * 0.22)}">${lab.h}</tspan>` : ""}` : "";
    const chg = lab.chg ? `<tspan class="sup" dy="${f1(-FONT * 0.42)}">${Math.abs(lab.chg) > 1 ? Math.abs(lab.chg) : ""}${lab.chg > 0 ? "+" : "−"}</tspan>` : "";
    let s = `<text x="${f1(p.x)}" y="${y}" text-anchor="middle">${esc(lab.s)}${lab.left ? chg : ""}</text>`;
    if (hTxt) s += lab.left
      ? `<text x="${f1(p.x - half)}" y="${y}" text-anchor="end">${hTxt}</text>`
      : `<text x="${f1(p.x + half)}" y="${y}" text-anchor="start">${hTxt}${chg}</text>`;
    else if (chg && !lab.left) s = `<text x="${f1(p.x)}" y="${y}" text-anchor="middle">${esc(lab.s)}${chg}</text>`;
    return s;
  }

  function plateSvg(M, core, coreBonds, cls) {
    let rest = "", strong = "", band = "", wedges = "", strongW = "";
    M.P.bonds.forEach((b, bi) => {
      const s = bondShapes(M, bi), isCore = coreBonds.has(bi);
      if (isCore) { strong += s.d; strongW += s.wedge; band += s.band; } else { rest += s.d; wedges += s.wedge; }
    });
    const labs = M.P.atoms.map((_, i) => labelSvg(M, i)).join("");
    // The highlight is returned separately: both compounds' highlights are drawn beneath both drawings,
    // so one switch governs them alike, whichever drawings are showing.
    return { band: `<path class="band" d="${band}"/>`, body: `<g class="pl ${cls}">
      <path class="bd" d="${rest}"/><path class="wd" d="${wedges}"/>
      <path class="bd core" d="${strong}"/><path class="wd core" d="${strongW}"/>
      <g class="lab">${labs}</g>
    </g>` };
  }

  function box(M) {
    const pad = 0.42 * L;
    return M.pts.reduce((b, p) => ({ x0: Math.min(b.x0, p.x - pad), y0: Math.min(b.y0, p.y - pad), x1: Math.max(b.x1, p.x + pad), y1: Math.max(b.y1, p.y + pad) }), { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity });
  }

  /* ---------- page ---------- */
  let view = null; // the drawn comparison: { MA, MB, bA, bB, D, dy, aligned }
  let run = 0, anim = 0, slideIn = 0, dragging = false;

  function frame(t) {
    state.t = t;
    const svg = $("#cmp-svg"); if (!view || !svg) return;
    const { bA, bB, D, dy } = view;
    const ox = t * D, oy = view.aligned ? 0 : dy;
    const u = { x0: Math.min(bA.x0, bB.x0 + ox), y0: Math.min(bA.y0, bB.y0 + oy), x1: Math.max(bA.x1, bB.x1 + ox), y1: Math.max(bA.y1, bB.y1 + oy) };
    const m = 0.7 * L;
    let w = u.x1 - u.x0 + 2 * m, h = u.y1 - u.y0 + 2 * m, x0 = u.x0 - m, y0 = u.y0 - m;
    // Never enlarge past 1.5 pixels per drawing unit, so a small molecule keeps the same bond length,
    // line weight and lettering as a large one instead of swelling to fill the plate.
    const px = svg.getBoundingClientRect(), K = 1.5;
    if (px.width && px.height && Math.min(px.width / w, px.height / h) > K) {
      const W = px.width / K, H = px.height / K;
      x0 -= (W - w) / 2; y0 -= (H - h) / 2; w = W; h = H;
    }
    svg.setAttribute("viewBox", `${f1(x0)} ${f1(y0)} ${f1(w)} ${f1(h)}`);
    for (const g of ["#gB", "#bB"]) $(g).setAttribute("transform", `translate(${f1(ox)} ${f1(oy)})`);
    $("#cmp-plate").style.setProperty("--slip", (t * 14).toFixed(1) + "px");
    // The slider always reports the drawing, except under the reader's finger while they drag it.
    const r = $("#cmp-reg"); if (r && !dragging) r.value = Math.round(t * 100);
    if (r) r.setAttribute("aria-valuetext", t < 0.02 ? "In register" : t > 0.98 ? "Side by side" : `${Math.round(t * 100)}% apart`);
  }

  function animateTo(target, ms = 1100) {
    cancelAnimationFrame(anim);
    if (reduced()) { frame(target); return; }
    const from = state.t, t0 = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(2, -10 * k);
      frame(from + (target - from) * (k === 1 ? 1 : e));
      if (k < 1) anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
  }

  function selectHtml(id, value, label) {
    const groups = A.categories.map((c) => {
      const items = A.entries.filter((e) => e.category === c.id && has(e.slug)).sort((x, y) => x.name.localeCompare(y.name, "en", { numeric: true }));
      return items.length ? `<optgroup label="${esc(c.name)}">${items.map((e) => `<option value="${esc(e.slug)}"${e.slug === value ? " selected" : ""}>${esc(e.name)}</option>`).join("")}</optgroup>` : "";
    }).join("");
    return `<label class="select"><span class="sr-only">${label}</span><select class="field" id="${id}">${groups}</select>${icons.chev}</label>`;
  }

  function shellHtml() {
    return `
      <section class="wrap spread page-title">
        <div class="side"><p>Two skeletal drawings printed one over the other, locked in register on the skeleton they share.</p></div>
        <div class="main"><h1 class="lines"><span class="line"><span data-line>Compare structures</span></span></h1></div>
      </section>
      <section class="wrap spread cmp" aria-label="Comparison">
        <div class="side">
          <div class="cmp-controls" data-rise style="--i:0">
            <div class="cmp-pick">
              <div class="cmp-pick-row">
                <span class="cmp-key a" aria-hidden="true"></span>
                <div><span class="cmp-label" id="lab-a">Reference</span>${selectHtml("cmp-a", state.a, "Reference compound")}</div>
              </div>
              <button class="icon-btn cmp-swap" id="cmp-swap" type="button" aria-label="Swap the two compounds" title="Swap">${icons.swap}</button>
              <div class="cmp-pick-row">
                <span class="cmp-key b" aria-hidden="true"></span>
                <div><span class="cmp-label" id="lab-b">Compared with</span>${selectHtml("cmp-b", state.b, "Compound to compare")}</div>
              </div>
            </div>
            <fieldset class="cmp-mode">
              <legend class="cmp-label">Match by</legend>
              <div class="cmp-mode-row">${Object.entries(MODES).map(([k, m]) => `<label class="tab"><input class="sr-only" type="radio" name="cmp-mode" value="${k}"${k === state.mode ? " checked" : ""}><b>${m.label}</b></label>`).join("")}</div>
              <p class="cmp-mode-note" id="cmp-mode-note">${MODES[state.mode].note}</p>
            </fieldset>
            <div class="cmp-near" id="cmp-near"></div>
          </div>
        </div>
        <div class="main" data-rise style="--i:1">
          <figure class="cmp-plate" id="cmp-plate">
            <span class="cmp-regmark" aria-hidden="true"><span class="k">${icons.reg}</span><span class="g">${icons.reg}</span></span>
            <svg id="cmp-svg" role="img" aria-labelledby="cmp-cap" preserveAspectRatio="xMidYMid meet"><g id="bB" class="hl"></g><g id="bA" class="hl"></g><g id="gB"></g><g id="gA"></g></svg>
            <div class="cmp-msg" id="cmp-msg" role="status" aria-live="polite"></div>
            <div class="cmp-strip" id="cmp-strip"></div>
            <figcaption class="sr-only" id="cmp-cap"></figcaption>
          </figure>
          <div class="cmp-slide">
            <label for="cmp-reg">In register</label>
            <input type="range" id="cmp-reg" min="0" max="100" step="1" value="0" aria-label="Separate the two drawings">
            <span>Side by side</span>
          </div>
          <div class="cmp-read" id="cmp-read" aria-live="polite"></div>
        </div>
      </section>
      <section class="wrap spread entry-sec cmp-presets" aria-labelledby="presets-h">
        <div class="side"><h2 id="presets-h">Preset comparisons</h2><p class="note">Pairs where the overlay shows something worth seeing. The figure is fingerprint similarity, from 0 to 1.</p></div>
        <div class="main" id="cmp-presets"></div>
      </section>`;
  }

  const presetOf = (a, b) => { for (const g of X.presets) for (const p of g.items) if ((p.a === a && p.b === b) || (p.a === b && p.b === a)) return p; return null; };

  function presetsHtml() {
    return X.presets.map((g) => `
      <div class="cmp-group">
        <h3 class="month-h">${esc(g.group)}</h3>
        <div class="bands">${g.items.filter((p) => has(p.a) && has(p.b)).map((p) => `
          <button type="button" class="band cmp-preset" data-a="${esc(p.a)}" data-b="${esc(p.b)}">
            <span class="cmp-pair"><span class="ka">${esc(nameOf(p.a))}</span><span class="kb">${esc(nameOf(p.b))}</span></span>
            <span class="band-note">${esc(p.note)}</span>
            <span class="cmp-sim nums" aria-label="Fingerprint similarity ${p.sim.toFixed(2)}">${p.sim.toFixed(2)}</span>
          </button>`).join("")}
        </div>
      </div>`).join("");
  }

  function nearHtml() {
    const near = nearestOf(state.a);
    if (!near.length) return "";
    return `<h2 class="cmp-label">Closest to ${esc(nameOf(state.a))} in the codex</h2>
      <div class="chips">${near.map(([k, s]) => `<button type="button" class="chip${k === state.b ? " on" : ""}" data-b="${esc(k)}" aria-pressed="${k === state.b}">${esc(nameOf(k))} <span class="nums soft">${s.toFixed(2)}</span></button>`).join("")}</div>`;
  }

  function stripHtml() {
    const nA = esc(nameOf(state.a)), nB = esc(nameOf(state.b));
    const sw = (cls) => `<svg viewBox="0 0 28 10" width="28" height="10" aria-hidden="true" class="${cls}"><path class="band" d="M2 5H26"/><path class="ln" d="M2 5H26"/></svg>`;
    return `<button type="button" class="cmp-sw shared" data-tog="hideCore" aria-pressed="${!state.hideCore}" title="Highlight the shared skeleton, or not">${sw("sw-shared")}Shared skeleton</button>
      <button type="button" class="cmp-sw a" data-tog="hideA" aria-pressed="${!state.hideA}" title="Show or hide ${nA}">${sw("sw-a")}${nA}</button>
      <button type="button" class="cmp-sw b" data-tog="hideB" aria-pressed="${!state.hideB}" title="Show or hide ${nB}">${sw("sw-b")}${nB}</button>`;
  }

  function sync() {
    const u = new URLSearchParams({ a: state.a, b: state.b });
    if (state.mode !== "skeleton") u.set("mode", state.mode);
    history.replaceState(null, "", "?" + u.toString());
    $("#cmp-a").value = state.a; $("#cmp-b").value = state.b;
    $("#cmp-near").innerHTML = nearHtml();
    $("#cmp-strip").innerHTML = stripHtml();
    $("#cmp-mode-note").textContent = MODES[state.mode].note;
    $$(".cmp-preset").forEach((el) => {
      const on = (el.dataset.a === state.a && el.dataset.b === state.b) || (el.dataset.a === state.b && el.dataset.b === state.a);
      el.classList.toggle("on", on); el.setAttribute("aria-current", on ? "true" : "false");
    });
    applyView();
  }

  // Apply the view settings to the plate and the colour bar, from state, every time.
  function applyView() {
    const plate = $("#cmp-plate");
    plate.classList.toggle("hide-a", state.hideA);
    plate.classList.toggle("hide-b", state.hideB);
    plate.classList.toggle("no-core", state.hideCore);
    $$("#cmp-strip [data-tog]").forEach((b) => b.setAttribute("aria-pressed", String(!state[b.dataset.tog])));
  }

  function message(html, kind = "") {
    const m = $("#cmp-msg");
    m.className = "cmp-msg" + (kind ? " " + kind : "");
    m.innerHTML = html;
    m.hidden = !html;
  }

  function fallback() {
    const ea = bySlug(state.a), eb = bySlug(state.b);
    for (const g of ["#gA", "#gB", "#bA", "#bB"]) $(g).innerHTML = ""; view = null;
    message(`<div class="cmp-fallback">
        <figure><img src="${plateUrl(ea.pubchem)}" alt="Structure of ${esc(ea.name)}" width="400" height="400"><figcaption>${esc(ea.name)}</figcaption></figure>
        <figure><img src="${plateUrl(eb.pubchem)}" alt="Structure of ${esc(eb.name)}" width="400" height="400"><figcaption>${esc(eb.name)}</figcaption></figure>
      </div>
      <p>The matching engine could not load, so the drawings are shown separately. Check your connection, then <button type="button" class="text-btn" id="cmp-retry">try again</button>.</p>`, "error");
    $("#cmp-read").innerHTML = "";
    $("#cmp-retry").addEventListener("click", compareNow);
  }

  function readHtml(r) {
    const nA = nameOf(state.a), nB = nameOf(state.b), n = r.mcs.atoms;
    const pa = Math.round((n / r.counts.a) * 100), pb = Math.round((n / r.counts.b) * 100);
    const part = (cnt, tot, nm) => (cnt === tot ? `all ${tot} of ${esc(poss(nm))}` : `${cnt} of ${esc(poss(nm))} ${tot}`);
    let sentence;
    if (!r.aligned) sentence = `These two share no ring or chain of three atoms or more under this match, so they are shown side by side.`;
    else sentence = `They share a skeleton of <b>${n} atoms</b>: ${part(n, r.counts.a, nA)} and ${part(n, r.counts.b, nB)}.`;
    if (r.aligned && r.approximate) sentence += ` The shared atoms sit in rings of different shapes, so the drawings are fitted as closely as they go rather than locked together.`;
    if (r.mcs.canceled) sentence += ` The search stopped after two seconds, so a larger shared skeleton may exist.`;
    const preset = presetOf(state.a, state.b);
    return `
      <p class="cmp-sentence">${sentence}</p>
      ${preset ? `<p class="cmp-note">${esc(preset.note)}</p>` : ""}
      <table class="table cmp-table">
        <tr><th scope="row">Shared atoms</th><td class="nums">${r.aligned ? n : "None"}</td></tr>
        <tr><th scope="row"><span class="cmp-key a" aria-hidden="true"></span>${esc(nA)}</th><td class="nums">${r.aligned ? `${n} of ${r.counts.a} heavy atoms, ${pa}%` : `${r.counts.a} heavy atoms`}</td></tr>
        <tr><th scope="row"><span class="cmp-key b" aria-hidden="true"></span>${esc(nB)}</th><td class="nums">${r.aligned ? `${n} of ${r.counts.b} heavy atoms, ${pb}%` : `${r.counts.b} heavy atoms`}</td></tr>
        <tr><th scope="row">Fingerprint similarity</th><td class="nums">${r.tanimoto.toFixed(2)} <span class="soft">on a scale from 0 to 1 (Tanimoto, Morgan radius 2)</span></td></tr>
      </table>
      <p class="cmp-caveat">A shared structure is not a shared effect. One methyl group separates compounds with different risks, and drugs with almost nothing in common can act on the same target. Read each entry before drawing a conclusion.</p>
      <p class="cmp-links"><a class="link go" href="entry.html?slug=${encodeURIComponent(state.a)}">Read ${esc(nA)} →</a><a class="link go" href="entry.html?slug=${encodeURIComponent(state.b)}">Read ${esc(nB)} →</a></p>
      <p class="cmp-credit">Shared skeletons and fingerprints are computed in your browser with <a class="link-plain" href="https://www.rdkit.org/" target="_blank" rel="noopener">RDKit</a>, an open-source chemistry toolkit. Structures come from PubChem.</p>`;
  }

  function draw(r) {
    const MA = prepare(r.A), MB = prepare(r.B);
    const pa = plateSvg(MA, r.A.core, r.A.coreBonds, "pl-a"), pb = plateSvg(MB, r.B.core, r.B.coreBonds, "pl-b");
    $("#gA").innerHTML = pa.body; $("#gB").innerHTML = pb.body;
    $("#bA").innerHTML = pa.band; $("#bB").innerHTML = pb.band;
    const bA = box(MA), bB = box(MB);
    view = { bA, bB, aligned: r.aligned, D: bA.x1 - bB.x0 + 0.6 * L, dy: (bA.y0 + bA.y1) / 2 - (bB.y0 + bB.y1) / 2 };
    const nA = nameOf(state.a), nB = nameOf(state.b);
    $("#cmp-cap").textContent = r.aligned
      ? `${nA} drawn in ink and ${nB} in gold, overlaid on the ${r.mcs.atoms}-atom skeleton they share.`
      : `${nA} and ${nB} drawn side by side; they share no skeleton under this match.`;
    $("#cmp-read").innerHTML = readHtml(r);
    const reg = $("#cmp-reg");
    reg.disabled = !r.aligned;
    // a slide-in still pending from the previous pair must never move this one
    clearTimeout(slideIn); cancelAnimationFrame(anim);
    if (!r.aligned) { frame(1); return; }
    // the one moment: the gold plate slides in from the side and locks into register
    frame(reduced() ? 0 : 1);
    if (!reduced()) slideIn = setTimeout(() => animateTo(0, 1150), 140);
  }

  async function compareNow() {
    const id = ++run, key = `${state.a}|${state.b}|${state.mode}`;
    sync();
    $("#cmp-plate").classList.add("busy");
    let R;
    if (!cache.has(key)) {
      try {
        const slow = setTimeout(() => id === run && message(`<span class="cmp-load"></span><p>Loading the matching engine. It is about 7 MB and loads once.</p>`), 180);
        R = await loadEngine();
        clearTimeout(slow);
      } catch (_) { if (id === run) { $("#cmp-plate").classList.remove("busy"); fallback(); } return; }
      if (id !== run) return;
      message(`<span class="cmp-load"></span><p>Finding the shared skeleton…</p>`);
      await new Promise((res) => setTimeout(res, 30));
      if (id !== run) return;
      try { cache.set(key, CHEM.compare(R, X.smiles[state.a], X.smiles[state.b], state.mode, 2)); }
      catch (_) {
        $("#cmp-plate").classList.remove("busy");
        message(`<p>These two structures could not be compared. Try another pair.</p>`, "error");
        return;
      }
    }
    if (id !== run) return;
    message("");
    $("#cmp-plate").classList.remove("busy");
    draw(cache.get(key));
  }

  function setPair(a, b) {
    if (!has(a) || !has(b)) return;
    if (a === b) b = (nearestOf(a)[0] || [state.a])[0];
    state.a = a; state.b = b;
    compareNow();
  }

  function init() {
    const host = $("#compare");
    if (!host || !X || !CHEM) return;
    host.innerHTML = shellHtml();
    $("#cmp-presets").innerHTML = presetsHtml();
    $("#cmp-a").addEventListener("change", (e) => setPair(e.target.value, e.target.value === state.b ? state.a : state.b));
    $("#cmp-b").addEventListener("change", (e) => setPair(e.target.value === state.a ? state.b : state.a, e.target.value));
    $("#cmp-swap").addEventListener("click", () => setPair(state.b, state.a));
    $$('input[name="cmp-mode"]').forEach((r) => r.addEventListener("change", () => { state.mode = r.value; compareNow(); }));
    const reg = $("#cmp-reg");
    reg.addEventListener("input", (e) => { clearTimeout(slideIn); cancelAnimationFrame(anim); frame(+e.target.value / 100); });
    reg.addEventListener("pointerdown", () => { clearTimeout(slideIn); cancelAnimationFrame(anim); dragging = true; });
    addEventListener("pointerup", () => { dragging = false; });
    addEventListener("pointercancel", () => { dragging = false; });
    addEventListener("resize", () => frame(state.t));
    host.addEventListener("click", (e) => {
      const near = e.target.closest("#cmp-near [data-b]");
      if (near) { setPair(state.a, near.dataset.b); return; }
      const pre = e.target.closest(".cmp-preset");
      if (pre) {
        setPair(pre.dataset.a, pre.dataset.b);
        const top = $("#cmp-plate").getBoundingClientRect().top;
        if (top < 0 || top > innerHeight * 0.6) $(".cmp").scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
        return;
      }
      const tog = e.target.closest("#cmp-strip [data-tog]");
      if (tog) {
        const k = tog.dataset.tog;
        state[k] = !state[k];
        // one drawing always stays on the plate
        if (state.hideA && state.hideB) state[k === "hideA" ? "hideB" : "hideA"] = false;
        applyView();
      }
    });
    compareNow();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
