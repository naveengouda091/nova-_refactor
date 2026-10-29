export function Hero() {
  return `
    <section class="hero-section section" aria-labelledby="hero-heading">
      <div class="hero-bg-grid" aria-hidden="true"></div>
      <div class="container hero-container">
        
        <!-- Header Text Block -->
        <div class="hero-content">
          <div class="hero-badge-wrap">
            <div class="badge">
              <span class="badge-dot" aria-hidden="true"></span>
              <span>ENGINEERING-GRADE 3D DIGITIZATION</span>
            </div>
            <span class="hero-kicker-tag mono">ISO 9001:2015 &bull; MUMBAI LAB &bull; PAN-INDIA</span>
          </div>

          <h1 id="hero-heading" class="hero-title">
            Precision Beyond Vision.
            <span class="hero-title-gradient">Sub-Millimeter Laser Scanning</span> &amp; As-Built BIM Twins.
          </h1>

          <p class="hero-lead">
            NovaScan 3D engineers high-density terrestrial LiDAR, UAV photogrammetry, and metrology reverse engineering for complex industrial plants, heritage architecture, and infrastructure across India.
          </p>

          <!-- Call to Actions -->
          <div class="hero-actions">
            <a href="#rfq-calculator" class="btn btn-primary btn-large">
              <span>Calculate Instant RFQ</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#canvas-inspection" class="btn btn-secondary btn-large">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-laser)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span>Explore 3D Inspection Viewer</span>
            </a>
          </div>

          <!-- Verified Hardware & Spec Strip -->
          <div class="hero-spec-strip" role="region" aria-label="Key Performance Indicators">
            <div class="spec-cell">
              <span class="spec-label mono">MEASUREMENT TOLERANCE</span>
              <span class="spec-value mono">±0.02mm — ±1.0mm</span>
            </div>
            <div class="spec-divider" aria-hidden="true"></div>
            <div class="spec-cell">
              <span class="spec-label mono">SCANNING RATE</span>
              <span class="spec-value mono">2,400,000 pts/sec</span>
            </div>
            <div class="spec-divider" aria-hidden="true"></div>
            <div class="spec-cell">
              <span class="spec-label mono">HERITAGE SITES PRESERVED</span>
              <span class="spec-value mono">40+ Monuments</span>
            </div>
            <div class="spec-divider" aria-hidden="true"></div>
            <div class="spec-cell">
              <span class="spec-label mono">CORE DELIVERABLES</span>
              <span class="spec-value mono">.E57 &bull; .RVT &bull; .STP &bull; CAD</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
