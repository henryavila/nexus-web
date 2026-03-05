// teams.js — Canonical teams by activity + element-specific teams
// Updated: 2026-03-05 — revisão geral com Lucien + Felosia
// Fonte: https://www.allclash.com/best-teams-in-dragonheir-silent-gods-dungeons-vortex-etc/
window.DATA_TEAMS = [
  // ============================================================
  // ACTIVITY-SPECIFIC TEAMS (AllClash-based where available)
  // ============================================================

  // ─── BOSSES / FREY CORRIDOR (keep — not covered by AllClash) ───
  {
    id: "boss-sintrellia",
    name: "Imortal Ice (Frey/Boss)",
    activity: "Bosses / Frey Corridor",
    affinity: "Permafrost",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 21030, role: "DPS carry", notes: "Tracking arrows em Frosted. Ring of Winter equipado." },
      { id: 20920, role: "Frost enabler", notes: "Frost AoE constante + Mark of Ice Calamity." },
      { id: 20770, role: "Debuff/Shield", notes: "Dispel + Frozen + shield. Aura +40 Accuracy" },
      { id: 20690, role: "Healer", notes: "Dispel + Debuff Immunity + Invisibilidade 10s. Aura +40 Resistance" },
      { id: 20060, role: "Tank", notes: "Ally Protection todos + shield + anti-morte (invencivel 5s)" }
    ],
    bonds: "5 Permafrost | 2 Frost | 2 Support",
    captain: { id: 20920, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Bosses variados / Frey Corridor progressivo",
      perigo: "Bosses escalam em dificuldade. Sem sustain = time morre antes de matar.",
      como_vencer: "Imortalidade (Torrin+Eurion) + Frost chain (Auster+Lossenia). Vinyara fornece dispel/accuracy para estabilidade.",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%) — 4/5 Ice"
    },
    notes: "Time atual para Frey. Foco em DPS sustentado com sobrevivencia infinita.",
    variants: [
      {
        name: "Sintrellia Amplifier (antigo)",
        change: "Time inteiro -> Ladehlia+Lossenia+Sintrellia+Torrin+Eurion",
        status: "tested",
        dps_result: "3.12M",
        bonds: "5 Permafrost (3 Necro + 2 Ice) | 2 Summon | 1 Frost | 2 Support (10% shield)",
        notes: "Sintrellia clona Shadow Demon + buffa ATK undead. Perde DPS Frost direto do Auster."
      },
      {
        name: "Rowena (superada)",
        change: "Lossenia -> Rowena",
        status: "tested",
        dps_result: "3.12M",
        bonds: "5 Permafrost (3 Necro + 2 Ice) | 2 Summon | 1 Frost | 2 Support",
        notes: "Rowena foca menor HP, 800% em Frost. Superada por Lossenia (14/Fev)"
      },
      {
        name: "Lucien anti-CC (novo)",
        change: "Vinyara -> Lucien",
        status: "untested",
        notes: "Use quando controle e drain de ult estao quebrando a run. Lucien abre com shield + Control Immunity global."
      },
      {
        name: "Felosia anti-burst (novo)",
        change: "Vinyara -> Felosia",
        status: "untested",
        notes: "Mais tankiness bruta: shield AoE + Damage Reduction. Melhor quando o problema e morrer cedo, nao buff do boss."
      }
    ]
  },

  // ─── GRAVE OF VENOM (AllClash rewrite) ───
  {
    id: "grave-venom",
    name: "Frost Survival + Nastjenka DPS",
    activity: "Grave of Venom",
    affinity: "Permafrost",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20060, role: "Tank", notes: "Ally Protection todos + anti-morte (invencivel 5s). Core imortalidade" },
      { id: 20690, role: "Healer", notes: "Dispel + Debuff Immunity + Invisibilidade 10s" },
      { id: 20770, role: "Dispel/Tank", notes: "ESSENCIAL: Ult dispela shields dos adds. Cada shield quebrado = 3% Max HP dano no boss" },
      { id: 20920, role: "Frost enabler", notes: "Frost AoE constante. Mark of Ice Calamity (Frost undispellable)" },
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs. Upgrade sobre Rowena (mid-range AllClash). Captain +24% ATK" }
    ],
    bonds: "5 Permafrost | 2 Frost | 2 Support",
    captain: { id: 20740, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Deadly Harpy (Poison)",
      ciclo: "18s",
      perigo: "Boss ganha 15% Damage Reduction por SHIELD ativo nos adds. Shields acumulam = dano cai pra zero. Harpys Breath (3 chutes) mira DPS se boss tem <2 debuffs.",
      como_vencer: "Vinyara ult DISPELA shields dos adds (cada shield quebrado = 3% Max HP no boss). Manter 2+ debuffs no boss = Breath mira Eurion (tank). Frost chain (Lossenia) + Nastjenka feathers = DPS sustentado.",
      food: "Corrupted Meat Pie (Poison +5%, ATK +10%)"
    },
    notes: "Baseado em AllClash Mid-Range com Nastjenka no lugar de Rowena (DPS upgrade). Substituições: Nastjenka+Lossenia+Vinyara+Torrin no lugar de Tharivol+Felosia (não possui Tharivol). Com Felosia ja obtida, falta apenas Tharivol para testar o Endgame AllClash.",
    variants: [
      {
        name: "AllClash Endgame S1",
        change: "Eurion + Ivellios + Tharivol + Nastjenka + Felosia",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Tharivol (Felosia ja possui)."
      },
      {
        name: "AllClash Mid-Range",
        change: "Eurion + Torrin + Vinyara + Lossenia + Rowena",
        status: "reference",
        notes: "Versão acessível do AllClash. Henry usa Nastjenka no lugar de Rowena."
      },
      {
        name: "Ladehlia Summon + Vinyara Dispel (antigo)",
        change: "Time inteiro -> Ladehlia+Sintrellia+Vinyara+Torrin+Eurion",
        status: "tested",
        bonds: "5 Permafrost (3 Necro + 2 Ice) | 2 Summon | 3 Support (15% HP shield)",
        notes: "Time anterior. Shadow Demon AoE + Vinyara dispel shields. Funcionava mas DPS mais lenta que Frost chain."
      },
      {
        name: "Anti-Shield otimizado (Voresh)",
        change: "Lossenia -> Voresh",
        status: "untested",
        notes: "Voresh Buff Prohibition AoE 10s = adds NAO PODEM receber shields. Voresh+Vinyara = combo anti-shield total."
      },
      {
        name: "Sustain hard (Felosia)",
        change: "Nastjenka -> Felosia",
        status: "untested",
        notes: "Fallback para Lv alto quando o time morre antes de estabilizar. Perde burst da Nastjenka, ganha consistencia defensiva."
      },
      {
        name: "Poison core (Lothair+Durango)",
        change: "Time inteiro -> Lothair+Durango+Jathalea+Vinyara+Eurion",
        status: "untested",
        notes: "Poison DoT + Vinyara dispel. Lothair Derivative escala com Poison stacks. Vinyara continua essencial."
      }
    ]
  },

  // ─── GRAVE OF CURSE (AllClash rewrite) ───
  {
    id: "grave-curse",
    name: "Dauntless + Vinyara Dispel + Survival",
    activity: "Grave of Curse",
    affinity: "Misto (3 Permafrost + 2 Resplendence)",
    status: "tested",
    dps_result: "Lv14 CLEAR (19/Fev). Lv15 pendente — DPS morrem por Max HP drain",
    score: null,
    members: [
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs. Captain +24% ATK" },
      { id: 23020, role: "DPS burst", notes: "Kui Crown (Mythic): 10 Obsession start + 15% damage. Battle 5 basic attacks → feathers Nastjenka" },
      { id: 20770, role: "Dispel/Tank", notes: "CHAVE: Ult dispela TODOS os buffs do boss (Rage of Blood ATK Up). Shield absorve Blood Gush → protege Max HP. Passiva auto-resiste Stun. +40 Accuracy aura" },
      { id: 20690, role: "Healer", notes: "Heal + Dispel + Invisibilidade 10s + Debuff Immunity. +40 Resistance aura" },
      { id: 20060, role: "Tank", notes: "Ally Protection todos + anti-morte (invencivel 5s). Core imortalidade" }
    ],
    bonds: "3 Permafrost (Vinyara+Torrin+Eurion → +20% ATK/HP/ACC) | 2 Resplendence | 2 Dauntless | 3 Support (15% shield)",
    captain: { id: 20740, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Blood Prince Xenos (Necrosis)",
      ciclo: "18s",
      perigo: "Blood Gush REDUZ Max HP permanentemente a cada hit. Rage of Blood buffa ATK do boss (×2 por ciclo). Herois com <2 buffs levam Stun 5s da Ult. Luta fica impossivel se Max HP drena demais.",
      como_vencer: "Vinyara Ult DISPELA buffs do boss apos Rage of Blood. Vinyara Shield absorve Blood Gush → previne Max HP drain. Torrin+Eurion = imortalidade. Nastjenka+DA = DPS suficiente com tempo ilimitado. Boss RESISTE Voresh Buff Prohibition — Vinyara dispel e a unica opcao.",
      food: "Feast of Thunder (Lightning +5%, ATK +10%) — 2/5 Lightning"
    },
    notes: "Baseado em AllClash Mid-Range (Vinyara+Voresh+Garius+Torrin) mas com Nastjenka+DA como DPS (superior). Vinyara é SUPERIOR ao Zeffi neste boss (dispel + shield + auto-resist Stun). Substituições: Vinyara+Torrin+DA no lugar de Tharivol+Zeffi (não possui). Quando obtiver Tharivol, considerar trocar DA → Tharivol.",
    variants: [
      {
        name: "AllClash Endgame S1",
        change: "Eurion + Ivellios + Tharivol + Nastjenka + Zeffi",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Tharivol e Zeffi (não possui). Vinyara é superior ao Zeffi neste boss."
      },
      {
        name: "AllClash Mid-Range",
        change: "Sigrid + Vinyara + Voresh + Garius + Torrin",
        status: "reference",
        notes: "Versão acessível do AllClash. Voresh não funciona neste boss (Buff Prohibition resistido)."
      },
      {
        name: "3 DPS Brute Force (Lv12 only)",
        change: "Vinyara -> Sutha",
        status: "tested",
        dps_result: "Lv12 CLEAR, Lv13 MORREU (19/Fev)",
        notes: "3 Resplendence (+20% ATK) | 3 Dauntless (30% Thundercloud). Burst mata antes do drain no Lv12 mas nao aguenta Lv13."
      },
      {
        name: "Donella debuffer + Survival",
        change: "Vinyara -> Donella",
        status: "tested",
        dps_result: "Lv12 boss 38-55% HP",
        notes: "Inconsistente. Donella ATK Penalty II ajuda mas perde DPS."
      },
      {
        name: "Voresh + Survival (boss resiste)",
        change: "Vinyara -> Voresh, DA -> Sutha",
        status: "tested",
        dps_result: "Lv12 boss 65% HP",
        notes: "Voresh Buff Prohibition RESISTIDO pelo boss. Pior resultado. Vinyara dispel > Voresh prohibition neste boss."
      },
      {
        name: "Felosia anti-wipe (novo)",
        change: "DA -> Felosia",
        status: "untested",
        notes: "Para push de nivel quando o time cai antes do fim. Mantem Vinyara+Torrin+Eurion e troca burst por sustain."
      },
      {
        name: "Lucien anti-ult-drain (novo)",
        change: "DA -> Lucien",
        status: "untested",
        notes: "Lucien protege contra controle e Ultimate Energy Reduction no inicio da luta. Variante defensiva de consistencia."
      },
      {
        name: "Full debuffer (sem survival core)",
        change: "Time inteiro -> Ladehlia+Voresh+Horrus+Shook+Nathaniel",
        status: "tested",
        dps_result: "Lv12 boss 45% HP",
        notes: "Debuffs nao sincronizam no auto-battle. Sem Torrin+Eurion = morre rapido."
      }
    ]
  },

  // ─── GRAVE OF ROT (AllClash rewrite) ───
  {
    id: "grave-rot",
    name: "Anti-debuff + Eches anti-heal",
    activity: "Grave of Rot",
    affinity: "Resplendence",
    status: "active",
    dps_result: "Lv18 CLEAR (variante Summon por threshold de stats).",
    score: null,
    members: [
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs 10s. Captain +24% ATK" },
      { id: 23020, role: "DPS burst", notes: "Kui Crown: 10 Obsession start + 15% damage. Battle 5 attacks → feathers Nastjenka" },
      { id: 20420, role: "Cleanse/Immunity", notes: "ESSENCIAL: Debuff Immunity + Cleanse continuo. Counter Healing Prohibition + Corrosion stacks" },
      { id: 20690, role: "Healer/Invisibility", notes: "OBRIGATORIO: Invisibilidade 10s counters Devour. Dispel + Debuff Immunity. Aura +40 Resistance" },
      { id: 20750, role: "Debuff", notes: "Eches. Healing Reduction no Battle + Recharge Penalty no Ult. Passiva reduz dano inimigo em 10% ao aplicar debuff" }
    ],
    bonds: "3 Resplendence | 2 Dauntless | 3 Support (15% shield)",
    captain: { id: 20740, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Colossal Scavenger (Poison)",
      ciclo: "18s",
      perigo: "Skill 1 aplica Healing Prohibition AoE = seus healers nao curam. Skill 2 Stun AoE. Passiva aplica Corrosion stacks = morte instantanea se acumula. Skill 3 = big hit.",
      como_vencer: "Torrin Battle dispela Healing Prohibition + Debuff Immunity previne Corrosion. Torrin Invisibilidade counters Devour (boss nao pode engolir). Acilia reforca imunidade + limpa stacks. Eches aplica Healing Reduction para reduzir sustain do boss.",
      food: "Feast of Thunder (Lightning +5%, ATK +10%) — 3/5 Lightning"
    },
    notes: "Baseado em AllClash Endgame (Nastjenka+Sutha+Acilia) + Mid-Range (Torrin+Catherine). Torrin e OBRIGATORIO (Invisibilidade counters Devour). Aprendizado novo: no Lv18 o fator decisivo foi threshold de status (summons com crit muito alto e debuffer com ~400 Accuracy), nao apenas troca de heroi.",
    variants: [
      {
        name: "Summon Crit+ACC threshold (Lv18 CLEAR)",
        change: "Nastjenka+DA+Acilia+Eches -> Torrin+Ladehlia+Isitarian+Sintrellia/Zadok (+ debuffer ~400 ACC)",
        status: "tested",
        dps_result: "Lv18 CLEAR",
        notes: "Clear veio ao bater thresholds de build: summons com crit proximo de 100% + debuffer com ~400 Accuracy para uptime de debuffs."
      },
      {
        name: "AllClash Endgame S1",
        change: "Tharivol + Ivellios + Nastjenka + Sutha + Acilia",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Tharivol e Ivellios (não possui). SEM Torrin — talvez AllClash não valorize Invisibility counter."
      },
      {
        name: "AllClash Mid-Range",
        change: "Torrin + Rowena + Thia + Lossenia + Catherine",
        status: "reference",
        notes: "Versão acessível do AllClash. Henry usa DPS mais fortes."
      },
      {
        name: "Anti-debuff premium (Garius)",
        change: "DA -> Garius",
        status: "untested",
        notes: "Ganha tank + aura +18% DEF. Perde burst do DA."
      },
      {
        name: "Donella anti-ATK (antigo)",
        change: "Eches -> Donella",
        status: "tested",
        dps_result: "Lv15 travava (~10% HP antes do devour)",
        notes: "Donella tinha baixa consistencia percebida de debuff no boss para este setup."
      },
      {
        name: "Lucien anti-CC (novo)",
        change: "Eches -> Lucien",
        status: "untested",
        notes: "Lucien reduz risco de stun chain e dreno de ult no inicio. Perde Healing Reduction do Eches."
      },
      {
        name: "Felosia anti-burst (novo)",
        change: "Eches -> Felosia",
        status: "untested",
        notes: "Mais sustain bruto para Lv alto: shield AoE + Damage Reduction. Perde Healing Reduction do Eches."
      },
      {
        name: "5 Dauntless puro (superado no lv8)",
        change: "Torrin+Eurion -> Ivellios+Schaltar",
        status: "tested",
        score: 23.5,
        notes: "5 Dauntless (50% Thundercloud). Funcionava ate lv7 mas morria no lv8."
      }
    ]
  },

  // ─── HERETICAL RUINS (AllClash rewrite — Henry possui TODOS) ───
  {
    id: "heretical-ruins",
    name: "Frost + Resplendence (AllClash S1)",
    activity: "Heretical Ruins",
    affinity: "Resplendence",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20250, role: "DPS Lightning", notes: "Lightning burst. Synergy com Resplendence affinity" },
      { id: 20060, role: "Tank", notes: "Ally Protection todos + anti-morte (invencivel 5s)" },
      { id: 20920, role: "Frost enabler/DPS", notes: "Frost AoE constante. Captain +24% ATK. Ice counter Fire boss" },
      { id: 23210, role: "Healer/Immunity", notes: "Debuff Immunity AoE 10s (Ult) + overheal→shield. Anti-Burn essencial" },
      { id: 20210, role: "Tank/Support", notes: "Knockup, heal AoE %DEF, DEF Up passiva stacka 30x. Aura +18% DEF" }
    ],
    bonds: "3 Resplendence (1 Lightning + 2 Radiance) | 2 Ice (Permafrost parcial) | 2 Support",
    captain: { id: 20920, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Dead Phoenix (Fire)",
      ciclo: "24s (0s Scorch, 6s Scorch, 12s Nirvana, 18s Fire of Dead Phoenix)",
      perigo: "Scorch×2 causa SPLASH em todos com Burn = AoE cascata. Nirvana choca Nestlings que curam boss +1% Max HP/s + buff permanente. Boss ganha Invisibilidade apos Nirvana. Fire of Dead Phoenix = AoE + 2 stacks Burn.",
      como_vencer: "Catherine Debuff Immunity AoE cobre janela de Burn splash. 2 Ice heroes = vantagem elemental vs Fire boss. Garius tank frontline + DEF buffs. Eurion ancora o time. NAO atacar boss durante Invisibilidade.",
      food: "Feast of Thunder (Lightning +5%, ATK +10%) — 1/5 Lightning"
    },
    notes: "Henry possui TODOS os heróis do AllClash! Time exato do guia. Lossenia+Eurion = 2 Ice contra Fire boss. Catherine Debuff Immunity essencial vs Burn.",
    variants: [
      {
        name: "AllClash S1/S2 (time atual)",
        change: "Vidimir + Eurion + Lossenia + Catherine + Garius",
        status: "reference",
        notes: "Henry usa exatamente este time."
      },
      {
        name: "Resplendence Dauntless (antigo)",
        change: "Time inteiro -> Nastjenka+Garius+Garett+Sutha+Acilia",
        status: "tested",
        score: 22.5,
        bonds: "5 Resplendence | 3 Dauntless (30% Thundercloud) | 2 Support (10% shield)",
        notes: "Time anterior testado. Acilia melhor que Catherine no Fire boss (mais tanky). 3 Dauntless burst mata Nestlings rapido."
      },
      {
        name: "Catherine (alternativa anterior)",
        change: "Acilia -> Catherine",
        status: "tested",
        score: 22.5,
        notes: "Mais DPS, menos sustain. Use se estiver sobrando HP."
      }
    ]
  },

  // ─── TEMPORAL VORTEX (AllClash rewrite — Fire/Wild é o meta) ───
  {
    id: "temporal-vortex",
    name: "Wild Fire AllClash (Flora obtida!)",
    activity: "Temporal Vortex",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 21970, role: "DPS carry", notes: "Caspar. Wild core. Passiva: dice par → Absurd Charade → ignora DEF crescente. Ult marca alvo → dice >=4 aliado = throwing knives" },
      { id: 20400, role: "DPS AoE + Enabler", notes: "Errich. Meteorite Rain. Passiva +2 dice max (6→8) para TODOS Wild aliados. Insp.2" },
      { id: 23250, role: "Healer/Support", notes: "Adolphus. Shield + sustain. Passiva: shield em alvo com shield = heal 75%. DI #28" },
      { id: 20410, role: "DPS carry + Amplifier", notes: "Flora (DI #1 S1!). Passiva: Wild dice >=5 → familiar ataca (+25%ATK) + ganha Insight. Insight max → dice SEMPRE max. Captain +24% ATK. Dawn Pipe Organ buffa todos ranged" },
      { id: 20810, role: "DPS burst", notes: "Felicity. Recast auto dice >=4 (ate 3x). Ult: +3 beams em dice >=5 (5→8 beams). Ring of Scarlet Sorcerer (+10% skill dmg). Insp.1" }
    ],
    bonds: "5 Ulceration | 5 Wild (dados max em TODA Burst!) | 1 Support",
    captain: { id: 20410, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Boss rotativo (PvE ranked)",
      ciclo: "20s (skill a cada 5s)",
      perigo: "Luta de ENDURANCE (20 min). Boss escala ao longo do tempo. Time que morre cedo = score baixo.",
      como_vencer: "5 Wild = SYNERGY CHAIN: Errich +2 dice → Flora familiar triggers em dice >=5 → Felicity multi-beam (8 beams!) → Caspar throwing knives. Dawn Pipe Organ em Flora buffa ATK de todos ranged. AllClash confirma: Wild e o META para Temporal Vortex.",
      food: "Flaming Chili Meatball (Fire +5%, ATK +10%) — 5/5 Fire"
    },
    notes: "TIME EXATO DO ALLCLASH! Flora obtida 26/Fev completa o time. AllClash diz: 'Wild does so well here and this is the only mode where building wild archetype is really worth it.' Rank #1 observado: 198.9M DPS. Para semanas em que o time morre cedo, usar variantes sustain com Felosia/Lucien sem quebrar o core Wild.",
    variants: [
      {
        name: "Sustain hard (Felosia)",
        change: "Caspar -> Felosia",
        status: "untested",
        notes: "Mantem o core Wild (Flora+Errich+Felicity) e adiciona camada defensiva forte para lutas longas."
      },
      {
        name: "Anti-control (Lucien)",
        change: "Caspar -> Lucien",
        status: "untested",
        notes: "Lucien protege contra controle e dreno de ult no inicio. Boa opcao quando a run quebra por stun/energia."
      },
      {
        name: "Com Tonalnan (6o Wild, se slot flex)",
        change: "Adolphus -> Tonalnan",
        status: "untested",
        notes: "Tonalnan: +5% Crit DMG por dice >=5 aliado + 5 hits = +20% ATK Up burst. Mais DPS, menos sustain. Testar se survival sobra."
      },
      {
        name: "Dauntless + Survival (antigo — testado)",
        change: "Time inteiro -> Nastjenka+Sutha+Garett+Torrin+Eurion",
        status: "tested",
        dps_result: "1.86M",
        bonds: "3 Resplendence | 3 Dauntless | 2 Support (10% shield)",
        notes: "Torrin+Eurion imortalidade + 3 Dauntless burst. Superado pelo meta Fire/Wild."
      },
      {
        name: "Anti-debuff premium",
        change: "Flora -> Acilia",
        status: "untested",
        notes: "Acilia aumenta sobrevivencia em semanas com debuffs/DoT pesados. DPS cai, mas time morre menos."
      }
    ],
    tests: [
      { desc: "Wild Fire COMPLETO (Caspar+Errich+Felicity+Flora+Adolphus)", result: "Pendente", notes: "Time AllClash completo com Flora! Testar ASAP" },
      { desc: "Wild Sustain (Felosia no lugar de Caspar)", result: "Pendente", notes: "Meta: aumentar uptime e dano total em lutas longas" },
      { desc: "Wild Anti-control (Lucien no lugar de Caspar)", result: "Pendente", notes: "Meta: reduzir mortes por controle/ult-drain no inicio" },
      { desc: "Wild Fire sem Flora (Rhash no lugar)", result: "Pendente", notes: "Time anterior sem Flora" },
      { desc: "Dauntless + Survival (Nastjenka+Sutha+Garett+Torrin+Eurion)", result: "1.86M", notes: "Campea anterior" },
      { desc: "Boss Summon (Ladehlia+Rowena+Sintrellia+Torrin+Eurion)", result: "1.54M", notes: "Superado" }
    ]
  },

  // ─── ANCIENT BATTLEFIELD (AllClash rewrite) ───
  {
    id: "ancient-battlefield",
    name: "Immortal Ice + Voresh",
    activity: "Ancient Battlefield",
    affinity: "Permafrost",
    status: "tested",
    dps_result: "Lv8 CLEAR (19/Fev)",
    score: null,
    members: [
      { id: 21030, role: "DPS carry", notes: "Tracking arrows em Frosted. Aplica Frost sozinho via Ult (520% AoE). 50% ignora DEF na Battle. AB 5.0" },
      { id: 20060, role: "Tank", notes: "Ally Protection todos + anti-morte (invencivel 5s). Core imortalidade" },
      { id: 20690, role: "Healer", notes: "Heal + Dispel + Invisibilidade 10s. +40 Resistance aura. Cleanse Stun de aliados → Backfire" },
      { id: 20770, role: "Stun bait (FUNDO)", notes: "Posicao FUNDO. Passiva auto-resiste controle a cada 6s → Stun do boss SEMPRE resistido → Backfire 10s GARANTIDO. +40 Accuracy aura" },
      { id: 22290, role: "Anti-buff/Off-heal", notes: "ESSENCIAL: Buff Prohibition bloqueia self-buff do boss (Skill 3 ATK ramp). Strip buffs. Passiva heal" }
    ],
    bonds: "5 Permafrost (+20% ATK, +20% HP, +20 ACC em TODOS) | 4 Support (15% HP shield)",
    captain: null,
    mechanics: {
      boss: "Boss Lightning com Shield Form",
      ciclo: "18s",
      perigo: "Shield Form converte dano recebido em shields = boss fica imortal. Skill 3 self-buffa ATK (ramp crescente). Skill 2 Stun no heroi mais DISTANTE. Se Stun falha = boss entra em Backfire 10s (vulneravel).",
      como_vencer: "Torrin+Eurion = time nao morre. Voresh Buff Prohibition bloqueia ramp do boss. Vinyara no fundo auto-resiste Stun → Backfire garantido todo ciclo. Auster chipa boss com Frost tracking. Tempo ilimitado = vitoria.",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%) — 4/5 Ice"
    },
    notes: "Baseado em AllClash Endgame (Tharivol+Nastjenka+Vinyara+Acilia+Felosia) mas com estratégia Immortal testada. Substituições: Auster+Eurion+Torrin+Voresh no lugar de Tharivol+Nastjenka+Acilia+Felosia (falta apenas Tharivol). Voresh Buff Prohibition é ESSENCIAL neste boss. Lv8 CLEAR confirmado.",
    variants: [
      {
        name: "AllClash Endgame S1",
        change: "Tharivol + Nastjenka + Vinyara + Acilia + Felosia",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Tharivol (Felosia ja possui)."
      },
      {
        name: "Resplendence Burst + Vinyara (segundo melhor)",
        change: "Time inteiro -> Nastjenka+Garett+Divine Ascetic+Voresh+Vinyara(fundo)",
        status: "tested",
        dps_result: "Lv7 CLEAR, Lv8 boss 45% HP",
        notes: "4 Resplendence (+20% ATK) | 4 Dauntless (40% Thundercloud). DPS massivo mas sem sustain = morre no Lv8."
      },
      {
        name: "Immortal Ice sem Voresh (quase)",
        change: "Voresh -> Lossenia",
        status: "tested",
        dps_result: "Lv8 boss 15% HP",
        notes: "Frost chain completa mas boss rampa sem Voresh → mata eventualmente. 15% = quase vence."
      },
      {
        name: "Atrito seguro (Lv7 max)",
        change: "Time inteiro -> Torrin+Garius+Voresh+Lossenia+Sigrid(fundo)",
        status: "tested",
        dps_result: "Nao passa Lv7 (boss 90% HP)",
        notes: "DPS insuficiente."
      },
      {
        name: "Resplendence Burst + Torrin",
        change: "Time inteiro -> Nastjenka+Garett+Voresh+Torrin+Sutha",
        status: "tested",
        dps_result: "Lv8 boss 70% HP",
        notes: "Nem burst nem sustain suficiente."
      }
    ]
  },

  // ─── TALENT — WILDFIRE (NEW — AllClash) ───
  {
    id: "talent-wildfire",
    name: "Wildfire Talent (sem Rava)",
    activity: "Talent — Wildfire",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20210, role: "Tank/Support", notes: "Knockup, heal AoE %DEF, DEF Up passiva 30x. Aura +18% DEF" },
      { id: 20790, role: "Support/Heal", notes: "Meggan. Sleeper pick — 5.0 em T.Vortex/G.Venom/bosses" },
      { id: 23210, role: "Healer/Immunity", notes: "Catherine. Debuff Immunity AoE 10s + overheal→shield" },
      { id: 20250, role: "DPS Lightning", notes: "Vidimir. Lightning burst" },
      { id: 20650, role: "DPS/Debuff", notes: "Sigrid (substitui Rava — não possui). Ult acerta todos com debuff, Healing Prohibition. Support Poison cross-element" }
    ],
    bonds: "Misto (2 Radiance + 1 Lightning + 1 Poison + 1 Ice) | 2 Support",
    captain: null,
    mechanics: {
      boss: "Talent Wildfire (elemental dungeon)",
      perigo: "Mecânicas de Wildfire exigem composição específica.",
      como_vencer: "AllClash recomenda este core. Garius tank + Catherine immunity + Meggan sustain = sobrevivência. Vidimir+Sigrid = DPS.",
      food: null
    },
    notes: "Baseado em AllClash. Substituição: Sigrid no lugar de Rava (não possui). Alternativas: Thia ou Rowena no lugar de Sigrid. Quando obtiver Rava, trocar Sigrid → Rava. Para runs instáveis, testar Felosia no lugar da Sigrid.",
    variants: [
      {
        name: "AllClash Original",
        change: "Garius + Meggan + Catherine + Vidimir + Rava",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Rava (não possui)."
      },
      {
        name: "Com Thia",
        change: "Sigrid -> Thia",
        status: "untested",
        notes: "Alternativa se Sigrid estiver em outro time."
      },
      {
        name: "Com Rowena",
        change: "Sigrid -> Rowena",
        status: "untested",
        notes: "Rowena traz Frost execution 800%. Cross-element."
      },
      {
        name: "Sustain (Felosia)",
        change: "Sigrid -> Felosia",
        status: "untested",
        notes: "Felosia troca parte do dano por estabilidade defensiva em runs longas."
      }
    ]
  },

  // ─── TALENT — RESPLENDENCE (NEW — AllClash) ───
  {
    id: "talent-resplendence",
    name: "Resplendence Talent (sem Rava)",
    activity: "Talent — Resplendence",
    affinity: "Resplendence",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20690, role: "Healer", notes: "Torrin. Heal + Dispel + Debuff Immunity + Invisibilidade 10s" },
      { id: 20060, role: "Tank", notes: "Eurion. Ally Protection + anti-morte (invencivel 5s)" },
      { id: 20250, role: "DPS Lightning", notes: "Vidimir. Lightning burst" },
      { id: 20770, role: "Tank/Debuffer", notes: "Vinyara. Shield + dispel + drena Ult. +40 Accuracy aura" },
      { id: 23210, role: "Healer/Immunity", notes: "Catherine (substitui Rava — não possui). Debuff Immunity AoE + overheal→shield + heal" }
    ],
    bonds: "3 Resplendence (1 Lightning + 2 Radiance) | 2 Permafrost (2 Ice) | 3 Support",
    captain: null,
    mechanics: {
      boss: "Talent Resplendence (elemental dungeon)",
      perigo: "Mecânicas de Resplendence exigem composição específica.",
      como_vencer: "Torrin+Eurion imortalidade. Vinyara dispel + accuracy. Vidimir DPS. Catherine heal + immunity.",
      food: null
    },
    notes: "Baseado em AllClash. Substituição: Catherine no lugar de Rava (não possui). Catherine adiciona heal + Debuff Immunity. Quando obtiver Rava, trocar Catherine → Rava. Lucien/Felosia entram como fallback defensivo.",
    variants: [
      {
        name: "AllClash Original",
        change: "Torrin + Eurion + Vidimir + Rava + Vinyara",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Rava (não possui)."
      },
      {
        name: "Anti-control (Lucien)",
        change: "Catherine -> Lucien",
        status: "untested",
        notes: "Lucien protege contra controle e dreno de energia no inicio da luta."
      },
      {
        name: "Sustain hard (Felosia)",
        change: "Catherine -> Felosia",
        status: "untested",
        notes: "Felosia oferece Damage Reduction + shield em area para runs mais seguras."
      }
    ]
  },

  // ─── TALENT — PERMAFROST (NEW — AllClash — Henry possui TODOS) ───
  {
    id: "talent-permafrost",
    name: "Permafrost Talent (AllClash exato)",
    activity: "Talent — Permafrost",
    affinity: "Permafrost",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20210, role: "Tank/Support", notes: "Garius. Knockup, heal AoE %DEF, DEF Up passiva 30x. Aura +18% DEF" },
      { id: 20080, role: "DPS Lightning", notes: "Vani. Dauntless Lightning" },
      { id: 20640, role: "Support", notes: "Iola. Nicho" },
      { id: 22350, role: "DPS Lightning", notes: "Nimbus. Melhor opcao depois de Sutha" },
      { id: 20040, role: "Buffer/DPS", notes: "Schaltar. Lightning Shield, Ult buffa todos. 100% Derivative damage" }
    ],
    bonds: "5 Permafrost | Dauntless chain",
    captain: null,
    mechanics: {
      boss: "Talent Permafrost (elemental dungeon)",
      perigo: "Mecânicas de Permafrost exigem composição específica.",
      como_vencer: "AllClash recomenda este core. Garius tank + Schaltar buffer + Dauntless chain (Vani+Nimbus+Schaltar).",
      food: null
    },
    notes: "Henry possui TODOS os heróis do AllClash! Time exato do guia. Se faltar sustain, Lucien pode entrar no lugar da Iola.",
    variants: [
      {
        name: "AllClash Original",
        change: "Garius + Vani + Iola + Nimbus + Schaltar",
        status: "reference",
        notes: "Henry usa exatamente este time."
      },
      {
        name: "Anti-control (Lucien)",
        change: "Iola -> Lucien",
        status: "untested",
        notes: "Lucien melhora consistencia quando o time perde rotacao por controle."
      }
    ]
  },

  // ─── ARENA (keep — not covered by AllClash) ───
  {
    id: "arena",
    name: "Misto - Melhor Rating",
    activity: "Arena (PvP)",
    affinity: "Misto",
    status: "tested",
    dps_result: null,
    score: 24,
    members: [
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs 10s, flash 3 golpes. Aura +24% ATK" },
      { id: 20770, role: "Tank/Debuffer", notes: "Shield, Ult dispela tudo + Frozen 3s + drena Ult Energy. Imune a controle. Aura +40 Accuracy" },
      { id: 20060, role: "Tank puro", notes: "Ally Protection pra todos, shield 600%DEF, 30% DMG Reduction, passiva anti-morte (invencivel 5s)" },
      { id: 22290, role: "Healer/Debuffer", notes: "Cura ao atacar, strip buffs, Buff Prohibition AoE 10s" },
      { id: 20660, role: "DPS burst/crit", notes: "Crit garantido, ATK +200% passiva. Aura +24% Crit DMG" }
    ],
    bonds: "3 Permafrost (Vinyara+Eurion+Voresh) | 3 Support (15% HP shield) | 2 Dauntless",
    captain: null,
    mechanics: {
      boss: "PvP Assincrono (AI vs AI)",
      perigo: "Burst + CC do oponente mata antes dos seus supports agirem. Frost meta domina high rank.",
      como_vencer: "5x herois 5.0 = stats maximos. Vinyara drena ult inimigo + Frozen 3s. Voresh strip buffs + Buff Prohibition AoE. Eurion Ally Protection + anti-morte. Nastjenka burst AoE.",
      food: "Northland Assorted Jelly (Cold +5%, DEF +10%) — PvP defensiva"
    },
    notes: "5x herois 5.0! Rating > mecanica em early game.",
    variants: [
      {
        name: "Anti-debuff premium",
        change: "Voresh -> Acilia",
        status: "untested",
        score: 23.5,
        notes: "Acilia traz cleanse total + Debuff Immunity. Perde Buff Prohibition, mas melhora vs comps de CC pesado."
      },
      {
        name: "Anti-control (Lucien)",
        change: "Garett -> Lucien",
        status: "untested",
        score: 23,
        notes: "Lucien abre com shield + Control Immunity no time. Menos burst, mais estabilidade no opener."
      },
      {
        name: "Ultra sustain (Felosia)",
        change: "Garett -> Felosia",
        status: "untested",
        score: 22.5,
        notes: "Felosia adiciona Damage Reduction + shield em area. Variante para segurar burst inicial."
      },
      {
        name: "Dauntless puro (mid/late game)",
        change: "Vinyara+Eurion+Voresh -> Sutha+Schaltar+Garius",
        status: "theoretical",
        score: 21,
        notes: "5 Resplendence + 4 Dauntless. Quando bonus de afinidade escalar, volta a ser melhor."
      }
    ]
  },

  // ─── GOBLIN LAIR (keep — not covered by AllClash) ───
  {
    id: "goblin-lair",
    name: "Frost Chain ELITE (Full DPS)",
    activity: "Goblin Lair",
    affinity: "Permafrost",
    status: "tested",
    dps_result: "1:11 (Lv12 MAX, 3 estrelas)",
    score: null,
    members: [
      { id: 21030, role: "DPS carry", notes: "32.8% DPS share! Tracking arrows em todos com Frost. Loadout: DPS Skill 2 SUB" },
      { id: 23080, role: "DPS carry", notes: "23.9% DPS. Shadow Demon AoE persistente. Loadout: DPS Skill" },
      { id: 22230, role: "DPS nuker", notes: "18.7% DPS. Detona Frost AoE + estende Frost +5s. Loadout: DPS Crit" },
      { id: 20920, role: "Frost enabler", notes: "13.7% DPS. Tornado Frost + bounce aplicando Frost massivo. Loadout: DPS Crit 2" },
      { id: 20650, role: "DPS AoE condicional", notes: "12.8% DPS. Ult acerta TODOS com debuff. Loadout: DPS Crit 3 SUB" }
    ],
    bonds: "4 Permafrost (3 Ice + 1 Necrosis) | 3 Frost (Frozen 5s + auto-Frozen!) | 1 Summon | 1 Support",
    captain: null,
    mechanics: {
      boss: "Nenhum — 6 waves de goblins minion",
      perigo: "Nenhum. Teste de VELOCIDADE, nao sobrevivencia. Mais rapido = mais EXP Potions.",
      como_vencer: "Frost Chain ELITE: Lossenia aplica Frost AoE massivo → Auster tracking arrows em TODOS com Frost → Hochadir detona Frost AoE → Sigrid Ult em todos debuffados → Ladehlia Shadow Demon = DPS persistente. 4 Frost = Frozen 5s + auto-Frozen!",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%) — 4/5 Ice"
    },
    notes: "MONSTRO! Lv9 → Lv12 (MAX) com 3 estrelas. Full DPS sem tank/healer. Auster domina com 32.8% DPS.",
    variants: [
      {
        name: "Rowena executor (superada)",
        change: "Sigrid -> Rowena",
        status: "tested",
        dps_result: "1:11 (Lv12 MAX, 3 estrelas)",
        notes: "Rowena 11% DPS vs Sigrid 12.8%. Marginalmente mais lento."
      },
      {
        name: "Summon + Dauntless Misto (superado)",
        change: "Time inteiro -> Ladehlia+Nastjenka+Sutha+Isitarian+Frurbath",
        status: "tested",
        dps_result: "1:23",
        notes: "Superado pelo Frost Chain ELITE."
      }
    ]
  },

  // ─── FROST DOMAIN (25/Fev — 4 Dauntless + Acilia, Lv18 CLEAR) ───
  {
    id: "frost-domain",
    name: "4 Dauntless + Acilia Anti-debuff",
    activity: "Frost Domain",
    affinity: "Resplendence",
    status: "tested",
    dps_result: "Lv18 CLEAR",
    score: null,
    members: [
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs 10s. Captain +24% ATK" },
      { id: 21560, role: "DPS burst", notes: "5 hits Ult destroem escudo espinhos rapido" },
      { id: 23020, role: "DPS burst", notes: "Kui Crown: 10 Obsession start + 15% damage" },
      { id: 20660, role: "DPS burst", notes: "Ataques rapidos quebram escudo. Multi-hit constante" },
      { id: 20420, role: "Debuff Immunity + Cleanse", notes: "ESSENCIAL: Debuff Immunity previne debuffs = boss NAO gera shields. Cleanse limpa o que passar." }
    ],
    bonds: "5 Resplendence (4 Lightning + 1 Radiance) | 4 Dauntless | 1 Support",
    captain: { id: 20740, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Ice Boss (3 waves, boss wave 3)",
      ciclo: "18-24s",
      perigo: "Boss ganha SHIELD quando aplica debuffs no seu time (feedback loop). Escudo de espinhos reflete dano. Buff Prohibition impede seus herois de receber buffs.",
      como_vencer: "Acilia Debuff Immunity = boss NAO gera shields. Garett+Sutha multi-hit quebram escudo espinhos RAPIDO. 4 Dauntless = Thundercloud chain constante. DPS race — sem healer, mata antes de precisar.",
      food: "Feast of Thunder (Lightning +5%, ATK +10%) — 4/5 Lightning"
    },
    notes: "Lv18 CLEAR sem Torrin nem Eurion! Puro DPS race + Acilia anti-debuff. 4 Dauntless = Thundercloud chain massivo. Acilia sozinha resolve a mecanica do boss (previne debuffs = sem shields). Sem healer — mata rapido demais pra precisar.",
    variants: [
      {
        name: "Com Torrin (time anterior — seguro)",
        change: "DA -> Torrin",
        status: "tested",
        notes: "3 Dauntless + Acilia+Torrin = double layer protecao. Mais seguro, menos DPS. Usar se time morrer."
      },
      {
        name: "Catherine (mais DPS, menos sustain)",
        change: "Acilia -> Catherine",
        status: "tested",
        notes: "Mais DPS, menos sustain. Catherine tem Debuff Immunity mas menos tanky que Acilia."
      },
      {
        name: "Wild Fire (alternativa)",
        change: "Time inteiro -> Felicity+Tonalnan+Errich+Alfie+Acilia",
        status: "theoretical",
        notes: "5 Ulceration | 4 Wild | Felicity ignora escudos = counter mecanica do boss"
      }
    ]
  },

  // ─── FLAME DOMAIN (25/Fev — Summon + Acilia + Imortalidade) ───
  {
    id: "flame-domain",
    name: "Summon Necrosis + Acilia + Imortalidade",
    activity: "Flame Domain",
    affinity: "Permafrost",
    status: "tested",
    dps_result: "Lv18 CLEAR super facil",
    score: null,
    members: [
      { id: 23080, role: "DPS carry", notes: "Shadow Demon AoE. DPS principal do time" },
      { id: 24780, role: "Amplifier", notes: "Clona Shadow Demon + buffa ATK undead (+10%)" },
      { id: 20420, role: "Debuff Immunity + Cleanse", notes: "Cleanse total + Debuff Immunity 10s + heal continuo" },
      { id: 20690, role: "Healer", notes: "Dispel + Invisibilidade 10s + Debuff Immunity. ESSENCIAL no Lv18" },
      { id: 20060, role: "Tank", notes: "Ally Protection + anti-morte + shield" }
    ],
    bonds: "4 Permafrost (3 Necro + 1 Ice) + 1 Radiance (Acilia) | 2 Summon | 3 Support",
    captain: null,
    mechanics: {
      boss: "Flame Domain (Fire boss)",
      perigo: "Sem Torrin no Lv18 nao aguenta. Com Torrin = super facil.",
      como_vencer: "Ladehlia+Sintrellia = 2 Shadow Demons AoE. Acilia Debuff Immunity previne debuffs. Torrin+Eurion = imortalidade.",
      food: "Abyssal Crock (Necrotic +5%, ATK +10%) — 3/5 Necrosis"
    },
    notes: "Lv17: HP quase intocado, survival sobra tanto que Torrin pode sair por Isitarian (mais DPS). Lv18: Torrin obrigatorio — sem ele nao passa. Com ele = super facil. UPGRADE MASSIVO sobre time anterior (Lv14 apertado com Isitarian no lugar de Acilia).",
    variants: [
      {
        name: "Lv17 sem Torrin (mais DPS)",
        change: "Torrin -> Isitarian",
        status: "tested",
        dps_result: "Lv17 CLEAR com folga",
        notes: "No Lv17 survival sobra — Torrin desnecessario. Isitarian = Dragon Remnant ataques extras = mais DPS."
      },
      {
        name: "Time anterior (sem Acilia — teto Lv14)",
        change: "Acilia -> Isitarian",
        status: "tested",
        dps_result: "Lv14 CLEAR apertado",
        notes: "Isitarian (Epic B, HH 2.3) morre primeiro. HP dos outros abre gap 25%. Lv15 inviavel."
      }
    ]
  },

  // ─── FAE MEANDER (keep — not covered by AllClash) ───
  {
    id: "fae-meander",
    name: "Misto - Melhor Rating",
    activity: "Fae Meander",
    affinity: "Misto (4 Permafrost)",
    status: "tested",
    dps_result: null,
    score: 25,
    members: [
      { id: 22290, role: "Healer/Debuffer", notes: "Cura ao atacar, strip buffs, Buff Prohibition AoE" },
      { id: 22230, role: "DPS nuker AoE", notes: "Detona Frost, estende Frost +5s" },
      { id: 20770, role: "Tank/Debuffer", notes: "Shield pra aliado fraco, Ult dispela tudo + Frozen + drena Ult. Aura +40 Accuracy" },
      { id: 20060, role: "Tank puro", notes: "Ally Protection todos, shield 600%DEF, anti-morte" },
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs 10s. Aura +24% ATK" }
    ],
    bonds: "4 Permafrost | 3 Support (15% HP shield) | 1 Frost | 1 Dauntless",
    captain: null,
    mechanics: {
      boss: "Torre 300 andares — bosses a cada 5-10 andares",
      perigo: "Lady of Greeneries: Poison MASSIVO. Fungal Spider Mother: Skill 2 devastador. Andares 140+: 250 Resistance.",
      como_vencer: "5x herois 5.0 = stats maximos pra auto-climb. Voresh strip buffs. Hochadir AoE burst. Vinyara+Eurion tanque duplo.",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%)"
    },
    notes: "5x herois 5.0! Bonus flat 3=5 permite misto.",
    variants: [
      {
        name: "Anti-debuff (Acilia)",
        change: "Nastjenka -> Acilia",
        status: "untested",
        score: 24,
        notes: "Para andares com Poison/CC pesado."
      },
      {
        name: "Anti-control (Lucien)",
        change: "Nastjenka -> Lucien",
        status: "untested",
        score: 24,
        notes: "Lucien protege contra controle e drain de ult em andares longos."
      },
      {
        name: "Survival extremo (Felosia)",
        change: "Nastjenka -> Felosia",
        status: "untested",
        score: 23.5,
        notes: "Felosia aumenta muito a margem defensiva para auto-climb longo."
      }
    ]
  },

  // ─── PILLAR OF TRIALS (keep — not covered by AllClash) ───
  {
    id: "pillar-trials",
    name: "Misto - Melhor Rating",
    activity: "Pillar of Trials",
    affinity: "Misto (4 Permafrost)",
    status: "tested",
    dps_result: null,
    score: 25,
    members: [
      { id: 22290, role: "Healer/Debuffer", notes: null },
      { id: 22230, role: "DPS nuker AoE", notes: null },
      { id: 20770, role: "Tank/Debuffer", notes: null },
      { id: 20060, role: "Tank puro", notes: null },
      { id: 20740, role: "DPS carry", notes: "Aura +24% ATK" }
    ],
    bonds: "4 Permafrost | 3 Support | 1 Frost | 1 Dauntless",
    captain: null,
    mechanics: {
      boss: "3 waves por andar, boss a cada 10 andares (imune a CC)",
      perigo: "Bosses IMUNES a controle. Andar 60+: 250 Resistance.",
      como_vencer: "Identico ao Fae — 5x 5.0 stats domina. AoE burst limpa waves. Voresh debuff bosses.",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%)"
    },
    notes: "Identico ao Fae. 5x 5.0!",
    variants: [
      {
        name: "Anti-debuff (Acilia)",
        change: "Nastjenka -> Acilia",
        status: "untested",
        score: 24,
        notes: "Para andares com Poison/CC pesado."
      },
      {
        name: "Anti-control (Lucien)",
        change: "Nastjenka -> Lucien",
        status: "untested",
        score: 24,
        notes: "Lucien e bom em andares com stun/controle e drain de energia."
      },
      {
        name: "Survival extremo (Felosia)",
        change: "Nastjenka -> Felosia",
        status: "untested",
        score: 23.5,
        notes: "Shield + Damage Reduction para push seguro de andares altos."
      }
    ]
  },

  // ─── TEMPEST DOMAIN (update progress) ───
  {
    id: "tempest-domain",
    name: "Summon Necrosis + Eches Debuffer",
    activity: "Tempest Domain",
    affinity: "Permafrost/Ulceration",
    status: "tested",
    dps_result: "Lv17 CLEAR facil",
    score: null,
    members: [
      { id: 23080, role: "DPS carry", notes: "Shadow Demon (Insp.1 = 10 stacks iniciais). DPS principal" },
      { id: 24780, role: "Amplifier", notes: "Clona Shadow Demon + buffa ATK undead (+10%)" },
      { id: 20750, role: "Debuffer", notes: "Healing Reduction (Battle) + Recharge Penalty (Ult) + dispel aliados. Passiva: debuffs = -10% damage no boss" },
      { id: 20690, role: "Healer", notes: "Dispel + Invisibilidade 10s + Debuff Immunity. Aura +40 Resistance" },
      { id: 20060, role: "Tank", notes: "Ally Protection + anti-morte + shield" }
    ],
    bonds: "4 Permafrost (3 Necro + 1 Ice) + 1 Ulceration (Eches) | 2 Summon | 3 Support",
    captain: null,
    mechanics: {
      boss: "Tempest Domain (Lightning boss)",
      perigo: "DPS insuficiente pra Lv18 — boss recupera HP e time morre rapido. Survival nao e problema ate Lv17.",
      como_vencer: "Ladehlia Shadow Demon + Sintrellia clone = 2 demons. Eches Healing Reduction reduz regen do boss. Torrin+Eurion = imortalidade.",
      food: "Abyssal Crock (Necrotic +5%, ATK +10%) — 3/5 Necrosis"
    },
    notes: "Lv14 CLEAR (HP full, 38s timer). Lv15 CLEAR (4:13s, HP>50%). Lv17 CLEAR facil. Lv18 time morre rapido — teto de gear/talentos. Boss tem adds que curam — precisa AoE pra matar adds.",
    variants: [
      {
        name: "Poison DoT (FRACASSOU)",
        change: "Ladehlia+Sintrellia+Eches -> Durango+Vicana+Jathalea",
        status: "tested",
        dps_result: "Lv15 MORREU, boss HP cheio",
        notes: "Poison DoT nao mata adds rapido o suficiente. Adds curam boss = HP cheio."
      }
    ]
  },

  // ============================================================
  // ARCHETYPE / CANONICAL TEAMS
  // ============================================================

  // ─── TIME DAUNTLESS (keep — nota sobre Tharivol) ───
  {
    id: "time-dauntless",
    name: "Time Dauntless (Canonico)",
    activity: "Multi (base Dauntless — variantes especializadas por dungeon)",
    affinity: "Resplendence",
    status: "tested",
    dps_result: null,
    score: null,
    members: [
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs em basics aliados 10s. Aura +24% ATK" },
      { id: 20660, role: "DPS burst/crit", notes: "Crit garantido Ult, ATK +200% passiva. Aura +24% Crit DMG" },
      { id: 21560, role: "DPS burst/crit", notes: "5 hits Ult, phantom em crit. Aura +30% ATK Speed" },
      { id: 20040, role: "Buffer/DPS", notes: "Lightning Shield, Ult buffa todos com Lightning Strike em basics" },
      { id: 23020, role: "DPS burst/Amplifier", notes: "Battle 5 ataques (basic attack) -> feathers Nastjenka. Kui Crown: 10 Obsession + 15% damage" }
    ],
    bonds: "5 Resplendence | 5 Dauntless (50% Thundercloud!) | Auras: +24% ATK, +24% Crit DMG, +30% ATK Speed",
    captain: null,
    mechanics: {
      boss: "Multi-uso (base para G.Curse, G.Rot, H.Ruins, T.Vortex, Frost Domain)",
      perigo: "5 DPS sem sustain morre em conteudo dificil. Precisa variante com Torrin+Eurion ou Acilia.",
      como_vencer: "50% Thundercloud = coordinated attacks em METADE dos basics. Nastjenka feathers + DA Battle = proc constante.",
      food: "Feast of Thunder (Lightning +5%, ATK +10%) — 5/5 Lightning"
    },
    notes: "5 Dauntless = 50% Thundercloud! DA Battle conta como basic attack -> ativa feathers Nastjenka. AllClash usa Tharivol no lugar de DA — quando obtiver Tharivol, testar como substituto.",
    variants: [
      {
        name: "Sustain (Acilia anti-debuff)",
        change: "Divine Ascetic -> Acilia",
        status: "untested",
        notes: "Acilia troca burst por estabilidade. Util em conteudo com CC/debuff pesado."
      },
      {
        name: "Sustain hard (Felosia)",
        change: "Divine Ascetic -> Felosia",
        status: "untested",
        notes: "Felosia adiciona shield + Damage Reduction em area. Boa para push quando 5 DPS morrem cedo."
      },
      {
        name: "Sustain (com Garius)",
        change: "Divine Ascetic -> Garius (Tank/Support, Aura +18% DEF)",
        status: "untested",
        notes: "Ganha tank + aura +18% DEF. Perde 50% Thundercloud (4 Dauntless so)."
      },
      {
        name: "Com Tharivol (futuro)",
        change: "Divine Ascetic -> Tharivol",
        status: "reference",
        notes: "AllClash usa Tharivol. Quando obtiver, testar vs DA."
      }
    ]
  },

  // ─── TIME POISON / TOXIN (elemento — Ergander tank, 26/Fev) ───
  {
    id: "time-poison",
    name: "Time Poison (Lothair + Ergander)",
    activity: "Multi — Poison element (G.Venom, bosses com debuff vulnerability)",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 21010, role: "Tank", notes: "Ergander (DI #23, AC S, HH 4.5, 5.0 em 12/13!). Taunt 5s + Immortality 10s + Poison DMG. Drugo's Blast Jar: dano recebido → AoE + -15% enemy DMG" },
      { id: 20670, role: "DPS/Applicator", notes: "Durango (DI #17, AC S). Multi-hit + AoE Poison passiva. Crit ignora 30% DEF. Captain +40 Accuracy. Ri'kir Boomerang" },
      { id: 20200, role: "DPS carry", notes: "Lothair (AC A+, HH 4.6 13/13). Derivative escala por Poison stacks. Statue of the Serpent Deity. Captain +48 Enlightenment" },
      { id: 20630, role: "DPS/Detonator", notes: "Vicana (AC A+). Marca alvo pra explosao, acelera Poison ticks. Insp.1" },
      { id: 20290, role: "DPS AoE", notes: "Jathalea (DI #44, AC B+). Ult 700% AoE + 3 Thorny Poison. Passiva: dispel = 6% Max HP dano. Whisper of the Consumer" }
    ],
    bonds: "5 Ulceration (+20% ATK, +2% HP) | 4 Toxin/Poison (80% Poison Pool!) | 1 Support",
    captain: { id: 20200, skill: "+48 Enlightenment em todas as batalhas" },
    mechanics: {
      boss: "Multi-uso (G.Venom Poison variant, A.Battlefield, bosses com debuff vulnerability)",
      perigo: "Poison DPS e mais lento que burst (DoT precisa de tempo). Boss que cleansa debuffs neutraliza stacks.",
      como_vencer: "Durango abre com Poison AoE, Lothair converte stacks em Derivative massivo e Jathalea pune dispel com Thorny Poison.",
      food: "Corrupted Meat Pie (Poison +5%, ATK +10%) — 5/5 Poison"
    },
    notes: "Ergander UPGRADE sobre Frurbath (26/Fev): DI #23, 5.0 em 12/13, Taunt 5s + Immortality 10s >>> Frurbath (DI #82, healer fraco). Com Drugo's Blast Jar = leva hits, nao morre, dispara AoE + -15% enemy DMG. AllClash confirma Ergander como A+.",
    variants: [
      {
        name: "Frurbath (healer, antigo)",
        change: "Ergander -> Frurbath",
        status: "tested",
        notes: "Versao anterior. Frurbath AoE heal + cleanse. Mais sustain, menos tank. DI #82 — inferior."
      },
      {
        name: "Twitch feedback loop",
        change: "Vicana -> Twitch",
        status: "untested",
        notes: "Twitch (AC A+) + Lothair = feedback loop MULTIPLICATIVO (confirmado no Wager). Mais DPS single-target, menos controle. Queen's Fan (+15% Derivative)."
      },
      {
        name: "Oggok immortality healer",
        change: "Ergander -> Oggok",
        status: "untested",
        notes: "Oggok (DI #11, AC B+, HH 4.0): Immortality AoE 5s + Heal + Dispel passivo. Solar King's Horn = heal vira amplificador (+6% DMG). Alternativa se precisar heal em vez de tank."
      },
      {
        name: "Sigrid anti-heal (G.Curse specialist)",
        change: "Vicana -> Sigrid",
        status: "untested",
        notes: "Sigrid (AC A+): dream hero para G.Curse. Healing Prohibition corta cura do boss."
      },
      {
        name: "Eurion tank (survival max)",
        change: "Ergander -> Eurion",
        status: "untested",
        notes: "Eurion Ally Protection + anti-morte. Para conteudo com burst extremo. Perde Poison synergy."
      }
    ]
  },

  // ─── TIME ICE / FROST CHAIN (elemento — puro Ice) ───
  {
    id: "time-ice",
    name: "Frost Chain + Imortalidade",
    activity: "Multi — Ice element (Bosses, Frey, A.Battlefield, farm geral)",
    affinity: "Permafrost",
    status: "tested",
    dps_result: null,
    score: null,
    members: [
      { id: 21030, role: "DPS carry", notes: "Auster (DI #26, AC S). Tracking arrows em TODOS com Frost. 50% ignora DEF. Ring of Winter. Skills 8/8" },
      { id: 20920, role: "Frost enabler", notes: "Lossenia (DI #3, AC A+). Frost AoE constante. Mark of Ice Calamity (Frost undispellable). Captain +24% ATK" },
      { id: 22230, role: "DPS nuker", notes: "Hochadir (AC A+). Detona Frost AoE + estende Frost +5s. Completa 3 Frost school" },
      { id: 20690, role: "Healer", notes: "Torrin. Heal + Dispel + Invisibilidade 10s + Debuff Immunity. Skills 8/8" },
      { id: 20060, role: "Tank", notes: "Eurion. Ally Protection + anti-morte (invencivel 5s). Skills 8/8" }
    ],
    bonds: "5 Permafrost (+20% ATK, +20% HP, ACC 50, RES 50, DEF 200) | 3 Frost (Frozen 5s + auto-Frozen!) | 2 Support (10% shield)",
    captain: { id: 20920, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Multi-uso (bosses, Frey Corridor, A.Battlefield, farm geral Ice)",
      perigo: "DPS depende de Frost estar aplicado nos inimigos. Bosses que cleansam debuffs reduzem DPS.",
      como_vencer: "FROST CHAIN: Lossenia aplica Frost massivo (undispellable com Mark of Ice Calamity) → Auster tracking arrows em TODOS com Frost → Hochadir detona Frost AoE. 3 Frost school = Frozen 5s + auto-Frozen! Torrin+Eurion = imortalidade. Permafrost = melhor afinidade do jogo (+20% ATK/HP + ACC 50 + RES 50 + DEF 200).",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%) — 4/5 Ice + 1 Necrosis (Torrin)"
    },
    notes: "4 Ice + 1 Necrosis (Torrin) = 5 Permafrost = afinidade MAIS FORTE do jogo. Frost chain completa. Testado em Bosses/Frey/A.Battlefield. AllClash usa Hvitar (S tier) no lugar — Henry nao possui.",
    variants: [
      {
        name: "Anti-buff (Vinyara no lugar de Hochadir)",
        change: "Hochadir -> Vinyara",
        status: "tested",
        notes: "Vinyara dispel + shield + auto-resist Stun. Perde 3o Frost school, ganha utility. Use em bosses com buff stacking."
      },
      {
        name: "Voresh debuffer",
        change: "Hochadir -> Voresh",
        status: "untested",
        notes: "Voresh Buff Prohibition AoE. Use contra bosses que self-buffam (ex: A.Battlefield)."
      },
      {
        name: "Nastjenka DPS (misto Resplendence)",
        change: "Hochadir -> Nastjenka",
        status: "tested",
        notes: "Nastjenka compensa DPS mas perde Frost school. Misto 4 Permafrost + 1 Resplendence."
      },
      {
        name: "Lucien anti-control",
        change: "Hochadir -> Lucien",
        status: "untested",
        notes: "Para bosses com controle e drain de energia agressivo. Ganha Control Immunity e escudo inicial."
      },
      {
        name: "Felosia ultra sustain",
        change: "Hochadir -> Felosia",
        status: "untested",
        notes: "Perde burst Frost, ganha sustain extremo (shield AoE + Damage Reduction)."
      },
      {
        name: "AllClash ideal (com Hvitar)",
        change: "Hochadir -> Hvitar",
        status: "reference",
        notes: "Hvitar (AC S, DI Queen of Ice): core Frost DPS. Nao possui — prioridade S2/S3."
      }
    ]
  },

  // ─── TIME FIRE / WILD FIRE (elemento — Flora obtida 26/Fev) ───
  {
    id: "time-fire",
    name: "Wild Fire Core (Flora DI #1!)",
    activity: "Multi — Fire element (T.Vortex, Frost Domain alt, bosses que resistem Poison)",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20410, role: "DPS carry + Amplifier", notes: "Flora (DI #1 S1!). Wild dice >=5 → familiar ataca. Insight max → dice SEMPRE max. Captain +24% ATK. Dawn Pipe Organ buffa todos ranged" },
      { id: 21970, role: "DPS carry", notes: "Caspar. Dice par → Absurd Charade → ignora DEF crescente. Ult marca → dice >=4 = knives. AC A+. Insp.1" },
      { id: 20400, role: "DPS AoE + Enabler", notes: "Errich. Meteorite Rain. Passiva +2 dice max (6→8) TODOS Wild. Insp.2" },
      { id: 20810, role: "DPS burst", notes: "Felicity. Recast ate 3x dice >=4. Ult 8 beams dice >=5. Ring of Scarlet Sorcerer (+10% skill dmg). Insp.1" },
      { id: 21800, role: "DPS burst + Amplifier", notes: "Tonalnan. +5% Crit DMG por dice >=5 aliado. 5 hits = +20% ATK Up burst. Combo Felicity" }
    ],
    bonds: "5 Ulceration (+20% ATK, +2% HP) | 5 Wild (dados max!) | School bond Wild",
    captain: { id: 20410, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Multi-uso (bosses que resistem Poison, conteudo Fire, Temporal Vortex)",
      perigo: "Sem healer! 5 DPS puro. Se boss tem burst alto, time morre.",
      como_vencer: "WILD FIRE SYNERGY CHAIN: (1) Errich +2 dice max pra todos → (2) Flora familiar ataca em dice >=5 + ganha Insight → (3) Insight max = dice SEMPRE max → (4) Felicity recast 3x + 8 beams → (5) Caspar knives automaticas → (6) Tonalnan +5% Crit DMG + ATK Up burst. FEEDBACK LOOP EXPONENCIAL.",
      food: "Flaming Chili Meatball (Fire +5%, ATK +10%) — 5/5 Fire"
    },
    notes: "Wild Fire Synergy Chain completa (26/Fev). AllClash confirma Wild como META para Temporal Vortex. Flora DI #1 + Dawn Pipe Organ + Ring of Scarlet Sorcerer = artefatos ideais. Mais Wild heroes = mais dice rolls = mais triggers = DPS EXPONENCIAL. Para conteudo longo onde 5 DPS derretem cedo, usar variantes com Felosia/Lucien.",
    variants: [
      {
        name: "Sustain (Adolphus no lugar de Tonalnan)",
        change: "Tonalnan -> Adolphus",
        status: "untested",
        notes: "Adolphus (DI #28): Shield + heal passivo. Troca DPS por sobrevivencia. AllClash usa esta versao."
      },
      {
        name: "Sustain hard (Felosia no lugar de Tonalnan)",
        change: "Tonalnan -> Felosia",
        status: "untested",
        notes: "Felosia adiciona Damage Reduction + shield em area. Melhor para Vortex/endurance quando o time derrete cedo."
      },
      {
        name: "Anti-control (Lucien no lugar de Tonalnan)",
        change: "Tonalnan -> Lucien",
        status: "untested",
        notes: "Lucien ajuda contra controle e drain de energia no inicio. Mantem 4 Fire + 1 Ice."
      },
      {
        name: "Rhash (6o Fire Wild DPS)",
        change: "Tonalnan -> Rhash",
        status: "untested",
        notes: "Rhash (AC S): +30% DMG com Heartfire de Wild allies. Mais DPS puro, sem sustain."
      },
      {
        name: "Tank Fire (Isolde)",
        change: "Tonalnan -> Isolde",
        status: "untested",
        notes: "Isolde (AC A): Tank Fire. Para conteudo que exige tank."
      },
      {
        name: "Alfie (boss specialist)",
        change: "Tonalnan -> Alfie",
        status: "untested",
        notes: "Alfie (5.0 nos 3 bosses, Wild school). Para bosses especificos."
      }
    ]
  },

  // ─── TIME NECROSIS / SUMMON (elemento — Ghul'ende upgrade, 26/Fev) ───
  {
    id: "time-summon",
    name: "Time Necrosis/Summon (Ghul'ende!)",
    activity: "Multi — Necrosis element (Flame Domain, Tempest Domain, Bosses, Goblin)",
    affinity: "Permafrost",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 23080, role: "DPS carry", notes: "Ladehlia (AC S). Shadow Demon AoE. Insp.1 = 10 stacks iniciais. Great Demon's Skull. Skills 8/8" },
      { id: 24780, role: "Amplifier", notes: "Sintrellia (AC S). Clona Shadow Demon + buffa ATK undead (+10%). Captain +24% ATK" },
      { id: 22310, role: "DPS/Healer", notes: "Ghul'ende (AC S, HH 4.6, DI #72, 5.0 em 13/13!). 720% AoE + AoE Cleanse + AoE Heal. Witch's Remains (DEF Penalty II). UPGRADE sobre Isitarian" },
      { id: 20690, role: "Healer", notes: "Torrin. Heal + Dispel + Invisibilidade 10s. Gatekeeper's Staff (overheal→shield). Skills 8/8" },
      { id: 20060, role: "Tank", notes: "Eurion. Ally Protection + anti-morte. Pocket of Seduction. Skills 8/8" }
    ],
    bonds: "5 Permafrost (+20% ATK/HP, ACC 50, RES 50, DEF 200) | 2 Summon | 2 Support (10% shield)",
    captain: { id: 24780, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Multi-uso (Flame Domain, Tempest Domain, Bosses single-target, Frey Corridor)",
      perigo: "DPS Summon mais lento que burst. Sem Premtsa, falta explosion AoE.",
      como_vencer: "LOOP: Ladehlia invoca Shadow Demon → Sintrellia clona → 2 demons AoE. Ghul'ende traz 720% AoE + Cleanse + Heal = DPS + utility. Witch's Remains aplica DEF Penalty II = time inteiro faz mais dano. Torrin+Eurion = imortalidade.",
      food: "Abyssal Crock (Necrotic +5%, ATK +10%) — 4/5 Necrosis"
    },
    notes: "Ghul'ende UPGRADE massivo sobre Isitarian (26/Fev): 5.0 em 13/13 atividades, 720% AoE + Cleanse + Heal em UM heroi. AllClash S tier. Core Universal de Summon continua Ladehlia+Sintrellia+Eurion — 2 slots flex adaptam por boss.",
    variants: [
      {
        name: "Isitarian (mais DPS summon, menos heal)",
        change: "Ghul'ende -> Isitarian",
        status: "tested",
        notes: "Isitarian Dragon Remnant: 1 ataque extra por undead summoned. Mais DPS de summons, menos utility."
      },
      {
        name: "Acilia (anti-debuff, Flame Domain)",
        change: "Ghul'ende -> Acilia",
        status: "tested",
        dps_result: "Lv18 CLEAR (Flame Domain)",
        notes: "Acilia Debuff Immunity + Cleanse. Core do time de Flame Domain."
      },
      {
        name: "Eches (anti-heal, Tempest Domain)",
        change: "Ghul'ende -> Eches",
        status: "tested",
        dps_result: "Lv17 CLEAR (Tempest Domain)",
        notes: "Eches Healing Reduction contra regen do boss. Core do time de Tempest Domain."
      },
      {
        name: "Premtsa (futuro, loop completo)",
        change: "Ghul'ende -> Premtsa",
        status: "reference",
        notes: "AllClash: Premtsa (A+) = core of any successful summoner team. Specters + explode undead AoE."
      }
    ]
  },

  // ─── TIME RADIANCE / RALLY (elemento — NOVO 26/Fev) ───
  {
    id: "time-radiance",
    name: "Time Radiance/Rally (Lorentheel Insp.3!)",
    activity: "Multi — Radiance element (Fae, Pillar, H.Ruins, bosses Necrosis)",
    affinity: "Resplendence",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 20300, role: "DPS carry", notes: "Lorentheel (DI #10, AC A, Insp.3!). Rally buff amplifica DPS massivamente. 3 Inspirations = muito forte. Gatekeeper's Staff" },
      { id: 20320, role: "DPS/Amplifier", notes: "Huberg (DI #34, AC S). Rally stacks amplificam Ult. Captain +30% ATK em Fae/Pillar. 5.0 em Goblin/Fae/Pillar/bosses" },
      { id: 20420, role: "Support/Cleanse", notes: "Acilia (AC A). Jack of all trades: Debuff purge + Immunity + Heal. Usada em TODOS game modes" },
      { id: 23210, role: "Healer/Immunity", notes: "Catherine. Debuff Immunity AoE 10s (Ult) + overheal→shield. Anti-Burn, anti-Poison" },
      { id: 20210, role: "Tank/Support", notes: "Garius (AC B+). Knockup, heal AoE %DEF, DEF Up passiva 30x. Aura +18% DEF. Best healer (AllClash)" }
    ],
    bonds: "5 Resplendence (+20% ATK) | 2-3 Rally | 2-3 Support",
    captain: { id: 20320, skill: "+30% ATK em Fae Meander e Pillar of Trials" },
    mechanics: {
      boss: "Multi-uso (Fae, Pillar, H.Ruins, bosses Necrosis/Poison onde Radiance tem vantagem)",
      perigo: "Sem Eurion/Torrin, sobrevivencia depende de Garius + Catherine + Acilia (3 layers de protecao).",
      como_vencer: "Rally chain: Lorentheel + Huberg geram Rally stacks → Rally amplifica DPS de ambos. Acilia Debuff Immunity + Catherine overheal→shield = double layer protecao. Garius tank DEF-based + heal AoE. Huberg captain +30% ATK em Fae/Pillar = ENORME.",
      food: "Holy Light Infusion (Radiant +5%, ATK +10%) — 5/5 Radiance"
    },
    notes: "Time Radiance NOVO (26/Fev). Lorentheel (Insp.3!) e o DPS carry — 3 Inspirations dao buff massivo de stats. Huberg (AC S, DI #34) complementa com Rally synergy. AllClash: Thelendor (S tier, exclusive) seria ideal mas Henry nao possui. Donella (AC S, utility) disponivel como variante. Time forte para Fae/Pillar onde Huberg tem +30% ATK captain.",
    variants: [
      {
        name: "Donella debuffer",
        change: "Catherine -> Donella",
        status: "untested",
        notes: "Donella (AC S): best heal reduction. ATK Penalty II + utility. Perde Debuff Immunity, ganha debuff power."
      },
      {
        name: "Eurion + Torrin (survival max)",
        change: "Garius+Catherine -> Eurion+Torrin",
        status: "untested",
        notes: "Imortalidade classica. 3 Radiance + 2 Permafrost = misto. Use em conteudo dificil."
      },
      {
        name: "AllClash ideal (com Thelendor)",
        change: "Lorentheel -> Thelendor",
        status: "reference",
        notes: "Thelendor (AC S, exclusive S1): insane Radiant damage + ignora 20% DEF com Rally. Nao possui."
      }
    ]
  }
];

// ============================================================
// HERO FREQUENCY TABLE — how often each hero appears in teams
// Updated: 2026-03-05 (Lucien/Felosia review + Donella id fix)
// ============================================================
window.DATA_HERO_FREQUENCY = [
  { id: 20060, teams: 14, activities: "Bosses/Frey, G.Venom, G.Curse, H.Ruins, Talent Resplendence, A.Battlefield, Arena, Fae, Pillar, Tempest Domain, Flame Domain, Time Ice, Time Summon, Time Poison(var)" },
  { id: 20690, teams: 10, activities: "Bosses/Frey, G.Venom, G.Curse, G.Rot, Talent Resplendence, A.Battlefield, Tempest Domain, Flame Domain, Time Ice, Time Summon" },
  { id: 20770, teams: 8, activities: "Bosses/Frey, G.Venom, G.Curse, Talent Resplendence, A.Battlefield, Arena, Fae, Pillar" },
  { id: 20740, teams: 8, activities: "G.Venom, G.Curse, G.Rot, Arena, Frost Domain, Fae, Pillar, Time Dauntless" },
  { id: 20420, teams: 5, activities: "G.Rot, Frost Domain, Flame Domain, Time Radiance, Time Summon(var)" },
  { id: 22290, teams: 4, activities: "A.Battlefield, Arena, Fae, Pillar" },
  { id: 20920, teams: 4, activities: "Bosses/Frey, G.Venom, H.Ruins, Goblin" },
  { id: 23020, teams: 4, activities: "G.Curse, G.Rot, Frost Domain, Time Dauntless" },
  { id: 23080, teams: 4, activities: "Goblin, Tempest Domain, Flame Domain, Time Summon" },
  { id: 20410, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 21970, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 20400, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 20810, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 22230, teams: 3, activities: "Goblin, Fae(var), Time Ice" },
  { id: 21030, teams: 3, activities: "Bosses/Frey, A.Battlefield, Time Ice" },
  { id: 24780, teams: 3, activities: "Tempest Domain, Flame Domain, Time Summon" },
  { id: 20210, teams: 4, activities: "H.Ruins, Talent Wildfire, Talent Permafrost, Time Radiance" },
  { id: 23210, teams: 4, activities: "H.Ruins, Talent Wildfire, Talent Resplendence, Time Radiance" },
  { id: 20250, teams: 3, activities: "H.Ruins, Talent Wildfire, Talent Resplendence" },
  { id: 20660, teams: 3, activities: "Arena, Frost Domain, Time Dauntless" },
  { id: 21560, teams: 2, activities: "Frost Domain, Time Dauntless" },
  { id: 20650, teams: 2, activities: "Talent Wildfire, Goblin" },
  { id: 23250, teams: 1, activities: "T.Vortex(var)" },
  { id: 21800, teams: 1, activities: "Time Fire" },
  { id: 22310, teams: 1, activities: "Time Summon" },
  { id: 21010, teams: 1, activities: "Time Poison" },
  { id: 20200, teams: 1, activities: "Time Poison" },
  { id: 20670, teams: 1, activities: "Time Poison" },
  { id: 20630, teams: 1, activities: "Time Poison" },
  { id: 20290, teams: 1, activities: "Time Poison" },
  { id: 20300, teams: 1, activities: "Time Radiance" },
  { id: 20320, teams: 1, activities: "Time Radiance" },
  { id: 20040, teams: 2, activities: "Talent Permafrost, Time Dauntless" },
  { id: 20790, teams: 1, activities: "Talent Wildfire" },
  { id: 20080, teams: 1, activities: "Talent Permafrost" },
  { id: 20640, teams: 1, activities: "Talent Permafrost" },
  { id: 22350, teams: 1, activities: "Talent Permafrost" },
  { id: 20750, teams: 2, activities: "Tempest Domain, G.Rot" }
];
