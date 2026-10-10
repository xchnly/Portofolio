<template>
  <div class="rocket-wrap" aria-hidden="true">
    <svg viewBox="0 0 120 200" class="rocket-svg">
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#c4b5fd" />
          <stop offset="55%" stop-color="#a78bfa" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
        <radialGradient id="rocketWindow" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#e6fffb" />
          <stop offset="55%" stop-color="#5eead4" />
          <stop offset="100%" stop-color="#0f766e" />
        </radialGradient>
        <linearGradient id="rocketFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0fdfa" stop-opacity="1" />
          <stop offset="30%" stop-color="#5eead4" stop-opacity="0.95" />
          <stop offset="70%" stop-color="#a78bfa" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#a78bfa" stop-opacity="0" />
        </linearGradient>
      </defs>

      <path d="M38 128 L14 168 L44 152 Z" fill="#4c1d95" />
      <path d="M82 128 L106 168 L76 152 Z" fill="#4c1d95" />

      <path
        d="M60 6 C84 38 86 96 79 142 L41 142 C34 96 36 38 60 6 Z"
        fill="url(#rocketBody)"
        stroke="#eef2f8"
        stroke-width="1.5"
      />

      <circle cx="60" cy="68" r="15" fill="#0b1120" stroke="#5eead4" stroke-width="2" />
      <circle cx="60" cy="68" r="9" fill="url(#rocketWindow)" />

      <path d="M60 6 C68 22 72 40 73 58 L47 58 C48 40 52 22 60 6 Z" fill="#eef2f8" opacity="0.18" />

      <g class="rocket-flame">
        <path d="M46 140 Q60 190 74 140 Q60 158 46 140 Z" fill="url(#rocketFlame)" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Rocket',
}
</script>

<style scoped>
.rocket-wrap {
  width: 200px;
  height: 340px;
  animation: rocket-float 4.5s ease-in-out infinite;
  transform-origin: center;
}

.rocket-svg {
  width: 100%;
  height: 100%;
  transform: rotate(8deg);
  filter: drop-shadow(0 0 22px rgba(167, 139, 250, 0.35));
}

.rocket-flame {
  transform-origin: 60px 140px;
  animation: rocket-flicker 0.55s ease-in-out infinite alternate;
}

@keyframes rocket-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

@keyframes rocket-flicker {
  from { transform: scaleY(0.85) scaleX(0.9); opacity: 0.75; }
  to { transform: scaleY(1.15) scaleX(1.05); opacity: 1; }
}
</style>
