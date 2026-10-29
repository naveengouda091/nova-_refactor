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
                <span>Explore Showcase</span>
              </a>
            </div>

            <div class="hero-stats-band mono text-xs">
              <div class="stat-pill">
                <span class="stat-val font-bold text-high">0.020mm</span>
                <span class="stat-lbl text-muted">Accuracy Floor</span>
              </div>
              <div class="stat-divider" aria-hidden="true"></div>
              <div class="stat-pill">
                <span class="stat-val font-bold text-high">48h</span>
                <span class="stat-lbl text-muted">Avg Turnaround</span>
              </div>
              <div class="stat-divider" aria-hidden="true"></div>
              <div class="stat-pill">
                <span class="stat-val font-bold text-high">100%</span>
                <span class="stat-lbl text-muted">Guaranteed Fit</span>
              </div>
            </div>
          </div>

          <!-- Right: Precision Solid Grayscale 3D Polygonal Trophy CAD Viewport -->
          <div class="hero-cad-col">
            <div class="cad-viewport-wrapper">
              
              <!-- Floating Glassmorphic Telemetry Badges -->
              <div class="floating-badge badge-mandapa-tl glass-badge" aria-label="Optical Metrology Tolerance">
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
                  
                  <!-- Deviation Colormap Scale Bar (Grayscale Metrology) -->
                  <div class="flange-scale-bar-overlay" id="flange-scale-overlay" style="display: none;" aria-hidden="true">
                    <div class="scale-labels mono text-xs">
                      <span>-0.15mm</span>
                      <span class="text-pass">0.00mm</span>
                      <span>+0.15mm</span>
                    </div>
                    <div class="spectrum-bar grayscale-spectrum"></div>
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
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
  let autoCycle = false;
  let cycleTimer = null;

  // 1. Scene, Camera, Renderer Setup
  const scene = new THREE.Scene();
  const width = mount.clientWidth || 480;
  const height = mount.clientHeight || 400;

  const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
  camera.position.set(0, 0.12, 4.6);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95; // Balanced exposure to prevent white wash-out
  mount.innerHTML = '';
  mount.appendChild(renderer.domElement);

  // 2. High-Precision Matte Studio Reflection Map (Subtle Dark Slate / Charcoal)
  const envCanvas = document.createElement('canvas');
  envCanvas.width = 512;
  envCanvas.height = 256;
  const eCtx = envCanvas.getContext('2d');
  
  // Grayscale Studio background gradient (Dark Slate to Gunmetal)
  const bgGrad = eCtx.createLinearGradient(0, 0, 0, 256);
  bgGrad.addColorStop(0, '#94A3B8');
  bgGrad.addColorStop(0.40, '#475569');
  bgGrad.addColorStop(0.75, '#1E293B');
  bgGrad.addColorStop(1, '#0F172A');
  eCtx.fillStyle = bgGrad;
  eCtx.fillRect(0, 0, 512, 256);

  // Softbox: Subtle neutral reflection
  const softbox1 = eCtx.createRadialGradient(200, 60, 5, 200, 60, 80);
  softbox1.addColorStop(0, '#CBD5E1');
  softbox1.addColorStop(0.6, 'rgba(148, 163, 184, 0.4)');
  softbox1.addColorStop(1, 'transparent');
  eCtx.fillStyle = softbox1;
  eCtx.fillRect(120, 0, 160, 120);

  const envTex = new THREE.CanvasTexture(envCanvas);
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = envTex;

  // 3. Studio Directional & Ambient Lighting (Engineered for Solid CAD Gray)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  // Strong Key light positioned at 45° angle to create rich geometric facet shading
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.9);
  keyLight.position.set(3.6, 4.2, 3.2);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  // Subtle cool fill from left
  const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.65);
  fillLight.position.set(-3.5, 1.2, 2.0);
  scene.add(fillLight);

  // Sharp specular rim light from back-top
  const rimLight = new THREE.DirectionalLight(0xcbd5e1, 1.2);
  rimLight.position.set(0, 3.0, -3.0);
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
  // 4. PRECISION WATERTIGHT SOLID POLYGONAL TROPHY GEOMETRY
  // 100% Solid & Closed — NO HOLES, NO INSIDES VISIBLE
  // - Top Tennis Ball solidly mounted on capped star column
  // - Slender 5-pointed star shaft with sharp chiseled facets & chamfers
  // - Multi-tiered architectural pedestal base with engraved plaque
  // =========================================================================

  const NUM_STAR_POINTS = 5;

  // Chamfered 20-vertex Star Perimeter generator (creates 3-facet chiseled ridges)
  function getChamferedStarLoop(y, rOut, rIn) {
    const pts = [];
    const chamferAng = 0.085;
    const rBevel = rOut * 0.95;
    
    for (let k = 0; k < NUM_STAR_POINTS; k++) {
      const aTip = (k * 2 * Math.PI) / NUM_STAR_POINTS + Math.PI / 2;
      
      // 1. Left chamfer facet
      pts.push(new THREE.Vector3(
        Math.cos(aTip - chamferAng) * rBevel,
        y,
        Math.sin(aTip - chamferAng) * rBevel
      ));

      // 2. Center sharp crest ridge
      pts.push(new THREE.Vector3(
        Math.cos(aTip) * rOut,
        y,
        Math.sin(aTip) * rOut
      ));

      // 3. Right chamfer facet
      pts.push(new THREE.Vector3(
        Math.cos(aTip + chamferAng) * rBevel,
        y,
        Math.sin(aTip + chamferAng) * rBevel
      ));

      // 4. Inner Valley
      const aVal = ((k + 0.5) * 2 * Math.PI) / NUM_STAR_POINTS + Math.PI / 2;
      pts.push(new THREE.Vector3(
        Math.cos(aVal) * rIn,
        y,
        Math.sin(aVal) * rIn
      ));
    }
    return pts; // 20 vertices per loop
  }

  // 11-Tier profile engineered for authentic slender proportions
  const starLevels = [
    { y: -0.65, rOut: 0.18, rIn: 0.11 }, // Stem root
    { y: -0.52, rOut: 0.17, rIn: 0.11 }, // Slender waist
    { y: -0.32, rOut: 0.19, rIn: 0.12 },
    { y: -0.10, rOut: 0.22, rIn: 0.14 },
    { y: 0.12,  rOut: 0.26, rIn: 0.17 },
    { y: 0.35,  rOut: 0.31, rIn: 0.20 },
    { y: 0.55,  rOut: 0.36, rIn: 0.23 },
    { y: 0.72,  rOut: 0.42, rIn: 0.27 },
    { y: 0.86,  rOut: 0.47, rIn: 0.30 },
    { y: 0.94,  rOut: 0.50, rIn: 0.32 }, // Star cup outer rim
    { y: 0.97,  rOut: 0.48, rIn: 0.30 }  // Beveled top perimeter
  ];

  const ringsOfStar = starLevels.map(lvl => getChamferedStarLoop(lvl.y, lvl.rOut, lvl.rIn));

  // Build the 20-faceted vertical polygonal column panels with crisp flat normals
  const starVerts = [];
  const starNormals = [];
  const starIndices = [];
  const PTS_COUNT = 20;

  for (let l = 0; l < ringsOfStar.length - 1; l++) {
    const r0 = ringsOfStar[l];
    const r1 = ringsOfStar[l + 1];

    for (let i = 0; i < PTS_COUNT; i++) {
      const nextI = (i + 1) % PTS_COUNT;
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

  // 1. TOP SOLID DECK CAP (100% Watertight Closed Surface - NO HOLES / NO CAVITIES)
  const topRim = ringsOfStar[ringsOfStar.length - 1];
  const topCapCenter = new THREE.Vector3(0, 0.97, 0);
  const tBaseIdx = starVerts.length / 3;
  for (let i = 0; i < PTS_COUNT; i++) {
    const nextI = (i + 1) % PTS_COUNT;
    const v0 = topCapCenter;
    const v1 = topRim[nextI];
    const v2 = topRim[i];
    starVerts.push(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
    starNormals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    starIndices.push(tBaseIdx + i * 3, tBaseIdx + i * 3 + 1, tBaseIdx + i * 3 + 2);
  }

  // 2. BOTTOM SOLID ROOT CAP (100% Closed at bottom)
  const bottomRim = ringsOfStar[0];
  const bottomCapCenter = new THREE.Vector3(0, -0.65, 0);
  const bBaseIdx = starVerts.length / 3;
  for (let i = 0; i < PTS_COUNT; i++) {
    const nextI = (i + 1) % PTS_COUNT;
    const v0 = bottomCapCenter;
    const v1 = bottomRim[i];
    const v2 = bottomRim[nextI];
    starVerts.push(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
    starNormals.push(0, -1, 0, 0, -1, 0, 0, -1, 0);
    starIndices.push(bBaseIdx + i * 3, bBaseIdx + i * 3 + 1, bBaseIdx + i * 3 + 2);
  }

  const starGeom = new THREE.BufferGeometry();
  starGeom.setAttribute('position', new THREE.Float32BufferAttribute(starVerts, 3));
  starGeom.setAttribute('normal', new THREE.Float32BufferAttribute(starNormals, 3));
  starGeom.setIndex(starIndices);

  // B. Solid Ball Mount Pedestal (Closed Solid Cylinder seated on star deck)
  const ballMountGeom = new THREE.CylinderGeometry(0.12, 0.16, 0.06, 32);
  ballMountGeom.translate(0, 1.0, 0);

  // C. Top Tennis Ball (Opaque Solid Geodesic Sphere resting solidly on mount)
  const BALL_RADIUS = 0.22;
  const BALL_CENTER_Y = 1.18;
  const ballGeom = new THREE.SphereGeometry(BALL_RADIUS, 42, 32);
  ballGeom.translate(0, BALL_CENTER_Y, 0);

  // Authentic 3D Tennis Ball Curved Seam (Tubular geometry)
  const seamCurvePts = [];
  for (let t = 0; t <= Math.PI * 2; t += 0.04) {
    const sx = BALL_RADIUS * 1.004 * Math.cos(t);
    const sy = BALL_CENTER_Y + BALL_RADIUS * 1.004 * Math.sin(t) * 0.74;
    const sz = BALL_RADIUS * 1.004 * Math.sin(2 * t) * 0.46;
    seamCurvePts.push(new THREE.Vector3(sx, sy, sz));
  }
  const seamCurve = new THREE.CatmullRomCurve3(seamCurvePts, true);
  const seamTubeGeom = new THREE.TubeGeometry(seamCurve, 80, 0.009, 8, true);

  // D. Multi-Tiered Polygonal Architectural Pedestal Base
  // 1. Collar Ring between stem and pedestal
  const collarRingGeom = new THREE.TorusGeometry(0.20, 0.018, 16, 48);
  collarRingGeom.rotateX(Math.PI / 2);
  collarRingGeom.translate(0, -0.65, 0);

  // 2. Upper Beveled Plinth Step
  const upperPlinthGeom = new THREE.CylinderGeometry(0.32, 0.36, 0.06, 48);
  upperPlinthGeom.translate(0, -0.70, 0);

  // 3. Main Tapered Pedestal Body (Solid Graphite Gray)
  const baseGeom = new THREE.CylinderGeometry(0.36, 0.54, 0.38, 48);
  baseGeom.translate(0, -0.91, 0);

  // 4. Milled Relief Groove Ring
  const grooveRingGeom = new THREE.CylinderGeometry(0.53, 0.53, 0.024, 48);
  grooveRingGeom.translate(0, -1.11, 0);

  // 5. Lower Heavy Base Plinth with Chamfered Step
  const plinthGeom = new THREE.CylinderGeometry(0.59, 0.62, 0.08, 48);
  plinthGeom.translate(0, -1.16, 0);

  // 6. Sub-Base Milled Aluminum Leveling Feet (4 Precision Pads)
  const footGeom = new THREE.CylinderGeometry(0.06, 0.07, 0.03, 24);
  const footPositions = [
    [0.36, -1.21, 0.28],
    [-0.36, -1.21, 0.28],
    [0.36, -1.21, -0.28],
    [-0.36, -1.21, -0.28]
  ];

  // 7. Front Curved Nameplate Plaque with Laser Engraved Text Texture
  const plaqueGeom = new THREE.BoxGeometry(0.44, 0.18, 0.020);
  plaqueGeom.rotateX(-0.19); // Match pedestal taper angle
  plaqueGeom.translate(0, -0.89, 0.47);

  // Plaque Canvas Texture with Crisp Monospace Calibration Text
  const plaqueCanvas = document.createElement('canvas');
  plaqueCanvas.width = 512;
  plaqueCanvas.height = 256;
  const pCtx = plaqueCanvas.getContext('2d');
  // Brushed gray plate background
  pCtx.fillStyle = '#64748B';
  pCtx.fillRect(0, 0, 512, 256);
  // Inner border bevel
  pCtx.strokeStyle = '#475569';
  pCtx.lineWidth = 6;
  pCtx.strokeRect(16, 16, 480, 224);
  pCtx.strokeStyle = '#94A3B8';
  pCtx.lineWidth = 2;
  pCtx.strokeRect(22, 22, 468, 212);
  // Laser engraved text
  pCtx.fillStyle = '#0F172A';
  pCtx.font = 'bold 36px Sora, monospace';
  pCtx.textAlign = 'center';
  pCtx.fillText('NOVASCAN 3D', 256, 92);
  pCtx.font = '600 22px Sora, monospace';
  pCtx.fillStyle = '#1E293B';
  pCtx.fillText('CAL_ID: REV-8840-X', 256, 142);
  pCtx.font = '500 18px Sora, monospace';
  pCtx.fillStyle = '#334155';
  pCtx.fillText('ISO 10360-8 • TOL: 0.020mm', 256, 184);

  const plaqueTex = new THREE.CanvasTexture(plaqueCanvas);

  // Soft Ground Shadow underneath Base
  const shadowGeom = new THREE.PlaneGeometry(2.4, 2.4);
  shadowGeom.rotateX(-Math.PI / 2);
  shadowGeom.translate(0, -1.23, 0);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 128;
  const sCtx = shadowCanvas.getContext('2d');
  const sGrad = sCtx.createRadialGradient(64, 64, 16, 64, 64, 62);
  sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.55)');
  sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = sGrad;
  sCtx.fillRect(0, 0, 128, 128);
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.70 });
  const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
  scene.add(shadowMesh);

  // =========================================================================
  // 5. TRUE INDUSTRIAL GRAY MONOCHROME PBR MATERIALS (NOT WHITE)
  // Matte Slate Gray, Gunmetal Titanium, Dark Charcoal Graphite
  // =========================================================================

  // Chiseled Star Shaft: Matte Solid Slate Gray with Flat Shading (True Gray)
  const shaftPBR = new THREE.MeshStandardMaterial({
    color: 0x556070, // Solid medium slate gray (~40% tone, NOT white)
    metalness: 0.28,
    roughness: 0.42,
    flatShading: true
  });

  // Top Ball: Solid Cool Industrial Gray
  const ballPBR = new THREE.MeshStandardMaterial({
    color: 0x6E7B8C, // Medium-light solid gray (~50% tone)
    metalness: 0.35,
    roughness: 0.35
  });

  // Solid Ball Pedestal Mount
  const mountPBR = new THREE.MeshStandardMaterial({
    color: 0x475569,
    metalness: 0.30,
    roughness: 0.40
  });

  // Tennis Ball Seam Inlay: Deep Charcoal Slate
  const seamPBR = new THREE.MeshStandardMaterial({
    color: 0x1E242B,
    metalness: 0.20,
    roughness: 0.60
  });

  // Accent Collar Ring: Anodized Titanium Gray
  const collarPBR = new THREE.MeshStandardMaterial({
    color: 0x788696,
    metalness: 0.55,
    roughness: 0.28
  });

  // Deep Matte Graphite Slate Pedestal Body
  const graphitePBR = new THREE.MeshStandardMaterial({
    color: 0x1E232A, // Deep charcoal graphite
    metalness: 0.15,
    roughness: 0.52
  });

  // Milled Charcoal Cast Steel (Plinth, Relief Groove & Leveling Feet)
  const charcoalPBR = new THREE.MeshStandardMaterial({
    color: 0x13171D,
    metalness: 0.30,
    roughness: 0.46
  });

  // Anodized Gray Plaque Plate
  const plaquePBR = new THREE.MeshStandardMaterial({
    color: 0x64748B,
    map: plaqueTex,
    metalness: 0.50,
    roughness: 0.32
  });

  // 1. ASSEMBLE SOLID GROUP (100% Watertight Opaque Solids)
  const starMesh = new THREE.Mesh(starGeom, shaftPBR);
  starMesh.castShadow = true;
  starMesh.receiveShadow = true;

  const ballMountMesh = new THREE.Mesh(ballMountGeom, mountPBR);
  ballMountMesh.castShadow = true;

  const ballMesh = new THREE.Mesh(ballGeom, ballPBR);
  ballMesh.castShadow = true;

  const seamMesh = new THREE.Mesh(seamTubeGeom, seamPBR);

  const collarRingMesh = new THREE.Mesh(collarRingGeom, collarPBR);
  const upperPlinthMesh = new THREE.Mesh(upperPlinthGeom, graphitePBR);
  upperPlinthMesh.receiveShadow = true;

  const baseMesh = new THREE.Mesh(baseGeom, graphitePBR);
  baseMesh.receiveShadow = true;

  const grooveRingMesh = new THREE.Mesh(grooveRingGeom, charcoalPBR);
  const plinthMesh = new THREE.Mesh(plinthGeom, charcoalPBR);
  plinthMesh.receiveShadow = true;

  const plaqueMesh = new THREE.Mesh(plaqueGeom, plaquePBR);

  solidGroup.add(starMesh);
  solidGroup.add(ballMountMesh);
  solidGroup.add(ballMesh);
  solidGroup.add(seamMesh);
  solidGroup.add(collarRingMesh);
  solidGroup.add(upperPlinthMesh);
  solidGroup.add(baseMesh);
  solidGroup.add(grooveRingMesh);
  solidGroup.add(plinthMesh);
  solidGroup.add(plaqueMesh);

  footPositions.forEach(pos => {
    const footMesh = new THREE.Mesh(footGeom, charcoalPBR);
    footMesh.position.set(pos[0], pos[1], pos[2]);
    solidGroup.add(footMesh);
  });

  // 2. ASSEMBLE WIREFRAME GROUP (Crisp Dark Charcoal Wireframe over Solid Gray Body)
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x0F172A, wireframe: true });
  const solidGrayMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7, metalness: 0.1, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
  
  [starGeom, ballGeom, ballMountGeom, baseGeom, plinthGeom, plaqueGeom].forEach(g => {
    const body = new THREE.Mesh(g, solidGrayMat);
    const wire = new THREE.Mesh(g, wireMat);
    wireGroup.add(body);
    wireGroup.add(wire);
  });

  // 3. ASSEMBLE POINT CLOUD & GRAYSCALE HEATMAP (Dense Coordinate Points)
  const samplePoints = [];
  const grayscaleDevColors = [];

  function sampleMesh(geom, step = 1) {
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i += step) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      samplePoints.push(x, y, z);

      // Grayscale Elevation / Deviation Tonal Gradient
      const normY = Math.max(0, Math.min(1, (y + 1.25) / 2.6));
      const val = 0.20 + normY * 0.65; // True gray range [0.20, 0.85]
      grayscaleDevColors.push(val, val, val);
    }
  }

  sampleMesh(starGeom, 1);
  sampleMesh(ballGeom, 1);
  sampleMesh(baseGeom, 2);
  sampleMesh(plinthGeom, 2);

  const ptsGeom = new THREE.BufferGeometry();
  ptsGeom.setAttribute('position', new THREE.Float32BufferAttribute(samplePoints, 3));

  // Industrial Slate-Gray Coordinate Dots
  const dotsMat = new THREE.PointsMaterial({ color: 0x94A3B8, size: 0.038, sizeAttenuation: true });
  dotsGroup.add(new THREE.Points(ptsGeom, dotsMat));

  // Grayscale Deviation Heatmap Dots
  const heatmapGeom = ptsGeom.clone();
  heatmapGeom.setAttribute('color', new THREE.Float32BufferAttribute(grayscaleDevColors, 3));
  const heatmapMat = new THREE.PointsMaterial({ vertexColors: true, size: 0.040, sizeAttenuation: true });
  heatmapGroup.add(new THREE.Points(heatmapGeom, heatmapMat));

  // 4. ASSEMBLE CAD OUTLINE GROUP (Technical Precision Feature Lines)
  const starEdges = new THREE.LineSegments(new THREE.EdgesGeometry(starGeom, 16), new THREE.LineBasicMaterial({ color: 0x0F172A, linewidth: 2 }));
  const baseEdges = new THREE.LineSegments(new THREE.EdgesGeometry(baseGeom, 22), new THREE.LineBasicMaterial({ color: 0x334155, linewidth: 1.5 }));
  const plinthEdges = new THREE.LineSegments(new THREE.EdgesGeometry(plinthGeom, 22), new THREE.LineBasicMaterial({ color: 0x0F172A, linewidth: 1.5 }));
  outlineGroup.add(starEdges);
  outlineGroup.add(baseEdges);
  outlineGroup.add(plinthEdges);
  outlineGroup.add(seamMesh.clone());

  // 5. ASSEMBLE LASER SCAN GROUP (Laser plane sweep over solid gray body)
  const laserPlaneGeom = new THREE.PlaneGeometry(2.2, 0.024);
  const laserPlaneMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.92, side: THREE.DoubleSide });
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
      if (autoCycle) startAutoCycle();
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
  let laserY = -1.0;
  let laserDir = 1;

  function animate() {
    requestAnimationFrame(animate);

    if (!isDragging && !RM) {
      trophyRoot.rotation.y += 0.004;
    }

    if (laserGroup.visible) {
      laserY += 0.015 * laserDir;
      if (laserY > 1.35) { laserY = 1.35; laserDir = -1; }
      if (laserY < -1.05) { laserY = -1.05; laserDir = 1; }
      laserMesh.position.y = laserY;
    }

    renderer.render(scene, camera);
  }

  setMode('solid');
  animate();
}
