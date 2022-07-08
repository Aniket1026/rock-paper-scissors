import React,{useState} from 'react'

import './App.css';
import Move from './component/Moves/Move';
import ScoreCard from './component/ScoreCard/ScoreCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const [score, setScore] = (0);


function App() {
  return (
      <div className="App">
        <ScoreCard />

      <Move />
      </div>
    
  );
}

export default App;
