import './styles/main.css';

import { TactileBackground, initTactileBackground } from './components/TactileBackground.js';
import { Header } from './components/Header.js';
import { Hero, initHeroFlangeCanvas } from './components/Hero.js';
import { MetricsTicker } from './components/MetricsTicker.js';
import { CanvasViewer, initCanvasViewer } from './components/CanvasViewer.js';
import { Capabilities } from './components/Capabilities.js';
import { ComparisonSlider, initComparisonSlider } from './components/ComparisonSlider.js';
import { WorkflowStrip } from './components/WorkflowStrip.js';
import { QuickConsult } from './components/QuickConsult.js';
import { Footer } from './components/Footer.js';

// Mount Application Structure
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    ${TactileBackground()}
    ${Header()}
    <main id="main-content">
      ${Hero()}
      ${MetricsTicker()}
      <div id="3D-Inspector"></div>
      ${CanvasViewer()}
      ${Capabilities()}
      ${ComparisonSlider()}
      <div id="workflow">
        ${WorkflowStrip()}
      </div>
    </main>
    ${QuickConsult()}
    ${Footer()}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tactile Proximity Canvas
  initTactileBackground();

  // 2. 5-Stage Metrology Flange Canvas in Hero
  initHeroFlangeCanvas();

  // 3. Theme Management (Light mode default #FAFAFA / Dark mode)
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const darkIcon = document.querySelector('.theme-icon-dark');
  const lightIcon = document.querySelector('.theme-icon-light');

  const savedTheme = localStorage.getItem('novascan_precision_theme') || 'light';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('novascan_precision_theme', t);
    if (darkIcon && lightIcon) {
      if (t === 'dark') {
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
      } else {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
      }
    }
  }

  // 4. Mobile Navigation Drawer
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.classList.toggle('open', isOpen);
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        mobileBtn.focus();
      }
    });
  }

  // 5. Initialize Interactive Subsystems
  initCanvasViewer();
  initComparisonSlider();
});
