<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Final Stage</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Save Game / Multiplayer</h2>
      </div>

      <div class="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-14">
        <div v-reveal>
          <h3 class="font-display text-signal mb-6">&gt; SELECT PLAYER 2</h3>
          <div class="space-y-5">
            <div v-for="item in contactItems" :key="item.label" class="flex items-start gap-4">
              <div class="contact-icon"><i :class="item.icon"></i></div>
              <div>
                <p class="font-mono text-data uppercase">{{ item.label }}</p>
                <p class="text-star">{{ item.value }}</p>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <p class="font-mono text-data uppercase mb-4">Follow</p>
            <div class="flex gap-3">
              <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="social-link" :aria-label="social.name">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div v-reveal="150">
          <h3 class="font-display text-signal mb-6">&gt; NEW MESSAGE</h3>
          <form action="https://formspree.io/f/mkgzppon" method="POST" class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label class="field-label" for="contact-name">Your Name</label>
              <input id="contact-name" type="text" name="name" class="field-input" required />
            </div>
            <div>
              <label class="field-label" for="contact-email">Your Email</label>
              <input id="contact-email" type="email" name="email" class="field-input" required />
            </div>
            <div>
              <label class="field-label" for="contact-subject">Subject</label>
              <input id="contact-subject" type="text" name="subject" class="field-input" required />
            </div>
            <div>
              <label class="field-label" for="contact-message">Message</label>
              <textarea id="contact-message" name="message" class="field-input" rows="4" required></textarea>
            </div>

            <button type="submit" class="pixel-btn pixel-btn--signal w-full sm:w-auto" :disabled="isSubmitting">
              <span v-if="!isSubmitting">&#9654; Save &amp; Send</span>
              <span v-else>Saving&hellip;</span>
            </button>

            <div v-if="submitStatus" class="font-mono px-4 py-3 border-4" :class="submitStatus === 'success' ? 'border-data text-data' : 'border-bubble text-bubble'">
              <span v-if="submitStatus === 'success'">GAME SAVED! Message sent successfully.</span>
              <span v-else>GAME OVER. Message failed, please try again.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSubmitting: false,
      submitStatus: null,
      contactItems: [
        { label: 'Email', value: 'hendryhuang70@gmail.com', icon: 'fas fa-envelope' },
        { label: 'Phone', value: '+62 821 5096 2909', icon: 'fas fa-phone' },
        { label: 'Location', value: 'Batam, Indonesia', icon: 'fas fa-location-dot' },
      ],
      socials: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/xchnly' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/xchnly' },
      ]
    }
  },
  methods: {
    async handleSubmit(event) {
      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        const form = event.target;
        const formData = new FormData(form);

        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          this.submitStatus = 'success';
          form.reset();
        } else {
          this.submitStatus = 'error';
        }
      } catch (error) {
        this.submitStatus = 'error';
        console.error('Error submitting form:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.contact-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--signal);
  border: 4px solid var(--star);
  color: var(--void);
}

.social-link {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--void);
  border: 4px solid var(--star);
  box-shadow: 4px 4px 0 var(--ink);
  color: var(--star);
  font-size: 1.2rem;
  transition: transform 0.08s steps(2), box-shadow 0.08s steps(2);
}

.social-link:hover {
  color: var(--void);
  background: var(--signal);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}

.field-label {
  display: block;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem;
  text-transform: uppercase;
  color: var(--data);
  margin-bottom: 0.6rem;
}

.field-input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  background: var(--ink);
  border: 4px solid var(--star);
  color: var(--star);
  font-family: 'Pixelify Sans', monospace;
  font-size: 1.15rem;
  border-radius: 0;
}

.field-input:focus {
  outline: none;
  border-color: var(--signal);
  box-shadow: 4px 4px 0 var(--pink);
}
</style>
