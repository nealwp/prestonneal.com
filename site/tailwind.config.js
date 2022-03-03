module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#0C0716',
      'secondary': '#D3EAED',
      'accent': '#1D8691',
      'confirm': '#00A984',
      'cancel': '#8D4859',
      'disabled': "#BCB8C7"

    },
    fontFamily: {
      main: ['Crete Round', 'serif'],
      alt: ['Genos', 'serif'],
      serif: ['Baloo Bhaijaan 2', 'serif'],
      sans: ['Genos', 'sans-serif'],
      thin: ['Inconsolata', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}
