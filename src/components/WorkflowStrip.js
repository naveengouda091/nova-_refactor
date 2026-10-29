export function WorkflowStrip() {
  const steps = [
    {
      num: '01',
      title: 'Field Capture',
      desc: 'Terrestrial LiDAR and drone passes acquire raw physical geometries with millimeter precision.',
      image: '/steps/step-1.png'
    },
    {
      num: '02',
      title: 'Point Registration',
      desc: 'Billions of spatial coordinates are tied to survey-grade GNSS base datum without drift.',
      image: '/steps/step-2.png'
    },
    {
      num: '03',
      title: 'Noise Extraction',
      desc: 'Outlier filtering and multi-sensor fusion clean and decimate complex spatial datasets.',
      image: '/steps/step-3.png'
    },
    {
      num: '04',
      title: 'CAD Reconstruction',
      desc: 'Parametric surfaces and Revit BIM elements are engineered to LOD 200–500 specifications.',
      image: '/steps/step-4.png'
    },
    {
      num: '05',
      title: 'Metrology Audit',
      desc: 'Deliverables are verified against 3D deviation colormaps and GD&T quality tolerances.',
      image: '/steps/step-5.png'
    }
  ];

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
          ${steps.map(s => `
            <article class="workflow-step-card bento-card" aria-label="Step ${s.num}: ${s.title}">
              
              <!-- Step Visual Card Preview -->
              <div class="workflow-card-img-wrap">
                <img 
                  src="${s.image}" 
                  alt="Visualization of Step ${s.num}: ${s.title}" 
                  class="workflow-card-img" 
                  loading="lazy"
                />
                <span class="workflow-card-tag mono">${s.num}</span>
              </div>

              <!-- Content Below Image -->
              <div class="workflow-card-body">
                <h3 class="step-title font-bold">${s.title}</h3>
                <p class="step-desc">${s.desc}</p>
              </div>

            </article>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
