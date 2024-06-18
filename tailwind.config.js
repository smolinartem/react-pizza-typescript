import aspectRatioPlugin from '@tailwindcss/aspect-ratio'
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
        popup: 'rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        burger: "url('./src/assets/button-menu.svg')",
        close: "url('./src/assets/button-close.svg')",
        cart: "url('./src/assets/cart.svg')",
        arrow: "url('./src/assets/button-left.svg')",
        trash: "url('./src/assets/button-trash.svg')",
        plus: "url('./src/assets/button-plus.svg')",
        minus: "url('./src/assets/button-minus.svg')",
      },
      backgroundSize: {
        32: '32px 32px',
      },
      boxShadow: {
        container: '0px 2px 10px 1px rgba(34, 60, 80, 0.2)',
      },
    },
  },
  plugins: [aspectRatioPlugin],
}
