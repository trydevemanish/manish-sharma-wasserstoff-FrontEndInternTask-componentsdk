"use client"
import Background from "@/components/Background";
import Heading from "@/components/Heading";
import Inputfield from "@/components/Inputfield";
import Uploadimage from "@/components/Uploadimage";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  
  return (
   <Background className="flex flex-col items-center justify-center min-h-screen">
    <p className="text-base font-medium font-sans">Coding Casf</p>
    <Heading />
    <p className="pt-3 opacity-80 text-xs">Secure your seat at next {"year's"} biggest coding conference</p>
    <div className="flex flex-col items-center gap-2 pt-5">
      <Uploadimage />
      <div className="flex flex-col items-center pt-2 gap-2">
        <Inputfield inputFieldName="Full Name" />
        <Inputfield inputFieldName="Email" />
        <Inputfield inputFieldName="Password" />
      </div>
    </div>
    <button className="w-80 bg-amber-600 rounded-lg mt-4 py-2 cursor-pointer hover:bg-amber-500 transition-all transform" onClick={() => router.push('/generatedtoken')}>
        <p className="text-sm text-black font-semibold">Generate my token</p>
    </button> 
   </Background>
  );         
}
