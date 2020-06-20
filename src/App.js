import React, { useState } from 'react';
import { Parent } from './Parent'
import ValueContext from './ValueContext'


function App() {
  let [number, setNumber] = useState(45)
  let value = 888;
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        This is APP.js
      <Parent num={number}></Parent>
        <button onClick={() => { setNumber(++number) }}> Update </button>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
