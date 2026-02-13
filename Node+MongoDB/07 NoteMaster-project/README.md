# 07 File System Operations & CRUD Operations - Building NoteMaster

A tutorial project for understanding Node.js File System operations and building a complete CRUD (Create, Read, Update, Delete) application using file-based storage.

## 📚 Topics Covered

### 1. File System (fs) Module

**What is fs Module?**

- Built-in Node.js module for file operations
- No installation needed - comes with Node.js
- Allows reading, writing, creating, and deleting files and folders
- Has both **synchronous** and **asynchronous** methods

**Importing fs Module:**

```javascript
const fs = require("fs");
```

### 2. Reading Files - `fs.readFile()`

Read file contents from the file system.

**Syntax:**

```javascript
fs.readFile(path, encoding, callback);
```

**Example:**

```javascript
fs.readFile("./files/note.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log("File Content:", data);
  }
});
```

**Parameters:**

- `path` - File path (relative or absolute)
- `encoding` - `'utf-8'` for text files
- `callback` - Function with `(err, data)` parameters

### 3. Writing Files - `fs.writeFile()`

Create a new file or overwrite existing file content.

**Syntax:**

```javascript
fs.writeFile(path, data, callback);
```

**Example:**

```javascript
fs.writeFile("./files/mynote.txt", "Hello World!", function (err) {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File created successfully!");
  }
});
```

**Important:**

- Creates file if it doesn't exist
- **Overwrites** existing file completely
- Use `fs.appendFile()` to add content without overwriting

### 4. Renaming Files - `fs.rename()`

Rename or move files from one location to another.

**Syntax:**

```javascript
fs.rename(oldPath, newPath, callback);
```

**Example:**

```javascript
fs.rename("./files/old.txt", "./files/new.txt", function (err) {
  if (err) {
    console.log("Error renaming file:", err);
  } else {
    console.log("File renamed successfully!");
  }
});
```

**Use Cases:**

- Renaming files
- Moving files to different directories
- Updating file names based on user input

### 5. Unlinking (Deleting) Files - `fs.unlink()`

Delete/remove files from the file system.

**Syntax:**

```javascript
fs.unlink(path, callback);
```

**Example:**

```javascript
fs.unlink("./files/delete-me.txt", function (err) {
  if (err) {
    console.log("Error deleting file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});
```

### 6. Reading Directory - `fs.readdir()`

Get list of all files and folders in a directory.

**Syntax:**

```javascript
fs.readdir(path, callback);
```

**Example:**

```javascript
fs.readdir("./files", function (err, files) {
  if (err) {
    console.log("Error reading directory:", err);
  } else {
    console.log("Files in directory:", files);
    // files = ['note1.txt', 'note2.txt', 'note3.txt']
  }
});
```

**Use Cases:**

- Listing all files in a folder
- Building file explorers
- Displaying available notes/documents

### 7. CRUD Operations with Files

**CRUD** = Create, Read, Update, Delete

| Operation  | Method                           | Purpose                     |
| ---------- | -------------------------------- | --------------------------- |
| **Create** | `fs.writeFile()`                 | Create new notes/files      |
| **Read**   | `fs.readdir()` + `fs.readFile()` | List and view file contents |
| **Update** | `fs.rename()` + `fs.writeFile()` | Edit file names and content |
| **Delete** | `fs.unlink()`                    | Remove files                |

### 8. Building NoteMaster Application

**Features Implemented:**

1. **List all notes** - Display all `.txt` files from `files/` folder
2. **Create new note** - Form to create notes with title and content
3. **View note** - Read and display individual note content
4. **Edit note** - Modify existing note content and title
5. **Dynamic routing** - `/files/:filename` to access specific notes

**Application Flow:**

```
Home Page (/)
    ↓
Display all notes (fs.readdir)
    ↓
Click on note → View Note (/files/:title)
    ↓
Read file content (fs.readFile)
    ↓
Edit Note (/edit/:filename)
    ↓
Update file (fs.rename + fs.writeFile)
```

## 🗂️ Project Structure

```
07 NoteMaster-project/
├── index.js              # Main server file with all routes
├── inthis.js             # Concept notes and examples
├── package.json          # Dependencies configuration
├── README.md             # This file
├── files/                # Storage folder for user notes
│   ├── Mern Stack.txt
│   └── Myself.txt
├── public/               # Static assets
│   ├── images/
│   ├── js/
│   └── style/
└── views/                # EJS templates
    ├── index.ejs         # Home page - list all notes
    ├── show.ejs          # Display individual note
    └── edit.ejs          # Edit note form
```

## 📦 Dependencies

- **express** (^4.x.x) - Web application framework
- **ejs** (^3.x.x) - Embedded JavaScript templating engine
- **fs** (built-in) - File System module (no installation needed)

### Installation

```bash
# Initialize project (if starting fresh)
npm init -y

# Install dependencies
npm install express ejs

# Or install all from package.json
npm install
```

## 🚀 Running the Application

```bash
# Start the server
node index.js

# Or with nodemon (auto-reload on changes)
nodemon index.js
```

Server runs on **http://localhost:3000**

## 🔧 Routes & Implementation

### 1. Home Route - List All Notes

```javascript
app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});
```

**What it does:**

- Reads all files from `./files` directory
- Passes file list to `index.ejs`
- Displays all notes on home page

### 2. Create Note - POST Request

```javascript
app.post("/create", (req, res) => {
  const fileName = req.body.title.split(" ").join("") + ".txt";
  fs.writeFile(`./files/${fileName}`, req.body.details, (err) => {
    res.redirect("/");
  });
});
```

**What it does:**

- Receives title and content from form
- Creates filename by removing spaces and adding `.txt`
- Creates new file with content
- Redirects to home page

### 3. View Note - Dynamic Route

```javascript
app.get("/files/:title", (req, res) => {
  fs.readFile(`./files/${req.params.title}`, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.render("show", { fileName: req.params.title, fileData: data });
  });
});
```

**What it does:**

- Gets filename from URL parameter
- Reads file content
- Displays in `show.ejs` template

### 4. Edit Note - GET Route

```javascript
app.get("/edit/:filename", (req, res) => {
  res.render("edit", { fileName: req.params.filename });
});
```

### 5. Update Note - POST Route

```javascript
app.post("/edit", (req, res) => {
  const oldPath = `./files/${req.body.previous}`;
  const newPath = `./files/${req.body.new}`;

  fs.rename(oldPath, newPath, (err) => {
    fs.writeFile(newPath, req.body.details, (err) => {
      res.redirect("/");
    });
  });
});
```

**What it does:**

- Renames file if title changed
- Updates file content
- Redirects to home page

## 📍 Complete Route Table

| Method | Route             | Purpose            | Form Data Required           |
| ------ | ----------------- | ------------------ | ---------------------------- |
| GET    | `/`               | List all notes     | -                            |
| POST   | `/create`         | Create new note    | `title`, `details`           |
| GET    | `/files/:title`   | View specific note | -                            |
| GET    | `/edit/:filename` | Show edit form     | -                            |
| POST   | `/edit`           | Update note        | `previous`, `new`, `details` |

## 🎯 Key Learning Concepts

### File System Operations Summary

| Method            | Action     | Syntax                                  |
| ----------------- | ---------- | --------------------------------------- |
| `fs.readFile()`   | Read       | `fs.readFile(path, 'utf-8', callback)`  |
| `fs.writeFile()`  | Create     | `fs.writeFile(path, data, callback)`    |
| `fs.rename()`     | Rename     | `fs.rename(oldPath, newPath, callback)` |
| `fs.unlink()`     | Delete     | `fs.unlink(path, callback)`             |
| `fs.readdir()`    | List files | `fs.readdir(path, callback)`            |
| `fs.appendFile()` | Append     | `fs.appendFile(path, data, callback)`   |

### Error Handling in File Operations

Always handle errors in file operations:

```javascript
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error:", err.message);
    return res.status(500).send("Server Error");
  }
  // Process data
});
```

### Path Handling

- **Relative path**: `./files/note.txt` (relative to current directory)
- **Absolute path**: `/home/user/project/files/note.txt`
- Use `path.join(__dirname, 'files', filename)` for reliability

## 💡 Important Notes

1. **File naming**: Remove spaces from filenames or use URL encoding
2. **UTF-8 encoding**: Always specify `'utf-8'` when reading text files
3. **Error handling**: Check for errors in callbacks before processing data
4. **Asynchronous**: All fs methods are async - use callbacks properly
5. **File extensions**: Add `.txt` extension when creating notes
6. **Directory structure**: Ensure `./files` directory exists before running app

## 🔍 Common Patterns

### Creating File Name from Title

```javascript
// "My Note Title" → "MyNoteTitle.txt"
const fileName = req.body.title.split(" ").join("") + ".txt";
```

### Extracting File Name Without Extension

```javascript
// "mynote.txt" → "mynote"
const title = filename.replace(".txt", "");
```

### Looping Through Files in EJS

```html
<% files.forEach(function(file) { %>
<a href="/files/<%= file %>"><%= file %></a>
<% }) %>
```

**Master File System operations! 🚀📂**
