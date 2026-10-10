<template>
  <header class="site-header fixed top-0 w-full z-50">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-[4.5rem] gap-2 sm:gap-4">
        <a href="#home" class="logo-link" @click.prevent="scrollTo('home')">&#9668;<span class="logo-full"> PLAYER_01 </span><span class="logo-short">P1</span>&#9658;</a>

        <nav class="hidden md:flex items-center gap-1" aria-label="Main menu">
          <a
            v-for="item in navItems"
            :key="item.id"
            href="#"
            class="channel-link"
            :class="{ 'is-active': activeSection === item.id }"
            :aria-current="activeSection === item.id ? 'page' : undefined"
            @click.prevent="scrollTo(item.id)"
          >{{ activeSection === item.id ? '▶ ' : '' }}{{ item.name }}</a>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <button class="snd-btn" :aria-label="theme.mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'" @click="toggleTheme">
            <span class="btn-icon" aria-hidden="true">{{ theme.mode === 'light' ? '☾' : '☀' }}</span>
            <span class="btn-text">{{ theme.mode === 'light' ? 'DARK' : 'LIGHT' }}</span>
          </button>
          <button class="snd-btn" :aria-pressed="muted" aria-label="Toggle sound" @click="toggleMute">
            <span class="btn-icon" aria-hidden="true">{{ muted ? '♪x' : '♪' }}</span>
            <span class="btn-text">SND: {{ muted ? 'OFF' : 'ON' }}</span>
          </button>
          <button class="md:hidden burger" @click="mobileOpen = !mobileOpen" aria-label="Toggle navigation menu" :aria-expanded="mobileOpen">
            {{ mobileOpen ? 'X' : 'MENU' }}
          </button>
        </div>
      </div>
    </div>

    <transition name="drop">
      <div v-if="mobileOpen" class="md:hidden mobile-menu">
        <nav class="flex flex-col px-4 sm:px-6 py-2" aria-label="Mobile menu">
          <a
            v-for="item in navItems"
            :key="item.id"
            href="#"
            class="mobile-channel-link"
            :class="{ 'is-active': activeSection === item.id }"
            @click.prevent="scrollTo(item.id); mobileOpen = false"
          >{{ activeSection === item.id ? '▶ ' : '' }}{{ item.name }}</a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
import { sound, toggleMute } from '../sound'
import { theme, toggleTheme } from '../theme'

export default {
  data() {
    return {
      mobileOpen: false,
      scrolled: false,
      activeSection: 'home',
      observer: null,
      navItems: [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'experience', name: 'Experience' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' }
      ]
    }
  },
  computed: {
    theme() {
      return theme
    },
    muted() {
      return sound.muted
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(() => {
      setTimeout(this.setupObserver, 50)
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    toggleMute,
    toggleTheme,
    handleScroll() {
      this.scrolled = window.scrollY > 10
    },
    scrollTo(sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      if (history.pushState) history.pushState(null, null, `#${sectionId}`)
    },
    setupObserver() {
      const sections = this.navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)
      if (!sections.length) return

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id
            }
          })
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      )
      sections.forEach((section) => this.observer.observe(section))
    }
  }
}
</script>

<style scoped>
.site-header {
  background: var(--void);
  border-bottom: 4px solid var(--star);
  box-shadow: 0 4px 0 var(--ink);
}

.logo-link {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.8rem;
  color: var(--signal);
  white-space: nowrap;
}

.logo-link:hover {
  color: var(--pink);
}

.channel-link {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.625rem;
  text-transform: uppercase;
  color: var(--star);
  padding: 0.5rem 0.6rem;
  display: inline-block;
}

.channel-link:hover {
  color: var(--void);
  background: var(--data);
}

.channel-link.is-active {
  color: var(--void);
  background: var(--signal);
  animation: blink 0.9s steps(1) infinite;
}

.snd-btn,
.burger {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  background: var(--line);
  color: var(--star);
  border: 4px solid var(--star);
  padding: 0.5rem 0.6rem;
}

.snd-btn:hover,
.burger:hover {
  background: var(--pink);
  color: var(--void);
}

.mobile-menu {
  background: var(--void);
  border-top: 4px solid var(--star);
}

.mobile-channel-link {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 0.9rem 0;
  color: var(--star);
  border-bottom: 2px dashed var(--line);
}

.mobile-channel-link:last-child {
  border-bottom: none;
}

.mobile-channel-link.is-active {
  color: var(--signal);
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.2s steps(3);
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
}

.logo-short,
.btn-icon {
  display: none;
}

.mobile-menu {
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

/* narrow phones: shorter logo and icon-only buttons so the bar never overflows */
@media (max-width: 639px) {
  .logo-link {
    font-size: 0.65rem;
  }
  .logo-full,
  .btn-text {
    display: none;
  }
  .logo-short,
  .btn-icon {
    display: inline;
  }
  .snd-btn,
  .burger {
    font-size: 0.6rem;
    padding: 0.5rem 0.55rem;
    min-width: 40px;
    min-height: 40px;
    border-width: 3px;
  }
}
</style>
