// Form handling and working with the forms
// to handle backend process of forms and making sure the data coming from andy frontend library,frontend framework , templating engine  we still handle it at the backend.
// npm i cookies-parser - to handle cookies in the backend
// The data which is sent from the frontend to the backend is get transferred into blob/xyz(not directly readable) the unreadable format and we need to parse it to make it readable and usable in the backend. For that we use middleware functions provided by express.js
// express.json() - to parse JSON data from the request body
// express.urlencoded() - to parse URL-encoded data from the request body

// Session & Cookies
// A session is a way to store user data on the server, while the browser keeps only a session ID.

// A cookie is a small piece of data stored in the user’s browser by the server and sent back with every request.
// Cookies are used to remember information about the user, such as login status or preferences.
