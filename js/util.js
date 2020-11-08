'use strict';


const isEscEvt = (evt, action) => {
  if (evt.key === `Escape`) {
    action();
  }
};

const isEnterEvt = (evt, action) => {
  if (evt.key === `Enter`) {
    action();
  }
};

const createErrorMessage = (message) => {
  const node = document.createElement(`div`);
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `absolute`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = message;
  document.body.insertAdjacentElement(`afterbegin`, node);
};

window.util = {
  isEscEvt,
  isEnterEvt,
  createErrorMessage
};

