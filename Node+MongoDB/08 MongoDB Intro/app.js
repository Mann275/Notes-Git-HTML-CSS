const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello, MongoDB!");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Mann",
    age: 21,
    email: "mann@gmail.com",
  });
  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  let readUser = await userModel.find();
  res.send(readUser);
});

app.get("/readone", async (req, res) => {
  let readUserone = await userModel.findOne({ name: "Mann" });
  res.send(readUserone);
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { name: "Mann" },
    { email: "mannpatel@gmail.com" },
    { new: true },
  );
  res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ name: "Mann" });
  res.send({ message: "User Deleted", user: deletedUser });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
