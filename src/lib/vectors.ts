/* eslint max-len: 0 */

import utils from "./utils";

const INITIAL_STATE = {
  x: 0,
  y: 1,
};

export default class Vector {
  state: {
    x: number;
    y: number;
  };

  constructor(state: { x: number; y: number } = INITIAL_STATE) {
    this.state = state;
  }

  create(x: number = 0, y: number = 0): Vector {
    const vec = new Vector({x, y});
    return vec;
  }

  set(prop: string, val: any): boolean {
    if (Object.prototype.hasOwnProperty.call(this.state, prop)) {
      (this.state as any)[prop] = val;
      return true;
    }

    return false;
  }

  get(prop: string): any {
    return (this.state as any)[prop];
  }

  setAngle(rad: number): Vector {
    const length = this.getLength();

    this.set("x", Math.cos(rad) * length);
    this.set("y", Math.sin(rad) * length);

    return this;
  }

  setLength(length: number): Vector {
    const rad = this.getAngle();

    this.set("x", Math.cos(rad) * length);
    this.set("y", Math.sin(rad) * length);

    return this;
  }

  getLength(): number {
    const x = this.get("x") as number;
    const y = this.get("y") as number;
    return Math.hypot(x, y);
  }

  getAngle(): number {
    const x = this.get("x") as number;
    const y = this.get("y") as number;
    return Math.atan2(y, x);
  }

  random(min: number = 1, max: number = 10): Vector {
    const x = utils.lerp(Math.random(), min, max);
    const y = utils.lerp(Math.random(), min, max);
    return this.create(x, y);
  }

  randomBetween(xMin: number = 0, xMax: number = 10, yMin: number = 0, yMax: number = 10): Vector {
    xMax = Math.max(xMin, xMax);
    xMin = Math.min(xMin, xMax);
    yMax = Math.max(yMin, yMax);
    yMin = Math.min(yMin, yMax);

    const y = utils.randomBetween(yMin, yMax) as number;
    const x = utils.randomBetween(xMin, xMax) as number;

    return this.create(x, y);
  }

  add(v2: Vector): Vector {
    return this.create(
      this.get("x") + v2.get("x"),
      this.get("y") + v2.get("y")
    );
  }

  subtract(v2: Vector): Vector {
    return this.create(
      this.get("x") - v2.get("x"),
      this.get("y") - v2.get("y")
    );
  }

  multiply(v2: Vector): Vector {
    return this.create(
      this.get("x") * v2.get("x"),
      this.get("y") * v2.get("y")
    );
  }

  divide(v2: Vector): Vector {
    return this.create(
      this.get("x") / v2.get("x"),
      this.get("y") / v2.get("y")
    );
  }

  addTo(v2: Vector): Vector {
    this.state.x = this.get("x") + v2.get("x");
    this.state.y = this.get("y") + v2.get("y");
    return this;
  }

  subtractFrom(v2: Vector): Vector {
    this.state.x = this.get("x") - v2.get("x");
    this.state.y = this.get("y") - v2.get("y");
    return this;
  }

  multiplyBy(v2: Vector): Vector {
    this.state.x = this.get("x") * v2.get("x");
    this.state.y = this.get("y") * v2.get("y");
    return this;
  }

  divideBy(v2: Vector): Vector {
    this.state.x = this.get("x") / v2.get("x");
    this.state.y = this.get("y") / v2.get("y");

    return this;
  }

  rotateBy(angle: number): Vector {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const x = this.state.x * cos - this.state.y * sin;
    const y = this.state.y * cos + this.state.x * sin;

    this.state.x = x;
    this.state.y = y;

    return this;
  }

  static distanceBetween(v1: Vector, v2: Vector): number {
    const dVec = v1.subtract(v2);
    return Math.hypot(dVec.get("x"), dVec.get("y"));
  }

  static vectorIntersect(vec0: Vector, vec1: Vector): boolean {
    const x0 = vec0.get("x");
    const y0 = vec0.get("y");
    const x1 = vec1.get("x");
    const y1 = vec1.get("y");
    return utils.rangeIntersect(x0, y0, x1, y1);
  }
}
