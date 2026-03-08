let activeTab = 'ideas';
let cachedProjects = [];
let cachedIdeas = [];
let cachedLastScan = null;

async function loadData() {
    const resp = await fetch('data.json');
    return resp.json();
}

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

function renderAlerts(projects) {
    const bar = document.getElementById('alerts-bar');
    const countEl = document.getElementById('alerts-count');
    const detailsEl = document.getElementById('alerts-details');
    const alerts = [];

    projects.forEach(p => {
        if (p.health?.claude_memory_portable === false)
            alerts.push(`<strong>${escapeHtml(p.name)}</strong>: memória Claude local (não portável)`);
        if (p.health?.path_exists === false)
            alerts.push(`<strong>${escapeHtml(p.name)}</strong>: caminho não existe`);
    });

    if (alerts.length === 0) return;

    bar.classList.add('visible');
    const plural = alerts.length === 1 ? 'alerta' : 'alertas';
    countEl.textContent = `${alerts.length} ${plural} — toque para ver`;
    detailsEl.innerHTML = alerts.map(a => `<div class="alert-item">${a}</div>`).join('');
}

function relativeScanTime(isoDatetime) {
    if (!isoDatetime) return '';
    const mins = Math.floor((Date.now() - new Date(isoDatetime)) / 60000);
    if (mins < 1) return 'agora';
    if (mins < 60) return `há ${mins}min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `há ${hours}h`;
    const days = Math.floor(hours / 24);
    return `há ${days}d`;
}

function priorityClass(priority) {
    if (priority === 'high') return 'priority-high';
    if (priority === 'low') return 'priority-low';
    return 'priority-medium';
}

function priorityLabel(priority) {
    if (priority === 'high') return 'Alta';
    if (priority === 'low') return 'Baixa';
    return 'Média';
}

function renderIdeas(ideas, filter) {
    const feed = document.getElementById('ideas-feed');
    const q = (filter || '').toLowerCase();

    let html = '';
    ideas.forEach(idea => {
        const matches = !q ||
            (idea.title || '').toLowerCase().includes(q) ||
            (idea.description || '').toLowerCase().includes(q) ||
            (idea.category || '').toLowerCase().includes(q) ||
            (idea.tags || []).some(t => t.toLowerCase().includes(q));

        const filteredClass = q && !matches ? ' filtered-out' : '';
        const pc = priorityClass(idea.priority);
        const tags = (idea.tags || []).map(t => `<span class="tag-pill">${escapeHtml(t)}</span>`).join('');

        html += `
        <div class="idea-row${filteredClass}">
            <span class="idea-priority ${pc}">${priorityLabel(idea.priority)}</span>
            <div class="idea-title-wrap">
                <span class="idea-title">${escapeHtml(idea.title)}</span>
                <span class="idea-category-pill">${escapeHtml(idea.category)}</span>
            </div>
            <div class="idea-desc">${escapeHtml(idea.description || '')}</div>
            ${tags ? `<div class="idea-tags">${tags}</div>` : ''}
            ${idea.notes ? `<div class="idea-notes">"${escapeHtml(idea.notes)}"</div>` : ''}
        </div>`;
    });

    html += `<div class="feed-footer">${ideas.length} ideia(s)</div>`;

    const existing = feed.querySelectorAll('.idea-row, .feed-footer');
    existing.forEach(el => el.remove());
    feed.insertAdjacentHTML('beforeend', html);
}

function renderFeed(projects, lastScan, filter) {
    const feed = document.getElementById('feed');
    const sorted = projects
        .filter(p => p.status !== 'archived')
        .sort((a, b) => new Date(b.last_activity || 0) - new Date(a.last_activity || 0));

    const q = (filter || '').toLowerCase();

    let html = '';
    sorted.forEach(p => {
        const matches = !q ||
            p.name.toLowerCase().includes(q) ||
            (p.description || '').toLowerCase().includes(q) ||
            (p.note || '').toLowerCase().includes(q) ||
            (p.category || '').toLowerCase().includes(q);

        const filteredClass = q && !matches ? ' filtered-out' : '';
        const tc = tempClass(p.last_activity);

        const links = [];
        if (p.url) links.push(`<a href="${escapeHtml(p.url)}" target="_blank">Site</a>`);
        if (p.repo) links.push(`<a href="https://github.com/${escapeHtml(p.repo)}" target="_blank">GitHub</a>`);
        if (p.web?.route) links.push(`<a href="${escapeHtml(p.web.route)}" target="_blank">Página</a>`);

        let memBadge = '';
        if (p.health?.claude_memory_portable === true) memBadge = '<span class="badge-memory portable">🧠</span>';
        else if (p.health?.claude_memory_portable === false) memBadge = '<span class="badge-memory local-only">⚠ memória local</span>';
        else memBadge = '<span class="badge-memory"></span>';

        html += `
        <div class="project-row${filteredClass}">
            <div class="temp-bar ${tc}"></div>
            <span class="project-icon">${p.icon || '📁'}</span>
            <div class="project-name-wrap">
                <span class="project-name">${escapeHtml(p.name)}</span>
                ${p.git?.dirty ? '<span class="project-dirty">◐</span>' : ''}
            </div>
            <div class="project-desc">${escapeHtml(p.description || '')}</div>
            ${memBadge}
            <span class="project-links">${links.length ? links.join(' · ') : ''}</span>
            <span class="project-date">${relativeDate(p.last_activity)}</span>
            ${p.note ? `<div class="project-note">"${escapeHtml(p.note)}"</div>` : ''}
        </div>`;
    });

    const scanText = relativeScanTime(lastScan);
    html += `<div class="feed-footer">${scanText ? `último scan: ${scanText} · ` : ''}${sorted.length} projetos</div>`;

    const existing = feed.querySelectorAll('.project-row, .feed-footer');
    existing.forEach(el => el.remove());
    feed.insertAdjacentHTML('beforeend', html);
}

function switchTab(tab) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.getElementById('ideas-feed').style.display = tab === 'ideas' ? '' : 'none';
    document.getElementById('feed').style.display = tab === 'projects' ? '' : 'none';

    // Re-apply current filter to the active tab
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

async function init() {
    const data = await loadData();
    cachedProjects = data.projects || [];
    cachedIdeas = data.ideas || [];
    cachedLastScan = data.last_full_scan;

    renderAlerts(cachedProjects);
    renderIdeas(cachedIdeas);
    renderFeed(cachedProjects, cachedLastScan);

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Search (mobile)
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

    // Search (desktop)
    document.getElementById('search-desk').addEventListener('input', e => applyFilter(e.target.value));

    // Alerts toggle
    document.getElementById('alerts-toggle').addEventListener('click', () => {
        document.getElementById('alerts-bar').classList.toggle('expanded');
    });

    // ESC to close search
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            searchOverlay.classList.remove('active');
            searchMobile.value = '';
            applyFilter('');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
