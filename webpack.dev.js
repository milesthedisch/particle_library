const common = require("./webpack.common.js");

module.exports = Object.assign(common, {
	devtool: "#inline-source-map",
});
