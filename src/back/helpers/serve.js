module.exports = function(app, port) {
	const server = app.listen(port, () => {
		const host = server.address().address;
		log.info("server listening at http://%s:%s", host, port);
	});
};
