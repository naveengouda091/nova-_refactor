export function MetricsTicker() {
  return `
    <section class="metrics-row-section" aria-label="Key Verification Metrics">
      <div class="container">
        
        <div class="metrics-row-grid">
          
          <div class="bento-card metric-bento-card spectrum-top">
            <span class="metric-big-num mono" data-target="40">40+</span>
            <span class="metric-3word-label">Heritage Sites Documented</span>
            <span class="metric-sub-note mono">Archaeological monuments preserved</span>
          </div>

          <div class="bento-card metric-bento-card spectrum-top">
            <span class="metric-big-num mono">&plusmn;0.02<span class="text-xs">mm</span></span>
            <span class="metric-3word-label">Optical Measurement Tolerance</span>
            <span class="metric-sub-note mono">Sub-millimeter GD&amp;T precision</span>
          </div>

          <div class="bento-card metric-bento-card spectrum-top">
            <span class="metric-big-num mono" data-target="2.4">2.4<span class="text-xs">M</span></span>
            <span class="metric-3word-label">Points Captured Second</span>
            <span class="metric-sub-note mono">High-density LiDAR acquisition</span>
          </div>

          <div class="bento-card metric-bento-card spectrum-top">
            <span class="metric-big-num mono" data-target="100">100%</span>
            <span class="metric-3word-label">BIM Model Interoperability</span>
            <span class="metric-sub-note mono">Revit, STEP, and IFC ready</span>
          </div>

        </div>

      </div>
    </section>
  `;
}
