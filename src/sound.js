// Tiny 8-bit sound engine: square-wave beeps on hover/click, with a mute switch.
import { reactive } from 'vue'

export const sound = reactive({ muted: false })

let ctx = null

function audio() {
  if (!ctx) {
    const Ctor = window.AudioContext || window.webkitAudioContext
    if (Ctor) ctx = new Ctor()
  }
  return ctx
}

export function beep(freq, duration = 0.06, type = 'square') {
  if (sound.muted) return
  const ac = audio()
  if (!ac) return
  if (ac.state === 'suspended') ac.resume()
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  osc.type = type
  osc.frequency.value = freq
  gain.gain.setValueAtTime(0.04, ac.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration)
  osc.connect(gain)
  gain.connect(ac.destination)
  osc.start()
  osc.stop(ac.currentTime + duration)
}

export function toggleMute() {
  sound.muted = !sound.muted
  if (!sound.muted) beep(880, 0.1)
}

// One delegated listener pair covers every link and button on the page.
export function installGlobalSounds() {
  const interactive = (e) => e.target.closest && e.target.closest('a, button')
  document.addEventListener('mouseover', (e) => {
    const el = interactive(e)
    if (el && !el.contains(e.relatedTarget)) beep(520, 0.05)
  })
  document.addEventListener('click', (e) => {
    if (interactive(e)) beep(880, 0.09)
  })
}
