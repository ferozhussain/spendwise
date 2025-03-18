/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4FD1C5',
          DEFAULT: '#38B2AC',
          dark: '#319795'
        },
        secondary: {
          light: '#63B3ED',
          DEFAULT: '#4299E1',
          dark: '#3182CE'
        },
        gradient: {
          start: '#4299E1',
          middle: '#4FD1C5',
          end: '#68D391'
        }
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #4299E1 0%, #4FD1C5 50%, #68D391 100%)'
      }
    },
  },
  plugins: [],
};