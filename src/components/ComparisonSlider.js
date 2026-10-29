export function ComparisonSlider() {
  return `
    <section id="comparison" class="comparison-section section" aria-labelledby="comparison-heading">
      <div class="container">
        
        <div class="section-head text-center">
          <div class="eyebrow-tag">
            <span class="eyebrow-dash" aria-hidden="true"></span>
            <span>ACCURACY VERIFICATION</span>
          </div>
          <h2 id="comparison-heading" class="section-title">
            Raw Point Cloud vs Parametric CAD
          </h2>
          <p class="section-desc mx-auto">
            Drag the divider to compare unstructured reality capture point clouds against mathematically reconstructed parametric CAD surfaces.
          </p>
        </div>

        <!-- Slider Card -->
        <div class="slider-wrapper bento-card spectrum-top" style="padding:0;">
          <div class="slider-container" id="slider-container" role="region" aria-label="Interactive 3D Scan vs CAD comparison slider">
            
            <!-- Before Layer: Raw Reality Scan (Point Cloud) -->
            <div class="slider-layer layer-before">
              <div class="layer-content">
                <div class="scan-simulation pointcloud-sim">
                  <svg class="slider-graphic-svg" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="800" height="450" fill="#0C1017"/>
                    <!-- Laser Grid -->
                    <g stroke="#1F2837" stroke-width="1" stroke-dasharray="2 4">
                      <line x1="100" y1="0" x2="100" y2="450"/>
                      <line x1="200" y1="0" x2="200" y2="450"/>
                      <line x1="300" y1="0" x2="300" y2="450"/>
                      <line x1="400" y1="0" x2="400" y2="450"/>
                      <line x1="500" y1="0" x2="500" y2="450"/>
                      <line x1="600" y1="0" x2="600" y2="450"/>
                      <line x1="700" y1="0" x2="700" y2="450"/>
                    </g>
                    <!-- Industrial Flange in Point Cloud (Dots) -->
                    <g fill="#06B6D4" opacity="0.85">
                      <circle cx="400" cy="225" r="110" fill="none" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="1 3"/>
                      <circle cx="400" cy="225" r="70" fill="none" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="1 3"/>
                      <circle cx="400" cy="225" r="40" fill="none" stroke="#06B6D4" stroke-width="1.5" stroke-dasharray="1 3"/>
                      <circle cx="340" cy="180" r="1.5"/><circle cx="355" cy="190" r="1.5"/><circle cx="370" cy="175" r="1.5"/>
                      <circle cx="430" cy="180" r="1.5"/><circle cx="445" cy="190" r="1.5"/><circle cx="460" cy="175" r="1.5"/>
                      <circle cx="340" cy="270" r="1.5"/><circle cx="355" cy="260" r="1.5"/><circle cx="370" cy="275" r="1.5"/>
                      <circle cx="430" cy="270" r="1.5"/><circle cx="445" cy="260" r="1.5"/><circle cx="460" cy="275" r="1.5"/>
                      <circle cx="400" cy="135" r="10" stroke="#06B6D4" stroke-width="1" stroke-dasharray="1 2"/>
                      <circle cx="400" cy="315" r="10" stroke="#06B6D4" stroke-width="1" stroke-dasharray="1 2"/>
                      <circle cx="310" cy="225" r="10" stroke="#06B6D4" stroke-width="1" stroke-dasharray="1 2"/>
                      <circle cx="490" cy="225" r="10" stroke="#06B6D4" stroke-width="1" stroke-dasharray="1 2"/>
                    </g>
                  </svg>
                </div>
                <div class="layer-badge badge-left mono">
                  <span class="status-dot dot-cyan"></span>
                  <span>RAW POINT CLOUD (.E57 / 2.4M PTS)</span>
                </div>
              </div>
            </div>

            <!-- After Layer: Reconstructed Parametric CAD (Clean Mesh) -->
            <div class="slider-layer layer-after" id="layer-after">
              <div class="layer-content">
                <div class="scan-simulation cad-sim">
                  <svg class="slider-graphic-svg" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="800" height="450" fill="#0C1017"/>
                    <!-- Solid CAD Wireframe -->
                    <circle cx="400" cy="225" r="110" fill="rgba(16, 185, 129, 0.05)" stroke="#10B981" stroke-width="2.5"/>
                    <circle cx="400" cy="225" r="70" fill="none" stroke="#10B981" stroke-width="2"/>
                    <circle cx="400" cy="225" r="40" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" stroke-width="2.5"/>
                    <circle cx="400" cy="135" r="10" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                    <circle cx="400" cy="315" r="10" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                    <circle cx="310" cy="225" r="10" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                    <circle cx="490" cy="225" r="10" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2"/>
                    <line x1="290" y1="90" x2="510" y2="90" stroke="#10B981" stroke-width="1.5"/>
                    <line x1="290" y1="80" x2="290" y2="100" stroke="#10B981" stroke-width="1.5"/>
                    <line x1="510" y1="80" x2="510" y2="100" stroke="#10B981" stroke-width="1.5"/>
                    <text x="375" y="85" font-family="var(--font-mono)" font-size="12" fill="#10B981">&Oslash; 220.00mm &plusmn;0.02</text>
                  </svg>
                </div>
                <div class="layer-badge badge-right mono">
                  <span class="status-dot dot-green"></span>
                  <span>PARAMETRIC SOLID CAD (.STEP / LOD 500)</span>
                </div>
              </div>
            </div>

            <!-- Draggable Divider Handle -->
            <div class="slider-handle" id="slider-handle" tabindex="0" role="slider" aria-label="Comparison slider position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
              <div class="handle-line"></div>
              <div class="handle-knob">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

export function initComparisonSlider() {
  const container = document.getElementById('slider-container');
  const handle = document.getElementById('slider-handle');
  const layerAfter = document.getElementById('layer-after');
  if (!container || !handle || !layerAfter) return;

  let isSliding = false;

  function updateSlider(percent) {
    const clamped = Math.max(0, Math.min(100, percent));
    handle.style.left = `${clamped}%`;
    layerAfter.style.clipPath = `polygon(${clamped}% 0, 100% 0, 100% 100%, ${clamped}% 100%)`;
    handle.setAttribute('aria-valuenow', Math.round(clamped));
  }

  function handleMove(clientX) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    updateSlider(percent);
  }

  container.addEventListener('pointerdown', (e) => {
    isSliding = true;
    container.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  });

  container.addEventListener('pointermove', (e) => {
    if (!isSliding) return;
    handleMove(e.clientX);
  });

  container.addEventListener('pointerup', (e) => {
    isSliding = false;
    try { container.releasePointerCapture(e.pointerId); } catch(_) {}
  });

  handle.addEventListener('keydown', (e) => {
    let cur = parseFloat(handle.getAttribute('aria-valuenow') || '50');
    if (e.key === 'ArrowLeft') {
      updateSlider(cur - 5);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      updateSlider(cur + 5);
      e.preventDefault();
    }
  });

  updateSlider(50);
}
