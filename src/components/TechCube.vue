<template>
  <div ref="container" class="absolute bottom-20 right-10 w-48 h-48"></div>
</template>

<script>
import * as THREE from 'three'
import { gsap } from 'gsap'

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
      
      // Cube geometry
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xec4899,
        metalness: 0.7,
        roughness: 0.2,
        transmission: 0.4,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        wireframe: false
      })
      
      this.cube = new THREE.Mesh(geometry, material)
      scene.add(this.cube)
      
      // Add edges
      const edges = new THREE.EdgesGeometry(geometry)
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
      this.edgeLines = new THREE.LineSegments(edges, lineMaterial)
      this.cube.add(this.edgeLines)
      
      // Lights
      const ambientLight = new THREE.AmbientLight(0x404040)
      scene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)
      
      // Add point lights for better effect
      const pointLight1 = new THREE.PointLight(0xec4899, 1, 5)
      pointLight1.position.set(2, 2, 2)
      scene.add(pointLight1)
      
      const pointLight2 = new THREE.PointLight(0x6366f1, 1, 5)
      pointLight2.position.set(-2, -2, -2)
      scene.add(pointLight2)
      
      // Position camera
      camera.position.z = 2.5
      
      // Animation loop
      this.animate = () => {
        requestAnimationFrame(this.animate)
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      this.animate()
    },
    
    hoverAnimation() {
      gsap.to(this.cube.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.5 })
      gsap.to(this.cube.material, { color: 0xf472b6, duration: 0.5 })
    },
    
    resetAnimation() {
      gsap.to(this.cube.scale, { x: 1, y: 1, z: 1, duration: 0.5 })
      gsap.to(this.cube.material, { color: 0xec4899, duration: 0.5 })
    },
    
    rippleEffect() {
      // Create ripple animation
      const rippleGeometry = new THREE.SphereGeometry(0.1, 16, 16)
      const rippleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      })
      
      const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial)
      this.cube.add(ripple)
      
      gsap.to(ripple.scale, { 
        x: 5, 
        y: 5, 
        z: 5, 
        duration: 1,
        ease: "power2.out"
      })
      gsap.to(ripple.material, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          this.cube.remove(ripple)
        }
      })
    }
  }
}
</script>