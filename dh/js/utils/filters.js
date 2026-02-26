// filters.js — Shared filter/search logic
const Filters = {
  ROLE_GROUPS: [
    { key: 'Burst',         color: 'role-burst' },
    { key: 'AoE',           color: 'role-aoe' },
    { key: 'Single Target', color: 'role-st' },
    { key: 'Tank',          color: 'role-tank' },
    { key: 'Healer',        color: 'role-healer' },
    { key: 'Amplifier',     color: 'role-amp' },
    { key: 'Debuffer',      color: 'role-debuff' }
  ],

  createFilterBar(options, onFilter) {
    const bar = R.el('div', { className: 'flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6 items-center' });

    if (options.elements) {
      const elements = ['Fire', 'Ice', 'Lightning', 'Poison', 'Necrosis', 'Radiance'];
      for (const el of elements) {
        const btn = R.el('button', {
          className: `px-3 py-1 rounded-full text-xs border border-${R.elementColor(el)} text-${R.elementColor(el)} hover:bg-${R.elementColor(el)} hover:text-white transition-colors`,
          textContent: el,
          'data-element': el,
          onClick: (e) => {
            e.target.classList.toggle('bg-' + R.elementColor(el));
            e.target.classList.toggle('text-white');
            onFilter(Filters.getActiveFilters(bar));
          }
        });
        bar.appendChild(btn);
      }
    }

    if (options.roles) {
      // Visual separator
      bar.appendChild(R.el('div', { className: 'w-px h-5 bg-gray-600 mx-0.5' }));

      for (const rg of this.ROLE_GROUPS) {
        const btn = R.el('button', {
          className: `px-2.5 py-1 rounded text-xs border border-${rg.color} text-${rg.color} hover:bg-${rg.color} hover:text-white transition-colors`,
          textContent: rg.key,
          'data-role': rg.key,
          onClick: () => {
            btn.classList.toggle('bg-' + rg.color);
            btn.classList.toggle('text-white');
            btn.classList.toggle('text-' + rg.color);
            onFilter(Filters.getActiveFilters(bar));
          }
        });
        bar.appendChild(btn);
      }
    }

    if (options.search) {
      const input = R.el('input', {
        type: 'text',
        placeholder: 'Buscar...',
        className: 'bg-surface-hover border border-surface-hover rounded px-3 py-1 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none ml-auto',
        'data-search': 'true'
      });
      input.addEventListener('input', () => onFilter(Filters.getActiveFilters(bar)));
      bar.appendChild(input);
    }

    return bar;
  },

  getActiveFilters(bar) {
    const elements = [...bar.querySelectorAll('[data-element]')]
      .filter(b => b.classList.contains('text-white'))
      .map(b => b.dataset.element);
    const roles = [...bar.querySelectorAll('[data-role]')]
      .filter(b => b.classList.contains('text-white'))
      .map(b => b.dataset.role);
    const search = bar.querySelector('[data-search]')?.value?.toLowerCase() || '';
    return { elements, roles, search };
  },

  applyHeroFilters(heroes, filters) {
    return heroes.filter(h => {
      if (filters.elements?.length && !filters.elements.includes(h.element)) return false;
      if (filters.roles?.length) {
        const heroRoles = h.roleGroups || [];
        if (!filters.roles.some(r => heroRoles.includes(r))) return false;
      }
      if (filters.search && !h.name.toLowerCase().includes(filters.search)) return false;
      return true;
    });
  }
};
