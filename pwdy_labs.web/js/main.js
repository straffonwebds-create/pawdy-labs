// ─── PAW PRINT GENERATOR ───
const PAW_SVG = (fill, size) => `
<svg width="${size}" height="${size}" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
  <!-- Almohadilla central — forma orgánica irregular -->
  <path d="
    M 60,55
    C 38,52 18,58 14,74
    C 10,90 18,110 35,118
    C 45,123 55,122 60,120
    C 65,122 75,123 85,118
    C 102,110 110,90 106,74
    C 102,58 82,52 60,55 Z
  " fill="${fill}"/>
  <!-- Dedo 1 — extremo izquierdo -->
  <ellipse cx="16" cy="42" rx="10" ry="13" transform="rotate(-22 16 42)" fill="${fill}"/>
  <!-- Dedo 2 — izquierda -->
  <ellipse cx="40" cy="24" rx="11" ry="14" transform="rotate(-8 40 24)"  fill="${fill}"/>
  <!-- Dedo 3 — derecha -->
  <ellipse cx="80" cy="24" rx="11" ry="14" transform="rotate(8 80 24)"   fill="${fill}"/>
  <!-- Dedo 4 — extremo derecho -->
  <ellipse cx="104" cy="42" rx="10" ry="13" transform="rotate(22 104 42)" fill="${fill}"/>
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
