// render.js — DOM helpers
const R = {
  el(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'className') el.className = v;
      else if (k === 'textContent') el.textContent = v;
      else if (k === 'innerHTML') el.innerHTML = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else el.setAttribute(k, v);
    }
    for (const child of [].concat(children)) {
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else if (child) el.appendChild(child);
    }
    return el;
  },

  elementColor(element) {
    const colors = {
      Fire: 'fire', Ice: 'ice', Lightning: 'lightning',
      Poison: 'poison', Necrosis: 'necrosis', Radiance: 'radiance'
    };
    return colors[element] || 'gray-500';
  },

  tierColor(tier) {
    const colors = { SS: 'tier-ss', S: 'tier-s', A: 'tier-a', B: 'tier-b', C: 'tier-c', D: 'pending' };
    return colors[tier] || 'pending';
  },

  rarityColor(rarity) {
    const colors = { Mythic: 'mythic', Legendary: 'legendary', Epic: 'epic' };
    return colors[rarity] || 'gray-500';
  },

  badge(text, colorClass) {
    return R.el('span', {
      className: `bg-${colorClass} text-white text-xs px-2 py-0.5 rounded font-medium`,
      textContent: text
    });
  },

  elementDot(element) {
    return R.el('span', {
      className: `element-dot bg-${R.elementColor(element)}`,
      title: element
    });
  },

  card(className = '', children = []) {
    return R.el('div', {
      className: `bg-surface-card rounded-lg border border-surface-hover p-4 ${className}`
    }, children);
  },

  statCard(label, value, subtext = '') {
    return R.card('text-center', [
      R.el('div', { className: 'text-lg md:text-2xl font-bold text-gold', textContent: String(value) }),
      R.el('div', { className: 'text-xs md:text-sm text-gray-400 mt-1', textContent: label }),
      subtext ? R.el('div', { className: 'text-xs text-gray-500 mt-1', textContent: subtext }) : null
    ]);
  },

  heroLink(name, extraClass = '') {
    return R.el('span', {
      className: `text-gold cursor-pointer hover:underline transition-colors ${extraClass}`.trim(),
      textContent: name,
      onClick: (e) => {
        e.stopPropagation();
        const heroId = D.heroIdByName(name);
        if (heroId) Heroes._openDetail(heroId);
      }
    });
  },

  heroImg(heroId, size = 40, opts = {}) {
    if (!heroId) return null;
    const url = `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_${heroId}.png`;
    const w = opts.width || size;
    const h = opts.height || size;
    return R.el('img', {
      src: url,
      className: `rounded object-cover object-top shrink-0 ${opts.className || ''}`,
      style: { width: w + 'px', height: h + 'px' },
      loading: 'lazy',
      onerror: (e) => { e.target.style.display = 'none'; }
    });
  },

  heroIdByName(name) {
    return D.heroIdByName(name);
  },

  progressBar(current, max, colorClass = 'gold') {
    const pct = max > 0 ? Math.round((current / max) * 100) : 0;
    return R.el('div', { className: 'w-full bg-surface-hover rounded-full h-2' }, [
      R.el('div', {
        className: `bg-${colorClass} h-2 rounded-full transition-all duration-300`,
        style: { width: `${pct}%` }
      })
    ]);
  }
};
