import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Bus, Bed, Sparkles, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function VenueGuide() {
  const { venue } = WEDDING_DATA;

  const handleOpenMap = () => {
    weddingAudio.playRoyalChime();
    window.open(venue.googleMapsUrl, '_blank');
  };

  return (
    <section id="venue" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA] text-neutral-800 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>DESTINATION &amp; TRAVEL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            The Barn Tea Estate
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-4" />

          <p className="text-base sm:text-lg font-montserrat text-neutral-600 max-w-lg mx-auto">
            {venue.fullAddress}
          </p>
        </div>

        {/* Venue Showcase Card & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Venue Estate Photo with Gold Filigree */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                alt="The Barn Tea Estate Venue"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = './images/palace-heritage.svg'; }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-cinzel tracking-[0.25em] text-gold-light uppercase">
                  COTSWOLDS, UNITED KINGDOM
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                  {venue.name}
                </h3>
                <p className="text-xs font-montserrat text-neutral-300 mt-1 line-clamp-2">
                  {venue.description}
                </p>
              </div>

              {/* Get Directions Floating Badge */}
              <button
                onClick={handleOpenMap}
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-burgundy/90 hover:bg-burgundy text-gold-light font-cinzel text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-gold/50 shadow-lg transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-gold" />
                <span>Open in Maps</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Guest Travel & Practical Guide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Valet & Parking Card */}
            <div className="p-6 rounded-2xl bg-white border border-gold/30 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-dark flex-shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-burgundy mb-1">
                  Complimentary Valet Parking
                </h4>
                <p className="text-xs sm:text-sm font-montserrat text-neutral-600 leading-relaxed">
                  {venue.parking}
                </p>
              </div>
            </div>

            {/* Shuttle Bus Service */}
            <div className="p-6 rounded-2xl bg-white border border-gold/30 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy/10 border border-burgundy/30 flex items-center justify-center text-burgundy flex-shrink-0">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-burgundy mb-1">
                  Guest Shuttle Service
                </h4>
                <p className="text-xs sm:text-sm font-montserrat text-neutral-600 leading-relaxed">
                  {venue.shuttle}
                </p>
              </div>
            </div>

            {/* Nearby Accommodations */}
            <div className="p-6 rounded-2xl bg-white border border-gold/30 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Bed className="w-5 h-5 text-gold-dark" />
                <h4 className="text-lg font-heading font-semibold text-burgundy">
                  Recommended Accommodations
                </h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {venue.accommodations.map((hotel) => (
                  <div key={hotel.name} className="p-3 rounded-xl bg-ivory border border-neutral-200">
                    <p className="text-xs font-heading font-bold text-neutral-800 truncate">
                      {hotel.name}
                    </p>
                    <p className="text-[11px] font-montserrat text-neutral-500 mt-0.5">
                      {hotel.distance}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="pt-2">
              <button
                onClick={handleOpenMap}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-burgundy hover:bg-burgundy-light text-gold-light font-cinzel font-semibold text-xs tracking-[0.2em] uppercase shadow-lg transition-all"
              >
                <ExternalLink className="w-4 h-4 text-gold" />
                <span>Launch Turn-by-Turn Navigation</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
