const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

// 1. The Validation Rules
const validateMessage = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 15 })
    .withMessage("Name must be between 1 and 15 characters.")
    // .isAlpha() can be strict; use .isAlphanumeric() if you want to allow numbers
    .isAlpha().withMessage("Name must only contain letters.")
    .escape(), // Security: Prevents <script> tags
  
  body("message")
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage("Message must be between 1 and 200 characters.")
    .escape(),
];

// 2. The Logic Functions
async function getMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", {
      title: "Message Board",
      messages,
    });
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).send("Internal Server Error");
  }
}

async function createMessageGet(req, res) {
  // We pass empty values so EJS doesn't crash looking for 'errors'
  res.render("post", { title: "Post Message", errors: null, previousData: {} });
}

async function createMessagePost(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // If there are errors, stop and re-render the form
    return res.status(400).render("post", {
      title: "Post Message",
      errors: errors.array(),
      // We send back what they typed so the form isn't wiped clean
      previousData: req.body, 
    });
  }

  // If we reach here, the data is valid!
  const { username, message } = req.body;
  
  try {
    await db.postMessage(username, message);
    res.redirect("/");
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).send("Error saving to database");
  }
}

// 3. The Exports
module.exports = {
  getMessages,
  createMessageGet,
  // We wrap the validation and the logic into one array for the Router
  createMessagePost: [validateMessage, createMessagePost],
};