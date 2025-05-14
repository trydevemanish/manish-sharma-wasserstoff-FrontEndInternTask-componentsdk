import React from 'react'
import Avatar from '@/public/avatar.jpg'
import Image from 'next/image'

type datatype = {
  fullname : string,
  email : string,
}

export default function Coupon({fullname,email}:datatype) {
  function customdata(date=new Date()){

    const week = date.toLocaleDateString('en-US', { weekday: 'short' }); 
    const day = date.getDate(); // e.g. 3
    const year = date.getFullYear(); // e.g. 2025
    const monthName = date.toLocaleDateString('en-US', { month: 'long' }); 

    return `${week}, ${day} ${year} | ${monthName}`

  }

  return (
    <div className="flex flex-row items-stretch w-fit rounded-sm overflow-hidden text-white bg-gradient-to-r from-[#2a1042] to-[#56446a]">
      {/* Left: Main Ticket Content */}
      <div className="flex flex-col items-start justify-between p-4 gap-6">
        <div>
          <p className="text-lg font-semibold">Coding Conf</p>
          <p className="text-xs opacity-80 tracking-widest">{customdata()}</p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={Avatar} alt="avatar" className="rounded-lg w-12 h-12 object-cover" />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold">{fullname ? fullname : 'Jonathon Kristof'}</p>
            <p className="text-xs opacity-80 tracking-widest">{email ? email : 'sample@gmail.com'}</p>
          </div>
        </div>
      </div>

      <div className="relative w-[1px] bg-transparent">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-white h-full"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#000] rounded-full"></div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#000] rounded-full"></div>
      </div>

      <div className="flex items-center justify-center px-4 bg-[#56446a] text-white">
        <p className="-rotate-90 tracking-wider text-sm">Coupon</p>
      </div>
    </div>
  )
}