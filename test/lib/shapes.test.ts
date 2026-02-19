import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Shapes from "../../src/lib/shapes";
import testUtils from "../utils";

describe("#Shapes", function() {
  let context: any;
  let document: any;
  let beginPath: any;
  let fill: any;
  let stroke: any;
  let lineTo: any;
  let moveTo: any;
  let arcReturn: any;
  let shape: any;
  let closePath: any;

  const circleArgumentDefaults = [4, 4, 2, 0, 6.283185307179586, false];

  beforeEach(function() {
    beginPath = vi.fn();
    fill = vi.fn();
    stroke = vi.fn();
    lineTo = vi.fn();
    moveTo = vi.fn();
    closePath = vi.fn();

    context = {
      fillStyle: "#000000",
      moveTo,
      beginPath,
      arc: function(...args: any[]) {
        if (arguments.length === 0) {
          arcReturn = circleArgumentDefaults;
        } else {
          arcReturn = args;
        }
      },
      fill,
      stroke,
      lineTo,
      closePath,
      fillRect: vi.fn(),
      strokeStyle: "",
    };

    (globalThis as any).window = {
      document: {},
    };

    document = {};

    shape = new Shapes(context, document);
  });

  afterEach(function() {
    delete (globalThis as any).window;
    delete (globalThis as any).document;
    delete (globalThis as any).context;
  });

  it("should throw an error when given no context", function() {
    try {
      new Shapes(undefined as any);
    } catch (e: any) {
      expect(e.constructor.name).toBe("Error");
    }
  });

  it("should use context given to it.", function() {
    const shape = new Shapes(context, document);
    expect(shape.ctx).toEqual(context);
  });

  it("should use window document when document is not defined", function() {
    const shape = new Shapes(context);
    expect(shape.ctx).toEqual(context);
  });

  describe("Shapes.circle", function() {
    describe("*Given no arguments", function() {
      it("should assign fillStyle to default", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        const defaultColor = "#000000";
        expect(context.fillStyle).toBe(defaultColor);
      });

      it("should call beginPath", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        expect(beginPath).toHaveBeenCalled();
      });

      it("should call arc", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        expect(arcReturn).toEqual(circleArgumentDefaults);
      });

      it("should call fill", function() {
        const shape = new Shapes(context, document);
        shape.circle();
        expect(fill).toHaveBeenCalled();
      });
    });

    describe("#Lines", function() {
      describe("Shapes.drawLinePoints", function() {
        it("Should throw an error if not given the first argument", function() {
          testUtils.forEachFalsy(function(ø: any) {
            expect(shape.drawLinePoints.bind(null, ø)).toThrow(Error);
          });
        });

        it("should call beginPath and stroke if given valid args.", function() {
          const startingPoint = {x: 0, y: 0};
          const pointArray = [{x: 1, y: 1}, {x: 2, y: 2}];
          shape.drawLinePoints([startingPoint, ...pointArray]);

          expect(beginPath).toHaveBeenCalledOnce();
          expect(stroke).toHaveBeenCalledOnce();
          expect(lineTo.mock.calls.length).toBe(pointArray.length);
        });
      });
    });
  });
});
