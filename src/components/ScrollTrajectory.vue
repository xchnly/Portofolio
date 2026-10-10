<template>
  <div class="trajectory hidden lg:flex" aria-hidden="true">
    <div class="trajectory-track">
      <div class="trajectory-fill" :style="{ height: progress + '%' }"></div>
      <div class="trajectory-marker" :style="{ top: progress + '%' }"></div>
    </div>
    <span class="trajectory-label">{{ Math.round(progress) }}%</span>
  </div>
</template>

<script>
export default {
  name: 'ScrollTrajectory',
  data() {
    return {
      progress: 0,
      ticking: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.ticking) return
      this.ticking = true
      requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        this.progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0
        this.ticking = false
      })
    },
  },
}
</script>

<style scoped>
.trajectory {
  position: fixed;
  top: 50%;
  right: 1.75rem;
  transform: translateY(-50%);
  z-index: 30;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  pointer-events: none;
}

.trajectory-track {
  position: relative;
  width: 2px;
  height: 34vh;
  background: rgba(238, 242, 248, 0.08);
  border-radius: 2px;
}

.trajectory-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to bottom, rgba(167, 139, 250, 0.6), rgba(94, 234, 212, 0.6));
  border-radius: 2px;
  transition: height 0.1s linear;
}

.trajectory-marker {
  position: absolute;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 10px 2px rgba(167, 139, 250, 0.7);
  transform: translate(-50%, -50%);
  transition: top 0.1s linear;
}

.trajectory-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  color: var(--mist);
  letter-spacing: 0.05em;
}
</style>
