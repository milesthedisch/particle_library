/* eslint max-len: 0 */

import type Vector from "./vectors";

interface ParticleLike {
  state: {
    x: number;
    y: number;
    radius: number;
    color: string;
    width: number;
    height: number;
  };
}

export default class Shapes {
  ctx: CanvasRenderingContext2D;
  document: Document;

  constructor(ctx: CanvasRenderingContext2D, document?: Document) {
    if (!ctx) {
      throw new Error("Shapes: Please provide a context argument [arg::1]");
    }

    this.ctx = ctx;
    this.document = document || window.document;
  }

  circle(x: number = 4, y: number = 4, r: number = 2, color: string = "#000000") {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
    this.ctx.fill();
  }

  rect(x: number = 0,
    y: number = 0,
    w: number = 10,
    h: number = 10,
    color: string = "#000000") {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

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
  }

  drawLineVec(vec0: Vector, vec1: Vector) {
    this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
  }

  drawLinePoints(points: Array<{ x: number; y: number }>) {
    if (!points[0]) {
      throw new Error("Please provide valid inputs");
    }

    if (points.length < 1) {
      throw new Error("Must be given a a number of points greater than 1");
    }

    const firstPoint = points.shift()!;

    this.ctx.beginPath();
    this.ctx.moveTo(firstPoint.x, firstPoint.y);

    for (const point of points) {
      this.ctx.lineTo(point.x, point.y);
    }

    this.ctx.stroke();
    this.ctx.closePath();
  }

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
  }

  pCircle(particle: ParticleLike) {
    this.circle(
      particle.state.x,
      particle.state.y,
      particle.state.radius,
      particle.state.color
    );
    return particle;
  }

  pRect(particle: ParticleLike) {
    this.rect(
      particle.state.x,
      particle.state.y,
      particle.state.width,
      particle.state.height,
      particle.state.color
    );
    return particle;
  }
}
