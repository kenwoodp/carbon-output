import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import axios from 'axios';
import { cleanup } from '@testing-library/react';


function App() {
  const [carbonRate, setRate] = useState(0)

  const [carbonCounter, setCounter] = useState(0)

  const calculateCarbonOutput = energyUsed => {
    axios.post('/carbon-data', { energyUsed: energyUsed })
      .then(res => {
        console.log(res)
        const carbonOutput = res.carbonOutput
        
        const carbonOutputPerHalfSecond = ((carbonOutput/60)/60)/2
        setRate(carbonRate + carbonOutputPerHalfSecond)
    })
  }
  
  useEffect(() => {
    const updateCounter = setInterval(() => setCounter(carbonCounter + carbonRate), 500);
    return () => {
      cleanup()
    };
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route 
          path="/"
          element={
            <Home 
              carbonCounter={carbonCounter}
              calculateCarbonOutput={calculateCarbonOutput}
            />}  
        />
      </Routes>
    </div>
  );
}

export default App;
