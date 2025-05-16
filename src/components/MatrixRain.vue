<template>
  <div class="typing-container">
    <div class="typing-text">
      <span class="typed-text">{{ typedText }}</span>
      <span class="cursor">|</span>
    </div>
    <div class="floating-elements">
      <div v-for="(element, index) in floatingElements" 
           :key="index"
           class="floating-element"
           :style="{
             left: `${element.x}%`,
             top: `${element.y}%`,
             width: `${element.size}px`,
             height: `${element.size}px`,
             animationDelay: `${index * 0.2}s`
           }">
        <i :class="element.icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      default: () => [
        "Frontend Developer",
        "UI/UX Designer",
        "Creative Coder"
      ]
    }
  },
  data() {
    return {
      typedText: '',
      currentTextIndex: 0,
      isTyping: true,
      typeSpeed: 100,
      eraseSpeed: 50,
      typingDelay: 2000,
      floatingElements: [
        { icon: 'fab fa-vuejs', x: 20, y: 30, size: 30 },
        { icon: 'fab fa-react', x: 80, y: 20, size: 35 },
        { icon: 'fab fa-js', x: 15, y: 70, size: 40 },
        { icon: 'fab fa-html5', x: 85, y: 65, size: 25 },
        { icon: 'fab fa-css3-alt', x: 50, y: 80, size: 30 }
      ]
    }
  },
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      const currentText = this.texts[this.currentTextIndex]
      let i = 0
      
      const typing = setInterval(() => {
        if (i < currentText.length) {
          this.typedText += currentText.charAt(i)
          i++
        } else {
          clearInterval(typing)
          setTimeout(() => {
            this.eraseText()
          }, this.typingDelay)
        }
      }, this.typeSpeed)
    },
    eraseText() {
      const erasing = setInterval(() => {
        if (this.typedText.length > 0) {
          this.typedText = this.typedText.substring(0, this.typedText.length - 1)
        } else {
          clearInterval(erasing)
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length
          setTimeout(() => {
            this.typeText()
          }, 500)
        }
      }, this.eraseSpeed)
    }
  }
}
</script>

<style>
.typing-container {
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-text {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  color: rgba(99, 102, 241, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 15s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}
</style>