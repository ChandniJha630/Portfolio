/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1080px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      
      colors:{
        myyellow:"#FFF200",
        mywhite:"F5F5F5",
        lightBlue:"#98EECC",
        darkBlue:"#11009E",
        deepCoral:"#FF6666",
       
      },
    },
  },
  plugins: [],
}

