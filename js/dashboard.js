/**
 * LEEMDO Project Cart — Dashboard
 */

// ── Mock Dashboard Data ──────────────────────────────────────────
const DASHBOARD_USER = {
  name: "Alex Johnson",
  role: "Service Provider",
  company: "CallPro Solutions",
  avatar: "AJ",
  plan: "Professional",
  joinDate: "Jan 2026",
  stats: {
    applied: 7,
    active: 3,
    earnings: "$12,450",
    messages: 4
  }
};

const MY_APPLICATIONS = [
  {
    project: "Mortgage & Loan Processing Campaign",
    status: "Under Review",
    statusClass: "badge-orange",
    date: "2026-04-01",
    payout: "$18–$35/Lead"
  },
  {
    project: "Solar Appointment Setting (Residential)",
    status: "Accepted",
    statusClass: "badge-green",
    date: "2026-03-28",
    payout: "$25–$60/Appt"
  },
  {
    project: "MVA Campaign",
    status: "Active",
    statusClass: "badge-teal",
    date: "2026-03-20",
    payout: "$22–$55/Lead"
  },
  {
    project: "ACA Health Insurance",
    status: "Pending",
    statusClass: "badge-grey",
    date: "2026-04-03",
    payout: "$30–$70/Sale"
  }
];

const MY_PROJECTS_PROVIDER = [
  {
    title: "Home Insulation ECO4 UK",
    applicants: 15,
    status: "Active",
    statusClass: "badge-green",
    budget: "£18–£40/Lead",
    views: 342
  },
  {
    title: "Insurance Voice Campaign UK",
    applicants: 9,
    status: "Active",
    statusClass: "badge-green",
    budget: "£22/Policy",
    views: 198
  }
];

const MESSAGES = [
  {
    from: "LEEMDO Support",
    avatar: "LS",
    message: "Your Professional plan is active. Enjoy unlimited applications!",
    time: "2h ago",
    unread: true
  },
  {
    from: "InsureTech US",
    avatar: "IU",
    message: "We reviewed your application for the ACA campaign. Let's schedule a call.",
    time: "1d ago",
    unread: true
  },
  {
    from: "SunPath Solutions",
    avatar: "SS",
    message: "Your solar campaign application has been accepted. Onboarding materials attached.",
    time: "3d ago",
    unread: false
  }
];

// ── Render Dashboard ─────────────────────────────────────────────
function renderDashboard() {
  renderDashOverview();
  renderDashApplications();
  renderDashMessages();
  renderDashSettings();
}

function renderDashOverview() {
  const panel = document.getElementById('dash-overview');
  if (!panel) return;

  const stats = DASHBOARD_USER.stats;

  panel.innerHTML = `
    <div class="dash-header">
      <div>
        <h1>Good ${getGreeting()}, ${DASHBOARD_USER.name.split(' ')[0]}! 👋</h1>
        <p>${DASHBOARD_USER.company} · ${DASHBOARD_USER.role} · ${DASHBOARD_USER.plan} Plan</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="navigateTo('projects')">Browse Projects</button>
    </div>

    <!-- Stats Grid -->
    <div class="grid-4" style="margin-bottom:32px">
      <div class="stat-card reveal">
        <div class="stat-icon green">📂</div>
        <div class="stat-content">
          <div class="stat-label">Total Applied</div>
          <div class="stat-value">${stats.applied}</div>
          <div class="stat-change up">↑ 2 this week</div>
        </div>
      </div>
      <div class="stat-card reveal reveal-delay-1">
        <div class="stat-icon teal">✅</div>
        <div class="stat-content">
          <div class="stat-label">Active Projects</div>
          <div class="stat-value">${stats.active}</div>
          <div class="stat-change up">↑ 1 new</div>
        </div>
      </div>
      <div class="stat-card reveal reveal-delay-2">
        <div class="stat-icon orange">💰</div>
        <div class="stat-content">
          <div class="stat-label">Est. Earnings</div>
          <div class="stat-value">${stats.earnings}</div>
          <div class="stat-change up">↑ 18% MTM</div>
        </div>
      </div>
      <div class="stat-card reveal reveal-delay-3">
        <div class="stat-icon blue">💬</div>
        <div class="stat-content">
          <div class="stat-label">Messages</div>
          <div class="stat-value">${stats.messages}</div>
          <div class="stat-change up">${stats.messages} unread</div>
        </div>
      </div>
    </div>

    <!-- Recent Applications -->
    <div class="card reveal" style="padding:24px;margin-bottom:24px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <h3 style="font-size:1rem;font-weight:700">Recent Applications</h3>
        <button class="btn btn-ghost btn-sm" onclick="switchDashPanel('applications')">View All</button>
      </div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:0.875rem">
          <thead>
            <tr style="border-bottom:2px solid var(--border-light)">
              <th style="text-align:left;padding:8px 12px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted)">Project</th>
              <th style="text-align:left;padding:8px 12px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted)">Status</th>
              <th style="text-align:left;padding:8px 12px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted)">Payout</th>
              <th style="text-align:left;padding:8px 12px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted)">Date</th>
            </tr>
          </thead>
          <tbody>
            ${MY_APPLICATIONS.map(app => `
              <tr style="border-bottom:1px solid var(--border-light);transition:background 0.15s" onmouseover="this.style.background='var(--primary-100)'" onmouseout="this.style.background=''">
                <td style="padding:12px;font-weight:600;color:var(--text-primary)">${app.project}</td>
                <td style="padding:12px"><span class="badge ${app.statusClass} badge-dot">${app.status}</span></td>
                <td style="padding:12px;color:var(--primary);font-weight:700">${app.payout}</td>
                <td style="padding:12px;color:var(--text-muted)">${formatDate(app.date)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Progress / Profile Completion -->
    <div class="card reveal" style="padding:24px">
      <h3 style="font-size:1rem;font-weight:700;margin-bottom:16px">Profile Strength</h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        ${[
          { label: 'Basic Info', pct: 100 },
          { label: 'Company Profile', pct: 80 },
          { label: 'Compliance Docs', pct: 60 },
          { label: 'Sample Calls', pct: 30 }
        ].map(item => `
          <div>
            <div style="display:flex;justify-content:space-between;font-size:0.8125rem;font-weight:500;color:var(--text-secondary);margin-bottom:6px">
              <span>${item.label}</span>
              <span style="color:var(--primary);font-weight:700">${item.pct}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${item.pct}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  refreshScrollReveal();
}

function renderDashApplications() {
  const panel = document.getElementById('dash-applications');
  if (!panel) return;

  panel.innerHTML = `
    <div class="dash-header">
      <div>
        <h1>My Applications</h1>
        <p>Track all your project applications in one place</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="navigateTo('projects')">+ Apply to More</button>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px">
      ${MY_APPLICATIONS.map(app => `
        <div class="card reveal" style="padding:20px">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
            <div style="flex:1">
              <h4 style="font-size:0.9375rem;font-weight:700;margin-bottom:4px">${app.project}</h4>
              <div style="font-size:0.8125rem;color:var(--text-muted)">Applied: ${formatDate(app.date)} · Payout: <strong style="color:var(--primary)">${app.payout}</strong></div>
            </div>
            <span class="badge ${app.statusClass} badge-dot">${app.status}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  refreshScrollReveal();
}

function renderDashMessages() {
  const panel = document.getElementById('dash-messages');
  if (!panel) return;

  panel.innerHTML = `
    <div class="dash-header">
      <div>
        <h1>Messages</h1>
        <p>${MESSAGES.filter(m => m.unread).length} unread conversations</p>
      </div>
    </div>

    <div class="card" style="overflow:hidden">
      ${MESSAGES.map((msg, i) => `
        <div style="display:flex;align-items:flex-start;gap:14px;padding:18px 20px;border-bottom:${i < MESSAGES.length - 1 ? '1px solid var(--border-light)' : 'none'};cursor:pointer;transition:background 0.15s;background:${msg.unread ? 'var(--primary-100)' : 'white'}" onmouseover="this.style.background='var(--bg-alt)'" onmouseout="this.style.background='${msg.unread ? 'var(--primary-100)' : 'white'}'">
          <div class="avatar-placeholder" style="width:42px;height:42px;font-size:0.75rem">${msg.avatar}</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
              <span style="font-weight:700;font-size:0.875rem;color:var(--text-primary)">${msg.from}</span>
              <span style="font-size:0.75rem;color:var(--text-muted)">${msg.time}</span>
            </div>
            <div style="font-size:0.8125rem;color:var(--text-muted);line-height:1.5">${msg.message}</div>
          </div>
          ${msg.unread ? '<div style="width:8px;height:8px;border-radius:50%;background:var(--primary);flex-shrink:0;margin-top:6px"></div>' : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderDashSettings() {
  const panel = document.getElementById('dash-settings');
  if (!panel) return;

  panel.innerHTML = `
    <div class="dash-header">
      <div><h1>Account Settings</h1><p>Manage your profile and preferences</p></div>
    </div>

    <div class="grid-2" style="gap:24px">
      <div class="card" style="padding:24px">
        <h3 style="font-size:1rem;font-weight:700;margin-bottom:20px">Personal Information</h3>
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input class="form-control" value="${DASHBOARD_USER.name}" />
        </div>
        <div class="form-group">
          <label class="form-label">Company / Organization</label>
          <input class="form-control" value="${DASHBOARD_USER.company}" />
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input class="form-control" value="alex@callpro.io" type="email"/>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input class="form-control" value="+1 (555) 000-1234" />
        </div>
        <button class="btn btn-primary btn-sm" onclick="showToast('Profile updated successfully!','success')">Save Changes</button>
      </div>

      <div style="display:flex;flex-direction:column;gap:20px">
        <div class="card" style="padding:24px">
          <h3 style="font-size:1rem;font-weight:700;margin-bottom:16px">Current Plan</h3>
          <div style="background:var(--gradient-green);border-radius:12px;padding:16px 20px;border:1px solid var(--primary-200);display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);font-weight:600">Active Plan</div>
              <div style="font-size:1.25rem;font-weight:800;color:var(--primary)">${DASHBOARD_USER.plan}</div>
            </div>
            <span class="badge badge-green">Active</span>
          </div>
          <button class="btn btn-outline btn-sm" style="margin-top:12px" onclick="navigateTo('pricing')">Upgrade Plan</button>
        </div>

        <div class="card" style="padding:24px">
          <h3 style="font-size:1rem;font-weight:700;margin-bottom:16px">Notifications</h3>
          ${[['Email Alerts', true], ['New Project Matches', true], ['Application Updates', true], ['Weekly Digest', false]].map(([label, on]) => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-light)">
              <span style="font-size:0.875rem;font-weight:500;color:var(--text-secondary)">${label}</span>
              <div style="width:40px;height:22px;background:${on ? 'var(--primary)' : 'var(--border)'};border-radius:11px;cursor:pointer;position:relative;transition:background 0.25s" onclick="this.style.background=this.style.background.includes('primary') ? 'var(--border)' : 'var(--primary)'">
                <div style="position:absolute;width:18px;height:18px;background:white;border-radius:50%;top:2px;${on ? 'left:20px' : 'left:2px'};transition:left 0.25s;box-shadow:0 1px 3px rgba(0,0,0,0.2)"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── My Posted Projects (Provider view) ───────────────────────────
function renderDashMyProjects() {
  const panel = document.getElementById('dash-my-projects');
  if (!panel) return;

  panel.innerHTML = `
    <div class="dash-header">
      <div><h1>My Posted Projects</h1><p>Manage your active campaign listings</p></div>
      <button class="btn btn-primary btn-sm" onclick="openModal('contact-whatsapp-modal')">+ Contact Us</button>
    </div>

    <div style="display:flex;flex-direction:column;gap:16px">
      ${MY_PROJECTS_PROVIDER.map(proj => `
        <div class="card reveal" style="padding:20px">
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
            <div>
              <h4 style="font-weight:700;margin-bottom:4px">${proj.title}</h4>
              <div style="font-size:0.8125rem;color:var(--text-muted)">
                ${proj.applicants} applicants · ${proj.views} views · ${proj.budget}
              </div>
            </div>
            <div style="display:flex;gap:10px;align-items:center">
              <span class="badge ${proj.statusClass} badge-dot">${proj.status}</span>
              <button class="btn btn-ghost btn-sm" onclick="showToast('Edit feature coming soon','info')">Edit</button>
              <button class="btn btn-outline btn-sm" onclick="showToast('Paused listing','info')">Pause</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Switch Dashboard Panel ────────────────────────────────────────
function switchDashPanel(panelId) {
  document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav-item').forEach(btn => btn.classList.remove('active'));

  const panel = document.getElementById(`dash-${panelId}`);
  const navBtn = document.querySelector(`[data-dash="${panelId}"]`);

  if (panel) panel.classList.add('active');
  if (navBtn) navBtn.classList.add('active');

  // Rerender specific panels on demand
  if (panelId === 'overview')      renderDashOverview();
  if (panelId === 'my-projects')   renderDashMyProjects();
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Morning';
  if (h < 17) return 'Afternoon';
  return 'Evening';
}
