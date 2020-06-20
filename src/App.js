import React, { useState } from 'react';
import { Parent } from './Parent'


function App() {
  let [number, setNumber] = useState(45)
  return (
    <div className="App">
      This is APP.js
      <Parent num={number}></Parent>
      <button onClick={() => { setNumber(++number) }}> Update </button>
    </div>
  );
}

export default App;
