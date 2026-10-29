export function Hero() {
  return `
    <section class="hero-section section" aria-labelledby="hero-title">
      <div class="container">
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
              <a href="#rfq-calculator" class="btn btn-primary">
                <span>Request a Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#interactive-showcase" class="btn btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <span>Interactive 3D Viewer</span>
              </a>
            </div>
          </div>

          <!-- Right: Annotated Visual Collage -->
          <div class="hero-visual-col">
            <div class="hero-collage-wrap">
              
              <!-- Floating Badge 1 (Top Left) -->
              <div class="floating-badge badge-float-1" aria-label="Tolerance metric">
                <span class="status-dot dot-green" aria-hidden="true"></span>
                <span>&plusmn;0.02mm Tolerance</span>
              </div>

              <!-- Floating Badge 2 (Right Mid) -->
              <div class="floating-badge badge-float-2" aria-label="Point density metric">
                <span class="status-dot dot-cyan" aria-hidden="true"></span>
                <span>2.4M Pts / Sec</span>
              </div>

              <!-- Floating Badge 3 (Bottom Left) -->
              <div class="floating-badge badge-float-3" aria-label="BIM compatibility metric">
                <span class="status-dot dot-blue" aria-hidden="true"></span>
                <span>BIM LOD 500 Ready</span>
              </div>

              <!-- Main Chassis Graphic -->
              <div class="collage-main-frame">
                <svg class="collage-svg" viewBox="0 0 440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Schematic 3D laser scan capture visualization">
                  <rect width="440" height="320" rx="8" fill="var(--bg-secondary)"/>
                  <!-- Technical Grid -->
                  <g stroke="var(--border-line)" stroke-width="1" stroke-dasharray="2 4">
                    <line x1="40" y1="0" x2="40" y2="320"/>
                    <line x1="120" y1="0" x2="120" y2="320"/>
                    <line x1="200" y1="0" x2="200" y2="320"/>
                    <line x1="280" y1="0" x2="280" y2="320"/>
                    <line x1="360" y1="0" x2="360" y2="320"/>
                    <line x1="0" y1="80" x2="440" y2="80"/>
                    <line x1="0" y1="160" x2="440" y2="160"/>
                    <line x1="0" y1="240" x2="440" y2="240"/>
                  </g>
                  <!-- 3D Component Contour Wireframe -->
                  <ellipse cx="220" cy="160" rx="130" ry="85" stroke="var(--text-high)" stroke-width="2"/>
                  <ellipse cx="220" cy="160" rx="85" ry="50" stroke="var(--accent-laser)" stroke-width="1.5" stroke-dasharray="4 2"/>
                  <ellipse cx="220" cy="160" rx="40" ry="24" stroke="var(--accent-pass)" stroke-width="2"/>
                  <!-- Optical Scanner Beam Emission -->
                  <line x1="350" y1="70" x2="220" y2="160" stroke="var(--accent-laser)" stroke-width="2"/>
                  <circle cx="350" cy="70" r="6" fill="var(--accent-laser)"/>
                  <circle cx="220" cy="160" r="4" fill="var(--accent-pass)"/>
                  <!-- Measurement Callout -->
                  <line x1="220" y1="160" x2="280" y2="190" stroke="var(--text-muted)" stroke-width="1"/>
                  <rect x="275" y="185" width="110" height="24" rx="4" fill="var(--bg-card)" stroke="var(--border-line)"/>
                  <text x="285" y="201" font-family="var(--font-mono)" font-size="10" font-weight="600" fill="var(--text-high)">&Oslash; 170.00 &plusmn;0.02</text>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
