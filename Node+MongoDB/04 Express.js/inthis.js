// Express.js Framework:
// 1. Introduction to Express.js
// express js is a npm package and it is a framework
// framework - you need to follow some flow/rule but we can write inidvidual code as in it.
// library - you can write your code in any way you want and you can use the library as well.
// it manages everything from receving the request and giving the response

// ===========================================================

// 2. Setting up a basic Express.js application
// npm install express
// npm i nodemon -g  (for auto restart the server when we make changes in the code)
// refer server.js file for the code of basic express application

// ===========================================================

// 3. Routing
// patelmann.me/project - this is the route and we can have different routes for different pages and we can also have dynamic routes as well.

// ===========================================================

// 4. Middleware
// Whenever server receives a request or accepts a request it will first go to the middleware and then it will go to the route handler and then it will go to the response. so the flow is request -> middleware -> route handler -> response.

// Middleware Definition
// Middleware is a function that has access to the request (req), response (res), and next middleware function in the application's request-response cycle.
// Syntax: (req, res, next) => { /* logic */ next(); }
// Types: Application-level, Router-level, Error-handling, Built-in, Third-party

// ===========================================================

// 5. Request and Response Handling
// request- it is the object that contains all the information about the request that is made to the server. it has properties like req.params, req.query, req.body, etc.
// response- it is the object that is used to send the response back to the client. it has methods like res.send(), res.json(), res.status(), etc.

// ===========================================================

// 6. Error Handling
// Error handling is an important part of any application. it is used to handle the errors that occur in the application. it is done by using the error handling middleware. it is a middleware that has 4 parameters (err, req, res, next) and it is used to handle the errors that occur in the application. it is defined after all the other middlewares and routes.
