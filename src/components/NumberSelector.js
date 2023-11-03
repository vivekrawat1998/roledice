
const NumberSelector = ({selectedNumber, setSelectedNumber, error}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6,];

  return (
    <div className='flex flex-col items-end'>
      <p className="absolute top-10 font-bold text-2xl text-red-500 right-72">{error}</p>
      <box  className='flex gap-6 -mt-20 mx-32'>
      {arrNumber.map((value, i) => (
        <box
          key={10}
          onClick={() => setSelectedNumber(value)}
          className={`border-2 border-black w-16 h-16 grid place-items-center text-2xl font-semibold ${
            value === selectedNumber
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          {value}
        </box>
      ))}
      <p className="absolute top-40 right-40 font-bold text-2xl">Selected Number: {selectedNumber}</p> {/* Display the selected number */}
      </box>
    </div> 
  );
};

export default NumberSelector;


