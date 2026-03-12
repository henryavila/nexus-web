// gear.js — Gear profiles & hero loadouts (simplified)
// Foco: QUAL PERFIL de stats cada herói precisa, não peças individuais
// Updated: 2026-03-12

window.DATA_GEAR = {
  updated: "12/Mar/2026",

  // ==========================================================
  // HERO PROFILES — 11 perfis de prioridade de stats
  // stat_weights: 0-10 (10 = máxima prioridade)
  // ==========================================================
  hero_profiles: [
    {
      id: "dps-crit",
      name: "DPS Crit",
      description: "Basic-attack / crit-proc DPS. Feathers, phantoms, ignore DEF on crit.",
      heroes: ["Nastjenka", "Garett", "Sutha", "Durango", "Felicity", "Divine Ascetic", "Lorentheel", "Philto", "Tonalnan", "Alfie", "Lorarii"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 10, "Crit Damage": 9, HP: 2, "HP%": 2, DEF: 1, "DEF%": 1, Accuracy: 3, Enlightenment: 1, Resistance: 1, "Skill Haste": 2, "ATK Speed": 7 },
      ideal_sets: ["heart-of-the-gambler", "imperial-executioner"],
      notes: "Nastjenka/Sutha: ATK Speed converte em Crit Rate. Durango: 80%+ Crit Rate breakpoint. Garett: Crit Damage > Crit Rate (ult auto-crit). Divine Ascetic: basic attack focused (Battle conta como basic). Lorentheel/Philto: Rally burst. Tonalnan/Alfie: Fire burst."
    },
    {
      id: "dps-skill",
      name: "DPS Skill",
      description: "Skill/ult-focused DPS. Dano vem de skills, nao basic attacks.",
      heroes: ["Ladehlia", "Sintrellia", "Isitarian", "Hochadir", "Lossenia", "Auster", "Vicana", "Jathalea", "Errich", "Sigrid"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 7, "Crit Damage": 6, HP: 2, "HP%": 2, DEF: 1, "DEF%": 1, Accuracy: 5, Enlightenment: 1, Resistance: 1, "Skill Haste": 7, "ATK Speed": 3 },
      ideal_sets: ["cyrils-whisper", "platinum-knight-quality"],
      notes: "Ladehlia/Sintrellia precisam do maior ATK do time. Hochadir/Lossenia/Auster: Accuracy 220+ para Frost debuffs. Vicana/Jathalea: Poison skills. Errich: AoE Fire skills. Sigrid: Ult condicional."
    },
    {
      id: "tank-def",
      name: "Tank DEF",
      description: "Tank principal. Kit escala com DEF (shields, dano, heals).",
      heroes: ["Eurion", "Frurbath", "Isolde", "Garius", "Sagomir"],
      stat_weights: { ATK: 1, "ATK%": 1, "Crit Rate": 1, "Crit Damage": 1, HP: 9, "HP%": 9, DEF: 10, "DEF%": 10, Accuracy: 4, Enlightenment: 1, Resistance: 5, "Skill Haste": 6, "ATK Speed": 1 },
      ideal_sets: ["ancestral-protection", "tundra-tenacity", "radiance-of-the-blue-oak"],
      notes: "Eurion: DEF > HP > Skill Haste > Resistance. Frurbath: DEF > HP > Accuracy > Skill Haste. Isolde: Tank Fire. Garius: Tank/Healer DEF scaling. Sagomir: Tank Radiance backup."
    },
    {
      id: "tank-control",
      name: "Tank Control",
      description: "Frontline que depende de acertar debuffs (freeze, buff strip).",
      heroes: ["Vinyara"],
      stat_weights: { ATK: 1, "ATK%": 1, "Crit Rate": 1, "Crit Damage": 1, HP: 9, "HP%": 9, DEF: 8, "DEF%": 8, Accuracy: 10, Enlightenment: 1, Resistance: 3, "Skill Haste": 6, "ATK Speed": 1 },
      ideal_sets: ["tundra-tenacity", "puppeteers-inspiration"],
      notes: "Accuracy 220+ obrigatorio. Se debuffs missam, Vinyara contribui zero."
    },
    {
      id: "support-healer-hp",
      name: "Support Healer (HP)",
      description: "Healers cujo heal escala com Max HP e/ou Enlightenment.",
      heroes: ["Torrin", "Catherine", "Nathaniel", "Donella"],
      stat_weights: { ATK: 1, "ATK%": 1, "Crit Rate": 1, "Crit Damage": 1, HP: 10, "HP%": 10, DEF: 5, "DEF%": 5, Accuracy: 1, Enlightenment: 9, Resistance: 3, "Skill Haste": 8, "ATK Speed": 1 },
      ideal_sets: ["radiance-of-the-blue-oak", "brotherhood-spirit", "ancestral-protection"],
      notes: "Torrin: HP > Enlightenment > Skill Haste. Catherine: Enlightenment > HP > Skill Haste (2500%+ scaling)."
    },
    {
      id: "support-healer-atk",
      name: "Support Healer (ATK)",
      description: "Healer unico cujo heal escala com ATK. Precisa de Accuracy para debuffs.",
      heroes: ["Voresh"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 3, "Crit Damage": 2, HP: 5, "HP%": 5, DEF: 2, "DEF%": 2, Accuracy: 9, Enlightenment: 1, Resistance: 1, "Skill Haste": 6, "ATK Speed": 3 },
      ideal_sets: ["cyrils-whisper", "puppeteers-inspiration"],
      notes: "Passiva cura 70% ATK por hit. Mais ATK = mais heal. Accuracy 220+ para Buff Prohibition."
    },
    {
      id: "buffer-melee",
      name: "Buffer Melee",
      description: "Buffer melee cujo buff e derivative damage escalam com ATK.",
      heroes: ["Schaltar"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 5, "Crit Damage": 3, HP: 7, "HP%": 7, DEF: 5, "DEF%": 5, Accuracy: 1, Enlightenment: 1, Resistance: 2, "Skill Haste": 4, "ATK Speed": 8 },
      ideal_sets: ["heart-of-the-gambler", "platinum-knight-quality"],
      notes: "ATK > ATK Speed > HP > Crit Rate. Derivative damage e Blessings of Thunder escalam com ATK."
    }
  ],

  // ==========================================================
  // GEAR PLANS — 23 loadouts (herói → perfil + stats in-game)
  // Sem peças individuais — foco no resultado final
  // ==========================================================
  // Stats format: base + all bonuses (gear+affinity+runes+resonance). Totals = base+bonus.
  // dps_index = ATK * (1 + CritR * CritD) — usado para ranking DPS crit.
  gear_plans: [
    // === DPS CRIT (5) ===
    { name: "DPS Crit 1", profile: "dps-crit", hero: "Nastjenka", freq: 9,
      hero_stats: { atk: 4083, critR: 95.8, critD: 254.1, acc: 26, enl: 11, hp: 76611, def: 1424, res: 0, skillHaste: 7, power: 44253, dps_index: 14021, observed: "2026-03-12" } },

    { name: "DPS Crit 2", profile: "dps-crit", hero: "Divine Ascetic", freq: 5,
      hero_stats: { atk: 3928, critR: 105.2, critD: 114.0, acc: 96, enl: 48, hp: 67789, def: 1581, res: 25, skillHaste: 6, power: 41781, dps_index: 8639, observed: "2026-03-12" } },

    { name: "DPS Crit 3", profile: "dps-crit", hero: "Sutha", freq: 3,
      hero_stats: { atk: 3629, critR: 67.9, critD: 150.8, acc: 96, enl: 91, hp: 55943, def: 1509, res: 163, skillHaste: 20, power: 37800, dps_index: 7345, observed: "2026-03-12" } },

    { name: "DPS Crit 4", profile: "dps-crit", hero: "Ladehlia", freq: 4,
      hero_stats: { atk: 3967, critR: 71.3, critD: 145.5, acc: 51, enl: 85, hp: 56508, def: 2617, res: 148, skillHaste: 20, power: 44451, dps_index: 8082, observed: "2026-03-12" } },

    { name: "DPS Crit 5", profile: "dps-crit", hero: "Huberg", freq: 1,
      hero_stats: { atk: 4108, critR: 26.7, critD: 179.8, acc: 32, enl: 39, hp: 48106, def: 1907, res: 114, skillHaste: 7, power: 37655, dps_index: 6080, observed: "2026-03-12" } },

    // === DPS ATK (2) ===
    { name: "DPS ATK 1", profile: "dps-atk", hero: "Garett", freq: 4 },
    // sem screenshot

    { name: "DPS ATK 2", profile: "dps-atk", hero: "Sintrellia", freq: 3,
      hero_stats: { atk: 4705, critR: 29.3, critD: 50.0, acc: 55, enl: 101, hp: 39435, def: 1914, res: 183, skillHaste: 26, power: 35138, observed: "2026-03-12" } },

    // === ATK+ACC (4) ===
    { name: "ATK+ACC 1", profile: "atk-acc", hero: "Lossenia", freq: 4,
      hero_stats: { atk: 5039, critR: 45.1, critD: 90.0, acc: 353, enl: 37, hp: 39824, def: 1937, res: 34, skillHaste: 20, power: 39469, observed: "2026-03-12" } },

    { name: "ATK+ACC 2", profile: "atk-acc", hero: "Voresh", freq: 4,
      hero_stats: { atk: 2872, critR: 57.0, critD: 57.5, acc: 375, enl: 72, hp: 51494, def: 1608, res: 51, skillHaste: 24, power: 38906, observed: "2026-03-12" } },

    { name: "ATK+ACC 3", profile: "atk-acc", hero: "Auster", freq: 3,
      hero_stats: { atk: 5638, critR: 81.6, critD: 114.1, acc: 85, enl: 13, hp: 43319, def: 1475, res: 29, skillHaste: 45, power: 40781, observed: "2026-03-12" } },

    { name: "ATK+ACC 4", profile: "atk-acc", hero: "Hochadir", freq: 3,
      hero_stats: { atk: 5771, critR: 32.5, critD: 82.7, acc: 83, enl: 73, hp: 55282, def: 1331, res: 11, skillHaste: 26, power: 37827, observed: "2026-03-12" } },

    // === ATK+ENLIGHT (1) — Flora removida (sem loadout in-game) ===
    { name: "ATK+Enl", profile: "atk-enlight", hero: "Lothair", freq: 1,
      hero_stats: { atk: 3689, critR: 21.9, critD: 74.6, acc: 0, enl: 233, hp: 99798, def: 1723, res: 16, skillHaste: 0, power: 46697, observed: "2026-03-12" } },

    // === ACC (2) ===
    { name: "ACC 1", profile: "acc", hero: "Tamar", freq: 2,
      hero_stats: { atk: 2148, critR: 27.0, critD: 67.1, acc: 378, enl: 23, hp: 61838, def: 2044, res: 10, skillHaste: 20, power: 40827, observed: "2026-03-12" } },

    { name: "ACC 2", profile: "acc", hero: "Eches", freq: 2,
      hero_stats: { atk: 2012, critR: 50.4, critD: 74.6, acc: 322, enl: 32, hp: 65614, def: 1606, res: 82, skillHaste: 0, power: 35967, observed: "2026-03-12" } },

    // === ENLIGHT (2) ===
    { name: "Enlight 1", profile: "enlight", hero: "Torrin", freq: 10,
      hero_stats: { atk: 2569, critR: 13.7, critD: 72.4, acc: 21, enl: 356, hp: 81053, def: 3086, res: 60, skillHaste: 18, power: 43570, observed: "2026-03-12" } },

    { name: "Enlight 2", profile: "enlight", hero: "Catherine", freq: 4 },
    // sem screenshot

    // === DEF+ACC (Eurion) ===
    { name: "DEF+ACC", profile: "def", hero: "Eurion", freq: 14,
      hero_stats: { atk: 1992, critR: 21.3, critD: 74.4, acc: 67, enl: 79, hp: 63901, def: 4627, res: 36, skillHaste: 13, power: 43460, observed: "2026-03-12" } },

    // === HP+ACC (Lucien) ===
    { name: "HP+ACC", profile: "hp-acc", hero: "Lucien", freq: 2,
      hero_stats: { atk: 2286, critR: 21.4, critD: 115.0, acc: 95, enl: 27, hp: 48369, def: 1633, res: 122, skillHaste: 12, power: 39653, observed: "2026-03-12" } },

    // === HP+ATK+ACC (1) ===
    { name: "HP+ATK+ACC", profile: "hp-atk-acc", hero: "Vinyara", freq: 8,
      hero_stats: { atk: 3613, critR: 37.6, critD: 57.1, acc: 328, enl: 24, hp: 63946, def: 2175, res: 0, skillHaste: 43, power: 38822, observed: "2026-03-12" } },

    // === HP+ENLIGHT (1) ===
    { name: "HP+Enl", profile: "hp-enlight", hero: "Felosia", freq: 3,
      hero_stats: { atk: 2266, critR: 17.3, critD: 73.9, acc: 65, enl: 258, hp: 71437, def: 2869, res: 146, skillHaste: 0, power: 44559, observed: "2026-03-12" } },

    // === HP+DEF+ENLIGHT (1) ===
    { name: "HP+DEF+Enl", profile: "hp-def-enlight", hero: "Acilia", freq: 6,
      hero_stats: { atk: 1948, critR: 21.6, critD: 57.4, acc: 42, enl: 262, hp: 99053, def: 2436, res: 0, skillHaste: 0, power: 37136, observed: "2026-03-12" } },

    // === DEF (1) ===
    { name: "DEF", profile: "def", hero: "Garius", freq: 4,
      hero_stats: { atk: 1896, critR: 21.7, critD: 73.6, acc: 52, enl: 39, hp: 75390, def: 4107, res: 8, skillHaste: 0, power: 32201, observed: "2026-03-12" } }
  ],

  // ==========================================================
  // GEAR GAPS — Prioridades de melhoria de gear (12/Mar/2026)
  // ==========================================================
  gear_gaps: [
    { hero: "Huberg", stat: "Crit Rate", current: 26.7, target: 70, unit: "%",
      impact: "+53% DPS (6080 → 9278)",
      priority: "alta",
      note: "ATK 4108 e CritD 179.8% excelentes — sem CritR, tudo é desperdiçado. Precisa de gloves CritR main + substats CritR." },
    { hero: "Divine Ascetic", stat: "Crit Damage", current: 114.0, target: 200, unit: "%",
      impact: "CritR over-cap (105%), redistribuir para CritD",
      priority: "media",
      note: "CritR 105.2% ultrapassa cap. Trocar peças com CritR excess por CritD quando possível." },
    { hero: "Sutha", stat: "Crit Rate", current: 67.9, target: 80, unit: "%",
      impact: "Abaixo do breakpoint 80%",
      priority: "media",
      note: "Faltam ~12% para breakpoint. ATK Speed converte em CritR (passiva), então runas ATK Speed também ajudam." }
  ]
};
