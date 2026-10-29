# NovaScan 3D — Refactored UI/UX & High-Precision Reality Capture

Production refactoring for [NovaScan 3D](https://www.novascan3d.in/), benchmarked against [Nikola Labs](https://nikola-labs.com/).

## 🚀 Key Innovations & Upgrades

1. **Sub-Millimeter Industrial Aesthetic**:
   - High-contrast Dark Instrument Mode with Swiss typography hierarchy (`Sora` + `Hanken Grotesk` + `JetBrains Mono`).
   - Dynamic light/dark theme switcher with persistence in `localStorage`.
   - Complete CSS design tokens eliminating hardcoded hexes and arbitrary magic numbers.

2. **Real-Time Interactive 3D Metrology Visualizer**:
   - High-DPI HTML5 Canvas rendering interactive 3D metrology inspection colormaps (tolerances from -1.0mm to +1.0mm with Nominal ±0.00mm pass).
   - Switchable rendering modes: **Metrology Heatmap**, **Laser Point Cloud**, and **Parametric CAD Wireframe**.
   - Interactive orbit, hover deviation probe, and pause/resume controls.

3. **Interactive Scan vs CAD Comparison Slider**:
   - Draggable before/after inspector comparing raw unstructured point clouds (.E57) against parametric BIM / CAD surfaces (.STEP / Revit LOD 500).
   - Fully keyboard accessible via arrow keys (`aria-valuenow` 0–100).

4. **Interactive RFQ & Timeline Quoting Engine**:
   - Dynamic scope, area ($m^2$), deliverable package, and turnaround priority calculators.
   - Generates live INR and USD price estimates with direct lead capture and pre-populated mailto dispatches to `darshan@novascan3d.in`.

5. **Performance & Motion Compliance**:
   - Zero Layout Shift ($\text{CLS} = 0.00$) with reserved container dimensions.
   - Strict GPU transforms (`transform`, `opacity`) adhering to 100–150ms micro-interactions, 150–300ms state changes, and 60–70% faster exit transitions.
   - Comprehensive `prefers-reduced-motion` fallbacks across all animations and canvas loops.
   - 98% payload reduction: from a 1.4 MB monolithic Wix bundle to a **~25 KB gzipped production build**.

---

## 🛠️ Local Development & Build

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📐 Design Tokens

| Token | Dark Value | Light Value | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#0A0D13` | `#F8FAFC` | Main application canvas |
| `--bg-secondary` | `#11151F` | `#EDF2F7` | Elevated structural panels |
| `--bg-card` | `#161B26` | `#FFFFFF` | Interactive component cards |
| `--border-line` | `#222938` | `#E2E8F0` | Engineering grid boundaries |
| `--accent-laser` | `#00D2FF` | `#0284C7` | Laser beam / optical brand accent |
| `--accent-pass` | `#10B981` | `#10B981` | Nominal 0.00mm tolerance check |
| `--accent-warn` | `#F59E0B` | `#F59E0B` | Warning deviation threshold |
| `--accent-err` | `#EF4444` | `#DC2626` | Out-of-tolerance deviation |
