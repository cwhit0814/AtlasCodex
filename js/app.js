/* Atlas Codex — shared rendering for every page. Content lives in data.js. */
(function () {
  const A = window.ATLAS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = (s) => String(s ?? "").replace(/<[^>]+>/g, "");
  const cat = (id) => A.categories.find((c) => c.id === id) || { id, name: id };
  const bySlug = (s) => A.entries.find((e) => e.slug === s);
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const entryUrl = (e) => "entry.html?slug=" + encodeURIComponent(e.slug);
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} }
  };
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);

  const icons = {
    search: '<svg viewBox="0 0 24 24" width="16" height="16"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
    chev: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>',
    form: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
    book: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 21V5"/></svg>'
  };

  /* ---------- theme (dark by default) ---------- */
  const root = document.documentElement;
  root.dataset.theme = store.get("atlas-theme") || "dark";
  function toggleTheme() {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    store.set("atlas-theme", root.dataset.theme);
    $("#theme-toggle").innerHTML = root.dataset.theme === "dark" ? icons.sun : icons.moon;
  }

  /* ---------- shell ---------- */
  function shell() {
    const page = document.body.dataset.page;
    const S = A.site;
    const cats = A.categories.filter((c) => c.id !== "guides");
    const menu = (label, active, items) => `
      <div class="menu">
        <button class="menu-btn${active ? " active" : ""}" aria-haspopup="true">${label} ${icons.chev}</button>
        <div class="menu-list">${items.map(([href, t, sub]) => `<a href="${href}"><span>${t}</span>${sub ? `<small>${sub}</small>` : ""}</a>`).join("")}</div>
      </div>`;
    $("#site-header").innerHTML = `
      <div class="header-inner">
        <a class="wordmark" href="index.html">${esc(S.wordmark[0])} <span>${esc(S.wordmark[1])}</span></a>
        <nav class="nav">
          ${menu("BROWSE", ["codex", "archive", "entry"].includes(page), [
            ["codex.html", "database", "every entry, filterable"],
            ["archive.html", "archive", "chronological record"],
            ...cats.map((c) => [`codex.html?cat=${c.id}`, c.name])
          ])}
          ${menu("COMMUNITY", page === "about", [
            ["codex.html?cat=guides", "guides", "how to read the evidence"],
            ["about.html", "about", "standards and disclaimer"],
            ["about.html#contact", "request an entry"]
          ])}
          <a class="nav-link${page === "archive" ? " active" : ""}" href="archive.html">ARCHIVE</a>
        </nav>
        <div class="header-tools">
          <button class="search-pill" id="search-open">${icons.search}<span>search the archive</span><kbd>${isMac ? "⌘K" : "Ctrl K"}</kbd></button>
          <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">${root.dataset.theme === "dark" ? icons.sun : icons.moon}</button>
          ${S.headerButtons.map((b) => `<a class="pill-btn${b.primary ? " primary" : ""}${page === "support" && b.href === "support.html" ? " current" : ""}" href="${b.href}">${esc(b.label)}</a>`).join("")}
        </div>
      </div>`;
    $("#site-footer").innerHTML = `
      <div class="footer-inner">
        <div class="wordmark">${esc(S.wordmark[0])} <span>${esc(S.wordmark[1])}</span></div>
        <p>${esc(S.tagline)}</p>
        <p class="disclaimer">${esc(S.disclaimer)}</p>
        <p class="mono-sm">© ${new Date().getFullYear()} ${esc(S.title)} · ${A.entries.length} entries</p>
      </div>`;

    const fab = document.createElement("button");
    fab.className = "ask-fab";
    fab.setAttribute("aria-label", "Ask the archive");
    fab.innerHTML = icons.sparkle;
    fab.addEventListener("click", () => openAsk());
    document.body.appendChild(fab);

    $$(".menu-btn").forEach((b) => b.addEventListener("click", (e) => {
      e.stopPropagation();
      const m = b.parentElement, open = m.classList.contains("open");
      $$(".menu.open").forEach((x) => x.classList.remove("open"));
      if (!open) m.classList.add("open");
    }));
    document.addEventListener("click", () => $$(".menu.open").forEach((x) => x.classList.remove("open")));
    $("#theme-toggle").addEventListener("click", toggleTheme);
    $("#search-open").addEventListener("click", () => openSearch());
    document.addEventListener("keydown", (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") { closeSearch(); closeAsk(); }
    });
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
      d.innerHTML = `<div class="search-panel" role="dialog" aria-label="Search">
        <div class="search-row">${icons.search}<input id="search-input" type="search" placeholder="search compounds, aliases, tags…" autocomplete="off"><kbd>esc</kbd></div>
        <ul id="search-results"></ul></div>`;
      document.body.appendChild(d);
      d.addEventListener("click", (e) => { if (e.target === d) closeSearch(); });
      const input = $("#search-input");
      const render = () => {
        const q = input.value.trim();
        const hits = (q ? A.entries.filter((e) => matches(e, q)) : A.entries).slice(0, 9);
        $("#search-results").innerHTML = hits.map((e) => `<li><a href="${entryUrl(e)}"><span class="r-name">${esc(e.name)}</span><span class="r-class">${esc(e.class || e.summary)}</span><span class="r-cat">${esc(cat(e.category).name)}</span></a></li>`).join("") ||
          `<li class="empty">no matches for “${esc(q)}” — try <button class="link" id="ask-instead">asking instead</button></li>`;
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

  /* ---------- ask the archive (local retrieval over entry text) ---------- */
  const STOP = new Set("a an and are as at be but by can do does for from has have how i if in is it its me my of on or should so than that the their them then there these they this to was what when where which who why will with would you your about any much many does did".split(" "));
  function entryText(e) {
    const parts = [e.name, (e.aliases || []).join(" "), e.class, e.summary, e.names, e.structure];
    (e.risks || []).forEach((r) => parts.push(`${r.system}: ${r.text}. ${r.detail || ""}`));
    (e.activity || []).forEach((a) => parts.push(`${a.title}: ${a.summary}. ${a.detail || ""}`));
    (e.trials || []).forEach((t) => parts.push(`${t.title}. ${t.body} ${t.note || ""}`));
    (e.sections || []).forEach((s) => parts.push(`${s.heading}. ${s.body}`));
    if (e.noTrials) parts.push(e.noTrials);
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
      p.innerHTML = `
        <div class="ask-head"><span>${icons.sparkle} ask the archive</span><button class="icon-btn" id="ask-close" aria-label="Close">✕</button></div>
        <div class="ask-body" id="ask-body"><p class="mono-sm">questions, not keywords. answers are pulled from codex entries, with links to the source.</p></div>
        <form class="ask-form" id="ask-form"><input id="ask-input" placeholder="e.g. which compounds raise heart rate?" autocomplete="off"><button class="pill-btn primary">ask</button></form>`;
      document.body.appendChild(p);
      $("#ask-close").onclick = closeAsk;
      $("#ask-form").addEventListener("submit", (ev) => {
        ev.preventDefault();
        const q = $("#ask-input").value.trim();
        if (!q) return;
        const res = ask(q);
        const body = $("#ask-body");
        body.insertAdjacentHTML("beforeend", `<div class="ask-q">${esc(q)}</div>` + (res.length
          ? `<div class="ask-a">${res.map((r) => `<div class="ask-hit"><a href="${entryUrl(r.e)}">${esc(r.e.name)} →</a>${r.best.map((s) => `<p>${esc(s)}</p>`).join("") || `<p>${esc(r.e.summary)}</p>`}</div>`).join("")}</div>`
          : `<div class="ask-a"><p>nothing in the codex covers that yet. <a href="about.html#contact">request an entry</a>.</p></div>`));
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

  /* ---------- shared bits ---------- */
  const badge = (ev) => ev ? `<span class="badge ev-${ev.replace(/\s+/g, "-")}">${esc(ev)}</span>` : "";
  const statusTag = (s) => `<span class="status st-${String(s).toLowerCase().replace(/\s+/g, "-")}">${esc(s)}</span>`;
  const meter = (n, cls = "") => `<span class="meter ${cls}">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? "on" : ""}" data-v="${i}"></i>`).join("")}</span>`;
  const refsLine = (refs) => refs && refs.length ? `<p class="refs">Referenced: ${refs.map((r) => `<a href="#ref-${r}">${r}</a>`).join(", ")}</p>` : "";

  /* ---------- pages ---------- */
  const pages = {
    home() {
      const S = A.site;
      const compounds = A.entries.filter((e) => e.type === "compound");
      const tick = S.ticker.map((t) => `<span>${esc(t.replace("{count}", A.entries.length))}</span>`).join("");
      $("#ticker").innerHTML = `<div class="ticker-track"><div class="ticker-run">${tick}${tick}</div><div class="ticker-run" aria-hidden="true">${tick}${tick}</div></div><a href="${S.tickerLink.href}">${esc(S.tickerLink.label)}</a>`;
      $("#hero-title").textContent = S.heroTitle;
      $("#hero-sub").innerHTML = S.heroLines.map(esc).join("<br>");
      const hs = $("#hero-search");
      hs.placeholder = `search ${compounds.length} compounds, guides, mechanisms…`;
      $("#hero-kbd").textContent = isMac ? "⌘K" : "Ctrl K";
      hs.addEventListener("focus", () => { hs.blur(); openSearch(); });
      $("#ask-btn").addEventListener("click", () => openAsk());
      $("#chips").innerHTML = A.categories.map((c) => {
        const n = A.entries.filter((e) => e.category === c.id).length;
        return n ? `<a class="chip" href="codex.html?cat=${c.id}">${esc(c.name)} <span>${n}</span></a>` : "";
      }).join("");
      $("#cta").innerHTML = S.cards.map((c) => `
        <a class="cta cta-${c.tone}" href="${c.href}">
          <span class="cta-icon">${icons[c.icon] || icons.book}</span>
          <span><strong>${esc(c.title)}</strong><span>${esc(c.text)}</span></span>
        </a>`).join("");
      const recent = [...A.entries].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 8);
      $("#recent").innerHTML = recent.map(row).join("");
    },

    codex() {
      const params = new URLSearchParams(location.search);
      const state = { q: params.get("q") || "", cat: params.get("cat") || "all", status: "all", sort: "name" };
      const q = $("#codex-q");
      q.value = state.q;
      const cats = A.categories.filter((c) => A.entries.some((e) => e.category === c.id));
      $("#cat-chips").innerHTML = [`<button class="chip" data-cat="all">all <span>${A.entries.length}</span></button>`, ...cats.map((c) => `<button class="chip" data-cat="${c.id}">${esc(c.name)} <span>${A.entries.filter((e) => e.category === c.id).length}</span></button>`)].join("");
      const statuses = [...new Set(A.entries.map((e) => e.status))];
      $("#status-filter").innerHTML = `<option value="all">any status</option>` + statuses.map((s) => `<option value="${esc(s)}">${esc(s.toLowerCase())}</option>`).join("");
      function render() {
        $$("#cat-chips .chip").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === state.cat));
        const list = A.entries
          .filter((e) => (state.cat === "all" || e.category === state.cat) && (state.status === "all" || e.status === state.status) && matches(e, state.q))
          .sort((a, b) => state.sort === "updated" ? b.updated.localeCompare(a.updated) : a.name.localeCompare(b.name));
        $("#codex-count").textContent = `${list.length} ${list.length === 1 ? "entry" : "entries"}`;
        $("#codex-list").innerHTML = list.length ? list.map(row).join("") : `<p class="empty-state">no entries match these filters.</p>`;
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
      function render() {
        const list = A.entries
          .filter((e) => (state.type === "all" || e.type === state.type) && matches(e, state.q))
          .sort((a, b) => (state.sort === "desc" ? -1 : 1) * a[state.field].localeCompare(b[state.field]));
        $("#archive-count").textContent = `${list.length} ${list.length === 1 ? "record" : "records"}`;
        const groups = new Map();
        list.forEach((e) => {
          const key = new Date(e[state.field] + "T00:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" }).toLowerCase();
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(e);
        });
        $("#archive-list").innerHTML = list.length ? [...groups].map(([month, items]) => `
          <section class="archive-month">
            <h2 class="label">${month} <span>${items.length}</span></h2>
            <ol class="panel">${items.map((e) => `
              <li><time datetime="${e[state.field]}">${fmtDate(e[state.field])}</time>
                <a href="${entryUrl(e)}">${esc(e.name)}</a>
                <span class="mono-sm">${e.type === "article" ? "guide" : "compound"}</span>
                <span class="mono-sm dim">${esc(cat(e.category).name)}</span></li>`).join("")}</ol>
          </section>`).join("") : `<p class="empty-state">nothing in the archive matches.</p>`;
      }
      $("#archive-q").addEventListener("input", (e) => { state.q = e.target.value.trim(); render(); });
      $("#archive-type").addEventListener("change", (e) => { state.type = e.target.value; render(); });
      $("#archive-field").addEventListener("change", (e) => { state.field = e.target.value; render(); });
      $("#archive-sort").addEventListener("click", (e) => {
        state.sort = state.sort === "desc" ? "asc" : "desc";
        e.currentTarget.textContent = state.sort === "desc" ? "newest first ↓" : "oldest first ↑";
        render();
      });
      render();
    },

    entry() {
      const e = bySlug(new URLSearchParams(location.search).get("slug"));
      const host = $("#entry");
      if (!e) {
        host.innerHTML = `<a class="back" href="codex.html">← back to database</a><div class="empty-state"><h1>entry not found</h1><p>that page isn't in the codex. <a href="codex.html">browse all entries →</a></p></div>`;
        return;
      }
      document.title = `${e.name} · ${A.site.title}`;
      const out = [];
      out.push(`<a class="back" href="codex.html${e.category ? "?cat=" + e.category : ""}">← back to database</a>`);

      // intro
      const img = e.pubchem ? `<figure class="structure"><img alt="${esc(e.name)} structure" loading="lazy" src="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(e.pubchem)}/PNG?image_size=300x300" onerror="this.closest('figure').remove()"></figure>` : "";
      const intro = e.type === "article"
        ? `<div class="intro"><span class="label">summary</span><p>${esc(e.summary)}</p></div>`
        : `<div class="intro">
            <div class="meta-row">${statusTag(e.status)}<span class="mono-sm">${esc(e.class || "")}</span><a class="mono-sm" href="codex.html?cat=${e.category}">${esc(cat(e.category).name)}</a></div>
            ${e.names ? `<span class="label">names and origin</span><p>${e.names}</p>` : ""}
            ${e.structure ? `<span class="label">structure</span><p>${e.structure}</p>` : ""}
            ${!e.names && !e.structure ? `<p>${esc(e.summary)}</p>` : ""}
          </div>`;
      out.push(`<header class="entry-head">${img}<h1>${esc(e.name)}</h1>${intro}</header>`);

      // profile
      if (e.profile) {
        const mine = store.get("atlas-rate-" + e.slug) || {};
        const hasMine = Object.keys(mine).length > 0;
        out.push(`<h2 class="label">profile</h2><div class="panel profile" id="profile">
          ${e.profile.rows.map((r) => `
            <div class="p-row${r.neg ? " neg" : ""}">
              <div class="p-main"><span>${esc(r.label)}</span>${meter(r.score, r.neg ? "red" : "")}<span class="mono-sm">${r.score}/5</span></div>
              <div class="p-mine" data-label="${esc(r.label)}" ${hasMine ? "" : "hidden"}><span class="mono-sm violet">● your score</span>${meter(mine[r.label] || 0, "violet")}<span class="mono-sm violet">${mine[r.label] ? mine[r.label] + "/5" : "–"}</span></div>
            </div>`).join("")}
          <div class="rate-bar"><span>${hasMine ? "you have scored this compound." : "score this compound yourself."}</span><button class="rate-btn" id="rate-btn">${hasMine ? "edit scores" : "rate"}</button></div>
          <div class="p-notes">${e.profile.note ? `<p>${esc(e.profile.note)}</p>` : ""}<p>Your scores are saved only in this browser. They are not part of the codex's assessment.</p></div>
        </div>`);
      }

      // risks
      if (e.risks && e.risks.length) {
        out.push(`<h2 class="label">risk and monitoring</h2><div class="risk-grid">${e.risks.map((r) => `
          <div class="risk lv-${r.level}">
            <div class="risk-top"><span class="label sm"><i></i>${esc(r.system)} <b>${esc(r.level)}</b></span>${r.detail ? `<button class="plus" aria-label="More">+</button>` : ""}</div>
            <p>${esc(r.text)}</p>
            ${badge(r.evidence)}
            ${r.detail ? `<div class="risk-detail" hidden><p>${esc(r.detail)}</p>${refsLine(r.refs)}</div>` : ""}
          </div>`).join("")}</div>`);
      }

      // activity
      if (e.activity && e.activity.length) {
        out.push(`<h2 class="label">mechanism and receptor activity</h2><div class="panel act">
          <div class="act-list">${e.activity.map((a, i) => `
            <button class="act-item${i === 0 ? " sel" : ""}" data-i="${i}">
              <span class="act-top"><span>${esc(a.title)}</span>${badge(a.evidence)}</span>
              <span class="act-sum">${esc(a.summary)}</span>
            </button>`).join("")}</div>
          <div class="act-detail" id="act-detail"></div>
        </div>`);
      }

      // trials
      if (e.type === "compound") {
        out.push(`<h2 class="label">human clinical record</h2>`);
        out.push(e.trials && e.trials.length
          ? `<div class="panel trials">${e.trials.map((t) => `
              <article class="trial">
                <h3>${esc(t.title)} ${badge(t.evidence)}</h3>
                <p class="trial-meta">${t.meta.map(esc).join(" / ")}</p>
                <p>${esc(t.body)}</p>
                ${t.note ? `<div class="note">${esc(t.note)}</div>` : ""}
                ${refsLine(t.refs)}
              </article>`).join("")}</div>`
          : `<div class="panel empty-record"><p>${esc(e.noTrials || "No controlled human trials are recorded for this compound.")}</p>${refsLine(e.noTrialsRefs)}</div>`);
      }

      // article sections
      if (e.sections) {
        out.push(e.sections.map((s) => `<h2 class="label">${esc(s.heading)}</h2><div class="panel prose">${s.body}</div>`).join(""));
      }

      // references
      const ids = new Set();
      [...(e.risks || []), ...(e.activity || []), ...(e.trials || []), { refs: e.noTrialsRefs }].forEach((x) => (x.refs || []).forEach((r) => ids.add(r)));
      if (ids.size) {
        out.push(`<h2 class="label">references</h2><ol class="panel refs-list">${[...ids].sort((a, b) => a - b).map((id) => `
          <li id="ref-${id}"><span class="mono-sm">${id}</span><span>${esc(A.references[id])}${/announcement|prescribing information/i.test(A.references[id]) ? "" : ` <a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(A.references[id].split(". ").slice(1, 2).join(""))}" target="_blank" rel="noopener">pubmed ↗</a>`}</span></li>`).join("")}</ol>`);
      }

      const related = (e.related || []).map(bySlug).filter(Boolean);
      if (related.length) out.push(`<h2 class="label">related</h2><div class="panel">${related.map(row).join("")}</div>`);
      out.push(`<p class="mono-sm dim updated">added ${fmtDate(e.added)} · last updated ${fmtDate(e.updated)}</p><p class="disclaimer">${esc(A.site.disclaimer)}</p>`);
      host.innerHTML = out.join("");

      // interactions
      $$(".risk .plus").forEach((b) => b.addEventListener("click", () => {
        const d = b.closest(".risk").querySelector(".risk-detail");
        d.hidden = !d.hidden;
        b.textContent = d.hidden ? "+" : "−";
      }));
      if (e.activity && e.activity.length) {
        const show = (i) => {
          const a = e.activity[i];
          $$(".act-item").forEach((x) => x.classList.toggle("sel", +x.dataset.i === i));
          $("#act-detail").innerHTML = `<h3>${esc(a.title)}</h3><p class="serif">${esc(a.summary)} ${badge(a.evidence)}</p>${a.detail ? `<p class="serif">${esc(a.detail)}</p>` : ""}${refsLine(a.refs)}`;
        };
        $$(".act-item").forEach((x) => x.addEventListener("click", () => {
          show(+x.dataset.i);
          if (matchMedia("(max-width: 860px)").matches) $("#act-detail").scrollIntoView({ behavior: "smooth", block: "nearest" });
        }));
        show(0);
      }
      const rb = $("#rate-btn");
      if (rb) rb.addEventListener("click", () => {
        const prof = $("#profile");
        const editing = prof.classList.toggle("editing");
        $$(".p-mine", prof).forEach((m) => (m.hidden = false));
        rb.textContent = editing ? "done" : "edit scores";
        if (!editing) $(".rate-bar span", prof).textContent = "you have scored this compound.";
      });
      $$(".p-mine .meter i").forEach((sq) => sq.addEventListener("click", () => {
        if (!$("#profile").classList.contains("editing")) return;
        const row = sq.closest(".p-mine"), v = +sq.dataset.v;
        const mine = store.get("atlas-rate-" + e.slug) || {};
        mine[row.dataset.label] = v;
        store.set("atlas-rate-" + e.slug, mine);
        $$(".meter i", row).forEach((x) => x.classList.toggle("on", +x.dataset.v <= v));
        row.lastElementChild.textContent = v + "/5";
      }));
    },

    support() {
      const S = A.support;
      $("#support-eyebrow").textContent = S.eyebrow;
      $("#support-title").textContent = S.title;
      $("#support-intro").textContent = S.intro;
      $("#support-disclosure").textContent = S.disclosure;
      const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
      const tags = (label, list, cls) => list && list.length ? `<span class="label sm">${label}</span><div class="tag-list">${list.map((t) => `<span class="${cls}">${esc(t)}</span>`).join("")}</div>` : "";
      $("#sources").innerHTML = S.sources.map((s) => `
        <article class="source">
          <a class="source-logo" style="${s.logoBg ? `background:${esc(s.logoBg)}` : ""}" href="${esc(s.href)}" target="_blank" rel="noopener sponsored">${s.logo ? `<img src="${esc(s.logo)}" alt="${esc(s.name)} logo">` : `<span>${esc(initials(s.name))}</span>`}</a>
          <h2>${esc(s.name)}</h2>
          ${s.code ? `<button class="code-chip" data-code="${esc(s.code)}" title="Copy code">code <b>${esc(s.code)}</b></button>` : ""}
          ${s.blurb ? `<p>${esc(s.blurb)}</p>` : ""}
          ${tags("attributes", s.attributes, "attr")}
          ${tags("what they sell", s.sells, "sell")}
          ${s.popular && s.popular.length ? `<span class="label sm">popular</span><div class="tag-list">${s.popular.map((p) => p.slug && bySlug(p.slug) ? `<a class="sell linked" href="entry.html?slug=${encodeURIComponent(p.slug)}" title="Read the codex entry">${esc(p.name)} ↗</a>` : `<span class="sell">${esc(p.name)}</span>`).join("")}</div>` : ""}
          <a class="shop-btn" href="${esc(s.href)}" target="_blank" rel="noopener sponsored">SHOP NOW</a>
        </article>`).join("");
      $$(".code-chip").forEach((b) => b.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(b.dataset.code); } catch (_) { return; }
        const html = b.innerHTML;
        b.innerHTML = "copied ✓";
        setTimeout(() => (b.innerHTML = html), 1400);
      }));
    },

    about() {}
  };

  function row(e) {
    return `<a class="row" href="${entryUrl(e)}">
      <span class="row-name">${esc(e.name)}${e.aliases && e.aliases.length ? `<small>${esc(e.aliases.slice(0, 2).join(" · "))}</small>` : ""}</span>
      <span class="row-class">${esc(e.class || e.summary)}</span>
      <span class="mono-sm dim row-cat">${esc(cat(e.category).name)}</span>
      ${statusTag(e.status)}
    </a>`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    shell();
    (pages[document.body.dataset.page] || (() => {}))();
  });
})();
