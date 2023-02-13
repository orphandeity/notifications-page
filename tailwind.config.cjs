/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '_red': '#f65351',
        '_blue': '#0a317b',
        '_very-light-grayish-blue': '#f7fafd',
        '_light-grayish-blue-1': '#e5effa',
        '_light-grayish-blue-2': '#dde7ee',
        '_graysish-blue': '#939dae',
        '_dark-grayish-blue': '#5e6778',
        '_very-dark-blue': '#1c202b'
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
}
