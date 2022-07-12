/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffc600',
        secondary: '#07294d',
        gray: '#c6c6c6',
        coursesBg: '#edf0f2',
        spanColor: '#8a8a8a',
        borderBottomColor: '#e0e0e0',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
    screens: {
      // min width
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
};
