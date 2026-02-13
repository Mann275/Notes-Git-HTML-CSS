# 03 NPM - Node Package Manager

A tutorial project for understanding NPM (Node Package Manager) basics and package management in Node.js.

## 📚 Topics Covered

### 1. NPM Understanding

- **npm** - Node Package Manager
- **Modules** - Core Node.js modules that come pre-installed
- **Packages** - External modules downloaded via npm

### 2. Installing and Uninstalling Packages

```bash
# Install a package
npm install <package-name>
npm i <package-name>

# Install a specific version
npm install <package-name>@<version>

# Uninstall a package
npm uninstall <package-name>
```

### 3. Understanding node_modules and package-lock.json

- **node_modules** - Folder where all downloaded packages are stored
- **package-lock.json** - Contains exact versions of each package and its dependencies, ensuring consistent installs across different environments

### 4. Dependencies Types

- **dependencies** - Packages required for the application to run in production
- **devDependencies** - Packages required for development and testing only

```bash
# Install as production dependency
npm install <package-name>

# Install as dev dependency
npm install <package-name> --save-dev
```

### 5. NPM Scripts

- **Default scripts** - `start`, `test`, etc. can be run directly
  ```bash
  npm start
  npm test
  ```
- **Custom scripts** - Defined in package.json under "scripts"
  ```bash
  npm run <script-name>
  ```

## 🚀 Available Scripts

- `npm start` - Runs the script.js file
- `npm test` - Placeholder for test command
- `npm run mann` - Custom script that displays a colored message and runs script.js

## 📦 Dependencies

- **chalk** (^5.6.2) - Terminal string styling library

### Installation

```bash
# Install all dependencies
npm install

# Or install chalk specifically
npm install chalk
