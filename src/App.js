import React from 'react'
import { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className='main'>
      <p>React Counter by Justice</p>
      
      <button className='btn' onClick={() => setValue(value - 1)}>-</button>
      <button className='val'>{value}</button>
      <button className='btn' onClick={() => setValue(value + 1)}>+</button><br />
      <br />
      <button className='reset' onClick={() => setValue(0)}>Reset</button>
      
    </div>
  );
}
export default App;
