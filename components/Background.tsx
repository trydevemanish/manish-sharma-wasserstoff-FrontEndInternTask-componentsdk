import React from 'react'

type props = {
    children : React.ReactNode
}

export default function Background({children}:props) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black  to-[#3a0f6c] overflow-hidden">
      <div className="absolute left-[-10%] top-1/4 w-[300px] h-[300px] rounded-full border-[20px] border-pink-500 opacity-20 rotate-45"></div>
      <div className="absolute right-[-10%] bottom-0 w-[300px] h-[300px] rounded-full border-[20px] border-purple-500 opacity-20 rotate-12"></div>

      <div className="relative z-10 text-white">
        {children}
      </div>
    </div>
  )
}
