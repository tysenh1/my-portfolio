/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121528'
      },

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
          'from': { opacity: '0%', top: '70px;'},
          'to': { opacity: '100%', top: '0px'}
        },
        slideRight: {
          '0%': { left: '92px' },
          '50%': { left: '400px' },
          '75%': { left: '375px' },
          '100%': { left: '387px' }
        },
        slideRightMore: {
          '0%': { left: '128px' },
          '50%': { left: '436px' },
          '75%': { left: '411px' },
          '100%': { left: '423px' }
        },
        slideRightEvenLess: {
          '0%': { left: '62px' },
          '50%': { left: '370px' },
          '75%': { left: '345px' },
          '100%': { left: '357px' }
        }
      },

      animation: {
        fadedown: 'fadedown 0.75s ease-out',
        fadeInAndUp: 'fadeInAndUp 0.5s ease-out 0.25s',
        slideRight: 'slideRight 0.75s ease-in-out 0.5s',
        slideRightMore: 'slideRightMore 0.75s ease-in-out 0.6s',
        slideRightLate: 'slideRight 0.75s ease-in-out 0.7s',
        slideRightLateLess: 'slideRightEvenLess 0.75s ease-in-out 0.7s'
      },


    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
    },
  },
  plugins: [],
}