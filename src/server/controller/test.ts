import express = require("express");

var controller: express.RequestHandler = (_req: express.Request, res: express.Response, _next: Function) => {
	res.render("test", {
		title: "test"
	});
};

module.exports = controller;
