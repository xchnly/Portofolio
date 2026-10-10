const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default {
  mounted(el, binding) {
    const delay = typeof binding.value === 'number' ? binding.value : (binding.value && binding.value.delay) || 0
    el.classList.add('reveal')
    el.style.transitionDelay = `${delay}ms`

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    el.__revealObserver = observer
  },
  unmounted(el) {
    if (el.__revealObserver) el.__revealObserver.disconnect()
  }
}
