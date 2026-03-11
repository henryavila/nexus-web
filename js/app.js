/* ═══════════════════════════════════════════════════
   Nexus Dashboard v3 — App Logic
   ═══════════════════════════════════════════════════ */

let activeTab = 'ideas';
let cachedProjects = [];
let cachedApps = [];
let cachedSkills = {};
let cachedEnvironments = [];
let cachedIdeas = [];
let cachedCodex = [];
let cachedLastScan = null;
let cachedCurrentEnvironment = null;

// ─── Data ───

async function loadData() {
    const resp = await fetch('data.json');
    return resp.json();
}

// ─── Formatting ───

function relativeDate(isoDate) {
    if (!isoDate) return 'n/a';
    const days = Math.floor((Date.now() - new Date(isoDate)) / 86400000);
    if (days <= 0) return 'hoje';
    if (days === 1) return '1d';
    return days + 'd';
}

function tempClass(isoDate) {
    if (!isoDate) return 'cold';
    const days = Math.floor((Date.now() - new Date(isoDate)) / 86400000);
    if (days <= 1) return 'hot';
    if (days <= 7) return 'warm';
    if (days <= 30) return 'cool';
    return 'cold';
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function relativeScanTime(isoDatetime) {
    if (!isoDatetime) return '';
    const mins = Math.floor((Date.now() - new Date(isoDatetime)) / 60000);
    if (mins < 1) return 'agora';
    if (mins < 60) return `h\u00e1 ${mins}min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `h\u00e1 ${hours}h`;
    const days = Math.floor(hours / 24);
    return `h\u00e1 ${days}d`;
}

function priorityClass(priority) {
    if (priority === 'high') return 'priority-high';
    if (priority === 'low') return 'priority-low';
    return 'priority-medium';
}

function priorityLabel(priority) {
    if (priority === 'high') return 'Alta';
    if (priority === 'low') return 'Baixa';
    return 'M\u00e9dia';
}

// ─── Health helpers ───

function getHealthValue(health, key) {
    if (!health) return null;
    const val = health[key];
    if (val !== null && typeof val === 'object') {
        // Per-env dict format: look up current environment hostname
        return cachedCurrentEnvironment ? (val[cachedCurrentEnvironment] ?? null) : null;
    }
    return val; // Flat format (backward compat)
}

// ─── Alerts ───

function renderAlerts(projects) {
    const bar = document.getElementById('alerts-bar');
    const countEl = document.getElementById('alerts-count');
    const detailsEl = document.getElementById('alerts-details');
    const alerts = [];

    projects.forEach(p => {
        if (getHealthValue(p.health, 'claude_memory_portable') === false)
            alerts.push(`<strong>${escapeHtml(p.name)}</strong>: mem\u00f3ria Claude local (n\u00e3o port\u00e1vel)`);
        if (getHealthValue(p.health, 'path_exists') === false)
            alerts.push(`<strong>${escapeHtml(p.name)}</strong>: caminho n\u00e3o existe`);
    });

    if (alerts.length === 0) return;

    bar.classList.add('visible');
    const plural = alerts.length === 1 ? 'alerta' : 'alertas';
    countEl.textContent = `${alerts.length} ${plural} \u2014 toque para ver`;
    detailsEl.innerHTML = alerts.map(a => `<div class="alert-item">${a}</div>`).join('');
}

// ─── Ideas Rendering ───

function renderIdeas(ideas, filter) {
    const grid = document.getElementById('ideas-grid');
    const countEl = document.getElementById('ideas-count');
    const q = (filter || '').toLowerCase();

    let html = '';
    let visibleCount = 0;

    ideas.forEach((idea, index) => {
        const matches = !q ||
            (idea.title || '').toLowerCase().includes(q) ||
            (idea.description || '').toLowerCase().includes(q) ||
            (idea.category || '').toLowerCase().includes(q) ||
            (idea.tags || []).some(t => t.toLowerCase().includes(q));

        const filteredClass = q && !matches ? ' filtered-out' : '';
        if (!q || matches) visibleCount++;

        const pc = priorityClass(idea.priority);
        const tags = (idea.tags || []).map(t =>
            `<span class="tag-pill">${escapeHtml(t)}</span>`
        ).join('');

        const refs = (idea.references || []).map(r =>
            `<span class="tag-pill">${escapeHtml(r)}</span>`
        ).join('');

        html += `
        <div class="idea-card has-priority-${idea.priority || 'medium'}${filteredClass}"
             style="animation-delay: ${index * 0.06}s">
            <div class="idea-card-header">
                <span class="idea-priority ${pc}">${priorityLabel(idea.priority)}</span>
                ${idea.category ? `<span class="idea-category-pill">${escapeHtml(idea.category)}</span>` : ''}
            </div>
            <div class="idea-card-title">${escapeHtml(idea.title)}</div>
            ${idea.description ? `<div class="idea-card-desc">${escapeHtml(idea.description)}</div>` : ''}
            ${tags || refs ? `<div class="idea-card-tags">${tags}${refs}</div>` : ''}
            ${idea.notes ? `<div class="idea-card-notes">\u201c${escapeHtml(idea.notes)}\u201d</div>` : ''}
            <div class="idea-card-footer">
                <span class="idea-card-date">${relativeDate(idea.created)}</span>
            </div>
        </div>`;
    });

    if (ideas.length === 0) {
        html = '<div class="empty-state">Nenhuma ideia registrada</div>';
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.idea-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    countEl.textContent = q ? `${visibleCount}/${ideas.length}` : `${ideas.length}`;
}

// ─── Projects Rendering ───

function renderFeed(projects, lastScan, filter) {
    const feed = document.getElementById('projects-feed');
    const countEl = document.getElementById('projects-count');
    const sorted = projects
        .filter(p => p.status !== 'archived')
        .sort((a, b) => new Date(b.last_activity || 0) - new Date(a.last_activity || 0));

    const q = (filter || '').toLowerCase();
    let visibleCount = 0;

    let html = '';
    sorted.forEach(p => {
        const matches = !q ||
            p.name.toLowerCase().includes(q) ||
            (p.description || '').toLowerCase().includes(q) ||
            (p.note || '').toLowerCase().includes(q) ||
            (p.category || '').toLowerCase().includes(q);

        const filteredClass = q && !matches ? ' filtered-out' : '';
        if (!q || matches) visibleCount++;
        const tc = tempClass(p.last_activity);

        // Primary link: url > web.route > repo
        let primaryHref = '';
        if (p.url) {
            primaryHref = escapeHtml(p.url);
        } else if (p.web?.route) {
            primaryHref = escapeHtml(p.web.route);
        } else if (p.repo) {
            primaryHref = `https://github.com/${escapeHtml(p.repo)}`;
        }

        const nameHtml = primaryHref
            ? `<a class="project-name" href="${primaryHref}" target="_blank" rel="noopener">${escapeHtml(p.name)}</a>`
            : `<span class="project-name">${escapeHtml(p.name)}</span>`;

        let memBadge = '';
        const memVal = getHealthValue(p.health, 'claude_memory_portable');
        if (memVal === true)
            memBadge = '<span class="badge-memory portable">\ud83e\udde0</span>';
        else if (memVal === false)
            memBadge = '<span class="badge-memory local-only">\u26a0<span class="badge-text"> mem\u00f3ria local</span></span>';
        else
            memBadge = '<span class="badge-memory"></span>';

        html += `
        <div class="project-row${filteredClass}">
            <div class="temp-bar ${tc}"></div>
            <span class="project-icon">${p.icon || '\ud83d\udcc1'}</span>
            <div class="project-name-wrap">
                ${nameHtml}
                ${p.slug ? `<span class="slug-badge">${escapeHtml(p.slug)}</span>` : ''}
                ${p.git?.dirty ? '<span class="project-dirty">\u25d0</span>' : ''}
            </div>
            <div class="project-desc">${escapeHtml(p.description || '')}</div>
            ${memBadge}
            <span class="project-date">${relativeDate(p.last_activity)}</span>
            ${p.note ? `<div class="project-note">\u201c${escapeHtml(p.note)}\u201d</div>` : ''}
        </div>`;
    });

    const scanText = relativeScanTime(lastScan);
    html += `<div class="feed-footer">${scanText ? `\u00faltimo scan: ${scanText} \u00b7 ` : ''}${sorted.length} projetos</div>`;

    feed.innerHTML = html;
    countEl.textContent = q ? `${visibleCount}/${sorted.length}` : `${sorted.length}`;
}

// ─── Codex Rendering ───

function renderCodex(codex, filter) {
    const grid = document.getElementById('codex-grid');
    const countEl = document.getElementById('codex-count');
    const q = (filter || '').toLowerCase();

    let html = '';
    let visibleCount = 0;

    codex.forEach((entry, index) => {
        const matches = !q ||
            (entry.title || '').toLowerCase().includes(q) ||
            (entry.category || '').toLowerCase().includes(q) ||
            (entry.tags || []).some(t => t.toLowerCase().includes(q));

        const filteredClass = q && !matches ? ' filtered-out' : '';
        if (!q || matches) visibleCount++;

        const tags = (entry.tags || []).map(t =>
            `<span class="tag-pill">${escapeHtml(t)}</span>`
        ).join('');

        const orderBadge = entry.order != null
            ? `<span class="idea-category-pill">#${entry.order}</span>`
            : '';

        html += `
        <div class="idea-card codex-card has-priority-medium${filteredClass}"
             data-slug="${escapeHtml(entry.slug)}"
             style="animation-delay: ${index * 0.06}s">
            <div class="idea-card-header">
                ${orderBadge}
                ${entry.category ? `<span class="idea-category-pill">${escapeHtml(entry.category)}</span>` : ''}
            </div>
            <div class="idea-card-title">\ud83d\udcd6 ${escapeHtml(entry.title)}</div>
            ${tags ? `<div class="idea-card-tags">${tags}</div>` : ''}
            <div class="idea-card-footer">
                ${entry.updated ? `<span class="idea-card-date">${relativeDate(entry.updated)}</span>` : ''}
            </div>
        </div>`;
    });

    if (codex.length === 0) {
        html = '<div class="empty-state">Nenhuma entrada no Codex</div>';
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.codex-card').forEach(card => {
        card.addEventListener('click', () => {
            const slug = card.dataset.slug;
            const entry = codex.find(e => e.slug === slug);
            if (entry) openCodexModal(entry);
        });
    });

    countEl.textContent = q ? `${visibleCount}/${codex.length}` : `${codex.length}`;
}

function openCodexModal(entry) {
    const backdrop = document.getElementById('codex-modal-backdrop');
    const header = document.getElementById('codex-modal-header');
    const body = document.getElementById('codex-modal-body');

    const tags = (entry.tags || []).map(t =>
        `<span class="tag-pill">${escapeHtml(t)}</span>`
    ).join('');

    header.innerHTML = `
        <h2>\ud83d\udcd6 ${escapeHtml(entry.title)}</h2>
        <div class="codex-modal-meta">
            ${entry.category ? `<span class="idea-category-pill">${escapeHtml(entry.category)}</span>` : ''}
            ${tags}
            ${entry.updated ? `<span class="codex-modal-date">Atualizado: ${escapeHtml(entry.updated)}</span>` : ''}
        </div>
    `;

    body.innerHTML = typeof marked !== 'undefined'
        ? marked.parse(entry.content || '')
        : `<pre>${escapeHtml(entry.content || '')}</pre>`;

    backdrop.classList.add('active');
}

function closeCodexModal() {
    document.getElementById('codex-modal-backdrop').classList.remove('active');
}

// ─── Apps Rendering ───

function renderApps(apps, lastScan, filter) {
    const feed = document.getElementById('apps-feed');
    const countEl = document.getElementById('apps-count');
    if (!feed) return;

    const q = (filter || '').toLowerCase();
    let visibleCount = 0;

    if (!apps || !apps.length) {
        feed.innerHTML = '<p class="empty-state">Nenhum app registrado</p>';
        if (countEl) countEl.textContent = '0';
        return;
    }

    const sorted = [...apps].sort((a, b) =>
        new Date(b.last_activity || 0) - new Date(a.last_activity || 0)
    );

    let html = '';
    sorted.forEach(app => {
        const matches = !q ||
            (app.name || '').toLowerCase().includes(q) ||
            (app.description || '').toLowerCase().includes(q) ||
            (app.category || '').toLowerCase().includes(q);

        const filteredClass = q && !matches ? ' filtered-out' : '';
        if (!q || matches) visibleCount++;

        const tc = tempClass(app.last_activity);

        let primaryHref = '';
        if (app.url) {
            primaryHref = escapeHtml(app.url);
        } else if (app.repo) {
            primaryHref = `https://github.com/${escapeHtml(app.repo)}`;
        }

        const nameHtml = primaryHref
            ? `<a class="project-name" href="${primaryHref}" target="_blank" rel="noopener">${escapeHtml(app.name)}</a>`
            : `<span class="project-name">${escapeHtml(app.name)}</span>`;

        let memBadge = '';
        const appMemVal = getHealthValue(app.health, 'claude_memory_portable');
        if (appMemVal === true)
            memBadge = '<span class="badge-memory portable">\ud83e\udde0</span>';
        else if (appMemVal === false)
            memBadge = '<span class="badge-memory local-only">\u26a0<span class="badge-text"> mem\u00f3ria local</span></span>';
        else
            memBadge = '<span class="badge-memory"></span>';

        html += `
        <div class="project-row${filteredClass}">
            <div class="temp-bar ${tc}"></div>
            <span class="project-icon">${app.icon || '\ud83d\udce6'}</span>
            <div class="project-name-wrap">
                ${nameHtml}
                ${app.slug ? `<span class="slug-badge">${escapeHtml(app.slug)}</span>` : ''}
            </div>
            <div class="project-desc">${escapeHtml(app.description || '')}</div>
            ${memBadge}
            <span class="project-date">${relativeDate(app.last_activity)}</span>
        </div>`;
    });

    const scanText = relativeScanTime(lastScan);
    html += `<div class="feed-footer">${scanText ? `\u00faltimo scan: ${scanText} \u00b7 ` : ''}${sorted.length} apps</div>`;

    feed.innerHTML = html;
    if (countEl) countEl.textContent = q ? `${visibleCount}/${sorted.length}` : `${sorted.length}`;
}

// ─── Skills Rendering ───

function renderSkills(skills, filter) {
    const grid = document.getElementById('skills-grid');
    const countEl = document.getElementById('skills-count');
    if (!grid) return;

    const q = (filter || '').toLowerCase();
    const entries = skills ? Object.entries(skills) : [];

    if (!entries.length) {
        grid.innerHTML = '<p class="empty-state">Nenhum skill detectado</p>';
        if (countEl) countEl.textContent = '0';
        return;
    }

    let visibleCount = 0;
    let html = '';

    entries.forEach(([slug, info], index) => {
        const matches = !q ||
            slug.toLowerCase().includes(q) ||
            (info.scope || '').toLowerCase().includes(q) ||
            (info.latest || '').toLowerCase().includes(q);

        const filteredClass = q && !matches ? ' filtered-out' : '';
        if (!q || matches) visibleCount++;

        const scopeClass = info.scope === 'global' ? 'scope-global' : 'scope-repo';
        const scopeLabel = info.scope === 'global' ? 'global' : 'repo';

        const versions = info.versions || {};
        const latest = info.latest || '';
        const envEntries = Object.entries(versions);

        // Check if any environment has an outdated version
        const hasGap = envEntries.some(([, ver]) => ver !== latest);

        let versionRows = '';
        envEntries.forEach(([env, ver]) => {
            const isOutdated = latest && ver !== latest;
            const badge = isOutdated
                ? `<span class="version-outdated-badge">desatualizado</span>`
                : '';
            versionRows += `
            <tr>
                <td>${escapeHtml(env)}</td>
                <td class="${isOutdated ? 'version-outdated' : ''}">${escapeHtml(ver)}${badge}</td>
            </tr>`;
        });

        const gapWarning = hasGap
            ? `<div class="skill-gap-warning">\u26a0 vers\u00f5es divergem entre ambientes</div>`
            : '';

        html += `
        <div class="skill-card${filteredClass}" style="animation-delay: ${index * 0.06}s">
            <div class="skill-card-header">
                <span class="scope-badge ${scopeClass}">${scopeLabel}</span>
            </div>
            <div class="skill-card-title">${escapeHtml(slug)}</div>
            ${latest ? `<div class="skill-version-latest">latest: ${escapeHtml(latest)}</div>` : ''}
            ${versionRows ? `<table class="skill-version-table"><tbody>${versionRows}</tbody></table>` : ''}
            ${gapWarning}
        </div>`;
    });

    grid.innerHTML = html;
    if (countEl) countEl.textContent = q ? `${visibleCount}/${entries.length}` : `${entries.length}`;
}

// ─── Environments Rendering ───

function renderEnvironments(environments, currentEnv, filter) {
    const grid = document.getElementById('environments-grid');
    const countEl = document.getElementById('environments-count');
    if (!grid) return;

    const q = (filter || '').toLowerCase();

    if (!environments || !environments.length) {
        grid.innerHTML = '<p class="empty-state">Nenhum ambiente registrado</p>';
        if (countEl) countEl.textContent = '0';
        return;
    }

    // Sort: current environment first, then alphabetical
    const sorted = [...environments].sort((a, b) => {
        const aCurrent = a.hostname === currentEnv ? -1 : 1;
        const bCurrent = b.hostname === currentEnv ? -1 : 1;
        if (aCurrent !== bCurrent) return aCurrent - bCurrent;
        return (a.hostname || '').localeCompare(b.hostname || '');
    });

    let visibleCount = 0;
    let html = '';

    sorted.forEach((env, index) => {
        const matches = !q ||
            (env.hostname || '').toLowerCase().includes(q) ||
            (env.location || '').toLowerCase().includes(q) ||
            (env.os || '').toLowerCase().includes(q);

        const filteredClass = q && !matches ? ' filtered-out' : '';
        if (!q || matches) visibleCount++;

        const isCurrent = env.hostname === currentEnv;
        const currentClass = isCurrent ? ' is-current' : '';
        const currentBadge = isCurrent
            ? '<span class="env-current-badge">este</span>'
            : '';

        const location = env.location ? escapeHtml(env.location) : '';
        const os = env.os ? escapeHtml(env.os) : '';
        const projectCount = env.project_count != null ? env.project_count : '?';
        const absentProjects = env.absent_projects || [];

        const absentHtml = absentProjects.length
            ? `<div class="env-absent-list">${absentProjects.map(p => `<span>${escapeHtml(p)}</span>`).join('')} ausente${absentProjects.length > 1 ? 's' : ''}</div>`
            : '';

        html += `
        <div class="env-card${currentClass}${filteredClass}" style="animation-delay: ${index * 0.06}s">
            <div class="env-card-header">
                <div class="env-card-title">
                    ${escapeHtml(env.hostname || 'desconhecido')}
                    ${currentBadge}
                </div>
            </div>
            ${location ? `<div class="env-location">${location}${os ? ' \u00b7 ' + os : ''}</div>` : (os ? `<div class="env-location">${os}</div>` : '')}
            <div class="env-stats">
                <span class="env-stat"><strong>${projectCount}</strong> projetos</span>
                ${env.last_seen ? `<span class="env-stat">visto <strong>${relativeDate(env.last_seen)}</strong></span>` : ''}
            </div>
            ${absentHtml}
            <div class="env-card-footer">
                <span class="idea-card-date">${env.last_seen ? escapeHtml(env.last_seen.split('T')[0]) : ''}</span>
            </div>
        </div>`;
    });

    grid.innerHTML = html;
    if (countEl) countEl.textContent = q ? `${visibleCount}/${sorted.length}` : `${sorted.length}`;
}

// ─── Tab & Filter ───

const ALL_TABS = ['ideas', 'projects', 'apps', 'skills', 'environments', 'codex'];

function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    ALL_TABS.forEach(t => {
        const el = document.getElementById(`${t}-section`);
        if (el) el.style.display = t === tab ? '' : 'none';
    });

    const filter = document.getElementById('search-desk').value ||
                   document.getElementById('search-mobile').value;
    if (tab === 'ideas') {
        renderIdeas(cachedIdeas, filter);
    } else if (tab === 'projects') {
        renderFeed(cachedProjects, cachedLastScan, filter);
    } else if (tab === 'apps') {
        renderApps(cachedApps, cachedLastScan, filter);
    } else if (tab === 'skills') {
        renderSkills(cachedSkills, filter);
    } else if (tab === 'environments') {
        renderEnvironments(cachedEnvironments, cachedCurrentEnvironment, filter);
    } else if (tab === 'codex') {
        renderCodex(cachedCodex, filter);
    }
}

function applyFilter(value) {
    if (activeTab === 'ideas') {
        renderIdeas(cachedIdeas, value);
    } else if (activeTab === 'projects') {
        renderFeed(cachedProjects, cachedLastScan, value);
    } else if (activeTab === 'apps') {
        renderApps(cachedApps, cachedLastScan, value);
    } else if (activeTab === 'skills') {
        renderSkills(cachedSkills, value);
    } else if (activeTab === 'environments') {
        renderEnvironments(cachedEnvironments, cachedCurrentEnvironment, value);
    } else if (activeTab === 'codex') {
        renderCodex(cachedCodex, value);
    }
}

// ─── Init ───

async function init() {
    const data = await loadData();
    cachedProjects = data.projects || [];
    cachedApps = data.apps || [];
    cachedSkills = data.skills || {};
    cachedEnvironments = data.environments || [];
    cachedCurrentEnvironment = data.current_environment || null;
    cachedIdeas = data.ideas || [];
    cachedCodex = data.codex || [];
    cachedLastScan = data.last_full_scan;

    renderAlerts(cachedProjects);
    renderIdeas(cachedIdeas);
    renderFeed(cachedProjects, cachedLastScan);
    renderApps(cachedApps, cachedLastScan);
    renderSkills(cachedSkills);
    renderEnvironments(cachedEnvironments, cachedCurrentEnvironment);
    renderCodex(cachedCodex);

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Search — mobile
    const searchBtn = document.getElementById('search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchMobile = document.getElementById('search-mobile');
    const searchClose = document.getElementById('search-close');

    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchMobile.focus();
    });

    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchMobile.value = '';
        applyFilter('');
    });

    searchMobile.addEventListener('input', e => applyFilter(e.target.value));

    // Search — desktop
    document.getElementById('search-desk').addEventListener('input', e => applyFilter(e.target.value));

    // Alerts toggle
    document.getElementById('alerts-toggle').addEventListener('click', () => {
        document.getElementById('alerts-bar').classList.toggle('expanded');
    });

    // Codex modal close
    document.getElementById('codex-modal-close').addEventListener('click', closeCodexModal);
    document.getElementById('codex-modal-backdrop').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeCodexModal();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        // Close codex modal on Escape
        const modalActive = document.getElementById('codex-modal-backdrop').classList.contains('active');
        if (e.key === 'Escape' && modalActive) {
            closeCodexModal();
            return;
        }

        // Don't intercept when typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            if (e.key === 'Escape') {
                searchOverlay.classList.remove('active');
                searchMobile.value = '';
                applyFilter('');
            }
            return;
        }

        if (e.key === 'Escape') {
            searchOverlay.classList.remove('active');
            searchMobile.value = '';
            applyFilter('');
            return;
        }

        // Number keys switch tabs (1-based, matches data-index)
        if (!modalActive) {
            const btn = document.querySelector(`.tab-btn[data-index="${e.key}"]`);
            if (btn) {
                switchTab(btn.dataset.tab);
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
