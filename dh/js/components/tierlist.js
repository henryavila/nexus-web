// tierlist.js — Tier List component (301 heroes, sortable, filterable)
const TierList = {
  _sortCol: 'ac_tier',
  _sortDir: 'asc',   // for tier: asc = SS first
  _filters: { elements: [], search: '', onlyOwned: false },
  _ownedSet: null,
  _heroDataMap: null,

  // Tier sort rank (lower = better)
  _tierRank: { SS: 0, S: 1, A: 2, B: 3, C: 4, D: 5 },

  // Activity labels (Portuguese)
  _activityLabels: {
    temporal_vortex:      'Vórtice Temporal',
    goblin_lair:          'Covil Goblin',
    grave_venom:          'Grave — Veneno',
    grave_curse:          'Grave — Maldição',
    grave_rot:            'Grave — Podridão',
    heretical_ruins:      'Ruínas Heréticas',
    ancient_battlefield:  'Campo de Batalha',
    arena:                'Arena',
    fae:                  'Fae',
    pillar:               'Pilar das Provas',
    green_dragon:         'Dragão Verde',
    violet_dragon:        'Dragão Violeta',
    gloomland:            'Gloomland'
  },

  // ─── Main render ───────────────────────────────────────────
  render(container) {
    this._buildLookups();

    const heroes = this._enrichAll();
    const count = heroes.length;

    // Header
    const header = R.el('div', { className: 'flex items-center justify-between mb-4' }, [
      R.el('h1', { className: 'text-2xl font-bold text-white' }, ['Tier List']),
      R.el('span', { className: 'text-sm text-gray-400', textContent: `${count} heróis` })
    ]);

    // Filter bar (element toggles + search)
    const filterBar = Filters.createFilterBar(
      { elements: true, search: true },
      (f) => { this._filters.elements = f.elements; this._filters.search = f.search; this._rerender(tbody, heroes); }
    );

    // "Só meus" toggle
    const ownedToggle = this._createOwnedToggle(tbody, heroes);
    filterBar.appendChild(ownedToggle);

    // Table
    const thead = this._createThead();
    var tbody = R.el('tbody', {});
    const table = R.el('table', { className: 'w-full text-sm border-collapse' }, [thead, tbody]);
    const tableWrap = R.el('div', { className: 'overflow-x-auto' }, [table]);

    container.appendChild(header);
    container.appendChild(filterBar);
    container.appendChild(tableWrap);

    this._rerender(tbody, heroes);
  },

  // ─── Build lookup maps ─────────────────────────────────────
  _buildLookups() {
    // Owned set (hero IDs)
    if (!this._ownedSet) {
      this._ownedSet = new Set();
      for (const h of (typeof DATA_MY_ROSTER !== 'undefined' ? DATA_MY_ROSTER : [])) {
        this._ownedSet.add(h.id);
      }
    }
  },

  // ─── Enrich tier data with school from DATA_HEROES + owned flag ─
  _enrichAll() {
    const tiers = (typeof DATA_TIERS !== 'undefined' && Array.isArray(DATA_TIERS)) ? DATA_TIERS : [];
    return tiers.map(t => {
      const heroData = t.id ? D.hero(t.id) : null;
      return {
        ...t,
        element: heroData?.element || null,
        rarity: heroData?.rarity || null,
        school: heroData?.school || null,
        season: heroData?.season || null,
        owned: t.id ? this._ownedSet.has(t.id) : false,
        _heroData: heroData || null
      };
    });
  },

  // ─── "Só meus" toggle button ───────────────────────────────
  _createOwnedToggle(tbody, heroes) {
    const btn = R.el('button', {
      className: 'px-3 py-1 rounded-full text-xs border border-gold text-gold hover:bg-gold hover:text-white transition-colors ml-2',
      textContent: 'Só meus',
      onClick: () => {
        this._filters.onlyOwned = !this._filters.onlyOwned;
        if (this._filters.onlyOwned) {
          btn.classList.add('bg-gold', 'text-white');
          btn.classList.remove('text-gold');
        } else {
          btn.classList.remove('bg-gold', 'text-white');
          btn.classList.add('text-gold');
        }
        this._rerender(tbody, heroes);
      }
    });
    return btn;
  },

  // ─── Table header ──────────────────────────────────────────
  _createThead() {
    const cols = [
      { key: 'name',       label: 'Nome' },
      { key: 'element',    label: 'Elem' },
      { key: 'rarity',     label: 'Raridade' },
      { key: 'ac_tier',    label: 'AC Tier' },
      { key: 'hh_overall', label: 'HH Overall' },
      { key: 'role',       label: 'Tipo' },
      { key: 'school',     label: 'School' },
      { key: 'owned',      label: '✓' }
    ];

    const ths = cols.map(col => {
      const th = R.el('th', {
        className: 'text-left pb-2 px-2 text-xs text-gray-500 uppercase cursor-pointer select-none hover:text-gray-300 transition-colors whitespace-nowrap',
        textContent: col.label,
        onClick: () => {
          if (this._sortCol === col.key) {
            this._sortDir = this._sortDir === 'asc' ? 'desc' : 'asc';
          } else {
            this._sortCol = col.key;
            // Smart default direction
            if (col.key === 'hh_overall') this._sortDir = 'desc';
            else if (col.key === 'ac_tier') this._sortDir = 'asc';
            else if (col.key === 'owned') this._sortDir = 'desc';
            else this._sortDir = 'asc';
          }
          this._updateSortIndicators(tr);
          // Find the tbody sibling and rerender
          const tbody = th.closest('table').querySelector('tbody');
          this._rerender(tbody, this._enrichAll());
        }
      });
      // Sort indicator
      if (col.key === this._sortCol) {
        const arrow = this._sortDir === 'asc' ? ' ▲' : ' ▼';
        th.textContent = col.label + arrow;
      }
      return th;
    });

    const tr = R.el('tr', { className: 'border-b border-surface-hover' }, ths);
    return R.el('thead', {}, [tr]);
  },

  // ─── Update sort arrows in header ─────────────────────────
  _updateSortIndicators(headerRow) {
    const labels = ['Nome', 'Elem', 'Raridade', 'AC Tier', 'HH Overall', 'Tipo', 'School', '✓'];
    const keys = ['name', 'element', 'rarity', 'ac_tier', 'hh_overall', 'role', 'school', 'owned'];
    const ths = headerRow.querySelectorAll('th');
    ths.forEach((th, i) => {
      if (keys[i] === this._sortCol) {
        th.textContent = labels[i] + (this._sortDir === 'asc' ? ' ▲' : ' ▼');
      } else {
        th.textContent = labels[i];
      }
    });
  },

  // ─── Filter + sort + rerender tbody ────────────────────────
  _rerender(tbody, heroes) {
    // Apply filters
    let filtered = Filters.applyHeroFilters(heroes, this._filters);
    if (this._filters.onlyOwned) {
      filtered = filtered.filter(h => h.owned);
    }

    // Sort
    filtered = this._sort(filtered);

    // Rebuild rows
    tbody.innerHTML = '';
    for (const hero of filtered) {
      tbody.appendChild(this._createRow(hero));
    }

    // Empty state
    if (filtered.length === 0) {
      tbody.appendChild(R.el('tr', {}, [
        R.el('td', {
          className: 'text-center text-gray-500 py-8',
          colspan: '8',
          textContent: 'Nenhum herói encontrado.'
        })
      ]));
    }
  },

  // ─── Sort heroes ───────────────────────────────────────────
  _sort(heroes) {
    const col = this._sortCol;
    const dir = this._sortDir === 'asc' ? 1 : -1;

    return [...heroes].sort((a, b) => {
      let va = a[col];
      let vb = b[col];

      // Tier column: use rank mapping
      if (col === 'ac_tier') {
        va = this._tierRank[va] ?? 99;
        vb = this._tierRank[vb] ?? 99;
        const cmp = (va - vb) * dir;
        if (cmp !== 0) return cmp;
        // Secondary: HH Overall descending
        const ha = parseFloat(a.hh_overall) || 0;
        const hb = parseFloat(b.hh_overall) || 0;
        return hb - ha;
      }

      // Numeric columns
      if (col === 'hh_overall') {
        va = parseFloat(va) || 0;
        vb = parseFloat(vb) || 0;
        return (va - vb) * dir;
      }

      // Boolean (owned)
      if (col === 'owned') {
        va = va ? 1 : 0;
        vb = vb ? 1 : 0;
        return (va - vb) * dir;
      }

      // Rarity sort order
      if (col === 'rarity') {
        const rarityRank = { Mythic: 0, Legendary: 1, Epic: 2, Rare: 3, Common: 4 };
        va = rarityRank[va] ?? 99;
        vb = rarityRank[vb] ?? 99;
        return (va - vb) * dir;
      }

      // Element sort: use custom order
      if (col === 'element') {
        const elemRank = { Fire: 0, Ice: 1, Lightning: 2, Poison: 3, Necrosis: 4, Radiance: 5 };
        va = elemRank[va] ?? 99;
        vb = elemRank[vb] ?? 99;
        return (va - vb) * dir;
      }

      // String columns
      va = (va || '').toString().toLowerCase();
      vb = (vb || '').toString().toLowerCase();
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  },

  // ─── Table row ─────────────────────────────────────────────
  _createRow(hero) {
    const owned = hero.owned;
    const rowClass = [
      'border-t border-surface-hover hover:bg-surface-hover/60 cursor-pointer transition-colors',
      owned ? 'border-l-2 border-l-gold/50 bg-gold/[0.03]' : ''
    ].join(' ');

    const tr = R.el('tr', {
      className: rowClass,
      onClick: () => this._openDetail(hero)
    }, [
      // Nome
      R.el('td', { className: 'py-2 px-2 text-white font-medium whitespace-nowrap' }, [
        R.el('span', {
          className: 'hover:text-gold transition-colors',
          textContent: hero.name
        })
      ]),
      // Elem
      R.el('td', { className: 'py-2 px-2 whitespace-nowrap' }, [
        R.elementDot(hero.element),
        R.el('span', { className: `text-${R.elementColor(hero.element)} text-xs ml-1.5`, textContent: hero.element })
      ]),
      // Raridade
      R.el('td', { className: `py-2 px-2 text-${R.rarityColor(hero.rarity)} text-xs`, textContent: hero.rarity || '—' }),
      // AC Tier
      R.el('td', { className: 'py-2 px-2' }, [
        hero.ac_tier ? R.badge(hero.ac_tier, R.tierColor(hero.ac_tier)) : R.el('span', { className: 'text-gray-600', textContent: '—' })
      ]),
      // HH Overall
      R.el('td', { className: 'py-2 px-2 text-gray-300 tabular-nums', textContent: hero.hh_overall && hero.hh_overall !== '0' ? hero.hh_overall : '—' }),
      // Tipo (role)
      R.el('td', { className: 'py-2 px-2 text-gray-400 text-xs', textContent: hero.role || '—' }),
      // School
      R.el('td', { className: 'py-2 px-2 text-gray-400 text-xs', textContent: hero.school || '—' }),
      // Owned
      R.el('td', { className: 'py-2 px-2 text-center' }, [
        owned
          ? R.el('span', { className: 'text-gold text-sm', textContent: '✓' })
          : R.el('span', { className: 'text-gray-700 text-sm', textContent: '—' })
      ])
    ]);

    return tr;
  },

  // ─── Detail slide-over ─────────────────────────────────────
  _openDetail(hero) {
    SlidePanel.open(hero.name, (panel) => {
      const heroData = hero._heroData;

      // ── Header info ──
      const headerBlock = R.el('div', { className: 'mb-5' }, [
        R.el('div', { className: 'flex items-center gap-2 mb-2 flex-wrap' }, [
          R.elementDot(hero.element),
          R.el('span', { className: `text-${R.elementColor(hero.element)} font-medium`, textContent: hero.element }),
          R.el('span', { className: 'text-gray-600', textContent: '·' }),
          R.el('span', { className: `text-${R.rarityColor(hero.rarity)}`, textContent: hero.rarity }),
          R.el('span', { className: 'text-gray-600', textContent: '·' }),
          hero.season ? R.el('span', { className: 'text-gray-400 text-sm', textContent: hero.season.toUpperCase() }) : null
        ]),
        hero.school ? R.el('div', { className: 'text-xs text-gray-400 mt-1', textContent: `School: ${hero.school}` }) : null,
        hero.role ? R.el('div', { className: 'text-xs text-gray-400 mt-0.5', textContent: `Tipo: ${hero.role}` }) : null,
        hero.owned
          ? R.el('div', { className: 'mt-2' }, [R.badge('Você possui', 'gold')])
          : null
      ]);

      // ── Tier badges ──
      const tierBlock = R.el('div', { className: 'flex items-center gap-3 mb-5 flex-wrap' }, [
        hero.ac_tier
          ? R.el('div', { className: 'text-center' }, [
              R.el('div', { className: 'text-xs text-gray-500 mb-1', textContent: 'AllClash' }),
              R.badge(hero.ac_tier, R.tierColor(hero.ac_tier))
            ])
          : null,
        hero.hh_overall && hero.hh_overall !== '0'
          ? R.el('div', { className: 'text-center' }, [
              R.el('div', { className: 'text-xs text-gray-500 mb-1', textContent: 'HellHades' }),
              R.el('span', { className: 'text-white font-bold text-lg', textContent: hero.hh_overall })
            ])
          : null
      ]);

      // ── Activity ratings table ──
      const ratingsBlock = this._renderRatings(hero.ratings);

      // ── Skills ──
      const skillsBlock = heroData ? this._renderSkills(heroData) : R.el('div', { className: 'text-gray-500 text-sm', textContent: 'Dados de skills não disponíveis.' });

      panel.appendChild(headerBlock);
      panel.appendChild(tierBlock);
      panel.appendChild(ratingsBlock);
      panel.appendChild(skillsBlock);
    });
  },

  // ─── Activity ratings table ────────────────────────────────
  _renderRatings(ratings) {
    if (!ratings) {
      return R.el('div', { className: 'text-gray-500 text-sm mb-5', textContent: 'Sem ratings disponíveis.' });
    }

    const rows = Object.entries(this._activityLabels).map(([key, label]) => {
      const val = ratings[key];
      const display = (val != null && val !== 0) ? String(val) : '—';
      const barWidth = val ? Math.round((val / 5) * 100) : 0;
      const barColor = val >= 4.5 ? 'tier-ss' : val >= 3.5 ? 'tier-s' : val >= 2.5 ? 'tier-a' : val >= 1.5 ? 'tier-b' : 'tier-c';

      return R.el('tr', { className: 'border-t border-surface-hover' }, [
        R.el('td', { className: 'py-1 pr-3 text-xs text-gray-400 whitespace-nowrap', textContent: label }),
        R.el('td', { className: 'py-1 pr-2 text-xs text-white tabular-nums w-8 text-right', textContent: display }),
        R.el('td', { className: 'py-1 w-24' }, [
          R.el('div', { className: 'w-full bg-surface-hover rounded-full h-1.5' }, [
            R.el('div', {
              className: `bg-${barColor} h-1.5 rounded-full transition-all`,
              style: { width: `${barWidth}%` }
            })
          ])
        ])
      ]);
    });

    const table = R.el('table', { className: 'w-full text-sm' }, [R.el('tbody', {}, rows)]);

    return R.el('div', { className: 'mb-5' }, [
      R.el('h3', { className: 'text-sm font-semibold text-gray-300 mb-2', textContent: 'Ratings por Atividade' }),
      table
    ]);
  },

  // ─── Skills section ────────────────────────────────────────
  _renderSkills(heroData) {
    const parts = [];

    // Captain skill
    if (heroData.captain) {
      parts.push(R.el('div', { className: 'mb-3' }, [
        R.el('div', { className: 'text-xs font-semibold text-gold mb-1', textContent: 'Capitão' }),
        R.el('div', { className: 'text-xs text-gray-300 leading-relaxed', textContent: heroData.captain })
      ]));
    }

    // Skills
    const skillOrder = ['ultimate', 'battle', 'passive'];
    const skillLabels = { ultimate: 'Ultimate', battle: 'Battle Skill', passive: 'Passiva' };

    if (heroData.skills) {
      for (const key of skillOrder) {
        const skill = heroData.skills[key];
        if (!skill) continue;
        parts.push(R.el('div', { className: 'mb-3' }, [
          R.el('div', { className: 'text-xs font-semibold text-gray-300 mb-0.5' }, [
            R.el('span', { className: 'text-gold', textContent: skillLabels[key] }),
            R.el('span', { className: 'text-gray-500 ml-1', textContent: `— ${skill.name}` })
          ]),
          R.el('div', { className: 'text-xs text-gray-400 leading-relaxed', textContent: skill.description })
        ]));
      }
    }

    // Inspiration
    if (heroData.inspiration && heroData.inspiration.length) {
      const items = heroData.inspiration.map((text, i) =>
        R.el('div', { className: 'text-xs text-gray-400 py-0.5', textContent: `${i + 1}. ${text}` })
      );
      parts.push(R.el('div', { className: 'mb-3' }, [
        R.el('div', { className: 'text-xs font-semibold text-gray-300 mb-1', textContent: 'Inspiração' }),
        ...items
      ]));
    }

    if (parts.length === 0) {
      return R.el('div', { className: 'text-gray-500 text-sm', textContent: 'Dados de skills não disponíveis.' });
    }

    return R.el('div', { className: 'mb-5' }, [
      R.el('h3', { className: 'text-sm font-semibold text-gray-300 mb-2', textContent: 'Skills' }),
      ...parts
    ]);
  }
};
