import * as THREE from 'three';

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

        <!-- 3D Comparison Slider Card -->
        <div class="slider-wrapper bento-card spectrum-top" style="padding:0;">
          <div class="slider-container" id="slider-container" role="region" aria-label="Interactive 3D Scan vs CAD comparison slider">
            
            <!-- Three.js Dual-Scene WebGL Mount -->
            <div id="comparison-three-mount" class="slider-three-mount"></div>

            <!-- Left Telemetry Badge: Point Cloud -->
            <div class="layer-badge badge-left mono" style="pointer-events: none; z-index: 15;">
              <span class="status-dot dot-cyan"></span>
              <span>RAW POINT CLOUD (.E57 / 2.4M PTS)</span>
            </div>

            <!-- Right Telemetry Badge: Parametric CAD -->
            <div class="layer-badge badge-right mono" style="pointer-events: none; z-index: 15;">
              <span class="status-dot dot-green"></span>
              <span>PARAMETRIC SOLID CAD (.STEP / LOD 500)</span>
            </div>

            <!-- CAD Dimension Callout Tag -->
            <div class="slider-dimension-tag mono" id="slider-dim-tag">
              <span>H: 340.00mm &plusmn;0.020</span>
            </div>

            <!-- Bottom Interaction Telemetry Hint -->
            <div class="slider-hint-overlay mono" aria-hidden="true">
              &bull; DRAG DIVIDER TO COMPARE &bull; DRAG TO ORBIT 3D MODEL &bull;
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
  const mount = document.getElementById('comparison-three-mount');
  const handle = document.getElementById('slider-handle');
  if (!container || !mount || !handle) return;

  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = container.clientWidth || 800;
  let height = container.clientHeight || 520;
  let sliderPercent = 0.50; // 50% split by default

  // 1. Renderer Setup with Scissor Test Support
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  mount.innerHTML = '';
  mount.appendChild(renderer.domElement);

  // 2. Shared Perspective Camera (Framed with generous vertical breathing room)
  const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
  camera.position.set(0, -0.02, 5.4);

  // 3. Two Synchronized 3D Scenes
  const scenePointCloud = new THREE.Scene();
  scenePointCloud.background = new THREE.Color(0x090D14);

  const sceneCad = new THREE.Scene();
  sceneCad.background = new THREE.Color(0x090D14);

  // Studio Lighting for Parametric CAD Scene
  const cadAmbient = new THREE.AmbientLight(0xffffff, 0.75);
  sceneCad.add(cadAmbient);

  const cadKey = new THREE.DirectionalLight(0xffffff, 2.2);
  cadKey.position.set(3.5, 4.5, 3.2);
  cadKey.castShadow = true;
  sceneCad.add(cadKey);

  const cadFill = new THREE.DirectionalLight(0x94a3b8, 0.7);
  cadFill.position.set(-3.5, 1.2, 2.0);
  sceneCad.add(cadFill);

  const cadRim = new THREE.DirectionalLight(0x38bdf8, 1.4);
  cadRim.position.set(0, 3.2, -3.2);
  sceneCad.add(cadRim);

  // 3D Laser Coordinate Floor Grids
  const pGrid = new THREE.GridHelper(3.8, 24, 0x0284c7, 0x1e293b);
  pGrid.position.y = -1.25;
  scenePointCloud.add(pGrid);

  const cGrid = new THREE.GridHelper(3.8, 24, 0x10b981, 0x1e293b);
  cGrid.position.y = -1.25;
  sceneCad.add(cGrid);

  // Shared Orbit Rotation Roots
  const rootPointCloud = new THREE.Group();
  scenePointCloud.add(rootPointCloud);

  const rootCad = new THREE.Group();
  sceneCad.add(rootCad);

  // =========================================================================
  // 4. GENERATE WATERTIGHT HIGH-POLYGON 3D TROPHY GEOMETRY
  // =========================================================================
  const NUM_STAR_POINTS = 5;

  function getChamferedStarLoop(y, rOut, rIn) {
    const pts = [];
    const chamferAng = 0.085;
    const rBevel = rOut * 0.95;
    for (let k = 0; k < NUM_STAR_POINTS; k++) {
      const aTip = (k * 2 * Math.PI) / NUM_STAR_POINTS + Math.PI / 2;
      pts.push(new THREE.Vector3(Math.cos(aTip - chamferAng) * rBevel, y, Math.sin(aTip - chamferAng) * rBevel));
      pts.push(new THREE.Vector3(Math.cos(aTip) * rOut, y, Math.sin(aTip) * rOut));
      pts.push(new THREE.Vector3(Math.cos(aTip + chamferAng) * rBevel, y, Math.sin(aTip + chamferAng) * rBevel));
      const aVal = ((k + 0.5) * 2 * Math.PI) / NUM_STAR_POINTS + Math.PI / 2;
      pts.push(new THREE.Vector3(Math.cos(aVal) * rIn, y, Math.sin(aVal) * rIn));
    }
    return pts; // 20 vertices
  }

  const starLevels = [
    { y: -0.65, rOut: 0.18, rIn: 0.11 },
    { y: -0.52, rOut: 0.17, rIn: 0.11 },
    { y: -0.32, rOut: 0.19, rIn: 0.12 },
    { y: -0.10, rOut: 0.22, rIn: 0.14 },
    { y: 0.12,  rOut: 0.26, rIn: 0.17 },
    { y: 0.35,  rOut: 0.31, rIn: 0.20 },
    { y: 0.55,  rOut: 0.36, rIn: 0.23 },
    { y: 0.72,  rOut: 0.42, rIn: 0.27 },
    { y: 0.86,  rOut: 0.47, rIn: 0.30 },
    { y: 0.94,  rOut: 0.50, rIn: 0.32 },
    { y: 0.97,  rOut: 0.48, rIn: 0.30 }
  ];

  const ringsOfStar = starLevels.map(lvl => getChamferedStarLoop(lvl.y, lvl.rOut, lvl.rIn));
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

      const nA = new THREE.Vector3().crossVectors(new THREE.Vector3().subVectors(v1, v0), new THREE.Vector3().subVectors(v2, v0)).normalize();
      const baseIdx = starVerts.length / 3;
      starVerts.push(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
      starNormals.push(nA.x, nA.y, nA.z, nA.x, nA.y, nA.z, nA.x, nA.y, nA.z);
      starIndices.push(baseIdx, baseIdx + 1, baseIdx + 2);

      const nB = new THREE.Vector3().crossVectors(new THREE.Vector3().subVectors(v2, v0), new THREE.Vector3().subVectors(v3, v0)).normalize();
      starVerts.push(v0.x, v0.y, v0.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z);
      starNormals.push(nB.x, nB.y, nB.z, nB.x, nB.y, nB.z, nB.x, nB.y, nB.z);
      starIndices.push(baseIdx + 3, baseIdx + 4, baseIdx + 5);
    }
  }

  // Solid Watertight Top Deck Cap
  const topRim = ringsOfStar[ringsOfStar.length - 1];
  const topCapCenter = new THREE.Vector3(0, 0.97, 0);
  const tBaseIdx = starVerts.length / 3;
  for (let i = 0; i < PTS_COUNT; i++) {
    const nextI = (i + 1) % PTS_COUNT;
    starVerts.push(topCapCenter.x, topCapCenter.y, topCapCenter.z, topRim[nextI].x, topRim[nextI].y, topRim[nextI].z, topRim[i].x, topRim[i].y, topRim[i].z);
    starNormals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    starIndices.push(tBaseIdx + i * 3, tBaseIdx + i * 3 + 1, tBaseIdx + i * 3 + 2);
  }

  // Solid Bottom Root Cap
  const bottomRim = ringsOfStar[0];
  const bCenter = new THREE.Vector3(0, -0.65, 0);
  const bBaseIdx = starVerts.length / 3;
  for (let i = 0; i < PTS_COUNT; i++) {
    const nextI = (i + 1) % PTS_COUNT;
    starVerts.push(bCenter.x, bCenter.y, bCenter.z, bottomRim[i].x, bottomRim[i].y, bottomRim[i].z, bottomRim[nextI].x, bottomRim[nextI].y, bottomRim[nextI].z);
    starNormals.push(0, -1, 0, 0, -1, 0, 0, -1, 0);
    starIndices.push(bBaseIdx + i * 3, bBaseIdx + i * 3 + 1, bBaseIdx + i * 3 + 2);
  }

  const starGeom = new THREE.BufferGeometry();
  starGeom.setAttribute('position', new THREE.Float32BufferAttribute(starVerts, 3));
  starGeom.setAttribute('normal', new THREE.Float32BufferAttribute(starNormals, 3));
  starGeom.setIndex(starIndices);

  // Top Ball & Mount
  const ballMountGeom = new THREE.CylinderGeometry(0.12, 0.16, 0.06, 32);
  ballMountGeom.translate(0, 1.0, 0);

  const BALL_RADIUS = 0.22;
  const BALL_CENTER_Y = 1.18;
  const ballGeom = new THREE.SphereGeometry(BALL_RADIUS, 36, 28);
  ballGeom.translate(0, BALL_CENTER_Y, 0);

  const seamCurvePts = [];
  for (let t = 0; t <= Math.PI * 2; t += 0.04) {
    const sx = BALL_RADIUS * 1.004 * Math.cos(t);
    const sy = BALL_CENTER_Y + BALL_RADIUS * 1.004 * Math.sin(t) * 0.74;
    const sz = BALL_RADIUS * 1.004 * Math.sin(2 * t) * 0.46;
    seamCurvePts.push(new THREE.Vector3(sx, sy, sz));
  }
  const seamCurve = new THREE.CatmullRomCurve3(seamCurvePts, true);
  const seamTubeGeom = new THREE.TubeGeometry(seamCurve, 72, 0.009, 8, true);

  // Pedestal Base Parts
  const collarRingGeom = new THREE.TorusGeometry(0.20, 0.018, 16, 36);
  collarRingGeom.rotateX(Math.PI / 2);
  collarRingGeom.translate(0, -0.65, 0);

  const upperPlinthGeom = new THREE.CylinderGeometry(0.32, 0.36, 0.06, 36);
  upperPlinthGeom.translate(0, -0.70, 0);

  const baseGeom = new THREE.CylinderGeometry(0.36, 0.54, 0.38, 36);
  baseGeom.translate(0, -0.91, 0);

  const grooveRingGeom = new THREE.CylinderGeometry(0.53, 0.53, 0.024, 36);
  grooveRingGeom.translate(0, -1.11, 0);

  const plinthGeom = new THREE.CylinderGeometry(0.59, 0.62, 0.08, 36);
  plinthGeom.translate(0, -1.16, 0);

  const plaqueGeom = new THREE.BoxGeometry(0.44, 0.18, 0.020);
  plaqueGeom.rotateX(-0.19);
  plaqueGeom.translate(0, -0.89, 0.47);

  // =========================================================================
  // 5. ASSEMBLE SCENE 1: RAW POINT CLOUD (.E57 Reality Capture)
  // =========================================================================
  const samplePoints = [];
  function sampleMesh(geom, step = 1) {
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i += step) {
      samplePoints.push(pos.getX(i), pos.getY(i), pos.getZ(i));
    }
  }

  sampleMesh(starGeom, 1);
  sampleMesh(ballGeom, 1);
  sampleMesh(ballMountGeom, 1);
  sampleMesh(baseGeom, 2);
  sampleMesh(plinthGeom, 2);

  const ptsGeom = new THREE.BufferGeometry();
  ptsGeom.setAttribute('position', new THREE.Float32BufferAttribute(samplePoints, 3));
  const ptsMat = new THREE.PointsMaterial({ color: 0x00d2ff, size: 0.038, sizeAttenuation: true });
  const pointsMesh = new THREE.Points(ptsGeom, ptsMat);
  rootPointCloud.add(pointsMesh);

  // Dynamic Cyan Laser Scan Sweep Plane
  const laserPlaneGeom = new THREE.PlaneGeometry(2.2, 0.024);
  const laserPlaneMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const laserMesh = new THREE.Mesh(laserPlaneGeom, laserPlaneMat);
  rootPointCloud.add(laserMesh);

  // =========================================================================
  // 6. ASSEMBLE SCENE 2: PARAMETRIC SOLID CAD (.STEP LOD 500)
  // =========================================================================
  const cadShaftMat = new THREE.MeshStandardMaterial({ color: 0x556070, metalness: 0.28, roughness: 0.42, flatShading: true });
  const cadBallMat = new THREE.MeshStandardMaterial({ color: 0x6E7B8C, metalness: 0.35, roughness: 0.35 });
  const cadMountMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.30, roughness: 0.40 });
  const cadBaseMat = new THREE.MeshStandardMaterial({ color: 0x1E232A, metalness: 0.15, roughness: 0.52 });
  const cadPlinthMat = new THREE.MeshStandardMaterial({ color: 0x13171D, metalness: 0.30, roughness: 0.46 });
  const cadSeamMat = new THREE.MeshStandardMaterial({ color: 0x1E242B, metalness: 0.20, roughness: 0.60 });

  rootCad.add(new THREE.Mesh(starGeom, cadShaftMat));
  rootCad.add(new THREE.Mesh(ballMountGeom, cadMountMat));
  rootCad.add(new THREE.Mesh(ballGeom, cadBallMat));
  rootCad.add(new THREE.Mesh(seamTubeGeom, cadSeamMat));
  rootCad.add(new THREE.Mesh(collarRingGeom, cadShaftMat));
  rootCad.add(new THREE.Mesh(upperPlinthGeom, cadBaseMat));
  rootCad.add(new THREE.Mesh(baseGeom, cadBaseMat));
  rootCad.add(new THREE.Mesh(grooveRingGeom, cadPlinthMat));
  rootCad.add(new THREE.Mesh(plinthGeom, cadPlinthMat));
  rootCad.add(new THREE.Mesh(plaqueGeom, cadShaftMat));

  // High-Precision CAD Feature Edge Lines (Parametric Engineering Wireframe)
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x10B981, linewidth: 2 });
  rootCad.add(new THREE.LineSegments(new THREE.EdgesGeometry(starGeom, 16), edgeMat));
  rootCad.add(new THREE.LineSegments(new THREE.EdgesGeometry(baseGeom, 22), edgeMat));
  rootCad.add(new THREE.LineSegments(new THREE.EdgesGeometry(plinthGeom, 22), edgeMat));
  rootCad.add(new THREE.LineSegments(new THREE.WireframeGeometry(ballGeom), new THREE.LineBasicMaterial({ color: 0x10B981, transparent: true, opacity: 0.25 })));

  // 3D Parametric CAD Dimension Bracket Line
  const dimPts = [
    new THREE.Vector3(0.58, 1.18, 0),
    new THREE.Vector3(0.72, 1.18, 0),
    new THREE.Vector3(0.70, 1.18, 0),
    new THREE.Vector3(0.70, -1.16, 0),
    new THREE.Vector3(0.72, -1.16, 0),
    new THREE.Vector3(0.64, -1.16, 0)
  ];
  const dimGeom = new THREE.BufferGeometry().setFromPoints(dimPts);
  const dimMat = new THREE.LineBasicMaterial({ color: 0x10B981, linewidth: 2 });
  rootCad.add(new THREE.LineSegments(dimGeom, dimMat));

  // =========================================================================
  // 7. INTERACTION: DIVIDER SLIDING + 3D ORBIT ROTATION
  // =========================================================================
  let isSliding = false;
  let isDraggingOrbit = false;
  let prevMousePos = { x: 0, y: 0 };
  let trophyRotation = { x: 0, y: 0 };

  function updateSlider(percent) {
    sliderPercent = Math.max(0.01, Math.min(0.99, percent));
    handle.style.left = `${sliderPercent * 100}%`;
    handle.setAttribute('aria-valuenow', Math.round(sliderPercent * 100));
  }

  function handleSliderMove(clientX) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const p = x / rect.width;
    updateSlider(p);
  }

  // Handle Dragging
  handle.addEventListener('pointerdown', (e) => {
    isSliding = true;
    handle.setPointerCapture(e.pointerId);
    e.stopPropagation();
  });

  handle.addEventListener('pointermove', (e) => {
    if (!isSliding) return;
    handleSliderMove(e.clientX);
    e.stopPropagation();
  });

  handle.addEventListener('pointerup', (e) => {
    isSliding = false;
    try { handle.releasePointerCapture(e.pointerId); } catch (_) {}
    e.stopPropagation();
  });

  // Canvas Orbit Rotation Dragging
  mount.addEventListener('pointerdown', (e) => {
    isDraggingOrbit = true;
    prevMousePos = { x: e.clientX, y: e.clientY };
    mount.setPointerCapture(e.pointerId);
  });

  mount.addEventListener('pointermove', (e) => {
    if (!isDraggingOrbit) return;
    const dx = e.clientX - prevMousePos.x;
    const dy = e.clientY - prevMousePos.y;
    trophyRotation.y += dx * 0.008;
    trophyRotation.x = Math.max(-0.4, Math.min(0.6, trophyRotation.x + dy * 0.008));
    prevMousePos = { x: e.clientX, y: e.clientY };
  });

  mount.addEventListener('pointerup', (e) => {
    isDraggingOrbit = false;
    try { mount.releasePointerCapture(e.pointerId); } catch (_) {}
  });

  // Keyboard navigation for slider accessibility
  handle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      updateSlider(sliderPercent - 0.05);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      updateSlider(sliderPercent + 0.05);
      e.preventDefault();
    }
  });

  // Responsive Window Resize
  function handleResize() {
    width = container.clientWidth || 800;
    height = container.clientHeight || 520;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener('resize', handleResize);

  // =========================================================================
  // 8. RENDER LOOP WITH HARDWARE WEBGL SCISSOR COMPARISON
  // =========================================================================
  let laserY = -1.0;
  let laserDir = 1;

  function animate() {
    requestAnimationFrame(animate);

    if (!isDraggingOrbit && !RM) {
      trophyRotation.y += 0.004;
    }

    rootPointCloud.rotation.y = trophyRotation.y;
    rootPointCloud.rotation.x = trophyRotation.x;
    rootCad.rotation.y = trophyRotation.y;
    rootCad.rotation.x = trophyRotation.x;

    // Laser plane scan animation
    laserY += 0.015 * laserDir;
    if (laserY > 1.35) { laserY = 1.35; laserDir = -1; }
    if (laserY < -1.15) { laserY = -1.15; laserDir = 1; }
    laserMesh.position.y = laserY;

    const w = container.clientWidth || width;
    const h = container.clientHeight || height;
    const splitX = Math.floor(w * sliderPercent);

    renderer.autoClear = false;
    renderer.clear();
    renderer.setScissorTest(true);

    // 1. Render Left Side: Raw Reality Point Cloud
    renderer.setScissor(0, 0, splitX, h);
    renderer.setViewport(0, 0, w, h);
    renderer.render(scenePointCloud, camera);

    // 2. Render Right Side: Parametric Reconstructed CAD Solid
    renderer.setScissor(splitX, 0, w - splitX, h);
    renderer.setViewport(0, 0, w, h);
    renderer.render(sceneCad, camera);

    renderer.setScissorTest(false);
  }

  updateSlider(0.50);
  animate();
}
