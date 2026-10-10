<template>
  <div class="relative min-h-screen overflow-x-hidden font-body text-star">
    <BootSequence />
    <a href="#home" class="skip-link">Skip to content</a>
    <StarField />
    <div class="crt-lines" aria-hidden="true"></div>
    <div class="crt-vignette" aria-hidden="true"></div>
    <div class="relative z-10">
      <Header @scroll-to="handleScroll" />
      <Hero id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Education id="education" />
      <Skills id="skills" :projects="projects" />
      <Projects id="projects" :projects="projects" />
      <Achievements id="achievements" />
      <Contact id="contact" />
      <Footer />
    </div>
  </div>
</template>

<script>
import BootSequence from './components/BootSequence.vue'
import StarField from './components/StarField.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Achievements from './components/Achievements.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    BootSequence,
    StarField,
    Header,
    Hero,
    About,
    Experience,
    Education,
    Skills,
    Projects,
    Achievements,
    Contact,
    Footer
  },
  data() {
    return {
      projects: [
        {
          id: 15,
          title: "Guava Disease Segmentation — Thesis",
          description: "Segments diseases on crystal guava (jambu kristal) using YOLO baselines, then applies knowledge distillation to smaller non-YOLO student models trained on a cloud GPU.",
          technologies: ["Python", "YOLO", "Deep Learning"],
          imageUrl: "",
          link: "#",
          category: "iot",
          status: "ongoing"
        },
        {
          id: 16,
          title: "Homecycle — Freshness Reminder",
          description: "Team project that estimates the freshness and shelf life of fruit and vegetables, then sends reminders before they spoil.",
          technologies: ["Mobile", "AI"],
          imageUrl: "",
          link: "#",
          category: "iot",
          status: "archived"
        },
        {
          id: 1,
          title: "SITCA — Logistics Tracking & Control App",
          description: "Internal logistics platform for SITC Batam to track containers, manifests, export schedules and import documents, replacing manual record-keeping. Cut operational workload by up to 80%.",
          technologies: ["Next.js", "Supabase", "Tailwind CSS"],
          imageUrl: "",
          link: "https://sitc-batam.com",
          category: "web",
          status: "deployed"
        },
        {
          id: 2,
          title: "Finora — Financial Management App",
          description: "Personal finance app to track expenses and income at a glance.",
          technologies: ["Next.js", "Tailwind CSS", "Firebase"],
          imageUrl: "",
          link: "https://finora-wheat.vercel.app",
          category: "web",
          status: "deployed"
        },
        {
          id: 3,
          title: "AsmaraPOS — Point of Sale",
          description: "Point of sale application for RM Nasi Padang Asmara to manage sales and inventory.",
          technologies: ["Next.js", "Tailwind CSS", "Firebase"],
          imageUrl: "",
          link: "https://asmara-pos.vercel.app/",
          category: "web",
          status: "deployed"
        },
        {
          id: 4,
          title: "PETANI — IoT Plant Waterer",
          description: "Automatic watering and greenhouse automation system built on ESP32 and Blynk.",
          technologies: ["ESP32", "Blynk", "C++"],
          imageUrl: "",
          link: "#",
          category: "iot",
          status: "archived"
        },
        {
          id: 5,
          title: "SNAFH-R1 — Human Tracking Arm Robot",
          description: "Robotic arm that tracks and follows human movement using a machine-learning vision pipeline.",
          technologies: ["Python", "Machine Learning", "Arduino"],
          imageUrl: "",
          link: "#",
          category: "iot",
          status: "archived"
        },
        {
          id: 6,
          title: "Label Master V2.0",
          description: "Manufacturing desktop application for generating box labels.",
          technologies: ["Python"],
          imageUrl: "",
          link: "#",
          category: "desktop",
          status: "deployed"
        },
        {
          id: 7,
          title: "Rename Master",
          description: "Office desktop utility for bulk file renaming.",
          technologies: ["Python"],
          imageUrl: "",
          link: "#",
          category: "desktop",
          status: "deployed"
        },
        {
          id: 8,
          title: "GroupIN Folders",
          description: "Office desktop utility for bulk folder creation.",
          technologies: ["Python"],
          imageUrl: "",
          link: "#",
          category: "desktop",
          status: "deployed"
        },
        {
          id: 9,
          title: "PKWT Maker",
          description: "Office desktop application for generating employment contracts.",
          technologies: ["Python"],
          imageUrl: "",
          link: "#",
          category: "desktop",
          status: "deployed"
        },
        {
          id: 10,
          title: "Cloth Label Maker",
          description: "Manufacturing desktop application for generating cloth labels.",
          technologies: ["Python"],
          imageUrl: "",
          link: "#",
          category: "desktop",
          status: "deployed"
        },
        {
          id: 11,
          title: "MidnightPull — Frontend",
          description: "Movie review website, frontend design and build.",
          technologies: ["Vue.js", "Tailwind CSS"],
          imageUrl: "",
          link: "#",
          category: "web",
          status: "archived"
        },
        {
          id: 12,
          title: "Novaxin 新星系统 — Full Stack",
          description: "Production management information system for CMIM.",
          technologies: ["Laravel", "Tailwind CSS", "MySQL"],
          imageUrl: "",
          link: "#",
          category: "web",
          status: "ongoing"
        },
        {
          id: 13,
          title: "HIMATIF Website — Frontend",
          description: "HIMATIF Universitas Universal website, frontend design and build.",
          technologies: ["Vue.js", "Tailwind CSS"],
          imageUrl: "",
          link: "#",
          category: "web",
          status: "archived"
        },
        {
          id: 14,
          title: "STACKO — Logistics Solutions",
          description: "3D bin-packing engine and logistics management system.",
          technologies: ["Python", "3D Bin Packing", "Next.js", "MongoDB"],
          imageUrl: "",
          link: "#",
          category: "web",
          status: "ongoing"
        },
      ]
    }
  },
  methods: {
    handleScroll(sectionId) {
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.skip-link {
  position: fixed;
  top: -100px;
  left: 1rem;
  z-index: 400;
  background: var(--signal);
  color: var(--void);
  border: 4px solid var(--star);
  padding: 0.6rem 1rem;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.7rem;
}

.skip-link:focus {
  top: 1rem;
}

/* CRT scanlines + vignette over everything */
.crt-lines {
  position: fixed;
  inset: 0;
  z-index: 200;
  pointer-events: none;
  background: repeating-linear-gradient(0deg, var(--scan) 0, var(--scan) 1px, transparent 1px, transparent 3px);
  animation: flick 0.15s steps(2) infinite;
}

.crt-vignette {
  position: fixed;
  inset: 0;
  z-index: 199;
  pointer-events: none;
  box-shadow: inset 0 0 160px var(--vignette);
}
</style>
