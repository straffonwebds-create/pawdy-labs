// ─── PAW PRINT GENERATOR ───
const PAW_SVG = (fill, size) => `
<svg width="${size}" height="${size}" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
  <!-- Almohadilla central -->
  <ellipse cx="45" cy="62" rx="17" ry="14" fill="${fill}"/>
  <!-- Dedo 1 — extremo izquierdo -->
  <ellipse cx="11" cy="48" rx="6" ry="8" transform="rotate(-32 11 48)" fill="${fill}"/>
  <!-- Dedo 2 — izquierda -->
  <ellipse cx="24" cy="28" rx="6" ry="8" transform="rotate(-14 24 28)" fill="${fill}"/>
  <!-- Dedo 3 — centro -->
  <ellipse cx="45" cy="21" rx="6" ry="8"                               fill="${fill}"/>
  <!-- Dedo 4 — derecha -->
  <ellipse cx="66" cy="28" rx="6" ry="8" transform="rotate(14 66 28)"  fill="${fill}"/>
  <!-- Dedo 5 — extremo derecho -->
  <ellipse cx="79" cy="48" rx="6" ry="8" transform="rotate(32 79 48)"  fill="${fill}"/>
</svg>`;

const container = document.getElementById('paws');
const COUNT = 28;

for (let i = 0; i < COUNT; i++) {
  const el   = document.createElement('div');
  const size = 32 + Math.random() * 52;          // 32–84px
  const op   = 0.06 + Math.random() * 0.10;      // 6–16% opacity
  const dur  = 14 + Math.random() * 20;           // 14–34s
  const delay = -(Math.random() * dur);            // stagger: start mid-cycle
  const rot  = Math.random() * 360;
  const sc   = 0.7 + Math.random() * 0.6;
  const x    = Math.random() * 100;               // % across screen
  const y    = 10 + Math.random() * 85;           // % down screen

  el.className = 'paw';
  el.innerHTML = PAW_SVG('#1f1b10', size);
  el.style.cssText = `
    left: ${x}%;
    top:  ${y}%;
    --rot: ${rot}deg;
    --sc:  ${sc};
    --op:  ${op};
    animation-duration:  ${dur}s;
    animation-delay:     ${delay}s;
  `;
  container.appendChild(el);
}
