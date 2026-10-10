<template>
  <div class="engine" aria-hidden="true">
    <span class="puff puff--1"></span>
    <span class="puff puff--2"></span>
    <span class="puff puff--3"></span>
    <svg viewBox="0 0 24 16" width="192" height="128" shape-rendering="crispEdges" class="engine-art">
      <!-- chimney + dome -->
      <path fill="#1a1c2c" d="M14 2h3v4h-3zM13 1h5v1h-5z" />
      <path fill="#ffec27" d="M9 4h3v2H9z" />
      <!-- boiler -->
      <path fill="#ff004d" d="M7 6h12v6H7z" />
      <path fill="#7e2553" d="M7 10h12v2H7z" />
      <path fill="#fff1e8" d="M10 7h1v2h-1zM14 7h1v2h-1z" />
      <!-- headlight -->
      <path fill="#ffec27" d="M19 7h2v2h-2z" />
      <!-- cabin -->
      <path fill="#29366f" d="M1 3h7v9H1z" />
      <path fill="#1a1c2c" d="M0 2h9v1H0z" />
      <path fill="#fff1e8" d="M2 5h4v3H2z" />
      <!-- chassis + cowcatcher -->
      <path fill="#1a1c2c" d="M1 12h21v1H1zM20 10h2v2h-2zM21 13h2v1h-2z" />
      <!-- wheels -->
      <g fill="#1a1c2c">
        <path d="M2 12h5v4H2zM9 12h5v4H9zM15 12h4v4h-4z" />
      </g>
      <g fill="#fff1e8">
        <path d="M3 13h3v2H3zM10 13h3v2h-3zM16 13h2v2h-2z" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.engine {
  position: relative;
  width: 192px;
  height: 128px;
  flex-shrink: 0;
}

.engine-art {
  display: block;
}

/* rail under the engine: steel bar on top, sleepers below, 12px period */
.engine::before,
.engine::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
}
.engine::after {
  top: 132px;
  height: 4px;
  background: #c2c3c7;
  border-top: 2px solid #1a1c2c;
}
.engine::before {
  top: 138px;
  height: 8px;
  background: repeating-linear-gradient(90deg, #ab5236 0 6px, transparent 6px 12px);
}

.puff {
  position: absolute;
  left: 112px;
  top: 0;
  width: 14px;
  height: 14px;
  background: #fff1e8;
  border: 3px solid #1a1c2c;
  opacity: 0;
  animation: smoke 1.8s steps(6) infinite;
}
.puff--2 { animation-delay: -0.6s; }
.puff--3 { animation-delay: -1.2s; }

@keyframes smoke {
  0% { transform: translate(0, 0); opacity: 0; }
  15% { opacity: 1; }
  100% { transform: translate(-30px, -56px) scale(1.6); opacity: 0; }
}
</style>
