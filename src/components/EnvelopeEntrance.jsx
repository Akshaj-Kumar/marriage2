import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Music, Heart, ArrowRight } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function EnvelopeEntrance({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [sealCracked, setSealCracked] = useState(false);
  const [cardEmerged, setCardEmerged] = useState(false);
  const { couple } = WEDDING_DATA;

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Play Royal Chime sound immediately
    weddingAudio.playRoyalChime();

    // 2. Break wax seal & burst golden confetti
    setTimeout(() => {
      setSealCracked(true);
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#F5E6B8', '#B76E79', '#4A1525', '#FFFFFF', '#E5C378']
      });
    }, 250);

    // 3. Start romantic wedding soundtrack "Ordinary"
    setTimeout(() => {
      weddingAudio.play().catch(() => {});
    }, 450);

    // 4. Card emerges from envelope
    setTimeout(() => {
      setCardEmerged(true);
    }, 900);

    // 5. Transition to full wedding website
    setTimeout(() => {
      onOpen();
    }, 2400);
  };

  const handleSkip = () => {
    weddingAudio.play().catch(() => {});
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#18050B] overflow-hidden px-4 sm:px-6 select-none"
    >
      {/* Ambient Warm Golden Sunlight & Bokeh Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-burgundy/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Gentle Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold-metallic/60 blur-[0.5px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `floatSlow ${4 + (i % 4)}s ease-in-out infinite alternate ${i * 0.25}s`
            }}
          />
        ))}
      </div>

      {/* Center Envelope Experience Container */}
      <div className="relative z-10 max-w-sm sm:max-w-md w-full flex flex-col items-center">
        
        {/* Top Tag: Viral Reel Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-gold/40 text-gold-light text-[11px] font-cinzel tracking-[0.25em] uppercase mb-6 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
          <span>Bespoke Digital Invitation</span>
        </motion.div>

        {/* 3D Envelope Container (Matches exact Instagram Reel) */}
        <div 
          onClick={handleOpenInvitation}
          className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[580px] rounded-3xl p-2 cursor-pointer group"
          title="Click to Open Wedding Invitation"
        >
          {/* Outer Luxurious Velvet Envelope Wrapper */}
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#3D101D] via-[#2A0B14] to-[#1C050B] border-2 border-gold/60 shadow-envelope overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
            
            {/* Fine Gold Inset Border Line */}
            <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border border-gold/30 pointer-events-none" />

            {/* Left Gold Rose Foil Floral Branch (Matches Reel) */}
            <div className="absolute -left-10 top-0 bottom-0 w-36 sm:w-44 opacity-85 pointer-events-none select-none">
              <img
                src="./images/gold-roses.svg"
                alt="Gold Roses"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Right Gold Rose Foil Floral Branch (Mirrored) */}
            <div className="absolute -right-10 top-0 bottom-0 w-36 sm:w-44 opacity-85 pointer-events-none select-none scale-x-[-1]">
              <img
                src="./images/gold-roses.svg"
                alt="Gold Roses"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Envelope Flap Crease Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 550" preserveAspectRatio="none">
              {/* Top Flap Diagonal Trims */}
              <line x1="0" y1="0" x2="200" y2="260" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.5" />
              <line x1="400" y1="0" x2="200" y2="260" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.5" />
              {/* Bottom Flap Diagonal Trims */}
              <line x1="0" y1="550" x2="200" y2="280" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />
              <line x1="400" y1="550" x2="200" y2="280" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.4" />
            </svg>

            {/* Inside Invitation Letter Card that slides up */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={cardEmerged ? { y: -160, opacity: 1, scale: 1.05 } : { y: 0, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-4 sm:inset-6 bg-[#FDFBF7] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-neutral-800 shadow-2xl border-2 border-gold flex flex-col justify-between items-center text-center z-20"
            >
              <div className="w-full">
                <span className="text-[10px] font-cinzel tracking-[0.3em] text-[#A87932] uppercase block mb-1">
                  TOGETHER WITH OUR FAMILIES
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading text-burgundy font-semibold tracking-tight">
                  {couple.title}
                </h3>
                <div className="w-16 h-[1.5px] bg-gold mx-auto my-2" />
                <p className="text-xs font-montserrat text-neutral-600 italic">
                  warmly request the pleasure of your company at their wedding reception
                </p>
              </div>

              <div className="my-2 p-3 rounded-lg bg-burgundy/5 border border-gold/30 w-full">
                <p className="text-sm font-cinzel font-bold text-burgundy tracking-wider">
                  {couple.weddingDateFull}
                </p>
                <p className="text-xs font-montserrat text-neutral-600 mt-0.5">
                  {couple.venueName} • Cotswolds
                </p>
              </div>

              <span className="text-[10px] font-cinzel text-gold-dark tracking-widest uppercase animate-pulse">
                Unveiling Celebration...
              </span>
            </motion.div>

            {/* Center Mother of Pearl 3D Wax Seal (Matches Reel) */}
            <motion.div
              animate={
                sealCracked 
                  ? { scale: [1, 1.2, 0], opacity: [1, 0.9, 0], rotate: 20 }
                  : { scale: [1, 1.03, 1], filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.7))' }
              }
              transition={sealCracked ? { duration: 0.6 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center cursor-pointer"
            >
              {/* Outer Golden Glow behind wax seal */}
              <div className="absolute inset-0 rounded-full bg-gold/25 blur-lg group-hover:bg-gold/45 transition-all" />
              
              <img
                src="./images/wax-seal.svg"
                alt="Wax Seal Monogram T & J"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
              />
            </motion.div>

            {/* Instruction Callout at Bottom of Envelope */}
            <div className="absolute bottom-6 left-0 right-0 z-20 text-center px-4">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-gold/50 text-gold-light text-xs font-cinzel tracking-wider backdrop-blur-md shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
                <span>Tap wax seal to open invitation</span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Skip button for quick direct preview */}
        <button
          onClick={handleSkip}
          className="mt-6 text-xs font-cinzel text-neutral-400 hover:text-gold-light transition-colors underline tracking-widest uppercase"
        >
          Skip Envelope &amp; View Invitation Directly →
        </button>

      </div>
    </motion.div>
  );
}
