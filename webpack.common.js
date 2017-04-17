/* eslint-disable */
const webpack = require("webpack");
const PolyfillsPlugin = require('webpack-polyfills-plugin');
const path = require("path");

const paths = {
	main: path.join(__dirname, "src/main.js"),
	lib: path.resolve("./src/lib"),
	src: path.resolve("./src")
}

module.exports = {
	entry: {
		main: [paths.main],
	},
	output: {
		path: __dirname,
		filename: "main.js",
		library: "particle",
		libraryTarget: "umd"
	},
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
	resolve: {
		root: [
			paths.src,
		]
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
	plugins: [
		new PolyfillsPlugin([
			'performance/now',
			'requestAnimationFrame',
		]),
	],
	target: "web",
};
