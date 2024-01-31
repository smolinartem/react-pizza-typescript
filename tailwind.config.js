/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Comfortaa', 'ui-sans-serif'],
      },
      colors: {
        accent: '#0080FF',
      },
      backgroundImage: {
        burger: "url('./src/assets/button-menu.svg')",
        close: "url('./src/assets/button-close.svg')",
      },
    },
  },
  plugins: [],
}
