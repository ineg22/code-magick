'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = document.querySelector('.setup-close');
  var setupElement = document.querySelector('.setup');

  setupOpenElement.addEventListener('click', openPopup);
  setupOpenElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupCloseElement.addEventListener('click', closePopup);
  setupCloseElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  function onEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }

  function closePopup() {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  }

  function openPopup() {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  }
})();
