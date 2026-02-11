
import React, { useState, useEffect } from 'react';
import { PatternData, DesignPatternType } from '../types';
import { getDesignCritique } from '../services/geminiService';

interface PatternDetailProps {
  pattern: PatternData;
  onBack: () => void;
}

const PatternDetail: React.FC<PatternDetailProps> = ({ pattern, onBack }) => {
  const [critique, setCritique] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCritique = async () => {
      setLoading(true);
      const text = await getDesignCritique(pattern.name, pattern.concept);
      setCritique(text || "");
      setLoading(false);
    };
    fetchCritique();
  }, [pattern]);

  return (
    <div className="animate-reveal px-8 md:px-12 py-32 bg-white text-black min-h-screen">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="mb-20 flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.5em] group"
      >
        <span className="w-12 h-px bg-black group-hover:w-20 transition-all"></span>
        <span>Back to Archive</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Header Section */}
        <div className="lg:col-span-8">
           <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-4 block">Archetype Detail</span>
           <h1 className={`text-[10vw] font-bold tracking-tighter leading-none mb-12 ${pattern.id === DesignPatternType.MINIMALIST_EDITORIAL ? 'font-serif italic' : ''}`}>
             {pattern.name}.
           </h1>
           <p className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-slate-800 max-w-4xl">
             「{pattern.tagline}」
           </p>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-4 lg:pt-32">
           <div className="border-t-4 border-black pt-8 space-y-12">
              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-6">Philosophy</h3>
                <p className="text-slate-500 leading-relaxed italic">{pattern.concept}</p>
              </section>

              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-[10px] font-bold tracking-widest uppercase">
                  <div className="p-4 bg-slate-50 border border-slate-200">Font: {pattern.fonts[0]}</div>
                  <div className="p-4 bg-slate-50 border border-slate-200">Scale: Optical</div>
                  <div className="p-4 bg-slate-50 border border-slate-200">Grid: 12-Col</div>
                  <div className="p-4 bg-slate-50 border border-slate-200">Motion: 800ms</div>
                </div>
              </div>
           </div>
        </div>

        {/* Visual Preview Section */}
        <div className="lg:col-span-12">
           <div className={`aspect-[21/9] w-full relative overflow-hidden bg-black flex items-center justify-center group shadow-2xl`}>
              <img 
                src={`https://images.unsplash.com/photo-${
                  pattern.id === DesignPatternType.MINIMALIST_EDITORIAL ? '1494438639946-1ebd1d20bf85' : 
                  pattern.id === DesignPatternType.SOFT_ORGANIC ? '1618005182384-a83a8bd57fbe' : 
                  '1508921234172-b68ed335b3e6'
                }?auto=format&fit=crop&q=80&w=2000`} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="relative z-10 text-center text-white space-y-4">
                 <div className="text-[12vw] font-black tracking-tighter leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                   PREVIEW
                 </div>
                 <div className="text-xs font-bold tracking-[1em] uppercase">Conceptual Prototype</div>
              </div>
              
              {/* Dynamic Overlays */}
              {pattern.id === DesignPatternType.STRUCTURED_SWISS && (
                <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
                  {Array.from({length: 12}).map((_, i) => (
                    <div key={i} className="border-r border-white/5 h-full"></div>
                  ))}
                </div>
              )}
           </div>
        </div>

        {/* AI Analysis Section - Monolith Card */}
        <div className="lg:col-span-6 lg:col-start-4 py-24">
           <div className="bg-black text-white p-16 md:p-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <span className="text-[200px] font-black leading-none">?</span>
             </div>
             <div className="relative z-10 space-y-8">
               <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-500">AI Design Analysis</h3>
               {loading ? (
                 <div className="h-40 flex items-center space-x-2">
                   <div className="w-1 h-1 bg-white animate-ping"></div>
                   <div className="w-1 h-1 bg-white animate-ping [animation-delay:0.2s]"></div>
                   <div className="w-1 h-1 bg-white animate-ping [animation-delay:0.4s]"></div>
                 </div>
               ) : (
                 <p className="text-2xl md:text-3xl font-light leading-snug italic text-slate-300">
                   "{critique}"
                 </p>
               )}
               <div className="flex items-center space-x-4 pt-8">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                 </div>
                 <span className="text-[10px] font-bold tracking-widest uppercase">Verified Logic</span>
               </div>
             </div>
           </div>
        </div>

        {/* Bottom Specs */}
        <div className="lg:col-span-12 border-t border-black/10 pt-24 pb-40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
             {pattern.elements.map((el, i) => (
               <div key={i} className="space-y-4">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Element 0{i+1}</span>
                 <h4 className="text-2xl font-bold tracking-tight">{el.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">{el.description}</p>
                 <div className="text-[10px] font-black uppercase bg-black text-white inline-block px-3 py-1 tracking-tighter">
                   {el.impact}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default PatternDetail;
