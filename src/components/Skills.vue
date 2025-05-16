<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="skills">
    <!-- Animated Background -->
    <div class="skill-bg-pattern"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-white">
          <span class="text-stroke">Technical Skills</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <skill-card 
          v-for="(skill, index) in skills" 
          :key="index"
          :skill="skill"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from './SkillCard.vue'

export default {
  components: { SkillCard },
  data() {
    return {
      skills: [
        { name: 'Vue.js', level: 80, icon: 'vuejs', color: '#42b883' },
        { name: 'Python', level: 85, icon: 'python', color: '#3776ab' },
        { name: 'FastAPI', level: 60, icon: 'fastapi', color: '#009485' },
        { name: 'Laravel', level: 95, icon: 'laravel', color: '#ff2d20' },
        { name: 'PHP', level: 80, icon: 'php', color: '#777bb4' },
        { name: 'C++', level: 85, icon: 'cplusplus', color: '#00599c' },
        { name: 'HTML5', level: 90, icon: 'html5', color: '#e34f26' },
        { name: 'CSS', level: 90, icon: 'css3', color: '#1572b6' },
        { name: 'Tailwind CSS', level: 90, icon: 'tailwindcss', color: '#06b6d4' },
        { name: 'Java', level: 50, icon: 'java', color: '#007396' },
        { name: 'Java Script', level: 70, icon: 'javascript', color: '#f7df1e' },
        { name: 'Figma', level: 90, icon: 'figma', color: '#A259FF' },
        { name: 'MySQL', level: 90, icon: 'mysql', color: '#4479a1' },
        { name: 'PostgreSQL', level: 60, icon: 'postgresql', color: '#336791' },
        { name: 'SQL Lite', level: 70, icon: 'sqlite', color: '#003b57' },
        { name: 'Git', level: 70, icon: 'git', color: '#f05032' },
        { name: 'Mongo DB', level: 70, icon: 'mongodb', color: '#47a248' },
        { name: 'Arduino', level: 80, icon: 'arduino', color: '#00979d' },
        { name: 'Bootstrap', level: 90, icon: 'bootstrap', color: '#7952b3' },
        { name: 'OpenCV', level: 85, icon: 'opencv', color: '#5c3ee8' }
      ]
    }
  }
}
</script>

<style>
.skill-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  animation: bg-pulse 15s ease infinite;
}

@keyframes bg-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 0.5; }
}

.text-stroke {
  color: white;
  position: relative;
  display: inline-block;
}

.text-stroke::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 0%;
  overflow: hidden;
  white-space: nowrap;
  animation: text-fill 2s ease-in-out forwards;
}

@keyframes text-fill {
  to { width: 100%; }
}
</style>