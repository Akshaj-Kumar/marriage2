import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function Footer() {
  const { couple } = WEDDING_DATA;

  const scrollToTop = () => {
    weddingAudio.playRoyalChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#18050B] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-gold/40 overflow-hidden text-center">
      
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Monogram Badge */}
        <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold-light font-cinzel font-bold text-lg mb-4 shadow-gold-glow">
          {couple.monogram}
        </div>

        {/* Couple Names */}
        <h3 className="text-3xl sm:text-4xl font-heading font-semibold text-white tracking-wide mb-2">
          {couple.title}
        </h3>

        <p className="text-xs sm:text-sm font-cinzel text-gold-light/90 tracking-[0.2em] uppercase mb-4">
          {couple.weddingDateFull} • {couple.venueName}
        </p>

        {/* Wedding Hashtag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold/30 text-gold text-xs font-cinzel tracking-widest uppercase mb-8">
          <Sparkles className="w-3 h-3 text-gold-metallic" />
          <span>{couple.hashtag}</span>
        </div>

        <div className="w-24 h-[1px] bg-gold/30 mb-8" />

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 hover:bg-gold/20 border border-gold/40 text-gold-light text-xs font-cinzel tracking-wider uppercase transition-all mb-8 shadow-md"
        >
          <ArrowUp className="w-3.5 h-3.5 text-gold" />
          <span>Back to Top</span>
        </button>

        <p className="text-[11px] font-montserrat text-neutral-400">
          Crafted with love for Thanu &amp; Jathu's wedding celebration • {couple.weddingDateShort}
        </p>

      </div>
    </footer>
  );
}
