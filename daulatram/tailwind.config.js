module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto_Sans: ['Noto Sans', "sans-serif"],
        Noto_Serif: ['Noto Serif', "serif"]
      },
      'animation': {
        'text': 'text 5s ease infinite',
        "run": 'run 15s ease-in infinite'
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'run': {
          '0%': {
            'transform': "translateY(0%)"
          },
          // '50%': {
            //   'top': "50%"
            // },
            '100%': {
            'transform': "translateY(-1000%)",
          },
        }
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}