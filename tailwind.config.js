import { nextui } from "@nextui-org/theme";
import theme from "./config/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      // 1. Referenciamos las variables CSS en fontSize
      fontSize: {
        xs: ["var(--font-xs)", { lineHeight: "var(--line-xs)" }],
        sm: ["var(--font-sm)", { lineHeight: "var(--line-sm)" }],
        base: ["var(--font-base)", { lineHeight: "var(--line-base)" }],
        lg: ["var(--font-lg)", { lineHeight: "var(--line-lg)" }],
        xl: ["var(--font-xl)", { lineHeight: "var(--line-xl)" }],
        "2xl": ["var(--font-2xl)", { lineHeight: "var(--line-2xl)" }],
        "3xl": ["var(--font-3xl)", { lineHeight: "var(--line-3xl)" }],
        "4xl": ["var(--font-4xl)", { lineHeight: "var(--line-4xl)" }],
        "5xl": ["var(--font-5xl)", { lineHeight: "var(--line-5xl)" }],
        "6xl": ["var(--font-6xl)", { lineHeight: "var(--line-6xl)" }],
        "7xl": ["var(--font-7xl)", { lineHeight: "var(--line-7xl)" }],
        "8xl": ["var(--font-8xl)", { lineHeight: "var(--line-8xl)" }],
        "9xl": ["var(--font-9xl)", { lineHeight: "var(--line-9xl)" }],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },

  plugins: [
    nextui({
      themes: theme,
    }),
    function ({ addBase }) {
      addBase({
        ":root": {
          // Font sizes (clamp)
          "--font-xs": "clamp(0.675rem, 0.5625rem + 0.45vw, 0.7875rem)",
          "--font-sm": "clamp(0.7875rem, 0.675rem + 0.45vw, 0.9rem)",
          "--font-base": "clamp(0.9rem, 0.7875rem + 0.45vw, 1.0125rem)",
          "--font-lg": "clamp(1.0125rem, 0.9rem + 0.45vw, 1.125rem)",
          "--font-xl": "clamp(1.125rem, 1.0125rem + 0.72vw, 1.2375rem)",
          "--font-2xl": "clamp(1.35rem, 1.125rem + 0.72vw, 1.575rem)",
          "--font-3xl": "clamp(1.6875rem, 1.35rem + 0.9vw, 2.025rem)",
          "--font-4xl": "clamp(2.025rem, 1.6875rem + 0.9vw, 2.475rem)",
          "--font-5xl": "clamp(2.7rem, 2.025rem + 0.9vw, 3.375rem)",
          "--font-6xl": "clamp(3.375rem, 2.7rem + 1.08vw, 4.05rem)",
          "--font-7xl": "clamp(4.05rem, 3.375rem + 1.35vw, 5.4rem)",
          "--font-8xl": "clamp(5.4rem, 4.05rem + 1.8vw, 7.2rem)",
          "--font-9xl": "clamp(7.2rem, 5.4rem + 2.7vw, 9.9rem)",

          // Line heights
          "--line-xs": "1.25",
          "--line-sm": "1.25",
          "--line-base": "1.4",
          "--line-lg": "1.4",
          "--line-xl": "1.4",
          "--line-2xl": "1.3",
          "--line-3xl": "1.2",
          "--line-4xl": "1.2",
          "--line-5xl": "1.1",
          "--line-6xl": "1.1",
          "--line-7xl": "1.1",
          "--line-8xl": "1.1",
          "--line-9xl": "1.0",
        },
      });
    },
  ],
};
