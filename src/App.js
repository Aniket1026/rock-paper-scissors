import React,{useState} from 'react'

import './App.css';
import Move from './component/Moves/Move';
import ScoreCard from './component/ScoreCard/ScoreCard';
import Footer from './component/Footer/Footer';



function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <ScoreCard score={score} setScore={setScore} />

      <Move score={score} setScore={setScore} />
      <Footer setScore={setScore} />
    </div>
  );
}

export default App;
