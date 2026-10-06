/* Atlas Codex — shared rendering for every page. Content lives in data.js. */
(function () {
  const A = window.ATLAS;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const catName = (id) => (A.categories.find((c) => c.id === id) || {}).name || id;
  const bySlug = (s) => A.entries.find((e) => e.slug === s);
  const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const statusClass = (s) => "status status-" + String(s).toLowerCase().replace(/\s+/g, "-");
  const entryUrl = (e) => "entry.html?slug=" + encodeURIComponent(e.slug);

  /* ---------- theme ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("atlas-theme"); if (t) root.dataset.theme = t; } catch (_) {}
  function toggleTheme() {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("atlas-theme", root.dataset.theme); } catch (_) {}
  }

  /* ---------- shell ---------- */
  function shell() {
    const page = document.body.dataset.page;
    const link = (href, label, id) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`;
    $("#site-header").innerHTML = `
      <div class="wrap header-inner">
        <a class="brand" href="index.html" aria-label="${esc(A.site.title)} home">
          <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 16h26M16 3c4 4 5.5 8.5 5.5 13S20 25 16 29M16 3c-4 4-5.5 8.5-5.5 13S12 25 16 29" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          <span>${esc(A.site.title)}</span>
        </a>
        <nav class="nav">
          ${link("index.html", "Home", "home")}
          ${link("codex.html", "Codex", "codex")}
          ${link("archive.html", "Archive", "archive")}
          ${link("about.html", "About", "about")}
        </nav>
        <div class="header-tools">
          <button class="icon-btn" id="search-open" aria-label="Search (press /)"><svg viewBox="0 0 24 24" width="18" height="18"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><kbd>/</kbd></button>
          <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg></button>
        </div>
      </div>`;
    $("#site-footer").innerHTML = `
      <div class="wrap footer-inner">
        <div><strong>${esc(A.site.title)}</strong><p>${esc(A.site.tagline)}</p></div>
        <p class="disclaimer">${esc(A.site.disclaimer)}</p>
        <p class="muted small">© ${new Date().getFullYear()} ${esc(A.site.title)}. ${A.entries.length} entries.</p>
      </div>`;
    $("#theme-toggle").addEventListener("click", toggleTheme);
    $("#search-open").addEventListener("click", openSearch);
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") closeSearch();
    });
  }

  /* ---------- search palette ---------- */
  function matches(e, q) {
    if (!q) return true;
    const hay = [e.name, e.summary, e.class, catName(e.category), ...(e.aliases || []), ...(e.tags || [])].join(" ").toLowerCase();
    return q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
  }
  function openSearch() {
    let d = $("#search-dialog");
    if (!d) {
      d = document.createElement("div");
      d.id = "search-dialog";
      d.className = "search-dialog";
      d.innerHTML = `<div class="search-panel" role="dialog" aria-label="Search">
        <input id="search-input" type="search" placeholder="Search compounds, aliases, tags…" autocomplete="off">
        <ul id="search-results"></ul></div>`;
      document.body.appendChild(d);
      d.addEventListener("click", (e) => { if (e.target === d) closeSearch(); });
      const input = $("#search-input");
      const render = () => {
        const q = input.value.trim();
        const hits = q ? A.entries.filter((e) => matches(e, q)).slice(0, 8) : [];
        $("#search-results").innerHTML = hits.map((e) => `<li><a href="${entryUrl(e)}"><strong>${esc(e.name)}</strong><span>${esc(catName(e.category))}</span></a></li>`).join("") ||
          (q ? `<li class="empty">No matches for “${esc(q)}”</li>` : `<li class="empty">Type to search ${A.entries.length} entries</li>`);
      };
      input.addEventListener("input", render);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") { const a = $("#search-results a"); if (a) location.href = a.href; } });
      render();
    }
    d.hidden = false;
    $("#search-input").focus();
  }
  function closeSearch() { const d = $("#search-dialog"); if (d) d.hidden = true; }

  /* ---------- shared bits ---------- */
  const card = (e) => `
    <a class="card" href="${entryUrl(e)}">
      <div class="card-top"><span class="cat">${esc(catName(e.category))}</span><span class="${statusClass(e.status)}">${esc(e.status)}</span></div>
      <h3>${esc(e.name)}</h3>
      ${e.class ? `<p class="card-class">${esc(e.class)}</p>` : ""}
      <p>${esc(e.summary)}</p>
    </a>`;

  /* ---------- pages ---------- */
  const pages = {
    home() {
      const compounds = A.entries.filter((e) => e.type === "compound");
      const recent = [...A.entries].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 6);
      $("#stats").innerHTML = [
        [compounds.length, "Compounds"],
        [A.entries.filter((e) => e.type === "article").length, "Guides"],
        [A.categories.length, "Categories"],
        [compounds.filter((e) => e.status === "Approved").length, "Approved somewhere"]
      ].map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`).join("");
      $("#categories").innerHTML = A.categories.map((c) => {
        const n = A.entries.filter((e) => e.category === c.id).length;
        return `<a class="cat-tile" href="codex.html?cat=${c.id}"><h3>${esc(c.name)} <span>${n}</span></h3><p>${esc(c.blurb)}</p></a>`;
      }).join("");
      $("#recent").innerHTML = recent.map(card).join("");
      $("#hero-search").addEventListener("submit", (ev) => {
        ev.preventDefault();
        location.href = "codex.html?q=" + encodeURIComponent($("#hero-q").value.trim());
      });
    },

    codex() {
      const params = new URLSearchParams(location.search);
      const state = { q: params.get("q") || "", cat: params.get("cat") || "all", status: "all" };
      const q = $("#codex-q");
      q.value = state.q;
      const cats = A.categories.filter((c) => A.entries.some((e) => e.category === c.id));
      $("#cat-chips").innerHTML = [`<button data-cat="all">All</button>`, ...cats.map((c) => `<button data-cat="${c.id}">${esc(c.name)}</button>`)].join("");
      const statuses = [...new Set(A.entries.map((e) => e.status))];
      $("#status-filter").innerHTML = `<option value="all">Any status</option>` + statuses.map((s) => `<option>${esc(s)}</option>`).join("");

      function render() {
        document.querySelectorAll("#cat-chips button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === state.cat));
        const list = A.entries
          .filter((e) => (state.cat === "all" || e.category === state.cat) && (state.status === "all" || e.status === state.status) && matches(e, state.q))
          .sort((a, b) => a.name.localeCompare(b.name));
        $("#codex-count").textContent = `${list.length} ${list.length === 1 ? "entry" : "entries"}`;
        // A–Z grouping
        const groups = {};
        list.forEach((e) => { const k = /[A-Z]/.test(e.name[0].toUpperCase()) ? e.name[0].toUpperCase() : "#"; (groups[k] = groups[k] || []).push(e); });
        const letters = Object.keys(groups).sort();
        $("#az").innerHTML = letters.map((l) => `<a href="#letter-${l}">${l}</a>`).join("");
        $("#codex-list").innerHTML = letters.length
          ? letters.map((l) => `<section class="letter-group" id="letter-${l}"><h2>${l}</h2><div class="grid">${groups[l].map(card).join("")}</div></section>`).join("")
          : `<p class="empty-state">No entries match these filters.</p>`;
        const url = new URL(location);
        state.q ? url.searchParams.set("q", state.q) : url.searchParams.delete("q");
        state.cat !== "all" ? url.searchParams.set("cat", state.cat) : url.searchParams.delete("cat");
        history.replaceState(null, "", url);
      }
      q.addEventListener("input", () => { state.q = q.value.trim(); render(); });
      $("#cat-chips").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { state.cat = b.dataset.cat; render(); } });
      $("#status-filter").addEventListener("change", (e) => { state.status = e.target.value; render(); });
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
          const key = new Date(e[state.field] + "T00:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" });
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(e);
        });
        $("#archive-list").innerHTML = list.length ? [...groups].map(([month, items]) => `
          <section class="archive-month">
            <h2>${month} <span>${items.length}</span></h2>
            <ol>${items.map((e) => `
              <li>
                <time datetime="${e[state.field]}">${fmtDate(e[state.field])}</time>
                <a href="${entryUrl(e)}">${esc(e.name)}</a>
                <span class="type-pill">${e.type === "article" ? "Guide" : "Compound"}</span>
                <span class="muted">${esc(catName(e.category))}</span>
              </li>`).join("")}</ol>
          </section>`).join("") : `<p class="empty-state">Nothing in the archive matches.</p>`;
      }
      $("#archive-q").addEventListener("input", (e) => { state.q = e.target.value.trim(); render(); });
      $("#archive-type").addEventListener("change", (e) => { state.type = e.target.value; render(); });
      $("#archive-field").addEventListener("change", (e) => { state.field = e.target.value; render(); });
      $("#archive-sort").addEventListener("click", (e) => {
        state.sort = state.sort === "desc" ? "asc" : "desc";
        e.currentTarget.textContent = state.sort === "desc" ? "Newest first ↓" : "Oldest first ↑";
        render();
      });
      render();
    },

    entry() {
      const e = bySlug(new URLSearchParams(location.search).get("slug"));
      if (!e) {
        $("#entry").innerHTML = `<div class="empty-state"><h1>Entry not found</h1><p>That page isn't in the codex. <a href="codex.html">Browse all entries →</a></p></div>`;
        return;
      }
      document.title = `${e.name} · ${A.site.title}`;
      const slug = (h) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const facts = [
        ["Status", `<span class="${statusClass(e.status)}">${esc(e.status)}</span>`],
        ["Category", `<a href="codex.html?cat=${e.category}">${esc(catName(e.category))}</a>`],
        e.class && ["Class", esc(e.class)],
        e.developer && ["Origin", esc(e.developer)],
        e.aliases && e.aliases.length && ["Also known as", e.aliases.map(esc).join(", ")],
        ["Added", fmtDate(e.added)],
        ["Last updated", fmtDate(e.updated)]
      ].filter(Boolean);
      const related = (e.related || []).map(bySlug).filter(Boolean);
      $("#entry").innerHTML = `
        <nav class="crumbs"><a href="index.html">Home</a> / <a href="codex.html">Codex</a> / <a href="codex.html?cat=${e.category}">${esc(catName(e.category))}</a></nav>
        <div class="entry-layout">
          <aside class="toc">
            <h4>Contents</h4>
            <ol>${e.sections.map((s) => `<li><a href="#${slug(s.heading)}">${esc(s.heading)}</a></li>`).join("")}</ol>
          </aside>
          <article class="entry-body">
            <header>
              <p class="eyebrow">${e.type === "article" ? "Guide" : "Compound"}</p>
              <h1>${esc(e.name)}</h1>
              <p class="lede">${esc(e.summary)}</p>
            </header>
            ${e.sections.map((s) => `<section id="${slug(s.heading)}"><h2>${esc(s.heading)}</h2>${s.body}</section>`).join("")}
            <div class="tags">${(e.tags || []).map((t) => `<a class="tag" href="codex.html?q=${encodeURIComponent(t)}">#${esc(t)}</a>`).join("")}</div>
            <p class="disclaimer">${esc(A.site.disclaimer)}</p>
          </article>
          <aside class="infobox">
            <div class="infobox-title">${esc(e.name)}</div>
            <dl>${facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
          </aside>
        </div>
        ${related.length ? `<section class="related"><h2>Related entries</h2><div class="grid">${related.map(card).join("")}</div></section>` : ""}`;
    },

    about() {}
  };

  document.addEventListener("DOMContentLoaded", () => {
    shell();
    (pages[document.body.dataset.page] || (() => {}))();
  });
})();
