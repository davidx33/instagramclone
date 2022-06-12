import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between
    mt-14 ml-10'>
        <img src = "JeremyLin.png" alt = "" 
        className='rounded-full w-16 h-16
        border p-[2px]'/>
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>
                davidxu33
            </h2>
            <h3 className='text-sm text-gray-400'>
                Welcome to Instagram
            </h3>
        </div>
        <button 
        className='text-blue-400 text-sm font-semibold'>
            Sign Out
        </button>
    </div>

  );
}

export default MiniProfile 