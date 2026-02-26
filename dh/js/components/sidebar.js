// sidebar.js — Desktop sidebar + mobile bottom navigation
const Sidebar = {
  items: [
    { id: 'dashboard', label: 'Resumo', icon: '\ud83d\udcca', mobileOrder: 1 },
    { id: 'calendar', label: 'Calend\u00e1rio', icon: '\ud83d\uddd3\ufe0f', mobileOrder: 2 },
    { id: 'teams', label: 'Times', icon: '\ud83d\udc65', mobileOrder: 3 },
    { id: 'plan', label: 'Plano', icon: '\ud83d\udccc', mobileOrder: 4 },
    { id: 'heroes', label: 'Her\u00f3is', icon: '\u2694\ufe0f', mobileOrder: 5 },
    { id: 'artifacts', label: 'Artefatos', icon: '\ud83d\udc8e' },
    { id: 'builds', label: 'Builds', icon: '\ud83d\udee0\ufe0f' },
    { id: 'gear', label: 'Gear', icon: '\uD83D\uDEE1\uFE0F' },
    { id: 'tierlist', label: 'Tier List', icon: '\ud83d\udccb' },
    { id: 'decisions', label: 'Decis\u00f5es', icon: '\ud83d\udcdc' }
  ],

  init() {
    this._initDesktop();
    this._initMobile();
  },

  // ---- Desktop sidebar (hidden on mobile via CSS) ----
  _initDesktop() {
    const nav = document.getElementById('sidebar');
    nav.innerHTML = '';

    // --- Branding header ---
    nav.appendChild(R.el('div', { className: 'p-4 border-b border-surface-hover' }, [
      R.el('h1', { className: 'brand-title text-xl leading-tight', textContent: 'Dragon Heir' }),
      R.el('div', { className: 'text-[11px] text-gray-500 mt-1 tracking-wide uppercase', textContent: 'Companion App' })
    ]));

    // --- Navigation items ---
    const list = R.el('div', { className: 'flex-1 py-2' });
    for (const item of this.items) {
      const btn = R.el('button', {
        className: 'w-full text-left px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-surface-hover transition-colors duration-150',
        'data-section': item.id,
        onClick: () => App.navigate(item.id)
      }, [
        R.el('span', { textContent: item.icon }),
        R.el('span', { textContent: item.label })
      ]);
      list.appendChild(btn);
    }
    nav.appendChild(list);

    // --- External links ---
    const links = R.el('div', { className: 'sidebar-links border-t border-surface-hover py-2' });
    const extLinks = [
      { label: 'AllClash', url: 'https://www.allclash.com/dragonheir/' },
      { label: 'HellHades', url: 'https://hellhades.com/dragonheir/' },
      { label: 'DragonHeir.info', url: 'https://dragonheir.info/' },
      { label: 'GitHub', url: 'https://github.com/henryavila/dragonheir-companion' }
    ];
    for (const link of extLinks) {
      links.appendChild(R.el('a', {
        href: link.url,
        target: '_blank',
        rel: 'noreferrer'
      }, [
        R.el('span', { className: 'text-gray-600', textContent: '\u2192' }),
        R.el('span', { textContent: link.label })
      ]));
    }
    nav.appendChild(links);

    // --- Footer ---
    nav.appendChild(R.el('div', { className: 'app-footer' }, [
      R.el('div', { textContent: `${(typeof DATA_PROFILE !== 'undefined' && DATA_PROFILE?.name) || 'Player'} \u2014 ${(typeof DATA_PROFILE !== 'undefined' && DATA_PROFILE?.server) || ''}` }),
      R.el('div', { className: 'mt-1 text-[10px]', textContent: 'Dragonheir: Silent Gods' })
    ]));
  },

  // ---- Mobile bottom tab bar (visible only on mobile via CSS) ----
  _initMobile() {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;
    nav.innerHTML = '';

    const mobileItems = this.items
      .filter(i => i.mobileOrder)
      .sort((a, b) => a.mobileOrder - b.mobileOrder);
    const moreItems = this.items.filter(i => !i.mobileOrder);

    const bar = R.el('div', { className: 'flex items-stretch justify-around' });

    for (const item of mobileItems) {
      bar.appendChild(R.el('button', {
        className: 'flex flex-col items-center justify-center py-2 px-1 flex-1 text-gray-500 transition-colors',
        'data-section': item.id,
        onClick: () => { this._closeMoreMenu(); App.navigate(item.id); }
      }, [
        R.el('span', { className: 'text-lg leading-none mb-0.5', textContent: item.icon }),
        R.el('span', { className: 'text-[10px]', textContent: item.label })
      ]));
    }

    if (moreItems.length > 0) {
      bar.appendChild(R.el('button', {
        className: 'flex flex-col items-center justify-center py-2 px-1 flex-1 text-gray-500 transition-colors',
        'data-section': 'more',
        onClick: (e) => { e.stopPropagation(); this._toggleMoreMenu(nav, moreItems); }
      }, [
        R.el('span', { className: 'text-lg leading-none mb-0.5', textContent: '\u2022\u2022\u2022' }),
        R.el('span', { className: 'text-[10px]', textContent: 'Mais' })
      ]));
    }

    nav.appendChild(bar);
  },

  _toggleMoreMenu(nav, moreItems) {
    const existing = nav.querySelector('.more-menu');
    if (existing) { existing.remove(); return; }

    const menu = R.el('div', {
      className: 'more-menu bg-surface-card border border-surface-hover rounded-lg shadow-xl p-1'
    });

    for (const item of moreItems) {
      menu.appendChild(R.el('button', {
        className: 'w-full text-left px-4 py-3 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-surface-hover rounded transition-colors',
        onClick: () => { this._closeMoreMenu(); App.navigate(item.id); }
      }, [
        R.el('span', { textContent: item.icon }),
        R.el('span', { className: 'text-sm', textContent: item.label })
      ]));
    }

    nav.appendChild(menu);

    const closeHandler = (e) => {
      if (!menu.contains(e.target)) {
        this._closeMoreMenu();
        document.removeEventListener('click', closeHandler);
      }
    };
    setTimeout(() => document.addEventListener('click', closeHandler), 0);
  },

  _closeMoreMenu() {
    const menu = document.querySelector('#bottom-nav .more-menu');
    if (menu) menu.remove();
  },

  setActive(sectionId) {
    // Desktop sidebar
    document.querySelectorAll('#sidebar button[data-section]').forEach(btn => {
      const isActive = btn.dataset.section === sectionId;
      btn.className = `w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-150 ${
        isActive ? 'text-gold border-l-2 border-gold bg-surface-hover' : 'text-gray-400 hover:text-white hover:bg-surface-hover'
      }`;
    });

    // Mobile bottom nav
    document.querySelectorAll('#bottom-nav button[data-section]').forEach(btn => {
      if (btn.dataset.section === 'more') return;
      const isActive = btn.dataset.section === sectionId;
      // Also highlight if a "more" item is active — highlight the "more" button
      btn.className = `flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
        isActive ? 'text-gold' : 'text-gray-500'
      }`;
    });

    // Highlight "more" button if active section is in the more menu
    const moreBtn = document.querySelector('#bottom-nav button[data-section="more"]');
    if (moreBtn) {
      const mobileIds = this.items.filter(i => i.mobileOrder).map(i => i.id);
      const isMoreActive = !mobileIds.includes(sectionId);
      moreBtn.className = `flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
        isMoreActive ? 'text-gold' : 'text-gray-500'
      }`;
    }

    this._closeMoreMenu();
  }
};
