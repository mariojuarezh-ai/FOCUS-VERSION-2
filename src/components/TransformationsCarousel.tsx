import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const pairedPhotos = [
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/DIANA%20ANTES%201.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/DIANA%20DESPUES%201.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/DIANA%20ANTES%202.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/DIANA%20DESPUES%202.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/ELIOT%20ANTES%201.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/ELIOT%20DESPUES%201%20CORREGIDA.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/GENARO%20ANTES%201%20CORREGIDA.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/GENARO%20DESPUES%201%20CORREGIDA.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/JORGE%20ANTES%201%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/JORGE%20DESPUES%202%20CORREGIDO.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/KATIE%20ANTES%201%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/KATIE%20DESPUES%201%20CORREGIDO.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/MONICA%20ANTES%201%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/MONICA%20DESPUES%201%20CORREGIDO.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/OMAR%20ANTES%201%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/OMAR%20DESPUES%201%20CORREGIDO.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/PAU%20ANTES%201%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/PAU%20DESPUES%201%20CORREGIDO.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/PAU%20ANTES%202%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/PAU%20DESPUES%202%20CORREGIDO.png"
  },
  {
    antes: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/VANIA%20ANTES%201%20CORREGIDO.png",
    despues: "https://thefocusplan.com/IMAGENES/ANTES-DESPUES/VANIA%20DESPUES%201%20CORREGIDO.png"
  }
];

const marqueeStyles = `
  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-scroll-left {
    animation: scroll-left var(--speed, 40s) linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right var(--speed, 40s) linear infinite;
  }
  .group\\/row:hover .animate-scroll-left,
  .group\\/row:hover .animate-scroll-right {
    animation-play-state: paused;
  }
  .carousel-paused .animate-scroll-left,
  .carousel-paused .animate-scroll-right {
    animation-play-state: paused !important;
  }
`;

const MarqueeRow = ({ pairs, direction = "left", speed = 40, language, onPairClick }: { pairs: { antes: string, despues: string }[], direction?: "left" | "right", speed?: number, language: 'es' | 'en', onPairClick: (pair: {antes: string, despues: string}) => void }) => {
  // Duplicate pairs to create a seamless loop
  const duplicatedPairs = [...pairs, ...pairs];

  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden bg-transparent py-2 md:py-4 group/row">
      <style>{marqueeStyles}</style>
      
      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black/80 to-transparent z-20 pointer-events-none" />
      
      <div
        className={`flex gap-4 md:gap-6 w-max animate-scroll-${direction}`}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {duplicatedPairs.map((pair, index) => (
          <div 
            key={index} 
            onClick={() => onPairClick(pair)}
            className="w-[85vw] sm:w-[400px] md:w-[600px] h-[85vw] sm:h-[450px] md:h-[600px] shrink-0 border border-olive/20 rounded-sm overflow-hidden relative group bg-black/40 backdrop-blur-sm flex transition-all duration-500 group-hover/row:opacity-40 hover:!opacity-100 hover:scale-[1.02] hover:z-10 hover:border-olive hover:shadow-[0_0_30px_rgba(118,132,85,0.3)] items-stretch cursor-pointer"
          >
            {/* Antes Side */}
            <div className="w-1/2 relative border-r border-olive/20 group-hover:grayscale-0 grayscale transition-all duration-700">
               <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 bg-black/80 text-olive text-[8px] md:text-[10px] font-black tracking-widest px-2 py-1 stencil shadow-md">
                 {language === 'es' ? 'ANTES' : 'BEFORE'}
               </div>
               {/* Face Blur overlay on top 15% */}
               <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[12px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
               <img 
                 src={pair.antes} 
                 alt="Antes" 
                 className="w-full h-full object-cover object-[20%_center] pointer-events-none"
               />
               <div className="absolute inset-0 bg-olive/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none duration-500" />
            </div>

            {/* Despues Side */}
            <div className="w-1/2 relative group-hover:grayscale-0 grayscale transition-all duration-700">
               <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-olive text-black text-[8px] md:text-[10px] font-black tracking-widest px-2 py-1 stencil shadow-md">
                 {language === 'es' ? 'DESPUÉS' : 'AFTER'}
               </div>
               {/* Face Blur overlay on top 15% */}
               <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[12px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
               <img 
                 src={pair.despues} 
                 alt="Despues" 
                 className="w-full h-full object-cover object-[20%_center] pointer-events-none"
               />
               <div className="absolute inset-0 bg-olive/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none duration-500" />
            </div>

            {/* Fallback pattern in case image fails to load */}
            <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_2px_2px,rgba(118,132,85,0.4)_1px,transparent_0)] bg-[length:20px_20px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TransformationsCarousel = ({ language }: { language: 'es' | 'en' }) => {
  const [selectedPair, setSelectedPair] = useState<{antes: string, despues: string} | null>(null);

  // Mobile pairs (show a subset or all)
  const mobilePairs = pairedPhotos.slice(0, 6);

  return (
    <>
      <div className={`w-full overflow-hidden relative pt-4 pb-12 ${selectedPair ? 'carousel-paused' : ''}`}>
        {/* Accent Backgrounds */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-olive/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-olive/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        {/* Desktop View (Marquee) */}
        <div className="hidden md:block space-y-8">
          <MarqueeRow 
            pairs={pairedPhotos.slice(0, 6)} 
            direction="left" 
            speed={75} 
            language={language}
            onPairClick={setSelectedPair}
          />
          <MarqueeRow 
            pairs={pairedPhotos.slice(6)} 
            direction="right" 
            speed={75} 
            language={language}
            onPairClick={setSelectedPair}
          />
        </div>

        {/* Mobile View (Marquee) */}
        <div className="md:hidden space-y-4">
          <MarqueeRow 
            pairs={pairedPhotos.slice(0, 6)} 
            direction="left" 
            speed={40} 
            language={language}
            onPairClick={setSelectedPair}
          />
          <MarqueeRow 
            pairs={pairedPhotos.slice(6)} 
            direction="right" 
            speed={40} 
            language={language}
            onPairClick={setSelectedPair}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedPair && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPair(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-black/80 backdrop-blur-md border border-olive/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(118,132,85,0.2)]"
            >
              <button
                onClick={() => setSelectedPair(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-black/50 border border-olive/30 text-smoke hover:bg-olive hover:text-black hover:border-olive transition-all rounded-full"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row w-full h-[85vh] md:h-[85vh] bg-transparent">
                {/* Antes */}
                <div className="w-full h-1/2 md:w-1/2 md:h-full relative border-b md:border-b-0 md:border-r border-olive/20 group pb-2 md:pb-0">
                  <div className="absolute top-2 left-2 z-20 bg-black/80 text-olive text-[10px] md:text-sm font-black tracking-widest px-2 md:px-3 py-1 font-mono shadow-md">
                    {language === 'es' ? 'ANTES' : 'BEFORE'}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[16px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
                  <img
                    src={selectedPair.antes}
                    alt="Cambio físico antes del entrenamiento personalizado de alto rendimiento con nuestro coach en Guadalajara"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Despues */}
                <div className="w-full h-1/2 md:w-1/2 md:h-full relative group pt-2 md:pt-0">
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20 bg-olive text-black text-[10px] md:text-sm font-black tracking-widest px-2 md:px-3 py-1 font-mono shadow-md">
                    {language === 'es' ? 'DESPUÉS' : 'AFTER'}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[15%] bg-transparent backdrop-blur-[16px] z-10 pointer-events-none fade-out-bottom" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}} />
                  <img
                    src={selectedPair.despues}
                    alt="Despues"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
