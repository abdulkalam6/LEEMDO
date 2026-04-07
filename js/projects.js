/**
 * LEEMDO Project Cart — Project Listing & Filtering
 */

// ── State ─────────────────────────────────────────────────────────
let projectFilters = {
  type:     'all',
  country:  'all',
  industry: 'all',
  payout:   'all',
  search:   ''
};

let appliedProjects = JSON.parse(localStorage.getItem('leemdo_applied') || '[]');

// ── Render Projects ───────────────────────────────────────────────
function getFilteredProjects() {
  return PROJECTS.filter(p => {
    const { type, country, industry, payout, search } = projectFilters;
    if (type !== 'all' && p.type !== type) return false;
    if (country !== 'all' && p.country !== country) return false;
    if (industry !== 'all' && p.industry !== industry) return false;
    if (payout !== 'all' && p.payout_type !== payout) return false;
    if (search) {
      const q = search.toLowerCase();
      const haystack = `${p.title} ${p.description} ${p.tags.join(' ')}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

function renderProjectCard(project) {
  const isApplied = appliedProjects.includes(project.id);
  const timeSince = timeAgo(project.postedDate);

  return `
    <div class="project-card reveal" data-id="${project.id}" onclick="openProjectDetail(${project.id})">
      <div class="project-card-header">
        <div class="project-card-icon">${project.icon}</div>
        <div class="project-card-badges">
          <span class="badge ${project.badge}">${project.category}</span>
          <span class="badge badge-grey">${project.flag} ${project.country}</span>
          ${project.featured ? '<span class="badge badge-orange">⭐ Featured</span>' : ''}
        </div>
      </div>

      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>

      <div class="project-card-meta">
        <span class="project-meta-item">
          <span class="icon">🏭</span>${project.industry}
        </span>
        <span class="project-meta-item">
          <span class="icon">👥</span>${project.requirements.agents}
        </span>
        <span class="project-meta-item">
          <span class="icon">🕐</span>${timeSince}
        </span>
      </div>

      <div class="project-card-footer">
        <div class="payout-info">
          <span class="payout-label">${project.payout_type} Payout</span>
          <span class="payout-value">${project.payout}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="handleApply(event, ${project.id})">
          ${isApplied ? '✓ Applied' : 'View Details'}
        </button>
      </div>
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const countEl = document.getElementById('projects-count-num');
  if (!grid) return;

  const filtered = getFilteredProjects();

  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="icon">🔍</div>
        <h3>No projects found</h3>
        <p>Try adjusting your filters or search terms.</p>
        <button class="btn btn-outline" style="margin-top:16px" onclick="resetFilters()">Clear Filters</button>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(renderProjectCard).join('');
  }

  refreshScrollReveal();
}

function resetFilters() {
  projectFilters = { type: 'all', country: 'all', industry: 'all', payout: 'all', search: '' };

  // Reset UI
  document.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
  document.querySelectorAll('[data-filter-all]').forEach(o => o.classList.add('active'));

  const searchInput = document.getElementById('project-search');
  if (searchInput) searchInput.value = '';

  renderProjects();
}

// ── Filter UI ─────────────────────────────────────────────────────
function initProjectFilters() {
  // Render filter sidebar
  renderFilterSidebar();

  // Search
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        projectFilters.search = e.target.value.trim();
        renderProjects();
      }, 300);
    });
  }

  // Mobile filter toggle
  const filterToggleBtn = document.getElementById('mobile-filter-btn');
  const filterSidebar    = document.querySelector('.filter-sidebar');
  if (filterToggleBtn && filterSidebar) {
    filterToggleBtn.addEventListener('click', () => {
      filterSidebar.classList.toggle('show');
    });
  }
}

function renderFilterSidebar() {
  const sidebar = document.getElementById('filter-sidebar-content');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <!-- Type Filter -->
    <div class="filter-section">
      <div class="filter-title">📂 Type</div>
      <div class="filter-options">
        <div class="filter-option active" data-filter-all data-filter="type" data-val="all" onclick="setFilter('type','all',this)">
          All Types <span class="filter-count">14</span>
        </div>
        <div class="filter-option" data-filter="type" data-val="voice" onclick="setFilter('type','voice',this)">
          🎙️ Voice <span class="filter-count">8</span>
        </div>
        <div class="filter-option" data-filter="type" data-val="non-voice" onclick="setFilter('type','non-voice',this)">
          💬 Non-Voice <span class="filter-count">3</span>
        </div>
        <div class="filter-option" data-filter="type" data-val="it" onclick="setFilter('type','it',this)">
          🖥️ IT Projects <span class="filter-count">3</span>
        </div>
      </div>
    </div>

    <!-- Country Filter -->
    <div class="filter-section">
      <div class="filter-title">🌍 Country</div>
      <div class="filter-options">
        <div class="filter-option active" data-filter-all data-filter="country" data-val="all" onclick="setFilter('country','all',this)">All Countries</div>
        <div class="filter-option" data-filter="country" data-val="US" onclick="setFilter('country','US',this)">🇺🇸 United States</div>
        <div class="filter-option" data-filter="country" data-val="UK" onclick="setFilter('country','UK',this)">🇬🇧 United Kingdom</div>
      </div>
    </div>

    <!-- Industry Filter -->
    <div class="filter-section">
      <div class="filter-title">🏭 Industry</div>
      <div class="filter-options">
        <div class="filter-option active" data-filter-all data-filter="industry" data-val="all" onclick="setFilter('industry','all',this)">All Industries</div>
        ${['Finance','Healthcare','Insurance','Legal','Energy','Technology','Publishing'].map(ind =>
          `<div class="filter-option" data-filter="industry" data-val="${ind}" onclick="setFilter('industry','${ind}',this)">${ind}</div>`
        ).join('')}
      </div>
    </div>

    <!-- Payout Filter -->
    <div class="filter-section">
      <div class="filter-title">💵 Payout Type</div>
      <div class="filter-options">
        <div class="filter-option active" data-filter-all data-filter="payout" data-val="all" onclick="setFilter('payout','all',this)">All Types</div>
        ${['CPL','CPA','Commission','Fixed'].map(pt =>
          `<div class="filter-option" data-filter="payout" data-val="${pt}" onclick="setFilter('payout','${pt}',this)">${pt}</div>`
        ).join('')}
      </div>
    </div>

    <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px" onclick="resetFilters()">
      ↺ Reset Filters
    </button>
  `;
}

function setFilter(filterKey, value, el) {
  projectFilters[filterKey] = value;

  // Update UI — only within same filter group
  const allInGroup = document.querySelectorAll(`[data-filter="${filterKey}"]`);
  allInGroup.forEach(o => o.classList.remove('active'));
  if (el) el.classList.add('active');

  renderProjects();
}

// ── Project Detail Modal ──────────────────────────────────────────
function openProjectDetail(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const isApplied = appliedProjects.includes(projectId);
  const content = document.getElementById('project-detail-content');

  content.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:24px">
      <div style="font-size:3rem;background:var(--gradient-green);border-radius:16px;width:72px;height:72px;display:flex;align-items:center;justify-content:center;border:1px solid var(--primary-200);flex-shrink:0">${project.icon}</div>
      <div style="flex:1">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <span class="badge ${project.badge}">${project.category}</span>
          <span class="badge badge-grey">${project.flag} ${project.country}</span>
          ${project.featured ? '<span class="badge badge-orange">⭐ Featured</span>' : ''}
          <span class="badge badge-green badge-dot">${project.active ? 'Active' : 'Inactive'}</span>
        </div>
        <h2 style="font-size:1.25rem;font-weight:800;margin-bottom:4px">${project.title}</h2>
        <p style="font-size:0.875rem;color:var(--text-muted)">${project.industry} • ${project.payout_type} • Posted ${formatDate(project.postedDate)}</p>
      </div>
    </div>

    <div style="background:var(--gradient-green);border:1px solid var(--primary-200);border-radius:12px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:24px">
      <div>
        <div style="font-size:0.75rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Payout</div>
        <div style="font-size:1.25rem;font-weight:800;color:var(--primary)">${project.payout}</div>
      </div>
      <div>
        <div style="font-size:0.75rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Type</div>
        <div style="font-size:1rem;font-weight:700;color:var(--text-primary)">${project.payout_type}</div>
      </div>
      <div>
        <div style="font-size:0.75rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Applications</div>
        <div style="font-size:1rem;font-weight:700;color:var(--text-primary)">${project.applications} received</div>
      </div>
    </div>

    <div style="margin-bottom:20px">
      <h4 style="font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:12px">📋 Project Overview</h4>
      <p style="font-size:0.9375rem;line-height:1.75;color:var(--text-secondary)">${project.description}</p>
    </div>

    <div style="margin-bottom:20px">
      <h4 style="font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:12px">⚙️ Requirements</h4>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">
        ${Object.entries(project.requirements).map(([key, val]) => `
          <div style="background:var(--bg);border-radius:10px;padding:12px 14px;border:1px solid var(--border-light)">
            <div style="font-size:0.7rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">${key.replace(/_/g,' ')}</div>
            <div style="font-size:0.8125rem;font-weight:600;color:var(--text-primary)">${val}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom:24px">
      <h4 style="font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:12px">🏷️ Tags</h4>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>

    <div style="padding-top:20px;border-top:1px solid var(--border-light);display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn-primary" id="apply-btn-detail" onclick="handleApply(event, ${project.id})" style="flex:1;min-width:140px">
        ${isApplied ? '✓ Application Sent' : '🚀 Apply Now'}
      </button>
      <button class="btn btn-outline" onclick="closeModal('project-detail-modal')">Close</button>
    </div>
  `;

  openModal('project-detail-modal');
}

// ── Apply Logic ───────────────────────────────────────────────────
function handleApply(event, projectId) {
  event.stopPropagation();

  const isLoggedIn = window.app && window.app.currentUser;

  if (!isLoggedIn) {
    openModal('auth-modal');
    showToast('Please sign in to apply for projects', 'info');
    return;
  }

  if (appliedProjects.includes(projectId)) {
    showToast('You have already applied to this project', 'info');
    return;
  }

  appliedProjects.push(projectId);
  localStorage.setItem('leemdo_applied', JSON.stringify(appliedProjects));

  showToast('🎉 Application submitted successfully!', 'success');

  // Update buttons
  document.querySelectorAll(`[data-id="${projectId}"] .btn`).forEach(btn => {
    btn.textContent = '✓ Applied';
  });

  const applyBtnDetail = document.getElementById('apply-btn-detail');
  if (applyBtnDetail) {
    applyBtnDetail.textContent = '✓ Application Sent';
    applyBtnDetail.disabled = true;
  }

  renderProjects();
}

// ── Featured Projects for Home ─────────────────────────────────────
function renderFeaturedProjects() {
  const container = document.getElementById('featured-projects-grid');
  if (!container) return;

  const featured = PROJECTS.filter(p => p.featured).slice(0, 3);
  container.innerHTML = featured.map(renderProjectCard).join('');
  refreshScrollReveal();
}
