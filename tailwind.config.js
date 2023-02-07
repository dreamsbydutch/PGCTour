const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '360px',
      'xs': '410px',
      'sm': '500px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {
      boxShadow: {
        inv: '0 1px 10px #161616',
        default: '0 3px 10px #787878',
        btn: 'inset 0.2rem -0.6rem 0.2rem -0.15rem #a1a1a15a',
      },
      zIndex: {
        '-1': '-1',
      },
      textShadow: {
        eng: 'rgba(245,245,245,0.5) 3px 5px 1px',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontSize: {
        '3xs': ['0.5rem', '0.75rem'],
        '2xs': ['0.625rem', '1rem'],
      },
      fontFamily: {
        yellowtail: 'Yellowtail',
        varela: 'Varela Round',
        barlow: 'Barlow Condensed',
      },
      translate: {
        navbarActive: '-8px',
        navbarActiveLg: '-4px',
      },
      keyframes: {
        btnClick: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8)" }
        }
      },
      animation: {
        btnClick: "btnClick 200ms ease-in-out"
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}