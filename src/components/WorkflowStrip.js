import step1 from '../assets/steps/step-1.webp';
import step2 from '../assets/steps/step-2.webp';
import step3 from '../assets/steps/step-3.webp';
import step4 from '../assets/steps/step-4.webp';
import step5 from '../assets/steps/step-5.webp';

export function WorkflowStrip() {
  const steps = [
    {
      num: '01',
      title: 'Field Capture',
      desc: 'Terrestrial LiDAR and drone passes acquire raw physical geometries with millimeter precision.',
      image: step1,
      fallback: '/steps/step-1.jpg'
    },
    {
      num: '02',
      title: 'Point Registration',
      desc: 'Billions of spatial coordinates are tied to survey-grade GNSS base datum without drift.',
      image: step2,
      fallback: '/steps/step-2.jpg'
    },
    {
      num: '03',
      title: 'Noise Extraction',
      desc: 'Outlier filtering and multi-sensor fusion clean and decimate complex spatial datasets.',
      image: step3,
      fallback: '/steps/step-3.jpg'
    },
    {
      num: '04',
      title: 'CAD Reconstruction',
      desc: 'Parametric surfaces and Revit BIM elements are engineered to LOD 200–500 specifications.',
      image: step4,
      fallback: '/steps/step-4.jpg'
    },
    {
      num: '05',
      title: 'Metrology Audit',
      desc: 'Deliverables are verified against 3D deviation colormaps and GD&T quality tolerances.',
      image: step5,
      fallback: '/steps/step-5.jpg'
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
                  loading="eager"
                  onerror="this.onerror=null; this.src='${s.fallback}';"
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
