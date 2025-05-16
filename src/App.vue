<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <Header @scroll-to="handleScroll" />
    <Hero id="home" />
    <About id="about" />
    <Experience id="experience" />
    <Education id="education" />
    <Skills id="skills" />
    <LearningGoals id="learning-goals" />
    <Projects id="projects" :projects="projects" />
    <Achievements id="achievements" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import LearningGoals from './components/LearningGoals.vue'
import Projects from './components/Projects.vue'
import Achievements from './components/Achievements.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Hero,
    About,
    Experience,
    Education,
    Skills,
    LearningGoals,
    Projects,
    Achievements,
    Contact,
    Footer
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "E-commerce Platform",
          description: "A full-featured online store with payment integration and inventory management.",
          technologies: ["Vue.js", "Node.js", "MongoDB"],
          imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          link: "#"
        },
        {
          id: 2,
          title: "Task Management App",
          description: "Productivity application for team collaboration and task tracking.",
          technologies: ["React", "Firebase", "Tailwind CSS"],
          imageUrl: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          link: "#"
        }
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