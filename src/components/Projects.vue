<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="projects">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="circuit-pattern"></div>
      <div class="floating-dots"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          My Projects
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Showcasing my <span class="text-indigo-300">best work</span> and creative solutions
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card group"
          :style="`--delay: ${index * 0.1}s`"
          @mouseenter="hoverProject(index)"
          @mouseleave="resetProject(index)"
        >
          <div class="card-inner">
            <!-- Project Image with Glow Effect -->
            <div class="image-container">
              <img 
                :src="project.imageUrl" 
                :alt="project.title"
                class="project-image"
              >
              <div class="image-overlay"></div>
              <div class="tech-bubbles">
                <span 
                  v-for="(tech, techIndex) in project.technologies" 
                  :key="techIndex"
                  class="tech-bubble"
                  :style="`--tech-index: ${techIndex}`"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-footer">
                <a 
                  :href="project.link" 
                  class="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg class="link-arrow" viewBox="0 0 24 24">
                    <path d="M5 12H19M12 5L19 12L12 19"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Hover Elements -->
            <div class="project-glow"></div>
            <div class="project-sparkles">
              <div v-for="i in 8" :key="i" class="sparkle"></div>
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
      projects: [
        {
          id: 1,
          title: "PETANI | IoT and Automation Plant Waterer",
          description: "IoT based automatic watering system and automation using ESP32 and Blynk",
          technologies: ["ESP32", "Blynk", "C++"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 2,
          title: "SNAFH-R1 | Human Tracking Arm Robot",
          description: "Human tracking arm robot with machine learning and robotic system",
          technologies: ["Python", "Machine Learning", "Arduino"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 3,
          title: "Label Master V2.0",
          description: "Secure banking app with biometric authentication",
          technologies: ["Python"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 4,
          title: "Rename Master",
          description: "Secure banking app with biometric authentication",
          technologies: ["Python"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 5,
          title: "GroupIN Folders",
          description: "Secure banking app with biometric authentication",
          technologies: ["Python"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 6,
          title: "PKWT Maker",
          description: "Secure banking app with biometric authentication",
          technologies: ["Python"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 7,
          title: "Cloth Label Maker",
          description: "Secure banking app with biometric authentication",
          technologies: ["Python"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 8,
          title: "FrontEnd MidnightPull",
          description: "Secure banking app with biometric authentication",
          technologies: ["Vue Js", "Tailwind Css"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 9,
          title: "Full Stack Novaxin新星系统",
          description: "Secure banking app with biometric authentication",
          technologies: ["Laravel", "Talwind Css", "MySQL"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 10,
          title: "FrontEnd Website HIMATIF",
          description: "Secure banking app with biometric authentication",
          technologies: ["Vue Js", "Tailwind Css"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 11,
          title: "STACKO | Your Logistic Solutions",
          description: "Secure banking app with biometric authentication",
          technologies: ["Python", "3D-Bin-Packing", "Next Js", "MongoDB"],
          imageUrl: "",
          link: "#"
        },
        {
          id: 12,
          title: "NOVARA | CMIM's PMC SYSTEM",
          description: "Secure banking app with biometric authentication",
          technologies: ["Laravel", "Vite+React", "Tailwind Css", "PostgreeSQL"],
          imageUrl: "",
          link: "#"
        },
      ],
      hoverStates: []
    }
  },
  methods: {
    hoverProject(index) {
      this.hoverStates[index] = true
    },
    resetProject(index) {
      this.hoverStates[index] = false
    },
    getRandomPosition() {
      return {
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10
      }
    }
  },
  mounted() {
    this.hoverStates = Array(this.projects.length).fill(false)
  }
}
</script>

<style>
/* Background Effects */
.circuit-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
  opacity: 0.3;
}

.floating-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

/* Project Card */
.project-card {
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: card-entrance 0.6s ease-out both;
  animation-delay: var(--delay);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.project-card:hover .card-inner {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  border-color: rgba(99, 102, 241, 0.5);
}

/* Image Container */
.image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 50%);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 0.6;
}

/* Tech Bubbles */
.tech-bubbles {
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .tech-bubbles {
  transform: translateY(0);
  opacity: 1;
}

.tech-bubble {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(99, 102, 241, 0.9);
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: 9999px;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s ease;
  transition-delay: calc(var(--tech-index) * 0.1s);
}

.project-card:hover .tech-bubble {
  transform: translateY(0);
  opacity: 1;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
  position: relative;
}

.project-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  transition: all 0.3s ease;
}

.project-card:hover .project-title::after {
  width: 60px;
}

.project-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

/* Project Footer */
.project-footer {
  display: flex;
  justify-content: flex-end;
}

.project-link {
  display: inline-flex;
  align-items: center;
  color: #6366f1;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: #a855f7;
}

.link-arrow {
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
  stroke: currentColor;
  transition: transform 0.3s ease;
}

.project-link:hover .link-arrow {
  transform: translateX(3px);
}

/* Glow Effect */
.project-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.project-card:hover .project-glow {
  opacity: 0.5;
}

/* Sparkles */
.project-sparkles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0;
  animation: sparkle-flicker 2s ease-in-out infinite;
}

.project-card:hover .sparkle {
  opacity: 0.8;
}

.sparkle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0.1s; }
.sparkle:nth-child(2) { top: 80%; left: 30%; animation-delay: 0.3s; }
.sparkle:nth-child(3) { top: 40%; left: 70%; animation-delay: 0.5s; }
.sparkle:nth-child(4) { top: 60%; left: 10%; animation-delay: 0.7s; }
.sparkle:nth-child(5) { top: 30%; left: 50%; animation-delay: 0.9s; }
.sparkle:nth-child(6) { top: 70%; left: 80%; animation-delay: 1.1s; }
.sparkle:nth-child(7) { top: 10%; left: 40%; animation-delay: 1.3s; }
.sparkle:nth-child(8) { top: 90%; left: 60%; animation-delay: 1.5s; }

@keyframes sparkle-flicker {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 0.4; }
}

/* Card Entrance Animation */
@keyframes card-entrance {
  from {
    opacity: 0;
    transform: translateY(30px) rotateX(10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .project-card {
    animation-delay: calc(var(--delay) * 0.5);
  }
  
  .image-container {
    height: 180px;
  }
}
</style>