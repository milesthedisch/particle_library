const Vector = require("./lib/vectors");
const Particle = require("./lib/particle");
const Utils = require("./lib/utils");
const Shapes = require("./lib/shapes");

const util = new Utils();
const vec = new Vector();
const p = new Particle();
const shapes = new Shapes();

module.exports.util = util;
module.exports.particle = p;
module.exports.vector = vec;
module.exports.shapes = shapes;
