const glob = require("glob");
const path = require("path");
const webpack = require("webpack");
const extend = require("extend");
const gutil = require("gutil");
// All example js files.
const examples = glob.sync(path.resolve(__dirname, "../src/examples/*/*.js"));
const defaultConfig = {
	entry: examples,
	output: {
		path: path.resolve(__dirname, "../dist/examples"),
		filename: "[name].example.js",
	},
	target: "web",
	devtool: "#inline-source-map",
};

/**
 * mapEntries - We need to create keys for each file
 * path because webpack dosent bundle each one individually
 * unless they are in an object in the config.
 *
 * @param  {Array} entries 	A list of file paths.
 * @return {Obj}   entries
 */
function mapEntries(entries) {
	const obj = {};
	entries.forEach(function(entry) {
		// Grab each parent dir name.
		const dir = path.parse(path.parse(entry).dir).name;
		obj[dir] = ["babel-polyfill", entry];
	});
	return obj;
};

const entries = mapEntries(examples);

// Extend all the entries on to the entry object
// So that the files are bundled individualy.
const config = extend(true, defaultConfig, {
	entry: entries,
});

webpack(config, function(err, stats) {
	if (err) {
		throw new gutil.PluginError("webpack:build", err);
	}
	gutil.log("[webpack:build]", stats.toString({
		chunks: false, // Makes the build much quieter
		colors: true,
	}));
});
