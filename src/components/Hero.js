import * as THREE from 'three';

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

          <!-- Right: Precision 3D CAD Trophy Viewport Card -->
          <div class="hero-visual-col">
            <div class="hero-collage-wrap pillar-viewport-wrap">
              
              <!-- Floating Glassmorphic Telemetry Badges -->
              <div class="floating-badge badge-mandapa-tl glass-badge" aria-label="Tolerance metric">
                <span class="status-dot dot-green" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">Optical Metrology &bull; &plusmn;0.02mm Tol</span>
              </div>

              <div class="floating-badge badge-mandapa-mr glass-badge" aria-label="Point density metric">
                <span class="status-dot dot-cyan" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">2.4M Pts / Sec</span>
              </div>

              <div class="floating-badge badge-mandapa-bl glass-badge" aria-label="CAD status metric">
                <span class="status-dot dot-orange" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">STEP AP242 Solid</span>
              </div>

              <!-- Main CAD Viewport Card Container -->
              <div class="cad-viewport-card bento-card">
                
                <!-- Top Viewport Header Bar -->
                <div class="viewport-header-bar mono text-xs">
                  <div class="header-left">
                    <span class="text-laser font-bold" id="stage-badge-step">STAGE 01 //</span>
                    <span class="text-high font-bold" id="stage-badge-name">POLYGONAL SOLID</span>
                  </div>
                  <div class="header-right">
                    <span class="status-dot dot-green" aria-hidden="true"></span>
                    <span class="font-bold text-pass">TOL: &plusmn;0.020mm</span>
                  </div>
                </div>

                <!-- Three.js 3D Trophy Viewport Container -->
                <div class="pillar-canvas-container" id="trophy-viewport-parent">
                  <div id="trophy-three-mount" class="w-full h-full"></div>
                  
                  <!-- Deviation Colormap Scale Bar (Visible in Heatmap mode) -->
                  <div class="flange-scale-bar-overlay" id="flange-scale-overlay" style="display: none;" aria-hidden="true">
                    <div class="scale-labels mono text-xs">
                      <span>-0.15mm</span>
                      <span class="text-pass">0.00mm</span>
                      <span>+0.15mm</span>
                    </div>
                    <div class="spectrum-bar"></div>
                  </div>

                  <div class="canvas-drag-hint mono" aria-hidden="true">&bull; DRAG TO ORBIT 3D TROPHY &bull;</div>
                </div>

                <!-- Bottom Footer Bar: Multi-Form State Switcher -->
                <div class="viewport-footer-bar mono text-xs">
                  <!-- Form Mode Selector Pills -->
                  <div class="footer-segmented-pills" role="tablist" aria-label="Trophy Representation Forms">
                    <button class="layer-pill-btn active" data-mode="solid" role="tab" aria-selected="true">Solid</button>
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
  const mount = document.getElementById('trophy-three-mount');
  if (!mount) return;

  const stageStepLabel = document.getElementById('stage-badge-step');
  const stageNameLabel = document.getElementById('stage-badge-name');
  const scaleOverlay = document.getElementById('flange-scale-overlay');
  const playBtn = document.getElementById('flange-play-toggle');
  const playIcon = document.getElementById('flange-play-icon');
  const modeBtns = document.querySelectorAll('.layer-pill-btn');

  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentMode = 'solid';
  let autoCycle = true;
  let cycleTimer = null;

  // 1. Scene, Camera, Renderer Setup
  const scene = new THREE.Scene();
  const width = mount.clientWidth || 480;
  const height = mount.clientHeight || 400;

  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.12, 4.4);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  mount.innerHTML = '';
  mount.appendChild(renderer.domElement);

  // 2. High-End Studio Environment Map (Procedural Studio Softboxes for 24K Gold Reflections)
  const envCanvas = document.createElement('canvas');
  envCanvas.width = 512;
  envCanvas.height = 256;
  const eCtx = envCanvas.getContext('2d');
  
  // Studio background gradient
  const bgGrad = eCtx.createLinearGradient(0, 0, 0, 256);
  bgGrad.addColorStop(0, '#FFFFFF');
  bgGrad.addColorStop(0.35, '#E2E8F0');
  bgGrad.addColorStop(0.65, '#94A3B8');
  bgGrad.addColorStop(1, '#1E293B');
  eCtx.fillStyle = bgGrad;
  eCtx.fillRect(0, 0, 512, 256);

  // Overhead Key Softbox
  const softbox1 = eCtx.createRadialGradient(180, 60, 10, 180, 60, 90);
  softbox1.addColorStop(0, '#FFFFFF');
  softbox1.addColorStop(0.5, '#FEF08A');
  softbox1.addColorStop(1, 'transparent');
  eCtx.fillStyle = softbox1;
  eCtx.fillRect(90, 0, 180, 120);

  // Side Rim Softbox
  const softbox2 = eCtx.createRadialGradient(400, 90, 5, 400, 90, 80);
  softbox2.addColorStop(0, '#FFFFFF');
  softbox2.addColorStop(0.6, '#BAE6FD');
  softbox2.addColorStop(1, 'transparent');
  eCtx.fillStyle = softbox2;
  eCtx.fillRect(320, 10, 160, 160);

  const envTex = new THREE.CanvasTexture(envCanvas);
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = envTex;

  // 3. Studio Directional & Ambient Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xfffdf0, 2.8);
  keyLight.position.set(3.5, 4.5, 3.8);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.5);
  fillLight.position.set(-3.5, 1.5, 2.5);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xfef08a, 2.4);
  rimLight.position.set(0, 3.2, -3.5);
  scene.add(rimLight);

  // Root Trophy Group (for orbit rotation)
  const trophyRoot = new THREE.Group();
  scene.add(trophyRoot);

  // Form Representation Groups
  const solidGroup = new THREE.Group();
  const wireGroup = new THREE.Group();
  const dotsGroup = new THREE.Group();
  const heatmapGroup = new THREE.Group();
  const outlineGroup = new THREE.Group();
  const laserGroup = new THREE.Group();

  trophyRoot.add(solidGroup);
  trophyRoot.add(wireGroup);
  trophyRoot.add(dotsGroup);
  trophyRoot.add(heatmapGroup);
  trophyRoot.add(outlineGroup);
  trophyRoot.add(laserGroup);

  // =========================================================================
  // 4. HIGH-PRECISION POLYGONAL TROPHY GEOMETRY
  // Exact match to user's uploaded championship trophy reference:
  // - Top Golden Tennis Ball with Curved Seam, nestled in 5-point star cup
  // - 10-Faceted Chiseled Star Shaft (front point facing camera, sharp ridges)
  // - Mahogany Pedestal with Gold Plaque Plate & Gold Trim Ring
  // =========================================================================

  const NUM_STAR_POINTS = 5;

  // Star cross-section generator oriented with front star point at +Z (facing camera)
  function getStarPerimeter(y, rOut, rIn) {
    const pts = [];
    for (let k = 0; k < NUM_STAR_POINTS; k++) {
      // Outer Tip: k=0 is at angle Math.PI / 2 (direct front facing camera)
      const aTip = (k * 2 * Math.PI) / NUM_STAR_POINTS + Math.PI / 2;
      pts.push(new THREE.Vector3(Math.cos(aTip) * rOut, y, Math.sin(aTip) * rOut));
      
      // Inner Valley
      const aVal = ((k + 0.5) * 2 * Math.PI) / NUM_STAR_POINTS + Math.PI / 2;
      pts.push(new THREE.Vector3(Math.cos(aVal) * rIn, y, Math.sin(aVal) * rIn));
    }
    return pts; // 10 vertices
  }

  // Multi-tier star column profile for sleek taper and flaring top cup
  const starLevels = [
    { y: -0.55, rOut: 0.22, rIn: 0.16 }, // Stem collar
    { y: -0.22, rOut: 0.29, rIn: 0.21 },
    { y: 0.18, rOut: 0.42, rIn: 0.28 },
    { y: 0.58, rOut: 0.58, rIn: 0.38 },
    { y: 0.88, rOut: 0.74, rIn: 0.48 }, // Star cup outer rim
    { y: 0.94, rOut: 0.76, rIn: 0.50 }  // Beveled top rim edge
  ];

  const ringsOfStar = starLevels.map(lvl => getStarPerimeter(lvl.y, lvl.rOut, lvl.rIn));

  // Build the 10 tall chiseled vertical facet panels
  const starVerts = [];
  const starNormals = [];
  const starIndices = [];

  for (let l = 0; l < ringsOfStar.length - 1; l++) {
    const r0 = ringsOfStar[l];
    const r1 = ringsOfStar[l + 1];
    const count = 10;

    for (let i = 0; i < count; i++) {
      const nextI = (i + 1) % count;
      const v0 = r0[i];
      const v1 = r0[nextI];
      const v2 = r1[nextI];
      const v3 = r1[i];

      // Flat-shaded facet triangle 1
      const nA = new THREE.Vector3().crossVectors(
        new THREE.Vector3().subVectors(v1, v0),
        new THREE.Vector3().subVectors(v2, v0)
      ).normalize();

      const baseIdx = starVerts.length / 3;
      starVerts.push(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
      starNormals.push(nA.x, nA.y, nA.z, nA.x, nA.y, nA.z, nA.x, nA.y, nA.z);
      starIndices.push(baseIdx, baseIdx + 1, baseIdx + 2);

      // Flat-shaded facet triangle 2
      const nB = new THREE.Vector3().crossVectors(
        new THREE.Vector3().subVectors(v2, v0),
        new THREE.Vector3().subVectors(v3, v0)
      ).normalize();
      starVerts.push(v0.x, v0.y, v0.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z);
      starNormals.push(nB.x, nB.y, nB.z, nB.x, nB.y, nB.z, nB.x, nB.y, nB.z);
      starIndices.push(baseIdx + 3, baseIdx + 4, baseIdx + 5);
    }
  }

  // Recessed Inner Star Socket (Nest for the golden tennis ball)
  const topRim = ringsOfStar[ringsOfStar.length - 1];
  const socketFloor = new THREE.Vector3(0, 0.72, 0);
  const sBaseIdx = starVerts.length / 3;
  for (let i = 0; i < 10; i++) {
    const nextI = (i + 1) % 10;
    const v0 = socketFloor;
    const v1 = topRim[i];
    const v2 = topRim[nextI];
    const n = new THREE.Vector3(0, 1, 0);
    starVerts.push(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
    starNormals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    starIndices.push(sBaseIdx + i * 3, sBaseIdx + i * 3 + 1, sBaseIdx + i * 3 + 2);
  }

  const starGeom = new THREE.BufferGeometry();
  starGeom.setAttribute('position', new THREE.Float32BufferAttribute(starVerts, 3));
  starGeom.setAttribute('normal', new THREE.Float32BufferAttribute(starNormals, 3));
  starGeom.setIndex(starIndices);

  // B. Golden Tennis Ball (Sphere nestled inside star cup with 3D Seam)
  const BALL_RADIUS = 0.28;
  const BALL_CENTER_Y = 0.98;
  const ballGeom = new THREE.SphereGeometry(BALL_RADIUS, 42, 32);
  ballGeom.translate(0, BALL_CENTER_Y, 0);

  // Tennis Ball Curved Seam Geometry (Tubular geometry for authentic 3D groove)
  const seamCurvePts = [];
  for (let t = 0; t <= Math.PI * 2; t += 0.05) {
    const sx = BALL_RADIUS * 1.005 * Math.cos(t);
    const sy = BALL_CENTER_Y + BALL_RADIUS * 1.005 * Math.sin(t) * 0.74;
    const sz = BALL_RADIUS * 1.005 * Math.sin(2 * t) * 0.45;
    seamCurvePts.push(new THREE.Vector3(sx, sy, sz));
  }
  const seamCurve = new THREE.CatmullRomCurve3(seamCurvePts, true);
  const seamTubeGeom = new THREE.TubeGeometry(seamCurve, 64, 0.012, 8, true);

  // C. Mahogany Pedestal Base & Front Gold Plaque
  const baseGeom = new THREE.CylinderGeometry(0.44, 0.68, 0.54, 42);
  baseGeom.translate(0, -0.82, 0);

  // Base Stepped Bottom Plinth
  const plinthGeom = new THREE.CylinderGeometry(0.70, 0.72, 0.08, 42);
  plinthGeom.translate(0, -1.05, 0);

  // Polished Gold Torus Collar Ring between Stem and Base
  const goldRingGeom = new THREE.TorusGeometry(0.24, 0.024, 18, 42);
  goldRingGeom.rotateX(Math.PI / 2);
  goldRingGeom.translate(0, -0.55, 0);

  // Front Curved Gold Plaque Plate (Oriented towards +Z)
  const plaqueGeom = new THREE.BoxGeometry(0.52, 0.24, 0.024);
  plaqueGeom.rotateX(-0.18); // match pedestal taper
  plaqueGeom.translate(0, -0.80, 0.58);

  // Soft Contact Ground Shadow underneath Pedestal
  const shadowGeom = new THREE.PlaneGeometry(2.5, 2.5);
  shadowGeom.rotateX(-Math.PI / 2);
  shadowGeom.translate(0, -1.09, 0);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 128;
  const sCtx = shadowCanvas.getContext('2d');
  const sGrad = sCtx.createRadialGradient(64, 64, 12, 64, 64, 62);
  sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
  sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = sGrad;
  sCtx.fillRect(0, 0, 128, 128);
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.7 });
  const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
  scene.add(shadowMesh);

  // =========================================================================
  // 5. HIGH-END PBR MATERIALS SETUP
  // =========================================================================

  // Polished 24K Championship Gold
  const goldPBR = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.94,
    roughness: 0.16,
    envMapIntensity: 1.8
  });

  // Mirror-Polished Gold Ball
  const ballPBR = new THREE.MeshStandardMaterial({
    color: 0xfbbf24,
    metalness: 0.98,
    roughness: 0.12,
    envMapIntensity: 2.2
  });

  // White Tennis Ball Seam Inlay
  const seamPBR = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.35,
    metalness: 0.1
  });

  // Deep Rich Mahogany Wood Pedestal
  const mahoganyPBR = new THREE.MeshStandardMaterial({
    color: 0x3d1712,
    metalness: 0.08,
    roughness: 0.38,
    envMapIntensity: 1.0
  });

  // Polished Gold Nameplate
  const plaquePBR = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    metalness: 0.95,
    roughness: 0.14,
    envMapIntensity: 2.0
  });

  // 1. ASSEMBLE SOLID GROUP
  const starMesh = new THREE.Mesh(starGeom, goldPBR);
  starMesh.castShadow = true;
  starMesh.receiveShadow = true;

  const ballMesh = new THREE.Mesh(ballGeom, ballPBR);
  ballMesh.castShadow = true;

  const seamMesh = new THREE.Mesh(seamTubeGeom, seamPBR);

  const baseMesh = new THREE.Mesh(baseGeom, mahoganyPBR);
  baseMesh.receiveShadow = true;

  const plinthMesh = new THREE.Mesh(plinthGeom, mahoganyPBR);
  plinthMesh.receiveShadow = true;

  const ringMesh = new THREE.Mesh(goldRingGeom, goldPBR);
  const plaqueMesh = new THREE.Mesh(plaqueGeom, plaquePBR);

  solidGroup.add(starMesh);
  solidGroup.add(ballMesh);
  solidGroup.add(seamMesh);
  solidGroup.add(baseMesh);
  solidGroup.add(plinthMesh);
  solidGroup.add(ringMesh);
  solidGroup.add(plaqueMesh);

  // 2. ASSEMBLE WIREFRAME GROUP
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true });
  wireGroup.add(new THREE.Mesh(starGeom, wireMat));
  wireGroup.add(new THREE.Mesh(ballGeom, wireMat));
  wireGroup.add(new THREE.Mesh(baseGeom, wireMat));
  wireGroup.add(new THREE.Mesh(plinthMesh.geometry, wireMat));
  wireGroup.add(new THREE.Mesh(plaqueGeom, wireMat));

  // 3. ASSEMBLE POINT CLOUD & HEATMAP (3,000+ Dense Coordinate Points)
  const samplePoints = [];
  const sampleColors = [];

  function sampleMesh(geom, step = 1) {
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i += step) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      samplePoints.push(x, y, z);

      // Metrology deviation spectrum: Blue -> Cyan -> Green -> Amber -> Red
      const dev = (y + 1.1) / 2.5;
      const col = new THREE.Color();
      if (dev < 0.25) col.setHSL(0.60, 1.0, 0.5);
      else if (dev < 0.50) col.setHSL(0.48, 1.0, 0.5);
      else if (dev < 0.75) col.setHSL(0.33, 1.0, 0.5);
      else col.setHSL(0.04, 1.0, 0.5);
      sampleColors.push(col.r, col.g, col.b);
    }
  }

  sampleMesh(starGeom, 1);
  sampleMesh(ballGeom, 1);
  sampleMesh(baseGeom, 2);
  sampleMesh(plinthGeom, 2);

  const ptsGeom = new THREE.BufferGeometry();
  ptsGeom.setAttribute('position', new THREE.Float32BufferAttribute(samplePoints, 3));

  // Laser Cyan Dots
  const dotsMat = new THREE.PointsMaterial({ color: 0x00d2ff, size: 0.038, sizeAttenuation: true });
  dotsGroup.add(new THREE.Points(ptsGeom, dotsMat));

  // Heatmap Coloured Dots
  const heatmapGeom = ptsGeom.clone();
  heatmapGeom.setAttribute('color', new THREE.Float32BufferAttribute(sampleColors, 3));
  const heatmapMat = new THREE.PointsMaterial({ vertexColors: true, size: 0.040, sizeAttenuation: true });
  heatmapGroup.add(new THREE.Points(heatmapGeom, heatmapMat));

  // 4. ASSEMBLE CAD OUTLINE GROUP
  const starEdges = new THREE.LineSegments(new THREE.EdgesGeometry(starGeom, 18), new THREE.LineBasicMaterial({ color: 0x0284c7, linewidth: 2 }));
  const baseEdges = new THREE.LineSegments(new THREE.EdgesGeometry(baseGeom, 25), new THREE.LineBasicMaterial({ color: 0x10b981, linewidth: 1.5 }));
  outlineGroup.add(starEdges);
  outlineGroup.add(baseEdges);
  outlineGroup.add(seamMesh.clone());

  // 5. ASSEMBLE LASER SCAN GROUP
  const laserPlaneGeom = new THREE.PlaneGeometry(2.4, 0.03);
  const laserPlaneMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const laserMesh = new THREE.Mesh(laserPlaneGeom, laserPlaneMat);
  laserGroup.add(solidGroup.clone());
  laserGroup.add(laserMesh);

  // =========================================================================
  // 6. FORM REPRESENTATION SWITCHER & CONTROLS
  // =========================================================================
  const stages = [
    { mode: 'solid', step: 'STAGE 01 //', name: 'POLYGONAL SOLID' },
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

    solidGroup.visible = (modeKey === 'solid');
    laserGroup.visible = (modeKey === 'laser');
    dotsGroup.visible = (modeKey === 'dots');
    heatmapGroup.visible = (modeKey === 'coloured');
    wireGroup.visible = (modeKey === 'wireframe');
    outlineGroup.visible = (modeKey === 'outline');

    if (scaleOverlay) {
      scaleOverlay.style.display = (modeKey === 'coloured') ? 'block' : 'none';
    }

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

  function startAutoCycle() {
    if (cycleTimer) clearInterval(cycleTimer);
    cycleTimer = setInterval(() => {
      if (autoCycle) {
        const curIdx = stages.findIndex(s => s.mode === currentMode);
        const nextIdx = (curIdx + 1) % stages.length;
        setMode(stages[nextIdx].mode);
      }
    }, 3200);
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

  // Pointer drag orbit controls
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  renderer.domElement.addEventListener('pointerdown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    renderer.domElement.setPointerCapture(e.pointerId);
  });

  renderer.domElement.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;
    trophyRoot.rotation.y += deltaX * 0.008;
    trophyRoot.rotation.x = Math.max(-0.4, Math.min(0.6, trophyRoot.rotation.x + deltaY * 0.008));
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  renderer.domElement.addEventListener('pointerup', (e) => {
    isDragging = false;
    try { renderer.domElement.releasePointerCapture(e.pointerId); } catch (_) {}
  });

  // Responsive Resize
  function handleResize() {
    const w = mount.clientWidth || 480;
    const h = mount.clientHeight || 400;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', handleResize);

  // Animation Loop
  let laserY = -0.9;
  let laserDir = 1;

  function animate() {
    requestAnimationFrame(animate);

    if (!isDragging && !RM) {
      trophyRoot.rotation.y += 0.004;
    }

    if (laserGroup.visible) {
      laserY += 0.015 * laserDir;
      if (laserY > 1.35) { laserY = 1.35; laserDir = -1; }
      if (laserY < -0.95) { laserY = -0.95; laserDir = 1; }
      laserMesh.position.y = laserY;
    }

    renderer.render(scene, camera);
  }

  setMode('solid');
  startAutoCycle();
  animate();
}