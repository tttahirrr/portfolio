/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brutal': ['Impact', 'Arial Black', 'sans-serif'],
        'mono': ['Monaco', 'Courier New', 'monospace'],
        'system': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'brutal': {
          'black': '#000000',
          'white': '#FFFFFF',
          'red': '#FF0000',
          'green': '#00FF00',
          'orange': '#FF6B35',
          'gray': '#1A1A1A',
          'light': '#F7F7F7',
        }
      },
      fontSize: {
        'brutal-xl': ['4rem', { lineHeight: '1', fontWeight: '900' }],
        'brutal-lg': ['3rem', { lineHeight: '1.1', fontWeight: '900' }],
        'brutal-md': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'glitch': 'glitch 2s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
} 