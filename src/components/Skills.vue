<template>
  <section class="relative py-24 md:py-32 pixel-section overflow-hidden">
    <div class="absolute inset-0 hud-grid pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 2-1</p>
        <h2 class="panel-heading">Inventory / Abilities</h2>
        <p class="text-star max-w-2xl mt-4">Gear collected along the way. All aboard: the skill train never stops. Hover to hold it at the station.</p>
      </div>
    </div>

    <div class="relative z-10 space-y-6">
      <div v-for="row in rows" :key="row.title">
        <h3 class="section-label mb-6">{{ row.title }}</h3>
        <div v-if="row.scroll" class="marquee">
          <div class="marquee-track" :style="{ animationDuration: row.duration }">
            <template v-for="copy in 2" :key="copy">
              <skill-card
                v-for="(skill, i) in row.items"
                :key="copy + '-' + i"
                :skill="skill"
                :index="i"
                :class="{ 'marquee-dup': copy === 2 }"
              />
              <train-engine :class="{ 'marquee-dup': copy === 2 }" />
            </template>
          </div>
        </div>
        <div v-else class="skill-static container mx-auto px-6">
          <skill-card v-for="(skill, i) in row.items" :key="skill.name" :skill="skill" :index="i" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from "./SkillCard.vue";
import TrainEngine from "./TrainEngine.vue";

export default {
  components: { SkillCard, TrainEngine },
  computed: {
    rows() {
      return [
        { title: 'Technical Skills', items: this.technicalSkills, duration: '70s', scroll: true },
        { title: 'Language Proficiency', items: this.languageSkills, scroll: false },
        { title: 'Soft Skills', items: this.softSkills, scroll: false },
      ]
    },
  },
  data() {
    return {
      technicalSkills: [
        { name: "Next.js", level: 80, color: "#fff1e8", iconType: "devicon", icon: "nextjs", iconFile: "nextjs-original.svg" },
        { name: "React", level: 70, color: "#61DAFB", iconType: "devicon", icon: "react", iconFile: "react-original.svg" },
        { name: "Supabase", level: 70, color: "#3ECF8E", iconType: "devicon", icon: "supabase", iconFile: "supabase-original.svg" },
        { name: "Firebase", level: 70, color: "#FFCA28", iconType: "devicon", icon: "firebase", iconFile: "firebase-original.svg" },
        { name: "Vercel", level: 70, color: "#fff1e8", iconType: "devicon", icon: "vercel", iconFile: "vercel-original.svg" },
        { name: "TensorFlow", level: 70, color: "#FF6F00", iconType: "devicon", icon: "tensorflow", iconFile: "tensorflow-original.svg" },
        { name: "YOLO", level: 70, color: "#00FFFF", iconType: "fontawesome", icon: "fa-solid fa-eye" },
        { name: "ESP32", level: 70, color: "#E7352C", iconType: "fontawesome", icon: "fa-solid fa-microchip" },
        { name: "Ms Office", level: 70, color: "#D83B01", iconType: "fontawesome", icon: "fa-solid fa-file-word" },
        { name: "Arduino", level: 90, color: "#00979D", iconType: "devicon", icon: "arduino", iconFile: "arduino-original.svg" },
        { name: "Bootstrap", level: 90, color: "#7952B3", iconType: "devicon", icon: "bootstrap", iconFile: "bootstrap-original.svg" },
        { name: "C++", level: 85, color: "#00599C", iconType: "devicon", icon: "cplusplus", iconFile: "cplusplus-original.svg" },
        { name: "CSS", level: 90, color: "#1572B6", iconType: "devicon", icon: "css3", iconFile: "css3-original.svg" },
        { name: "Figma", level: 90, color: "#A259FF", iconType: "devicon", icon: "figma", iconFile: "figma-original.svg" },
        { name: "Git", level: 70, color: "#F05032", iconType: "devicon", icon: "git", iconFile: "git-original.svg" },
        { name: "GitHub", level: 85, color: "#fff1e8", iconType: "devicon", icon: "github", iconFile: "github-original.svg" },
        { name: "HTML5", level: 90, color: "#E34F26", iconType: "devicon", icon: "html5", iconFile: "html5-original.svg" },
        { name: "Java", level: 50, color: "#007396", iconType: "devicon", icon: "java", iconFile: "java-original.svg" },
        { name: "JavaScript", level: 70, color: "#F7DF1E", iconType: "devicon", icon: "javascript", iconFile: "javascript-original.svg" },
        { name: "Laravel", level: 90, color: "#FF2D20", iconType: "devicon", icon: "laravel", iconFile: "laravel-original.svg" },
        { name: "MongoDB", level: 75, color: "#47A248", iconType: "devicon", icon: "mongodb", iconFile: "mongodb-original.svg" },
        { name: "MySQL", level: 90, color: "#4479A1", iconType: "devicon", icon: "mysql", iconFile: "mysql-original.svg" },
        { name: "Node.js", level: 80, color: "#339933", iconType: "devicon", icon: "nodejs", iconFile: "nodejs-original.svg" },
        { name: "OpenCV", level: 85, color: "#5C3EE8", iconType: "devicon", icon: "opencv", iconFile: "opencv-original.svg" },
        { name: "PHP", level: 80, color: "#777BB4", iconType: "devicon", icon: "php", iconFile: "php-original.svg" },
        { name: "PostgreSQL", level: 50, color: "#336791", iconType: "devicon", icon: "postgresql", iconFile: "postgresql-original.svg" },
        { name: "Python", level: 85, color: "#3776AB", iconType: "devicon", icon: "python", iconFile: "python-original.svg" },
        { name: "SQLite", level: 70, color: "#003B57", iconType: "devicon", icon: "sqlite", iconFile: "sqlite-original.svg" },
        { name: "Tailwind CSS", level: 90, color: "#06B6D4", iconType: "devicon", icon: "tailwindcss", iconFile: "tailwindcss-original.svg" },
        { name: "TypeScript", level: 70, color: "#3178C6", iconType: "devicon", icon: "typescript", iconFile: "typescript-original.svg" },
        { name: "Vite", level: 85, color: "#646CFF", iconType: "devicon", icon: "vitejs", iconFile: "vitejs-original.svg" },
        { name: "Vue.js", level: 85, color: "#42B883", iconType: "devicon", icon: "vuejs", iconFile: "vuejs-original.svg" },
      ],
      languageSkills: [
        { name: "Indonesian", level: 100, iconType: "fontawesome", icon: "fa-solid fa-language", color: "#29adff" },
        { name: "English", level: 75, iconType: "fontawesome", icon: "fa-solid fa-language", color: "#ff77a8" },
        { name: "Mandarin 中文", level: 70, iconType: "fontawesome", icon: "fa-solid fa-language", color: "#29adff" },
      ],
      softSkills: [
        { name: "Teamwork", level: 90, iconType: "fontawesome", icon: "fa-solid fa-people-group", color: "#ff77a8" },
        { name: "Communication", level: 85, iconType: "fontawesome", icon: "fa-solid fa-comments", color: "#29adff" },
        { name: "Problem Solving", level: 90, iconType: "fontawesome", icon: "fa-solid fa-lightbulb", color: "#ff77a8" },
        { name: "Time Management", level: 80, iconType: "fontawesome", icon: "fa-solid fa-clock", color: "#29adff" },
        { name: "Leadership", level: 75, iconType: "fontawesome", icon: "fa-solid fa-user-tie", color: "#ff77a8" },
        { name: "Creativity", level: 85, iconType: "fontawesome", icon: "fa-solid fa-paintbrush", color: "#29adff" },
      ],
    };
  },
};
</script>

<style scoped>
.section-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.85rem;
  color: var(--signal);
  text-align: center;
  text-transform: uppercase;
}

.marquee {
  overflow: hidden;
  padding: 72px 0 32px;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
}

/* the train drives left to right: engine at the front (right end) */
.marquee-track {
  display: flex;
  align-items: flex-end;
  width: max-content;
  animation: train-drive linear infinite;
  animation-direction: reverse;
}

.marquee:hover .marquee-track,
.marquee:hover .marquee-track :deep(*),
.marquee:hover .marquee-track :deep(*::after) {
  animation-play-state: paused;
}

.skill-static {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 0;
  padding: 1rem 1.5rem 2.5rem;
}

@keyframes train-drive {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    -webkit-mask-image: none;
    mask-image: none;
  }
  .marquee-track {
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 2rem;
    padding: 0 1.5rem;
  }
  .marquee-dup {
    display: none;
  }
}
</style>
