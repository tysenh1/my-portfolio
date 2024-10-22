/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      spacing: {
        '34': '8.5rem',
        'supertall': '90rem',
        'portfolio-header': '94px',
        '430px': '430px',
        '207px': '207px',
        'button-width': '350px',
        'foreground-button-height': '85px',
        'background-button-height': '64px'

      },
      keyframes: {
        fadedown: {
          'from': { top: '-96px' },
          'to': { top: '0px' },
        },
        fadeInAndUp: {
          'from': { opacity: '0%', top: '40px;'},
          'to': { opacity: '100%', top: '0px'}
        }
      },

      animation: {
        fadedown: 'fadedown 0.75s ease-out',
        fadeInAndUp: 'fadeInAndUp 0.75s ease-out 1s'
      },


    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
    },
  },
  plugins: [],
}