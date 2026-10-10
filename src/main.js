import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import reveal from './directives/reveal'
import { installGlobalSounds } from './sound'
import { initTheme } from './theme'

initTheme()

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')
installGlobalSounds()
