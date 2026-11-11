/* Static HTML carries all media and references; JavaScript only enhances navigation. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const L = v => `<span data-l="zh">${v.zh}</span><span data-l="en">${v.en}</span>`;
const isHome = document.body.dataset.page === 'home';
/* ---------- contents panel: list, section in view, reading progress ---------- */
$(`#tocList`).innerHTML = $(`#tocInline > ol`).outerHTML;
(() => {
  const links = new Map($$(`#tocList a`).map((a) => [a.getAttribute(`href`).slice(1), a]));
  const setOn = (id) => {
    if (!links.has(id)) return;
    links.forEach((a) => a.classList.remove(`on`));
    links.get(id).classList.add(`on`);
  };
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) setOn(e.target.id); });
  }, { rootMargin: `-42% 0px -52% 0px` });
  [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean).forEach((el) => spy.observe(el));
  const bar = $(`#tocBar`), pct = $(`#tocPct`);
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    bar.style.width = `${(p * 100).toFixed(1)}%`;
    pct.textContent = `${Math.round(p * 100)}%`;
  };
  addEventListener(`scroll`, () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener(`resize`, update);
  update();
})();

/* ---------- byline with reading time for the current language ---------- */
function byline() {
  const lang = document.documentElement.getAttribute(`data-lang`);
  $(`#heroMeta`).textContent = lang === `zh`
    ? `更新于 2026-11-10 · ${isHome ? '主题导航 · 图表 · Demo' : 'Robot Learning KB'} `
    : `Updated 2026-11-10 · ${isHome ? 'Topics · Figures · Demos' : 'Robot Learning KB'}`;
  // Preserve language on file:// links too, where localStorage is not shared consistently.
  $$(`a[href]`).forEach(a => {
    const raw = a.getAttribute('href');
    if (raw.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(raw)) return;
    const url = new URL(raw, 'https://kb.invalid/');
    if (!url.pathname.endsWith('.html')) return;
    url.searchParams.set('lang', lang);
    // Keep the original relative path so embedded file previews can resolve it.
    a.setAttribute('href', raw.split(/[?#]/, 1)[0] + url.search + url.hash);
  });
}
byline();

/* ---------- behaviour ---------- */
$(`#lang`).addEventListener(`click`, () => {
  const h = document.documentElement;
  const next = h.getAttribute(`data-lang`) === `zh` ? `en` : `zh`;
  h.setAttribute(`data-lang`, next);
  h.lang = next === `zh` ? `zh-CN` : `en`;
  try { localStorage.setItem(`kb-lang`, next); } catch (e) {}
  try {
    const url = new URL(location.href);
    url.searchParams.set('lang', next);
    history.replaceState(null, '', url);
  } catch (e) {}
  byline();
});

// Native controls and static posters work without this script.
document.querySelectorAll('[data-algo-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.algoFilter;
    document.querySelector('.algo-map')?.toggleAttribute('data-filtered', filter !== 'all');
    document.querySelectorAll('[data-algo-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelectorAll('[data-algo-group]').forEach(group => {
      group.hidden = filter !== 'all' && group.dataset.algoGroup !== filter;
    });
  });
});

$$('video').forEach(v => {
  v.addEventListener('error', () => {
    const note = v.closest('.ph').querySelector('.media-error');
    if (note) note.hidden = false;
  });
});
document.addEventListener('click', ev => {
  const tab = ev.target.closest('.mtabs button');
  if (!tab) return;
  const wrap = tab.closest('.mwrap');
  $$(':scope > .ph', wrap).forEach((box, index) => {
    box.hidden = index !== Number(tab.dataset.m);
    const v = box.querySelector('video');
    if (v && box.hidden) v.pause();
  });
  $$('.mtabs button', wrap).forEach(b => b.setAttribute('aria-pressed', String(b === tab)));
});

// briefly highlight a reference when a citation jumps to it
function highlightRef() {
  const id = location.hash.slice(1);
  if (!id.startsWith(`ref-`)) return;
  const li = document.getElementById(id);
  if (!li) return;
  li.classList.add(`hl`);
  setTimeout(() => li.classList.remove(`hl`), 1800);
}
window.addEventListener(`hashchange`, highlightRef);

// Enable keyboard scrolling of wide comparison tables.
$$(".tbl").forEach(t => {t.tabIndex = 0; t.setAttribute("role", "region"); if(!t.hasAttribute("aria-label")) t.setAttribute("aria-label", "Comparison table");});
highlightRef();
