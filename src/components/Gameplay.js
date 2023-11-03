   import { useState } from "react";
   import NumberSelector from "./NumberSelector";
   import RoleDice from "./RoleDice";
   import TotalScore from "./TotalScore";
   
   const Gameplay = () => {
     const [selectedNumber, setSelectedNumber] = useState(0);
     const [currentDice, setCurrentDice] = useState(1);
     const [score, setScore] = useState(0);
     const [error, setError] = useState("");
     
     
   
     const generateRandomNumber = (min, max) => {
       return Math.floor(Math.random() * (max - min + 1)) + min;
     };
   
     const handleDiceRoll = () => {
       if (!selectedNumber) {
         setError("THE NUMBER IS NOT SELECTED");
         return;
       }
       
       setError("");
   
       const randomNumber = generateRandomNumber(1, 6);
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
         />
       </main>
     );
   };
   
   export default Gameplay;
   