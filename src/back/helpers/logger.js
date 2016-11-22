"use strict";
const bunyan = require("bunyan");
let logger;

module.exports = function(level) {
	level = level || "warn";
	if (!logger) {
		logger = bunyan.createLogger({name: "particle", level});
	}
	return logger;
};
