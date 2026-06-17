/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Light theme surfaces
        surface: '#ffffff',
        surfaceMuted: '#fafafa',
        cardLight: '#ffffff',
        borderLight: '#eeeeee',
        // Dark theme surfaces
        surfaceDark: '#0a0a0a',
        surfaceDarkMuted: '#000000',
        cardDark: '#141414',
        borderDark: 'rgba(255,255,255,0.08)',
        // Shared accents
        ink: '#0a0a0a',
        inkMuted: '#6b6b6b',
        paper: '#ffffff',
        paperMuted: 'rgba(255,255,255,0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
