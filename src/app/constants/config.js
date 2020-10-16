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
var exported_config_UNIVERSE_WIDTH = 121;
var exported_config_UNIVERSE_HEIGHT = 81;
var exported_config_CELL_WIDTH = 5;
var exported_config_CELL_HEIGHT = 5;
var exported_config_BORDER_WIDTH = 1;
var exported_config_MIN_NEIGHBORS_TO_LIVE = 2;
var exported_config_MAX_NEIGHBORS_TO_LIVE = 3;
var exported_config_NEIGHBORS_TO_BE_BORN = 3;
var exported_config_AGE_COLOR_MULTIPLYER = 10;
var exported_config_DEATH_COUNT_WITHRAW = 0.2;
var exported_config_ALIVE_NEIGHBORS_COLOR_MULTIPLYER = 3;
var exported_config_DEAD_COLOR_MULTIPLYER = 10;
var exported_config_TIME_INTERVAL = 40;
var exported_config_ALIVE_MULTI_COLOR_THRESHOLD = 100;
var exported_config_DEAD_MULTI_COLOR_THRESHOLD = 255;
var exported_config_ALIVE_COLOR = 'black';
var exported_config_DEAD_COLOR = 'white';

var exported_config_keys = {
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

export { exported_config_UNIVERSE_WIDTH as UNIVERSE_WIDTH, exported_config_UNIVERSE_HEIGHT as UNIVERSE_HEIGHT, exported_config_CELL_WIDTH as CELL_WIDTH, exported_config_CELL_HEIGHT as CELL_HEIGHT, exported_config_BORDER_WIDTH as BORDER_WIDTH, exported_config_MIN_NEIGHBORS_TO_LIVE as MIN_NEIGHBORS_TO_LIVE, exported_config_MAX_NEIGHBORS_TO_LIVE as MAX_NEIGHBORS_TO_LIVE, exported_config_NEIGHBORS_TO_BE_BORN as NEIGHBORS_TO_BE_BORN, exported_config_ALIVE_COLOR as ALIVE_COLOR, exported_config_DEAD_COLOR as DEAD_COLOR, exported_config_keys as keys };