<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 1-3</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Training Academy</h2>
        <p class="text-star max-w-2xl mt-4">Academic background and qualifications.</p>
      </div>

      <div class="max-w-4xl grid gap-6 sm:grid-cols-2">
        <div v-for="(edu, index) in educations" :key="index" class="module-card pixel-card" v-reveal="index * 120">
          <div class="flex items-start justify-between mb-6">
            <div class="module-icon">
              <svg viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M12 3L1 9L12 15L23 9L12 3ZM12 15L1 9V16L12 22L23 16V9L12 15Z" fill="currentColor" />
              </svg>
            </div>
            <span class="font-mono text-mist">LV-{{ String(index + 1).padStart(2, '0') }}</span>
          </div>

          <h3 class="font-display text-star mb-3">{{ edu.degree }}</h3>
          <p class="text-mist text-sm mb-1">{{ edu.institution }}</p>
          <p class="font-mono text-signal mb-5">{{ edu.period }}</p>

          <div class="flex items-center justify-between edu-foot pt-4">
            <span class="font-mono uppercase text-mist">GPA</span>
            <span class="font-display text-signal">{{ edu.gpa }}</span>
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
      educations: [
        {
          degree: "B.Eng. Informatics Engineering",
          institution: "Universitas Universal Batam",
          period: "Semester 7 · expected 2027",
          gpa: "3.86 / 4.0",
        },
        {
          degree: "Computer & Network Engineering",
          institution: "SMK Hosana Tebas",
          period: "2020 — 2023",
          gpa: "85.02 / 100",
        }
      ]
    }
  }
}
</script>

<style scoped>
.module-card {
  padding: 1.75rem;
}

.module-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--signal);
  border: 4px solid var(--star);
  color: var(--void);
}

.edu-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 4px dashed var(--line);
}
</style>
