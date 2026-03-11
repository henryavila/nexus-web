// gear.js — Gear loadouts component
const Gear = {
  _view: 'quick-ref',

  // Equipment image IDs from dragonheir.info (S1 Legendary)
  _imgIds: {
    "Three-Ears Emblem Hood": "00090", "Three-Ears Emblem Gloves": "00093",
    "Three-Ears Emblem Light Armor": "00092", "Three-Ears Emblem Dagger": "00091",
    "Holy Hunter Helmet": "00150", "Holy Hunter Gloves": "00153",
    "Holy Hunter Light Armor": "00152", "Holy Hunter Longbow": "00151",
    "Puppeteer Headgear": "00300", "Puppeteer Gloves": "00303",
    "Puppeteer Light Armor": "00302", "Puppeteer Hammer": "00301",
    "Intertidal Crown": "00350", "Intertidal Gloves": "00353",
    "Intertidal Light Armor": "00352", "Intertidal Staff": "00351",
    "Undead Helmet": "00310", "Undead Gloves": "00313",
    "Undead Light Armor": "00312", "Undead Rapier": "00311",
    "Tundra Guardian Helmet": "00290", "Tundra Guardian Gloves": "00293",
    "Tundra Guardian Heavy Armor": "00292", "Tundra Guardian Battleaxe": "00291",
    "Radiance of the Blue Oak Hood": "00200", "Radiance of the Blue Oak Gloves": "00203",
    "Radiance of the Blue Oak Robe": "00202", "Radiance of the Blue Oak Staff": "00201",
    "Ancestral Protection Hood": "00160", "Ancestral Protection Gloves": "00163",
    "Ancestral Protection Robe": "00162", "Ancestral Protection Staff": "00161",
    "Platinum Knight Helmet": "00180", "Platinum Knight Gloves": "00183",
    "Platinum Knight Chain Mail": "00182", "Platinum Knight Rapier": "00181",
    "Rhapsodist Headgear": "00280", "Rhapsodist Gloves": "00283",
    "Rhapsodist Light Armor": "00282", "Rhapsodist Hammer": "00281",
    "Gambler Headgear": "00170", "Gambler Gloves": "00173",
    "Gambler Light Armor": "00172", "Gambler Flintlock": "00171",
    "Cyril Helmet": "00240", "Cyril Gloves": "00243",
    "Cyril Light Armor": "00242", "Cyril Rapier": "00241",
    "Executioner Helmet": "00190", "Executioner Gloves": "00193",
    "Executioner Heavy Armor": "00192", "Executioner Axe": "00191",
    "Imperial Shadow's Cloak": "ts_00006"
  },

  _gearImg(name, size = 36) {
    const id = this._imgIds[name];
    if (!id) return null;
    return R.el('img', {
      src: `https://i.dmzgame.com/dragonheir/img/equipment/2025_s1/icon_item_equipment_${id}.png`,
      className: 'rounded object-cover shrink-0',
      style: { width: size + 'px', height: size + 'px' },
      loading: 'lazy',
      onerror: (e) => { e.target.style.display = 'none'; }
    });
  },

  render(container) {
    const data = (typeof DATA_GEAR !== 'undefined' && DATA_GEAR) || {};
    const plans = data.gear_plans || [];
    const inventory = data.inventory || [];
    const sets = data.sets || [];

    const lv20 = inventory.filter(p => p.level === 20).length;
    const lv0 = inventory.filter(p => p.level === 0).length;
    const noConflict = plans.filter(p => !p.sharing || !p.sharing.length).length;

    // --- Header ---
    container.appendChild(R.el('div', { className: 'flex items-center justify-between mb-3' }, [
      R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Gear']),
      R.el('span', { className: 'text-sm text-gray-400', textContent: `${inventory.length} pecas | ${lv20} lv20 | ${lv0} lv0` })
    ]));

    // --- Stats row ---
    const statsRow = R.el('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-2 mb-4' }, [
      R.statCard('Loadouts', plans.length, `${noConflict} sem conflito`),
      R.statCard('Sets', sets.length),
      R.statCard('Pecas lv20', lv20, `${lv0} pendentes`),
      R.statCard('Gold', ((data.upgrade_costs?.gold_available || 0) / 1e6).toFixed(1) + 'M')
    ]);
    container.appendChild(statsRow);

    // --- View tabs ---
    const tabs = [
      { id: 'quick-ref', label: 'Referência Rápida' },
      { id: 'montagem', label: 'Guia de Montagem' },
      { id: 'inventory', label: 'Inventário' },
      { id: 'sets', label: 'Sets' }
    ];
    const tabBar = R.el('div', { className: 'flex gap-1.5 mb-4' });
    const contentEl = R.el('div');

    for (const t of tabs) {
      const btn = R.el('button', {
        className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          t.id === this._view ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
        }`,
        textContent: t.label,
        onClick: () => {
          this._view = t.id;
          tabBar.querySelectorAll('button').forEach((b, i) => {
            b.className = `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              tabs[i].id === t.id ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
            }`;
          });
          this._renderView(contentEl, data);
        }
      });
      tabBar.appendChild(btn);
    }
    container.appendChild(tabBar);
    this._renderView(contentEl, data);
    container.appendChild(contentEl);
  },

  _renderView(el, data) {
    el.innerHTML = '';
    switch (this._view) {
      case 'quick-ref': this._renderQuickRef(el, data); break;
      case 'montagem': this._renderMontagem(el, data); break;
      case 'inventory': this._renderInventory(el, data); break;
      case 'sets': this._renderSets(el, data); break;
    }
  },

  // ===== QUICK REFERENCE VIEW (compact table, daily use) =====
  _renderQuickRef(el, data) {
    const plans = data.gear_plans || [];
    if (!plans.length) {
      el.appendChild(R.el('div', { className: 'text-center text-gray-500 py-8', textContent: 'Nenhum loadout definido.' }));
      return;
    }

    const { profileColors, profileStats, profileOrder, groups } = this._groupByProfile(plans);
    const container = R.el('div', { className: 'space-y-4' });

    for (const profileId of profileOrder) {
      const groupPlans = groups[profileId];
      if (!groupPlans) continue;
      const color = profileColors[profileId] || 'gold';
      const stats = profileStats[profileId] || [];

      const section = R.el('div', {
        className: `bg-surface-card rounded-lg border border-surface-hover border-l-2 border-l-${color} overflow-hidden`
      });

      // Profile header
      section.appendChild(R.el('div', { className: `flex items-center gap-2 px-3 py-2 bg-${color}/5 flex-wrap` }, [
        R.el('span', { className: `text-xs font-bold text-${color}`, textContent: profileId.toUpperCase().replace(/-/g, ' ') }),
        ...stats.map(s => R.el('span', {
          className: `text-[9px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20`,
          textContent: s
        })),
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: `${groupPlans.length} loadout${groupPlans.length > 1 ? 's' : ''}` })
      ]));

      // Table
      const table = R.el('table', { className: 'w-full text-xs' });

      // Header row (desktop only)
      table.appendChild(R.el('thead', { className: 'hidden md:table-header-group' }, [
        R.el('tr', { className: 'text-[10px] text-gray-500 uppercase tracking-wide' }, [
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Herói' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Loadout' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Artefato' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Sets' }),
          R.el('th', { className: 'text-left px-3 py-1.5 font-medium', textContent: 'Totais' }),
          R.el('th', { className: 'text-center px-2 py-1.5 font-medium w-8', textContent: '' })
        ])
      ]));

      const tbody = R.el('tbody');
      for (const plan of groupPlans) {
        tbody.appendChild(this._quickRefRow(plan, color));
      }
      table.appendChild(tbody);
      section.appendChild(table);
      container.appendChild(section);
    }

    el.appendChild(container);
  },

  _quickRefRow(plan, color) {
    const heroId = R.heroIdByName(plan.hero);
    const noConflict = !plan.sharing || !plan.sharing.length;
    const setNames = (plan.pieces || []).map(p => p.set.replace(/'s? .*/, '')).join(' · ');
    const artifact = heroId ? D.artifactForHero(heroId) : null;
    const artifactName = artifact ? artifact.name.replace(/'s? .*| of .*/, '') : '';

    // Desktop row
    const row = R.el('tr', {
      className: 'border-t border-surface-hover/50 hover:bg-surface-hover/30 cursor-pointer hidden md:table-row',
      onClick: () => { if (heroId) Heroes._openDetail(heroId); }
    }, [
      // Hero
      R.el('td', { className: 'px-3 py-2' }, [
        R.el('div', { className: 'flex items-center gap-2' }, [
          heroId ? R.heroImg(heroId, 24, { height: 30, className: 'rounded' }) : null,
          R.el('span', { className: 'font-medium text-gray-200', textContent: plan.hero })
        ].filter(Boolean))
      ]),
      // Loadout badge (clickable → montagem)
      R.el('td', { className: 'px-3 py-2' }, [
        R.el('span', {
          className: `text-[10px] px-2 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold cursor-pointer hover:bg-${color}/25`,
          textContent: plan.name,
          onClick: (e) => {
            e.stopPropagation();
            this._navigateToMontagem(plan.name);
          }
        })
      ]),
      // Artifact
      R.el('td', { className: 'px-3 py-2 text-[10px] text-mythic/80 max-w-[140px] truncate',
        textContent: artifact ? artifact.name : '—',
        title: artifact ? artifact.name : ''
      }),
      // Sets
      R.el('td', { className: 'px-3 py-2 text-[10px] text-gray-500 max-w-[200px] truncate', textContent: setNames }),
      // Totals
      R.el('td', { className: 'px-3 py-2 text-[11px] font-semibold text-white', textContent: plan.totals || '' }),
      // Status
      R.el('td', { className: 'px-2 py-2 text-center text-[10px]', textContent: noConflict ? '✅' : '🔄',
        title: noConflict ? 'Sem conflito' : (plan.sharing || []).join(', ')
      })
    ]);

    // Mobile card (shown instead of row on small screens)
    const mobileCard = R.el('tr', {
      className: 'md:hidden border-t border-surface-hover/50',
      onClick: () => { if (heroId) Heroes._openDetail(heroId); }
    }, [
      R.el('td', { className: 'px-3 py-2', colSpan: '6' }, [
        R.el('div', { className: 'flex items-center gap-2 cursor-pointer' }, [
          heroId ? R.heroImg(heroId, 28, { height: 34, className: 'rounded' }) : null,
          R.el('div', { className: 'flex-1 min-w-0' }, [
            R.el('div', { className: 'flex items-center gap-1.5 flex-wrap' }, [
              R.el('span', { className: 'font-medium text-gray-200 text-xs', textContent: plan.hero }),
              R.el('span', {
                className: `text-[9px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold`,
                textContent: plan.name
              }),
              R.el('span', { className: 'text-[9px]', textContent: noConflict ? '✅' : '🔄' })
            ]),
            R.el('div', { className: 'flex items-center gap-2 mt-0.5' }, [
              artifact ? R.el('span', { className: 'text-[9px] text-mythic/80', textContent: '💎 ' + artifactName }) : null,
              plan.totals ? R.el('span', { className: 'text-[10px] text-gray-500', textContent: plan.totals }) : null
            ].filter(Boolean))
          ])
        ].filter(Boolean))
      ])
    ]);

    // Return both as a fragment
    const frag = document.createDocumentFragment();
    frag.appendChild(row);
    frag.appendChild(mobileCard);
    return frag;
  },

  _groupByProfile(plans) {
    const profileColors = {
      'dps-crit': 'fire', 'dps-atk': 'fire',
      'atk-acc': 'lightning', 'atk-enlight': 'poison',
      'acc': 'lightning', 'enlight': 'radiance',
      'hp-acc': 'ice', 'hp-atk-acc': 'ice',
      'hp-enlight': 'ice', 'hp-def-enlight': 'ice',
      'def': 'ice'
    };
    const profileStats = {
      'dps-crit': ['ATK%', 'CritR', 'CritD'], 'dps-atk': ['ATK%'],
      'atk-acc': ['ATK%', 'ACC'], 'atk-enlight': ['ATK%', 'Enlight'],
      'acc': ['ACC'], 'enlight': ['Enlight'],
      'hp-acc': ['HP%', 'ACC'], 'hp-atk-acc': ['HP%', 'ATK%', 'ACC'],
      'hp-enlight': ['HP%', 'Enlight'], 'hp-def-enlight': ['HP%', 'DEF%', 'Enlight'],
      'def': ['DEF%']
    };
    const profileOrder = ['dps-crit', 'dps-atk', 'atk-acc', 'atk-enlight', 'acc', 'enlight', 'hp-acc', 'hp-atk-acc', 'hp-enlight', 'hp-def-enlight', 'def'];
    const groups = {};
    for (const p of plans) {
      if (!groups[p.profile]) groups[p.profile] = [];
      groups[p.profile].push(p);
    }
    return { profileColors, profileStats, profileOrder, groups };
  },

  _navigateToMontagem(loadoutName) {
    this._view = 'montagem';
    App.navigate('gear');
    setTimeout(() => {
      // Re-render with montagem view
      const content = document.getElementById('content');
      if (content) { content.innerHTML = ''; this.render(content); }
      setTimeout(() => {
        const target = document.getElementById('montagem-' + loadoutName.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 50);
  },

  // ===== MONTAGEM VIEW (detailed cards with equipment photos) =====
  _renderMontagem(el, data) {
    const plans = data.gear_plans || [];
    if (!plans.length) {
      el.appendChild(R.el('div', { className: 'text-center text-gray-500 py-8', textContent: 'Nenhum loadout definido.' }));
      return;
    }

    const { profileColors, profileStats, profileOrder, groups } = this._groupByProfile(plans);
    const container = R.el('div', { className: 'space-y-6' });

    for (const profileId of profileOrder) {
      const groupPlans = groups[profileId];
      if (!groupPlans) continue;
      const color = profileColors[profileId] || 'gold';
      const stats = profileStats[profileId] || [];

      // Profile header
      container.appendChild(R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
        R.el('span', { className: `text-sm font-bold text-${color}`, textContent: profileId.toUpperCase().replace(/-/g, ' ') }),
        ...stats.map(s => R.el('span', {
          className: `text-[10px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20`,
          textContent: s
        })),
        R.el('span', { className: 'text-xs text-gray-500', textContent: `${groupPlans.length} loadout${groupPlans.length > 1 ? 's' : ''}` })
      ]));

      // Cards
      for (const plan of groupPlans) {
        container.appendChild(this._montagemCard(plan, color));
      }
    }

    el.appendChild(container);
  },

  _montagemCard(plan, color) {
    const heroId = R.heroIdByName(plan.hero);
    const noConflict = !plan.sharing || !plan.sharing.length;
    const slotLabels = { weapon: 'Weapon', helmet: 'Helmet', armor: 'Armor', gloves: 'Gloves' };

    const card = R.el('div', {
      className: `bg-surface-card rounded-lg p-4 border border-surface-hover border-l-2 border-l-${color}`,
      id: `montagem-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    });

    // Header: hero portrait + name + loadout badge + status
    card.appendChild(R.el('div', { className: 'flex items-center gap-3 mb-3' }, [
      heroId ? R.heroImg(heroId, 40, { height: 48, className: 'rounded-lg cursor-pointer',
        onClick: () => Heroes._openDetail(heroId) }) : null,
      R.el('div', { className: 'flex-1' }, [
        R.el('div', { className: 'flex items-center gap-2 flex-wrap' }, [
          R.el('span', { className: 'text-sm font-bold text-gold', textContent: plan.hero }),
          R.el('span', {
            className: `text-[10px] px-2 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold`,
            textContent: plan.name
          }),
          R.el('span', {
            className: `text-xs ${noConflict ? 'text-done' : 'text-yellow-400'}`,
            textContent: noConflict ? '✅' : '🔄',
            title: noConflict ? 'Sem conflito' : (plan.sharing || []).join(', ')
          })
        ]),
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: `freq ${plan.freq}` })
      ])
    ].filter(Boolean)));

    // 4 pieces in horizontal grid (order: helmet, weapon, armor, gloves)
    const slotOrder = ['helmet', 'weapon', 'armor', 'gloves'];
    const sortedPieces = [...(plan.pieces || [])].sort((a, b) => slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot));
    const piecesGrid = R.el('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-2 mb-3' });
    for (const pc of sortedPieces) {
      const lvBad = pc.lv === 0;
      const pieceEl = R.el('div', {
        className: `bg-surface rounded-lg p-2 border ${pc.mythic ? 'border-mythic/40' : lvBad ? 'border-red-500/30' : 'border-surface-hover'} text-center`
      });

      // Equipment image or fallback emoji
      const img = this._gearImg(this._findSetPieceName(pc), 52);
      if (img) {
        img.className = 'mx-auto mb-1.5 rounded-lg';
        img.style.width = '52px';
        img.style.height = '52px';
        pieceEl.appendChild(img);
      } else {
        const slotEmojis = { weapon: '⚔️', helmet: '🪖', armor: '🛡️', gloves: '🧤' };
        pieceEl.appendChild(R.el('div', {
          className: 'w-[52px] h-[52px] mx-auto mb-1.5 rounded-lg bg-surface-hover flex items-center justify-center text-2xl',
          textContent: slotEmojis[pc.slot] || '❓'
        }));
      }

      // Slot label
      pieceEl.appendChild(R.el('div', {
        className: 'text-[9px] text-gray-500 uppercase tracking-wider mb-0.5',
        textContent: slotLabels[pc.slot] || pc.slot
      }));

      // Set name
      pieceEl.appendChild(R.el('div', {
        className: `text-[10px] font-semibold mb-1 ${pc.mythic ? 'text-mythic' : 'text-gray-200'}`,
        textContent: (pc.mythic ? '⭐ ' : '') + pc.set
      }));

      // Main stat
      pieceEl.appendChild(R.el('div', {
        className: 'text-xs font-bold text-white mb-0.5',
        textContent: pc.main
      }));

      // Subs
      if (pc.subs && pc.subs.length) {
        pieceEl.appendChild(R.el('div', { className: 'text-[9px] text-gray-500 leading-relaxed' },
          pc.subs.map(s => R.el('div', { textContent: s }))
        ));
      }

      // Level warning
      if (lvBad) {
        pieceEl.appendChild(R.el('div', { className: 'text-[9px] text-red-400 mt-0.5 font-bold', textContent: '⚠ lv0' }));
      }

      piecesGrid.appendChild(pieceEl);
    }
    card.appendChild(piecesGrid);

    // Footer: mythic effect + set bonus + totals
    if (plan.set_bonus) {
      card.appendChild(R.el('div', { className: 'text-[10px] text-gold/80 mb-0.5', textContent: '🔗 ' + plan.set_bonus }));
    }
    if (plan.mythic_effect) {
      card.appendChild(R.el('div', { className: 'text-[10px] text-mythic mb-0.5', textContent: '⭐ ' + plan.mythic_effect }));
    }
    if (plan.totals) {
      card.appendChild(R.el('div', { className: 'text-xs font-bold text-white', textContent: plan.totals }));
    }

    // Sharing info
    if (!noConflict && plan.sharing) {
      for (const s of plan.sharing) {
        card.appendChild(R.el('div', { className: 'text-[9px] text-yellow-400/70 mt-0.5', textContent: '🔄 ' + s }));
      }
    }

    return card;
  },

  // Map gear_plans set name → _imgIds prefix (explicit mapping)
  _setToImgPrefix: {
    'Imperial Executioner': 'Executioner',
    "Cyril's Whisper": 'Cyril',
    'Tundra Tenacity': 'Tundra Guardian',
    'Platinum Knight': 'Platinum Knight',
    'Ancestral Protection': 'Ancestral Protection',
    'Heart of the Gambler': 'Gambler',
    "Rhapsodist's Calling": 'Rhapsodist',
    'Radiance of the Blue Oak': 'Radiance of the Blue Oak',
    'Holy Hunter': 'Holy Hunter',
    "Puppeteer's Inspiration": 'Puppeteer',
    'Brotherhood Spirit': 'Three-Ears Emblem',
    'Revenge of the Fallen': 'Undead',
    'Power of Tides': 'Intertidal'
  },

  _findSetPieceName(pc) {
    const prefix = this._setToImgPrefix[pc.set];
    if (!prefix) return pc.set; // mythic or unknown — no CDN image
    for (const name of Object.keys(this._imgIds)) {
      if (!name.startsWith(prefix)) continue;
      const n = name.toLowerCase();
      if (pc.slot === 'gloves' && n.includes('gloves')) return name;
      if (pc.slot === 'helmet' && (n.includes('helmet') || n.includes('hood') || n.includes('headgear') || n.includes('crown'))) return name;
      if (pc.slot === 'armor' && (n.includes('armor') || n.includes('robe') || n.includes('chain') || n.includes('cloak'))) return name;
      if (pc.slot === 'weapon' && !n.includes('helmet') && !n.includes('hood') && !n.includes('headgear') && !n.includes('crown') && !n.includes('armor') && !n.includes('robe') && !n.includes('chain') && !n.includes('cloak') && !n.includes('gloves')) return name;
    }
    return pc.set;
  },

  // Find gear plan/loadout for a hero by name
  getPlanForHero(heroName) {
    const data = (typeof DATA_GEAR !== 'undefined' && DATA_GEAR) || {};
    const plans = data.gear_plans || [];
    return plans.find(p => p.hero.toLowerCase() === heroName.toLowerCase()) || null;
  },

  // ===== PIECE CARD (used by inventory) =====
  _pieceCard(piece, sets) {
    const setInfo = sets.find(s => s.id === piece.set);
    const lvColor = piece.level === 20 ? 'text-done' : 'text-gray-500';

    return R.el('div', { className: 'bg-surface rounded-lg p-2 border border-surface-hover/50' }, [
      // Image + level
      R.el('div', { className: 'flex items-center justify-between mb-1' }, [
        R.el('div', { className: 'flex items-center gap-1.5' }, [
          this._gearImg(piece.name, 32) || this._slotIcon(piece.slot),
          R.el('span', { className: `text-[10px] font-bold ${lvColor}`, textContent: `Lv${piece.level}` })
        ])
      ]),
      // Name
      R.el('div', { className: 'text-[10px] text-gray-300 font-medium truncate mb-0.5', textContent: piece.name }),
      // Set
      R.el('div', { className: 'text-[10px] text-gold/70 truncate mb-1', textContent: setInfo?.name || piece.set }),
      // Primary stat
      R.el('div', { className: 'text-xs font-bold text-white mb-0.5', textContent: `${piece.primary.stat} +${piece.primary.value}` }),
      // Secondary stats
      R.el('div', { className: 'space-y-0' },
        (piece.secondary || []).map(s => R.el('div', { className: `text-[10px] ${this._statColor(s.stat)}`, textContent: `${s.stat} +${s.value}` }))
      )
    ]);
  },

  _slotIcon(slot) {
    const icons = { weapon: '\u2694\uFE0F', armor: '\uD83D\uDEE1\uFE0F', helmet: '\u26D1\uFE0F', gloves: '\uD83E\uDDE4' };
    return R.el('span', { className: 'text-sm', textContent: icons[slot] || '\u2753', title: slot });
  },

  _statColor(stat) {
    const colors = {
      'ATK': 'text-fire', 'ATK%': 'text-fire',
      'Crit Rate': 'text-tier-ss', 'Crit Damage': 'text-tier-ss',
      'HP': 'text-done', 'HP%': 'text-done',
      'DEF': 'text-ice', 'DEF%': 'text-ice',
      'Accuracy': 'text-lightning', 'Resistance': 'text-purple-400',
      'Enlightenment': 'text-radiance', 'Skill Haste': 'text-blue-400',
      'ATK Speed': 'text-yellow-300'
    };
    return colors[stat] || 'text-gray-400';
  },

  // ===== INVENTORY VIEW =====
  _renderInventory(el, data) {
    const inventory = data.inventory || [];
    const sets = data.sets || [];

    // Slot filter
    const slotFilter = { current: 'all' };
    const slots = ['all', 'weapon', 'armor', 'helmet', 'gloves'];
    const slotLabels = { all: 'Todos', weapon: 'Armas', armor: 'Armaduras', helmet: 'Elmos', gloves: 'Luvas' };
    const chipBar = R.el('div', { className: 'flex gap-1.5 mb-3' });
    const listEl = R.el('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2' });

    const renderList = () => {
      listEl.innerHTML = '';
      const filtered = slotFilter.current === 'all' ? inventory : inventory.filter(p => p.slot === slotFilter.current);
      // Sort: lv20 first, then by set
      const sorted = [...filtered].sort((a, b) => (b.level - a.level) || a.set.localeCompare(b.set));
      for (const p of sorted) {
        const assigned = this._findLoadout(p.id, data);
        listEl.appendChild(this._inventoryPieceCard(p, sets, assigned));
      }
    };

    for (const s of slots) {
      chipBar.appendChild(R.el('button', {
        className: `px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
          s === 'all' ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
        }`,
        textContent: slotLabels[s] + (s !== 'all' ? ` (${inventory.filter(p => p.slot === s).length})` : ''),
        onClick: (e) => {
          slotFilter.current = s;
          chipBar.querySelectorAll('button').forEach((b, i) => {
            b.className = `px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              slots[i] === s ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
            }`;
          });
          renderList();
        }
      }));
    }

    el.appendChild(chipBar);
    renderList();
    el.appendChild(listEl);
  },

  _inventoryPieceCard(piece, sets, assigned) {
    const setInfo = sets.find(s => s.id === piece.set);
    const lvColor = piece.level === 20 ? 'text-done' : 'text-pending';
    const borderClass = assigned ? 'border-gold/30' : piece.level === 0 ? 'border-surface-hover opacity-60' : 'border-surface-hover';

    return R.el('div', { className: `bg-surface-card rounded-lg border ${borderClass} p-3` }, [
      // Header: image + id + level
      R.el('div', { className: 'flex items-center justify-between mb-1' }, [
        R.el('div', { className: 'flex items-center gap-2' }, [
          this._gearImg(piece.name, 28) || this._slotIcon(piece.slot),
          R.el('span', { className: 'text-xs font-mono text-gray-500', textContent: piece.id }),
          R.el('span', { className: `text-xs font-bold ${lvColor}`, textContent: `Lv${piece.level}` })
        ]),
        assigned
          ? R.el('span', { className: 'text-[10px] px-1.5 py-0.5 rounded bg-gold/20 text-gold', textContent: assigned })
          : null
      ]),
      // Name + set
      R.el('div', { className: 'text-xs font-medium text-white truncate', textContent: piece.name }),
      R.el('div', { className: 'text-[10px] text-gold/70 truncate mb-1', textContent: setInfo?.name || piece.set }),
      // Primary
      R.el('div', { className: 'text-xs font-bold text-white', textContent: `${piece.primary.stat} +${piece.primary.value}` }),
      // Secondaries
      R.el('div', { className: 'flex flex-wrap gap-x-3 gap-y-0 mt-0.5' },
        (piece.secondary || []).map(s => R.el('span', { className: `text-[10px] ${this._statColor(s.stat)}`, textContent: `${s.stat} +${s.value}` }))
      )
    ]);
  },

  _findLoadout(pieceId, data) {
    // Check gear_plans (pieces are now objects with img field)
    for (const plan of (data.gear_plans || [])) {
      if ((plan.pieces || []).some(p => p.img && p.img === pieceId)) {
        return plan.name;
      }
    }
    return null;
  },

  // ===== SETS VIEW =====
  _renderSets(el, data) {
    const sets = data.sets || [];
    const inventory = data.inventory || [];

    const grid = R.el('div', { className: 'space-y-3' });
    for (const s of sets) {
      const pieces = inventory.filter(p => p.set === s.id);
      const lv20Count = pieces.filter(p => p.level === 20).length;

      const typeColors = {
        'offensive-crit': 'border-l-fire', 'offensive-skill': 'border-l-lightning',
        'offensive-debuff': 'border-l-fire', 'offensive-ult': 'border-l-fire',
        'defensive-tank': 'border-l-ice', 'defensive-counter': 'border-l-ice',
        'defensive-ult': 'border-l-ice', 'defensive-sustain': 'border-l-ice',
        'defensive-resist': 'border-l-ice',
        'support-amp': 'border-l-radiance', 'support-cc': 'border-l-radiance',
        'support-buff': 'border-l-radiance'
      };
      const border = typeColors[s.type] || 'border-l-gold';

      grid.appendChild(R.el('div', { className: `bg-surface-card rounded-lg border border-surface-hover border-l-2 ${border} p-3` }, [
        R.el('div', { className: 'flex items-center justify-between mb-1' }, [
          R.el('span', { className: 'text-sm font-bold text-white', textContent: s.name }),
          R.el('span', { className: 'text-xs text-gray-400', textContent: `${lv20Count}/${pieces.length} pecas (${lv20Count} lv20)` })
        ]),
        R.el('div', { className: 'text-xs text-gray-300 mb-0.5' }, [
          R.el('span', { className: 'text-gold', textContent: '2pc: ' }),
          R.el('span', { textContent: s.bonus_2 })
        ]),
        R.el('div', { className: 'text-xs text-gray-300' }, [
          R.el('span', { className: 'text-gold', textContent: '3pc: ' }),
          R.el('span', { textContent: s.bonus_3 })
        ]),
        // Piece list
        R.el('div', { className: 'flex flex-wrap gap-1 mt-2' },
          pieces.map(p => R.el('span', {
            className: `text-[10px] px-1.5 py-0.5 rounded ${p.level === 20 ? 'bg-done/20 text-done' : 'bg-surface-hover text-gray-500'}`,
            textContent: `${p.id} ${p.slot}`,
            title: `${p.name} \u2014 ${p.primary.stat} +${p.primary.value}`
          }))
        )
      ]));
    }
    el.appendChild(grid);
  }
};
