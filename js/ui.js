/**
 * LEEMDO Project Cart — UI Utilities
 * Toast, Modal, Navbar, Scroll effects, Hamburger, etc.
 */

// ── Toast System ─────────────────────────────────────────────────
function showToast(message, type = 'success', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '!'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || '✓'}</div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── Modal System ─────────────────────────────────────────────────
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Close on overlay click
  overlay.addEventListener('click', function handler(e) {
    if (e.target === overlay) {
      closeModal(id);
      overlay.removeEventListener('click', handler);
    }
  });
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close all modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

// ── Navbar Scroll Effect ─────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const updateNavbar = () => {
    const isHome = window.app && window.app.currentView === 'home';

    if (isHome) {
      navbar.classList.remove('solid');
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
      }
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('transparent');
      navbar.classList.add('solid');
    }
  };

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
}

// ── Hamburger Menu ───────────────────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      closeHamburger();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeHamburger();
  });
}

function closeHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  if (mobileNav) mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Scroll Reveal ────────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Re-observe reveal elements (called after view change)
function refreshScrollReveal() {
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 100);
}

// ── Smooth Counter Animation ─────────────────────────────────────
function animateCounter(el, target, duration = 1500) {
  const isFloat = target % 1 !== 0;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
  }, 16);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ''));
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
}

// ── Ripple Effect ────────────────────────────────────────────────
function initRipple() {
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.classList.add('ripple-btn');
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top  - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple-circle';
      ripple.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${x}px; top: ${y}px;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

// ── FAQ Accordion ────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Particle Background ──────────────────────────────────────────
function initParticles(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 60 + 20;
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.15 + 0.05};
    `;
    container.appendChild(particle);
  }
}

// ── Tab Switcher ─────────────────────────────────────────────────
function initTabs(containerSelector) {
  document.querySelectorAll(containerSelector).forEach(container => {
    const tabs = container.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;
        const parent = tab.closest('[data-tabs-parent]') || container.parentElement;

        // Update tab buttons
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update panels
        parent.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.toggle('active', panel.id === targetId);
        });
      });
    });
  });
}

// ── Auth Tab Switcher ─────────────────────────────────────────────
function switchAuthTab(tab) {
  const loginForm  = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginTab   = document.getElementById('auth-tab-login');
  const signupTab  = document.getElementById('auth-tab-signup');
  const title      = document.getElementById('auth-modal-title');

  if (tab === 'login') {
    loginForm.style.display  = 'block';
    signupForm.style.display = 'none';
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    title.textContent = 'Sign In to LEEMDO';
  } else {
    loginForm.style.display  = 'none';
    signupForm.style.display = 'block';
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    title.textContent = 'Create Your Account';
  }
}

// ── Format Date ───────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Time Ago ──────────────────────────────────────────────────────
function timeAgo(dateStr) {
  const diff = (new Date() - new Date(dateStr)) / 1000;
  if (diff < 86400)    return 'Today';
  if (diff < 172800)   return 'Yesterday';
  if (diff < 604800)   return `${Math.floor(diff / 86400)}d ago`;
  return formatDate(dateStr);
}
