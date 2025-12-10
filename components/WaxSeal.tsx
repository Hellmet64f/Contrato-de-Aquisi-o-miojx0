import React from 'react';

export const WaxSeal: React.FC = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* The Wax Body */}
      <div className="absolute inset-0 bg-red-800 rounded-full shadow-[inset_0_-4px_6px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.4)] flex items-center justify-center transform scale-100 group-hover:scale-105 transition-transform duration-300">
        {/* Irregular border effect using pseudo-elements would be complex, simplifying with SVG */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-900 fill-current opacity-80 drop-shadow-md">
           <circle cx="50" cy="50" r="45" />
           {/* Drips/Irregularities */}
           <path d="M50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C75,95 95,75 95,50 C95,25 75,5 50,5 Z M50,0 C80,0 100,20 100,50 C100,80 80,100 50,100 C20,100 0,80 0,50 C0,20 20,0 50,0 Z" fill="rgba(100, 0, 0, 0.3)" />
        </svg>
        
        {/* Inner Ring */}
        <div className="w-24 h-24 rounded-full border-2 border-red-900/50 flex items-center justify-center bg-red-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
           <div className="text-red-950 font-display font-bold text-3xl opacity-60 tracking-tighter text-center leading-none transform -rotate-12">
             OFFICIAL<br/>SEAL
           </div>
        </div>
      </div>
      
      {/* Gloss/Highlight */}
      <div className="absolute top-4 right-8 w-8 h-4 bg-white opacity-20 rounded-full blur-sm transform -rotate-45"></div>
    </div>
  );
};