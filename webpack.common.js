/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		vectors: ["babel-polyfill", path.join(__dirname, "src/lib/vectors.js")],
		particle: ["babel-polyfill", path.join(__dirname, "src/lib/particle.js")],
	}, 	
	output: {
		path: __dirname,
		filename: "./dist/lib/[name].bundle.js",
		chunkFileName: "./dist/lib/[id].chunk.js"
	},
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
	resolve: {
		extensions: ['', '.js', '.jsx'],
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
	devtool: "#inline-source-map",
	target: "web",
};
