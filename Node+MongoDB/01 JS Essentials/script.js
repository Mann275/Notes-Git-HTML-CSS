//Fundamentals of JS

// Arrays [] - It is a data structure that can hold a collection of values. The values can be of any type, including numbers, strings, objects, and even other arrays. Arrays are ordered, meaning that the elements are stored in a specific order and can be accessed using their index. They are also mutable, meaning that their elements can be changed after they are created. Arrays have a length property that indicates the number of elements in the array, and they have various methods for manipulating the elements, such as push, pop, shift, unshift, splice, slice, and many more.
var arrayexample = [1, 2, "hola", {}, true, function () {}, []];
// foreach, map, filter, find, indexOf

// forEach - it executes a provided function once for each array element. It does not return a new array and does not modify the original array.
var arr = [1, 2, 3, 4];
arr.forEach(function (val) {
  //   console.log(val + " hello");
  return val + " hello";
});

// Map - it returns a new array of the same length as the original array, but with the values transformed by the provided function. It does not modify the original array.
let arr1 = [5, 6, 7, 8];
let newarr = arr1.map(function (val1) {
  return 13 + val1;
});
// console.log(newarr);
// console.log(arr1);

// Filter - it returns a new array containing all elements of the original array that satisfy the provided condition. It does not modify the original array.
let arr2 = [9, 10, 11, 12];
let newarr2 = arr2.filter(function (val2) {
  if (val2 > 10) {
    return true;
  }
});
// console.log(arr2);
// console.log(newarr2);

// Find - it returns the value of the first element in the array that satisfies the provided condition. If no elements satisfy the condition, it returns undefined. It does not modify the original array.
let arr3 = [13, , 15, 14, 15, 16];
let newarr3 = arr3.find(function (val3) {
  if (val3 === 15) return val3;
});
// console.log(newarr3);

// indexOf - it returns the first index at which a given element can be found in the array, or -1 if it is not present. It does not modify the original array.
let arr4 = [17, 18, 19, 20];
let newarr4 = arr4.indexOf(19);
// console.log(newarr4);

//========================================================
// Objects {} - It is a collection of key-value pairs. The keys are strings (or symbols) and the values can be of any type. Objects are mutable, meaning that their properties can be changed after they are created. They are also dynamic, meaning that new properties can be added to them at any time.

var nam = "Mann";
var ob = {
  name: nam,
  age: 22,
};
Object.freeze(ob); // it prevents the modification of existing properties and the addition of new properties to the object. It does not allow you to change the values of existing properties or add new properties to the object. However, it does not prevent you from modifying the values of existing properties if they are objects themselves.
ob.age = 23;
// ob.name;
// ob["name"];

//========================================================
// Functions - Functions are reusable blocks of code that perform a specific task. They can take input parameters, perform operations on them, and return a result. Functions can be defined using the function keyword or as arrow functions. They can also be assigned to variables, passed as arguments to other functions, and returned from functions. Functions are an essential part of JavaScript programming and are used to organize code, improve readability, and promote code reuse.
// in JS functions are objects .
// return keyword is used to return a value from a function. When a return statement is executed, the function stops executing and the specified value is returned to the caller. If no return statement is executed, the function returns undefined by default.
function abcd() {
  return "hello world";
}

let x = abcd(); // it will return "hello world"

//========================================================
// async js coding
// code runs line by line is synchronous code.
// code which are asynchronous put them in side stack and execute the other synchronous code which are in main stack and when the asynchronous code is ready to execute then it will execute that code.

async function abcd() {
  let blob = await fetch(`https://randomuser.me/api/`);
  let data = await blob.json();
  console.log(data);
  console.log(data.results[0].name);
}

abcd(); //running the async function
