// decisions.js — Decisions timeline component
const Decisions = {
  render(container) {
    const decisions = (typeof DATA_DECISIONS !== 'undefined' && DATA_DECISIONS) || [];

    // --- Header ---
    const header = R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6' }, [
      R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Historico de Decisoes']),
      R.el('div', { className: 'text-sm text-gray-400' }, [
        R.el('span', { className: 'text-gold font-medium', textContent: String(decisions.length) }),
        ' decisoes'
      ])
    ]);

    container.appendChild(header);

    // --- Group by date ---
    const grouped = this._groupByDate(decisions);

    // --- Timeline ---
    const timeline = R.el('div', { className: 'relative' });

    // Vertical line
    timeline.appendChild(R.el('div', {
      className: 'absolute left-[47px] md:left-[79px] top-0 bottom-0 w-px bg-surface-hover'
    }));

    for (const [date, items] of grouped) {
      // Date header
      const dateLabel = this._formatDate(date);
      timeline.appendChild(R.el('div', { className: 'flex items-center gap-2 md:gap-4 mb-3 md:mb-4 relative' }, [
        R.el('div', { className: 'w-[40px] md:w-[72px] text-right shrink-0' }, [
          R.el('div', { className: 'text-sm font-medium text-gold', textContent: dateLabel.day }),
          R.el('div', { className: 'text-[10px] md:text-xs text-gray-500', textContent: dateLabel.month })
        ]),
        R.el('div', {
          className: 'w-3 h-3 rounded-full bg-gold border-2 border-surface shrink-0 z-10'
        }),
        R.el('div', { className: 'text-xs text-gray-500 ml-1 md:ml-2', textContent: dateLabel.full })
      ]));

      // Decision entries for this date
      for (const decision of items) {
        timeline.appendChild(this._renderEntry(decision));
      }
    }

    container.appendChild(timeline);
  },

  // --- Group decisions by date (preserving order) ---
  _groupByDate(decisions) {
    const map = new Map();
    for (const d of decisions) {
      if (!map.has(d.date)) map.set(d.date, []);
      map.get(d.date).push(d);
    }
    return map;
  },

  // --- Format date string ---
  _formatDate(dateStr) {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const [y, m, d] = dateStr.split('-');
    return {
      day: String(parseInt(d, 10)),
      month: months[parseInt(m, 10) - 1] || m,
      full: `${parseInt(d, 10)}/${months[parseInt(m, 10) - 1]}/${y}`
    };
  },

  // --- Tag color mapping ---
  _tagColor(tag) {
    const t = tag.toLowerCase();
    if (t.includes('heroes') || t.includes('obtido')) return 'done';
    if (t.includes('banner') || t.includes('pulls') || t.includes('wyrmarrow')) return 'progress';
    if (t.includes('times') || t.includes('teste')) return 'ice';
    if (t.includes('artefatos') || t.includes('mythic')) return 'legendary';
    if (t.includes('bau') || t.includes('baú')) return 'tier-a';
    if (t.includes('tier') || t.includes('analise') || t.includes('análise')) return 'tier-s';
    if (t.includes('mecanica') || t.includes('mecânica') || t.includes('correcao') || t.includes('correção')) return 'lightning';
    if (t.includes('scrolls') || t.includes('skill')) return 'epic';
    if (t.includes('plano') || t.includes('recurso')) return 'pending';
    return 'pending';
  },

  // --- Render a single timeline entry ---
  _renderEntry(decision) {
    const expandable = R.el('div', {
      className: 'overflow-hidden transition-all duration-200 max-h-0',
      style: { maxHeight: '0px' }
    });

    const chevron = R.el('span', {
      className: 'text-gray-600 text-xs transition-transform duration-200',
      textContent: '\u25BC',
      style: { display: 'inline-block', transform: 'rotate(-90deg)' }
    });

    // Expandable content
    const expandContent = R.el('div', { className: 'pt-3 space-y-3' });

    // Summary
    expandContent.appendChild(R.el('div', { className: 'text-sm text-gray-300' }, [
      decision.summary
    ]));

    // Impact (highlighted)
    if (decision.impact) {
      expandContent.appendChild(R.el('div', {
        className: 'text-sm bg-surface-hover rounded px-3 py-2 border-l-2 border-gold'
      }, [
        R.el('span', { className: 'text-xs text-gold uppercase font-medium', textContent: 'Impacto: ' }),
        R.el('span', { className: 'text-gray-300', textContent: decision.impact })
      ]));
    }

    // Details (optional)
    if (decision.details) {
      expandContent.appendChild(R.el('div', { className: 'text-xs text-gray-500 leading-relaxed' }, [
        decision.details
      ]));
    }

    expandable.appendChild(expandContent);

    // Tags
    const tags = R.el('div', { className: 'flex flex-wrap gap-1 mt-1' },
      (decision.tags || []).map(tag =>
        R.el('span', {
          className: `bg-${this._tagColor(tag)} bg-opacity-20 text-${this._tagColor(tag)} text-[10px] px-1.5 py-0.5 rounded`,
          textContent: tag
        })
      )
    );

    // Title row (clickable)
    const titleRow = R.el('div', {
      className: 'flex items-start gap-2 cursor-pointer select-none',
      onClick: () => {
        const isOpen = expandable.style.maxHeight !== '0px';
        if (isOpen) {
          expandable.style.maxHeight = '0px';
          expandable.className = 'overflow-hidden transition-all duration-200 max-h-0';
          chevron.style.transform = 'rotate(-90deg)';
        } else {
          expandable.style.maxHeight = expandable.scrollHeight + 'px';
          expandable.className = 'overflow-hidden transition-all duration-200';
          chevron.style.transform = 'rotate(0deg)';
          setTimeout(() => { expandable.style.maxHeight = 'none'; }, 250);
        }
      }
    }, [
      chevron,
      R.el('div', { className: 'flex-1 min-w-0' }, [
        R.el('div', { className: 'text-sm text-white font-medium', textContent: decision.title }),
        tags
      ])
    ]);

    // Card
    const card = R.card('flex-1', [titleRow, expandable]);

    // Row: spacer (for date column) + dot connector + card
    return R.el('div', { className: 'flex items-start gap-2 md:gap-4 mb-2 md:mb-3 relative' }, [
      R.el('div', { className: 'w-[40px] md:w-[72px] shrink-0' }), // date column spacer
      R.el('div', {
        className: 'w-2 h-2 rounded-full bg-surface-hover mt-3 shrink-0 z-10'
      }),
      card
    ]);
  }
};
