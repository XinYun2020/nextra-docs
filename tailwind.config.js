/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // class based darkMode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "theme.config.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex Mono", "monospace"],
        fira: ["Fira Code", "monospace"],
      },
      fontStyle: {
        plex: ["italic"],
      },
    },
  },
  plugins: [],
};
