
const Startgame = ({toggle}) => {
  return (
    <div className='container w-3/4 h-fit  flex mx-40  my-32 '>
    <img className="w-1/2 h-1/2" src='/dices 1.jpg' alt="target"/>
<div className='my-40 mx-20'>
  <h1 className='uppercase text-7xl font-bold mb-4'>dice game</h1>
  <button onClick={toggle} className='uppercase border-2 border-black px-14 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black transition-all duration-1000ms'> play now</button>
 </div>
 </div>
  )
}

export default Startgame