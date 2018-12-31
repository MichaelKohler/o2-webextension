const HIDDEN_ELEMENTS = [
  '.charge-once .panel-group',
  '.charge-once .plus',
  '.charge-once ~ .section-btns',
  '[data-contentid-anchor="guthaben-auto"] ~ .panel',
];

waitUntil('.charge-once', hideAll);

function hideAll() {
  HIDDEN_ELEMENTS.map((elementSelector) => {
    const element = document.querySelector(elementSelector);
    console.log('elem?', element);
    if (element) {
      element.style.display = 'none';
    }
  });
}

function waitUntil(selector, cb) {
  const interval = setInterval(() => {
    const elem = document.querySelector(selector);
    if (elem) {
      cb();
      clearInterval(interval);
    }
  }, 500);
}

