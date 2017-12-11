const common = require("./webpack.common.js");
const webpack = require("webpack");
const {resolve} = require("path");

module.exports = Object.assign(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "main.min.js",
    library: "particle",
    libraryTarget: "var",
  },
});
