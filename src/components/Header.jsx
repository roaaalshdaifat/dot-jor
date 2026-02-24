import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { darkMode, toggleTheme, userName } = useTheme();

  return (
    <header className={`card ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Welcome, {userName}!</h1>
      <p>Global State Management with Context API</p>
      <button onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
