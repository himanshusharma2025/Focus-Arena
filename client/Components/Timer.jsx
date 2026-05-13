import React, { useEffect, useState } from 'react'

const Timer = ({ onComplete }) => {
  
  const [count, setcount] = useState(25 * 60);
  
  const [isRunning, setIsRunning] = useState(false);
  
  const formattime = (seconds) => {
    
    const min = Math.floor(seconds / 60);
    
    const sec = seconds % 60;

    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  useEffect(() => {
    
    let interval;

    if(isRunning && count > 0) {

      interval = setInterval(() => {

        setcount((prev) => prev - 1) 
            
      }, 1000);
    } 
    
    return () => {
      clearInterval(interval);
    }
  }, [isRunning, count]);

  useEffect(() => {

    if (count === 0) {

      setIsRunning(false);

      onComplete();
    }
  }, [count, onComplete]);
  
  return (
    <div className='border-1 border-white rounded-2xl h-35 backdrop-blur-sm'>
      
      <div className='flex items-center justify-center gap-30'>
      <img src="/logocode.png" alt="" className='w-10 h-10'/>
      <h1 className='flex p-4 justify-center text-3xl font-extrabold'>{formattime(count)}</h1>
      <img src="/Spotify.jpg" alt="" className='rounded-full w-10 h-10 object-cover'/>
      </div>
      
      <div className='flex justify-center text-2xl mb-2 rounded-full'>One session 🔹 25 mint</div>

      <div className='flex justify-around gap-6'>
      <button onClick={() => {setIsRunning(true)}} className='rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 w-25'>
        start
      </button>
      
      <button onClick={() => {setIsRunning(false)}} className='rounded-2xl bg-gradient-to-r from-blue-500 to-purple-700 w-25'>
        Pause
      </button>
      
      <button onClick={() => {setcount(25 * 60), setIsRunning(false)}} className='rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 w-25'>
        reset
      </button>
      </div>
    </div>
  )
}

export default Timer