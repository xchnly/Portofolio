<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="education">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="diagonal-pattern"></div>
      <div class="floating-dots"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="title-text-edu">Education</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          My academic background and <span class="text-indigo-300">qualifications</span>
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="education-grid">
          <div 
            v-for="(edu, index) in educations" 
            :key="index"
            class="education-card"
            :style="`--delay: ${index * 0.1}s`"
          >
            <div class="card-inner">
              <div class="degree-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3L1 9L12 15L23 9L12 3ZM12 15L1 9V16L12 22L23 16V9L12 15Z"></path>
                </svg>
              </div>
              
              <div class="education-content">
                <h3 class="degree">{{ edu.degree }}</h3>
                <p class="institution">{{ edu.institution }}</p>
                <p class="period">{{ edu.period }}</p>
                
                <div class="gpa-badge">
                  <span>GPA: {{ edu.gpa }}</span>
                </div>
                
                <div v-if="edu.honors" class="honors">
                  <span class="honors-badge">{{ edu.honors }}</span>
                </div>
              </div>
              
              <div class="education-glow"></div>
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
      educations: [
        {
          degree: "Bachelor of Informatics Engineering",
          institution: "Universitas Universal Batam",
          period: "2023 - Present",
          gpa: "3.8 / 4.0",
        },
        {
          degree: "Vocational High School of Computer and Network Engineering",
          institution: "SMKS Hosana Tebas",
          period: "2020 - 2023",
          gpa: "87.5 / 100",
        }
      ]
    }
  }
}
</script>

<style>
/* Background Effects */
.diagonal-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%) -50px 0,
              linear-gradient(225deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%) -50px 0,
              linear-gradient(315deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%),
              linear-gradient(45deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%);
  background-size: 100px 100px;
  animation: diagonal-move 20s linear infinite;
}

.floating-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
}

@keyframes diagonal-move {
  0% { background-position: 0 0, 0 0, 0 0, 0 0; }
  100% { background-position: 100px 100px, 100px 100px, 100px 100px, 100px 100px; }
}

/* Title Effects */
.title-text-edu {
  position: relative;
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 1px #6366f1;
}

.title-text-edu::after {
  content: 'Education';
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
  to { width: 100%; }
}

/* Education Grid */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-card {
  perspective: 1000px;
  animation: fade-in-up 0.6s ease-out both;
  animation-delay: var(--delay);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  overflow: hidden;
}

.education-card:hover .card-inner {
  transform: translateY(-5px) rotateX(5deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(99, 102, 241, 0.4);
}

/* Degree Icon */
.degree-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.degree-icon svg {
  width: 30px;
  height: 30px;
  fill: #a855f7;
}

.education-card:hover .degree-icon {
  transform: scale(1.1);
  background: rgba(99, 102, 241, 0.2);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
}

/* Education Content */
.education-content {
  position: relative;
  z-index: 2;
}

.degree {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.institution {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.period {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.gpa-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.2);
  color: #a855f7;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s ease;
}

.honors-badge {
  display: inline-block;
  background: rgba(236, 72, 153, 0.2);
  color: #ec4899;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
}

.education-card:hover .gpa-badge,
.education-card:hover .honors-badge {
  transform: translateY(0);
  opacity: 1;
}

/* Glow Effect */
.education-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.education-card:hover .education-glow {
  opacity: 0.5;
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>