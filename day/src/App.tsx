import { useState } from 'react';
import ItemCard from './ItemCard';
import Controls from './Controls';
import './App.css';

function App() {
  // 1. تعريف الـ State
  const [name, setName] = useState("أحمد");
  const [age, setAge] = useState(20);
  const [major, setMajor] = useState("هندسة برمجيات");

  // 2. وظائف التحكم (Functions)
  const increaseAge = () => setAge(age + 1);
  const decreaseAge = () => setAge(age > 0 ? age - 1 : 0); // لمنع العمر من النزول تحت الصفر
  
  const changeName = () => {
    setName("محمد البطل");
  };

  const resetAll = () => {
    setName("أحمد");
    setAge(20);
    setMajor("هندسة برمجيات");
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>مشروع بطاقة المستخدم</h1>
      
      {/* تمرير البيانات للابن ItemCard عبر الـ Props */}
      <ItemCard name={name} age={age} major={major} />

      {/* تمرير الوظائف للابن Controls عبر الـ Props */}
      <Controls 
        onIncrease={increaseAge} 
        onDecrease={decreaseAge} 
        onChangeName={changeName} 
        onReset={resetAll} 
      />
    </div>
  );
}

export default App;