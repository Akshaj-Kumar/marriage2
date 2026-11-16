import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import EnvelopeEntrance from './components/EnvelopeEntrance';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeMessage from './components/WelcomeMessage';
import Timeline from './components/Timeline';
import VenueGuide from './components/VenueGuide';
import DressCode from './components/DressCode';
import PhotoGallery from './components/PhotoGallery';
import RSVPSection from './components/RSVPSection';
import WishingWell from './components/WishingWell';
import ContactsFaq from './components/ContactsFaq';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';
import Footer from './components/Footer';
import { weddingAudio } from './utils/weddingAudio';

export default function App() {
  // Wax Seal Envelope displays initially as seen in the viral Instagram reel
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  // Sync audio engine state
  useEffect(() => {
    weddingAudio.autoStart();
    const unsubscribe = weddingAudio.subscribe(({ isPlaying }) => {
      setIsMusicPlaying(isPlaying);
    });
    return unsubscribe;
  }, []);

  // Global listener: first click/tap anywhere unlocks and starts music immediately
  useEffect(() => {
    if (isMusicPlaying) return;

    const handleGlobalInteraction = () => {
      weddingAudio.play().catch(() => {});
    };

    window.addEventListener('click', handleGlobalInteraction, { capture: true, passive: true });
    window.addEventListener('touchstart', handleGlobalInteraction, { capture: true, passive: true });
    window.addEventListener('pointerdown', handleGlobalInteraction, { capture: true, passive: true });

    return () => {
      window.removeEventListener('click', handleGlobalInteraction, { capture: true });
      window.removeEventListener('touchstart', handleGlobalInteraction, { capture: true });
      window.removeEventListener('pointerdown', handleGlobalInteraction, { capture: true });
    };
  }, [isMusicPlaying]);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    weddingAudio.play().catch(() => {});
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
  };

  const handleToggleMusic = () => {
    weddingAudio.toggle();
  };

  const handleTogglePetals = () => {
    setPetalsEnabled(!petalsEnabled);
  };

  return (
    <div className="relative min-h-screen bg-ivory text-neutral-800 font-montserrat selection:bg-gold/30 selection:text-burgundy">
      
      {/* Viral 3D Wax Seal Envelope Entrance Screen (Reel Replica) */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <EnvelopeEntrance onOpen={handleOpenEnvelope} />
        )}
      </AnimatePresence>

      {/* Floating Prompt if browser blocked initial unprompted audio */}
      {isEnvelopeOpen && !isMusicPlaying && (
        <div 
          onClick={() => weddingAudio.play().catch(() => {})}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 cursor-pointer animate-pulse"
        >
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1C050B]/95 text-gold-light border-2 border-gold shadow-2xl backdrop-blur-md text-xs sm:text-sm font-cinzel tracking-wider hover:scale-105 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
            <span>🎵 Tap anywhere to play wedding music</span>
          </div>
        </div>
      )}

      {/* Ambient Falling Rose & Gold Petals */}
      <FallingPetals enabled={petalsEnabled} />

      {/* Luxury Navigation Bar */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        onReopenEnvelope={handleReopenEnvelope}
        petalsEnabled={petalsEnabled}
        onTogglePetals={handleTogglePetals}
      />

      {/* Main Royal Hero Section */}
      <Hero onExplore={() => {
        document.querySelector('#welcome')?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Welcome Story: "You're Invited / A Celebration of Love & Destiny" */}
      <WelcomeMessage />

      {/* Event Timeline (Ceremony, Cocktails, Dinner, First Dance, Party, Closing) */}
      <Timeline />

      {/* Destination & Travel (The Barn Tea Estate, Cotswolds) */}
      <VenueGuide />

      {/* Dress Code & Color Palette Swatches */}
      <DressCode />

      {/* Moments of Us (Photo Gallery with Lightbox) */}
      <PhotoGallery />

      {/* Interactive RSVP Section */}
      <RSVPSection />

      {/* Wishing Well & Honeymoon Registry */}
      <WishingWell />

      {/* Organizational Contacts & FAQ Accordion */}
      <ContactsFaq />

      {/* Floating Music Player */}
      <MusicPlayer
        isPlaying={isMusicPlaying}
        onToggle={handleToggleMusic}
      />

      {/* Royal Wedding Footer */}
      <Footer />

    </div>
  );
}
