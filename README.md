# Context API App - Homework Assignment

A simple React application demonstrating the use of Context API for global state management.

## Features

✅ **Context API Implementation** - Global state management using React Context
✅ **Multiple Components** - 4 interactive components that share and modify global state
✅ **Global State Updates** - All components can update and access shared state

## Components

### 1. **Header Component**
- Displays welcome message with global user name
- Theme toggle button (Dark/Light mode)

### 2. **Counter Component**
- Display counter value from global state
- Buttons to increment, decrement, and reset counter
- Updates global state that's visible in all components

### 3. **User Profile Component**
- Form to update user name in global state
- All components that use the global state show the updated name

### 4. **Global State Monitor Component**
- Displays all current global state values
- Shows real-time updates from other components
- Acts as a state monitor to verify global updates are working

## Global State Structure

The `ThemeContext` manages:
- `darkMode` - Boolean for theme preference
- `count` - Counter value
- `userName` - Current user name
- Related setter functions: `toggleTheme()`, `incrementCount()`, `decrementCount()`, `resetCount()`, `updateUserName()`

## How It Works

1. **ThemeProvider** wraps the entire app and provides context
2. Components use the **useTheme()** custom hook to access global state
3. Any component can call functions to update the global state
4. All components automatically re-render when global state changes
5. The "Global State Monitor" displays all changes in real-time

## How to Run

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── context/
│   └── ThemeContext.jsx    # Context definition and provider
├── components/
│   ├── Header.jsx          # Header with theme toggle
│   ├── Counter.jsx         # Counter with increment/decrement
│   ├── UserProfile.jsx     # User name form
│   └── GlobalState.jsx     # State monitor display
├── App.jsx                 # Main app component
├── App.css                 # App styles
├── index.css               # Global styles
└── main.jsx                # React entry point
```

## Key Concepts Demonstrated

- **Context Creation**: Using `createContext()` to create a context
- **Provider Pattern**: Wrapping app with ThemeProvider
- **Custom Hook**: Using `useTheme()` to access context in components
- **Global State Updates**: Multiple components updating shared state
- **Reactive UI**: Components automatically updating when state changes

---

Created for homework assignment on React Context API.
