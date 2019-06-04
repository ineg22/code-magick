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
    setupElement.style.top = '';
    setupElement.style.left = '';
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  }
  // ------------------------------------------------task-5
  var uploadUserPic = setupElement.querySelector('.upload');
  uploadUserPic.addEventListener('mousedown', onMouseDown);

  function onMouseDown(evt) {
    evt.preventDefault();
    var draged = false;

    var initCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      draged = true;

      var shift = {
        x: moveEvt.clientX - initCoord.x,
        y: moveEvt.clientY - initCoord.y
      };

      initCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupElement.style.top = (setupElement.offsetTop + shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft + shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      function onClickPreventDefault(preventEvt) {
        preventEvt.preventDefault();
        setupElement.removeEventListener('click', onClickPreventDefault);
      }

      if (draged) {
        setupElement.addEventListener('click', onClickPreventDefault);
      }
    }
  }

})();
