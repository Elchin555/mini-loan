/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#E3D2FF',
        'secondary-bg': '#FBFBF9',
        'secondary-bg-dark': '#1F1B34',
        'primary-text': '#21093A',
        'primary-btn': '#AA93FF',
        'btn-enabled': '#AA93FF',
        'btn-hovered': '#BBA8FF',
        'btn-focused': '#BBA8FF',
        'btn-pressed': '#9F85FF',
        'btn-disabled': '#DEDEDE',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active', 'disabled'],
    },
  },
  plugins: [],
}

