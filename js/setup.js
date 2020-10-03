'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZZARDS_QUANTITY = 4;
const wizards = [];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 0; i < WIZZARDS_QUANTITY; i++) {
  let wizard = {
    name: getRandomElement(NAMES) + ` ` + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  };
  wizards.push(wizard);
}

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

wizards.forEach(function (value, index) {
  wizardsList.appendChild(renderWizard(wizards[index]));
});


