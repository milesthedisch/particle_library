/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		vectors: path.join(__dirname, "src/lib/vectors.js"),
		particle: path.join(__dirname, "src/lib/particle.js"),
		utils: path.join(__dirname, "src/lib/utils.js"),
		shapes: path.join(__dirname, "src/lib/shapes.js"),
		bundle: path.join(__dirname, "src/lib/main.js"),
	}, 	
	output: {
		path: __dirname,
		filename: "./dist/lib/[name].bundle.js",
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
	target: "web",
};
