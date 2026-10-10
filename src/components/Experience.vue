<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 1-2</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Quest History</h2>
        <p class="text-mist max-w-2xl mt-4">Career milestones, newest quest first.</p>
      </div>

      <div class="max-w-4xl">
        <div class="log-timeline">
          <div v-for="(exp, index) in experiences" :key="index" class="log-entry" v-reveal="index * 140">
            <div class="log-node"></div>
            <div class="log-card pixel-card">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 class="font-display text-star">{{ exp.company }}</h3>
                <span class="period-tag">{{ exp.period }}</span>
              </div>
              <p class="font-mono text-signal mb-4">{{ exp.position }}</p>

              <ul class="space-y-2.5 mb-5">
                <li v-for="(desc, i) in exp.descriptions" :key="i" class="flex gap-3 text-sm text-star leading-relaxed">
                  <span class="text-bubble font-mono">&#9654;</span>
                  <span>{{ desc }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span v-for="(tech, i) in exp.technologies" :key="i" class="tech-chip">{{ tech }}</span>
              </div>
            </div>
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
      experiences: [
        {
          position: "Customer Service & Operations + IT",
          company: "PT SITC JiaXiang Logistics Indonesia, Batam",
          period: "Sep 2025 — Present",
          descriptions: [
            "Built SITCA, an internal tracking app that cut manual tracking work by up to 80%.",
            "Process and verify import documents for shipping carriers to keep customs handling accurate and on time.",
            "Resolve shipment inquiries and coordinate with the operations team.",
            "Provide on-site IT support: troubleshoot hardware and software, and maintain internal systems."
          ],
          technologies: ["Next.js", "Supabase", "Python", "Ms Office"]
        },
        {
          position: "Assistant Production Material Control + IT",
          company: "PT Champion Mattress Indonesia, Batam",
          period: "Aug 2023 — Sep 2025",
          descriptions: [
            "Planned, scheduled, and tracked material flow across the production line.",
            "Maintained IT infrastructure and supported staff across departments.",
            "Built internal tools and reports that streamlined daily operations."
          ],
          technologies: ["Python", "Vue.js", "Ms Office"]
        },
        {
          position: "Administration Staff",
          company: "Yayasan Hosana Tebas",
          period: "Jan 2022 — Jun 2023",
          descriptions: [
            "Managed administrative records, documentation, and daily office operations."
          ],
          technologies: ["Ms Office", "Photoshop", "Local Area Network"]
        }
      ]
    }
  }
}
</script>

<style scoped>
.log-timeline {
  position: relative;
  padding-left: 2.5rem;
}

.log-timeline::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  bottom: 6px;
  width: 4px;
  background: var(--star);
}

.log-entry {
  position: relative;
  margin-bottom: 2.5rem;
}

.log-entry:last-child {
  margin-bottom: 0;
}

.log-node {
  position: absolute;
  left: -2.5rem;
  top: 6px;
  width: 16px;
  height: 16px;
  border: 4px solid var(--star);
  background: var(--signal);
}

.log-card {
  padding: 1.75rem;
}

.period-tag {
  font-family: 'VT323', monospace;
  font-size: 1.15rem;
  color: var(--void);
  background: var(--pink);
  border: 2px solid var(--ink);
  padding: 0.1rem 0.6rem;
  white-space: nowrap;
}

.tech-chip {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  line-height: 1.2;
  color: var(--data);
  background: var(--line);
  border: 2px solid var(--data);
  padding: 0.15rem 0.5rem;
}

@media (max-width: 640px) {
  .log-timeline {
    padding-left: 1.75rem;
  }
  .log-node {
    left: -1.75rem;
  }
}
</style>
