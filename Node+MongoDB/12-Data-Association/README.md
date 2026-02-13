# Data Association in MongoDB

This project demonstrates data association and relationships in MongoDB using Mongoose ODM with Express.js.

## Overview

Learn how to implement **one-to-many relationships** between MongoDB collections using Mongoose references and ObjectIds.

## What You'll Learn

- Creating relationships between MongoDB collections
- Using Mongoose Schema references (`ref`)
- Understanding ObjectId references
- Populating related documents
- Implementing one-to-many data associations

## Data Models

### User Model

```javascript
{
  username: String,
  email: String,
  age: Number,
  posts: [{ type: ObjectId, ref: "Post" }]  // One-to-many relationship
}
```

### Post Model

```javascript
{
  postdata: String,
  user: { type: ObjectId, ref: "User" },    // Reference to User
  date: Date (default: now)
}
```

## Relationship Structure

- **One User → Many Posts**: A user can have multiple posts stored as an array of ObjectId references
- **One Post → One User**: Each post belongs to a single user via ObjectId reference

## Installation

1. Install dependencies:

```bash
npm install
```

2. Make sure MongoDB is running on your local machine:

```bash
mongod
```

## Usage

Start the server:

```bash
node app.js
```

Server runs on `http://localhost:3000`

## Available Routes

### `GET /`

- Welcome endpoint
- Returns: "Hello World!"

### `GET /create`

- Creates a new user
- Example user data: Mann, age 22, email: mann@example.com
- Returns: Created user object

### `GET /post/create`

- Creates a new post associated with a user
- Links the post to the user by:
  - Storing user's ObjectId in the post
  - Adding post's ObjectId to user's posts array
- Returns: Both post and updated user objects

## Key Concepts

### ObjectId Reference

```javascript
posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }];
```

- Stores references to related documents
- Enables efficient data retrieval and relationship management

### Data Association Flow

1. Create a post with user reference
2. Find the related user
3. Push the post's ObjectId to user's posts array
4. Save the user document
