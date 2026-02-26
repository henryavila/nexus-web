// data.js — Centralized data lookup module
// Resolves id references across normalized data files

const D = (() => {
  // Lazy-initialized indices
  let _heroById = null;
  let _heroByName = null;
  let _tierById = null;
  let _tierByName = null;
  let _myHeroById = null;
  let _artifactById = null;

  function _buildHeroIndex() {
    if (_heroById) return;
    _heroById = new Map();
    _heroByName = new Map();
    for (const h of (window.DATA_HEROES || [])) {
      _heroById.set(h.id, h);
      _heroByName.set(h.name.toLowerCase(), h);
    }
  }

  function _buildTierIndex() {
    if (_tierById) return;
    _tierById = new Map();
    _tierByName = new Map();
    for (const t of (window.DATA_TIERS || [])) {
      if (t.id) _tierById.set(t.id, t);
      _tierByName.set(t.name.toLowerCase(), t);
    }
  }

  function _buildMyHeroIndex() {
    if (_myHeroById) return;
    _myHeroById = new Map();
    for (const h of (window.DATA_MY_ROSTER || [])) {
      _myHeroById.set(h.id, h);
    }
  }

  function _buildArtifactIndex() {
    if (_artifactById) return;
    _artifactById = new Map();
    for (const a of (window.DATA_ARTIFACTS?.owned || [])) {
      if (a.id) _artifactById.set(a.id, a);
    }
  }

  // Helper: extract tier fields without name/role/id to avoid collisions
  function _tierSafe(tier) {
    if (!tier) return {};
    const { name: _n, role: _r, id: _id, ...safe } = tier;
    return safe;
  }

  return {
    // --- Primary lookups ---
    hero(id) {
      _buildHeroIndex();
      return _heroById.get(id) || null;
    },

    tier(id) {
      _buildTierIndex();
      return _tierById.get(id) || null;
    },

    artifact(artId) {
      _buildArtifactIndex();
      return _artifactById.get(artId) || null;
    },

    // --- Player data ---
    myHero(id) {
      _buildMyHeroIndex();
      return _myHeroById.get(id) || null;
    },

    isOwned(id) {
      _buildMyHeroIndex();
      return _myHeroById.has(id);
    },

    // --- Merged view ---
    heroFull(id) {
      const hero = D.hero(id);
      if (!hero) return null;
      const tier = D.tier(id);
      const my = D.myHero(id);
      // Spread order: hero base, then tier (safe — no name/role/id collision), then player data
      return { ...hero, ..._tierSafe(tier), ...(my || {}) };
    },

    // --- Name lookups (convenience) ---
    heroByName(name) {
      _buildHeroIndex();
      return _heroByName.get(name.toLowerCase()) || null;
    },

    heroIdByName(name) {
      const h = D.heroByName(name);
      return h?.id || null;
    },

    tierByName(name) {
      _buildTierIndex();
      return _tierByName.get(name.toLowerCase()) || null;
    },

    // --- Lists ---
    allHeroes() {
      return window.DATA_HEROES || [];
    },

    myRoster() {
      _buildMyHeroIndex();
      const result = [];
      for (const my of (window.DATA_MY_ROSTER || [])) {
        const full = D.heroFull(my.id);
        if (full) result.push(full);
      }
      return result;
    },

    myRosterRaw() {
      return window.DATA_MY_ROSTER || [];
    },

    teamMembers(teamId) {
      const teams = window.DATA_TEAMS || [];
      const team = teams.find(t => t.id === teamId);
      if (!team) return [];
      return team.members.map(m => {
        const hero = D.hero(m.id);
        return { ...hero, ..._tierSafe(D.tier(m.id)), ...m };
      });
    },

    // --- Role groups ---
    roleGroups(id) {
      return (window.DATA_ROLE_GROUPS || {})[id] || [];
    },

    // --- Artifact by equipped hero ---
    artifactForHero(id) {
      _buildArtifactIndex();
      for (const a of (window.DATA_ARTIFACTS?.owned || [])) {
        if (a.equippedOn === id) return a;
      }
      return null;
    },

    // --- Invalidate caches (call after data changes) ---
    invalidate() {
      _heroById = null;
      _heroByName = null;
      _tierById = null;
      _tierByName = null;
      _myHeroById = null;
      _artifactById = null;
    }
  };
})();
