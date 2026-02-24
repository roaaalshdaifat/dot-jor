import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { UserProfile } from './components/UserProfile';
import { GlobalState } from './components/GlobalState';
import './App.css';

function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <Header />
      </div>
      
      <div className="container">
        <Counter />
        <UserProfile />
        <GlobalState />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
