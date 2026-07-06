import type { Config } from "tailwindcss";

// Design tokens for HealBKK — a warm, calm, lifestyle-wellness palette.
// Chosen specifically for a mood-based healing directory (not clinical):
// cream paper background, deep sage as the primary "grounding" color,
// muted clay as a rare warm accent, and dusty blue for calm/quiet moods.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F1E7", // warm cream background
        ink: "#2B2A24", // near-black text with warmth
        sage: {
          50: "#EFF3EC",
          100: "#DCE6D8",
          200: "#B9CDB2",
          300: "#93B187",
          400: "#6E9463",
          500: "#4F7548", // primary brand green
          600: "#3E5D39",
          700: "#31492D",
          800: "#253823",
          900: "#1B2919",
        },
        clay: {
          100: "#F3DFD3",
          300: "#E3B49B",
          500: "#C97B5C", // rare warm accent — used sparingly
          700: "#A15A3E",
        },
        dusk: {
          100: "#E4EBEF",
          300: "#B7CAD4",
          500: "#7C9CAB", // muted blue for calm/quiet moods
          700: "#557383",
        },
        cream: {
          100: "#FBF8F1",
          200: "#F6F1E7",
          300: "#EDE5D3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        soft: "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(43, 42, 36, 0.18)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
