// 2 . express install
const express = require("express");
const app = express();
const path = require("path");
// 3. setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 5. setting up public static files
app.use(express.static(path.join(__dirname, "public")));

// 4. setting up ejs pages (the frontend pages)
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/profile/:username", function (req, res) {
  // we can access the dynamic part of the route using req.params
  res.send(`Hello  ${req.params.username}, Welcome profile page`);
});
// 6. Dynamic Routing
app.get("/profile/:username/:age", function (req, res) {
  // we can access the dynamic part of the route using req.params
  res.send(`Hello ${req.params.username}, you are ${req.params.age} years old`);
  // res.send(req.params);
});

// starting the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
