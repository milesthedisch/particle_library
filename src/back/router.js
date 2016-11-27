const express = require("express");
const log = require("./helpers/logger")();

module.exports = function(app) {
	const router = express.Router(app);

	router.get("/", function(req, res) {
		res.render("layout/main");
	});

	router.get("/docs", function(req, res) {
		res.end("Docs coming soon");
	});

	router.get("/examples/:id", function(req, res) {
		res.render("layout/main", { testContext: "lalalala", someText: 100000 + "n" });
		// 1. Grab the appropriate template.
		// 2. compileTemplate
		// 3. sendTemplate.
		// 4. On the client write the iframe in.
		// 5. wait for iframe to finish loading then
		// write the scripts and in.
	});

	return router;
};
