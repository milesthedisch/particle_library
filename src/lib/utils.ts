/* eslint max-len: 0 */

export interface PointLike {
  state: {
    x: number;
    y: number;
  };
}

export interface VectorLike {
  get(prop: string): number;
}

export interface RectLike {
  state: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface CircleLike {
  state: {
    x: number;
    y: number;
    radius: number;
  };
}

export interface EasePoint {
  x: number;
  y: number;
}

function normalize(val: number, min: number, max: number): number {
  return (val - min) / (max - min);
}

function lerp(val: number, min: number, max: number): number {
  return (max - min) * val + min;
}

function map(value: number, srcMin: number, srcMax: number, destMin: number, destMax: number): number {
  srcMax = Math.max(srcMax, srcMin);
  srcMin = Math.min(srcMax, srcMin);
  destMin = Math.min(destMin, destMax);
  destMax = Math.max(destMin, destMax);
  return lerp(normalize(value, srcMin, srcMax), destMin, destMax);
}

function percent(val: number): number {
  return val * 100;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}

function randomBetween(x: number, y: number): number {
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  return Math.floor(Math.random() * (max - min)) + min;
}

function distanceXY(x0: number, y0: number, x1: number, y1: number): number {
  const dx = x0 - x1;
  const dy = y0 - y1;
  return Math.hypot(dx, dy);
}

function inRange(val: number, min: number, max: number): boolean {
  return (val <= Math.max(max, min)) && (Math.min(max, min) <= val);
}

function rangeIntersect(min0: number, max0: number, min1: number, max1: number): boolean {
  return (
    Math.max(max0, min0) >= Math.min(min1, max1) &&
    Math.min(min0, max0) <= Math.max(max1, min1)
  );
}

function collisionRect(r0: RectLike, r1: RectLike) {
  const r0x = r0.state.x;
  const r0y = r0.state.y;
  const r1x = r1.state.x;
  const r1y = r1.state.y;

  const r0w = r0x + r0.state.width;
  const r0h = r0y + r0.state.height;
  const r1w = r1x + r1.state.width;
  const r1h = r1y + r1.state.height;

  return (
    rangeIntersect(r0x, r0w, r1x, r1w) &&
    rangeIntersect(r0y, r0h, r1y, r1h)
  );
}

function collisionCircle(c1: CircleLike, c2: CircleLike): boolean {
  const radi = (c1.state.radius + c2.state.radius);
  const distance = distanceXY(c1.state.x, c1.state.y, c2.state.x, c2.state.y);

  if (distance) {
    return radi > distance;
  }

  return true;
}

function collisionCirclePoint(x: number, y: number, circle: CircleLike) {
  const dist = distanceXY(
    x,
    y,
    circle.state.x,
    circle.state.y
  );

  return circle.state.radius > dist;
}

function collisionCircleVec(vec: VectorLike, circle: CircleLike) {
  return circle.state.radius > distanceXY(
    vec.get("x"),
    vec.get("y"),
    circle.state.x,
    circle.state.y
  );
}

function collisionRectPoint(x: number, y: number, rect: RectLike) {
  const rectX = rect.state.x;
  const rectY = rect.state.y;
  return (
    inRange(x, rectX, rectX + rect.state.width) &&
    inRange(y, rectY, rectY + rect.state.height)
  );
}

function collisionRectVec(vec: VectorLike, rect: RectLike) {
  return collisionRectPoint(vec.get("x"), vec.get("y"), rect);
}

function throttle(func: (...args: any[]) => any, wait: number, options: any) {
  let context: any;
  let fnArgs: any;
  let result: any;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let previous = 0;
  if (!options) options = {};
  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, fnArgs);
    if (!timeout) context = fnArgs = null;
  };
  return function(this: any, ...args: any[]) {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    fnArgs = args;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, fnArgs);
      if (!timeout) context = fnArgs = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function setLength(length: number, x: number, y: number): [number, number] {
  const angle = Math.atan2(y, x);
  x = Math.cos(angle) * length;
  y = Math.sin(angle) * length;

  return [x, y];
}

function setAngle(angle: number, x: number, y: number): [number, number] {
  const length = Math.hypot(x, y);
  x = Math.cos(angle) * length;
  y = Math.sin(angle) * length;

  return [x, y];
}

function degToRad(deg: number): number {
  return deg / 180 * Math.PI;
}

function radToDeg(rad: number): number {
  return rad * 180 / Math.PI;
}

function roundToPlaces(val: number, places: number): number {
  const mult = Math.pow(10, places);
  return Math.round(val * mult) / mult;
}

function roundToMultiple(val: number, nearest: number): number {
  return Math.round(val / nearest) * nearest;
}

function quadraticBezier(v0: number, v1: number, v2: number, t: number): number {
  return Math.pow(1 - t, 2) * v0 + (1 - t) * 2 * t * v1 + t * t * v2;
}

function cubicBezier(v0: number, v1: number, v2: number, v3: number, t: number): number {
  return Math.pow(1 - t, 3) * v0 +
         Math.pow(1 - t, 2) * 3 * t * v1 +
         (1 - t) * 3 * t * t * v2 +
         t * t * t + v3;
}

function quadraticBezierPoint(p0: EasePoint, p1: EasePoint, p2: EasePoint, t: number) {
  const x = quadraticBezier(p0.x, p1.x, p2.x, t);
  const y = quadraticBezier(p0.y, p1.y, p2.y, t);
  return {x, y};
}

function cubicBezierPoint(p0: EasePoint, p1: EasePoint, p2: EasePoint, p3: EasePoint, t: number) {
  const x = cubicBezier(p0.x, p1.x, p2.x, p3.x, t);
  const y = cubicBezier(p0.y, p1.y, p2.y, p3.y, t);
  return {x, y};
}

function multiCurve(points: EasePoint[], ctx: CanvasRenderingContext2D) {
  let p0: EasePoint;
  let p1: EasePoint;
  let midX: number;
  let midY: number;

  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length - 2; i++) {
    p0 = points[i];
    p1 = points[i + 1];
    midX = (p0.x + p1.x)/2;
    midY = (p0.y + p1.y)/2;
    ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
  }

  p0 = points[points.length - 2];
  p1 = points[points.length - 1];
  ctx.quadraticCurveTo(p0.x, p0.y, p1.x, p1.y);
}

function ease(ease: number, a: number, b: number, threshold: number = 0.1): boolean | number {
  if (Math.abs(b - a) < threshold) {
    return false;
  }

  return (b - a) * ease;
}

function easeTo(ease: number, origin: EasePoint, target: EasePoint, threshold: number = 0.1): false | EasePoint {
  const dx = target.x - origin.x;
  const dy = target.y - origin.y;

  if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
    return false;
  }

  origin.x += dx * ease;
  origin.y += dy * ease;

  return origin;
}

function isObject(data: any): boolean {
  return typeof data === "object" && ({}).toString.call(data) === "[object Object]";
}

function unique(array: any[]) {
  return array.reduce((x: any[], y: any) => {
    if (x.indexOf(y) === -1) x.push(y);
    return x;
  }, []);
}

function perspective(focalLength: number, distance: number): number {
  return focalLength / (focalLength - distance);
}

function lineIntersection(p0: PointLike, p1: PointLike, p2: PointLike, p3: PointLike) {
  const A1 = p0.state.y - p1.state.y;
  const B1 = p1.state.x - p0.state.x;

  const C1 = A1 * p0.state.x + B1 * p0.state.y;

  const A2 = p2.state.y - p3.state.y;
  const B2 = p3.state.x - p2.state.x;

  const C2 = A2 * p2.state.x + B2 * p2.state.y;

  const denominator = A1 * B2 - A2 * B1;

  if (denominator === 0) {
    return null;
  }

  const xIntercept = (B2 * C1 - B1 * C2) / denominator;
  const yIntercept = (A1 * C2 - A2 * C1) / denominator;

  const x0Range = (p1.state.x - p0.state.x);
  const y0Range = (p1.state.y - p0.state.y);
  const x0Val = (xIntercept - p0.state.x);
  const y0Val = (yIntercept - p0.state.y);

  const x1Range = (p3.state.x - p2.state.x);
  const y1Range = (p3.state.y - p2.state.y);
  const x1Val = (xIntercept - p2.state.x);
  const y1Val = (yIntercept - p2.state.y);

  const rx0 = x0Val / x0Range;
  const ry0 = y0Val / y0Range;
  const rx1 = x1Val / x1Range;
  const ry1 = y1Val / y1Range;

  const insideLineSegement0 =
    (rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1);

  const insideLineSegement1 =
    (rx1 > 0 && rx1 < 1) || (ry1 > 0 && ry1 < 1);

  if (insideLineSegement0 && insideLineSegement1) {
    return {x: xIntercept, y: yIntercept};
  }

  return false;
}

export default {
  normalize,
  lerp,
  map,
  percent,
  clamp,
  randomBetween,
  distanceXY,
  inRange,
  rangeIntersect,
  collisionRect,
  collisionCircle,
  collisionCirclePoint,
  collisionCircleVec,
  collisionRectPoint,
  collisionRectVec,
  throttle,
  setLength,
  setAngle,
  degToRad,
  radToDeg,
  roundToPlaces,
  roundToMultiple,
  quadraticBezier,
  cubicBezier,
  quadraticBezierPoint,
  cubicBezierPoint,
  multiCurve,
  perspective,
  ease,
  easeTo,
  isObject,
  unique,
  lineIntersection,
};
