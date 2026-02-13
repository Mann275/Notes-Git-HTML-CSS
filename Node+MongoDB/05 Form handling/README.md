# 05 Form Handling - Backend Form Processing

A tutorial project for understanding form handling in Express.js, data parsing, sessions, and cookies management.

## 📚 Topics Covered

### 1. Form Handling Introduction

- Handling backend processes of forms from any frontend source
- Supporting data from:
  - Frontend libraries (React, Vue, Angular)
  - Frontend frameworks
  - Templating engines
  - Plain HTML forms

### 2. Data Parsing & Format Conversion

When data is sent from frontend to backend, it gets transferred in **blob/unreadable format**. We need to parse it to make it readable and usable.

**Express Middleware for Parsing:**

```javascript
// Parse JSON data from request body
app.use(express.json());

// Parse URL-encoded data from request body (form submissions)
app.use(express.urlencoded({ extended: true }));
```

**Middleware Functions:**

- **`express.json()`** - Parses incoming JSON payloads (API requests)
- **`express.urlencoded()`** - Parses URL-encoded data (traditional form submissions)
  - `extended: true` - Allows rich objects and arrays to be encoded

### 3. Sessions

**What is a Session?**

- A way to store user data on the **server**
- The browser keeps only a **session ID**
- Server uses session ID to retrieve user-specific data
- Used for maintaining user state across requests

**Use Cases:**

- User authentication
- Shopping cart data
- User preferences
- Multi-step form data

### 4. Cookies

**What is a Cookie?**

- Small piece of data stored in the **user's browser** by the server
- Sent back to server with **every request**
- Used to remember information about the user

**Common Uses:**

- Login status
- User preferences
- Tracking user behavior
- Session identifiers

**Installing Cookie Parser:**

```bash
npm i cookies-parser
```

## 🔧 Implementation Example

```javascript
import express from "express";
const app = express();

// Middleware for form handling
app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true })); // For form data

// Example: Handling POST request with form data
app.post("/submit-form", (req, res) => {
  console.log(req.body); // Parsed form data
  res.send("Form data received!");
});
```

## 📦 Dependencies

- **cookies-parser** (^1.2.0) - For handling cookies in the backend

### Installation

```bash
# Install all dependencies
npm install

# Install cookie parser specifically
npm i cookies-parser
```

## 🚀 Running the Application

```bash
# Using Node
node server.js

# Using Nodemon (recommended for development)
nodemon server.js
```

Server will start on **http://localhost:3000**

## 📍 Data Flow

```
Frontend Form → Blob/Unreadable Format → Express Middleware (Parsing) → Readable req.body → Backend Processing
```

## 🎯 Key Concepts

| Concept                  | Purpose                      | Storage Location |
| ------------------------ | ---------------------------- | ---------------- |
| **Session**              | Store user data server-side  | Server           |
| **Cookie**               | Store small data client-side | Browser          |
| **express.json()**       | Parse JSON requests          | Middleware       |
| **express.urlencoded()** | Parse form data              | Middleware       |

## 💡 Important Notes

- Always use parsing middleware **before** route handlers
- `express.json()` - For API endpoints receiving JSON
- `express.urlencoded()` - For traditional HTML form submissions
- `extended: true` - Allows nested objects in form data
- Cookies are sent with **every request** automatically

## 📝 Workflow

1. User submits form from frontend
2. Data sent as blob/unreadable format
3. Express middleware parses the data
4. `req.body` contains readable parsed data
5. Backend processes the data
6. Response sent back to client
