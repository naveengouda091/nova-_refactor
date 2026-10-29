export function Capabilities() {
  return `
    <section id="capabilities" class="capabilities-section section" aria-labelledby="capabilities-heading">
      <div class="container">
        
        <div class="section-badge-center">
          <div class="badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>END-TO-END SERVICES MATRIX</span>
          </div>
        </div>

        <h2 id="capabilities-heading" class="section-title text-center">
          Comprehensive 3D Reality Capture &amp; Digitization
        </h2>
        <p class="section-desc text-center max-w-2xl mx-auto">
          From millimeter terrestrial laser scanning to enterprise BIM conversions and drone mapping, our multi-sensor workflows deliver precision data for engineering, architectural, and heritage leaders.
        </p>

        <!-- Track Selector Tabs with Animated Pill -->
        <div class="track-tab-wrapper">
          <div class="track-tabs" role="tablist" aria-label="Capabilities Service Tracks">
            <div id="tab-pill" class="tab-pill" aria-hidden="true"></div>
            
            <button class="track-tab active" data-track="0" role="tab" aria-selected="true" id="track-btn-0">
              <span class="mono">01</span> Terrestrial Laser Scanning
            </button>
            <button class="track-tab" data-track="1" role="tab" aria-selected="false" id="track-btn-1">
              <span class="mono">02</span> Aerial Photogrammetry &amp; GIS
            </button>
            <button class="track-tab" data-track="2" role="tab" aria-selected="false" id="track-btn-2">
              <span class="mono">03</span> Scan-to-BIM &amp; Digital Twins
            </button>
            <button class="track-tab" data-track="3" role="tab" aria-selected="false" id="track-btn-3">
              <span class="mono">04</span> Metrology &amp; Reverse Engineering
            </button>
          </div>
        </div>

        <!-- Track Content Panels -->
        <div class="track-panels-container">
          
          <!-- Panel 0: Terrestrial Laser Scanning -->
          <div class="track-panel active" id="track-panel-0" role="tabpanel" aria-labelledby="track-btn-0">
            <div class="panel-grid">
              <div class="panel-info">
                <div class="panel-kicker mono text-laser">TRACK 01 &bull; GROUND-BASED REALITY CAPTURE</div>
                <h3 class="panel-heading">Millimeter-Accurate Terrestrial 3D Laser Scanning</h3>
                <p class="panel-body">
                  Capture existing conditions of industrial plants, architectural monuments, and intricate civil structures with extreme accuracy. Using high-speed phase-shift and time-of-flight LiDAR, we register billions of points into unified spatial coordinates.
                </p>

                <div class="panel-specs-grid">
                  <div class="spec-box">
                    <span class="spec-box-label mono">MEASUREMENT RANGE</span>
                    <span class="spec-box-val mono">Up to 350 meters</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">SYSTEM ACCURACY</span>
                    <span class="spec-box-val mono">&plusmn;1.0 mm @ 10m</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">CAPTURE SPEED</span>
                    <span class="spec-box-val mono">2M+ points/sec</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">PRIMARY DELIVERABLE</span>
                    <span class="spec-box-val mono">.E57, .LAS, .RCP, .PTS</span>
                  </div>
                </div>

                <div class="panel-features-list">
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Non-contact documentation of hazardous, live, or inaccessible facilities.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Full HDR spherical photography color-mapped onto point clouds.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Zero layout disruption — capture active production plants without shutdown.</span>
                  </div>
                </div>
              </div>

              <div class="panel-visual">
                <div class="technical-preview-card">
                  <div class="preview-header mono">
                    <span>SENSOR: FARO / LEICA RTC360</span>
                    <span class="text-laser">CALIBRATED</span>
                  </div>
                  <div class="preview-graphic">
                    <svg class="preview-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="240" fill="var(--bg-secondary)" rx="8"/>
                      <!-- Scan Grid Lines -->
                      <line x1="20" y1="200" x2="380" y2="200" stroke="var(--border-line)" stroke-width="1"/>
                      <line x1="20" y1="160" x2="380" y2="160" stroke="var(--border-line)" stroke-dasharray="2 4"/>
                      <line x1="20" y1="120" x2="380" y2="120" stroke="var(--border-line)" stroke-dasharray="2 4"/>
                      <!-- Scanned Architectural Structure Points -->
                      <path d="M60 200 L60 80 L160 40 L260 80 L260 200" stroke="var(--border-focus)" stroke-width="1.5" stroke-dasharray="4 4"/>
                      <rect x="90" y="110" width="40" height="50" stroke="var(--accent-pass)" stroke-width="1"/>
                      <rect x="190" y="110" width="40" height="50" stroke="var(--accent-pass)" stroke-width="1"/>
                      <!-- Scanner Origin Beam -->
                      <circle cx="320" cy="180" r="8" fill="var(--accent-laser)" fill-opacity="0.2" stroke="var(--accent-laser)" stroke-width="2"/>
                      <line x1="320" y1="180" x2="160" y2="40" stroke="var(--accent-laser)" stroke-width="1.5" stroke-opacity="0.8"/>
                      <line x1="320" y1="180" x2="60" y2="140" stroke="var(--accent-laser)" stroke-width="1" stroke-opacity="0.4"/>
                      <line x1="320" y1="180" x2="260" y2="120" stroke="var(--accent-laser)" stroke-width="1" stroke-opacity="0.4"/>
                    </svg>
                  </div>
                  <div class="preview-footer mono">
                    <span>COORDINATE REGISTRATION: &plusmn;0.8mm</span>
                    <span class="text-pass">TARGETLESS &bull; CLOUD-TO-CLOUD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Panel 1: Aerial Photogrammetry & GIS -->
          <div class="track-panel" id="track-panel-1" role="tabpanel" aria-labelledby="track-btn-1">
            <div class="panel-grid">
              <div class="panel-info">
                <div class="panel-kicker mono text-laser">TRACK 02 &bull; UAV AERIAL &amp; GEOSPATIAL</div>
                <h3 class="panel-heading">High-Resolution UAV Photogrammetry &amp; GIS Digitization</h3>
                <p class="panel-body">
                  Transform aerial photography into sub-centimeter orthomosaics, digital terrain models (DTM/DSM), and GIS databases. Ideal for large infrastructure corridors, heritage sites, mine quarry volumetric analysis, and regional master planning.
                </p>

                <div class="panel-specs-grid">
                  <div class="spec-box">
                    <span class="spec-box-label mono">GROUND SAMPLING DISTANCE</span>
                    <span class="spec-box-val mono">&lt; 1.5 cm / pixel GSD</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">GEO-REFERENCING</span>
                    <span class="spec-box-val mono">RTK / PPK GNSS Network</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">COVERAGE CAPACITY</span>
                    <span class="spec-box-val mono">Up to 250 Ha / day</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">DELIVERABLE FORMATS</span>
                    <span class="spec-box-val mono">GeoTIFF, DEM, Contours, SHP</span>
                  </div>
                </div>

                <div class="panel-features-list">
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Survey-grade ground control points (GCPs) tied to national datum.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Precise cut-and-fill volumetric earthwork calculations.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Orthophoto resolutions revealing hairline surface details.</span>
                  </div>
                </div>
              </div>

              <div class="panel-visual">
                <div class="technical-preview-card">
                  <div class="preview-header mono">
                    <span>AERIAL PLATFORM: DJI MATRICE RTK</span>
                    <span class="text-laser">PPK GEOLOCKED</span>
                  </div>
                  <div class="preview-graphic">
                    <svg class="preview-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="240" fill="var(--bg-secondary)" rx="8"/>
                      <!-- Topographic contours -->
                      <path d="M30 180 Q100 120 200 150 T370 110" stroke="var(--accent-pass)" stroke-width="1.5"/>
                      <path d="M30 140 Q110 80 210 110 T370 70" stroke="var(--border-focus)" stroke-width="1.5" stroke-dasharray="3 3"/>
                      <path d="M30 100 Q120 50 220 70 T370 40" stroke="var(--accent-warn)" stroke-width="1"/>
                      <!-- Drone path -->
                      <polyline points="50,40 120,40 120,80 200,80 200,40 280,40 280,80 350,80" stroke="var(--accent-laser)" stroke-width="1" stroke-dasharray="2 4"/>
                      <circle cx="280" cy="80" r="5" fill="var(--accent-laser)"/>
                      <!-- Elevation color ramp -->
                      <rect x="360" y="40" width="12" height="140" rx="3" fill="url(#topo-ramp)"/>
                      <defs>
                        <linearGradient id="topo-ramp" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="var(--accent-err)"/>
                          <stop offset="50%" stop-color="var(--accent-warn)"/>
                          <stop offset="100%" stop-color="var(--accent-pass)"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div class="preview-footer mono">
                    <span>ELEVATION PRECISION: &plusmn;12mm</span>
                    <span class="text-pass">DTM / DSM &bull; GIS SHAPEFILES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Panel 2: Scan-to-BIM & Digital Twins -->
          <div class="track-panel" id="track-panel-2" role="tabpanel" aria-labelledby="track-btn-2">
            <div class="panel-grid">
              <div class="panel-info">
                <div class="panel-kicker mono text-laser">TRACK 03 &bull; BIM &amp; DIGITAL TWIN MODELING</div>
                <h3 class="panel-heading">Parametric As-Built BIM Modeling (LOD 200 to 500)</h3>
                <p class="panel-body">
                  We convert raw, unstructured point cloud data into fully parametric Autodesk Revit and IFC models. Structural elements, MEP services, HVAC ducting, and architectural envelopes are modeled with exact geometric integrity, verifying design vs as-built variances.
                </p>

                <div class="panel-specs-grid">
                  <div class="spec-box">
                    <span class="spec-box-label mono">LEVEL OF DEVELOPMENT</span>
                    <span class="spec-box-val mono">LOD 200 — LOD 500</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">DISCIPLINE COVERAGE</span>
                    <span class="spec-box-val mono">Arch &bull; Structure &bull; MEP</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">CLASH RESOLUTION</span>
                    <span class="spec-box-val mono">Navisworks Matrix</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">SOFTWARE OUTPUTS</span>
                    <span class="spec-box-val mono">.RVT, .IFC, .NWD, .DWG</span>
                  </div>
                </div>

                <div class="panel-features-list">
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Intelligent families with embedded metadata and asset tags for facility management.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Full MEP clash detection prior to site fabrication or brownfield retrofits.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Direct compatibility with COBie standards and digital twin platforms.</span>
                  </div>
                </div>
              </div>

              <div class="panel-visual">
                <div class="technical-preview-card">
                  <div class="preview-header mono">
                    <span>STANDARD: AIA BIM FORUM SPEC</span>
                    <span class="text-laser">LOD 400 VERIFIED</span>
                  </div>
                  <div class="preview-graphic">
                    <svg class="preview-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="240" fill="var(--bg-secondary)" rx="8"/>
                      <!-- Wireframe Column and Ductwork -->
                      <rect x="80" y="60" width="30" height="140" stroke="var(--accent-blue)" stroke-width="1.5" fill="none"/>
                      <rect x="290" y="60" width="30" height="140" stroke="var(--accent-blue)" stroke-width="1.5" fill="none"/>
                      <!-- Horizontal Beam -->
                      <rect x="80" y="60" width="240" height="25" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                      <!-- HVAC Duct crossing -->
                      <rect x="50" y="110" width="300" height="35" stroke="var(--accent-laser)" stroke-width="2" stroke-dasharray="6 3" fill="rgba(0, 210, 255, 0.08)"/>
                      <!-- Piping Spool with Flange -->
                      <line x1="50" y1="160" x2="350" y2="160" stroke="var(--accent-pass)" stroke-width="3"/>
                      <circle cx="180" cy="160" r="8" stroke="var(--accent-pass)" stroke-width="2" fill="var(--bg-secondary)"/>
                    </svg>
                  </div>
                  <div class="preview-footer mono">
                    <span>TOLERANCE TO SCAN: &plusmn;3mm</span>
                    <span class="text-pass">CLASH-FREE BIM VERIFICATION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Panel 3: Metrology & Reverse Engineering -->
          <div class="track-panel" id="track-panel-3" role="tabpanel" aria-labelledby="track-btn-3">
            <div class="panel-grid">
              <div class="panel-info">
                <div class="panel-kicker mono text-laser">TRACK 04 &bull; INDUSTRIAL METROLOGY &amp; CAD</div>
                <h3 class="panel-heading">Precision GD&amp;T Metrology &amp; Reverse Engineering</h3>
                <p class="panel-body">
                  When OEM drawings or CAD files are missing, we scan tooling, cast components, turbine impellers, and automotive assemblies to reconstruct production-ready parametric CAD models with exact geometric dimensioning and tolerancing (GD&amp;T).
                </p>

                <div class="panel-specs-grid">
                  <div class="spec-box">
                    <span class="spec-box-label mono">OPTICAL RESOLUTION</span>
                    <span class="spec-box-val mono">Up to 0.020 mm (20&mu;m)</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">CAD MODELING</span>
                    <span class="spec-box-val mono">Parametric Solid &bull; NURBS</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">INSPECTION REPORT</span>
                    <span class="spec-box-val mono">3D Color Map &amp; GD&amp;T</span>
                  </div>
                  <div class="spec-box">
                    <span class="spec-box-label mono">EXPORT FORMATS</span>
                    <span class="spec-box-val mono">.STEP, .IGES, .X_T, SolidWorks</span>
                  </div>
                </div>

                <div class="panel-features-list">
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Full 3D deviation inspection comparing manufactured part against nominal CAD.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Class-A surface modeling for aerodynamic, tooling, and injection mold reproduction.</span>
                  </div>
                  <div class="feat-item">
                    <svg class="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Formal metrology compliance documentation for automotive and aerospace QA.</span>
                  </div>
                </div>
              </div>

              <div class="panel-visual">
                <div class="technical-preview-card">
                  <div class="preview-header mono">
                    <span>HARDWARE: BLUE LIGHT METROLOGY</span>
                    <span class="text-laser">MICRON CALIBRATED</span>
                  </div>
                  <div class="preview-graphic">
                    <svg class="preview-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="240" fill="var(--bg-secondary)" rx="8"/>
                      <!-- Impeller Blade Cross-section -->
                      <ellipse cx="200" cy="120" rx="90" ry="70" stroke="var(--accent-laser)" stroke-width="2"/>
                      <circle cx="200" cy="120" r="28" stroke="var(--border-line)" stroke-width="1.5" fill="none"/>
                      <!-- Deviation markers -->
                      <line x1="200" y1="50" x2="200" y2="30" stroke="var(--accent-pass)" stroke-width="1.5"/>
                      <circle cx="200" cy="30" r="3" fill="var(--accent-pass)"/>
                      <text x="210" y="34" font-family="var(--font-mono)" font-size="10" fill="var(--accent-pass)">0.00mm</text>

                      <line x1="285" y1="100" x2="310" y2="90" stroke="var(--accent-warn)" stroke-width="1.5"/>
                      <circle cx="310" cy="90" r="3" fill="var(--accent-warn)"/>
                      <text x="320" y="94" font-family="var(--font-mono)" font-size="10" fill="var(--accent-warn)">+0.04mm</text>
                    </svg>
                  </div>
                  <div class="preview-footer mono">
                    <span>TOLERANCE VERIFIED: &plusmn;0.015mm</span>
                    <span class="text-pass">ASME Y14.5M COMPLIANT</span>
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

export function initCapabilities() {
  const tabs = document.querySelectorAll('.track-tab');
  const panels = document.querySelectorAll('.track-panel');
  const pill = document.getElementById('tab-pill');

  function updatePill(tab) {
    if (!pill || !tab) return;
    const parentRect = tab.parentElement.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    pill.style.transform = `translate3d(${tabRect.left - parentRect.left}px, 0, 0)`;
    pill.style.width = `${tabRect.width}px`;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(`track-panel-${index}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      updatePill(tab);
    });
  });

  const activeTab = document.querySelector('.track-tab.active');
  if (activeTab) {
    updatePill(activeTab);
    window.addEventListener('resize', () => {
      const cur = document.querySelector('.track-tab.active');
      if (cur) updatePill(cur);
    });
  }
}
