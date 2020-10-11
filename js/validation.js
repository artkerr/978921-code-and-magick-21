'use strict';

(() => {
  const userNameInput = document.querySelector(`.setup-user-name`);

  userNameInput.addEventListener(`invalid`, () => {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity(`Имя персонажа не может содержать менее 2 символов`);
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity(`Максимальная длина имени персонажа — 25 символов`);
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity(`Обязательное поле`);
    } else {
      userNameInput.setCustomValidity(``);
    }
  });
})();
