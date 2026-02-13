# 🔐 Authentication & Authorization - Introduction

A comprehensive guide to understanding and implementing authentication and authorization in Node.js applications using industry-standard tools and practices.

## 🎯 Overview

This project introduces the fundamental concepts of **Authentication** and **Authorization** in web applications, demonstrating practical implementations using cookies, bcrypt for password hashing, and JWT for token-based authentication.

### What's the Difference?

- **Authentication** 🔑: Verifying _who you are_ (identity verification)
  - Example: Logging in with username and password
- **Authorization** ✅: Determining _what you can access_ (permission control)
  - Example: Admin vs. regular user access rights

> **Simple Analogy**: Authentication is showing your ID at the airport (proving who you are), while Authorization is your boarding pass determining which flight/class you can board (what you can access).

## 🔑 Key Concepts

### Authentication

The process of verifying the identity of a user or system. It typically involves:

- Checking credentials (username/password)
- Verifying biometric data
- Validating tokens
- Confirming the user is who they claim to be

### Authorization

The process of determining what actions or resources a user can access after authentication:

- Defining user permissions and roles
- Controlling access to specific resources
- Managing user privileges
- Enforcing access control policies

### Cookies vs Sessions

| Feature              | Cookies                         | Sessions                    |
| -------------------- | ------------------------------- | --------------------------- |
| **Storage Location** | Client-side (browser)           | Server-side                 |
| **Data Size**        | Limited (~4KB)                  | Larger capacity             |
| **Security**         | Less secure (client can modify) | More secure                 |
| **Purpose**          | Various (preferences, tracking) | User authentication & state |
| **Lifetime**         | Can be persistent               | Typically temporary         |



## 📦 Installation

```bash
# Install dependencies
npm install express cookie-parser bcrypt jsonwebtoken mongoose

# Or if package.json exists
npm install
```

## 🚀 Core Features

### 1. Cookies

**Setting and reading cookies** - Store data on the client-side browser.

#### Setting a Cookie

```javascript
app.get("/", (req, res) => {
  res.cookie("name", "mann");
  res.send("Cookie has been set!");
});
```

#### Reading a Cookie

```javascript
app.get("/read", (req, res) => {
  console.log(req.cookies); // { name: 'mann' }
  res.send("Check console for cookies");
});
```

**Key Points:**

- Cookies persist across browser sessions
- Can set expiration dates
- Useful for user preferences and tracking
- Require `cookie-parser` middleware

---

### 2. Password Hashing with Bcrypt

**Why Hash Passwords?** 🔒
Never store plain-text passwords! Bcrypt provides one-way encryption with salt, making it virtually impossible to reverse-engineer the original password.

#### Hashing a Password

```javascript
bcrypt.genSalt(10, function (err, salt) {
  bcrypt.hash("userPassword", salt, function (err, hash) {
    // Store 'hash' in your database
    console.log(hash);
    // Output: $2b$10$EaVFFKYPNPHAP6FMjzcnw.vBpdQvrbIYtsrj5YfYzVzj576VezalW
  });
});
```

#### Comparing Passwords (Login)

```javascript
bcrypt.compare("userPassword", hashedPasswordFromDB, function (err, result) {
  console.log(result); // true if password matches, false otherwise
  if (result) {
    // Password is correct - proceed with login
  } else {
    // Invalid password
  }
});
```

**Key Features:**

- **Salt**: Random data added to password before hashing
- **Rounds**: The `10` in genSalt determines computational complexity
- **One-way**: Cannot reverse a hash back to the original password
- **Secure**: Resistant to rainbow table attacks

---

### 3. JWT - JSON Web Tokens

**What is JWT?** 🎫
A compact, URL-safe token format for securely transmitting information between parties. Perfect for stateless authentication.

#### JWT Structure

```
header.payload.signature
```

- **Header**: Token type and signing algorithm
- **Payload**: Claims/data (user info, permissions)
- **Signature**: Ensures token integrity and authenticity

#### Creating a JWT

```javascript
app.get("/", (req, res) => {
  // Sign a token with user data and secret key
  let token = jwt.sign({ email: "Mann@patel.com" }, "secretkey");

  // Store token in cookie
  res.cookie("token", token);
  res.send("Token generated and set in cookie");
});
```

#### Verifying a JWT

```javascript
app.get("/read", (req, res) => {
  // Verify and decode the token
  let data = jwt.verify(req.cookies.token, "secretkey");
  console.log(data); // { email: 'Mann@patel.com', iat: 1234567890 }
  res.send("Token verified successfully");
});
```

**JWT Advantages:**

- ✅ Stateless - No server-side session storage needed
- ✅ Scalable - Works across multiple servers
- ✅ Compact - Efficient for transmission
- ✅ Self-contained - Carries all necessary information

**JWT Use Cases:**

- API authentication
- Single Sign-On (SSO)
- Information exchange
- Authorization tokens

---


## 🔒 Security Best Practices

1. **Environment Variables**
   - Never hardcode secret keys in code
   - Use `.env` files and `process.env.SECRET_KEY`

2. **HTTPS Only**
   - Always use HTTPS in production
   - Set `secure: true` on cookies in production

3. **JWT Expiration**

   ```javascript
   jwt.sign(payload, secret, { expiresIn: "1h" });
   ```

4. **Bcrypt Rounds**
   - Use 10-12 salt rounds for good security/performance balance
   - Higher rounds = more secure but slower

5. **HTTP-Only Cookies**

   ```javascript
   res.cookie("token", token, { httpOnly: true, secure: true });
   ```

6. **Input Validation**
   - Always validate and sanitize user inputs
   - Use libraries like `express-validator`

7. **Rate Limiting**
   - Prevent brute-force attacks
   - Use `express-rate-limit` middleware
