import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles

// Create Vue app
const app = createApp(App)

// Initialize AOS when app is mounted
app.config.globalProperties.$aos = AOS // Optional: make AOS available globally

app.mount('#app')

// Initialize AOS after app is mounted
app.config.globalProperties.$aos?.init({
  duration: 800,
  once: true
})