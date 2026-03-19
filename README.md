# 💬 Simple Message Board

A clean, lightweight web application built with **Node.js** and **Express**. This project allows users to view a list of messages and submit their own in real-time. It uses **EJS** for dynamic server-side rendering and includes a custom 404 error page.

---

## 🛠️ Tech Stack

- **Backend:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Templating Engine:** [EJS](https://ejs.co/) (Embedded JavaScript)
- **Styling:** CSS3 (Custom styles served via Express static middleware)
- **Development Tools:** [Nodemon](https://nodemon.io/) (for automatic server restarts)

---

## 🚀 Features

- **Home Page:** Displays a list of all messages with the username and a formatted, right-aligned timestamp.
- **Post Message:** A dedicated form page to submit new messages to the board.
- **Dynamic Data:** Messages are stored in a server-side array and updated instantly upon submission.
- **404 Handling:** A custom-designed error page for non-existent routes.
- **Modern UI:** Uses Flexbox for clean navigation and message headers.

---

## 📂 Project Structure

```text
.
├── public/          # Static files (styles.css)
├── views/           # EJS Templates (index.ejs, post.ejs, 404.ejs)
├── app.js           # Main server logic and routes
├── package.json     # Project dependencies and scripts
└── .gitignore       # Excludes node_modules and OS files
```
