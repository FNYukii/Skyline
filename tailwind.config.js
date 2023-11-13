/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './posts/**/*.md',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
