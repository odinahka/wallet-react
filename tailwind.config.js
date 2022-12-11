/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    debugScreens:{
      position: ['top', 'left']
    },
    fontFamily:{
      Poppins: ['Poppins', 'sans-serif']
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl':'4rem',
      }
    },
    extend: {
      animation:{
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      },
      colors: {
        wallet_black: '#000000',
        wallet_purple: '#3b1e62',
        wallet_blue: '#40d7c8',
        wallet_green: '#00C9B6'
      },
      backgroundImage:{
        'about1_pic': "url('/public/assets/Rectangle 12995.png')"
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%'
      }
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-debug-screens'), require('@tailwindcss/line-clamp')],
}
