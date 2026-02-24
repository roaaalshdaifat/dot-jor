import { useTheme } from '../context/ThemeContext';

export function Counter() {
  const { count, incrementCount, decrementCount, resetCount } = useTheme();

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Current Count: <strong>{count}</strong></p>
      <div>
        <button onClick={decrementCount}>➖ Decrease</button>
        <button onClick={incrementCount}>➕ Increase</button>
        <button onClick={resetCount}>↻ Reset</button>
      </div>
    </div>
  );
}
