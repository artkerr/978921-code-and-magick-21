'use strict';

const FILE_TYPES = [`image/gif`, `image/jpg`, `image/jpeg`, `image/png`];
const fileChooser = document.querySelector(`.upload input[type=file]`);
const preview = document.querySelector(`.setup-user-pic`);

fileChooser.addEventListener(`change`, () => {
  const file = fileChooser.files[0];
  const fileType = file.type;

  const matches = FILE_TYPES.some((type) => {
    return fileType === type;
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener(`load`, function () {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }

});
