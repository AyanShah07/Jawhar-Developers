import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0F1115",
          deep: "#080A0D",
          soft: "#1A1E25",
        },
        graphite: {
          DEFAULT: "#2A2E35",
          light: "#3D4350",
          dark: "#1C2028",
        },
        offwhite: {
          DEFAULT: "#F5F5F2",
          warm: "#EEEDE8",
          pure: "#FAFAF8",
        },
        orange: {
          DEFAULT: "#FF7A00",
          light: "#FF9A3C",
          dark: "#CC6200",
          glow: "rgba(255, 122, 0, 0.15)",
        },
        teal: {
          DEFAULT: "#00BFA6",
          light: "#33CDB8",
          dark: "#009985",
        },
        gold: {
          DEFAULT: "#D9A441",
          light: "#E8BB6A",
          dark: "#B8882F",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "serif"],
        heading: ["var(--font-cabinet)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "10xl": ["10rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
        "12xl": ["12rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "104": "26rem",
        "120": "30rem",
        "128": "32rem",
        "144": "36rem",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "grain": "grain 8s steps(10) infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "counter": "counter 2s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 122, 0, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 122, 0, 0.5)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/images/noise.png')",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-sm": "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        "orange-glow": "0 0 40px rgba(255, 122, 0, 0.3)",
        "card-hover": "0 24px 60px rgba(0, 0, 0, 0.4)",
        "luxury": "0 40px 80px rgba(0, 0, 0, 0.5)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
      },
      backdropBlur: {
        "xs": "2px",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
