/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "oswald":['Oswald', 'sans-serif']
      }
    },
    screens: {
      'xs': '380px',
      'sm': '540px',  //max width:540px
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [],
}


//const defaultTheme = require('tailwindcss/defaultTheme')

//  screens: {
//    'xs': '475px',
//    ...defaultTheme.screens,
//  },

//only add xs breakpoint and other default breakpoints not disabled