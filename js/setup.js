'use strict';

(() => {
  const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const WIZARDS_QUANTITY = 4;
  const userDialog = document.querySelector(`.setup`);
  const setupPlayer = userDialog.querySelector(`.setup-player`);
  const wizardCoat = setupPlayer.querySelector(`.wizard-coat`);
  const wizardEyes = setupPlayer.querySelector(`.wizard-eyes`);
  const coatInput = setupPlayer.querySelector(`[name="coat-color"]`);
  const eyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
  const fireBallInput = setupPlayer.querySelector(`[name="fireball-color"`);
  const fireBallColor = setupPlayer.querySelector(`.setup-fireball-wrap`);
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

  const successHandler = (wizards) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardsList.appendChild(fragment);
  };

  const errorHandler = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.backend.load(successHandler, errorHandler);


  wizardCoat.addEventListener(`click`, () => {
    window.setWizardColor(wizardCoat, coatInput, COAT_COLOR);
  });

  wizardEyes.addEventListener(`click`, () => {
    window.setWizardColor(wizardEyes, eyesInput, EYES_COLOR);
  });

  fireBallColor.addEventListener(`click`, () => {
    window.setWizardColor(fireBallColor, fireBallInput, FIREBALL_COLOR);
  });

  const form = userDialog.querySelector(`.setup-wizard-form`);
  form.addEventListener(`submit`, function (evt) {
    window.backend.save(new FormData(form), () => {
      userDialog.classList.add(`hidden`);
    });
    evt.preventDefault();
  });
})();
