(() => {
  'use strict';
  const root = document.documentElement;
  const english = root.lang === 'en';
  const theme = document.querySelector('#theme-switch');
  const stage = document.querySelector('.reading-stage');
  const description = document.querySelector('[data-reading-description]');
  const cinemaCopy = description.textContent;
  const readerCopy = english
    ? 'Keep earlier text in view for classes and longer listening. Adjust the window size, background, and opacity.'
    : '提词器保留前文，适合课程与长时间阅读。窗口大小、背景和透明度可调整。';
  theme.hidden = false;
  document.querySelector('.reading-choice').hidden = false;
  theme.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    theme.querySelector('[data-theme-label]').textContent = english
      ? (next === 'dark' ? 'Light' : 'Dark') : (next === 'dark' ? '日间' : '夜间');
    theme.setAttribute('aria-label', english
      ? `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`
      : `切换${next === 'dark' ? '日间' : '夜间'}模式`);
    document.querySelector('meta[name="theme-color"]').content = next === 'dark' ? '#141c17' : '#f8f8f3';
  });
  for (const button of document.querySelectorAll('[data-reading-choice]')) {
    button.addEventListener('click', () => {
      stage.dataset.reading = button.dataset.readingChoice;
      for (const choice of document.querySelectorAll('[data-reading-choice]')) {
        choice.setAttribute('aria-pressed', String(choice === button));
      }
      description.textContent = stage.dataset.reading === 'reader' ? readerCopy : cinemaCopy;
    });
  }
})();
