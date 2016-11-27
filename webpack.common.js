/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

const paths = {
	main: path.join(__dirname, "src/front/main.js")
}

module.exports = {
	entry: {
		main: ['babel-polyfill', 'whatwg-fetch', paths.main],
	},
	externals: {
		"./src/front/lib/": "particle",
		"./src/front/lib/vector": "vector",
		"./src/front/lib/utils": "utils",
		"./src/front/lib/vectors": "vectors",
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
