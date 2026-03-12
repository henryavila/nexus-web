// gear.js — Gear loadouts component (simplified — profiles + hero stats only)
const Gear = {

  render(container) {
    const data = (typeof DATA_GEAR !== 'undefined' && DATA_GEAR) || {};
    const plans = data.gear_plans || [];
    const profiles = data.hero_profiles || [];

    // --- Header ---
    container.appendChild(R.el('div', { className: 'flex items-center justify-between mb-3' }, [
      R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Gear Loadouts']),
      R.el('span', { className: 'text-sm text-gray-400', textContent: `${plans.length} heróis · ${profiles.length} perfis` })
    ]));

    // --- Stats row ---
    const withStats = plans.filter(p => p.hero_stats);
    const avgDps = withStats.filter(p => p.hero_stats.dps_index).reduce((s, p) => s + p.hero_stats.dps_index, 0);
    const dpsCount = withStats.filter(p => p.hero_stats.dps_index).length;
    container.appendChild(R.el('div', { className: 'grid grid-cols-2 md:grid-cols-3 gap-2 mb-4' }, [
      R.statCard('Loadouts', plans.length),
      R.statCard('Perfis', profiles.length),
      dpsCount ? R.statCard('DPS Médio', Math.round(avgDps / dpsCount), `${dpsCount} heróis`) : null
    ].filter(Boolean)));

    // --- Gear Gaps (priorities) ---
    this._renderGaps(container, data);

    // --- Grouped by profile ---
    this._renderLoadouts(container, data);
  },

  _renderLoadouts(el, data) {
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

      // Find profile description
      const profiles = data.hero_profiles || [];
      const profileDef = profiles.find(p => p.id === profileId);

      const section = R.el('div', {
        className: `bg-surface-card rounded-lg border border-surface-hover border-l-2 border-l-${color} overflow-hidden`
      });

      // Profile header with description
      const headerChildren = [
        R.el('span', { className: `text-xs font-bold text-${color}`, textContent: profileId.toUpperCase().replace(/-/g, ' ') }),
        ...stats.map(s => R.el('span', {
          className: `text-[9px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20`,
          textContent: s
        })),
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: `${groupPlans.length} herói${groupPlans.length > 1 ? 's' : ''}` })
      ];
      section.appendChild(R.el('div', { className: `flex items-center gap-2 px-3 py-2 bg-${color}/5 flex-wrap` }, headerChildren));

      // Profile notes (if available)
      if (profileDef && profileDef.notes) {
        section.appendChild(R.el('div', { className: 'px-3 py-1.5 text-[10px] text-gray-500 border-b border-surface-hover/50' },
          [R.el('span', { textContent: profileDef.notes })]
        ));
      }

      // Hero rows
      const list = R.el('div', { className: 'divide-y divide-surface-hover/50' });
      for (const plan of groupPlans) {
        list.appendChild(this._heroRow(plan, color));
      }
      section.appendChild(list);
      container.appendChild(section);
    }

    el.appendChild(container);
  },

  _heroRow(plan, color) {
    const heroId = R.heroIdByName(plan.hero);
    const artifact = heroId ? D.artifactForHero(heroId) : null;
    const hs = plan.hero_stats;

    // Desktop row
    const row = R.el('div', {
      className: 'px-3 py-2 hover:bg-surface-hover/30 cursor-pointer',
      onClick: () => { if (heroId) Heroes._openDetail(heroId); }
    });

    // Top line: hero image + name + freq + artifact
    const topLine = R.el('div', { className: 'flex items-center gap-2' }, [
      heroId ? R.heroImg(heroId, 28, { height: 34, className: 'rounded shrink-0' }) : null,
      R.el('div', { className: 'flex-1 min-w-0' }, [
        R.el('div', { className: 'flex items-center gap-1.5 flex-wrap' }, [
          R.el('span', { className: 'font-medium text-gray-200 text-xs', textContent: plan.hero }),
          R.el('span', {
            className: `text-[9px] px-1.5 py-0.5 rounded-full bg-${color}/15 text-${color} border border-${color}/20 font-bold`,
            textContent: plan.name
          }),
          R.el('span', { className: 'text-[9px] text-gray-500', textContent: `freq ${plan.freq}` })
        ]),
        // Artifact line
        artifact ? R.el('div', { className: 'text-[9px] text-mythic/80 mt-0.5 truncate', textContent: '💎 ' + artifact.name }) : null
      ])
    ].filter(Boolean));
    row.appendChild(topLine);

    // Stats line (only if hero_stats exists)
    if (hs) {
      const statPills = [];
      if (hs.atk) statPills.push({ label: 'ATK', value: hs.atk, cls: 'text-fire' });
      if (hs.critR) statPills.push({ label: 'CritR', value: hs.critR + '%', cls: 'text-tier-ss' });
      if (hs.critD) statPills.push({ label: 'CritD', value: hs.critD + '%', cls: 'text-tier-ss' });
      if (hs.acc) statPills.push({ label: 'ACC', value: hs.acc, cls: 'text-lightning' });
      if (hs.enl) statPills.push({ label: 'Enl', value: hs.enl, cls: 'text-radiance' });
      if (hs.hp) statPills.push({ label: 'HP', value: (hs.hp / 1000).toFixed(1) + 'k', cls: 'text-done' });
      if (hs.def) statPills.push({ label: 'DEF', value: hs.def, cls: 'text-ice' });
      if (hs.dps_index) statPills.push({ label: 'DPS', value: hs.dps_index.toLocaleString(), cls: 'text-gold font-bold' });

      row.appendChild(R.el('div', { className: 'flex flex-wrap gap-x-2 gap-y-0.5 mt-1 ml-[36px]' },
        statPills.map(s => R.el('span', { className: `text-[10px] ${s.cls}`, textContent: `${s.label} ${s.value}` }))
      ));
    }

    return row;
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

  _renderGaps(el, data) {
    const gaps = data.gear_gaps || [];
    if (!gaps.length) return;

    const section = R.el('div', { className: 'mb-4' });
    section.appendChild(R.el('div', { className: 'flex items-center gap-2 mb-2' }, [
      R.el('span', { className: 'text-sm font-bold text-gold' }, ['Prioridades de Gear']),
      R.el('span', { className: 'text-[10px] text-gray-500', textContent: `${gaps.length} gaps` })
    ]));

    const grid = R.el('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-2' });
    for (const gap of gaps) {
      const heroId = R.heroIdByName(gap.hero);
      const pctDone = Math.min(100, Math.round((gap.current / gap.target) * 100));
      const isAlta = gap.priority === 'alta';

      const card = R.el('div', {
        className: `bg-surface-card rounded-lg border ${isAlta ? 'border-fire/40' : 'border-surface-hover'} p-3`
      });

      // Header: hero img + name + priority badge
      card.appendChild(R.el('div', { className: 'flex items-center gap-2 mb-2' }, [
        heroId ? R.heroImg(heroId, 24, { height: 30, className: 'rounded shrink-0' }) : null,
        R.el('span', { className: 'font-medium text-gray-200 text-xs flex-1', textContent: gap.hero }),
        R.el('span', {
          className: `text-[9px] px-1.5 py-0.5 rounded-full font-bold ${isAlta ? 'bg-fire/20 text-fire border border-fire/30' : 'bg-gold/15 text-gold border border-gold/20'}`,
          textContent: gap.priority.toUpperCase()
        })
      ].filter(Boolean)));

      // Stat bar: current → target
      card.appendChild(R.el('div', { className: 'mb-1.5' }, [
        R.el('div', { className: 'flex justify-between text-[10px] mb-0.5' }, [
          R.el('span', { className: 'text-gray-400', textContent: gap.stat }),
          R.el('span', { className: 'text-gray-300', textContent: `${gap.current}${gap.unit} → ${gap.target}${gap.unit}` })
        ]),
        R.el('div', { className: 'h-1.5 bg-surface-hover rounded-full overflow-hidden' }, [
          R.el('div', {
            className: `h-full rounded-full ${isAlta ? 'bg-fire' : 'bg-gold'}`,
            style: `width: ${pctDone}%`
          })
        ])
      ]));

      // Impact
      card.appendChild(R.el('div', { className: 'text-[10px] text-gray-400 mb-1', textContent: gap.impact }));

      // Note (smaller)
      if (gap.note) {
        card.appendChild(R.el('div', { className: 'text-[9px] text-gray-500 leading-tight', textContent: gap.note }));
      }

      grid.appendChild(card);
    }

    section.appendChild(grid);
    el.appendChild(section);
  },

  // Find gear plan/loadout for a hero by name (used by other components)
  getPlanForHero(heroName) {
    const data = (typeof DATA_GEAR !== 'undefined' && DATA_GEAR) || {};
    const plans = data.gear_plans || [];
    return plans.find(p => p.hero.toLowerCase() === heroName.toLowerCase()) || null;
  }
};
