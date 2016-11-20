// Gets called when running npm start
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.dev");

console.log("Starting server...\n");

new WebpackDevServer(webpack(config), { // Start a server
	publicPath: config.output.publicPath,
	hot: true, // With hot reloading
	inline: false,
	historyApiFallback: true,
	quiet: true, // Without logging
}).listen(4000, "localhost", function(err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log("Server started");
		console.log("Listening at localhost:4000");
	}
});
