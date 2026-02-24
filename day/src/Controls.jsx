import React from 'react';

function Controls({ onIncrease, onDecrease, onChangeName, onReset }) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button onClick={onIncrease} style={{ backgroundColor: 'green' }}>زيادة العمر +</button>
      <button onClick={onDecrease} style={{ backgroundColor: 'orange' }}>نقصان العمر -</button>
      <button onClick={onChangeName} style={{ backgroundColor: 'blue' }}>تغيير الاسم ✨</button>
      <button onClick={onReset} style={{ backgroundColor: 'red' }}>إعادة ضبط 🔄</button>
    </div>
  );
}

export default Controls;