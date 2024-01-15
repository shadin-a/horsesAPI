
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [horses, setHorses] = useState([]);

  useEffect(() => {
    fetchHorses();
  }, []);

  useEffect(() => {
    console.log(horses);
  }, [horses]);

  const fetchHorses = async () => {
    try {
      const response = await fetch('/horses');
      const data = await response.json();
      setHorses(data);
    } catch (error) {
      console.error('Error fetching horses:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
