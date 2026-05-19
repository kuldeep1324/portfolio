import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black:     "#0a0a0a",
        charcoal:  "#141414",
        graphite:  "#1e1e1e",
        "dark-gray": "#2a2a2a",
        "mid-gray":  "#3d3d3d",
        muted:     "#6b6b6b",
        silver:    "#9a9a9a",
        "warm-gray": "#c4c0bb",
        "soft-white": "#f0ede8",
        white:     "#faf9f7",
        accent:    "#c8b89a",
        "accent-dim": "#8a7a65",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans:    ["'Syne'", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
