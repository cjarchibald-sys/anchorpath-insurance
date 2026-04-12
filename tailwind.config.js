/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2e6da4',
        'brand-blue-mid': '#4a8bbf',
        'brand-blue-light': '#ddeef8',
        'brand-blue-pale': '#f0f7fc',
        'brand-gold': '#d4921e',
        'brand-gold-light': '#fdf3e0',
        'brand-gold-pale': '#fffbf4',
        'brand-navy': '#1e2d3d',
        'brand-muted': '#607080',
        'brand-bg': '#f8fbfd',
        'brand-border': 'rgba(46,109,164,0.13)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

