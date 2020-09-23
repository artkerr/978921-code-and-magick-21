'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const BAR_MAX_HEIGHT = 150;
const BAR_WIDTH = 40;
const GAP = 10;
const BAR_GAP = 50;
const TEXT_X = 120;
const TEXT_Y = 30;
const TEXT_GAP = 20;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderText = (ctx, text, x, y) => {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, x, y);
};

const getBlueColor = () => `hsla(231, 90%, ${Math.round(Math.random() * (80 - 20)) + 20}%, 1)`;

const getMaxElement = (arr) => Math.max.apply(null, arr);

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  renderText(ctx, `Ура вы победили!`, TEXT_X, TEXT_Y);
  renderText(ctx, `Список результатов:`, TEXT_X, TEXT_Y + TEXT_GAP);

  let maxTime = Math.round(getMaxElement(times));

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP * 2);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT -  BAR_GAP - (BAR_MAX_HEIGHT * times[i] / maxTime));
    ctx.fillStyle = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1` : getBlueColor();
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_Y, BAR_WIDTH, -(BAR_MAX_HEIGHT * times[i] / maxTime));
  }
};
