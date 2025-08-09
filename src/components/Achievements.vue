<template>
  <section class="py-20 bg-gray-800" id="achievements">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">My Achievements</h2>
        <div class="w-20 h-1 bg-indigo-500 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(achievement, index) in achievements" :key="index"
          class="bg-gray-700 p-6 rounded-lg hover:shadow-lg transition duration-300 hover:transform hover:scale-105">
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
          title: "Outstanding Employee 2024",
          description: "Recognized for exceptional performance, dedication, and contributions throughout the year, demonstrating outstanding leadership, teamwork, and a commitment to excellence in all responsibilities.",
          date: "December 2024",
          organization: "PT Champion Mattress Indonesia Manufacturing",
          icon: "fas fa-trophy"
        },
      ]
    }
  }
}
</script>