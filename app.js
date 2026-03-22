const express = require("express");
const indexRouter = require("./routes/indexroutes");
const app = express();

app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
// app.get("/", (req, res) => {
//   res.render("index", { title: "Message Board", messages });
// });

// app.get("/post", (req, res) => {
//   res.render("post", { title: "Post Message " });
// });

// app.post("/", (req, res) => {
//   messages.push({
//     text: req.body.text,
//     user: req.body.user,
//     added: new Date(),
//   });
//   res.redirect("/");
// });
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Page Not Found" });
});

const port = process.env.port || 3000;
app.listen(port);
