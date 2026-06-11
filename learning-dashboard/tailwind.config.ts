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
        // Dark background tones
        bg: {
          base: "#0a0a0f",      // near-black base
          card: "#111118",      // card background
          hover: "#16161f",     // hovered card
        },
        // Accent colors
        accent: {
          purple: "#7c3aed",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
        // Text
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#475569",
        },
        // Border
        border: {
          DEFAULT: "#1e1e2e",
          glow: "#7c3aed40",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
