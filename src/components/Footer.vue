<template>
  <footer class="relative bg-gray-900 border-t border-gray-800 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="circuit-pattern"></div>
      <div class="floating-tech-icons"></div>
    </div>

    <div class="container mx-auto px-6 py-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Footer Column 1 -->
        <div class="footer-col">
          <h3 class="footer-title">Portfolio</h3>
          <p class="footer-text">
            A showcase of my work, skills, and professional journey.
          </p>
          <div class="flex space-x-4 mt-6">
            <a 
              v-for="(social, index) in socialLinks" 
              :key="index"
              :href="social.url" 
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              @mouseenter="hoverSocial(index)"
              @mouseleave="resetSocial(index)"
            >
              <i :class="social.icon"></i>
              <span class="social-tooltip">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Footer Column 2 -->
        <div class="footer-col">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in quickLinks" :key="index">
              <router-link 
                :to="`#${link.id}`" 
                class="footer-link"
                @click="scrollTo(link.id)"
              >
                <span class="link-text">{{ link.name }}</span>
                <span class="link-arrow">→</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Footer Column 3 -->
        <div class="footer-col">
          <h3 class="footer-title">Contact Info</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="fas fa-envelope text-indigo-400 mt-1 mr-3"></i>
              <span class="footer-text">hendryhuang70@gmail.com</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-phone text-indigo-400 mt-1 mr-3"></i>
              <span class="footer-text">+62 821 5096 2909</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt text-indigo-400 mt-1 mr-3"></i>
              <span class="footer-text">Batam, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="footer-text">
          &copy; {{ new Date().getFullYear() }} Hendry. All rights reserved.
        </p>
        
        <!-- <div class="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="#" 
            class="footer-link"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            class="footer-link"
          >
            Terms of Service
          </a>
        </div> -->
      </div>
    </div>

    <!-- Back to Top Button -->
    <button 
      class="back-to-top"
      @click="scrollToTop"
      :class="{ 'show': showBackToTop }"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showBackToTop: false,
      socialHoverStates: [],
      socialLinks: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com' },
        // { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://twitter.com' },
        // { name: 'Dribbble', icon: 'fab fa-dribbble', url: 'https://dribbble.com' }
      ],
      quickLinks: [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' }
      ]
    }
  },
  methods: {
    scrollTo(sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    },
    hoverSocial(index) {
      this.socialHoverStates[index] = true
    },
    resetSocial(index) {
      this.socialHoverStates[index] = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.socialHoverStates = Array(this.socialLinks.length).fill(false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
/* Background Effects */
.circuit-pattern {
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
  background: radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
}

@keyframes grid-move {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* Footer Columns */
.footer-col {
  position: relative;
  z-index: 2;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  transition: all 0.3s ease;
}

.footer-col:hover .footer-title::after {
  width: 60px;
}

.footer-text {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Social Icons */
.social-icon {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.social-icon i {
  font-size: 1rem;
}

.social-icon:hover {
  background: rgba(99, 102, 241, 0.2);
  color: white;
  transform: translateY(-3px);
}

.social-tooltip {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
}

.social-icon:hover .social-tooltip {
  opacity: 1;
  top: -40px;
}

/* Footer Links */
.footer-link {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  padding: 0.25rem 0;
}

.footer-link:hover {
  color: white;
  transform: translateX(5px);
}

.link-arrow {
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.footer-link:hover .link-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #6366f1;
}

/* Newsletter Form */
.newsletter-form {
  display: flex;
  margin-top: 1rem;
}

.newsletter-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem 0 0 0.25rem;
  transition: all 0.3s ease;
}

.newsletter-input:focus {
  outline: none;
  border-color: rgba(99, 102, 241, 0.5);
  background: rgba(99, 102, 241, 0.05);
}

.newsletter-button {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  border: none;
  padding: 0 1.25rem;
  border-radius: 0 0.25rem 0.25rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  transform: translateY(-1px);
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
}

.back-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .footer-col {
    margin-bottom: 2rem;
  }
  
  .footer-title::after {
    width: 40px !important;
  }
}
</style>