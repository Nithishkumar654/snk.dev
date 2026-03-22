/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb' },
        accent:  { 400: '#c084fc', 500: '#a855f7', 600: '#9333ea' },
        dark:    { 900: '#0f0f0f', 800: '#1a1a1a', 700: '#2a2a2a' },
      },
      fontFamily: {
        sans:      ['Inter', 'system-ui', 'sans-serif'],
        display:   ['Poppins', 'system-ui', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair:  ['"Playfair Display"', 'Georgia', 'serif'],
        orbitron:  ['Orbitron', 'sans-serif'],
        josefin:   ['"Josefin Sans"', 'sans-serif'],
        raleway:   ['Raleway', 'sans-serif'],
      },
      animation: {
        gradient:      'gradient 15s ease infinite',
        float:         'float 6s ease-in-out infinite',
        'bubble-rise': 'bubbleRise 7s linear infinite',
        'leaf-fall':   'leafFall 8s ease-in-out infinite',
        'star-twinkle':'starTwinkle 3s ease-in-out infinite',
        'corona-pulse':'coronaPulse 3s ease-in-out infinite',
        'scan-line':   'scanLine 3s linear infinite',
        'orbit':       'orbit 12s linear infinite',
      },
      keyframes: {
        gradient:     { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float:        { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        bubbleRise:   { '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' }, '10%': { opacity: '.8' }, '90%': { opacity: '.4' }, '100%': { transform: 'translateY(-400px) translateX(15px)', opacity: '0' } },
        leafFall:     { '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' }, '10%': { opacity: '.6' }, '90%': { opacity: '.3' }, '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' } },
        starTwinkle:  { '0%,100%': { opacity: '.2', transform: 'scale(1)' }, '50%': { opacity: '1', transform: 'scale(1.4)' } },
        coronaPulse:  { '0%,100%': { opacity: '.3', transform: 'scaleX(1)' }, '50%': { opacity: '.7', transform: 'scaleX(1.06)' } },
        scanLine:     { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } },
        orbit:        { '0%': { transform: 'rotate(0deg) translateX(var(--r,80px)) rotate(0deg)' }, '100%': { transform: 'rotate(360deg) translateX(var(--r,80px)) rotate(-360deg)' } },
      },
    },
  },
  plugins: [],
}
