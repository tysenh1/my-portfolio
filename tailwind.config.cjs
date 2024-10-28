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
        fadeInAndUpTop: {
          'from': { opacity: '0%', top: '70px;'},
          'to': { opacity: '100%', top: '0px'}
        },
        fadeInAndUpMargin: {
          'from': { opacity: '0%', marginTop: '70px' },
          'to': { opacity: '100%', marginTop: '0px' }
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
        },
        mainContentInfo: {
          '0%': { top: '0px', right: '0px' },
          '25%': { top: '0px', right: '640px' },
          '50%': { top: '392px', right: '640px' },
          '75%': { top: '392px', right: '0px' },
          '100%': { top: '0px', right: '0px' }
        },
        mainContentInfo1: {
          'from': { top: '0px', right: '0px' },
          'to': { top: '0px', right: '640px' }
        },
        mainContentInfo2: {
          'from': { top: '0px', right: '640px' },
          'to': { top: '392px', right: '640px' }
        },
        mainContentInfo3: {
          'from': { top: '392px', right: '640px' },
          'to': { top: '392px', right: '0px' }
        },
        mainContentInfo4: {
          'from': { top: '392px', right: '0px' },
          'to': { top: '0px', right: '0px' }
        }
      },

      animation: {
        fadeInAndUpTop: 'fadeInAndUpTop 0.5s ease-out 0.25s forwards',
        fadeInAndUpDelay: 'fadeInAndUp 0.75s ease-out 1.25s forwards',
        slideRight: 'slideRight 0.75s ease-in-out 0.5s forwards',
        slideRightMore: 'slideRightMore 0.75s ease-in-out 0.6s forwards',
        slideRightLate: 'slideRight 0.75s ease-in-out 0.7s forwards',
        slideRightLateLess: 'slideRightEvenLess 0.75s ease-in-out 0.7s forwards',
        mainContentInfo: 'mainContentInfo 6s ease infinite',
        mainContentInfo1: 'mainContentInfo1 0.5s ease infinite forwards',
        mainContentInfo2: 'mainContentInfo2 0.5s ease infinite forwards',
        mainContentInfo3: 'mainContentInfo3 0.5s ease infinite forwards',
        mainContentInfo4: 'mainContentInfo4 0.5s ease infinite forwards'
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        robotoMono: ['"Roboto Mono"', 'sans-serif']
      },

      fontSize: {
        '4.5xl': ['2.6rem', '2.75rem']
      },


    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
    },
  },
  plugins: [
    require('@lostisworld/tailwind-mask'),
  ],
}