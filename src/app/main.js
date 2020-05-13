/*
 * Game of Life implementation using vanilla JavaScript
 * Copyright (C) Artem Devlysh, 2015
 */

require.config({
  baseUrl: '',
  paths: {}
});

define(['./game.js'], function (Game) {
  var game = new Game();
  game.init();
});