/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          danger: '#EA3D76', 
          warning: '#F6E069',
          success: '#33D685', 
          primary: '#61ADDB',
      },
      fontFamily: {
          inter: ['Inter'],
          roboto: ['roboto'],
          noto: ['Noto Serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
