var config = {
  UNIVERSE_WIDTH: 121,
  UNIVERSE_HEIGHT: 81,
  CELL_WIDTH: 5,
  CELL_HEIGHT: 5,
  BORDER_WIDTH: 1,
  MIN_NEIGHBORS_TO_LIVE: 2,
  MAX_NEIGHBORS_TO_LIVE: 3,
  NEIGHBORS_TO_BE_BORN: 3,
  AGE_COLOR_MULTIPLYER: 10,
  DEATH_COUNT_WITHRAW: 0.2,
  ALIVE_NEIGHBORS_COLOR_MULTIPLYER: 3,
  DEAD_COLOR_MULTIPLYER: 10,
  TIME_INTERVAL: 40,
  ALIVE_MULTI_COLOR_THRESHOLD: 100,
  DEAD_MULTI_COLOR_THRESHOLD: 255,
  ALIVE_COLOR: 'black',
  DEAD_COLOR: 'white',
  keys: {
    space: 32,
    q: 113,
    w: 119,
    e: 101,
    r: 114,
    t: 116,
    y: 121,
    u: 117,
    i: 105,
    o: 111,
    a: 97,
    s: 115,
    d: 100,
    f: 102,
    g: 103,
    h: 104,
    j: 106,
    k: 107,
    l: 108,
    z: 122,
    x: 120,
    c: 99,
    v: 118,
    b: 98,
    n: 110,
    m: 109,
    comma: 44,
    period: 46
  }
};
var UNIVERSE_WIDTH = 121;
var UNIVERSE_HEIGHT = 81;
var CELL_WIDTH = 5;
var CELL_HEIGHT = 5;
var BORDER_WIDTH = 1;
var MIN_NEIGHBORS_TO_LIVE = 2;
var MAX_NEIGHBORS_TO_LIVE = 3;
var NEIGHBORS_TO_BE_BORN = 3;
var AGE_COLOR_MULTIPLYER = 10;
var DEATH_COUNT_WITHRAW = 0.2;
var ALIVE_NEIGHBORS_COLOR_MULTIPLYER = 3;
var DEAD_COLOR_MULTIPLYER = 10;
var TIME_INTERVAL = 40;
var ALIVE_MULTI_COLOR_THRESHOLD = 100;
var DEAD_MULTI_COLOR_THRESHOLD = 255;
var ALIVE_COLOR = 'black';
var DEAD_COLOR = 'white';

var keys = {
  space: 32,
  q: 113,
  w: 119,
  e: 101,
  r: 114,
  t: 116,
  y: 121,
  u: 117,
  i: 105,
  o: 111,
  a: 97,
  s: 115,
  d: 100,
  f: 102,
  g: 103,
  h: 104,
  j: 106,
  k: 107,
  l: 108,
  z: 122,
  x: 120,
  c: 99,
  v: 118,
  b: 98,
  n: 110,
  m: 109,
  comma: 44,
  period: 46
};

export { UNIVERSE_WIDTH, UNIVERSE_HEIGHT, CELL_WIDTH, CELL_HEIGHT, BORDER_WIDTH, MIN_NEIGHBORS_TO_LIVE, MAX_NEIGHBORS_TO_LIVE, NEIGHBORS_TO_BE_BORN, ALIVE_COLOR, DEAD_COLOR, keys };