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
        title: ['DelaGothicOne'],
      },
      colors: {
        accent: '#D92121',
      },
      boxShadow: {
        one: '0px 1px 12px 1px rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        'order-card': '96px auto',
        'order-card-sm': '96px auto 248px',
        'order-card-md': '96px auto 296px',
      },
    },
  },
  plugins: [aspectRatioPlugin],
}
