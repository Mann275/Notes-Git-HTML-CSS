# 09 Complete CRUD Application with EJS & MongoDB

A comprehensive full-stack CRUD application combining **Express.js**, **EJS templating**, **MongoDB**, and **Mongoose** to create a complete user management system. This project integrates all concepts learned from previous modules.

## 📚 Topics Covered

### 1. Full-Stack CRUD Application

**What is Full-Stack CRUD?**

- **Full-Stack**: Frontend (EJS views) + Backend (Express) + Database (MongoDB)
- **CRUD**: Create, Read, Update, Delete operations
- Complete data flow from user interface to database

**Application Architecture:**

```
User Interface (EJS Templates)
        ↕
    Express Routes
        ↕
  Mongoose Models
        ↕
  MongoDB Database
```

### 2. Integration of All Previous Concepts

This project combines everything learned so far:

| Concept             | From Module | Implementation                  |
| ------------------- | ----------- | ------------------------------- |
| **Express.js**      | 04          | Server setup, routing           |
| **Form Handling**   | 05          | POST/GET requests, body parsing |
| **EJS Templating**  | 06          | Dynamic views, data rendering   |
| **Dynamic Routing** | 06          | Route parameters (`:id`)        |
| **Static Files**    | 06          | CSS/JS serving                  |
| **MongoDB**         | 08          | Database connection             |
| **Mongoose**        | 08          | Schema, Model, CRUD operations  |

### 3. Project Structure Organization

**MVC-like Pattern:**

```
Model (Data)  →  Controller (Routes)  →  View (EJS)
```

**Benefits:**

- ✅ Organized and maintainable code
- ✅ Separation of concerns
- ✅ Easy to scale and modify
- ✅ Industry-standard approach

### 4. RESTful Route Design

**REST = Representational State Transfer**

Following REST conventions for CRUD operations:

| Action       | HTTP Method | Route          | Purpose                     |
| ------------ | ----------- | -------------- | --------------------------- |
| **Create**   | POST        | `/create`      | Create new user             |
| **Read**     | GET         | `/` or `/read` | Display all users           |
| **Read One** | GET         | `/edit/:id`    | Get single user for editing |
| **Update**   | POST        | `/update/:id`  | Update existing user        |
| **Delete**   | GET         | `/delete/:id`  | Delete user                 |

**Why RESTful?**

- Standard convention developers understand
- Predictable URL structure
- Easy to maintain and scale
- Clean and semantic routes

### 5. Form Handling - POST vs GET

**GET Requests:**

- Data sent in URL (visible)
- Used for retrieving data
- Can be bookmarked
- Cached by browsers

**POST Requests:**

- Data sent in request body (hidden)
- Used for creating/updating data
- More secure for sensitive data
- Not cached

**Example:**

```javascript
// GET - Retrieve data
app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

// POST - Send data to server
app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  await userModel.create({ name, email, image });
  res.redirect("/read");
});
```

### 6. Body Parsing Middleware

**Why Body Parsing?**

When form data is submitted, it comes in **raw format** (unreadable). We need middleware to parse it.

**Express Middleware:**

```javascript
// Parse JSON data
app.use(express.json());

// Parse form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));
```

**What it does:**

- Converts form data to JavaScript objects
- Makes data accessible via `req.body`
- Essential for POST requests

**Without Parsing:**

```javascript
console.log(req.body); // undefined ❌
```

**With Parsing:**

```javascript
console.log(req.body); // { name: "Mann", email: "mann@gmail.com" } ✅
```

### 7. Dynamic Route Parameters

**What are Route Parameters?**

Variable segments in URLs that capture values.

**Syntax:**

```javascript
app.get("/edit/:id", async (req, res) => {
  const userId = req.params.id;
  // Use userId to fetch specific user
});
```

**URL Examples:**

```
/edit/698eb67c846bbd1df2999900  →  req.params.id = "698eb67c846bbd1df2999900"
/delete/12345                    →  req.params.id = "12345"
/profile/mann                    →  req.params.username = "mann"
```

**Multiple Parameters:**

```javascript
app.get("/user/:id/post/:postId", (req, res) => {
  console.log(req.params.id); // User ID
  console.log(req.params.postId); // Post ID
});
```

### 8. Redirects in Express

**What is Redirect?**

Automatically navigate user to a different page after an operation.

**Syntax:**

```javascript
res.redirect("/path");
```

**Why Use Redirects?**

- ✅ Prevent form resubmission (refresh page issue)
- ✅ Navigate user after successful operation
- ✅ Better user experience
- ✅ Follow REST patterns

**Example Flow:**

```
User submits form → POST /create → Create user → Redirect to /read
```

### 9. EJS Conditionals & Loops

**Conditionals (if/else):**

```html
<% if (users.length > 0) { %>
<h2>Users Found!</h2>
<% } else { %>
<h2>No users found</h2>
<% } %>
```

**Loops (forEach):**

```html
<% users.forEach((user) => { %>
<div>
  <h3><%= user.name %></h3>
  <p><%= user.email %></p>
</div>
<% }) %>
```

**Accessing Array/Object Data:**

```html
<!-- Array length -->
<%= users.length %>

<!-- Object properties -->
<%= user.name %> <%= user._id %>
```

### 10. Client-Side Confirmation Dialogs

**Why Confirmation for Delete?**

- Prevent accidental deletions
- Better user experience
- Give users a chance to cancel

**Implementation:**

```html
<a
  href="/delete/<%= user._id %>"
  onclick="return confirm('Are you sure you want to delete this user?')"
>
  Delete
</a>
```


## 📍 Complete Route Table

| Method | Route         | Purpose           | Input               | Output              |
| ------ | ------------- | ----------------- | ------------------- | ------------------- |
| GET    | `/`           | Show create form  | -                   | index.ejs           |
| POST   | `/create`     | Create new user   | Form data           | Redirect to /read   |
| GET    | `/read`       | Display all users | -                   | read.ejs with users |
| GET    | `/edit/:id`   | Show edit form    | User ID             | edit.ejs with user  |
| POST   | `/update/:id` | Update user       | User ID + Form data | Redirect to /read   |
| GET    | `/delete/:id` | Delete user       | User ID             | Redirect to /read   |

