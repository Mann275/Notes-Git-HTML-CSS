/*
╔═══════════════════════════════════════════════════════════════╗
║              ADVANCED JAVASCRIPT - ALL TOPICS                 ║
║                    Comprehensive Code Examples                ║
╚═══════════════════════════════════════════════════════════════╝

TABLE OF CONTENTS:
1. DOM (Document Object Model)
   - Selecting Elements
   - Attribute Manipulation
   - Dynamic DOM Manipulation
   - Modifying Content
   - Modifying Styles
   - Traversing the DOM
2. Events and Event Handling
   - Event Binding Methods
   - Common Events (Mouse, Keyboard, Form, Window)
   - Event Object
   - Event Bubbling and Capturing
   - Event Delegation
3. Forms and Form Validation
   - Form Elements
   - Accessing Form Elements
   - Form Validation (HTML5 & JavaScript)
4. Timers and Intervals
   - setTimeout()
   - setInterval()
   - Practical Examples (Debouncing, Throttling)
5. Browser Storage
   - Local Storage
   - Session Storage
   - Cookies

NOTE: This file contains examples. To see them in action, run this in an HTML file.
*/

// ============================================================
// 1. DOM (DOCUMENT OBJECT MODEL)
// ============================================================
console.log("=== 1. DOM (Document Object Model) ===");

// SELECTING ELEMENTS
// ------------------

// getElementById()
// let element = document.getElementById('myId');
// console.log("getElementById:", element);

// getElementsByClassName() - returns HTMLCollection
// let elements = document.getElementsByClassName('myClass');
// console.log("getElementsByClassName:", elements);

// getElementsByTagName() - returns HTMLCollection
// let paragraphs = document.getElementsByTagName('p');
// console.log("getElementsByTagName:", paragraphs);

// querySelector() - first matching element (CSS selectors)
// let first = document.querySelector('.myClass');
// let byId = document.querySelector('#myId');
// let complex = document.querySelector('div > p.active');
// console.log("querySelector:", first);

// querySelectorAll() - all matching elements (NodeList)
// let allElements = document.querySelectorAll('.myClass');
// console.log("querySelectorAll:", allElements);
// allElements.forEach(el => console.log(el)); // NodeList has forEach

console.log("DOM Selection methods ready (uncomment to use with HTML)");


// ATTRIBUTE MANIPULATION
// ----------------------

// getAttribute()
// let link = document.querySelector('a');
// let href = link.getAttribute('href');
// console.log("getAttribute('href'):", href);

// setAttribute()
// link.setAttribute('href', 'https://example.com');
// link.setAttribute('target', '_blank');
// link.setAttribute('class', 'new-class');

// removeAttribute()
// let button = document.querySelector('button');
// button.removeAttribute('disabled');

// hasAttribute()
// if (element.hasAttribute('data-id')) {
//     console.log("Element has data-id attribute");
// }

// Direct property access
// element.id = 'newId';
// element.className = 'new-class';
// element.src = 'image.jpg';
// element.href = 'https://example.com';

console.log("Attribute manipulation methods ready");


// DYNAMIC DOM MANIPULATION
// -------------------------

// Creating elements
function createElementExample() {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'New div created!';
    newDiv.className = 'dynamic-element';
    
    let newP = document.createElement('p');
    newP.textContent = 'New paragraph';
    
    let textNode = document.createTextNode('Hello World');
    
    console.log("Elements created:", newDiv, newP, textNode);
    return { newDiv, newP, textNode };
}

// Adding elements
function addElementsExample() {
    // let parent = document.querySelector('.container');
    // let newDiv = document.createElement('div');
    
    // appendChild() - add as last child
    // parent.appendChild(newDiv);
    
    // append() - add multiple nodes/text
    // parent.append(newDiv, 'Some text', newP);
    
    // prepend() - add as first child
    // parent.prepend(newDiv);
    
    // insertBefore()
    // parent.insertBefore(newDiv, referenceNode);
    
    // insertAdjacentHTML()
    // element.insertAdjacentHTML('beforebegin', '<div>Before</div>');
    // positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
    
    console.log("Add element methods ready");
}

// Removing elements
function removeElementsExample() {
    // remove()
    // element.remove();
    
    // removeChild()
    // parent.removeChild(childElement);
    
    console.log("Remove element methods ready");
}

// Replacing elements
function replaceElementsExample() {
    // replaceChild()
    // parent.replaceChild(newElement, oldElement);
    
    // replaceWith()
    // oldElement.replaceWith(newElement);
    
    console.log("Replace element methods ready");
}

// Cloning elements
function cloneElementExample() {
    // let element = document.querySelector('.original');
    // let clone = element.cloneNode(true); // true = deep clone (with children)
    // let shallowClone = element.cloneNode(false); // false = shallow clone
    
    console.log("Clone methods ready");
}

console.log("Dynamic DOM manipulation methods ready");


// MODIFYING CONTENT
// -----------------

// innerHTML - get/set HTML content
function innerHTMLExample() {
    // let div = document.querySelector('.content');
    // console.log("Current innerHTML:", div.innerHTML);
    // div.innerHTML = '<p>New <strong>HTML</strong> content</p>';
}

// textContent - get/set text (ignores HTML tags)
function textContentExample() {
    // let div = document.querySelector('.content');
    // console.log("Current textContent:", div.textContent);
    // div.textContent = 'Plain text content';
}

// innerText - similar to textContent but respects styling
function innerTextExample() {
    // let div = document.querySelector('.content');
    // console.log("Current innerText:", div.innerText);
    // div.innerText = 'Visible text';
}

console.log("Content modification methods ready");


// MODIFYING STYLES
// ----------------

// Inline styles
function inlineStylesExample() {
    // let element = document.querySelector('.box');
    // element.style.color = 'red';
    // element.style.backgroundColor = 'blue';
    // element.style.fontSize = '20px';
    // element.style.display = 'none';
    // element.style.width = '100px';
    // element.style.padding = '10px';
}

// CSS Classes
function classListExample() {
    // let element = document.querySelector('.box');
    
    // classList.add()
    // element.classList.add('active', 'highlight');
    
    // classList.remove()
    // element.classList.remove('active');
    
    // classList.toggle()
    // element.classList.toggle('active'); // add if absent, remove if present
    
    // classList.contains()
    // if (element.classList.contains('active')) {
    //     console.log('Element has active class');
    // }
    
    // classList.replace()
    // element.classList.replace('old-class', 'new-class');
}

console.log("Style modification methods ready");


// TRAVERSING THE DOM
// -------------------

function traverseDOMExample() {
    // let element = document.querySelector('.child');
    
    // Parent navigation
    // console.log("parentNode:", element.parentNode);
    // console.log("parentElement:", element.parentElement);
    // console.log("closest('.parent-class'):", element.closest('.parent-class'));
    
    // Child navigation
    // console.log("children:", element.children); // HTMLCollection
    // console.log("childNodes:", element.childNodes); // NodeList (includes text)
    // console.log("firstElementChild:", element.firstElementChild);
    // console.log("lastElementChild:", element.lastElementChild);
    // console.log("childElementCount:", element.childElementCount);
    
    // Sibling navigation
    // console.log("nextElementSibling:", element.nextElementSibling);
    // console.log("previousElementSibling:", element.previousElementSibling);
}

console.log("DOM traversal methods ready");


// ============================================================
// 2. EVENTS AND EVENT HANDLING
// ============================================================
console.log("\n=== 2. Events and Event Handling ===");

// EVENT BINDING METHODS
// ---------------------

// addEventListener() - Recommended
function addEventListenerExample() {
    // let button = document.querySelector('#myButton');
    
    // Single listener
    // button.addEventListener('click', function(event) {
    //     console.log('Button clicked!');
    // });
    
    // Arrow function
    // button.addEventListener('click', (event) => {
    //     console.log('Clicked with arrow function!');
    // });
    
    // Multiple listeners possible
    // button.addEventListener('click', handler1);
    // button.addEventListener('click', handler2);
}

// removeEventListener()
function removeEventListenerExample() {
    // function handleClick() {
    //     console.log('Clicked!');
    // }
    
    // let button = document.querySelector('#myButton');
    // button.addEventListener('click', handleClick);
    // button.removeEventListener('click', handleClick); // Must be same function
}

console.log("Event binding methods ready");


// COMMON EVENTS
// -------------

// Mouse Events
function mouseEventsExample() {
    // let box = document.querySelector('.box');
    
    // click - element clicked
    // box.addEventListener('click', (e) => {
    //     console.log('Clicked at:', e.clientX, e.clientY);
    // });
    
    // dblclick - double click
    // box.addEventListener('dblclick', (e) => {
    //     console.log('Double clicked!');
    // });
    
    // mousedown - mouse button pressed
    // mouseup - mouse button released
    // box.addEventListener('mousedown', (e) => console.log('Mouse down'));
    // box.addEventListener('mouseup', (e) => console.log('Mouse up'));
    
    // mousemove - mouse pointer moves
    // box.addEventListener('mousemove', (e) => {
    //     console.log('Mouse position:', e.pageX, e.pageY);
    // });
    
    // mouseenter - mouse enters element (doesn't bubble)
    // mouseleave - mouse leaves element (doesn't bubble)
    // box.addEventListener('mouseenter', () => console.log('Mouse entered'));
    // box.addEventListener('mouseleave', () => console.log('Mouse left'));
    
    // mouseover - mouse over element (bubbles)
    // mouseout - mouse out of element (bubbles)
    
    // contextmenu - right click
    // box.addEventListener('contextmenu', (e) => {
    //     e.preventDefault(); // prevent default context menu
    //     console.log('Right clicked!');
    // });
}

// Keyboard Events
function keyboardEventsExample() {
    // keydown - key pressed down
    document.addEventListener('keydown', (e) => {
        console.log('Key pressed:', e.key);
        console.log('Key code:', e.code);
        
        if (e.key === 'Enter') {
            console.log('Enter pressed!');
        }
        
        if (e.key === ' ') {
            console.log('Space pressed!');
        }
        
        // Modifier keys
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault(); // prevent browser save
            console.log('Ctrl+S pressed!');
        }
        
        if (e.shiftKey) {
            console.log('Shift is held down');
        }
    });
    
    // keyup - key released
    // document.addEventListener('keyup', (e) => {
    //     console.log('Key released:', e.key);
    // });
}

// Form Events
function formEventsExample() {
    // let form = document.querySelector('#myForm');
    // let input = document.querySelector('#myInput');
    
    // submit - form submitted
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault(); // prevent page reload
    //     console.log('Form submitted');
    // });
    
    // input - input value changes (real-time)
    // input.addEventListener('input', (e) => {
    //     console.log('Current value:', e.target.value);
    // });
    
    // change - input value changes (after blur)
    // input.addEventListener('change', (e) => {
    //     console.log('Value changed to:', e.target.value);
    // });
    
    // focus - element receives focus
    // input.addEventListener('focus', () => {
    //     console.log('Input focused');
    // });
    
    // blur - element loses focus
    // input.addEventListener('blur', () => {
    //     console.log('Input blurred');
    // });
    
    // reset - form reset
    // form.addEventListener('reset', () => {
    //     console.log('Form reset');
    // });
}

// Window Events
function windowEventsExample() {
    // load - page fully loaded
    window.addEventListener('load', () => {
        console.log('Page fully loaded (including images)');
    });
    
    // DOMContentLoaded - DOM ready (faster than load)
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM is ready');
    });
    
    // resize - window resized
    // window.addEventListener('resize', () => {
    //     console.log('Window resized:', window.innerWidth, window.innerHeight);
    // });
    
    // scroll - page scrolled
    // window.addEventListener('scroll', () => {
    //     console.log('Scroll position:', window.scrollY);
    // });
    
    // beforeunload - before page unload
    // window.addEventListener('beforeunload', (e) => {
    //     e.preventDefault();
    //     e.returnValue = ''; // Show confirmation dialog
    // });
}

console.log("Common events examples ready");


// EVENT OBJECT
// ------------

function eventObjectExample() {
    // document.addEventListener('click', (event) => {
    //     // Target and Current Target
    //     console.log('target:', event.target); // element that triggered event
    //     console.log('currentTarget:', event.currentTarget); // element with listener
        
    //     // Mouse position
    //     console.log('clientX/Y:', event.clientX, event.clientY); // relative to viewport
    //     console.log('pageX/Y:', event.pageX, event.pageY); // relative to document
    //     console.log('offsetX/Y:', event.offsetX, event.offsetY); // relative to element
        
    //     // Keyboard modifiers
    //     console.log('ctrlKey:', event.ctrlKey); // true if Ctrl pressed
    //     console.log('shiftKey:', event.shiftKey); // true if Shift pressed
    //     console.log('altKey:', event.altKey); // true if Alt pressed
    //     console.log('metaKey:', event.metaKey); // true if Cmd/Win pressed
        
    //     // Event type
    //     console.log('type:', event.type); // 'click'
        
    //     // Timestamp
    //     console.log('timeStamp:', event.timeStamp);
        
    //     // Methods
    //     event.preventDefault(); // prevent default behavior
    //     event.stopPropagation(); // stop bubbling
    //     event.stopImmediatePropagation(); // stop all propagation
    // });
}

console.log("Event object properties ready");


// EVENT BUBBLING AND CAPTURING
// -----------------------------

function bubblingExample() {
    // HTML: <div id="parent"><button id="child">Click</button></div>
    
    // let parent = document.querySelector('#parent');
    // let child = document.querySelector('#child');
    
    // Event Bubbling (default) - child to parent
    // parent.addEventListener('click', () => {
    //     console.log('Parent clicked');
    // });
    
    // child.addEventListener('click', () => {
    //     console.log('Child clicked');
    // });
    
    // Clicking child logs: "Child clicked" then "Parent clicked" (bubbles up)
}

function capturingExample() {
    // Event Capturing - parent to child (use third parameter: true)
    
    // let parent = document.querySelector('#parent');
    // let child = document.querySelector('#child');
    
    // parent.addEventListener('click', () => {
    //     console.log('Parent clicked (capturing)');
    // }, true); // true enables capturing
    
    // child.addEventListener('click', () => {
    //     console.log('Child clicked');
    // });
    
    // Clicking child logs: "Parent clicked (capturing)" then "Child clicked"
}

function stopPropagationExample() {
    // let parent = document.querySelector('#parent');
    // let child = document.querySelector('#child');
    
    // parent.addEventListener('click', () => {
    //     console.log('Parent clicked');
    // });
    
    // child.addEventListener('click', (e) => {
    //     e.stopPropagation(); // stops bubbling
    //     console.log('Child clicked');
    // });
    
    // Now only "Child clicked" is logged
}

console.log("Event bubbling and capturing examples ready");


// EVENT DELEGATION
// ----------------

function eventDelegationExample() {
    // Attach listener to parent instead of each child
    // Benefits: better performance, works with dynamic elements
    
    // let ul = document.querySelector('#myList');
    
    // Instead of adding listener to each <li>
    // Add one listener to <ul>
    // ul.addEventListener('click', (e) => {
    //     if (e.target.tagName === 'LI') {
    //         console.log('List item clicked:', e.target.textContent);
    //         e.target.classList.toggle('selected');
    //     }
    // });
    
    // Works even for items added later dynamically
    // let newLi = document.createElement('li');
    // newLi.textContent = 'New item';
    // ul.appendChild(newLi); // listener automatically works!
}

console.log("Event delegation example ready");


// ============================================================
// 3. FORMS AND FORM VALIDATION
// ============================================================
console.log("\n=== 3. Forms and Form Validation ===");

// FORM ELEMENTS
// -------------

function formElementsExample() {
    // HTML example:
    // <form id="myForm">
    //     <input type="text" id="username" name="username" required>
    //     <input type="email" id="email" name="email" required>
    //     <input type="password" id="password" name="password" required>
    //     <input type="checkbox" id="terms" name="terms">
    //     <input type="radio" name="gender" value="male">
    //     <input type="radio" name="gender" value="female">
    //     <select id="country" name="country">
    //         <option value="usa">USA</option>
    //         <option value="uk">UK</option>
    //     </select>
    //     <textarea id="message" name="message"></textarea>
    //     <button type="submit">Submit</button>
    // </form>
    
    console.log("Form elements HTML structure defined");
}

// ACCESSING FORM ELEMENTS
// ------------------------

function accessFormElements() {
    // let form = document.getElementById('myForm');
    
    // Access by name
    // let username = form.elements.username;
    // let email = form.elements.email;
    
    // Access by id
    // let password = document.getElementById('password');
    
    // Get form values
    // console.log("Username:", username.value);
    // console.log("Email:", email.value);
    // console.log("Password:", password.value);
    
    // Get all form data at once
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     let formData = new FormData(form);
        
    //     // Access individual values
    //     console.log("Username:", formData.get('username'));
    //     console.log("Email:", formData.get('email'));
        
    //     // Convert to object
    //     let data = Object.fromEntries(formData);
    //     console.log("All form data:", data);
    // });
}

console.log("Form access methods ready");


// FORM VALIDATION
// ---------------

// HTML5 Validation (in HTML)
function html5ValidationExample() {
    // <input type="text" required>
    // <input type="email" required>
    // <input type="number" min="1" max="100">
    // <input type="text" pattern="[A-Za-z]{3,}" title="3+ letters">
    // <input type="text" minlength="3" maxlength="20">
    
    console.log("HTML5 validation attributes (use in HTML)");
}

// JavaScript Validation - Basic
function basicValidation() {
    // let form = document.getElementById('myForm');
    
    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
        
    //     let username = form.elements.username.value;
    //     let email = form.elements.email.value;
    //     let password = form.elements.password.value;
        
    //     // Validate username
    //     if (username.trim() === '') {
    //         alert('Username is required');
    //         return;
    //     }
        
    //     if (username.length < 3) {
    //         alert('Username must be at least 3 characters');
    //         return;
    //     }
        
    //     // Validate email
    //     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         alert('Invalid email format');
    //         return;
    //     }
        
    //     // Validate password
    //     if (password.length < 8) {
    //         alert('Password must be at least 8 characters');
    //         return;
    //     }
        
    //     console.log('Form is valid!');
    //     // Submit form data
    // });
}

// JavaScript Validation - Real-time
function realtimeValidation() {
    // let username = document.getElementById('username');
    // let errorMsg = document.getElementById('username-error');
    
    // username.addEventListener('input', (e) => {
    //     let value = e.target.value;
        
    //     if (value.length < 3) {
    //         errorMsg.textContent = 'Username must be at least 3 characters';
    //         username.classList.add('invalid');
    //         username.classList.remove('valid');
    //     } else {
    //         errorMsg.textContent = '';
    //         username.classList.remove('invalid');
    //         username.classList.add('valid');
    //     }
    // });
}

// Custom Validation
function customValidation() {
    // let password = document.getElementById('password');
    
    // password.addEventListener('blur', (e) => {
    //     let value = e.target.value;
        
    //     let hasUpper = /[A-Z]/.test(value);
    //     let hasLower = /[a-z]/.test(value);
    //     let hasNumber = /\d/.test(value);
    //     let hasSpecial = /[!@#$%^&*]/.test(value);
        
    //     if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
    //         password.setCustomValidity('Password must contain uppercase, lowercase, number, and special character');
    //     } else {
    //         password.setCustomValidity(''); // clear error
    //     }
    // });
}

// Validation API
function validationAPIExample() {
    // let input = document.querySelector('#myInput');
    
    // Check validity
    // if (input.checkValidity()) {
    //     console.log('Input is valid');
    // } else {
    //     console.log('Input is invalid');
    //     console.log('Error:', input.validationMessage);
    // }
    
    // Validity states
    // console.log('valid:', input.validity.valid);
    // console.log('valueMissing:', input.validity.valueMissing); // required empty
    // console.log('typeMismatch:', input.validity.typeMismatch); // wrong type
    // console.log('patternMismatch:', input.validity.patternMismatch); // pattern fail
    // console.log('tooLong:', input.validity.tooLong); // exceeds maxlength
    // console.log('tooShort:', input.validity.tooShort); // below minlength
    // console.log('rangeOverflow:', input.validity.rangeOverflow); // exceeds max
    // console.log('rangeUnderflow:', input.validity.rangeUnderflow); // below min
}

console.log("Form validation methods ready");


// ============================================================
// 4. TIMERS AND INTERVALS
// ============================================================
console.log("\n=== 4. Timers and Intervals ===");

// setTimeout() - execute once after delay
function setTimeoutExample() {
    // Basic usage
    setTimeout(() => {
        console.log('Executed after 2 seconds');
    }, 2000);
    
    // With function reference
    function greet() {
        console.log('Hello from setTimeout!');
    }
    setTimeout(greet, 1000);
    
    // With parameters
    setTimeout((name, age) => {
        console.log(`${name} is ${age} years old`);
    }, 1500, 'Mann', 22);
    
    // Store timeout ID to cancel
    let timeoutId = setTimeout(() => {
        console.log('This may not execute if cleared');
    }, 3000);
    
    // Cancel timeout
    // clearTimeout(timeoutId);
}

// setInterval() - execute repeatedly
function setIntervalExample() {
    // Basic usage
    let count = 0;
    let intervalId = setInterval(() => {
        count++;
        console.log('Interval count:', count);
        
        if (count === 5) {
            clearInterval(intervalId); // stop after 5
            console.log('Interval stopped');
        }
    }, 1000);
    
    // Clear interval from outside
    // clearInterval(intervalId);
}

// Countdown Timer
function countdownTimer() {
    let seconds = 10;
    console.log('Countdown starting from', seconds);
    
    let countdownId = setInterval(() => {
        console.log(seconds);
        seconds--;
        
        if (seconds < 0) {
            clearInterval(countdownId);
            console.log('Time\'s up!');
        }
    }, 1000);
}

// Debouncing - delay execution until after user stops action
function debounceExample() {
    let debounceTimer;
    
    // Simulating search input
    function handleSearch(searchTerm) {
        clearTimeout(debounceTimer);
        
        debounceTimer = setTimeout(() => {
            console.log('Searching for:', searchTerm);
            // Make API call here
        }, 500); // wait 500ms after user stops typing
    }
    
    // Usage:
    // searchInput.addEventListener('input', (e) => {
    //     handleSearch(e.target.value);
    // });
    
    console.log('Debounce function ready');
}

// Throttling - limit execution frequency
function throttleExample() {
    let throttleTimer = null;
    let throttleDelay = 1000;
    
    function handleScroll() {
        if (throttleTimer) return; // skip if already scheduled
        
        throttleTimer = setTimeout(() => {
            console.log('Scroll position:', window.scrollY);
            throttleTimer = null;
        }, throttleDelay);
    }
    
    // Usage:
    // window.addEventListener('scroll', handleScroll);
    
    console.log('Throttle function ready');
}

console.log("Timer examples executed");


// ============================================================
// 5. BROWSER STORAGE
// ============================================================
console.log("\n=== 5. Browser Storage ===");

// LOCAL STORAGE (persistent)
// ---------------------------

console.log("--- Local Storage ---");

// setItem()
localStorage.setItem('username', 'Mann');
localStorage.setItem('age', '22');
localStorage.setItem('isLoggedIn', 'true');
console.log("Items set in localStorage");

// getItem()
let username = localStorage.getItem('username');
let age = localStorage.getItem('age');
console.log("Retrieved from localStorage:", username, age);

// Storing objects (must stringify)
let user = { name: 'Mann', age: 22, city: 'NY' };
localStorage.setItem('user', JSON.stringify(user));
console.log("Object stored in localStorage");

// Retrieve and parse object
let storedUser = JSON.parse(localStorage.getItem('user'));
console.log("Retrieved object:", storedUser);

// Storing arrays
let todos = ['Task 1', 'Task 2', 'Task 3'];
localStorage.setItem('todos', JSON.stringify(todos));
let storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log("Array stored and retrieved:", storedTodos);

// key() - get key at index
let firstKey = localStorage.key(0);
console.log("First key:", firstKey);

// length - number of items
console.log("localStorage length:", localStorage.length);

// removeItem()
// localStorage.removeItem('username');
// console.log("username removed");

// clear() - remove all
// localStorage.clear();
// console.log("localStorage cleared");


// SESSION STORAGE (temporary - cleared when tab closes)
// ------------------------------------------------------

console.log("\n--- Session Storage ---");

// Same API as localStorage
sessionStorage.setItem('tempData', 'temporary value');
sessionStorage.setItem('sessionId', '12345');
console.log("Items set in sessionStorage");

let tempData = sessionStorage.getItem('tempData');
console.log("Retrieved from sessionStorage:", tempData);

// Store object
let sessionUser = { id: 1, name: 'Guest' };
sessionStorage.setItem('sessionUser', JSON.stringify(sessionUser));

let retrievedSession = JSON.parse(sessionStorage.getItem('sessionUser'));
console.log("Session object:", retrievedSession);

console.log("sessionStorage length:", sessionStorage.length);

// sessionStorage.removeItem('tempData');
// sessionStorage.clear();


// COOKIES
// -------

console.log("\n--- Cookies ---");

// Set basic cookie
document.cookie = "username=Mann";
console.log("Basic cookie set");

// Set cookie with expiration (7 days)
let date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
document.cookie = `username=Mann; expires=${date.toUTCString()}; path=/`;
console.log("Cookie with expiration set");

// Set cookie with options
document.cookie = "theme=dark; path=/; max-age=604800"; // 7 days in seconds
console.log("Cookie with max-age set");

// Get all cookies
console.log("All cookies:", document.cookie);

// Get specific cookie
function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

let usernameCookie = getCookie('username');
console.log("Retrieved cookie 'username':", usernameCookie);

// Delete cookie (set expiration to past)
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// deleteCookie('username');
// console.log("Cookie deleted");

// Cookie attributes:
// - expires: expiration date
// - max-age: expiration in seconds
// - path: URL path (default: current path)
// - domain: domain for cookie
// - secure: HTTPS only
// - SameSite: Strict/Lax/None (CSRF protection)


// STORAGE COMPARISON
// ------------------

console.log("\n--- Storage Comparison ---");
console.log(`
localStorage:
  - Capacity: ~10MB
  - Lifetime: Persistent (survives browser restart)
  - Accessibility: Same origin
  - Sent to server: No
  - Use case: User preferences, settings

sessionStorage:
  - Capacity: ~5-10MB
  - Lifetime: Tab session only
  - Accessibility: Same tab only
  - Sent to server: No
  - Use case: Temporary session data

Cookies:
  - Capacity: ~4KB
  - Lifetime: Configurable (expires/max-age)
  - Accessibility: Same origin
  - Sent to server: Yes (every HTTP request)
  - Use case: Authentication tokens, tracking
`);


// STORAGE EVENTS
// --------------

// Listen for storage changes (works across tabs)
window.addEventListener('storage', (e) => {
    console.log('Storage changed!');
    console.log('Key:', e.key);
    console.log('Old Value:', e.oldValue);
    console.log('New Value:', e.newValue);
    console.log('URL:', e.url);
    console.log('Storage Area:', e.storageArea);
});


// PRACTICAL STORAGE EXAMPLES
// ---------------------------

// Remember theme preference
function themeExample() {
    // Save theme
    function setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }
    
    // Load theme on page load
    window.addEventListener('DOMContentLoaded', () => {
        let theme = localStorage.getItem('theme') || 'light';
        document.body.className = theme;
    });
    
    // Toggle theme
    // themeButton.addEventListener('click', () => {
    //     let currentTheme = localStorage.getItem('theme') || 'light';
    //     let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    // });
    
    console.log('Theme management functions ready');
}

// Shopping cart
function shoppingCartExample() {
    // Add to cart
    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Item added to cart:', item);
    }
    
    // Get cart
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }
    
    // Remove from cart
    function removeFromCart(index) {
        let cart = getCart();
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Clear cart
    function clearCart() {
        localStorage.removeItem('cart');
        console.log('Cart cleared');
    }
    
    // Example usage
    addToCart({ id: 1, name: 'Product 1', price: 29.99 });
    addToCart({ id: 2, name: 'Product 2', price: 49.99 });
    console.log('Current cart:', getCart());
}

console.log("Storage examples ready");


// ============================================================
// EXECUTION
// ============================================================

console.log("\n=== Initializing Examples ===");

// Execute timer examples
setTimeoutExample();
setIntervalExample();
// countdownTimer(); // Uncomment to see countdown
debounceExample();
throttleExample();

// Execute storage examples
themeExample();
shoppingCartExample();

console.log("\n=== ALL ADVANCED TOPICS COVERED ===");
console.log("Note: Many DOM and event examples are commented out.");
console.log("Uncomment them in an HTML file to see them in action!");
