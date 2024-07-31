const express = require("express");
const indexControllers = require("../controllers/indexControllers");
const indexRouter = express.Router();

indexRouter.use(indexControllers.renderIndexPage);

module.exports = { indexRouter };
