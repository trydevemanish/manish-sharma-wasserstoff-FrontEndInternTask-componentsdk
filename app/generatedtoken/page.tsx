"use client"
import Background from '@/components/Background'
import Coupon from '@/components/Coupon'
import Heading from '@/components/Heading'
import useDataStore from '@/utils/usestore'
import React from 'react'

export default function Page() {
  const data = useDataStore((state) => state.data);

  return (
    <Background className='flex flex-col min-h-screen items-center justify-center'>
        <p className="text-base font-medium font-sans">Coding Casf</p>
        <Heading name={data?.fullname ? data?.fullname : 'Manish Sharma'} />
        <p className="pt-5 opacity-80 text-xs flex flex-col items-center tracking-widest">
            <span>We have emailed your ticket to</span>
            <span><span className='text-amber-600 px-2'>{data?.email ? data?.email : 'sample@gmail.com'}</span> and will keep update in</span>
            <span>the run up to the event.</span>
        </p>
        <div className='mt-7'>
            <Coupon fullname={data?.fullname} email={data?.email} />
        </div>
    </Background>
  )
}
