// 1. Introduction to MongoDB and Mongoose
// Data Storage: Where we can store data in a way that we can easily access and manipulate it later on.
// MongoDB: A popular NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It allows for easy scalability and is widely used in modern web applications.
// Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for working with MongoDB, allowing developers to define schemas, models, and perform CRUD operations more easily.
// MongoDB Atlas: A cloud-based database service provided by MongoDB. It allows you to create, manage, and scale MongoDB databases in the cloud without having to worry about infrastructure management.

//  Types of Databases: SQL | NoSQL
// SQL Databases: Relational databases that use structured query language (SQL) for defining and manipulating data. Examples include MySQL, PostgreSQL, and SQLite.
// NoSQL Databases: Non-relational databases that store data in a flexible format, often using key-value pairs, documents, or graphs. Examples include MongoDB, Cassandra, and Redis.

// 2. Terminology: Database->Collection->Document->Field
// Database: A collection of data that is organized and stored in a structured way.
// Collection: It is a group of documents that are stored together. It is similar to a table in SQL databases.
// Document: It is a single record in a collection. It is represented in BSON format and can contain various fields and values.
// Field: A field is a key-value pair within a document. It represents a specific piece of data, such as "name": "John Doe" or "age": 30.

// Backend contains 2 server - Frontend->Application Server->Database Server->Application Server->Frontend
// Application Server: This is where the main logic of the application resides. It handles requests from clients, processes data, and interacts with the database.
// Database Server: This is where the database is hosted. It manages the storage, retrieval, and manipulation of data. The application server communicates with the database server to perform operations on the data.

// Code                                   Database
// mongoose.connect      ->           database create
// model create          ->           collection create
// CREATE                ->           document create

// 3. Schema: A schema is a blueprint for defining the structure of documents in a MongoDB collection. It specifies the fields, their data types, and any validation rules or constraints that should be applied to the data.

// 4. Model : A model is a constructor function that is created from a schema. It provides an interface for interacting with the database, allowing you to create, read, update, and delete documents in the collection associated with the model.

