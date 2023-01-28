import React from "react";

const Scores = (props) => {
  if (props.score === 0 && props.lastScore === 0) {
    return (
      <div>
        <h1>START - CLICK A PATTERN</h1>
      </div>
    )
  } else if (props.score === 12) {
    return (
      <div>
        <h1>YOU WON! CLICK AGAIN TO START OVER</h1>
      </div>
    )
  } else if (props.score === 0 && props.lastScore !== 12) {
    return (
      <div>
        <h1>OOPS; YOU LOST! CLICK AGAIN TO START OVER</h1>
      </div>
    )
  } else if (props.score !== 0 || props.lastScore === 12) {
    return (
      <div>
        <h1>CLICK A DIFFERENT PATTERN EACH TIME</h1>
        <h2>SCORE: {props.score}</h2>
        <h2>HIGH SCORE: {props.bestScore}</h2>
      </div>
    )
  }
}

export default Scores
