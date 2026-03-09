/* ═══════════════════════════════════════════════════
   Nexus Dashboard v3 — App Logic
   ═══════════════════════════════════════════════════ */

let activeTab = 'ideas';
let cachedProjects = [];
let cachedIdeas = [];
let cachedLastScan = null;

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

// ─── Alerts ───

function renderAlerts(projects) {
    const bar = document.getElementById('alerts-bar');
    const countEl = document.getElementById('alerts-count');
    const detailsEl = document.getElementById('alerts-details');
    const alerts = [];

    projects.forEach(p => {
        if (p.health?.claude_memory_portable === false)
            alerts.push(`<strong>${escapeHtml(p.name)}</strong>: mem\u00f3ria Claude local (n\u00e3o port\u00e1vel)`);
        if (p.health?.path_exists === false)
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
        if (p.health?.claude_memory_portable === true)
            memBadge = '<span class="badge-memory portable">\ud83e\udde0</span>';
        else if (p.health?.claude_memory_portable === false)
            memBadge = '<span class="badge-memory local-only">\u26a0<span class="badge-text"> mem\u00f3ria local</span></span>';
        else
            memBadge = '<span class="badge-memory"></span>';

        html += `
        <div class="project-row${filteredClass}">
            <div class="temp-bar ${tc}"></div>
            <span class="project-icon">${p.icon || '\ud83d\udcc1'}</span>
            <div class="project-name-wrap">
                ${nameHtml}
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

// ─── Tab & Filter ───

function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    const ideasSection = document.getElementById('ideas-section');
    const projectsSection = document.getElementById('projects-section');

    ideasSection.style.display = tab === 'ideas' ? '' : 'none';
    projectsSection.style.display = tab === 'projects' ? '' : 'none';

    const filter = document.getElementById('search-desk').value ||
                   document.getElementById('search-mobile').value;
    if (tab === 'ideas') {
        renderIdeas(cachedIdeas, filter);
    } else {
        renderFeed(cachedProjects, cachedLastScan, filter);
    }
}

function applyFilter(value) {
    if (activeTab === 'ideas') {
        renderIdeas(cachedIdeas, value);
    } else {
        renderFeed(cachedProjects, cachedLastScan, value);
    }
}

// ─── Init ───

async function init() {
    const data = await loadData();
    cachedProjects = data.projects || [];
    cachedIdeas = data.ideas || [];
    cachedLastScan = data.last_full_scan;

    renderAlerts(cachedProjects);
    renderIdeas(cachedIdeas);
    renderFeed(cachedProjects, cachedLastScan);

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

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
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
        const btn = document.querySelector(`.tab-btn[data-index="${e.key}"]`);
        if (btn) {
            switchTab(btn.dataset.tab);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
