# 06 EJS & Dynamic Routing - Template Engine & URL Parameters

A tutorial project for understanding EJS templating engine, static file serving, and dynamic routing in Express.js.

## 📚 Topics Covered

### 1. Project Initialization

```bash
# Initialize npm project
npm init -y
```

### 2. Express Installation

```bash
# Install Express framework
npm install express
```

### 3. Setting Up Form Parsers

Configure middleware to parse incoming request data:

```javascript
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data
```

### 4. EJS (Embedded JavaScript Templates)

**What is EJS?**

- EJS is a templating engine similar to HTML with extra features
- Allows JavaScript code execution inside templates
- Supports variables and dynamic content rendering

**Installation:**

```bash
npm i ejs
```

**Setup as View Engine:**

```javascript
app.set("view engine", "ejs");
```

**EJS Syntax:**

```html
<!-- Output value -->
<h1>Hello <%= username %></h1>

<!-- Execute JavaScript -->
<h1>Sum: <%= 25 + 2 %></h1>

<!-- JavaScript logic (no output) -->
<% if (user) { %>
<p>Welcome back!</p>
<% } %>
```

**Rendering EJS Pages:**

```javascript
app.get("/", (req, res) => {
  res.render("index"); // Renders views/index.ejs
});
```

### 5. Setting Up Public Static Files

**Folder Structure:**

```
public/
├── stylesheets/
│   └── style.css
├── javascript/
│   └── script.js
└── images/
```

**Configure Static Files:**

```javascript
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
```

**Linking in EJS:**

```html
<!-- CSS -->
<link rel="stylesheet" href="/stylesheets/style.css" />

<!-- JavaScript -->
<script src="/javascript/script.js"></script>

<!-- Images -->
<img src="/images/logo.png" alt="Logo" />
```

### 6. Dynamic Routing

**What is Dynamic Routing?**

- Routes with variable segments that can change
- Use `:` to define dynamic parameters
- Access dynamic values via `req.params`

**Examples:**

**Single Parameter:**

```javascript
app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello ${username}, Welcome to profile page`);
});

// URL: /profile/mann → username = "mann"
```

**Multiple Parameters:**

```javascript
app.get("/profile/:username/:age", (req, res) => {
  const { username, age } = req.params;
  res.send(`Hello ${username}, you are ${age} years old`);
});

// URL: /profile/mann/25 → username = "mann", age = "25"
```

**Getting Data from Frontend:**

- **Dynamic Routes**: `req.params.username`
- **Query Parameters**: `req.query.search` (from `?search=value`)
- **Form Data**: `req.body.email` (from POST requests)

## 🗂️ Project Structure

```
06 ejs & Dynamic Routing/
├── index.js                 # Main server file
├── inthis.js               # Notes/concepts file
├── package.json            # Dependencies
├── views/                  # EJS templates
│   └── index.ejs
├── public/                 # Static assets
│   ├── stylesheets/
│   ├── javascript/
│   └── images/
└── node_modules/           # Installed packages
```

## 📦 Dependencies

- **express** (^5.2.1) - Web application framework
- **ejs** (^4.0.1) - Embedded JavaScript templating engine

### Installation

```bash
# Install all dependencies
npm install

# Or install individually
npm install express ejs
```

## 🚀 Running the Application

```bash
# Start the server
node index.js

# Or with nodemon (recommended)
nodemon index.js
```

Server runs on **http://localhost:3000**

## 📍 Available Routes

| Route                     | Type    | Description                         |
| ------------------------- | ------- | ----------------------------------- |
| `/`                       | Static  | Renders index.ejs template          |
| `/profile/:username`      | Dynamic | Shows profile with username         |
| `/profile/:username/:age` | Dynamic | Shows profile with username and age |

**Example URLs:**

- `http://localhost:3000/`
- `http://localhost:3000/profile/mann`
- `http://localhost:3000/profile/mann/25`

## 🎯 Key Concepts

### EJS vs HTML

| Feature              | HTML  | EJS  |
| -------------------- | ----- | ---- |
| **Static Content**   | ✅    | ✅   |
| **JavaScript Logic** | ❌    | ✅   |
| **Variables**        | ❌    | ✅   |
| **Dynamic Content**  | ❌    | ✅   |
| **File Extension**   | .html | .ejs |

### Request Data Access

| Source             | Method       | Example                          |
| ------------------ | ------------ | -------------------------------- |
| **URL Parameters** | `req.params` | `/user/:id` → `req.params.id`    |
| **Query Strings**  | `req.query`  | `/search?q=node` → `req.query.q` |
| **Form/Body Data** | `req.body`   | POST data → `req.body.email`     |

## 💡 Important Notes

1. **EJS Templates** must be in `views/` folder
2. **Static files** must be in `public/` folder
3. Use `res.render()` for EJS pages, `res.send()` for plain text
4. Dynamic parameters are accessed via `req.params`
5. Static file paths in EJS start from public folder root (`/stylesheets/...`)

## 📝 Workflow

```
Client Request → Express Server → Route Matching →
Dynamic Parameter Extraction → EJS Template Rendering →
HTML Response → Client
```

## 🔧 Common EJS Tags

| Tag      | Purpose                 | Example                    |
| -------- | ----------------------- | -------------------------- |
| `<%= %>` | Output (escaped)        | `<%= user.name %>`         |
| `<%- %>` | Output (unescaped HTML) | `<%- htmlContent %>`       |
| `<% %>`  | JavaScript logic        | `<% if (isAdmin) { %>`     |
| `<%# %>` | Comments                | `<%# This is a comment %>` |
