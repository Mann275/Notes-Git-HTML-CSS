# 08 MongoDB & Mongoose - Complete Database Integration

A comprehensive tutorial project for understanding MongoDB, Mongoose ODM, and implementing complete CRUD operations with a NoSQL database.

## 📚 Topics Covered

### 1. What is MongoDB?

**MongoDB** is a popular **NoSQL database** that stores data in a flexible, JSON-like format called **BSON** (Binary JSON).

**Key Features:**

- Document-oriented database (stores data as documents)
- Schema-less (flexible structure)
- Highly scalable and performant
- Easy to work with JavaScript/Node.js
- Supports complex queries and indexing

**Why MongoDB?**

- Natural fit for JavaScript applications
- Flexible schema allows rapid development
- Easy to scale horizontally
- Rich query language
- Strong community support

### 2. SQL vs NoSQL Databases

| Feature            | SQL Databases                 | NoSQL Databases (MongoDB)        |
| ------------------ | ----------------------------- | -------------------------------- |
| **Data Structure** | Tables with rows & columns    | Collections with documents       |
| **Schema**         | Fixed schema (rigid)          | Flexible schema (schema-less)    |
| **Scalability**    | Vertical (add more power)     | Horizontal (add more servers)    |
| **Relationships**  | Complex joins                 | Embedded documents/references    |
| **Examples**       | MySQL, PostgreSQL, SQLite     | MongoDB, Cassandra, Redis        |
| **Best For**       | Complex transactions, banking | Flexible data, rapid development |
| **Query Language** | SQL (Structured Query)        | JavaScript-like queries          |

**When to use MongoDB:**

- ✅ Rapid prototyping and development
- ✅ Flexible, evolving data models
- ✅ Large-scale applications
- ✅ Real-time analytics
- ✅ Content management systems

**When to use SQL:**

- ✅ Complex transactions (banking, finance)
- ✅ Well-defined relationships
- ✅ ACID compliance requirements
- ✅ Data integrity is critical

### 3. MongoDB Terminology

Understanding MongoDB's structure:

```
Database → Collection → Document → Field
```

| SQL Term     | MongoDB Term              | Description                      |
| ------------ | ------------------------- | -------------------------------- |
| **Database** | **Database**              | Top-level container for data     |
| **Table**    | **Collection**            | Group of related documents       |
| **Row**      | **Document**              | Single record (JSON-like object) |
| **Column**   | **Field**                 | Key-value pair in document       |
| **Index**    | **Index**                 | Performance optimization         |
| **JOIN**     | **Embedding/Referencing** | Linking data                     |

**Example Structure:**

```javascript
Database: "ecommerce"
  ├── Collection: "users"
  │     ├── Document: { _id: 1, name: "Mann", age: 21 }
  │     └── Document: { _id: 2, name: "John", age: 25 }
  └── Collection: "products"
        ├── Document: { _id: 1, title: "Laptop", price: 50000 }
        └── Document: { _id: 2, title: "Phone", price: 30000 }
```

### 4. What is Mongoose?

**Mongoose** is an **Object Data Modeling (ODM)** library for MongoDB and Node.js.

**Why Mongoose?**

- Provides **schema** validation (structure for data)
- Simplifies MongoDB operations
- Built-in type casting and validation
- Middleware support (hooks)
- Query building helpers
- Easier to write and maintain code

**Without Mongoose vs With Mongoose:**

```javascript
// Without Mongoose (Native MongoDB Driver)
db.collection("users").insertOne({ name: "Mann", age: 21 });

// With Mongoose (ODM)
await User.create({ name: "Mann", age: 21 });
```

### 5. Backend Architecture

Understanding the flow of data:

```
Frontend (React/HTML)
    ↕ HTTP Requests
Application Server (Express.js)
    ↕ Mongoose
Database Server (MongoDB)
    ↕ Data Storage
```

**Components:**

1. **Frontend** - User interface (sends requests)
2. **Application Server** - Business logic, API routes (Express.js)
3. **Database Server** - Data storage and retrieval (MongoDB)

### 6. MongoDB Atlas - Cloud Database

**What is MongoDB Atlas?**

- Cloud-hosted MongoDB database service
- No need to install MongoDB locally
- Free tier available (512MB storage)
- Automatic backups and scaling
- Global deployment

**Benefits:**

- ✅ No server management needed
- ✅ Easy to set up and use
- ✅ Production-ready infrastructure
- ✅ Built-in security features
- ✅ Free for learning and small projects

**Connection String Example:**

```javascript
mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### 7. Mongoose Schema

**What is Schema?**

A **schema** is a **blueprint** that defines the structure of documents in a collection.

**Purpose:**

- Define field names and data types
- Add validation rules
- Set default values
- Define methods and virtuals

**Creating a Schema:**

```javascript
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});
```

**Data Types in Mongoose:**

| Type             | Description           | Example                 |
| ---------------- | --------------------- | ----------------------- |
| `String`         | Text data             | "Mann Patel"            |
| `Number`         | Integers and decimals | 21, 99.99               |
| `Boolean`        | true/false            | true, false             |
| `Date`           | Date and time         | new Date()              |
| `Array`          | List of values        | [1, 2, 3]               |
| `Object` or `{}` | Nested objects        | { city: "NYC" }         |
| `ObjectId`       | MongoDB ID reference  | mongoose.Types.ObjectId |
| `Mixed`          | Any data type         | Can be anything         |

**Schema with Validation:**

```javascript
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // Field is mandatory
    minlength: 3, // Minimum length
    maxlength: 50, // Maximum length
  },
  age: {
    type: Number,
    required: true,
    min: 18, // Minimum value
    max: 100, // Maximum value
  },
  email: {
    type: String,
    required: true,
    unique: true, // No duplicates
    lowercase: true, // Convert to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Only these values allowed
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

### 8. Mongoose Model

**What is Model?**

A **model** is a **constructor** created from a schema. It provides an interface to interact with the database.

**Creating a Model:**

```javascript
// Step 1: Define Schema
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// Step 2: Create Model
const User = mongoose.model("user", userSchema);
//                        ↑           ↑
//                   collection name  schema
```

**Model = Schema + Database Interface**

**Exporting Model:**

```javascript
// usermodel.js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
```

### 9. Connecting to MongoDB

**Establishing Database Connection:**

```javascript
const mongoose = require("mongoose");

// Local MongoDB connection
mongoose.connect("mongodb://localhost:27017/mongointro");

// MongoDB Atlas connection (cloud)
mongoose.connect("mongodb+srv://username:password@cluster.mongodb.net/dbname");
```

**Connection String Breakdown:**

```
mongodb://localhost:27017/mongointro
   ↑         ↑         ↑       ↑
protocol   host      port   database
```

**With Error Handling:**

```javascript
mongoose
  .connect("mongodb://localhost:27017/mongointro")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("Connection Error:", err));
```

**Important Notes:**

- Connection should be established **before** using models
- Database is **auto-created** if it doesn't exist
- Connection is **asynchronous** (use async/await or .then())

### 10. CRUD Operations with Mongoose

**CRUD** = Create, Read, Update, Delete

#### A. CREATE - Adding Documents

**Method 1: Using `create()`**

```javascript
const User = require("./usermodel");

// Create single user
const newUser = await User.create({
  name: "Mann",
  age: 21,
  email: "mann@gmail.com",
});
```

**Method 2: Using `new` and `save()`**

```javascript
const newUser = new User({
  name: "Mann",
  age: 21,
  email: "mann@gmail.com",
});
await newUser.save();
```

**Method 3: Insert Many**

```javascript
await User.insertMany([
  { name: "Mann", age: 21, email: "mann@gmail.com" },
  { name: "John", age: 25, email: "john@gmail.com" },
  { name: "Alice", age: 23, email: "alice@gmail.com" },
]);
```

#### B. READ - Finding Documents

**Find All Documents:**

```javascript
// Get all users
const allUsers = await User.find();
// Returns: Array of all user documents
```

**Find One Document:**

```javascript
// Find first user with name "Mann"
const user = await User.findOne({ name: "Mann" });
// Returns: Single document or null
```

**Find by ID:**

```javascript
const user = await User.findById("65f1234567890abcdef12345");
```

**Find with Conditions:**

```javascript
// Find users older than 20
const users = await User.find({ age: { $gt: 20 } });

// Find users with specific email
const user = await User.findOne({ email: "mann@gmail.com" });

// Find active users
const activeUsers = await User.find({ isActive: true });
```

**Query Operators:**

| Operator | Meaning               | Example                       |
| -------- | --------------------- | ----------------------------- |
| `$eq`    | Equal                 | `{ age: { $eq: 21 } }`        |
| `$ne`    | Not equal             | `{ age: { $ne: 21 } }`        |
| `$gt`    | Greater than          | `{ age: { $gt: 20 } }`        |
| `$gte`   | Greater than or equal | `{ age: { $gte: 21 } }`       |
| `$lt`    | Less than             | `{ age: { $lt: 30 } }`        |
| `$lte`   | Less than or equal    | `{ age: { $lte: 25 } }`       |
| `$in`    | In array              | `{ age: { $in: [21, 25] } }`  |
| `$nin`   | Not in array          | `{ age: { $nin: [21, 25] } }` |

**Select Specific Fields:**

```javascript
// Only get name and email
const users = await User.find().select("name email");

// Exclude password field
const users = await User.find().select("-password");
```

**Limit and Sort:**

```javascript
// Get first 10 users
const users = await User.find().limit(10);

// Sort by age (ascending)
const users = await User.find().sort({ age: 1 });

// Sort by age (descending)
const users = await User.find().sort({ age: -1 });

// Combine: Get 5 oldest users
const users = await User.find().sort({ age: -1 }).limit(5);
```

#### C. UPDATE - Modifying Documents

**Update One Document:**

```javascript
const updatedUser = await User.findOneAndUpdate(
  { name: "Mann" }, // Find condition
  { email: "mannpatel@gmail.com" }, // Update data
  { new: true }, // Return updated document
);
```

**Update by ID:**

```javascript
const updatedUser = await User.findByIdAndUpdate(
  "65f1234567890abcdef12345",
  { age: 22 },
  { new: true },
);
```

**Update Multiple Documents:**

```javascript
// Update all users older than 20
await User.updateMany({ age: { $gt: 20 } }, { isActive: true });
```

**Update Options:**

| Option                | Description             | Example                   |
| --------------------- | ----------------------- | ------------------------- |
| `new: true`           | Return updated document | `{ new: true }`           |
| `runValidators: true` | Run schema validation   | `{ runValidators: true }` |
| `upsert: true`        | Create if not exists    | `{ upsert: true }`        |

**Increment/Decrement:**

```javascript
// Increment age by 1
await User.findByIdAndUpdate(userId, { $inc: { age: 1 } });

// Decrement age by 1
await User.findByIdAndUpdate(userId, { $inc: { age: -1 } });
```

#### D. DELETE - Removing Documents

**Delete One Document:**

```javascript
const deletedUser = await User.findOneAndDelete({ name: "Mann" });
// Returns: Deleted document or null
```

**Delete by ID:**

```javascript
const deletedUser = await User.findByIdAndDelete("65f1234567890abcdef12345");
```

**Delete Multiple Documents:**

```javascript
// Delete all inactive users
await User.deleteMany({ isActive: false });

// Delete all users older than 50
await User.deleteMany({ age: { $gt: 50 } });
```

**Delete All Documents:**

```javascript
// ⚠️ BE CAREFUL - Deletes everything!
await User.deleteMany({});
```

## 🔧 Available Routes

| Method | Route      | Purpose             | Returns               |
| ------ | ---------- | ------------------- | --------------------- |
| GET    | `/`        | Home page           | Welcome message       |
| GET    | `/create`  | Create new user     | Created user document |
| GET    | `/read`    | Get all users       | Array of all users    |
| GET    | `/readone` | Get one user (Mann) | Single user document  |
| GET    | `/update`  | Update user email   | Updated user document |
| GET    | `/delete`  | Delete user         | Deleted user info     |

**Example Usage:**

```bash
# Create user
http://localhost:3000/create

# Read all users
http://localhost:3000/read

# Read one user
http://localhost:3000/readone

# Update user
http://localhost:3000/update

# Delete user
http://localhost:3000/delete
```

## 🎯 Key Learning Concepts

### Mongoose Method Summary

| Operation  | Method                | Purpose           | Returns               |
| ---------- | --------------------- | ----------------- | --------------------- |
| **CREATE** | `create()`            | Create document   | Created document      |
|            | `save()`              | Save new document | Saved document        |
|            | `insertMany()`        | Create multiple   | Array of created docs |
| **READ**   | `find()`              | Get all documents | Array                 |
|            | `findOne()`           | Get one document  | Document or null      |
|            | `findById()`          | Get by ID         | Document or null      |
| **UPDATE** | `findOneAndUpdate()`  | Update one        | Updated document      |
|            | `findByIdAndUpdate()` | Update by ID      | Updated document      |
|            | `updateMany()`        | Update multiple   | Update result         |
| **DELETE** | `findOneAndDelete()`  | Delete one        | Deleted document      |
|            | `findByIdAndDelete()` | Delete by ID      | Deleted document      |
|            | `deleteMany()`        | Delete multiple   | Delete result         |

### async/await Pattern

All Mongoose operations return **Promises**, so use `async/await`:

```javascript
// ✅ Correct - Using async/await
app.get("/route", async (req, res) => {
  const data = await Model.find();
  res.send(data);
});

// ❌ Wrong - Without await
app.get("/route", (req, res) => {
  const data = Model.find(); // Returns Promise, not data
  res.send(data);
});
```

### Schema vs Model

```javascript
// Schema = Blueprint (structure definition)
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

// Model = Constructor (database interface)
const User = mongoose.model("user", userSchema);

// Usage:
await User.create({ name: "Mann", age: 21 });
```



**Master MongoDB & Mongoose! 🚀🍃**
