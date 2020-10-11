'use strict';

(() => {
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  window.setWizardColor = (element, input, arr) => {
    const color = getRandomElement(arr);
    if (element.matches(`.setup-fireball-wrap`)) {
      element.style.backgroundColor = color;
    }
    element.style.fill = color;
    input.value = color;
  };
})();
