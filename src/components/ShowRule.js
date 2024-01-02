import { AiOutlineClose } from 'react-icons/ai';

const ShowRule = ({isRuleShown,setIsRuleShown}) => {
  

  return (
    <>
      {isRuleShown && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[40%] bg-yellow-300 backdrop-blur-3xl rounded-md">
            <ul className="p-6 leading-8">
              <AiOutlineClose onClick={() => setIsRuleShown(false)} className='text-2xl' />
              <li><h1 className="">1. zncjsnfckscmlsz,clzvvvvvvvvvvvvvvvvvvmfosdjofjml,vxl,gvfofsx dvmxkmv,x vxkvmxvmxv</h1></li>
            </ul>
          </div>
          <div className="absolute h-screen w-screen top-0 z-40 backdrop-blur cursor-pointer" />
        </>
      )}
    </>
  );
};

export default ShowRule;
