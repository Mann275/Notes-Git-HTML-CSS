# 04 Express.js - Web Application Framework

A tutorial project for understanding Express.js framework basics and building web applications with Node.js.

## 📚 Topics Covered

### 1. Introduction to Express.js

- **Express.js** - A minimal and flexible Node.js web application framework (npm package)
- **Framework vs Library**:
  - **Framework**: You follow rules/flow but can write individual code within it
  - **Library**: Write code any way you want and use the library as needed
- Express manages everything from receiving requests to sending responses

### 2. Setting up a Basic Express.js Application

```bash
# Install Express
npm install express

# Install nodemon globally (for auto-restart on code changes)
npm i nodemon -g
```

**Basic Express Application:**

```javascript
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### 3. Routing

Routes define different endpoints for your application:

```
patelmann.me/project    ← This is a route
patelmann.me/contact    ← Another route
patelmann.me/user/:id   ← Dynamic route
```

**Example Routes:**

```javascript
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});
```

### 4. Middleware

**Flow**: `Request → Middleware → Route Handler → Response`

**Middleware Definition:**

- Function with access to `req` (request), `res` (response), and `next` (next middleware)
- **Syntax**: `(req, res, next) => { /* logic */ next(); }`

**Types of Middleware:**

- Application-level
- Router-level
- Error-handling
- Built-in
- Third-party

**Example:**

```javascript
// Application-level middleware
app.use((req, res, next) => {
  console.log("Request received at:", new Date());
  next(); // Pass control to next middleware
});
```

### 5. Request and Response Handling

**Request Object (`req`)**:

- Contains all information about the incoming request
- Properties: `req.params`, `req.query`, `req.body`, etc.

**Response Object (`res`)**:

- Used to send response back to client
- Methods: `res.send()`, `res.json()`, `res.status()`, etc.

### 6. Error Handling

Error handling middleware catches and handles errors in the application.

**Syntax**: `(err, req, res, next) => { /* handle error */ }`

**Important**: Define error-handling middleware **after** all other middlewares and routes.

**Example:**

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

## 🚀 Running the Application

```bash
# Using Node
node server.js

# Using Nodemon (auto-restart on changes)
nodemon server.js
```

The server will start on **http://localhost:3000**

## 📍 Available Routes

- **GET /** - Returns "Hello World"
- **GET /xyz** - Returns developer introduction
- **GET /contact** - Demonstrates error handling

## 📦 Dependencies

- **express** (^5.2.1) - Fast, unopinionated web framework for Node.js

### Installation

```bash
# Install all dependencies
npm install

# Install Express specifically
npm install express
```

## 🛠️ Dev Dependencies (Recommended)

```bash
# Install nodemon globally for auto-restart
npm install -g nodemon
```

## 📝 Key Concepts Demonstrated

✅ Basic Express server setup  
✅ Multiple middleware functions  
✅ Route creation and handling  
✅ Error handling middleware  
✅ Request/Response cycle  
✅ ES6 modules (import/export)
