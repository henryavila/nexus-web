// builds.js — Builds page component (talent tree, gear, artifacts per hero)
const Builds = {
  _searchQuery: '',
  _activePriority: 'all',

  render(container) {
    const builds = (typeof DATA_BUILDS !== 'undefined' && DATA_BUILDS) || [];

    // --- Header ---
    const header = R.el('div', { className: 'flex items-center justify-between mb-3' }, [
      R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Builds']),
      R.el('span', { className: 'text-sm text-gray-400', textContent: `${builds.length} builds` })
    ]);

    // --- Search ---
    const searchInput = R.el('input', {
      type: 'text',
      placeholder: 'Buscar heroi, elemento, escola...',
      className: 'w-full bg-surface-hover border border-surface-hover rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none mb-3'
    });

    // --- Priority chips ---
    const priorities = [
      { id: 'all', label: 'Todos' },
      { id: '1', label: 'Core Carry' },
      { id: '2', label: 'Support/Tank' },
      { id: '3', label: 'DPS 2o' },
      { id: '4', label: 'Atividade' }
    ];

    const chipBar = R.el('div', { className: 'flex flex-wrap gap-1.5 mb-4' });
    for (const p of priorities) {
      const isActive = p.id === this._activePriority;
      chipBar.appendChild(R.el('button', {
        className: `px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
          isActive ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
        }`,
        textContent: p.label,
        'data-pri': p.id,
        onClick: () => {
          this._activePriority = p.id;
          chipBar.querySelectorAll('button').forEach(b => {
            const a = b.dataset.pri === p.id;
            b.className = `px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              a ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
            }`;
          });
          this._renderBuilds(listEl, builds);
        }
      }));
    }

    // --- Builds list ---
    const listEl = R.el('div', { className: 'space-y-3' });
    this._renderBuilds(listEl, builds);

    searchInput.addEventListener('input', () => {
      this._searchQuery = searchInput.value.toLowerCase();
      this._renderBuilds(listEl, builds);
    });

    // --- Talent info ---
    const infoCard = R.card('mb-4 text-xs text-gray-400 space-y-1', [
      R.el('div', { className: 'text-sm font-semibold text-white mb-1' }, ['Sistema de Talentos (Reborn)']),
      R.el('div', {}, ['12 talentos por heroi, 3 lanes, ~4 nodes por lane.']),
      R.el('div', { className: 'flex flex-wrap gap-2 my-1' }, [
        R.el('span', { className: 'text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-medium', textContent: 'Top (Ofensiva)' }),
        R.el('span', { className: 'text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-medium', textContent: 'Middle (Utilidade)' }),
        R.el('span', { className: 'text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-medium', textContent: 'Bottom (Suporte/Defensiva)' })
      ]),
      R.el('div', {}, ['S2+: livre pra pegar nodes de QUALQUER lane (Henry esta em S1).']),
      R.el('div', {}, ['Talent Stones por elemento: Fire/Poison | Ice/Necrosis | Lightning/Radiance.']),
      R.el('div', {}, ['Prioridade F2P: Level 4 nos carries primeiro, depois supports.'])
    ]);

    container.appendChild(header);
    container.appendChild(infoCard);
    container.appendChild(searchInput);
    container.appendChild(chipBar);
    container.appendChild(listEl);
  },

  _renderBuilds(listEl, builds) {
    listEl.innerHTML = '';
    const q = this._searchQuery;
    const pri = this._activePriority;

    const filtered = builds.filter(b => {
      if (pri !== 'all' && String(b.priority) !== pri) return false;
      if (q) {
        const hero = D.hero(b.id);
        const hay = [hero?.name, hero?.element, hero?.school, D.tier(b.id)?.role || hero?.career || '', hero?.rarity].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (!filtered.length) {
      listEl.appendChild(R.el('div', { className: 'text-gray-500 text-center py-8', textContent: 'Nenhuma build encontrada.' }));
      return;
    }

    for (const b of filtered) {
      listEl.appendChild(this._buildCard(b));
    }
  },

  _buildCard(b) {
    const hero = D.hero(b.id);
    const elemColor = R.elementColor(hero?.element);
    const rarityColor = R.rarityColor(hero?.rarity);
    const heroId = b.id;

    // --- Header row ---
    const headerRow = R.el('div', { className: 'flex items-center gap-3 mb-3' }, [
      heroId ? R.heroImg(heroId, 48, { className: 'rounded-lg' }) : null,
      R.el('div', { className: 'flex-1 min-w-0' }, [
        R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
          R.heroLink(hero?.name || '?', 'text-base font-bold'),
          R.badge(hero?.element, elemColor),
          R.badge(hero?.rarity, rarityColor),
          R.badge(hero?.school, 'surface-hover')
        ]),
        R.el('div', { className: 'text-xs text-gray-400 mt-0.5', textContent: D.tier(b.id)?.role || hero?.career || '' })
      ]),
      b.captain ? R.el('div', {
        className: 'hidden md:block text-xs bg-surface-hover rounded px-2 py-1 text-gold shrink-0',
        textContent: b.captain
      }) : null
    ]);

    // --- Talent section ---
    const talentSection = this._talentSection(b.talent);

    // --- Gear section ---
    const gearSection = this._gearSection(b.gear);

    // --- Artifact section ---
    const artifactSection = this._artifactSection(b.artifact);

    // --- Tips ---
    const tipsSection = R.el('div', { className: 'mt-3' }, [
      R.el('div', { className: 'text-xs font-semibold text-gray-300 mb-1' }, ['Dicas']),
      R.el('div', { className: 'text-xs text-gray-400 space-y-0.5' },
        (b.tips || []).map(t => R.el('div', { className: 'flex gap-1' }, [
          R.el('span', { className: 'text-gold shrink-0', textContent: '>' }),
          R.el('span', { textContent: t })
        ]))
      )
    ]);

    // --- Sources ---
    const sourcesEl = R.el('div', { className: 'mt-2 text-[10px] text-gray-500', textContent: `Fontes: ${(b.sources || []).join(', ')}` });

    return R.card('', [headerRow, talentSection, gearSection, artifactSection, tipsSection, sourcesEl]);
  },

  // ===== TALENT TREE SECTION =====
  _talentSection(t) {
    if (!t) return R.el('div');

    // Lane badge color based on lane type
    const laneColors = { 'Top': 'bg-red-500/20 text-red-400', 'Middle': 'bg-blue-500/20 text-blue-400', 'Bottom': 'bg-green-500/20 text-green-400' };
    const laneKey = (t.lane || '').split(' ')[0];
    const laneBadgeClass = laneColors[laneKey] || 'bg-surface-hover text-gray-300';

    const header = R.el('div', { className: 'flex items-center gap-2 mb-1' }, [
      R.el('div', { className: 'text-xs font-semibold text-white' }, ['Talentos']),
      R.el('span', { className: `text-xs px-2 py-0.5 rounded font-semibold ${laneBadgeClass}`, textContent: t.lane }),
      R.el('div', { className: 'text-[10px] text-gray-500', textContent: t.level_target })
    ]);

    // Lane rationale (why this lane)
    const laneRationale = t.lane_rationale
      ? R.el('div', { className: 'text-xs text-gray-400 mb-2 leading-relaxed italic', textContent: t.lane_rationale })
      : null;

    // Key nodes
    const keyNodesEl = (t.key_nodes && t.key_nodes.length)
      ? R.el('div', { className: 'mb-2 bg-surface rounded-lg p-2' }, [
          R.el('div', { className: 'text-[10px] font-semibold text-gray-300 mb-1 uppercase tracking-wide' }, ['Pontos-chave']),
          ...t.key_nodes.map(n => R.el('div', { className: 'flex gap-1.5 items-start py-0.5 text-xs' }, [
            R.el('span', { className: 'text-gold shrink-0', textContent: '>' }),
            R.el('span', { className: 'text-gray-300', textContent: n })
          ]))
        ])
      : null;

    // Priority stats as badges
    const statsRow = R.el('div', { className: 'flex flex-wrap gap-1 mb-2' },
      (t.priority_stats || []).map((s, i) => {
        return R.el('span', {
          className: `text-xs px-1.5 py-0.5 rounded ${i === 0 ? 'bg-gold/20 text-gold font-semibold' : 'bg-surface-hover text-gray-300'}`,
          textContent: `${i + 1}. ${s}`
        });
      })
    );

    // Rationale
    const rationale = R.el('div', { className: 'text-xs text-gray-400 mb-2 leading-relaxed', textContent: t.rationale });

    // Analysis table
    const analysisRows = (t.analysis || []).map(a => {
      const verdictColors = {
        'ESSENCIAL': 'text-tier-ss font-bold',
        'ALTO': 'text-gold',
        'MEDIO': 'text-gray-300',
        'BAIXO': 'text-gray-500',
        'IGNORAR': 'text-red-400'
      };
      return R.el('div', { className: 'flex gap-2 items-start py-1 border-b border-surface-hover/50 last:border-0' }, [
        R.el('div', { className: 'w-24 shrink-0 text-xs text-gray-300 font-medium', textContent: a.stat }),
        R.el('div', { className: `w-16 shrink-0 text-xs ${verdictColors[a.verdict] || 'text-gray-400'}`, textContent: a.verdict }),
        R.el('div', { className: 'text-xs text-gray-400 flex-1', textContent: a.reason })
      ]);
    });

    const analysisWrapper = R.el('div', { className: 'bg-surface rounded-lg p-2' }, analysisRows);

    return R.el('div', { className: 'mb-3 pb-3 border-b border-surface-hover' }, [header, laneRationale, keyNodesEl, statsRow, rationale, analysisWrapper].filter(Boolean));
  },

  // ===== GEAR SECTION =====
  _gearSection(g) {
    if (!g) return R.el('div');

    const header = R.el('div', { className: 'text-xs font-semibold text-white mb-1' }, ['Gear']);

    const setsEl = R.el('div', { className: 'space-y-1 mb-1' },
      (g.sets || []).map(s =>
        R.el('div', { className: 'flex gap-2 items-start text-xs' }, [
          R.el('span', { className: 'text-gold font-medium shrink-0', textContent: s.name }),
          R.el('span', { className: 'text-gray-400', textContent: s.reason })
        ])
      )
    );

    const statPri = R.el('div', { className: 'text-xs text-gray-300' }, [
      R.el('span', { className: 'text-gray-500', textContent: 'Stats: ' }),
      R.el('span', { textContent: g.stat_priority })
    ]);

    return R.el('div', { className: 'mb-3 pb-3 border-b border-surface-hover' }, [header, setsEl, statPri]);
  },

  // ===== ARTIFACT SECTION =====
  _artifactSection(a) {
    if (!a) return R.el('div');

    const header = R.el('div', { className: 'text-xs font-semibold text-white mb-1' }, ['Artefato']);

    const lines = [];
    if (a.current) {
      lines.push(R.el('div', { className: 'text-xs' }, [
        R.el('span', { className: 'text-gray-500', textContent: 'Atual: ' }),
        R.el('span', { className: 'text-gold', textContent: a.current })
      ]));
    }
    if (a.bis) {
      lines.push(R.el('div', { className: 'text-xs' }, [
        R.el('span', { className: 'text-gray-500', textContent: 'BiS: ' }),
        R.el('span', { className: 'text-tier-ss font-medium', textContent: a.bis })
      ]));
    }
    if (a.alternatives && a.alternatives.length) {
      lines.push(R.el('div', { className: 'text-xs' }, [
        R.el('span', { className: 'text-gray-500', textContent: 'Alt: ' }),
        R.el('span', { className: 'text-gray-300', textContent: a.alternatives.join(', ') })
      ]));
    }
    if (a.reason) {
      lines.push(R.el('div', { className: 'text-xs text-gray-400 mt-0.5', textContent: a.reason }));
    }

    return R.el('div', { className: 'mb-3 pb-3 border-b border-surface-hover' }, [header, ...lines]);
  }
};
