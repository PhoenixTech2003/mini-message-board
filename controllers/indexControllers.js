const db = require("../db/queries");

const renderIndexPage = async function rendersTheIndexPage(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
};

const renderForm = function rendersTheNewMessagePage(req, res) {
  res.render("form");
};

const addMessage = async function thatAddsMessagesToTheMessageList(req, res) {
  const name = req.body.author
  const message = req.body.message
  await db.addMessage(name, message)
  res.redirect("/");
};

const renderMessage = async function rendersIndividualMessages(req, res) {
  const message = await db.getIndividualMessage(req.params.messageId);
  res.render("message", { message: message });
};

module.exports = { renderIndexPage, renderForm, addMessage, renderMessage };
