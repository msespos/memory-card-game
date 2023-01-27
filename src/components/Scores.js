import React from "react";

const Scores = (props) => {
  if (props.score === 12) {
    return (
      <div>
        YOU WON!
      </div>
    )
  } else {
    return (
      <div>
        SCORE:{props.score}<br></br>
        BEST SCORE:{props.bestScore}
      </div>
    )
  }
}

export default Scores
