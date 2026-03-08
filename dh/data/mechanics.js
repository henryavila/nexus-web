// mechanics.js — All game mechanics data consolidated from .md docs
// Last source update: 2026-03-06

window.DATA_MECHANICS = {

  // === DATA GOVERNANCE ===
  data_governance: {
    canonical_source: "app/data/*.js",
    canonical_player_state: [
      "app/data/profile.js",
      "app/data/my-roster.js",
      "app/data/teams.js",
      "app/data/plan.js",
      "app/data/decisions.js"
    ],
    docs_policy: "docs/ e context/ sao referencia de apoio e podem ficar defasados",
    last_policy_update: "2026-02-20"
  },

  // === SUMMONING SYSTEM ===
  summoning: {
    cost_per_pull: 100,
    currency: "Wyrmarrow",
    rates: {
      legendary: 1.5,
      epic: 18.5,
      rare: 80
    },
    pity: {
      legendary: 70,
      epic: 10,
      banner_exclusive: 300
    },
    pity_carries_between_banners: false,
    banner_types: [
      {
        name: "Selected Summons",
        pool: "~14-16 Legendarios, 2 Premium (featured/rate-up)",
        rotation: "Muda periodicamente (numerados I, II, III...)",
        note: "NAO garante heroi especifico — Premium tem chance maior"
      },
      {
        name: "Prophecy Summons",
        pool: "Muitos herois Premium (~10+)",
        activation: "Via Prophecy Code (pre-gerado, 30 dias validade)",
        note: "Mesmas rates: 1.5% Legendary, 70 pity"
      },
      {
        name: "Banner Exclusivo (300 pulls)",
        cost: 30000,
        note: "Unica forma de GARANTIR heroi especifico. Inacessivel F2P curto prazo"
      }
    ],
    guaranteed_sources: [
      { source: "Bau Selecao Lendario 1 (Dia 5)", hero: "Escolha entre 18", status: "Usado: Lossenia + Durango" },
      { source: "Bau Selecao Lendario 2 (Dia 10)", hero: "Escolha entre 6", status: "Usado: Auster (Ice SS, 17/Fev)" },
      { source: "Divine Ascetic", hero: "Legendary Lightning (gratis)", status: "OBTIDO" },
      { source: "Drizzt (evento D&D)", hero: "Legendary Ice A-tier (gratis)", status: "Dia 6+" }
    ],
    free_dice_sources: [
      "7 dice/dia (fontes diarias)",
      "110 dice da Campanha 15 (Monkey event + Season Journey)",
      "Login diario",
      "Season Journey milestones",
      "Exploracao do mapa",
      "Dungeon first-clear rewards",
      "Daily commissions",
      "Resonance Level: 200-400 Wyrmarrow a cada 10 niveis (~14.600 total ate lv99)"
    ],
    conversions: [
      { from: "100 Wyrmarrow", to: "1 Heliolite Dice" },
      { from: "800 Wyrmarrow", to: "10 Heliolite Dice (first time discount)" }
    ],
    strategy_f2p: [
      "Baus de selecao = fontes mais valiosas",
      "Acumular dice e pullar em ciclos de 70",
      "Priorizar banners onde heroi desejado e Premium",
      "NAO perseguir 300-pull exclusive como F2P",
      "Starlight Stone Dice — gastar livremente (da Epics, sem Legendary)",
      "~400 pulls gratuitos/mes / 70 pity = ~5-6 Legendarios/mes (aleatorios)"
    ],
    source_warning: "Fontes online (HH, AC) dizem 3% e pity 35. O jogo mostra 1.5% e pity 70. Confiar nos dados in-game."
  },

  // === SCHOOLS & ELEMENTS ===
  schools: [
    "Aura", "Burn", "Corrosion", "Dauntless", "Frost", "Ice Blast",
    "Poison", "Rally", "Shadow", "Summon", "Support", "Thunderbolt", "Toxin", "Wild"
  ],

  elements: ["Fire", "Ice", "Lightning", "Poison", "Necrosis", "Radiance"],
  rarities: ["Mythic", "Legendary", "Epic", "Rare", "Common"],

  // === ELEMENTAL AFFINITY ===
  affinities: {
    groups: {
      "Permafrost":   { elements: ["Ice", "Necrosis"] },
      "Ulceration":   { elements: ["Poison", "Fire"] },
      "Resplendence": { elements: ["Lightning", "Radiance"] }
    },
    bonuses: {
      // Dados in-game (screenshots em logs/, 06/Mar/2026)
      permafrost_3:    { atk_percent: 20, hp_percent: 20, acc: 50, res: 50, def: 200, hp: 2000, atk: 200, note: "Permafrost 3+: +20% ATK, +20% HP, ACC 50, RES 50, DEF 200, HP 2000, ATK 200" },
      ulceration_3:    { atk_percent: 20, hp_percent: 20, acc: 50, res: 20, def: 200, hp: 2000, atk: 200, note: "Wildfire (Ulceration) 3+: +20% ATK, +20% HP, ACC 50, RES 20, DEF 200, HP 2000, ATK 200" },
      resplendence_3:  { atk_percent: 20, hp_percent: 20, acc: 50, def: 200, hp: 2000, atk: 200, note: "Resplendence 3+: +20% ATK, +20% HP, ACC 50, DEF 200, HP 2000, ATK 200" },

      permafrost_5:    { elemental_damage_bonus_percent: 20, damage_resistance_percent: 2, note: "Permafrost 5+: +20% Elemental Damage Bonus, +2% Damage Resistance" },
      ulceration_5:    { elemental_damage_bonus_percent: 20, damage_resistance_percent: 2, note: "Wildfire/Ulceration 5+: +20% Elemental Damage Bonus, +2% Damage Resistance" },
      resplendence_5:  { elemental_damage_bonus_percent: 20, damage_resistance_percent: 2, note: "Resplendence 5+: +20% Elemental Damage Bonus, +2% Damage Resistance" }
    },

    // --- AFFINITY EVOLUTION (sistema de upgrade por caminho) ---
    // 3 afinidades x 2 caminhos (ATK e HP) = 6 opcoes. Escolher 4 de 6.
    // Lv 1-10. No max (Lv 10): +20% ATK ou +20% HP.
    evolution: {
      max_level: 10,
      max_bonus_percent: 20,
      slots: 4,    // de 6 opcoes, escolher 4
      total_paths: 6,

      paths: [
        { id: "permafrost_atk",   affinity: "Permafrost",   stat: "ATK", elements: ["Ice", "Necrosis"],      max: "+20% ATK" },
        { id: "permafrost_hp",    affinity: "Permafrost",   stat: "HP",  elements: ["Ice", "Necrosis"],      max: "+20% HP" },
        { id: "ulceration_atk",   affinity: "Ulceration",   stat: "ATK", elements: ["Poison", "Fire"],       max: "+20% ATK" },
        { id: "ulceration_hp",    affinity: "Ulceration",   stat: "HP",  elements: ["Poison", "Fire"],       max: "+20% HP" },
        { id: "resplendence_atk", affinity: "Resplendence", stat: "ATK", elements: ["Lightning", "Radiance"], max: "+20% ATK" },
        { id: "resplendence_hp",  affinity: "Resplendence", stat: "HP",  elements: ["Lightning", "Radiance"], max: "+20% HP" }
      ],

      // Decisao Henry (16/Fev/2026)
      chosen: [
        {
          id: "resplendence_atk",
          priority: 1,
          reason: "Nastjenka (11 times) + Garett (7) + Sutha (7) = 28 DPS team-slots. Core carries ALL Lightning.",
          key_heroes: ["Nastjenka", "Garett", "Sutha", "Schaltar", "Divine Ascetic"]
        },
        {
          id: "permafrost_atk",
          priority: 2,
          reason: "Ladehlia (4) + Hochadir (3) + Sintrellia (3) + Voresh (5, heal=ATK) + Auster futuro. 18+ DPS slots.",
          key_heroes: ["Ladehlia", "Hochadir", "Sintrellia", "Voresh", "Lossenia", "Isitarian", "Auster"]
        },
        {
          id: "permafrost_hp",
          priority: 3,
          reason: "Eurion (9 times, tank puro) + Vinyara (5, tank/shield) + Torrin (6, healer). 20 survival slots.",
          key_heroes: ["Eurion", "Vinyara", "Torrin"]
        },
        {
          id: "ulceration_atk",
          priority: 4,
          reason: "Durango (SS) + Lothair futuro (SS!) + Frurbath (3) + Sigrid (2). Cresce com Lothair.",
          key_heroes: ["Durango", "Lothair", "Frurbath", "Sigrid", "Tonalnan", "Felicity"]
        }
      ],
      skipped: [
        { id: "resplendence_hp", reason: "Herois Resplendence sao DPS (Nastjenka/Garett/Sutha). HP nao ajuda tanto. Catherine/Nathaniel = apenas 3 team-slots." },
        { id: "ulceration_hp",   reason: "So Frurbath (3 times) e Isolde (1) se beneficiam como tanks. Resto e DPS." }
      ],

      strategy_note: "Todos DPS em TODOS os 3 elementos ganham +20% ATK. Tanks/Healers Permafrost (Eurion/Vinyara/Torrin) ganham +20% HP. Melhor dos dois mundos."
    },

    notes: [
      "TRES camadas: (1) bonus base com 3 herois, (2) bonus extra com 5 herois, (3) affinity evolution.",
      "Camada 1 (3 herois, confirmado in-game 06/Mar/2026):",
      "  - Permafrost (Ice+Necrosis): +20% ATK, +20% HP, ACC 50, RES 50, DEF 200, HP 2000, ATK 200",
      "  - Wildfire/Ulceration (Poison+Fire): +20% ATK, +20% HP, ACC 50, RES 20, DEF 200, HP 2000, ATK 200",
      "  - Resplendence (Lightning+Radiance): +20% ATK, +20% HP, ACC 50, DEF 200, HP 2000, ATK 200",
      "Camada 2 (5 herois da mesma afinidade): +20% Elemental Damage Bonus e +2% Damage Resistance",
      "Camada 3: Affinity Evolution — 6 caminhos (3 ATK + 3 HP), escolher 4. Lv 10 max = +20% cada.",
      "3 herois ativam afinidade; 5 herois adicionam bonus extra de dano/mitigacao.",
      "Valores escalam com progressao da conta — atualizar quando mudar."
    ],
    last_updated: "2026-03-06"
  },

  // === SCHOOL BONDS (confirmado in-game Fev/2026) ===
  school_bonds: {
    note: "Dois sistemas separados que STACKAM: Elemental Affinity + School Bond",
    schools: [
      {
        name: "Toxin",
        element: "Poison",
        bond_2: "Poison Pool success rate: 30%",
        bond_3: "Poison Pool success rate: 60%",
        jump: "GRANDE (dobra!)",
        worth_3rd: true
      },
      {
        name: "Wild",
        element: "Fire",
        bond_2: "During Burst, ally Wild dice roll result +2",
        bond_3: "During Burst, ally dice guaranteed max",
        jump: "GRANDE",
        worth_3rd: true
      },
      {
        name: "Frost",
        element: "Ice",
        bond_2: "Frozen lasts 5s",
        bond_3: "Frozen 5s + Inflict Frozen 5s on 1 target at battle start",
        jump: "MEDIO",
        worth_3rd: "DEPENDE"
      },
      {
        name: "Dauntless",
        element: "Lightning",
        bond_2: "Thundercloud has 40% chance coordinated attack",
        bond_3: "Thundercloud has 50% chance coordinated attack",
        jump: "PEQUENO (+10%)",
        worth_3rd: false
      },
      {
        name: "Summon",
        element: "Necrosis",
        bond_2: "Summons Darkflame Phoenix",
        bond_3: "Summons stronger Darkflame Phoenix",
        jump: "???",
        worth_3rd: null
      },
      {
        name: "Rally",
        element: "Radiance",
        bond_2: "Rally allies gain 1 stack at start. Triggers every 30s",
        bond_3: "Triggers every 20s",
        jump: "PEQUENO",
        worth_3rd: false
      },
      {
        name: "Support",
        element: "TODOS (cross-element)",
        bond_2: "Shield 30s: 10% MAX HP",
        bond_3: "Shield 30s: 15% MAX HP",
        jump: "PEQUENO (+5%)",
        worth_3rd: false
      }
    ],
    rules: [
      "Defense NAO existe como school. Sao 7 schools.",
      "Support e CROSS-ELEMENT — Support de qualquer elemento conta junto.",
      "Torrin e Support, NAO Summon — NAO ativa Summon bond com Ladehlia.",
      "Para Summon bond, Ladehlia precisa de outro Summon (Tioh B-tier)."
    ]
  },

  // === COMBAT SYSTEM ===
  combat: {
    type: "RPG em tempo real com formacao de herois",
    team_size: 5,
    auto_battle: true,
    speed_2x: true,
    formation: {
      front: "Tanks/Defensores (absorvem dano)",
      back: "DPS e Supports",
      tip: "Spread out para evitar AoE concentrado"
    },
    skill_types: [
      { name: "Passive", desc: "Trigger automatico em condicoes especificas" },
      { name: "Battle Skills", desc: "Usadas automaticamente, com recharge timer (primeiro uso mais rapido)" },
      { name: "Ultimate", desc: "Recarrega visivelmente, uso manual recomendado. Habilidade mais poderosa" }
    ],
    attributes: [
      { name: "HP", effect: "Vida total" },
      { name: "ATK", effect: "Dano base (maioria dos skills escala com ATK)" },
      { name: "DEF", effect: "Reducao de dano recebido" },
      { name: "Crit Rate", effect: "Chance de acerto critico" },
      { name: "Crit Damage", effect: "Multiplicador do critico" },
      { name: "Accuracy", effect: "Chance de acertar (relevante PvP)" },
      { name: "Attack Speed", effect: "Velocidade de ataque (relevante Dauntless)" },
      { name: "Skill Haste", effect: "Reduz cooldown de skills" }
    ],
    adventurer: {
      occupies_slot: true,
      note: "PC + 4 herois ou 5 herois normais",
      elements: ["Fire", "Ice", "Lightning"],
      element_swap: "Psychicore > Element Power (gratis, a qualquer momento)",
      limitations: ["Nao tem Poison, Necrosis ou Radiance", "Nenhuma tier list inclui o PC"],
      control_skill: "Inimigos mortos geram Energy Dust → AoE + Shield. Funciona mesmo fora do time (exceto Grand Gladiator)"
    },
    tips: [
      "Espalhe herois para evitar AoE",
      "Use ultimates manualmente em momentos estrategicos",
      "Analise info do inimigo ANTES da batalha",
      "Se falhar e sair, recursos sao reembolsados",
      "Troque herois conforme conteudo — resistencia elemental varia"
    ]
  },

  // === GEAR SYSTEM ===
  gear: {
    slots: [
      { name: "Arma (Weapon)", unlock: "Inicio", main_stat: "ATK 335 (Mythic lv1)", set_pool: "weapon_helmet" },
      { name: "Elmo (Helmet)", unlock: "Inicio", main_stat: "Varia", set_pool: "weapon_helmet" },
      { name: "Armadura (Armor/Chest)", unlock: "Inicio", main_stat: "Varia", set_pool: "armor_gloves" },
      { name: "Manopla (Gloves)", unlock: "Inicio", main_stat: "Varia", set_pool: "armor_gloves" },
      { name: "Artifact", unlock: "3* (Lv.50)" },
      { name: "Positive Rune", unlock: "4* (Lv.70)" },
      { name: "Negative Rune", unlock: "5* (Lv.90)" }
    ],
    rarities: "Common → Rare → Epic → Mythic",

    // SUBSTATS — confirmado in-game 2026-03-06 (Mythic Weapon)
    // NAO EXISTEM em gear: ATK Speed, Skill Haste (somente em Runas)
    // Base = roll aleatorio no range. Cada upgrade (+8/+12/+16/+20) adiciona ao sub escolhido.
    // Upgrade amount tem min~max proprio (quase fixo mas min e max variam ligeiramente).
    substats: {
      atk_pct:      { base_min: 2.0, base_max: 5.8,  upgrade_min: 5.0, upgrade_max: 5.2,  unit: "%" },
      hp_pct:       { base_min: 2.0, base_max: 5.8,  upgrade_min: 5.0, upgrade_max: 5.2,  unit: "%" },
      def_pct:      { base_min: 2.0, base_max: 5.8,  upgrade_min: 5.0, upgrade_max: 5.2,  unit: "%" },
      hp_flat:      { base_min: 256, base_max: 744,   upgrade_min: 640, upgrade_max: 666,   unit: "flat" },
      crit_rate:    { base_min: 1.2, base_max: 3.8,   upgrade_min: 3.0, upgrade_max: 3.2,   unit: "%" },
      crit_damage:  { base_min: 2.8, base_max: 7.8,   upgrade_min: 7.0, upgrade_max: 7.2,   unit: "%" },
      accuracy:     { base_min: 4,   base_max: 11,    upgrade_min: 9,   upgrade_max: 10,    unit: "flat" },
      resistance:   { base_min: 4,   base_max: 11,    upgrade_min: 9,   upgrade_max: 10,    unit: "flat" },
      enlightenment:{ base_min: 4,   base_max: 12,    upgrade_min: 10,  upgrade_max: 10,    unit: "flat" },
      // ATK Speed: NAO EXISTE em gear (somente Runas)
      // Skill Haste: NAO EXISTE em gear (somente Runas)
    },

    // MYTHIC 1-PIECE SETS — confirmado in-game 2026-03-06 (S1 Forge)
    // Mythic gear usa sets de 1 peça. Cada slot pool tem sets diferentes.
    mythic_sets_weapon_helmet: [
      { name: "Fearless Challenge", bonus: "+16% damage vs inimigos com Max HP >50% maior que o heroi", type: "DPS" },
      { name: "Chaos Symbiosis", bonus: "+6% ATK por aliado da mesma School presente", type: "DPS" },
      { name: "Magic Crystal Refinement", bonus: "+ATK adicional = 300% da Accuracy atual", type: "DPS nicho" },
      { name: "Monelisse's Teardrop", bonus: "Ao morrer: Immortality 3s + 15% DR 10s (CD 120s)", type: "Defensivo" },
      { name: "Impregnable", bonus: "Buffs ganhos tem 50% chance de serem enhanced + indispellable", type: "Utility" },
      { name: "Sky Code Treaty", bonus: "Ao dar Shield → dispel 1 debuff do alvo (CD 20s)", type: "Utility" }
    ],
    mythic_sets_armor_gloves: [
      { name: "Imposing Presence", bonus: "100% HP → +25% damage dealt", type: "DPS" },
      { name: "Strike the Unprepared", bonus: "+30% damage vs inimigos com Defense Penalty", type: "DPS condicional" },
      { name: "Death Record", bonus: "Ao causar Derivative Damage → marca alvo +20% Deriv. recebido 12s", type: "DPS nicho" },
      { name: "Mark of Austerity", bonus: "A cada 10% HP perdido → +15% ATK Speed", type: "Berserker" },
      { name: "Clean Sweep", bonus: "Quando ult termina de recarregar → dispel ALL debuffs do heroi", type: "Utility" },
      { name: "Ancestral Guidance", bonus: "50% Lifesteal em basic attacks (+50% extra abaixo 25% HP)", type: "Self-sustain" },
      { name: "Schadenfreude", bonus: "Ao aplicar debuff → self-heal 2% Max HP", type: "Tank utility" },
      { name: "Iron Bastion", bonus: "Ao receber Crit → 50% chance -30% Crit Rate do atacante 5s", type: "Defensivo" }
    ],

    s4_sets_note: "Sets S4 (Echoes of War, Whispers of the Order, Oasis Aspiration) NAO existem no S1. Sao multi-piece sets de seasons futuras.",
    s4_sets: [
      { name: "Echoes of War", bonus_2: "+ATK, +Atk Speed", bonus_3: "+Atk Speed, +basic atk dmg on crit", ideal: "Dauntless / basic attackers" },
      { name: "Whispers of the Order", bonus_2: "+ATK, +Skill Haste", bonus_3: "+Ultimate skill damage", ideal: "Casters / skill users" },
      { name: "Oasis Aspiration", bonus_2: "+HP, +Skill Haste", bonus_3: "-Damage taken when HP high", ideal: "Tanks" }
    ],
    stat_priority: [
      { role: "DPS/Carry", stats: "ATK, Crit Rate, Crit Damage", gear: "Arma + sets ofensivos" },
      { role: "Tank", stats: "HP, DEF, Resistance", gear: "Armadura + sets defensivos" },
      { role: "Support/Healer", stats: "HP, Enlightenment, Resistance", gear: "Mix defensivo" },
      { role: "Debuffer/Control", stats: "Accuracy, HP, DEF", gear: "Mix accuracy" }
    ],
    rules: [
      "Troca de gear e GRATUITA",
      "Nao faca upgrade pesado em gear comum — espere Mythic",
      "4 pecas de gear podem ser guardadas entre seasons (Boundless Chest, 1x only)",
      "ATK Speed e Skill Haste NAO existem como substats de gear — somente em Runas",
      "Batch sell gear desnecessario para gold"
    ],
    forge_event: {
      name: "Piece of Treasure",
      description: "Cria 1 Mythic gear. Escolhe: slot, set (1-piece), main stat, 4 substats, 4 upgrades.",
      notes: [
        "Substats: escolhe QUAIS 4 stats, valores sao RANDOM dentro do min-max",
        "Upgrades (+8/+12/+16/+20): escolhe QUAL sub recebe cada upgrade",
        "Sets sao 1-piece only no Mythic",
        "Weapon/Helmet compartilham pool de sets. Armor/Gloves compartilham outro pool."
      ]
    }
  },

  // === GAME MODES — MECANICAS DETALHADAS ===
  game_modes: {

    // ============================================================
    // GEAR DUNGEONS (4 dungeons, cada um dropa tipo de gear diferente)
    // Regra geral: ciclo de skills 18s (exceto H.Ruins 24s), 3 waves, boss na wave 3
    // ============================================================

    grave_of_venom: {
      name: "Grave of Venom",
      type: "Gear Dungeon",
      drops: "Defense gear",
      boss: "Deadly Harpy",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Poison",
      affinity_recomendada: "Permafrost",
      skills: {
        passive: "Shadow Poison — Ao atacar, invoca Poisonous Will-o-Wisps (adds). 60% chance. Boss ganha 1 stack de Damage Reduction (15%) por cada SHIELD ativo nos adds.",
        skill1: "Poisonous Fletching — Dano AoE + da Shield a TODOS os adds. Cada shield quebrado = 3% Max HP dano no boss.",
        skill2: "Harpys Wrath — AoE global no seu time + dispela 1 buff de cada heroi.",
        skill3: "Harpys Breath — Single-target devastador: dash + 3 chutes combo. Mira alvo aleatorio SE boss tem <2 debuffs. Se >=2 debuffs, mira o tank."
      },
      o_que_mata: [
        "Shields nos adds nao quebrados = boss acumula Damage Reduction infinita → dano cai pra zero",
        "Harpys Breath mira DPS/healer se boss tem <2 debuffs = one-shot",
        "Wisps (adds) acumulam se nao morrem = dano crescente"
      ],
      como_vencer: "Quebre shields dos adds (cada shield quebrado = 3% Max HP no boss). Mantenha 2+ debuffs no boss pra Breath mirar o tank. Vinyara ult dispela shields. Voresh Buff Prohibition impede adds de receber shields.",
      counters: ["Dispel shields dos adds (Vinyara, Shook)", "Buff Prohibition (Voresh) = adds NAO recebem shields", "Manter 2+ debuffs no boss (Attack Penalty, Poison)", "AoE pra limpar Wisps (Ladehlia Shadow Demon)"],
      timing_dica: "Use Vinyara ult APOS Skill 1 do boss (que acabou de dar shields pros adds) pra dispelamento maximo."
    },

    grave_of_curse: {
      name: "Grave of Curse",
      type: "Gear Dungeon",
      drops: "HP gear",
      boss: "Blood Prince Xenos",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Necrosis",
      affinity_recomendada: "Resplendence",
      skills: {
        passive: "Blood Gush — Todo dano HP que o boss causa ROUBA HP e REDUZ Max HP permanentemente do alvo. Cada buff no boss = +10% recharge speed; cada debuff = -10%.",
        skill1: "Rage of Blood — Boss se buffa com ATK Up massivo + Accuracy Bonus II. Dano subsequente e devastador se nao dispelado.",
        skill2: "Punishment of Blood — Dano Necrotic single-target. ROUBA 2 buffs do alvo. Dano AMPLIFICADO se alvo tem <2 buffs.",
        skill3: "Vampiric Shield (Ult) — Dano Necrotic AoE. Se seus herois tem <2 buffs: 100% chance de Stun 5s + boss ganha 20% recharge."
      },
      o_que_mata: [
        "Max HP drain da passiva Blood Gush — a cada rotacao, seu time tem MENOS HP maximo. Sem counter = morte inevitavel",
        "Rage of Blood nao dispelado = spike de dano letal",
        "Herois com <2 buffs levam Stun 5s da Ult = time parado = morte",
        "Boss com muitos buffs = recharge acelerado = mais rotacoes = mais drain"
      ],
      como_vencer: "Tamar Buff Prohibition PREVINE Rage of Blood (testado 08/Mar — boss nunca bufou, ACC 300+ necessario). Felosia shields bloqueiam Max HP drain + 30% DR + Control Immunity (impede Stun 5s). Torrin+Eurion = sustain core. Vinyara dispel reativo funciona ate Lv14 mas Tamar prevencao proativa e superior. Voresh falhava por ACC baixa, NAO por resistencia inata do boss.",
      counters: ["Buff Prohibition (Tamar ACC 300+ — MELHOR counter, prevencao > cura. Voresh falha por ACC baixa, NAO resistencia do boss)", "Shields bloqueiam Blood Gush Max HP drain (Felosia INEGOCIAVEL — sem ela time morre)", "Felosia Control Immunity previne Stun 5s (substitui necessidade de 2+ buffs)", "Dispel buffs do boss (Vinyara — funcional mas inferior a Tamar Buff Prohibition)"],
      timing_dica: "Com Tamar: auto-battle funciona (boss nunca buffa). Sem Tamar: Vinyara Ult APOS Rage of Blood, ANTES do ataque — considerar Manual."
    },

    grave_of_rot: {
      name: "Grave of Rot",
      type: "Gear Dungeon",
      drops: "Accuracy gear",
      boss: "Colossal Scavenger",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Poison",
      affinity_recomendada: "Resplendence",
      skills: {
        skill1: "Healing Prohibition AoE — Impede seus healers de curar o time. Precisa ser cleansado imediatamente.",
        skill2: "Stun AoE — Atordoa multiplos herois. Posicionamento importa — espalhe herois pra reduzir alvos.",
        skill3: "Big Hit — Maior dano da rotacao. Use DMG Reduction antes.",
        passive: "Corrosion — Boss aplica stacks de Corrosion nos herois. Stacks altos = one-shot. AoE healing limpa stacks de Corrosion."
      },
      o_que_mata: [
        "Healing Prohibition sem cleanse = time morre por atrito",
        "Stun AoE desarma rotacao de skills = ults atrasados = wipe",
        "Corrosion stacks acumulam e causam morte instantanea",
        "Skill 3 sem mitigacao = wipe"
      ],
      como_vencer: "Cleanse Healing Prohibition imediatamente (Torrin Battle dispela debuffs aliados). Espalhe herois pra minimizar Stun. AoE healing constante limpa Corrosion stacks. DMG Reduction antes do Skill 3.",
      counters: ["Debuff Dispel/Immunity (Torrin dispel + Invisibilidade, Catherine Debuff Immunity AoE)", "AoE Healing constante (limpa Corrosion stacks)", "Espalhar herois (reduz alvos do Stun AoE)", "Shield (Nathaniel AoE Shield) contra Corrosion burst damage"],
      timing_dica: "DMG Reduction ults ANTES do Skill 3 do boss. Isso cobre tambem o Skill 1 do proximo ciclo.",
      insight_2026_03_05: "No Lv18, o limitante principal e threshold de build: summons com crit muito alto (proximo de 100%) + debuffer em ~400 Accuracy para uptime de debuffs. Com stats abaixo disso, o boss chega no endgame e inicia Devour sequencial.",
      composicao_referencia_lv18: "Torrin + Ladehlia + Isitarian + Sintrellia/Zadok + debuffer com ~400 Accuracy"
    },

    heretical_ruins: {
      name: "Heretical Ruins",
      type: "Gear Dungeon",
      drops: "ATK/Crit gear",
      boss: "Dead Phoenix",
      cycle: "24s (skill a cada 6s — ciclo MAIS LONGO dos dungeons)",
      element_boss: "Fire",
      affinity_recomendada: "Resplendence",
      skills: {
        passive: "Control Immunity — Boss IMUNE a todos efeitos de controle.",
        skill1: "Scorch (usado 2x por rotacao!) — Bolas de fogo no alvo atual. SPLASH DAMAGE em TODOS os herois com Burn. Tambem aplica ATK Penalty II 10s.",
        skill2: "Nirvana — Choca todos os Phoenix Eggs. Se pelo menos 1 Nestling nasce: boss ganha Invisibilidade 12s. Se TODOS ovos chocam: Nestlings ganham 30% DMG Reduction. Se NENHUM choca: boss ganha 30% DMG Reduction.",
        skill3: "Fire of Dead Phoenix (Ult) — Dano Fire AoE em TODOS os herois + 2 stacks Burn 12s. Dispela todos debuffs dos Nestlings e da Control Immunity 12s a eles."
      },
      mecanica_nestlings: "Nestlings vivos entram em estado Worshipper: curam boss +1% Max HP/s + dao stack permanente de Total Damage Bonus. Quanto mais tempo vivos, mais forte o boss fica PERMANENTEMENTE.",
      mecanica_invisibilidade: "Boss ganha Invisibilidade 12s apos Nirvana (se pelo menos 1 Nestling nasce). Evitar atacar boss durante Invisibilidade.",
      o_que_mata: [
        "Burn splash do Scorch — se multiplos herois tem Burn, Scorch ataca TODOS = dano AoE cascata",
        "Atacar boss durante Invisibilidade = desperdicio de dano",
        "Nestlings vivos buffam boss permanentemente = apos 2-3 ciclos, boss fica impossivel",
        "Fire of Dead Phoenix AoE + Burn stacks = team wipe"
      ],
      como_vencer: "Debuff Immunity AoE (Catherine) cobre a janela de perigo: Scorch×2→Nirvana→Fire. Burn NAO se aplica = sem splash damage. Mate Nestlings RAPIDO antes do estado Worshipper. NAO ataque boss durante Invisibilidade.",
      counters: ["Debuff Immunity AoE (Catherine — core counter, previne Burn = sem splash)", "Matar Nestlings/Eggs rapido (AoE burst, Nastjenka feathers)", "NAO atacar boss durante Invisibilidade", "ATK Penalty + Shield antes de Fire of Dead Phoenix"],
      timing_dica: "Catherine ult em ~17s do ciclo (apos 2o Scorch) = cobre Nirvana + Fire of Dead Phoenix inteiro. Ciclo 24s = 0s Scorch, 6s Scorch, 12s Nirvana, 18s Fire."
    },

    frost_domain: {
      name: "Frost Domain",
      type: "Gear Dungeon",
      drops: "Gear (varia por season)",
      boss: "Ice Boss (3 waves, boss na wave 3)",
      cycle: "18-24s",
      element_boss: "Ice",
      affinity_recomendada: "Resplendence",
      skills: {
        passive: "Debuff-to-Shield — Quando boss aplica debuff no seu time, boss GANHA shield. Feedback loop: mais debuffs = boss mais tanky.",
        skill1: "Dano padrao + aplica debuffs (alimenta a passiva).",
        skill2: "CC forte + debuffs pesados. Janela critica pra Debuff Immunity.",
        buff_prohibition: "Em intervalos especificos, boss IMPEDE seus herois de receber buffs.",
        thorn_shield: "Boss ganha escudo de espinhos que reflete dano de volta."
      },
      o_que_mata: [
        "Ignorar shield do boss (gerado por debuffs no seu time) = boss fica imortal",
        "Debuffs sem cleanse = feed infinito de shields pro boss",
        "Buff Prohibition deixa time exposto na rotacao seguinte",
        "Gastar ults nas waves 1-2 = chegar no boss sem ults"
      ],
      como_vencer: "Catherine Debuff Immunity previne debuffs = boss nao gera shields. Torrin dispela debuffs ja aplicados. Multi-hit (Garett, Sutha) quebra escudo espinhos rapido. GUARDE ULTS pra wave 3 (boss).",
      counters: ["Debuff Immunity AoE (Catherine — previne debuffs = boss nao gera shields)", "Dispel debuffs aliados (Torrin Battle dispel)", "Multi-hit DPS (Garett, Sutha 5 hits — quebram escudo espinhos rapido)", "Shield Dispel no boss se escudo acumular"],
      timing_dica: "Guarde TODOS os ults pra wave 3. Quando sobrar 1-2 inimigos na wave 2, pare de usar skills. Catherine ult logo apos Skill 2 do boss (janela de debuff)."
    },

    ancient_battlefield: {
      name: "Ancient Battlefield",
      type: "Gear Dungeon",
      drops: "Gear (varia por season)",
      boss: "Boss Lightning com Shield Form",
      cycle: "18s (skill a cada 6s)",
      element_boss: "Lightning",
      affinity_recomendada: "Permafrost",
      skills: {
        shield_form: "Shield Form — Boss entra em modo Shield. Dano recebido e CONVERTIDO em shields, ficando progressivamente mais tanky. Tambem ganha ataques AoE mais fortes.",
        skill2: "Lightning Stun — Dano Lightning no heroi MAIS DISTANTE + Stun 5s. CRITICO: Se Stun FALHA ou e DISPELADO, boss toma dano Lightning e entra em Backfire 10s (janela de vulnerabilidade!).",
        skill3: "Self-Buff — Boss se buffa com ATK Up (perigoso). DISPELE imediatamente.",
        skill4: "Shield Form Attack — Dano massivo durante Shield Form."
      },
      o_que_mata: [
        "Shield Form nao countereado = boss imortal + dano AoE crescente",
        "ATK Up do Skill 3 nao dispelado = ataques subsequentes letais",
        "Stun no heroi mais distante (geralmente healer/support) = rotacao quebrada",
        "Nao explorar janela de Backfire = perder fase de vulnerabilidade"
      ],
      como_vencer: "Voresh Buff Prohibition BLOQUEIA self-buff do boss (Skill 3) = boss nao escala. Resistance alta no heroi mais distante pra resistir Stun do Skill 2. Se Stun falha = boss entra em Backfire 10s = janela de burst. ATK Penalty durante Shield Form.",
      counters: ["Buff Prohibition (Voresh — bloqueia self-buff ramp do boss)", "Resistance alta no heroi mais distante (resist Stun = boss entra em Backfire)", "Buff Dispel (Sigrid, Dane — remove ATK Up do Skill 3)", "ATK Penalty durante Shield Form"],
      timing_dica: "Voresh Buff Prohibition ativo ANTES do Skill 3 do boss. Se Stun do Skill 2 falhar, burst IMEDIATO nos 10s de Backfire."
    },

    // ============================================================
    // PVP & RANKING
    // ============================================================

    temporal_vortex: {
      name: "Temporal Vortex",
      type: "Ranked PvE Boss (daily)",
      boss: "Boss rotativo com regras semanais",
      cycle: "20s (skill a cada 5s)",
      duracao: "20 minutos maximo",
      reward: "Master Pages, Echoes of Clepsydra, Affinity Solvents (baseado em ranking)",
      mecanica: "Luta de ENDURANCE. Dano total em 20 min = seu score. Ranking no servidor = rewards diarios.",
      regras_rotativas: [
        "Fire/Poison: Boss tem Derivative/Poison Damage Penalties",
        "Lightning: Basic attack tem bonus de dano OU boss tem Crit/Lightning Penalties",
        "Ice: Battle skill tem bonus de dano OU boss tem Crit/Ice Penalties"
      ],
      o_que_mata: [
        "Time morre cedo = DPS parado = score baixo",
        "Elemento/school errado pras regras rotativas = dano drasticamente reduzido",
        "Boss escala ao longo dos 20 min = precisa sobreviver"
      ],
      como_vencer: "Sobrevivencia PRIMEIRO — 2+ supports (Torrin+Eurion). Voce faz tanto dano quanto consegue sobreviver. Single-target DPS > AoE neste modo. Ajuste time pras regras rotativas semanais.",
      counters: ["Modulo Torrin+Eurion = sobrevivencia garantida", "Single-target DPS (Nastjenka, Garett) > AoE", "Matchear elemento das regras rotativas", "Defense Penalty gear nos DPS pra boost massivo"]
    },

    arena: {
      name: "Grand Gladiator Arena",
      type: "PvP Assincrono (AI vs AI)",
      mecanica: "Monte lineup defensivo. Ataque lineups de outros jogadores. Se ganhar de alguem com rank maior, TROCA de rank. Se perder, nada acontece.",
      regras: [
        "Herois synced pro nivel do heroi mais alto = fairness",
        "10 Champion Invitations/dia (reset 6h UTC). +10 por 10 Wyrmarrow",
        "Quick Challenge: vitoria instantanea contra rank mais baixo",
        "Todos comecam rank 15.000. Cada 100 ranks melhorados = 10 Wyrmarrow"
      ],
      o_que_mata: [
        "Burst + CC do oponente mata antes de seus supports agirem",
        "Frost meta (Hvitar-based) domina high rank",
        "Comp sem sustain = morre na AI"
      ],
      como_vencer: "Herois 5.0 (Nastjenka, Vinyara, Eurion, Voresh, Hochadir) > mecanicas em early game. Rating individual alto = mais stats. Vinyara drena ult inimigo + Frozen. Voresh strip buffs + Buff Prohibition. Eurion tanque puro. No mid/late game, Dauntless burst toma conta.",
      counters: ["5x herois 5.0 (stats > tudo em early game)", "Vinyara (drena Ult + Frozen + shield aliado fraco)", "Voresh (strip + Buff Prohibition = oponente sem buffs)", "Eurion (Ally Protection todos + anti-morte)"]
    },

    sparkle_tournament: {
      name: "Sparkle Tournament (Guild War)",
      type: "PvP Semanal de Alianca",
      requisito: "Alianca com 20+ membros",
      mecanica: "Dia 1: Setup defensivo. Dia 2: Atacar Sharpteeth Gates (5 jogadores cada). Dia 3: Atacar boss Three Ears. Commander coordena a estrategia.",
      pontuacao: "Ganhar ataque + defesa: 200 pts. Um dos dois: 100 pts. Perder ambos: 0 pts.",
      reward: "Ore milestones: Wyrmarrow, Scholar Scrolls. Ranking individual bonus.",
      como_vencer: "Coordenacao da alianca > composicao individual. Commander precisa deployar membros estrategicamente. Roster diverso e essencial."
    },

    // ============================================================
    // TOWERS & TRIALS
    // ============================================================

    fae_meander: {
      name: "Fae Meander (Fey Meander / Fey Corridor)",
      type: "Torre Auto-Challenge (300 andares)",
      boss_cada: "5-10 andares",
      reward: "Wyrmarrow, Affinity Solvent, Essence of Creation, Heliolite Dice, Skill Scrolls",
      mecanica: "Time escala andares automaticamente. Andares normais: 4 inimigos, CC funciona. Boss floors: mecanicas especificas. Rewards escalam com andares.",
      bosses: {
        ravatrix_decay: {
          name: "Lady of Pristine Decay (Ravatrix)",
          floors: "5, 10, 40, 70, 100, 130, 160",
          mecanica: "Aplica Seed of Corrosion. Precisa de tank + debuff removal + AoE healing.",
          counter: "Frurbath (tank, cleanse, AoE heal, ATK Penalty)"
        },
        ravatrix_green: {
          name: "Lady of Greeneries (Ravatrix)",
          floors: "20, 50, 55, 65, 80, 110, 140, 170",
          mecanica: "Dano Poison MASSIVO com todas skills. #1 causa de wipe na torre.",
          counter: "Debuff Immunity OBRIGATORIA (Catherine AoE). Se previne Poison = dano minimo. Gerenciavel ate andar 140."
        },
        spider_mother: {
          name: "Fungal Spider Mother",
          floors: "30, 60, 90, 120, 150, 180",
          mecanica: "Skill 2 extremamente perigoso. Requer Shield + ATK Penalty.",
          counter: "AoE Shield + ATK Penalty no boss + Frurbath cleanse/heal"
        }
      },
      o_que_mata: [
        "Lady of Greeneries Poison sem Immunity = wipe garantido em andares altos",
        "Herois sub-level em andares 140+ (bosses tem 250 Resistance)",
        "Nao ativar Elemental Affinity (minimo 3 herois da afinidade) = perda grande de stats nos andares altos"
      ],
      como_vencer: "Debuff Immunity e a mecanica MAIS importante da torre. Catherine AoE Debuff Immunity cobre janelas de perigo. 5 herois mesmo elemento pra bonus de afinidade. Use food buffs. Troque DPS por support em andares de sobrevivencia.",
      counters: ["Debuff Immunity AoE (Catherine — essencial)", "5 herois mesmo elemento (bonus afinidade)", "Frurbath (tank + cleanse + AoE heal universal)", "Food buffs antes de andares dificeis"]
    },

    pillar_of_trials: {
      name: "Pillar of Trials",
      type: "Challenge multi-andar (3 waves por andar, boss a cada 10 andares)",
      tipos: [
        { name: "Pillar of Light", element: "Radiance", boss: "Pillar Giant Spirit: Bright + 2 Radiance adds", counter: "Rally heroes burst AoE. Frost debuffs." },
        { name: "Pillar of Taint", element: "Poison", boss: "Pillar Giant Spirit: Tainted + 2 Poison adds", counter: "Poison AoE DoT. Thunderbolt Electrocution." },
        { name: "Pillar of Dark", element: "Necrosis", boss: "Pillar Giant Spirit: Dark + 2 Necrosis adds", counter: "Crowd control + sinergias coordenadas." }
      ],
      o_que_mata: [
        "Usar herois CC em boss floors (bosses IMUNES a controle) = slot desperdicado",
        "Sub-gear — andar 60+ tem 250 Resistance, herois debuff precisam 270+ Accuracy",
        "Falta de AoE = waves normais demoram = time perde HP antes do boss"
      ],
      como_vencer: "TROQUE herois pra boss floors: remova CC e coloque debuffers (Voresh ATK Penalty, Donella Buff Dispel). AoE burst nas waves normais. Boss = debuffs + sustain. Mantenha 270+ Accuracy em debuffers.",
      counters: ["Swap CC→debuffers em boss floors", "AoE burst pra waves normais", "270+ Accuracy em debuffers", "Equip Witchs Remains / Crown of the Unclean em multi-hit ults"]
    },

    // ============================================================
    // FARMING
    // ============================================================

    goblin_lair: {
      name: "Goblin Lair",
      type: "EXP Dungeon (6 waves, sem boss)",
      custo: "10 Energy por run",
      reward: "EXP Potions (melhor ratio XP/stamina do jogo)",
      mecanica: "6 waves de goblins minion. HP baixo, ATK baixo. Speed de clear = eficiencia. 3-star pra desbloquear proximo difficulty. Stages 1-12.",
      o_que_mata: ["Nada — nao e teste de sobrevivencia, e teste de VELOCIDADE"],
      como_vencer: "AoE puro. Herois com grande area de ataque. Rotacao: 2 ults na wave 1, 3 skills restantes na wave 2, repita. Isitarian+Ladehlia sinergia: Shadow Demon = undead summoned → dragon ataque extra. Nastjenka feathers + Sutha phantom = DPS passivo.",
      counters: ["AoE heroes (Ladehlia Shadow Demon, Nastjenka feathers AoE)", "Sinergia Isitarian+Ladehlia (ataques extras por undead summoned)", "Sutha +30% ATK Speed aura (dungeon)", "4x reward multiplier quando disponivel"]
    },

    frey_corridor: {
      name: "Frey Corridor",
      type: "Boss Corridor (progressao de dificuldade)",
      mecanica: "Serie de bosses com dificuldade crescente. Mesmas mecanicas da Fae Meander porem focado em progressao de boss. Cada boss desbloqueado = rewards melhores.",
      como_vencer: "Composicoes especificas por boss. Modulo Torrin+Eurion = sobrevivencia universal. Em floors com Mithrasea/Donella, o diferencial e Manual: priorizar ultis na Mithrasea para impedir ciclo infinito de ressurreicao. Em floors de tank+sustain (ex: 2x Bionphray + Deverick), usar anti-buff dedicado (Tamar) com Accuracy alto. Em floors Fire/Wild (2x Felicity + Caspar), reduzir tempo de luta com controle de ult e foco no backline. Em floors com dive no backline (ex: Lothair), pivotar para Felosia e manter food Ice para segurar ate o fim.",
      counters: ["Modulo sobrevivencia Torrin+Eurion", "DPS de boss: Ladehlia+Sintrellia (Shadow Demon clone)", "Manual em lutas de suporte-duro (focar Mithrasea)", "Anti-buff (Tamar) contra comp de sustain/buff", "Comp Fire/Wild: priorizar Caspar/Felicity e encurtar a luta", "Anti-dive: Felosia (shield+DR+Control Immunity)", "No S1, sem lock persistente de alvo: reposicionar foco a cada janela de ult", "Ajustar time por boss especifico"]
    },

    // ============================================================
    // OUTROS MODOS
    // ============================================================

    adventure_mode: {
      name: "Adventure Mode (Historia Principal)",
      type: "Open-world PvE",
      priority: "#1 — desbloqueia todos os outros modos",
      desc: "Exploracao open-world dividida em shards/regioes. Side quests, puzzles, NPCs.",
      s4_map: "Sea of the Dead (novo mapa sandbox)",
      como_vencer: "Avance ate o cap atual. Thief lockpicking = loot extra. Explore baus escondidos. Complete side quests pra XP/recursos."
    },

    elemental_dungeons: {
      name: "Elemental Dungeons",
      type: "Material Farming",
      reward: "Materiais de evolucao",
      priority: "Alta",
      auto: true,
      como_vencer: "Auto-battle + 2x speed. Troque herois conforme resistencia elemental do dungeon."
    },

    catacombs: {
      name: "Catacombs",
      type: "Gear Farming",
      reward: "Gear drops",
      priority: "Media",
      auto: true,
      como_vencer: "Auto-battle. Foque em dungeons de gear sets que voce precisa."
    },

    ancestral_ruins: {
      name: "Ancestral Ruins (Reborn)",
      type: "Roguelike",
      desc: "Path selection → pick a card buff apos cada batalha. Herois rotativos gratis semanalmente.",
      como_vencer: "Bom pra testar herois que voce nao tem. Priorize buffs de dano nos cards. AoE > single-target."
    },

    infinite_challenge: {
      name: "Infinite Challenge (Reborn)",
      type: "Roguelike puro",
      desc: "Testa conhecimento de mecanicas. Skill-based.",
      como_vencer: "Conheca as mecanicas dos bosses. Adapte composicao a cada wave."
    },

    expedition_mode: {
      name: "Expedition Mode (Reborn)",
      type: "Guild/Team optimization",
      desc: "Foco em otimizacao de guild/time. Todos herois podem brilhar.",
      como_vencer: "Roster diverso importa. Herois de nicho ganham valor aqui."
    }
  },

  // === GAME MODES — EVENTOS ===
  game_events: [
    {
      name: "Season Journey",
      desc: "Chapters com rewards progressivos. Completa-se jogando normalmente"
    },
    {
      name: "Thunder Rumble",
      desc: "Colete Turbid Bells → troque por itens valiosos"
    },
    {
      name: "D&D Collaboration",
      desc: "Drizzt Do'Urden, Guenhwyvar, Errtu the Balor. Comeca dia 6+",
      note: "Drizzt e gratuito — nao gaste summons nele"
    },
    {
      name: "Adventure Team",
      desc: "Squad de 5 jogadores. 3.000 Wyrmarrow bonus por membro (Res Level 79)",
      note: "Veterano no squad = 1 Legendary Equipment Chest por membro"
    }
  ],

  // === RESONANCE LEVEL ===
  resonance: {
    concept: "Toda XP vai para pool unico da conta. Quando sobe, TODOS os herois sobem junto.",
    key_points: [
      "Heroi novo adquirido = imediatamente no Resonance Level atual",
      "Sem necessidade de farmar XP individual",
      "Foco em composicao e sinergia, nao grind de level"
    ],
    breakthrough: {
      frequency: "A cada 10 niveis",
      bonuses: ["Reducao de velocidade de ultimate inimigo", "Aumento de dano dos aliados"]
    },
    // CAPTAIN AURA — confirmado 06/Mar/2026: NAO stacka!
    // Apenas a aura do capitao e ativa. Herois com aura que NAO sao capitao NAO contribuem.
    // Escolha de aura: +24% ATK > +24% Crit DMG quando <3/5 herois tem crit alto.
    captain_aura: {
      stacks: false,
      note: "So 1 aura ativa — a do capitao escolhido. Demais herois com aura NAO contribuem.",
      tip: "+24% ATK e a escolha mais segura (amplifica tudo). +24% Crit DMG so compensa se maioria do time tem crit ~100%.",
      last_updated: "2026-03-06"
    },

    milestones: [
      { level: 20, unlock: "Recompensas de pre-registro" },
      { level: 30, unlock: "Captain Skill / Enhanced Skill (2*)" },
      { level: 50, unlock: "Artifact slot (3*)" },
      { level: 70, unlock: "Positive Rune slot (4*)" },
      { level: 79, unlock: "Adventure Team rewards (3.000 Wyrmarrow)" },
      { level: 90, unlock: "Negative Rune slot (5*)" },
      { level: 100, unlock: "Level maximo (Rank 5)" }
    ],
    farming: [
      "Goblin Dungeon: melhor ratio XP/stamina",
      "Adventure Mode: sempre avance ate o cap primeiro",
      "Daily stamina refills: 150 gems cada (primeiros 2)",
      "4x reward multiplier quando disponivel em dungeons"
    ]
  },

  // === CHEST SELECTION ===
  chests: {
    day5: {
      name: "Legendary Hero Option Chest I",
      total_heroes: 18,
      decisions: "Usados: Lossenia (Ice S) + Durango (Poison SS). Sintrellia obtida de outra fonte.",
      heroes: [
        { name: "Tharivol", element: "Lightning", ac_tier: "A", hh: "3.7", has: false },
        { name: "Errich", element: "Fire", ac_tier: "A", hh: "3.6", has: true },
        { name: "Rhash", element: "Fire", ac_tier: "SS", hh: "3.6", has: false },
        { name: "Caspar", element: "Fire", ac_tier: "S", hh: "4.1", has: false },
        { name: "Lossenia", element: "Ice", ac_tier: "S", hh: "4.0", has: true, source: "bau" },
        { name: "Hochadir", element: "Ice", ac_tier: "S", hh: "3.8", has: true },
        { name: "Garett", element: "Lightning", ac_tier: null, hh: "4.2", has: true, source: "bau aleatorio" },
        { name: "Sutha", element: "Lightning", ac_tier: "A", hh: "3.8", has: true },
        { name: "Divine Ascetic", element: "Lightning", ac_tier: "NEW", hh: null, has: true, source: "evento" },
        { name: "Jathalea", element: "Poison", ac_tier: "A", hh: "3.6", has: true },
        { name: "Vicana", element: "Poison", ac_tier: "S", hh: "3.4", has: true },
        { name: "Durango", element: "Poison", ac_tier: "SS", hh: "4.3", has: true, source: "bau" },
        { name: "Irzillas", element: "Necrosis", ac_tier: "A", hh: "3.6", has: false },
        { name: "Ladehlia", element: "Necrosis", ac_tier: "SS", hh: null, has: true },
        { name: "Sintrellia", element: "Necrosis", ac_tier: "S", hh: null, has: true, source: "outra fonte" },
        { name: "Lorentheel", element: "Radiance", ac_tier: "S", hh: "4.4", has: true, source: "banner x4" },
        { name: "Huberg", element: "Radiance", ac_tier: "S", hh: "4.0", has: false },
        { name: "Alfie", element: "Fire", ac_tier: "S", hh: "2.9", has: true, rarity: "Epic" }
      ]
    },
    day10: {
      name: "Legendary Hero Prime Chest I",
      total_heroes: 6,
      decisions: "Usado: Auster (Ice SS, 17/Fev). Melhor DPS Ice do jogo. 3 Frost = Frozen 5s + auto-Frozen.",
      heroes: [
        { name: "Felicity", element: "Fire", ac_tier: "A", hh: "4.0", has: true },
        { name: "Auster", element: "Ice", ac_tier: "SS", hh: "4.5", has: true, source: "bau" },
        { name: "Premtsa", element: "Necrosis", ac_tier: "SS", hh: "3.9", has: false },
        { name: "Ivellios", element: "Lightning", ac_tier: "B", hh: "4.4", has: true },
        { name: "Twitch", element: "Poison", ac_tier: "S", hh: "3.7", has: false },
        { name: "Philto", element: "Radiance", ac_tier: "S", hh: "4.3", has: true, source: "banner" }
      ]
    },
    legendary_option_II: {
      name: "Legendary Hero Option Chest II",
      total_heroes: 15,
      obtained: "2026-02-24",
      decisions: "Escolhida: Tamar (Lightning SS, DI #27). Anti-buff specialist. 24/Fev.",
      heroes: [
        { name: "Huldork", element: "Fire", ac_tier: "S", hh: "4.2", has: true, source: "Target Summons 3" },
        { name: "Journ", element: "Fire", ac_tier: "B", hh: "2.6", has: true },
        { name: "Eurion", element: "Ice", ac_tier: "A", hh: "4.1", has: true },
        { name: "Vinyara", element: "Ice", ac_tier: "A", hh: "4.0", has: true },
        { name: "Lucien", element: "Ice", ac_tier: "A", hh: "3.9", has: true, source: "banner atual" },
        { name: "Alphanarsy", element: "Ice", ac_tier: "S", hh: "0", has: true },
        { name: "Torrin", element: "Necrosis", ac_tier: "A", hh: "4.1", has: true },
        { name: "Ripekas", element: "Necrosis", ac_tier: "A", hh: "4.3", has: false },
        { name: "Gillian", element: "Radiance", ac_tier: "A", hh: "3.6", has: false },
        { name: "Donella", element: "Radiance", ac_tier: "SS", hh: "3.3", has: true },
        { name: "Sagomir", element: "Radiance", ac_tier: "B", hh: "3.3", has: true },
        { name: "Tamar", element: "Lightning", ac_tier: "SS", hh: "4.0", has: true, source: "bau" },
        { name: "Bionphray", element: "Lightning", ac_tier: "C", hh: "2.8", has: false },
        { name: "Talwer", element: "Poison", ac_tier: "B", hh: "3.2", has: true },
        { name: "Oggok", element: "Poison", ac_tier: "A", hh: "4.0", has: true, source: "Target Summons 3" }
      ]
    },
    epic_s1: { decision: "Isolde (Fire Tank A, HH 3.8). Preenche lacuna de tank Fire.", done: true },
    rare_s1: { decision: "Guardou — ja tem todos os Raros S1. Abre quando lancarem novos.", done: true },
    notes: [
      "Lothair NAO esta em nenhum bau (erro anterior corrigido 2026-02-11)",
      "Bau 1 = 18 opcoes, Bau 2 = 6 opcoes",
      "INSPIRACAO: So Legendarios tem. Duplicata → Inspiration level up.",
      "Legendario novo > Inspiracao no early game (diversidade > profundidade)",
      "Epicos/Raros duplicados dao apenas material — sempre heroi novo"
    ]
  },

  // === COOKING RECIPES ===
  cooking: {
    rules: {
      max_ingredients: 4,
      buff_duration: "600 segundos (10 min)",
      stacking: "NAO acumulam — nova comida substitui buff anterior",
      archaeologist_bonus: "+1 nos dice rolls de culinaria",
      recipes_saved: "Receitas descobertas ficam salvas no Cookbook"
    },
    priority: [
      "Legendary Elemental: +5% Elem Dmg + 10% ATK/DEF (melhor custo-beneficio)",
      "Epic Stat: +10% HP/ATK/DEF + Accuracy (bom para conteudo geral)",
      "Ignorar Common/Rare salvo em emergencia"
    ],
    golden_rule: "Buff elemental (+5%) so beneficia herois daquele elemento. Food ideal = elemento da maioria do time. Buff secundario (ATK/DEF) aplica a todos.",
    legendary_atk: [
      { name: "Flaming Chili Meatball", element: "Fire", effect: "Fire +5%, ATK +10%", ingredients: "Flaming Chili x2 + Boar Meat x2" },
      { name: "Arctic Soothing Soup", element: "Ice", effect: "Cold +5%, ATK +10%", ingredients: "Arctic Cod x2 + Boar Meat x2" },
      { name: "Feast of Thunder", element: "Lightning", effect: "Lightning +5%, ATK +10%", ingredients: "Charged Eel x2 + Beast Meat x2" },
      { name: "Feast of Light", element: "Radiance", effect: "Radiant +5%, ATK +10%", ingredients: "Holy Light Fruit x2 + Beast Meat x2" },
      { name: "Corrupted Meat Pie", element: "Poison", effect: "Poison +5%, ATK +10%", ingredients: "Poisonous Fly Agaric x2 + Beast Meat x2" },
      { name: "Abyssal Crock", element: "Necrosis", effect: "Necrotic +5%, ATK +10%", ingredients: "Zombie Crab Shell x2 + Beast Meat x2" }
    ],
    legendary_def: [
      { name: "Electric & Light Rum", element: "Lightning", effect: "Lightning +5%, DEF +10%", ingredients: "Crackling Fruit x2 + Aquitaine Apple x2" },
      { name: "Poisonous Mushroom Soup", element: "Poison", effect: "Poison +5%, RES +15", ingredients: "Poisonous Fly Agaric x2 + Arbortean Tomato x2" },
      { name: "Northland Assorted Jelly", element: "Ice", effect: "Cold +5%, DEF +10%", ingredients: "High Ridge Ice x2 + Arbortean Tomato x2" },
      { name: "Prayer's Caviar", element: "Radiance", effect: "Radiant +5%, DEF +10%", ingredients: "Glowing Fish Eggs x2 + Bigmouthed Salmon x2" },
      { name: "Ritual of the Dead", element: "Necrosis", effect: "Necrotic +5%, DEF +10%", ingredients: "Zombie Crab Shell x2 + Bigmouthed Salmon x2" }
    ],
    epic: [
      { name: "Deer Horn Pie", effect: "HP +10%, Accuracy +15", ingredients: "Elven Wheat x2 + Arbortean Tomato x1" },
      { name: "Aquitaine Meat Pie", effect: "HP +10%, ATK +5%", ingredients: "Elven Wheat x2 + Boar Meat x1" },
      { name: "Arbortean Beef Stew", effect: "ATK +10%, Accuracy +15", ingredients: "Beast Meat x2 + Arbortean Tomato x1" },
      { name: "Royal Fish Soup", effect: "DEF +10%, Accuracy +15", ingredients: "Bigmouthed Salmon x2 + Arbortean Tomato x1" },
      { name: "Aquitaine Yogurt", effect: "Accuracy +20, RES +20", ingredients: "Aquitaine Apple x2 + Yak Milk x2" },
      { name: "Sweet Fruit Wine", effect: "Accuracy +25", ingredients: "Aquitaine Apple x3" }
    ],
    food_by_activity: [
      { activity: "Bosses (3)", team: "Permafrost", food: "Abyssal Crock", reason: "3/5 Necrosis + ATK" },
      { activity: "Grave Venom", team: "Ulceration Poison", food: "Corrupted Meat Pie", reason: "5/5 Poison" },
      { activity: "Ancient Battlefield", team: "Permafrost", food: "Arctic Soothing Soup", reason: "Permafrost Ice team + ATK" },
      { activity: "Grave Curse", team: "Resplendence", food: "Feast of Thunder", reason: "4/5 Lightning" },
      { activity: "Grave Rot", team: "Resplendence", food: "Feast of Thunder", reason: "4/5 Lightning" },
      { activity: "Heretical Ruins", team: "Resplendence", food: "Feast of Thunder", reason: "4/5 Lightning" },
      { activity: "Temporal Vortex", team: "Resplendence", food: "Feast of Thunder", reason: "PvP burst" },
      { activity: "Goblin Lair", team: "Permafrost Ice", food: "Northland Assorted Jelly", reason: "Auto-farm, DEF > ATK" },
      { activity: "Fae Meander", team: "Permafrost Ice", food: "Arctic Soothing Soup", reason: "DPS checks" },
      { activity: "Pillar of Trials", team: "Permafrost Ice", food: "Arctic Soothing Soup", reason: "Escala dificuldade" },
      { activity: "Arena", team: "Permafrost Ice", food: "Northland Assorted Jelly", reason: "PvP defensiva" }
    ],
    top3_to_stock: [
      { food: "Feast of Thunder", serves: "5 atividades (3 Graves, H.Ruins, T.Vortex)", buy: "Charged Eel (Starfall Plain 2200) + Beast Meat (Ruined Trade Road 1300)" },
      { food: "Corrupted Meat Pie", serves: "3 atividades (Bosses, G.Venom, A.Battlefield)", buy: "Fly Agaric (Near Grave of Course 2200) + Beast Meat (Ruined Trade Road 1300)" },
      { food: "Arctic Soothing Soup + Northland Jelly", serves: "4 atividades (Goblin, Fae, Pillar, Arena)", buy: "Arctic Cod (Crimson Iris Port 2200) + Beast Meat/Tomato" }
    ],
    key_ingredient: "Beast Meat — usado em 8/10 receitas Legendary ATK. Compre SEMPRE no Ruined Trade Road (1300)",
    shopping_route: [
      "Ruined Trade Road → Beast Meat, Boar Meat",
      "Starfall Plain → Charged Eel, Aquitaine Apple",
      "Crimson Iris Port → Arctic Cod, Bigmouthed Salmon",
      "Near Grave of Course → Poisonous Fly Agaric"
    ]
  },

  // === VERSION INFO ===
  version: "Reborn (Jul/2025)",
  current_season: "S1",
  season_name: "Season 1",
  season_start_date: "2026-02-07",
  season_end_date: "2026-04-18",
  season_duration_note: "Seasons Reborn duram ~70 dias. Server 139: 7/Fev — 18/Abr",

  // === SEASON PHASES (3 fases por season, War Order 28 dias cada) ===
  season_phases: [
    {
      id: 1,
      name: "Fase 1 — Fundação",
      start: "2026-02-07",
      end: "2026-02-28",
      days: 21,
      description: "Construir roster, desbloquear modos, subir poder",
      activities: [
        { name: "Clepsydra Torrent", days: "1-6", note: "Rebuild heróis grátis, recuperar materiais gastos", priority: "alta" },
        { name: "Banners Exclusivos", days: "1-14", note: "Banner 2 (Nastjenka DONE), Banner 4 (Lothair Day 14 confirmado)", priority: "alta" },
        { name: "Baús Lendários", days: "5, 10", note: "Dia 5: Lossenia+Durango DONE. Dia 10: Auster DONE", priority: "alta" },
        { name: "Echoes of Otherworld", days: "1-28", note: "80 Heliolite Summons → Legendary garantido", priority: "media" },
        { name: "Main Quest", days: "1-21", note: "Avançar até desbloquear todos os dungeons", priority: "alta" },
        { name: "Walker's Trails (War Order 1)", days: "1-28", note: "Quests diárias/semanais → Travel EXP → battle pass rewards", priority: "media" },
        { name: "Goblin Lair", days: "1+", note: "Farm XP Potions. Speed run com time AoE", priority: "media" },
        { name: "Temporal Vortex", days: "1+", note: "DPS ranking diário. Dificuldade 3 abre Dia 12", priority: "alta" },
        { name: "Gear Farming", days: "5+", note: "Farmar gear sets para DPS e Tank", priority: "media" },
        { name: "Affinity Evolution", days: "1+", note: "Resplendence ATK > Permafrost ATK > Permafrost HP > Ulceration ATK", priority: "media" }
      ]
    },
    {
      id: 2,
      name: "Fase 2 — Progressão",
      start: "2026-02-28",
      end: "2026-03-21",
      days: 21,
      description: "Otimizar times, subir dungeons, ranking competitivo",
      activities: [
        { name: "Champion Emblem", days: "caps 1-5", note: "Desafios individuais de alta dificuldade. Caps abrem sequencialmente", priority: "alta" },
        { name: "World Challenge", days: "caps 1-5", note: "Co-op do servidor. 5 capítulos progressivos", priority: "media" },
        { name: "Dungeon Racing Rankings", days: "progressivo", note: "Rankings de speed run abrem por estágio", priority: "media" },
        { name: "Walker's Trails (War Order 2)", days: "29-56", note: "Segunda fase do battle pass", priority: "media" },
        { name: "Arena Push", days: "contínuo", note: "PvP ranking. Time 5x 5.0 para early advantage", priority: "media" },
        { name: "Temporal Vortex Push", days: "contínuo", note: "Push Sea Deity challenges. Maximizar Echoes de Clepsydra", priority: "alta" },
        { name: "Fae Meander", days: "contínuo", note: "Subir andares (60 = Gumm)", priority: "alta" },
        { name: "Pillar of Trials", days: "contínuo", note: "3 trials → Lyker + Hero's Laurel", priority: "alta" },
        { name: "Gear Otimização", days: "contínuo", note: "Refinar loadouts, subir peças para +20", priority: "media" }
      ]
    },
    {
      id: 3,
      name: "Fase 3 — Endgame",
      start: "2026-03-21",
      end: "2026-04-18",
      days: 28,
      description: "Conteúdo final, maximizar rewards antes do reset",
      activities: [
        { name: "Otherworld Exploration", days: "57+", note: "Novo mapa (Snowland). Quests + Resurgent Dragon boss", priority: "alta" },
        { name: "Walker's Trails (War Order 3)", days: "57-84", note: "Terceira e última fase do battle pass", priority: "media" },
        { name: "Clepsydra Ranking Settlement", days: "final", note: "Rewards baseados no ranking final de Echoes", priority: "alta" },
        { name: "Temporal Vortex Final Push", days: "contínuo", note: "Maximizar Echoes → Pure Sandcores (100:1 conversão)", priority: "alta" },
        { name: "Boundless Chest", days: "antes do reset", note: "Escolher 4 peças de gear para carregar para S2", priority: "alta" },
        { name: "Preparação S2", days: "últimos dias", note: "Planejar pulls S2, verificar Wyrmarrow/Crystal budget", priority: "media" },
        { name: "Fae/Pillar Milestones", days: "contínuo", note: "Último push para milestones (Fae 180, Pillar completo)", priority: "media" },
        { name: "Season Shop", days: "antes do reset", note: "Gastar Pure Sandcores restantes", priority: "media" }
      ]
    }
  ],
  server_type: "Veteran",
  server_note: "Herois S1 disponiveis",
  seasons: ["S1"],

  // === SEASON ROADMAP (visao do futuro — Henry esta 3 seasons atras do jogo global) ===
  season_roadmap: [
    {
      season: "S1", name: "Reborn Launch",
      schools_added: [],
      exclusive_legendaries: ["Flora", "Hvitar", "Lothair", "Nastjenka", "Thelendor", "Lelwanis"],
      henry_targets: ["Nastjenka (DONE)", "Lothair (Day 14 confirmado)"],
      henry_verdict: "Investir. Nastjenka = core, Lothair = Poison SS"
    },
    {
      season: "S2", name: "Misty Sea Voyage",
      schools_added: ["Burn", "Thunderbolt", "Ice Blast"],
      exclusive_legendaries: ["Perkunte", "Beldelle", "Aschetius"],
      key_heroes: [
        { name: "Perkunte", element: "Lightning", school: "Thunderbolt", ac_tier: "S", note: "Thunderbolt god. Precisa time novo do zero" },
        { name: "Aschetius", element: "Fire", school: "Burn", ac_tier: "A", note: "Core Burn. Henry tem Fire fraco" },
        { name: "Beldelle", element: "Ice", school: "Ice Blast", ac_tier: "A", note: "Single target. Henry ja tem Ice forte" }
      ],
      free_at_start: "2 Legendarios gratis + Forthfaring Summons (10 pulls = 1 legendary)",
      henry_verdict: "POUPAR. Nenhum exclusivo sinergiza com times atuais. Usar summons gratis e acumular Wyrmarrow"
    },
    {
      season: "S3", name: "Snarls of Lava",
      schools_added: ["Shadow", "Aura", "Corrosion"],
      exclusive_legendaries: ["Rook", "Ozul", "Aemonleyda"],
      key_heroes: [
        { name: "Rook", element: "Poison", school: "Corrosion", ac_tier: "S", note: "TRUE DAMAGE. Perfeito pro time Poison (Lothair+Durango+Vicana)" },
        { name: "Aemonleyda", element: "Radiance", school: "Aura", ac_tier: "S", note: "Aura enabler. Desbloqueia Lorentheel(Insp3!)+Philto+Donella como time de dano" },
        { name: "Ozul", element: "Necrosis", school: "Shadow", ac_tier: "S", note: "Shadow DPS. Bom mas Necrosis ja esta forte" }
      ],
      free_at_start: "2 Legendarios gratis + Forthfaring Summons + Bigby (D&D event)",
      henry_verdict: "ALL-IN. Rook ou Aemonleyda no banner (300 pulls = 30k Wyrmarrow). Season mais importante"
    },
    {
      season: "S4", name: "Echoes of the Deep",
      schools_added: [],
      exclusive_legendaries: ["Maashtur", "Yfeir"],
      key_heroes: [
        { name: "Maashtur", element: "Lightning", school: "Defense", ac_tier: "?", note: "Tank Lightning. Eurion ja e excelente" },
        { name: "Yfeir", element: "Radiance", school: "Support", ac_tier: "?", note: "Clones, foco PVP" },
        { name: "Calavera", element: "Poison", school: "Support", ac_tier: "?", note: "GRATIS (evento continental). Healer Poison + DEF Up II" },
        { name: "Feliciberta", element: "Ice", school: "Support", ac_tier: "?", note: "Rouba buffs. Boa mas nao essencial" },
        { name: "Shahla", element: "Radiance", school: "Aura", ac_tier: "?", note: "Crit Damage enabler. Otima SE foi de Aemonleyda na S3" }
      ],
      free_at_start: "Calavera (continental reward) + Forthfaring Summons",
      henry_verdict: "Relaxar. Pegar Calavera gratis. Nenhum exclusivo vale 30k"
    }
  ],

  // === RESOURCE ACCUMULATION PLAN (cross-season) ===
  wyrmarrow_plan: {
    s1_spend: 30000,
    s1_note: "Tudo no Lothair. Zerado apos banner",
    s2_target: 30000,
    s2_note: "Acumular via dailies + first-clear dungeon resets. NAO gastar em banner S2",
    s3_spend: 30000,
    s3_note: "ALL-IN no Rook ou Aemonleyda (300 pulls garantido)",
    s4_note: "Sem pressao. Calavera e gratis"
  },

  artifact_refine: {
    max_level: 6,
    mythic_stat_range:     { min: 15, max: 335 },
    legendary_stat_range:  { min: 12, max: 250 },
    note: "Cristais nao transferem bem entre seasons - gastar quase tudo agora"
  }
};
