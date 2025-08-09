<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="skills">
    <!-- Animated Background -->
    <div class="skill-bg-pattern"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-white">
          <span class="text-stroke">My Skills</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
      </div>

      <!-- Technical Skills Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center text-white">
          <span class="border-b-2 border-indigo-500 pb-2">Technical Skills</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <skill-card v-for="(skill, index) in technicalSkills" :key="'tech-' + index" :skill="skill" :index="index" />
        </div>
      </div>

      <!-- Language Skills Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center text-white">
          <span class="border-b-2 border-indigo-500 pb-2">Language Proficiency</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <skill-card v-for="(skill, index) in languageSkills" :key="'lang-' + index" :skill="skill" :index="index" />
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div>
        <h3 class="text-2xl font-semibold mb-8 text-center text-white">
          <span class="border-b-2 border-indigo-500 pb-2">Soft Skills</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <skill-card v-for="(skill, index) in softSkills" :key="'soft-' + index" :skill="skill" :index="index" />
        </div>
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
      technicalSkills: [
        { name: 'Arduino', level: 90, icon: 'arduino', color: '#00979D' },
        { name: 'Bootstrap', level: 90, icon: 'bootstrap', color: '#7952B3' },
        { name: 'C++', level: 85, icon: 'cplusplus', color: '#00599C' },
        { name: 'CSS', level: 90, icon: 'css3', color: '#1572B6' },
        { name: 'Figma', level: 90, icon: 'figma', color: '#A259FF' },
        { name: 'Git', level: 70, icon: 'git', color: '#F05032' },
        { name: 'Github', level: 85, icon: 'github', color: '#181717' },
        { name: 'HTML5', level: 90, icon: 'html5', color: '#E34F26' },
        { name: 'Java', level: 50, icon: 'java', color: '#007396' },
        { name: 'Java Script', level: 70, icon: 'javascript', color: '#F7DF1E' },
        { name: 'Laravel', level: 90, icon: 'laravel', color: '#FF2D20' },
        { name: 'MongoDB', level: 75, icon: 'mongodb', color: '#47A248' },
        { name: 'MySQL', level: 90, icon: 'mysql', color: '#4479A1' },
        { name: 'Next Js', level: 80, icon: 'nextjs', color: '#000000' },
        { name: 'Node Js', level: 80, icon: 'nodejs', color: '#339933' },
        { name: 'OpenCV', level: 85, icon: 'opencv', color: '#5C3EE8' },
        { name: 'PHP', level: 80, icon: 'php', color: '#777BB4' },
        { name: 'PostgreSQL', level: 70, icon: 'postgresql', color: '#336791' },
        { name: 'Python', level: 85, icon: 'python', color: '#3776AB' },
        { name: 'React', level: 70, icon: 'react', color: '#61DAFB' },
        { name: 'SQL Lite', level: 70, icon: 'sqlite', color: '#003B57' },
        { name: 'Tailwind CSS', level: 90, icon: 'tailwindcss', color: '#06B6D4' },
        { name: 'TypeScript', level: 70, icon: 'typescript', color: '#3178C6' },
        { name: 'Vite Js', level: 85, icon: 'vitejs', color: '#646CFF' },
        { name: 'Vue.js', level: 85, icon: 'vuejs', color: '#42B883' }
      ],
      languageSkills: [
        {
          name: 'English',
          level: 75,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-language',
          color: '#3B82F6' // Electric blue
        },
        {
          name: 'Mandarin中文',
          level: 70,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-language',
          color: '#EF4444' // Vivid red
        },
        {
          name: 'Indonesian',
          level: 100,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-language',
          color: '#10B981' // Bright green
        },
        {
          name: '客家话 Hakka',
          level: 80,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-language',
          color: '#F59E0B' // Bright amber
        },
        {
          name: 'Japan',
          level: 25,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-language',
          color: '#F59E0B' // Bright amber
        }
      ],
      softSkills: [
        {
          name: 'Teamwork',
          level: 90,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-people-group',
          color: '#8B5CF6' // Vibrant violet
        },
        {
          name: 'Communication',
          level: 85,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-comments',
          color: '#EC4899' // Hot magenta
        },
        {
          name: 'Problem Solving',
          level: 90,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-lightbulb',
          color: '#FBBF24' // Bright golden
        },
        {
          name: 'Time Management',
          level: 80,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-clock',
          color: '#06B6D4' // Neon turquoise
        },
        {
          name: 'Leadership',
          level: 75,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-user-tie',
          color: '#4F46E5' // Deep electric indigo
        },
        {
          name: 'Creativity',
          level: 85,
          iconType: 'fontawesome',
          icon: 'fa-solid fa-paintbrush',
          color: '#F43F5E' // Bright crimson pink
        }
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

  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
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
  to {
    width: 100%;
  }
}
</style>