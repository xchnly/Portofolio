<template>
  <section class="relative py-24 md:py-32 pixel-section">
    <div class="container mx-auto px-6">
      <div class="mb-14" v-reveal>
        <p class="eyebrow mb-4">Stage 3-2</p>
        <h2 class="panel-heading text-4xl md:text-5xl">Reels Edukasi</h2>
        <p class="text-star max-w-2xl mt-4">
          {{ reels.length }} short educational videos on logistics, shipping and everyday questions, in Bahasa Indonesia.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <figure v-for="reel in reels" :key="reel.id" class="pixel-card reel-card" v-reveal>
          <!-- Only the clicked reel loads the Drive player, so one plays at a time -->
          <iframe
            v-if="activeId === reel.id"
            class="reel-frame"
            :src="`https://drive.google.com/file/d/${reel.id}/preview`"
            :title="reel.title"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
          <button v-else type="button" class="reel-frame reel-poster" :aria-label="`Play ${reel.title}`" @click="activeId = reel.id">
            <img :src="`https://drive.google.com/thumbnail?id=${reel.id}&sz=w480`" alt="" loading="lazy" referrerpolicy="no-referrer" />
            <span class="reel-play" aria-hidden="true">&#9654;</span>
          </button>
          <figcaption class="p-3 text-sm text-star leading-snug">
            {{ reel.title }}
            <a :href="`https://drive.google.com/file/d/${reel.id}/view`" target="_blank" rel="noopener noreferrer" class="reel-link">Open in Drive</a>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeId: null,
      // id = Google Drive file id; each file must be shared as "Anyone with the link"
      reels: [
        { id: '1Nyn8khSxDEYhNdeAQ2K9ZHWu0pEUkV7w', title: 'FOB vs CIF: Siapa Tanggung Risiko?' },
        { id: '1riEXMsqAiHEr1r_gPbB8SPRzGzUR4n6P', title: 'Incoterms Part 2: Tangga EXW sampai DDP' },
        { id: '1P7CZViCpUxWb6UBKi6G2UvI4Ogiszpgh', title: 'Dangerous Goods: 9 Kelas IMDG' },
        { id: '1hWjohVOUsr85H52TLzXicMTNR--jLcyj', title: 'Perjalanan Kontainer: Impor, Depo, Ekspor' },
        { id: '1gPZ_rsHU8YBYvHt4O9mBZdvZ3PpYDWk4', title: 'Kenapa Ukuran Kontainer Sama?' },
        { id: '1QxOwh_CHcCwz3Jp1Er-gHMJO1eJqdejT', title: 'Kenapa Kontainer Nggak Jatuh? Twistlock' },
        { id: '1o0ozU4XZXA8Ohf47SaHTYmvo9_HlJdaa', title: 'Jetty, Pier, Wharf, Quay, Dolphin: Apa Bedanya?' },
        { id: '1RM33ROF-ZBcjjMrxm2BtC1BsXAB60Pik', title: 'Kenapa Selat Malaka Sibuk?' },
        { id: '11vtfZY09J0qbWkvazBTRE50UpPhIZD4i', title: 'Kenapa Pelabuhan Singapura Besar?' },
        { id: '1acwX2VTNqKo2tRFeBgRc59M4cLadGjl6', title: 'Kenapa Ongkir China Murah?' },
        { id: '1FybPsOvQxf5zjMvcJ-r0IQnQ-2kgyrtI', title: 'Kenapa Angka 4?' },
        { id: '1mu0kHCmlamcDy5secHqlRabhDXJXOc2A', title: 'Kenapa Momen Memalukan?' }
      ]
    }
  }
}
</script>

<style scoped>
.reel-card {
  display: flex;
  flex-direction: column;
}

.reel-frame {
  display: block;
  width: 100%;
  aspect-ratio: 9 / 16;
  background: #000;
  border: 0;
  border-bottom: 4px solid var(--star);
}

.reel-poster {
  position: relative;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
}

.reel-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reel-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: var(--void);
  background: var(--signal);
  border: 4px solid var(--star);
  box-shadow: 4px 4px 0 var(--ink);
  padding: 0.5rem 1rem;
}

.reel-poster:hover .reel-play {
  background: var(--data);
}

.reel-link {
  display: block;
  margin-top: 0.5rem;
  color: var(--data);
  text-decoration: underline;
}
</style>
