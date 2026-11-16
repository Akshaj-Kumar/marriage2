import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Copy, Check, Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function WishingWell() {
  const { wishingWell } = WEDDING_DATA;
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (field, text) => {
    weddingAudio.playRoyalChime();
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="wishing-well" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory text-neutral-800 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/5 border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Gift className="w-3.5 h-3.5 text-gold" />
            <span>HONEYMOON &amp; REGISTRY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            {wishingWell.title}
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-6" />

          <p className="text-base sm:text-lg font-cormorant italic text-neutral-600 max-w-xl mx-auto">
            "{wishingWell.subtitle}"
          </p>
        </div>

        {/* Wishing Well Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2A0B14] via-[#1F070E] to-[#140308] rounded-3xl p-8 sm:p-12 border-2 border-gold/50 shadow-2xl text-white text-center relative overflow-hidden"
        >
          {/* Subtle Corner Filigree */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/40" />

          {/* Heart Icon Floating Badge */}
          <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-6 text-gold shadow-gold-glow">
            <Heart className="w-7 h-7 fill-gold" />
          </div>

          <p className="text-base sm:text-lg font-montserrat text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-10">
            {wishingWell.message}
          </p>

          {/* Banking / Registry Envelope Details */}
          <div className="max-w-md mx-auto bg-black/40 rounded-2xl p-6 border border-gold/30 text-left space-y-3 shadow-inner">
            <span className="text-[10px] font-cinzel text-gold-light tracking-[0.25em] uppercase block border-b border-gold/20 pb-2 mb-3">
              Direct Contribution Details
            </span>

            <div className="flex items-center justify-between text-xs sm:text-sm font-montserrat">
              <span className="text-neutral-400">Account Name:</span>
              <span className="font-semibold text-white">{wishingWell.bankDetails.accountName}</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm font-montserrat">
              <span className="text-neutral-400">Bank:</span>
              <span className="font-semibold text-white">{wishingWell.bankDetails.bankName}</span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm font-montserrat">
              <span className="text-neutral-400">Sort Code:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-gold-light font-semibold">{wishingWell.bankDetails.sortCode}</span>
                <button
                  onClick={() => handleCopy('sortCode', wishingWell.bankDetails.sortCode)}
                  className="p-1 hover:text-gold transition-colors text-neutral-400"
                  title="Copy Sort Code"
                >
                  {copiedField === 'sortCode' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm font-montserrat">
              <span className="text-neutral-400">Account Number:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-gold-light font-semibold">{wishingWell.bankDetails.accountNumber}</span>
                <button
                  onClick={() => handleCopy('account', wishingWell.bankDetails.accountNumber)}
                  className="p-1 hover:text-gold transition-colors text-neutral-400"
                  title="Copy Account Number"
                >
                  {copiedField === 'account' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm font-montserrat pt-2 border-t border-white/10">
              <span className="text-neutral-400">IBAN:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-gold-light truncate max-w-[170px] sm:max-w-none">{wishingWell.bankDetails.iban}</span>
                <button
                  onClick={() => handleCopy('iban', wishingWell.bankDetails.iban)}
                  className="p-1 hover:text-gold transition-colors text-neutral-400"
                  title="Copy IBAN"
                >
                  {copiedField === 'iban' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs font-cinzel tracking-widest text-gold-light/80 uppercase mt-8">
            Thank you for celebrating this moment with us — it means the world! 🤍
          </p>
        </motion.div>

      </div>
    </section>
  );
}
