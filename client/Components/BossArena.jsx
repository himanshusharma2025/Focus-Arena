import React, { useState } from 'react'

const BossArena = ({ bosshp, isHit }) => {
  const maxhp = 1000;

  return (
    <div className={`w-full border 
      rounded-2xl 
      border-1 border-white 
      backdrop-blur-md 
      drop-shadow-2xl
      ${isHit ? 'animate-hit bg-red-500/20' : ''}`}>
      
      <h1 className='flex items-center justify-center font-extrabold'>🔹💠Shadow Dragon💠🔹</h1>
      
      <div className='p-2 flex items-center justify-center font-bold'>BossArena</div>
      
      <img src="Dragon.jpg" alt="" className='w-full shadow-lg'/>
      
      <div className='flex justify-center'>{bosshp} \ 1000</div>
      
      <div className='w-120 h-2
        rounded-3xl flex 
        justify-self-center 
        bg-gradient-to-r 
        transition-all
        duration-500
        from-red-500 
        to-red-700'
        style={{ width: `${(bosshp / maxhp) * 100}% `}}>
        </div>
      
      </div>
  )
} 

export default BossArena