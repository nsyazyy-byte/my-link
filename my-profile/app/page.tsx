import Image from "next/image";
import Puppy from "./components/Puppy";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-950 dark:via-purple-900 dark:to-pink-900 bg-[length:200%_200%] animate-[gradient-x_15s_ease_infinite] p-6 lg:p-12 font-sans relative">
      
      {/* Decorative background blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <main className="relative z-10 flex flex-col items-center w-full max-w-4xl p-8 sm:p-12 bg-white/20 dark:bg-black/30 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 group/card">
        
        {/* Soft Inner Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="w-full flex flex-col md:flex-row items-center gap-12 sm:gap-16">
          
          {/* Avatar Section: Using the existing Puppy component */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Soft breathing glow behind avatar */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-30 group-hover/card:opacity-60 transition duration-1000 ease-in-out"></div>
            
            <div className="relative flex items-center justify-center w-56 h-56 lg:w-64 lg:h-64 bg-white/40 dark:bg-zinc-800/50 rounded-full overflow-hidden shadow-inner backdrop-blur-md border-2 border-white/60 dark:border-zinc-700/50 group-hover/card:scale-[1.02] transition-transform duration-500">
              <div className="scale-[0.8] lg:scale-[0.9] translate-y-3 drop-shadow-md">
                <Puppy />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className="inline-block px-5 py-1.5 mb-5 text-xs sm:text-sm font-bold tracking-widest text-[#5e224e] bg-white/40 dark:text-pink-200 dark:bg-black/20 rounded-full ring-1 ring-white/50 dark:ring-white/10 shadow-sm backdrop-blur-md uppercase">
              Profile
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200 dark:from-white dark:to-zinc-400 mb-4 pb-1">
              Hello, I'm <br className="hidden md:block"/> a Creator.
            </h1>
            
            <p className="max-w-md text-base sm:text-lg text-white/90 dark:text-zinc-300 font-medium leading-relaxed mb-8 drop-shadow-sm">
              Welcome to my space. I craft beautiful, dynamic, and modern digital experiences that people love to use and watch.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5 w-full">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-[#1e1b4b] transition-all duration-300 bg-white/90 rounded-2xl hover:bg-white hover:scale-105 hover:shadow-xl hover:shadow-black/10 focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                View Projects
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              
              <a
                href="#"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 bg-black/20 border border-white/30 rounded-2xl hover:bg-black/30 hover:scale-105 hover:shadow-lg backdrop-blur-md"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-10 pt-6 border-t border-white/30 dark:border-white/10 w-full">
              <p className="text-sm font-bold tracking-wider text-white/80 dark:text-white/50 uppercase mb-4 pl-1">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {["React 19", "Next.js 16", "TailwindCSS 4", "TypeScript"].map((skill) => (
                  <span key={skill} className="px-4 py-2 text-sm font-bold text-indigo-950 dark:text-indigo-100 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/50 dark:border-white/5 hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-white/20 transition-all cursor-default flex items-center justify-center">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
