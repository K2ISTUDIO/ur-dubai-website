const path = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, './components/**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, './app/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EE',
        'cream-dark': '#F0EAE0',
        gold: '#C4973F',
        'gold-light': '#EDD89A',
        'gold-pale': '#F7F0DC',
        ink: '#0C0A07',
        'ink-soft': '#1E1B16',
        muted: '#7A726B',
        'muted-light': '#B0A89F',
        border: '#DDD5C8',
        dark: '#0D0B08',
        'dark-2': '#161310',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['clamp(3.2rem, 7.5vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem, 3vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.3rem, 2.5vw, 2rem)', { lineHeight: '1.18', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        label: '0.14em',
        nav: '0.06em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
      },
    },
  },
  plugins: [],
}
