// teams.js — Teams by activity component (mobile-first, activity search)
const Teams = {
  _openAccordions: new Set(),
  _sortCol: 'teams',
  _sortAsc: false,
  _searchQuery: '',
  _activeCategory: 'all',
  _activeView: 'all',

  render(container) {
    const teams = (typeof DATA_TEAMS !== 'undefined' && DATA_TEAMS) || [];
    const freq = (typeof DATA_HERO_FREQUENCY !== 'undefined' && DATA_HERO_FREQUENCY) || [];

    // --- Header ---
    const header = R.el('div', { className: 'flex items-center justify-between mb-3' }, [
      R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Times']),
      R.el('span', { className: 'text-sm text-gray-400', textContent: `${teams.length} times` })
    ]);

    // --- View toggle ---
    const views = [
      { id: 'active', label: 'Ativos' },
      { id: 'all', label: 'Todos' },
      { id: 'reference', label: 'Referência' }
    ];
    const viewBar = R.el('div', { className: 'flex gap-1.5 mb-3' });
    for (const v of views) {
      const isActive = v.id === this._activeView;
      viewBar.appendChild(R.el('button', {
        className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          isActive ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
        }`,
        textContent: v.label,
        onClick: () => {
          this._activeView = v.id;
          viewBar.querySelectorAll('button').forEach(b => {
            const a = b.textContent === v.label;
            b.className = `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              a ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
            }`;
          });
          this._renderFilteredTeams(teamsList, teams);
        }
      }));
    }

    // --- Search bar (searches activity + team name + hero name) ---
    const searchInput = R.el('input', {
      type: 'text',
      placeholder: 'Buscar atividade, time ou her\u00f3i...',
      className: 'w-full bg-surface-hover border border-surface-hover rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none mb-3'
    });

    // --- Activity category chips (scrollable on mobile) ---
    const categories = [
      { id: 'all', label: 'Todos' },
      { id: 'boss', label: 'Boss', match: ['boss', 'frey', 'goblin'] },
      { id: 'grave', label: 'Grave', match: ['grave'] },
      { id: 'dungeon', label: 'Dungeon', match: ['heretical', 'temporal', 'domain', 'fae', 'pillar'] },
      { id: 'talent', label: 'Talent', match: ['talent'] },
      { id: 'pvp', label: 'PvP', match: ['arena', 'pvp', 'ancient battlefield'] },
      { id: 'multi', label: 'Multi', match: ['multi'] }
    ];

    const chipBar = R.el('div', { className: 'flex flex-wrap gap-1.5 mb-4' });
    for (const cat of categories) {
      const isActive = cat.id === this._activeCategory;
      chipBar.appendChild(R.el('button', {
        className: `px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
          isActive ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
        }`,
        textContent: cat.label,
        'data-cat': cat.id,
        onClick: () => {
          this._activeCategory = cat.id;
          chipBar.querySelectorAll('button').forEach(b => {
            const a = b.dataset.cat === cat.id;
            b.className = `px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              a ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
            }`;
          });
          this._renderFilteredTeams(teamsList, teams);
        }
      }));
    }

    // --- Team list ---
    const teamsList = R.el('div', { className: 'space-y-2 mb-8' });
    this._renderFilteredTeams(teamsList, teams);

    // --- Search handler ---
    searchInput.addEventListener('input', () => {
      this._searchQuery = searchInput.value.toLowerCase();
      this._renderFilteredTeams(teamsList, teams);
    });

    // --- Hero Frequency ---
    const freqSection = this._renderFrequencyTable(freq);

    container.appendChild(header);
    container.appendChild(viewBar);
    container.appendChild(searchInput);
    container.appendChild(chipBar);
    container.appendChild(teamsList);
    container.appendChild(freqSection);
  },

  // =====================================================
  // FILTERED TEAM LIST
  // =====================================================
  _renderFilteredTeams(container, teams) {
    container.innerHTML = '';

    const categoryMap = {
      boss: ['boss', 'frey', 'goblin'],
      grave: ['grave'],
      dungeon: ['heretical', 'temporal', 'domain', 'fae', 'pillar'],
      talent: ['talent'],
      pvp: ['arena', 'pvp', 'ancient battlefield'],
      multi: ['multi']
    };

    let filtered = teams;

    // Apply view filter
    if (this._activeView === 'active') {
      filtered = filtered.filter(t => t.status === 'active' || /prioridade/i.test(t.name));
    } else if (this._activeView === 'reference') {
      filtered = filtered.filter(t => t.status === 'reference');
    }

    // Apply text search (activity, team name, or hero name)
    if (this._searchQuery) {
      const q = this._searchQuery;
      filtered = filtered.filter(t =>
        t.activity.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.members.some(m => (D.hero(m.id)?.name || '').toLowerCase().includes(q))
      );
    }

    // Apply category filter
    if (this._activeCategory !== 'all') {
      const keywords = categoryMap[this._activeCategory] || [];
      filtered = filtered.filter(t =>
        keywords.some(k => t.activity.toLowerCase().includes(k))
      );
    }

    if (filtered.length === 0) {
      container.appendChild(R.el('div', {
        className: 'text-center text-gray-500 py-12',
        textContent: 'Nenhum time encontrado.'
      }));
      return;
    }

    // sort: active -> tested -> reference
    const statusRank = { active: 0, tested: 1, untested: 2, theoretical: 3, reference: 4 };
    filtered.sort((a, b) => (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9));

    for (const team of filtered) {
      container.appendChild(this._renderTeamCard(team));
    }
  },

  // =====================================================
  // TEAM CARD (accordion) — activity-first layout
  // =====================================================
  _renderTeamCard(team) {
    const isOpen = this._openAccordions.has(team.id);

    // --- Header: Activity first, then team name ---
    const statusBadge = this._statusBadge(team.status);

    const headerContent = R.el('div', { className: 'flex-1 min-w-0' }, [
      R.el('div', { className: 'text-white font-semibold text-sm md:text-base', textContent: team.activity }),
      R.el('div', { className: 'flex items-center gap-2 mt-0.5 flex-wrap' }, [
        R.el('span', { className: 'text-xs text-gray-500', textContent: team.name }),
        team.affinity ? R.badge(team.affinity, 'pending') : null
      ].filter(Boolean))
    ]);

    const headerRight = R.el('div', { className: 'flex items-center gap-1.5 shrink-0 flex-wrap justify-end' }, [
      statusBadge,
      team.dps_result ? R.badge(team.dps_result, 'fire') : null,
      team.score != null ? R.badge(`${team.score} pts`, 'tier-a') : null
    ].filter(Boolean));

    const chevron = R.el('span', {
      className: `text-gray-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`,
      textContent: '\u25BE',
      style: { fontSize: '14px' }
    });

    const headerBar = R.el('div', {
      className: 'flex items-center gap-3 cursor-pointer select-none py-3 px-3 md:px-4'
    }, [chevron, headerContent, headerRight]);

    // --- Body (collapsible) ---
    const body = R.el('div', {
      className: `px-3 md:px-4 pb-4 ${isOpen ? '' : 'hidden'}`,
      'data-body': team.id
    });

    // Hero slots
    body.appendChild(this._renderHeroSlots(team.members));

    // Mechanics (boss, cycle, danger, how to win, food)
    if (team.mechanics) {
      body.appendChild(this._renderMechanics(team.mechanics));
    }

    // Bonds
    if (team.bonds) {
      body.appendChild(R.el('div', { className: 'mt-3 text-xs text-gray-400' }, [
        R.el('span', { className: 'text-gray-500 font-medium', textContent: 'Bonds: ' }),
        R.el('span', { textContent: team.bonds })
      ]));
    }

    // Captain
    if (team.captain) {
      body.appendChild(R.el('div', { className: 'mt-2 text-xs text-gray-400' }, [
        R.el('span', { className: 'text-gray-500 font-medium', textContent: 'Captain: ' }),
        R.heroLink(D.hero(team.captain.id)?.name || '?', ''),
        R.el('span', { textContent: ` \u2014 ${team.captain.skill}` })
      ]));
    }

    // Notes
    if (team.notes) {
      body.appendChild(R.el('div', { className: 'mt-2 text-xs text-gray-500 italic', textContent: team.notes }));
    }

    // Variants
    if (team.variants && team.variants.length > 0) {
      body.appendChild(this._renderVariants(team.variants));
    }

    // Tests
    if (team.tests && team.tests.length > 0) {
      body.appendChild(this._renderTests(team.tests));
    }

    // Toggle behavior
    headerBar.addEventListener('click', () => {
      const bodyEl = headerBar.parentElement.querySelector(`[data-body="${team.id}"]`);
      const isNowOpen = bodyEl.classList.toggle('hidden');
      if (isNowOpen) {
        this._openAccordions.delete(team.id);
        chevron.classList.remove('rotate-180');
      } else {
        this._openAccordions.add(team.id);
        chevron.classList.add('rotate-180');
      }
    });

    return R.el('div', {
      className: 'bg-surface-card rounded-lg border border-surface-hover'
    }, [headerBar, body]);
  },

  // =====================================================
  // HERO SLOTS — responsive grid
  // =====================================================
  _renderHeroSlots(members) {
    const slots = members.map(m => {
      const hero = D.hero(m.id);
      const elColor = R.elementColor(hero?.element);
      const heroId = m.id;
      return R.el('div', {
        className: 'flex items-center gap-2 bg-surface rounded px-3 py-2 border-l-2',
        style: { borderLeftColor: ({ fire: '#e85d3a', ice: '#4fa8d4', lightning: '#c9a0dc', poison: '#6ec26e', necrosis: '#b07cc6', radiance: '#f0c040' })[hero?.element?.toLowerCase()] || '#5a576d' }
      }, [
        R.heroImg(heroId, 32),
        R.elementDot(hero?.element),
        R.el('div', { className: 'min-w-0' }, [
          R.heroLink(hero?.name || '?', 'text-sm font-medium truncate'),
          R.el('div', { className: 'text-xs text-gray-500 truncate', textContent: m.role }),
          null
        ])
      ].filter(Boolean));
    });

    return R.el('div', {
      className: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2'
    }, slots);
  },

  // =====================================================
  // MECHANICS — boss, cycle, danger, how to win, food
  // =====================================================
  _renderMechanics(mech) {
    const rows = [];

    if (mech.boss) {
      rows.push(R.el('div', { className: 'flex gap-2 items-start' }, [
        R.el('span', { className: 'text-gray-500 font-medium shrink-0 w-20', textContent: 'Boss' }),
        R.el('span', { className: 'text-white', textContent: mech.boss })
      ]));
    }
    if (mech.ciclo) {
      rows.push(R.el('div', { className: 'flex gap-2 items-start' }, [
        R.el('span', { className: 'text-gray-500 font-medium shrink-0 w-20', textContent: 'Ciclo' }),
        R.el('span', { textContent: mech.ciclo })
      ]));
    }
    if (mech.perigo) {
      rows.push(R.el('div', { className: 'flex gap-2 items-start' }, [
        R.el('span', { className: 'text-red-400 font-medium shrink-0 w-20', textContent: 'Perigo' }),
        R.el('span', { className: 'text-gray-300', textContent: mech.perigo })
      ]));
    }
    if (mech.como_vencer) {
      rows.push(R.el('div', { className: 'flex gap-2 items-start' }, [
        R.el('span', { className: 'text-done font-medium shrink-0 w-20', textContent: 'Vencer' }),
        R.el('span', { className: 'text-gray-300', textContent: mech.como_vencer })
      ]));
    }
    if (mech.food) {
      rows.push(R.el('div', { className: 'flex gap-2 items-start' }, [
        R.el('span', { className: 'text-gray-500 font-medium shrink-0 w-20', textContent: 'Food' }),
        R.el('span', { className: 'text-gold-dim', textContent: mech.food })
      ]));
    }

    return R.el('div', { className: 'mt-3 bg-surface rounded-lg p-3 space-y-1.5 text-xs' }, rows);
  },

  // =====================================================
  // VARIANTS
  // =====================================================
  _renderVariants(variants) {
    const items = variants.map(v => {
      const statusBadge = this._statusBadge(v.status);
      const header = R.el('div', { className: 'flex items-center justify-between gap-2 mb-1 flex-wrap' }, [
        R.el('span', { className: 'text-sm text-gray-300 font-medium', textContent: v.name }),
        R.el('div', { className: 'flex items-center gap-1.5 shrink-0' }, [
          statusBadge,
          v.dps_result ? R.badge(v.dps_result, 'fire') : null,
          v.score != null ? R.badge(`${v.score} pts`, 'tier-a') : null
        ].filter(Boolean))
      ]);

      const children = [header];
      children.push(R.el('div', { className: 'text-xs text-gray-400', textContent: v.change }));

      if (v.bonds) {
        children.push(R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: `Bonds: ${v.bonds}` }));
      }
      if (v.notes) {
        children.push(R.el('div', { className: 'text-xs text-gray-600 mt-1 italic', textContent: v.notes }));
      }
      if (v.benefit) {
        children.push(R.el('div', { className: 'text-xs text-done mt-1', textContent: `Beneficio: ${v.benefit}` }));
      }

      return R.el('div', { className: 'bg-surface-hover rounded p-3' }, children);
    });

    return R.el('div', { className: 'mt-4' }, [
      R.el('div', { className: 'text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2', textContent: 'Variantes' }),
      R.el('div', { className: 'space-y-2' }, items)
    ]);
  },

  // =====================================================
  // TESTS
  // =====================================================
  _renderTests(tests) {
    // On mobile, use stacked cards instead of a table
    const items = tests.map(t =>
      R.el('div', { className: 'bg-surface-hover rounded p-3' }, [
        R.el('div', { className: 'flex items-center justify-between gap-2 mb-1' }, [
          R.el('span', { className: 'text-xs text-gray-300', textContent: t.desc }),
          R.el('span', { className: 'text-xs text-gold font-medium whitespace-nowrap', textContent: t.result })
        ]),
        t.notes ? R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: t.notes }) : null
      ])
    );

    return R.el('div', { className: 'mt-4' }, [
      R.el('div', { className: 'text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2', textContent: 'Testes' }),
      R.el('div', { className: 'space-y-2' }, items)
    ]);
  },

  // =====================================================
  // HERO FREQUENCY TABLE (sortable)
  // =====================================================
  _renderFrequencyTable(freq) {
    const section = R.el('div', { className: 'mt-8' });
    const expanded = localStorage.getItem('teams-frequency-expanded') === 'true';
    const toggle = R.el('button', {
      className: 'text-xs text-gray-500 hover:text-gray-300 mb-3',
      textContent: expanded ? 'Esconder frequência ▲' : 'Ver frequência ▼'
    });
    const body = R.el('div', { style: expanded ? '' : 'display:none' });
    toggle.addEventListener('click', () => {
      const isVisible = body.style.display !== 'none';
      body.style.display = isVisible ? 'none' : '';
      toggle.textContent = isVisible ? 'Ver frequência ▼' : 'Esconder frequência ▲';
      localStorage.setItem('teams-frequency-expanded', !isVisible);
    });

    section.appendChild(R.el('h2', { className: 'text-lg md:text-xl font-bold text-white mb-1', textContent: 'Frequencia de Herois nos Times' }));
    section.appendChild(toggle);

    const tableWrap = R.el('div', { className: 'overflow-x-auto' });
    body.appendChild(R.card('', [tableWrap]));
    section.appendChild(body);

    const renderTable = () => {
      const sorted = [...freq].sort((a, b) => {
        const col = this._sortCol;
        let va = col === 'name' ? D.hero(a.id)?.name : col === 'element' ? D.hero(a.id)?.element : a[col];
        let vb = col === 'name' ? D.hero(b.id)?.name : col === 'element' ? D.hero(b.id)?.element : b[col];
        if (typeof va === 'string') { va = va.toLowerCase(); vb = (vb || '').toLowerCase(); }
        if (va < vb) return this._sortAsc ? -1 : 1;
        if (va > vb) return this._sortAsc ? 1 : -1;
        return 0;
      });

      const columns = [
        { key: 'name', label: 'Heroi' },
        { key: 'element', label: 'Elem.' },
        { key: 'teams', label: 'Times' },
        { key: 'activities', label: 'Atividades' }
      ];

      const thCells = columns.map(col => {
        const isActive = this._sortCol === col.key;
        const arrow = isActive ? (this._sortAsc ? ' \u25B4' : ' \u25BE') : '';
        return R.el('th', {
          className: `pb-2 pr-2 md:pr-4 text-left cursor-pointer hover:text-gold transition-colors whitespace-nowrap ${isActive ? 'text-gold' : ''}`,
          textContent: col.label + arrow,
          onClick: () => {
            if (this._sortCol === col.key) {
              this._sortAsc = !this._sortAsc;
            } else {
              this._sortCol = col.key;
              this._sortAsc = col.key === 'name';
            }
            renderTable();
          }
        });
      });

      const thead = R.el('thead', {}, [
        R.el('tr', { className: 'text-xs text-gray-500 uppercase' }, thCells)
      ]);

      const rows = sorted.map(h => {
        const hero = D.hero(h.id);
        const elColor = R.elementColor(hero?.element);
        const heroId = h.id;
        return R.el('tr', { className: 'border-t border-surface-hover hover:bg-surface-hover transition-colors' }, [
          R.el('td', { className: 'py-2 pr-2 md:pr-4' }, [
            R.el('div', { className: 'flex items-center gap-2' }, [
              R.heroImg(heroId, 24),
              R.heroLink(hero?.name || '?', 'font-medium text-sm')
            ].filter(Boolean))
          ]),
          R.el('td', { className: 'py-2 pr-2 md:pr-4' }, [
            R.elementDot(hero?.element)
          ]),
          R.el('td', { className: 'py-2 pr-2 md:pr-4' }, [
            R.el('span', {
              className: `text-sm font-bold ${h.teams >= 5 ? 'text-gold' : h.teams >= 3 ? 'text-white' : 'text-gray-400'}`,
              textContent: String(h.teams)
            })
          ]),
          R.el('td', { className: 'py-2 text-xs text-gray-500', textContent: h.activities })
        ]);
      });

      const tbody = R.el('tbody', {}, rows);
      const table = R.el('table', { className: 'w-full text-sm' }, [thead, tbody]);

      tableWrap.innerHTML = '';
      tableWrap.appendChild(table);
    };

    renderTable();
    return section;
  },

  // =====================================================
  // STATUS BADGE HELPER
  // =====================================================
  _statusBadge(status) {
    const map = {
      active:      { label: 'Ativo',       color: 'done' },
      tested:      { label: 'Testado',     color: 'done' },
      untested:    { label: 'Nao Testado', color: 'progress' },
      reference:   { label: 'Referencia',  color: 'pending' },
      theoretical: { label: 'Teorico',     color: 'pending' }
    };
    const s = map[status] || map.theoretical;
    return R.badge(s.label, s.color);
  }
};
