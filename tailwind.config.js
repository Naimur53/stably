/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "rgba(1, 78, 255, 1)",
        "light-white": "rgba(255, 255, 255, 0.75)",
        "half-white": "rgba(255, 255, 255, 0.5)",

        'main-green': '#30B68D',
        'active-green': 'rgba(18, 183, 87, 1)',
        'dark-blue': 'rgba(17, 16, 82, 1)',
      },
      spacing: {
        sm: '8px',
        md: '80px',
        lg: '130px',
        xl: '146px',
      },
      fontSize: {

        'xs': ['16px', { lineHeight: '20px', }],

        'ls': ['18px', { lineHeight: '30px', }],

        'sm': ['20px', { lineHeight: '24px', }],
        'normal': ['24px', { lineHeight: '32px', }],

        'base': ['36px', { lineHeight: '44px', }],
        'lg': ['44px', { lineHeight: '52px', }],

        'xl': ['56px', { lineHeight: '64px', }],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0px',
        '2xl': '0px',
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1170px',
        '2xl': '1170px',
      }
    },
  },
  plugins: [],
}