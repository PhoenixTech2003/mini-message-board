const express = require('express');
const newMessageControllers = require('../controllers/newMessageControllers');
const newMessageRouter = express.Router();

newMessageRouter.get('/', newMessageControllers.renderForm)

module.exports = {newMessageRouter}