<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 3-1</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Quest Log</h2>
        <p class="text-star max-w-2xl mt-4">{{ projects.length }} quests cleared across web, IoT, AI and desktop tooling.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="mission-card pixel-card"
          v-reveal="Math.min(index * 60, 480)"
        >
          <div class="mission-art" :class="`mission-art--${project.category}`">
            <img
              v-if="project.imageUrl"
              :src="project.imageUrl"
              :alt="`Screenshot of ${project.title}`"
              class="mission-art-image"
              loading="lazy"
            />
            <i v-else :class="categoryIcon(project.category)"></i>
          </div>

          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="font-mono text-signal">QUEST {{ String(index + 1).padStart(2, '0') }}</span>
              <span class="status-badge" :class="`status-badge--${project.status}`">{{ statusLabel(project.status) }}</span>
            </div>

            <h3 class="font-display text-star mb-3">{{ project.title }}</h3>
            <p class="text-star text-sm leading-relaxed mb-5">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="(tech, i) in project.technologies" :key="i" class="tech-chip">{{ tech }}</span>
            </div>

            <a v-if="normalizedLink(project.link)" :href="normalizedLink(project.link)" target="_blank" rel="noopener noreferrer" class="mission-link">
              VIEW PROJECT &#9654;
            </a>
            <span v-else class="font-mono text-mist">Internal build &middot; not public</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: { type: Array, default: () => [] }
  },
  methods: {
    categoryIcon(category) {
      return {
        web: 'fas fa-diagram-project',
        iot: 'fas fa-microchip',
        desktop: 'fas fa-desktop'
      }[category] || 'fas fa-satellite'
    },
    statusLabel(status) {
      return { deployed: 'Complete', ongoing: 'In Progress', archived: 'Archived' }[status] || 'Deployed'
    },
    normalizedLink(link) {
      if (!link || link === '#') return null
      return link.startsWith('http') ? link : `https://${link}`
    }
  }
}
</script>

<style scoped>
.mission-art {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  overflow: hidden;
  border-bottom: 4px solid var(--star);
  background-color: var(--panel);
  background-image:
    linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.mission-art-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.mission-art--web { color: #fff1e8; background-color: #1c6fb0; }
.mission-art--iot { color: #fff1e8; background-color: #00803f; }
.mission-art--desktop { color: #fff1e8; background-color: #5a3d9a; }
.mission-art i { text-shadow: 4px 4px 0 var(--ink); }

.status-badge {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.5rem;
  text-transform: uppercase;
  padding: 0.35rem 0.5rem;
  border: 2px solid var(--star);
  color: var(--star);
}

.status-badge--deployed { color: var(--void); background: var(--signal); }
.status-badge--ongoing { color: var(--void); background: var(--pink); }
.status-badge--archived { color: var(--mist); background: var(--line); }

.tech-chip {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  line-height: 1.2;
  color: var(--data);
  background: var(--line);
  border: 2px solid var(--data);
  padding: 0.15rem 0.5rem;
}

.mission-link {
  display: inline-flex;
  align-items: center;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  color: var(--void);
  background: var(--data);
  border: 4px solid var(--star);
  box-shadow: 4px 4px 0 var(--ink);
  padding: 0.7rem 0.8rem;
}

.mission-link:hover {
  background: var(--signal);
  color: var(--void);
}

.mission-link:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 var(--ink);
}
</style>
