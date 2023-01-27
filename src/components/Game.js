import React from "react";
import Title from "./Title";
import Board from "./Board";
import "../styles/Game.css"

const Game = () => {
  return (
    <div className="container">
      <Title />
      <Board />
    </div>
  )
}

export default Game
