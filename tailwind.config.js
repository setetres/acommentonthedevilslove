module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: '"IBM Plex Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      serif:
        '"IBM Plex Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
