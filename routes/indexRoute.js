const express = require("express");
const indexControllers = require("../controllers/indexControllers");
const indexRouter = express.Router();

indexRouter.get('/',indexControllers.renderIndexPage);
indexRouter.get('/new', indexControllers.renderForm)

module.exports = { indexRouter };
