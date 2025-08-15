/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'hedvig-serif': ['var(--font-hedvig-serif)', 'Hedvig Letters Serif', 'Georgia', 'serif'],
        'hedvig-sans': ['var(--font-hedvig-sans)', 'Hedvig Letters Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
