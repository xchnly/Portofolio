<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Particle.js Background -->
    <div id="particles-js" class="absolute inset-0 z-0"></div>

    <!-- Animated Floating Shapes (2D) -->
    <div class="floating-shape circle animate-float-1"></div>
    <div class="floating-shape triangle animate-float-2"></div>
    <div class="floating-shape square animate-float-3"></div>

    <!-- Holographic Grid -->
    <div class="holographic-grid"></div>

    <!-- Hero Content -->
    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="max-w-3xl mx-auto">
        <!-- Glitch Effect Title -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="Hi, I'm Hendry">
          <span>Hi, I'm </span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-gradient-x">
            Hendry
          </span>
        </h1>
        
        <!-- Matrix Rain Style Subtitle -->
        <matrix-rain class="text-2xl md:text-4xl text-emerald-400 mb-8" 
          :text="'Junior Fullstack Developer'" 
          :speed="2">
        </matrix-rain>
        
        <!-- Animated Tags -->
        <div class="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto">
          <span v-for="(tag, i) in tags" :key="i" 
                class="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-white shadow-lg animate-tag"
                :style="`--i:${i}`"
                @mouseover="bounceTag(i)"
                @animationend="resetTag(i)">
            {{ tag }}
          </span>
        </div>
        
        <!-- Interactive Buttons -->
        <div class="flex justify-center space-x-4">
          <router-link 
            to="#projects" 
            class="interactive-btn primary"
            @click.native="scrollTo('projects')"
          >
            <span class="btn-inner">View My Work</span>
            <span class="btn-particles"></span>
          </router-link>

          <router-link 
            to="#contact" 
            class="interactive-btn secondary"
            @click.native="scrollTo('contact')"
          >
            <span class="btn-inner">Contact Me</span>
            <span class="btn-particles"></span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
      <div class="mouse-scroll" @click="scrollDown"></div>
    </div>
  </section>
</template>

<script>
import MatrixRain from './MatrixRain.vue'

export default {
  components: { MatrixRain },
  data() {
    return {
      tags: [
        'Vue.js', 'Tailwind Css', 'Python', 
        'Animations', 'UI/UX',
        'Creative Coding', 'Interactive Design'
      ],
      activeTag: null
    }
  },
  mounted() {
    this.initParticles()
  },
  methods: {
    initParticles() {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#6366f1" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#6366f1", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          }
        }
      })
    },
    scrollTo(target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Untuk handle URL hash
      if (history.pushState) {
        history.pushState(null, null, `#${target}`);
      } else {
        window.location.hash = `#${target}`;
      }
    },
    bounceTag(index) {
      this.activeTag = index
    },
    resetTag(index) {
      if (this.activeTag === index) {
        this.activeTag = null
      }
    },
    navigateToWork() {
      // Implement navigation to work section
      console.log("Navigating to work section")
      this.animateButton('primary')
    },
    navigateToContact() {
      // Implement navigation to contact section
      console.log("Navigating to contact section")
      this.animateButton('secondary')
    },
    scrollDown() {
      // Implement scroll down functionality
      console.log("Scrolling down")
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    },
    animateButton(type) {
      const buttons = document.querySelectorAll(`.interactive-btn.${type}`)
      buttons.forEach(btn => {
        btn.classList.add('animate-click')
        setTimeout(() => {
          btn.classList.remove('animate-click')
        }, 1000)
      })
    }
  }
}
</script>

<style>
/* Particle.js container */
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* Floating 2D Shapes */
.floating-shape {
  position: absolute;
  width: 150px;
  height: 150px;
  opacity: 0.15;
  z-index: 1;
  filter: blur(1px);
}

.circle {
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);
}

.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: linear-gradient(45deg, rgba(236, 72, 153, 0.6), transparent);
}

.square {
  background: linear-gradient(45deg, rgba(167, 139, 250, 0.6), transparent);
  transform: rotate(45deg);
}

/* Floating Animations */
@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -30px) rotate(5deg); }
  50% { transform: translate(-15px, 20px) rotate(-5deg); }
  75% { transform: translate(10px, -20px) rotate(3deg); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-25px, 15px) rotate(-8deg); }
  50% { transform: translate(20px, -15px) rotate(8deg); }
  75% { transform: translate(-15px, 25px) rotate(-3deg); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, 10px) rotate(10deg); }
  50% { transform: translate(-20px, -20px) rotate(-10deg); }
  75% { transform: translate(15px, 15px) rotate(5deg); }
}

.animate-float-1 {
  animation: float1 12s ease-in-out infinite;
  top: 20%;
  left: 10%;
}

.animate-float-2 {
  animation: float2 15s ease-in-out infinite;
  bottom: 25%;
  right: 15%;
}

.animate-float-3 {
  animation: float3 18s ease-in-out infinite;
  top: 50%;
  left: 70%;
}

/* Interactive Buttons */
.interactive-btn {
  position: relative;
  padding: 1px;
  border-radius: 9999px;
  overflow: hidden;
  transition: all 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
}

.interactive-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(99, 102, 241, 0.5) 30%,
    rgba(236, 72, 153, 0.5) 70%,
    transparent 100%
  );
  animation: rotate 3s linear infinite;
  z-index: 0;
}

.interactive-btn.primary::before {
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(99, 102, 241, 0.8) 30%,
    rgba(167, 139, 250, 0.8) 70%,
    transparent 100%
  );
}

.interactive-btn.secondary::before {
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(236, 72, 153, 0.8) 30%,
    rgba(244, 114, 182, 0.8) 70%,
    transparent 100%
  );
}

.btn-inner {
  position: relative;
  display: block;
  padding: 12px 24px;
  border-radius: 9999px;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: all 0.3s;
}

.btn-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  overflow: hidden;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}

.interactive-btn:hover .btn-inner {
  background: rgba(15, 23, 42, 0.9);
  transform: scale(1.05);
}

.interactive-btn:hover .btn-particles {
  opacity: 1;
}

.interactive-btn:active .btn-inner {
  transform: scale(0.95);
}

/* Button Click Animation */
.animate-click .btn-particles {
  opacity: 1;
  animation: particles-explode 0.6s ease-out forwards;
}

@keyframes particles-explode {
  0% {
    opacity: 0;
    transform: scale(0.5);
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
    background: radial-gradient(circle, rgba(255,255,255,0) 0%, transparent 70%);
  }
}

/* Mouse Scroll Indicator */
.mouse-scroll {
  width: 24px;
  height: 40px;
  border: 2px solid white;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
}

.mouse-scroll:hover {
  transform: translateY(5px) scale(1.1);
}

.mouse-scroll::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  transform: translateX(-50%);
  animation: scroll-wheel 2s infinite;
}

@keyframes scroll-wheel {
  0% { top: 6px; opacity: 1; }
  100% { top: 18px; opacity: 0; }
}

/* Animated Tags */
.animate-tag {
  animation: tag-float 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
  cursor: pointer;
  transition: all 0.3s;
}

@keyframes tag-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
}

/* Holographic Grid */
.holographic-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: grid-move 20s linear infinite;
  z-index: 0;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* Rotate animation for buttons */
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

/* Glitch Effect (unchanged) */
.glitch {
  position: relative;
}

.glitch::before, .glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch::before {
  color: #0ff;
  z-index: -1;
  animation: glitch-effect 3s infinite;
}

.glitch::after {
  color: #f0f;
  z-index: -2;
  animation: glitch-effect 2s infinite reverse;
}

@keyframes glitch-effect {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}
</style>