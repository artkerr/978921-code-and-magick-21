'use strict';

(() => {
  const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const userDialog = document.querySelector(`.setup`);
  const setupPlayer = userDialog.querySelector(`.setup-player`);
  const wizardCoat = setupPlayer.querySelector(`.wizard-coat`);
  const wizardEyes = setupPlayer.querySelector(`.wizard-eyes`);
  const coatInput = setupPlayer.querySelector(`[name="coat-color"]`);
  const eyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
  const fireBallInput = setupPlayer.querySelector(`[name="fireball-color"`);
  const fireBallColor = setupPlayer.querySelector(`.setup-fireball-wrap`);
  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;
  let wizards = [];

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  wizardCoat.addEventListener(`click`, () => {
    window.setWizardColor(wizardCoat, coatInput, COAT_COLOR);
    coatColor = coatInput.value;
    updateWizards();
  });

  wizardEyes.addEventListener(`click`, () => {
    window.setWizardColor(wizardEyes, eyesInput, EYES_COLOR);
    eyesColor = eyesInput.value;
    updateWizards();
  });

  fireBallColor.addEventListener(`click`, () => {
    window.setWizardColor(fireBallColor, fireBallInput, FIREBALL_COLOR);
  });

  const successHandler = (data) => {
    wizards = data;
    updateWizards();
  };

  const errorHandler = (errorMessage) =>{
    window.util.createErrorMessage(errorMessage);
  };

  window.backend.load(successHandler, errorHandler);

  const form = userDialog.querySelector(`.setup-wizard-form`);
  form.addEventListener(`submit`, function (evt) {
    window.backend.save(new FormData(form), () => {
      userDialog.classList.add(`hidden`);
    });
    evt.preventDefault();
  });
})();
