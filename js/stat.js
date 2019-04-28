'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;

window.renderStatistics = function (ctx,names,times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура! Вы победили!',CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
    ctx.fillText('Список результатов:',CLOUD_X + FONT_GAP, CLOUD_Y + 2 * FONT_GAP);

    ctx.fillStyle = 'rgba(255,0,0,1)';
    for (var i = 0; i < names.length; i++) {
        var barHeight = times[i] * BAR_MAX_HEIGHT / getMaxElement(times);
        ctx.fillRect(CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_Y + 85 + (150 - barHeight), BAR_WIDTH, barHeight);
        ctx.fillStyle = getColumnColor();
    }
};

function renderCloud (ctx,x,y,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
}

function getMaxElement(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getColumnColor() {
    return 'hsl(240,' + Math.floor(10 + Math.random() * 90) + '%,50%)';
}