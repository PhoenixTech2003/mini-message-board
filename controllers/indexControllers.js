const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const renderIndexPage = function rendersTheIndexPage(req, res) {
  res.render("index", { messages: messages });
};

const renderForm = function rendersTheNewMessagePage(req, res) {
  res.render("form");
};

const addMessage = function thatAddsMessagesToTheMessageList(req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
};

const renderMessage = function rendersIndividualMessages(req, res){
  const message = messages[req.params.messageId];
  res.render("message", {message:message})
}

module.exports = { renderIndexPage, renderForm, addMessage, renderMessage };
