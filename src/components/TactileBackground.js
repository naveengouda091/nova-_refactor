export function TactileBackground() {
  return `<canvas id="tactile-canvas" aria-hidden="true"></canvas>`;
}

export function initTactileBackground() {
  const canvas = document.getElementById('tactile-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let mouseX = -9999;
  let mouseY = -9999;
  let targetMouseX = -9999;
  let targetMouseY = -9999;

  const spacing = 36; // Grid cell spacing in px
  const influenceRadius = 140; // Proximity reaction radius

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = window.innerWidth * dpr;
    height = canvas.height = window.innerHeight * dpr;
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Smooth mouse interpolation
    mouseX += (targetMouseX - mouseX) * 0.15;
    mouseY += (targetMouseY - mouseY) * 0.15;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const baseColor = isDark ? 255 : 20;
    const baseAlpha = isDark ? 0.08 : 0.06;

    const cols = Math.ceil((width / dpr) / spacing);
    const rows = Math.ceil((height / dpr) / spacing);

    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r <= rows; r++) {
        const x = c * spacing;
        const y = r * spacing;

        const dx = (mouseX / dpr) - x;
        const dy = (mouseY / dpr) - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = x;
        let drawY = y;
        let alpha = baseAlpha;
        let size = 1.2;

        if (dist < influenceRadius && !RM) {
          const factor = (1 - dist / influenceRadius);
          // Magnetic displacement away from cursor
          drawX -= (dx / dist) * factor * 6;
          drawY -= (dy / dist) * factor * 6;
          alpha = baseAlpha + factor * 0.28;
          size = 1.2 + factor * 1.8;
        }

        // Draw micro crosshair or dot
        ctx.fillStyle = `rgba(${baseColor}, ${baseColor}, ${baseColor}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(drawX * dpr, drawY * dpr, size * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(render);
  }

  window.addEventListener('pointermove', (e) => {
    targetMouseX = e.clientX * dpr;
    targetMouseY = e.clientY * dpr;
  });

  window.addEventListener('pointerleave', () => {
    targetMouseX = -9999;
    targetMouseY = -9999;
  });

  window.addEventListener('resize', resize);
  resize();
  render();
}
