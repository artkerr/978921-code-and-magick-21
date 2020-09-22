'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP = 10;
var BAR_GAP = 50;
var FONT_Y = 90;

var renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = (ctx) => {
  ctx.fillStyle ='#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
};

var getBlueColor = (min, max) => {
  return `hsla(231, 90%, ${Math.round(Math.random() * (max - min)) + min}%, 1)`;
};


var renderStatistics = (ctx) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx);


  ctx.fillStyle ='#000';
  ctx.fillText('Вы', CLOUD_X + BAR_WIDTH, CLOUD_HEIGHT - GAP * 2);
  ctx.fillStyle = 'rgba(255, 0, 0, 1';
  ctx.fillRect(CLOUD_X + BAR_WIDTH, FONT_Y, BAR_WIDTH, BAR_MAX_HEIGHT);

  ctx.fillStyle ='#000';
  ctx.fillText('Иван', CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * 1, CLOUD_HEIGHT - GAP * 2);
  ctx.fillStyle = getBlueColor(20, 80);
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * 1, FONT_Y, BAR_WIDTH, BAR_MAX_HEIGHT);

  ctx.fillStyle ='#000';
  ctx.fillText('Юлия', CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * 2, CLOUD_HEIGHT - GAP * 2);
  ctx.fillStyle = getBlueColor(20, 80);
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * 2, FONT_Y, BAR_WIDTH, BAR_MAX_HEIGHT);

  ctx.fillStyle ='#000';
  ctx.fillText('Игорь', CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * 3, CLOUD_HEIGHT - GAP * 2);
  ctx.fillStyle = getBlueColor(20, 80);
  ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * 3, FONT_Y, BAR_WIDTH, BAR_MAX_HEIGHT);
};

