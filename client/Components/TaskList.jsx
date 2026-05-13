import React, { useEffect, useState } from 'react'

const TaskList = () => {
  const [tasks,setTasks] = useState(() => {
    try {
      const savedtasks = localStorage.getItem('tasks');
      return savedtasks ? JSON.parse(savedtasks) : [];
    } catch (error) {
      return []
    }
  });

  const [input,setInput] = useState('');

  const addtask = () => {
    if (!input.trim()) return;

    const newtask = {
    id: Date.now(),
    text: input.trim(),
    }

    setTasks([...tasks,newtask]);
    setInput('');
  };

  const deletetask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id ))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='border p-6 
      rounded-lg w-full 
      backdrop-blur-sm'>

        <div className='flex h-10 ml-4 text-2xl font-bold border-b mb-4'>📜Quests</div>
        <input
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className='border rounded-lg mr-2 p-3'/>
        
        <button onClick={addtask} className='bg-gradient-to-b from-red-400 to-red-900 border-1 border-white rounded-2xl'>Add Quest</button>
      
      <div className='p-3 rounded-2xl'>
        {tasks.map((t) => (
          
          <div key={t.id} className='flex flex-row gap-6 items-center'>
      
            <span className='text-amber-200'><input type="checkbox" className='text-blue'/>{t.text}</span>

          <button className='flex flex-row ' onClick={() => {deletetask(t.id)}}>
            
            <img src="/delete.png" alt="" className='w-10'/>          
          
          </button>
        
        </div>
        
        ))}
      
      </div>
    
    </div>
  )
}

export default TaskList