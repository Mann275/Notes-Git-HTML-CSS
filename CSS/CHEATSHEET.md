# 🎨 CSS Quick Reference Cheat Sheet

## 🔥 Most Used Properties

### Text & Fonts
```css
color: #333;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold; /* 100-900, normal, bold */
font-style: italic;
text-align: center; /* left, right, center, justify */
text-decoration: underline; /* none, underline, line-through */
text-transform: uppercase; /* lowercase, uppercase, capitalize */
letter-spacing: 2px;
line-height: 1.5;
```

### Box Model
```css
/* Margin (outside) */
margin: 10px; /* all sides */
margin: 10px 20px; /* top/bottom left/right */
margin: 10px 20px 30px 40px; /* top right bottom left */

/* Padding (inside) */
padding: 10px; /* all sides */
padding: 10px 20px; /* top/bottom left/right */

/* Border */
border: 2px solid red;
border-radius: 10px;

/* Width & Height */
width: 300px;
height: 200px;
max-width: 100%;
```

### Colors
```css
/* Named colors */
color: red;

/* Hex */
color: #ff0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);
```

### Background
```css
background-color: blue;
background-image: url('image.jpg');
background-size: cover; /* contain, 100px, 50% */
background-position: center; /* top, bottom, left, right */
background-repeat: no-repeat; /* repeat, repeat-x, repeat-y */

/* Gradient */
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, yellow, green);
```

### Display & Layout
```css
display: block; /* inline, inline-block, none, flex, grid */
position: relative; /* static, absolute, fixed, sticky */
top: 10px;
left: 20px;
z-index: 10;
```

### Flexbox (Quick)
```css
.container {
    display: flex;
    flex-direction: row; /* column */
    justify-content: center; /* flex-start, flex-end, space-between, space-around */
    align-items: center; /* flex-start, flex-end, stretch */
    gap: 20px;
}
```

### Grid (Quick)
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* repeat(3, 1fr) */
    gap: 20px;
}
```

### Effects
```css
/* Shadow */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* Transform */
transform: rotate(45deg);
transform: scale(1.2);
transform: translateX(20px);

/* Transition */
transition: all 0.3s ease;

/* Opacity */
opacity: 0.5;

/* Filter */
filter: blur(5px);
filter: grayscale(100%);
```

### Animation
```css
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.element {
    animation: slideIn 1s ease;
}
```

### Pseudo Classes
```css
a:hover { color: red; }
button:active { transform: scale(0.95); }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
li:last-child { color: red; }
li:nth-child(2) { background: yellow; }
```

### Media Queries
```css
/* Mobile First */
@media (min-width: 768px) {
    /* Tablet and up */
}

@media (min-width: 1200px) {
    /* Desktop and up */
}

/* Desktop First */
@media (max-width: 767px) {
    /* Mobile only */
}
```

### CSS Variables
```css
:root {
    --primary: #3b82f6;
    --spacing: 20px;
}

.element {
    color: var(--primary);
    padding: var(--spacing);
}
```

## 🎯 Common Patterns

### Center Element
```css
/* Horizontal Center */
.element {
    margin: 0 auto;
    width: 50%;
}

/* Center with Flexbox */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Card Component
```css
.card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: white;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
```

### Button
```css
.button {
    padding: 12px 24px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background: #2563eb;
    transform: translateY(-2px);
}
```

### Responsive Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

### Sticky Header
```css
.header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## 📐 Units

| Unit | Description | Example |
|------|-------------|---------|
| px | Pixels (fixed) | `16px` |
| % | Percentage of parent | `50%` |
| em | Relative to parent font | `1.5em` |
| rem | Relative to root font | `1.5rem` |
| vw | Viewport width | `50vw` |
| vh | Viewport height | `100vh` |
| fr | Fraction (Grid) | `1fr` |

## 🎨 Color Formats

```css
/* Named */
color: red;

/* Hex */
color: #ff0000;
color: #f00; /* short */

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with alpha) */
color: rgba(255, 0, 0, 0.5);

/* HSL */
color: hsl(0, 100%, 50%);

/* HSLA */
color: hsla(0, 100%, 50%, 0.5);
```

## 🔍 Selectors Cheat Sheet

| Selector | Description | Example |
|----------|-------------|---------|
| `element` | Element selector | `p { }` |
| `.class` | Class selector | `.button { }` |
| `#id` | ID selector | `#header { }` |
| `*` | Universal selector | `* { }` |
| `A B` | Descendant | `div p { }` |
| `A > B` | Direct child | `div > p { }` |
| `A + B` | Adjacent sibling | `h1 + p { }` |
| `A ~ B` | General sibling | `h1 ~ p { }` |
| `[attr]` | Has attribute | `[disabled] { }` |
| `[attr="value"]` | Exact match | `[type="text"] { }` |

## 🚀 Performance Tips

1. **Avoid `!important`** - Use specificity instead
2. **Use shorthand** - `margin: 10px 20px` not 4 separate lines
3. **Minimize repaints** - Use `transform` instead of `top/left`
4. **Use `will-change`** - For heavy animations
5. **Optimize selectors** - Avoid deep nesting
6. **Use CSS variables** - For maintainability
7. **Minify CSS** - In production
8. **Use Flexbox/Grid** - Instead of floats
9. **Mobile first** - Start with mobile, scale up
10. **Avoid inline styles** - Use classes

---

## 📖 Full Examples

Check [index.html](index.html) for interactive examples of all these concepts!

---

Made with ❤️ for quick reference
