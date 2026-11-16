import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export default function WelcomeMessage() {
  const { welcomeStory, couple } = WEDDING_DATA;

  return (
    <section id="welcome" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory text-neutral-800 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Top Header Tag */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/5 border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>{welcomeStory.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            {couple.invitationPlea}
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-6" />

          <p className="text-lg sm:text-2xl font-cormorant italic text-neutral-600 max-w-2xl mx-auto font-light">
            "{couple.tagline}"
          </p>
        </div>

        {/* Content Card with Story & Couple Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Romantic Couple Portrait with Gold Foil Trim */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative max-w-sm w-full group">
              {/* Gold Offset Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gold translate-x-3 translate-y-3 pointer-events-none transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-burgundy-deep aspect-[4/5] border border-gold/30">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Thanuja & Jathushan Wedding Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = './images/couple-golden.svg'; }}
                />

                {/* Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-cinzel tracking-[0.25em] text-gold-light uppercase">
                    OUR FOREVER JOURNEY
                  </span>
                  <h4 className="text-2xl font-heading font-semibold text-white">
                    {couple.title}
                  </h4>
                  <span className="text-xs font-montserrat text-neutral-300">
                    {couple.weddingDateFull}
                  </span>
                </div>
              </div>

              {/* Floating Wax Seal Icon Accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-ivory p-1.5 shadow-xl border border-gold">
                <img
                  src="./images/wax-seal.svg"
                  alt="Monogram"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: The Letter to Friends & Family */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative bg-white/80 rounded-3xl p-8 sm:p-10 border border-gold/40 shadow-xl backdrop-blur-sm">
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />

              <h3 className="text-2xl sm:text-3xl font-heading text-burgundy font-semibold tracking-wide mb-4">
                {welcomeStory.salutation}
              </h3>

              <div className="space-y-4 text-base sm:text-lg font-montserrat text-neutral-700 leading-relaxed font-normal">
                <p>
                  {welcomeStory.p1}
                </p>
                <p>
                  {welcomeStory.p2}
                </p>
                <p className="font-medium text-burgundy">
                  {welcomeStory.p3}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-cinzel tracking-widest text-[#A87932] uppercase block">
                    WITH JOYFUL HEARTS,
                  </span>
                  <span className="text-2xl font-greatvibes text-burgundy">
                    Thanu &amp; Jathu
                  </span>
                </div>

                <a
                  href="#timeline"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-light text-gold-light text-xs font-cinzel tracking-wider uppercase transition-all shadow-md"
                >
                  <span>View Timeline</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
