import React, { useState, useEffect } from 'react';

function Square(props) {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    if(!clicked) {
      setClicked(true);
      props.incrementScore();
      props.shuffle();
      props.incrementRound();
    }
    else {
      props.resetGame();
    }
  }
  useEffect(()=> {
    setClicked(false);
  }, [props.img])
  return (
    <div className="Square">
      <img onClick={()=> handleClick()}
      src={require('../Assets/Blocks/Block (' + (props.img) + ').png')} 
      className="Block"
      key={Math.floor(Math.random() * 1000)}></img>
    </div>
  );
}

export default Square;
