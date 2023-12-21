/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginposter': "url('./src/assets/loginposter.png')",
       
      },
      colors:{
        text:'#667085',
        maincolore:'#8048A4',
        dark:'#5C3D69',
        black:'#101828',
        gray:'#344054',
       red:'#F04438'
      },
      fontFamily: {
        yekan: ['YekanBakhFaNum', 'sans-serif'],
      },
    },
  
  },


  plugins: [],
}



