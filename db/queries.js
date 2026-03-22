const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM board");
  return rows;
}

async function postMessage(username , message) {
  await pool.query("INSERT INTO board (username, message) VALUES ($1,$2)", [username,message]);
}

module.exports = {
  getAllMessages,
  postMessage
};
