'use strict';

document.querySelector('.setup').classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

var WIZARD_NAMES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var WIZARD_FEMALES = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var EYES_COLORS = ['black','red','blue','yellow','green'];

var wizards = [];
for (var i = 0; i < 4; i++) {
    wizards.push(generateWizard())
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
for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

