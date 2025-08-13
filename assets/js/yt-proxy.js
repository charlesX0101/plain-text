// assets/js/yt-proxy.js
// Frontend caller for your hardened Cloudflare Worker YouTube proxy.
// Points to your current workers.dev endpoint. Change one line later when you move to a custom subdomain.

(() => {
  const WORKER_URL = "https://tight-queen-16ee.charlesroy858.workers.dev/api/yt";

  async function ytSearch(q) {
    if (typeof q !== "string") throw new Error("query must be a string");
    const query = q.trim();
    if (!query) throw new Error("empty query");

    const u = new URL(WORKER_URL);
    u.searchParams.set("q", query);

    const res = await fetch(u.toString(), { method: "GET", mode: "cors", credentials: "omit" });
    if (!res.ok) {
      let msg = `API error ${res.status}`;
      try {
        const body = await res.json();
        if (body && body.error) msg += `: ${body.error}`;
      } catch {}
      throw new Error(msg);
    }
    return res.json();
  }

  // Optional minimal form wiring if you drop matching elements on a page.
  // Safe no-op if elements don't exist.
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("yt-form");
    const input = document.getElementById("yt-q");
    const results = document.getElementById("yt-results");
    if (!form || !input || !results) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const q = input.value;
      results.textContent = "Searching...";
      try {
        const data = await ytSearch(q);
        const items = Array.isArray(data.items) ? data.items : [];
        if (!items.length) {
          results.textContent = "No results.";
          return;
        }
        const html = items.map(it => {
          const id = it?.id?.videoId;
          const title = it?.snippet?.title || "(untitled)";
          const url = id ? `https://www.youtube.com/watch?v=${id}` : "#";
          return `<div class="yt-result"><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></div>`;
        }).join("");
        results.innerHTML = html;
      } catch (err) {
        results.textContent = String(err?.message || err);
      }
    });
  });

  // Expose a tiny global if you want to call it manually elsewhere.
  window.YT_PROXY = { ytSearch };
})();
