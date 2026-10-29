export function SensorFusion() {
  return `
    <section id="sensor-fusion" class="fusion-section section" aria-labelledby="fusion-heading">
      <div class="container">
        
        <div class="section-badge-center">
          <div class="badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>MULTI-SENSOR FUSION PIPELINE</span>
          </div>
        </div>

        <h2 id="fusion-heading" class="section-title text-center">
          Zero-Blind-Spot Reality Capture Technology
        </h2>
        <p class="section-desc text-center max-w-2xl mx-auto">
          Single-sensor scanning leaves data shadows. NovaScan 3D synchronizes terrestrial LiDAR, drone photogrammetry, and GNSS surveying into one unified, mathematically registered digital twin.
        </p>

        <!-- Fusion Pipeline Grid -->
        <div class="fusion-pipeline-grid">
          
          <div class="pipeline-step-card card">
            <div class="step-num mono text-laser">PHASE 01</div>
            <h3 class="step-title">Terrestrial LiDAR Capture</h3>
            <p class="step-desc">
              High-resolution ground stations document internal spaces, complex pipe spools, undercrofts, and structural columns with &plusmn;1mm accuracy.
            </p>
            <div class="step-tag mono">FARO FOCUS &bull; LEICA RTC360</div>
          </div>

          <div class="pipeline-step-card card">
            <div class="step-num mono text-laser">PHASE 02</div>
            <h3 class="step-title">UAV Aerial Photogrammetry</h3>
            <p class="step-desc">
              Drone passes capture roof geometry, high parapets, cliff faces, and surrounding terrain inaccessible from terrestrial tripod positions.
            </p>
            <div class="step-tag mono">DJI ENTERPRISE RTK &bull; 45MP SENSOR</div>
          </div>

          <div class="pipeline-step-card card">
            <div class="step-num mono text-laser">PHASE 03</div>
            <h3 class="step-title">GNSS RTK Georeferencing</h3>
            <p class="step-desc">
              Survey-grade base stations establish millimeter ground control points (GCPs) locking all scan clusters to the universal national coordinate grid.
            </p>
            <div class="step-tag mono">MILLIMETRIC CONTROL NETWORK</div>
          </div>

          <div class="pipeline-step-card card">
            <div class="step-num mono text-pass">PHASE 04</div>
            <h3 class="step-title">Co-Registration &amp; Modeling</h3>
            <p class="step-desc">
              Terrestrial and aerial point clouds are co-registered with under 1mm mean deviation, generating clean surfaces for BIM LOD 500 or CAD deliverables.
            </p>
            <div class="step-tag mono text-pass">AUTODESK REVIT &bull; STEP &bull; E57</div>
          </div>

        </div>

        <!-- Deliverable Specification Matrix -->
        <div class="deliverables-matrix-wrapper card">
          <div class="matrix-header">
            <h3 class="matrix-title">Enterprise Deliverable Formats &amp; Specifications</h3>
            <span class="mono text-muted text-sm">ALL EXPORTS VERIFIED AGAINST ISO 19650 BIM STANDARDS</span>
          </div>

          <div class="table-responsive">
            <table class="specs-table" aria-label="Deliverable specifications table">
              <thead>
                <tr>
                  <th scope="col" class="mono">DELIVERABLE</th>
                  <th scope="col" class="mono">OUTPUT FORMAT</th>
                  <th scope="col" class="mono">ACCURACY TOLERANCE</th>
                  <th scope="col" class="mono">PRIMARY SOFTWARE</th>
                  <th scope="col" class="mono">TARGET INDUSTRY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold text-high">Point Cloud (Raw / Cleaned)</td>
                  <td class="mono text-laser">.E57, .LAS, .RCP, .PTS</td>
                  <td class="mono">&plusmn;1.0 mm — &plusmn;2.0 mm</td>
                  <td>Autodesk Recap, CloudCompare, Leica Cyclone</td>
                  <td>Civil, Plant, Architecture</td>
                </tr>
                <tr>
                  <td class="font-bold text-high">Parametric BIM Model</td>
                  <td class="mono text-pass">.RVT, .IFC (LOD 200–500)</td>
                  <td class="mono">&plusmn;3.0 mm — &plusmn;5.0 mm</td>
                  <td>Autodesk Revit, ArchiCAD, Navisworks</td>
                  <td>AEC, Facility Management, BIM</td>
                </tr>
                <tr>
                  <td class="font-bold text-high">2D As-Built Drawings</td>
                  <td class="mono">.DWG, .DXF, .PDF Vector</td>
                  <td class="mono">&plusmn;2.0 mm</td>
                  <td>AutoCAD, MicroStation</td>
                  <td>Renovation, Historic Conservation</td>
                </tr>
                <tr>
                  <td class="font-bold text-high">Reverse Engineered CAD Solid</td>
                  <td class="mono text-laser">.STEP, .IGES, .X_T, SolidWorks</td>
                  <td class="mono text-pass">&plusmn;0.020 mm (20&mu;m)</td>
                  <td>SolidWorks, Siemens NX, CATIA</td>
                  <td>Automotive, Aerospace, Tooling</td>
                </tr>
                <tr>
                  <td class="font-bold text-high">GIS Orthomosaic &amp; Topo</td>
                  <td class="mono">GeoTIFF, DEM, DTM, .SHP</td>
                  <td class="mono">&lt; 1.5 cm GSD</td>
                  <td>ArcGIS, QGIS, Global Mapper</td>
                  <td>Infrastructure, Mining, Urban Planning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  `;
}
