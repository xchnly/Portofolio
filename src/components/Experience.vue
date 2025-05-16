<template>
  <section class="relative py-20 bg-gray-800 overflow-hidden" id="experience">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="circuit-lines"></div>
      <div class="floating-tech-icons"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="title-text-experience">Work Experience</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        <p class="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          My professional journey and <span class="text-indigo-300">career milestones</span>
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="timeline">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index"
            class="timeline-item"
            :style="`--delay: ${index * 0.1}s`"
          >
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="experience-card">
                <div class="card-header">
                  <h3 class="company">{{ exp.company }}</h3>
                  <div class="period-badge">{{ exp.period }}</div>
                </div>
                <h4 class="position">{{ exp.position }}</h4>
                
                <ul class="responsibilities">
                  <li v-for="(desc, i) in exp.descriptions" :key="i">
                    <span class="bullet"></span>
                    <span>{{ desc }}</span>
                  </li>
                </ul>
                
                <div class="tech-stack">
                  <span 
                    v-for="(tech, i) in exp.technologies" 
                    :key="i"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
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
      experiences: [
        {
          position: "Assistant PMC & IT (Dual Role)",
          company: "PT CHAMPION MATTRESS INDONESIA MANUFACTURING",
          period: "2023 - Present",
          descriptions: [
            "Led migration from legacy AngularJS to modern Vue 3 architecture",
            "Implemented micro-frontend architecture improving performance by 40%",
            "Mentored junior developers and conducted technical interviews"
          ],
          technologies: ["Vue 3", "TypeScript", "Micro-frontends", "GraphQL"]
        },
        {
          position: "Tata Usaha & Administrasi",
          company: "YAYASAN HOSANA TEBAS",
          period: "2021 - 2023",
          descriptions: [
            "Developed responsive web applications using React ecosystem",
            "Collaborated with UX team to implement design system",
            "Optimized web performance achieving 95+ Lighthouse scores"
          ],
          technologies: ["React", "Redux", "Styled Components", "Jest"]
        }
      ]
    }
  }
}
</script>

<style>
/* Background Effects */
.circuit-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: grid-move 20s linear infinite;
}

.floating-tech-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* Title Effects */
.title-text-experience {
  position: relative;
  display: inline-block;
  color: transparent;
  -webkit-text-stroke: 1px #6366f1;
}

.title-text-experience::after {
  content: 'Work Experience';
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

/* Timeline */
.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 2px;
  background: linear-gradient(to bottom, #6366f1, #ec4899);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  animation: fade-in-up 0.6s ease-out both;
  animation-delay: var(--delay);
}

.timeline-dot {
  position: absolute;
  left: -50px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
  box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.3);
}

.timeline-content {
  position: relative;
  padding-left: 30px;
}

/* Experience Card */
.experience-card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.timeline-item:hover .experience-card {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(99, 102, 241, 0.4);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.company {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  position: relative;
}

.company::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  transition: all 0.3s ease;
}

.timeline-item:hover .company::after {
  width: 60px;
}

.period-badge {
  background: rgba(99, 102, 241, 0.2);
  color: #a855f7;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.position {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.responsibilities {
  margin-bottom: 1.5rem;
}

.responsibilities li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.bullet {
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  transform: scale(0);
  transition: transform 0.3s ease;
  transition-delay: calc(var(--delay) + 0.2s);
}

.timeline-item:hover .bullet {
  transform: scale(1);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(99, 102, 241, 0.1);
  color: #a855f7;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transform: translateY(5px);
  opacity: 0;
  transition: all 0.3s ease;
}

.timeline-item:hover .tech-tag {
  transform: translateY(0);
  opacity: 1;
}

.tech-tag:nth-child(1) { transition-delay: calc(var(--delay) + 0.1s); }
.tech-tag:nth-child(2) { transition-delay: calc(var(--delay) + 0.2s); }
.tech-tag:nth-child(3) { transition-delay: calc(var(--delay) + 0.3s); }
.tech-tag:nth-child(4) { transition-delay: calc(var(--delay) + 0.4s); }

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
  .timeline {
    padding-left: 30px;
  }
  
  .timeline::before {
    left: 15px;
  }
  
  .timeline-dot {
    left: -30px;
    width: 16px;
    height: 16px;
  }
  
  .card-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .period-badge {
    align-self: flex-start;
  }
}
</style>