/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#4A1525',
          deep: '#2A0B14',
          dark: '#1B050B',
          light: '#682337',
          soft: '#823147',
        },
        wine: '#380E1C',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6B8',
          metallic: '#E5C378',
          dark: '#997F24',
          bronze: '#A87932',
          warm: '#C5A059',
          glow: 'rgba(212, 175, 55, 0.35)',
        },
        ivory: {
          DEFAULT: '#FDFBF7',
          warm: '#F9F5EE',
          soft: '#F4EFEA',
          dark: '#EAE3D8',
        },
        pearl: '#F8F4EE',
        champagne: '#F7E7CE',
        rosemauve: '#B76E79',
        sagegreen: '#7E8D77',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        greatvibes: ['Great Vibes', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        heading: ['Cormorant Garamond', 'Cinzel', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.5)',
        'envelope': '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        'seal': '0 10px 25px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.5), inset 0 -3px 6px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(4deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
