'use strict';

(() => {
  const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const WIZARDS_QUANTITY = 4;
  const setupPlayer = document.querySelector(`.setup-player`);
  const wizardCoat = setupPlayer.querySelector(`.wizard-coat`);
  const wizardEyes = setupPlayer.querySelector(`.wizard-eyes`);
  const coatInput = setupPlayer.querySelector(`[name="coat-color"]`);
  const eyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
  const fireBallInput = setupPlayer.querySelector(`[name="fireball-color"`);
  const fireBallColor = setupPlayer.querySelector(`.setup-fireball-wrap`);

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateWizzardsArr = (quantity) => {
    const wizards = [];
    for (let i = 0; i < quantity; i++) {
      wizards.push({
        name: `${getRandomElement(NAMES)} ${getRandomElement(SURNAMES)}`,
        coatColor: getRandomElement(COAT_COLOR),
        eyesColor: getRandomElement(EYES_COLOR)
      });
    }
    return wizards;
  };

  const wizardTemplate = document.querySelector(`#similar-wizard-template`).content;
  const similarList = document.querySelector(`.setup-similar`);
  similarList.classList.remove(`hidden`);
  const wizardsList = similarList.querySelector(`.setup-similar-list`);


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

  wizardCoat.addEventListener(`click`, () => {
    window.setWizardColor(wizardCoat, coatInput, COAT_COLOR);
  });

  wizardEyes.addEventListener(`click`, () => {
    window.setWizardColor(wizardEyes, eyesInput, EYES_COLOR);
  });

  fireBallColor.addEventListener(`click`, () => {
    window.setWizardColor(fireBallColor, fireBallInput, FIREBALL_COLOR);
  });
})();
