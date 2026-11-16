# Thanu & Jathu — Viral Luxury Digital Wedding Invitation 💌

An extraordinarily attractive, animated, luxury digital wedding invitation website inspired directly by the viral Instagram reel from **Webgency Invitations** ([`@webgency_invitations`](https://www.instagram.com/reel/DdG8v5Yt_cG/)).

Built inside `marriage2` using **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Key Features & Replicated Experience

### 1. 💌 The Viral 3D Wax Seal Envelope Entrance
- **Exact Instagram Reel Match**: A deep burgundy velvet envelope adorned with embossed gold rose floral branches on diagonal flaps and an authentic mother-of-pearl 3D wax seal stamped with the monogram **"T & J"**.
- **Interactive Seal Break**: Tapping the seal triggers a realistic chime sound, bursts an explosion of golden & rose confetti, unfolds the envelope flap, slides up the gold-lettered invitation card, and seamlessly unlocks the romantic wedding soundtrack.
- **Envelope Replay**: Re-open the 3D envelope anytime via the "💌 Envelope" button in the navigation bar.

### 2. 👑 Royal Welcome & Live Countdown
- Grand typography featuring **Cormorant Garamond** & **Cinzel**.
- Monogram badge with *"Together with our families"*.
- Real-time live countdown timer (Days, Hours, Minutes, Seconds) with luxury glassmorphism cards and golden borders.
- Tagline: *"Let’s celebrate the best day of our life together!"*

### 3. 📖 The Love Story & Welcome Letter
- Official letter to dear friends and family announcing the spring wedding reception.
- Romantic couple portrait with gold foil offset border and floating wax seal emblem.

### 4. ⏳ Complete Event Timeline
- Vertical connecting golden line with animated itinerary nodes:
  - **3:30 PM**: Wedding Ceremony (The Glasshouse Conservatory)
  - **5:00 PM**: Cocktail Hour & Canapés (The Manor South Lawn)
  - **7:00 PM**: Royal Banquet Dinner (The Grand Oak Barn)
  - **8:00 PM**: Romantic First Dance (The Starlit Ballroom)
  - **8:15 PM**: Party & Live DJ (The Grand Ballroom & Terrace)
  - **1:45 AM**: Grand Sparkler Farewell (The Fountain Courtyard)
- One-click **"Add to Google Calendar"** integration for all events.

### 5. 🗺️ Destination & Travel Guide
- Architectural photography of **The Barn Tea Estate** (Cotswolds, Gloucestershire, UK).
- One-click Google Maps turn-by-turn navigation.
- Practical guest guide: complimentary valet parking, shuttle service from railway stations, and nearby boutique hotel recommendations.

### 6. 👗 Dress Code & Palette Swatches
- Elegant guidance for both Ladies (*Anarkali suits, lehengas, sarees, evening gowns*) and Gentlemen (*Suits, tuxedos, sherwanis, festive smart casual*).
- Interactive celebration color swatches with one-click hex code copy (*Burgundy Velvet, Champagne Gold, Emerald Pine, Rose Mauve, Midnight Navy, Ivory Pearl*).
- Highlight note: *"All colours and prints are joyfully allowed!"*

### 7. 📸 "Moments of Us" Photo Gallery
- Romantic couple moments in an aesthetic masonry grid with 3D hover effects.
- Full-screen interactive modal lightbox with Next, Previous, and Zoom controls.

### 8. 🥂 Interactive RSVP System
- Fields matching the viral invite:
  - Guest Full Name
  - Attendance Status (*Yes, I will attend / Unfortunately cannot / Will confirm later*)
  - Family Guest Count
  - Dietary Requirements (*Vegetarian, Vegan, Gluten-Free, Halal, Nut Allergy, None*)
  - Drink Preferences (*Champagne, Wine, Cocktails, Mocktails*)
  - Song Request for the DJ
  - Personal Blessings & Note
- Instant celebratory confetti shower + local storage persistence.

### 9. 🎁 Wishing Well & Honeymoon Fund
- Gentle, heartfelt registry message: *"Your presence is our greatest present..."*
- Clean direct contribution details (*Bank, Account, Sort Code, IBAN*) with one-click copy buttons.

### 10. 📞 Guest Assistance & FAQ Accordion
- Direct phone & WhatsApp chat links for Thanu, Jathu, and the concierge.
- Interactive FAQ accordions covering plus-ones, children policy, parking, and dress code.

### 11. 🎵 Dedicated Audio Engine & Floating Vinyl Player
- **Soundtrack**: Official song *"Ordinary"* by Alex Warren (`public/audio/ordinary.mp3`, 4.48 MB).
- Instant autoplay on opening with seamless fallback to unlock on any user tap.
- Floating bottom bar with rotating vinyl record, animated equalizer bars, and lyrics modal.

### 12. 🌸 Ambient Falling Rose & Gold Petals
- Gentle ambient petals floating across the screen that guests can toggle on/off.

---

## 🚀 How to Run Locally

```bash
# 1. Navigate to the project folder
cd marriage2

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev -- --port 3002

# 4. Open http://localhost:3002/ in your browser
```

---

## 🎨 Easy Customization in `src/data/weddingData.js`

All couple names, dates, venues, timeline events, photos, color palettes, and wishing well information are centrally organized in:
`marriage2/src/data/weddingData.js`
Edit that file to change any details effortlessly!
