<template>
  <section class="py-20 bg-gray-800" id="achievements">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">My Achievements</h2>
        <div class="w-20 h-1 bg-indigo-500 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(achievement, index) in achievements" 
          :key="index"
          class="bg-gray-700 p-6 rounded-lg hover:shadow-lg transition duration-300 hover:transform hover:scale-105"
        >
          <div class="flex items-center mb-4">
            <div class="p-3 bg-indigo-500 bg-opacity-20 rounded-full mr-4">
              <i :class="achievement.icon" class="text-indigo-400 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold">{{ achievement.title }}</h3>
          </div>
          <p class="text-gray-300 mb-4">{{ achievement.description }}</p>
          <div class="text-sm text-indigo-400">
            {{ achievement.date }} • {{ achievement.organization }}
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
      achievements: [
        {
          title: "Best Web Developer Award",
          description: "Recognized as top developer at the National Tech Conference 2023 for innovative Vue.js applications.",
          date: "May 2023",
          organization: "Tech Awards Foundation",
          icon: "fas fa-trophy"
        },
        {
          title: "Hackathon Winner",
          description: "First place in the regional coding competition with a real-time collaboration tool built in 48 hours.",
          date: "November 2022",
          organization: "CodeFest International",
          icon: "fas fa-medal"
        },
        {
          title: "Open Source Contributor",
          description: "Major contributor to Vue.js ecosystem with 500+ stars on GitHub repositories.",
          date: "Ongoing",
          organization: "GitHub Community",
          icon: "fas fa-code-branch"
        },
        {
          title: "Certified Developer",
          description: "Earned professional certification in Advanced JavaScript and Frontend Architecture.",
          date: "August 2022",
          organization: "JavaScript Institute",
          icon: "fas fa-certificate"
        },
        {
          title: "Speaker at DevConf",
          description: "Invited speaker at international developer conference about modern web technologies.",
          date: "March 2022",
          organization: "DevConf Global",
          icon: "fas fa-microphone"
        },
        {
          title: "Published Author",
          description: "Technical article featured in 'Web Developer Monthly' magazine with 50k+ reads.",
          date: "January 2022",
          organization: "Web Dev Publications",
          icon: "fas fa-pen-fancy"
        }
      ]
    }
  }
}
</script>