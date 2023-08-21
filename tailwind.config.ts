import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "7.5rem",
        "9xl": "9rem",
        "10xl": "10rem",
        // Add more custom font sizes as needed
      },

      theme: {
        screens: {
          xxs: "300px",

          xs: "475px",

          sm: "576px",
          // => @media (min-width: 576px) { ... }

          md: "960px",
          // => @media (min-width: 960px) { ... }

          lg: "1440px",
          // => @media (min-width: 1440px) { ... }
        },
      },
    },
  },
  plugins: [],
};

export default config;
