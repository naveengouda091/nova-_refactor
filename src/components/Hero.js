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
              
              <!-- 3 Floating Glassmorphic Telemetry Badges (Tastefully offset without obscuring header/footer) -->
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
                  <canvas id="mandapa-pillar-canvas" width="500" height="400" aria-label="3D CAD viewport showing Ornate Indian Heritage Temple Pillar sliced into LiDAR point cloud, photogrammetry wireframe, and parametric BIM CAD"></canvas>
                  <div class="canvas-drag-hint mono" aria-hidden="true">&bull; DRAG TO ORBIT 3D VIEWPORT &bull;</div>
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
  let yaw = 0.58;
  let pitch = 0.28;
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = !RM;
  let activeLayer = 'all'; // 'all' | 'cloud' | 'wire' | 'bim'
  let laserPulse = 0;

  // =========================================================================
  // ARCHITECTURAL MODEL: ORNATE INDIAN HERITAGE TEMPLE PILLAR (MANDAPA STAMBHA)
  // Coordinates: Y ranges from -1.25 (ground plinth) to +1.25 (corbel bracket tip)
  // Layer Slices:
  //   1. TOP (LiDAR Point Cloud): Y > 0.35 (Capital, Potika brackets, Padma lotus, Tadi disc)
  //   2. MIDDLE (Photogrammetry Wireframe): -0.42 <= Y <= 0.35 (Faceted fluted column, garland band)
  //   3. BOTTOM (Parametric BIM Solid): Y < -0.42 (Stepped Upapitha, cyma moldings, square base)
  // =========================================================================

  // 1. TOP LAYER: DENSE LIDAR POINT CLOUD (Authentic Mandapa Capital: Kumbha, Tadi, Padma, Pushpapotika)
  const cloudPoints = [];
  const capitalLayers = 36;

  for (let cl = 0; cl <= capitalLayers; cl++) {
    const v = cl / capitalLayers; // 0.0 to 1.0
    const y = 0.36 + v * 0.88;

    let rBase = 0.28;
    // Pot-shaped Kumbha bulb (v: 0.0 -> 0.30)
    if (v < 0.30) {
      const kv = v / 0.30;
      rBase = 0.28 + Math.sin(kv * Math.PI) * 0.08;
    }
    // Disc-shaped Tadi plate (v: 0.30 -> 0.44)
    else if (v < 0.44) {
      const tv = (v - 0.30) / 0.14;
      rBase = 0.30 + Math.sin(tv * Math.PI) * 0.09;
    }
    // Flaring Lotus Padma (v: 0.44 -> 0.65)
    else if (v < 0.65) {
      const pv = (v - 0.44) / 0.21;
      rBase = 0.31 + pv * 0.08;
    }
    // 4-Way Corbel Brackets (Pushpapotika roll arms) (v: 0.65 -> 0.92)
    else if (v < 0.92) {
      const bv = (v - 0.65) / 0.27;
      rBase = 0.36 + Math.sin(bv * Math.PI) * 0.05;
    }
    // Abacus Capital Beam Cap (v: 0.92 -> 1.0)
    else {
      rBase = 0.38;
    }

    const ptsCount = 38 + Math.floor(v * 20);
    for (let p = 0; p < ptsCount; p++) {
      const angle = (p / ptsCount) * Math.PI * 2;
      
      // Distinct 4-way architectural corbel lobes along cardinal axes
      let bracketExt = 0;
      if (v >= 0.65 && v < 0.92) {
        // Projecting 4-way arms
        const armFactor = Math.pow(Math.cos(2 * angle), 4);
        bracketExt = 0.14 * armFactor;
      } else if (v >= 0.92) {
        // Square abacus cap
        bracketExt = 0.04 * Math.cos(4 * angle);
      } else if (v < 0.30) {
        // Fluted neck
        bracketExt = 0.015 * Math.cos(8 * angle);
      }

      const rad = rBase + bracketExt + (Math.random() - 0.5) * 0.02;
      const x = Math.cos(angle) * rad;
      const z = Math.sin(angle) * rad;
      cloudPoints.push({ x, y, z, elevationRatio: v });
    }
  }

  // 2. MIDDLE LAYER: HIGH-DENSITY PHOTOGRAMMETRY WIREFRAME SHAFT
  const wireRings = 14;
  const wireSectors = 16;
  const wireVerts = [];
  const wireFaces = [];

  for (let r = 0; r <= wireRings; r++) {
    const v = r / wireRings;
    const y = -0.42 + v * 0.76;

    // Central ornamental band (Padmabandha / floral garland at mid-shaft)
    const bandBulge = Math.exp(-((v - 0.5) ** 2) / 0.015) * 0.09;
    const neckTaper = v > 0.85 ? -((v - 0.85) / 0.15) * 0.05 : 0;
    const rad = 0.28 + bandBulge + neckTaper;

    for (let s = 0; s < wireSectors; s++) {
      const angle = (s / wireSectors) * Math.PI * 2;
      // 16-faceted polygonal column geometry
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
      // Triangulated photogrammetry faces
      wireFaces.push([i0, i1, i2]);
      wireFaces.push([i0, i2, i3]);
    }
  }

  // 3. BOTTOM LAYER: PARAMETRIC BIM SOLID BASE (Stepped Plinth, moldings, chamfers)
  const bimBoxes = [
    // Ground Upapitha foundation plinth
    { y0: -1.25, y1: -1.08, w: 0.74, d: 0.74 },
    // Adhisthana stepped molding base
    { y0: -1.08, y1: -0.92, w: 0.64, d: 0.64 },
    // Lotus pedestal block (Jangha)
    { y0: -0.92, y1: -0.74, w: 0.54, d: 0.54 },
    // Transition collar to octagonal shaft
    { y0: -0.74, y1: -0.44, w: 0.44, d: 0.44 }
  ];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = rect.width * dpr;
    height = canvas.height = (rect.height || 380) * dpr;
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

    const scale = Math.min(width, height) * 0.32;
    const fov = 3.6 / (3.6 + z2);

    return {
      px: width / 2 + x1 * scale * fov,
      py: height / 2 - y2 * scale * fov,
      depth: z2,
      scale: fov
    };
  }

  // Thermal elevation gradient: Blue -> Purple -> Pink -> Warm Orange
  function getThermalLiDARColor(t) {
    if (t < 0.28) {
      return '#2563EB'; // Laser Blue
    } else if (t < 0.58) {
      return '#7C3AED'; // Royal Purple
    } else if (t < 0.82) {
      return '#DB2777'; // Precision Pink
    } else {
      return '#EA580C'; // Metrology Orange
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const s = dpr;
    laserPulse += 0.038;

    // Viewport background: Deep Technical CAD Slate (#090D16) for authentic reality capture contrast
    ctx.fillStyle = '#090D16';
    ctx.fillRect(0, 0, width, height);

    // Subtle isometric coordinate ground grid at Y = -1.25
    ctx.lineWidth = 1 * s;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    for (let gx = -1.0; gx <= 1.0; gx += 0.25) {
      const p0 = project(gx, -1.25, -1.0);
      const p1 = project(gx, -1.25, 1.0);
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();

      const p2 = project(-1.0, -1.25, gx);
      const p3 = project(1.0, -1.25, gx);
      ctx.beginPath();
      ctx.moveTo(p2.px, p2.py);
      ctx.lineTo(p3.px, p3.py);
      ctx.stroke();
    }

    // 1px Dashed Engineering Bounding Box around model
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.setLineDash([4 * s, 4 * s]);
    const bW = 0.52;
    const bY0 = -1.25;
    const bY1 = 1.25;

    const b0 = project(-bW, bY0, -bW);
    const b1 = project(bW, bY0, -bW);
    const b2 = project(bW, bY0, bW);
    const b3 = project(-bW, bY0, bW);

    const t0 = project(-bW, bY1, -bW);
    const t1 = project(bW, bY1, -bW);
    const t2 = project(bW, bY1, bW);
    const t3 = project(-bW, bY1, bW);

    ctx.beginPath();
    ctx.moveTo(b0.px, b0.py); ctx.lineTo(b1.px, b1.py); ctx.lineTo(b2.px, b2.py); ctx.lineTo(b3.px, b3.py); ctx.closePath();
    ctx.moveTo(t0.px, t0.py); ctx.lineTo(t1.px, t1.py); ctx.lineTo(t2.px, t2.py); ctx.lineTo(t3.px, t3.py); ctx.closePath();
    ctx.moveTo(b0.px, b0.py); ctx.lineTo(t0.px, t0.py);
    ctx.moveTo(b1.px, b1.py); ctx.lineTo(t1.px, t1.py);
    ctx.moveTo(b2.px, b2.py); ctx.lineTo(t2.px, t2.py);
    ctx.moveTo(b3.px, b3.py); ctx.lineTo(t3.px, t3.py);
    ctx.stroke();
    ctx.setLineDash([]);

    // X/Y/Z Coordinate Axis Gizmo at Ground Origin
    const gOrigin = project(-0.75, -1.25, -0.75);
    const gX = project(-0.52, -1.25, -0.75);
    const gY = project(-0.75, -1.02, -0.75);
    const gZ = project(-0.75, -1.25, -0.52);

    ctx.lineWidth = 1.8 * s;
    // X (Red)
    ctx.strokeStyle = '#EF4444';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gX.px, gX.py); ctx.stroke();
    // Y (Green)
    ctx.strokeStyle = '#10B981';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gY.px, gY.py); ctx.stroke();
    // Z (Cyan)
    ctx.strokeStyle = '#00D2FF';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gZ.px, gZ.py); ctx.stroke();

    ctx.fillStyle = '#94A3B8';
    ctx.font = `600 ${8.5 * s}px "Sora", sans-serif`;
    ctx.fillText('X', gX.px + 3, gX.py);
    ctx.fillText('Y', gY.px - 2, gY.py - 4);
    ctx.fillText('Z', gZ.px + 3, gZ.py);

    // =========================================================================
    // LAYER 3 (BOTTOM): Parametric BIM Solid Architectural Geometry
    // =========================================================================
    if (activeLayer === 'all' || activeLayer === 'bim') {
      bimBoxes.forEach((box) => {
        const hw = box.w / 2;
        const hd = box.d / 2;

        const c0 = project(-hw, box.y0, -hd);
        const c1 = project(hw, box.y0, -hd);
        const c2 = project(hw, box.y0, hd);
        const c3 = project(-hw, box.y0, hd);

        const u0 = project(-hw, box.y1, -hd);
        const u1 = project(hw, box.y1, -hd);
        const u2 = project(hw, box.y1, hd);
        const u3 = project(-hw, box.y1, hd);

        // Top face (bright light)
        ctx.fillStyle = 'rgba(241, 245, 249, 0.95)';
        ctx.beginPath();
        ctx.moveTo(u0.px, u0.py); ctx.lineTo(u1.px, u1.py); ctx.lineTo(u2.px, u2.py); ctx.lineTo(u3.px, u3.py);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 1.2 * s;
        ctx.stroke();

        // Front right face
        ctx.fillStyle = 'rgba(203, 213, 225, 0.92)';
        ctx.beginPath();
        ctx.moveTo(c1.px, c1.py); ctx.lineTo(c2.px, c2.py); ctx.lineTo(u2.px, u2.py); ctx.lineTo(u1.px, u1.py);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#0F172A';
        ctx.stroke();

        // Front left face
        ctx.fillStyle = 'rgba(148, 163, 184, 0.92)';
        ctx.beginPath();
        ctx.moveTo(c2.px, c2.py); ctx.lineTo(c3.px, c3.py); ctx.lineTo(u3.px, u3.py); ctx.lineTo(u2.px, u2.py);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#0F172A';
        ctx.stroke();
      });

      // Orthographic Dimension Leader & Ticks
      const dimX = -0.50;
      const dP0 = project(dimX, -1.25, 0);
      const dP1 = project(dimX, -0.44, 0);

      ctx.strokeStyle = '#00D2FF';
      ctx.lineWidth = 1.2 * s;
      ctx.beginPath();
      ctx.moveTo(dP0.px - 4 * s, dP0.py); ctx.lineTo(dP0.px + 4 * s, dP0.py);
      ctx.moveTo(dP1.px - 4 * s, dP1.py); ctx.lineTo(dP1.px + 4 * s, dP1.py);
      ctx.moveTo(dP0.px, dP0.py); ctx.lineTo(dP1.px, dP1.py);
      ctx.stroke();

      ctx.fillStyle = '#00D2FF';
      ctx.font = `600 ${8 * s}px "Sora", sans-serif`;
      ctx.fillText('H = 810mm', dP0.px - 48 * s, (dP0.py + dP1.py) / 2);
    }

    // =========================================================================
    // SEPARATOR 2: GLOWING EMERALD LASER SCAN PLANE at Y = -0.42
    // =========================================================================
    if (activeLayer === 'all') {
      const sepY2 = -0.42;
      const sr = 0.38;
      const laserWidth = (2.2 + Math.sin(laserPulse) * 0.8) * s;
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = laserWidth;
      ctx.shadowBlur = 8 * s;
      ctx.shadowColor = '#10B981';
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.2) {
        const pt = project(Math.cos(a) * sr, sepY2, Math.sin(a) * sr);
        if (a === 0) ctx.moveTo(pt.px, pt.py);
        else ctx.lineTo(pt.px, pt.py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // =========================================================================
    // LAYER 2 (MIDDLE): Photogrammetry Wireframe Mesh (Triangulated Shaft)
    // =========================================================================
    if (activeLayer === 'all' || activeLayer === 'wire') {
      const projWire = wireVerts.map(v => project(v.x, v.y, v.z));

      // Shaded matte white clay fill with crisp charcoal wireframe lines
      ctx.fillStyle = 'rgba(248, 250, 252, 0.92)';
      ctx.strokeStyle = '#0F172A'; // Crisp charcoal wire lines
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

    // =========================================================================
    // SEPARATOR 1: GLOWING CYAN LASER SCAN PLANE at Y = 0.36
    // =========================================================================
    if (activeLayer === 'all') {
      const sepY1 = 0.36;
      const sr1 = 0.42;
      const laserWidth1 = (2.5 + Math.cos(laserPulse) * 0.8) * s;
      ctx.strokeStyle = '#00D2FF';
      ctx.lineWidth = laserWidth1;
      ctx.shadowBlur = 10 * s;
      ctx.shadowColor = '#00D2FF';
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.2) {
        const pt = project(Math.cos(a) * sr1, sepY1, Math.sin(a) * sr1);
        if (a === 0) ctx.moveTo(pt.px, pt.py);
        else ctx.lineTo(pt.px, pt.py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // =========================================================================
    // LAYER 1 (TOP): Dense Thermal LiDAR Point Cloud (Corbels, Padma, Kumbha)
    // =========================================================================
    if (activeLayer === 'all' || activeLayer === 'cloud') {
      const projCloud = cloudPoints.map(p => {
        const pr = project(p.x, p.y, p.z);
        return { ...p, ...pr };
      }).sort((a, b) => b.depth - a.depth);

      projCloud.forEach(p => {
        const col = getThermalLiDARColor(p.elevationRatio);
        const ptSize = Math.max(1.5, 2.6 * p.scale * s);

        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.px, p.py, ptSize, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Smooth auto-orbit rotation
    if (autoRotate && !isDragging && !RM) {
      yaw += 0.005;
    }

    requestAnimationFrame(render);
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