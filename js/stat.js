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

    for (var i = 0; i < names.length; i++) {
        var barHeight = times[i] * BAR_MAX_HEIGHT / getMaxElement(times);
        ctx.fillStyle = getColumnColor(names[i]);
        ctx.fillRect(CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_Y + BAR_MAX_HEIGHT - barHeight + 85, BAR_WIDTH, barHeight); //bar

        ctx.fillStyle = '#000';
        ctx.fillText('' + Math.floor(times[i]), CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_Y + CLOUD_HEIGHT - barHeight - 55); //time
        ctx.fillText(names[i], CLOUD_X + BAR_GAP + i * (BAR_GAP + BAR_WIDTH), CLOUD_Y + CLOUD_HEIGHT - 30); //name
    }
};

function renderCloud (ctx,x,y,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x, y);
    ctx.fill();

    //ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
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

function getColumnColor(name) {
    return name === 'Вы' ? 'rgba(255,0,0,1)' : 'hsl(240,' + Math.floor(10 + Math.random() * 90) + '%,50%)';
}