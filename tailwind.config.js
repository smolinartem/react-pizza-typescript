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
        cart: "url('./src/assets/cart.svg')",
      },
      backgroundSize: {
        32: '32px 32px',
      },
      boxShadow: {
        container: '0px 2px 10px 1px rgba(34, 60, 80, 0.2)',
      },
    },
  },
  plugins: ["require('@tailwindcss/aspect-ratio')"],
}
