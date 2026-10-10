<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 3-2</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Side Quests</h2>
        <p class="text-star max-w-2xl mt-4">Technologies and skills currently in the training queue.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(goal, index) in learningGoals"
          :key="goal.name"
          class="training-card pixel-card"
          v-reveal="Math.min(index * 70, 420)"
        >
          <div class="training-icon">
            <img :src="goal.image" :alt="goal.name" loading="lazy" />
          </div>

          <h3 class="training-name">{{ goal.name }}</h3>
          <div class="xp-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" :aria-valuenow="goal.progress" :aria-label="goal.name">
            <div class="xp-fill" :style="{ width: goal.progress + '%', '--fill': progressColor(goal.progress) }"></div>
          </div>
          <p class="font-mono" :style="{ color: progressColor(goal.progress) }">LV.{{ Math.max(1, Math.round(goal.progress / 10)) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      learningGoals: [
        { name: 'Swift', progress: 10, image: 'https://cdn.worldvectorlogo.com/logos/swift-15.svg' },
        { name: 'React Native', progress: 82, image: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
        { name: 'Kotlin', progress: 2, image: 'https://cdn.worldvectorlogo.com/logos/kotlin-1.svg' },
        { name: 'Dart', progress: 3, image: 'https://cdn.worldvectorlogo.com/logos/dart.svg' },
        { name: 'Flutter', progress: 2, image: 'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg' },
        { name: 'Solidity', progress: 5, image: 'https://cdn.worldvectorlogo.com/logos/solidity.svg' },
        { name: 'TensorFlow', progress: 76, image: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg' },
        { name: 'PyTorch', progress: 78, image: 'https://cdn.worldvectorlogo.com/logos/pytorch-2.svg' }
      ]
    }
  },
  methods: {
    progressColor(progress) {
      if (progress < 20) return 'var(--mist)'
      if (progress < 50) return 'var(--pink)'
      return 'var(--data)'
    }
  }
}
</script>

<style scoped>
.training-card {
  padding: 1.5rem 1rem;
  text-align: center;
}

.training-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--star);
  border: 4px solid var(--ink);
  padding: 8px;
}

.training-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.training-name {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
  color: var(--star);
  margin-bottom: 0.9rem;
}

.xp-bar {
  height: 20px;
  border: 4px solid var(--star);
  background: var(--ink);
  padding: 2px;
  margin-bottom: 0.5rem;
}

.xp-fill {
  height: 100%;
  background: repeating-linear-gradient(90deg, var(--fill) 0 8px, rgba(0, 0, 0, 0.35) 8px 10px);
  transition: width 1.2s steps(12);
}
</style>
