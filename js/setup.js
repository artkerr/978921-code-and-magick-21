'use strict';

const WIZARDS = [];
const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR = ['balck', 'red', 'blue', 'yellow', 'green'];

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 0; i < 4; i++) {
  let wizzard = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  };
  WIZARDS.push(wizzard);
}

const wizzardTemplate = document.querySelector('#similar-wizard-template').content;
const similarList = document.querySelector('.setup-similar');
similarList.classList.remove('hidden');
const wizzardsList = similarList.querySelector('.setup-similar-list');

const renderWizard = (wizzard) => {
  const wizardElement = wizzardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizzard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizzard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizzard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < WIZARDS.length; i++) {
  wizzardsList.appendChild(renderWizard(WIZARDS[i]));
}


