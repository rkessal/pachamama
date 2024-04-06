module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'the-seasons, var(--libre-baskerville), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      seasons: "the-seasons, Georgia",
      grotesk: "neue-haas-grotesk-display",
      "grotesk-text": "neue-haas-grotesk-text",
    },
    extend: {
      colors: {
        bone: "#E5D7C2",
        tan: "#C7A87B",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
