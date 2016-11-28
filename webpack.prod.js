const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = Object.assign(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  output: {
    path: __dirname,
    filename: "main.min.js",
    library: "particle",
    libraryTarget: "var",
  },
});
