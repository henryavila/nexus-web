// calendar.js — Calendar view component
const Calendar = {
  render(container) {
    const cal = (typeof DATA_CALENDAR !== 'undefined' && DATA_CALENDAR) || {};
    const range = cal.source_range || { start: null, end: null };

    const header = R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6' }, [
      R.el('div', {}, [
        R.el('h1', { className: 'text-xl md:text-2xl font-bold text-white' }, ['Calendário']),
        range.start && range.end
          ? R.el('div', { className: 'text-xs text-gray-500 mt-0.5' }, [
            `Janela: ${this._formatDate(range.start)} → ${this._formatDate(range.end)}`
          ])
          : R.el('div', { className: 'text-xs text-gray-500 mt-0.5' }, ['Sem janela carregada'])
      ])
    ]);

    container.appendChild(header);
    container.appendChild(this._renderStatus(cal));

    const sections = [
      { title: 'Eventos Sazonais', items: cal.events || [] },
      { title: 'Eventos Limitados', items: cal.limited_time || [] },
      { title: 'Summons', items: cal.summon_pools || [] }
    ];

    sections.forEach(section => {
      container.appendChild(this._renderSection(section.title, section.items, cal.event_details || {}));
    });
  },

  _renderStatus(cal) {
    const range = cal.source_range || {};
    const last = cal.last_extracted;

    const status = this._calendarStatus(range.end);
    const badge = status
      ? R.badge(status.label, status.color)
      : R.badge('Sem dados', 'pending');

    const nextEvent = this._nextEvent(cal);

    return R.card('', [
      R.el('div', { className: 'flex items-center justify-between mb-3' }, [
        R.el('h2', { className: 'text-lg font-semibold text-white', textContent: 'Status do Calendário' }),
        badge
      ]),
      R.el('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-300' }, [
        R.el('div', {}, [
          R.el('div', { className: 'text-xs text-gray-500', textContent: 'Válido até' }),
          R.el('div', { textContent: range.end ? this._formatDate(range.end) : '—' })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-xs text-gray-500', textContent: 'Última extração' }),
          R.el('div', { textContent: last ? this._formatDate(last) : '—' })
        ]),
        R.el('div', {}, [
          R.el('div', { className: 'text-xs text-gray-500', textContent: 'Próximo evento' }),
          R.el('div', { textContent: nextEvent ? `${nextEvent.title} (${this._formatDate(nextEvent.start)} → ${this._formatDate(nextEvent.end)})` : '—' })
        ])
      ])
    ]);
  },

  _renderSection(title, items, detailsMap) {
    if (!items || items.length === 0) {
      return R.card('mb-4', [
        R.el('h2', { className: 'text-lg font-semibold text-white mb-2', textContent: title }),
        R.el('div', { className: 'text-sm text-gray-500', textContent: 'Sem eventos carregados.' })
      ]);
    }

    const cards = items.map(item => this._renderEvent(item, detailsMap));

    return R.card('mb-4', [
      R.el('h2', { className: 'text-lg font-semibold text-white mb-3', textContent: title }),
      R.el('div', { className: 'grid grid-cols-1 gap-3' }, cards)
    ]);
  },

  _renderEvent(item, detailsMap) {
    const details = this._getDetails(item.title, detailsMap);
    const dateText = item.start && item.end
      ? `${this._formatDate(item.start)} → ${this._formatDate(item.end)}`
      : item.tip || 'Sem datas';

    const blocks = [
      R.el('div', { className: 'flex items-center justify-between' }, [
        R.el('div', { className: 'text-base font-semibold text-white', textContent: item.title }),
        R.el('span', { className: 'text-xs text-gray-500', textContent: item.category || 'Evento' })
      ]),
      R.el('div', { className: 'text-sm text-gray-300', textContent: dateText })
    ];

    if (!details) {
      blocks.push(R.el('div', { className: 'text-xs text-gray-500 mt-2', textContent: 'Detalhes pendentes.' }));
      return R.card('bg-surface-card border border-surface-hover', blocks);
    }

    if (details.summary) {
      blocks.push(R.el('div', { className: 'text-sm text-gray-300 mt-2', textContent: details.summary }));
    }

    const listSections = [
      { label: 'Objetivos', items: details.objectives },
      { label: 'Recompensas', items: details.rewards },
      { label: 'Dicas', items: details.tips },
      { label: 'Modos', items: details.modes }
    ];

    listSections.forEach(section => {
      const list = this._renderList(section.label, section.items);
      if (list) blocks.push(list);
    });

    const sources = this._renderSources(details.sources);
    if (sources) blocks.push(sources);

    return R.card('bg-surface-card border border-surface-hover', blocks);
  },

  _renderList(label, items) {
    if (!items || items.length === 0) return null;
    return R.el('div', { className: 'mt-2' }, [
      R.el('div', { className: 'text-xs text-gray-500 uppercase mb-1', textContent: label }),
      R.el('ul', { className: 'text-sm text-gray-300 list-disc list-inside' },
        items.map(item => R.el('li', { textContent: item }))
      )
    ]);
  },

  _renderSources(sources) {
    if (!sources || sources.length === 0) return null;
    return R.el('div', { className: 'mt-2' }, [
      R.el('div', { className: 'text-xs text-gray-500 uppercase mb-1', textContent: 'Fontes' }),
      R.el('div', { className: 'text-sm text-blue-300 flex flex-col gap-1' },
        sources.map(src => R.el('a', {
          href: src.url,
          target: '_blank',
          rel: 'noreferrer',
          className: 'hover:underline',
          textContent: src.label || src.url
        }))
      )
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
      .map(item => ({
        ...item,
        startDate: new Date(item.start + 'T00:00:00')
      }))
      .sort((a, b) => a.startDate - b.startDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return list.find(item => item.startDate >= today) || list[0] || null;
  },

  _getDetails(title, map) {
    if (!title || !map) return null;
    if (map[title]) return map[title];
    const normalized = title.replace(/\s+[IVX]+$/i, '').replace(/\s+\d+$/i, '');
    return map[normalized] || null;
  },

  _formatDate(value) {
    if (!value) return '—';
    return new Date(value + 'T00:00:00').toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
};
