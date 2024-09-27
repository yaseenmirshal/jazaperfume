/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        playfair: ['var(--font-playfair_display)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        openSans: ['var(--font-open_sans)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
