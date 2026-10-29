export function Header() {
  return `
    <header id="site-header" class="site-header" role="banner">
      <nav class="main-nav" aria-label="Main Navigation">
        <div class="container nav-container">
          
          <!-- Brand Logo -->
          <a href="#" class="brand-logo" aria-label="NovaScan 3D Home">
            <svg class="brand-mark" width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="28" height="28" rx="6" stroke="var(--border-line)" stroke-width="1.5"/>
              <path d="M8 24L16 8L24 24" stroke="var(--text-high)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="18" r="3" fill="var(--accent-pass)"/>
              <line x1="16" y1="4" x2="16" y2="7" stroke="var(--accent-laser)" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="brand-text">
              <span class="brand-name">NOVASCAN<span class="gradient-text">3D</span></span>
              <span class="brand-sub">PRECISION REALITY CAPTURE</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="nav-links hide-tablet" role="menubar">
            <a href="#interactive-showcase" class="nav-link gradient-hover-link" role="menuitem">3D Inspector</a>
            <a href="#capabilities" class="nav-link gradient-hover-link" role="menuitem">Capabilities</a>
            <a href="#comparison" class="nav-link gradient-hover-link" role="menuitem">Scan vs CAD</a>
            <a href="#workflow" class="nav-link gradient-hover-link" role="menuitem">Workflow</a>
            <a href="#rfq-calculator" class="nav-link gradient-hover-link" role="menuitem">Instant Quote</a>
          </div>

          <!-- Actions -->
          <div class="nav-actions">
            <!-- Lab Status Pill -->
            <div class="floating-badge hide-mobile">
              <span class="status-dot dot-green" aria-hidden="true"></span>
              <span class="mono text-xs">Lab Active &bull; Mumbai HQ</span>
            </div>

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

            <!-- Mobile Hamburger Button -->
            <button id="mobile-menu-btn" class="mobile-toggle-btn show-tablet" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="mobile-drawer">
              <span class="hamburger-bar"></span>
              <span class="hamburger-bar"></span>
            </button>
          </div>

        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
          <a href="#interactive-showcase" class="mobile-link">3D Inspector</a>
          <a href="#capabilities" class="mobile-link">Capabilities</a>
          <a href="#comparison" class="mobile-link">Scan vs CAD Slider</a>
          <a href="#workflow" class="mobile-link">Workflow</a>
          <a href="#rfq-calculator" class="mobile-link btn btn-primary mt-2">Request Quote</a>
        </div>
      </nav>
    </header>
  `;
}
