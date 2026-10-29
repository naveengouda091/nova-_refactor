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
              Sub-Millimeter 3D Scanning for <span class="gradient-text">Physical Reality</span>.
            </h1>

            <p class="hero-lead">
              We transform complex industrial facilities, heritage architecture, and precision mechanical components into millimeter-accurate CAD and BIM deliverables across India.
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

          <!-- Right: Precision 3D CAD Viewport Card (Mandapa Heritage Pillar) -->
          <div class="hero-visual-col">
            <div class="hero-collage-wrap pillar-viewport-wrap">
              
              <!-- 3 Floating Glassmorphic Telemetry Badges (90% White with subtle drop shadow) -->
              <div class="floating-badge badge-mandapa-tl glass-badge" aria-label="Tolerance metric">
                <span class="status-dot dot-green" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">TLS + UAV &bull; 0.5mm Tol</span>
              </div>

              <div class="floating-badge badge-mandapa-mr glass-badge" aria-label="Point density metric">
                <span class="status-dot dot-purple" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">18.4M Points Captured</span>
              </div>

              <div class="floating-badge badge-mandapa-bl glass-badge" aria-label="BIM compatibility metric">
                <span class="status-dot dot-orange" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">Revit LOD 400 Solid</span>
              </div>

              <!-- Main CAD Viewport Card Container -->
              <div class="cad-viewport-card bento-card">
                
                <!-- Top Viewport Header Bar -->
                <div class="viewport-header-bar mono text-xs">
                  <div class="header-left">
                    <span class="text-laser font-bold">ASSET //</span>
                    <span class="text-high font-bold">MANDAPA_PILLAR_04.E57</span>
                  </div>
                  <div class="header-right">
                    <span class="status-dot dot-green" aria-hidden="true"></span>
                    <span class="font-bold text-pass">REG_ERROR: 0.4mm</span>
                  </div>
                </div>

                <!-- 3D Pillar Canvas Viewport -->
                <div class="pillar-canvas-container">
                  <canvas id="mandapa-pillar-canvas" width="480" height="360" aria-label="3D CAD viewport showing Ornate Indian Heritage Temple Pillar sliced into LiDAR point cloud, photogrammetry wireframe, and parametric BIM CAD"></canvas>
                  <div class="canvas-drag-hint mono" aria-hidden="true">DRAG TO ORBIT 3D MODEL</div>
                </div>

                <!-- Bottom Footer Bar -->
                <div class="viewport-footer-bar mono text-xs">
                  <div class="footer-telemetry">
                    <span class="text-muted">CRS:</span>
                    <span class="text-high font-bold">WGS84 / UTM 43N</span>
                  </div>
                  
                  <!-- Segmented Layer Focus Toggle -->
                  <div class="footer-segmented-pills" role="tablist" aria-label="Reality-Capture Layer Focus">
                    <button class="layer-pill-btn active" data-layer="all" role="tab" aria-selected="true">All Layers</button>
                    <button class="layer-pill-btn" data-layer="cloud" role="tab" aria-selected="false">Point Cloud</button>
                    <button class="layer-pill-btn" data-layer="wire" role="tab" aria-selected="false">Wire Mesh</button>
                    <button class="layer-pill-btn" data-layer="bim" role="tab" aria-selected="false">BIM CAD</button>
                  </div>
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
  const canvas = document.getElementById('mandapa-pillar-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let yaw = 0.52;
  let pitch = 0.28;
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = !RM;
  let activeLayer = 'all'; // 'all' | 'cloud' | 'wire' | 'bim'
  let laserPulse = 0;

  // Geometry Definition for Ornate Indian Mandapa Pillar
  // Y ranges from -1.35 (plinth ground) to +1.35 (carved bracket capital)
  // Section 1: Top (Point Cloud) -> Y > 0.40
  // Section 2: Middle (Photogrammetry Wireframe) -> -0.45 <= Y <= 0.40
  // Section 3: Bottom (Parametric BIM Solid) -> Y < -0.45

  const cloudPoints = [];
  // 1. Generate dense LiDAR point cloud for the ornate capital brackets
  const capitalLevels = 22;
  for (let cl = 0; cl < capitalLevels; cl++) {
    const v = cl / capitalLevels;
    const y = 0.42 + v * 0.92;
    // Flared corbel curves with stepped roll moldings
    let r = 0.35 + Math.sin(v * Math.PI) * 0.28;
    if (v > 0.65) r += (v - 0.65) * 0.45; // extended bracket arm

    const ptsCount = 28 + Math.floor(v * 16);
    for (let p = 0; p < ptsCount; p++) {
      const angle = (p / ptsCount) * Math.PI * 2;
      // 4-corner bracket emphasis (Mandapa roll corbel)
      const bracketExt = 0.12 * Math.cos(4 * angle);
      const rad = r + bracketExt + (Math.random() - 0.5) * 0.04;
      const x = Math.cos(angle) * rad;
      const z = Math.sin(angle) * rad;
      cloudPoints.push({ x, y, z, elevationRatio: v });
    }
  }

  // 2. Middle Wireframe Shaft (16-faceted column with center ornamental band)
  const wireRings = 10;
  const wireSectors = 16;
  const wireVerts = [];
  const wireFaces = [];

  for (let r = 0; r <= wireRings; r++) {
    const v = r / wireRings;
    const y = -0.44 + v * 0.84;
    // Central ornamental band at mid-shaft
    const bandBump = Math.exp(-((v - 0.5) ** 2) / 0.02) * 0.08;
    const rad = 0.32 + bandBump;

    for (let s = 0; s < wireSectors; s++) {
      const angle = (s / wireSectors) * Math.PI * 2;
      wireVerts.push({
        x: Math.cos(angle) * rad,
        y: y,
        z: Math.sin(angle) * rad
      });
    }
  }

  for (let r = 0; r < wireRings; r++) {
    for (let s = 0; s < wireSectors; s++) {
      const i0 = r * wireSectors + s;
      const i1 = r * wireSectors + ((s + 1) % wireSectors);
      const i2 = (r + 1) * wireSectors + ((s + 1) % wireSectors);
      const i3 = (r + 1) * wireSectors + s;
      // Triangulated photogrammetry mesh
      wireFaces.push([i0, i1, i2]);
      wireFaces.push([i0, i2, i3]);
    }
  }

  // 3. Bottom Parametric BIM Solid Geometry (Plinth, moldings, and pedestal)
  // Stepped square plinth base
  const plinthBlocks = [
    { y0: -1.35, y1: -1.15, size: 0.58 }, // Ground Upapitha
    { y0: -1.15, y1: -0.95, size: 0.50 }, // Lotus molding base
    { y0: -0.95, y1: -0.75, size: 0.44 }, // Upper pedestal
    { y0: -0.75, y1: -0.46, size: 0.38 }  // Transition square block
  ];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = rect.width * dpr;
    height = canvas.height = (rect.height || 360) * dpr;
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

    const scale = Math.min(width, height) * 0.31;
    const fov = 3.6 / (3.6 + z2);

    return {
      px: width / 2 + x1 * scale * fov,
      py: height / 2 - y2 * scale * fov,
      depth: z2,
      scale: fov
    };
  }

  // Color lookup for Top Thermal LiDAR point cloud
  function getThermalLiDARColor(t, isDark) {
    // Gradient: #2563EB (Blue) -> #7C3AED (Purple) -> #DB2777 (Pink) -> #EA580C (Orange)
    if (t < 0.33) {
      return '#2563EB'; // Blue
    } else if (t < 0.66) {
      return '#7C3AED'; // Purple
    } else if (t < 0.85) {
      return '#DB2777'; // Pink
    } else {
      return '#EA580C'; // Warm Orange
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const s = dpr;

    laserPulse += 0.035;

    // A. 3D Coordinate Ground Grid Plane (Y = -1.35)
    ctx.lineWidth = 1 * s;
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
    for (let gx = -0.9; gx <= 0.9; gx += 0.22) {
      const p0 = project(gx, -1.35, -0.9);
      const p1 = project(gx, -1.35, 0.9);
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();

      const p2 = project(-0.9, -1.35, gx);
      const p3 = project(0.9, -1.35, gx);
      ctx.beginPath();
      ctx.moveTo(p2.px, p2.py);
      ctx.lineTo(p3.px, p3.py);
      ctx.stroke();
    }

    // B. Thin 1px Dashed Bounding Box around Pillar
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(2, 132, 199, 0.22)';
    ctx.setLineDash([3 * s, 4 * s]);
    const bSize = 0.68;
    const bY0 = -1.35;
    const bY1 = 1.35;

    const b0 = project(-bSize, bY0, -bSize);
    const b1 = project(bSize, bY0, -bSize);
    const b2 = project(bSize, bY0, bSize);
    const b3 = project(-bSize, bY0, bSize);

    const t0 = project(-bSize, bY1, -bSize);
    const t1 = project(bSize, bY1, -bSize);
    const t2 = project(bSize, bY1, bSize);
    const t3 = project(-bSize, bY1, bSize);

    ctx.beginPath();
    // bottom ring
    ctx.moveTo(b0.px, b0.py); ctx.lineTo(b1.px, b1.py); ctx.lineTo(b2.px, b2.py); ctx.lineTo(b3.px, b3.py); ctx.closePath();
    // top ring
    ctx.moveTo(t0.px, t0.py); ctx.lineTo(t1.px, t1.py); ctx.lineTo(t2.px, t2.py); ctx.lineTo(t3.px, t3.py); ctx.closePath();
    // upright columns
    ctx.moveTo(b0.px, b0.py); ctx.lineTo(t0.px, t0.py);
    ctx.moveTo(b1.px, b1.py); ctx.lineTo(t1.px, t1.py);
    ctx.moveTo(b2.px, b2.py); ctx.lineTo(t2.px, t2.py);
    ctx.moveTo(b3.px, b3.py); ctx.lineTo(t3.px, t3.py);
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash

    // C. X/Y/Z Axis Gizmo at Bottom-Left Ground Origin
    const gOrigin = project(-0.75, -1.35, -0.75);
    const gX = project(-0.55, -1.35, -0.75);
    const gY = project(-0.75, -1.15, -0.75);
    const gZ = project(-0.75, -1.35, -0.55);

    ctx.lineWidth = 1.8 * s;
    // X Axis (Red/Coral)
    ctx.strokeStyle = '#EF4444';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gX.px, gX.py); ctx.stroke();
    // Y Axis (Green/Emerald)
    ctx.strokeStyle = '#10B981';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gY.px, gY.py); ctx.stroke();
    // Z Axis (Blue/Laser)
    ctx.strokeStyle = '#0284C7';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gZ.px, gZ.py); ctx.stroke();

    ctx.fillStyle = isDark ? '#9CA3AF' : '#4B5563';
    ctx.font = `600 ${8 * s}px "Sora", sans-serif`;
    ctx.fillText('X', gX.px + 2, gX.py);
    ctx.fillText('Y', gY.px, gY.py - 2);
    ctx.fillText('Z', gZ.px + 2, gZ.py);

    // =====================================================================
    // LAYER 3 (BOTTOM): Parametric BIM Solid Geometry
    // =====================================================================
    if (activeLayer === 'all' || activeLayer === 'bim') {
      plinthBlocks.forEach((block, bIdx) => {
        const hs = block.size;
        const c0 = project(-hs, block.y0, -hs);
        const c1 = project(hs, block.y0, -hs);
        const c2 = project(hs, block.y0, hs);
        const c3 = project(-hs, block.y0, hs);

        const u0 = project(-hs, block.y1, -hs);
        const u1 = project(hs, block.y1, -hs);
        const u2 = project(hs, block.y1, hs);
        const u3 = project(-hs, block.y1, hs);

        // Filled shaded solid faces (BIM clay shading)
        const fillSolid = isDark ? 'rgba(30, 41, 59, 0.85)' : 'rgba(255, 255, 255, 0.95)';
        const fillSide = isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(241, 245, 249, 0.9)';

        // Top face
        ctx.fillStyle = fillSolid;
        ctx.beginPath();
        ctx.moveTo(u0.px, u0.py); ctx.lineTo(u1.px, u1.py); ctx.lineTo(u2.px, u2.py); ctx.lineTo(u3.px, u3.py);
        ctx.closePath();
        ctx.fill();

        // Front faces
        ctx.fillStyle = fillSide;
        ctx.beginPath();
        ctx.moveTo(c1.px, c1.py); ctx.lineTo(c2.px, c2.py); ctx.lineTo(u2.px, u2.py); ctx.lineTo(u1.px, u1.py);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(c2.px, c2.py); ctx.lineTo(c3.px, c3.py); ctx.lineTo(u3.px, u3.py); ctx.lineTo(u2.px, u2.py);
        ctx.closePath();
        ctx.fill();

        // Sharp CAD Orthographic Elevation Edges
        ctx.strokeStyle = isDark ? '#E2E8F0' : '#111827';
        ctx.lineWidth = 1.6 * s;
        ctx.stroke();

        // Internal molding bevel line
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.18)';
        ctx.lineWidth = 1 * s;
        ctx.beginPath();
        const m0 = project(-hs * 0.9, block.y0 + (block.y1 - block.y0) * 0.5, hs);
        const m1 = project(hs * 0.9, block.y0 + (block.y1 - block.y0) * 0.5, hs);
        ctx.moveTo(m0.px, m0.py); ctx.lineTo(m1.px, m1.py);
        ctx.stroke();
      });

      // Dimension extension lines and ticks for BIM Bottom
      const dimX = -0.72;
      const dP0 = project(dimX, -1.35, 0);
      const dP1 = project(dimX, -0.46, 0);

      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 1.2 * s;
      ctx.beginPath();
      ctx.moveTo(dP0.px - 6 * s, dP0.py); ctx.lineTo(dP0.px + 6 * s, dP0.py);
      ctx.moveTo(dP1.px - 6 * s, dP1.py); ctx.lineTo(dP1.px + 6 * s, dP1.py);
      ctx.moveTo(dP0.px, dP0.py); ctx.lineTo(dP1.px, dP1.py);
      ctx.stroke();

      ctx.fillStyle = '#0284C7';
      ctx.font = `600 ${8.5 * s}px "Sora", sans-serif`;
      ctx.fillText('H = 1200mm', dP0.px - 44 * s, (dP0.py + dP1.py) / 2);
    }

    // =====================================================================
    // SEPARATOR 2 (LOWER GLOWING LASER SCAN LINE at Y = -0.45)
    // =====================================================================
    if (activeLayer === 'all') {
      const sepY2 = -0.45;
      const sr = 0.42;
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = (2 + Math.sin(laserPulse) * 0.6) * s;
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.2) {
        const pt = project(Math.cos(a) * sr, sepY2, Math.sin(a) * sr);
        if (a === 0) ctx.moveTo(pt.px, pt.py);
        else ctx.lineTo(pt.px, pt.py);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // =====================================================================
    // LAYER 2 (MIDDLE): Photogrammetry Wireframe Mesh
    // =====================================================================
    if (activeLayer === 'all' || activeLayer === 'wire') {
      // Shaded matte white clay fill with crisp charcoal wireframe lines
      const projWire = wireVerts.map(v => project(v.x, v.y, v.z));

      // Draw triangulated mesh
      ctx.fillStyle = isDark ? 'rgba(30, 41, 59, 0.75)' : 'rgba(255, 255, 255, 0.92)';
      ctx.strokeStyle = isDark ? '#E2E8F0' : '#111111'; // Crisp charcoal wireframe
      ctx.lineWidth = 1 * s;

      wireFaces.forEach(f => {
        const p0 = projWire[f[0]];
        const p1 = projWire[f[1]];
        const p2 = projWire[f[2]];

        ctx.beginPath();
        ctx.moveTo(p0.px, p0.py);
        ctx.lineTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    }

    // =====================================================================
    // SEPARATOR 1 (UPPER GLOWING LASER SCAN LINE at Y = 0.40)
    // =====================================================================
    if (activeLayer === 'all') {
      const sepY1 = 0.40;
      const sr1 = 0.46;
      ctx.strokeStyle = '#00D2FF';
      ctx.lineWidth = (2.4 + Math.cos(laserPulse) * 0.8) * s;
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.2) {
        const pt = project(Math.cos(a) * sr1, sepY1, Math.sin(a) * sr1);
        if (a === 0) ctx.moveTo(pt.px, pt.py);
        else ctx.lineTo(pt.px, pt.py);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // =====================================================================
    // LAYER 1 (TOP): Raw LiDAR Point Cloud in Thermal Elevation Gradient
    // =====================================================================
    if (activeLayer === 'all' || activeLayer === 'cloud') {
      const projCloud = cloudPoints.map(p => {
        const pr = project(p.x, p.y, p.z);
        return { ...p, ...pr };
      }).sort((a, b) => b.depth - a.depth);

      projCloud.forEach(p => {
        const col = getThermalLiDARColor(p.elevationRatio, isDark);
        const ptSize = Math.max(1.4, 2.4 * p.scale * s);

        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.px, p.py, ptSize, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Subtle Auto Orbit
    if (autoRotate && !isDragging && !RM) {
      yaw += 0.004;
    }

    requestAnimationFrame(render);
  }

  // Pointer Drag & Orbit Controls
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
    pitch = Math.max(-0.6, Math.min(0.8, pitch + dy * 0.007));
    lastX = e.clientX;
    lastY = e.clientY;
  });

  canvas.addEventListener('pointerup', (e) => {
    isDragging = false;
    try { canvas.releasePointerCapture(e.pointerId); } catch(_) {}
  });

  // Layer Segmented Buttons Toggle
  const layerBtns = document.querySelectorAll('.layer-pill-btn');
  layerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      layerBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeLayer = btn.dataset.layer;
    });
  });

  window.addEventListener('resize', resize);
  resize();
  render();
}
