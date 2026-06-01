// ─── PAW PRINT GENERATOR ───
const PAW_SVG = (fill, size) => `
<svg width="${size}" height="${size}" viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg">
  <!-- Almohadilla central — forma de la imagen de referencia:
       ancha en la base, se estrecha hacia arriba, lados curvados orgánicos -->
  <path d="
    M 60,56
    C 54,52 40,54 30,64
    C 18,76 16,96 24,110
    C 30,120 44,126 60,124
    C 76,126 90,120 96,110
    C 104,96 102,76 90,64
    C 80,54 66,52 60,56 Z
  " fill="${fill}"/>
  <!-- Dedo 1 — extremo izquierdo, más bajo y girado -->
  <ellipse cx="14" cy="44" rx="9" ry="12" transform="rotate(-25 14 44)" fill="${fill}"/>
  <!-- Dedo 2 — izquierda, más arriba -->
  <ellipse cx="38" cy="22" rx="10" ry="13" transform="rotate(-8 38 22)"  fill="${fill}"/>
  <!-- Dedo 3 — derecha, mismo nivel -->
  <ellipse cx="82" cy="22" rx="10" ry="13" transform="rotate(8 82 22)"   fill="${fill}"/>
  <!-- Dedo 4 — extremo derecho, más bajo y girado -->
  <ellipse cx="106" cy="44" rx="9" ry="12" transform="rotate(25 106 44)" fill="${fill}"/>
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
