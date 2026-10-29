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

          <!-- Right: Precision 3D CAD Viewport Card (Faceted Star Tennis Championship Trophy) -->
          <div class="hero-visual-col">
            <div class="hero-collage-wrap pillar-viewport-wrap">
              
              <!-- 3 Floating Glassmorphic Telemetry Badges (Safe offsets without obscuring header/footer) -->
              <div class="floating-badge badge-mandapa-tl glass-badge" aria-label="Tolerance metric">
                <span class="status-dot dot-green" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">TLS + Optical &bull; 0.02mm Tol</span>
              </div>

              <div class="floating-badge badge-mandapa-mr glass-badge" aria-label="Point density metric">
                <span class="status-dot dot-purple" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">18.4M Points Captured</span>
              </div>

              <div class="floating-badge badge-mandapa-bl glass-badge" aria-label="CAD solid metric">
                <span class="status-dot dot-orange" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">CAD Solid &bull; &plusmn;0.01mm</span>
              </div>

              <!-- Main CAD Viewport Card Container -->
              <div class="cad-viewport-card bento-card">
                
                <!-- Top Viewport Header Bar -->
                <div class="viewport-header-bar mono text-xs">
                  <div class="header-left">
                    <span class="text-laser font-bold">ASSET //</span>
                    <span class="text-high font-bold">STAR_CHAMPION_TROPHY.STP</span>
                  </div>
                  <div class="header-right">
                    <span class="status-dot dot-green" aria-hidden="true"></span>
                    <span class="font-bold text-pass">REG_ERROR: 0.02mm</span>
                  </div>
                </div>

                <!-- 3D Trophy Canvas Viewport -->
                <div class="pillar-canvas-container">
                  <canvas id="mandapa-pillar-canvas" width="500" height="400" aria-label="3D CAD viewport showing Faceted Star Tennis Championship Trophy sliced into LiDAR point cloud, photogrammetry wireframe, and parametric CAD solid"></canvas>
                  <div class="canvas-drag-hint mono" aria-hidden="true">&bull; DRAG TO ORBIT 3D VIEWPORT &bull;</div>
                </div>

                <!-- Bottom Footer Bar -->
                <div class="viewport-footer-bar mono text-xs">
                  <div class="footer-telemetry">
                    <span class="text-muted">CRS:</span>
                    <span class="text-high font-bold">LOCAL / METROLOGY GRID</span>
                  </div>
                  
                  <!-- Segmented Layer Focus Toggle -->
                  <div class="footer-segmented-pills" role="tablist" aria-label="Reality-Capture Layer Focus">
                    <button class="layer-pill-btn active" data-layer="all" role="tab" aria-selected="true">All Layers</button>
                    <button class="layer-pill-btn" data-layer="cloud" role="tab" aria-selected="false">Point Cloud</button>
                    <button class="layer-pill-btn" data-layer="wire" role="tab" aria-selected="false">Wire Mesh</button>
                    <button class="layer-pill-btn" data-layer="cad" role="tab" aria-selected="false">CAD Solid</button>
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
  let yaw = 0.48;
  let pitch = 0.22;
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;
  let autoRotate = !RM;
  let activeLayer = 'all'; // 'all' | 'cloud' | 'wire' | 'cad'
  let laserPulse = 0;

  // =========================================================================
  // GEOMETRIC RECONSTRUCTION: FACETED STAR TENNIS CHAMPIONSHIP TROPHY
  // Exact anatomical match to reference image:
  // 1. Golden Tennis Ball at the top (Sphere nestled into the 5-point star cup)
  // 2. 5-Pointed Star Crown & Receptacle (Flares outward with beveled rim)
  // 3. Faceted Star Shaft (10 crisp, tall chiseled vertical planar facets)
  // 4. Mahogany Wood Pedestal (Truncated conical base with curved gold plaque)
  // =========================================================================

  const NUM_POINTS = 5;
  const BALL_CENTER_Y = 0.98;
  const BALL_RADIUS = 0.19;

  // Star cross-section vertices at height Y
  function computeStarVertices(y, rOut, rIn) {
    const tips = [];
    const valleys = [];
    for (let k = 0; k < NUM_POINTS; k++) {
      // 5 Outer Tips
      const aTip = (k * 2 * Math.PI) / NUM_POINTS - Math.PI / 2;
      tips.push({
        x: Math.cos(aTip) * rOut,
        y: y,
        z: Math.sin(aTip) * rOut
      });
      // 5 Inner Valleys
      const aVal = ((k + 0.5) * 2 * Math.PI) / NUM_POINTS - Math.PI / 2;
      valleys.push({
        x: Math.cos(aVal) * rIn,
        y: y,
        z: Math.sin(aVal) * rIn
      });
    }
    return { tips, valleys };
  }

  // Define the 10 Chiseled Vertical Facets of the Star Trophy Shaft
  // From bottom neck (Y = -0.42) to top star rim (Y = 0.78)
  const botRing = computeStarVertices(-0.42, 0.16, 0.13);
  const midRing = computeStarVertices(0.25, 0.32, 0.22);
  const topRing = computeStarVertices(0.78, 0.48, 0.30);

  // Build the 10 tall vertical panels (each split into 2 subtle segments for smooth gradient)
  const verticalPanels = [];
  for (let k = 0; k < NUM_POINTS; k++) {
    const prevK = (k + NUM_POINTS - 1) % NUM_POINTS;

    // Panel A: Valley(prevK) -> Tip(k)
    // Lower segment
    verticalPanels.push({
      p0: botRing.valleys[prevK],
      p1: botRing.tips[k],
      p2: midRing.tips[k],
      p3: midRing.valleys[prevK],
      isRidge: true
    });
    // Upper segment
    verticalPanels.push({
      p0: midRing.valleys[prevK],
      p1: midRing.tips[k],
      p2: topRing.tips[k],
      p3: topRing.valleys[prevK],
      isRidge: true
    });

    // Panel B: Tip(k) -> Valley(k)
    // Lower segment
    verticalPanels.push({
      p0: botRing.tips[k],
      p1: botRing.valleys[k],
      p2: midRing.valleys[k],
      p3: midRing.tips[k],
      isRidge: false
    });
    // Upper segment
    verticalPanels.push({
      p0: midRing.tips[k],
      p1: midRing.valleys[k],
      p2: topRing.valleys[k],
      p3: topRing.tips[k],
      isRidge: false
    });
  }

  // 2. Dense LiDAR Point Cloud for the Top (Golden Tennis Ball + Star Crown)
  const cloudPoints = [];
  // A. Sphere points
  const sphereLats = 20;
  for (let lat = 0; lat <= sphereLats; lat++) {
    const phi = (lat / sphereLats) * Math.PI;
    const sinPhi = Math.sin(phi);
    const cosPhi = Math.cos(phi);
    const lonCount = Math.floor(sinPhi * 30) + 6;
    for (let lon = 0; lon < lonCount; lon++) {
      const theta = (lon / lonCount) * Math.PI * 2;
      const x = BALL_RADIUS * sinPhi * Math.cos(theta);
      const y = BALL_CENTER_Y + BALL_RADIUS * cosPhi;
      const z = BALL_RADIUS * sinPhi * Math.sin(theta);
      const elev = (y - 0.52) / (1.20 - 0.52);
      cloudPoints.push({ x, y, z, elev: Math.max(0, Math.min(1, elev)) });
    }
  }

  // B. Star Crown Receptacle Points
  for (let cl = 0; cl < 14; cl++) {
    const progress = cl / 14;
    const y = 0.52 + progress * 0.26;
    const rOut = 0.39 + progress * 0.09;
    const rIn = 0.26 + progress * 0.04;
    const ring = computeStarVertices(y, rOut, rIn);
    for (let k = 0; k < NUM_POINTS; k++) {
      const pTip = ring.tips[k];
      const pVal = ring.valleys[k];
      const prevVal = ring.valleys[(k + NUM_POINTS - 1) % NUM_POINTS];
      for (let s = 0; s <= 3; s++) {
        const t = s / 3;
        cloudPoints.push({
          x: prevVal.x + (pTip.x - prevVal.x) * t,
          y: y,
          z: prevVal.z + (pTip.z - prevVal.z) * t,
          elev: (y - 0.52) / (1.20 - 0.52)
        });
        cloudPoints.push({
          x: pTip.x + (pVal.x - pTip.x) * t,
          y: y,
          z: pTip.z + (pVal.z - pTip.z) * t,
          elev: (y - 0.52) / (1.20 - 0.52)
        });
      }
    }
  }

  // 3. Mahogany Wood Pedestal Base & Front Gold Plaque
  const baseSectors = 28;
  const baseLevels = [
    { y: -1.18, rad: 0.44 },
    { y: -1.06, rad: 0.41 },
    { y: -0.84, rad: 0.35 },
    { y: -0.64, rad: 0.30 },
    { y: -0.48, rad: 0.24 },
    { y: -0.42, rad: 0.16 }
  ];

  const baseVertices = baseLevels.map(lvl => {
    const ring = [];
    for (let s = 0; s < baseSectors; s++) {
      const angle = (s / baseSectors) * Math.PI * 2;
      ring.push({
        x: Math.cos(angle) * lvl.rad,
        y: lvl.y,
        z: Math.sin(angle) * lvl.rad
      });
    }
    return ring;
  });

  const baseQuads = [];
  for (let l = 0; l < baseVertices.length - 1; l++) {
    const r0 = baseVertices[l];
    const r1 = baseVertices[l + 1];
    for (let s = 0; s < baseSectors; s++) {
      const nextS = (s + 1) % baseSectors;
      baseQuads.push([r0[s], r0[nextS], r1[nextS], r1[s]]);
    }
  }

  // Curved Rectangular Gold Plaque (front face around Z > 0, Y in [-1.05, -0.78])
  const plaqueCorners = [
    { x: -0.21, y: -1.06, z: 0.38 },
    { x: 0.21, y: -1.06, z: 0.38 },
    { x: 0.17, y: -0.78, z: 0.33 },
    { x: -0.17, y: -0.78, z: 0.33 }
  ];

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

    const scale = Math.min(width, height) * 0.33;
    const fov = 3.6 / (3.6 + z2);

    return {
      px: width / 2 + x1 * scale * fov,
      py: height / 2 - y2 * scale * fov,
      depth: z2,
      scale: fov
    };
  }

  function getThermalColor(t) {
    if (t < 0.28) return '#2563EB'; // Laser Blue
    if (t < 0.58) return '#7C3AED'; // Royal Purple
    if (t < 0.82) return '#DB2777'; // Precision Pink
    return '#EA580C'; // Warm Trophy Orange
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const s = dpr;
    laserPulse += 0.038;

    // Viewport background: Deep Technical CAD Slate (#090D16)
    ctx.fillStyle = '#090D16';
    ctx.fillRect(0, 0, width, height);

    // 1. Coordinate Ground Grid at Y = -1.18
    ctx.lineWidth = 1 * s;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    for (let gx = -1.0; gx <= 1.0; gx += 0.25) {
      const p0 = project(gx, -1.18, -1.0);
      const p1 = project(gx, -1.18, 1.0);
      ctx.beginPath();
      ctx.moveTo(p0.px, p0.py);
      ctx.lineTo(p1.px, p1.py);
      ctx.stroke();

      const p2 = project(-1.0, -1.18, gx);
      const p3 = project(1.0, -1.18, gx);
      ctx.beginPath();
      ctx.moveTo(p2.px, p2.py);
      ctx.lineTo(p3.px, p3.py);
      ctx.stroke();
    }

    // 2. 1px Dashed Engineering Bounding Box
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.setLineDash([4 * s, 4 * s]);
    const bW = 0.52;
    const bY0 = -1.18;
    const bY1 = 1.24;

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

    // 3. X/Y/Z Coordinate Axis Gizmo
    const gOrigin = project(-0.75, -1.18, -0.75);
    const gX = project(-0.52, -1.18, -0.75);
    const gY = project(-0.75, -0.95, -0.75);
    const gZ = project(-0.75, -1.18, -0.52);

    ctx.lineWidth = 1.8 * s;
    ctx.strokeStyle = '#EF4444';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gX.px, gX.py); ctx.stroke();
    ctx.strokeStyle = '#10B981';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gY.px, gY.py); ctx.stroke();
    ctx.strokeStyle = '#00D2FF';
    ctx.beginPath(); ctx.moveTo(gOrigin.px, gOrigin.py); ctx.lineTo(gZ.px, gZ.py); ctx.stroke();

    ctx.fillStyle = '#94A3B8';
    ctx.font = `600 ${8.5 * s}px "Sora", sans-serif`;
    ctx.fillText('X', gX.px + 3, gX.py);
    ctx.fillText('Y', gY.px - 2, gY.py - 4);
    ctx.fillText('Z', gZ.px + 3, gZ.py);

    // =========================================================================
    // LAYER 3 (BOTTOM): Parametric CAD Solid Base Pedestal & Gold Plaque
    // =========================================================================
    if (activeLayer === 'all' || activeLayer === 'cad') {
      const mappedBase = baseQuads.map(quad => {
        const p0 = project(quad[0].x, quad[0].y, quad[0].z);
        const p1 = project(quad[1].x, quad[1].y, quad[1].z);
        const p2 = project(quad[2].x, quad[2].y, quad[2].z);
        const p3 = project(quad[3].x, quad[3].y, quad[3].z);
        const depth = (p0.depth + p1.depth + p2.depth + p3.depth) / 4;

        // Surface normal lighting
        const nx = (quad[1].y - quad[0].y) * (quad[2].z - quad[0].z) - (quad[1].z - quad[0].z) * (quad[2].y - quad[0].y);
        const ny = (quad[1].z - quad[0].z) * (quad[2].x - quad[0].x) - (quad[1].x - quad[0].x) * (quad[2].z - quad[0].z);
        const nz = (quad[1].x - quad[0].x) * (quad[2].y - quad[0].y) - (quad[1].y - quad[0].y) * (quad[2].x - quad[0].x);
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        const dot = Math.max(0.18, (nx * 0.45 + ny * 0.65 + nz * 0.6) / len);

        return { p0, p1, p2, p3, depth, dot };
      }).sort((a, b) => b.depth - a.depth);

      mappedBase.forEach(f => {
        // Mahogany Wood Pedestal (Matching reference image)
        const r = Math.floor(52 + f.dot * 48);
        const g = Math.floor(20 + f.dot * 26);
        const b = Math.floor(16 + f.dot * 22);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.moveTo(f.p0.px, f.p0.py);
        ctx.lineTo(f.p1.px, f.p1.py);
        ctx.lineTo(f.p2.px, f.p2.py);
        ctx.lineTo(f.p3.px, f.p3.py);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#23120E';
        ctx.lineWidth = 0.5 * s;
        ctx.stroke();
      });

      // Front Curved Polished Gold Plaque
      const prP0 = project(plaqueCorners[0].x, plaqueCorners[0].y, plaqueCorners[0].z);
      const prP1 = project(plaqueCorners[1].x, plaqueCorners[1].y, plaqueCorners[1].z);
      const prP2 = project(plaqueCorners[2].x, plaqueCorners[2].y, plaqueCorners[2].z);
      const prP3 = project(plaqueCorners[3].x, plaqueCorners[3].y, plaqueCorners[3].z);

      ctx.fillStyle = '#F59E0B'; // Polished gold plate
      ctx.beginPath();
      ctx.moveTo(prP0.px, prP0.py);
      ctx.lineTo(prP1.px, prP1.py);
      ctx.lineTo(prP2.px, prP2.py);
      ctx.lineTo(prP3.px, prP3.py);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#B45309';
      ctx.lineWidth = 1.2 * s;
      ctx.stroke();

      // Plaque Engraving Line
      ctx.strokeStyle = '#78350F';
      ctx.lineWidth = 1 * s;
      const midLeft = project(-0.13, -0.92, 0.36);
      const midRight = project(0.13, -0.92, 0.36);
      ctx.beginPath();
      ctx.moveTo(midLeft.px, midLeft.py);
      ctx.lineTo(midRight.px, midRight.py);
      ctx.stroke();

      // Dimension Leader & Ticks
      const dimX = -0.46;
      const dP0 = project(dimX, -1.18, 0);
      const dP1 = project(dimX, -0.42, 0);

      ctx.strokeStyle = '#00D2FF';
      ctx.lineWidth = 1.2 * s;
      ctx.beginPath();
      ctx.moveTo(dP0.px - 4 * s, dP0.py); ctx.lineTo(dP0.px + 4 * s, dP0.py);
      ctx.moveTo(dP1.px - 4 * s, dP1.py); ctx.lineTo(dP1.px + 4 * s, dP1.py);
      ctx.moveTo(dP0.px, dP0.py); ctx.lineTo(dP1.px, dP1.py);
      ctx.stroke();

      ctx.fillStyle = '#00D2FF';
      ctx.font = `600 ${8 * s}px "Sora", sans-serif`;
      ctx.fillText('H = 280mm', dP0.px - 48 * s, (dP0.py + dP1.py) / 2);
    }

    // =========================================================================
    // SEPARATOR 2: GLOWING EMERALD LASER SCAN PLANE at Y = -0.40
    // =========================================================================
    if (activeLayer === 'all') {
      const sepY2 = -0.40;
      const sr = 0.22;
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
    // LAYER 2 (MIDDLE): Faceted Star Shaft (Photogrammetry Wireframe / CAD Gold)
    // =========================================================================
    if (activeLayer === 'all' || activeLayer === 'wire' || activeLayer === 'cad') {
      const mappedPanels = verticalPanels.map(p => {
        const pr0 = project(p.p0.x, p.p0.y, p.p0.z);
        const pr1 = project(p.p1.x, p.p1.y, p.p1.z);
        const pr2 = project(p.p2.x, p.p2.y, p.p2.z);
        const pr3 = project(p.p3.x, p.p3.y, p.p3.z);
        const depth = (pr0.depth + pr1.depth + pr2.depth + pr3.depth) / 4;

        // Normal lighting calculation for sharp chiseled facets
        const nx = (p.p1.y - p.p0.y) * (p.p2.z - p.p0.z) - (p.p1.z - p.p0.z) * (p.p2.y - p.p0.y);
        const ny = (p.p1.z - p.p0.z) * (p.p2.x - p.p0.x) - (p.p1.x - p.p0.x) * (p.p2.z - p.p0.z);
        const nz = (p.p1.x - p.p0.x) * (p.p2.y - p.p0.y) - (p.p1.y - p.p0.y) * (p.p2.x - p.p0.x);
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        const dot = Math.max(0.18, (nx * 0.52 + ny * 0.62 + nz * 0.58) / len);

        return { pr0, pr1, pr2, pr3, depth, dot, isRidge: p.isRidge };
      }).sort((a, b) => b.depth - a.depth);

      mappedPanels.forEach(f => {
        if (activeLayer === 'cad') {
          // Gleaming Chiseled Gold Trophy Metal (Matching reference image)
          const r = Math.floor(215 + f.dot * 40);
          const g = Math.floor(175 + f.dot * 40);
          const b = Math.floor(45 + f.dot * 35);
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.strokeStyle = '#CA8A04';
          ctx.lineWidth = 1 * s;
        } else {
          // Matte White Clay with Crisp Charcoal CAD Lines
          const shade = Math.floor(235 + f.dot * 20);
          ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
          ctx.strokeStyle = '#0F172A'; // Crisp charcoal CAD line
          ctx.lineWidth = 1.2 * s;
        }

        ctx.beginPath();
        ctx.moveTo(f.pr0.px, f.pr0.py);
        ctx.lineTo(f.pr1.px, f.pr1.py);
        ctx.lineTo(f.pr2.px, f.pr2.py);
        ctx.lineTo(f.pr3.px, f.pr3.py);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Highlight center chiseled ridge line
        if (f.isRidge && activeLayer === 'cad') {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1 * s;
          ctx.beginPath();
          ctx.moveTo(f.pr1.px, f.pr1.py);
          ctx.lineTo(f.pr2.px, f.pr2.py);
          ctx.stroke();
        }
      });
    }

    // =========================================================================
    // SEPARATOR 1: GLOWING CYAN LASER SCAN PLANE at Y = 0.52
    // =========================================================================
    if (activeLayer === 'all') {
      const sepY1 = 0.52;
      const sr1 = 0.38;
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
    // LAYER 1 (TOP): Raw LiDAR Point Cloud OR Solid Gold Tennis Ball in CAD Mode
    // =========================================================================
    if (activeLayer === 'cad') {
      // Solid Golden Tennis Ball with Specular Glint & Seams
      const ballCenter = project(0, BALL_CENTER_Y, 0);
      const rPx = BALL_RADIUS * Math.min(width, height) * 0.33 * ballCenter.scale;
      
      const grad = ctx.createRadialGradient(
        ballCenter.px - rPx * 0.35, ballCenter.py - rPx * 0.35, rPx * 0.08,
        ballCenter.px, ballCenter.py, rPx
      );
      grad.addColorStop(0, '#FEF08A'); // bright gold highlight
      grad.addColorStop(0.35, '#FACC15');
      grad.addColorStop(0.8, '#CA8A04');
      grad.addColorStop(1, '#854D0E');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(ballCenter.px, ballCenter.py, rPx, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FEF08A';
      ctx.lineWidth = 1 * s;
      ctx.stroke();

      // Tennis ball white seam line
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.6 * s;
      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.1) {
        const sx = BALL_RADIUS * 0.98 * Math.cos(t);
        const sy = BALL_CENTER_Y + BALL_RADIUS * 0.98 * Math.sin(t) * 0.72;
        const sz = BALL_RADIUS * 0.98 * Math.sin(2 * t) * 0.42;
        const sp = project(sx, sy, sz);
        if (t === 0) ctx.moveTo(sp.px, sp.py);
        else ctx.lineTo(sp.px, sp.py);
      }
      ctx.stroke();

    } else if (activeLayer === 'all' || activeLayer === 'cloud') {
      const projCloud = cloudPoints.map(p => {
        const pr = project(p.x, p.y, p.z);
        return { ...p, ...pr };
      }).sort((a, b) => b.depth - a.depth);

      projCloud.forEach(p => {
        const col = getThermalColor(p.elev);
        const ptSize = Math.max(1.4, 2.5 * p.scale * s);

        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.px, p.py, ptSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Tennis ball seam highlight in point cloud
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.4 * s;
      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.12) {
        const sx = BALL_RADIUS * 0.98 * Math.cos(t);
        const sy = BALL_CENTER_Y + BALL_RADIUS * 0.98 * Math.sin(t) * 0.72;
        const sz = BALL_RADIUS * 0.98 * Math.sin(2 * t) * 0.42;
        const sp = project(sx, sy, sz);
        if (t === 0) ctx.moveTo(sp.px, sp.py);
        else ctx.lineTo(sp.px, sp.py);
      }
      ctx.stroke();
    }

    // Auto-orbit rotation
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