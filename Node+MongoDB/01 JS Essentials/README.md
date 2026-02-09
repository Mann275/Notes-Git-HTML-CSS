# JavaScript Essentials

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Complete guide to JavaScript fundamentals with practical examples.

---

## 📚 Topics Covered

### 1. Arrays []

Arrays are data structures that hold a collection of values. They are:

- **Ordered**: Elements stored in specific order
- **Mutable**: Can be changed after creation
- **Mixed Type**: Can hold any type of values

```javascript
var arrayexample = [1, 2, "hola", {}, true, function () {}, []];
```

#### Array Methods

| Method    | Description                        | Returns                       |
| --------- | ---------------------------------- | ----------------------------- |
| `forEach` | Executes function for each element | `undefined` (no return value) |
| `map`     | Transforms each element            | New array (same length)       |
| `filter`  | Filters elements by condition      | New array (filtered)          |
| `find`    | Finds first matching element       | Single value or `undefined`   |
| `indexOf` | Finds index of element             | Index number or `-1`          |

---

### 2. forEach()

Executes a function for each array element. **Does not return anything** and **does not modify** the original array.

```javascript
var arr = [1, 2, 3, 4];
arr.forEach(function (val) {
  console.log(val + " hello");
});
// Output: 1 hello, 2 hello, 3 hello, 4 hello
```

---

### 3. map()

Returns a **new array** with transformed values. **Does not modify** the original array.

```javascript
let arr1 = [5, 6, 7, 8];
let newarr = arr1.map(function (val1) {
  return 13 + val1;
});
console.log(newarr); // [18, 19, 20, 21]
console.log(arr1); // [5, 6, 7, 8] (unchanged)
```

---

### 4. filter()

Returns a **new array** with elements that satisfy the condition. **Does not modify** the original array.

```javascript
let arr2 = [9, 10, 11, 12];
let newarr2 = arr2.filter(function (val2) {
  return val2 > 10;
});
console.log(newarr2); // [11, 12]
console.log(arr2); // [9, 10, 11, 12] (unchanged)
```

---

### 5. find()

Returns the **first element** that satisfies the condition. If not found, returns `undefined`.

```javascript
let arr3 = [13, 14, 15, 16];
let newarr3 = arr3.find(function (val3) {
  return val3 === 15;
});
console.log(newarr3); // 15
```

---

### 6. indexOf()

Returns the **index** of the element, or `-1` if not found.

```javascript
let arr4 = [17, 18, 19, 20];
let newarr4 = arr4.indexOf(19);
console.log(newarr4); // 2
```

---

## 📦 Objects {}

Objects are collections of **key-value pairs**. They are:

- **Mutable**: Properties can be changed
- **Dynamic**: New properties can be added anytime

```javascript
var ob = {
  name: "Mann",
  age: 22,
};

// Accessing properties
ob.name; // "Mann"
ob["name"]; // "Mann"
```

### Object.freeze()

Prevents modification of existing properties and addition of new properties.

```javascript
Object.freeze(ob);
ob.age = 23; // Won't change (frozen)
```

---

## 🔧 Functions

Functions are **reusable blocks of code**. In JavaScript, **functions are objects**.

```javascript
function abcd() {
  return "hello world";
}

let x = abcd(); // "hello world"
```

### Return Keyword

- Returns a value from the function
- Stops function execution
- If no return statement, function returns `undefined`

---

## ⚡ Async JavaScript

### Synchronous vs Asynchronous

**Synchronous:** Code runs line by line

**Asynchronous:**

- Async code is put in side stack
- Synchronous code executes first
- When async code is ready, it executes

### async/await

```javascript
async function abcd() {
  let blob = await fetch(`https://randomuser.me/api/`);
  let data = await blob.json();
  console.log(data);
  console.log(data.results[0].name);
}

abcd();
```

**Key Points:**

- `async` keyword makes function return a Promise
- `await` pauses execution until Promise resolves
- Used for cleaner asynchronous code

---

## 📝 Practice File

All examples are available in [script.js](script.js)

---

## 🎯 Quick Reference

| Concept           | Use Case                        |
| ----------------- | ------------------------------- |
| `forEach`         | Loop through array (no return)  |
| `map`             | Transform all elements          |
| `filter`          | Get elements matching condition |
| `find`            | Get first matching element      |
| `indexOf`         | Get position of element         |
| `Object.freeze()` | Make object immutable           |
| `async/await`     | Handle asynchronous operations  |

---

Made with ❤️ for learning JavaScript
