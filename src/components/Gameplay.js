   import { useState } from "react";
   import NumberSelector from "./NumberSelector";
   import RoleDice from "./RoleDice";
   import TotalScore from "./TotalScore";
import ShowRule from "./ShowRule";
   
   const Gameplay = () => {
     const [selectedNumber, setSelectedNumber] = useState(0);
     const [currentDice, setCurrentDice] = useState(1);
     const [score, setScore] = useState(0);
     const [error, setError] = useState("");
     const [isRuleShown, setIsRuleShown] = useState(false);
     
     
   
     const generateRandomNumber = () => {
      return Math.floor(Math.random() * 6) + 1; 
    };
   
     const handleDiceRoll = () => {
       if (!selectedNumber) {
         setError("THE NUMBER IS NOT SELECTED");
         return;
       }
       
       setError("");
   
       const randomNumber = generateRandomNumber();
       setCurrentDice(randomNumber);
   
       if (selectedNumber === randomNumber) {
         setScore((prev) => prev + randomNumber);
       } else {
         setScore((prev) => prev - 2);
       }
       setSelectedNumber(undefined);
     };
   
     return (
       <main>
         <div>
           <TotalScore score={score} setScore={setScore} />
           <NumberSelector
             selectedNumber={selectedNumber}
             setSelectedNumber={setSelectedNumber}
             setError={setError}
             error={error}
           />
         </div>
         <RoleDice
           currentDice={currentDice}
           handleDiceRoll={handleDiceRoll} 
           setCurrentDice={setCurrentDice}
           setScore={setScore}
           setIsRuleShown={setIsRuleShown}
           score={score}
         />
         <ShowRule isRuleShown={isRuleShown} setIsRuleShown={setIsRuleShown}/>
       </main>
     );
   };
   
   export default Gameplay;
   