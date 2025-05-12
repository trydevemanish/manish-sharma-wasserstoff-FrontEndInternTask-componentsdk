import Background from '@/components/Background'
import Coupon from '@/components/Coupon'
import Heading from '@/components/Heading'
import React from 'react'

export default function page() {
  return (
    <Background className='flex flex-col min-h-screen items-center justify-center'>
        <p className="text-base font-medium font-sans">Coding Casf</p>
        <Heading name='Narendra Das Modi' />
        <p className="pt-5 opacity-80 text-xs flex flex-col items-center tracking-widest">
            <span>We have emailed your ticket to</span>
            <span><span className='text-amber-600 px-2'>msh17679@gmail.com</span> and will keep update in</span>
            <span>the run up to the event.</span>
        </p>
        <div className='mt-7'>
            <Coupon />
        </div>
    </Background>
  )
}
