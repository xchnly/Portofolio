<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="learning-goals">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="h-full w-full bg-gradient-to-br from-indigo-900/20 via-gray-900 to-purple-900/20"></div>
      <div class="absolute inset-0 grid-pattern"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Learning Goals
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Technologies and skills I'm <span class="text-indigo-300">currently focusing</span> on mastering
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div 
          v-for="(goal, index) in learningGoals" 
          :key="index"
          class="learning-card group"
          :style="`--delay: ${index * 0.1}s`"
          @mouseenter="hoverCard(index)"
          @mouseleave="resetCard(index)"
        >
          <div class="card-inner">
            <div class="icon-container">
              <img 
                :src="goal.image" 
                :alt="goal.name" 
                class="tech-icon"
                :class="{'animate-pulse': goal.progress < 5}"
              >
              <div class="icon-halo"></div>
            </div>
            
            <h3 class="tech-name">{{ goal.name }}</h3>
            
            <div class="progress-container">
              <div class="progress-text">
                <span class="text-gray-400 text-sm">Progress:</span>
                <span class="text-indigo-400 font-medium">{{ goal.progress }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill"
                  :style="{
                    width: `${goal.progress}%`,
                    background: `linear-gradient(90deg, ${getProgressColor(goal.progress)})`
                  }"
                ></div>
              </div>
            </div>
            
            <div class="sparkles">
              <div 
                v-for="i in 5" 
                :key="i"
                class="sparkle"
                :style="getSparkleStyle(i)"
              ></div>
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
      learningGoals: [
        { 
          name: 'Swift', 
          progress: 10, 
          image: 'https://cdn.worldvectorlogo.com/logos/swift-15.svg',
          hover: false
        },
        { 
          name: 'React Native', 
          progress: 82, 
          image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
          hover: false
        },
        { 
          name: 'Kotlin', 
          progress: 2, 
          image: 'https://cdn.worldvectorlogo.com/logos/kotlin-1.svg',
          hover: false
        },
        { 
          name: 'Dart', 
          progress: 3, 
          image: 'https://cdn.worldvectorlogo.com/logos/dart.svg',
          hover: false
        },
        { 
          name: 'Flutter', 
          progress: 2, 
          image: 'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg',
          hover: false
        },
        { 
          name: 'Solidity', 
          progress: 5, 
          image: 'https://cdn.worldvectorlogo.com/logos/solidity.svg',
          hover: false
        },
        { 
          name: 'TensorFlow', 
          progress: 76, 
          image: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg',
          hover: false
        },
        { 
          name: 'PyTorch', 
          progress: 78, 
          image: 'https://cdn.worldvectorlogo.com/logos/pytorch-2.svg',
          hover: false
        }
      ]
    }
  },
  methods: {
    getProgressColor(progress) {
      if (progress < 20) return '#f43f5e, #f97316'
      if (progress < 50) return '#f97316, #eab308'
      if (progress < 80) return '#eab308, #22c55e'
      return '#22c55e, #3b82f6'
    },
    hoverCard(index) {
      this.learningGoals[index].hover = true
    },
    resetCard(index) {
      this.learningGoals[index].hover = false
    },
    getSparkleStyle(i) {
      return {
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        animationDelay: `${i * 0.2}s`,
        opacity: '0'
      }
    }
  }
}
</script>

<style>
/* Background Pattern */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* Learning Card */
.learning-card {
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: card-entrance 0.5s ease-out both;
  animation-delay: var(--delay);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 1.5rem;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  overflow: hidden;
}

.learning-card:hover .card-inner {
  transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(99, 102, 241, 0.4);
}

/* Icon Container */
.icon-container {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  width: 60%;
  height: 60%;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.icon-halo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  filter: blur(10px);
  opacity: 0;
  transition: all 0.3s ease;
}

.learning-card:hover .tech-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.5));
}

.learning-card:hover .icon-halo {
  opacity: 1;
  transform: scale(1.2);
}

/* Tech Name */
.tech-name {
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
}

.tech-name::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  border-radius: 1px;
  opacity: 0;
  transition: all 0.3s ease;
}

.learning-card:hover .tech-name::after {
  opacity: 1;
  width: 60px;
}

/* Progress Bar */
.progress-container {
  margin-top: 1.5rem;
}

.progress-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1.5s ease-out, background 0.3s ease;
}

/* Sparkles */
.sparkles {
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
  width: 3px;
  height: 3px;
  background-color: white;
  border-radius: 50%;
  filter: blur(1px);
  animation: sparkle-flicker 1.5s ease-in-out infinite;
  opacity: 0;
}

.learning-card:hover .sparkle {
  opacity: 0.8;
}

@keyframes sparkle-flicker {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 0.4; }
}

/* Animations */
@keyframes card-entrance {
  from {
    opacity: 0;
    transform: translateY(20px) rotateX(10deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.5; }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .learning-card {
    animation-delay: calc(var(--delay) * 0.5);
  }
}
</style>