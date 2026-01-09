# 🎨 CSS Complete Learning Guide

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed%20✅-success?style=for-the-badge)

This README contains all CSS concepts I've learned with practical examples. Perfect for revision and quick reference!

---

## 📁 Files in This Folder

- **[examples.html](examples.html)** - HTML file with all CSS examples
- **[examples.css](examples.css)** - Complete CSS styling with all topics
- **[index.html](index.html)** - Practice file
- **[style.css](style.css)** - Practice styling

---

## 🎯 All Topics Covered ✅

### ✅ 1. Fonts
Learn about font styling and typography.

**Properties:**
- `font-family` - Set the font type
- `font-size` - Control text size
- `font-weight` - Bold, normal, light (100-900)
- `font-style` - Italic, normal, oblique
- `letter-spacing` - Space between letters
- `word-spacing` - Space between words
- `text-transform` - uppercase, lowercase, capitalize

**Example:**
```css
h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: bold;
    font-style: italic;
    letter-spacing: 2px;
    text-transform: uppercase;
}
```

**Common Font Families:**
- `sans-serif` - Arial, Helvetica
- `serif` - Times New Roman, Georgia
- `monospace` - Courier, Consolas
- `cursive` - Comic Sans
- Google Fonts - Import from fonts.google.com

---

### ✅ 2. Border
Add borders around elements.

**Properties:**
- `border-style` - solid, dashed, dotted, double
- `border-width` - thickness (px, em, rem)
- `border-color` - color of border
- `border-radius` - rounded corners
- `border-top/right/bottom/left` - individual sides

**Example:**
```css
.box {
    border: 3px solid blue;
    border-radius: 10px;
}

.custom-border {
    border-top: 2px solid red;
    border-right: 4px dashed green;
    border-bottom: 3px dotted blue;
    border-left: 5px double orange;
}
```

**Shorthand:**
```css
border: width style color;
border: 2px solid red;
```

---

### ✅ 3. Background
Style the background of elements.

**Properties:**
- `background-color` - solid color
- `background-image` - use image
- `background-size` - cover, contain, or px
- `background-repeat` - repeat, no-repeat
- `background-position` - center, top, bottom

**Example:**
```css
/* Solid Color */
.box1 {
    background-color: #3b82f6;
}

/* Gradient */
.box2 {
    background: linear-gradient(to right, red, blue);
}

/* Radial Gradient */
.box3 {
    background: radial-gradient(circle, yellow, green);
}

/* Image */
.box4 {
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
}
```

---

### ✅ 4. Margin
Space **OUTSIDE** the element (between elements).

**Properties:**
- `margin` - all sides
- `margin-top/right/bottom/left` - individual sides
- `margin: auto` - center alignment

**Example:**
```css
.box {
    margin: 20px; /* all sides */
    margin: 10px 20px; /* top/bottom left/right */
    margin: 10px 20px 30px 40px; /* top right bottom left */
}

.center {
    width: 50%;
    margin: 0 auto; /* center horizontally */
}
```

**Key Point:** Margin creates space OUTSIDE, doesn't affect element size.

---

### ✅ 5. Padding
Space **INSIDE** the element (between content and border).

**Properties:**
- `padding` - all sides
- `padding-top/right/bottom/left` - individual sides

**Example:**
```css
.box {
    padding: 20px; /* all sides */
    padding: 10px 30px; /* top/bottom left/right */
    padding: 10px 20px 30px 40px; /* top right bottom left */
}
```

**Key Point:** Padding increases element size, creates space INSIDE.

---

### ✅ 6. Float
Position elements left or right (older method, use flexbox instead).

**Properties:**
- `float: left` - element floats left
- `float: right` - element floats right
- `clear: both` - clear floats

**Example:**
```css
.left-box {
    float: left;
    width: 50%;
}

.right-box {
    float: right;
    width: 50%;
}

.clear {
    clear: both;
}
```

**Note:** Modern approach = Use Flexbox or Grid instead!

---

### ✅ 7. Pseudo Classes
Style elements based on their state.

**Common Pseudo Classes:**
- `:hover` - when mouse over
- `:active` - when clicking
- `:focus` - when element is focused
- `:first-child` - first child element
- `:last-child` - last child element
- `:nth-child(n)` - nth child element

**Example:**
```css
/* Hover effect */
button:hover {
    background: blue;
    transform: scale(1.1);
}

/* Active state */
button:active {
    transform: scale(0.95);
}

/* Focus on input */
input:focus {
    border-color: blue;
    outline: none;
}

/* First and last child */
li:first-child {
    color: red;
}

li:last-child {
    color: green;
}

/* Nth child */
li:nth-child(2) {
    background: yellow;
}
```

---

### ✅ 8. Pseudo Elements
Add content before or after elements.

**Pseudo Elements:**
- `::before` - insert content before
- `::after` - insert content after
- `::first-letter` - style first letter
- `::first-line` - style first line

**Example:**
```css
/* Add icon before */
.icon::before {
    content: "👉 ";
}

/* Add checkmark after */
.complete::after {
    content: " ✅";
}

/* Style first letter */
p::first-letter {
    font-size: 2em;
    color: red;
}
```

---

### ✅ 9. Shadows
Add depth with shadows.

**Properties:**
- `box-shadow` - shadow for boxes
- `text-shadow` - shadow for text

**Example:**
```css
/* Box Shadow */
.card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Multiple Box Shadows */
.fancy-card {
    box-shadow: 
        0 10px 20px rgba(0, 0, 0, 0.2),
        0 6px 6px rgba(0, 0, 0, 0.15);
}

/* Text Shadow */
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Glowing Text */
.glow {
    text-shadow: 
        0 0 10px blue,
        0 0 20px blue,
        0 0 30px blue;
}
```

**Syntax:**
```css
box-shadow: x-offset y-offset blur spread color;
text-shadow: x-offset y-offset blur color;
```

---

### ✅ 10. Icons
Use icons with Font Awesome.

**How to Use:**
1. Add Font Awesome CDN in HTML `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

2. Use icons in HTML:
```html
<i class="fas fa-home"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-star"></i>
```

3. Style icons with CSS:
```css
.icon {
    font-size: 40px;
    color: blue;
}

.icon:hover {
    color: red;
    transform: scale(1.2);
}
```

**Popular Icons:**
- `fa-home` - home
- `fa-user` - user
- `fa-heart` - heart
- `fa-star` - star
- `fa-download` - download

Find more at: [fontawesome.com](https://fontawesome.com/icons)

---

### ✅ 11. Transform
Transform elements (rotate, scale, skew, translate).

**Properties:**
- `transform: rotate(deg)` - rotate element
- `transform: scale(n)` - scale size
- `transform: skew(deg)` - skew element
- `transform: translate(x, y)` - move element

**Example:**
```css
/* Rotate */
.rotate {
    transform: rotate(45deg);
}

/* Scale */
.scale:hover {
    transform: scale(1.2);
}

/* Skew */
.skew {
    transform: skewX(10deg);
}

/* Translate (Move) */
.move:hover {
    transform: translateY(-10px);
}

/* Combine multiple transforms */
.combo:hover {
    transform: rotate(10deg) scale(1.1) translateX(20px);
}
```

---

### ✅ 12. Transition
Smooth changes between states.

**Properties:**
- `transition-property` - which property to animate
- `transition-duration` - how long
- `transition-timing-function` - ease, linear, ease-in-out
- `transition-delay` - delay before start

**Example:**
```css
/* Simple transition */
button {
    background: blue;
    transition: background 0.3s ease;
}

button:hover {
    background: red;
}

/* All properties */
.box {
    transition: all 0.5s ease-in-out;
}

.box:hover {
    background: green;
    transform: scale(1.2);
}

/* Multiple transitions */
.card {
    transition: 
        background 0.3s ease,
        transform 0.5s ease,
        box-shadow 0.4s ease;
}
```

**Timing Functions:**
- `ease` - slow start, fast, slow end
- `linear` - constant speed
- `ease-in` - slow start
- `ease-out` - slow end
- `ease-in-out` - slow start and end

---

### ✅ 13. Animation
Create animations with `@keyframes`.

**Syntax:**
```css
@keyframes animationName {
    from { }
    to { }
}

/* OR */

@keyframes animationName {
    0% { }
    50% { }
    100% { }
}
```

**Example:**
```css
/* Slide In Animation */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide {
    animation: slideIn 1s ease;
}

/* Rotate Animation */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    animation: rotate 2s linear infinite;
}

/* Bounce Animation */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.bouncing {
    animation: bounce 1s ease infinite;
}
```

**Animation Properties:**
- `animation-name` - keyframe name
- `animation-duration` - how long
- `animation-timing-function` - ease, linear
- `animation-delay` - delay before start
- `animation-iteration-count` - how many times (infinite)
- `animation-direction` - normal, reverse, alternate

**Shorthand:**
```css
animation: name duration timing-function delay iteration-count direction;
animation: slideIn 2s ease 0s infinite normal;
```

---

### ✅ 14. Flexbox
Modern layout system (1-dimensional).

**Container Properties:**
- `display: flex` - enable flexbox
- `flex-direction` - row, column
- `justify-content` - align main axis
- `align-items` - align cross axis
- `gap` - space between items

**Item Properties:**
- `flex` - grow, shrink, basis
- `order` - change order
- `align-self` - individual alignment

**Example:**
```css
/* Flex Container */
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

/* Flex Items */
.item {
    flex: 1;
}

/* Common Layouts */

/* Center Everything */
.center-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Space Between */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Column Layout */
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
```

**justify-content values:**
- `flex-start` - start
- `flex-end` - end
- `center` - center
- `space-between` - space between
- `space-around` - space around
- `space-evenly` - even space

**align-items values:**
- `flex-start` - top
- `flex-end` - bottom
- `center` - center
- `stretch` - stretch to fill
- `baseline` - align text baseline

---

### ✅ 15. CSS Grid
Advanced 2-dimensional layout system.

**Container Properties:**
- `display: grid` - enable grid
- `grid-template-columns` - define columns
- `grid-template-rows` - define rows
- `gap` - space between cells

**Example:**
```css
/* Basic Grid */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

/* Responsive Grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Named Areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

**Grid Units:**
- `fr` - fraction of available space
- `px` - fixed pixels
- `%` - percentage
- `auto` - automatic
- `repeat()` - repeat pattern

---

### ✅ 16. Position
Control element positioning.

**Values:**
- `static` - default, normal flow
- `relative` - relative to normal position
- `absolute` - relative to positioned parent
- `fixed` - relative to viewport
- `sticky` - hybrid of relative and fixed

**Example:**
```css
/* Static (default) */
.box {
    position: static;
}

/* Relative - moves from normal position */
.relative {
    position: relative;
    top: 20px;
    left: 30px;
}

/* Absolute - relative to parent */
.parent {
    position: relative;
}

.absolute {
    position: absolute;
    top: 10px;
    right: 10px;
}

/* Fixed - stays in viewport */
.fixed-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

/* Sticky - scroll behavior */
.sticky-header {
    position: sticky;
    top: 0;
    background: white;
}
```

---

### ✅ 17. Z-Index
Control stacking order (which element is on top).

**Example:**
```css
.box1 {
    position: relative;
    z-index: 1;
}

.box2 {
    position: relative;
    z-index: 2; /* This is on top */
}

.box3 {
    position: relative;
    z-index: 3; /* This is on top of both */
}
```

**Note:** Z-index only works on positioned elements (relative, absolute, fixed, sticky).

---

### ✅ 18. Overflow
Control content that overflows the container.

**Values:**
- `visible` - default, content spills out
- `hidden` - hide overflow
- `scroll` - add scrollbars
- `auto` - scrollbars only when needed

**Example:**
```css
.container {
    width: 300px;
    height: 200px;
}

.overflow-hidden {
    overflow: hidden;
}

.overflow-scroll {
    overflow: scroll;
}

.overflow-auto {
    overflow: auto;
}

/* Separate X and Y */
.overflow-x {
    overflow-x: scroll;
    overflow-y: hidden;
}
```

---

### ✅ 19. Display
Control how element is displayed.

**Common Values:**
- `block` - takes full width, new line
- `inline` - flows with text, no width/height
- `inline-block` - inline but with width/height
- `none` - hide element (no space)
- `flex` - flexbox container
- `grid` - grid container

**Example:**
```css
/* Block element */
div {
    display: block;
}

/* Inline element */
span {
    display: inline;
}

/* Inline-block */
button {
    display: inline-block;
    width: 100px;
    height: 40px;
}

/* Hide element */
.hidden {
    display: none;
}
```

---

### ✅ 20. Visibility
Control element visibility.

**Values:**
- `visible` - default, element is visible
- `hidden` - hide but takes space
- `collapse` - for table rows/columns

**Example:**
```css
.invisible {
    visibility: hidden; /* Hidden but takes space */
}

.gone {
    display: none; /* Hidden and no space */
}
```

**Difference:**
- `display: none` - removes from layout completely
- `visibility: hidden` - hides but keeps space

---

### ✅ 21. Opacity
Control transparency.

**Values:** 0 (transparent) to 1 (opaque)

**Example:**
```css
.transparent {
    opacity: 0; /* Invisible */
}

.semi-transparent {
    opacity: 0.5; /* Half transparent */
}

.solid {
    opacity: 1; /* Fully visible */
}

/* Hover effect */
.fade:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease;
}
```

---

### ✅ 22. CSS Filters
Apply visual effects.

**Filter Functions:**
- `blur()` - blur effect
- `brightness()` - adjust brightness
- `contrast()` - adjust contrast
- `grayscale()` - convert to grayscale
- `hue-rotate()` - rotate colors
- `invert()` - invert colors
- `saturate()` - adjust saturation
- `sepia()` - sepia tone

**Example:**
```css
/* Blur */
.blur {
    filter: blur(5px);
}

/* Grayscale */
.grayscale {
    filter: grayscale(100%);
}

/* Brightness */
.bright {
    filter: brightness(1.5);
}

/* Multiple filters */
.combo {
    filter: blur(2px) brightness(1.2) contrast(1.3);
}

/* Hover effect */
img:hover {
    filter: grayscale(0%) brightness(1.2);
    transition: filter 0.3s ease;
}
```

---

### ✅ 23. CSS Variables (Custom Properties)
Reusable values throughout CSS.

**Syntax:**
```css
/* Define variables in :root */
:root {
    --primary-color: #3b82f6;
    --secondary-color: #ec4899;
    --spacing: 20px;
    --border-radius: 10px;
}

/* Use variables */
.button {
    background: var(--primary-color);
    padding: var(--spacing);
    border-radius: var(--border-radius);
}

.card {
    color: var(--secondary-color);
}
```

**Benefits:**
- Easy to maintain
- Change once, apply everywhere
- Can be updated with JavaScript
- Great for themes

---

### ✅ 24. Media Queries (Responsive Design)
Make website responsive to different screen sizes.

**Syntax:**
```css
@media (condition) {
    /* CSS rules */
}
```

**Example:**
```css
/* Default (mobile first) */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
    .container {
        width: 750px;
        padding: 20px;
    }
}

/* Desktop (1200px and up) */
@media (min-width: 1200px) {
    .container {
        width: 1140px;
        padding: 30px;
    }
}

/* Max-width (mobile) */
@media (max-width: 767px) {
    .navbar {
        flex-direction: column;
    }
    
    .grid {
        grid-template-columns: 1fr;
    }
}
```

**Common Breakpoints:**
- Mobile: 0 - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

---

### ✅ 25. CSS Selectors
Target specific elements.

**Types of Selectors:**

**Basic:**
- `element` - element selector
- `.class` - class selector
- `#id` - ID selector
- `*` - universal selector

**Combinators:**
- `A B` - descendant selector (all B inside A)
- `A > B` - child selector (direct B inside A)
- `A + B` - adjacent sibling (B immediately after A)
- `A ~ B` - general sibling (all B after A)

**Attribute:**
- `[attribute]` - has attribute
- `[attribute="value"]` - exact match
- `[attribute^="value"]` - starts with
- `[attribute$="value"]` - ends with
- `[attribute*="value"]` - contains

**Example:**
```css
/* Element */
p { color: blue; }

/* Class */
.button { background: red; }

/* ID */
#header { height: 100px; }

/* Descendant */
div p { color: green; }

/* Child */
div > p { margin: 10px; }

/* Adjacent sibling */
h1 + p { font-size: 20px; }

/* Attribute */
input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; }
img[src$=".png"] { border: 2px solid blue; }
```

---

## 📚 Box Model

Understanding the CSS Box Model is crucial!

```
┌─────────────────────────────────┐
│         MARGIN                  │  (Outside spacing)
│  ┌──────────────────────────┐  │
│  │      BORDER              │  │
│  │  ┌────────────────────┐  │  │
│  │  │    PADDING         │  │  │  (Inside spacing)
│  │  │  ┌──────────────┐  │  │  │
│  │  │  │   CONTENT    │  │  │  │
│  │  │  └──────────────┘  │  │  │
│  │  └────────────────────┘  │  │
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

**Total Width = width + padding + border + margin**

---

## 🎯 CSS Best Practices

1. **Use Class Selectors** - More reusable than IDs
2. **Mobile First** - Start with mobile, scale up
3. **Use CSS Variables** - Easy maintenance
4. **Avoid !important** - Use specificity instead
5. **Use Flexbox/Grid** - Modern layouts
6. **Comment Your Code** - Explain sections
7. **Keep It DRY** - Don't Repeat Yourself
8. **Organize CSS** - Group related styles
9. **Use Shorthand** - `margin: 10px 20px` instead of separate
10. **Test Responsiveness** - Check all screen sizes

---

## 🔥 Quick Reference Cheat Sheet

```css
/* TEXT */
color, font-size, font-weight, text-align, line-height

/* BOX MODEL */
margin, padding, border, width, height

/* LAYOUT */
display, position, flex, grid, float

/* VISUAL */
background, box-shadow, opacity, transform

/* INTERACTION */
:hover, :active, :focus, transition, animation

/* RESPONSIVE */
@media, min-width, max-width
```

---

## 🚀 What's Next?

After mastering CSS basics:
1. **CSS Preprocessors** - SASS, LESS
2. **CSS Frameworks** - Bootstrap, Tailwind CSS
3. **CSS-in-JS** - Styled Components
4. **Advanced CSS** - Custom properties, calc(), clamp()
5. **CSS Architecture** - BEM, SMACSS

---

## 📖 Additional Resources

- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Learn Grid
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## ✅ Topics Completion Status

| Topic | Status | Example File |
|-------|--------|--------------|
| Fonts | ✅ | examples.html |
| Border | ✅ | examples.html |
| Background | ✅ | examples.html |
| Margin | ✅ | examples.html |
| Padding | ✅ | examples.html |
| Float | ✅ | examples.html |
| Pseudo Classes | ✅ | examples.html |
| Pseudo Elements | ✅ | examples.html |
| Shadows | ✅ | examples.html |
| Icons | ✅ | examples.html |
| Transform | ✅ | examples.html |
| Transition | ✅ | examples.html |
| Animation | ✅ | examples.html |
| Flexbox | ✅ | examples.html |
| Grid | ✅ | examples.html |
| Position | ✅ | examples.html |
| Z-Index | ✅ | examples.html |
| Overflow | ✅ | examples.html |
| Display | ✅ | examples.html |
| Visibility | ✅ | examples.html |
| Opacity | ✅ | examples.html |
| Filters | ✅ | examples.html |
| Variables | ✅ | examples.html |
| Media Queries | ✅ | examples.html |
| Selectors | ✅ | examples.html |

---

<div align="center">

### 🎉 All CSS Topics Completed! 🎉

**Keep practicing and building projects!** 🚀

Made with ❤️ for learning

</div>
