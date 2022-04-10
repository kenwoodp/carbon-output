// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Lamp from '../Carbon/Lamp';
import Kettle from '../Carbon/Kettle'
import Microwave from '../Carbon/Microwave';
import Heater from '../Carbon/Heater';
import Work from '../Carbon/Work';
import Computer from '../Carbon/Computer';
import Flight from '../Carbon/Flight';
import Sfo from '../Carbon/Sfo';
import axios from 'axios';
import { cleanup } from '@testing-library/react';


function App() {
  const [carbonRate, setRate] = useState(0)
  const [carbonCounter, setCounter] = useState(0)
  const [distance, setDistance] = useState('')

  const getElectricityEstimate = energyUsed => {
    axios.post('/carbon-data', { energyUsed: energyUsed })
      .then(res => {
        const carbonOutput = (res.data.carbonOutput * 1000)
        const carbonOutputPerHalfSecond = (((carbonOutput/60)/60)/2)
        setRate(carbonRate + carbonOutputPerHalfSecond)
    })
  }
  
  const getVehicleEstimate = () => {
    axios.post('/carbon-distance-data', { distance: distance })
      .then(res => {
        const carbonOutput = (res.data.carbonOutput * 1000)
        setCounter(carbonCounter + carbonOutput)
    })
  }

  const getFlightEstimate = () => {
    axios.post('/carbon-flight-data', { departureAirport: 'mel', destinationAirport: 'sfo' })
      .then(res => {
        const carbonOutput = (res.data.carbonOutput * 1000)
        setCounter(carbonCounter + carbonOutput)
    })
  }
  
  const reset = () => {
    setCounter(carbonCounter = 0)
    setRate(carbonRate = 0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((carbonCounter) => {return carbonCounter + carbonRate})
    }, 500)
      return () => clearInterval(interval);
  }, [carbonRate]);

  return (
    <div className="App">
      <div className="carbonTicker">
        <p>{carbonCounter.toFixed(0)}</p>
      </div>
      <Routes>
        <Route 
          path="/"
          element={
            <Lamp getElectricityEstimate={getElectricityEstimate}/>
          }
        />
        <Route 
          path="/kettle"
          element={
            <Kettle getElectricityEstimate={getElectricityEstimate}/>
          }
        />
        <Route 
          path="/microwave"
          element={
            <Microwave getElectricityEstimate={getElectricityEstimate}/>
          }
        />
        <Route 
          path="/heater"
          element={
            <Heater getElectricityEstimate={getElectricityEstimate}/>
          }
        />
        <Route 
          path="/work"
          element={
            <Work setDistance={setDistance} getVehicleEstimate={getVehicleEstimate}/>
          }
        />
        <Route 
          path="/computer"
          element={
            <Computer getElectricityEstimate={getElectricityEstimate}/>
          }
        />
        <Route 
          path="/flight"
          element={
            <Flight getFlightEstimate={getFlightEstimate}/>
          }
        />
        <Route 
          path="/sfo"
          element={
            <Sfo reset={reset}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
