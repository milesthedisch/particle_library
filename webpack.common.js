/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		polyfill: "babel-polyfill",
		vectors: path.join(__dirname, "src/lib/vectors.js"),
		particle: path.join(__dirname, "src/lib/particle.js"),
	}, 	
	output: {
		path: __dirname,
		filename: "./dist/[name].bundle.js",
		chunkFileName: "./dist/[id].chunk.js"
	},
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
	module: {
		loaders: [
			{
				test: /\.js$/, // Transform all .js files required somewhere within an entry point... 
				loader: "babel?presets[]=es2015", // ...with the specified loaders...
				exclude: path.join(__dirname, "/node_modules/") // ...except for the node_modules folder.
			},
		],
	},
	devtool: "source-map",
	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
	],
	target: "web",
};
