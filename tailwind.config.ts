import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dbeefe",
          200: "#bcdffe",
          300: "#8ec7fd",
          400: "#4ea4fa",
          500: "#1f82f5",
          600: "#1467d8",
          700: "#1253af",
          800: "#124789",
          900: "#133c6d",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      fontFamily: {
        display: ["Poppins", "var(--font-geist-sans)"],
      },
      boxShadow: {
        tile: "0 15px 35px rgba(15, 23, 42, 0.1)",
        card: "0 10px 25px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
