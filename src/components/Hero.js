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

          <!-- Right: Interactive 5-Stage Metrology Flange Canvas -->
          <div class="hero-visual-col">
            <div class="hero-collage-wrap">
              
              <!-- Floating Callout Badges (Positioned with safe bounds & z-index) -->
              <div class="floating-badge badge-float-safe-1" aria-label="Tolerance metric">
                <span class="status-dot dot-green" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">&plusmn;0.02mm Tolerance</span>
              </div>

              <div class="floating-badge badge-float-safe-2" aria-label="Point density metric">
                <span class="status-dot dot-cyan" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">2.4M Pts / Sec</span>
              </div>

              <div class="floating-badge badge-float-safe-3" aria-label="BIM compatibility metric">
                <span class="status-dot dot-blue" aria-hidden="true"></span>
                <span class="mono text-xs font-bold">BIM LOD 500 Ready</span>
              </div>

              <!-- Main Interactive Metrology Progression Card -->
              <div class="metrology-stage-card bento-card">
                
                <!-- Stage Header Readout -->
                <div class="stage-header">
                  <div class="stage-indicator mono">
                    <span class="text-laser font-bold" id="stage-num-label">STAGE 01</span>
                    <span class="text-muted">/</span>
                    <span class="text-high font-bold" id="stage-name-label">PHYSICAL PART</span>
                  </div>
                  <div class="stage-telemetry mono text-xs" id="stage-telemetry-badge">
                    TOLERANCE: ASME Y14.5M
                  </div>
                </div>

                <!-- 5-Stage Flange Canvas -->
                <div class="flange-canvas-box">
                  <canvas id="hero-flange-canvas" width="440" height="280" aria-label="Interactive 5-stage metrology flange visualization"></canvas>
                  
                  <!-- Deviation Colormap Scale Bar (Visible on Stage 5) -->
                  <div class="flange-scale-bar-overlay" id="flange-scale-bar" style="display:none;" aria-hidden="true">
                    <div class="scale-labels mono text-xs">
                      <span>-0.20mm</span>
                      <span class="text-pass">0.00mm</span>
                      <span>+0.20mm</span>
                    </div>
                    <div class="spectrum-bar"></div>
                  </div>
                </div>

                <!-- Stage Selector Navigation Pills -->
                <div class="stage-pills-bar" role="tablist" aria-label="Metrology Progression Stages">
                  <button class="stage-pill-btn active" data-stage="0" role="tab" aria-selected="true" title="Physical Part">
                    <span class="mono">01</span> Part
                  </button>
                  <button class="stage-pill-btn" data-stage="1" role="tab" aria-selected="false" title="Laser Scanning">
                    <span class="mono">02</span> Laser
                  </button>
                  <button class="stage-pill-btn" data-stage="2" role="tab" aria-selected="false" title="Raw Point Cloud">
                    <span class="mono">03</span> Cloud
                  </button>
                  <button class="stage-pill-btn" data-stage="3" role="tab" aria-selected="false" title="Parametric CAD">
                    <span class="mono">04</span> CAD
                  </button>
                  <button class="stage-pill-btn" data-stage="4" role="tab" aria-selected="false" title="Deviation Colormap">
                    <span class="mono">05</span> Heatmap
                  </button>
                  <button id="stage-play-pause-btn" class="stage-pill-btn auto-toggle" aria-label="Toggle Auto-Cycle">
                    <svg id="stage-play-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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

  const stageNumLabel = document.getElementById('stage-num-label');
  const stageNameLabel = document.getElementById('stage-name-label');
  const stageTeleBadge = document.getElementById('stage-telemetry-badge');
  const scaleBar = document.getElementById('flange-scale-bar');
  const pills = document.querySelectorAll('.stage-pill-btn[data-stage]');
  const playBtn = document.getElementById('stage-play-pause-btn');

  let currentStage = 0; // 0: Part, 1: Laser, 2: Point Cloud, 3: CAD, 4: Heatmap
  let autoCycle = !RM;
  let cycleTimer = null;
  let laserX = 40;
  let laserDir = 1;
  let animFrameId = null;

  const stageMeta = [
    { num: 'STAGE 01', name: 'PHYSICAL PART', tele: 'MACHINED ALLOY STEEL' },
    { num: 'STAGE 02', name: 'LASER SCANNING', tele: 'BLUE LIGHT 450nm SWEEP' },
    { num: 'STAGE 03', name: 'RAW POINT CLOUD', tele: '2,400,000 PTS / SEC' },
    { num: 'STAGE 04', name: 'PARAMETRIC CAD', tele: 'NURBS &bull; &Oslash; 170.00 &plusmn;0.02' },
    { num: 'STAGE 05', name: 'DEVIATION HEATMAP', tele: 'NOMINAL PASS &bull; &plusmn;0.018mm' }
  ];

  let width = 0;
  let height = 0;
  let dpr = 1;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.width = rect.width * dpr;
    height = canvas.height = (rect.height || 260) * dpr;
  }

  // Precomputed flange geometry points for isometric projection
  const flangeRadius = 110;
  const hubRadius = 60;
  const boreRadius = 32;
  const boltCircleRad = 85;
  const boltCount = 6;
  const cx = 220;
  const cy = 135;

  // Cloud dots for Stage 3
  const cloudDots = [];
  for (let i = 0; i < 380; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * (flangeRadius - boreRadius) + boreRadius;
    const px = cx + Math.cos(angle) * r;
    const py = cy + Math.sin(angle) * (r * 0.58) + (Math.random() - 0.5) * 6;
    const dev = (Math.random() - 0.5) * 0.3; // deviation
    cloudDots.push({ x: px, y: py, dev });
  }

  function setStage(index) {
    currentStage = index % 5;
    pills.forEach((p, i) => {
      p.classList.toggle('active', i === currentStage);
      p.setAttribute('aria-selected', String(i === currentStage));
    });

    if (stageNumLabel) stageNumLabel.textContent = stageMeta[currentStage].num;
    if (stageNameLabel) stageNameLabel.textContent = stageMeta[currentStage].name;
    if (stageTeleBadge) stageTeleBadge.innerHTML = stageMeta[currentStage].tele;

    if (scaleBar) {
      scaleBar.style.display = currentStage === 4 ? 'block' : 'none';
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const s = dpr;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)';
    const baseMetalStroke = isDark ? '#E2E8F0' : '#1E293B';

    // 1. Engineering coordinate background grid
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1 * s;
    for (let x = 20; x < 440; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x * s, 0);
      ctx.lineTo(x * s, 260 * s);
      ctx.stroke();
    }
    for (let y = 20; y < 260; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y * s);
      ctx.lineTo(440 * s, y * s);
      ctx.stroke();
    }

    ctx.save();
    ctx.scale(s, s);

    // Render based on currentStage:
    if (currentStage === 0) {
      // STAGE 01: Physical Part (Shaded Metallic Isometric Flange)
      const grad = ctx.createLinearGradient(cx - 100, cy - 60, cx + 100, cy + 60);
      grad.addColorStop(0, isDark ? '#2D3748' : '#E2E8F0');
      grad.addColorStop(0.5, isDark ? '#4A5568' : '#CBD5E1');
      grad.addColorStop(1, isDark ? '#1A202C' : '#94A3B8');

      // Outer rim
      ctx.fillStyle = grad;
      ctx.strokeStyle = baseMetalStroke;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, flangeRadius, flangeRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Lower flange thickness bevel
      ctx.beginPath();
      ctx.ellipse(cx, cy + 18, flangeRadius, flangeRadius * 0.58, 0, 0, Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - flangeRadius, cy);
      ctx.lineTo(cx - flangeRadius, cy + 18);
      ctx.moveTo(cx + flangeRadius, cy);
      ctx.lineTo(cx + flangeRadius, cy + 18);
      ctx.stroke();

      // Hub boss
      ctx.fillStyle = isDark ? '#374151' : '#F1F5F9';
      ctx.beginPath();
      ctx.ellipse(cx, cy - 8, hubRadius, hubRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Central Bore
      ctx.fillStyle = isDark ? '#111827' : '#64748B';
      ctx.beginPath();
      ctx.ellipse(cx, cy - 8, boreRadius, boreRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Bolt holes
      for (let i = 0; i < boltCount; i++) {
        const a = (i / boltCount) * Math.PI * 2;
        const bx = cx + Math.cos(a) * boltCircleRad;
        const by = cy + Math.sin(a) * (boltCircleRad * 0.58);
        ctx.fillStyle = isDark ? '#111827' : '#475569';
        ctx.beginPath();
        ctx.ellipse(bx, by, 7, 4.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

    } else if (currentStage === 1) {
      // STAGE 02: Laser Scanning (Active Laser Line & Scanner Beam)
      laserX += 2.2 * laserDir;
      if (laserX > 370) laserDir = -1;
      if (laserX < 70) laserDir = 1;

      // Base part silhouette
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy, flangeRadius, flangeRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy - 8, hubRadius, hubRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Scanner Origin Head at top
      const scanHeadX = 220;
      const scanHeadY = 28;
      ctx.fillStyle = '#0284C7';
      ctx.beginPath();
      ctx.arc(scanHeadX, scanHeadY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Laser Fan Beam (Cyan Translucent Triangle)
      ctx.fillStyle = 'rgba(2, 132, 199, 0.12)';
      ctx.beginPath();
      ctx.moveTo(scanHeadX, scanHeadY);
      ctx.lineTo(laserX - 25, 220);
      ctx.lineTo(laserX + 25, 220);
      ctx.closePath();
      ctx.fill();

      // Sharp Laser Line on Geometry
      ctx.strokeStyle = '#00D2FF';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00D2FF';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(laserX, 60);
      ctx.lineTo(laserX, 210);
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Laser Contact Pulse
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(laserX, cy, 4, 0, Math.PI * 2);
      ctx.fill();

    } else if (currentStage === 2) {
      // STAGE 03: Raw Point Cloud (Dense Colored Coordinate Dots)
      cloudDots.forEach(p => {
        ctx.fillStyle = '#0284C7';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Flange outer ring boundary in point dots
      for (let a = 0; a < Math.PI * 2; a += 0.08) {
        const px = cx + Math.cos(a) * flangeRadius + (Math.random() - 0.5) * 2;
        const py = cy + Math.sin(a) * (flangeRadius * 0.58) + (Math.random() - 0.5) * 2;
        ctx.fillStyle = '#38BDF8';
        ctx.fillRect(px, py, 1.8, 1.8);
      }

      // Scanner rays
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(220, 28);
      ctx.lineTo(cx - 60, cy);
      ctx.moveTo(220, 28);
      ctx.lineTo(cx + 60, cy);
      ctx.stroke();

    } else if (currentStage === 3) {
      // STAGE 04: Parametric CAD Wireframe with GD&T Callouts
      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, flangeRadius, flangeRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy - 8, hubRadius, hubRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(cx, cy - 8, boreRadius, boreRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Centerlines
      ctx.strokeStyle = '#64748B';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx - flangeRadius - 15, cy);
      ctx.lineTo(cx + flangeRadius + 15, cy);
      ctx.moveTo(cx, cy - (flangeRadius * 0.58) - 15);
      ctx.lineTo(cx, cy + (flangeRadius * 0.58) + 15);
      ctx.stroke();
      ctx.setLineDash([]);

      // GD&T Dimension Box & Callouts
      ctx.fillStyle = isDark ? '#1F2937' : '#FFFFFF';
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1.5;
      ctx.fillRect(cx + 65, cy - 65, 125, 24);
      ctx.strokeRect(cx + 65, cy - 65, 125, 24);

      ctx.fillStyle = isDark ? '#F9FAFB' : '#111827';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText('Ø 170.00 ±0.02', cx + 72, cy - 49);

      // Leader line
      ctx.strokeStyle = '#10B981';
      ctx.beginPath();
      ctx.moveTo(cx + 65, cy - 53);
      ctx.lineTo(cx + 45, cy - 35);
      ctx.lineTo(cx + 30, cy - 20);
      ctx.stroke();

    } else if (currentStage === 4) {
      // STAGE 05: Deviation Heatmap (Metrology Colormap)
      // Draw surface deviation points
      cloudDots.forEach(p => {
        // Colormap: green nominal (0.0), cyan (-0.1), amber (+0.1), red (+0.2)
        let col = '#10B981';
        if (p.dev < -0.08) col = '#0284C7';
        else if (p.dev > 0.12) col = '#EF4444';
        else if (p.dev > 0.05) col = '#F59E0B';

        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Outer nominal silhouette
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, flangeRadius, flangeRadius * 0.58, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Live Metrology Inspection Tag
      ctx.fillStyle = isDark ? 'rgba(16,185,129,0.15)' : 'rgba(16,185,129,0.1)';
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1;
      ctx.fillRect(20, 20, 150, 26);
      ctx.strokeRect(20, 20, 150, 26);
      ctx.fillStyle = isDark ? '#F9FAFB' : '#111827';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText('MEAN DEV: +0.012mm [PASS]', 26, 37);
    }

    ctx.restore();
    animFrameId = requestAnimationFrame(render);
  }

  // Pill tab click handling
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const stageIdx = parseInt(pill.dataset.stage, 10);
      setStage(stageIdx);
    });
  });

  // Auto-cycle timer
  function startAutoCycle() {
    if (cycleTimer) clearInterval(cycleTimer);
    cycleTimer = setInterval(() => {
      if (autoCycle) {
        setStage(currentStage + 1);
      }
    }, 3200);
  }

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      autoCycle = !autoCycle;
      playBtn.classList.toggle('active', autoCycle);
      const icon = document.getElementById('stage-play-icon');
      if (icon) {
        icon.innerHTML = autoCycle
          ? '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
          : '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      }
    });
  }

  window.addEventListener('resize', resize);
  resize();
  setStage(0);
  startAutoCycle();
  render();
}
