import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "2xl": "1400px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "move-spin": {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(-32%)" },
          "62%": { transform: "translateX(-32%)" },

          "100%": { transform: "translateX(0)" },
        },
        "move-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-10%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "move-spin": "move-spin 12s  ease-in-out  infinite ",
        "move-left": "move-left 1s  ease-out 1 forwards ",
      },
      variants: {
        fill: ["hover", "focus"],
        stroke: ["hover", "focus"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
