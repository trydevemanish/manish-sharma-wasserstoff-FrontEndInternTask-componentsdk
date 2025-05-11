import React from 'react'

export default function Uploadimage() {
  return (
    <div className='flex flex-col gap-1'>
        <p className='text-xs text-white font-semibold opacity-80'>Upload Image</p>
        <div className='w-80 h-20 rounded-lg bg-gradient-to-r from-[#2a1042] to-[#1a1321] p-2 border-[1px] border-dashed border-purple-500 hover:bg-opacity-80 transition '>
            <div className='flex flex-col items-center '>
                <p>logo here</p>
                <p className='text-white text-[10px] opacity-75'>Drop Your Image here.</p>
            </div>
        </div>
    </div>
  )
}
