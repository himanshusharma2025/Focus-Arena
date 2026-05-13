import React from 'react';
import logo from '../src/assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-20 
        text-2xl 
        flex items-center justify-between
        bg-gradient-to-b from-purple-950 to-gray-900
        background-blur-md
        gap-8'
        style={{ fontFamily: "'Audiowide', sans-serif" }}>
        
        <div className='flex 
          items-center
          text-white
          font-bold
          p-12
          gap-2'>
          
        <img src={logo} alt="logo" className='w-12 h-12 object-contain drop-shadow-[0_0_10px_#7C3AED]'/>
          Focus {' '}
        <span className='
          font-extrabold text-purple-600 drop-shadow-[0_0_15px_#7C3AED]'>
          Arena</span>
        </div>

        <div className='hidden md:flex gap-8 p-10'>
        <div className='flex
          text-2xl font-bold bg-gradient-to-r
        from-purple-300
        to-purple-500
          bg-clip-text
          text-transparent'>Hackclub</div>
        <button className='bg-gradient-to-b
          from-purple-500
          to-purple-900
          text-white
          rounded-lg 
          w-20 
          h-10 
          hover:scale-105 
          shadow:[0_0_15px_#7C3AED]'>
          <a href="https://hackclub.com/" className='items-center'>Join</a></button>
        </div>
        
        
    </div>
  )
}

export default Navbar