<template>
  <canvas ref="canvas" class="pixel-fx" aria-hidden="true"></canvas>
</template>

<script>
// Falling square "pixels" in the palette colours, snapped to a 4px grid.
const DARK = ['#29adff', '#ff77a8', '#ffec27', '#fff1e8']
const LIGHT = ['#1c6fb0', '#d6336c', '#ab5236', '#1a1c2c']

export default {
  name: 'StarField',
  data() {
    return { particles: [], raf: null, frame: 0 }
  },
  mounted() {
    const canvas = this.$refs.canvas
    this.ctx = canvas.getContext('2d')
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.resize()
    window.addEventListener('resize', this.resize)
    if (!this.reduced) this.loop()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
    cancelAnimationFrame(this.raf)
  },
  methods: {
    resize() {
      const c = this.$refs.canvas
      c.width = window.innerWidth
      c.height = window.innerHeight
      const count = this.reduced ? 0 : Math.min(70, Math.floor(c.width / 18))
      this.particles = Array.from({ length: count }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        size: [4, 4, 8][Math.floor(Math.random() * 3)],
        speed: 0.4 + Math.random() * 1.4,
        slot: Math.floor(Math.random() * 4),
        phase: Math.random() * 6
      }))
    },
    loop() {
      const { ctx } = this
      const c = this.$refs.canvas
      this.frame++
      const palette = document.documentElement.dataset.theme === 'light' ? LIGHT : DARK
      ctx.clearRect(0, 0, c.width, c.height)
      this.particles.forEach((p) => {
        p.y += p.speed
        if (p.y > c.height) {
          p.y = -10
          p.x = Math.random() * c.width
        }
        ctx.globalAlpha = Math.sin(this.frame / 20 + p.phase) > 0.8 ? 0.25 : 0.75
        ctx.fillStyle = palette[p.slot]
        ctx.fillRect(Math.round(p.x / 4) * 4, Math.round(p.y / 4) * 4, p.size, p.size)
      })
      this.raf = requestAnimationFrame(this.loop)
    }
  }
}
</script>

<style scoped>
.pixel-fx {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
</style>
