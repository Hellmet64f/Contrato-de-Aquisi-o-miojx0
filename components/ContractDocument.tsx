import React from 'react';
import { Stamp, Fingerprint, Download, Share2 } from 'lucide-react';
import { WaxSeal } from './WaxSeal';
import { SignatureLine } from './SignatureLine';

interface ContractDocumentProps {
  onSign: () => void;
  isSigned: boolean;
}

export const ContractDocument: React.FC<ContractDocumentProps> = ({ onSign, isSigned }) => {
  const currentDate = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="w-full max-w-3xl bg-paper shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 ease-out hover:scale-[1.005] relative overflow-hidden">
      
      {/* Paper Texture Noise Overlay (Simulated via CSS) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      {/* Decorative Border */}
      <div className="absolute inset-4 border-2 border-stone-800/20 pointer-events-none">
        <div className="absolute inset-1 border border-stone-800/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative p-12 md:p-16 flex flex-col h-full min-h-[900px]">
        
        {/* Header */}
        <header className="text-center mb-12 border-b-2 border-stone-800/10 pb-8">
          <div className="w-24 h-24 mx-auto mb-4 opacity-80">
             {/* Emblem SVG */}
             <svg viewBox="0 0 100 100" className="w-full h-full text-stone-800 fill-current">
                <path d="M50 20 L20 80 L80 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="55" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M35 55 L65 55 M50 40 L50 70" stroke="currentColor" strokeWidth="1" />
             </svg>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight mb-2 uppercase">
            Escritura de Venda
          </h1>
          <h2 className="font-serif italic text-stone-500 text-lg">
            Transferência Perpétua de Propriedade
          </h2>
        </header>

        {/* Body Text */}
        <main className="flex-grow font-serif text-ink leading-relaxed space-y-6 text-justify">
          
          <p className="indent-8">
            <span className="font-bold text-xl drop-cap">P</span>elo presente instrumento particular, nesta data de <span className="font-bold border-b border-stone-300 px-2">{currentDate}</span>, certifica-se a transação irrevogável e solene entre as partes abaixo qualificadas.
          </p>

          <div className="bg-stone-100/50 p-6 border border-stone-200 my-8">
            <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline mb-2">
              <span className="font-display font-bold text-xs uppercase text-stone-500 tracking-wider">Objeto:</span>
              <span className="font-bold text-xl text-indigo-900">@miojx0</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline mb-2">
              <span className="font-display font-bold text-xs uppercase text-stone-500 tracking-wider">Descrição:</span>
              <span className="italic text-stone-700">Entidade digital, classe femboy, incluindo todos os direitos de imagem, personalidade e memes associados.</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline mb-2">
              <span className="font-display font-bold text-xs uppercase text-stone-500 tracking-wider">Comprador:</span>
              <span className="font-bold text-xl text-emerald-900">@russianxxyz</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
              <span className="font-display font-bold text-xs uppercase text-stone-500 tracking-wider">Valor:</span>
              <span className="font-mono text-xl font-bold text-red-800">1.000.000.000,00 (1B)</span>
            </div>
          </div>

          <h3 className="font-display font-bold text-center text-lg mt-8 mb-4 uppercase tracking-widest decoration-double underline decoration-stone-300">
            Termos e Condições
          </h3>

          <ol className="list-decimal list-outside ml-6 space-y-4 text-sm text-stone-700">
            <li>
              <strong>Da Transferência Total:</strong> O vendedor cede, transfere e transmite ao <span className="uppercase font-bold">Comprador</span> toda a posse, domínio, direito e ação que tinha sobre o <span className="uppercase font-bold">Objeto</span>.
            </li>
            <li>
              <strong>Da Irrevogabilidade:</strong> A presente venda é feita em caráter definitivo, irretratável e irrevogável, não cabendo arrependimento por nenhuma das partes.
            </li>
            <li>
              <strong>Do Pagamento:</strong> O valor de <strong>1 Bilhão</strong> foi liquidado integralmente nesta data, servindo este instrumento como a mais rasa e total quitação.
            </li>
            <li>
              <strong>Da Natureza do Objeto:</strong> O <span className="uppercase font-bold">Comprador</span> declara estar ciente das peculiaridades do <span className="uppercase font-bold">Objeto</span> (@miojx0), aceitando-o no estado de conservação (físico e mental) em que se encontra.
            </li>
          </ol>
        </main>

        {/* Signatures */}
        <footer className="mt-16 pt-8 relative">
           {/* Sold Stamp - Only appears if signed or by default if static */}
           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-90">
             <div className="border-8 border-stamp text-stamp px-8 py-2 font-display font-bold text-6xl uppercase tracking-widest rotate-[-15deg] opacity-20 mix-blend-multiply mask-image-grunge">
               VENDIDO
             </div>
           </div>

           <div className="grid grid-cols-2 gap-12 mt-12">
             <SignatureLine 
                label="O Vendedor" 
                placeholder="Assinatura Autorizada"
                date={currentDate}
             />
             <SignatureLine 
                label="O Comprador" 
                value="@russianxxyz"
                isFancy={true}
                color="text-emerald-800"
                date={currentDate}
             />
           </div>

           <div className="flex justify-center mt-12 items-end">
              <div className="relative group cursor-pointer" onClick={onSign}>
                 <WaxSeal />
                 {!isSigned && (
                   <div className="absolute -bottom-8 w-full text-center text-xs text-stone-400 font-mono animate-bounce">
                     Clique para autenticar
                   </div>
                 )}
                 {isSigned && (
                   <div className="absolute -right-24 bottom-4 rotate-[-10deg]">
                      <span className="font-script text-3xl text-indigo-800">Autenticado</span>
                   </div>
                 )}
              </div>
           </div>
        </footer>

        {/* Floating Action Buttons (Simulating UI overlay on document) */}
        <div className="absolute top-8 right-8 flex gap-2 print:hidden">
          <button className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors border border-stone-300 shadow-sm" title="Baixar PDF">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors border border-stone-300 shadow-sm" title="Compartilhar">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

      </div>
      
      {/* Bottom Barcode */}
      <div className="absolute bottom-4 left-0 right-0 text-center opacity-30">
        <div className="font-mono text-[10px] tracking-[0.5em]">||| || ||| || |||| ||| || |||||| ||</div>
      </div>
    </div>
  );
};