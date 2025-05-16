<template>
  <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">My Interests</h2>
        <div class="w-20 h-1 bg-indigo-500 mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(interest, index) in interests" 
          :key="index" 
          class="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="relative h-48 overflow-hidden">
            <img :src="interest.image" :alt="interest.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <span class="text-xl font-semibold">{{ interest.title }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ interest.title }}</h3>
            <p class="text-gray-300">{{ interest.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        {
          title: "Photography",
          description: "Capturing moments and landscapes with my DSLR camera, especially during travels.",
          image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Hiking",
          description: "Exploring nature trails and mountain paths on weekends and holidays.",
          image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Cooking",
          description: "Experimenting with new recipes and cuisines from around the world.",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Reading",
          description: "Mostly science fiction and technology-related books in my free time.",
          image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Gaming",
          description: "Playing strategy and RPG games to relax and stimulate creativity.",
          image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Music",
          description: "Playing guitar and listening to various genres from classical to electronic.",
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  }
}
</script>