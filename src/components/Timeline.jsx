import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  GlassWater, 
  UtensilsCrossed, 
  Sparkles, 
  Music, 
  Flame, 
  Clock, 
  MapPin, 
  CalendarPlus 
} from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function Timeline() {
  const { timeline, couple } = WEDDING_DATA;

  const iconMap = {
    HeartHandshake,
    GlassWater,
    UtensilsCrossed,
    Sparkles,
    Music,
    Flame
  };

  const handleAddToCalendar = (event) => {
    weddingAudio.playRoyalChime();
    const title = encodeURIComponent(`Thanu & Jathu Wedding: ${event.title}`);
    const details = encodeURIComponent(`${event.description} at ${event.location}, The Barn Tea Estate.`);
    const location = encodeURIComponent(`${event.location}, The Barn Tea Estate, Cotswolds, UK`);
    
    // Google Calendar URL for 17 March 2025
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20250317T153000Z/20250318T020000Z`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <section id="timeline" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA] text-neutral-800 overflow-hidden">
      
      {/* Background Subtle Golden Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>ORDER OF EVENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            Event Timeline
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-4" />

          <p className="text-base sm:text-lg font-montserrat text-neutral-600 max-w-lg mx-auto">
            {couple.weddingDateFull} • Every moment planned with love and celebration
          </p>
        </div>

        {/* Timeline Itinerary Items */}
        <div className="relative">
          
          {/* Vertical Central Connecting Gold Line */}
          <div className="absolute top-8 bottom-8 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold/20" />

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Content Card (Takes half width on desktop) */}
                  <div className="w-full sm:w-1/2 pl-14 sm:pl-0 sm:px-8">
                    <div className="bg-white/90 rounded-2xl p-6 sm:p-7 border border-gold/30 shadow-lg hover:shadow-xl transition-all group hover:border-gold">
                      
                      {/* Top Time & Tag Row */}
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy/10 text-burgundy font-cinzel text-xs font-bold tracking-wider">
                          <Clock className="w-3 h-3 text-gold-dark" />
                          <span>{item.time}</span>
                        </span>
                        <span className="text-[10px] font-cinzel text-[#8C6D23] uppercase tracking-widest font-semibold">
                          {item.tag}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-xl sm:text-2xl font-heading text-burgundy font-semibold mb-2 group-hover:text-[#682337] transition-colors">
                        {item.title}
                      </h3>

                      {/* Event Description */}
                      <p className="text-xs sm:text-sm font-montserrat text-neutral-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Location & Add to Calendar */}
                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-montserrat">
                        <span className="flex items-center gap-1 text-neutral-500 font-medium truncate max-w-[170px] sm:max-w-[200px]">
                          <MapPin className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </span>

                        <button
                          onClick={() => handleAddToCalendar(item)}
                          className="inline-flex items-center gap-1 text-burgundy hover:text-gold-dark font-cinzel text-[11px] font-semibold tracking-wider transition-colors"
                          title="Add event to Google Calendar"
                        >
                          <CalendarPlus className="w-3.5 h-3.5 text-gold" />
                          <span>Add to Cal</span>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Center Timeline Node / Icon Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-burgundy border-2 border-gold shadow-lg z-10">
                    <IconComponent className="w-5 h-5 text-gold-light" />
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
