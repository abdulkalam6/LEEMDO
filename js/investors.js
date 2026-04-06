/**
 * LEEMDO — Investors & Buyers Logic
 */

// ── State ─────────────────────────────────────────────────────────
const investorState = {
  sector:    'all',
  range:     'all',
  type:      'all',
  search:    ''
};

// ── Init ──────────────────────────────────────────────────────────
function initInvestors() {
  buildInvestorSidebar();
  renderInvestorSearch();
  renderInvestments();
}

// ── Sidebar ───────────────────────────────────────────────────────
function buildInvestorSidebar() {
  const container = document.getElementById('investor-filter-content');
  if (!container) return;

  container.innerHTML = `
    <div class="filter-section">
      <div class="filter-title">🏢 Sector</div>
      <div class="filter-options">
        ${INVESTOR_SECTORS.map(s => `
          <div class="filter-option ${investorState.sector === s.id ? 'active' : ''}"
               onclick="setInvestorFilter('sector','${s.id}')">
            <span>${s.label}</span>
            <span class="filter-count">${s.count}</span>
          </div>`).join('')}
      </div>
    </div>

    <div class="filter-section">
      <div class="filter-title">💰 Asking Price</div>
      <div class="filter-options">
        ${INVESTOR_PRICE_RANGES.map(r => `
          <div class="filter-option ${investorState.range === r.id ? 'active' : ''}"
               onclick="setInvestorFilter('range','${r.id}')">
            <span>${r.label}</span>
          </div>`).join('')}
      </div>
    </div>

    <div class="filter-section">
      <div class="filter-title">📄 Opportunity Type</div>
      <div class="filter-options">
        ${INVESTOR_TYPES.map(t => `
          <div class="filter-option ${investorState.type === t.id ? 'active' : ''}"
               onclick="setInvestorFilter('type','${t.id}')">
            <span>${t.label}</span>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function setInvestorFilter(key, value) {
  investorState[key] = value;
  buildInvestorSidebar();
  renderInvestments();
}

function resetInvestorFilters() {
  investorState.sector = 'all';
  investorState.range  = 'all';
  investorState.type   = 'all';
  investorState.search = '';
  const s = document.getElementById('investor-search');
  if (s) s.value = '';
  buildInvestorSidebar();
  renderInvestments();
}

// ── Search ────────────────────────────────────────────────────────
function renderInvestorSearch() {
  const el = document.getElementById('investor-search');
  if (!el) return;
  el.addEventListener('input', e => {
    investorState.search = e.target.value.toLowerCase().trim();
    renderInvestments();
  });
}

// ── Filter ────────────────────────────────────────────────────────
function getFilteredInvestments() {
  return INVESTMENTS.filter(inv => {
    if (investorState.sector !== 'all' && inv.sectorId !== investorState.sector) return false;
    if (investorState.range  !== 'all' && inv.priceRange !== investorState.range) return false;
    if (investorState.type   !== 'all' && inv.type !== investorState.type) return false;
    if (investorState.search) {
      const q = investorState.search;
      return inv.name.toLowerCase().includes(q) ||
             inv.sector.toLowerCase().includes(q) ||
             inv.location.toLowerCase().includes(q) ||
             inv.tagline.toLowerCase().includes(q);
    }
    return true;
  });
}

// ── Render Grid ───────────────────────────────────────────────────
function renderInvestments() {
  const grid    = document.getElementById('investor-grid');
  const countEl = document.getElementById('investor-count');
  if (!grid) return;

  const data = getFilteredInvestments();
  if (countEl) countEl.textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 20px">
        <div style="font-size:3rem;margin-bottom:16px">🔍</div>
        <h3 style="color:var(--text-primary);margin-bottom:8px">No opportunities found</h3>
        <p style="color:var(--text-muted);margin-bottom:20px">Try adjusting your filters or search term.</p>
        <button class="btn btn-outline btn-sm" onclick="resetInvestorFilters()">Reset Filters</button>
      </div>`;
    return;
  }

  grid.innerHTML = data.map(inv => renderInvestmentCard(inv)).join('');
}

function renderInvestmentCard(inv) {
  const typeColors = {
    'acquisition': 'badge-blue',
    'partnership': 'badge-green',
    'investment':  'badge-purple',
    'merger':      'badge-orange'
  };
  const typeLabel = {
    'acquisition': '🏢 Acquisition',
    'partnership': '🤝 Partnership',
    'investment':  '📈 Investment',
    'merger':      '🔀 Merger'
  };

  return `
  <div class="investor-card ${inv.featured ? 'featured' : ''}" onclick="openInvestorDetail('${inv.id}')">
    ${inv.featured ? '<div class="franchise-featured-ribbon">⭐ Featured</div>' : ''}

    <!-- Header -->
    <div class="investor-card-header">
      <div class="investor-icon-wrap">${inv.icon}</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;flex-wrap:wrap">
          <span class="investor-card-name">${inv.name}</span>
          ${inv.verified ? '<span class="verified-badge" title="Verified">✓</span>' : ''}
        </div>
        <div class="investor-card-location">📍 ${inv.location} · Est. ${inv.established}</div>
      </div>
      <span class="badge ${typeColors[inv.type] || 'badge-grey'}" style="flex-shrink:0;font-size:0.65rem">${typeLabel[inv.type]}</span>
    </div>

    <!-- Tagline -->
    <p class="investor-card-tagline">${inv.tagline}</p>

    <!-- Key Financials -->
    <div class="investor-financials">
      <div class="inv-financial-item">
        <span class="inv-fin-label">Asking Price</span>
        <span class="inv-fin-value asking">${inv.askingPrice}</span>
      </div>
      <div class="inv-financial-item">
        <span class="inv-fin-label">Annual Revenue</span>
        <span class="inv-fin-value">${inv.revenue}</span>
      </div>
      <div class="inv-financial-item">
        <span class="inv-fin-label">EBITDA</span>
        <span class="inv-fin-value">${inv.ebitda}</span>
      </div>
    </div>

    <!-- Tags -->
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${inv.tags.map(t => `<span class="franchise-highlight-tag">${t}</span>`).join('')}
    </div>

    <!-- Footer -->
    <div class="investor-card-footer">
      <div>
        <div style="font-size:0.65rem;color:var(--text-light);font-weight:600;text-transform:uppercase;letter-spacing:0.06em">ROI Multiple</div>
        <div style="font-size:0.925rem;font-weight:800;color:var(--primary)">${inv.roiMultiple}</div>
      </div>
      <div>
        <div style="font-size:0.65rem;color:var(--text-light);font-weight:600;text-transform:uppercase;letter-spacing:0.06em">Agents / Team</div>
        <div style="font-size:0.925rem;font-weight:800;color:var(--text-primary)">${inv.teamSize}</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openInvestorDetail('${inv.id}')">
        View Details →
      </button>
    </div>
  </div>`;
}

// ── Detail Modal ──────────────────────────────────────────────────
function openInvestorDetail(id) {
  const inv = INVESTMENTS.find(x => x.id === id);
  if (!inv) return;

  const modal = document.getElementById('investor-modal');
  const body  = document.getElementById('investor-modal-body');
  if (!modal || !body) return;

  const typeLabel = { acquisition:'🏢 Acquisition', partnership:'🤝 Partnership', investment:'📈 Investment', merger:'🔀 Merger' };

  body.innerHTML = `
    <!-- Modal Hero -->
    <div class="franchise-modal-hero">
      <div style="display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap">
        <div class="franchise-modal-icon">${inv.icon}</div>
        <div style="flex:1;min-width:200px">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px">
            <h2 style="font-size:1.5rem;font-weight:900;color:var(--white);margin:0">${inv.name}</h2>
            ${inv.verified ? '<span style="background:rgba(76,175,80,0.25);color:#a5d6a7;font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:99px;border:1px solid rgba(76,175,80,0.4)">✓ VERIFIED</span>' : ''}
            ${inv.featured ? '<span style="background:rgba(245,158,11,0.25);color:#fcd34d;font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:99px;border:1px solid rgba(245,158,11,0.4)">⭐ FEATURED</span>' : ''}
          </div>
          <p style="color:rgba(255,255,255,0.75);margin:0 0 12px;font-size:0.9375rem">${inv.tagline}</p>
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <span style="background:rgba(255,255,255,0.12);padding:4px 12px;border-radius:99px;font-size:0.8rem;color:rgba(255,255,255,0.85)">📍 ${inv.location}</span>
            <span style="background:rgba(255,255,255,0.12);padding:4px 12px;border-radius:99px;font-size:0.8rem;color:rgba(255,255,255,0.85)">${inv.sector}</span>
            <span style="background:rgba(255,255,255,0.12);padding:4px 12px;border-radius:99px;font-size:0.8rem;color:rgba(255,255,255,0.85)">${typeLabel[inv.type]}</span>
          </div>
        </div>
      </div>

      <!-- Key Financial Stats -->
      <div class="franchise-modal-stats">
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${inv.askingPrice}</div>
          <div class="franchise-modal-stat-lbl">Asking Price</div>
        </div>
        <div class="franchise-modal-stat-div"></div>
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${inv.revenue}</div>
          <div class="franchise-modal-stat-lbl">Annual Revenue</div>
        </div>
        <div class="franchise-modal-stat-div"></div>
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${inv.ebitda}</div>
          <div class="franchise-modal-stat-lbl">EBITDA</div>
        </div>
        <div class="franchise-modal-stat-div"></div>
        <div class="franchise-modal-stat">
          <div class="franchise-modal-stat-val">${inv.roiMultiple}</div>
          <div class="franchise-modal-stat-lbl">ROI Multiple</div>
        </div>
      </div>
    </div>

    <!-- Modal Content -->
    <div class="franchise-modal-content">
      <div class="franchise-modal-grid">

        <!-- LEFT -->
        <div>
          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">📋 Business Overview</h3>
            <p style="font-size:0.9375rem;line-height:1.75;color:var(--text-secondary)">${inv.about}</p>
          </div>

          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">✨ Key Highlights</h3>
            <div class="franchise-modal-highlights-grid">
              ${inv.highlights.map(h => `
                <div class="franchise-modal-highlight-item">
                  <span class="franchise-modal-highlight-check">✓</span>
                  <span>${h}</span>
                </div>`).join('')}
            </div>
          </div>

          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">📊 Financial Details</h3>
            <div class="investor-financials-table">
              ${Object.entries(inv.financials).map(([k,v]) => `
                <div class="inv-table-row">
                  <span class="inv-table-key">${k}</span>
                  <span class="inv-table-val">${v}</span>
                </div>`).join('')}
            </div>
          </div>

          <div class="franchise-modal-section">
            <h3 class="franchise-modal-section-title">🏷️ Tags</h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${inv.tags.map(t => `<span class="badge badge-green" style="padding:6px 14px;font-size:0.8125rem">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <!-- Business Details Card -->
          <div class="franchise-modal-card">
            <h3 class="franchise-modal-section-title" style="margin-bottom:16px">📌 Business Details</h3>
            ${Object.entries(inv.details).map(([k,v]) => `
              <div class="franchise-req-item">
                <span class="franchise-req-key">${k}</span>
                <span class="franchise-req-val">${v}</span>
              </div>`).join('')}
          </div>

          <!-- Reason for Sale -->
          <div class="franchise-modal-card" style="margin-top:16px">
            <h3 class="franchise-modal-section-title" style="margin-bottom:10px">💡 Reason for Sale</h3>
            <p style="font-size:0.875rem;color:var(--text-secondary);line-height:1.65;margin:0">${inv.reasonForSale}</p>
          </div>

          <!-- CTA -->
          <div class="franchise-cta-card" style="margin-top:16px">
            <div style="font-size:1.25rem;margin-bottom:8px">📩</div>
            <h4 style="font-size:1rem;font-weight:700;margin-bottom:6px;color:var(--text-primary)">Express Interest</h4>
            <p style="font-size:0.8125rem;color:var(--text-muted);margin-bottom:16px">Our M&A team will connect you with the seller within 48 hours under NDA.</p>
            <button class="btn btn-primary" style="width:100%" onclick="expressInterest('${inv.id}','${inv.name}')">
              Express Interest →
            </button>
            <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px" onclick="showToast('Information memorandum coming soon!','info')">
              📄 Request Info Memo
            </button>
          </div>

          <!-- NDA Notice -->
          <div style="margin-top:12px;padding:12px 14px;background:var(--primary-100);border-radius:var(--radius-md);border:1px solid var(--primary-200)">
            <p style="font-size:0.75rem;color:var(--primary-dark);margin:0;line-height:1.5">
              🔒 <strong>Confidential:</strong> All enquiries are handled under NDA. Financials are disclosed only to verified buyers.
            </p>
          </div>
        </div>

      </div>
    </div>`;

  openModal('investor-modal');
}

function expressInterest(id, name) {
  if (!window.app.isLoggedIn) {
    closeModal('investor-modal');
    openModal('auth-modal');
    showToast('Sign in to contact sellers', 'info');
    return;
  }
  closeModal('investor-modal');
  showToast(`📩 Interest expressed for "${name}"! Our M&A team will contact you within 48 hours.`, 'success');
}

// ── Sort ──────────────────────────────────────────────────────────
function sortInvestments(value) {
  const grid = document.getElementById('investor-grid');
  if (!grid) return;
  let data = getFilteredInvestments();

  if (value === 'price-asc')   data = [...data].sort((a,b) => a.priceVal - b.priceVal);
  if (value === 'price-desc')  data = [...data].sort((a,b) => b.priceVal - a.priceVal);
  if (value === 'revenue')     data = [...data].sort((a,b) => b.revenueVal - a.revenueVal);
  if (value === 'featured')    data = [...data].sort((a,b) => (b.featured?1:0) - (a.featured?1:0));

  grid.innerHTML = data.map(inv => renderInvestmentCard(inv)).join('');
}
