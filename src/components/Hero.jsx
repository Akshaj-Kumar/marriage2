import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, ChevronDown, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function Hero({ onExplore }) {
  const { couple, countdown } = WEDDING_DATA;

  // Real-time Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(countdown.targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [countdown.targetDate]);

  const handleExploreClick = () => {
    weddingAudio.playRoyalChime();
    weddingAudio.play().catch(() => {});
    if (onExplore) {
      onExplore();
    } else {
      document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden bg-[#1B050B]">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,21,37,0.7)_0%,rgba(27,5,11,0.98)_75%)] pointer-events-none" />
      
      {/* Delicate Gold Watermark Geometry */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gold/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-burgundy/40 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Luxury Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center pt-20 pb-12">
        
        {/* Top Tag: Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-black/40 border border-gold/40 text-gold-light text-xs font-cinzel tracking-[0.3em] uppercase mb-6 backdrop-blur-md shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
          <span>{couple.subtitle}</span>
        </motion.div>

        {/* Main Wedding Couple Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading text-white tracking-wide leading-none mb-4 select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
        >
          <span className="font-light">{couple.brideShort}</span>
          <span className="font-cormorant italic text-gold-light mx-2 sm:mx-4 font-normal">&amp;</span>
          <span className="font-light">{couple.groomShort}</span>
        </motion.h1>

        {/* Tagline from the Viral Reel */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl font-cormorant italic text-gold-light/95 max-w-xl mx-auto mb-8 font-light tracking-wide"
        >
          "{couple.tagline}"
        </motion.p>

        {/* Date & Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-cinzel tracking-[0.2em] text-neutral-300 uppercase mb-12"
        >
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <Calendar className="w-4 h-4 text-gold" />
            {couple.weddingDateFull}
          </span>
          <span className="text-gold">•</span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <MapPin className="w-4 h-4 text-gold" />
            {couple.venueName}
          </span>
        </motion.div>

        {/* Live Countdown Timer in Luxury Gold Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-lg mb-12"
        >
          <span className="text-[11px] font-cinzel tracking-[0.25em] text-gold-light uppercase block mb-4">
            {countdown.label}
          </span>

          <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="relative bg-gradient-to-b from-black/60 to-black/80 rounded-2xl p-3 sm:p-4 border border-gold/40 shadow-xl backdrop-blur-md flex flex-col items-center justify-center group hover:border-gold transition-colors"
              >
                <div className="absolute inset-0 rounded-2xl bg-gold/5 group-hover:bg-gold/10 transition-colors pointer-events-none" />
                <span className="text-2xl sm:text-4xl font-heading font-semibold text-white tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[11px] font-cinzel text-gold-light/80 tracking-widest mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button: Discover the Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button
            onClick={handleExploreClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-bronze via-gold to-gold-metallic text-burgundy-dark font-cinzel font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shadow-2xl hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>DISCOVER THE DETAILS</span>
            <ChevronDown className="w-4 h-4 text-burgundy-dark transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>

      </div>

      {/* Decorative Bottom Corner Filigree Lines */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-neutral-500 text-[10px] font-cinzel tracking-widest pointer-events-none">
        <span>EST. 2025</span>
        <span className="flex items-center gap-1.5 text-gold-light/60">
          <Heart className="w-3 h-3 fill-gold-light/60" />
          <span>#THANUANDJATHU</span>
        </span>
        <span>THE BARN TEA</span>
      </div>

    </section>
  );
}
