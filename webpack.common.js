/* eslint-disable */
const webpack = require("webpack");
const { resolve } = require("path");

const paths = {
	main: resolve(__dirname, "./src/main.js"),
	lib: resolve("./src/lib"),
	src: resolve("./src")
}

module.exports = {
	entry: {
		main: [paths.main],
	},
	output: {
		path: resolve(__dirname + "./dist"),
		filename: "main.js",
		library: "particle",
		libraryTarget: "umd"
	},
  resolveLoader: {
    root: resolve(__dirname, './node_modules')
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
	        presets: ['env', 'flow']
	      },
	    },
    ],
    preLoaders: [{
      test: /\.jsx?$/,
        loader: "remove-flow-types",
        include: resolve(__dirname, "./src")
    }],
	},
	target: "web",
};
