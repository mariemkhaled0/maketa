/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#FFCC04",
      },
      fontFamily: {
        giloryRegular: ["var(--font-giloryRegular)"],
        gilroySemiBold: ["var(--font-gilroySemiBold)"],
        giloryBold: ["var(--font-giloryBold)"],
        Alessana: ["var(--font-Alessana)"],
        bebasneue: ["var(--font-bebasneue)"],
        gilroyMedium: ["var(--font-gilroyMedium)"],
        Rockybilly: ["var(--font-Rockybilly)"],
      },
      screens: {
        xxs: { min: "310px", max: "390px" },
      },
    },
  },
  plugins: [],
};
