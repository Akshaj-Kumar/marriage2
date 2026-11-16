import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown, HelpCircle, Sparkles, UserCheck } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function ContactsFaq() {
  const { contacts, faqs, couple } = WEDDING_DATA;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    weddingAudio.playRoyalChime();
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePhoneClick = () => {
    weddingAudio.playRoyalChime();
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA] text-neutral-800 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            <span>GUEST ASSISTANCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            {contacts.title}
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-4" />

          <p className="text-base sm:text-lg font-montserrat text-neutral-600 max-w-lg mx-auto">
            {contacts.subtitle}
          </p>
        </div>

        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {contacts.phones.map((person) => (
            <div
              key={person.name}
              className="bg-white/95 rounded-2xl p-6 border border-gold/30 shadow-lg text-center flex flex-col justify-between hover:border-gold transition-all group"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-burgundy/10 text-burgundy border border-gold/40 flex items-center justify-center mx-auto mb-3 group-hover:bg-burgundy group-hover:text-gold-light transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-semibold text-burgundy">
                  {person.name}
                </h4>
                <p className="text-xs font-montserrat text-neutral-500 mt-0.5 mb-4">
                  {person.number}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <a
                  href={`tel:${person.number.replace(/\s+/g, '')}`}
                  onClick={handlePhoneClick}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-burgundy/10 hover:bg-burgundy text-burgundy hover:text-gold-light text-xs font-cinzel tracking-wider transition-all"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call</span>
                </a>

                <a
                  href={`https://wa.me/${person.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePhoneClick}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-cinzel tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white/90 rounded-3xl p-6 sm:p-10 border border-gold/40 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-heading text-burgundy font-semibold mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-neutral-200 overflow-hidden bg-ivory/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading text-lg sm:text-xl text-burgundy font-semibold hover:text-[#682337] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-dark transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm font-montserrat text-neutral-600 leading-relaxed border-t border-neutral-200/60"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
