'use strict';

const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const setupPlayer = document.querySelector(`.setup-player`);
const wizardCoat = setupPlayer.querySelector(`.wizard-coat`);
const wizardEyes = setupPlayer.querySelector(`.wizard-eyes`);
const coatInput = setupPlayer.querySelector(`[name="coat-color"]`);
const eyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
const fireBallInput = setupPlayer.querySelector(`[name="fireball-color"`);
const fireBallColor = setupPlayer.querySelector(`.setup-fireball-wrap`);

let wizard = {
  onCoatChange(color) {
    return color;
  },
  onEyesChange(color) {
    return color;
  },
  onFireBallChange(color) {
    return color;
  }
};

wizardCoat.addEventListener(`click`, () => {
  window.setWizardColor(wizardCoat, coatInput, COAT_COLOR);
  wizard.onCoatChange(coatInput.value);
});

wizardEyes.addEventListener(`click`, () => {
  window.setWizardColor(wizardEyes, eyesInput, EYES_COLOR);
  wizard.onEyesChange(eyesInput.value);
});

fireBallColor.addEventListener(`click`, () => {
  window.setWizardColor(fireBallColor, fireBallInput, FIREBALL_COLOR);
  wizard.onFireBallChange(fireBallInput.value);
});

window.wizard = {
  setCoatChangeHandler: (cb) => {
    wizard.onCoatChange = cb;
  },
  setEyesChangeHandler: (cb) => {
    wizard.onEyesChange = cb;
  },
  setFireBallChangeHandler: (cb) => {
    wizard.onFireBallChange = cb;
  }
};
