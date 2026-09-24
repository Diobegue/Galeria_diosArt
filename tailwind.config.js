/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090A", // preto profundo, base do fundo
          900: "#0D1210",
          800: "#141C19",
        },
        moss: {
          950: "#0E1F17",
          900: "#12291E",
          700: "#1E4A34",
          500: "#2E7D53",
          400: "#4CA476",
          300: "#7FC39D",
        },
        linen: {
          100: "#EEF1EC",
          300: "#C9D2C9",
          500: "#8FA097",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out forwards",
        riseIn: "riseIn 0.32s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
