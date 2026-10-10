<template>
  <transition name="boot-fade">
    <div
      v-if="visible"
      class="boot-overlay"
      role="status"
      aria-live="polite"
      aria-label="Loading"
      @click="finish"
      tabindex="-1"
    >
      <div class="boot-title">LOADING<span class="boot-blink">...</span></div>
      <div class="boot-bar"><div class="boot-fill" :style="{ width: progress + '%' }"></div></div>
      <div class="boot-percent">{{ progress }}%</div>
      <div class="boot-coin">INSERT COIN TO CONTINUE_</div>
      <p class="boot-hint">press any key to skip</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BootSequence',
  data() {
    return { visible: false, progress: 0, timer: null, closeTimer: null }
  },
  mounted() {
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || sessionStorage.getItem('boot-complete')) return

    this.visible = true
    window.addEventListener('keydown', this.finish)
    this.timer = setInterval(() => {
      this.progress = Math.min(100, this.progress + 4 + Math.floor(Math.random() * 10))
      if (this.progress >= 100) {
        clearInterval(this.timer)
        this.closeTimer = setTimeout(this.finish, 350)
      }
    }, 90)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.finish)
    clearInterval(this.timer)
    clearTimeout(this.closeTimer)
  },
  methods: {
    finish() {
      if (!this.visible) return
      this.visible = false
      sessionStorage.setItem('boot-complete', '1')
      window.removeEventListener('keydown', this.finish)
      clearInterval(this.timer)
      clearTimeout(this.closeTimer)
    }
  }
}
</script>

<style scoped>
.boot-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--void);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 24px;
}

.boot-title {
  font-family: 'Press Start 2P', monospace;
  font-size: clamp(16px, 4vw, 28px);
  color: var(--signal);
  text-shadow: 4px 4px 0 var(--pink);
}

.boot-blink {
  animation: blink 1s steps(1) infinite;
}

.boot-bar {
  width: min(480px, 86vw);
  height: 40px;
  border: 4px solid var(--star);
  padding: 4px;
  background: var(--ink);
  box-shadow: 6px 6px 0 var(--line);
}

.boot-fill {
  height: 100%;
  background: repeating-linear-gradient(90deg, var(--data) 0 12px, #1a6fb0 12px 16px);
}

.boot-percent {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
}

.boot-coin {
  font-family: 'VT323', monospace;
  font-size: 24px;
  color: var(--pink);
}

.boot-hint {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  color: var(--mist);
  opacity: 0.7;
  text-transform: uppercase;
}

.boot-fade-leave-active {
  transition: opacity 0.4s steps(4);
}

.boot-fade-leave-to {
  opacity: 0;
}
</style>
