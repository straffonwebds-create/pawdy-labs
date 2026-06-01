// ─── PAW PRINT GENERATOR ───
const PAW_SVG = (fill, size) => `
<svg width="${size}" height="${size}" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <!-- Almohadilla central -->
  <ellipse cx="40" cy="54" rx="16" ry="13" fill="${fill}"/>
  <!-- Dedo 1 (izquierda exterior) -->
  <ellipse cx="16" cy="38" rx="7" ry="9" transform="rotate(-20 16 38)" fill="${fill}"/>
  <!-- Dedo 2 (izquierda interior) -->
  <ellipse cx="28" cy="26" rx="7" ry="9" transform="rotate(-8 28 26)"  fill="${fill}"/>
  <!-- Dedo 3 (derecha interior) -->
  <ellipse cx="52" cy="26" rx="7" ry="9" transform="rotate(8 52 26)"   fill="${fill}"/>
  <!-- Dedo 4 (derecha exterior) -->
  <ellipse cx="64" cy="38" rx="7" ry="9" transform="rotate(20 64 38)"  fill="${fill}"/>
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
