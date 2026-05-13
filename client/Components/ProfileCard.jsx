import React, { useState } from 'react';
import Avtar from '../src/data/AvtarSelect';

const ProfileCard = ({ name, xp, level, setName, isHit }) => {
  const [selectedavtar, setSelectedavtar] = useState(Avtar[0]);

  return (
    <div>
      <div className='flex flex-col 
      md:h-full w-full justify-center 
      border rounded-2xl 
      backdrop-blur-md'>
      
      <div className='flex flex-row 
      items-center 
      justify-center 
      gap-6 
      p-2'>
      
      <img src={selectedavtar.image} 
      alt={selectedavtar.name}
      className="w-32 border-t-2 
      border-purple-600 
      rounded-full 
      object-cover 
      object-top "/>
      <div className='flex flex-col p-2 gap-4'>
      <h1 className='font-extrabold text-purple-600 text-2xl'>Shadow Coder</h1>
      <h1 className="font-bold flex justify-center"><input type='text' value={name} onChange={(e)=> setName(e.target.value)}/></h1>
      
      <h2 className='flex justify gap-6 animate-pulse'>Xp: {xp}</h2>
      <div className='h-2 rounded-full flex bg-gradient-to-r from-blue-400 to-blue-600 transition-all align-middle'
      style={{ width: `${xp % 100}%` }}></div>
      <div>      
      </div> 
      </div>
      </div>
      <h2 className='p-2'>Level: {level}</h2>
      <div className='flex items-center gap-2 p-2'>
        <div>⚔️</div>
        <h3 className='p-2 bg-gradient-to-b from-purple-950 to-purple-400 text-transparent bg-clip-text font-extrabold'>{selectedavtar.name}</h3>
      </div>

      <div className=' grid grid-cols-3 gap-2 w-full p-2 '>
        {Avtar.map((Avtar) => (
          <button key={Avtar.name} onClick={() => setSelectedavtar(Avtar)} className='flex flex-row'>{Avtar.name}</button>
        ))}
      </div>
      </div>

      <div className='hidden
        lg:block
        border-2 
        border-white 
        rounded-2xl 
        w-full p-6 
        mt-6 
        backdrop-blur-md'>          
        <img src="/CodeVibe.png" alt="" className='flex items-center justify-center rounded-2xl'/>
      </div>
    </div>
  )
}

export default ProfileCard