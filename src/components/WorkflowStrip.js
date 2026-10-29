export function WorkflowStrip() {
  return `
    <section class="workflow-strip-section section" aria-labelledby="workflow-title">
      <div class="container">
        
        <div class="section-head text-center">
          <div class="eyebrow-tag">
            <span class="eyebrow-dash" aria-hidden="true"></span>
            <span>END-TO-END PIPELINE</span>
          </div>
          <h2 id="workflow-title" class="section-title">
            Five-Step Reality-to-CAD Workflow
          </h2>
          <p class="section-desc mx-auto">
            From field mobilization to millimeter-accurate parametric deliverables.
          </p>
        </div>

        <div class="workflow-strip-grid">
          
          <div class="workflow-step-card bento-card">
            <span class="step-number">01</span>
            <h3 class="step-title">Field Capture</h3>
            <p class="step-desc">
              Terrestrial LiDAR and drone passes acquire raw physical geometries with millimeter precision.
            </p>
          </div>

          <div class="workflow-step-card bento-card">
            <span class="step-number">02</span>
            <h3 class="step-title">Point Registration</h3>
            <p class="step-desc">
              Billions of spatial coordinates are tied to survey-grade GNSS base datum without drift.
            </p>
          </div>

          <div class="workflow-step-card bento-card">
            <span class="step-number">03</span>
            <h3 class="step-title">Noise Extraction</h3>
            <p class="step-desc">
              Outlier filtering and multi-sensor fusion clean and decimate complex spatial datasets.
            </p>
          </div>

          <div class="workflow-step-card bento-card">
            <span class="step-number">04</span>
            <h3 class="step-title">CAD Reconstruction</h3>
            <p class="step-desc">
              Parametric surfaces and Revit BIM elements are engineered to LOD 200–500 specifications.
            </p>
          </div>

          <div class="workflow-step-card bento-card">
            <span class="step-number">05</span>
            <h3 class="step-title">Metrology Audit</h3>
            <p class="step-desc">
              Deliverables are verified against 3D deviation colormaps and GD&amp;T quality tolerances.
            </p>
          </div>

        </div>

      </div>
    </section>
  `;
}
