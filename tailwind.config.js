/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1E3F2B',
        forestDark: '#132A1C',
        forestDeep: '#0D1E14',
        sand: '#F1ECE4',
        sandDark: '#E4DDD2',
        cream: '#FAF8F5',
        amberBamboo: '#D97706',
        amberLight: '#F59E0B',
        charcoal: '#242423'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
