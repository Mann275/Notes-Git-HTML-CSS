const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const post = require("./models/post");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "Mann",
    age: 22,
    email: "mann@example.com",
  });
  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "This is my first post",
    user: "698efb3fa5d29623264263dd",
  });
  let user = await userModel.findOne({
    _id: "698efb3fa5d29623264263dd",
  });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
