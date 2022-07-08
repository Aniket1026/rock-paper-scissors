import React from "react";

import './ScoreCard.css'

const ScoreCard = () => {
    return (
      <div className="Scorecard-box">
        <ul className="options">
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSOR</li>
        </ul>
        <div className="score">
          <ul className="score-display">
            <li>SCORE</li>
            <li>10</li>
          </ul>
        </div>
      </div>
    );
}
export default ScoreCard;