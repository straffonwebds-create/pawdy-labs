// ─── COUNTDOWN ───
const LAUNCH_DATE = new Date('2025-01-15T00:00:00');

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const diff = LAUNCH_DATE - Date.now();
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<span class="chip">¡Ya lanzamos!</span>';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('days').textContent    = pad(d);
  document.getElementById('hours').textContent   = pad(h);
  document.getElementById('minutes').textContent = pad(m);
  document.getElementById('seconds').textContent = pad(s);
}

tick();
setInterval(tick, 1000);

// ─── EMAIL FORM ───
function handleSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  const note  = document.getElementById('formNote');
  const form  = document.getElementById('notifyForm');

  // Simulate registration
  form.innerHTML = `<p class="form-note form-note--success">✓ ¡Listo! Te avisamos en <strong>${email}</strong></p>`;
  note.style.display = 'none';
}
