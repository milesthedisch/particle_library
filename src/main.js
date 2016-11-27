const Vector = require("./lib/vectors");
const Particle = require("./lib/particle");
const Utils = require("./lib/utils");
const Shapes = require("./lib/shapes");

document.addEventListener("DOMContentLoaded", () => {
	[Vector, Particle, Utils, Shapes].forEach((lib) => window[lib.name] = lib);
});
