/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: "#30343F",
        "ghost-white": "#FAFAFF",
        periwinkle: "#E4D9FF",
        "delft-blue": "#273469",
        "space-cadet": "#1E2749",
        wenge: "#705D56",
        "cool-gray": "#9097C0",
        "powder-blue": "#A7BBEC",
        "anti-flash-white": "#EEEEEE",
        bone: "#ECE2D0",
        "ultra-violet": "#6C698D",
        timberwolf: "#D4D2D5",
        silver: "#BFAFA6",
        beaver: "#AA968A",
        "dim-gray": "#6E6A6F",
        cerulean: "#40798C",
        "midnight-green": "#104547",
      },
    },
  },
  plugins: [],
};

export default config;
