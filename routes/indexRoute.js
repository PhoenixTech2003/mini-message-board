const express = require("express");
const indexControllers = require("../controllers/indexControllers");
const indexRouter = express.Router();

indexRouter.get('/',indexControllers.renderIndexPage);
indexRouter.get('/new', indexControllers.renderForm)
indexRouter.post('/new', indexControllers.addMessage)

module.exports = { indexRouter };
