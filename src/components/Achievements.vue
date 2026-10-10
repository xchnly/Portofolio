<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 2-2</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Trophy Room</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="citation-card pixel-card"
          v-reveal="index * 120"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="citation-icon">
              <i :class="achievement.icon"></i>
            </div>
            <h3 class="font-display text-star leading-tight">{{ achievement.title }}</h3>
          </div>
          <p class="text-star text-sm leading-relaxed mb-5">{{ achievement.description }}</p>
          <div class="ach-foot font-mono text-signal pt-3">
            {{ achievement.date }} &middot; {{ achievement.organization }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          title: "Outstanding Employee 2024",
          description: "Recognized for exceptional performance, dedication, and contributions throughout the year, demonstrating outstanding leadership, teamwork, and a commitment to excellence in all responsibilities.",
          date: "December 2024",
          organization: "PT Champion Mattress Indonesia Manufacturing",
          icon: "fas fa-trophy"
        },
        {
          title: "Outstanding Employee Mid Year 2025",
          description: "Recognized for exceptional performance, dedication, and contributions throughout the year, demonstrating outstanding leadership, teamwork, and a commitment to excellence in all responsibilities.",
          date: "September 2025",
          organization: "PT Champion Mattress Indonesia Manufacturing",
          icon: "fas fa-trophy"
        },
      ]
    }
  }
}
</script>

<style scoped>
.citation-card {
  padding: 1.75rem;
}

.citation-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--signal);
  border: 4px solid var(--star);
  color: var(--void);
  font-size: 1.25rem;
}

.ach-foot {
  border-top: 4px dashed var(--line);
}
</style>
