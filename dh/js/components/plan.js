// plan.js — Plan progression component
const Plan = {
  _showPendingOnly: true,

  render(container) {
    const plan = (typeof DATA_PLAN !== 'undefined' && DATA_PLAN) || {};
    const phases = plan.phases || [];

    // --- Count all items recursively ---
    const totals = this._countAll(phases);

    // --- Header ---
    const header = R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6' }, [
      R.el('div', {}, [
        R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Plano de Progressao']),
        R.el('div', { className: 'text-sm text-gray-400 mt-1' }, [
          'Atualizado: ',
          R.el('span', { className: 'text-gold', textContent: plan.updated || '\u2014' })
        ])
      ]),
      R.el('div', { className: 'text-right' }, [
        R.el('div', { className: 'text-sm text-gray-400' }, [
          R.el('span', { className: 'text-white font-medium', textContent: String(totals.done) }),
          ` / ${totals.total}`
        ])
      ])
    ]);

    // --- View toggle ---
    const viewBar = R.el('div', { className: 'flex gap-1.5 mb-3' }, [
      this._renderViewToggle('Pendentes', true),
      this._renderViewToggle('Tudo', false)
    ]);

    // --- Overall progress bar ---
    const overallPct = totals.total > 0 ? Math.round((totals.done / totals.total) * 100) : 0;
    const overallProgress = R.el('div', { className: 'mb-4 md:mb-6' }, [
      R.el('div', { className: 'flex items-center justify-between mb-2' }, [
        R.el('span', { className: 'text-sm text-gray-400', textContent: 'Progresso geral' }),
        R.el('span', { className: 'text-sm font-medium text-gold', textContent: `${overallPct}%` })
      ]),
      R.progressBar(totals.done, totals.total || 1, 'gold')
    ]);

    // --- Phase accordions ---
    const phaseCards = phases
      .map((phase, idx) => this._renderPhase(phase, idx === 0))
      .filter(Boolean);

    container.appendChild(header);
    container.appendChild(viewBar);
    container.appendChild(overallProgress);
    for (const card of phaseCards) container.appendChild(card);
  },

  _renderViewToggle(label, pendingOnly) {
    const isActive = this._showPendingOnly === pendingOnly;
    return R.el('button', {
      className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
        isActive ? 'bg-gold text-surface' : 'bg-surface-hover text-gray-400'
      }`,
      textContent: label,
      onClick: () => {
        this._showPendingOnly = pendingOnly;
        const content = document.getElementById('content');
        if (content) this.render(content);
      }
    });
  },

  // --- Count done/total recursively across all phases ---
  _countAll(phases) {
    let done = 0, total = 0;
    for (const phase of phases) {
      const c = this._countPhase(phase);
      done += c.done;
      total += c.total;
    }
    return { done, total };
  },

  _countPhase(phase) {
    let done = 0, total = 0;

    // Top-level items
    if (phase.items) {
      for (const item of phase.items) {
        total++;
        if (item.done) done++;
        if (item.subitems) {
          for (const sub of item.subitems) {
            total++;
            if (sub.done) done++;
          }
        }
      }
    }

    // Groups
    if (phase.groups) {
      for (const group of phase.groups) {
        if (group.items) {
          for (const item of group.items) {
            total++;
            if (item.done) done++;
          }
        }
      }
    }

    return { done, total };
  },

  // --- Render a single phase accordion ---
  _renderPhase(phase, startExpanded) {
    const counts = this._countPhase(phase);
    const pct = counts.total > 0 ? Math.round((counts.done / counts.total) * 100) : 0;
    const allDone = counts.done === counts.total && counts.total > 0;

    if (this._showPendingOnly && counts.done === counts.total) return null;

    // Body content (hidden by default unless startExpanded)
    const body = R.el('div', {
      className: `overflow-hidden transition-all duration-200 ${startExpanded ? '' : 'max-h-0'}`,
      style: startExpanded ? {} : { maxHeight: '0px' }
    });

    // Build body content
    const bodyInner = R.el('div', { className: 'pt-4 border-t border-surface-hover' });

    // Top-level items
    if (phase.items) {
      for (const item of phase.items) {
        if (!this._showPendingOnly || !item.done) {
          bodyInner.appendChild(this._renderItem(item, false));
        }
        if (item.subitems) {
          for (const sub of item.subitems) {
            if (!this._showPendingOnly || !sub.done) {
              bodyInner.appendChild(this._renderItem(sub, true));
            }
          }
        }
      }
    }

    // Groups
    if (phase.groups) {
      for (const group of phase.groups) {
        const grp = this._renderGroup(group);
        if (grp) bodyInner.appendChild(grp);
      }
    }

    body.appendChild(bodyInner);

    // Header (clickable)
    const chevron = R.el('span', {
      className: 'text-gray-500 transition-transform duration-200 text-sm',
      textContent: '\u25BC',
      style: { display: 'inline-block', transform: startExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }
    });

    const phaseHeader = R.el('div', {
      className: 'flex items-center gap-3 cursor-pointer select-none',
      onClick: () => {
        const isOpen = body.style.maxHeight !== '0px';
        if (isOpen) {
          body.style.maxHeight = '0px';
          body.className = 'overflow-hidden transition-all duration-200 max-h-0';
          chevron.style.transform = 'rotate(-90deg)';
        } else {
          body.style.maxHeight = body.scrollHeight + 'px';
          body.className = 'overflow-hidden transition-all duration-200';
          chevron.style.transform = 'rotate(0deg)';
          // After transition, remove max-height constraint for dynamic content
          setTimeout(() => { body.style.maxHeight = 'none'; }, 250);
        }
      }
    }, [
      chevron,
      R.el('div', { className: 'flex-1' }, [
        R.el('div', { className: 'flex items-center gap-3' }, [
          R.badge(`Fase ${phase.id}`, allDone ? 'done' : 'progress'),
          R.el('span', { className: 'text-white font-semibold', textContent: phase.name }),
          R.el('span', { className: 'text-sm text-gray-500 ml-auto', textContent: `${counts.done}/${counts.total}` })
        ]),
        R.el('div', { className: 'mt-2' }, [
          R.progressBar(counts.done, counts.total || 1, allDone ? 'done' : 'progress')
        ])
      ])
    ]);

    const card = R.card('mb-4', [phaseHeader, body]);
    return card;
  },

  // --- Render a single item with checkbox ---
  _renderItem(item, indented) {
    const icon = item.done
      ? R.el('span', { className: 'text-done text-sm shrink-0', textContent: '\u2713' })
      : R.el('span', { className: 'text-gray-600 text-sm shrink-0', textContent: '\u25CB' });

    const textClass = item.done ? 'text-sm text-gray-500 line-through' : 'text-sm text-gray-300';

    return R.el('div', {
      className: `flex items-start gap-3 py-1.5 ${indented ? 'ml-6' : ''}`
    }, [
      icon,
      R.el('span', { className: textClass, textContent: item.text })
    ]);
  },

  // --- Render a group (sub-section within a phase) ---
  _renderGroup(group) {
    const wrapper = R.el('div', { className: 'mt-4 mb-2' });

    // Group header
    const headerChildren = [
      R.el('span', { className: 'text-white font-medium text-sm', textContent: group.name })
    ];
    if (group.note) {
      headerChildren.push(R.badge(group.note, 'pending'));
    }

    wrapper.appendChild(R.el('div', { className: 'flex items-center gap-2 mb-1' }, headerChildren));

    // Group description
    if (group.description) {
      wrapper.appendChild(R.el('div', {
        className: 'text-xs text-gray-500 mb-2 ml-1',
        textContent: group.description
      }));
    }

    // Group items
    if (group.items) {
      for (const item of group.items) {
        if (!this._showPendingOnly || !item.done) {
          wrapper.appendChild(this._renderItem(item, false));
        }
      }
    }

    if (this._showPendingOnly && wrapper.childNodes.length <= 1) return null;

    return wrapper;
  }
};
