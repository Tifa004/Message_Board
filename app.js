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
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages });
});

app.get("/post", (req, res) => {
  res.render("post", { title: "Post Message " });
});

app.post("/", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});
