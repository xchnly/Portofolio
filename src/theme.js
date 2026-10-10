// Light / dark switch. The palette lives in CSS variables (see style.css);
// this only flips data-theme on <html> and remembers the choice.
import { reactive } from 'vue'

const KEY = 'theme'

function initial() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) { /* storage unavailable */ }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export const theme = reactive({ mode: 'dark' })

function apply(mode) {
  theme.mode = mode
  document.documentElement.dataset.theme = mode
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', mode === 'light' ? '#fff1e8' : '#1a1c2c')
}

export function initTheme() {
  apply(initial())
}

export function toggleTheme() {
  const next = theme.mode === 'light' ? 'dark' : 'light'
  apply(next)
  try { localStorage.setItem(KEY, next) } catch (e) { /* ignore */ }
}
