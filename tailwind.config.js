/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        md: '20px',
        lg: '24px',
        xl: '32px',
        '2xl': '36px',
        '3xl': '80px',
        '4xl': '96px',
      },
      colors: {
        primary: '#0089DC',
        secondary: '#F5D70E',
        tertiary: '#5D5AFE',
        light: '#F2F2F2',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'Satoshi', 'sans-serif'],
      },
      screens: {
        waves: '500px',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]
          const cssVariable = colorKey === 'DEFAULT' ? `--color${colorGroup}` : `--color${colorGroup}-${colorKey}`

          const newVars = typeof value === 'string' ? { [cssVariable]: value } : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
  darkMode: ['class'],
}
