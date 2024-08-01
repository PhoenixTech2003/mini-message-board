const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const renderIndexPage = function rendersTheIndexPage(req, res) {
  res.render("index", {messages: messages});
};

module.exports = { renderIndexPage };
