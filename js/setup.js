'use strict';

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

window.wizard.setCoatChangeHandler((color) => {
  coatColor = color;
  window.debounce(updateWizards);
});


window.wizard.setEyesChangeHandler((color) => {
  eyesColor = color;
  window.debounce(updateWizards);
});

const successHandler = (data) => {
  wizards = data;
  window.debounce(updateWizards);
};

const errorHandler = (errorMessage) =>{
  window.util.createErrorMessage(errorMessage);
};

window.backend.load(successHandler, errorHandler);

const userDialog = document.querySelector(`.setup`);
const form = userDialog.querySelector(`.setup-wizard-form`);
form.addEventListener(`submit`, function (evt) {
  window.backend.save(new FormData(form), () => {
    userDialog.classList.add(`hidden`);
  });
  evt.preventDefault();
});
