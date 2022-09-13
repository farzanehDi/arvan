/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      silver: {
        DEFAULT: '#ECEEEF',
      },
      blue: {
        DEFAULT: '#1c7cd5',
        light:'#56c0e0',
      },
      gray: {
        DEFAULT:'#707070',
        light:'#dddddd',
        dark:'#373a3c',
      },
      white:{
        DEFAULT:'#FFFFFF'
      },
      red:{
        DEFAULT:'#cb2e25',
        light:'#e7cecd',
      },
      green:{
        DEFAULT:'#5CB85C',
        light:'#E2EED8'
      },
      
      black:{
        DEFAULT:'#000000'
      }

    },
    borderRadius: {
      DEFAULT: '4px',
   }
  },
  plugins: [],
}
