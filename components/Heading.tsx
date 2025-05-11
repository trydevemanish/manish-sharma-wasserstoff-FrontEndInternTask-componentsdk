import React from 'react'

type props = {
  name? : string
}

export default function Heading({name}:props) {
  return (
    <div className='flex flex-col items-center justify-center'>
      {
        !name ? 
        <p className='flex flex-col items-center text-[22px] tracking-wider leading-8 font-semibold font-sans pt-7'>
            <span>Your Journey to Coding Conf</span>
            <span>2025 Starts Here!</span>
        </p> : 
        <p className='flex flex-col items-center text-[22px] tracking-wider leading-8 font-semibold font-sans pt-7'>
            <span>Congrats, <span className='bg-gradient-to-r px-1 from-orange-400 via-orange-200 to-white text-transparent bg-clip-text '>{name ?? 'Manish Sharma!'}</span></span>
            <span>Your ticket is ready.</span>
        </p>
      }
    </div>
  )
}
