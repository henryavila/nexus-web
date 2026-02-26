// artifacts.js — Artifacts management component
const Artifacts = {
  _activeTab: 'bis',

  render(container) {
    const d = (typeof DATA_ARTIFACTS !== 'undefined' && DATA_ARTIFACTS) || {};
    this._data = d;
    this._activeTab = 'bis';

    const owned = d.owned || [];
    const mythicCount = owned.filter(a => a.rarity === 'Mythic').length;
    const legendaryCount = owned.filter(a => a.rarity === 'Legendary').length;

    // --- Header ---
    const header = R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6 flex-wrap gap-2' }, [
      R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Artefatos']),
      R.el('div', { className: 'flex items-center gap-2' }, [
        R.badge(`${mythicCount} Mythic`, 'mythic'),
        R.badge(`${legendaryCount} Leg.`, 'legendary')
      ])
    ]);

    // --- Tab buttons ---
    const tabs = R.el('div', { className: 'flex gap-2 mb-4 md:mb-6' });
    const tabDefs = [
      { id: 'bis', label: 'BiS Atual' },
      { id: 'upgrade', label: 'Upgrade' },
      { id: 'inventario', label: 'Inventario' }
    ];

    // Content wrapper
    const contentWrapper = R.el('div', {});

    tabDefs.forEach(t => {
      const btn = R.el('button', {
        className: this._tabClass(t.id),
        textContent: t.label,
        'data-tab': t.id,
        onClick: () => {
          this._activeTab = t.id;
          // Update tab button styles
          tabs.querySelectorAll('button').forEach(b => {
            b.className = this._tabClass(b.dataset.tab);
          });
          // Re-render content
          contentWrapper.innerHTML = '';
          contentWrapper.appendChild(this._renderTab(t.id));
        }
      });
      tabs.appendChild(btn);
    });

    // Initial tab content
    contentWrapper.appendChild(this._renderTab(this._activeTab));

    container.appendChild(header);
    container.appendChild(tabs);
    container.appendChild(contentWrapper);
  },

  // --- Tab class helper ---
  _tabClass(tabId) {
    const active = tabId === this._activeTab;
    return active
      ? 'px-4 py-2 rounded-lg text-sm font-medium bg-gold text-surface transition-colors duration-150'
      : 'px-4 py-2 rounded-lg text-sm font-medium bg-surface-hover text-gray-400 hover:text-white transition-colors duration-150';
  },

  // --- Tab router ---
  _renderTab(tabId) {
    switch (tabId) {
      case 'bis': return this._renderBisTab();
      case 'upgrade': return this._renderUpgradeTab();
      case 'inventario': return this._renderInventarioTab();
      default: return R.el('div');
    }
  },

  // ==========================================
  // TAB 1 — BiS Atual
  // ==========================================
  _renderBisTab() {
    const owned = this._data.owned || [];
    const mythics = owned.filter(a => a.rarity === 'Mythic');
    const legCore = owned.filter(a => a.rarity === 'Legendary' && a.upgrade_priority !== null);
    const legSecondary = owned.filter(a => a.rarity === 'Legendary' && a.upgrade_priority === null);

    const wrapper = R.el('div', { className: 'space-y-6' });

    // Mythic section
    if (mythics.length) {
      wrapper.appendChild(this._renderArtifactGroup('Mythic', mythics, 'mythic'));
    }

    // Legendary DPS/Tank Core
    if (legCore.length) {
      wrapper.appendChild(this._renderArtifactGroup('Legendary DPS/Tank Core', legCore, 'legendary'));
    }

    // Legendary Secundarios
    if (legSecondary.length) {
      wrapper.appendChild(this._renderArtifactGroup('Legendary Secundarios', legSecondary, 'legendary'));
    }

    return wrapper;
  },

  _renderArtifactGroup(title, artifacts, colorClass) {
    const rows = artifacts.map(a => this._renderArtifactRow(a));

    return R.el('div', {}, [
      R.el('h3', { className: `text-sm font-semibold text-${colorClass} uppercase tracking-wide mb-3`, textContent: title }),
      R.el('div', { className: 'space-y-2' }, rows)
    ]);
  },

  _renderArtifactRow(a) {
    const row = R.card('cursor-pointer hover:border-gold/50 transition-colors duration-150', [
      R.el('div', { className: 'flex items-center justify-between' }, [
        R.el('div', { className: 'flex items-center gap-3 min-w-0' }, [
          R.el('div', { className: `w-1 h-10 rounded-full bg-${R.rarityColor(a.rarity)} shrink-0` }),
          R.el('div', { className: 'min-w-0' }, [
            R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
              R.el('span', { className: 'text-white font-medium', textContent: a.name }),
              R.badge(a.rarity, R.rarityColor(a.rarity))
            ]),
            R.el('div', { className: 'text-xs text-gray-500 mt-0.5', textContent: a.stats })
          ])
        ]),
        R.el('div', { className: 'flex items-center gap-4 shrink-0' }, [
          R.el('div', { className: 'flex items-center gap-2' }, [
            a.equippedOn ? R.heroImg(a.equippedOn, 24) : null,
            R.el('div', { className: 'text-right' }, [
              a.equippedOn ? R.heroLink(D.hero(a.equippedOn)?.name || '?', 'text-sm') : R.el('div', { className: 'text-sm text-gray-500 italic', textContent: 'Livre' }),
              R.el('div', { className: 'text-xs text-gray-500', textContent: `${a.teams} time${a.teams !== 1 ? 's' : ''}` })
            ])
          ].filter(Boolean))
        ])
      ])
    ]);

    row.addEventListener('click', () => this._openArtifactDetail(a));
    return row;
  },

  _openArtifactDetail(a) {
    SlidePanel.open(a.name, (content) => {
      const items = [
        // Rarity + Stats
        R.el('div', { className: 'flex items-center gap-2 mb-4' }, [
          R.badge(a.rarity, R.rarityColor(a.rarity)),
          R.el('span', { className: 'text-sm text-gray-400', textContent: a.stats })
        ]),

        // Equipped on
        R.el('div', { className: 'mb-4' }, [
          R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-1', textContent: 'Equipado em' }),
          a.equippedOn ? R.heroLink(D.hero(a.equippedOn)?.name || '?', 'font-medium') : R.el('div', { className: 'text-gray-500 italic', textContent: 'Nenhum' }),
          R.el('div', { className: 'text-xs text-gray-500', textContent: `Usado em ${a.teams} time${a.teams !== 1 ? 's' : ''}` })
        ]),

        // Skill
        R.el('div', { className: 'mb-4' }, [
          R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-1', textContent: 'Skill' }),
          R.el('div', { className: 'text-gold font-medium text-sm', textContent: a.skill_name }),
          R.el('div', { className: 'text-sm text-gray-300 mt-1', textContent: a.skill_description })
        ]),

        // Reason
        R.el('div', { className: 'mb-4' }, [
          R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-1', textContent: 'Motivo' }),
          R.el('div', { className: 'text-sm text-gray-300', textContent: a.reason })
        ])
      ];

      // Better alternative
      if (a.better_alternative) {
        items.push(R.el('div', { className: 'p-3 bg-surface-hover rounded-lg border border-gold/20' }, [
          R.el('div', { className: 'text-xs text-gold uppercase tracking-wide mb-1', textContent: 'Alternativa Superior' }),
          R.el('div', { className: 'text-sm text-gray-300', textContent: a.better_alternative })
        ]));
      }

      // Upgrade priority
      if (a.upgrade_priority) {
        items.push(R.el('div', { className: 'mt-4 flex items-center gap-2' }, [
          R.el('span', { className: 'text-xs text-gray-500', textContent: 'Prioridade de Upgrade:' }),
          R.badge(`#${a.upgrade_priority}`, 'done')
        ]));
      }

      content.appendChild(R.el('div', { className: 'space-y-0' }, items));
    });
  },

  // ==========================================
  // TAB 2 — Upgrade
  // ==========================================
  _renderUpgradeTab() {
    const wrapper = R.el('div', { className: 'space-y-6' });

    // Crystal budget
    wrapper.appendChild(this._renderCrystalBudget());

    // Priority list
    wrapper.appendChild(this._renderUpgradeOrder());

    // Lothair section
    wrapper.appendChild(this._renderLothairNotes());

    // Poison team artifact recommendations
    wrapper.appendChild(this._renderPoisonTeamRecommendations());

    // Refine info
    wrapper.appendChild(this._renderRefineInfo());

    return wrapper;
  },

  _renderCrystalBudget() {
    const b = this._data.crystal_budget;
    if (!b) return R.el('div');

    // Segmented bar
    const segmentedBar = R.el('div', { className: 'w-full h-6 rounded-full overflow-hidden flex bg-surface-hover' }, [
      R.el('div', {
        className: 'bg-done h-full flex items-center justify-center text-xs font-medium text-white',
        style: { width: `${b.spend_now_pct}%` },
        textContent: `${b.spend_now_pct}%`
      }),
      R.el('div', {
        className: 'bg-progress h-full flex items-center justify-center text-xs font-medium text-surface',
        style: { width: `${b.reserve_pct}%` },
        textContent: `${b.reserve_pct}%`
      }),
      R.el('div', {
        className: 'bg-pending h-full flex items-center justify-center text-xs font-medium text-gray-300',
        style: { width: `${b.margin_pct}%` },
        textContent: `${b.margin_pct}%`
      })
    ]);

    // Legend items
    const legend = R.el('div', { className: 'grid grid-cols-3 gap-3 mt-3' }, [
      this._budgetLegendItem('Usar Agora', b.spend_now, b.spend_now_target, 'done'),
      this._budgetLegendItem('Reserva', b.reserve, b.reserve_target, 'progress'),
      this._budgetLegendItem('Margem', b.margin, b.margin_target, 'pending')
    ]);

    return R.card('', [
      R.el('div', { className: 'flex items-center justify-between mb-3' }, [
        R.el('h2', { className: 'text-lg font-semibold text-white', textContent: 'Orcamento de Cristais' }),
        R.el('span', { className: 'text-sm text-gold font-medium', textContent: `${b.total.toLocaleString('pt-BR')} total` })
      ]),
      segmentedBar,
      legend
    ]);
  },

  _budgetLegendItem(label, amount, target, colorClass) {
    return R.el('div', {}, [
      R.el('div', { className: 'flex items-center gap-2 mb-1' }, [
        R.el('div', { className: `w-3 h-3 rounded bg-${colorClass}` }),
        R.el('span', { className: 'text-sm text-gray-300', textContent: label })
      ]),
      R.el('div', { className: 'text-white font-medium text-sm', textContent: amount.toLocaleString('pt-BR') }),
      R.el('div', { className: 'text-xs text-gray-500 mt-0.5', textContent: target })
    ]);
  },

  _renderUpgradeOrder() {
    const items = this._data.upgrade_order || [];

    const rows = items.map(item => {
      const priorityColors = { 1: 'mythic', 2: 'mythic', 3: 'mythic', 4: 'legendary', 5: 'legendary', 6: 'legendary', 7: 'legendary' };
      const pColor = priorityColors[item.priority] || 'pending';

      return R.card('mb-2', [
        R.el('div', { className: 'flex items-center gap-4' }, [
          R.el('div', {
            className: `w-8 h-8 rounded-full bg-${pColor} flex items-center justify-center text-white font-bold text-sm shrink-0`,
            textContent: String(item.priority)
          }),
          R.el('div', { className: 'flex-1 min-w-0' }, [
            R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
              R.el('span', { className: 'text-white font-medium', textContent: item.artifact }),
              R.badge(item.rarity, R.rarityColor(item.rarity))
            ]),
            R.el('div', { className: 'text-xs text-gray-500 mt-0.5', textContent: item.reason })
          ]),
          R.el('div', { className: 'text-right shrink-0' }, [
            R.el('div', {}, [R.heroLink(D.hero(item.id)?.name || '?', 'text-sm')]),
            R.el('div', { className: 'text-xs text-gray-500', textContent: `${item.teams} time${item.teams !== 1 ? 's' : ''}` })
          ])
        ])
      ]);
    });

    return R.el('div', {}, [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: 'Ordem de Upgrade' }),
      R.el('div', { className: 'space-y-0' }, rows)
    ]);
  },

  _renderLothairNotes() {
    const n = this._data.lothair_notes;
    if (!n) return R.el('div');

    const candidates = (n.artifact_candidates || []).map(c =>
      R.el('div', { className: 'flex items-center justify-between py-2 border-b border-surface-hover last:border-0' }, [
        R.el('div', {}, [
          R.el('div', { className: 'text-white text-sm font-medium', textContent: c.artifact }),
          R.el('div', { className: 'text-xs text-gray-500', textContent: c.source })
        ]),
        R.el('div', { className: 'text-xs text-gray-400 text-right max-w-48', textContent: c.skill })
      ])
    );

    return R.card('border-gold/30', [
      R.el('div', { className: 'flex items-center gap-2 mb-3' }, [
        R.el('h2', { className: 'text-lg font-semibold' }, [R.heroLink('Lothair', 'text-lg font-semibold')]),
        R.badge(n.status, 'progress')
      ]),
      R.el('div', { className: 'text-sm text-gray-400 mb-3', textContent: `Tier: ${n.tier}` }),
      R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-2', textContent: 'Candidatos a Artefato' }),
      R.el('div', {}, candidates),
      R.el('div', { className: 'mt-3 text-xs text-gray-500' }, [
        R.el('span', { textContent: 'Reserva de cristais: ' }),
        R.el('span', { className: 'text-gold font-medium', textContent: n.crystal_reserve.toLocaleString('pt-BR') })
      ])
    ]);
  },

  _renderPoisonTeamRecommendations() {
    const rec = this._data.poison_team_artifact_recommendations;
    if (!rec) return R.el('div');

    const swaps = (rec.immediate_swaps || []).map(s =>
      R.el('div', { className: 'py-2 border-b border-surface-hover last:border-0' }, [
        R.el('div', { className: 'flex items-center justify-between gap-2 flex-wrap' }, [
          R.el('div', { className: 'text-sm text-white' }, [
            R.heroLink(D.hero(s.hero_id)?.name || '?', 'text-sm'),
            R.el('span', { textContent: ` -> ${s.artifact}` })
          ]),
          R.el('span', { className: 'text-xs text-gray-500', textContent: `Origem: ${s.from}` })
        ]),
        R.el('div', { className: 'text-xs text-gray-400 mt-1', textContent: s.benefit })
      ])
    );

    const heroCards = (rec.hero_recommendations || []).map(h =>
      R.card('border-surface-hover', [
        R.el('div', { className: 'flex items-center justify-between gap-2 mb-2 flex-wrap' }, [
          R.el('div', { className: 'text-sm font-medium text-white' }, [R.heroLink(D.hero(h.hero_id)?.name || '?', 'text-sm font-medium')]),
          R.badge(h.role, 'pending')
        ]),
        R.el('div', { className: 'text-xs text-gray-400 mb-1', textContent: `Agora: ${h.now}` }),
        R.el('div', { className: 'text-xs text-gray-400 mb-1', textContent: `Meta: ${(h.bis_order || []).join(' > ')}` }),
        R.el('div', { className: 'text-xs text-gray-500', textContent: h.reason })
      ])
    );

    return R.card('border-gold/20', [
      R.el('div', { className: 'flex items-center justify-between gap-2 mb-3 flex-wrap' }, [
        R.el('h2', { className: 'text-lg font-semibold text-white', textContent: 'Time Poison - Recomendacao de Artefatos' }),
        R.badge(rec.updated || 'Atualizado', 'done')
      ]),
      R.el('div', { className: 'text-xs text-gray-500 mb-3', textContent: rec.note || '' }),
      R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-2', textContent: 'Trocas Imediatas' }),
      R.el('div', { className: 'mb-4' }, swaps),
      R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-2', textContent: 'Plano por Heroi' }),
      R.el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-2' }, heroCards)
    ]);
  },

  _renderRefineInfo() {
    const r = this._data.refine_info;
    if (!r) return R.el('div');

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: 'Refine (Referencia)' }),
      R.el('div', { className: 'grid grid-cols-2 gap-4 text-sm' }, [
        R.el('div', {}, [
          R.el('div', { className: 'text-gray-500 text-xs', textContent: 'Level Maximo' }),
          R.el('div', { className: 'text-white font-medium', textContent: String(r.max_level) })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-gray-500 text-xs', textContent: 'Mythic Stats' }),
          R.el('div', { className: 'text-mythic font-medium', textContent: r.mythic_stat_range })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-gray-500 text-xs', textContent: 'Legendary Stats' }),
          R.el('div', { className: 'text-legendary font-medium', textContent: r.legendary_stat_range })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-gray-500 text-xs', textContent: 'Nota' }),
          R.el('div', { className: 'text-gray-300', textContent: r.note })
        ])
      ])
    ]);
  },

  // ==========================================
  // TAB 3 — Inventario
  // ==========================================
  _renderInventarioTab() {
    const wrapper = R.el('div', { className: 'space-y-6' });

    // Owned grid
    wrapper.appendChild(this._renderOwnedGrid());

    // Not owned
    wrapper.appendChild(this._renderNotOwned());

    // Heroes without artifact
    wrapper.appendChild(this._renderHeroesWithout());

    return wrapper;
  },

  _renderOwnedGrid() {
    const owned = this._data.owned || [];

    const cards = owned.map(a => {
      const borderColor = a.rarity === 'Mythic' ? 'border-mythic' : 'border-legendary';

      return R.el('div', {
        className: `bg-surface-card rounded-lg border-l-4 ${borderColor} p-3 cursor-pointer hover:bg-surface-hover transition-colors duration-150`,
        onClick: () => this._openArtifactDetail(a)
      }, [
        R.el('div', { className: 'text-sm text-white font-medium truncate', textContent: a.name }),
        R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: a.stats }),
        a.equippedOn
          ? R.el('div', { className: 'mt-1.5' }, [R.heroLink(D.hero(a.equippedOn)?.name || '?', 'text-xs')])
          : R.el('div', { className: 'text-xs text-gray-600 mt-1.5 italic', textContent: 'Livre' })
      ]);
    });

    return R.el('div', {}, [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: `Meus Artefatos (${owned.length})` }),
      R.el('div', { className: 'grid grid-cols-2 lg:grid-cols-3 gap-3' }, cards)
    ]);
  },

  _renderNotOwned() {
    const items = this._data.not_owned || [];
    if (!items.length) return R.el('div');

    const rows = items.map(a =>
      R.el('div', {
        className: 'flex items-center justify-between py-2 border-b border-surface-hover last:border-0 cursor-pointer hover:bg-surface-hover/50 px-2 -mx-2 rounded',
        onClick: () => {
          SlidePanel.open(a.name, (content) => {
            content.appendChild(R.el('div', { className: 'space-y-4' }, [
              R.el('div', { className: 'flex items-center gap-2' }, [
                R.badge(a.rarity, R.rarityColor(a.rarity)),
                R.el('span', { className: 'text-sm text-gray-400', textContent: a.stats })
              ]),
              R.el('div', {}, [
                R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-1', textContent: 'Skill' }),
                R.el('div', { className: 'text-gold font-medium text-sm', textContent: a.skill_name }),
                R.el('div', { className: 'text-sm text-gray-300 mt-1', textContent: a.skill_description })
              ]),
              R.el('div', {}, [
                R.el('div', { className: 'text-xs text-gray-500 uppercase tracking-wide mb-1', textContent: 'Prioridade' }),
                R.el('div', { className: 'text-sm text-gray-300', textContent: a.priority })
              ])
            ]));
          });
        }
      }, [
        R.el('div', { className: 'min-w-0' }, [
          R.el('div', { className: 'text-sm text-gray-400', textContent: a.name }),
          R.el('div', { className: 'text-xs text-gray-600', textContent: a.stats })
        ]),
        R.el('div', { className: 'text-xs text-gray-500 shrink-0', textContent: a.priority })
      ])
    );

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: `Nao Tenho (${items.length})` }),
      R.el('div', {}, rows)
    ]);
  },

  _renderHeroesWithout() {
    const items = this._data.heroes_without_artifact || [];
    if (!items.length) return R.el('div');

    const rows = items.map(h =>
      R.el('div', { className: 'flex items-center justify-between py-2 border-b border-surface-hover last:border-0' }, [
        R.el('div', { className: 'flex items-center gap-2' }, [
          R.elementDot(h.element),
          R.heroLink(h.hero, 'text-sm'),
          R.badge(h.tier, R.tierColor(h.tier.split(' ')[0]))
        ]),
        R.el('div', { className: 'text-xs text-gray-500 text-right max-w-56', textContent: h.reason })
      ])
    );

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: `Sem Artefato (${items.length})` }),
      R.el('div', {}, rows)
    ]);
  }
};
