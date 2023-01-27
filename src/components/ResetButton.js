import React from "react";

const ResetButton = (props) => {
  const resetGame = () => {
    if (props.score > props.bestScore) {
      props.setBestScore(props.score);
    }
    props.setScore(0);
    props.shuffle(props.cardArray);
  }
  return (
    <div>
      <button onClick={() => resetGame()}>Reset Game</button>
    </div>
  )
}

export default ResetButton
