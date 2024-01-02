import React from 'react';

const RoleDice = ({ handleDiceRoll, currentDice, setScore,setCurrentDice, setIsRuleShown }) => {
  const handleResetScore = () => {
    setScore(0);
    setCurrentDice(1);
  };

  return (
    <div className='container w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
      <img src={`/dice_${currentDice}.jpg`} alt={`Dice ${currentDice}`} onClick={handleDiceRoll} />
      <h1 className='mt-2 uppercase font-bold mx-6'>Click on dice to roll</h1>
      <button
        onClick={handleResetScore}
        className='uppercase border-2 border-black px-14 py-2 bg-white text-black rounded-md hover:bg-black hover:text-white transition-all duration-1000ms mb-5 mx-5 mt-4'>
        Reset Score
      </button>
      <br></br>
      <button
        onClick={() => setIsRuleShown(true)}
        className='uppercase border-2 border-black px-14 py-2 mx-6 bg-black text-white rounded-md hover:bg-white hover:text-black transition-all duration-1000ms'>
        Show Rule
      </button>
    </div>
  );
};

export default RoleDice;
