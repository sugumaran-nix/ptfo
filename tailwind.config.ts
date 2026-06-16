import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", ":not(.light)"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme surfaces — midnight slate
        base: "#060913",
        surface: "#111827",
        "surface-soft": "#161f30",
        border: "#1e293b",
        // Light theme surfaces
        "base-light": "#F6F6FB",
        "surface-light": "#FFFFFF",
        "border-light": "#E7E7F1",
        // Text
        ink: "#ffffff",
        "ink-light": "#15151F",
        muted: "#94a3b8",
        "muted-light": "#6B6B82",
        // Brand
        violet: "#6366f1",
        blue: "#4D7CFE",
        mint: "#34D399",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6366f1 0%, #4D7CFE 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
