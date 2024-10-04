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
        accent: '#D92121',
      },
      boxShadow: {
        one: '0px 1px 12px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [aspectRatioPlugin],
}
