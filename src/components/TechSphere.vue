<template>
  <div ref="container" class="absolute top-20 left-10 w-48 h-48"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  mounted() {
    this.initThreeJS()
  },
  methods: {
    initThreeJS() {
      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(this.$refs.container.clientWidth, this.$refs.container.clientHeight)
      this.$refs.container.appendChild(renderer.domElement)
      
      // Sphere geometry
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      const material = new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        emissive: 0x1a1b4b,
        specular: 0xffffff,
        shininess: 50,
        transparent: true,
        opacity: 0.8,
        wireframe: true
      })
      
      this.sphere = new THREE.Mesh(geometry, material)
      scene.add(this.sphere)
      
      // Lights
      const ambientLight = new THREE.AmbientLight(0x404040)
      scene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)
      
      // Position camera
      camera.position.z = 2
      
      // Animation loop
      this.animate = () => {
        requestAnimationFrame(this.animate)
        this.sphere.rotation.x += 0.005
        this.sphere.rotation.y += 0.005
        renderer.render(scene, camera)
      }
      this.animate()
    },
    
    hoverAnimation() {
      // Scale up and change color on hover
      this.sphere.scale.set(1.2, 1.2, 1.2)
      this.sphere.material.color.setHex(0x8b5cf6)
    },
    
    resetAnimation() {
      // Reset to original state
      this.sphere.scale.set(1, 1, 1)
      this.sphere.material.color.setHex(0x6366f1)
    },
    
    explode() {
      // Animation for button click
      const explosion = () => {
        this.sphere.scale.x += 0.1
        this.sphere.scale.y += 0.1
        this.sphere.scale.z += 0.1
        this.sphere.material.opacity -= 0.05
        
        if (this.sphere.material.opacity > 0) {
          requestAnimationFrame(explosion)
        } else {
          this.sphere.scale.set(1, 1, 1)
          this.sphere.material.opacity = 0.8
        }
      }
      explosion()
    }
  }
}
</script>