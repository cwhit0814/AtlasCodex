/* Atlas Codex: shared rendering for every page. Content lives in data.js and the entries-*.js files. */
(function () {
  const A = window.ATLAS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = (s) => String(s ?? "").replace(/<[^>]+>/g, "");
  // Escape a sentence and make sure it ends with terminal punctuation, so content reads consistently.
  const sent = (s) => { const t = String(s ?? "").trim(); return esc(t && !/[.!?]$/.test(t) ? t + "." : t); };
  const cat = (id) => A.categories.find((c) => c.id === id) || { id, name: id };
  const bySlug = (s) => A.entries.find((e) => e.slug === s);
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const entryUrl = (e) => "entry.html?slug=" + encodeURIComponent(e.slug);
  const plateUrl = (name, size = 300) => `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(name)}/PNG?image_size=${size}x${size}`;
  const compounds = () => A.entries.filter((e) => e.type === "compound");
  const hasRct = (e) => (e.trials || []).some((t) => t.evidence === "human rct");
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  const word = (n) => words[n] || String(n);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} }
  };
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
  // The referral code is added to any source link that does not already carry one.
  const withRef = (href, code) => {
    try { const u = new URL(href); if (code && !u.searchParams.has("ref")) u.searchParams.set("ref", code); return u.href; } catch (_) { return href; }
  };
  const mainSource = () => ((A.support && A.support.sources) || [])[0];
  const copyCode = (b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.code); } catch (_) { return; }
    const html = b.innerHTML;
    b.textContent = "Copied";
    setTimeout(() => (b.innerHTML = html), 1400);
  });
  // The gold support band: large on the home page, compact at the end of every entry.
  function supportBand(compact) {
    const s = mainSource();
    if (!s) return "";
    const shop = withRef(s.href, s.code);
    const actions = `<div class="gilt-actions">
        <a class="button ink" href="${esc(shop)}" target="_blank" rel="noopener sponsored">Shop ${esc(s.name)}</a>
        ${s.code ? `<button class="code-btn on-gilt" type="button" data-code="${esc(s.code)}">Copy code <b>${esc(s.code)}</b></button>` : ""}
      </div>`;
    if (compact) return `<div class="support-sheet">
        <div><h3>Keep the codex free</h3><p>Use code <b>${esc(s.code)}</b> at ${esc(s.name)}. It costs you nothing extra, and the codex earns a commission. A listing is not an endorsement.</p></div>
        ${actions}
      </div>`;
    return `<div class="gilt-band">
        <div class="gilt-copy">
          <h2 class="statement big" data-reveal>Keep the codex free.</h2>
          <p class="small-lines" data-reveal style="--i:1">Every entry here is free to read, with no account and no ads. If it has been useful, use code <b>${esc(s.code)}</b> at ${esc(s.name)}: it costs you nothing extra and keeps new entries coming.</p>
          <div data-reveal style="--i:2">${actions}</div>
          <p class="fine" data-reveal style="--i:3">${esc(A.support.disclosure)} <a href="support.html">See every source</a>.</p>
        </div>
        <a class="gilt-logo" href="${esc(shop)}" target="_blank" rel="noopener sponsored" data-reveal style="--i:1;${s.logoBg ? `background:${esc(s.logoBg)}` : ""}">${s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)} logo" width="600" height="400">` : `<span class="head">${esc(s.name)}</span>`}</a>
      </div>`;
  }

  const icons = {
    search: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    chev: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
  };

  /* ---------- evidence grades and status, set as words ---------- */
  const EV = {
    "human rct": ["Human RCT", "t-good"], established: ["Established", "t-good"], "human obs": ["Human observational", "t-obs"],
    animal: ["Animal", "t-weak"], "in vitro": ["In vitro", "t-weak"], anecdotal: ["Anecdotal", "t-weak"],
    contested: ["Contested", "t-weak"], unknown: ["Unknown", "t-plain"]
  };
  const ST = {
    approved: "t-good", investigational: "t-weak", "research only": "t-bad", discontinued: "t-plain", veterinary: "t-obs",
    "never approved": "t-bad", banned: "t-solid-bad", supplement: "t-weak", compounded: "t-obs", cosmetic: "t-plain"
  };
  const badge = (ev) => { if (!ev) return ""; const [label, tone] = EV[ev] || [cap(ev), "t-plain"]; return `<span class="ev ${tone}">${esc(label)}</span>`; };
  const statusTag = (s) => `<span class="st ${ST[String(s).toLowerCase()] || "t-plain"}">${esc(cap(String(s)))}</span>`;
  const meter = (n, cls = "") => `<span class="meter ${cls}" aria-hidden="true">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? "on" : ""}" data-v="${i}"></i>`).join("")}</span>`;
  const refsLine = (refs) => refs && refs.length ? `<p class="refs-line">References ${refs.map((r) => `<a href="#ref-${r}">${r}</a>`).join(", ")}</p>` : "";
  const selectBox = (id, label, options) => `<label class="select"><span class="sr-only">${label}</span><select class="field" id="${id}">${options}</select>${icons.chev}</label>`;

  /* ---------- theme (dark by default) ---------- */
  const root = document.documentElement;
  root.dataset.theme = store.get("atlas-theme") || "dark";
  function toggleTheme() {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    store.set("atlas-theme", root.dataset.theme);
    const b = $("#theme-toggle");
    b.innerHTML = root.dataset.theme === "dark" ? icons.sun : icons.moon;
    b.setAttribute("aria-label", root.dataset.theme === "dark" ? "Switch to the light theme" : "Switch to the dark theme");
  }

  /* ---------- entrances: each part rises once as its section arrives ---------- */
  let io;
  function reveal(scope = document) {
    const targets = $$("[data-reveal]:not(.is-in)", scope);
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) { targets.forEach((el) => el.classList.add("is-in")); return; }
    io = io || new IntersectionObserver((entries) => {
      for (const en of entries) if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    targets.forEach((el) => io.observe(el));
  }
  // Safety net: nothing may stay hidden if the observer never fires.
  window.addEventListener("load", () => setTimeout(() => $$("[data-reveal]:not(.is-in)").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-in");
  }), 2500));

  /* ---------- shell ---------- */
  function shell() {
    const page = document.body.dataset.page;
    const S = A.site;
    const here = (p) => (p === page ? ' aria-current="page"' : "");
    const header = $("#site-header");
    header.innerHTML = `
      <div class="top" id="top">
        <a class="wordmark" href="index.html">${esc(S.wordmark[0])} <span>${esc(S.wordmark[1])}</span></a>
        <nav class="top-nav" id="top-nav" aria-label="Main">
          <a class="link" href="codex.html"${here("codex")}>Codex</a>
          <a class="link" href="archive.html"${here("archive")}>Archive</a>
          <a class="link" href="codex.html?cat=guides">Guides</a>
          <a class="link" href="credits.html"${here("credits")}>Credits</a>
          <button class="link nav-theme" id="theme-toggle-2" type="button">Switch theme</button>
        </nav>
        <div class="top-tools">
          <button class="icon-btn" id="theme-toggle" type="button" aria-label="${root.dataset.theme === "dark" ? "Switch to the light theme" : "Switch to the dark theme"}">${root.dataset.theme === "dark" ? icons.sun : icons.moon}</button>
          <button class="menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="top-nav">Menu</button>
          <button class="button quiet" id="search-open" type="button" title="Search (${isMac ? "⌘K" : "Ctrl K"} or /)" aria-label="Search">${icons.search}<span class="wide">Search</span></button>
          <a class="button" href="support.html"${page === "support" ? ' aria-current="page"' : ""}>Support me</a>
        </div>
      </div>${(() => {
        const s = mainSource();
        return s && s.code ? `<div class="notice"><span>Support the codex: use code <b>${esc(s.code)}</b> at ${esc(s.name)}. It costs you nothing extra. <small>The codex earns a commission.</small></span><a class="go link" href="${esc(withRef(s.href, s.code))}" target="_blank" rel="noopener sponsored">Shop ${esc(s.name)} →</a></div>` : "";
      })()}`;

    const footer = $("#site-footer");
    footer.className = "foot";
    footer.innerHTML = `
      <p class="foot-name" aria-hidden="true">${esc(S.wordmark[0])} <span>${esc(S.wordmark[1])}</span></p>
      <div class="foot-row">
        <div class="foot-places">
          <button type="button" class="link" data-act="search">Search the codex</button>
          <button type="button" class="link" data-act="ask">Ask the archive</button>
          <a class="link" href="support.html">Support the codex</a>
        </div>
        <div class="foot-cols">
          <div><h3>Browse</h3><ul class="plain"><li><a class="link" href="codex.html">Every entry</a></li><li><a class="link" href="archive.html">Archive</a></li><li><a class="link" href="codex.html?cat=guides">Guides</a></li></ul></div>
          <div><h3>The codex</h3><ul class="plain"><li><a class="link" href="about.html">About</a></li><li><a class="link" href="about.html#grades">Evidence grades</a></li><li><a class="link" href="credits.html">Credits</a></li></ul></div>
          <div><h3>Elsewhere</h3><ul class="plain"><li><a class="link" href="support.html">Support me</a></li><li><a class="link" href="about.html#contact">Request an entry</a></li></ul></div>
        </div>
      </div>
      <p class="foot-disclaimer">${esc(S.disclaimer)}</p>
      <p class="foot-credits muted">Structure drawings from <a href="https://pubchem.ncbi.nlm.nih.gov/">PubChem</a>, US National Library of Medicine, public domain.</p>
      <div class="foot-legal muted"><span>© ${new Date().getFullYear()} ${esc(S.title)} · <span class="nums">${A.entries.length}</span> entries</span><a class="link" href="#top">Back to top</a></div>`;

    const fab = document.createElement("button");
    fab.className = "ask-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "Ask the archive");
    fab.innerHTML = `${icons.sparkle}<span>Ask the archive</span>`;
    fab.addEventListener("click", () => openAsk());
    document.body.appendChild(fab);

    $("#theme-toggle").addEventListener("click", toggleTheme);
    $("#theme-toggle-2").addEventListener("click", toggleTheme);
    $("#search-open").addEventListener("click", () => openSearch());
    $("#menu-btn").addEventListener("click", (ev) => {
      const open = $("#top").classList.toggle("open");
      ev.currentTarget.setAttribute("aria-expanded", open);
      ev.currentTarget.textContent = open ? "Close" : "Menu";
    });
    $$("[data-act]", footer).forEach((b) => b.addEventListener("click", () => (b.dataset.act === "ask" ? openAsk() : openSearch())));
    document.addEventListener("keydown", (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") { closeSearch(); closeAsk(); }
    });
    $$("[data-count='entries']").forEach((n) => (n.textContent = A.entries.length));
  }

  /* ---------- search ---------- */
  const haystack = (e) => [e.name, e.summary, e.class, cat(e.category).name, ...(e.aliases || []), ...(e.tags || [])].join(" ").toLowerCase();
  const matches = (e, q) => !q || q.toLowerCase().split(/\s+/).every((w) => haystack(e).includes(w));

  function openSearch(initial = "") {
    let d = $("#search-dialog");
    if (!d) {
      d = document.createElement("div");
      d.id = "search-dialog";
      d.className = "overlay";
      d.innerHTML = `<div class="search-panel" role="dialog" aria-modal="true" aria-label="Search the codex">
        <div class="search-row">${icons.search}<input id="search-input" type="search" placeholder="Search compounds, aliases, tags" autocomplete="off" aria-label="Search the codex"><kbd>Esc</kbd></div>
        <ul id="search-results"></ul></div>`;
      document.body.appendChild(d);
      d.addEventListener("click", (e) => { if (e.target === d) closeSearch(); });
      const input = $("#search-input");
      const render = () => {
        const q = input.value.trim();
        const hits = (q ? A.entries.filter((e) => matches(e, q)) : A.entries).slice(0, 9);
        $("#search-results").innerHTML = hits.map((e) => `<li><a href="${entryUrl(e)}"><span class="r-name">${esc(e.name)}</span><span class="r-class">${esc(e.class || e.summary)}</span><span class="r-cat">${esc(cat(e.category).name)}</span></a></li>`).join("") ||
          `<li class="empty">No matches for “${esc(q)}”. Try <button class="text-btn" id="ask-instead" type="button">asking the archive</button> instead.</li>`;
        const ai = $("#ask-instead");
        if (ai) ai.onclick = () => { closeSearch(); openAsk(q); };
      };
      input.addEventListener("input", render);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") { const a = $("#search-results a"); if (a) location.href = a.href; } });
      d._render = render;
    }
    d.hidden = false;
    const input = $("#search-input");
    input.value = initial;
    d._render();
    input.focus();
  }
  function closeSearch() { const d = $("#search-dialog"); if (d) d.hidden = true; }

  /* ---------- ask the archive (local keyword retrieval over entry text; not an AI model) ---------- */
  const STOP = new Set("a an and are as at be but by can do does for from has have how i if in is it its me my of on or should so than that the their them then there these they this to was what when where which who why will with would you your about any much many does did".split(" "));
  function entryText(e) {
    const parts = [e.name, (e.aliases || []).join(" "), e.class, e.summary, e.names, e.structure];
    (e.risks || []).forEach((r) => parts.push(`${r.system}: ${r.text}. ${r.detail || ""}`));
    (e.activity || []).forEach((a) => parts.push(`${a.title}: ${a.summary}. ${a.detail || ""}`));
    (e.trials || []).forEach((t) => parts.push(`${t.title}. ${t.body} ${t.note || ""}`));
    (e.sections || []).forEach((s) => parts.push(`${s.heading}. ${s.body}`));
    if (e.noTrials) parts.push(e.noTrials);
    const m = (A.monitoring || {})[e.slug];
    if (m) parts.push("Monitoring. " + (m.markers || []).map(([k, v]) => `${k}: ${v}.`).join(" ") + " " + (m.watch || []).join(" "));
    const d = (A.dosing || {})[e.slug];
    if (d) parts.push("Dosing. " + d.rows.map(([k, v]) => `${k}: ${v}.`).join(" "));
    if (e.pk) parts.push("Pharmacokinetics. " + e.pk.rows.map(([k, v]) => `${k}: ${v}.`).join(" ") + " " + (e.pk.note || ""));
    return strip(parts.filter(Boolean).join(" \n "));
  }
  function ask(q) {
    const terms = q.toLowerCase().replace(/[^a-z0-9\-+ ]/g, " ").split(/\s+/).filter((t) => t.length > 1 && !STOP.has(t));
    if (!terms.length) return [];
    return A.entries.map((e) => {
      const text = entryText(e), low = text.toLowerCase(), name = (e.name + " " + (e.aliases || []).join(" ")).toLowerCase();
      let score = 0;
      terms.forEach((t) => { if (name.includes(t)) score += 8; score += Math.min((low.match(new RegExp(t.replace(/[-+]/g, "\\$&"), "g")) || []).length, 5); });
      const sentences = text.split(/(?<=[.!?])\s+|\n/).filter((s) => s.length > 30);
      const best = sentences.map((s) => ({ s, n: terms.filter((t) => s.toLowerCase().includes(t)).length })).sort((a, b) => b.n - a.n).slice(0, 2).filter((x) => x.n).map((x) => x.s.trim());
      return { e, score, best };
    }).filter((r) => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  }
  function openAsk(initial = "") {
    let p = $("#ask-panel");
    if (!p) {
      p = document.createElement("div");
      p.id = "ask-panel";
      p.className = "ask-panel";
      p.setAttribute("role", "dialog");
      p.setAttribute("aria-label", "Ask the archive");
      p.innerHTML = `
        <div class="ask-head"><span>Ask the archive</span><button class="icon-btn" id="ask-close" type="button" aria-label="Close">${icons.close}</button></div>
        <div class="ask-body" id="ask-body"><p class="muted">Ask in plain words. Answers are sentences pulled from codex entries by keyword, with a link to each source. It is a search, not an AI model.</p></div>
        <form class="ask-form" id="ask-form"><input id="ask-input" placeholder="Which compounds raise heart rate?" autocomplete="off" aria-label="Your question"><button class="button">Ask</button></form>`;
      document.body.appendChild(p);
      $("#ask-close").onclick = closeAsk;
      $("#ask-form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        const q = $("#ask-input").value.trim();
        if (!q) return;
        const res = ask(q);
        const body = $("#ask-body");
        body.insertAdjacentHTML("beforeend", `<div class="ask-q">${esc(q)}</div>` + (res.length
          ? `<div class="ask-a">${res.map((r) => `<div class="ask-hit"><a class="link" href="${entryUrl(r.e)}">${esc(r.e.name)}</a>${r.best.map((s) => `<p>${esc(s)}</p>`).join("") || `<p>${esc(r.e.summary)}</p>`}</div>`).join("")}</div>`
          : `<div class="ask-a"><p>Nothing in the codex covers that yet. <a class="link-plain" href="about.html#contact">Request an entry</a>.</p></div>`));
        body.scrollTop = body.scrollHeight;
        $("#ask-input").value = "";
      });
    }
    p.classList.add("open");
    $("#ask-input").value = initial;
    $("#ask-input").focus();
    if (initial) $("#ask-form").requestSubmit();
  }
  function closeAsk() { const p = $("#ask-panel"); if (p) p.classList.remove("open"); }

  /* ---------- the banded row used everywhere ---------- */
  function band(e, i = 0, opts = {}) {
    const note = opts.note ?? (e.class || e.summary);
    return `<a class="band" href="${entryUrl(e)}" data-reveal style="--i:${Math.min(i, 6)}">
      ${opts.lead ?? statusTag(e.status)}
      <span class="band-text"><span class="band-name">${esc(e.name)}</span><span class="band-note">${esc(note)}</span></span>
      ${opts.tail ?? ""}
    </a>`;
  }

  /* ---------- pages ---------- */
  const pages = {
    home() {
      $("#hero-search").addEventListener("click", () => openSearch());

      // The live figure: how many compounds have a randomized trial in people, recounted per field.
      const all = compounds();
      const fields = A.categories.filter((c) => all.some((e) => e.category === c.id));
      const picker = $("#picker");
      picker.innerHTML = [`<button class="pick" type="button" data-cat="all" aria-pressed="true">All fields<span class="n nums">${all.length}</span></button>`,
        ...fields.map((c) => `<button class="pick" type="button" data-cat="${c.id}" aria-pressed="false">${esc(c.name)}<span class="n nums">${all.filter((e) => e.category === c.id).length}</span></button>`)].join("");
      const count = (id) => {
        const set = id === "all" ? all : all.filter((e) => e.category === id);
        const r = set.filter(hasRct).length, none = set.filter((e) => !(e.trials || []).length).length;
        const pct = set.length ? Math.round((r / set.length) * 100) : 0;
        const where = id === "all" ? "in the codex" : `in ${cat(id).name}`;
        const claim = pct === 50 ? "Half have a randomized human trial." : pct > 50 ? "Most have a randomized human trial." : "Most have no randomized human trial.";
        const n = set.length;
        const rest = none === 0 ? "Every one has at least some human trial on record."
          : none === n ? (n === 1 ? "It has no human trial on record at all." : "None of them has a human trial on record at all.")
          : `${none} ${none === 1 ? "has" : "have"} no human trial on record at all.`;
        return { pct, claim, caption: `Of ${n} ${n === 1 ? "compound" : "compounds"} ${where}, ${r} ${r === 1 ? "has" : "have"} at least one randomized controlled trial in people. ${rest}` };
      };
      const show = (id) => {
        const c = count(id);
        const v = $("#fig-v");
        v.textContent = c.pct;
        v.classList.remove("swap"); void v.offsetWidth; v.classList.add("swap");
        $("#fig-cap").textContent = c.caption;
        $("#tested-title").textContent = c.claim;
        $$(".pick", picker).forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === id));
      };
      picker.addEventListener("click", (ev) => { const b = ev.target.closest(".pick"); if (b) show(b.dataset.cat); });
      show("all");

      // Browse by field: tabs on the left, the field's entries as bands on the right.
      const withEntries = A.categories.filter((c) => A.entries.some((e) => e.category === c.id));
      $("#field-count").textContent = `${cap(word(withEntries.length))} fields,`;
      const tabs = [{ id: "recent", name: "Recently updated", n: 8 }, ...withEntries.map((c) => ({ id: c.id, name: c.name, n: A.entries.filter((e) => e.category === c.id).length }))];
      $("#tabs").innerHTML = tabs.map((t, i) => `<button class="tab" role="tab" type="button" id="tab-${t.id}" data-id="${t.id}" aria-selected="${i === 0}"><b>${esc(t.name)}</b><span class="n nums">${t.n}</span></button>`).join("");
      const fill = (id) => {
        $$("#tabs .tab").forEach((b) => b.setAttribute("aria-selected", b.dataset.id === id));
        $("#bands").setAttribute("aria-labelledby", "tab-" + id);
        const list = id === "recent"
          ? [...A.entries].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 8)
          : A.entries.filter((e) => e.category === id).sort((a, b) => a.name.localeCompare(b.name));
        const shown = list.slice(0, 10);
        $("#bands").innerHTML = shown.map((e, i) => band(e, i, id === "recent" ? { note: `Updated ${fmtDate(e.updated)} · ${e.class || cat(e.category).name}` } : {})).join("") +
          (list.length > shown.length ? `<a class="band" href="codex.html?cat=${id}" data-reveal style="--i:6"><span></span><span class="band-text"><span class="band-name go">See all ${list.length} in ${esc(cat(id).name)}</span></span></a>` : "");
        reveal($("#bands"));
      };
      $("#tabs").addEventListener("click", (ev) => { const b = ev.target.closest(".tab"); if (b) fill(b.dataset.id); });
      fill("recent");

      // The range of the record: one table, from large outcome trials to none.
      const rows = ["semaglutide", "clenbuterol", "bpc-157"].map(bySlug).filter(Boolean);
      $("#range").innerHTML = `<caption class="sr-only">Three entries compared</caption>
        <thead><tr><th scope="col">Entry</th><th scope="col">Status</th><th scope="col">Human trials</th><th scope="col">Half-life</th><th scope="col">In short</th></tr></thead>
        <tbody>${rows.map((e) => {
          const hl = e.pk && e.pk.rows.find(([k]) => /half-life/i.test(k));
          const n = (e.trials || []).length;
          return `<tr>
            <th scope="row"><a class="link" href="${entryUrl(e)}">${esc(e.name)}</a><small class="muted">${esc(e.class || "")}</small></th>
            <td data-label="Status">${statusTag(e.status)}</td>
            <td data-label="Human trials" class="nums">${n ? n : "None"}</td>
            <td data-label="Half-life">${hl ? esc(hl[1].replace(/\s*\(.*\)/, "")) : "Not published"}</td>
            <td class="sum">${sent(e.summary)}</td>
          </tr>`;
        }).join("")}</tbody>`;

      $("#support-band").innerHTML = supportBand(false);
      $$("#support-band .code-btn").forEach(copyCode);
    },

    codex() {
      const params = new URLSearchParams(location.search);
      const state = { q: params.get("q") || "", cat: params.get("cat") || "all", status: "all", sort: "name" };
      const statuses = [...new Set(A.entries.map((e) => e.status))];
      $("#codex-filters").innerHTML = `
        <label><span class="sr-only">Filter entries</span><input class="field" id="codex-q" type="search" placeholder="Filter by name, alias or tag"></label>
        ${selectBox("status-filter", "Filter by status", `<option value="all">Any status</option>` + statuses.map((s) => `<option value="${esc(s)}">${esc(cap(s))}</option>`).join(""))}
        ${selectBox("sort", "Sort", `<option value="name">A to Z</option><option value="updated">Recently updated</option>`)}
        <p class="count nums" id="codex-count" aria-live="polite"></p>`;
      const q = $("#codex-q");
      q.value = state.q;
      const cats = A.categories.filter((c) => A.entries.some((e) => e.category === c.id));
      $("#cat-chips").innerHTML = [`<button class="tab" type="button" data-cat="all"><b>All</b><span class="n nums">${A.entries.length}</span></button>`, ...cats.map((c) => `<button class="tab" type="button" data-cat="${c.id}"><b>${esc(c.name)}</b><span class="n nums">${A.entries.filter((e) => e.category === c.id).length}</span></button>`)].join("");
      function render() {
        $$("#cat-chips .tab").forEach((b) => b.setAttribute("aria-selected", b.dataset.cat === state.cat));
        const list = A.entries
          .filter((e) => (state.cat === "all" || e.category === state.cat) && (state.status === "all" || e.status === state.status) && matches(e, state.q))
          .sort((a, b) => state.sort === "updated" ? b.updated.localeCompare(a.updated) : a.name.localeCompare(b.name));
        $("#codex-count").textContent = `${list.length} ${list.length === 1 ? "entry" : "entries"}`;
        $("#codex-list").innerHTML = list.length ? list.map((e, i) => band(e, i % 8)).join("") : `<p class="empty-state">No entries match these filters. <button class="text-btn" type="button" id="clear-filters">Clear them</button>.</p>`;
        const cf = $("#clear-filters");
        if (cf) cf.onclick = () => { state.q = ""; state.cat = "all"; state.status = "all"; q.value = ""; $("#status-filter").value = "all"; render(); };
        reveal($("#codex-list"));
        const url = new URL(location);
        state.q ? url.searchParams.set("q", state.q) : url.searchParams.delete("q");
        state.cat !== "all" ? url.searchParams.set("cat", state.cat) : url.searchParams.delete("cat");
        history.replaceState(null, "", url);
      }
      q.addEventListener("input", () => { state.q = q.value.trim(); render(); });
      $("#cat-chips").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { state.cat = b.dataset.cat; render(); } });
      $("#status-filter").addEventListener("change", (e) => { state.status = e.target.value; render(); });
      $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
      render();
    },

    archive() {
      const state = { q: "", type: "all", sort: "desc", field: "updated" };
      $("#archive-filters").innerHTML = `
        <label><span class="sr-only">Search the archive</span><input class="field" id="archive-q" type="search" placeholder="Search the archive"></label>
        ${selectBox("archive-type", "Type", `<option value="all">All types</option><option value="compound">Compounds</option><option value="article">Guides</option>`)}
        ${selectBox("archive-field", "Date", `<option value="updated">By last updated</option><option value="added">By date added</option>`)}
        <button class="button quiet" id="archive-sort" type="button">Newest first</button>
        <p class="count nums" id="archive-count" aria-live="polite"></p>`;
      function render() {
        const list = A.entries
          .filter((e) => (state.type === "all" || e.type === state.type) && matches(e, state.q))
          .sort((a, b) => (state.sort === "desc" ? -1 : 1) * a[state.field].localeCompare(b[state.field]));
        $("#archive-count").textContent = `${list.length} ${list.length === 1 ? "record" : "records"}`;
        const groups = new Map();
        list.forEach((e) => {
          const key = new Date(e[state.field] + "T00:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" });
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(e);
        });
        $("#archive-list").innerHTML = list.length ? [...groups].map(([month, items]) => `
          <section class="month-block">
            <h2 class="month-h" data-reveal>${month} <span class="nums">${items.length} ${items.length === 1 ? "record" : "records"}</span></h2>
            <div class="bands">${items.map((e, i) => band(e, i % 8, {
              lead: `<time class="nums" datetime="${e[state.field]}">${fmtDate(e[state.field])}</time>`,
              note: `${e.type === "article" ? "Guide" : "Compound"} · ${cat(e.category).name}`,
              tail: statusTag(e.status)
            })).join("")}</div>
          </section>`).join("") : `<p class="empty-state">Nothing in the archive matches.</p>`;
        reveal($("#archive-list"));
      }
      $("#archive-q").addEventListener("input", (e) => { state.q = e.target.value.trim(); render(); });
      $("#archive-type").addEventListener("change", (e) => { state.type = e.target.value; render(); });
      $("#archive-field").addEventListener("change", (e) => { state.field = e.target.value; render(); });
      $("#archive-sort").addEventListener("click", (e) => {
        state.sort = state.sort === "desc" ? "asc" : "desc";
        e.currentTarget.textContent = state.sort === "desc" ? "Newest first" : "Oldest first";
        render();
      });
      render();
    },

    entry() {
      const e = bySlug(new URLSearchParams(location.search).get("slug"));
      const host = $("#entry");
      if (!e) {
        host.innerHTML = `<div class="wrap spread page-title"><div class="side"><p>That page isn't in the codex.</p></div><div class="main"><h1>Entry not found</h1><p style="margin-top:1.5rem"><a class="button" href="codex.html">Browse every entry</a></p></div></div>`;
        return;
      }
      document.title = `${e.name} · ${A.site.title}`;
      const sec = (title, note, body) => `<section class="wrap spread entry-sec"><div class="side"><h2 data-reveal>${esc(title)}</h2>${note ? `<p class="note" data-reveal style="--i:1">${note}</p>` : ""}</div><div class="main" data-reveal style="--i:1">${body}</div></section>`;
      const out = [];
      
      // head: the plate and the facts in the side zone, the name and the lede on the axis
      const plate = e.pubchem ? `<figure class="plate-card" data-rise style="--i:0"><img alt="Structure drawing of ${esc(e.name)}" src="${plateUrl(e.pubchem, 500)}" width="500" height="500" onerror="this.closest('figure').remove()"></figure>` : "";
      const intro = e.type === "article"
        ? `<div class="entry-intro" data-rise style="--i:2"><p>${esc(e.summary)}</p></div>`
        : `<div class="entry-intro" data-rise style="--i:2">
            ${e.names ? `<div><h2>Names and origin</h2><p>${e.names}</p></div>` : ""}
            ${e.structure ? `<div><h2>Structure</h2><p>${e.structure}</p></div>` : ""}
            ${!e.names && !e.structure ? `<p>${esc(e.summary)}</p>` : ""}
          </div>`;
      out.push(`<header class="wrap spread entry-head" style="padding-top:clamp(2rem,5vw,4rem)">
        <div class="side entry-side">
          ${plate}
          <div class="meta-list" data-rise style="--i:1">
            ${e.type === "compound" ? `<span>${statusTag(e.status)}</span>` : ""}
            ${e.class ? `<span>${esc(e.class)}</span>` : ""}
            <span>Filed under <a class="link-plain" href="codex.html?cat=${e.category}">${esc(cat(e.category).name)}</a></span>
          </div>
          ${e.type === "compound" ? buyBlock(e) : ""}
        </div>
        <div class="main">
          <h1 class="lines"><span class="line"><span data-line>${esc(e.name)}</span></span></h1>
          ${intro}
        </div>
      </header>`);

      // profile
      if (e.profile) {
        const mine = store.get("atlas-rate-" + e.slug) || {};
        const hasMine = Object.keys(mine).length > 0;
        out.push(sec("Profile", `Editorial scores from 1 to 5, relative to similar compounds. Rows in red are ones where higher is worse.`, `
          <div class="sheet profile" id="profile">
            ${e.profile.rows.map((r) => `
              <div class="p-wrap">
                <div class="p-row${r.neg ? " neg" : ""}"><span class="p-label">${esc(r.label)}</span>${meter(r.score, r.neg ? "red" : "")}<span class="p-score nums">${r.score} of 5</span></div>
                <div class="p-mine" data-label="${esc(r.label)}" ${hasMine ? "" : "hidden"}><span>Your score</span>${meter(mine[r.label] || 0, "mine")}<span class="p-score nums">${mine[r.label] ? mine[r.label] + " of 5" : "Not set"}</span></div>
              </div>`).join("")}
            ${e.profile.note ? `<p class="soft small" style="margin-top:1rem">${sent(e.profile.note)}</p>` : ""}
          </div>
          <div class="sheet rate-bar"><span>${hasMine ? "You have scored this compound. Your scores stay in this browser and are not part of the codex's assessment." : "Score it yourself. Your scores stay in this browser and are not part of the codex's assessment."}</span><button class="button quiet" id="rate-btn" type="button">${hasMine ? "Edit my scores" : "Add my scores"}</button></div>`));
      }

      // pharmacokinetics
      if (e.pk) {
        out.push(sec("Pharmacokinetics", `Source quality ${badge(e.pk.evidence)}`, `
          <div class="sheet">
            <table class="table"><tbody>${e.pk.rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${sent(v)}</td></tr>`).join("")}</tbody></table>
            ${e.pk.note ? `<p class="soft" style="margin-top:1rem;font-size:1rem">${sent(e.pk.note)}</p>` : ""}${refsLine(e.pk.refs)}
          </div>`));
      }

      // dosing (from approved labels and published trials only)
      if (e.type === "compound") {
        const d = (A.dosing || {})[e.slug];
        const fixed = "These are the amounts studied or approved, recorded for reference. They are not a recommendation, and they are not adjusted for any individual.";
        if (d) {
          out.push(sec("Dosing in labels and trials", `${esc(d.source || "Source")} ${badge(d.evidence)}`, `
            <div class="sheet">
              <table class="table"><tbody>${d.rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${sent(v)}</td></tr>`).join("")}</tbody></table>
              <p class="soft" style="margin-top:1rem;font-size:1rem">${d.note ? sent(d.note) + " " : ""}${fixed}</p>${refsLine(d.refs)}
            </div>`));
        } else {
          const special = (A.site.noDoseBySlug || {})[e.slug];
          out.push(sec("Dosing in labels and trials", "Only regulator labels and doses a published trial gave are recorded here.", `
            <div class="sheet no-dose"><p><strong>${special ? "No dose listed here." : "No established human dose."}</strong> ${esc(special || A.site.noDose[e.status] || A.site.noDose.default)}</p></div>`));
        }
      }

      // risks
      if (e.risks && e.risks.length) {
        out.push(sec("Risk and monitoring", "Each risk is graded by the evidence behind it. Open one for the detail.", `<div class="risks">${e.risks.map((r) => `
          <div class="risk lv-${esc(r.level)}">
            <div class="risk-top"><span class="risk-sys">${esc(r.system)}<span class="lv">${esc(cap(r.level))} risk</span></span>${r.detail ? `<button class="plus" type="button" aria-expanded="false" aria-label="More about ${esc(r.system)}">+</button>` : ""}</div>
            <p>${sent(r.text)}</p>
            ${badge(r.evidence)}
            ${r.detail ? `<div class="risk-detail" hidden><p>${sent(r.detail)}</p>${refsLine(r.refs)}</div>` : ""}
          </div>`).join("")}</div>`));
      }

      // monitoring
      const mon = (A.monitoring || {})[e.slug];
      if (mon && ((mon.markers && mon.markers.length) || (mon.watch && mon.watch.length))) {
        out.push(sec("Monitoring", "Which markers this compound makes worth watching. Target ranges are left out on purpose.", `
          <div class="sheet">
            ${mon.markers && mon.markers.length ? `<table class="table"><tbody>${mon.markers.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${sent(v)}</td></tr>`).join("")}</tbody></table>` : ""}
            ${mon.watch && mon.watch.length ? `<div class="watch"><h3>Warning signs</h3><ul>${mon.watch.map((w) => `<li>${sent(w)}</li>`).join("")}</ul></div>` : ""}
            <p class="soft" style="margin-top:1rem;font-size:1rem">${mon.note ? sent(mon.note) + " " : ""}What a result means depends on the person, the lab and the assay. Take results to a clinician.</p>
          </div>`));
      }

      // activity
      if (e.activity && e.activity.length) {
        out.push(sec("Mechanism and receptor activity", "Choose a mechanism to read the detail beside it.", `
          <div class="act">
            <div class="act-list">${e.activity.map((a, i) => `
              <button class="act-item${i === 0 ? " sel" : ""}" type="button" data-i="${i}" aria-pressed="${i === 0}">
                <span class="act-top"><span>${esc(a.title)}</span>${badge(a.evidence)}</span>
                <span class="act-sum">${sent(a.summary)}</span>
              </button>`).join("")}</div>
            <div class="act-detail" id="act-detail" aria-live="polite"></div>
          </div>`));
      }

      // trials
      if (e.type === "compound") {
        const n = (e.trials || []).length;
        out.push(sec("Human clinical record", n ? `${cap(word(n))} ${n === 1 ? "trial" : "trials"} recorded, each with the editor's reading.` : "", n
          ? e.trials.map((t) => `
              <article class="sheet trial">
                <h3>${esc(t.title)} ${badge(t.evidence)}</h3>
                <p class="trial-meta">${t.meta.map(esc).join(" · ")}</p>
                <p>${sent(t.body)}</p>
                ${t.note ? `<p class="editor-note"><b>Editor's note.</b> ${sent(t.note)}</p>` : ""}
                ${refsLine(t.refs)}
              </article>`).join("")
          : `<div class="sheet"><p>${sent(e.noTrials || "No controlled human trials are recorded for this compound.")}</p>${refsLine(e.noTrialsRefs)}</div>`));
      }

      // article sections
      if (e.sections) e.sections.forEach((s) => out.push(sec(s.heading, "", `<div class="sheet prose">${s.body}</div>`)));

      // references
      const ids = new Set();
      [...(e.risks || []), ...(e.activity || []), ...(e.trials || []), { refs: e.noTrialsRefs }, e.pk || {}, (A.dosing || {})[e.slug] || {}].forEach((x) => (x.refs || []).forEach((r) => ids.add(r)));
      if (ids.size) {
        const sorted = [...ids].sort((a, b) => a - b);
        out.push(`<div class="ornament" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 1.5 13.6 10.4 22.5 12 13.6 13.6 12 22.5 10.4 13.6 1.5 12 10.4 10.4Z"/><circle cx="12" cy="12" r="10.2" stroke-width=".55"/></svg></div>`);
        out.push(sec("References", "Linked to a PubMed search where the source is a paper.", `<div class="sheet"><ol class="refs-list nums">${sorted.map((id) => `
          <li id="ref-${id}" value="${id}">${esc(A.references[id])}${/announcement|prescribing information|federal register|product characteristics|prohibited list/i.test(A.references[id]) ? "" : ` <a class="link-plain" href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(A.references[id].split(". ").slice(1, 2).join(""))}" target="_blank" rel="noopener">PubMed</a>`}</li>`).join("")}</ol></div>`));
      }

      const related = (e.related || []).map(bySlug).filter(Boolean);
      if (related.length) out.push(sec("Related", "", `<div class="bands">${related.map((r, i) => band(r, i)).join("")}</div>`));
      if (mainSource()) out.push(sec("Support", "", supportBand(true)));
      out.push(sec("Record", "", `<p class="updated nums">Added ${fmtDate(e.added)}. Last updated ${fmtDate(e.updated)}.</p><p class="disclaimer" style="margin-top:1rem">${esc(A.site.disclaimer)}</p>`));
      host.innerHTML = out.join("");
      $(".code-btn", host).forEach(copyCode);

      // interactions
      $$(".risk .plus").forEach((b) => b.addEventListener("click", () => {
        const d = b.closest(".risk").querySelector(".risk-detail");
        d.hidden = !d.hidden;
        b.textContent = d.hidden ? "+" : "−";
        b.setAttribute("aria-expanded", !d.hidden);
      }));
      if (e.activity && e.activity.length) {
        const show = (i) => {
          const a = e.activity[i];
          $$(".act-item").forEach((x) => { x.classList.toggle("sel", +x.dataset.i === i); x.setAttribute("aria-pressed", +x.dataset.i === i); });
          $("#act-detail").innerHTML = `<h3>${esc(a.title)}</h3><p>${sent(a.summary)} ${badge(a.evidence)}</p>${a.detail ? `<p>${sent(a.detail)}</p>` : ""}${refsLine(a.refs)}`;
        };
        $$(".act-item").forEach((x) => x.addEventListener("click", () => {
          show(+x.dataset.i);
          if (matchMedia("(max-width: 56rem)").matches) $("#act-detail").scrollIntoView({ behavior: "smooth", block: "nearest" });
        }));
        show(0);
      }
      const rb = $("#rate-btn");
      if (rb) rb.addEventListener("click", () => {
        const prof = $("#profile");
        const editing = prof.classList.toggle("editing");
        $$(".p-mine", prof).forEach((m) => (m.hidden = false));
        rb.textContent = editing ? "Done" : "Edit my scores";
        if (!editing) $(".rate-bar span").textContent = "You have scored this compound. Your scores stay in this browser and are not part of the codex's assessment.";
      });
      $$(".p-mine .meter i").forEach((sq) => sq.addEventListener("click", () => {
        if (!$("#profile").classList.contains("editing")) return;
        const row = sq.closest(".p-mine"), v = +sq.dataset.v;
        const mine = store.get("atlas-rate-" + e.slug) || {};
        mine[row.dataset.label] = v;
        store.set("atlas-rate-" + e.slug, mine);
        $$(".meter i", row).forEach((x) => x.classList.toggle("on", +x.dataset.v <= v));
        row.lastElementChild.textContent = v + " of 5";
      }));
    },

    support() {
      const S = A.support;
      $("#support-title").textContent = S.title;
      $("#support-intro").textContent = S.intro;
      $("#support-disclosure").textContent = S.disclosure;
      const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
      const tags = (label, list) => list && list.length ? `<div class="tag-group"><h3>${label}</h3><div class="chips">${list.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div>` : "";
      $("#sources").innerHTML = S.sources.map((s) => `
        <article class="wrap spread person">
          <div class="side"><a class="source-logo" data-reveal style="${s.logoBg ? `background:${esc(s.logoBg)}` : ""}" href="${esc(s.href)}" target="_blank" rel="noopener sponsored">${s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)} logo">` : `<span class="head">${esc(initials(s.name))}</span>`}</a></div>
          <div class="main" data-reveal style="--i:1">
            <h2>${esc(s.name)}</h2>
            ${s.blurb ? `<p class="known">${esc(s.blurb)}</p>` : ""}
            <div class="person-actions">
              <a class="button" href="${esc(s.href)}" target="_blank" rel="noopener sponsored">Shop ${esc(s.name)}</a>
              ${s.code ? `<button class="code-btn" type="button" data-code="${esc(s.code)}">Copy code <b>${esc(s.code)}</b></button>` : ""}
            </div>
            ${tags("Attributes", s.attributes)}
            ${tags("What they sell", s.sells)}
            ${s.popular && s.popular.length ? `<div class="tag-group"><h3>Popular, with the codex entry</h3><div class="chips">${s.popular.map((p) => p.slug && bySlug(p.slug) ? `<a class="chip go" href="entry.html?slug=${encodeURIComponent(p.slug)}">${esc(p.name)}</a>` : `<span class="chip">${esc(p.name)}</span>`).join("")}</div></div>` : ""}
          </div>
        </article>`).join("");
      $(".code-btn").forEach(copyCode);
    },

    credits() {
      const C = A.credits;
      $("#credits-title").textContent = C.title;
      $("#credits-intro").textContent = C.intro;
      $("#credits-note").textContent = C.note;
      // Two-letter monogram: initials for multi-word names, first two characters otherwise.
      const initials = (n) => {
        const w = n.replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).filter(Boolean);
        return (w.length > 1 ? w.map((x) => x[0]).join("") : (w[0] || "?").slice(0, 2)).slice(0, 2).toUpperCase();
      };
      $("#creators").innerHTML = C.people.map((p) => `
        <article class="wrap spread person">
          <div class="side">
            ${p.image
              ? `<figure class="person-pic" data-reveal><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"${p.imagePos ? ` style="object-position:${esc(p.imagePos)}"` : ""}></figure>`
              : `<div class="person-pic mono" data-reveal style="background:${esc(p.accent)}" aria-hidden="true">${esc(initials(p.name))}</div>`}
          </div>
          <div class="main" data-reveal style="--i:1">
            <h2>${esc(p.name)}</h2>
            <p class="handle">${esc(p.handle)}${p.memorial ? ` · <span class="memorial">${esc(p.memorial)}</span>` : ""}</p>
            <p class="known">${sent(p.known)}</p>
            <p class="text">${sent(p.text)}</p>
            ${p.topics && p.topics.length ? `<div class="chips">${p.topics.map(([l, h]) => `<a class="chip" href="${esc(h)}">${esc(l)}</a>`).join("")}</div>` : ""}
            <div class="person-actions"><a class="link go" href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.linkLabel || "Visit")} ↗</a></div>
          </div>
        </article>`).join("");
    },

    about() {}
  };

  // "Buy from" block on compound pages. Links live in js/buy.js; sources in support.sources.
  function buyBlock(e) {
    const sources = (A.support && A.support.sources) || [];
    const items = ((A.buy || {})[e.slug] || [])
      .map((b) => ({ ...b, src: sources.find((s) => s.id === b.source) }))
      .filter((b) => b.src && b.href);
    if (!items.length) {
      const s = mainSource();
      if (!s) return `<div class="buy" data-rise style="--i:2"><span class="buy-title">Buy from</span><span class="buy-none">No current listing</span></div>`;
      return `<div class="buy" data-rise style="--i:2">
        <span class="buy-title">No product listing for this compound yet.</span>
        <a class="buy-support" href="${esc(withRef(s.href, s.code))}" target="_blank" rel="noopener sponsored"><strong>Support the codex at ${esc(s.name)}</strong><span>Use code <b>${esc(s.code)}</b>. The codex earns a commission.</span></a>
      </div>`;
    }
    const codes = [...new Set(items.map((b) => b.src.code).filter(Boolean))];
    return `<div class="buy" data-rise style="--i:2">
      <span class="buy-title">Buy from${codes.length ? `, code <b>${codes.map(esc).join(", ")}</b>` : ""}. The codex earns a commission.</span>
      ${items.map((b) => `
        <a class="buy-btn" href="${esc(withRef(b.href, b.src.code))}" target="_blank" rel="noopener sponsored">
          <span class="buy-logo" style="${b.src.logoBg ? `background:${esc(b.src.logoBg)}` : ""}">${b.src.logo ? `<img src="${esc(b.src.logo)}" alt="">` : esc(b.src.name.slice(0, 2).toUpperCase())}</span>
          <span>${esc(b.label || b.src.name)}</span>
        </a>`).join("")}
    </div>`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    shell();
    (pages[document.body.dataset.page] || (() => {}))();
    reveal();
  });
})();
