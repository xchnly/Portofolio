<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
        <div class="w-20 h-1 bg-indigo-500 mx-auto"></div>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="text-indigo-400 mr-4 mt-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium">Email</h4>
                  <p class="text-gray-400">hendryhuang70@gmail.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="text-indigo-400 mr-4 mt-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium">Phone</h4>
                  <p class="text-gray-400">+62 821 5096 2909</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="text-indigo-400 mr-4 mt-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-medium">Location</h4>
                  <p class="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h4 class="text-lg font-medium mb-4">Follow Me</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-indigo-400 transition duration-300">
                  <i class="fab fa-github text-2xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-indigo-400 transition duration-300">
                  <i class="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-indigo-400 transition duration-300">
                  <i class="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
              </div>
              
              <div>
                <label class="block text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
              </div>
              
              <div>
                <label class="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
              </div>
              
              <div>
                <label class="block text-gray-300 mb-2">Message</label>
                <textarea 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>