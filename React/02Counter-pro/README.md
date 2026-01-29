# React Counter Application - State Management with useState

## Project Overview

This project demonstrates React's state management using the `useState` hook. It's a simple counter application with increment and decrement functionality, including boundary conditions to prevent the counter from going below 0 or above 5.

## Theory & Concepts

### React Hooks

- **useState** is a React Hook that allows you to add state variables to functional components
- Returns an array with two elements: current state value and a setter function
- State updates trigger component re-renders automatically
- Hooks follow the "Rules of Hooks" - must be called at the top level of components

### State Management

- **State** represents data that changes over time in a component
- State is local to the component and encapsulated
- When state changes, React re-renders the component with the new state
- **Immutability**: State should not be directly mutated, always use setter functions

### Event Handling

- **onClick** event handler executes functions when buttons are clicked
- Event handlers can access and modify component state
- Functions can include conditional logic for business rules

## Project Implementation

### What This Project Does

- Creates a counter with a numeric display
- Provides "Add" and "Remove" buttons to modify the counter
- Implements boundary conditions (0 ≤ counter ≤ 5)
- Logs counter actions to the console for debugging

### How It Works

1. **State Initialization**: Uses `useState(0)` to create a counter state starting at 0
2. **Add Function**: Increments counter by 1 if it's less than 5
3. **Remove Function**: Decrements counter by 1 if it's greater than 0
4. **Conditional Logic**: Prevents counter from exceeding boundaries
5. **UI Updates**: Counter value updates automatically when state changes

### Key Features Implemented

- ✅ State management with useState hook
- ✅ Event handling with onClick events
- ✅ Conditional logic for boundary validation
- ✅ Console logging for debugging
- ✅ Real-time UI updates based on state changes
- ✅ Button controls for user interaction

### How It Was Built

1. Set up React application with Vite
2. Imported useState hook from React
3. Created state variable for counter with initial value 0
4. Implemented addValue function with upper boundary (max: 5)
5. Implemented removeValue function with lower boundary (min: 0)
6. Added onClick event handlers to buttons
7. Created responsive UI displaying current counter value
8. Added console.log statements for debugging and learning

### Code Structure

```jsx
const [counter, setCounter] = useState(0); // State declaration

const addValue = () => {
  // Increment function
  if (counter < 5) {
    setCounter(counter + 1);
  }
};

const removeValue = () => {
  // Decrement function
  if (counter > 0) {
    setCounter(counter - 1);
  }
};
```

### Development Setup

```bash
npm install
npm run dev
```

### Technologies Used

- **React** - UI library with hooks for state management
- **Vite** - Fast development server and build tool
- **useState Hook** - For managing component state
- **JavaScript ES6** - Modern JavaScript features
