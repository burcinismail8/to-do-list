const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
let items = [];
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  const date = new Date();
  let options = { day: "numeric", month: "long", weekday: "long" };
  let day = date.toLocaleDateString("en-US", options);
  res.render("list", { listTitle: day, newItems: items });
});
app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
