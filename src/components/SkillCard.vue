<template>
  <div class="skill-card-container" :style="{ '--delay': `${index * 0.1}s` }">
    <div class="skill-card">
      <div class="skill-card-inner">
        <div class="skill-icon" :style="{ '--skill-color': skill.color }">

          <!-- DEVICON -->
          <img
            v-if="skill.iconType === 'devicon'"
            :src="deviconUrl"
            :alt="skill.name"
            @error="iconError = true"
          />

          <!-- FONT AWESOME -->
          <i
            v-else-if="skill.iconType === 'fontawesome'"
            :class="skill.icon"
          />

          <!-- TWEMOJI -->
          <span
            v-else-if="skill.iconType === 'twemoji'"
            class="twemoji-icon"
          >
            {{ skill.icon }}
          </span>

          <!-- FALLBACK -->
          <span v-if="iconError" class="fallback-icon">
            {{ skill.name[0] }}
          </span>

        </div>

        <h3 class="skill-name">{{ skill.name }}</h3>

        <div class="skill-level">
          <div
            class="level-bar"
            :style="{ width: skill.level + '%', background: skill.color }"
          />
        </div>

        <div class="skill-percent" :style="{ color: skill.color }">
          {{ skill.level }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
    index: Number
  },
  data() {
    return {
      iconError: false
    }
  },
  computed: {
    deviconUrl() {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${this.skill.icon}/${this.skill.iconFile}`
    }
  },
  mounted() {
    if (this.skill.iconType === 'twemoji' && window.twemoji) {
      window.twemoji.parse(this.$el)
    }
  }
}
</script>

<style>
.skill-card-container {
  perspective: 1000px;
  animation: fade-in-up 0.5s ease-out both;
  animation-delay: var(--delay);
}

.skill-card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}

.skill-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 1.5rem;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}

.skill-card-container:hover .skill-card {
  transform: rotateY(15deg) rotateX(10deg);
}

.skill-card-container:hover .skill-card-inner {
  transform: translateZ(30px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--skill-color), 0.1);
  border-radius: 50%;
  border: 2px solid var(--skill-color);
  transition: all 0.3s ease;
}

.skill-card-container:hover .skill-icon {
  transform: scale(1.1) translateZ(20px);
  box-shadow: 0 0 20px rgba(var(--skill-color), 0.4);
}

/* Style untuk semua jenis ikon */
.skill-icon img,
.skill-icon i,
.skill-icon span {
  width: 60%;
  height: 60%;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(var(--skill-color), 0.5));
}

/* Khusus Font Awesome */
.skill-icon i {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--skill-color);
}

/* Khusus Twemoji */
.twemoji-icon {
  font-size: 2rem;
  display: inline-block;
  line-height: 1;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  transition: all 0.3s ease;
}

.skill-card-container:hover .skill-name {
  transform: translateZ(10px);
}

.skill-level {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.level-bar {
  height: 100%;
  border-radius: 3px;
  transition: width 1.5s ease-out;
}

.skill-percent {
  font-size: 0.9rem;
  font-weight: 600;
  text-align: right;
  transition: all 0.3s ease;
}

.skill-card-container:hover .skill-percent {
  transform: translateZ(5px);
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
