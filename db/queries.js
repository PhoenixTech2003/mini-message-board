const pool = require("./pool");

async function getPgVersion() {
  const result = await pool.query("SELECT version()");
  return result.rows[0];
}

async function getAllMessages() {
  const results = await pool.query("SELECT * FROM messages");
  return results.rows;
}

async function getIndividualMessage(id) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}
async function addMessage(name, message) {
    await pool.query("INSERT INTO messages (users, message) VALUES ($1, $2)", [name, message])
}
module.exports = {
  getPgVersion,
  getAllMessages,
  getIndividualMessage,
  addMessage
};
