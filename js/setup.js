'use strict';

(() => {
  const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const WIZARDS_QUANTITY = 4;


  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateWizzardsArr = (quanity) => {
    const wizards = [];
    for (let i = 0; i < quanity; i++) {
      let wizard = {
        name: `${getRandomElement(NAMES)} ${getRandomElement(SURNAMES)}`,
        coatColor: getRandomElement(COAT_COLOR),
        eyesColor: getRandomElement(EYES_COLOR)
      };
      wizards.push(wizard);
    }
    return wizards;
  };

  const wizardTemplate = document.querySelector(`#similar-wizard-template`).content;
  const similarList = document.querySelector(`.setup-similar`);
  similarList.classList.remove(`hidden`);
  const wizardsList = similarList.querySelector(`.setup-similar-list`);
  const setupPlayer = document.querySelector(`.setup-player`);

  const renderWizard = (wizard) => {
    const wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const fragment = document.createDocumentFragment();

  generateWizzardsArr(WIZARDS_QUANTITY).forEach((wizard) => {
    fragment.appendChild(renderWizard(wizard));
  });

  wizardsList.appendChild(fragment);


  const wizardCoat = setupPlayer.querySelector(`.wizard-coat`);
  const wizardEyeys = setupPlayer.querySelector(`.wizard-eyes`);
  const fireBallColor = setupPlayer.querySelector(`.setup-fireball-wrap`);
  const coatInput = setupPlayer.querySelector(`[name="coat-color"]`);
  const eyeysInput = setupPlayer.querySelector(`[name="eyes-color"]`);
  const fireBallInput = setupPlayer.querySelector(`[name="fireball-color"`);

  const getWizardColor = (element, input, arr) => {
    const color = getRandomElement(arr);
    if (element === fireBallColor) {
      element.style.backgroundColor = color;
    }
    element.style.fill = color;
    input.value = color;
  };

  wizardCoat.addEventListener(`click`, () => {
    getWizardColor(wizardCoat, coatInput, COAT_COLOR, `fill`);
  });

  wizardEyeys.addEventListener(`click`, () => {
    getWizardColor(wizardEyeys, eyeysInput, EYES_COLOR, `fill`);
  });

  fireBallColor.addEventListener(`click`, () => {
    getWizardColor(fireBallColor, fireBallInput, FIREBALL_COLOR, `backgroundColor`);
  });
})();
