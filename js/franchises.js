/**
 * LEEMDO — Franchises View Logic
 */

// ── State ─────────────────────────────────────────────────────────
const franchiseState = {
  sector:    'all',
  range:     'all',
  model:     'all',
  search:    '',
  view:      'grid'   // 'grid' | 'list'
};

// ── Init ──────────────────────────────────────────────────────────
function initFranchises() {
  buildFranchiseSidebar();
  renderFranchiseSearch();
  renderFranchises();
}

// ── Sidebar Filters ───────────────────────────────────────────────
function buildFranchiseSidebar() {
  const container = document.getElementById('franchise-filter-content');
  if (!container) return;

  container.innerHTML = `
    <!-- Sector -->
    <div class="filter-section">
      <div class="filter-title">🏢 Sector</div>
      <div class="filter-options">
        ${FRANCHISE_SECTORS.map(s => `
          <div class="filter-option ${franchiseState.sector === s.id ? 'active' : ''}"
               onclick="setFranchiseFilter('sector','${s.id}')">
            <span>${s.label}</span>
            <span class="filter-count">${s.count}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- Investment Range -->
    <div class="filter-section">
      <div class="filter-title">💰 Investment Range</div>
      <div class="filter-options">
        ${FRANCHISE_INVESTMENT_RANGES.map(r => `
          <div class="filter-option ${franchiseState.range === r.id ? 'active' : ''}"
               onclick="setFranchiseFilter('range','${r.id}')">
            <span>${r.label}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- Model -->
    <div class="filter-section">
      <div class="filter-title">📄 Franchise Model</div>
      <div class="filter-options">
        ${FRANCHISE_MODELS.map(m => `
          <div class="filter-option ${franchiseState.model === m.id ? 'active' : ''}"
               onclick="setFranchiseFilter('model','${m.id.replace(/ /g,'__')}')">
            <span>${m.label}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- Verified Only -->
    <div class="filter-section">
      <div class="filter-title">✅ Status</div>
      <div class="filter-options">
        <div class="filter-option ${franchiseState.verified === true ? 'active' : ''}"
             onclick="setFranchiseFilter('verified','true')">
          <span>🛡️ Verified Only</span>
        </div>
        <div class="filter-option ${!franchiseState.verified ? 'active' : ''}"
             onclick="setFranchiseFilter('verified','all')">
          <span>All Listings</span>
        </div>
      </div>
    </div>
  `;
}

function setFranchiseFilter(key, value) {
  if (key === 'model') value = value.replace(/__/g, ' ');
  if (key === 'verified') {
    franchiseState.verified = value === 'true' ? true : null;
  } else {
    franchiseState[key] = value;
  }
  buildFranchiseSidebar();
  renderFranchises();
}

function resetFranchiseFilters() {
  franchiseState.sector   = 'all';
  franchiseState.range    = 'all';
  franchiseState.model    = 'all';
  franchiseState.search   = '';
  franchiseState.verified = null;
  const searchEl = document.getElementById('franchise-search');
  if (searchEl) searchEl.value = '';
  buildFranchiseSidebar();
  renderFranchises();
}

// ── Search Bar ────────────────────────────────────────────────────
function renderFranchiseSearch() {
  const searchEl = document.getElementById('franchise-search');
  if (!searchEl) return;
  searchEl.addEventListener('input', (e) => {
    franchiseState.search = e.target.value.toLowerCase().trim();
    renderFranchises();
  });
}

// ── Filter Data ───────────────────────────────────────────────────
function getFilteredFranchises() {
  return FRANCHISES.filter(f => {
    if (franchiseState.sector !== 'all' && f.sectorId !== franchiseState.sector) return false;
    if (franchiseState.range  !== 'all' && f.investmentRange !== franchiseState.range) return false;
    if (franchiseState.model  !== 'all' && f.model !== franchiseState.model) return false;
    if (franchiseState.verified && !f.verified) return false;
    if (franchiseState.search) {
      const q = franchiseState.search;
      return f.name.toLowerCase().includes(q) ||
             f.tagline.toLowerCase().includes(q) ||
             f.sector.toLowerCase().includes(q) ||
             (f.territories || []).some(t => t.toLowerCase().includes(q));
    }
    return true;
  });
}

// ── Render Grid ───────────────────────────────────────────────────
function renderFranchises() {
  const grid = document.getElementById('franchise-grid');
  const countEl = document.getElementById('franchise-count');
  if (!grid) return;

  const data = getFilteredFranchises();
  if (countEl) countEl.textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 20px">
        <div style="font-size:3rem;margin-bottom:16px">🔍</div>
        <h3 style="color:var(--text-primary);margin-bottom:8px">No franchises found</h3>
        <p style="color:var(--text-muted);margin-bottom:20px">Try adjusting your filters or search term.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFranchiseFilters()">Reset Filters</button>
      </div>`;
    return;
  }

  grid.innerHTML = data.map(f => renderFranchiseCard(f)).join('');
}

function renderFranchiseCard(f) {
  const stars = '★'.repeat(Math.floor(f.rating)) + (f.rating % 1 >= 0.5 ? '½' : '') ;
  return `
  <div class="franchise-card ${f.featured ? 'featured' : ''}" onclick="openFranchiseDetail('${f.id}')">
    ${f.featured ? '<div class="franchise-featured-ribbon">⭐ Featured</div>' : ''}

    <!-- Header -->
    <div class="franchise-card-header">
      <div class="franchise-icon-wrap">
        <span>${f.icon}</span>
      </div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span class="franchise-card-name">${f.name}</span>
          ${f.verified ? '<span class="verified-badge" title="Verified">✓</span>' : ''}
        </div>
        <div class="franchise-card-sector">${f.flag} ${f.sector}</div>
      </div>
      <span class="badge ${f.badge}" style="flex-shrink:0">${f.model === 'Master Franchise' ? '👑 Master' : '🤝 Franchise'}</span>
    </div>

    <!-- Tagline -->
    <p class="franchise-card-tagline">${f.tagline}</p>

    <!-- Key Metrics -->
    <div class="franchise-metrics">
      <div class="franchise-metric">
        <span class="franchise-metric-label">Investment</span>
        <span class="franchise-metric-value">${f.investment.label}</span>
      </div>
      <div class="franchise-metric">
        <span class="franchise-metric-label">ROI Period</span>
        <span class="franchise-metric-value">${f.roi}</span>
      </div>
      <div class="franchise-metric">
        <span class="franchise-metric-label">Team Size</span>
        <span class="franchise-metric-value">${f.seats}</span>
      </div>
    </div>

    <!-- Highlights -->
    <div class="franchise-highlights">
      ${f.highlights.slice(0,3).map(h => `<span class="franchise-highlight-tag">✓ ${h}</span>`).join('')}
    </div>

    <!-- Footer -->
    <div class="franchise-card-footer">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="color:#f59e0b;font-size:0.75rem;letter-spacing:0.05em">${stars}</span>
        <span style="font-size:0.75rem;color:var(--text-muted)">${f.rating} · ${f.reviews} reviews</span>
      </div>
      <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openFranchiseDetail('${f.id}')">
        View Details →
      </button>
    </div>
  </div>`;
}

// ── Franchise Detail Modal ────────────────────────────────────────
function openFranchiseDetail(id) {
  const f = FRANCHISES.find(x => x.id === id);
  if (!f) return;

  const stars = '★'.repeat(Math.floor(f.rating));
  const modal = document.getElementById('franchise-modal');
  const body  = document.getElementById('franchise-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <!-- Modal Hero -->
    <div class="franchise-modal-hero">
      <div style="display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap">
        <div class="franchise-modal-icon">${f.icon}</div>
        <div style="flex:1;min-width:200px">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">
            <h2 style="font-size:1.5rem;font-weight:900;color:var(--white);margin:0">${f.name}</h2>
            ${f.verified ? '<span style="background:rgba(76,175,80,0.25);color:#a5d6a7;font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:99px;border:1px solid rgba(76,175,80,0.4)">✓ VERIFIED</span>' : ''}
            ${f.featured ? '<span style="background:rgba(245,158,11,0.25);color:#fcd34d;font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:99px;border:1px solid rgba(245,158,11,0.4)">⭐ FEATURED</span>' : ''}
          </div>
          <p style="color:rgba(255,255,255,0.75);margin:0 0 12px;font-size:0.9375rem">${f.tagline}</p>
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <span style="background:rgba(255,255,255,0.12);padding:4px 12px;border-radius:99px;font-size:0.8rem;color:rgba(255,255,255,0.85)">${f.flag} ${f.sector}</span>
            <span style="background:rgba(255,255,255,0.12);padding:4px 12px;border-radius:99px;font-size:0.8rem;color:rgba(255,255,255,0.85)">📄 ${f.model}</span>
            <span style="color:#f59e0b;font-size:0.875rem">${stars} ${f.rating} (${f.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <!-- Key Stats Row -->
      <div class="franchise-modal-stats">
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${f.investment.label}</div>
          <div class="franchise-modal-stat-lbl">Investment Range</div>
        </div>
        <div class="franchise-modal-stat-div"></div>
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${f.roi}</div>
          <div class="franchise-modal-stat-lbl">ROI Period</div>
        </div>
        <div class="franchise-modal-stat-div"></div>
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${f.seats}</div>
          <div class="franchise-modal-stat-lbl">Team Size</div>
        </div>
        <div class="franchise-modal-stat-div"></div>
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">Est. ${f.established}</div>
          <div class="franchise-modal-stat-lbl">Founded</div>
        </div>
      </div>
    </div>

    <!-- Modal Body Content -->
    <div class="franchise-modal-content">
      <div class="franchise-modal-grid">

        <!-- LEFT -->
        <div>
          <!-- About -->
          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">📋 About This Franchise</h3>
            <p style="font-size:0.9375rem;line-height:1.75;color:var(--text-secondary)">${f.about}</p>
          </div>

          <!-- Highlights -->
          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">✨ Key Highlights</h3>
            <div class="franchise-modal-highlights-grid">
              ${f.highlights.map(h => `
                <div class="franchise-modal-highlight-item">
                  <span class="franchise-modal-highlight-check">✓</span>
                  <span>${h}</span>
                </div>`).join('')}
            </div>
          </div>

          <!-- Campaigns Available -->
          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">📡 Campaigns Available</h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${f.campaigns.map(c => `<span class="badge badge-green" style="padding:6px 14px;font-size:0.8125rem">${c}</span>`).join('')}
            </div>
          </div>

          <!-- Territories -->
          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">🌍 Available Territories</h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${f.territories.map(t => `<span class="badge badge-grey" style="padding:6px 14px;font-size:0.8125rem">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <!-- Requirements -->
          <div class="franchise-modal-card">
            <h3 class="franchise-modal-section-title" style="margin-bottom:16px">📌 Requirements</h3>
            ${Object.entries(f.requirements).map(([k, v]) => `
              <div class="franchise-req-item">
                <span class="franchise-req-key">${k.charAt(0).toUpperCase() + k.slice(1)}</span>
                <span class="franchise-req-val">${v}</span>
              </div>`).join('')}
          </div>

          <!-- Support Included -->
          <div class="franchise-modal-card" style="margin-top:16px">
            <h3 class="franchise-modal-section-title" style="margin-bottom:16px">🤝 Support Included</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
              ${f.support.map(s => `
                <li style="display:flex;align-items:flex-start;gap:10px;font-size:0.875rem;color:var(--text-secondary)">
                  <span style="color:var(--primary);font-size:1rem;margin-top:1px">✓</span>
                  <span>${s}</span>
                </li>`).join('')}
            </ul>
          </div>

          <!-- CTA Card -->
          <div class="franchise-cta-card" style="margin-top:16px">
            <div style="font-size:1.25rem;margin-bottom:8px">🚀</div>
            <h4 style="font-size:1rem;font-weight:700;margin-bottom:6px;color:var(--text-primary)">Ready to Apply?</h4>
            <p style="font-size:0.8125rem;color:var(--text-muted);margin-bottom:16px">Express your interest and our franchise team will contact you within 48 hours.</p>
            <button class="btn btn-primary" style="width:100%" onclick="applyForFranchise('${f.id}','${f.name}')">
              Apply for Franchise →
            </button>
            <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px" onclick="showToast('Brochure download coming soon!','info')">
              📄 Download Brochure
            </button>
          </div>
        </div>

      </div>
    </div>`;

  openModal('franchise-modal');
}

function applyForFranchise(id, name) {
  if (!window.app.isLoggedIn) {
    closeModal('franchise-modal');
    openModal('auth-modal');
    showToast('Sign in to apply for franchises', 'info');
    return;
  }
  closeModal('franchise-modal');
  showToast(`\u2705 Application submitted for "${name}"! Our team will contact you within 48 hours.`, 'success');
}

// ── Sort ──────────────────────────────────────────────────────────
function sortFranchises(value) {
  const grid = document.getElementById('franchise-grid');
  if (!grid) return;
  let data = getFilteredFranchises();

  if (value === 'investment-asc')  data = [...data].sort((a,b) => a.investment.min - b.investment.min);
  if (value === 'investment-desc') data = [...data].sort((a,b) => b.investment.min - a.investment.min);
  if (value === 'rating')          data = [...data].sort((a,b) => b.rating - a.rating);
  if (value === 'newest')          data = [...data].sort((a,b) => b.established - a.established);
  if (value === 'featured')        data = [...data].sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  grid.innerHTML = data.map(f => renderFranchiseCard(f)).join('');
}
