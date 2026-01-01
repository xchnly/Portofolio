<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="about">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="circuit-pattern"></div>
      <div class="floating-shapes">
        <div v-for="(shape, index) in floatingShapes" :key="index" class="shape" :class="shape.type" :style="{
          left: `${shape.left}%`,
          top: `${shape.top}%`,
          width: `${shape.size}px`,
          height: `${shape.size}px`,
          animationDelay: `${index * 0.5}s`
        }"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          <span class="title-text">About Me</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- 3D Profile Card - Responsive -->
        <div class="profile-card-container w-full max-w-xs mx-auto md:max-w-md lg:w-1/3">
          <div class="profile-card">
            <div class="profile-card-inner">
              <div class="profile-image">
                <img src="/profil.jpg" alt="Profile"
                  class="w-24 h-24 md:w-16 md:h-16 lg:w-36 lg:h-36 rounded-full border-4 grayscale border-indigo-500">
              </div>
              <div class="profile-glow"></div>
              <div class="profile-tech-icons">
                <i v-for="(icon, index) in techIcons" :key="index" :class="icon" class="text-xl md:text-2xl absolute"
                  :style="{
                    left: `${20 + Math.random() * 85}%`,
                    top: `${20 + Math.random() * 85}%`,
                    animationDelay: `${index * 0.2}s`
                  }"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- About Content -->
        <div class="lg:w-2/3">
          <h3 class="text-2xl font-semibold mb-6">
            <span class="highlight-text">Who am I?</span>
          </h3>

          <div class="space-y-6">
            <p class="text-gray-300 leading-relaxed animate-text">
              Hello, my name is Hendry, and I am currently pursuing a degree in Computer Science, in my 6th semester.
              Alongside my studies, I have been working in a dual role as an IT Support and Planner & Material
              Control (PMC) since August 2023. Now in September 2025, I have taken on a new challenge as a Customer Service
              & Operation staff while continuing my IT Support responsibilities at PT SITC JIAXIANG LOGISTICS INDONESIA.
            </p>

            <p class="text-gray-300 leading-relaxed animate-text animate-delay-100">
              With almost 3 years of experience, I have honed my technical skills and gained valuable knowledge in
              managing materials and planning projects. This hands-on experience has allowed me to bridge the gap
              between theory and practice, preparing me for a successful career in the tech industry. I am passionate
              about leveraging technology to solve real-world problems and contribute to organizational success.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div v-for="(stat, index) in stats" :key="index" class="stat-card" :style="`--delay: ${index * 0.1}s`">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
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
      floatingShapes: Array(12).fill().map(() => ({
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 100 + 50
      })),
      techIcons: [
        'fab fa-vuejs',
        'fab fa-react',
        'fab fa-js',
        'fab fa-html5',
        'fab fa-css3-alt',
        'fab fa-node-js',
        'fab fa-git-alt',
        'fab fa-npm'
      ],
      stats: [
        { number: '3+', label: 'Years Experience' },
        { number: '20+', label: 'Projects Completed' },
        { number: '90%', label: 'Client Satisfaction' },
        { number: '∞', label: 'Cups of Coffee' }
      ]
    }
  }
}
</script>

<style>
/* Background Elements */
.circuit-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  background-size: 50px 50px;
  opacity: 0.3;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.2);
  animation: float 15s ease-in-out infinite;
}

.shape.circle {
  border-radius: 50%;
}

.shape.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  25% {
    transform: translate(10px, -15px) rotate(5deg);
  }

  50% {
    transform: translate(-5px, 10px) rotate(-5deg);
  }

  75% {
    transform: translate(15px, 5px) rotate(10deg);
  }
}

/* Title Effects */
.title-text {
  position: relative;
  display: inline-block;
  color: white;
}

.title-text::after {
  content: 'About Me';
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 0%;
  overflow: hidden;
  white-space: nowrap;
  animation: text-reveal 1.5s ease-in-out forwards;
}

@keyframes text-reveal {
  to {
    width: 100%;
  }
}

.highlight-text {
  background: linear-gradient(90deg, #6366f1, #ec4899);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
}

.highlight-text::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  transform: scaleX(0);
  transform-origin: left;
  animation: underline-grow 1s ease-in-out forwards 0.5s;
}

@keyframes underline-grow {
  to {
    transform: scaleX(1);
  }
}

/* 3D Profile Card */
.profile-card-container {
  perspective: 1000px;
}

.profile-card {
  position: relative;
  width: 100%;
  padding-top: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.profile-card-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.profile-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  z-index: 2;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.profile-glow {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 0%, transparent 70%);
  filter: blur(20px);
  animation: pulse 4s ease-in-out infinite;
}

.profile-tech-icons i {
  animation: tech-icon-float 8s ease-in-out infinite;
  opacity: 0.7;
}

@keyframes tech-icon-float {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }

  25% {
    transform: translate(10px, -15px) rotate(10deg) scale(1.1);
  }

  50% {
    transform: translate(-15px, 10px) rotate(-10deg) scale(0.9);
  }

  75% {
    transform: translate(15px, 5px) rotate(5deg) scale(1.05);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }

  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

/* Stat Cards */
.stat-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  text-align: center;
  backdrop-filter: blur(5px);
  transform: translateY(20px);
  opacity: 0;
  animation: stat-appear 0.5s ease-out forwards;
  animation-delay: var(--delay);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

@keyframes stat-appear {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Text Animation */
.animate-text {
  opacity: 0;
  transform: translateY(20px);
  animation: text-appear 0.8s ease-out forwards;
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

@keyframes text-appear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover Effects */
.profile-card-container:hover .profile-card-inner {
  transform: rotateY(10deg) rotateX(5deg);
}

.profile-card-container:hover .profile-glow {
  animation: pulse 2s ease-in-out infinite;
}
</style>