<template>
  <div class="role-readout">
    <span class="role-prompt">&gt;</span>
    <span class="role-text">{{ typedText }}</span>
    <span class="role-cursor" :class="{ 'is-blinking': !isTyping }">_</span>
  </div>
</template>

<script>
export default {
  name: 'RoleReadout',
  props: {
    roles: {
      type: Array,
      default: () => ['Fullstack Developer', 'IT Support Engineer', 'Automation Tinkerer']
    }
  },
  data() {
    return {
      typedText: '',
      currentIndex: 0,
      isTyping: true,
      typeSpeed: 65,
      eraseSpeed: 35,
      holdDelay: 1800,
      timer: null
    }
  },
  mounted() {
    this.typeText()
  },
  beforeUnmount() {
    clearTimeout(this.timer)
  },
  methods: {
    typeText() {
      const target = this.roles[this.currentIndex]
      this.isTyping = true
      let i = this.typedText.length
      const step = () => {
        if (i < target.length) {
          this.typedText = target.slice(0, i + 1)
          i++
          this.timer = setTimeout(step, this.typeSpeed)
        } else {
          this.isTyping = false
          this.timer = setTimeout(this.eraseText, this.holdDelay)
        }
      }
      step()
    },
    eraseText() {
      this.isTyping = true
      const step = () => {
        if (this.typedText.length > 0) {
          this.typedText = this.typedText.slice(0, -1)
          this.timer = setTimeout(step, this.eraseSpeed)
        } else {
          this.currentIndex = (this.currentIndex + 1) % this.roles.length
          this.timer = setTimeout(this.typeText, 300)
        }
      }
      step()
    }
  }
}
</script>

<style scoped>
.role-readout {
  font-family: 'VT323', monospace;
  font-size: 1.9rem;
  line-height: 1.2;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
}

.role-prompt {
  color: var(--data);
}

.role-text {
  color: var(--star);
}

.role-cursor {
  color: var(--signal);
  animation: blink 0.9s steps(1) infinite;
}
</style>
