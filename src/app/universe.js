import {
 UNIVERSE_WIDTH as config_UNIVERSE_WIDTH,
 UNIVERSE_HEIGHT as config_UNIVERSE_HEIGHT,
} from ".\\constants\\config.js";

import { Cell } from ".\\cell.js";
'use strict';

/**
 * @class Universe
 * @constructor
 */
function Universe() {
    this.width = config_UNIVERSE_WIDTH;
    this.height = config_UNIVERSE_HEIGHT;
    this.space = _createSpace(this.width, this.height);
}

/**
 * Universe width
 *
 * @property width
 * @type {Number}
 */
Universe.prototype.width = null;

/**
 * Universe height
 *
 * @property height
 * @type {Number}
 */
Universe.prototype.height = null;

/**
 * Space is 2d array with cells
 *
 * @property space
 * @type {Array}
 */
Universe.prototype.space = null;

/**
 * Creates new space
 *
 * @method _createSpace
 * @private
 * @return {Array} New 2d array for cells
 */
function _createSpace(width, height) {
    var x, y,
        space = [];
    for (x = 0; x < width; x++) {
        space[x] = [];
        for (y = 0; y < height; y++) {
            space[x][y] = new Cell(x, y);
        }
    }
    return space;
}

var mod_Universe = Universe;
export { mod_Universe as Universe };
