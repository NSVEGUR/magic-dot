module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        loadline: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        bannermove: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        loadline: 'loadline 3s linear',
      },
    },
  },
  plugins: [],
}
