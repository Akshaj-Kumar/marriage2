import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Palette, Shirt, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function DressCode() {
  const { dressCode } = WEDDING_DATA;
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopyColor = (hex) => {
    weddingAudio.playRoyalChime();
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="dress-code" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory text-neutral-800 overflow-hidden">
      
      {/* Background Subtle Shading */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-burgundy/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/5 border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Shirt className="w-3.5 h-3.5 text-gold" />
            <span>ATTIRE &amp; INSPIRATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            {dressCode.title}
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-6" />

          <p className="text-base sm:text-xl font-cormorant italic text-neutral-600 max-w-xl mx-auto">
            "{dressCode.subtitle}"
          </p>
        </div>

        {/* 2-Column Cards for Ladies & Gentlemen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: For Ladies */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/95 rounded-3xl p-8 sm:p-10 border border-gold/30 shadow-xl relative overflow-hidden group hover:border-gold transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-gold/40 flex items-center justify-center text-burgundy mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-gold-dark" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading text-burgundy font-semibold mb-3">
              {dressCode.ladies.title}
            </h3>

            <p className="text-xs sm:text-sm font-montserrat text-neutral-600 leading-relaxed mb-6">
              {dressCode.ladies.description}
            </p>

            <div className="space-y-2.5">
              {dressCode.ladies.options.map((opt) => (
                <div key={opt} className="flex items-center gap-2.5 text-xs sm:text-sm font-montserrat text-neutral-700 font-medium">
                  <span className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: For Gentlemen */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/95 rounded-3xl p-8 sm:p-10 border border-gold/30 shadow-xl relative overflow-hidden group hover:border-gold transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/10 rounded-bl-full pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-burgundy/10 border border-gold/40 flex items-center justify-center text-burgundy mb-6 group-hover:scale-110 transition-transform">
              <Shirt className="w-6 h-6 text-gold-dark" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading text-burgundy font-semibold mb-3">
              {dressCode.men.title}
            </h3>

            <p className="text-xs sm:text-sm font-montserrat text-neutral-600 leading-relaxed mb-6">
              {dressCode.men.description}
            </p>

            <div className="space-y-2.5">
              {dressCode.men.options.map((opt) => (
                <div key={opt} className="flex items-center gap-2.5 text-xs sm:text-sm font-montserrat text-neutral-700 font-medium">
                  <span className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Color Palette Swatches & Open Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2A0B14] to-[#1C050B] rounded-3xl p-8 sm:p-10 border border-gold/50 text-white shadow-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-light text-[10px] font-cinzel tracking-widest uppercase mb-4">
            <Palette className="w-3.5 h-3.5 text-gold" />
            <span>CELEBRATION PALETTE</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-heading text-white font-semibold mb-2">
            Suggested Color Harmony
          </h4>
          <p className="text-xs sm:text-sm font-montserrat text-gold-light/90 max-w-md mx-auto mb-8">
            Click any shade to copy hex code for your outfit planning.
          </p>

          {/* Color Swatch Circles */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            {dressCode.palette.map((swatch) => (
              <button
                key={swatch.name}
                onClick={() => handleCopyColor(swatch.hex)}
                className="flex flex-col items-center gap-2 group focus:outline-none"
                title={`Copy ${swatch.name} (${swatch.hex})`}
              >
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/30 shadow-lg group-hover:scale-110 group-hover:border-gold transition-all relative flex items-center justify-center"
                  style={{ backgroundColor: swatch.hex }}
                >
                  {copiedHex === swatch.hex && (
                    <span className="bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      Copied!
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-cinzel text-neutral-300 group-hover:text-gold-light tracking-wider">
                  {swatch.name}
                </span>
              </button>
            ))}
          </div>

          {/* Golden Highlight Note from Reel */}
          <div className="inline-block p-4 rounded-2xl bg-white/5 border border-gold/30">
            <p className="text-sm sm:text-base font-cormorant italic text-gold-light font-light">
              ✨ "{dressCode.note}" ✨
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
