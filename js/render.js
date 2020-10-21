'use strict';

(() => {
  const WIZARDS_QUANTITY = 4;
  const wizardTemplate = document.querySelector(`#similar-wizard-template`).content;
  const similarList = document.querySelector(`.setup-similar`);
  similarList.classList.remove(`hidden`);
  const wizardsList = similarList.querySelector(`.setup-similar-list`);

  const renderWizard = (wizard) => {
    const wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = (wizards) => {
    const fragment = document.createDocumentFragment();
    wizardsList.innerHTML = ``;

    for (let i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardsList.appendChild(fragment);
  };

})();
