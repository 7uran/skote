/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        elementsColor: '#2A3042',
        bodyColor: '#222736',
      },
      keyframes: {
        notification: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '20%': { transform: 'scale(1.1) rotate(-10deg)' },
          '40%': { transform: 'scale(1.1) rotate(10deg)' },
          '60%': { transform: 'scale(1.1) rotate(-10deg)' },
          '80%': { transform: 'scale(1.1) rotate(10deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      animation: {
        notification: 'notification 1s ease-in-out infinite',
      },
    },


  },
  plugins: [],
}