<template>
  <header class="fixed w-full z-50" :class="{'header-scrolled': isScrolled}">
    <!-- Animated background elements -->
    <div class="header-background">
      <div class="particle" v-for="(particle, index) in particles" :key="index" :style="particle.style"></div>
    </div>
    
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between relative">
        <!-- Holographic Logo -->
        <router-link 
          to="/" 
          class="holographic-logo"
          @mouseenter="activateHologram"
          @mouseleave="deactivateHologram"
        >
          <span class="logo-base">Hendry's PORTFOLIO</span>
          <span class="hologram-effect" :class="{'active': hologramActive}"></span>
          <span class="glow-effect"></span>
        </router-link>

        <!-- Cyberpunk Navigation -->
        <nav class="hidden md:block cyber-nav">
          <ul class="flex space-x-1">
            <li v-for="(item, index) in navItems" :key="index">
              <router-link 
                :to="`#${item.id}`" 
                class="cyber-link"
                @click.prevent="scrollTo(item.id)"
                @mouseenter="playHoverSound"
              >
                <span class="link-number">0{{index+1}}</span>
                <span class="link-text">{{ item.name }}</span>
                <span class="link-underline" :style="{'--random-hue': randomHues[index]}"></span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Floating Mobile Menu -->
    <transition name="neon-fade">
      <div 
        v-if="mobileMenuOpen" 
        class="floating-mobile-menu md:hidden"
      >
        <div class="menu-background"></div>
        <ul class="menu-items">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link 
              :to="`#${item.id}`" 
              class="floating-link"
              @click="scrollTo(item.id); toggleMobileMenu()"
            >
              <span class="floating-link-number">0{{index+1}}</span>
              <span class="floating-link-text">{{ item.name }}</span>
              <span class="floating-link-orb"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Audio element for hover sounds (hidden) -->
    <audio ref="hoverSound" src="@/assets/sounds/hover.mp3" preload="auto"></audio>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      hologramActive: false,
      isScrolled: false,
      particles: [],
      randomHues: [],
      navItems: [
        { id: 'home', name: 'HOME' },
        { id: 'about', name: 'ABOUT' },
        { id: 'skills', name: 'SKILLS' },
        { id: 'projects', name: 'PROJECTS' },
        { id: 'contact', name: 'CONTACT' }
      ]
    }
  },
  created() {
    // Generate random hues for link underlines
    this.randomHues = this.navItems.map(() => Math.floor(Math.random() * 360));
    
    // Create particles
    this.createParticles();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    scrollTo(sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    activateHologram() {
      this.hologramActive = true;
    },
    deactivateHologram() {
      this.hologramActive = false;
    },
    playHoverSound() {
      if (this.$refs.hoverSound) {
        this.$refs.hoverSound.currentTime = 0;
        this.$refs.hoverSound.play();
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
    createParticles() {
      const particles = [];
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }
        });
      }
      
      this.particles = particles;
    },
    handleResize() {
      if (window.innerWidth >= 768 && this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
      }
    }
  }
}
</script>

<style scoped>
/* Base Header Styles */
header {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-scrolled {
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Animated Particle Background */
.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.particle {
  position: absolute;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  animation: float infinite linear;
  mix-blend-mode: overlay;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-100px) translateX(20px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

/* Holographic Logo */
.holographic-logo {
  position: relative;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  z-index: 2;
  overflow: hidden;
}

.logo-base {
  position: relative;
  z-index: 3;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.hologram-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(0, 255, 255, 0) 0%, 
    rgba(0, 255, 255, 0.1) 50%, 
    rgba(0, 255, 255, 0) 100%);
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.hologram-effect.active {
  transform: translateX(100%);
}

.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, 
    rgba(0, 255, 255, 0.3) 0%, 
    transparent 70%);
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1;
}

.holographic-logo:hover .glow-effect {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

.holographic-logo:hover .logo-base {
  color: cyan;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

/* Cyberpunk Navigation */
.cyber-nav {
  position: relative;
}

.cyber-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  text-decoration: none;
  overflow: hidden;
}

.link-number {
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.2rem;
  transition: all 0.3s ease;
}

.link-text {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: white;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.link-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: hsl(var(--random-hue), 100%, 50%);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 10px hsl(var(--random-hue), 100%, 50%),
              0 0 20px hsl(var(--random-hue), 100%, 50%);
}

.cyber-link:hover .link-number {
  color: white;
  text-shadow: 0 0 5px white;
}

.cyber-link:hover .link-text {
  color: cyan;
  transform: translateY(-2px);
}

.cyber-link:hover .link-underline {
  transform: scaleX(1);
  transform-origin: left;
}

/* Holographic Menu Button */
.holographic-menu {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.menu-line {
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 2;
}

.holographic-menu.open .menu-line:nth-child(1) {
  transform: translateY(13.5px) rotate(45deg);
  background: cyan;
}

.holographic-menu.open .menu-line:nth-child(2) {
  opacity: 0;
}

.holographic-menu.open .menu-line:nth-child(3) {
  transform: translateY(-13.5px) rotate(-45deg);
  background: cyan;
}

.menu-hologram {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(0, 255, 255, 0.1) 0%, 
    rgba(0, 255, 255, 0.3) 50%, 
    rgba(0, 255, 255, 0.1) 100%);
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 1;
}

.menu-hologram.active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

.holographic-menu:hover .menu-line {
  background: cyan;
}

/* Floating Mobile Menu */
.floating-mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 9;
}

.menu-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 10, 20, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 0 0 20px 20px;
  z-index: -1;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.floating-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.floating-link:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateX(10px);
}

.floating-link-number {
  font-size: 0.8rem;
  color: cyan;
  margin-right: 1rem;
  font-weight: 700;
}

.floating-link-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.floating-link-orb {
  position: absolute;
  right: 1rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: cyan;
  box-shadow: 0 0 10px cyan;
  opacity: 0;
  transition: all 0.3s ease;
}

.floating-link:hover .floating-link-orb {
  opacity: 1;
  transform: scale(1.5);
}

/* Transition Effects */
.neon-fade-enter-active,
.neon-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.neon-fade-enter-from,
.neon-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive Adjustments */
@media (max-width: 767px) {
  .holographic-logo {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
  
  .floating-mobile-menu {
    top: 60px;
    padding: 1.5rem;
  }
  
  .floating-link {
    padding: 0.8rem 1rem;
  }
  
  .floating-link-text {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .cyber-link {
    padding: 1rem 1rem;
  }
  
  .link-text {
    font-size: 1rem;
  }
}
</style>