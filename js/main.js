// ─── PAW PRINT GENERATOR ───
const PAW_SVG = (fill, size) => `
<svg width="${size}" height="${size}" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
  <!-- Almohadilla central — forma de la imagen de referencia:
       ancha en la base, se estrecha hacia arriba, lados curvados orgánicos -->
  <path d="
    M 60,64
    C 55,61 44,63 36,71
    C 27,80 26,96 32,107
    C 37,115 48,119 60,118
    C 72,119 83,115 88,107
    C 94,96 93,80 84,71
    C 76,63 65,61 60,64 Z
  " fill="${fill}"/>
  <!-- Dedo 1 — extremo izquierdo -->
  <ellipse cx="13" cy="47" rx="9" ry="12" transform="rotate(-25 13 47)" fill="${fill}"/>
  <!-- Dedo 2 — izquierda -->
  <ellipse cx="37" cy="22" rx="9" ry="12" transform="rotate(-8 37 22)"  fill="${fill}"/>
  <!-- Dedo 3 — derecha -->
  <ellipse cx="83" cy="22" rx="9" ry="12" transform="rotate(8 83 22)"   fill="${fill}"/>
  <!-- Dedo 4 — extremo derecho -->
  <ellipse cx="107" cy="47" rx="9" ry="12" transform="rotate(25 107 47)" fill="${fill}"/>
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
