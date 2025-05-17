<template>
  <div ref="container" class="absolute top-1/2 left-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2"></div>
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
      
      // Pyramid geometry
      const pyramidGeometry = new THREE.ConeGeometry(1, 1.5, 4)
      const material = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        metalness: 0.5,
        roughness: 0.3,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
      })
      
      this.pyramid = new THREE.Mesh(pyramidGeometry, material)
      this.pyramid.rotation.y = Math.PI / 4 // Rotate 45 degrees to show pyramid shape
      scene.add(this.pyramid)
      
      // Add edges
      const edges = new THREE.EdgesGeometry(pyramidGeometry)
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
      this.edgeLines = new THREE.LineSegments(edges, lineMaterial)
      this.pyramid.add(this.edgeLines)
      
      // Lights
      const ambientLight = new THREE.AmbientLight(0x404040)
      scene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)
      
      // Add glowing effect
      const pointLight = new THREE.PointLight(0x8b5cf6, 1, 3)
      pointLight.position.set(0, -0.5, 0)
      this.pyramid.add(pointLight)
      
      // Position camera
      camera.position.z = 3
      
      // Animation loop
      this.animate = () => {
        requestAnimationFrame(this.animate)
        this.pyramid.rotation.y += 0.005
        renderer.render(scene, camera)
      }
      this.animate()
    },
    
    hoverAnimation() {
      gsap.to(this.pyramid.scale, { x: 1.2, y: 1.2, z: 1.2, duration: 0.5 })
      gsap.to(this.pyramid.material, { color: 0xa78bfa, duration: 0.5 })
      gsap.to(this.pyramid.children[1], { intensity: 2, duration: 0.5 }) // Increase light intensity
    },
    
    resetAnimation() {
      gsap.to(this.pyramid.scale, { x: 1, y: 1, z: 1, duration: 0.5 })
      gsap.to(this.pyramid.material, { color: 0x8b5cf6, duration: 0.5 })
      gsap.to(this.pyramid.children[1], { intensity: 1, duration: 0.5 }) // Reset light intensity
    },
    
    pulseEffect() {
      // Create pulse animation
      gsap.to(this.pyramid.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 0.5,
        yoyo: true,
        repeat: 1
      })
      gsap.to(this.pyramid.material, {
        opacity: 0.5,
        duration: 0.5,
        yoyo: true,
        repeat: 1
      })
    }
  }
}
</script>