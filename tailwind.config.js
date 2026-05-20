/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Menlo", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50:  "#e8fdff",
          100: "#b8f7ff",
          200: "#82f1ff",
          300: "#40e9ff",
          400: "#00e0ff",
          500: "#00b8d4",
          600: "#0090a8",
          700: "#006d80",
          800: "#004a57",
          900: "#002830",
        },
        base: {
          50:  "#f1f2f4",
          100: "#d8dadf",
          200: "#aeb2bc",
          300: "#858b99",
          400: "#5f6475",
          500: "#424754",
          600: "#343843",
          700: "#282c36",
          800: "#1e2028",
          900: "#14161c",
        },
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%":   { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeIn:     "fadeIn 0.8s ease-in-out",
        slideUp:    "slideUp 0.7s ease-out",
        fadeInDown: "fadeInDown 0.7s ease-out",
        blink:      "blink 1.1s step-end infinite",
        shimmer:    "shimmer 3s linear infinite",
      },
      boxShadow: {
        glow:     "0 0 24px rgba(0, 224, 255, 0.25)",
        "glow-lg":"0 0 40px rgba(0, 224, 255, 0.40)",
        card:     "0 1px 3px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-faint": "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
