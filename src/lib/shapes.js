/**
 * Shapes constuctor
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
 * circle - Draws a simples circle
 * @param  {Number} x     The x coordinate of the circle.
 * @param  {Number} y     The y coordinate of the circle.
 * @param  {Number} r     The radius of the circle.
 * @param  {String} color The color of the circle.
 */
Shapes.prototype.circle = function drawCircle(x=4, y=4, r=2, color="#000000") {
	this.ctx.fillStyle = color;
	this.ctx.beginPath();
	this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
	this.ctx.fill();
};

module.exports = Shapes;
