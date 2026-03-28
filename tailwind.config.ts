import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary (Ocean Blue)
        primary: {
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#4A90E2",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#2E5C8A",
          900: "#1565C0",
        },
        // Accent (Portuguese Sun)
        accent: {
          50: "#F9FBE7",
          100: "#F0F4A8",
          200: "#E6EE9C",
          300: "#DCE775",
          400: "#D4E157",
          500: "#C0CA33",
          600: "#AFB42B",
          700: "#9CAF3E",
          800: "#827717",
          900: "#558B2F",
        },
        // Neutrals
        charcoal: "#212529",
        "dark-gray": "#343A40",
        "medium-gray": "#6C757D",
        "light-gray": "#E9ECEF",
        "off-white": "#F8F9FA",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
        heading: ["var(--font-ovo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"), // if using forms plugin
    require("@tailwindcss/typography"), // if using typography plugin
  ],
};
export default config;
