import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, Volume2, BookOpen, X, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function MusicPlayer({ isPlaying, onToggle }) {
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const { soundtrack } = WEDDING_DATA;

  return (
    <>
      {/* Floating Bottom Music Bar */}
      <div className="fixed bottom-5 left-5 z-40 max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-2.5 sm:p-3 rounded-full bg-[#1C050B]/95 border border-gold/50 shadow-2xl backdrop-blur-md text-white"
        >
          {/* Rotating Vinyl Disc */}
          <div 
            onClick={onToggle}
            className={`relative w-11 h-11 rounded-full bg-black border-2 border-gold flex items-center justify-center cursor-pointer transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '6s' }}
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {/* Center Label */}
            <div className="w-5 h-5 rounded-full bg-burgundy border border-gold flex items-center justify-center">
              <Music className="w-2.5 h-2.5 text-gold-light" />
            </div>
          </div>

          {/* Track Info */}
          <div className="flex flex-col pr-2 cursor-pointer" onClick={() => setShowLyricsModal(true)}>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-cinzel font-semibold text-gold-light tracking-wide truncate max-w-[130px] sm:max-w-[160px]">
                {soundtrack.title}
              </span>
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-2.5">
                  <span className="w-0.5 bg-gold-light eq-bar" />
                  <span className="w-0.5 bg-gold eq-bar" />
                  <span className="w-0.5 bg-gold-light eq-bar" />
                </div>
              )}
            </div>
            <span className="text-[10px] font-montserrat text-neutral-400">
              {soundtrack.artist} • Wedding Soundtrack
            </span>
          </div>

          {/* Action Buttons: Play/Pause & Lyrics */}
          <div className="flex items-center gap-1">
            <button
              onClick={onToggle}
              className="p-2 rounded-full bg-gold hover:bg-gold-light text-burgundy-dark transition-colors shadow-sm"
              aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-burgundy-dark" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-burgundy-dark ml-0.5" />
              )}
            </button>

            <button
              onClick={() => setShowLyricsModal(true)}
              className="p-2 rounded-full text-gold-light hover:text-white hover:bg-white/10 transition-colors"
              title="View Wedding Song Info"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Song Info & Lyrics Modal */}
      <AnimatePresence>
        {showLyricsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setShowLyricsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-md w-full bg-[#2A0B14] rounded-3xl border border-gold p-6 sm:p-8 text-center text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowLyricsModal(false)}
                className="absolute top-4 right-4 p-2 text-gold-light hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-4 text-gold">
                <Music className="w-8 h-8" />
              </div>

              <span className="text-[10px] font-cinzel text-gold-light tracking-[0.25em] uppercase block mb-1">
                OUR WEDDING SONG
              </span>
              <h3 className="text-3xl font-heading font-semibold text-white mb-1">
                {soundtrack.title}
              </h3>
              <p className="text-xs font-montserrat text-gold-light/80 mb-6">
                by {soundtrack.artist}
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-gold/30 mb-6 text-sm font-montserrat italic text-neutral-300 leading-relaxed">
                "{soundtrack.lyricsExcerpt}"
              </div>

              <button
                onClick={onToggle}
                className="w-full py-3 rounded-full bg-gold hover:bg-gold-light text-burgundy-dark font-cinzel text-xs font-bold tracking-widest uppercase transition-all shadow-md"
              >
                {isPlaying ? "Pause Music" : "Play Soundtrack"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
