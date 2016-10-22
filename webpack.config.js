module.exports = {
    entry: ["babel-polyfill", "./main.js"],
    output: {
        path: __dirname,
        filename: "./bin/bundle.js"
    },
    loaders: [{
	     test: /\.js$/,
	     exclude: /node_modules/,
	     loader: 'babel-loader'
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
	]
};