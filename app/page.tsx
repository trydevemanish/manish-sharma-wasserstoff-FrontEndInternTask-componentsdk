"use client"
import Background from "@/components/Background";
import Heading from "@/components/Heading";
import Inputfield from "@/components/Inputfield";
import Uploadimage from "@/components/Uploadimage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useDataStore from '@/utils/usestore'

export default function Home() {
  const[fullname,setFullName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const router = useRouter()

  async function handleformsubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()

    const Passingdata = {
      fullname : fullname,
      email: email,
      password  : password
    }

    // Set outside React
    useDataStore.getState().setData(Passingdata);

    router.push('/generatedtoken')
  }
  
  return (
   <Background className="flex flex-col items-center justify-center min-h-screen">
    <p className="text-base font-medium font-sans">Coding Casf</p>
    <Heading />
    <p className="pt-3 opacity-80 text-xs">Secure your seat at next {"year's"} biggest coding conference</p>
    <form onSubmit={handleformsubmit}>
       <div className="flex flex-col items-center gap-2 pt-5">
        <Uploadimage />
        <div className="flex flex-col items-center pt-2 gap-2">
          <Inputfield inputFieldName="Full Name" value={fullname} onChange={setFullName} />
          <Inputfield inputFieldName="Email" value={email} onChange={setEmail}/>
          <Inputfield inputFieldName="Password" value={password} onChange={setPassword} />
        </div>
      </div>
      <button type="submit" className="w-80 bg-amber-600 rounded-lg mt-4 py-2 cursor-pointer hover:bg-amber-500 transition-all transform">
          <p className="text-sm text-black font-semibold">Generate my token</p>
      </button>
    </form> 
   </Background>
  );         
}
