// dashboard.js — Dashboard overview component
const Dashboard = {
  render(container) {
    const p = (typeof DATA_PROFILE !== 'undefined' && DATA_PROFILE) || {};
    const res = p.resources || {};
    const plan = (typeof DATA_PLAN !== 'undefined' && DATA_PLAN) || {};
    const cal = (typeof DATA_CALENDAR !== 'undefined' && DATA_CALENDAR) || {};

    // --- Header ---
    const updatedDate = p.last_updated
      ? new Date(p.last_updated + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
      : null;

    const header = R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6' }, [
      R.el('div', {}, [
        R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Resumo']),
        updatedDate
          ? R.el('div', { className: 'text-xs text-gray-500 mt-0.5' }, [`Atualizado em ${updatedDate}`])
          : null
      ]),
      R.el('div', { className: 'text-sm text-gray-400 hidden md:block text-right' }, [
        R.el('span', { className: 'text-gold font-medium', textContent: p.name || 'Player' }),
        R.el('span', { textContent: ` — ${p.server || ''}` })
      ])
    ]);

    // --- Focus summary ---
    const banner = (p.banner_progress && p.banner_progress.lothair) || null;
    const summaryGrid = R.el('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6' }, [
      R.statCard('Wyrmarrow', (res.wyrmarrow ?? 0).toLocaleString('pt-BR')),
      R.statCard('Essence', (res.essence_of_creation ?? 0).toLocaleString('pt-BR')),
      R.statCard('Gold', (res.gold ?? 0).toLocaleString('pt-BR')),
      R.statCard('Pity Lothair', banner ? `${banner.pulls}/${banner.pity}` : '—')
    ]);

    const activeTeams = this._renderActiveTeams();
    const calendarCard = this._renderCalendarCard(cal);

    // --- Next Steps (top 3) ---
    const nextSteps = this._renderNextSteps(plan.phases || [], 3);

    // --- Details (collapsible) ---
    const details = this._renderDetails({
      scrollPlan: this._renderScrollPlan(p.skill_scroll_plan || []),
      arriving: this._renderArriving(p.arriving || []),
      crystalBudget: this._renderCrystalBudget(p.artifact_crystal_budget),
      resources: this._renderResourceGrid(res)
    });

    // --- Season Progress ---
    const mech = (typeof DATA_MECHANICS !== 'undefined' && DATA_MECHANICS) || {};
    const seasonProgress = this._renderSeasonProgress(mech);

    container.appendChild(header);
    if (seasonProgress) container.appendChild(seasonProgress);
    container.appendChild(summaryGrid);
    if (calendarCard) container.appendChild(calendarCard);
    if (activeTeams) container.appendChild(activeTeams);
    container.appendChild(nextSteps);
    container.appendChild(details);
  },

  // --- Calendar status card ---
  _renderCalendarCard(cal) {
    if (!cal || !cal.source_range) return null;
    const range = cal.source_range || {};
    const status = this._calendarStatus(range.end);
    const badge = status ? R.badge(status.label, status.color) : R.badge('Sem dados', 'pending');
    const nextEvent = this._nextEvent(cal);

    return R.card('mb-4', [
      R.el('div', { className: 'flex items-center justify-between mb-2' }, [
        R.el('h2', { className: 'text-lg font-semibold text-white', textContent: 'Calendário (14 dias)' }),
        badge
      ]),
      R.el('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-300' }, [
        R.el('div', {}, [
          R.el('div', { className: 'text-xs text-gray-500', textContent: 'Válido até' }),
          R.el('div', { textContent: range.end ? this._formatDate(range.end) : '—' })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-xs text-gray-500', textContent: 'Última extração' }),
          R.el('div', { textContent: cal.last_extracted ? this._formatDate(cal.last_extracted) : '—' })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-xs text-gray-500', textContent: 'Próximo evento' }),
          R.el('div', { textContent: nextEvent ? `${nextEvent.title} (${this._formatDate(nextEvent.start)} → ${this._formatDate(nextEvent.end)})` : '—' })
        ])
      ]),
      R.el('div', { className: 'mt-3' }, [
        R.el('button', {
          className: 'text-sm text-gold hover:text-gold/80',
          onClick: () => App.navigate('calendar')
        }, ['Ver calendário completo'])
      ])
    ]);
  },

  // --- Skill Scroll Plan table ---
  _renderScrollPlan(items) {
    const thead = R.el('thead', {}, [
      R.el('tr', { className: 'text-left text-xs text-gray-500 uppercase' }, [
        R.el('th', { className: 'pb-2', textContent: 'Herói' }),
        R.el('th', { className: 'pb-2', textContent: 'Scrolls' }),
        R.el('th', { className: 'pb-2', textContent: 'Alvo' }),
        R.el('th', { className: 'pb-2', textContent: 'Status' })
      ])
    ]);

    const rows = items.map(item => {
      const statusColor = this._statusColor(item.status);
      const heroId = item.id;
      return R.el('tr', { className: 'border-t border-surface-hover' }, [
        R.el('td', { className: 'py-2' }, [
          R.el('div', { className: 'flex items-center gap-2' }, [
            R.heroImg(heroId, 24),
            R.heroLink(D.hero(item.id)?.name || '?', 'font-medium')
          ].filter(Boolean))
        ]),
        R.el('td', { className: 'py-2 text-gray-300', textContent: String(item.scrolls) }),
        R.el('td', { className: 'py-2 text-gray-300', textContent: item.target }),
        R.el('td', { className: 'py-2' }, [R.badge(item.status, statusColor)])
      ]);
    });

    const tbody = R.el('tbody', {}, rows);
    const table = R.el('table', { className: 'w-full text-sm' }, [thead, tbody]);

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: 'Plano de Skill Scrolls' }),
      table
    ]);
  },

  // --- Arriving Heroes list ---
  _renderArriving(items) {
    const rows = items.map(item => {
      const tierColor = R.tierColor(item.tier);
      const heroId = item.id;
      return R.el('div', { className: 'flex items-center justify-between py-2 border-b border-surface-hover last:border-0' }, [
        R.el('div', { className: 'flex items-center gap-2' }, [
          R.heroImg(heroId, 28),
          R.el('div', {}, [
            R.heroLink(D.hero(item.id)?.name || '?', 'font-medium'),
            R.el('span', { className: 'text-gray-500 text-xs ml-2', textContent: item.via })
          ])
        ].filter(Boolean)),
        R.badge(item.tier, tierColor)
      ]);
    });

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: 'Heróis Chegando' }),
      R.el('div', {}, rows)
    ]);
  },

  // --- Crystal Budget ---
  _renderCrystalBudget(budget) {
    if (!budget) {
      return R.card('', [
        R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: 'Orçamento de Cristais' }),
        R.el('div', { className: 'text-gray-500 text-sm', textContent: 'Sem dados disponíveis.' })
      ]);
    }

    const categories = [
      { key: 'spend_now', label: 'Usar Agora', color: 'done' },
      { key: 'tactical_reserve', label: 'Reserva Tática', color: 'progress' },
      { key: 'carryover', label: 'Próxima Season', color: 'pending' }
    ];

    const rows = categories.map(cat => {
      const data = budget[cat.key];
      if (!data) return null;
      return R.el('div', { className: 'mb-4 last:mb-0' }, [
        R.el('div', { className: 'flex items-center justify-between mb-1' }, [
          R.el('span', { className: 'text-sm text-gray-300', textContent: cat.label }),
          R.el('span', { className: 'text-sm font-medium text-gold', textContent: `${data.amount.toLocaleString('pt-BR')} (${data.percent}%)` })
        ]),
        R.progressBar(data.amount, budget.total, cat.color),
        data.note
          ? R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: data.note })
          : null
      ]);
    }).filter(Boolean);

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-1', textContent: 'Orçamento de Cristais' }),
      R.el('div', { className: 'text-xs text-gray-500 mb-3', textContent: `Total: ${budget.total.toLocaleString('pt-BR')} cristais` }),
      R.el('div', {}, rows)
    ]);
  },

  // --- Next Steps (first ~5 undone items across all phases) ---
  _renderNextSteps(phases, limit = 5) {
    const undone = [];

    for (const phase of phases) {
      // Collect from top-level items
      if (phase.items) {
        for (const item of phase.items) {
          if (!item.done) {
            undone.push({ text: item.text, phase: phase.name });
          }
          // Also check subitems
          if (item.subitems) {
            for (const sub of item.subitems) {
              if (!sub.done) {
                undone.push({ text: sub.text, phase: phase.name });
              }
            }
          }
          if (undone.length >= limit) break;
        }
      }

      // Collect from groups
      if (phase.groups && undone.length < limit) {
        for (const group of phase.groups) {
          if (group.items) {
            for (const item of group.items) {
              if (!item.done) {
                undone.push({ text: item.text, phase: phase.name });
              }
              if (undone.length >= limit) break;
            }
          }
          if (undone.length >= limit) break;
        }
      }

      if (undone.length >= limit) break;
    }

    const rows = undone.map(item =>
      R.el('div', { className: 'flex items-start gap-3 py-2 border-b border-surface-hover last:border-0' }, [
        R.el('span', { className: 'text-gray-500 mt-0.5 text-sm shrink-0', textContent: '\u25CB' }),
        R.el('div', {}, [
          R.el('div', { className: 'text-sm text-gray-300', textContent: item.text }),
          R.el('div', { className: 'text-xs text-gray-600', textContent: item.phase })
        ])
      ])
    );

    return R.card('', [
      R.el('div', { className: 'flex items-center justify-between mb-3' }, [
        R.el('h2', { className: 'text-lg font-semibold text-white', textContent: 'Próximos Passos' }),
        R.el('button', {
          className: 'text-xs text-gold hover:text-gold-hover transition-colors',
          textContent: 'Ver plano completo',
          onClick: () => App.navigate('plan')
        })
      ]),
      R.el('div', {}, rows)
    ]);
  },

  _calendarStatus(endDate) {
    if (!endDate) return null;
    const end = new Date(endDate + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.floor((end - today) / 86400000);
    if (diff < 0) return { label: 'Desatualizado', color: 'pending' };
    if (diff <= 7) return { label: 'Atenção (7 dias)', color: 'progress' };
    return { label: 'OK', color: 'done' };
  },

  _nextEvent(cal) {
    const list = [...(cal.events || []), ...(cal.limited_time || []), ...(cal.summon_pools || [])]
      .filter(item => item.start)
      .map(item => ({ ...item, startDate: new Date(item.start + 'T00:00:00') }))
      .sort((a, b) => a.startDate - b.startDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return list.find(item => item.startDate >= today) || list[0] || null;
  },

  _formatDate(value) {
    if (!value) return '—';
    return new Date(value + 'T00:00:00').toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  },

  _renderActiveTeams() {
    const teams = (typeof DATA_TEAMS !== 'undefined' && DATA_TEAMS) || [];
    const active = teams.filter(t => t.status === 'active' || /prioridade/i.test(t.name));
    if (!active.length) return null;

    const rows = active.map(t => R.el('div', {
      className: 'flex items-center justify-between py-2 border-b border-surface-hover last:border-0'
    }, [
      R.el('div', {}, [
        R.el('div', { className: 'text-sm text-white font-medium', textContent: t.activity }),
        R.el('div', { className: 'text-xs text-gray-500', textContent: t.name })
      ]),
      R.el('button', {
        className: 'text-xs text-gold hover:text-gold-hover',
        textContent: 'Abrir',
        onClick: () => App.navigate('teams')
      })
    ]));

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-2', textContent: 'Times Ativos' }),
      R.el('div', {}, rows)
    ]);
  },

  _renderResourceGrid(res) {
    const rows = [
      ['Legendários', res.legendaries],
      ['Heróis', res.heroes_total],
      ['Skill Scrolls', res.skill_scrolls],
      ['Master Scrolls', res.master_scrolls],
      ['Adventurer Scrolls', res.adventurer_scrolls],
      ['Scholar Scrolls', res.scholar_scrolls],
      ['Cristais', (res.artifact_crystals ?? 0).toLocaleString('pt-BR')],
      ['Imprints', res.soul_imprints_remaining],
      ['Essence', (res.essence_of_creation ?? 0).toLocaleString('pt-BR')]
    ];

    const items = rows.map(([label, value]) =>
      R.el('div', { className: 'flex items-center justify-between py-1.5' }, [
        R.el('span', { className: 'text-xs text-gray-500', textContent: label }),
        R.el('span', { className: 'text-xs text-gray-300', textContent: value ?? '—' })
      ])
    );

    return R.card('', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-2', textContent: 'Recursos' }),
      R.el('div', {}, items)
    ]);
  },

  _renderDetails(sections) {
    const wrapper = R.el('div', { className: 'mt-4' });
    const expanded = localStorage.getItem('dashboard-details-expanded') === 'true';
    const body = R.el('div', { style: expanded ? '' : 'display:none' });

    const toggle = R.el('button', {
      className: 'w-full text-xs text-gray-500 hover:text-gray-300 mb-3',
      textContent: expanded ? 'Esconder detalhes ▲' : 'Ver detalhes ▼'
    });
    toggle.addEventListener('click', () => {
      const isVisible = body.style.display !== 'none';
      body.style.display = isVisible ? 'none' : '';
      toggle.textContent = isVisible ? 'Ver detalhes ▼' : 'Esconder detalhes ▲';
      localStorage.setItem('dashboard-details-expanded', !isVisible);
    });

    body.appendChild(sections.resources);
    body.appendChild(sections.scrollPlan);
    body.appendChild(sections.arriving);
    body.appendChild(sections.crystalBudget);

    wrapper.appendChild(toggle);
    wrapper.appendChild(body);
    return wrapper;
  },

  // --- Season Progress ---
  _renderSeasonProgress(mech) {
    const start = mech.season_start_date;
    const end = mech.season_end_date;
    const phases = mech.season_phases || [];

    // Se nao tem datas, mostra season info compacto
    if (!start || !end) {
      const seasonNum = parseInt((mech.current_season || '').replace('S', '')) || 1;
      const nextSeason = mech.season_roadmap ? mech.season_roadmap.find(s => s.season === 'S' + (seasonNum + 1)) : null;
      return R.el('div', { className: 'mb-4 md:mb-6 bg-surface-card rounded-lg border border-surface-hover p-3 flex items-center justify-between' }, [
        R.el('div', { className: 'flex items-center gap-3' }, [
          R.el('span', { className: 'text-lg', textContent: '\u23F3' }),
          R.el('div', {}, [
            R.el('span', { className: 'text-sm font-medium text-white', textContent: `${mech.season_name || 'Season'} em andamento` }),
            R.el('span', { className: 'text-xs text-gray-500 block mt-0.5', textContent: mech.season_duration_note || '~70 dias por season' })
          ])
        ]),
        nextSeason
          ? R.el('div', { className: 'text-right' }, [
              R.el('span', { className: 'text-xs text-gray-400 block', textContent: 'Próxima:' }),
              R.el('span', { className: 'text-xs text-gold font-medium', textContent: `${nextSeason.season} — ${nextSeason.name}` })
            ])
          : null
      ]);
    }

    const now = new Date();
    const startDate = new Date(start + 'T00:00:00');
    const endDate = new Date(end + 'T00:00:00');
    const totalDays = Math.max(1, Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)));
    const elapsedDays = Math.round((now - startDate) / (1000 * 60 * 60 * 24));
    const remainingDays = Math.max(0, Math.round((endDate - now) / (1000 * 60 * 60 * 24)));

    const isEnding = remainingDays <= 7;
    const isOver = remainingDays <= 0;

    let statusText;
    if (isOver) {
      statusText = 'Season encerrada!';
    } else if (isEnding) {
      statusText = `${remainingDays} dia${remainingDays !== 1 ? 's' : ''} restante${remainingDays !== 1 ? 's' : ''}!`;
    } else {
      statusText = `Dia ${Math.min(elapsedDays, totalDays)} de ${totalDays} — ${remainingDays} dias restantes`;
    }

    // Find current phase
    let currentPhase = null;
    for (const p of phases) {
      const pStart = new Date(p.start + 'T00:00:00');
      const pEnd = new Date(p.end + 'T00:00:00');
      if (now >= pStart && now < pEnd) { currentPhase = p; break; }
    }
    if (!currentPhase && phases.length) currentPhase = phases[phases.length - 1];

    const container = R.el('div', { className: 'mb-4 md:mb-6 bg-surface-card rounded-lg border border-surface-hover p-4' });

    // Season header + status
    container.appendChild(R.el('div', { className: 'flex items-center justify-between mb-2' }, [
      R.el('div', { className: 'flex items-center gap-2' }, [
        R.el('span', { className: 'text-lg', textContent: isEnding && !isOver ? '\u26A0\uFE0F' : '\u23F3' }),
        R.el('span', { className: 'text-sm font-medium text-white', textContent: mech.season_name || 'Season' })
      ]),
      R.el('div', { className: `text-xs ${isEnding ? 'text-fire' : 'text-gray-400'}`, textContent: statusText })
    ]));

    // Phase timeline bar
    if (phases.length) {
      const phaseBar = R.el('div', { className: 'flex gap-0.5 mb-3 h-2 rounded overflow-hidden' });
      for (const p of phases) {
        const pStart = new Date(p.start + 'T00:00:00');
        const pEnd = new Date(p.end + 'T00:00:00');
        const pDays = Math.round((pEnd - pStart) / (1000 * 60 * 60 * 24));
        const widthPct = (pDays / totalDays) * 100;
        const isCurrent = p === currentPhase;
        const isPast = now >= pEnd;

        let bgClass;
        if (isPast) bgClass = 'bg-done';
        else if (isCurrent) {
          const phaseElapsed = Math.round((now - pStart) / (1000 * 60 * 60 * 24));
          const phasePct = Math.round((phaseElapsed / pDays) * 100);
          // Gradient effect: partial fill
          const seg = R.el('div', {
            className: 'h-full relative rounded-sm overflow-hidden',
            style: `width:${widthPct}%;background:#242836`
          });
          seg.appendChild(R.el('div', {
            className: 'h-full bg-gold rounded-sm',
            style: `width:${phasePct}%`
          }));
          seg.title = `${p.name} — Dia ${phaseElapsed}/${pDays}`;
          phaseBar.appendChild(seg);
          continue;
        } else {
          bgClass = 'bg-surface-hover';
        }

        phaseBar.appendChild(R.el('div', {
          className: `h-full rounded-sm ${bgClass}`,
          style: `width:${widthPct}%`,
          title: p.name
        }));
      }
      container.appendChild(phaseBar);

      // Phase labels
      const phaseLabels = R.el('div', { className: 'flex gap-0.5 mb-3' });
      for (const p of phases) {
        const pStart = new Date(p.start + 'T00:00:00');
        const pEnd = new Date(p.end + 'T00:00:00');
        const pDays = Math.round((pEnd - pStart) / (1000 * 60 * 60 * 24));
        const widthPct = (pDays / totalDays) * 100;
        const isCurrent = p === currentPhase;
        const isPast = now >= pEnd;

        const phaseRemaining = isCurrent ? Math.max(0, Math.round((pEnd - now) / (1000 * 60 * 60 * 24))) : null;
        const startFmt = new Date(p.start + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });

        phaseLabels.appendChild(R.el('div', {
          className: `text-center`,
          style: `width:${widthPct}%`
        }, [
          R.el('div', {
            className: `text-[10px] font-medium ${isCurrent ? 'text-gold' : isPast ? 'text-done' : 'text-gray-500'}`,
            textContent: p.name.split(' — ')[0]
          }),
          R.el('div', {
            className: 'text-[10px] text-gray-600',
            textContent: isCurrent ? `${phaseRemaining}d restantes` : `${startFmt}`
          })
        ]));
      }
      container.appendChild(phaseLabels);
    }

    // Collapsible details section
    const expanded = localStorage.getItem('season-details-expanded') !== 'false';
    const detailsWrapper = R.el('div', { style: expanded ? '' : 'display:none' });

    // Toggle button
    const toggleBtn = R.el('button', {
      className: 'w-full flex items-center justify-center gap-1 text-[10px] text-gray-500 hover:text-gray-300 pt-2 mt-1 border-t border-surface-hover cursor-pointer transition-colors',
      textContent: expanded ? 'Recolher detalhes \u25B2' : 'Ver detalhes \u25BC'
    });
    toggleBtn.addEventListener('click', () => {
      const isVisible = detailsWrapper.style.display !== 'none';
      detailsWrapper.style.display = isVisible ? 'none' : '';
      toggleBtn.textContent = isVisible ? 'Ver detalhes \u25BC' : 'Recolher detalhes \u25B2';
      localStorage.setItem('season-details-expanded', !isVisible);
    });
    container.appendChild(toggleBtn);

    // Current phase activities
    if (currentPhase && currentPhase.activities) {
      detailsWrapper.appendChild(R.el('div', { className: 'flex items-center justify-between mb-2 mt-3' }, [
        R.el('span', { className: 'text-xs font-semibold text-gold uppercase tracking-wide', textContent: currentPhase.name }),
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: currentPhase.description })
      ]));

      const actGrid = R.el('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-1.5' });
      for (const act of currentPhase.activities) {
        const prioColor = act.priority === 'alta' ? 'text-fire' : 'text-gray-500';
        const prioIcon = act.priority === 'alta' ? '!' : '-';
        actGrid.appendChild(R.el('div', { className: 'flex items-start gap-2 py-1' }, [
          R.el('span', { className: `text-[10px] font-bold ${prioColor} w-2 shrink-0 mt-0.5`, textContent: prioIcon }),
          R.el('div', { className: 'min-w-0' }, [
            R.el('span', { className: 'text-xs text-white', textContent: act.name }),
            R.el('span', { className: 'text-[10px] text-gray-500 block', textContent: act.note })
          ])
        ]));
      }
      detailsWrapper.appendChild(actGrid);
    }

    // Next season hint
    const seasonNum = parseInt((mech.current_season || '').replace('S', '')) || 1;
    const nextSeason = mech.season_roadmap ? mech.season_roadmap.find(s => s.season === 'S' + (seasonNum + 1)) : null;
    if (nextSeason) {
      detailsWrapper.appendChild(R.el('div', { className: 'flex items-center justify-between mt-3 pt-2 border-t border-surface-hover' }, [
        R.el('span', { className: 'text-[10px] text-gray-500', textContent: 'Próxima season:' }),
        R.el('span', { className: 'text-[10px] text-gold', textContent: `${nextSeason.season} — ${nextSeason.name}` })
      ]));
    }

    container.appendChild(detailsWrapper);

    return container;
  },

  // --- Status color helper ---
  _statusColor(status) {
    if (!status) return 'pending';
    const s = status.toLowerCase();
    if (s.includes('usar agora') || s.includes('done') || s.includes('pronto') || s.includes('feito')) return 'done';
    if (s.includes('guardar') || s.includes('progress') || s.includes('reserv')) return 'progress';
    return 'pending';
  }
};
