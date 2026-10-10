<template>
  <section class="hero hud-grid relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="hero-ready mb-6">&gt; PLAYER 1 READY &mdash; BATAM, ID</p>

          <h1 class="hero-heading mb-6" aria-label="Hi, I'm Hendry">
            <span aria-hidden="true">HI, I'M<br /><span class="hero-name">HENDRY</span></span>
          </h1>

          <div class="mb-8">
            <role-readout :roles="roles" />
          </div>

          <div class="flex flex-wrap gap-2 mb-10">
            <span v-for="tag in tags" :key="tag" class="stack-chip">{{ tag }}</span>
          </div>

          <div class="flex flex-wrap gap-5">
            <a href="#projects" class="pixel-btn pixel-btn--signal" @click.prevent="scrollTo('projects')">
              <span class="blink">&#9654;</span> Start Game
            </a>
            <a href="#contact" class="pixel-btn" @click.prevent="scrollTo('contact')">2P &middot; Contact</a>
            <a href="/Hendry%20%E2%80%94%20CV%20(ATS).pdf" download="Hendry-CV.pdf" class="pixel-btn pixel-btn--data">
              <i class="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>

        <!-- Pixel sprite card -->
        <div class="hidden lg:flex justify-center">
          <div class="sprite-card">
            <div class="sprite-bob">
              <svg role="img" aria-label="Pixel art wizard holding a staff" viewBox="0 0 16 16" width="240" height="240" shape-rendering="crispEdges" style="display:block;image-rendering:pixelated">
                <path fill="#ffec27" d="M13 3h1v10h-1zM12 2h3v1h-3z" />
                <path fill="#ff77a8" d="M6 1h3v1H6zM5 2h5v1H5zM4 3h7v1H4z" />
                <path fill="#fff1e8" d="M5 4h6v3H5z" />
                <path fill="#1a1c2c" d="M6 5h1v1H6zM9 5h1v1H9z" />
                <path fill="#29adff" d="M4 7h8v4H4zM3 8h1v2H3z" />
                <path fill="#fff1e8" d="M12 8h1v1h-1z" />
                <path fill="#1a6fb0" d="M4 10h8v1H4z" />
                <path fill="#ffec27" d="M7 8h2v1H7z" />
                <path fill="#333c57" d="M5 11h2v2H5zM9 11h2v2H9zM4 13h3v1H4zM9 13h3v1H9z" />
              </svg>
            </div>
            <div class="sprite-shadow"></div>
            <div class="sprite-label">LV.24 &middot; WIZARD.EXE</div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint" @click="scrollDown">
      <span class="blink">PRESS &#9660; TO SCROLL</span>
    </div>
  </section>
</template>

<script>
import RoleReadout from './MatrixRain.vue'

export default {
  components: { RoleReadout },
  data() {
    return {
      roles: ['Junior Full Stack Developer', 'Next.js · React · Supabase', 'Logistics & Operations + IT', 'IoT & AI Tinkerer'],
      tags: ['Next.js', 'React', 'Supabase', 'Tailwind CSS', 'Laravel', 'Python']
    }
  },
  methods: {
    scrollTo(target) {
      const element = document.getElementById(target)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (history.pushState) history.pushState(null, null, `#${target}`)
    },
    scrollDown() {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.hero-ready {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.75rem;
  color: var(--data);
}

.hero-heading {
  font-family: 'Press Start 2P', monospace;
  font-weight: 400;
  font-size: clamp(1.75rem, 6vw, 4rem);
  line-height: 1.35;
  color: var(--star);
  animation: glitch 4s steps(1) infinite;
}

.hero-heading:hover {
  animation: glitch-hover 0.25s steps(1) infinite;
  color: var(--signal);
}

.hero-name {
  color: var(--signal);
}

.stack-chip {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  padding: 0.5rem 0.6rem;
  background: var(--line);
  border: 2px solid var(--data);
  color: var(--data);
}

.stack-chip:hover {
  background: var(--data);
  color: var(--void);
}

.blink {
  animation: blink 1s steps(1) infinite;
}

.sprite-card {
  padding: 32px 40px 24px;
  border: 4px solid var(--star);
  background: var(--panel);
  box-shadow: 8px 8px 0 var(--ink);
}

.sprite-bob {
  animation: bob 1.2s steps(4) infinite;
}

.sprite-shadow {
  height: 12px;
  margin: 8px 24px 0;
  background: rgba(0, 0, 0, 0.4);
}

.sprite-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.625rem;
  text-align: center;
  margin-top: 16px;
  color: var(--signal);
}

.scroll-hint {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  color: var(--mist);
  white-space: nowrap;
}
</style>
