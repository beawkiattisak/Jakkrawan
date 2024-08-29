import Image from "next/image";
import { Kanit } from "next/font/google";
import Navbar from "@/components/Navbar";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white`}>
      
      <Navbar />

      <div className="justify-center content-center flex font-bold text-lg md:text-4xl pt-16">
        <p>"เลือกพรรคจักรวาล โรงเรียนไม่เหมือนเดิม"</p>
      </div>
      <div className="justify-center content-center flex font-bold text-2xl md:text-4xl pt-6 md:pt-12">
        <span>นโยบาย <span className="text-[#007AFF]">เปลี่ยนโรงเรียน</span></span>
      </div>
    </main>
  );
}
