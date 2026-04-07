const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'css', 'layout.css');
let content = fs.readFileSync(file, 'utf8');

// Normalize to LF for comparison
const normalized = content.replace(/\r\n/g, '\n');

const oldBlock = `/* ══════════════════════════════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════════════════════════════ */

/* Who We Are + Mission section */
.about-intro-grid {
  align-items: center;
  gap: 60px;
}

/* Stats inline row */
.about-stats-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}`;

const newBlock = `/* ══════════════════════════════════════════════════════════════
   ABOUT PAGE — FULL STYLES
══════════════════════════════════════════════════════════════ */

/* Who We Are + Mission layout */
.about-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
}

.about-text-col { display: flex; flex-direction: column; }

.about-label { display: inline-flex; margin-bottom: 16px; }

.about-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.about-para {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--text-secondary);
  margin-bottom: 14px;
}
.about-para:last-of-type { margin-bottom: 28px; }

/* Stats row */
.about-stats-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding-top: 20px;
  border-top: 1px solid var(--border-light);
}

.about-stat-item { text-align: center; }

.about-stat-num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 4px;
}

.about-stat-lbl {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Mission card */
.about-mission-card {
  padding: 40px;
  text-align: center;
}

.about-mission-logo {
  width: 100px;
  height: auto;
  border-radius: 16px;
  margin: 0 auto 24px;
  display: block;
}

.about-mission-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.about-mission-text {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

/* Values section */
.about-values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.about-value-card {
  background: var(--surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.about-value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(16,185,129,0.3);
}

.about-value-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1;
}

.about-value-title {
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.about-value-text {
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-secondary);
}`;

if (normalized.includes(oldBlock)) {
  const result = normalized.replace(oldBlock, newBlock);
  // Convert back to CRLF
  const crlf = result.replace(/\n/g, '\r\n');
  fs.writeFileSync(file, crlf, 'utf8');
  console.log('SUCCESS: About CSS block replaced successfully');
} else {
  console.log('NOT FOUND: Could not locate old block');
  // Find approximate location
  const idx = normalized.indexOf('ABOUT SECTION');
  if (idx >= 0) {
    console.log('Found "ABOUT SECTION" at char index:', idx);
    console.log('Context:', normalized.slice(idx, idx + 300));
  }
}
