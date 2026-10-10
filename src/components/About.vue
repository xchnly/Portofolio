<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 1-1</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Character Stats</h2>
      </div>

      <div class="flex flex-col lg:flex-row items-start gap-14">
        <!-- ID card -->
        <div class="w-full max-w-xs mx-auto lg:mx-0 lg:w-1/3 flex-shrink-0" v-reveal="80">
          <div class="id-card pixel-card">
            <div class="id-photo-frame">
              <div class="id-corner id-corner--tl"></div>
              <div class="id-corner id-corner--tr"></div>
              <div class="id-corner id-corner--bl"></div>
              <div class="id-corner id-corner--br"></div>
              <img src="/profil.jpg" alt="Portrait of Hendry" class="id-photo" />
            </div>

            <div class="px-5 py-4 id-meta">
              <p class="font-mono text-signal uppercase">Player ID // HW-01</p>
              <p class="font-display text-star mt-2">HENDRY</p>
              <p class="font-mono text-mist mt-1">Status: Active Duty</p>
            </div>
          </div>
        </div>

        <!-- Bio -->
        <div class="lg:w-2/3">
          <h3 class="font-display text-star mb-6" v-reveal="120">&gt; WHO AM I?</h3>

          <div class="space-y-5 font-body text-star leading-relaxed bio-box" v-reveal="160">
            <p>
              Hello, I'm Hendry, a final-year Informatics Engineering student (GPA 3.86 / 4.00) with 4+ years of work
              experience across logistics, manufacturing, and administration.
            </p>
            <p>
              I built SITCA, an internal tracking app that is in daily use at a logistics company and cut manual work by
              up to 80%. I work full-stack across Next.js, React, Laravel, Supabase, and Firebase, with hands-on IoT and
              computer-vision projects on the side. Right now I'm looking for a Junior Full Stack / Frontend Developer
              role or freelance web projects.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              class="stat-readout pixel-card"
              v-reveal="200 + index * 80"
            >
              <div class="stat-num" :class="stat.color">{{ stat.number }}</div>
              <div class="font-mono text-mist uppercase mt-2">{{ stat.label }}</div>
            </div>
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
      stats: [
        { number: '4+', label: 'Years Working', color: 'text-signal' },
        { number: '80%', label: 'Less Manual Work (SITCA)', color: 'text-data' },
        { number: '3.86', label: 'GPA / 4.00', color: 'text-signal' },
        { number: '15+', label: 'Projects Built', color: 'text-data' }
      ]
    }
  },
}
</script>

<style scoped>
.id-photo-frame {
  position: relative;
  border-bottom: 4px solid var(--star);
}

.id-corner {
  display: none;
}

.id-photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  filter: grayscale(1) contrast(1.05);
}

.id-meta {
  padding: 1rem 1.25rem;
}

.bio-box {
  background: var(--void);
  border: 4px solid var(--star);
  box-shadow: 8px 8px 0 var(--ink);
  padding: 1.5rem;
  font-size: 1.15rem;
  line-height: 1.6;
}

.stat-readout {
  padding: 1rem;
}

.stat-num {
  font-family: 'Press Start 2P', monospace;
  font-size: 1.4rem;
}
</style>
