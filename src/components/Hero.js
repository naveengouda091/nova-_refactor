export function Hero() {
  return `
    <section class="hero-section section" aria-labelledby="hero-title">
      <div class="container hero-container-rel">
        <div class="hero-split-grid">
          
          <!-- Left: Information & Action -->
          <div class="hero-text-col">
            <div class="eyebrow-tag">
              <span class="eyebrow-dash" aria-hidden="true"></span>
              <span>PRECISION REALITY CAPTURE</span>
            </div>

            <h1 id="hero-title" class="hero-title">
              From Physical Object to <span class="gradient-text">Millimeter CAD</span>.
            </h1>

            <p class="hero-lead">
              We transform complex mechanical components, industrial tooling, and legacy plant spares into micron-accurate CAD and BIM deliverables across India.
            </p>

            <div class="hero-actions">
              <a href="#site-footer" class="btn btn-primary whitespace-nowrap">
                <span>Request a Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#interactive-showcase" class="btn btn-secondary whitespace-nowrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <span>Interactive 3D Viewer</span>
              </a>
            </div>
          </div>

          <!-- Right: Precision 3D Industrial Metrology Flange Viewport Card -->
          <div class="hero-visual-col">
            <div class="hero-collage-wrap pillar-viewport-wrap">
              
              <!-- Floating Glassmorphic Telemetry Badges (Safe offsets without obscuring header/footer) -->
              <div class="floating-badge badge-mandapa-tl glass-badge" aria-label="Tolerance metric">
                <span class="status-dot dot-green" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">Optical Metrology &bull; &plusmn;0.02mm Tol</span>
              </div>

              <div class="floating-badge badge-mandapa-mr glass-badge" aria-label="Point density metric">
                <span class="status-dot dot-cyan" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">2.4M Pts / Sec</span>
              </div>

              <div class="floating-badge badge-mandapa-bl glass-badge" aria-label="CAD status metric">
                <span class="status-dot dot-blue" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">STEP AP242 Solid</span>
              </div>

              <!-- Main CAD Viewport Card Container -->
              <div class="cad-viewport-card bento-card">
                
                <!-- Top Viewport Header Bar -->
                <div class="viewport-header-bar mono text-xs">
                  <div class="header-left">
                    <span class="text-laser font-bold" id="stage-badge-step">STAGE 01 //</span>
                    <span class="text-high font-bold" id="stage-badge-name">SOLID PART</span>
                  </div>
                  <div class="header-right">
                    <span class="status-dot dot-green" aria-hidden="true"></span>
                    <span class="font-bold text-pass">TOL: &plusmn;0.020mm</span>
                  </div>
                </div>

                <!-- 3D Flange Canvas Viewport -->
                <div class="pillar-canvas-container flange-viewport-container">
                  <canvas id="hero-flange-canvas" width="500" height="400" aria-label="3D industrial metrology flange transformation viewport"></canvas>
                  
                  <!-- Deviation Colormap Scale Bar (Visible in Coloured Dots / Heatmap mode) -->
                  <div class="flange-scale-bar-overlay" id="flange-scale-overlay" style="display: none;" aria-hidden="true">
                    <div class="scale-labels mono text-xs">
                      <span>-0.15mm</span>
                      <span class="text-pass">0.00mm</span>
                      <span>+0.15mm</span>
                    </div>
                    <div class="spectrum-bar"></div>
                  </div>

                  <div class="canvas-drag-hint mono" aria-hidden="true">&bull; DRAG TO ORBIT 3D FLANGE &bull;</div>
                </div>

                <!-- Bottom Footer Bar: Multi-Form State Switcher -->
                <div class="viewport-footer-bar mono text-xs">
                  <!-- Form Mode Selector Pills -->
                  <div class="footer-segmented-pills" role="tablist" aria-label="Flange Representation Forms">
                    <button class="layer-pill-btn active" data-mode="solid" role="tab" aria-selected="true">Part</button>
                    <button class="layer-pill-btn" data-mode="laser" role="tab" aria-selected="false">Laser</button>
                    <button class="layer-pill-btn" data-mode="dots" role="tab" aria-selected="false">Dots</button>
                    <button class="layer-pill-btn" data-mode="coloured" role="tab" aria-selected="false">Heatmap</button>
                    <button class="layer-pill-btn" data-mode="wireframe" role="tab" aria-selected="false">Wiremesh</button>
                    <button class="layer-pill-btn" data-mode="outline" role="tab" aria-selected="false">CAD</button>
                  </div>

                  <!-- Auto-Cycle Toggle -->
                  <button id="flange-play-toggle" class="flange-play-btn" title="Toggle Auto Cycle" aria-label="Auto Cycle Forms">
                    <svg id="flange-play-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initHeroFlangeCanvas() {
  const canvas = document.getElementById('hero-flange-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let yaw = 0.42;
  let pitch = 0.52; // clean isometric downward angle matching reference
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = !RM;
  let autoCycle = true;
  let cycleTimer = null;
  let currentMode = 'solid'; // 'solid' | 'laser' | 'dots' | 'coloured' | 'wireframe' | 'outline'
  let laserX = -1.3;
  let laserSweepDirection = 1;

  const stageStepLabel = document.getElementById('stage-badge-step');
  const stageNameLabel = document.getElementById('stage-badge-name');
  const scaleOverlay = document.getElementById('flange-scale-overlay');
  const playBtn = document.getElementById('flange-play-toggle');
  const playIcon = document.getElementById('flange-play-icon');
  const modeBtns = document.querySelectorAll('.layer-pill-btn');

  // =========================================================================
  // 3D GEOMETRIC PARAMETERS OF INDUSTRIAL MECHANICAL FLANGE
  // Exactly matching Nikola Labs reference image:
  // - Outer Disc: Radius = 1.0, Thickness = 0.22 (Y in [-0.22, 0.0])
  // - Raised Central Hub: Radius = 0.48, Height = 0.44 (Y in [0.0, 0.44])
  // - Center Bore Hole: Radius = 0.28, Extends through entire height
  // - 8 Bolt Holes: Spaced evenly on PCD Radius = 0.76, Hole Radius = 0.082
  // =========================================================================

  const FLANGE_R = 1.0;
  const FLANGE_Y_BOT = -0.24;
  const FLANGE_Y_TOP = 0.0;

  const HUB_R = 0.52;
  const HUB_Y_TOP = 0.58; // tall industrial hub matching reference

  const BORE_R = 0.30;

  const BOLT_COUNT = 8;
  const BOLT_PCD = 0.76;
  const BOLT_R = 0.082;

  // 1. Generate Point Cloud Coordinates for 'dots' and 'coloured' modes
  const pointCloud = [];
  
  // Flange face points
  for (let r = 0.52; r <= 0.98; r += 0.045) {
    const count = Math.floor(r * 56);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;

      // Filter out inside bolt holes
      let insideHole = false;
      for (let b = 0; b < BOLT_COUNT; b++) {
        const bAngle = (b / BOLT_COUNT) * Math.PI * 2;
        const bx = Math.cos(bAngle) * BOLT_PCD;
        const bz = Math.sin(bAngle) * BOLT_PCD;
        const dist = Math.hypot(x - bx, z - bz);
        if (dist < BOLT_R + 0.02) {
          insideHole = true;
          break;
        }
      }

      if (!insideHole) {
        // Subtle simulated metrology deviation across surface (-0.12mm to +0.12mm)
        const dev = 0.08 * Math.sin(3 * angle) + 0.06 * Math.cos(4 * r) - 0.03;
        pointCloud.push({ x, y: FLANGE_Y_TOP, z, dev });
      }
    }
  }

  // Hub top face points
  for (let r = BORE_R + 0.03; r <= HUB_R - 0.02; r += 0.045) {
    const count = Math.floor(r * 52);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const dev = 0.04 * Math.cos(2 * angle) + 0.02;
      pointCloud.push({ x, y: HUB_Y_TOP, z, dev });
    }
  }

  // Flange outer wall points
  for (let y = FLANGE_Y_BOT; y <= FLANGE_Y_TOP; y += 0.05) {
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * Math.PI * 2;
      const x = Math.cos(angle) * FLANGE_R;
      const z = Math.sin(angle) * FLANGE_R;
      const dev = 0.05 * Math.sin(4 * angle);
      pointCloud.push({ x, y, z, dev });
    }
  }

  // Hub outer wall points
  for (let y = FLANGE_Y_TOP; y <= HUB_Y_TOP; y += 0.06) {
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const x = Math.cos(angle) * HUB_R;
      const z = Math.sin(angle) * HUB_R;
      const dev = 0.03 * Math.cos(3 * angle);
      pointCloud.push({ x, y, z, dev });
    }
  }

  // Bore inner wall points
  for (let y = FLANGE_Y_BOT; y <= HUB_Y_TOP; y += 0.08) {
    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const x = Math.cos(angle) * BORE_R;
      const z = Math.sin(angle) * BORE_R;
      const dev = -0.04 * Math.sin(2 * angle);
      pointCloud.push({ x, y, z, dev });
    }
  }

  // 8 Bolt hole wall points
  for (let b = 0; b < BOLT_COUNT; b++) {
    const bAngle = (b / BOLT_COUNT) * Math.PI * 2;
    const bx = Math.cos(bAngle) * BOLT_PCD;
    const bz = Math.sin(bAngle) * BOLT_PCD;
    for (let y = FLANGE_Y_BOT; y <= FLANGE_Y_TOP; y += 0.08) {
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const x = bx + Math.cos(a) * BOLT_R;
        const z = bz + Math.sin(a) * BOLT_R;
        pointCloud.push({ x, y, z, dev: 0.01 });
      }
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = rect.width * dpr;
    height = canvas.height = (rect.height || 400) * dpr;
  }

  function project(x, y, z) {
    const cy = Math.cos(yaw);
    const sy = Math.sin(yaw);
    const x1 = x * cy - z * sy;
    const z1 = x * sy + z * cy;

    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);
    const y2 = y * cp - z1 * sp;
    const z2 = y * sp + z1 * cp;

    const scale = Math.min(width, height) * 0.38;
    const fov = 3.8 / (3.8 + z2);

    return {
      px: width / 2 + x1 * scale * fov,
      py: height / 2 - y2 * scale * fov + 20 * dpr, // centered tastefully
      depth: z2,
      scale: fov
    };
  }

  // Metrology heatmap color map: Blue -> Cyan -> Green (Nominal) -> Yellow -> Red
  function getHeatmapColor(dev) {
    // dev in [-0.15, +0.15]
    const norm = Math.max(0, Math.min(1, (dev + 0.15) / 0.30));
    if (norm < 0.25) {
      return '#0284C7'; // Blue
    } else if (norm < 0.50) {
      return '#06B6D4'; // Cyan
    } else if (norm < 0.70) {
      return '#10B981'; // Green Nominal
    } else if (norm < 0.88) {
      return '#F59E0B'; // Amber
    } else {
      return '#EF4444'; // Red
    }
  }

  // =========================================================================
  // MAIN RENDER LOOP
  // =========================================================================
  function render() {
    ctx.clearRect(0, 0, width, height);
    const s = dpr;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Canvas background: Clean off-white in light mode (#F8FAFC) or deep dark slate (#090D16)
    ctx.fillStyle = isDark ? '#090D16' : '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    // 1. Soft Ambient Ground Shadow (Grounding the flange onto the surface)
    const shadowCenter = project(0, FLANGE_Y_BOT, 0);
    const shadowR = FLANGE_R * 1.15 * Math.min(width, height) * 0.38 * shadowCenter.scale;
    
    const shadowGrad = ctx.createRadialGradient(
      shadowCenter.px, shadowCenter.py, shadowR * 0.2,
      shadowCenter.px, shadowCenter.py, shadowR
    );
    shadowGrad.addColorStop(0, isDark ? 'rgba(0, 0, 0, 0.65)' : 'rgba(15, 23, 42, 0.14)');
    shadowGrad.addColorStop(1, 'transparent');

    ctx.save();
    ctx.scale(1, 0.48); // isometric ellipse flatten
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.arc(shadowCenter.px, shadowCenter.py / 0.48, shadowR, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 2. Render Flange based on current active mode
    if (currentMode === 'solid' || currentMode === 'laser') {
      renderSolidFlange(false);
      if (currentMode === 'laser') {
        renderLaserScanEffect();
      }
    } else if (currentMode === 'dots') {
      renderPointCloud(false);
    } else if (currentMode === 'coloured') {
      renderPointCloud(true);
    } else if (currentMode === 'wireframe') {
      renderWireframeFlange();
    } else if (currentMode === 'outline') {
      renderCADOutline();
    }

    // Auto-orbit rotation
    if (autoRotate && !isDragging && !RM) {
      yaw += 0.004;
    }

    requestAnimationFrame(render);
  }

  // -------------------------------------------------------------------------
  // SOLID INDUSTRIAL FLANGE RENDERER (Exactly matching reference screenshot)
  // -------------------------------------------------------------------------
  function renderSolidFlange(isWireframe = false) {
    const s = dpr;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const sectors = 48;

    // A. Outer Flange Cylinder Side Wall (Y from FLANGE_Y_BOT to FLANGE_Y_TOP)
    // Draw quads sorted by depth
    const wallQuads = [];
    for (let i = 0; i < sectors; i++) {
      const a0 = (i / sectors) * Math.PI * 2;
      const a1 = ((i + 1) / sectors) * Math.PI * 2;
      const aMid = (a0 + a1) / 2;

      const p0 = project(Math.cos(a0) * FLANGE_R, FLANGE_Y_BOT, Math.sin(a0) * FLANGE_R);
      const p1 = project(Math.cos(a1) * FLANGE_R, FLANGE_Y_BOT, Math.sin(a1) * FLANGE_R);
      const p2 = project(Math.cos(a1) * FLANGE_R, FLANGE_Y_TOP, Math.sin(a1) * FLANGE_R);
      const p3 = project(Math.cos(a0) * FLANGE_R, FLANGE_Y_TOP, Math.sin(a0) * FLANGE_R);

      // Light normal: vector from center
      const nx = Math.cos(aMid);
      const nz = Math.sin(aMid);
      // Light from top-left front: L = (-0.5, 0.7, 0.5)
      const dot = Math.max(0.12, (-nx * 0.5 + nz * 0.6 + 0.4));
      const depth = (p0.depth + p1.depth + p2.depth + p3.depth) / 4;

      wallQuads.push({ p0, p1, p2, p3, depth, dot, type: 'flange_wall' });
    }

    // B. Hub Cylinder Side Wall (Y from FLANGE_Y_TOP to HUB_Y_TOP)
    for (let i = 0; i < sectors; i++) {
      const a0 = (i / sectors) * Math.PI * 2;
      const a1 = ((i + 1) / sectors) * Math.PI * 2;
      const aMid = (a0 + a1) / 2;

      const p0 = project(Math.cos(a0) * HUB_R, FLANGE_Y_TOP, Math.sin(a0) * HUB_R);
      const p1 = project(Math.cos(a1) * HUB_R, FLANGE_Y_TOP, Math.sin(a1) * HUB_R);
      const p2 = project(Math.cos(a1) * HUB_R, HUB_Y_TOP, Math.sin(a1) * HUB_R);
      const p3 = project(Math.cos(a0) * HUB_R, HUB_Y_TOP, Math.sin(a0) * HUB_R);

      const nx = Math.cos(aMid);
      const nz = Math.sin(aMid);
      const dot = Math.max(0.12, (-nx * 0.5 + nz * 0.6 + 0.4));
      const depth = (p0.depth + p1.depth + p2.depth + p3.depth) / 4;

      wallQuads.push({ p0, p1, p2, p3, depth, dot, type: 'hub_wall' });
    }

    // Sort walls from back to front
    wallQuads.sort((a, b) => b.depth - a.depth);

    // Draw cylindrical walls
    wallQuads.forEach(q => {
      // Shading matching reference: smooth grey metallic tones
      let r, g, b;
      if (isDark) {
        r = Math.floor(45 + q.dot * 70);
        g = Math.floor(52 + q.dot * 75);
        b = Math.floor(65 + q.dot * 85);
      } else {
        r = Math.floor(100 + q.dot * 115);
        g = Math.floor(110 + q.dot * 118);
        b = Math.floor(125 + q.dot * 120);
      }

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.beginPath();
      ctx.moveTo(q.p0.px, q.p0.py);
      ctx.lineTo(q.p1.px, q.p1.py);
      ctx.lineTo(q.p2.px, q.p2.py);
      ctx.lineTo(q.p3.px, q.p3.py);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = isDark ? '#1E293B' : '#CBD5E1';
      ctx.lineWidth = 0.5 * s;
      ctx.stroke();
    });

    // C. Flange Top Annular Face (Y = FLANGE_Y_TOP)
    // Drawn with light silver top face (#E2E8F0 / #EDF2F7 in light mode)
    const flangeFaceColor = isDark ? '#1E293B' : '#E2E8F0';
    ctx.fillStyle = flangeFaceColor;
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * FLANGE_R, FLANGE_Y_TOP, Math.sin(a) * FLANGE_R);
      if (i === 0) ctx.moveTo(pt.px, pt.py);
      else ctx.lineTo(pt.px, pt.py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = isDark ? '#334155' : '#CBD5E1';
    ctx.lineWidth = 1 * s;
    ctx.stroke();

    // D. 8 Circular Bolt Holes (Deep dark charcoal cylinders on the flange face)
    for (let b = 0; b < BOLT_COUNT; b++) {
      const bAngle = (b / BOLT_COUNT) * Math.PI * 2;
      const bx = Math.cos(bAngle) * BOLT_PCD;
      const bz = Math.sin(bAngle) * BOLT_PCD;

      // Draw dark hole interior
      ctx.fillStyle = isDark ? '#0A0E17' : '#2D3748';
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const pt = project(bx + Math.cos(a) * BOLT_R, FLANGE_Y_TOP, bz + Math.sin(a) * BOLT_R);
        if (i === 0) ctx.moveTo(pt.px, pt.py);
        else ctx.lineTo(pt.px, pt.py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = isDark ? '#1E293B' : '#1A202C';
      ctx.lineWidth = 1 * s;
      ctx.stroke();

      // Hole depth inner bevel
      const innerBevel = project(bx - 0.015, FLANGE_Y_TOP - 0.04, bz - 0.015);
      ctx.fillStyle = isDark ? '#05070B' : '#1A202C';
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const pt = project(bx - 0.01 + Math.cos(a) * (BOLT_R * 0.8), FLANGE_Y_TOP - 0.04, bz - 0.01 + Math.sin(a) * (BOLT_R * 0.8));
        if (i === 0) ctx.moveTo(pt.px, pt.py);
        else ctx.lineTo(pt.px, pt.py);
      }
      ctx.closePath();
      ctx.fill();
    }

    // E. Hub Top Annular Face (Y = HUB_Y_TOP)
    const hubFaceColor = isDark ? '#334155' : '#EDF2F7';
    ctx.fillStyle = hubFaceColor;
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * HUB_R, HUB_Y_TOP, Math.sin(a) * HUB_R);
      if (i === 0) ctx.moveTo(pt.px, pt.py);
      else ctx.lineTo(pt.px, pt.py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = isDark ? '#475569' : '#CBD5E1';
    ctx.lineWidth = 1.2 * s;
    ctx.stroke();

    // F. Center Bore Hole (Y = HUB_Y_TOP)
    ctx.fillStyle = isDark ? '#020408' : '#1A202C';
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * BORE_R, HUB_Y_TOP, Math.sin(a) * BORE_R);
      if (i === 0) ctx.moveTo(pt.px, pt.py);
      else ctx.lineTo(pt.px, pt.py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = isDark ? '#0F172A' : '#111827';
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();

    // Inner bore wall depth shadow
    ctx.fillStyle = isDark ? '#000000' : '#0F172A';
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * (BORE_R * 0.92), FLANGE_Y_BOT, Math.sin(a) * (BORE_R * 0.92));
      if (i === 0) ctx.moveTo(pt.px, pt.py);
      else ctx.lineTo(pt.px, pt.py);
    }
    ctx.closePath();
    ctx.fill();
  }

  // -------------------------------------------------------------------------
  // LASER SCAN EFFECT (Cyan sweep line + glowing fan)
  // -------------------------------------------------------------------------
  function renderLaserScanEffect() {
    const s = dpr;
    laserX += 0.02 * laserSweepDirection;
    if (laserX > 1.25) { laserX = 1.25; laserSweepDirection = -1; }
    if (laserX < -1.25) { laserX = -1.25; laserSweepDirection = 1; }

    const pBot = project(laserX, FLANGE_Y_BOT - 0.05, 0);
    const pTop = project(laserX, HUB_Y_TOP + 0.35, 0);

    // Glowing laser beam line
    ctx.strokeStyle = '#00D2FF';
    ctx.lineWidth = 2.4 * s;
    ctx.shadowBlur = 12 * s;
    ctx.shadowColor = '#00D2FF';
    ctx.beginPath();
    ctx.moveTo(pBot.px, pBot.py);
    ctx.lineTo(pTop.px, pTop.py);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Laser contact pulse
    const pContact = project(laserX, FLANGE_Y_TOP, 0);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(pContact.px, pContact.py, 4 * s, 0, Math.PI * 2);
    ctx.fill();
  }

  // -------------------------------------------------------------------------
  // POINT CLOUD RENDERER ('dots' monochrome & 'coloured' metrology heatmap)
  // -------------------------------------------------------------------------
  function renderPointCloud(isColoured = false) {
    const s = dpr;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const projPoints = pointCloud.map(p => {
      const pr = project(p.x, p.y, p.z);
      return { ...p, ...pr };
    }).sort((a, b) => b.depth - a.depth);

    projPoints.forEach(p => {
      const ptSize = Math.max(1.4, 2.2 * p.scale * s);
      if (isColoured) {
        ctx.fillStyle = getHeatmapColor(p.dev);
      } else {
        ctx.fillStyle = isDark ? '#38BDF8' : '#0284C7';
      }

      ctx.beginPath();
      ctx.arc(p.px, p.py, ptSize, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  // -------------------------------------------------------------------------
  // WIREMESH RENDERER (Triangulated geometric mesh of the flange)
  // -------------------------------------------------------------------------
  function renderWireframeFlange() {
    const s = dpr;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const sectors = 24;

    ctx.strokeStyle = isDark ? '#38BDF8' : '#0284C7';
    ctx.lineWidth = 1 * s;

    // Outer flange surface triangles
    for (let i = 0; i < sectors; i++) {
      const a0 = (i / sectors) * Math.PI * 2;
      const a1 = ((i + 1) / sectors) * Math.PI * 2;

      const p0 = project(Math.cos(a0) * FLANGE_R, FLANGE_Y_TOP, Math.sin(a0) * FLANGE_R);
      const p1 = project(Math.cos(a1) * FLANGE_R, FLANGE_Y_TOP, Math.sin(a1) * FLANGE_R);
      const p2 = project(Math.cos(a1) * HUB_R, FLANGE_Y_TOP, Math.sin(a1) * HUB_R);
      const p3 = project(Math.cos(a0) * HUB_R, FLANGE_Y_TOP, Math.sin(a0) * HUB_R);

      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py); ctx.lineTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py); ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py); ctx.lineTo(p2.px, p2.py); ctx.lineTo(p3.px, p3.py); ctx.closePath();
      ctx.stroke();

      // Wall triangles
      const b0 = project(Math.cos(a0) * FLANGE_R, FLANGE_Y_BOT, Math.sin(a0) * FLANGE_R);
      const b1 = project(Math.cos(a1) * FLANGE_R, FLANGE_Y_BOT, Math.sin(a1) * FLANGE_R);
      ctx.beginPath();
      ctx.moveTo(b0.px, b0.py); ctx.lineTo(b1.px, b1.py); ctx.lineTo(p1.px, p1.py); ctx.closePath();
      ctx.stroke();

      // Hub wall triangles
      const h0 = project(Math.cos(a0) * HUB_R, HUB_Y_TOP, Math.sin(a0) * HUB_R);
      const h1 = project(Math.cos(a1) * HUB_R, HUB_Y_TOP, Math.sin(a1) * HUB_R);
      ctx.beginPath();
      ctx.moveTo(p3.px, p3.py); ctx.lineTo(p2.px, p2.py); ctx.lineTo(h1.px, h1.py); ctx.closePath();
      ctx.stroke();
    }
  }

  // -------------------------------------------------------------------------
  // CAD OUTLINE RENDERER (Parametric vector linework + GD&T annotations)
  // -------------------------------------------------------------------------
  function renderCADOutline() {
    const s = dpr;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const sectors = 48;

    ctx.strokeStyle = isDark ? '#38BDF8' : '#0284C7';
    ctx.lineWidth = 1.8 * s;

    // Flange outer rim outline
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * FLANGE_R, FLANGE_Y_TOP, Math.sin(a) * FLANGE_R);
      if (i === 0) ctx.moveTo(pt.px, pt.py); else ctx.lineTo(pt.px, pt.py);
    }
    ctx.stroke();

    // Hub rim outline
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * HUB_R, HUB_Y_TOP, Math.sin(a) * HUB_R);
      if (i === 0) ctx.moveTo(pt.px, pt.py); else ctx.lineTo(pt.px, pt.py);
    }
    ctx.stroke();

    // Bore rim outline
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * BORE_R, HUB_Y_TOP, Math.sin(a) * BORE_R);
      if (i === 0) ctx.moveTo(pt.px, pt.py); else ctx.lineTo(pt.px, pt.py);
    }
    ctx.stroke();

    // Pitch Circle Diameter (PCD) centerline
    ctx.strokeStyle = '#64748B';
    ctx.lineWidth = 1 * s;
    ctx.setLineDash([4 * s, 4 * s]);
    ctx.beginPath();
    for (let i = 0; i <= sectors; i++) {
      const a = (i / sectors) * Math.PI * 2;
      const pt = project(Math.cos(a) * BOLT_PCD, FLANGE_Y_TOP, Math.sin(a) * BOLT_PCD);
      if (i === 0) ctx.moveTo(pt.px, pt.py); else ctx.lineTo(pt.px, pt.py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 8 Bolt hole outlines
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 1.2 * s;
    for (let b = 0; b < BOLT_COUNT; b++) {
      const bAngle = (b / BOLT_COUNT) * Math.PI * 2;
      const bx = Math.cos(bAngle) * BOLT_PCD;
      const bz = Math.sin(bAngle) * BOLT_PCD;
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const pt = project(bx + Math.cos(a) * BOLT_R, FLANGE_Y_TOP, bz + Math.sin(a) * BOLT_R);
        if (i === 0) ctx.moveTo(pt.px, pt.py); else ctx.lineTo(pt.px, pt.py);
      }
      ctx.stroke();
    }

    // GD&T Dimension Box Callout
    const hubCenter = project(0, HUB_Y_TOP, 0);
    const boxX = hubCenter.px + 50 * s;
    const boxY = hubCenter.py - 60 * s;

    ctx.fillStyle = isDark ? '#1E293B' : '#FFFFFF';
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 1.4 * s;
    ctx.fillRect(boxX, boxY, 130 * s, 26 * s);
    ctx.strokeRect(boxX, boxY, 130 * s, 26 * s);

    ctx.fillStyle = isDark ? '#F8FAFC' : '#0F172A';
    ctx.font = `600 ${9.5 * s}px "Sora", sans-serif`;
    ctx.fillText('Ø 170.00 ±0.02', boxX + 8 * s, boxY + 17 * s);

    // Dimension leader line
    ctx.strokeStyle = '#10B981';
    ctx.beginPath();
    ctx.moveTo(boxX, boxY + 13 * s);
    ctx.lineTo(hubCenter.px + 24 * s, hubCenter.py - 12 * s);
    ctx.stroke();
  }

  // -------------------------------------------------------------------------
  // FORM / STAGE SWITCHER CONTROLS
  // -------------------------------------------------------------------------
  const stages = [
    { mode: 'solid', step: 'STAGE 01 //', name: 'SOLID PART' },
    { mode: 'laser', step: 'STAGE 02 //', name: 'LASER SCANNING' },
    { mode: 'dots', step: 'STAGE 03 //', name: 'POINT CLOUD' },
    { mode: 'coloured', step: 'STAGE 04 //', name: 'DEVIATION HEATMAP' },
    { mode: 'wireframe', step: 'STAGE 05 //', name: 'CAD WIREMESH' },
    { mode: 'outline', step: 'STAGE 06 //', name: 'PARAMETRIC CAD' }
  ];

  function setMode(modeKey) {
    currentMode = modeKey;
    const stageInfo = stages.find(s => s.mode === modeKey) || stages[0];

    if (stageStepLabel) stageStepLabel.textContent = stageInfo.step;
    if (stageNameLabel) stageNameLabel.textContent = stageInfo.name;

    // Toggle heatmap scale overlay visibility
    if (scaleOverlay) {
      scaleOverlay.style.display = modeKey === 'coloured' ? 'block' : 'none';
    }

    // Update active button state
    modeBtns.forEach(btn => {
      const isActive = btn.dataset.mode === modeKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
  }

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      autoCycle = false;
      updatePlayBtnUI();
      setMode(btn.dataset.mode);
    });
  });

  // Auto-Cycle Timer
  function startAutoCycle() {
    if (cycleTimer) clearInterval(cycleTimer);
    cycleTimer = setInterval(() => {
      if (autoCycle) {
        const curIdx = stages.findIndex(s => s.mode === currentMode);
        const nextIdx = (curIdx + 1) % stages.length;
        setMode(stages[nextIdx].mode);
      }
    }, 3000);
  }

  function updatePlayBtnUI() {
    if (playIcon) {
      playIcon.innerHTML = autoCycle
        ? '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
        : '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    }
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      autoCycle = !autoCycle;
      updatePlayBtnUI();
    });
  }

  // Pointer drag controls
  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    yaw += dx * 0.007;
    pitch = Math.max(0.15, Math.min(1.2, pitch + dy * 0.007));
    lastX = e.clientX;
    lastY = e.clientY;
  });

  canvas.addEventListener('pointerup', (e) => {
    isDragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch(_) {}
  });

  window.addEventListener('resize', resize);
  resize();
  setMode('solid');
  startAutoCycle();
  render();
}