/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you have one in public that Vite processes
    "./src/**/*.{js,ts,jsx,tsx}", // All JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          300: '#fbbf24', // Example, adjust if specific shades were used
          400: '#f59e0b',
          500: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example, adjust if specific fonts were used
      },
      aspectRatio: {
        '16/9': '16 / 9',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'), // If you used aspect ratio classes like aspect-w-16 aspect-h-9
  ],
}
