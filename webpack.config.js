/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: [
		"babel-polyfill",
		path.join(__dirname, "src/main.js"),
	],
	output: {
		path: __dirname,
		filename: "./dist/[name].bundle.js",
		chunkFileName: "./dist/chunks/[id].bundle.js"
	},
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
	module: {
		loaders: [
			{
				test: /\.js$/, // Transform all .js files required somewhere within an entry point... 
				loader: "babel", // ...with the specified loaders...
				exclude: path.join(__dirname, "/node_modules/") // ...except for the node_modules folder.
			},
		],
	},
	devtool: "source-map",
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	],
	target: "	web"	,
};
