// Authentication & Authorization
// Authentication: The process of verifying the identity of a user or system. It typically involves checking credentials such as usernames and passwords, biometric data, or tokens to confirm that the user is who they claim to be.

// Authorization: The process of determining what actions or resources a user or system is allowed to access after they have been authenticated. It involves defining permissions and roles to control access to specific resources or functionalities based on the user's identity and privileges.

// In summary, authentication is about verifying identity, while authorization is about granting or denying access based on that verified identity.

// Cookies are stored on the client side and can be used for various purposes, while sessions are stored on the server side and are primarily used to maintain user authentication and state across multiple requests.

// 1. Cookie set and read :
// - Set a cookie in the response header using res.cookie() method in Express.js.
// - Read the cookie from the request header using req.cookies object in Express.js, which is made available by the cookie-parser middleware.

// 2. bcrypt for password hashing
// - bcrypt is a popular library for hashing passwords in Node.js. It provides a secure way to store passwords by hashing them with a salt, making it difficult for attackers to reverse-engineer the original password even if they gain access to the hashed version. To use bcrypt, you can install it via npm and then use its functions to hash passwords before storing them in a database and to compare hashed passwords during authentication.

// 3. JWT (JSON Web Tokens)
// - JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. A JWT consists of three parts: a header, a payload, and a signature. The header typically contains the type of token and the signing algorithm, the payload contains the claims (such as user information), and the signature is used to verify the integrity of the token. JWTs can be signed using a secret key or a public/private key pair, making them secure for transmitting information between parties.
