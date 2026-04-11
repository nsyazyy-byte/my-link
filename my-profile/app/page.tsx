import Image from "next/image";
import Puppy from "./components/Puppy";

export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 flex items-center justify-center font-sans overflow-hidden">
      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">
        
        {/* Left Column: Avatar & Main Title */}
        <div className="flex flex-col gap-8 w-full justify-center order-1 lg:order-none">
          <div className="text-center lg:text-left mt-4 lg:mt-0 relative">
            <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tighter text-black dark:text-white uppercase drop-shadow-[8px_8px_0px_#FF90E8] dark:drop-shadow-[8px_8px_0px_#9333ea] z-10 relative">
              nsy
            </h1>
            <p className="mt-8 text-xl md:text-3xl font-bold max-w-2xl mx-auto lg:mx-0 border-l-[12px] border-black dark:border-white pl-6 py-2 text-black dark:text-white bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              Creative Developer. <br/> Building raw, fearless digital experiences.
            </p>
          </div>
          
          {/* Mobile/Tablet Puppy goes below title, Desktop Puppy is on the right */}
          <div className="lg:hidden relative group/card w-full max-w-[300px] mx-auto mt-8">
            <div className="relative w-full aspect-square bg-[#FF90E8] border-[8px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-center w-full h-full scale-[1.3] translate-y-8">
                <Puppy />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-12 bg-yellow-400 border-[6px] border-black rotate-[12deg] z-20 flex items-center justify-center font-black text-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              HELLO
            </div>
          </div>
        </div>

        {/* Right Column: Desktop Avatar, Details, Skills, Actions */}
        <div className="flex flex-col justify-center gap-10 lg:gap-14 w-full order-2 lg:order-none">
          
          {/* Desktop Avatar Frame (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block relative group/card w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="relative w-full aspect-square bg-[#FF90E8] border-[10px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:-translate-x-3 hover:shadow-[32px_32px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-center w-full h-full scale-[1.4] translate-y-12">
                <Puppy />
              </div>
            </div>
            <div className="absolute -top-8 -left-10 w-40 h-16 bg-yellow-400 border-[8px] border-black rotate-[-15deg] z-20 flex items-center justify-center font-black text-black text-2xl uppercase shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              Aloha!
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="w-full bg-[#B2F5EA] border-[8px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.9)] p-8 md:p-10 relative">
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase text-black">Tech Stack</h2>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              {[
                { name: "React 19", color: "bg-[#FF90E8]" },
                { name: "Next.js 16", color: "bg-white" },
                { name: "Tailwind 4", color: "bg-[#FFD700]" },
                { name: "TypeScript", color: "bg-blue-300" }
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className={`px-5 py-3 ${skill.color} text-black font-black border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider text-base md:text-xl transition-all hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-pointer`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center lg:justify-start w-full">
            <a
              href="#"
              className="flex-1 lg:flex-none px-8 py-6 bg-[#FFD700] text-black font-black text-2xl uppercase border-[8px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] active:translate-y-4 active:translate-x-4 active:shadow-none flex items-center justify-center gap-3 group"
            >
              Projects
              <svg className="w-8 h-8 transition-transform group-hover:translate-x-3 group-hover:-translate-y-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <a
              href="#"
              className="flex-1 lg:flex-none px-8 py-6 bg-white dark:bg-black text-black dark:text-white font-black text-2xl border-[8px] border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.9)] transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.9)] active:translate-y-4 active:translate-x-4 active:shadow-none flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
