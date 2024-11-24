/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        accent: 'var(--accent-color)',
        secondary: 'var(--secondary-background)',
        tertiary: 'var(--tertiary-background)',
      }
    },
  },
  plugins: [],
}

