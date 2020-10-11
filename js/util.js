'use strict';

(() => {
  window.util = {
    isEscEvt: (evt, action) => {
      if (evt.key === `Escape`) {
        action();
      }
    },
    isEnterEvt: (evt, action) => {
      if (evt.key === `Enter`) {
        action();
      }
    }
  };
})();
