'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_FEMALES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push(generateWizard());
  }

  function generateWizard() {
    var obj = {};
    obj.name = WIZARD_NAMES[randomSelect(WIZARD_NAMES.length)] + ' ' + WIZARD_FEMALES[randomSelect(WIZARD_FEMALES.length)];
    obj.coatColor = COAT_COLORS[randomSelect(COAT_COLORS.length)];
    obj.eyesColor = EYES_COLORS[randomSelect(EYES_COLORS.length)];
    return obj;
  }

  function randomSelect(num) {
    return Math.floor(Math.random() * num);
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  var setupWizardElement = document.querySelector('.setup-wizard');
  setupWizardElement.querySelector('.wizard-coat').addEventListener('click', function () {
    var coatColor = COAT_COLORS[randomSelect(COAT_COLORS.length)];
    setupWizardElement.querySelector('.wizard-coat').style.fill = coatColor;
    document.getElementsByName('coat-color').value = coatColor;
  });

  setupWizardElement.querySelector('.wizard-eyes').addEventListener('click', function () {
    var eyesColor = EYES_COLORS[randomSelect(EYES_COLORS.length)];
    setupWizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
    document.getElementsByName('eyes-color').value = eyesColor;
  });

  document.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
    var fireballColor = FIREBALL_COLORS[randomSelect(FIREBALL_COLORS.length)];
    document.querySelector('.setup-fireball-wrap').style.backgroundColor = fireballColor;
    document.getElementsByName('fireball-color').value = fireballColor;
  });

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
