/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		main: path.join(__dirname, "src/main.js"),
	},
	externals: {
		"./src/lib/particle": "particle",
		"./src/lib/vector": "vector",
		"./src/lib/utils": "utils",
		"./src/lib/vectors": "vectors",
	},
	output: {
		path: __dirname,
		filename: "./dist/lib/[name].bundle.js"
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
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015']
	      },
	    },
		],
	},
	target: "web",
};
