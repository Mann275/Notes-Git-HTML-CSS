const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { log } = require("console");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    res.render("index", { files: files });
  });
});
app.get("/files/:title", (req, res) => {
  fs.readFile(`./files/${req.params.title}`, "utf-8", function (err, data) {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.render("show", { fileName: req.params.title, fileData: data });
  });
});

app.get("/edit/:title", (req, res) => {
    res.render("edit",{fileName: req.params.title});
});
app.post("/edit", (req, res) => {
  fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
    if (err) {
      return res.status(500).send("Error renaming file");
    }
    res.redirect("/");
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("_")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    },
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
