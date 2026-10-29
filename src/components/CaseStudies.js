export function CaseStudies() {
  return `
    <section id="case-studies" class="cases-section section" aria-labelledby="cases-heading">
      <div class="container">
        
        <div class="section-badge-center">
          <div class="badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>VERIFIED FIELD PROJECTS</span>
          </div>
        </div>

        <h2 id="cases-heading" class="section-title text-center">
          Proven Deployments Across Heritage &amp; Heavy Industry
        </h2>
        <p class="section-desc text-center max-w-2xl mx-auto">
          Over 40 heritage monuments preserved and critical industrial facilities documented with zero downtime across India.
        </p>

        <!-- Case Cards Grid -->
        <div class="cases-grid">
          
          <!-- Case 1: Heritage Conservation -->
          <article class="case-card card">
            <div class="case-card-top">
              <span class="badge mono">HERITAGE CONSERVATION</span>
              <span class="case-loc mono text-muted">MAHARASHTRA &amp; KARNATAKA</span>
            </div>
            <h3 class="case-title">40+ Ancient Temple Complexes &amp; Archaeological Rock Cut Caves</h3>
            <p class="case-desc">
              Comprehensive 3D reality capture preserving endangered 11th-century carved stone facades, structural vaults, and epigraphic inscriptions before seismic retrofitting.
            </p>
            <div class="case-stats mono">
              <div class="case-stat-item">
                <span class="text-muted">METHOD:</span>
                <span class="text-high">Fusion: Terrestrial LiDAR + UAV Micro-Drone</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">DELIVERABLE:</span>
                <span class="text-laser">Sub-Millimeter Mesh &amp; Orthophotos</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">POINTS CAPTURED:</span>
                <span class="text-pass">1.8 Billion Points Registered</span>
              </div>
            </div>
          </article>

          <!-- Case 2: Industrial Plant BIM -->
          <article class="case-card card">
            <div class="case-card-top">
              <span class="badge mono">PLANT &amp; PIPING ENGINEERING</span>
              <span class="case-loc mono text-muted">GUJARAT INDUSTRIAL CORRIDOR</span>
            </div>
            <h3 class="case-title">Petrochemical Refinery Scan-to-BIM &amp; Piping Clash Detection</h3>
            <p class="case-desc">
              Complete brownfield digitization of a live processing unit without halting operations. Generated isometric spool drawings and Revit LOD 400 models for tie-in engineering.
            </p>
            <div class="case-stats mono">
              <div class="case-stat-item">
                <span class="text-muted">METHOD:</span>
                <span class="text-high">Explosion-Proof Terrestrial Laser Scanning</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">DELIVERABLE:</span>
                <span class="text-laser">Revit MEP LOD 400 + Navisworks Matrix</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">SAVINGS:</span>
                <span class="text-pass">Zero Site Clashes &bull; 14 Days Saved</span>
              </div>
            </div>
          </article>

          <!-- Case 3: Automotive Metrology -->
          <article class="case-card card">
            <div class="case-card-top">
              <span class="badge mono">PRECISION METROLOGY</span>
              <span class="case-loc mono text-muted">PUNE AUTOMOTIVE HUB</span>
            </div>
            <h3 class="case-title">Electric Vehicle Powertrain Housing GD&amp;T &amp; Reverse CAD</h3>
            <p class="case-desc">
              High-accuracy optical blue light scanning of complex cast aluminum EV battery enclosures and gearbox casings with ASME Y14.5M dimensional validation.
            </p>
            <div class="case-stats mono">
              <div class="case-stat-item">
                <span class="text-muted">METHOD:</span>
                <span class="text-high">Structured Blue Light Optical Scanning</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">DELIVERABLE:</span>
                <span class="text-laser">Native SolidWorks Parametric Solid (.STEP)</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">TOLERANCE:</span>
                <span class="text-pass">&plusmn;0.020 mm (20 Microns)</span>
              </div>
            </div>
          </article>

          <!-- Case 4: Infrastructure Topography -->
          <article class="case-card card">
            <div class="case-card-top">
              <span class="badge mono">INFRASTRUCTURE &amp; GIS</span>
              <span class="case-loc mono text-muted">WESTERN INDIA CORRIDOR</span>
            </div>
            <h3 class="case-title">Expressway Corridor Topographic Mapping &amp; Volumetric Survey</h3>
            <p class="case-desc">
              Drone LiDAR surveying along a 45km high-speed transit corridor. Produced digital elevation models (DEM) and volumetric cut-and-fill analysis for earthwork contractor billing.
            </p>
            <div class="case-stats mono">
              <div class="case-stat-item">
                <span class="text-muted">METHOD:</span>
                <span class="text-high">RTK Aerial LiDAR + Dual-Frequency GNSS Base</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">DELIVERABLE:</span>
                <span class="text-laser">1cm DTM Contours &bull; GIS GeoTIFF</span>
              </div>
              <div class="case-stat-item">
                <span class="text-muted">ACCURACY:</span>
                <span class="text-pass">&plusmn;15mm Vertical RMSE</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  `;
}
