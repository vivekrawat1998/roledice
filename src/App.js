import { useState } from "react";

import Gameplay from "./components/Gameplay";
import Startgame from "./components/Startgame";

function App() {
  const [isGamestarted , SetIsGameStarted] = useState(false);
 
  const toggleGameplay = () => {
    SetIsGameStarted((prev) => !prev)
  }
 
  

  return (
  <>
  {isGamestarted ? <Gameplay/> : <Startgame toggle={toggleGameplay}/> }
  
  </>
  );
}

export default App;
