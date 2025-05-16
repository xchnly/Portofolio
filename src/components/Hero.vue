<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Particle.js Background -->
    <div id="particles-js" class="absolute inset-0 z-0"></div>

    <!-- Floating 3D Tech Elements -->
    <div class="tech-sphere animate-float-3d"></div>
    <div class="tech-cube animate-rotate-3d"></div>
    <div class="tech-pyramid animate-float-3d-alt"></div>

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
                :style="`--i:${i}`">
            {{ tag }}
          </span>
        </div>
        
        <!-- Holographic Buttons -->
        <div class="flex justify-center space-x-4">
          <button class="holographic-btn primary">
            <span class="btn-inner">View My Work</span>
          </button>
          <button class="holographic-btn secondary">
            <span class="btn-inner">Contact Me</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
      <div class="mouse-scroll"></div>
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
        'Vue.js', 'React', 'Three.js', 
        'WebGL', 'Animations', 'UI/UX',
        'Creative Coding', 'Interactive Design'
      ]
    }
  },
  mounted() {
    this.initParticles()
    this.init3DElements()
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
    init3DElements() {
      // This would be implemented with Three.js in a real project
      console.log("3D elements would be initialized here with Three.js")
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

/* 3D Elements (would be replaced with actual Three.js elements) */
.tech-sphere, .tech-cube, .tech-pyramid {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(99, 102, 241, 0.1);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  z-index: 1;
}

.tech-sphere {
  top: 20%;
  left: 10%;
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(99, 102, 241, 0.2);
}

.tech-cube {
  bottom: 20%;
  right: 10%;
  box-shadow: 0 0 50px rgba(236, 72, 153, 0.2);
}

.tech-pyramid {
  top: 50%;
  left: 50%;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Animations */
@keyframes float3d {
  0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
  50% { transform: translateY(-20px) rotateX(10deg) rotateY(10deg); }
}

@keyframes rotate3d {
  0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

.animate-float-3d {
  animation: float3d 8s ease-in-out infinite;
}

.animate-rotate-3d {
  animation: rotate3d 20s linear infinite;
}

.animate-float-3d-alt {
  animation: float3d 10s ease-in-out infinite reverse;
}

/* Glitch Effect */
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

/* Holographic Buttons */
.holographic-btn {
  position: relative;
  padding: 1px;
  border-radius: 9999px;
  overflow: hidden;
  transition: all 0.3s;
}

.holographic-btn::before {
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

.holographic-btn.primary::before {
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(99, 102, 241, 0.8) 30%,
    rgba(167, 139, 250, 0.8) 70%,
    transparent 100%
  );
}

.holographic-btn.secondary::before {
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

.holographic-btn:hover .btn-inner {
  background: rgba(15, 23, 42, 0.9);
  transform: scale(1.05);
}

/* Mouse Scroll Indicator */
.mouse-scroll {
  width: 24px;
  height: 40px;
  border: 2px solid white;
  border-radius: 12px;
  position: relative;
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
</style>