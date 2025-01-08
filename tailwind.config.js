/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3333',
          dark: '#CC0000',
        },
        secondary: {
          DEFAULT: '#2A2A72',
        },
        dark: {
          DEFAULT: '#111111',
          light: '#1A1A1A',
          lighter: '#222222',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          dark: '#FF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
