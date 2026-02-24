import React, { createContext, useState, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('Guest');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const updateUserName = (name) => {
    setUserName(name);
  };

  const value = {
    darkMode,
    toggleTheme,
    count,
    incrementCount,
    decrementCount,
    resetCount,
    userName,
    updateUserName,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
