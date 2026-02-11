
import React, { useState, useEffect } from 'react';
import { DesignPatternType, PatternData } from './types';
import { PATTERNS } from './constants';
import PatternDetail from './components/PatternDetail';

const App: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<PatternData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectPattern = (pattern: PatternData) => {
    setSelectedPattern(pattern);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isLoaded) return <div className="fixed inset-0 bg-black z-[10000]"></div>;

  return (
    <div className={`min-h-screen transition-opacity duration-1000`}>
      {/* 2025 Global Header */}
      <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-8 md:px-12 z-50 mix-blend-difference text-white">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => setSelectedPattern(null)}
        >
          <span className="text-3xl font-black tracking-tighter uppercase italic">Monolith.</span>
        </div>
        <div className="hidden md:flex space-x-12 text-[10px] font-bold uppercase tracking-[0.4em]">
          <a href="#" className="hover:opacity-50 transition-opacity">Portfolio</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Philosophy</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Lab</a>
        </div>
        <div className="flex items-center space-x-8">
          <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">EST. 2025</span>
          <div className="w-8 h-px bg-white"></div>
        </div>
      </nav>

      {!selectedPattern ? (
        <main className="animate-reveal">
          {/* Hero Section - The Monolith */}
          <header className="h-screen flex flex-col justify-center px-8 md:px-24 bg-black text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block text-xs font-bold tracking-[0.5em] uppercase mb-8 opacity-60">Design for the next era</span>
              <h1 className="text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter mb-12">
                BEYOND<br />
                <span className="italic font-serif text-slate-400">PURE</span> BLACK.
              </h1>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <p className="max-w-xl text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                  トレンドを追うのではない。未来のスタンダードを定義する。<br />
                  白と黒の対話から生まれる、永遠の洗練。
                </p>
                <div className="flex space-x-4">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white transition-all duration-500 cursor-pointer">
                    <svg className="w-6 h-6 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Kinetic Text */}
            <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center overflow-hidden">
               <div className="whitespace-nowrap text-[30vw] font-black animate-infinite-scroll">
                 ARCHITECTURE ARCHITECTURE ARCHITECTURE
               </div>
            </div>
            <style>{`
              @keyframes infinite-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
              }
            `}</style>
          </header>

          {/* Patterns Showcase - Bento Grid 2.0 */}
          <section className="py-40 px-8 bg-white text-black">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-black/10 pb-8">
                <h2 className="text-5xl font-bold tracking-tighter uppercase">Archetypes</h2>
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400">Three forms of sophistication</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 01 OBSCURA */}
                <div 
                  className="lg:col-span-8 group cursor-pointer overflow-hidden bg-black text-white p-12 aspect-[16/9] relative flex flex-col justify-between"
                  onClick={() => handleSelectPattern(PATTERNS[0])}
                >
                  <div className="flex justify-between items-start z-10">
                    <span className="text-4xl font-serif italic">01.</span>
                    <span className="px-4 py-1 border border-white/20 rounded-full text-[10px] tracking-widest uppercase">Noir Editorial</span>
                  </div>
                  <div className="z-10">
                    <h3 className="text-7xl font-bold tracking-tighter mb-4">{PATTERNS[0].name}</h3>
                    <p className="text-slate-400 max-w-sm">{PATTERNS[0].tagline}</p>
                  </div>
                  <div className="absolute inset-0 opacity-40 grayscale group-hover:scale-110 transition-transform duration-1000">
                    <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 02 AXIS */}
                <div 
                  className="lg:col-span-4 group cursor-pointer border border-black p-12 flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-700"
                  onClick={() => handleSelectPattern(PATTERNS[1])}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-4xl font-bold">02.</span>
                    <div className="w-10 h-10 border border-current flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform">
                      <div className="w-1 h-1 bg-current"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold tracking-tighter mb-4">{PATTERNS[1].name}</h3>
                    <p className="text-sm uppercase tracking-widest opacity-60 font-bold">{PATTERNS[1].tagline}</p>
                  </div>
                </div>

                {/* 03 VELOCITY */}
                <div 
                  className="lg:col-span-12 group cursor-pointer bg-slate-100 p-12 aspect-[21/9] flex items-center justify-center relative overflow-hidden"
                  onClick={() => handleSelectPattern(PATTERNS[2])}
                >
                  <div className="z-10 text-center">
                    <span className="text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Interactive Motion</span>
                    <h3 className="text-8xl md:text-9xl font-black tracking-tighter group-hover:italic group-hover:translate-x-4 transition-all duration-700">
                      {PATTERNS[2].name}
                    </h3>
                  </div>
                  <div className="absolute top-0 right-0 p-12 text-sm font-bold opacity-20">2025 EDITION</div>
                  <div className="absolute bottom-0 left-0 p-12 border-t border-black/10 w-full flex justify-between">
                     <span>FLUID DYNAMICS</span>
                     <span>ARCHETYPE 03</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer - Minimalist Brutalism */}
          <footer className="bg-black text-white py-40 px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                  LEAVE A<br />MARK.
                </h2>
                <div className="space-y-12">
                  <p className="text-2xl text-slate-400 font-light">
                    あなたのビジョンを、永遠の洗練へ。2025年のデザインはここから始まります。
                  </p>
                  <div className="flex flex-col space-y-4">
                    <a href="mailto:hello@monolith.design" className="text-4xl font-bold hover:italic transition-all inline-block">hello@monolith.design</a>
                    <div className="h-px bg-white/20 w-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
                <p>© 2025 MONOLITH STUDIO. ALL RIGHTS RESERVED.</p>
                <div className="flex space-x-12">
                  <a href="#">Instagram</a>
                  <a href="#">Behance</a>
                  <a href="#">Awwwards</a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      ) : (
        <PatternDetail 
          pattern={selectedPattern} 
          onBack={() => setSelectedPattern(null)} 
        />
      )}
    </div>
  );
};

export default App;
