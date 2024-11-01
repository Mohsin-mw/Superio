import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/assets/images/bg-1.png)",
      },
      colors: {
        primary: "#7E22CE",
        heading: "#202124",
        text: "#696969",
        quaternary: "#6b7280",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
