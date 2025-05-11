import Background from "@/components/Background";
import Heading from "@/components/Heading";
import Uploadimage from "@/components/Uploadimage";

export default function Home() {
  return (
   <Background className="py-6">
    <p className="text-base font-medium font-sans">Coding Casf</p>
    <Heading />
    <p className="pt-4 opacity-80 text-sm">Secure your seat at next {"year's"} biggest coding conference</p>
    <div className="flex flex-col items-center gap-2 pt-5">
      <Uploadimage />
    </div>
   </Background>
  );         
}
