export function QuickConsult() {
  return `
    <div id="quick-consult-widget" class="quick-consult-widget" role="complementary" aria-label="Direct Engineer Consultation">
      <a href="https://wa.me/918380809436?text=Hello%20NovaScan%203D%20Engineering%20Team%2C%20I%20would%20like%20to%20consult%20regarding%20a%203D%20scanning%20%2F%20metrology%20project." 
         target="_blank" 
         rel="noopener noreferrer" 
         class="quick-consult-pill"
         aria-label="Chat with Lead Metrologist on WhatsApp (+91 83808 09436)">
        
        <span class="consult-indicator">
          <span class="status-dot dot-green" aria-hidden="true"></span>
          <span class="consult-pulse" aria-hidden="true"></span>
        </span>

        <span class="consult-avatar" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </span>

        <span class="consult-text">
          <span class="consult-title mono">Chat with Lead Metrologist</span>
          <span class="consult-sub mono text-muted">+91 83808 09436</span>
        </span>

        <svg class="consult-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>

      </a>
    </div>
  `;
}
