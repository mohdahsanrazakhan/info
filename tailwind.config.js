/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      // colors: {
      //   primaryDark: {
      //     background: '#1a202c',
      //     text: '#f7fafc',
      //     accent: '#4a5568',
      //   },
      //   primaryLight: {
      //     background: '#ffffff',
      //     text: '#2d3748',
      //     accent: '#a0aec0',
      //   }
      // }
    },
  },
  plugins: [],
}

