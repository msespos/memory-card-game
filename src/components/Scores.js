import React from "react";

const Scores = (props) => {
  if (props.score === 12) {
    return (
      <div>
        <h1>YOU WON! CLICK AGAIN TO START OVER</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h2>SCORE: {props.score}</h2>
        <h2>HIGH SCORE: {props.bestScore}</h2>
      </div>
    )
  }
}

export default Scores
