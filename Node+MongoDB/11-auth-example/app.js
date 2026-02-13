const express = require("express");
const app = express();
const User = require("./models/user");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const path = require("path");
const { create } = require("domain");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;
  bycrypt.genSalt(10, (err, salt) => {
    bycrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await User.create({
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "secretkey");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.get("/login", async (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) return res.send("something went wrong");

  bycrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email }, "secretkey");
      res.cookie("token", token);
      res.send("logged in");
    } else {
      res.send("Something is wrong");
    }
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
