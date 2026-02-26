// app.js — Router and initialization

const DataLoader = {
  registry: {
    mechanics: { src: 'data/mechanics.js', global: 'DATA_MECHANICS' },
    profile: { src: 'data/profile.js', global: 'DATA_PROFILE' },
    plan: { src: 'data/plan.js', global: 'DATA_PLAN' },
    heroes: { src: 'data/heroes.js', global: 'DATA_HEROES' },
    myRoster: { src: 'data/my-roster.js', global: 'DATA_MY_ROSTER' },
    artifacts: { src: 'data/artifacts.js', global: 'DATA_ARTIFACTS' },
    teams: { src: 'data/teams.js', global: 'DATA_TEAMS' },
    tiers: { src: 'data/tiers.js', global: 'DATA_TIERS' },
    decisions: { src: 'data/decisions.js', global: 'DATA_DECISIONS' },
    builds: { src: 'data/builds.js', global: 'DATA_BUILDS' },
    gear: { src: 'data/gear.js', global: 'DATA_GEAR' },
    calendar: { src: 'data/calendar.js', global: 'DATA_CALENDAR' }
  },

  sectionDeps: {
    dashboard: ['heroes', 'calendar'],
    heroes: ['heroes', 'myRoster', 'tiers', 'artifacts', 'builds', 'gear'],
    teams: ['heroes', 'tiers', 'teams'],
    builds: ['heroes', 'tiers', 'builds'],
    gear: ['heroes', 'gear'],
    artifacts: ['heroes', 'artifacts'],
    tierlist: ['heroes', 'tiers', 'myRoster'],
    plan: [],
    decisions: ['decisions'],
    calendar: ['calendar']
  },

  _pending: new Map(),

  isLoaded(key) {
    const item = this.registry[key];
    return !!(item && window[item.global]);
  },

  load(key) {
    const item = this.registry[key];
    if (!item) return Promise.reject(new Error(`Dataset desconhecido: ${key}`));
    if (this.isLoaded(key)) return Promise.resolve();
    if (this._pending.has(key)) return this._pending.get(key);

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = item.src;
      script.onload = () => {
        this._pending.delete(key);
        resolve();
      };
      script.onerror = () => {
        this._pending.delete(key);
        reject(new Error(`Falha ao carregar ${item.src}`));
      };
      document.body.appendChild(script);
    });

    this._pending.set(key, promise);
    return promise;
  },

  ensureSection(section) {
    const deps = this.sectionDeps[section] || [];
    return Promise.all(deps.map(k => this.load(k)));
  }
};

const App = {
  currentSection: 'dashboard',
  sections: ['dashboard', 'calendar', 'heroes', 'teams', 'builds', 'gear', 'artifacts', 'tierlist', 'plan', 'decisions'],
  _routeSeq: 0,

  init() {
    window.addEventListener('hashchange', () => { this.route(); });
    this.route();
    this._warmupLikelyData();
  },

  async route() {
    const hash = location.hash.slice(1) || 'dashboard';
    const [section, param] = hash.split('/');
    if (!this.sections.includes(section)) {
      this.navigate('dashboard');
      return;
    }

    const seq = ++this._routeSeq;
    this.currentSection = section;
    Sidebar.setActive(section);
    await this.render(section, param, seq);
  },

  _renderLoading(content, section) {
    content.innerHTML = '';
    content.appendChild(R.card('max-w-xl mt-4', [
      R.el('div', { className: 'text-sm text-gray-400', textContent: `Carregando dados de ${section}...` })
    ]));
  },

  _renderError(content, err) {
    content.innerHTML = '';
    content.appendChild(R.card('max-w-xl mt-4 border-fire/40', [
      R.el('div', { className: 'text-sm text-fire font-medium mb-1', textContent: 'Erro ao carregar dados' }),
      R.el('div', { className: 'text-xs text-gray-400', textContent: err?.message || 'Erro desconhecido.' })
    ]));
  },

  async render(section, param, seq) {
    const content = document.getElementById('content');
    this._renderLoading(content, section);

    try {
      await DataLoader.ensureSection(section);
      if (seq !== this._routeSeq) return;
      if (typeof D !== 'undefined' && D.invalidate) D.invalidate();

      content.innerHTML = '';
      switch (section) {
        case 'dashboard': Dashboard.render(content); break;
        case 'calendar': Calendar.render(content); break;
        case 'heroes': Heroes.render(content, param); break;
        case 'teams': Teams.render(content); break;
        case 'builds': Builds.render(content); break;
        case 'gear': Gear.render(content); break;
        case 'artifacts': Artifacts.render(content); break;
        case 'tierlist': TierList.render(content); break;
        case 'plan': Plan.render(content); break;
        case 'decisions': Decisions.render(content); break;
      }
    } catch (err) {
      if (seq !== this._routeSeq) return;
      this._renderError(content, err);
    }
  },

  _warmupLikelyData() {
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback.bind(window)
      : (cb) => setTimeout(cb, 350);

    idle(() => {
      DataLoader.load('tiers').catch(() => {});
      DataLoader.load('myRoster').catch(() => {});
      DataLoader.load('teams').catch(() => {});
    });
  },

  navigate(section, param) {
    location.hash = param ? `${section}/${param}` : section;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Sidebar.init();
  App.init();
});
