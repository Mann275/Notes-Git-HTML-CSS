// 1. Node.js Basics:
// It's not a programming language , framework,library,technology but it's a runtime environment for executing JavaScript code outside of a web browser.

//============================================================

// 2. Introduction to Node.js
//js runtime environment that allows developers to execute JavaScript code on the server side. It provides a platform for building scalable and high-performance applications using JavaScript. Node.js is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, making it efficient and suitable for real-time applications. With Node.js, developers can create server-side applications, command-line tools, and even desktop applications using JavaScript.
// Node is basically a rapper with js and v8 engine and its a run time env and till it runs give env to make backend with js

//============================================================

// 3. Installation and Setup
// node & npm -> npm stands for Node Package Manager and it allows developers to easily share and reuse code by providing a vast ecosystem of open-source libraries and tools. With npm, developers can install packages, manage versions, and handle dependencies efficiently, making it an essential tool for any Node.js project.

//============================================================

// 4. Working With Node.js Modules
// npm init - it is a command used to create a new Node.js project and generate a package.json file. The package.json file is a manifest that contains metadata about the project, including its name, version, dependencies, and scripts.

//============================================================

// 5. File System Operations Module in Node.js:

const fs = require("node:fs");
// Write and Append to a File:
// fs.writeFile("hello.txt", "Hello, World! , wassuuppp", (err) => {
// fs.appendFile("hello.txt", "check check appending this ", (err) => {
//   if (err) console.error(err);
//   else console.log("File created successfully!");
// });

// Rename and Copy a File:
// fs.rename("hello.txt", "greet.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("File renamed successfully!");
// });

// fs.copyFile("hello.txt", "./copy/greetsss.txt", (err) => {
//   if (err) console.error(err.message);
//   else console.log("File copied successfully!");
// });

// Unlink (Delete) a File:
// fs.unlink("hello.txt", (err) => {
//   if (err) console.error(err.message);
//   else console.log("File deleted successfully!");
// });

// Remove a Directory:
// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) console.error(err);
//   else console.log("Directory removed successfully!");
// });

//============================================================
// 6. Understanding HTTP Module
// http - it is protocol or rule which you need to follow to send data from client to server and vice versa . if not followed then on internet you will get no response or error.

const http = require("node:http");
// const server = http.createServer((req, res) => {
// res.end("Hello, World! , wassuuppp");
// })
// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
