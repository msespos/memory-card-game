import { React, useState } from "react";
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
  // shuffle function taken from
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    setCardArray([...array]);
  }

  return (
    <div>
      <img src={cardArray[0]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[1]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[2]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[3]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[4]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[5]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[6]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[7]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[8]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[9]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[10]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[11]} width={250} onClick={() => shuffle(cardArray)} />
      <img src={cardArray[12]} width={250} onClick={() => shuffle(cardArray)} />
    </div>
  )
}

export default Board
