import aspectRatioPlugin from '@tailwindcss/aspect-ratio'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
        },
      },
      fontFamily: {
        body: ['Comfortaa', 'ui-sans-serif'],
      },
      colors: {
        accent: '#0080FF',
      },
      backgroundImage: {
        burger: "url('./src/assets/button-menu.svg')",
        close: "url('./src/assets/button-close.svg')",
        cart: "url('./src/assets/button-cart.svg')",
        arrow: "url('./src/assets/button-left.svg')",
        trash: "url('./src/assets/button-trash.svg')",
        plus: "url('./src/assets/button-plus.svg')",
        minus: "url('./src/assets/button-minus.svg')",
      },
      boxShadow: {
        one: '0px 1px 12px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [aspectRatioPlugin],
}
