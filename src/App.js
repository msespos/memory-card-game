import { React, useEffect } from "react";
import Game from "./components/Game"

const App = () => {
  useEffect(() => {
    document.title = "Pattern Picker"
  }, []);
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
