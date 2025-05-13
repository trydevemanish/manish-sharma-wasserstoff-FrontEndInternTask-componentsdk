"use client"
import React, { useState,useEffect, Dispatch, SetStateAction } from 'react'

type props = {
  inputFieldName : string,
  value : string,
  onChange : Dispatch<SetStateAction<string>>
}

export default function Inputfield({inputFieldName,value,onChange}:props) {
  return (
    <div className='flex flex-col gap-1'>
        <p className='text-xs text-white font-semibold opacity-80'>{inputFieldName}</p>
        <div className='w-80 rounded-lg bg-gradient-to-r from-[#2a1042] to-[#1a1321] p-2 border-[1px] border-dashed border-purple-500 hover:bg-opacity-80 transition '>
            {
              inputFieldName == 'Full Name' ?
              <input type='text' value={value} onChange={(e) => onChange(e.target.value)} className='w-76 focus:outline-none text-xs opacity-80'/> : 
              inputFieldName == 'Email' ? 
              <input type='email' value={value} onChange={(e) => onChange(e.target.value)} placeholder='Enter Email' className='w-76 focus:outline-none text-xs opacity-80'/> :
              <input type='password' value={value} onChange={(e) => onChange(e.target.value)} placeholder='Enter password' className='w-76 focus:outline-none text-xs opacity-80'/>
            }
        </div>
    </div>
  )
}
