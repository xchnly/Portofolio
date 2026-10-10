<template>
  <span class="skill-icon" aria-hidden="true">
    <img
      v-if="skill.iconType === 'devicon' && !iconError"
      :src="deviconUrl"
      alt=""
      loading="lazy"
      @error="iconError = true"
    />
    <i v-else-if="skill.iconType === 'fontawesome'" :class="skill.icon" :style="{ color: skill.color }" />
    <span v-else class="fallback-icon">{{ skill.name[0] }}</span>
  </span>
</template>

<script>
// Renders just the icon of a skill; the parent supplies the frame and size.
export default {
  props: {
    skill: Object
  },
  data() {
    return { iconError: false }
  },
  computed: {
    deviconUrl() {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.skill.icon}/${this.skill.iconFile}`
    }
  }
}
</script>

<style scoped>
.skill-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-icon i {
  font-size: 1.6em;
}

.fallback-icon {
  font-family: 'Press Start 2P', monospace;
  color: #1a1c2c;
}
</style>
