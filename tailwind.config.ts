import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102231",
        slatewash: "#ecf3f5",
        basin: "#33bfd8",
        porcelain: "#f8fbfb",
        grout: "#d9e4e7",
        timber: "#9a6a43",
        graphite: "#253746"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 34, 49, 0.14)",
        crisp: "0 1px 0 rgba(16, 34, 49, 0.08), 0 18px 48px rgba(16, 34, 49, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
