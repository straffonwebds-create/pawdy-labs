// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.product-card, .testimonial-card, .stat-card, .science-step, .about__copy p, .hero__content > *'
).forEach((el, i) => {
  el.setAttribute('data-reveal', '');
  el.style.transitionDelay = `${i * 60}ms`;
  observer.observe(el);
});
