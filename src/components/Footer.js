export function Footer() {
  return `
    <footer id="site-footer" class="site-footer" role="contentinfo">
      <div class="container footer-container">
        
        <div class="footer-top-grid">
          
          <!-- Column 1: Brand & Credentials -->
          <div class="footer-col brand-col">
            <div class="brand-logo mb-4">
              <svg class="brand-mark" width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="28" height="28" rx="6" stroke="var(--border-line)" stroke-width="1.5"/>
                <path d="M8 24L16 8L24 24" stroke="var(--accent-laser)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="16" cy="18" r="3" fill="var(--accent-pass)"/>
              </svg>
              <span class="brand-name font-bold">NOVASCAN<span class="brand-accent">3D</span></span>
            </div>
            <p class="footer-desc">
              Premier industrial 3D laser scanning, UAV photogrammetry, Scan-to-BIM, and reverse engineering metrology solutions across India.
            </p>
            <div class="footer-cert-badge mono mt-4">
              <span class="badge-dot" aria-hidden="true"></span>
              <span>ISO 9001:2015 &bull; ASME Y14.5M GD&amp;T &bull; AIA BIM FORUM</span>
            </div>
          </div>

          <!-- Column 2: Core Solutions -->
          <div class="footer-col">
            <h4 class="footer-heading mono text-laser">SOLUTIONS</h4>
            <ul class="footer-links">
              <li><a href="#capabilities" class="footer-link">Terrestrial 3D Laser Scanning</a></li>
              <li><a href="#capabilities" class="footer-link">UAV Aerial Photogrammetry &amp; GIS</a></li>
              <li><a href="#capabilities" class="footer-link">Parametric Scan-to-BIM (LOD 500)</a></li>
              <li><a href="#capabilities" class="footer-link">Industrial Metrology &amp; Reverse CAD</a></li>
              <li><a href="#canvas-inspection" class="footer-link">3D Inspection Colormap Viewer</a></li>
            </ul>
          </div>

          <!-- Column 3: Deliverables & Formats -->
          <div class="footer-col">
            <h4 class="footer-heading mono text-laser">DELIVERABLES</h4>
            <ul class="footer-links mono text-sm">
              <li><span class="text-medium">Autodesk Revit (.RVT, .IFC)</span></li>
              <li><span class="text-medium">Point Clouds (.E57, .LAS, .RCP)</span></li>
              <li><span class="text-medium">Parametric Solid (.STEP, .IGES)</span></li>
              <li><span class="text-medium">Vector As-Builts (.DWG, .DXF)</span></li>
              <li><span class="text-medium">GIS Topo (GeoTIFF, DTM, DEM)</span></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Lab Location -->
          <div class="footer-col contact-col">
            <h4 class="footer-heading mono text-laser">MUMBAI LAB &amp; DISPATCH</h4>
            <address class="footer-address">
              <p class="address-line">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="addr-icon" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Yashodham, Goregaon East, Mumbai, Maharashtra - 400063, India</span>
              </p>
              <p class="address-line mt-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="addr-icon" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:darshan@novascan3d.in" class="footer-contact-link">darshan@novascan3d.in</a>
              </p>
              <p class="address-line mt-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="addr-icon" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+918380809436" class="footer-contact-link">+91 83808 09436</a>
              </p>
            </address>
          </div>

        </div>

        <div class="footer-bottom-bar">
          <div class="spectrum-bar mb-4" aria-hidden="true"></div>
          <div class="bottom-flex">
            <span class="mono text-muted text-xs">
              &copy; 2026 NovaScan 3D Reality Capture Solutions. All rights reserved.
            </span>
            <div class="bottom-links mono text-xs">
              <a href="#capabilities" class="text-muted hover-laser">Capabilities</a>
              <span>&bull;</span>
              <a href="#comparison" class="text-muted hover-laser">Accuracy Spec</a>
              <span>&bull;</span>
              <a href="#rfq-calculator" class="text-muted hover-laser">Instant RFQ</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  `;
}
