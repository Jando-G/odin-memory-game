import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Grid from './Grid';

function Game() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(window.localStorage.getItem('bestScore'));

  const resetGame = () => {
    setRound(1);
    setScore(0);
  }
  const incrementRound = () => {
    let goal = 0;
    for(let i = 0; i < round; i++) {
      goal += 4 + 2 * i;
    }
    if(score === (goal - 1)) {
      setRound(round + 1);
    }
  }
  const incrementScore = () => {
    if(score + 1 > best) {
      setBest(score + 1);
      window.localStorage.setItem('bestScore', score + 1);
    }
    setScore(score + 1);
  }
  
  return (
    <div className="Content">
      <Grid 
      incrementScore ={incrementScore} 
      incrementRound={incrementRound} 
      round={round} 
      resetRounds={()=>resetGame(1)}/>
      <ProgressBar best={best} score={score} round={round}/>
    </div>
  );
}

export default Game;
