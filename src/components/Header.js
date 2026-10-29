export function Header() {
  return `
    <header id="site-header" class="site-header" role="banner">
      <!-- Top Lab Telemetry Banner -->
      <div class="top-telemetry-bar">
        <div class="container telemetry-flex">
          <div class="telemetry-item">
            <span class="badge-dot" aria-hidden="true"></span>
            <span class="mono">LAB ACTIVE: Yashodham, Goregaon East, Mumbai</span>
          </div>
          <div class="telemetry-item hide-mobile">
            <span class="mono">DISPATCH: Pan-India On-Site Mobilization &bull; ISO 9001:2015</span>
          </div>
          <div class="telemetry-item">
            <a href="tel:+918380809436" class="telemetry-link mono">+91 83808 09436</a>
          </div>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <nav class="main-nav" aria-label="Main Navigation">
        <div class="container nav-container">
          <a href="#" class="brand-logo" aria-label="NovaScan 3D Home">
            <svg class="brand-mark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="28" height="28" rx="6" stroke="var(--border-line)" stroke-width="1.5"/>
              <path d="M8 24L16 8L24 24" stroke="var(--accent-laser)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="18" r="3" fill="var(--accent-pass)"/>
              <line x1="16" y1="4" x2="16" y2="7" stroke="var(--accent-laser)" stroke-width="2" stroke-linecap="round"/>
              <line x1="8" y1="26" x2="24" y2="26" stroke="var(--accent-laser)" stroke-width="1.5" stroke-dasharray="2 2"/>
            </svg>
            <div class="brand-text">
              <span class="brand-name">NOVASCAN<span class="brand-accent">3D</span></span>
              <span class="brand-sub">METROLOGY &amp; REALITY CAPTURE</span>
            </div>
          </a>

          <!-- Desktop Nav Links -->
          <div class="nav-links hide-tablet" role="menubar">
            <a href="#canvas-inspection" class="nav-link" role="menuitem">3D Inspection</a>
            <a href="#capabilities" class="nav-link" role="menuitem">Capabilities</a>
            <a href="#comparison" class="nav-link" role="menuitem">Scan vs CAD</a>
            <a href="#sensor-fusion" class="nav-link" role="menuitem">Multi-Sensor Tech</a>
            <a href="#case-studies" class="nav-link" role="menuitem">Heritage &amp; Industry</a>
            <a href="#rfq-calculator" class="nav-link" role="menuitem">Instant Quote</a>
          </div>

          <!-- Actions -->
          <div class="nav-actions">
            <!-- Theme Toggle -->
            <button id="theme-toggle" class="btn-ghost theme-btn" aria-label="Toggle visual theme (light / dark)" title="Toggle Theme">
              <svg class="theme-icon-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg class="theme-icon-light" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:none;">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>

            <!-- RFQ Button -->
            <a href="#rfq-calculator" class="btn btn-primary nav-cta">
              <span>Request Quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button id="mobile-menu-btn" class="mobile-toggle-btn show-tablet" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="mobile-drawer">
              <span class="hamburger-bar"></span>
              <span class="hamburger-bar"></span>
            </button>
          </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
          <div class="mobile-nav-content">
            <a href="#canvas-inspection" class="mobile-link">3D Inspection Engine</a>
            <a href="#capabilities" class="mobile-link">Capabilities &amp; Services</a>
            <a href="#comparison" class="mobile-link">Point Cloud vs CAD Slider</a>
            <a href="#sensor-fusion" class="mobile-link">Multi-Sensor Technology</a>
            <a href="#case-studies" class="mobile-link">Heritage &amp; Industrial Projects</a>
            <a href="#rfq-calculator" class="mobile-link btn btn-primary mt-4">Calculate Instant Quote</a>
            <div class="mobile-footer-info">
              <p class="mono text-muted text-xs">Yashodham, Goregaon East, Mumbai - 400063</p>
              <p class="mono text-muted text-xs">darshan@novascan3d.in &bull; +91 83808 09436</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}
