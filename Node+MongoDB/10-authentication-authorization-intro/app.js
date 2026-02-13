const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

// ============================================
// Cookie set and read example
app.use(cookieParser());
// app.get('/', (req, res) => {
//    res.cookie("name", "mann");
//    res.send('Hello World!');
// });
// app.get('/read', (req, res) => {
//     console.log(req.cookies);
//     res.send('Hedsfsdfsdfsld!');
// });

// ============================================
// // bcrypt encrypt example
// app.get("/", async (req, res) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     // console.log(salt);
//     bcrypt.hash("mann", salt, function (err, hash) {
//       // Store hash in your password DB.
//       console.log(hash);
//     });
//   });
// });

// // bcrypt compare example
// app.get("/", async (req, res) => {

//   bcrypt.compare("mann", "$2b$10$EaVFFKYPNPHAP6FMjzcnw.vBpdQvrbIYtsrj5YfYzVzj576VezalW", function (err, result) {
//     console.log(result);
//   });
// });

// ============================================
// // JWT example
// app.get("/", (req, res) => {
//   let token = jwt.sign({ email: "Mann@patel.com" }, "secretkey");
//   res.cookie("token", token);
//   console.log(token);
//   res.send("Token generated and set in cookie");
// });
// // app.get("/read", (req, res) => {
// //   console.log(req.cookies.token);
// //   res.send("Hedsfsdfsdfsld!");
// // });

// // JWT verify example
// app.get("/read", (req, res) => {
//   let data = jwt.verify(req.cookies.token, "secretkey");
//   console.log(data);
// });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
