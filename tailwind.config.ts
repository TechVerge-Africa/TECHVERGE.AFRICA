import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        tech: {
          accent: "#1D64EC",        // Signature Brand Electric Blue
          accentHover: "#1551c6",
          accentLight: "#EFF6FF",   // Soft blue tint for pills & badges
          navy: "#0F172A",          // Deep professional slate navy
          dark: "#0B0F17",          // Deep dark contrast layer
          slate: "#1E293B",         // Slate headings
          body: "#334155",          // Highly legible body copy
          muted: "#64748B",         // Secondary details
          border: "#E2E8F0",        // Clean subtle border
          surface: "#F8FAFC",       // Off-white surface
          card: "#FFFFFF",          // Crisp white card
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        cardHover: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
