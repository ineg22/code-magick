'use strict';

(function () {
  var inputFileElement = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  inputFileElement.addEventListener('change', function () {
    var file = inputFileElement.files[0];

    if (file) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
