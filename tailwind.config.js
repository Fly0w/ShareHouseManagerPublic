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
    },
    keyframes: {
      appear: {
        '0%, 50%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      disappear: {
        '0%, 50%': { opacity: '1' },
        '100%': { opacity: '0' }
      },
      slideIn: {
        '0%': {
          transform: 'scale(0.5)'
        },
        '100%': {
          transform: 'scale(100)'
        }
      },
      slideOut: {
        '0%': {
          transform: 'scale(100)'
        },
        '100%': {
          transform: 'scale(0.5)'
        }
      }
    },
    animation: {
      appear: 'appear 0.8s ease-in',
      disappear: 'disappear 0.8s ease-in',
      slideIn: 'slideIn 1s ease-in',
      slideOut: 'slideOut 1s ease-in'
    }
  },
  plugins: []
}
