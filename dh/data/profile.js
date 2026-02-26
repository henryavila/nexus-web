// profile.js — Player profile (unique data only, no duplicated lists)
// Use D.myRoster().filter(h => h.rarity === 'Legendary') for legendary heroes list
// Use D.artifactForHero(id) for artifact assignments

window.DATA_PROFILE = {
  name: "SuperYennefer",
  server: "139-Darkfire",
  status: "Veterano retornando",
  style: "Casual (30-40 min/dia), F2P",
  last_updated: "2026-02-24",
  server_day: 16,

  guild: {
    name: "DragonBros",
    ranking_overall: "A3",
    ranking_events: "Top 2 em vários eventos"
  },

  resonance_level: 100,
  resonance_cap_note: "MAX (todos heróis no nível máximo). Próximo power spike: talentos (cristais)",

  resources: {
    heroes_total: 157,
    legendaries: 36,
    inspirations: 16,
    wyrmarrow: 7,
    dragon_crystal: 0,
    heliolite_dice: 0,
    gold: 13523000,
    master_scrolls: 14,
    adventurer_scrolls: 16,
    scholar_scrolls: 51,
    skill_scrolls: 0,
    artifact_currency: 15,
    artifact_crystals: 43000,
    essence_of_creation: 38014,
    artifacts_legendary: 18,
    artifacts_mythic: 15,
    artifacts_exclusive: 1,
    soul_imprints_remaining: 4,
    day5_chests: 0
  },

  arriving: [],

  banner_progress: {
    lothair: { pulls: 300, pity: 300, status: "obtido", essence_before: 35144, essence_after: 38014, essence_gained: 2870 },
    target_summons_3: { status: "completo", date: "2026-02-24", legendaries: ["Oggok", "Huldork", "Ghul'ende", "Ergander"], epics: ["Zhar'loth"], inspirations: ["Talwer x2", "Journ x2"] }
  },

  skill_scroll_plan: [
    { id: 23080, scrolls: 3, target: "8/8", status: "feito" },
    { id: 20740, scrolls: 8, target: "8/8", status: "feito" },
    { id: 21030, scrolls: 8, target: "8/8", status: "feito" },
    { id: 20060, scrolls: 8, target: "8/8", status: "feito" },
    { id: 20690, scrolls: 8, target: "8/8", status: "feito" },
    { id: 20200, scrolls: 8, target: "8/8", status: "guardar" }
  ],

  artifact_crystal_budget: {
    total: 43000,
    spend_now:     { amount: 35000, percent: 80, note: "Prioridades 1-7. 5 Mythics obtidos" },
    tactical_reserve: { amount: 5000,  percent: 12, note: "Para artefato do Lothair (~19/Fev)" },
    carryover:     { amount: 3000,  percent: 8,  note: "Margem para proxima season" }
  },

  soul_imprints: {
    used: [
      { id: 20660, target: "Mythic" },
      { id: 21560, target: "Mythic" },
      { id: 20770, target: "Mythic — Mark of the Ice Calamity (Lossenia)" }
    ],
    // Imprints available to spend on Mythic artifacts (not yet redeemed).
    // Inspiration already applied to hero is NOT listed here (e.g. Ladehlia 23080 Insp.1 came from duplicate pull, auto-applied).
    remaining: [
      // Poison (2) — guardar para Swamp Toadstool (S2, Durango BiS)
      { id: 21320, element: "Poison", hero: "Talwer" },
      { id: 20290, element: "Poison", hero: "Jathalea" },
      // Necrosis (1) — Lantern of the Dead ou futuro
      { id: 20690, element: "Necrosis", hero: "Torrin" },
      // Lightning (1) — guardar para Tempest War Drum (S2, Sutha BiS)
      { id: 20160, element: "Lightning", hero: "Ivellios" }
    ],
    used_on_mythics_24fev: [
      // Poison (2)
      { id: 20630, hero: "Vicana", artifact: "Statue of the Serpent Deity" },
      { id: 21320, hero: "Talwer", artifact: "Ri'kir Boomerang" },
      // Radiance (5)
      { id: 20300, hero: "Lorentheel", artifact: "Gatekeeper's Staff" },
      { id: 20300, hero: "Lorentheel", artifact: "Witch's Remains" },
      { id: 20300, hero: "Lorentheel", artifact: "Rift Hourglass" },
      { id: 21460, hero: "Donella", artifact: "Aurelium Vest" },
      { id: 22060, hero: "Sagomir", artifact: "Queen's Fan" },
      // Fire (3)
      { id: 21450, hero: "Journ", artifact: "Drugo's Blast Jar" },
      { id: 21450, hero: "Journ", artifact: "Solar King's Horn" },
      { id: 20400, hero: "Errich", artifact: "Whisper of the Consumer" }
    ],
    in_use_on_hero: [
      // Pode resetar para liberar para compra de artefatos
      { id: 23080, element: "Necrosis", hero: "Ladehlia", note: "Em uso na heroina (Insp.1). Pode resetar." }
    ]
  }
};
