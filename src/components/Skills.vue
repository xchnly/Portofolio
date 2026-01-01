<template>
  <section class="relative py-20 bg-gray-900 overflow-hidden" id="skills">
    <!-- Animated Background -->
    <div class="skill-bg-pattern"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-white">
          <span class="text-stroke">My Skills</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"
        ></div>
      </div>

      <!-- Technical Skills Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center text-white">
          <span class="border-b-2 border-indigo-500 pb-2"
            >Technical Skills</span
          >
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <skill-card
            v-for="(skill, index) in technicalSkills"
            :key="'tech-' + index"
            :skill="skill"
            :index="index"
          />
        </div>
      </div>

      <!-- Language Skills Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center text-white">
          <span class="border-b-2 border-indigo-500 pb-2"
            >Language Proficiency</span
          >
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <skill-card
            v-for="(skill, index) in languageSkills"
            :key="'lang-' + index"
            :skill="skill"
            :index="index"
          />
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div>
        <h3 class="text-2xl font-semibold mb-8 text-center text-white">
          <span class="border-b-2 border-indigo-500 pb-2">Soft Skills</span>
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <skill-card
            v-for="(skill, index) in softSkills"
            :key="'soft-' + index"
            :skill="skill"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  components: { SkillCard },
  data() {
    return {
      technicalSkills: [
        {
          name: "Arduino",
          level: 90,
          color: "#00979D",
          iconType: "devicon",
          icon: "arduino",
          iconFile: "arduino-original.svg",
        },
        {
          name: "Bootstrap",
          level: 90,
          color: "#7952B3",
          iconType: "devicon",
          icon: "bootstrap",
          iconFile: "bootstrap-original.svg",
        },
        {
          name: "C++",
          level: 85,
          color: "#00599C",
          iconType: "devicon",
          icon: "cplusplus",
          iconFile: "cplusplus-original.svg",
        },
        {
          name: "CSS",
          level: 90,
          color: "#1572B6",
          iconType: "devicon",
          icon: "css3",
          iconFile: "css3-original.svg",
        },
        {
          name: "Figma",
          level: 90,
          color: "#A259FF",
          iconType: "devicon",
          icon: "figma",
          iconFile: "figma-original.svg",
        },
        {
          name: "Git",
          level: 70,
          color: "#F05032",
          iconType: "devicon",
          icon: "git",
          iconFile: "git-original.svg",
        },
        {
          name: "GitHub",
          level: 85,
          color: "#181717",
          iconType: "devicon",
          icon: "github",
          iconFile: "github-original.svg",
        },
        {
          name: "HTML5",
          level: 90,
          color: "#E34F26",
          iconType: "devicon",
          icon: "html5",
          iconFile: "html5-original.svg",
        },
        {
          name: "Java",
          level: 50,
          color: "#007396",
          iconType: "devicon",
          icon: "java",
          iconFile: "java-original.svg",
        },
        {
          name: "JavaScript",
          level: 70,
          color: "#F7DF1E",
          iconType: "devicon",
          icon: "javascript",
          iconFile: "javascript-original.svg",
        },
        {
          name: "Laravel",
          level: 90,
          color: "#FF2D20",
          iconType: "devicon",
          icon: "laravel",
          iconFile: "laravel-original.svg",
        },
        {
          name: "MongoDB",
          level: 75,
          color: "#47A248",
          iconType: "devicon",
          icon: "mongodb",
          iconFile: "mongodb-original.svg",
        },
        {
          name: "MySQL",
          level: 90,
          color: "#4479A1",
          iconType: "devicon",
          icon: "mysql",
          iconFile: "mysql-original.svg",
        },
        {
          name: "Next.js",
          level: 80,
          color: "#000000",
          iconType: "devicon",
          icon: "nextjs",
          iconFile: "nextjs-original.svg",
        },
        {
          name: "Node.js",
          level: 80,
          color: "#339933",
          iconType: "devicon",
          icon: "nodejs",
          iconFile: "nodejs-original.svg",
        },
        {
          name: "OpenCV",
          level: 85,
          color: "#5C3EE8",
          iconType: "devicon",
          icon: "opencv",
          iconFile: "opencv-original.svg",
        },
        {
          name: "PHP",
          level: 80,
          color: "#777BB4",
          iconType: "devicon",
          icon: "php",
          iconFile: "php-original.svg",
        },
        {
          name: "PostgreSQL",
          level: 50,
          color: "#336791",
          iconType: "devicon",
          icon: "postgresql",
          iconFile: "postgresql-original.svg",
        },
        {
          name: "Python",
          level: 85,
          color: "#3776AB",
          iconType: "devicon",
          icon: "python",
          iconFile: "python-original.svg",
        },
        {
          name: "React",
          level: 70,
          color: "#61DAFB",
          iconType: "devicon",
          icon: "react",
          iconFile: "react-original.svg",
        },
        {
          name: "SQLite",
          level: 70,
          color: "#003B57",
          iconType: "devicon",
          icon: "sqlite",
          iconFile: "sqlite-original.svg",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          color: "#06B6D4",
          iconType: "devicon",
          icon: "tailwindcss",
          iconFile: "tailwindcss-original.svg",
        },
        {
          name: "TypeScript",
          level: 70,
          color: "#3178C6",
          iconType: "devicon",
          icon: "typescript",
          iconFile: "typescript-original.svg",
        },
        {
          name: "Vite",
          level: 85,
          color: "#646CFF",
          iconType: "devicon",
          icon: "vitejs",
          iconFile: "vitejs-original.svg",
        },
        {
          name: "Vue.js",
          level: 85,
          color: "#42B883",
          iconType: "devicon",
          icon: "vuejs",
          iconFile: "vuejs-original.svg",
        },
      ],
      languageSkills: [
        {
          name: "English",
          level: 75,
          iconType: "fontawesome",
          icon: "fa-solid fa-language",
          color: "#3B82F6", // Electric blue
        },
        {
          name: "Mandarin中文",
          level: 70,
          iconType: "fontawesome",
          icon: "fa-solid fa-language",
          color: "#EF4444", // Vivid red
        },
        {
          name: "Indonesian",
          level: 100,
          iconType: "fontawesome",
          icon: "fa-solid fa-language",
          color: "#10B981", // Bright green
        },
        {
          name: "客家话 Hakka",
          level: 80,
          iconType: "fontawesome",
          icon: "fa-solid fa-language",
          color: "#F59E0B", // Bright amber
        },
        {
          name: "Japan",
          level: 25,
          iconType: "fontawesome",
          icon: "fa-solid fa-language",
          color: "#F59E0B", // Bright amber
        },
      ],
      softSkills: [
        {
          name: "Teamwork",
          level: 90,
          iconType: "fontawesome",
          icon: "fa-solid fa-people-group",
          color: "#8B5CF6", // Vibrant violet
        },
        {
          name: "Communication",
          level: 85,
          iconType: "fontawesome",
          icon: "fa-solid fa-comments",
          color: "#EC4899", // Hot magenta
        },
        {
          name: "Problem Solving",
          level: 90,
          iconType: "fontawesome",
          icon: "fa-solid fa-lightbulb",
          color: "#FBBF24", // Bright golden
        },
        {
          name: "Time Management",
          level: 80,
          iconType: "fontawesome",
          icon: "fa-solid fa-clock",
          color: "#06B6D4", // Neon turquoise
        },
        {
          name: "Leadership",
          level: 75,
          iconType: "fontawesome",
          icon: "fa-solid fa-user-tie",
          color: "#4F46E5", // Deep electric indigo
        },
        {
          name: "Creativity",
          level: 85,
          iconType: "fontawesome",
          icon: "fa-solid fa-paintbrush",
          color: "#F43F5E", // Bright crimson pink
        },
      ],
    };
  },
};
</script>

<style>
.skill-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(236, 72, 153, 0.1) 0%,
      transparent 50%
    );
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
