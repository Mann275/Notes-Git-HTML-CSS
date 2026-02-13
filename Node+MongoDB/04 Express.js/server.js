import express from "express";
const app = express();

// this is a middleware and it will be executed for every request that is made to the server
app.use(function (req, res, next) {
  console.log("Middleware worked");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 2 worked & Request received at:", new Date());
  next();
});

// Creating a basic route
// app.get(route,requestHandler)
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/xyz", function (req, res) {
  res.send("Hello My Self XYZ and I am a Full Stack Developer");
});
app.get("/contact", function (req, res, next) {
  // res.send("contact me at: xyz@example.com");
  return next(new Error("Contact route error"));
});

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Starting the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
