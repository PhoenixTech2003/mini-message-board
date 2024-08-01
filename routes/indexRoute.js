const express = require("express");
const indexControllers = require("../controllers/indexControllers");
const indexRouter = express.Router();

indexRouter.get('/',indexControllers.renderIndexPage);

module.exports = { indexRouter };
