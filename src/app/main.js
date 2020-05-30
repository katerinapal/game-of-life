import { Game } from ".\\game.js";
/*
 * Game of Life implementation using vanilla JavaScript
 * Copyright (C) Artem Devlysh, 2015
 */

require.config({
  baseUrl: '',
  paths: {}
});

var game = new Game();
game.init();