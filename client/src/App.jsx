import React, { useCallback, useEffect, useState} from 'react';
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard';
import BossArena from '../Components/BossArena';
import TaskList from '../Components/TaskList';
import Timer from '../Components/Timer';
import Footer from '../Components/Footer';
import Avtar from './data/AvtarSelect';

const App = () => {
  const [name,setName] = useState(
      localStorage.getItem('name') || 'your name'
  );
  
  const [xp,setXp] = useState(
    Number(localStorage.getItem('xp')) || 0
  );
  
  const [bosshp,setBosshp] = useState(
    Number(localStorage.getItem('bosshp')) || 1000
  );
  
  const [level, setLevel] = useState(
    Number(localStorage.getItem('level')) || 1
  );

  const [isHit, setIsHit] = useState(false)

  const Conqurer = useCallback(() => {

    setBosshp((prev) => Math.max(prev - 50,0));

        setIsHit(true);

    setTimeout(() => {
      setIsHit(false)
    }, 400);

    setXp((prevXp) => {
     const updateXP  = prevXp + 120;
    
     if (updateXP >= 100) {
       setLevel((prev) => prev + 1 );
       return updateXP - 100;
     }
     
    return updateXP;
    }
  );

},[])

  useEffect(() => {
    localStorage.setItem('name',name);
    localStorage.setItem('xp',xp);
    localStorage.setItem('bosshp',bosshp);
    localStorage.setItem('level', level);
  }, [name, xp, bosshp, level ])

  return (
    <>
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    >
    <Navbar />
    </motion.div>

    <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-6 bg-[#10152a] bg-[url('/Dragonbg.jpg')] bg-cover bg-center text-white min-h-screen"
     style={{ fontFamily: 'Orbitron, sans-serif' }}>
    <div className='h-1/2'>

    <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 1.0 }}
    >
    <ProfileCard 
      name={name}
      xp={xp}
      level={level}
      setName={setName}
    />
    </motion.div>
    </div>

    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 0.5, duration: 2}}
    >
    <div className='flex flex-col gap-2 w-full'>    
    <BossArena  
        bosshp={bosshp}
        Conqurer={Conqurer}
        isHit={isHit}
        />
    <Timer onComplete={Conqurer}/>
    </div>
    </motion.div>
    <motion.div 
    initial={{ opacity: 0 ,y: -100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 1, duration: 1.2}}
    >
    <div className='flex justify-center '>
      <TaskList />
    </div>    
    </motion.div>
    </div>
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: 1.2, duration: 1}}
    >
      <Footer />
    </motion.div>
    </>
  )
}

export default App