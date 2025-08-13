/* assets/js/site-search.js
 * Plain Text Solutions — client-side search + rotating feature cards
 * No dependencies. Works on GitHub Pages.
 */
(function (global) {
  const SiteSearch = {};
  const state = {
    manifest: [],
    docsText: new Map(), // path -> raw markdown
    options: null
  };

  /** Public: init */
  SiteSearch.init = async function init(userOpts) {
    const opts = Object.assign({
      manifestUrl: './content/manifest.json',
      featureCount: 3,
      featureCategory: 'support',
      prefetchAll: true,
      input: null,
      resultsEl: null,
      resultsCountEl: null,
      featureGridEl: null
    }, userOpts || {});
    state.options = opts;

    // Load manifest
    await loadManifest(opts.manifestUrl);

    // Prefetch docs if desired
    if (opts.prefetchAll) {
      await prefetchAllDocs();
    }

    // Render feature cards once
    if (opts.featureGridEl) {
      renderFeatureCards();
    }

    // Wire search box
    if (opts.input) {
      opts.input.addEventListener('input', debounce(runSearch, 120));
      // Removed Enter-to-open behavior so search just shows results
    }

    // For debugging
    SiteSearch.__state = state;
  };

  /* ---------------- Manifest & Prefetch ---------------- */

  async function loadManifest(url) {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`Failed to load manifest: ${res.status}`);
    const data = await res.json();
    state.manifest = (Array.isArray(data) ? data : []).filter(x => x && x.title && x.path && x.category);
  }

  async function prefetchAllDocs() {
    await Promise.all(state.manifest.map(async (entry) => {
      if (state.docsText.has(entry.path)) return;
      try {
        const r = await fetch(encodeURI(entry.path), { cache: 'no-cache' });
        const t = await r.text();
        state.docsText.set(entry.path, t);
      } catch (err) {
        console.warn('Prefetch failed:', entry.path, err?.message || err);
      }
    }));
  }

  /* ---------------- Feature Cards ---------------- */

  function renderFeatureCards() {
    const { featureGridEl, featureCount, featureCategory } = state.options;
    if (!featureGridEl) return;

    const pool = state.manifest.filter(x => x.category === featureCategory);
    const picks = pickUnique(pool, clamp(featureCount, 1, 4));

    featureGridEl.innerHTML = picks.map(entry => {
      const url = `/article.html?path=${encodeURIComponent(entry.path)}`;
      const sub = entry.category === 'support' ? 'Support article' : 'Education article';
      return `
        <a class="feature-card card" role="listitem" href="${url}">
          <div class="result-title">${escapeHTML(entry.title)}</div>
          <div class="result-meta">${sub}</div>
          <div class="result-snippet">Open article</div>
        </a>
      `;
    }).join('');
  }

  /* ---------------- Search ---------------- */

  function runSearch() {
    const { input, resultsEl, resultsCountEl } = state.options;
    const q = (input?.value || '').trim();
    if (!resultsEl) return;

    if (!q) {
      if (resultsCountEl) resultsCountEl.textContent = '';
      resultsEl.innerHTML = '';
      return;
    }

    const ensure = state.options.prefetchAll ? Promise.resolve() : hydrateOnDemand();
    ensure.then(() => {
      const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      const matches = [];

      for (const entry of state.manifest) {
        const text = state.docsText.get(entry.path) || '';
        const hay = (entry.title + '\n' + text).toLowerCase();
        const ok = terms.every(t => hay.includes(t));
        if (ok) {
          matches.push({ entry, snippet: makeSnippet(text, terms) });
        }
      }

      renderResults(matches, terms);
    }).catch(err => {
      console.error('Search error:', err);
      if (resultsCountEl) resultsCountEl.textContent = '';
      resultsEl.innerHTML = `<p>Search error. Please try again.</p>`;
    });
  }

  async function hydrateOnDemand() {
    const toFetch = state.manifest.filter(e => !state.docsText.has(e.path));
    for (const e of toFetch) {
      try {
        const r = await fetch(encodeURI(e.path), { cache: 'no-cache' });
        const t = await r.text();
        state.docsText.set(e.path, t);
      } catch (err) {
        console.warn('Fetch failed:', e.path, err?.message || err);
      }
    }
  }

  function renderResults(items, terms) {
    const { resultsEl, resultsCountEl } = state.options;
    if (!resultsEl) return;

    if (resultsCountEl) {
      resultsCountEl.textContent = `${items.length} result${items.length === 1 ? '' : 's'}`;
    }

    items.sort((a, b) => a.entry.title.localeCompare(b.entry.title));

    resultsEl.innerHTML = items.map(({ entry, snippet }) => {
      const url = `/article.html?path=${encodeURIComponent(entry.path)}`;
      const meta = entry.category === 'support' ? 'Support' : 'Education';
      return `
        <a class="result-item card" href="${url}">
          <p class="result-title">${escapeHTML(entry.title)}</p>
          <p class="result-meta">${meta}</p>
          <p class="result-snippet">${highlight(snippet, terms)}</p>
        </a>
      `;
    }).join('') || `<p>No matches yet. Try a different keyword.</p>`;
  }

  /* ---------------- Utilities ---------------- */

  function makeSnippet(md, terms, radius = 60) {
    const text = md.replace(/[#>*_\-\[\]`]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) return '';
    let idx = -1;
    for (const t of terms) {
      const i = text.toLowerCase().indexOf(t.toLowerCase());
      if (i !== -1) { idx = i; break; }
    }
    if (idx === -1) {
      const s = text.slice(0, 140);
      return s + (text.length > 140 ? '…' : '');
    }
    const start = Math.max(0, idx - radius);
    const end = Math.min(text.length, idx + radius);
    const pre = start > 0 ? '…' : '';
    const post = end < text.length ? '…' : '';
    return pre + text.slice(start, end) + post;
  }

  function highlight(snippet, terms) {
    let s = escapeHTML(snippet);
    for (const t of terms) {
      const re = new RegExp(`(${escapeRegExp(t)})`, 'ig');
      s = s.replace(re, '<mark>$1</mark>');
    }
    return s;
  }

  function pickUnique(arr, n) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.max(1, Math.min(n, copy.length)));
  }

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

  // Expose
  global.SiteSearch = SiteSearch;
})(window);

