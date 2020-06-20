import React, { useState } from 'react';
import { Parent } from './Parent'
import ValueContext from './ValueContext'


function App() {
  // let [number, setNumber] = useState(45)
  let value = useState(48)
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        This Is APP.js
      <Parent ></Parent>
        {/* <button onClick={() => { setNumber(++number) }}> Update </button> */}
      </div>
    </ValueContext.Provider>
  );
}

export default App;
