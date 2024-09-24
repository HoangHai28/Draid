/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lexend' : ['"Lexend"'],
      },
      boxShadow: {
        white: '0 4px 6px rgba(255, 255, 255, 0.5)', // Tạo một box-shadow màu trắng
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1504px",
      },
      colors: {
        'cl-green': 'var(--cl-green)',
      },
      container: {
        center:true,
      },
    },
  },
  plugins: [],
}