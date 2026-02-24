import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function UserProfile() {
  const { userName, updateUserName } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      updateUserName(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="card">
      <h2>User Profile</h2>
      <p>Current User: <strong>{userName}</strong></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: 'none',
            width: '200px',
          }}
        />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
}
