/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#0A0A0A',
        customGray: '#3A3C45',
        customDarkerGray: '#2D2F36'
      },
      gridTemplateColumns: {
        'custom': '1fr 5.5fr'
      },
      fontFamily:{
        sora: ['sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}
