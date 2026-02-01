import React from 'react';

function ItemCard(props) {
  return (
    <div style={{ border: '2px solid #646cff', padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
      <h2>بطاقة المعلومات 📝</h2>
      <p><strong>الاسم:</strong> {props.name}</p>
      <p><strong>العمر:</strong> {props.age}</p>
      <p><strong>التخصص:</strong> {props.major}</p>
    </div>
  );
}

export default ItemCard;