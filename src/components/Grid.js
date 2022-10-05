import React, { useEffect, useState } from 'react';
import Square from './Square';

const amount = 230;

const getRange = ()=> {
  let arr = [];
  for(let i = 1; i < amount; i++) {
    arr.push(i);
  }
  return arr;
}

function Grid(props) {
  const [squares, setSquares] = useState([]);
  const [available, setAvailable] = useState(getRange());

  const shuffleGrid = () => {
  //this function is used to move squares around after each click
    let shufSquares = [...squares];
    for(let i = shufSquares.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [shufSquares[i], shufSquares[j]] = [shufSquares[j], shufSquares[i]];
    }
    setSquares(shufSquares);
  }

   const populateGrid = () => {
    //this function is used to get new squares after each round
    let newSquares = [];
    let arrCopy = [...available];
      for(let i = 0; i < props.round * 2 + 2; i++) {
        let randIndex = Math.floor(Math.random() * arrCopy.length);
        newSquares.push({ img: arrCopy[randIndex], key:i });
        arrCopy.splice(randIndex, 1);
      }
      setSquares(newSquares);
      setAvailable(arrCopy);
  }

  const resetGame = () => {
    props.resetRounds();
    setAvailable(getRange());
    populateGrid();
  }

  useEffect(()=> {
    populateGrid();
  },[props.round])

  return (
    <div className="Grid">
      {squares.map(square => (
        <Square
          key={square.key}
          img={square.img}
          shuffle={shuffleGrid}
          resetGame={resetGame}
          incrementRound={props.incrementRound}
          incrementScore={props.incrementScore}
        />
      ))}
    </div>
  );
}

export default Grid;
