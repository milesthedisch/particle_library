const common = require("./webpack.common.js");
const PolyfillsPlugin = require('webpack-polyfills-plugin');

module.exports = Object.assign(common, {
  devtool: "#inline-source-map"
});
