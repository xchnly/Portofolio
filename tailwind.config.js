/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette is defined as CSS variables in src/style.css (dark + light)
        void: 'var(--void)',
        panel: 'var(--panel)',
        line: 'var(--line)',
        ink: 'var(--ink)',
        star: 'var(--star)',
        mist: 'var(--mist)',
        signal: 'var(--signal)',
        data: 'var(--data)',
        bubble: 'var(--pink)',
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        body: ['"Pixelify Sans"', 'monospace'],
        mono: ['"VT323"', 'monospace'],
      },
    },
  },
  plugins: [],
}
