import express from "express";
const app = express();
// Middleware For Form Handling
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//Middleware
app.use(function (req, res, next) {
  console.log("Middleware worked");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 2 worked & Request received at:", new Date());
  next();
});

// Routes
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/xyz", function (req, res) {
  res.send("Hello My Self XYZ and I am a Full Stack Developer");
});
app.get("/contact", function (req, res, next) {
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
