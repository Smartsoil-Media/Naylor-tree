/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fbf7f0',
          100: '#f5ede0',
          200: '#ece0c6',
          300: '#dcc89a',
          400: '#c9aa6f',
        },
        sepia: {
          50: '#f9f4ea',
          100: '#f0e6d2',
          200: '#e0cda6',
          300: '#c9aa6f',
          400: '#a98551',
          500: '#8a6a3f',
          600: '#6e5333',
          700: '#544028',
          800: '#3a2d1c',
          900: '#241b10',
        },
        forest: {
          500: '#3f5a44',
          600: '#324a37',
          700: '#26392b',
          800: '#1d2c20',
        },
        navy: {
          500: '#2b3a5a',
          600: '#22304b',
          700: '#1a253b',
          800: '#131a2b',
        },
        ochre: {
          300: '#e9b876',
          400: '#dc9f50',
          500: '#c98438',
          600: '#a8682a',
        },
        coral: {
          400: '#e08a6e',
          500: '#cf6e51',
          600: '#b5563b',
        },
        branch: {
          naylor: '#a98551',
          hughes: '#3f5a44',
          newman: '#2b3a5a',
          mackay: '#8a4a5a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        album: '0 4px 14px -4px rgba(60, 40, 20, 0.25), 0 2px 4px -2px rgba(60, 40, 20, 0.15)',
        card: '0 2px 8px -2px rgba(60, 40, 20, 0.15)',
      },
    },
  },
  plugins: [],
}
