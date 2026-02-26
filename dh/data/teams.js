// teams.js — Canonical teams by activity
// Updated: 2026-02-25 — AllClash S1 guide integrated + adaptações do jogador
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
    notes: "Baseado em AllClash Mid-Range com Nastjenka no lugar de Rowena (DPS upgrade). Substituições: Nastjenka+Lossenia+Vinyara+Torrin no lugar de Tharivol+Felosia (não possui). Quando obtiver Tharivol+Felosia, montar time Endgame AllClash.",
    variants: [
      {
        name: "AllClash Endgame S1",
        change: "Eurion + Ivellios + Tharivol + Nastjenka + Felosia",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Tharivol e Felosia (não possui)."
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
    name: "Anti-debuff + Torrin Invisibility",
    activity: "Grave of Rot",
    affinity: "Resplendence",
    status: "active",
    dps_result: "Lv14 clear full HP. Lv15 trava (~10% HP antes do devour)",
    score: null,
    members: [
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs 10s. Captain +24% ATK" },
      { id: 23020, role: "DPS burst", notes: "Kui Crown: 10 Obsession start + 15% damage. Battle 5 attacks → feathers Nastjenka" },
      { id: 20420, role: "Cleanse/Immunity", notes: "ESSENCIAL: Debuff Immunity + Cleanse continuo. Counter Healing Prohibition + Corrosion stacks" },
      { id: 20690, role: "Healer/Invisibility", notes: "OBRIGATORIO: Invisibilidade 10s counters Devour. Dispel + Debuff Immunity. Aura +40 Resistance" },
      { id: 23370, role: "Debuff", notes: "Attack Penalty II + Accuracy Penalty II. Aura +40 ACC" }
    ],
    bonds: "3 Resplendence | 2 Dauntless | 3 Support (15% shield)",
    captain: { id: 20740, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Colossal Scavenger (Poison)",
      ciclo: "18s",
      perigo: "Skill 1 aplica Healing Prohibition AoE = seus healers nao curam. Skill 2 Stun AoE. Passiva aplica Corrosion stacks = morte instantanea se acumula. Skill 3 = big hit.",
      como_vencer: "Torrin Battle dispela Healing Prohibition + Debuff Immunity previne Corrosion. Torrin Invisibilidade counters Devour (boss não pode engolir). Acilia reforça imunidade + limpa stacks. Donella aplica ATK Penalty II.",
      food: "Feast of Thunder (Lightning +5%, ATK +10%) — 3/5 Lightning"
    },
    notes: "Baseado em AllClash Endgame (Nastjenka+Sutha+Acilia) + Mid-Range (Torrin+Catherine). Torrin é OBRIGATÓRIO (Invisibilidade counters Devour — mais importante aqui que no AllClash). Substituições: Torrin+DA+Donella no lugar de Tharivol+Ivellios (não possui). Quando obtiver Tharivol, trocar DA → Tharivol.",
    variants: [
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
    name: "Fire/Wild AllClash (sem Flora)",
    activity: "Temporal Vortex",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 21970, role: "DPS carry", notes: "Caspar. Wild core, alto DPS. Confirmado no ranking top 4." },
      { id: 20400, role: "DPS AoE", notes: "Errich. Meteorite Rain. Passiva +2 dice max para Wild" },
      { id: 23250, role: "Healer/Support", notes: "Adolphus. Shield + sustain. Passiva: shield em alvo com shield = heal 75%" },
      { id: 20810, role: "DPS burst", notes: "Felicity. Recast auto dice >=4, Ult ignora escudos. Aura +24% Crit DMG" },
      { id: 21170, role: "DPS Wild", notes: "Rhash (substitui Flora — não possui). Ambos Fire Wild, Rhash melhor opção disponível" }
    ],
    bonds: "5 Ulceration | 4 Wild (dados max em Burst!) | 1 Support",
    captain: null,
    mechanics: {
      boss: "Boss rotativo (PvE ranked)",
      ciclo: "20s (skill a cada 5s)",
      perigo: "Luta de ENDURANCE (20 min). Boss escala ao longo do tempo. Time que morre cedo = score baixo.",
      como_vencer: "4 Wild = dados GARANTIDOS max durante Burst = DPS previsivel e massivo. Caspar+Rhash core Wild. Errich +2 dice max pra todos. Felicity ignora escudos. Adolphus segura o time.",
      food: "Flaming Chili Meatball (Fire +5%, ATK +10%) — 4/5 Fire"
    },
    notes: "Baseado em AllClash Endgame S1 (Caspar+Errich+Adolphus+Flora+Felicity). Substituição: Rhash no lugar de Flora (não possui). Meta Fire/Wild domina ranking. Quando obtiver Flora, trocar Rhash → Flora.",
    variants: [
      {
        name: "AllClash Endgame S1",
        change: "Caspar + Errich + Adolphus + Flora + Felicity",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Flora (não possui). Rank #1 observado: 198.9M DPS."
      },
      {
        name: "Dauntless + Survival (antigo — testado)",
        change: "Time inteiro -> Nastjenka+Sutha+Garett+Torrin+Eurion",
        status: "tested",
        dps_result: "1.86M",
        bonds: "3 Resplendence | 3 Dauntless | 2 Support (10% shield)",
        notes: "Torrin+Eurion imortalidade + 3 Dauntless burst. Superado pelo meta Fire/Wild mas funciona em semanas que favorecem Lightning."
      },
      {
        name: "Anti-debuff premium",
        change: "Rhash -> Acilia",
        status: "untested",
        notes: "Acilia aumenta sobrevivencia em semanas com debuffs/DoT pesados. DPS cai, mas time morre menos."
      },
      {
        name: "Boss team Summon (alternativa antiga)",
        change: "Time inteiro -> Ladehlia+Rowena+Sintrellia+Torrin+Eurion",
        status: "tested",
        dps_result: "1.54M",
        notes: "DPS Summon mais lenta que burst. Superada por Dauntless+Survival e Fire/Wild."
      }
    ],
    tests: [
      { desc: "Fire/Wild (Caspar+Errich+Felicity+Rhash+Adolphus)", result: "Pendente", notes: "Time AllClash novo — testar" },
      { desc: "Dauntless + Survival (Nastjenka+Sutha+Garett+Torrin+Eurion)", result: "1.86M", notes: "Campea anterior" },
      { desc: "Boss Summon (Ladehlia+Rowena+Sintrellia+Torrin+Eurion)", result: "1.54M", notes: "Superado" },
      { desc: "Dauntless puro (5 DPS, sem tank)", result: "480k", notes: "Morreram rapido" },
      { desc: "Dauntless + Eurion (sem healer)", result: "639k", notes: "Tank sem heal insuficiente" }
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
    notes: "Baseado em AllClash Endgame (Tharivol+Nastjenka+Vinyara+Acilia+Felosia) mas com estratégia Immortal testada. Substituições: Auster+Eurion+Torrin+Voresh no lugar de Tharivol+Nastjenka+Acilia+Felosia (não possui Tharivol+Felosia). Voresh Buff Prohibition é ESSENCIAL neste boss. Lv8 CLEAR confirmado.",
    variants: [
      {
        name: "AllClash Endgame S1",
        change: "Tharivol + Nastjenka + Vinyara + Acilia + Felosia",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Tharivol e Felosia (não possui)."
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
    notes: "Baseado em AllClash. Substituição: Sigrid no lugar de Rava (não possui). Alternativas: Thia ou Rowena no lugar de Sigrid. Quando obtiver Rava, trocar Sigrid → Rava.",
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
    notes: "Baseado em AllClash. Substituição: Catherine no lugar de Rava (não possui). Catherine adiciona heal + Debuff Immunity. Quando obtiver Rava, trocar Catherine → Rava.",
    variants: [
      {
        name: "AllClash Original",
        change: "Torrin + Eurion + Vidimir + Rava + Vinyara",
        status: "reference",
        notes: "Time ideal do AllClash. Requer Rava (não possui)."
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
    notes: "Henry possui TODOS os heróis do AllClash! Time exato do guia.",
    variants: [
      {
        name: "AllClash Original",
        change: "Garius + Vani + Iola + Nimbus + Schaltar",
        status: "reference",
        notes: "Henry usa exatamente este time."
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

  // ─── TIME POISON (update — Ergander variant) ───
  {
    id: "time-poison",
    name: "Time Poison (Lothair Core — Prioridade)",
    activity: "Multi (G.Venom, A.Battlefield)",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 21670, role: "Tank/Healer", notes: "AoE heal, cleanse debuffs. Base de sobrevivencia" },
      { id: 20670, role: "DPS SS", notes: "Multi-hit + AoE Poison no inicio (passiva), crit ignora 30% DEF. Captain: +40 Accuracy" },
      { id: 20200, role: "DPS carry SS", notes: "Core do time. Derivative escala por stack de Poison. Captain: +48 Enlightenment" },
      { id: 20630, role: "DPS Poison", notes: "Marca alvo pra explosao, acelera Poison ticks" },
      { id: 20290, role: "DPS Poison AoE", notes: "Ult 700% AoE + 3 Thorny Poison + Enlightenment Penalty 20%. Passiva: Thorny Poison dispelado = 6% Max HP dano" }
    ],
    bonds: "5 Ulceration | 4 Poison (80% Poison Pool) | 1 Support",
    captain: { id: 20200, skill: "+48 Enlightenment em todas as batalhas" },
    mechanics: {
      boss: "Multi-uso (G.Venom Poison variant, A.Battlefield, bosses com debuff vulnerability)",
      perigo: "Poison DPS e mais lento que burst (DoT precisa de tempo). Boss que cleansa debuffs neutraliza stacks.",
      como_vencer: "Durango abre com Poison AoE, Lothair converte stacks em Derivative massivo e Jathalea pune dispel com Thorny Poison.",
      food: "Corrupted Meat Pie (Poison +5%, ATK +10%) — 5/5 Poison"
    },
    notes: "Lothair integrado ao core (23/Fev). Versao principal para progresso geral e dano consistente.",
    variants: [
      {
        name: "Tank pesado (Ergander)",
        change: "Frurbath -> Ergander",
        status: "untested",
        benefit: "Ergander Taunt 5s + Immortality 10s = tank MUITO mais seguro. DI #23, 5.0 em 12/13",
        notes: "Ergander com Drugo's Blast Jar = leva hits, nao morre, dispara Blast (AoE + -15% enemy DMG). Upgrade massivo sobre Frurbath."
      },
      {
        name: "Seguro (Vicuc)",
        change: "Vicana -> Vicuc",
        status: "tested",
        benefit: "Mais estabilidade: cleanse + cura forte + Attack Penalty",
        notes: "Era o core anterior. Usar quando o time sofre com debuffs/controle."
      },
      {
        name: "DPS puro (Twitch)",
        change: "Vicana -> Twitch",
        status: "untested",
        benefit: "Pico de DPS single-target com feedback loop de Derivative junto do Lothair",
        notes: "Mais dano bruto, menos seguranca. Melhor em lutas curtas."
      },
      {
        name: "Anti-heal (Sigrid)",
        change: "Vicana -> Sigrid",
        status: "untested",
        benefit: "Healing Prohibition para cortar cura de boss",
        notes: "Use contra bosses que se curam."
      },
      {
        name: "Tank pesado (Eurion)",
        change: "Frurbath -> Eurion",
        status: "untested",
        benefit: "Sobrevivencia maxima contra burst alto",
        notes: "Quando o time morre rapido. Perde sustain continuo, ganha tank absurdo."
      }
    ]
  },

  // ─── TIME ICE (keep) ───
  {
    id: "time-ice",
    name: "Time Ice",
    activity: "Multi (Fae, Pillar)",
    affinity: "Permafrost",
    status: "tested",
    dps_result: null,
    score: null,
    members: [
      { id: 22290, role: "Healer/Debuffer", notes: "Cura ao atacar, strip buffs, Buff Prohibition AoE" },
      { id: 22230, role: "DPS nuker AoE", notes: "Buffa Frost aliado, detona Frost AoE, estende Frost +5s" },
      { id: 20770, role: "Tank/Debuffer", notes: "Shield aliado, Ult dispela + Frozen + drena Ult. Aura +40 Accuracy" },
      { id: 20060, role: "Tank puro", notes: "Ally Protection todos, shield, anti-morte" },
      { id: 20740, role: "DPS carry", notes: "Ult AoE + feather procs. Aura +24% ATK" }
    ],
    bonds: "4 Permafrost | 3 Support (15% shield) | 1 Frost | 1 Dauntless",
    captain: null,
    mechanics: {
      boss: "Multi-uso (Fae, Pillar, farm geral, conteudo Ice)",
      perigo: "Hochadir precisa de Frost aplicado pra detonar. Sem Lossenia, Frost chain incompleta.",
      como_vencer: "Nastjenka compensa DPS. Voresh strip buffs. Hochadir detona Frost AoE. Vinyara+Eurion tanque inquebravel.",
      food: "Arctic Soothing Soup (Cold +5%, ATK +10%) — 4/5 Ice"
    },
    notes: "Bonus flat 3=5 permite misto com Nastjenka.",
    variants: [
      {
        name: "Frost Chain ELITE (Auster + Lossenia + Hochadir)",
        change: "Nastjenka -> Auster",
        status: "untested",
        bonds: "5 Permafrost puro | 3 Frost (Frozen 5s + auto-Frozen!) | 3 Support",
        notes: "Auster + Lossenia + Hochadir = 3 Frost! Auster tracking arrows em todos com Frost = DPS massivo."
      },
      {
        name: "Anti-debuff (Acilia)",
        change: "Nastjenka -> Acilia",
        status: "untested",
        notes: "Para andares com Poison/CC pesado."
      }
    ]
  },

  // ─── TIME FIRE (AllClash-aligned — already correct) ───
  {
    id: "time-fire",
    name: "Time Fire (AllClash-aligned)",
    activity: "Multi (quando Poison nao funciona)",
    affinity: "Ulceration",
    status: "active",
    dps_result: null,
    score: null,
    members: [
      { id: 21970, role: "DPS carry", notes: "Caspar. Wild core, alto DPS" },
      { id: 20810, role: "DPS burst", notes: "Felicity. Recast auto dice >=4, Ult ignora escudos. Aura +24% Crit DMG" },
      { id: 20400, role: "DPS AoE", notes: "Errich. Meteorite Rain. Passiva aumenta dice max +2 pra todos Wild" },
      { id: 21170, role: "DPS Wild", notes: "Rhash. Completa 4 Wild com alto DPS" },
      { id: 23250, role: "Healer/Support", notes: "Adolphus. Shield + sustain. Mais seguro que Isolde" }
    ],
    bonds: "5 Ulceration | 4 Wild (dados garantidos max em Burst!) | 1 Support",
    captain: null,
    mechanics: {
      boss: "Multi-uso (bosses que resistem Poison, Frost Domain variant, conteudo Fire)",
      perigo: "Sem Eurion/Torrin, sobrevivencia depende de Adolphus. 4 Wild sem 2o Support = mais risco.",
      como_vencer: "4 Wild = dados GARANTIDOS max durante Burst. Caspar+Rhash core. Errich +2 dice max pra todos. Felicity ignora escudos. Adolphus segura o time.",
      food: "Flaming Chili Meatball (Fire +5%, ATK +10%) — 4/5 Fire"
    },
    notes: "AllClash-aligned (Caspar+Errich+Adolphus+Felicity). Rhash substitui Flora (nao possui). Quando obtiver Flora, trocar Rhash → Flora.",
    variants: [
      {
        name: "Com Flora (AllClash ideal)",
        change: "Rhash -> Flora",
        status: "reference",
        notes: "Time ideal quando obtiver Flora."
      },
      {
        name: "Tank Fire (Isolde)",
        change: "Adolphus -> Isolde",
        status: "untested",
        notes: "Mais tank direto, menos sustain."
      }
    ]
  },

  // ─── TIME SUMMON (keep) ───
  {
    id: "time-summon",
    name: "Time Summon",
    activity: "Multi (Bosses, Goblin)",
    affinity: "Permafrost",
    status: "tested",
    dps_result: null,
    score: null,
    members: [
      { id: 23080, role: "DPS carry", notes: "Shadow Demon (Insp.1 = 10 stacks iniciais)" },
      { id: 24780, role: "Amplifier", notes: "Clona Shadow Demon + buffa ATK undead (+10%)" },
      { id: 21690, role: "DPS Summon", notes: "Dragon remnant. 1 ataque extra por undead summoned (ate 3)" },
      { id: 20690, role: "Healer", notes: "Dispel + Invisibilidade 10s + marca aliado +20% HP/DEF" },
      { id: 20060, role: "Tank puro", notes: "Ally Protection + anti-morte" }
    ],
    bonds: "5 Permafrost (4 Necro + 1 Ice) | 3 Summon (Phoenix Forte) | 2 Support (10% shield)",
    captain: { id: 24780, skill: "+24% ATK em todas as batalhas" },
    mechanics: {
      boss: "Multi-uso (Bosses single-target, Goblin Lair, Frey Corridor)",
      perigo: "DPS Summon mais lento que Dauntless burst. Sem Premtsa, falta explosion AoE.",
      como_vencer: "LOOP: Ladehlia invoca Shadow Demon → Sintrellia clona → 2 demons → Isitarian ganha 2 ataques extras. Torrin+Eurion = imortalidade.",
      food: "Abyssal Crock (Necrotic +5%, ATK +10%) — 3/5 Necrosis"
    },
    notes: "Versao atual (sem Premtsa). Loop de summons.",
    variants: [
      {
        name: "Versao completa (futura - com Premtsa)",
        change: "Isitarian+Torrin -> Premtsa+Voresh",
        status: "theoretical",
        notes: "Premtsa Specters + explode todos undead AoE. Loop completo."
      }
    ]
  }
];

// ============================================================
// HERO FREQUENCY TABLE — how often each hero appears in teams
// Updated: 2026-02-25 (recalculated after AllClash integration)
// ============================================================
window.DATA_HERO_FREQUENCY = [
  { id: 20060, teams: 13, activities: "Bosses/Frey, G.Venom, G.Curse, H.Ruins, Talent Resplendence, A.Battlefield, Arena, Fae, Pillar, Tempest Domain, Flame Domain, Time Ice, Time Summon" },
  { id: 20690, teams: 9, activities: "Bosses/Frey, G.Venom, G.Curse, G.Rot, Talent Resplendence, A.Battlefield, Tempest Domain, Flame Domain, Time Summon" },
  { id: 20770, teams: 9, activities: "Bosses/Frey, G.Venom, G.Curse, Talent Resplendence, A.Battlefield, Arena, Fae, Pillar, Time Ice" },
  { id: 20740, teams: 9, activities: "G.Venom, G.Curse, G.Rot, Arena, Frost Domain, Fae, Pillar, Time Dauntless, Time Ice" },
  { id: 22290, teams: 5, activities: "A.Battlefield, Arena, Fae, Pillar, Time Ice" },
  { id: 20920, teams: 4, activities: "Bosses/Frey, G.Venom, H.Ruins, Goblin" },
  { id: 22230, teams: 4, activities: "Goblin, Fae, Pillar, Time Ice" },
  { id: 20210, teams: 3, activities: "H.Ruins, Talent Wildfire, Talent Permafrost" },
  { id: 23210, teams: 3, activities: "H.Ruins, Talent Wildfire, Talent Resplendence" },
  { id: 20250, teams: 3, activities: "H.Ruins, Talent Wildfire, Talent Resplendence" },
  { id: 23020, teams: 4, activities: "G.Curse, G.Rot, Frost Domain, Time Dauntless" },
  { id: 20660, teams: 3, activities: "Arena, Frost Domain, Time Dauntless" },
  { id: 23080, teams: 4, activities: "Goblin, Tempest Domain, Flame Domain, Time Summon" },
  { id: 21030, teams: 3, activities: "Bosses/Frey, A.Battlefield, Goblin" },
  { id: 20420, teams: 3, activities: "G.Rot, Frost Domain, Flame Domain" },
  { id: 21560, teams: 2, activities: "Frost Domain, Time Dauntless" },
  { id: 20650, teams: 2, activities: "Talent Wildfire, Goblin" },
  { id: 21970, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 20400, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 20810, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 23250, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 21170, teams: 2, activities: "T.Vortex, Time Fire" },
  { id: 24780, teams: 3, activities: "Tempest Domain, Flame Domain, Time Summon" },
  { id: 20040, teams: 2, activities: "Talent Permafrost, Time Dauntless" },
  { id: 23370, teams: 1, activities: "G.Rot" },
  { id: 20790, teams: 1, activities: "Talent Wildfire" },
  { id: 20080, teams: 1, activities: "Talent Permafrost" },
  { id: 20640, teams: 1, activities: "Talent Permafrost" },
  { id: 22350, teams: 1, activities: "Talent Permafrost" },
  { id: 20750, teams: 1, activities: "Tempest Domain" },
  { id: 21690, teams: 1, activities: "Time Summon" },
  { id: 21670, teams: 1, activities: "Time Poison" },
  { id: 20200, teams: 1, activities: "Time Poison" },
  { id: 20670, teams: 1, activities: "Time Poison" },
  { id: 20630, teams: 1, activities: "Time Poison" },
  { id: 20290, teams: 1, activities: "Time Poison" }
];
