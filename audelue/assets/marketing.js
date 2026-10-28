(() => {
  'use strict';
  const root = document.documentElement;
  const english = root.lang === 'en';
  const stage = document.querySelector('.reading-stage');
  const description = document.querySelector('[data-reading-description]');
  const cinemaCopy = description.textContent;
  const readerCopy = english
    ? 'Keep earlier text in view for classes and longer listening. Adjust the window size, background, and opacity.'
    : '提词器保留前文，适合课程与长时间阅读。窗口大小、背景和透明度可调整。';
  document.querySelector('.reading-choice').hidden = false;
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
