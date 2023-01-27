import { React, useState, useEffect } from "react";
import Scores from "./Scores";
import ResetButton from "./ResetButton"
import pattern01 from "../imgs/pattern01.jpg"
import pattern02 from "../imgs/pattern02.jpg"
import pattern03 from "../imgs/pattern03.jpg"
import pattern04 from "../imgs/pattern04.jpg"
import pattern05 from "../imgs/pattern05.jpg"
import pattern06 from "../imgs/pattern06.jpg"
import pattern07 from "../imgs/pattern07.jpg"
import pattern08 from "../imgs/pattern08.jpg"
import pattern09 from "../imgs/pattern09.jpg"
import pattern10 from "../imgs/pattern10.jpg"
import pattern11 from "../imgs/pattern11.jpg"
import pattern12 from "../imgs/pattern12.jpg"

const Board = () => {
  const [cardArray, setCardArray] = useState([pattern01, pattern02, pattern03,
                                              pattern04, pattern05, pattern06,
                                              pattern07, pattern08, pattern09,
                                              pattern10, pattern11, pattern12,])
  const [clickedArray, setClickedArray] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    shuffle(cardArray);
  }, []);

  // shuffle function adapted from
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    setCardArray([...array]);
  }

  const takeTurn = (card) => {
    if (!clickedArray.includes(card)) {
      setClickedArray(clickedArray.concat(card));
      setScore(score + 1);
    } else {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedArray([]);
    }
  }

  const numArray = [...Array(12).keys()]

  return (
    <div>
      <Scores score={score} bestScore={bestScore} />
      <ResetButton score={score} bestScore={bestScore}
                   setScore={setScore} setBestScore={setBestScore}
                   shuffle={shuffle} cardArray={cardArray} />
      {
        numArray.map((number, index) => (
          <img src={cardArray[number]}
               width={250}
               onClick={() => {takeTurn(cardArray[number]); shuffle(cardArray)}}
               key={index}
          />
        ))
      };
    </div>
  )
}

export default Board
