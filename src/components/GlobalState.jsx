import { useTheme } from '../context/ThemeContext';

export function GlobalState() {
  const { count, userName, darkMode } = useTheme();

  return (
    <div className="card">
      <h2>Global State Monitor</h2>
      <p>📊 <strong>Current State:</strong></p>
      <ul style={{ textAlign: 'left', marginLeft: '20px' }}>
        <li>User Name: <strong>{userName}</strong></li>
        <li>Counter Value: <strong>{count}</strong></li>
        <li>Theme: <strong>{darkMode ? 'Dark' : 'Light'}</strong></li>
      </ul>
      <p style={{ marginTop: '10px', fontSize: '12px', opacity: 0.7 }}>
        This component displays all global state changes made in other components.
      </p>
    </div>
  );
}
