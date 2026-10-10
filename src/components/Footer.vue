<template>
  <footer class="relative pixel-footer">
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12" v-reveal>
        <div>
          <p class="font-mono text-data uppercase mb-3">Game Master</p>
          <h3 class="font-display text-signal mb-3">HENDRY</h3>
          <p class="text-star text-sm leading-relaxed">
            A quest log of projects, skills and experience — saved in Batam, Indonesia.
          </p>
          <div class="flex gap-3 mt-6">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="footer-social" :aria-label="social.name">
              <i :class="social.icon"></i>
            </a>
          </div>
          <a href="/Hendry-CV.pdf" download="Hendry-CV.pdf" class="footer-link inline-flex items-center gap-2 mt-6">
            <i class="fas fa-download text-signal"></i> Download CV
          </a>
        </div>

        <div>
          <h3 class="footer-title">Quick Links</h3>
          <ul class="space-y-2.5">
            <li v-for="link in quickLinks" :key="link.id">
              <a href="#" class="footer-link" @click.prevent="scrollTo(link.id)">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h3 class="footer-title">Contact Info</h3>
          <ul class="space-y-2.5">
            <li class="flex items-center gap-3 text-mist text-sm">
              <i class="fas fa-envelope text-signal w-4"></i> hendryhuang70@gmail.com
            </li>
            <li class="flex items-center gap-3 text-mist text-sm">
              <i class="fas fa-phone text-signal w-4"></i> +62 821 5096 2909
            </li>
            <li class="flex items-center gap-3 text-mist text-sm">
              <i class="fas fa-location-dot text-signal w-4"></i> Batam, Indonesia
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bar mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-mono text-star">&copy; {{ year }} HENDRY &middot; ALL RIGHTS RESERVED</p>
        <p class="press-start font-display">PRESS START TO CONTINUE</p>
      </div>
    </div>

    <button class="back-to-top" :class="{ 'is-visible': showBackToTop }" @click="scrollToTop" aria-label="Back to top">
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showBackToTop: false,
      socialLinks: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/xchnly' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/xchnly' },
      ],
      quickLinks: [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' }
      ]
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollTo(sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    }
  }
}
</script>

<style scoped>
.pixel-footer {
  /* always-dark footer: re-pin the dark palette for everything inside */
  --void: #1a1c2c;
  --ink: #0b0c16;
  --line: #333c57;
  --star: #fff1e8;
  --mist: #c2c3c7;
  --signal: #ffec27;
  --data: #29adff;
  --pink: #ff77a8;
  background: #0b0c16;
  border-top: 4px solid #fff1e8;
  color: #fff1e8;
}

.footer-bar {
  border-top: 4px dashed var(--line);
}

.press-start {
  font-size: 0.65rem;
  color: var(--signal);
  animation: blink 1.1s steps(1) infinite;
}

.footer-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--data);
  margin-bottom: 1.25rem;
}

.footer-link {
  color: var(--star);
  font-size: 1.05rem;
}

.footer-link:hover {
  color: var(--signal);
}

.footer-social {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--void);
  border: 4px solid var(--star);
  color: var(--star);
}

.footer-social:hover {
  color: var(--void);
  background: var(--signal);
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--signal);
  border: 4px solid var(--star);
  box-shadow: 4px 4px 0 var(--ink);
  color: var(--void);
  opacity: 0;
  pointer-events: none;
  z-index: 40;
  transition: transform 0.08s steps(2), box-shadow 0.08s steps(2);
}

.back-to-top.is-visible {
  opacity: 1;
  pointer-events: auto;
}

.back-to-top:hover {
  background: var(--pink);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}

.back-to-top:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0 var(--ink);
}
</style>
