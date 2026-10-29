export function MetricsTicker() {
  return `
    <section class="metrics-section" aria-label="Key Verification Metrics">
      <div class="container">
        <div class="metrics-grid">
          
          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-number mono" data-target="40">40</span>
              <span class="metric-symbol mono">+</span>
            </div>
            <h3 class="metric-title">Heritage Sites Documented</h3>
            <p class="metric-desc">
              Archaeological monuments, temple complexes, and historic masonry scanned with millimetric conservation precision across India.
            </p>
            <div class="metric-footer mono text-laser">ARCHAEOLOGICAL SURVEY &bull; DIGITAL TWINS</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-symbol mono">±</span>
              <span class="metric-number mono" data-target="1.0">1.0</span>
              <span class="metric-unit mono">mm</span>
            </div>
            <h3 class="metric-title">Scanning Accuracy</h3>
            <p class="metric-desc">
              High-accuracy terrestrial LiDAR capture resolving minute structural deflections, crack propagation, and as-built tolerances.
            </p>
            <div class="metric-footer mono text-pass">ISO METROLOGY STANDARDS &bull; SUB-MM</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-number mono" data-target="2.4">2.4</span>
              <span class="metric-unit mono">M</span>
              <span class="metric-sub mono">pts/s</span>
            </div>
            <h3 class="metric-title">High-Density Capture Rate</h3>
            <p class="metric-desc">
              Multi-phase laser systems acquiring millions of 3D spatial points per second, minimizing plant shutdown and field time.
            </p>
            <div class="metric-footer mono text-blue">RAPID FIELD MOBILIZATION</div>
          </div>

          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-number mono" data-target="100">100</span>
              <span class="metric-symbol mono">%</span>
            </div>
            <h3 class="metric-title">BIM &amp; CAD Interoperability</h3>
            <p class="metric-desc">
              Deliverables natively integrated into Autodesk Revit (LOD 200–500), AutoCAD, ArchiCAD, SolidWorks, and Navisworks.
            </p>
            <div class="metric-footer mono text-laser">RVT &bull; IFC &bull; STEP &bull; DWG &bull; E57</div>
          </div>

        </div>
      </div>
    </section>
  `;
}
