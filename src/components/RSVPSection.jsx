import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, Sparkles, User, Users, Utensils, Wine, Music2 } from 'lucide-react';
import { weddingAudio } from '../utils/weddingAudio';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    guestCount: '2',
    dietary: 'None',
    drinks: 'Champagne & Wine',
    songRequest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [savedData, setSavedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    weddingAudio.playRoyalChime();

    // Golden & Rose Confetti Celebration
    confetti({
      particleCount: 130,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#E5C378', '#4A1525', '#FDA4AF', '#FDFBF7']
    });

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('wedding2_rsvps') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('wedding2_rsvps', JSON.stringify(existing));
    } catch {}

    setSavedData({ ...formData });
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA] text-neutral-800 overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/40 text-[#8C6D23] text-xs font-cinzel tracking-[0.25em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>KINDLY RESPOND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-heading text-burgundy tracking-tight mb-4"
          >
            Please Confirm Your Attendance
          </motion.h2>

          <div className="w-24 h-[1.5px] bg-gold mx-auto mb-4" />

          <p className="text-base sm:text-lg font-montserrat text-neutral-600 max-w-md mx-auto">
            Please let us know if you will celebrate with us by 15 February 2025.
          </p>
        </div>

        {/* Main RSVP Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 rounded-3xl p-6 sm:p-10 border-2 border-gold/40 shadow-2xl relative overflow-hidden"
        >
          {submitted ? (
            /* Submission Success State */
            <div className="text-center py-10 px-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg border border-emerald-300">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-3xl font-heading text-burgundy font-semibold mb-2">
                Thank You, {savedData.name}!
              </h3>

              <p className="text-sm sm:text-base font-montserrat text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                {savedData.attendance === 'yes'
                  ? "We are delighted and overjoyed that you will be celebrating our special day with us! See you at The Barn Tea Estate!"
                  : savedData.attendance === 'later'
                  ? "Thank you for letting us know! Please remember to confirm your plans before 15 February 2025."
                  : "We are so sorry you can't make it, but you will be in our thoughts and hearts!"}
              </p>

              <div className="inline-block p-4 rounded-2xl bg-ivory border border-gold/30 text-left text-xs font-montserrat space-y-1 mb-8 max-w-sm w-full">
                <p><strong className="font-semibold text-burgundy">Guests:</strong> {savedData.guestCount}</p>
                <p><strong className="font-semibold text-burgundy">Dietary:</strong> {savedData.dietary}</p>
                <p><strong className="font-semibold text-burgundy">Drink:</strong> {savedData.drinks}</p>
                {savedData.songRequest && <p><strong className="font-semibold text-burgundy">Song:</strong> {savedData.songRequest}</p>}
              </div>

              <div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-burgundy text-gold-light font-cinzel text-xs tracking-wider uppercase shadow-md hover:bg-burgundy-light transition-all"
                >
                  Edit Response
                </button>
              </div>
            </div>
          ) : (
            /* Active RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Full Name */}
              <div>
                <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sarah & Michael Davies"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-ivory border border-neutral-300 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat text-neutral-800 transition-all outline-none"
                  />
                </div>
              </div>

              {/* 2. Attendance Status (Radio from Reel) */}
              <div>
                <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                  Will You Join Us? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'yes', label: 'Yes, I will attend! 🥂' },
                    { id: 'no', label: 'Unfortunately cannot :(' },
                    { id: 'later', label: 'Will tell you a bit later' }
                  ].map((choice) => (
                    <button
                      type="button"
                      key={choice.id}
                      onClick={() => setFormData({ ...formData, attendance: choice.id })}
                      className={`p-3.5 rounded-xl border text-left text-xs font-montserrat font-medium transition-all ${
                        formData.attendance === choice.id
                          ? 'bg-burgundy text-gold-light border-gold shadow-md font-semibold'
                          : 'bg-ivory border-neutral-300 text-neutral-700 hover:border-gold'
                      }`}
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Number of Guests & Dietary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Guest Count */}
                <div>
                  <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                    How many guests from your family?
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-ivory border border-neutral-300 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat text-neutral-800 transition-all outline-none appearance-none"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4+">4+ Guests (Family)</option>
                    </select>
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div>
                  <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                    Any Dietary Requirements?
                  </label>
                  <div className="relative">
                    <Utensils className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-ivory border border-neutral-300 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat text-neutral-800 transition-all outline-none appearance-none"
                    >
                      <option value="None">None / Everything</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Gluten-Free">Gluten-Free</option>
                      <option value="Halal">Halal</option>
                      <option value="Nut Allergy">Nut Allergy</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* 4. Drink Choice & Song Request */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Drink Choice */}
                <div>
                  <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                    What would you like to drink?
                  </label>
                  <div className="relative">
                    <Wine className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.drinks}
                      onChange={(e) => setFormData({ ...formData, drinks: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-ivory border border-neutral-300 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat text-neutral-800 transition-all outline-none appearance-none"
                    >
                      <option value="Champagne & Wine">Champagne &amp; Fine Wine</option>
                      <option value="Signature Cocktails">Signature Handcrafted Cocktails</option>
                      <option value="Beer & Spirits">Beer &amp; Premium Spirits</option>
                      <option value="Non-Alcoholic Mocktails">Non-Alcoholic Artisan Mocktails</option>
                    </select>
                  </div>
                </div>

                {/* Song Request */}
                <div>
                  <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                    Song Request for the DJ
                  </label>
                  <div className="relative">
                    <Music2 className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.songRequest}
                      onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                      placeholder="e.g., Ordinary by Alex Warren"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-ivory border border-neutral-300 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat text-neutral-800 transition-all outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* 5. Message for Couple */}
              <div>
                <label className="block text-xs font-cinzel text-[#8C6D23] font-semibold tracking-wider uppercase mb-2">
                  Warm Wishes or Note
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Leave a sweet blessing for Thanu & Jathu..."
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-neutral-300 focus:border-gold focus:ring-1 focus:ring-gold text-sm font-montserrat text-neutral-800 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gradient-to-r from-gold-bronze via-gold to-gold-metallic text-burgundy-dark font-cinzel font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shadow-xl hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation</span>
                </button>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
