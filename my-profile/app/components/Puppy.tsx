import React from "react";

const Puppy: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Ears */}
      <div className="absolute top-10 left-4 w-12 h-20 bg-amber-400 rounded-full rotate-[-20deg]"></div>
      <div className="absolute top-10 right-4 w-12 h-20 bg-amber-400 rounded-full rotate-[20deg]"></div>

      {/* Tail */}
      <div className="absolute bottom-16 right-4 w-8 h-12 bg-amber-300 rounded-full rotate-[45deg] origin-bottom animate-bounce"></div>

      {/* Body */}
      <div className="absolute bottom-8 w-32 h-40 bg-amber-200 rounded-t-[80px] rounded-b-[40px] shadow-sm"></div>

      {/* Head */}
      <div className="absolute top-12 w-36 h-36 bg-amber-100 rounded-full border-4 border-amber-200 flex flex-col items-center justify-center">
        {/* Forehead markings */}
        <div className="absolute top-0 w-8 h-12 bg-white/50 rounded-b-full"></div>

        <div className="flex gap-10 mt-2">
          {/* Eyes */}
          <div className="w-4 h-4 bg-zinc-800 rounded-full relative overflow-hidden">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <div className="w-4 h-4 bg-zinc-800 rounded-full relative overflow-hidden">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Muzzle */}
        <div className="mt-4 w-16 h-12 bg-white rounded-full flex flex-col items-center pt-1 border border-amber-100">
          {/* Nose */}
          <div className="w-5 h-3 bg-zinc-950 rounded-full mb-1 shadow-inner"></div>
          {/* Mouth */}
          <div className="flex -mt-1">
            <div className="w-4 h-3 border-b-2 border-l-2 border-zinc-400 rounded-bl-full rotate-[-45deg]"></div>
            <div className="w-4 h-3 border-b-2 border-r-2 border-zinc-400 rounded-br-full rotate-[45deg]"></div>
          </div>
          {/* Tongue (optional/cute) */}
          <div className="w-4 h-3 bg-red-400 rounded-b-full mt-0.5 animate-pulse"></div>
        </div>

        {/* Blush */}
        <div className="absolute top-20 left-4 w-4 h-2 bg-red-200/50 rounded-full blur-[2px]"></div>
        <div className="absolute top-20 right-4 w-4 h-2 bg-red-200/50 rounded-full blur-[2px]"></div>
      </div>

      {/* Paws */}
      <div className="absolute bottom-6 left-12 w-10 h-10 bg-amber-100 rounded-full border-2 border-amber-200 shadow-sm"></div>
      <div className="absolute bottom-6 right-12 w-10 h-10 bg-amber-100 rounded-full border-2 border-amber-200 shadow-sm"></div>
    </div>
  );
};

export default Puppy;
