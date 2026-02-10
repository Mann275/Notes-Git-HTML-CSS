import express from "express";
const app = express();

// Creating a basic route

// app.get(route,requestHandler)

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/profile", function (req, res) {
  res.send("This is the profile page");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
