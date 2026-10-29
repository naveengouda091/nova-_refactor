export function CanvasViewer() {
  return `
    <section id="canvas-inspection" class="canvas-section section" aria-labelledby="inspection-heading">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-head-split">
          <div>
            <div class="badge">
              <span class="badge-dot" aria-hidden="true"></span>
              <span>LIVE INTERACTIVE TELEMETRY</span>
            </div>
            <h2 id="inspection-heading" class="section-title">
              Interactive 3D Inspection &amp; Point Cloud Visualizer
            </h2>
            <p class="section-desc">
              Experience NovaScan 3D's reality capture data pipeline in real time. Switch between metrology deviation heatmaps, raw laser point clouds, and parametric CAD wireframes. Drag to orbit the 3D model.
            </p>
          </div>

          <!-- Controls HUD -->
          <div class="viewer-controls-hud">
            <div class="view-mode-tabs" role="tablist" aria-label="3D Visualization Modes">
              <button class="mode-tab active" data-mode="heatmap" role="tab" aria-selected="true" id="tab-heatmap">
                Metrology Colormap
              </button>
              <button class="mode-tab" data-mode="pointcloud" role="tab" aria-selected="false" id="tab-pointcloud">
                Laser Point Cloud
              </button>
              <button class="mode-tab" data-mode="wireframe" role="tab" aria-selected="false" id="tab-wireframe">
                CAD Wireframe
              </button>
            </div>
            <button id="toggle-orbit-btn" class="btn btn-secondary btn-sm" aria-label="Pause or Resume Auto Orbit">
              <span id="orbit-status-text">Pause Orbit</span>
            </button>
          </div>
        </div>

        <!-- Canvas Card Wrapper -->
        <div class="canvas-card">
          
          <!-- Metrology Spectrum Legend Overlay -->
          <div class="canvas-overlay-top" aria-hidden="true">
            <div class="telemetry-chip mono">
              <span class="chip-label">STATUS:</span>
              <span class="chip-val text-pass">NOMINAL FIT</span>
              <span class="chip-divider">|</span>
              <span class="chip-label">DEV:</span>
              <span id="live-dev-readout" class="chip-val text-laser">+0.018 mm</span>
              <span class="chip-divider">|</span>
              <span class="chip-label">POINTS:</span>
              <span class="chip-val">12,480 PTS</span>
            </div>

            <!-- Heatmap Gradient Scale -->
            <div class="heatmap-legend" id="heatmap-legend-ui">
              <div class="legend-labels mono">
                <span>-1.0mm</span>
                <span>-0.5mm</span>
                <span class="text-pass">0.00mm</span>
                <span>+0.5mm</span>
                <span>+1.0mm</span>
              </div>
              <div class="spectrum-bar"></div>
            </div>
          </div>

          <!-- The HTML5 Canvas -->
          <canvas id="metrology-canvas" class="metrology-canvas" aria-label="Interactive 3D metrology inspection view. Click and drag to orbit."></canvas>

          <!-- Interaction Hint Overlay -->
          <div class="canvas-hint-overlay mono" aria-hidden="true">
            <span>&bull; DRAG TO ROTATE 3D MODEL &bull; HOVER FOR DEVIATION PROBE</span>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initCanvasViewer() {
  const canvas = document.getElementById('metrology-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const devReadout = document.getElementById('live-dev-readout');
  const toggleBtn = document.getElementById('toggle-orbit-btn');
  const orbitText = document.getElementById('orbit-status-text');

  let width = 0;
  let height = 0;
  let dpr = 1;
  let yaw = 0.4;
  let pitch = 0.35;
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = !RM;
  let currentMode = 'heatmap'; // 'heatmap' | 'pointcloud' | 'wireframe'
  let laserScanY = -1.2;
  let hoveredDev = 0.018;

  // Geometry Generation (Mechanical Flange & Metrology Part)
  const points = [];
  const rings = 24;
  const sectors = 36;
  const radius = 1.0;
  const heightExt = 1.4;

  // Cylinder with flange & bolt holes
  for (let r = 0; r <= rings; r++) {
    const v = r / rings;
    const y = (v - 0.5) * heightExt;
    const rad = v < 0.25 ? radius * 1.5 : (v > 0.85 ? radius * 1.3 : radius);

    for (let s = 0; s < sectors; s++) {
      const u = s / sectors;
      const angle = u * Math.PI * 2;
      const x = Math.cos(angle) * rad;
      const z = Math.sin(angle) * rad;

      // Simulated realistic deviation (microns to mm)
      const dev = 0.35 * Math.sin(4 * angle) * Math.cos(3 * y) + 
                  0.45 * Math.exp(-((x - 0.4)**2 + (z - 0.4)**2) / 0.1) -
                  0.25 * Math.sin(2 * y);

      points.push({
        x, y, z,
        nx: Math.cos(angle),
        ny: 0,
        nz: Math.sin(angle),
        dev: Math.max(-1.0, Math.min(1.0, dev))
      });
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = rect.width * dpr;
    height = canvas.height = Math.max(380, rect.height) * dpr;
    canvas.style.height = `${canvas.clientHeight || 450}px`;
  }

  // 3D Projection & Rotation
  function project(x, y, z) {
    // Yaw (around Y)
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const x1 = x * cy - z * sy;
    const z1 = x * sy + z * cy;

    // Pitch (around X)
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const y2 = y * cp - z1 * sp;
    const z2 = y * sp + z1 * cp;

    const scale = Math.min(width, height) * 0.32;
    const fov = 3.2 / (3.2 + z2);

    return {
      px: width / 2 + x1 * scale * fov,
      py: height / 2 - y2 * scale * fov,
      depth: z2,
      scale: fov
    };
  }

  // Color lookup for metrology deviation
  function getMetrologyColor(dev, alpha = 0.85) {
    // Spectrum: -1.0 (blue) -> -0.5 (cyan) -> 0.0 (green nominal) -> +0.5 (yellow) -> +1.0 (red)
    const norm = (dev + 1.0) / 2.0; // 0 to 1
    if (norm < 0.25) {
      // Blue to Cyan
      const t = norm / 0.25;
      return `rgba(${Math.round(47 + (0 - 47) * t)}, ${Math.round(91 + (210 - 91) * t)}, 255, ${alpha})`;
    } else if (norm < 0.5) {
      // Cyan to Green
      const t = (norm - 0.25) / 0.25;
      return `rgba(0, ${Math.round(210 + (185 - 210) * t)}, ${Math.round(255 - 255 * t + 129 * t)}, ${alpha})`;
    } else if (norm < 0.75) {
      // Green to Yellow
      const t = (norm - 0.5) / 0.25;
      return `rgba(${Math.round(16 + (245 - 16) * t)}, ${Math.round(185 + (158 - 185) * t)}, ${Math.round(129 * (1 - t) + 11 * t)}, ${alpha})`;
    } else {
      // Yellow to Red
      const t = (norm - 0.75) / 0.25;
      return `rgba(${Math.round(245 + (239 - 245) * t)}, ${Math.round(158 * (1 - t) + 68 * t)}, ${Math.round(11 * (1 - t) + 68 * t)}, ${alpha})`;
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Grid guide floor
    ctx.strokeStyle = 'rgba(34, 41, 56, 0.4)';
    ctx.lineWidth = 1 * dpr;
    const gridY = 0.85;
    for (let g = -1.6; g <= 1.6; g += 0.4) {
      const p1 = project(g, gridY, -1.6);
      const p2 = project(g, gridY, 1.6);
      ctx.beginPath();
      ctx.moveTo(p1.px, p1.py);
      ctx.lineTo(p2.px, p2.py);
      ctx.stroke();

      const p3 = project(-1.6, gridY, g);
      const p4 = project(1.6, gridY, g);
      ctx.beginPath();
      ctx.moveTo(p3.px, p3.py);
      ctx.lineTo(p4.px, p4.py);
      ctx.stroke();
    }

    // Laser plane scan line animation
    laserScanY += 0.015;
    if (laserScanY > 1.2) laserScanY = -1.2;
    const scanLineP1 = project(-1.4, laserScanY, 0);
    const scanLineP2 = project(1.4, laserScanY, 0);

    if (currentMode === 'pointcloud') {
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.75)';
      ctx.lineWidth = 2 * dpr;
      ctx.beginPath();
      ctx.moveTo(scanLineP1.px, scanLineP1.py);
      ctx.lineTo(scanLineP2.px, scanLineP2.py);
      ctx.stroke();
    }

    // Sort points by depth for back-to-front rendering
    const projectedPoints = points.map(p => {
      const pr = project(p.x, p.y, p.z);
      return { ...p, ...pr };
    }).sort((a, b) => b.depth - a.depth);

    if (currentMode === 'wireframe') {
      // Draw CAD wireframe polygons
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.45)';
      ctx.lineWidth = 1 * dpr;
      for (let r = 0; r < rings; r++) {
        for (let s = 0; s < sectors; s++) {
          const idx = r * sectors + s;
          const nextS = r * sectors + ((s + 1) % sectors);
          const nextR = (r + 1) * sectors + s;
          if (idx < points.length && nextS < points.length && nextR < points.length) {
            const p1 = project(points[idx].x, points[idx].y, points[idx].z);
            const p2 = project(points[nextS].x, points[nextS].y, points[nextS].z);
            const p3 = project(points[nextR].x, points[nextR].y, points[nextR].z);

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.lineTo(p3.px, p3.py);
            ctx.stroke();
          }
        }
      }
    } else if (currentMode === 'heatmap') {
      // Draw Metrology Colormap points & surface patches
      projectedPoints.forEach(p => {
        const radiusPt = Math.max(1.5, 3.2 * p.scale * dpr);
        ctx.fillStyle = getMetrologyColor(p.dev, 0.88);
        ctx.beginPath();
        ctx.arc(p.px, p.py, radiusPt, 0, Math.PI * 2);
        ctx.fill();
      });
    } else if (currentMode === 'pointcloud') {
      // Laser point cloud mode
      projectedPoints.forEach(p => {
        const isNearLaser = Math.abs(p.y - laserScanY) < 0.12;
        const color = isNearLaser ? '#FFFFFF' : 'rgba(0, 210, 255, 0.7)';
        const radiusPt = isNearLaser ? 3.5 * dpr : 1.8 * dpr;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, radiusPt, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Auto rotate if active
    if (autoRotate && !isDragging && !RM) {
      yaw += 0.005;
    }

    requestAnimationFrame(render);
  }

  // Pointer interactions
  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (isDragging) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      yaw += dx * 0.008;
      pitch = Math.max(-1.0, Math.min(1.0, pitch + dy * 0.008));
      lastX = e.clientX;
      lastY = e.clientY;
    } else {
      // Hover probe
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * dpr;
      const my = (e.clientY - rect.top) * dpr;
      // Synthesize slight hover deviation variance for inspection realism
      hoveredDev = (Math.sin(mx * 0.05) * 0.4).toFixed(3);
      if (devReadout) {
        const prefix = hoveredDev >= 0 ? '+' : '';
        devReadout.textContent = `${prefix}${hoveredDev} mm`;
      }
    }
  });

  canvas.addEventListener('pointerup', (e) => {
    isDragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch(_) {}
  });

  // Toggle orbit button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      autoRotate = !autoRotate;
      if (orbitText) {
        orbitText.textContent = autoRotate ? 'Pause Orbit' : 'Resume Orbit';
      }
    });
  }

  // Mode Switch Tabs
  const modeTabs = document.querySelectorAll('.mode-tab');
  const legendUI = document.getElementById('heatmap-legend-ui');

  modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modeTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentMode = tab.dataset.mode;

      if (legendUI) {
        legendUI.style.display = currentMode === 'heatmap' ? 'block' : 'none';
      }
    });
  });

  window.addEventListener('resize', resize);
  resize();
  render();
}
