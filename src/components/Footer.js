export function Footer() {
  return `
    <footer id="site-footer" class="site-footer" role="contentinfo">
      <div class="container">
        
        <div class="footer-top-grid">
          
          <!-- Brand Column -->
          <div class="footer-col">
            <div class="brand-logo mb-2">
              <span class="brand-name font-bold">NOVASCAN<span class="gradient-text">3D</span></span>
            </div>
            <p class="text-sm text-medium" style="max-width:300px;">
              Sub-millimeter reality capture, Scan-to-BIM, and reverse engineering metrology across India.
            </p>
            <div class="floating-badge mt-4">
              <span class="status-dot dot-green" aria-hidden="true"></span>
              <span class="mono text-xs">ISO 9001:2015 &bull; ASME Y14.5M</span>
            </div>
          </div>

          <!-- Solutions -->
          <div class="footer-col">
            <h4 class="mono text-xs font-bold mb-4">SOLUTIONS</h4>
            <ul class="footer-links">
              <li><a href="#capabilities" class="footer-link gradient-hover-link">Terrestrial 3D Laser Scanning</a></li>
              <li><a href="#capabilities" class="footer-link gradient-hover-link">UAV Aerial Photogrammetry</a></li>
              <li><a href="#capabilities" class="footer-link gradient-hover-link">Parametric Scan-to-BIM</a></li>
              <li><a href="#capabilities" class="footer-link gradient-hover-link">GD&amp;T Reverse Engineering</a></li>
              <li><a href="#interactive-showcase" class="footer-link gradient-hover-link">3D Inspection Inspector</a></li>
            </ul>
          </div>

          <!-- Deliverables -->
          <div class="footer-col">
            <h4 class="mono text-xs font-bold mb-4">DELIVERABLES</h4>
            <ul class="footer-links mono text-xs">
              <li><span class="text-medium">Autodesk Revit (.RVT, .IFC)</span></li>
              <li><span class="text-medium">Point Clouds (.E57, .LAS, .RCP)</span></li>
              <li><span class="text-medium">Parametric CAD (.STEP, .IGES)</span></li>
              <li><span class="text-medium">Vector As-Builts (.DWG, .DXF)</span></li>
              <li><span class="text-medium">GIS Topo (GeoTIFF, DTM)</span></li>
            </ul>
          </div>

          <!-- Lab Address & Contact -->
          <div class="footer-col">
            <h4 class="mono text-xs font-bold mb-4">MUMBAI LAB</h4>
            <address style="font-style:normal; font-size:0.875rem; color:var(--text-medium); line-height:1.6;">
              <p>Yashodham, Goregaon East, Mumbai, Maharashtra 400063, India</p>
              <p class="mt-2">
                <a href="mailto:darshan@novascan3d.in" class="gradient-hover-link font-bold text-high">darshan@novascan3d.in</a>
              </p>
              <p class="mt-1">
                <a href="tel:+918380809436" class="gradient-hover-link font-bold text-high">+91 83808 09436</a>
              </p>
            </address>
          </div>

        </div>

        <div class="bottom-flex mono text-xs text-muted">
          <span>&copy; 2026 NovaScan 3D Reality Capture. All rights reserved.</span>
          <div style="display:flex; gap:16px;">
            <a href="#capabilities" class="text-muted gradient-hover-link">Capabilities</a>
            <a href="#comparison" class="text-muted gradient-hover-link">Accuracy Spec</a>
            <a href="#workflow" class="text-muted gradient-hover-link">Workflow</a>
            <a href="mailto:darshan@novascan3d.in" class="text-muted gradient-hover-link">Direct Contact</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
