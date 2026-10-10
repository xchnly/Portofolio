<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 3-3</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Badges</h2>
        <p class="text-star max-w-2xl mt-4">Credentials earned along the way.</p>
      </div>

      <div v-if="certificates.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certificates"
          :key="cert.title"
          class="cert-card pixel-card"
          v-reveal="index * 110"
        >
          <div v-if="cert.image" class="cert-banner cert-image-frame">
            <img :src="cert.image" :alt="cert.title" class="cert-image" loading="lazy" />
          </div>
          <div v-else class="cert-banner cert-banner--placeholder" :class="index % 2 ? 'cert-banner--data' : 'cert-banner--signal'">
            <i class="fas fa-certificate"></i>
          </div>

          <div class="cert-body">
            <div class="mb-4">
              <h3 class="font-display text-star leading-snug">{{ cert.title }}</h3>
              <p class="text-mist text-sm mt-1">{{ cert.issuer }}</p>
            </div>

            <div class="flex items-center justify-between cert-foot pt-4">
              <span class="font-mono text-signal">{{ cert.date }}</span>
              <a
                v-if="cert.credentialUrl"
                :href="cert.credentialUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="cert-link"
              >
                VIEW &#9654;
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state: shown until real certificate data is added below -->
      <div v-else class="empty-state pixel-card" v-reveal>
        <i class="fas fa-satellite-dish empty-icon"></i>
        <p class="font-mono text-mist uppercase">No badges unlocked yet</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        {
          title: 'PROGRAM MANDIRI CERTIFICATE',
          issuer: 'Infinite Learning',
          date: '30 June 2026',
          image: '/certificates/1.png',
          credentialUrl: ''
        },
        {
          title: 'CERTIFICATE OF INTERNSHIP',
          issuer: 'Infinite Learning',
          date: '30 June 2026',
          image: '',
          credentialUrl: ''
        },
        {
          title: 'PENGHARGAAN PENYELESAIAN KURSUS JAVA FOUNDATIONS',
          issuer: 'Oracle Academy',
          date: '21 Februari 2024',
          image: '',
          credentialUrl: ''
        },
        {
          title: 'PENGHARGAAN PENYELESAIAN UJIAN AKHIR JAVA FOUNDATIONS',
          issuer: 'Oracle Academy',
          date: '21 Februari 2024',
          image: '',
          credentialUrl: ''
        },
      ]
    }
  }
}
</script>

<style scoped>
.cert-body {
  padding: 1.5rem;
}

.cert-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 4px dashed var(--line);
}

.cert-banner {
  height: 160px;
  overflow: hidden;
  border-bottom: 4px solid var(--star);
}

.cert-image-frame {
  display: block;
}

.cert-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s steps(6);
}

.cert-image-frame:hover .cert-image {
  transform: scale(1.15);
}

.cert-banner--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--star);
  background-image:
    linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.cert-banner--signal { background-color: #ab5236; }
.cert-banner--data { background-color: #1c6fb0; }
.cert-banner--placeholder i { text-shadow: 4px 4px 0 var(--ink); }

.cert-link {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.55rem;
  color: var(--void);
  background: var(--data);
  border: 3px solid var(--star);
  padding: 0.4rem 0.5rem;
}

.cert-link:hover {
  background: var(--signal);
  color: var(--void);
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3.5rem 2rem;
  text-align: center;
}

.empty-icon {
  font-size: 1.75rem;
  color: var(--mist);
}
</style>
