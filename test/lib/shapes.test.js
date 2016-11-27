const Shapes = require("../../src/lib/shapes.js");
const assert = require("assert");

describe("#Shapes", function() {
	let context = {
		fillStyle: null,
		beginPath: function beginPath() {
			return true;
		},
		arc: function arc() {
			return true;
		},
		fill: function fill() {
			return true;
		},
	};

	global.window = {
		document: {},
	};

	let document = {};

	it("should throw an error when given no context", function() {
		try {
			new Shapes();
		} catch (e) {
			assert.equal("Error", e.constructor.name);
		}
	});

	it("should use context given to it.", function() {
		const shape = new Shapes(context, document);
		assert.deepEqual(shape.ctx, context);
	});

	it("should use window document when document is not defined", function() {
		const shape = new Shapes(context);
		assert.deepEqual(shape.ctx, context);
	});
});
