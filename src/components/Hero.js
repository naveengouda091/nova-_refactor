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

          <!-- Right: Precision 3D CAD Viewport -->
          <div class="hero-cad-col">
            <div class="cad-viewport-wrapper">
              
              <!-- Main CAD Viewport Card Container -->
              <div class="cad-viewport-card bento-card">
                
                <!-- Top Viewport Header Bar -->
                <div class="viewport-header-bar mono text-xs">
                  <div class="header-left">
                    <span class="text-laser font-bold">ASSET //</span>
                    <span class="text-high font-bold">CHAIR_03.OBJ</span>
                  </div>
                  <div class="header-right">
                    <span class="status-dot dot-green" aria-hidden="true"></span>
                    <span class="font-bold text-pass">TOL: &plusmn;0.020mm</span>
                  </div>
                </div>

                <!-- Three.js 3D Viewport Container -->
                <div class="pillar-canvas-container" id="trophy-viewport-parent">
                  <div id="trophy-three-mount" class="w-full h-full"></div>
                  <div class="canvas-drag-hint mono" aria-hidden="true">&bull; DRAG TO ORBIT 3D MODEL &bull;</div>
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

  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scene, Camera, Renderer Setup
  const scene = new THREE.Scene();
  const width = mount.clientWidth || 480;
  const height = mount.clientHeight || 420;

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

  // 2. High-Precision Studio Reflection Map
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

  // 3. Studio Directional & Ambient Lighting (Engineered for Precision CAD Gray)
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

  // =========================================================================
  // 4. LOAD & RENDER 3D MODEL
  // =========================================================================

  // Industrial Slate-Gray Materials (Zero White Wash-Out, Crisp Facet Definition)
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
    centeredHolder.position.x = -center.x * scaleFactor;
    centeredHolder.position.y = -center.y * scaleFactor;
    centeredHolder.position.z = -center.z * scaleFactor;
    centeredHolder.add(rawObj);

    // 3. Apply Materials
    rawObj.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const isLegs = child.name && (child.name.startsWith('Line002') || child.name.startsWith('Line003') || child.name.startsWith('Line004') || child.name.startsWith('Line005'));
      const isFeet = child.name && (child.name.startsWith('Line006') || child.name.startsWith('Line007') || child.name.startsWith('Line008') || child.name.startsWith('Line009'));

      if (isFeet) {
        child.material = feetMat;
      } else if (isLegs) {
        child.material = legsMat;
      } else {
        child.material = shellMat;
      }
    });

    modelRoot.add(centeredHolder);
  }

  // Load OBJ with fallback to public path
  loader.load(
    chairObjUrl,
    (obj) => {
      processLoadedObject(obj);
    },
    undefined,
    () => {
      loader.load('/models/chair.obj', (fallbackObj) => {
        processLoadedObject(fallbackObj);
      });
    }
  );

  // =========================================================================
  // 5. INTERACTION & ANIMATION LOOP
  // =========================================================================
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
    const h = mount.clientHeight || 420;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', handleResize);

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    if (!isDragging && !RM) {
      modelRoot.rotation.y += 0.004;
    }

    renderer.render(scene, camera);
  }

  animate();
}
