import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#dfe6f7",
          200: "#b8c9ed",
          300: "#8da8de",
          400: "#6384c9",
          500: "#001f3f", // Navy Blue
          600: "#001832",
          700: "#001125",
          800: "#000a18",
          900: "#00030b",
          DEFAULT: "#001f3f",
        },
        accent: {
          50: "#fff5f5",
          100: "#ffe3e3",
          200: "#ffc9c9",
          300: "#ffa8a8",
          400: "#ff8787",
          500: "#d62828", // Red
          600: "#c61a1a",
          700: "#b50d0d",
          800: "#a40000",
          DEFAULT: "#d62828",
        },
        navy: {
          DEFAULT: "#001f3f",
        },
        red: {
          DEFAULT: "#d62828",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #001f3f 0%, #003366 50%, #001832 100%)",
        "accent-gradient": "linear-gradient(135deg, #d62828 0%, #ff4d4d 50%, #d62828 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(214, 40, 40, 0.3)",
        "card-hover": "0 20px 60px rgba(0, 31, 63, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(214, 40, 40, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(214, 40, 40, 0.5)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
