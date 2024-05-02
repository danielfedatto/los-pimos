import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#2A7CEB",
        'secondary': "#2AEBE1",
        'tertiary': "#49576B",
        'black': "#0f0f0f"
      }
    },
  },
} satisfies Config;
