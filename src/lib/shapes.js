/**
 * @class Shapes
 * @param {Object} ctx      Canvas context.
 * @param {Object} document The document object.
 */
function Shapes(ctx, document) {
  if (!ctx) {
    throw new Error("Shapes: Please provide a context argument [arg::1]");
  }
  this.ctx = ctx;
  this.document = document || window.document;
};

/**
 * @memberOf Shapes
 * @name  circle
 * @description draw a circle.
 * @param {Number} x     The x coordinate of the circle.
 * @param {Number} y     The y coordinate of the circle.
 * @param {Number} r     The radius of the circle.
 * @param {String} color The color of the circle.
 */
Shapes.prototype.circle = function drawCircle(x=4, y=4, r=2, color="#000000") {
  this.ctx.fillStyle = color;
  this.ctx.beginPath();
  this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
  this.ctx.fill();
};

/**
 * @name  rect
 * @description Fill a rectangle
 * @param  {Number} x     Starting point X
 * @param  {Number} y     Starting point Y
 * @param  {Number} w     Width of the rectangle
 * @param  {Number} h     Height of the rectangle
 * @param  {String} color A hex string.
 */
Shapes.prototype.rect = function drawRect(x, y, w=10, h=10, color="#000000") {
  this.ctx.fillStyle = color;
  this.ctx.fillRect(x, y, w, h);
};

/**
 * pCircle
 * @param  {Particle} p
 * @return {Particle}
 */
Shapes.prototype.pCircle = function particleCircle(p) {
  this.circle(
    p.state.x,
    p.state.y,
    p.state.radius,
    p.state.color
  );
  return p;
};

/**
 * pRect
 * @param  {Particle} p
 * @return {Particle}
 */
Shapes.prototype.pRect = function particleRect(p) {
  this.rect(
    p.state.x,
    p.state.y,
    p.state.width,
    p.state.height,
    p.state.color
  );
  return p;
};

/**
 * @name  drawLineXY
 * @description Draw a line between these two points.
 * @param  {Number} x0
 * @param  {Number} y0
 * @param  {Number} x1
 * @param  {Number} y1
 * @param  {string} style
 */
Shapes.prototype.drawLineXY = function(x0, y0, x1, y1, style="#000000") {
  this.ctx.beginPath();
  this.ctx.strokeStyle = style;
  this.ctx.moveTo(x0, y0);
  this.ctx.lineTo(x1, y1);
  this.ctx.stroke();
};

/**
 * @name drawLineVec
 * @param  {Vector} vec0
 * @param  {Vector} vec1
 * @return {Void}
 */
Shapes.prototype.drawLineVec = function(vec0, vec1) {
  this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
  return void(0);
};

Shapes.prototype.drawLineArray = function({sx, sy}, ...points) {
  if (sx === undefined || sx === undefined) {
    throw new Error("Must be given a start of the line");
  }

  this.ctx.beginPath();
  this.ctx.moveTo(sx, sy);
  for (let {x: px, y: py} of points) {
    this.ctx.lineTo(px, py);
  }
  this.ctx.stroke();
};

/**
 * @name grid
 * @param  {number} width
 * @param  {number} height
 * @param  {Number} gridSize
 * @param  {String} color
 */
Shapes.prototype.grid = function(width, height, gridSize=20, color="#ccc") {
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

module.exports = Shapes;
