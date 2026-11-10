import type { Config } from "tailwindcss";

/**
 * Techverge Africa design tokens: Brand Guidelines v1.0 (November 2026).
 * Every colour is sampled from the V mark. Use the token names in code.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // DM Sans for text. Arial is the documented fallback.
        sans: ["var(--font-dm-sans)", "Arial", "system-ui", "sans-serif"],
        // Oswald for every title and heading across the site
        heading: ["var(--font-oswald)", "Arial Narrow", "Arial", "sans-serif"],
        // Sora stays for the logo wordmark only
        brand: ["var(--font-sora)", "Arial", "system-ui", "sans-serif"],
        oswald: ["var(--font-oswald)", "Arial Narrow", "Arial", "sans-serif"],
        roboto: ["var(--font-roboto)", "Arial", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#2D66F5", // Verge Blue: technology and trust (lead colour)
          green: "#5BAA42", // Growth Green: second colour
          orange: "#EC782E", // Spark Orange: small accent only, one per view
          navy: "#14357F", // Deep Navy: dark sections, footer
          midnight: "#0F2A66",
          "green-bright": "#78D853", // highlights on navy
          "green-deep": "#3D7839",
          // Darkened Spark Orange for small orange text and icons on light grounds (≈5:1 on white).
          "orange-deep": "#B4541A",
        },
        action: {
          primary: "#2252CD", // Action Blue: buttons and links
          hover: "#1B44AD",
        },
        surface: {
          0: "#F7F7F7", // Ground
          1: "#FFFFFF", // Paper
          2: "#EEF1F6", // Mist
        },
        line: "#DCE1EA",
        ink: {
          DEFAULT: "#0E1A33",
          muted: "#4A5875",
        },
      },
      borderRadius: {
        input: "6px", // Inputs
        button: "10px", // Buttons
        card: "18px", // Cards
        hero: "28px", // Hero media and product screenshots
      },
      fontSize: {
        // Type scale (web). Phones: display 40, heading 1 32.
        "fs-display": ["4rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "fs-display-sm": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "fs-h1": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "fs-h1-sm": ["2rem", { lineHeight: "1.18", letterSpacing: "-0.01em" }],
        "fs-h2": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "fs-h3": ["1.375rem", { lineHeight: "1.3" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        site: "1200px",
        prose: "65ch",
      },
      boxShadow: {
        soft: "0 12px 32px -12px rgba(14, 26, 51, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
