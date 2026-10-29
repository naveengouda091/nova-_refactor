export function Capabilities() {
  return `
    <section id="capabilities" class="capabilities-section section" aria-labelledby="capabilities-title">
      <div class="container">
        
        <div class="section-head">
          <div class="eyebrow-tag">
            <span class="eyebrow-dash" aria-hidden="true"></span>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 id="capabilities-title" class="section-title">
            Engineering-Grade Reality Capture Matrix
          </h2>
          <p class="section-desc">
            We provide end-to-end 3D documentation, from initial sensor acquisition to certified engineering CAD and BIM deliverables.
          </p>
        </div>

        <!-- 4-Card Categorized Bento Grid with Industrial Visual Proof Previews -->
        <div class="capabilities-bento-grid">
          
          <!-- Discipline 01: Terrestrial Laser Scanning -->
          <div class="bento-card cap-bento-card metrology-accent-top">
            <div class="cap-visual-viewport" aria-hidden="true">
              <div class="viewport-hud mono text-xs">
                <span>SENSOR: FARO FOCUS LiDAR</span>
                <span class="text-laser">1mm @ 10m</span>
              </div>
              <svg class="cap-svg-preview" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="120" fill="var(--bg-secondary)"/>
                <!-- Column geometry -->
                <line x1="30" y1="100" x2="290" y2="100" stroke="var(--border-line)" stroke-width="1"/>
                <rect x="50" y="30" width="22" height="70" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                <rect x="150" y="30" width="22" height="70" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                <rect x="250" y="30" width="22" height="70" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                <!-- Tripod scanner station -->
                <circle cx="105" cy="85" r="5" fill="var(--accent-laser)"/>
                <line x1="105" y1="85" x2="95" y2="100" stroke="var(--accent-laser)" stroke-width="1.5"/>
                <line x1="105" y1="85" x2="115" y2="100" stroke="var(--accent-laser)" stroke-width="1.5"/>
                <!-- 360 Scan Pulses -->
                <path d="M105 85 L50 35 M105 85 L72 35 M105 85 L150 45 M105 85 L172 45" stroke="var(--accent-laser)" stroke-width="1" stroke-dasharray="2 2" stroke-opacity="0.8"/>
              </svg>
            </div>
            <div class="eyebrow-tag text-xs mb-2">DISCIPLINE 01</div>
            <h3 class="cap-title">Terrestrial Laser Scanning</h3>
            <p class="cap-desc">
              Capture active industrial facilities and architecture with sub-millimeter tripod LiDAR systems.
            </p>
            <a href="#site-footer" class="cap-action-link gradient-hover-link">
              <span>Configure TLS Scope</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <!-- Discipline 02: Aerial UAV Photogrammetry -->
          <div class="bento-card cap-bento-card metrology-accent-top">
            <div class="cap-visual-viewport" aria-hidden="true">
              <div class="viewport-hud mono text-xs">
                <span>UAV: DJI MATRICE RTK</span>
                <span class="text-laser">GSD &lt; 1.5cm</span>
              </div>
              <svg class="cap-svg-preview" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="120" fill="var(--bg-secondary)"/>
                <!-- Flight Waypoints & Nadir Sensor cone -->
                <polyline points="30,25 90,25 90,45 160,45 160,25 230,25 230,45 290,45" stroke="var(--accent-laser)" stroke-width="1.5" stroke-dasharray="3 3"/>
                <circle cx="160" cy="25" r="4" fill="var(--accent-laser)"/>
                <!-- Terrain wireframe contours -->
                <path d="M20 95 Q80 60 160 80 T300 70" stroke="var(--accent-pass)" stroke-width="1.5"/>
                <path d="M20 110 Q90 85 170 100 T300 90" stroke="var(--border-line)" stroke-width="1"/>
                <!-- Nadir camera frustum -->
                <polygon points="160,25 120,80 200,80" fill="rgba(2, 132, 199, 0.08)" stroke="rgba(2, 132, 199, 0.3)" stroke-width="1"/>
              </svg>
            </div>
            <div class="eyebrow-tag text-xs mb-2">DISCIPLINE 02</div>
            <h3 class="cap-title">Aerial UAV Photogrammetry</h3>
            <p class="cap-desc">
              Generate survey-grade topographic terrain elevation models and orthomosaics from calibrated drones.
            </p>
            <a href="#site-footer" class="cap-action-link gradient-hover-link">
              <span>Explore GIS Mapping</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <!-- Discipline 03: Parametric Scan-to-BIM -->
          <div class="bento-card cap-bento-card metrology-accent-top">
            <div class="cap-visual-viewport" aria-hidden="true">
              <div class="viewport-hud mono text-xs">
                <span>REVIT MEP &bull; IFC</span>
                <span class="text-laser">LOD 500 AS-BUILT</span>
              </div>
              <svg class="cap-svg-preview" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="120" fill="var(--bg-secondary)"/>
                <!-- Structural Column & Ductwork Wireframe -->
                <rect x="40" y="20" width="20" height="85" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                <rect x="260" y="20" width="20" height="85" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                <rect x="40" y="20" width="240" height="18" stroke="var(--border-focus)" stroke-width="1.5" fill="none"/>
                <!-- HVAC Duct crossing with clash boundary -->
                <rect x="70" y="50" width="180" height="24" stroke="var(--accent-laser)" stroke-width="1.5" fill="rgba(2, 132, 199, 0.08)"/>
                <!-- Piping spool -->
                <line x1="20" y1="90" x2="300" y2="90" stroke="var(--accent-pass)" stroke-width="2.5"/>
                <circle cx="150" cy="90" r="6" stroke="var(--accent-pass)" stroke-width="2" fill="var(--bg-card)"/>
              </svg>
            </div>
            <div class="eyebrow-tag text-xs mb-2">DISCIPLINE 03</div>
            <h3 class="cap-title">Parametric Scan-to-BIM</h3>
            <p class="cap-desc">
              Convert raw point clouds into intelligent, clash-free Revit models up to LOD 500.
            </p>
            <a href="#site-footer" class="cap-action-link gradient-hover-link">
              <span>View BIM Deliverables</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <!-- Discipline 04: GD&T Reverse Engineering -->
          <div class="bento-card cap-bento-card metrology-accent-top">
            <div class="cap-visual-viewport" aria-hidden="true">
              <div class="viewport-hud mono text-xs">
                <span>METROLOGY &bull; STEP / CAD</span>
                <span class="text-laser">&plusmn;0.020mm GD&amp;T</span>
              </div>
              <svg class="cap-svg-preview" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="120" fill="var(--bg-secondary)"/>
                <!-- Mechanical Turbine Impeller / Bearing wireframe -->
                <circle cx="160" cy="60" r="44" stroke="var(--accent-laser)" stroke-width="2" fill="none"/>
                <circle cx="160" cy="60" r="20" stroke="var(--border-line)" stroke-width="1.5" fill="none"/>
                <!-- GD&T Datum Box -->
                <rect x="215" y="25" width="85" height="20" rx="3" fill="var(--bg-card)" stroke="var(--accent-pass)" stroke-width="1.5"/>
                <text x="222" y="39" font-family="var(--font-mono)" font-size="9" font-weight="600" fill="var(--text-high)">⌖ 0.015 | A | B</text>
                <line x1="204" y1="60" x2="215" y2="35" stroke="var(--accent-pass)" stroke-width="1"/>
              </svg>
            </div>
            <div class="eyebrow-tag text-xs mb-2">DISCIPLINE 04</div>
            <h3 class="cap-title">GD&amp;T Reverse Engineering</h3>
            <p class="cap-desc">
              Reconstruct production-ready parametric solid CAD models with micron-level inspection validation.
            </p>
            <a href="#site-footer" class="cap-action-link gradient-hover-link">
              <span>Calculate CAD Quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  `;
}
