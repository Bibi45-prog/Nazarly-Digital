import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        joystix: ["Joystix", "sans-serif"],
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, rgba(255, 255, 255, 0.04) 0%, rgba(58, 255, 163, 0.2) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
