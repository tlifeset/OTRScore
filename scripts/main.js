// OTRScore.com — Main JS

// Mobile nav toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10
      ? 'rgba(240,237,230,0.12)'
      : 'rgba(240,237,230,0.08)';
  }, { passive: true });
}

// Profile page tabs
function showProfileTab(id, el) {
  document.querySelectorAll('.profile-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('active');
  if (el) el.classList.add('active');
}

// Expose globally for onclick handlers
window.showProfileTab = showProfileTab;

// Animate numbers on scroll (intersection observer)
const animateNumbers = () => {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const isFloat = el.dataset.count.includes('.');
        const duration = 800;
        const start = performance.now();
        const update = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = target * ease;
          el.textContent = isFloat
            ? current.toFixed(1) + '%'
            : Math.round(current).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  nums.forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', animateNumbers);
