import {
    UNIVERSE_WIDTH as constantsconfigjs_UNIVERSE_WIDTH,
    UNIVERSE_HEIGHT as constantsconfigjs_UNIVERSE_HEIGHT,
    CELL_WIDTH as constantsconfigjs_CELL_WIDTH,
    CELL_HEIGHT as constantsconfigjs_CELL_HEIGHT,
    BORDER_WIDTH as constantsconfigjs_BORDER_WIDTH,
    MIN_NEIGHBORS_TO_LIVE as constantsconfigjs_MIN_NEIGHBORS_TO_LIVE,
    MAX_NEIGHBORS_TO_LIVE as constantsconfigjs_MAX_NEIGHBORS_TO_LIVE,
    NEIGHBORS_TO_BE_BORN as constantsconfigjs_NEIGHBORS_TO_BE_BORN,
    keys as constantsconfigjs_keys,
} from ".\\constants\\config.js";

'use strict';

/**
 * @class UI
 * @constructor
 */
function UI(game) {
    this.game = game;
}

/**
 * Link to step display element
 *
 * @property stepDisplayElement
 * @type HTMLElement
 */
UI.prototype.stepDisplaySpot = null;

/**
 * Minimum neighbors amount of cell to live
 *
 * @property minNeighborsToLiveElement
 * @type HTMLElement
 */
UI.prototype.minNeighborsToLiveElement = null;

/**
 * Maximum neighbors amount of cell to live
 *
 * @property maxNeighborsToLiveElement
 * @type HTMLElement
 */
UI.prototype.maxNeighborsToLiveElement = null;

/**
 * Count of neighbors of cell to be born
 *
 * @property neighborsToBeBornElement
 * @type HTMLElement
 */
UI.prototype.neighborsToBeBornElement = null;

/**
 * Button which starts game
 *
 * @property startButtonElement
 * @type HTMLElement
 */
UI.prototype.startButtonElement = null;

/**
 * Button which stops game
 *
 * @property stopButtonElement
 * @type HTMLElement
 */
UI.prototype.stopButtonElement = null;

/**
 * Link to canvas element
 *
 * @property canvas
 * @type HTMLCanvasElement
 */
UI.prototype.canvas = null;

/**
 * Context of canvas element
 *
 * @property canvasContext
 * @type CanvasRenderingContext2D
 */
UI.prototype.canvasContext = null;

/**
 * Appends UI to certain element
 *
 * @method appendTo
 * @param element {HTMLElement} Element which append UI to
 */
UI.prototype.appendTo = appendTo;
function appendTo(element) {
    var universe = _createUniverse.call(this),
        menu = _createButtonsMenu.call(this),
        stepDisplay = _createStepDisplay.call(this),
        inputPanel = _createInputPanel.call(this);
    element.appendChild(universe);
    element.appendChild(stepDisplay);
    element.appendChild(inputPanel);
    element.appendChild(menu);
}

/**
 * Listener for keyboard
 *
 * @method
 * @private
 */
function _keyboardListener(event) {
    switch (event.keyCode) {
        case constantsconfigjs_keys.space:
            if (event.shiftKey) {
                _stopGame.call(this);
                _stepForwardListener.call(this);
            } else {
                _toggleGameListener.call(this);
            }
            break;
        case constantsconfigjs_keys.q:
            this.game.changeLifeConditions('minNeighborsToLive', 0);
            break;
        case constantsconfigjs_keys.w:
            this.game.changeLifeConditions('minNeighborsToLive', 1);
            break;
        case constantsconfigjs_keys.e:
            this.game.changeLifeConditions('minNeighborsToLive', 2);
            break;
        case constantsconfigjs_keys.r:
            this.game.changeLifeConditions('minNeighborsToLive', 3);
            break;
        case constantsconfigjs_keys.t:
            this.game.changeLifeConditions('minNeighborsToLive', 4);
            break;
        case constantsconfigjs_keys.y:
            this.game.changeLifeConditions('minNeighborsToLive', 5);
            break;
        case constantsconfigjs_keys.u:
            this.game.changeLifeConditions('minNeighborsToLive', 6);
            break;
        case constantsconfigjs_keys.i:
            this.game.changeLifeConditions('minNeighborsToLive', 7);
            break;
        case constantsconfigjs_keys.o:
            this.game.changeLifeConditions('minNeighborsToLive', 8);
            break;
        case constantsconfigjs_keys.a:
            this.game.changeLifeConditions('maxNeighborsToLive', 0);
            break;
        case constantsconfigjs_keys.s:
            this.game.changeLifeConditions('maxNeighborsToLive', 1);
            break;
        case constantsconfigjs_keys.d:
            this.game.changeLifeConditions('maxNeighborsToLive', 2);
            break;
        case constantsconfigjs_keys.f:
            this.game.changeLifeConditions('maxNeighborsToLive', 3);
            break;
        case constantsconfigjs_keys.g:
            this.game.changeLifeConditions('maxNeighborsToLive', 4);
            break;
        case constantsconfigjs_keys.h:
            this.game.changeLifeConditions('maxNeighborsToLive', 5);
            break;
        case constantsconfigjs_keys.j:
            this.game.changeLifeConditions('maxNeighborsToLive', 6);
            break;
        case constantsconfigjs_keys.k:
            this.game.changeLifeConditions('maxNeighborsToLive', 7);
            break;
        case constantsconfigjs_keys.l:
            this.game.changeLifeConditions('maxNeighborsToLive', 8);
            break;
        case constantsconfigjs_keys.z:
            this.game.changeLifeConditions('neighborsToBeBorn', 0);
            break;
        case constantsconfigjs_keys.x:
            this.game.changeLifeConditions('neighborsToBeBorn', 1);
            break;
        case constantsconfigjs_keys.c:
            this.game.changeLifeConditions('neighborsToBeBorn', 2);
            break;
        case constantsconfigjs_keys.v:
            this.game.changeLifeConditions('neighborsToBeBorn', 3);
            break;
        case constantsconfigjs_keys.b:
            this.game.changeLifeConditions('neighborsToBeBorn', 4);
            break;
        case constantsconfigjs_keys.n:
            this.game.changeLifeConditions('neighborsToBeBorn', 5);
            break;
        case constantsconfigjs_keys.m:
            this.game.changeLifeConditions('neighborsToBeBorn', 6);
            break;
        case constantsconfigjs_keys.comma:
            this.game.changeLifeConditions('neighborsToBeBorn', 7);
            break;
        case constantsconfigjs_keys.period:
            this.game.changeLifeConditions('neighborsToBeBorn', 8);
            break;
    }
}

/**
 * Starts game
 *
 * @method
 * @private
 */
function _startGame() {
    this.game.start();
    this.game.ui.startButtonElement.classList.add('excluded');
    this.game.ui.stopButtonElement.classList.remove('excluded');
}

/**
 * Stops game
 *
 * @metnod
 * @private
 */
function _stopGame() {
    this.game.stop();
    this.game.ui.startButtonElement.classList.remove('excluded');
    this.game.ui.stopButtonElement.classList.add('excluded');
}

/**
 * Listener for 'Start' and 'Stop' button
 *
 * @method
 * @private
 */
function _toggleGameListener(event) {
    event && event.target.blur();
    if (this.game.inProgress) {
        _stopGame.call(this);
    } else {
        _startGame.call(this);
    }
}

/**
 * Listener for 'Step forward' button
 *
 * @method
 * @private
 */
function _stepForwardListener(event) {
    event && event.target.blur();
    this.game.stepOnce();
}

/**
 * Listener for 'Clear' button
 *
 * @method
 * @private
 */
function _clearListener(event) {
    event && event.target.blur();
    this.game.killAllCells();
}

/**
 * Listener for 'Save' button
 *
 * @method
 * @private
 */
function _saveListener(event) {
    event && event.target.blur();
    this.game.save.call(this.game, 'savedGame');
}

/**
 * Listener for 'Load' button
 *
 * @method
 * @private
 */
function _loadListener(event) {
    event && event.target.blur();
    this.game.load.call(this.game, 'savedGame');
}

/**
 * Listener for inputs which changes life conditions
 *
 * @method
 * @private
 * @param event {Event}
 */
function _changeLifeConditionsListener(event) {
    var k, v,
        target = event.target,
        value = target.value;
    switch (target.name) {
        case 'min-to-live':
            k = 'minNeighborsToLive';
            v = Number(value);
            break;
        case 'max-to-live':
            k = 'maxNeighborsToLive';
            v = Number(value);
            break;
        case 'to-be-born':
            k = 'neighborsToBeBorn';
            v = Number(value);
            break;
    }
    this.game.changeLifeConditions.call(this.game, k, v);
}

/**
 * Listener for inputs which changes life conditions
 *
 * @method
 * @private
 * @param event {Event}
 */
function _toggleCellListener(event) {
    var fullCellWidth = constantsconfigjs_CELL_WIDTH + constantsconfigjs_BORDER_WIDTH,
        fullCellHeight = constantsconfigjs_CELL_HEIGHT + constantsconfigjs_BORDER_WIDTH,
        x = Math.floor((event.layerX - constantsconfigjs_BORDER_WIDTH) / fullCellWidth),
        y = Math.floor((event.layerY - constantsconfigjs_BORDER_WIDTH) / fullCellHeight);
    this.game.toggleCell.call(this.game, x, y);
}

/**
 * Returns document fragment by template string
 *
 * @method parseTemplate
 * @param {String} str String template
 * @return {DocumentFragment} DOM fragment parsed from string template
 */
function _parseTemplate(str) {
    var element = document.createElement('template');
    element.innerHTML = str;
    return element.content;
}

/**
 * Returns new canvas, game's field
 *
 * @method createUniverse
 * @return {HTMLCanvasElement}
 */
function _createUniverse() {
    var fullCellWidth = constantsconfigjs_CELL_WIDTH + constantsconfigjs_BORDER_WIDTH,
        fullCellHeight = constantsconfigjs_CELL_HEIGHT + constantsconfigjs_BORDER_WIDTH,
        width = constantsconfigjs_UNIVERSE_WIDTH * fullCellWidth + constantsconfigjs_BORDER_WIDTH,
        height = constantsconfigjs_UNIVERSE_HEIGHT * fullCellHeight + constantsconfigjs_BORDER_WIDTH,
        template = '' +
            '<table class="wrap">' +
            '  <tr>' +
            '    <td id="zero"></td>' +
            '  </tr>' +
            '</table>',
        foundation = _parseTemplate(template),
        canvas = document.createElement('canvas'),
        canvasContext = canvas.getContext('2d'),
        zeroElement = foundation.getElementById('zero');
    canvas.classList.add('universe');
    canvas.addEventListener('click', _toggleCellListener.bind(this));
    canvas.width = width;
    canvas.height = height;
    zeroElement.appendChild(canvas);
    this.canvas = canvas;
    this.canvasContext = canvasContext;
    return foundation;
}

/**
 * Returns menu
 *
 * @method createButtonsMenu
 * @return {DocumentFragment} Game menu
 */
function _createButtonsMenu() {
    var template = '' +
            '<div class="menu">' +
            '  <button class="button start-button">start</button>' +
            '  <button class="button stop-button excluded">stop</button>' +
            '  <button class="button step-button">next step</button>' +
            '  <button class="button clear-button">clear</button>' +
            '  <button class="button load-button">load</button>' +
            '  <button class="button save-button">save</button>' +
            '</div>',
        menu = _parseTemplate(template),
        startButton = menu.querySelector('.start-button'),
        stopButton = menu.querySelector('.stop-button'),
        stepButton = menu.querySelector('.step-button'),
        clearButton = menu.querySelector('.clear-button'),
        loadButton = menu.querySelector('.load-button'),
        saveButton = menu.querySelector('.save-button');
    startButton.addEventListener('click', _toggleGameListener.bind(this));
    stopButton.addEventListener('click', _toggleGameListener.bind(this));
    stepButton.addEventListener('click', _stepForwardListener.bind(this));
    clearButton.addEventListener('click', _clearListener.bind(this));
    loadButton.addEventListener('click', _loadListener.bind(this));
    saveButton.addEventListener('click', _saveListener.bind(this));
    this.startButtonElement = startButton;
    this.stopButtonElement = stopButton;
    return menu;
}

/**
 * Binds keys
 *
 * @method bindKeys
 * @private
 */
function _bindKeys() {
    document.body.addEventListener('keypress', _keyboardListener.bind(this));
}

/**
 * Returns display for game steps
 *
 * @method createStepDisplay
 * @return {DocumentFragment} Block with step display
 */
function _createStepDisplay() {
    var stepDisplayElement = document.createElement('template'),
        stepDisplay = stepDisplayElement.content;
    stepDisplayElement.innerHTML = '' +
        '<div class="step-display">' +
        '  <span>0</span>' +
        '</div>';
    this.stepDisplaySpot = stepDisplay.querySelector('.step-display span');
    return stepDisplay;
}

/**
 * Returns input panel for changing game conditions
 *
 * @method createInputPanel
 * @private
 * @return {DocumentFragment} Block with input panel
 */
function _createInputPanel() {
    //TODO: Implement cool inputs
    var template = '' +
            '<div class="input-panel">' +
            '  <div class="wrap">' +
            '    <div class="input-block">' +
            '      <span class="value">2</span>' +
            '      <input class="min-to-live" type="range" min="0" max="8" name="min-to-live">' +
            '      <span class="description">MIN neighbors to LIVE</span>' +
            '    </div>' +
            '    <div class="input-block">' +
            '      <span class="value">3</span>' +
            '      <input class="max-to-live" type="range" min="0" max="8" name="max-to-live">' +
            '      <span class="description">MAX neighbors to LIVE</span>' +
            '    </div>' +
            '    <div class="input-block">' +
            '      <span class="value">3</span>' +
            '      <input class="to-be-born" type="range" min="0" max="8" name="to-be-born">' +
            '      <span class="description">N neighbors to BE BORN</span>' +
            '    </div>' +
            '    <div class="clear"></div>' +
            '  </div>' +
            '</div>',
        inputPanel = _parseTemplate(template),
        minToLiveElement = inputPanel.querySelector('.min-to-live'),
        maxToLiveElement = inputPanel.querySelector('.max-to-live'),
        toBeBornElement = inputPanel.querySelector('.to-be-born');
    minToLiveElement.addEventListener('input', _changeLifeConditionsListener.bind(this));
    maxToLiveElement.addEventListener('input', _changeLifeConditionsListener.bind(this));
    toBeBornElement.addEventListener('input', _changeLifeConditionsListener.bind(this));
    minToLiveElement.value = constantsconfigjs_MIN_NEIGHBORS_TO_LIVE;
    maxToLiveElement.value = constantsconfigjs_MAX_NEIGHBORS_TO_LIVE;
    toBeBornElement.value = constantsconfigjs_NEIGHBORS_TO_BE_BORN;
    this.minNeighborsToLiveElement = minToLiveElement;
    this.maxNeighborsToLiveElement = maxToLiveElement;
    this.neighborsToBeBornElement = toBeBornElement;
    _bindKeys.call(this);
    return inputPanel;
}

var exported_UI = UI;
export { exported_UI as UI };