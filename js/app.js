/**
 * LEEMDO Project Cart — Main App Router
 */

window.app = {
  currentView: 'home',
  currentUser: null,
  isLoggedIn: false
};

// ── View Definitions ─────────────────────────────────────────────
const VIEWS = ['home', 'projects', 'dashboard', 'about', 'contact'];

// ── Navigate ─────────────────────────────────────────────────────
function navigateTo(view, pushState = true) {
  // Validate
  if (!VIEWS.includes(view)) view = 'home';

  // Check dashboard access
  if (view === 'dashboard' && !window.app.isLoggedIn) {
    openModal('auth-modal');
    showToast('Please sign in to access your dashboard', 'info');
    return;
  }

  // Hide all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  // Show target view
  const target = document.getElementById(`${view}-view`);
  if (target) {
    target.classList.add('active');
    target.classList.add('page-enter');
    setTimeout(() => target.classList.remove('page-enter'), 400);
  }

  window.app.currentView = view;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update nav link active states
  updateNavState(view);

  // Update navbar style
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (view === 'home') {
      navbar.classList.remove('solid');
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
      navbar.classList.remove('scrolled');
      navbar.classList.add('solid');
    }
  }

  // View-specific init
  if (view === 'projects') {
    initProjectFilters();
    renderProjects();
  }

  if (view === 'dashboard') {
    renderDashboard();
    switchDashPanel('overview');
  }

  if (view === 'home') {
    renderFeaturedProjects();
    initCounters();
    refreshScrollReveal();
  }

  // Update hash
  if (pushState) {
    history.pushState({ view }, '', `#${view}`);
  }

  // Close mobile nav
  if (typeof closeHamburger === 'function') closeHamburger();
}

function updateNavState(view) {
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === view);
  });
}

// ── Auth ─────────────────────────────────────────────────────────
function handleLogin(e) {
  if (e) e.preventDefault();

  const email    = document.getElementById('login-email')?.value;
  const password = document.getElementById('login-password')?.value;

  if (!email || !password) {
    showToast('Please fill in all fields', 'error');
    return;
  }

  // Mock login
  window.app.currentUser = {
    name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    email,
    role: 'provider'
  };
  window.app.isLoggedIn = true;

  closeModal('auth-modal');
  updateAuthUI();
  showToast(`Welcome back, ${window.app.currentUser.name}! 🎉`, 'success');
}

function handleSignup(e) {
  if (e) e.preventDefault();

  const name  = document.getElementById('signup-name')?.value;
  const email = document.getElementById('signup-email')?.value;
  const pass  = document.getElementById('signup-password')?.value;

  if (!name || !email || !pass) {
    showToast('Please fill in all required fields', 'error');
    return;
  }

  window.app.currentUser = { name, email, role: 'provider' };
  window.app.isLoggedIn  = true;

  closeModal('auth-modal');
  updateAuthUI();
  showToast(`Welcome to LEEMDO, ${name}! 🚀`, 'success');
}

function handleLogout() {
  window.app.currentUser = null;
  window.app.isLoggedIn  = false;
  updateAuthUI();
  navigateTo('home');
  showToast('You have been signed out', 'info');
}

function updateAuthUI() {
  const loginBtnDesktop  = document.getElementById('nav-login-btn');
  const loginBtnMobile   = document.getElementById('mobile-login-btn');
  const userPillDesktop  = document.getElementById('nav-user-pill');
  const userPillMobile   = document.getElementById('mobile-user-pill');
  const userNameEl       = document.getElementById('user-pill-name');

  if (window.app.isLoggedIn && window.app.currentUser) {
    if (loginBtnDesktop) loginBtnDesktop.style.display = 'none';
    if (loginBtnMobile)  loginBtnMobile.style.display  = 'none';
    if (userPillDesktop) userPillDesktop.style.display = 'flex';
    if (userPillMobile)  userPillMobile.style.display  = 'flex';
    if (userNameEl) userNameEl.textContent = window.app.currentUser.name.split(' ')[0];
  } else {
    if (loginBtnDesktop) loginBtnDesktop.style.display = '';
    if (loginBtnMobile)  loginBtnMobile.style.display  = '';
    if (userPillDesktop) userPillDesktop.style.display = 'none';
    if (userPillMobile)  userPillMobile.style.display  = 'none';
  }
}

// ── Post Project Form ─────────────────────────────────────────────
function handlePostProject(e) {
  if (e) e.preventDefault();
  showToast('Project posted! It will be reviewed within 24 hours.', 'success');
  closeModal('post-project-modal');
}

// ── Handle Hash Routing ──────────────────────────────────────────
function handleHashChange() {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigateTo(hash, false);
}

// ── Pricing Section Scroll ────────────────────────────────────────
function navigateTo_pricing() {
  navigateTo('home');
  setTimeout(() => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

// ── Init App ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Init UI systems
  initNavbar();
  initHamburger();
  initScrollReveal();
  initFAQ();

  // Handle routing
  window.addEventListener('popstate', handleHashChange);
  handleHashChange();

  // Render home content
  renderFeaturedProjects();

  // Auth UI state
  updateAuthUI();

  // Delayed ripple init
  setTimeout(initRipple, 500);

  // Init particles on hero
  initParticles('hero-particles');

  console.log('%cLEEMDO Project Cart 🌳', 'color:#2e7d32;font-size:18px;font-weight:900;');
  console.log('%cVersion 1.0 | Connecting Projects. Empowering Growth.', 'color:#4caf50;font-size:12px;');
});
