'use strict';

document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var females = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColors = ['black','red','blue','yellow','green'];

var wizards = [];
for (var i = 0; i < 4; i++) {
    wizards.push(generateWizard())
}

function generateWizard() {
    var obj = {};
    obj.name = names[randomSelect(names.length)] + ' ' + females[randomSelect(females.length)];
    obj.coatColor = coatColors[randomSelect(coatColors.length)];
    obj.eyesColors = eyesColors[randomSelect(eyesColors.length)];
    return obj;
}

function randomSelect(num) {
    return Math.floor(Math.random() * num);
}

console.log(wizards);