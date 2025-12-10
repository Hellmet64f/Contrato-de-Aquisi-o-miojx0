import React, { useState } from 'react';
import { ContractDocument } from './components/ContractDocument';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

const App: React.FC = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed bg-no-repeat relative">
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
        
        {/* Header Branding */}
        <div className="mb-8 text-center text-stone-300">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="w-6 h-6 text-yellow-500" />
            <span className="font-display tracking-widest text-sm uppercase">Secure Asset Transfer Protocol</span>
          </div>
          <p className="text-xs font-mono opacity-50">ID: TX-9928-MX-RU-1B</p>
        </div>

        {/* Main Contract Area */}
        <ContractDocument onSign={() => setSigned(true)} isSigned={signed} />

        {/* Footer Actions */}
        <div className="mt-12 flex gap-6 text-stone-400 text-sm font-mono">
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <Lock className="w-4 h-4" />
            <span>Encriptado SHA-256</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <Eye className="w-4 h-4" />
            <span>Verificação Pública</span>
          </div>
        </div>
        
        <div className="mt-8 text-stone-600 text-xs text-center max-w-md">
          Este é um documento satírico gerado para fins de entretenimento. 
          Todas as partes mencionadas são fictícias ou representações de personas online.
        </div>
      </div>
    </div>
  );
};

export default App;