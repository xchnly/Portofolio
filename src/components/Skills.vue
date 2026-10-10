<template>
  <section class="relative py-24 md:py-32 pixel-section overflow-hidden">
    <div class="absolute inset-0 hud-grid pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-10" v-reveal>
        <p class="eyebrow mb-4">Stage 2-1</p>
        <h2 class="panel-heading">Select Your Skill</h2>
        <p class="text-star max-w-2xl mt-4">Move over a portrait to preview it, click to lock it in. Arrow keys work too.</p>
      </div>

      <div class="tabs" role="tablist" aria-label="Skill groups">
        <button
          v-for="t in tabs"
          :key="t.id"
          type="button"
          role="tab"
          class="tab"
          :class="{ 'is-on': tab === t.id }"
          :aria-selected="tab === t.id"
          @click="setTab(t.id)"
        >{{ t.label }}</button>
      </div>

      <div class="select-screen">
        <!-- roster -->
        <div class="roster" ref="grid" role="group" aria-label="Skill roster" @keydown="onKey">
          <button
            v-for="(entry, i) in tiles"
            :key="entry.skill.name"
            type="button"
            class="tile"
            :class="{ 'is-cursor': cursor === entry.skill.name }"
            :style="{ '--tint': entry.branch.color }"
            :tabindex="cursor === entry.skill.name || (!cursorVisible && i === 0) ? 0 : -1"
            :aria-pressed="cursor === entry.skill.name && ready"
            :data-name="entry.skill.name"
            @mouseenter="move(entry.skill.name, false)"
            @focus="move(entry.skill.name, false)"
            @click="confirm(entry.skill.name)"
          >
            <span class="tile-flag" v-if="cursor === entry.skill.name" aria-hidden="true">1P</span>
            <span class="tile-portrait"><span class="tile-icon"><skill-icon :skill="entry.skill" /></span></span>
            <span class="tile-name">{{ entry.skill.name }}</span>
          </button>
        </div>

        <!-- profile -->
        <aside class="profile" aria-live="polite" aria-label="Selected skill">
          <div class="profile-bar">
            <span class="profile-flag">1P</span>
            <span class="profile-ready" :class="{ 'is-on': ready }">READY!</span>
          </div>

          <div class="portrait" :style="{ background: current.branch.color }">
            <div class="portrait-icon" :key="current.skill.name"><skill-icon :skill="current.skill" /></div>
          </div>

          <h3 class="p-name">{{ current.skill.name }}</h3>
          <span class="p-class" :style="{ background: current.branch.color }">{{ current.branch.title }}</span>

          <div class="p-title">SPECIAL MOVES</div>
          <ul v-if="usedIn.length" class="p-moves">
            <li v-for="name in usedIn" :key="name">&#9654; {{ name }}</li>
          </ul>
          <p v-else class="p-note">{{ current.branch.note }}</p>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import SkillIcon from "./SkillCard.vue";
import { beep } from "../sound";

// Groups follow the CV. Anything left over is added to Tools.
const BRANCHES = [
  { id: "frontend", title: "Frontend", color: "#29adff", note: "Part of my frontend toolkit.", names: ["Next.js", "React", "Vue.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS", "Figma", "Vite"] },
  { id: "backend", title: "Backend & Database", color: "#00e436", note: "Part of my backend toolkit.", names: ["Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase", "Supabase"] },
  { id: "code", title: "Languages", color: "#ffec27", note: "A language I write in.", names: ["JavaScript", "TypeScript", "Python", "C++", "Java"] },
  { id: "ai", title: "AI / ML & IoT", color: "#ff77a8", note: "Hands-on with hardware and vision.", names: ["TensorFlow", "YOLO", "OpenCV", "ESP32", "Arduino"] },
  { id: "tools", title: "Tools", color: "#ffa300", note: "Part of my daily tooling.", names: ["Git", "GitHub", "Vercel", "Ms Office"] },
];

export default {
  components: { SkillIcon },
  props: {
    projects: { type: Array, default: () => [] },
  },
  data() {
    return {
      tab: "all",
      cursor: "Next.js",
      ready: false,
      readyTimer: null,
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
  computed: {
    branches() {
      const byName = Object.fromEntries(this.technicalSkills.map((s) => [s.name, s]));
      const used = new Set();
      const list = BRANCHES.map((b) => {
        const items = b.names.map((n) => byName[n]).filter(Boolean);
        items.forEach((s) => used.add(s.name));
        return { ...b, items };
      });
      list[list.length - 1].items.push(...this.technicalSkills.filter((s) => !used.has(s.name)));
      list.push({ id: "spoken", title: "Spoken Languages", color: "#83769c", note: "A language I speak.", items: this.languageSkills });
      list.push({ id: "soft", title: "Soft Skills", color: "#ff004d", note: "How I work with people.", items: this.softSkills });
      return list.filter((b) => b.items.length);
    },
    tabs() {
      return [{ id: "all", label: "ALL" }, ...this.branches.map((b) => ({ id: b.id, label: b.title.toUpperCase() }))];
    },
    everyone() {
      return this.branches.flatMap((b) => b.items.map((skill) => ({ skill, branch: b })));
    },
    tiles() {
      return this.tab === "all" ? this.everyone : this.everyone.filter((e) => e.branch.id === this.tab);
    },
    cursorVisible() {
      return this.tiles.some((e) => e.skill.name === this.cursor);
    },
    current() {
      return this.everyone.find((e) => e.skill.name === this.cursor) || this.everyone[0];
    },
    usedIn() {
      const key = this.current.skill.name.toLowerCase();
      return this.projects
        .filter((p) => (p.technologies || []).some((t) => t.toLowerCase() === key))
        .map((p) => p.title.split(/\s[—-]\s/)[0]);
    },
  },
  beforeUnmount() {
    clearTimeout(this.readyTimer);
  },
  methods: {
    setTab(id) {
      this.tab = id;
      // keep the cursor inside the visible roster
      if (!this.cursorVisible && this.tiles.length) this.cursor = this.tiles[0].skill.name;
      this.ready = false;
      beep(660, 0.05);
    },
    move(name, sound = true) {
      if (this.cursor === name) return;
      this.cursor = name;
      this.ready = false;
      if (sound) beep(520, 0.04);
      else beep(520, 0.03);
    },
    confirm(name) {
      this.cursor = name;
      this.ready = true;
      beep(988, 0.07);
      setTimeout(() => beep(1319, 0.2), 80);
      clearTimeout(this.readyTimer);
      this.readyTimer = setTimeout(() => {
        this.ready = false;
      }, 1600);
    },
    // arrow keys step through the grid; up/down pick the nearest tile in the next row
    onKey(e) {
      const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
      if (!keys.includes(e.key)) return;
      const els = Array.from(this.$refs.grid.querySelectorAll(".tile"));
      const idx = els.findIndex((el) => el.dataset.name === this.cursor);
      if (idx < 0) return;
      let target = null;
      if (e.key === "ArrowRight") target = els[idx + 1];
      if (e.key === "ArrowLeft") target = els[idx - 1];
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const cur = els[idx];
        const dir = e.key === "ArrowDown" ? 1 : -1;
        const rows = els.filter((el) => (el.offsetTop - cur.offsetTop) * dir > 0);
        if (rows.length) {
          const rowTop = dir > 0 ? Math.min(...rows.map((el) => el.offsetTop)) : Math.max(...rows.map((el) => el.offsetTop));
          target = rows
            .filter((el) => el.offsetTop === rowTop)
            .sort((a, b) => Math.abs(a.offsetLeft - cur.offsetLeft) - Math.abs(b.offsetLeft - cur.offsetLeft))[0];
        }
      }
      if (target) {
        e.preventDefault();
        target.focus();
      }
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1.75rem;
}

.tab {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.55rem;
  line-height: 1.4;
  padding: 0.6rem 0.75rem;
  color: var(--star);
  background: var(--line);
  border: 4px solid var(--star);
  box-shadow: 4px 4px 0 var(--ink);
  transition: transform 0.08s steps(2), box-shadow 0.08s steps(2);
}

.tab:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}

.tab.is-on {
  color: #1a1c2c;
  background: var(--signal);
}

.select-screen {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 40px;
  align-items: start;
}

.roster {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 18px 14px;
  padding: 18px;
  background: var(--ink);
  border: 4px solid var(--star);
  box-shadow: 8px 8px 0 var(--ink);
}

.tile {
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: none;
  border: none;
  color: #fff1e8;
}

.tile-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  background: var(--tint);
  background-image:
    linear-gradient(45deg, rgba(0, 0, 0, 0.16) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.16) 75%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.16) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.16) 75%);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
  border: 4px solid #fff1e8;
  filter: saturate(0.55) brightness(0.8);
  transition: filter 0.1s steps(2);
}

.tile-icon {
  width: 56%;
  height: 56%;
  padding: 5px;
  background: #fff1e8;
  border: 3px solid #1a1c2c;
}

.tile-name {
  margin-top: 6px;
  font-family: 'VT323', monospace;
  font-size: 1.15rem;
  line-height: 1;
  text-align: center;
  overflow-wrap: anywhere;
}

.tile:hover .tile-portrait,
.tile.is-cursor .tile-portrait {
  filter: none;
}

/* the cursor: a blinking double frame, like a roster highlight */
.tile.is-cursor .tile-portrait {
  border-color: var(--signal);
  outline: 4px solid var(--pink);
  animation: cursor-blink 0.5s steps(1) infinite;
}

.tile.is-cursor .tile-name {
  color: var(--signal);
}

.tile-flag {
  position: absolute;
  z-index: 2;
  left: -6px;
  top: -10px;
  padding: 0.2rem 0.3rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.5rem;
  color: #fff1e8;
  background: #ff004d;
  border: 3px solid #1a1c2c;
}

.profile {
  position: sticky;
  top: 96px;
  padding: 1.25rem;
  background: var(--panel);
  border: 4px solid var(--star);
  box-shadow: 8px 8px 0 var(--ink);
}

.profile-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.profile-flag {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  padding: 0.3rem 0.45rem;
  color: #fff1e8;
  background: #ff004d;
  border: 3px solid #1a1c2c;
}

.profile-ready {
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
  color: var(--signal);
  opacity: 0;
}

.profile-ready.is-on {
  opacity: 1;
  animation: blink 0.3s steps(1) 4;
}

.portrait {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 190px;
  border: 4px solid var(--star);
  background-image:
    linear-gradient(45deg, rgba(0, 0, 0, 0.16) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.16) 75%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.16) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.16) 75%);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
}

.portrait-icon {
  width: 118px;
  height: 118px;
  padding: 14px;
  background: #fff1e8;
  border: 4px solid #1a1c2c;
  box-shadow: 6px 6px 0 #0b0c16;
  animation: bob 1.2s steps(4) infinite, pop-in 0.25s steps(3);
}

.portrait-icon :deep(i) {
  font-size: 3.2rem;
}

.p-name {
  margin: 1.1rem 0 0.6rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--signal);
  overflow-wrap: anywhere;
}

.p-class {
  display: inline-block;
  padding: 0.3rem 0.5rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.5rem;
  color: #1a1c2c;
  border: 3px solid var(--ink);
}

.p-title {
  margin: 1.25rem 0 0.6rem;
  padding-top: 0.9rem;
  border-top: 4px dashed var(--line);
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  color: var(--data);
}

.p-moves {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
  font-size: 1.15rem;
  color: var(--star);
}

.p-note {
  margin: 0;
  font-size: 1.15rem;
  color: var(--star);
}

@keyframes cursor-blink {
  0% { outline-color: var(--pink); }
  50% { outline-color: var(--signal); }
}

@keyframes pop-in {
  from { transform: scale(0.6); }
  to { transform: scale(1); }
}

@media (max-width: 900px) {
  .select-screen {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .profile {
    position: static;
    order: -1;
  }
}
</style>
