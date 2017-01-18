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
Shapes.prototype.rect = function drawRect(x, y, w, h, color="#000000") {
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
    p.get("position").get("x"), 
    p.get("position").get("y"),
    p.get("radius"),
    p.get("color")
  );
  return p;
};

/**
 * pRect
 * @param  {Particle} p
 * @return {Particle}
 */
Shapes.prototype.pRect = function particleCircle(p) {
  this.rect(
    p.get("position").get("x"),
    p.get("position").get("y"),
    p.get("width"),
    p.get("height"),
    p.get("color")
  );
  return p;
};

module.exports = Shapes;
