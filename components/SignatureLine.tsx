import React from 'react';

interface SignatureLineProps {
  label: string;
  value?: string;
  placeholder?: string;
  isFancy?: boolean;
  color?: string;
  date: string;
}

export const SignatureLine: React.FC<SignatureLineProps> = ({ 
  label, 
  value, 
  placeholder,
  isFancy = false, 
  color = "text-ink",
  date
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-16 flex items-end justify-center w-full relative">
        {value ? (
          <span className={`${isFancy ? 'font-script text-4xl' : 'font-display text-2xl'} ${color} transform -rotate-2 absolute bottom-2`}>
            {value}
          </span>
        ) : (
           <span className="font-script text-3xl text-stone-300 absolute bottom-2 opacity-50 select-none">
             {placeholder || 'Assinar aqui'}
           </span>
        )}
      </div>
      <div className="w-full h-px bg-stone-800 mb-2 relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] text-stone-400 bg-paper px-1">
          x
        </div>
      </div>
      <span className="font-display font-bold text-xs uppercase tracking-widest text-stone-600 mb-1">
        {label}
      </span>
      <span className="font-mono text-[10px] text-stone-400">
        Data: {date}
      </span>
    </div>
  );
};