import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function PhotoGallery() {
  const { gallery } = WEDDING_DATA;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const openLightbox = (idx) => {
    weddingAudio.playRoyalChime();
    setSelectedPhotoIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    weddingAudio.playRoyalChime();
    setSelectedPhotoIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    weddingAudio.playRoyalChime();
    setSelectedPhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory text-neutral-800 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/5 border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Camera className="w-3.5 h-3.5 text-gold" />
            <span>MOMENTS TO REMEMBER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            A Glimpse of the Magic
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-4" />

          <p className="text-base sm:text-lg font-montserrat text-neutral-600 max-w-lg mx-auto">
            From quiet whispers to joyous celebrations, here are our favorite chapters.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-xl bg-burgundy-deep cursor-pointer border border-gold/30 hover:border-gold transition-all duration-500 hover:shadow-2xl"
            >
              {/* Photo Aspect Ratio */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  onError={(e) => { e.target.src = item.fallback; }}
                />
              </div>

              {/* Hover Dark Vignette & Caption Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-cinzel tracking-[0.25em] text-gold-light uppercase">
                  CHAPTER {index + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs font-montserrat text-neutral-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-[10px] font-cinzel text-gold-light/80 tracking-wider">
                    CLICK TO VIEW
                  </span>
                  <Maximize2 className="w-4 h-4 text-gold-light" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
            <motion.div
              key={selectedPhotoIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-gold/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[selectedPhotoIndex].image}
                alt={gallery[selectedPhotoIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                onError={(e) => { e.target.src = gallery[selectedPhotoIndex].fallback; }}
              />

              <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-4 sm:p-6 text-white text-center">
                <h4 className="text-xl sm:text-2xl font-heading font-semibold text-white">
                  {gallery[selectedPhotoIndex].title}
                </h4>
                <p className="text-xs sm:text-sm font-montserrat text-gold-light/90 mt-1">
                  {gallery[selectedPhotoIndex].caption}
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
