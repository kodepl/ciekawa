import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#f2e9d8",
        ruled: "#d9cdb8",
        ink: "#1a2744",
        stamp: "#c0392b",
        pencil: "#5c6370",
        margin: "#e8dcc8",
      },
      fontFamily: {
        serif: ["Literata", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
        sans: ["IBM Plex Sans", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
