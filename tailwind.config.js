/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        110: '28rem'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat']
    }
  },
  plugins: []
}
