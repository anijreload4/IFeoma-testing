/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#1e3799',
          light: '#4a69bd',
        },
        coral: '#ff7f50',
        gold: '#ffd700',
      },
      fontFamily: {
        cursive: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};