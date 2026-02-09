# Node.js & File System Operations

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Complete guide to Node.js fundamentals and file system operations.

---

## 📚 Topics Covered

### 1. Node.js Basics

**What is Node.js?**

Node.js is **NOT**:

- ❌ A programming language
- ❌ A framework
- ❌ A library
- ❌ A technology

Node.js **IS**:

- ✅ A **runtime environment** for executing JavaScript code outside of a web browser

---

### 2. Introduction to Node.js

Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the **server side**.

**Key Features:**

- Built on **Chrome's V8 JavaScript engine**
- Uses **event-driven, non-blocking I/O model**
- Efficient for **real-time applications**
- Scalable and high-performance

**What Can You Build?**

- 🖥️ Server-side applications
- 🔧 Command-line tools
- 💻 Desktop applications

> Node.js is basically a wrapper around JS and V8 engine, providing a runtime environment to build backend applications with JavaScript.

---

### 3. Installation and Setup

#### Node & npm

**npm** = Node Package Manager

**What is npm?**

- Allows developers to easily **share and reuse code**
- Provides a vast ecosystem of **open-source libraries and tools**
- Handles package installation, version management, and dependencies

**npm Commands:**

```bash
npm init              # Create new Node.js project
npm install <package> # Install a package
npm uninstall <package> # Remove a package
```

---

### 4. Working With Node.js Modules

#### npm init

Creates a new Node.js project and generates a `package.json` file.

```bash
npm init
```

**package.json** contains:

- Project name
- Version
- Dependencies
- Scripts
- Metadata

---

### 5. File System Operations Module

The `fs` module provides methods to interact with the file system.

```javascript
const fs = require("node:fs");
```

#### 📝 Write to a File

Creates a new file or **overwrites** existing content.

```javascript
fs.writeFile("hello.txt", "Hello, World!", (err) => {
  if (err) console.error(err);
  else console.log("File created successfully!");
});
```

#### ➕ Append to a File

Adds content to the **end** of an existing file.

```javascript
fs.appendFile("hello.txt", "Appending this text", (err) => {
  if (err) console.error(err);
  else console.log("Content appended successfully!");
});
```

#### 🔄 Rename a File

Changes the name of an existing file.

```javascript
fs.rename("hello.txt", "greet.txt", (err) => {
  if (err) console.error(err);
  else console.log("File renamed successfully!");
});
```

#### 📋 Copy a File

Creates a copy of a file in a different location.

```javascript
fs.copyFile("hello.txt", "./copy/greet.txt", (err) => {
  if (err) console.error(err.message);
  else console.log("File copied successfully!");
});
```

#### 🗑️ Delete a File (Unlink)

Removes a file from the file system.

```javascript
fs.unlink("hello.txt", (err) => {
  if (err) console.error(err.message);
  else console.log("File deleted successfully!");
});
```

#### 📁 Remove a Directory

Deletes a directory and its contents.

```javascript
fs.rm("./copy", { recursive: true }, (err) => {
  if (err) console.error(err);
  else console.log("Directory removed successfully!");
});
```

**Note:** `{ recursive: true }` allows deletion of directories with content.

---

### 6. Understanding HTTP Module

**HTTP** = HyperText Transfer Protocol

It's a **protocol (set of rules)** for sending data between client and server.

```javascript
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

**How it Works:**

1. Create server using `http.createServer()`
2. Define response in callback function
3. Start server with `server.listen(port)`

---

## 🎯 Quick Reference

| Operation   | Method                | Purpose                    |
| ----------- | --------------------- | -------------------------- |
| Write       | `fs.writeFile()`      | Create/overwrite file      |
| Append      | `fs.appendFile()`     | Add content to end of file |
| Rename      | `fs.rename()`         | Change file name           |
| Copy        | `fs.copyFile()`       | Duplicate file             |
| Delete      | `fs.unlink()`         | Remove file                |
| Remove Dir  | `fs.rm()`             | Delete directory           |
| HTTP Server | `http.createServer()` | Create web server          |

---

## 📝 Practice File

All examples are available in [script.js](script.js)

---

## 🔑 Key Concepts

### Event-Driven & Non-Blocking I/O

**Blocking (Synchronous):**

```
Task 1 → Wait → Task 2 → Wait → Task 3
```

**Non-Blocking (Asynchronous):**

```
Task 1 ─┐
Task 2 ─┼─→ All running simultaneously
Task 3 ─┘
```

This makes Node.js **efficient** for handling multiple operations at once!

---

Made with ❤️ for learning Node.js
