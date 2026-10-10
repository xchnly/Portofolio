<template>
  <div class="wagon" :style="{ '--paint': paint }">
    <div class="wagon-body">
      <div class="cargo">
        <img
          v-if="skill.iconType === 'devicon' && !iconError"
          :src="deviconUrl"
          :alt="skill.name"
          loading="lazy"
          @error="iconError = true"
        />
        <i v-else-if="skill.iconType === 'fontawesome'" :class="skill.icon" :style="{ color: skill.color }" aria-hidden="true" />
        <span v-else class="fallback-icon" aria-hidden="true">{{ skill.name[0] }}</span>
      </div>
      <div class="plate">{{ skill.name }}</div>
      <span class="wheel wheel--a"></span>
      <span class="wheel wheel--b"></span>
    </div>
    <span class="coupler"></span>
  </div>
</template>

<script>
// Bright PICO-8 paints, same in both themes so wagons always read as toys.
const PAINTS = ['#ff77a8', '#29adff', '#ffec27', '#00e436', '#ffa300']

export default {
  props: {
    skill: Object,
    index: { type: Number, default: 0 }
  },
  data() {
    return { iconError: false }
  },
  computed: {
    deviconUrl() {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.skill.icon}/${this.skill.iconFile}`
    },
    paint() {
      return PAINTS[this.index % PAINTS.length]
    }
  }
}
</script>

<style scoped>
/* 144px wide = 12 sleepers, so rails of neighbouring wagons join up */
.wagon {
  position: relative;
  width: 144px;
  height: 102px;
  flex-shrink: 0;
}

.wagon-body {
  position: relative;
  width: 132px;
  height: 92px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: var(--paint);
  border: 4px solid #1a1c2c;
  box-shadow: inset 4px 4px 0 rgba(255, 255, 255, 0.35), 5px 5px 0 #0b0c16;
}

.cargo {
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff1e8;
  border: 3px solid #1a1c2c;
}

.cargo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cargo i {
  font-size: 1.4rem;
}

.fallback-icon {
  font-family: 'Press Start 2P', monospace;
  color: #1a1c2c;
}

.plate {
  width: 100%;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.5rem;
  line-height: 1.4;
  text-align: center;
  color: #1a1c2c;
  background: #fff1e8;
  border: 3px solid #1a1c2c;
  padding: 0.3rem 0.1rem;
  overflow-wrap: anywhere;
}

.wheel {
  position: absolute;
  bottom: -14px;
  width: 22px;
  height: 22px;
  background: #fff1e8;
  border: 4px solid #1a1c2c;
  border-radius: 50%;
}
.wheel--a { left: 14px; }
.wheel--b { right: 14px; }

/* a hub mark that orbits, so the wheels visibly turn */
.wheel::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 1px;
  width: 4px;
  height: 4px;
  margin-left: -2px;
  background: #1a1c2c;
  transform-origin: 2px 5px;
  animation: wheel-turn 0.6s steps(8) infinite;
}

.coupler {
  position: absolute;
  right: 0;
  top: 56px;
  width: 12px;
  height: 8px;
  background: #1a1c2c;
}

/* rail under this wagon */
.wagon::before,
.wagon::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
}
.wagon::after {
  top: 106px;
  height: 4px;
  background: #c2c3c7;
  border-top: 2px solid #1a1c2c;
}
.wagon::before {
  top: 112px;
  height: 8px;
  background: repeating-linear-gradient(90deg, #ab5236 0 6px, transparent 6px 12px);
}

@keyframes wheel-turn {
  to { transform: rotate(360deg); }
}
</style>
