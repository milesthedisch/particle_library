const Shapes = require("../../src/lib/shapes.js");
const sinon = require("sinon");
const assert = require("assert");

describe("#Shapes", function() {
  let context;
  let document;
  let beginPathSpy = sinon.spy();
  let fillSpy = sinon.spy();
  let arcReturn;

  const circleArgumentDefaults = [4, 4, 2, 0, 6.283185307179586, false];

  beforeEach(function() {
    const fillStyle = {
      set(x) {
        if (x === undefined) {
          return circleArgumentDefaults.color;
        } else {
          return x;
        }
      },
    };

    context = {
      fillStyle,
      beginPath: beginPathSpy,
      arc: function(...args) {
        if (arguments.length === 0) {
          arcReturn = circleArgumentDefaults;
        } else {
          arcReturn = args;
        }
      },
      fill: fillSpy,
    };

    global.window = {
      document: {},
    };

    document = {};
  });

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

  describe("#Circle", function() {
    describe("*Given no arguments", function() {
      it("should assign fillStyle to default", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        const defaultColor = "#000000";
        assert.equal(context.fillStyle, defaultColor);
      });

      it("should call beginPath", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        assert(beginPathSpy.called);
      });

      it("should call arc", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        assert.deepEqual(arcReturn, circleArgumentDefaults);
      });

      it("should call fill", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        assert(fillSpy.called);
      });
    });
  });
});
