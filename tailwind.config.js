/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#1D3944",
        "light-white": "rgba(255, 255, 255, 0.75)",
        "half-white": "rgba(255, 255, 255, 0.5)",
        "main-pink": "#8801FF",
        'light-gray': 'rgba(29, 57, 68, 0.3)',
        'active-green': 'rgba(18, 183, 87, 1)',
        'dark-blue': 'rgba(17, 16, 82, 1)',
      },
      spacing: {
        sm: '8px',
        md: '60px',
        lg: '80px',
        xl: '120px',
      },
      fontSize: {

        'xxs': ['14px', { lineHeight: '24px', }],
        'xs': ['16px', { lineHeight: '26px', }],

        'ls': ['19px', { lineHeight: '23px', }],

        'sm': ['20px', { lineHeight: '27px', }],
        'normal': ['24px', { lineHeight: '43.5px', }],

        'base': ['36px', { lineHeight: '44px', }],
        'lg': ['38px', { lineHeight: '43.5px', }],

        'xl': ['96px', { lineHeight: '105px', }],
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
        'xl': '1080px',
        '2xl': '1080px',
      }
    },
  },
  plugins: [],
}