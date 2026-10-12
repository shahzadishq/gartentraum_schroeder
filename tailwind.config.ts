import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette extracted from the Gartentraum Schröder visual identity:
        // deep garden greens, warm sand/beige, and natural stone earth tones.
        forest: {
          50: '#f1f5f1',
          100: '#dde8de',
          200: '#bcd0be',
          300: '#90b094',
          400: '#628b68',
          500: '#446b4b',
          600: '#33543a',
          700: '#2a4430',
          800: '#233728',
          900: '#1d2e22',
          950: '#0f1a13',
        },
        sand: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ece4d2',
          300: '#e0d2b4',
          400: '#d0bb90',
          500: '#c0a473',
          600: '#a88a5c',
          700: '#8a6f4c',
          800: '#715b42',
          900: '#5d4c39',
        },
        stone: {
          DEFAULT: '#8a8578',
          light: '#b7b2a6',
          dark: '#5f5b50',
        },
        // Green scale sampled from the Gartentraum Schröder logo tree.
        // Anchors: 400 #89C541 (lime), 600 #5F8339 (main), 700 #4D6A34,
        // 800 #445729 (deep) — all taken directly from the logo.
        brand: {
          50: '#f3f8e8',
          100: '#e6f1cc',
          200: '#cbe29a',
          300: '#a7d24e',
          400: '#89c541',
          500: '#6f9b3b',
          600: '#5f8339',
          700: '#4d6a34',
          800: '#445729',
          900: '#33421f',
        },
        // Earthy browns from the logo wordmark / tree trunk.
        clay: '#885f41',
        bark: '#5e3c1e',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(29, 46, 34, 0.18)',
        card: '0 20px 50px -20px rgba(29, 46, 34, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
