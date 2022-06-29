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
        "run": 'run 20s ease infinite'
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
            'transform': "translateY(1000%)",
            "opacity": '0',
            "visibility": "hidden"
          },
          "5%": {
            "transform": "translateY(900%)",
            "opacity": "1",
            "visibility": "visible"
          },
          // "14.1111111111%, 22.2222222222%": {
          //   "transform": "translateY(0) ",
          //   "opacity": "1",
          //   "visibility": "visible",
          // },
          // "25.2222222222%, 33.3333333333%": {
          //   "transform": "translateY(-100%) ",
          //   "opacity": "1",
          //   "visibility": "visible"
          // },
          "100%": {
            "transform": "translateY(0%) ",
            'opacity': '1',
            'visibility': 'visible'
          },
          // '100%': {
          //   'transform': "translateY(-101%) ",
          //   "opacity": '0',
          //   "visibility": "hidden"
          // },
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