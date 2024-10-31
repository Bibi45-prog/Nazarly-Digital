import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        joystix: ["var(--font-joystix)"],
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, rgba(255, 255, 255, 0.04) 0%, rgba(58, 255, 163, 0.2) 70%)",
      },
    },
    colors: {
      secondary: "#191919",
      textSecondary: "#B8B8B8",
      blackPrimary: "#050505",
    },
  },
  plugins: [],
};
export default config;
