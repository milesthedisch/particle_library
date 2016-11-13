const common = require("./webpack.common.js");

module.exports = Object.assign(common, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	],
});
