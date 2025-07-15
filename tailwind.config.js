/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#F5631A',
        'orange2': '#FF8D1C',
        'blue': '#0a0f2c',
        'Peach': '#FFC796'
      }
    },
  },
  plugins: [],
}