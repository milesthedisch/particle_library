const webpack = require("webpack");

module.exports = {
	entry: ["babel-polyfill", "./src/main.js"],
	output: {
		path: __dirname,
		filename: "./dist/bundle.js",
	},
	loaders: [{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: "babel-loader",
	}],
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
	],
};
