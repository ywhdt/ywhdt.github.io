(() => {
  'use strict';
  const root = document.documentElement;
  const key = 'audelue-appearance';
  let appearance = root.dataset.theme === 'light' ? 'light' : 'dark';
  try {
    const saved = sessionStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') appearance = saved;
  } catch { /* Reading the page does not require browser storage. */ }
  root.dataset.theme = appearance;

  function update() {
    const button = document.querySelector('#theme-switch');
    const english = root.lang === 'en';
    const dark = root.dataset.theme === 'dark';
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#141c17' : '#f8f8f3';
    if (!button) return;
    button.hidden = false;
    button.querySelector('[data-theme-label]').textContent = english ? (dark ? 'Light' : 'Dark') : (dark ? '日间' : '夜间');
    button.setAttribute('aria-label', english ? `Switch to ${dark ? 'light' : 'dark'} mode` : `切换${dark ? '日间' : '夜间'}模式`);
  }
  function connect() {
    update();
    document.querySelector('#theme-switch')?.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { sessionStorage.setItem(key, root.dataset.theme); } catch { /* Keep the current page usable. */ }
      update();
    });
  }
  update();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', connect, {once:true});
  else connect();
})();
