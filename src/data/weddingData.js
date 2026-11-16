/**
 * THANU & JATHU - VIRAL LUXURY DIGITAL WEDDING INVITATION CONFIGURATION
 * 
 * Inspired directly by the viral Webgency Wedding Envelope (@webgency_invitations)
 * Date: 17 March 2025
 * Venue: The Barn Tea Estate
 * Soundtrack: Alex Warren - "Ordinary"
 */

export const WEDDING_DATA = {
  couple: {
    groom: "Jathushan",
    groomShort: "Jathu",
    bride: "Thanuja",
    brideShort: "Thanu",
    monogram: "T & J",
    headline: "You’re Invited!",
    title: "Thanu & Jathu",
    subtitle: "Together with our families",
    tagline: "Let’s celebrate the best day of our life together!",
    invitationPlea: "We are inviting you to our reception!",
    weddingDateShort: "17.03.2025",
    weddingDateFull: "Monday, 17 March 2025",
    venueName: "The Barn Tea Estate",
    venueCity: "Cotswolds, United Kingdom",
    hashtag: "#ThanuAndJathu",
  },

  welcomeStory: {
    badge: "SAVE THE DATE",
    title: "A Celebration of Love & Destiny",
    salutation: "Dear friends and family!",
    p1: "We are thrilled to announce a special event happening this spring — our wedding reception!",
    p2: "This day wouldn't be complete without our closest loved ones, so we warmly invite you to join us and celebrate this joyful occasion together.",
    p3: "We can't wait to share this unforgettable and memorable moment with you!",
    buttonText: "Discover the Details",
  },

  countdown: {
    targetDate: "2025-03-17T15:30:00",
    label: "The celebration begins in",
  },

  timeline: [
    {
      id: "ceremony",
      time: "3:30 PM",
      title: "Wedding Ceremony",
      location: "The Glasshouse Conservatory",
      description: "Our sacred vows, exchange of rings, and holy blessings in the presence of loved ones.",
      icon: "HeartHandshake",
      tag: "Ceremony",
      color: "from-amber-600/20 to-yellow-600/10",
      accent: "#D4AF37",
    },
    {
      id: "cocktails",
      time: "5:00 PM",
      title: "Cocktail Hour",
      location: "The Manor South Lawn",
      description: "Handcrafted signature cocktails, champagne flutes, artisanal canapés, and live acoustic music.",
      icon: "GlassWater",
      tag: "Drinks & Canapés",
      color: "from-rose-600/20 to-pink-600/10",
      accent: "#E11D48",
    },
    {
      id: "dinner",
      time: "7:00 PM",
      title: "Royal Banquet Dinner",
      location: "The Grand Oak Barn",
      description: "A lavish multi-course feast featuring fusion cuisine, fine wines, and heartfelt family toasts.",
      icon: "UtensilsCrossed",
      tag: "Feast",
      color: "from-emerald-600/20 to-teal-600/10",
      accent: "#10B981",
    },
    {
      id: "first-dance",
      time: "8:00 PM",
      title: "First Dance",
      location: "The Starlit Ballroom",
      description: "Under golden chandeliers and a shower of starlight, our first dance as husband & wife.",
      icon: "Sparkles",
      tag: "Romantic Moment",
      color: "from-purple-600/20 to-indigo-600/10",
      accent: "#8B5CF6",
    },
    {
      id: "party",
      time: "8:15 PM",
      title: "Party & Live DJ",
      location: "The Grand Ballroom & Terrace",
      description: "Live dhol percussionists, international DJ tracks, open bar, and unforgettable dancing until late.",
      icon: "Music",
      tag: "Dance Floor",
      color: "from-blue-600/20 to-cyan-600/10",
      accent: "#3B82F6",
    },
    {
      id: "closing",
      time: "1:45 AM",
      title: "Grand Sparkler Farewell",
      location: "The Fountain Courtyard",
      description: "A magical pathway of sparklers lighting the night sky as we bid farewell with joyful hearts.",
      icon: "Flame",
      tag: "Send-Off",
      color: "from-amber-700/20 to-orange-600/10",
      accent: "#F59E0B",
    },
  ],

  dressCode: {
    title: "Dress Code & Style Inspiration",
    subtitle: "We would be very happy if your outfit reflects the style of our celebration!",
    ladies: {
      title: "For Ladies",
      options: ["Anarkali Suits", "Lehengas & Sarees", "Evening Gowns", "Festive Cocktail Dresses"],
      description: "Graceful silhouettes, rich jewel tones, metallic embroideries, and flowing fabrics.",
    },
    men: {
      title: "For Gentlemen",
      options: ["Formal Suits & Tuxedos", "Sherwanis & Bandhgalas", "Kurta Pajama with Nehru Jacket", "Smart Festive Attire"],
      description: "Sharp tailoring, deep royal hues, pocket squares, and celebratory elegance.",
    },
    note: "All colours and prints are warmly allowed! Bring your most festive smile.",
    palette: [
      { name: "Burgundy Velvet", hex: "#4A1525" },
      { name: "Champagne Gold", hex: "#D4AF37" },
      { name: "Emerald Pine", hex: "#1B4332" },
      { name: "Rose Mauve", hex: "#B76E79" },
      { name: "Midnight Navy", hex: "#0B192C" },
      { name: "Ivory Pearl", hex: "#FDFBF7" },
    ]
  },

  venue: {
    name: "The Barn Tea Estate",
    fullAddress: "The Barn Tea Estate, High Street, Cotswolds, Gloucestershire, GL54 2HN, United Kingdom",
    mapQuery: "The+Barn+Tea+Cotswolds",
    googleMapsUrl: "https://maps.google.com/?q=The+Barn+Tea+Cotswolds",
    description: "Nestled amidst the rolling hills of the Cotswolds, The Barn Tea Estate combines rustic English heritage with timeless architectural luxury.",
    parking: "Complimentary valet parking available on site for all wedding guests.",
    shuttle: "Luxury coach service running every 30 minutes from Cheltenham Spa Station and local boutique hotels.",
    accommodations: [
      { name: "The Cotswolds Manor Hotel", distance: "5 mins away", link: "#" },
      { name: "The Old Mill Boutique Inn", distance: "8 mins away", link: "#" },
      { name: "The Rose & Crown Lodge", distance: "12 mins away", link: "#" },
    ]
  },

  gallery: [
    {
      id: 1,
      title: "The Beginning of Forever",
      caption: "Golden hour romance in the Cotswolds garden",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      fallback: "./images/couple-golden.svg",
    },
    {
      id: 2,
      title: "The Glasshouse Conservatory",
      caption: "Where our sacred ceremony takes place",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      fallback: "./images/palace-heritage.svg",
    },
    {
      id: 3,
      title: "Wedding Florals & Bouquets",
      caption: "Delicate cream garden roses, eucalyptus, and gold accents",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
      fallback: "./images/wedding-flowers.svg",
    },
    {
      id: 4,
      title: "The Grand Banquet Table",
      caption: "Candlelit tables draped in champagne linens",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      fallback: "./images/table-setting.svg",
    },
    {
      id: 5,
      title: "Celebration & Sparklers",
      caption: "Joyous laughter, music, and starlit memories",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      fallback: "./images/pool-celebration.svg",
    },
    {
      id: 6,
      title: "Radiant Smiles",
      caption: "Surrounded by our dearest friends and families",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      fallback: "./images/mehendi-art.svg",
    },
  ],

  wishingWell: {
    title: "Wishing Well & Registry",
    subtitle: "Your Presence is Our Greatest Present",
    message: "Your love, laughter, and presence at our wedding is all we truly need. However, if you wish to honor us with a gift, a contribution toward our honeymoon and beginning our new home together would be warmly appreciated with all our love.",
    bankDetails: {
      accountName: "Thanuja & Jathushan Wedding Fund",
      bankName: "Barclays Bank UK",
      sortCode: "20-45-77",
      accountNumber: "83920194",
      iban: "GB29 BARC 2045 7783 9201 94",
    }
  },

  contacts: {
    title: "Organizational Aspects",
    subtitle: "If you have any questions, you can always contact Thanu and Jathu",
    phones: [
      { name: "Thanuja (Bride)", number: "+44 7662 993881", whatsapp: "447662993881" },
      { name: "Jathushan (Groom)", number: "+31 6584 621133", whatsapp: "316584621133" },
      { name: "Wedding Planner & Concierge", number: "+44 7700 900123", whatsapp: "447700900123" },
    ]
  },

  soundtrack: {
    title: "Ordinary",
    artist: "Alex Warren",
    audioSrc: "./audio/ordinary.mp3",
    tagline: "Official Viral Wedding Song",
    lyricsExcerpt: "I don't wanna close my eyes tonight... 'cause love with you is extraordinary.",
  },

  faqs: [
    {
      q: "Can I bring a Plus-One?",
      a: "Due to venue seating capacity, plus-ones are only reserved for guests explicitly named on the RSVP confirmation. Please check the guest count field when filling your RSVP."
    },
    {
      q: "Are children welcome?",
      a: "While we adore your little ones, our evening reception will be an adults-only celebration so everyone can relax and dance the night away."
    },
    {
      q: "Is there on-site parking?",
      a: "Yes! The Barn Tea Estate features spacious complimentary valet and self-parking for all guests throughout the day and evening."
    },
    {
      q: "What is the RSVP deadline?",
      a: "Please kindly confirm your attendance by 15 February 2025 so we can finalize our banquet arrangements with the estate."
    }
  ]
};
