<template>
  <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
    <div class="bg-gray-800 rounded-lg max-w-md w-full p-6 relative">
      <button 
        @click="$emit('close-form')"
        class="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <h3 class="text-2xl font-bold mb-6">Add New Project</h3>
      
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-300 mb-2">Project Title</label>
          <input 
            v-model="form.title" 
            type="text" 
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-300 mb-2">Description</label>
          <textarea 
            v-model="form.description" 
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="3"
            required
          ></textarea>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-300 mb-2">Technologies (comma separated)</label>
          <input 
            v-model="form.technologies" 
            type="text" 
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Vue.js, Tailwind CSS, Node.js"
            required
          >
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-300 mb-2">Image URL</label>
          <input 
            v-model="form.imageUrl" 
            type="url" 
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://example.com/image.jpg"
            required
          >
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-300 mb-2">Project Link</label>
          <input 
            v-model="form.link" 
            type="url" 
            class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="https://example.com"
            required
          >
        </div>
        
        <button 
          type="submit" 
          class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300"
        >
          Add Project
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        technologies: '',
        imageUrl: '',
        link: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      const newProject = {
        ...this.form,
        technologies: this.form.technologies.split(',').map(tech => tech.trim())
      };
      this.$emit('add-project', newProject);
      this.resetForm();
    },
    resetForm() {
      this.form = {
        title: '',
        description: '',
        technologies: '',
        imageUrl: '',
        link: ''
      };
    }
  }
}
</script>