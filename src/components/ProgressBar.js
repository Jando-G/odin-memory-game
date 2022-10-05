
function ProgressBar(props) {
  let total = 0;
  for(let i = 0; i < props.round; i++) {
    total += 4 + 2 * i;
  }
  const totalCurrent = 2 + 2 * props.round;
  const amount = 1 + (totalCurrent - total + props.score) / totalCurrent * 100;
  const lineHeight = {
      height: amount + '%',
    }
    return (
      <div className="ProgressContainer">
        <div className="Best">Best: {props.best}</div>
          <div className="Score">Score: {props.score}</div>
         <div className="ProgressBar">
           <div className="GoalLine"></div>
           <div className="ScoreLine" style={lineHeight}>
           </div>
        </div>
        <div className="Round">{props.round}</div>
      </div>
     
    );
  }
  
  export default ProgressBar;
  