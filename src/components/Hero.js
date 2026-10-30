import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import chairObjUrl from '../assets/models/chair.obj?url';

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

          <!-- Right: Precision Solid Grayscale 3D CAD Viewport -->
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

                <!-- Three.js 3D Viewport Container -->
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

                  <div class="canvas-drag-hint mono" aria-hidden="true">&bull; DRAG TO ORBIT 3D MODEL &bull;</div>
                </div>

                <!-- Bottom Footer Bar: Multi-Form State Switcher -->
                <div class="viewport-footer-bar mono text-xs">
                  <!-- Form Mode Selector Pills -->
                  <div class="footer-segmented-pills" role="tablist" aria-label="Model Representation Forms">
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
  camera.position.set(0, 0.45, 4.2);
  camera.lookAt(0, 0.05, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  mount.innerHTML = '';
  mount.appendChild(renderer.domElement);

  // 2. High-Precision Matte Studio Reflection Map
  const envCanvas = document.createElement('canvas');
  envCanvas.width = 512;
  envCanvas.height = 256;
  const eCtx = envCanvas.getContext('2d');
  
  const bgGrad = eCtx.createLinearGradient(0, 0, 0, 256);
  bgGrad.addColorStop(0, '#94A3B8');
  bgGrad.addColorStop(0.40, '#475569');
  bgGrad.addColorStop(0.75, '#1E293B');
  bgGrad.addColorStop(1, '#0F172A');
  eCtx.fillStyle = bgGrad;
  eCtx.fillRect(0, 0, 512, 256);

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
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.70);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
  keyLight.position.set(3.6, 4.2, 3.2);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.70);
  fillLight.position.set(-3.5, 1.2, 2.0);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xcbd5e1, 1.3);
  rimLight.position.set(0, 3.0, -3.0);
  scene.add(rimLight);

  // Soft Ground Shadow underneath model
  const shadowGeom = new THREE.PlaneGeometry(2.8, 2.8);
  shadowGeom.rotateX(-Math.PI / 2);
  shadowGeom.translate(0, -1.14, 0);
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
  const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.65 });
  const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
  scene.add(shadowMesh);

  // Subtle coordinate grid plane
  const gridHelper = new THREE.GridHelper(2.6, 16, 0x334155, 0x1E293B);
  gridHelper.position.y = -1.13;
  scene.add(gridHelper);

  // Root Model Group (for orbit rotation)
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);

  // Initial front 3/4 beauty viewing angle
  modelRoot.rotation.y = -0.55;
  modelRoot.rotation.x = 0.04;

  // Form Representation Groups
  const solidGroup = new THREE.Group();
  const wireGroup = new THREE.Group();
  const dotsGroup = new THREE.Group();
  const heatmapGroup = new THREE.Group();
  const outlineGroup = new THREE.Group();
  const laserGroup = new THREE.Group();

  modelRoot.add(solidGroup);
  modelRoot.add(wireGroup);
  modelRoot.add(dotsGroup);
  modelRoot.add(heatmapGroup);
  modelRoot.add(outlineGroup);
  modelRoot.add(laserGroup);

  // Laser Scan Plane
  const laserPlaneGeom = new THREE.PlaneGeometry(2.6, 0.024);
  const laserPlaneMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.92, side: THREE.DoubleSide });
  const laserMesh = new THREE.Mesh(laserPlaneGeom, laserPlaneMat);
  laserGroup.add(laserMesh);

  // =========================================================================
  // 4. LOAD & CONVERT USER'S 3D CHAIR MODEL (OBJ)
  // =========================================================================

  // True Solid Industrial Slate-Gray Materials (Zero White Wash-Out)
  const shellMat = new THREE.MeshStandardMaterial({
    color: 0x556070, // Medium slate gray (solid, opaque)
    metalness: 0.28,
    roughness: 0.40,
    side: THREE.DoubleSide
  });

  const legsMat = new THREE.MeshStandardMaterial({
    color: 0x334155, // Satin gunmetal
    metalness: 0.65,
    roughness: 0.28,
    side: THREE.DoubleSide
  });

  const feetMat = new THREE.MeshStandardMaterial({
    color: 0x181D26, // Deep graphite charcoal
    metalness: 0.20,
    roughness: 0.65,
    side: THREE.DoubleSide
  });

  const wireMat = new THREE.MeshBasicMaterial({ color: 0x0F172A, wireframe: true });
  const wireBaseMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7, metalness: 0.1, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
  const edgeLineMat = new THREE.LineBasicMaterial({ color: 0x0F172A, linewidth: 2 });

  const loader = new OBJLoader();

  function processLoadedObject(rawObj) {
    // 1. Orient Model: Z is UP in original OBJ file -> rotate around X by -90 deg
    rawObj.rotation.x = -Math.PI / 2;
    rawObj.updateMatrixWorld(true);

    // 2. Measure & Scale: Normalize model height to 2.2 units
    const bbox = new THREE.Box3().setFromObject(rawObj);
    const size = bbox.getSize(new THREE.Vector3());
    const center = bbox.getCenter(new THREE.Vector3());

    const targetHeight = 2.2;
    const scaleFactor = targetHeight / (size.y || 1);

    // Container centered at origin
    const centeredHolder = new THREE.Group();
    centeredHolder.scale.setScalar(scaleFactor);
    // Center X & Z, place feet at y = -1.12
    centeredHolder.position.x = -center.x * scaleFactor;
    centeredHolder.position.y = -center.y * scaleFactor;
    centeredHolder.position.z = -center.z * scaleFactor;
    centeredHolder.add(rawObj);

    // 3. Assemble Representation Modes
    const sampledPoints = [];
    const heatmapColors = [];

    rawObj.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const isLegs = child.name && (child.name.startsWith('Line002') || child.name.startsWith('Line003') || child.name.startsWith('Line004') || child.name.startsWith('Line005'));
      const isFeet = child.name && (child.name.startsWith('Line006') || child.name.startsWith('Line007') || child.name.startsWith('Line008') || child.name.startsWith('Line009'));

      // Solid Material
      if (isFeet) {
        child.material = feetMat;
      } else if (isLegs) {
        child.material = legsMat;
      } else {
        child.material = shellMat;
      }

      // Sample Points for Point Cloud & Heatmap
      const pos = child.geometry.attributes.position;
      const step = 8; // Optimal density (~8,000 pts)
      for (let i = 0; i < pos.count; i += step) {
        const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
        v.applyMatrix4(child.matrixWorld);
        // Normalized elevation for grayscale deviation colormap
        const normY = Math.max(0, Math.min(1, (v.y - bbox.min.y) / size.y));
        const val = 0.20 + normY * 0.65;

        // Apply scaling & centering to points
        const px = (v.x - center.x) * scaleFactor;
        const py = (v.y - center.y) * scaleFactor;
        const pz = (v.z - center.z) * scaleFactor;

        sampledPoints.push(px, py, pz);
        heatmapColors.push(val, val, val);
      }
    });

    // A. SOLID GROUP
    solidGroup.add(centeredHolder);

    // B. LASER SCAN GROUP
    laserGroup.add(centeredHolder.clone());

    // C. WIREFRAME GROUP
    const wireClone = centeredHolder.clone();
    wireClone.traverse((child) => {
      if (child.isMesh) {
        child.material = wireBaseMat;
        const wMesh = new THREE.Mesh(child.geometry, wireMat);
        child.add(wMesh);
      }
    });
    wireGroup.add(wireClone);

    // D. CAD OUTLINE GROUP
    const outlineHolder = new THREE.Group();
    outlineHolder.scale.setScalar(scaleFactor);
    outlineHolder.position.copy(centeredHolder.position);
    rawObj.traverse((child) => {
      if (child.isMesh) {
        const edges = new THREE.EdgesGeometry(child.geometry, 24);
        const line = new THREE.LineSegments(edges, edgeLineMat);
        line.position.copy(child.position);
        line.rotation.copy(child.rotation);
        line.scale.copy(child.scale);
        outlineHolder.add(line);
      }
    });
    outlineGroup.add(outlineHolder);

    // E. POINT CLOUD & HEATMAP
    const ptsGeom = new THREE.BufferGeometry();
    ptsGeom.setAttribute('position', new THREE.Float32BufferAttribute(sampledPoints, 3));

    const dotsMat = new THREE.PointsMaterial({ color: 0x94A3B8, size: 0.038, sizeAttenuation: true });
    dotsGroup.add(new THREE.Points(ptsGeom, dotsMat));

    const heatmapGeom = ptsGeom.clone();
    heatmapGeom.setAttribute('color', new THREE.Float32BufferAttribute(heatmapColors, 3));
    const heatmapMat = new THREE.PointsMaterial({ vertexColors: true, size: 0.040, sizeAttenuation: true });
    heatmapGroup.add(new THREE.Points(heatmapGeom, heatmapMat));

    // Refresh current active mode visibility
    setMode(currentMode);
  }

  // Load OBJ with fallback to public path
  loader.load(
    chairObjUrl,
    (obj) => {
      processLoadedObject(obj);
    },
    undefined,
    () => {
      // Fallback
      loader.load('/models/chair.obj', (fallbackObj) => {
        processLoadedObject(fallbackObj);
      });
    }
  );

  // =========================================================================
  // 5. FORM REPRESENTATION SWITCHER & CONTROLS
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
    modelRoot.rotation.y += deltaX * 0.008;
    modelRoot.rotation.x = Math.max(-0.4, Math.min(0.6, modelRoot.rotation.x + deltaY * 0.008));
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
      modelRoot.rotation.y += 0.004;
    }

    if (laserGroup.visible) {
      laserY += 0.015 * laserDir;
      if (laserY > 1.25) { laserY = 1.25; laserDir = -1; }
      if (laserY < -1.15) { laserY = -1.15; laserDir = 1; }
      laserMesh.position.y = laserY;
    }

    renderer.render(scene, camera);
  }

  setMode('solid');
  animate();
}
