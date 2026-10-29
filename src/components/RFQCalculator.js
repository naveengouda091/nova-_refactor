export function RFQCalculator() {
  return `
    <section id="rfq-calculator" class="rfq-section section" aria-labelledby="rfq-title">
      <div class="container">
        
        <div class="section-head text-center">
          <div class="eyebrow-tag">
            <span class="eyebrow-dash" aria-hidden="true"></span>
            <span>PROJECT SCOPING</span>
          </div>
          <h2 id="rfq-title" class="section-title">
            Instant Reality Capture Estimator
          </h2>
          <p class="section-desc mx-auto">
            Configure your project parameters below for real-time cost brackets, turnaround timelines, and direct engineer dispatch.
          </p>
        </div>

        <div class="bento-card spectrum-top">
          <div class="rfq-grid">
            
            <!-- Left Form Inputs -->
            <form id="rfq-form" class="rfq-form" onsubmit="return false;">
              
              <div class="form-group">
                <label for="rfq-service" class="form-label mono">01. DISCIPLINE</label>
                <select id="rfq-service" class="form-select" aria-label="Select service discipline">
                  <option value="tls" selected>Terrestrial 3D Laser Scanning (BIM / Civil / Architecture)</option>
                  <option value="drone">Aerial UAV Photogrammetry &amp; Topographic GIS</option>
                  <option value="bim">Complete Scan-to-BIM &amp; Digital Twin (LOD 200–500)</option>
                  <option value="metrology">Industrial Metrology &amp; GD&amp;T Reverse Engineering</option>
                </select>
              </div>

              <div class="form-group">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <label for="rfq-area-slider" class="form-label mono">02. ASSET SCALE / AREA</label>
                  <span id="area-val-label" class="mono font-bold text-laser">1,500 m²</span>
                </div>
                <input type="range" id="rfq-area-slider" class="form-range" min="100" max="25000" step="100" value="1500" aria-label="Project area in square meters">
                <div class="range-markers mono">
                  <span>100 m²</span>
                  <span>5,000 m²</span>
                  <span>25,000+ m²</span>
                </div>
              </div>

              <div class="form-group">
                <label for="rfq-deliverable" class="form-label mono">03. DELIVERABLE PACKAGE</label>
                <select id="rfq-deliverable" class="form-select" aria-label="Select deliverable package">
                  <option value="cloud">Registered Point Cloud Only (.E57, .LAS, .RCP)</option>
                  <option value="drawings">2D Vector CAD As-Builts (.DWG, .DXF)</option>
                  <option value="bim300" selected>Autodesk Revit BIM LOD 300 (Standard AEC)</option>
                  <option value="bim500">Autodesk Revit BIM LOD 500 (As-Built Assets)</option>
                  <option value="cad_solid">Parametric Solid CAD &amp; GD&amp;T (.STEP / SolidWorks)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label mono">04. PRIORITY MOBILIZATION</label>
                <div class="priority-radio-grid">
                  <label class="radio-card active">
                    <input type="radio" name="turnaround" value="standard" checked>
                    <span class="font-bold text-sm">Standard Dispatch</span>
                    <span class="text-xs text-muted">5–7 Business Days</span>
                  </label>
                  <label class="radio-card">
                    <input type="radio" name="turnaround" value="expedited">
                    <span class="font-bold text-sm text-laser">Expedited Priority</span>
                    <span class="text-xs text-muted">48–72 Hours Fast-Track</span>
                  </label>
                </div>
              </div>

              <div class="contact-inputs-grid">
                <div class="form-group">
                  <label for="rfq-client-name" class="form-label mono text-xs">YOUR NAME</label>
                  <input type="text" id="rfq-client-name" class="form-input" placeholder="e.g. Vikram Sharma" required>
                </div>
                <div class="form-group">
                  <label for="rfq-client-email" class="form-label mono text-xs">EMAIL</label>
                  <input type="email" id="rfq-client-email" class="form-input" placeholder="name@company.com" required>
                </div>
              </div>

              <div class="form-group">
                <label for="rfq-client-phone" class="form-label mono text-xs">PHONE NUMBER</label>
                <input type="tel" id="rfq-client-phone" class="form-input" placeholder="+91 98765 43210" required>
              </div>

              <button type="submit" id="submit-rfq-btn" class="btn btn-primary" style="width:100%;">
                <span>Submit RFQ &amp; Dispatch Project Scoping</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

            </form>

            <!-- Right Telemetry Readout -->
            <div class="rfq-telemetry-panel">
              <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-line); padding-bottom:8px;">
                <span class="mono text-xs font-bold">ESTIMATION TELEMETRY</span>
                <span class="mono text-xs text-muted">MUMBAI LAB</span>
              </div>

              <div>
                <span class="mono text-xs text-muted">INDICATIVE BUDGET RANGE</span>
                <div class="estimate-price-row">
                  <span id="est-inr" class="price-val mono font-bold">₹65,000 — ₹95,000</span>
                  <span id="est-usd" class="mono text-muted text-xs">(~$780 — $1,150 USD)</span>
                </div>
              </div>

              <div style="border-top:1px solid var(--border-line); border-bottom:1px solid var(--border-line); padding:12px 0;">
                <div class="spec-row">
                  <span class="mono text-muted">ESTIMATED TIMELINE:</span>
                  <span id="est-days" class="mono font-bold" style="color:var(--accent-pass);">5–6 Business Days</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">RECOMMENDED SENSOR:</span>
                  <span id="est-sensor" class="mono text-high">Faro Focus LiDAR + HDR</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">GRID DENSITY:</span>
                  <span id="est-density" class="mono text-laser">3mm @ 10m Ground Grid</span>
                </div>
                <div class="spec-row">
                  <span class="mono text-muted">LAB ORIGIN:</span>
                  <span class="mono">Mumbai HQ &bull; Pan-India</span>
                </div>
              </div>

              <div style="font-size:0.8rem; color:var(--text-muted);">
                Need custom metrology consultation? Email <a href="mailto:darshan@novascan3d.in" class="gradient-hover-link font-bold text-high">darshan@novascan3d.in</a> or call <a href="tel:+918380809436" class="gradient-hover-link font-bold text-high">+91 83808 09436</a>.
              </div>

              <div id="rfq-success-alert" style="display:none; padding:12px; border-radius:var(--radius-sm); background:rgba(16,185,129,0.1); border:1px solid var(--accent-pass);" role="alert">
                <span class="mono text-xs font-bold" style="color:var(--accent-pass);">RFQ Received &bull; Technical assessment dispatched within 4 hours.</span>
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

    let baseRate = 35;
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

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfq-client-name')?.value || '';
      const email = document.getElementById('rfq-client-email')?.value || '';
      const phone = document.getElementById('rfq-client-phone')?.value || '';
      const area = areaSlider.value;
      const serviceText = serviceSel.options[serviceSel.selectedIndex].text;
      const delivText = deliverableSel.options[deliverableSel.selectedIndex].text;

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

      window.open(`mailto:darshan@novascan3d.in?subject=${subject}&body=${body}`, '_blank');

      if (successAlert) {
        successAlert.style.display = 'block';
      }
    });
  }

  recalculate();
}
