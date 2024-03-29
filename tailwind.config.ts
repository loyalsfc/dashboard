import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "xs": "369px",
      "sm": "680px",
      "tablet": "800px",
      "desktop": "1115px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#34CAA5",
        "dark": "#26282C",
        "neutral-200": "#EDF2F7",
        "neutral-400": "#DADDDD",
        "neutral-600": "#525252",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
