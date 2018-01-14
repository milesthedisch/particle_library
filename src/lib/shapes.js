/* eslint max-len: 0 */

// @flow

import type Vector from "./vectors.js";
import type Particle from "./particle.js";

/**
 * @class Shapes
 * @param {Object} ctx      Canvas context.
 * @param {Object} document The document object.
*/
export default class Shapes {
  ctx: CanvasRenderingContext2D;
  document: Document;

  /**
   * constructor
   * @param  {HTMLCanvasElement} ctx
   * @param  {Document} document
   */
  constructor(ctx: CanvasRenderingContext2D, document: Document) {
    if (!ctx) {
      throw new Error("Shapes: Please provide a context argument [arg::1]");
    }

    this.ctx = ctx;
    this.document = document || window.document;
  }

  /**
   * @memberOf Shapes
   * @description draw a circle.
   * @param {Number} x     The x coordinate of the circle.
   * @param {Number} y     The y coordinate of the circle.
   * @param {Number} r     The radius of the circle.
   * @param {String} color The color of the circle.
   */
  circle(x: number=4, y: number=4, r: number=2, color:string="#000000") {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
    this.ctx.fill();
  };

  /**
   * @memberOf Shapes
   * @description Fill a rectangle
   * @param  {Number} x     Starting point X
   * @param  {Number} y     Starting point Y
   * @param  {Number} w     Width of the rectangle
   * @param  {Number} h     Height of the rectangle
   * @param  {String} color A hex string.
   */
  rect(x: number = 0,
      y: number = 0,
      w: number = 10,
      h: number = 10,
      color:string = "#000000") {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  };

  /**
   * @memberOf Shapes
   * @description Draw a line between these two points.
   * @param  {Number} x0
   * @param  {Number} y0
   * @param  {Number} x1
   * @param  {Number} y1
   * @param  {string} style
   */
  drawLineXY(x0: number,
    y0: number,
    x1: number,
    y1: number,
    style: string = "#000000") {
    this.ctx.beginPath();
    this.ctx.strokeStyle = style;
    this.ctx.moveTo(x0, y0);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();
  };

  /**
   * drawLineVec
   * @param  {Vector} vec0: Vector
   * @param  {Vector} vec1: Vector
   */
  drawLineVec(vec0: Vector, vec1: Vector) {
    this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
  };

  /**
   * drawLinePoints
   * @param  {Object} firstPoint
   * @param  {Array<Object>} points
   */
  drawLinePoints(points: Array<Object>) {
    if (!points[0]) {
      throw new Error("Please provide valid inputs");
    }

    if (points.length < 1) {
      throw new Error("Must be given a a number of points greater than 1");
    }

    const firstPoint = points.shift();

    this.ctx.beginPath();
    this.ctx.moveTo(firstPoint.x, firstPoint.y);

    for (let point of points) {
      this.ctx.lineTo(point.x, point.y);
    }

    this.ctx.stroke();
    this.ctx.closePath();
  };

  /**
   * @memberOf Shapes
   * @param  {number} width
   * @param  {number} height
   * @param  {Number} gridSize
   * @param  {String} color
   */
  grid(width: number, height: number, gridSize: number = 20, color: string = "#ccc") {
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;

    for (let x = 0; x < width; x += gridSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, height);
    }

    for (let y = 0; y < height; y += gridSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(width, y);
    }

    this.ctx.stroke();
  };

  /**
   * pCircle
   * @memberOf Shapes
   * @param  {Particle} p
   * @return {Particle}
   */
  pCircle(particle: Particle) {
    this.circle(
      particle.state.x,
      particle.state.y,
      particle.state.radius,
      particle.state.color
    );
    return particle;
  };

  /**
   * pRect
   * @memberOf Shapes
   * @param  {Particle} p
   * @return {Particle}
   */
  pRect(particle: Particle) {
    this.rect(
      particle.state.x,
      particle.state.y,
      particle.state.width,
      particle.state.height,
      particle.state.color
    );
    return particle;
  };
}

module.exports = Shapes;
