'use strict';

(function () {
  const DEBOUNCE_INTERVAL = 300;
  let lastTimeout = null;

  window.debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };
})();
