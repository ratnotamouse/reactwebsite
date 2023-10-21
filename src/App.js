import React from 'react';
import './App.css';
import LoginForm from './LoginForm'; // Import the LoginForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm /> {/* Use the LoginForm component here */}
      </header>
    </div>
  );
}

export default App;
