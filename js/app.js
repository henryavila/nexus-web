async function loadData() {
    const resp = await fetch('data.json');
    return resp.json();
}

function relativeDate(isoDate) {
    if (!isoDate) return 'n/a';
    const days = Math.floor((Date.now() - new Date(isoDate)) / 86400000);
    if (days <= 0) return 'hoje';
    if (days === 1) return '1d atrás';
    return `${days}d atrás`;
}

function renderAlerts(projects) {
    const el = document.getElementById('alerts');
    const alerts = [];
    projects.forEach(p => {
        const h = p.health || {};
        if (h.claude_memory_portable === false)
            alerts.push(`⚠ ${p.name}: memória Claude local (não portável)`);
        if (h.path_exists === false)
            alerts.push(`⚠ ${p.name}: path não existe`);
    });
    el.innerHTML = alerts.length
        ? alerts.map(a => `<div class="alert">${a}</div>`).join('')
        : '';
    el.style.display = alerts.length ? 'block' : 'none';
}

function statusSymbol(project) {
    if (project.status === 'archived') return '◇';
    if (project.git?.dirty) return '◐';
    return '●';
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function renderProjects(projects, filter) {
    const main = document.getElementById('projects');
    let filtered = projects.filter(p => p.status !== 'archived');

    if (filter) {
        const q = filter.toLowerCase();
        filtered = filtered.filter(p =>
            (p.name || '').toLowerCase().includes(q) ||
            (p.description || '').toLowerCase().includes(q) ||
            (p.note || '').toLowerCase().includes(q) ||
            (p.category || '').toLowerCase().includes(q)
        );
    }

    const groups = {};
    filtered.forEach(p => {
        const cat = p.category || 'sem categoria';
        (groups[cat] = groups[cat] || []).push(p);
    });

    let html = '';
    Object.keys(groups).sort().forEach(cat => {
        html += `<section class="category-group">
            <h2>${escapeHtml(cat)}</h2>
            <div class="cards">`;
        groups[cat].forEach(p => {
            const links = [];
            if (p.url) links.push(`<a href="${escapeHtml(p.url)}" target="_blank">Site</a>`);
            if (p.repo) links.push(`<a href="https://github.com/${escapeHtml(p.repo)}" target="_blank">GitHub</a>`);
            if (p.web?.route) links.push(`<a href="${escapeHtml(p.web.route)}" target="_blank">Página</a>`);

            html += `<div class="project-card">
                <div class="card-header">
                    <span class="icon">${p.icon || '📁'}</span>
                    <span class="name">${escapeHtml(p.name)}</span>
                    <span class="status">${statusSymbol(p)}</span>
                    <span class="date">${relativeDate(p.last_activity)}</span>
                </div>
                ${p.description ? `<div class="description">${escapeHtml(p.description)}</div>` : ''}
                ${p.note ? `<div class="note">"${escapeHtml(p.note)}"</div>` : ''}
                ${links.length ? `<div class="links">${links.join(' · ')}</div>` : ''}
                ${p.health?.claude_memory_portable === true ? '<span class="badge memory-ok" title="Memória portável">🧠</span>' : ''}
                ${p.health?.claude_memory_portable === false ? '<span class="badge memory-warn" title="Memória só local">⚠</span>' : ''}
            </div>`;
        });
        html += `</div></section>`;
    });

    main.innerHTML = html || '<p class="empty">Nenhum projeto encontrado.</p>';
}

(async () => {
    const data = await loadData();
    const projects = data.projects || [];
    renderAlerts(projects);
    renderProjects(projects);

    document.getElementById('search').addEventListener('input', e => {
        renderProjects(projects, e.target.value);
    });
})();
