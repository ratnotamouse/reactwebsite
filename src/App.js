import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="App">
      <button
        onClick={toggleButton}
        className={`button ${isOn ? 'on' : 'off'}`}
      >
        {isOn ? 'On' : 'Off'}
      </button>
    </div>
  );
}

export default App;
