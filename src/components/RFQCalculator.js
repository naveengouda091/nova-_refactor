export function RFQCalculator() {
  return `
    <section id="rfq-calculator" class="rfq-section section" aria-labelledby="rfq-heading">
      <div class="container">
        
        <div class="section-badge-center">
          <div class="badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>INSTANT PROJECT ESTIMATION</span>
          </div>
        </div>

        <h2 id="rfq-heading" class="section-title text-center">
          Calculate Your Reality Capture Scope &amp; Instant RFQ
        </h2>
        <p class="section-desc text-center max-w-2xl mx-auto">
          Configure project parameters below for immediate feasibility estimates, recommended hardware deployment, and turnaround schedules.
        </p>

        <!-- Calculator Card -->
        <div class="rfq-calculator-card card">
          <div class="rfq-grid">
            
            <!-- Left: Interactive Form Selectors -->
            <form id="rfq-form" class="rfq-form" onsubmit="return false;">
              
              <!-- Field 1: Service Track -->
              <div class="form-group">
                <label for="rfq-service" class="form-label mono">
                  01. SERVICE DISCIPLINE
                </label>
                <select id="rfq-service" class="form-select" aria-label="Select service discipline">
                  <option value="tls" selected>Terrestrial 3D Laser Scanning (BIM / Civil / Architecture)</option>
                  <option value="drone">Aerial UAV Photogrammetry &amp; Topographic GIS</option>
                  <option value="bim">Complete Scan-to-BIM &amp; Digital Twin (LOD 200–500)</option>
                  <option value="metrology">Industrial Metrology &amp; GD&amp;T Reverse Engineering</option>
                </select>
              </div>

              <!-- Field 2: Approximate Area / Scale -->
              <div class="form-group">
                <div class="label-split">
                  <label for="rfq-area-slider" class="form-label mono">
                    02. PROJECT AREA / ASSET SCALE
                  </label>
                  <span id="area-val-label" class="mono text-laser font-bold">1,500 m²</span>
                </div>
                <input type="range" id="rfq-area-slider" class="form-range" min="100" max="25000" step="100" value="1500" aria-label="Project area in square meters">
                <div class="range-markers mono text-xs text-muted">
                  <span>100 m² (Small Part)</span>
                  <span>5,000 m²</span>
                  <span>25,000+ m² (Campus)</span>
                </div>
              </div>

              <!-- Field 3: Deliverable Specification -->
              <div class="form-group">
                <label for="rfq-deliverable" class="form-label mono">
                  03. REQUIRED DELIVERABLE PACKAGE
                </label>
                <select id="rfq-deliverable" class="form-select" aria-label="Select deliverable package">
                  <option value="cloud">Registered Point Cloud Only (.E57, .LAS, .RCP)</option>
                  <option value="drawings">2D Vector CAD As-Builts (.DWG, .DXF)</option>
                  <option value="bim300" selected>Autodesk Revit BIM LOD 300 (Standard Architecture &amp; MEP)</option>
                  <option value="bim500">Autodesk Revit BIM LOD 500 (As-Built Asset Maintenance)</option>
                  <option value="cad_solid">Parametric Solid CAD &amp; GD&amp;T Inspection (.STEP / SolidWorks)</option>
                </select>
              </div>

              <!-- Field 4: Turnaround Priority -->
              <div class="form-group">
                <label class="form-label mono">04. TIMELINE &amp; MOBILIZATION PRIORITY</label>
                <div class="priority-radio-grid">
                  <label class="radio-card active">
                    <input type="radio" name="turnaround" value="standard" checked>
                    <span class="radio-title">Standard Dispatch</span>
                    <span class="radio-sub text-muted">5–7 Business Days</span>
                  </label>
                  <label class="radio-card">
                    <input type="radio" name="turnaround" value="expedited">
                    <span class="radio-title text-laser">Expedited Priority</span>
                    <span class="radio-sub text-muted">48–72 Hours Fast-Track</span>
                  </label>
                </div>
              </div>

              <!-- Contact Inputs -->
              <div class="contact-inputs-grid">
                <div class="form-group">
                  <label for="rfq-client-name" class="form-label mono text-xs">YOUR FULL NAME</label>
                  <input type="text" id="rfq-client-name" class="form-input" placeholder="e.g. Vikram Sharma" required>
                </div>
                <div class="form-group">
                  <label for="rfq-client-email" class="form-label mono text-xs">OFFICIAL EMAIL</label>
                  <input type="email" id="rfq-client-email" class="form-input" placeholder="name@company.com" required>
                </div>
              </div>

              <div class="form-group">
                <label for="rfq-client-phone" class="form-label mono text-xs">PHONE / WHATSAPP NUMBER</label>
                <input type="tel" id="rfq-client-phone" class="form-input" placeholder="+91 98765 43210" required>
              </div>

              <button type="submit" id="submit-rfq-btn" class="btn btn-primary btn-large w-full">
                <span>Submit RFQ &amp; Dispatch Project Scoping</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

            </form>

            <!-- Right: Dynamic Telemetry Readout & Estimate -->
            <div class="rfq-telemetry-panel">
              <div class="panel-header mono text-laser">
                <span>ESTIMATION TELEMETRY</span>
                <span id="rfq-id" class="text-muted">RFQ-2026-NOV</span>
              </div>

              <div class="telemetry-block">
                <span class="telemetry-label mono">INDICATIVE SCOPE BRACKET</span>
                <div class="estimate-price-row">
                  <span id="est-inr" class="price-val mono text-high">₹65,000 — ₹95,000</span>
                  <span id="est-usd" class="price-sub mono text-muted">(~$780 — $1,150 USD)</span>
                </div>
                <p class="text-xs text-muted mt-1">
                  *Final quote finalized upon site drawing review &amp; point density specifications.
                </p>
              </div>

              <div class="telemetry-specs-list">
                <div class="spec-row">
                  <span class="mono text-muted">ESTIMATED TURNAROUND:</span>
                  <span id="est-days" class="mono text-pass font-bold">5–6 Business Days</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">RECOMMENDED SENSORS:</span>
                  <span id="est-sensor" class="mono text-high">Faro Focus LiDAR + HDR</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">TARGET POINT DENSITY:</span>
                  <span id="est-density" class="mono text-laser">3mm @ 10m Ground Grid</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">MOBILIZATION ORIGIN:</span>
                  <span class="mono text-high">Mumbai Hub &bull; Pan-India Transit</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">QUALITY ASSURANCE:</span>
                  <span class="mono text-pass">ISO 9001 &bull; ASME Y14.5M</span>
                </div>
              </div>

              <!-- Quick Direct Contact Links -->
              <div class="rfq-contact-box">
                <div class="direct-label mono text-xs text-muted">PREFER DIRECT LAB CONSULTATION?</div>
                <div class="direct-links-flex">
                  <a href="mailto:darshan@novascan3d.in" class="direct-link mono">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>darshan@novascan3d.in</span>
                  </a>
                  <a href="tel:+918380809436" class="direct-link mono">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>+91 83808 09436</span>
                  </a>
                </div>
              </div>

              <!-- Submission Feedback State -->
              <div id="rfq-success-alert" class="rfq-success-alert" style="display:none;" role="alert">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pass)" stroke-width="2.5" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <div>
                  <h4 class="text-sm font-bold text-pass">RFQ Received Successfully!</h4>
                  <p class="text-xs text-muted mt-1">Our engineering lead will review your specifications and send a formal estimate within 4 business hours.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}

export function initRFQCalculator() {
  const serviceSel = document.getElementById('rfq-service');
  const areaSlider = document.getElementById('rfq-area-slider');
  const areaLabel = document.getElementById('area-val-label');
  const deliverableSel = document.getElementById('rfq-deliverable');
  const radios = document.querySelectorAll('input[name="turnaround"]');
  const rfqForm = document.getElementById('rfq-form');
  const successAlert = document.getElementById('rfq-success-alert');

  const estInr = document.getElementById('est-inr');
  const estUsd = document.getElementById('est-usd');
  const estDays = document.getElementById('est-days');
  const estSensor = document.getElementById('est-sensor');
  const estDensity = document.getElementById('est-density');

  if (!serviceSel || !areaSlider) return;

  function recalculate() {
    const service = serviceSel.value;
    const area = parseInt(areaSlider.value, 10);
    const deliverable = deliverableSel.value;
    const isExpedited = document.querySelector('input[name="turnaround"]:checked')?.value === 'expedited';

    if (areaLabel) {
      areaLabel.textContent = `${area.toLocaleString()} m²`;
    }

    // Base rates per sq. meter based on service & fidelity
    let baseRate = 35; // INR per sq m
    let days = Math.max(3, Math.ceil(area / 1500) + 2);
    let sensor = 'Faro Focus / Leica RTC360 LiDAR';
    let density = '3mm @ 10m Precision Grid';

    if (service === 'drone') {
      baseRate = 18;
      sensor = 'DJI Matrice 300 RTK + 45MP P1 Photogrammetry';
      density = '< 1.5 cm/px Ground Sampling Distance';
      days = Math.max(2, Math.ceil(area / 4000) + 1);
    } else if (service === 'bim') {
      baseRate = 55;
      sensor = 'Multi-Sensor Fusion: LiDAR + Spherical HDR + Total Station';
      density = 'Revit LOD 300/400 Parametric Families';
      days = Math.max(4, Math.ceil(area / 1000) + 3);
    } else if (service === 'metrology') {
      baseRate = 85;
      sensor = 'Optical Blue Light 3D Scanner (Artec / GOM)';
      density = '0.020mm (20 Micron) Class-A Surface Deviation';
      days = Math.max(3, Math.ceil(area / 500) + 2);
    }

    if (deliverable === 'bim500') baseRate *= 1.4;
    if (deliverable === 'cad_solid') baseRate *= 1.5;
    if (deliverable === 'cloud') baseRate *= 0.75;

    let totalINR = Math.round(area * baseRate);
    // minimum engagement floor
    totalINR = Math.max(35000, totalINR);

    if (isExpedited) {
      totalINR = Math.round(totalINR * 1.35);
      days = Math.max(2, Math.ceil(days * 0.5));
    }

    const lowINR = Math.round(totalINR * 0.9);
    const highINR = Math.round(totalINR * 1.15);

    const lowUSD = Math.round(lowINR / 83);
    const highUSD = Math.round(highINR / 83);

    if (estInr) estInr.textContent = `₹${lowINR.toLocaleString()} — ₹${highINR.toLocaleString()}`;
    if (estUsd) estUsd.textContent = `(~$${lowUSD.toLocaleString()} — $${highUSD.toLocaleString()} USD)`;
    if (estDays) estDays.textContent = isExpedited ? `${days} Days (Expedited)` : `${days}–${days + 2} Business Days`;
    if (estSensor) estSensor.textContent = sensor;
    if (estDensity) estDensity.textContent = density;
  }

  serviceSel.addEventListener('change', recalculate);
  areaSlider.addEventListener('input', recalculate);
  deliverableSel.addEventListener('change', recalculate);
  radios.forEach(r => r.addEventListener('change', () => {
    document.querySelectorAll('.radio-card').forEach(rc => rc.classList.remove('active'));
    r.closest('.radio-card')?.classList.add('active');
    recalculate();
  }));

  // Handle Form Submission
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfq-client-name')?.value || '';
      const email = document.getElementById('rfq-client-email')?.value || '';
      const phone = document.getElementById('rfq-client-phone')?.value || '';
      const area = areaSlider.value;
      const serviceText = serviceSel.options[serviceSel.selectedIndex].text;
      const delivText = deliverableSel.options[deliverableSel.selectedIndex].text;

      // Construct mailto
      const subject = encodeURIComponent(`NovaScan 3D RFQ: ${serviceText} (${area} m²)`);
      const body = encodeURIComponent(
        `Dear NovaScan 3D Engineering Team,\n\n` +
        `I would like to request a formal quotation with the following project specifications:\n\n` +
        `• Client Name: ${name}\n` +
        `• Email: ${email}\n` +
        `• Phone: ${phone}\n` +
        `• Service Discipline: ${serviceText}\n` +
        `• Area / Scale: ${area} m²\n` +
        `• Deliverable Package: ${delivText}\n\n` +
        `Looking forward to your project assessment.\n\nBest regards,\n${name}`
      );

      // Open mailto link
      window.open(`mailto:darshan@novascan3d.in?subject=${subject}&body=${body}`, '_blank');

      if (successAlert) {
        successAlert.style.display = 'flex';
      }
    });
  }

  recalculate();
}
