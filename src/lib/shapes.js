/**
 * Shapes constuctor
 * @param {Object} ctx      Canvas context.
 * @param {Object} document The document object.
 */
function Shapes(ctx, document) {
	if (!ctx) {
		throw new Error("Please provide a context argument [arg::1]");
	}
	this.ctx = ctx;
	this.document = document || window.document;
};

Shapes.prototype.circle = function drawCircle(x, y, r, color) {
	color = color || "#000000";
	this.ctx.fillStyle = color;
	this.ctx.beginPath();
	this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
	return this.ctx.fill();
};

module.exports = Shapes;
