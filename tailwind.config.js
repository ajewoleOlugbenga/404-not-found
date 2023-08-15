/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mono: ['Space Mono', 'Space Mono'],
        Inconsolata: ['Inconsolata', 'Inconsolata'],
        
      },
        
      width: {
          '286': '286.829833984375px',
          '539': '539.22px',
          '589': '586px',
          '287' : '287px',

      },
      height:{
        '190': '190px',
        '447': '447.43px',
        '238' : '238px',
        '142' : '142px',
        '17' : '17px',
      }
    },
  },
  plugins: [],
}