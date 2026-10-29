import './styles/main.css';

import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { CanvasViewer, initCanvasViewer } from './components/CanvasViewer.js';
import { MetricsTicker } from './components/MetricsTicker.js';
import { Capabilities, initCapabilities } from './components/Capabilities.js';
import { ComparisonSlider, initComparisonSlider } from './components/ComparisonSlider.js';
import { SensorFusion } from './components/SensorFusion.js';
import { CaseStudies } from './components/CaseStudies.js';
import { RFQCalculator, initRFQCalculator } from './components/RFQCalculator.js';
import { Footer } from './components/Footer.js';

// Render the application tree
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    ${Header()}
    <main id="main-content">
      ${Hero()}
      ${CanvasViewer()}
      ${MetricsTicker()}
      ${Capabilities()}
      ${ComparisonSlider()}
      ${SensorFusion()}
      ${CaseStudies()}
      ${RFQCalculator()}
    </main>
    ${Footer()}
  `;
}

// Initialize Interactive Behaviors
document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light)
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const darkIcon = document.querySelector('.theme-icon-dark');
  const lightIcon = document.querySelector('.theme-icon-light');

  const savedTheme = localStorage.getItem('novascan_theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  function setTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('novascan_theme', t);
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

  // 2. Mobile Drawer Navigation
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.classList.toggle('open', isOpen);
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close on navigation click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on Escape key
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

  // 3. Number Counter Animation on Intersection
  const metricCards = document.querySelectorAll('.metric-number');
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!RM && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const isFloat = String(target).includes('.');
          let current = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = isFloat ? target.toFixed(1) : Math.round(target);
              clearInterval(timer);
            } else {
              el.textContent = isFloat ? current.toFixed(1) : Math.round(current);
            }
          }, 25);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    metricCards.forEach(mc => observer.observe(mc));
  }

  // 4. Initialize Subsystems
  initCanvasViewer();
  initCapabilities();
  initComparisonSlider();
  initRFQCalculator();
});
