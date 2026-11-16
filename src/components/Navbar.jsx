import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Mail, Menu, X, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function Navbar({ isMusicPlaying, onToggleMusic, onReopenEnvelope, petalsEnabled, onTogglePetals }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { couple } = WEDDING_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Welcome", href: "#hero" },
    { label: "Our Story", href: "#welcome" },
    { label: "Timeline", href: "#timeline" },
    { label: "Venue", href: "#venue" },
    { label: "Dress Code", href: "#dress-code" },
    { label: "Moments", href: "#gallery" },
    { label: "RSVP", href: "#rsvp" },
    { label: "Wishing Well", href: "#wishing-well" },
    { label: "Details", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    weddingAudio.playRoyalChime();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1C050B]/90 backdrop-blur-md py-3 shadow-xl border-b border-gold/30'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Couple Monogram */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/60 flex items-center justify-center text-gold-light font-cinzel font-bold text-sm shadow-sm group-hover:bg-gold/30 transition-all">
              {couple.monogram}
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-cinzel tracking-[0.2em] text-white font-semibold group-hover:text-gold-light transition-colors">
                THANU &amp; JATHU
              </span>
              <span className="text-[10px] font-montserrat text-gold-light/80 tracking-widest uppercase">
                {couple.weddingDateShort}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-cinzel tracking-[0.18em] text-gold-light/90 hover:text-white transition-colors uppercase relative group"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Controls: Audio + Replay Envelope + Petals + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Music Toggle */}
            <button
              onClick={onToggleMusic}
              title={isMusicPlaying ? "Pause Alex Warren - Ordinary" : "Play Romantic Wedding Music"}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-cinzel transition-all ${
                isMusicPlaying
                  ? 'bg-gold/20 border-gold-light text-gold-light shadow-gold-glow'
                  : 'bg-black/50 border-white/20 text-neutral-300 hover:text-white hover:border-gold'
              }`}
            >
              {isMusicPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-gold-light animate-pulse" />
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 bg-gold-light eq-bar" />
                    <span className="w-0.5 bg-gold eq-bar" />
                    <span className="w-0.5 bg-gold-light eq-bar" />
                  </div>
                  <span className="hidden md:inline">Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Music</span>
                </>
              )}
            </button>

            {/* Replay Viral Envelope View */}
            <button
              onClick={() => {
                weddingAudio.playRoyalChime();
                onReopenEnvelope();
              }}
              title="Re-open the 3D Wax Seal Envelope"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 hover:bg-gold/20 border border-gold/40 text-gold-light text-xs font-cinzel tracking-wider transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>Envelope</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-black/50 border border-gold/40 text-gold-light hover:text-white transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#1C050B]/98 border-b border-gold/40 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 px-3 rounded-lg text-sm font-cinzel tracking-[0.2em] text-neutral-200 hover:text-gold-light hover:bg-white/5 transition-all uppercase"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gold/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReopenEnvelope();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-gold/15 border border-gold text-gold-light font-cinzel text-xs tracking-widest uppercase"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>Replay Wax Seal Envelope</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
