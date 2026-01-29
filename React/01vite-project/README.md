# React with Vite - Component Import & Export

## Project Overview

This project demonstrates the fundamental concepts of React component creation, importing, and exporting using Vite as the build tool. It showcases how to structure a simple React application with custom components.

## Theory & Concepts

### React Components

- **Components** are the building blocks of React applications
- Components are JavaScript functions that return JSX (JavaScript XML)
- Components can be imported and exported between files for better organization and reusability
- **JSX** allows you to write HTML-like syntax within JavaScript

### Vite Build Tool

- **Vite** is a modern frontend build tool that provides fast development server and optimized builds
- Hot Module Replacement (HMR) allows instant updates without page refresh during development
- Significantly faster than traditional bundlers like webpack for development

### ES6 Modules

- **Import/Export** statements allow sharing code between files
- `export default` exports a single default value from a module
- `import ComponentName from './path'` imports the default export

## Project Implementation

### What This Project Does

- Creates a main App component that imports and renders a custom component
- Demonstrates basic component structure and JSX syntax
- Shows how to organize components in separate files
- Uses Vite for fast development and build process

### How It Works

1. **App.jsx**: Main application component that imports the `Final` component from `star.jsx`
2. **star.jsx**: Custom component that returns a simple JSX element
3. **Component Structure**: Shows proper React functional component syntax
4. **File Organization**: Separates components into different files for better maintainability

### Key Features Implemented

- ✅ Custom React component creation
- ✅ Component import/export functionality
- ✅ JSX rendering
- ✅ Vite development environment setup
- ✅ Basic project structure organization

### How It Was Built

1. Created React app using Vite template
2. Built custom `Final` component in `star.jsx`
3. Imported and used the component in main `App.jsx`
4. Configured Vite for optimal development experience
5. Added ESLint for code quality

### Development Setup

```bash
npm install
npm run dev
```

### Technologies Used

- **React** - UI library for building user interfaces
- **Vite** - Fast build tool and development server
- **JSX** - JavaScript extension for writing HTML-like syntax
- **ESLint** - Code linting and formatting
