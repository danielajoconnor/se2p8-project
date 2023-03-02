module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Gloock', 'serif'],
    },
      colors: {
        nature1: "hsl(46, 15%, 83%)",
        nature2: "hsl(82, 20%, 62%)",
        nature3: "hsl(119, 19%, 42%)",
        nature4: "hsl(131, 22%, 29%)",
        nature5: "hsl(150, 20%, 25%)",
      },

    },
  },
  plugins: [],
}