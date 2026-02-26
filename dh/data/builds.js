// builds.js — Hero builds: talent tree, gear sets, stat priority
// Fontes: AllClash, HellHades, DragonHeir.info, analise propria
// Last update: 2026-02-16

window.DATA_BUILDS = [

  // ============================================================
  // PRIORITY 1 — CORE CARRIES
  // ============================================================

  {
    id: 20740,
    priority: 1,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "DPS carry puro — todo o kit escala com ATK e Crit. Feathers, ult e battle skills sao basic attacks (Dauntless). Precisa maximizar output ofensivo, nao sobrevivencia (Eurion cobre).",
      key_nodes: [
        "ATK% — amplifica base de feathers, ult e battle. O stat mais impactante.",
        "Crit Damage — feathers proc em crit, Garett aura +24% Crit DMG stacka.",
        "Attack Speed → Crit Rate — passiva converte 10% speed = 1% crit. Duplo beneficio.",
        "Desperate Stand (opcao 2) — primeiro hit mira menor HP. Recomendado PvP."
      ],
      level_target: "Level 4+ (prioridade #1 de Talent Stones)",
      priority_stats: ["ATK%", "Crit Damage", "Crit Rate", "Attack Speed"],
      rationale: "Kit inteiro e dano. Passiva converte ATK Speed → Crit Rate (10% speed = 1% crit). Ult e Battle contam como basic attack (sinergia Dauntless). Talentos ofensivos maximizam output.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Base de TUDO — feathers, ult, battle skills escalam com ATK. Captain +24% ATK stacka." },
        { stat: "Crit Damage", verdict: "ESSENCIAL", reason: "Feathers proc em crit. Mais Crit DMG = burst exponencial com Garett +24% Crit DMG aura." },
        { stat: "Crit Rate", verdict: "ALTO", reason: "Passiva ja da Crit Rate via ATK Speed, mas mais crit = mais feathers. Objetivo: 60%+." },
        { stat: "Attack Speed", verdict: "ALTO", reason: "Converte pra Crit Rate E mais ataques basicos = mais procs Thundercloud (50% com 5 Dauntless)." },
        { stat: "HP%/DEF%", verdict: "IGNORAR", reason: "Backline puro. Eurion Ally Protection cobre. Investir em dano." }
      ]
    },
    gear: {
      sets: [
        { name: "Echoes of War", reason: "ATK + ATK Speed + basic atk dmg on crit = PERFEITO pra Nastjenka (feathers = basic)" },
        { name: "Gambler", reason: "Crit Rate + Crit Damage. Alternativa solida ao Echoes of War." }
      ],
      stat_priority: "ATK > Crit Rate > Crit Damage > ATK Speed"
    },
    artifact: {
      current: "Thunder Deity's Spear (Mythic)",
      bis: "Thunder Deity's Spear",
      alternatives: ["The Great River Lamp", "Arcane Music Box"],
      reason: "Mythic exclusivo. Stats massivos de ATK+Crit. Efeito Dauntless amplificado."
    },
    captain: "+24% ATK (todas batalhas)",
    tips: [
      "Feathers sao PERMANENTES (nao expira). Cada basic attack = 1 feather (max 10/20 com Insp).",
      "Battle skill DA ativa feathers em AoE — use ult pra burst.",
      "Divine Ascetic Battle conta como basic attack → gera feathers Nastjenka.",
      "Posicione backline longe de AoE. Espalhe."
    ],
    sources: ["AllClash", "HellHades", "DragonHeir.info", "TapTap dev guide"]
  },

  {
    id: 23080,
    priority: 1,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "Shadow Demon herda ATK de Ladehlia. Sintrellia clona o summon com MAIOR ATK — se Ladehlia nao tiver o ATK mais alto, clona errado. Tudo depende de maximizar ATK puro.",
      key_nodes: [
        "ATK% — Shadow Demon herda. Sintrellia clona baseado em ATK. O stat que define o heroi.",
        "Crit Rate — Shadow Demon faz crit. Blood-Consuming Shadow (burst) escala com Crit.",
        "Crit Damage — complementa Crit Rate pro burst final do demon.",
        "DMG Bonus — Insp.2 da +15% DMG acima 85% HP. Nodes ofensivos amplificam."
      ],
      level_target: "Level 4+ (prioridade #3 de Talent Stones — divide com Ice/Necrosis)",
      priority_stats: ["ATK%", "Crit Rate", "Crit Damage"],
      rationale: "ATK e O stat — Shadow Demon herda stacks de Ladehlia, e Sintrellia duplica o summon com MAIOR ATK. Se ATK nao for a maior do time, Sintrellia clona errado. Crit pra burst do Shadow Demon.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Shadow Demon herda stats. Sintrellia clona o summon com MAIOR ATK — Ladehlia PRECISA ter ATK mais alto que todos." },
        { stat: "Crit Rate", verdict: "ALTO", reason: "Shadow Demon faz crit. Burst final (Blood-Consuming Shadow) escala com Crit." },
        { stat: "Crit Damage", verdict: "ALTO", reason: "Complementa Crit Rate. Burst do demon em alvo menor HP." },
        { stat: "HP%", verdict: "MEDIO", reason: "Insp.2 = +15% DMG Bonus acima 85% HP. Precisa ficar viva pra stackar Satisfied. Torrin cura, mas algum HP ajuda." },
        { stat: "DEF%", verdict: "IGNORAR", reason: "Backline. Torrin Invisibilidade + Eurion proteção cobrem." }
      ]
    },
    gear: {
      sets: [
        { name: "Whispers of the Order", reason: "ATK + Skill Haste + Ultimate damage bonus. Shadow Demon ult = devastador." },
        { name: "Executioner (S1-S3)", reason: "Crit Rate + ATK. Bom mas Whispers > para skill-based DPS." }
      ],
      stat_priority: "ATK > Crit Rate > Crit Damage > HP"
    },
    artifact: {
      current: "Great Demon's Skull (Mythic)",
      bis: "Great Demon's Skull",
      alternatives: ["Weird Whistle", "Eyeball of the Giant"],
      reason: "Mythic exclusivo. Amplifica summon damage. BiS absoluto."
    },
    captain: null,
    tips: [
      "Shadow Demon ganha stacks de Satisfied (tempo vivo + kills). NAO deixe morrer.",
      "Posicione PERTO do Torrin pra cobertura de Invisibilidade.",
      "Insp.1 = 10 stacks iniciais. Insp.2 = +15% DMG se >85% HP. Manter viva = DPS exponencial.",
      "Blood-Consuming Shadow (passiva) mira menor HP = execucao natural."
    ],
    sources: ["AllClash", "HellHades", "DragonHeir.info"]
  },

  {
    id: 20670,
    priority: 1,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "DPS puro com mecanica de Crit. Crits ignoram 30% DEF — e o stat mais impactante do kit. Triple-hit skills amplificam tudo que for ofensivo. Nenhum beneficio defensivo vale o custo.",
      key_nodes: [
        "Crit Rate — crits ignoram 30% DEF. Breakpoint 80%+. Abaixo disso, DPS cai drasticamente.",
        "ATK% — base de dano, triple-hit multiplica 3x. Escala linearmente.",
        "Crit Damage — com 80%+ Crit Rate, vira multiplicador principal.",
        "Accuracy (se disponivel) — Poison debuffs precisam acertar. Bosses tem 220+ Resistance."
      ],
      level_target: "Level 4+ (usa Talent Stones Fire/Poison)",
      priority_stats: ["Crit Rate", "ATK%", "Crit Damage", "Accuracy"],
      rationale: "Crit e REI — crits ignoram 30% DEF. Comunidade recomenda 80%+ Crit Rate. Triple-hit skills com 100% Poison application. Accuracy pra land debuffs em bosses.",
      analysis: [
        { stat: "Crit Rate", verdict: "ESSENCIAL", reason: "Crits ignoram 30% DEF. Objetivo 80%+. Abaixo disso, DPS cai drasticamente. Cada crit = +30% penetracao." },
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Base de dano de todas skills. Triple-hit multiplica ATK 3x por skill use." },
        { stat: "Crit Damage", verdict: "ALTO", reason: "Com 80%+ Crit Rate, Crit Damage se torna multiplicador principal. Stacka com ignore DEF." },
        { stat: "Accuracy", verdict: "ALTO", reason: "Poison debuffs precisam acertar. Bosses tem 220-250+ Resistance. Captain da +40 Accuracy, talentos complementam." },
        { stat: "HP%/DEF%", verdict: "IGNORAR", reason: "DPS puro. Frurbath tanque + Sigrid/Heksandra curam o time Poison." }
      ]
    },
    gear: {
      sets: [
        { name: "Echoes of War", reason: "ATK + ATK Speed + basic crit bonus. Funciona com multi-hit." },
        { name: "Gambler (S1-S3)", reason: "Crit Rate + Crit Damage. Ideal pra atingir 80% Crit Rate." }
      ],
      stat_priority: "Crit Rate (80%+!) > ATK > Crit Damage > Accuracy"
    },
    artifact: {
      current: "Phoenix Feather (Legendary)",
      bis: "Witch's Remains",
      alternatives: ["Ri'kir Boomerang", "Crown of the Unclean"],
      reason: "Witch's Remains = multi-hit damage boost. Phoenix Feather e interim (heal on death)."
    },
    captain: "+40 Accuracy (todas batalhas)",
    tips: [
      "Passiva aplica 3 Poison no inicio da batalha = DPS imediato.",
      "Captain +40 Accuracy ajuda TODO o time (incluindo Voresh Buff Prohibition).",
      "3 Poison school (Durango+Vicana+Jathalea) = 60% Poison Pool = AoE explosivo.",
      "80%+ Crit Rate e o breakpoint. Abaixo disso, troque gear/talentos ate atingir."
    ],
    sources: ["AllClash", "HellHades", "DragonHeir.info"]
  },

  // ============================================================
  // PRIORITY 2 — KEY SUPPORTS/TANKS
  // ============================================================

  {
    id: 20060,
    priority: 2,
    talent: {
      lane: "Bottom (Defensiva)",
      lane_rationale: "Tank puro — kit INTEIRO escala com DEF. Shield of Oath e dano escalam com %DEF. Ally Protection redireciona dano do time inteiro pro Eurion. Nodes defensivos = mais tanque + mais shield + mais dano.",
      key_nodes: [
        "DEF% — Shield of Oath escala com DEF. Dano de Eurion TAMBEM escala com DEF. Stat unico.",
        "HP% — Ally Protection redireciona dano. Sem HP massivo = morre e time wipa.",
        "Skill Haste — cicla Shield of Oath = mais uptime de shield pros aliados.",
        "Resistance — frontline = alvo de CC. 140+ geral, 220+ bosses."
      ],
      level_target: "Level 4+ (prioridade #2 de Talent Stones)",
      priority_stats: ["DEF%", "HP%", "Skill Haste", "Resistance"],
      rationale: "Kit INTEIRO escala com DEF — shield e dano de Shield of Oath = %DEF. HP pra sobreviver Ally Protection. Skill Haste cicla shields.",
      analysis: [
        { stat: "DEF%", verdict: "ESSENCIAL", reason: "Shield of Oath escala com DEF. Dano dele escala com DEF. Unico stat que importa pro kit." },
        { stat: "HP%", verdict: "ESSENCIAL", reason: "Ally Protection redireciona dano pro Eurion. Precisa de HP massivo pra nao morrer. Undying Glory trigger em HP minimo." },
        { stat: "Skill Haste", verdict: "ALTO", reason: "Cicla Shield of Oath mais rapido = mais uptime de shield. Heals aliados indiretamente." },
        { stat: "Resistance", verdict: "MEDIO", reason: "Frontline = alvo de CC. Resistance evita stun/debuff. 140+ pra conteudo geral, 220+ pra bosses." },
        { stat: "ATK%/Crit", verdict: "IGNORAR", reason: "Zero valor. Kit nao escala com ATK. Todo damage vem de DEF." }
      ]
    },
    gear: {
      sets: [
        { name: "Oasis Aspiration", reason: "HP + Skill Haste + damage reduction when HP high. PERFEITO pra tank." },
        { name: "Three-Ears Emblem (S1-S3)", reason: "DEF + HP. Defensivo puro." }
      ],
      stat_priority: "DEF > HP > Skill Haste > Resistance"
    },
    artifact: {
      current: "Pocket of Seduction (Legendary)",
      bis: "Drugo's Blast Jar",
      alternatives: ["Giant Turtle Offspring's Shell", "Scarab Amulet"],
      reason: "Blast Jar = taunt + damage soak. Pocket of Seduction = interim (DEF stats)."
    },
    captain: null,
    tips: [
      "Ally Protection = TODO dano do time vai pro Eurion. Precisa de DEF/HP massivo.",
      "Undying Glory: primeira vez que chega em 0 HP = fica invencivel 5s + heal. Cooldown 60s.",
      "Ever-victorious: dispela shields inimigos. Util contra Frost Domain boss.",
      "Posicione FRONTLINE central. Todo dano redireciona pra ele."
    ],
    sources: ["AllClash", "DragonHeir.info"]
  },

  {
    id: 20690,
    priority: 2,
    talent: {
      lane: "Bottom (Suporte)",
      lane_rationale: "Healer puro — heals escalam com HP e Enlightenment, ambos concentrados na lane Bottom. Shadow Protection compartilha %HP dele com frontline (Eurion). Mais HP = mais heal + mais protecao. Middle nao tem nodes de HP/Enlightenment suficientes.",
      key_nodes: [
        "HP% — Shadow Protection compartilha %HP com Eurion. Chaotic Prayer heal escala com Max HP.",
        "Enlightenment — heal scaling tem 2500%+ Enlightenment. Segundo stat mais impactante.",
        "Skill Haste — cicla Chaotic Prayer (heal+dispel) e Underworld Cloak (Invisibilidade) mais rapido.",
        "Healing Amplification — Insp.2 = cada battle skill heal dispela 1 debuff. Mais heals = mais dispels."
      ],
      level_target: "Level 4+ (prioridade #4 — divide stones com Ice/Necrosis)",
      priority_stats: ["HP%", "Enlightenment", "Skill Haste", "DEF%"],
      rationale: "Heals escalam com Max HP E Enlightenment. Shadow Protection compartilha %HP com frontline. Skill Haste cicla heals/dispel. Insp.2 = cada heal dispela debuffs.",
      analysis: [
        { stat: "HP%", verdict: "ESSENCIAL", reason: "Shadow Protection compartilha %HP com frontline. Chaotic Prayer heal escala com Max HP. Base de tudo." },
        { stat: "Enlightenment", verdict: "ESSENCIAL", reason: "Heal scaling += Enlightenment. Algumas skills tem multiplicadores enormes (2500%+ Enlightenment scaling)." },
        { stat: "Skill Haste", verdict: "ALTO", reason: "Cicla Chaotic Prayer (heal+dispel) e Underworld Cloak (Invisibilidade) mais rapido. Insp.2 = cada heal dispela debuffs." },
        { stat: "DEF%", verdict: "MEDIO", reason: "Backline support mas pode tomar dano AoE. DEF ajuda a sobreviver." },
        { stat: "ATK%/Crit", verdict: "IGNORAR", reason: "Heals nao escalam com ATK. Zero valor ofensivo." }
      ]
    },
    gear: {
      sets: [
        { name: "Oasis Aspiration", reason: "HP + Skill Haste + damage reduction. Tank healer ideal." },
        { name: "Three-Ears Emblem (S1-S3)", reason: "DEF + HP. Sobrevivencia." }
      ],
      stat_priority: "HP > Enlightenment > Skill Haste > DEF"
    },
    artifact: {
      current: "Life Spindle (Legendary)",
      bis: "Solar King's Horn",
      alternatives: ["Gatekeeper's Staff", "Mirror of the Living"],
      reason: "Solar King's Horn = amplifica heals. Life Spindle = interim (HP stats)."
    },
    captain: "+40 Resistance (todas batalhas)",
    tips: [
      "Shadow Protection marca frontline (Eurion). Compartilha HP/DEF — Torrin precisa de HP alto.",
      "Underworld Cloak = Invisibilidade 10s + heal. Salva Ladehlia de burst.",
      "Insp.2: CADA battle skill heal dispela 1 debuff. Skill Haste = mais dispels automaticos.",
      "Captain +40 Resistance ajuda time inteiro a resistir CC de bosses."
    ],
    sources: ["AllClash", "DragonHeir.info"]
  },

  {
    id: 20770,
    priority: 2,
    talent: {
      lane: "Middle (Utilidade)",
      lane_rationale: "Tank de CONTROLE, nao de absorção. Valor dela vem de Accuracy pra land Frozen + strip buffs + drain Energy. Middle tem nodes de Accuracy e debuff amp. Bottom nao ajuda — Eurion ja e o tank de absorção. Vinyara precisa ACERTAR, nao tankar.",
      key_nodes: [
        "Accuracy — Frozen Spike strip TODOS buffs + drena Energy + Freeze. Se miss = zero utilidade. 220+.",
        "Debuff Duration — Insp.2 estende debuffs 30%. Nodes de utilidade amplificam.",
        "Skill Haste — cicla Frozen Spike mais rapido = mais strip + freeze.",
        "HP% (crosslane) — frontline, precisa sobreviver. Pega HP nodes extras se disponivel."
      ],
      level_target: "Level 4 (usa stones Ice/Necrosis — competicao com Eurion/Torrin/Ladehlia)",
      priority_stats: ["Accuracy", "HP%", "DEF%", "Skill Haste"],
      rationale: "Tank de controle. Accuracy CRITICO pra land Frozen + buff strip. Insp.5 ignora 35% Resistance. HP/DEF pra sobreviver frontline.",
      analysis: [
        { stat: "Accuracy", verdict: "ESSENCIAL", reason: "Frozen Spike strip TODOS buffs + drena Energy + Freeze. Se miss = zero utilidade. 220+ pro conteudo lategame." },
        { stat: "HP%", verdict: "ESSENCIAL", reason: "Frontline tank. Withering Armor shield escala com stats. Precisa sobreviver." },
        { stat: "DEF%", verdict: "ALTO", reason: "Complementa HP pra sobreviver. Tank secundario (Eurion e principal)." },
        { stat: "Skill Haste", verdict: "MEDIO", reason: "Cicla Frozen Spike mais rapido = mais strip + freeze." },
        { stat: "ATK%/Crit", verdict: "BAIXO", reason: "Nao e DPS. Dano vem de controle, nao de stats ofensivos." }
      ]
    },
    gear: {
      sets: [
        { name: "Oasis Aspiration", reason: "HP + Skill Haste + tankyness. Controle precisa sobreviver." },
        { name: "Puppeteer (S1-S3)", reason: "Accuracy + debuff amplification." }
      ],
      stat_priority: "Accuracy (220+) > HP > DEF > Skill Haste"
    },
    artifact: {
      current: "Platinum Knight Shield (Legendary)",
      bis: "Rift Hourglass",
      alternatives: ["Witch's Remains", "Flame Globe"],
      reason: "Rift Hourglass = debuff duration extension. Platinum Knight Shield = interim (DEF stats)."
    },
    captain: "+40 Accuracy (todas batalhas)",
    tips: [
      "Ult APOS Skill 1 do boss (Grave of Venom) = dispela shields dos adds. Timing crucial.",
      "Drena Ultimate Energy do alvo = boss nao usa ult no tempo. Enorme em PvP.",
      "Icy Thorn: se inimigo tenta CC em Vinyara = congela O ATACANTE automaticamente.",
      "5.0 em Arena/Fae/Pillar/bosses. Uma das melhores herois do jogo."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 22290,
    priority: 2,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "Support UNICO que escala heals com ATK — passiva Breath of Ice cura 70% ATK a cada dano causado. Mais ATK = mais heal E mais dano. Top maximiza ATK, que e o stat que faz TUDO funcionar. Middle daria Accuracy, mas gear resolve isso.",
      key_nodes: [
        "ATK% — passiva cura 70% ATK a cada hit. ATK = healing. Stat mais impactante.",
        "Crit Rate (bonus) — mais crits = mais hits = mais heals passivos.",
        "ATK Speed (bonus) — mais ataques = mais procs de heal passivo.",
        "Accuracy via gear/captain — Buff Prohibition precisa acertar. Gear resolve, nao talento."
      ],
      level_target: "Level 4 (divide stones Ice/Necrosis com Legendarios — priorize Legendarios primeiro)",
      priority_stats: ["ATK%", "Accuracy", "HP%", "Skill Haste"],
      rationale: "SUPPORT QUE QUER ATK — passiva cura 70% ATK a cada dano. Mais ATK = mais heal. Accuracy pra Buff Prohibition. SS Epic — vale investimento.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "UNICO: passiva Breath of Ice cura 70% ATK a cada dano causado. ATK = heal. Mais ATK = mais sustain pro time inteiro." },
        { stat: "Accuracy", verdict: "ESSENCIAL", reason: "Glacial Curse = 75% Buff Prohibition AoE. Se miss = boss ganha buffs = wipe. 220+ obrigatorio." },
        { stat: "HP%", verdict: "MEDIO", reason: "Epic = stats menores que Legendary. Precisa sobreviver pra curar passivamente." },
        { stat: "Skill Haste", verdict: "MEDIO", reason: "Cicla Glacial Curse (Buff Prohibition) mais rapido = uptime constante." },
        { stat: "DEF%", verdict: "BAIXO", reason: "Backline. HP ja cobre. DEF e secundario." }
      ]
    },
    gear: {
      sets: [
        { name: "Whispers of the Order", reason: "ATK + Skill Haste + ult damage. ATK = healing." },
        { name: "Puppeteer (S1-S3)", reason: "Accuracy + debuff chance. Buff Prohibition precisa acertar." }
      ],
      stat_priority: "ATK > Accuracy (220+) > HP > Skill Haste"
    },
    artifact: {
      current: "Crown of the Unclean (Legendary)",
      bis: "Witch's Remains",
      alternatives: ["Crown of the Unclean", "Lunar Harp"],
      reason: "Multi-hit skills (3x AoE) = Witch's Remains boost maximo. Crown funciona bem tambem."
    },
    captain: null,
    tips: [
      "Buff Prohibition AoE = boss E adds NAO recebem buffs. Counter universal.",
      "Heal e PASSIVO — Voresh so precisa atacar pra curar. Nao precisa de skill manual.",
      "Glacial Blow (Battle) = 3x single-target + dispela buff. Use em boss com ATK Up.",
      "SS Epic = stats de Legendary na pratica. Investimento vale."
    ],
    sources: ["DragonHeir.info"]
  },

  // ============================================================
  // PRIORITY 3 — SECONDARY DPS
  // ============================================================

  {
    id: 20660,
    priority: 3,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "DPS burst — ult auto-crits (+30% Crit DMG). Passiva berserker converte dano recebido em ATK (ate 200% base). Tudo escala com stats ofensivos. DEF e ate contraprodutivo (menos dano recebido = menos stacks).",
      key_nodes: [
        "Crit Damage — ult auto-crits. Cada ponto e multiplicador direto. Captain +24% Crit DMG stacka.",
        "ATK% — base de dano. Passiva pode DOBRAR ATK (200% cap). Talentos amplificam o teto.",
        "Crit Rate — fora do ult, crits importam pra Battle skill e basics.",
        "EVITAR DEF — menos dano recebido = menos stacks berserker. Contraprodutivo."
      ],
      level_target: "Level 4",
      priority_stats: ["Crit Damage", "ATK%", "Crit Rate", "HP%"],
      rationale: "Ult auto-crits (+30% Crit DMG). Passiva Sobering Pain converte dano recebido em ATK (200% cap). Berserker puro.",
      analysis: [
        { stat: "Crit Damage", verdict: "ESSENCIAL", reason: "Ult auto-crits. Cada ponto de Crit Damage = multiplicador direto. +24% Crit DMG aura captain stacka." },
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Base de dano. Passiva pode DOBRAR ATK base (200% cap). Talentos ATK amplificam o teto." },
        { stat: "Crit Rate", verdict: "ALTO", reason: "Fora da janela de ult, Crit Rate importa pra basic attacks e Battle skill." },
        { stat: "HP%", verdict: "MEDIO", reason: "Precisa tomar dano pra passiva stackar. Mais HP = sobrevive mais = mais ATK bonus." },
        { stat: "DEF%", verdict: "BAIXO", reason: "Mais DEF = menos dano recebido = menos stacks da passiva. Contraprodutivo." }
      ]
    },
    gear: {
      sets: [
        { name: "Echoes of War", reason: "ATK + ATK Speed + basic crit bonus. Synergy Dauntless." },
        { name: "Executioner (S1-S3)", reason: "Crit + ATK. Clasico ofensivo." }
      ],
      stat_priority: "Crit Damage > ATK > Crit Rate > HP"
    },
    artifact: {
      current: "The Great River Lamp (Mythic)",
      bis: "The Great River Lamp",
      alternatives: ["Eyeball of the Giant", "Volcanic Disc"],
      reason: "Mythic com stats ideais. Crit + ATK + burst amplification."
    },
    captain: "+24% Crit Damage (todas batalhas)",
    tips: [
      "Ult = 5 lightning thrusts com AUTO-CRIT + 30% Crit DMG bonus. Use quando passiva esta stackada.",
      "Passiva: dano recebido vira ATK. Nao cure demais — Garett QUER tomar dano (ate o limite).",
      "Insp.1 = duplicata banner. +10% stats.",
      "5.0 em Arena/bosses. Morre primeiro no Temporal Vortex (15/Fev test) — DPS alto mas fragil."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 21560,
    priority: 3,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "DPS crit-based — passiva Phantom Slash gera phantom em CADA crit. Mais Crit Rate = mais phantoms = DPS exponencial. Tudo depende de maximizar stats ofensivos.",
      key_nodes: [
        "Crit Rate — Phantom Slash proc em cada crit. +30% built-in nao basta. Mais crit = mais phantoms.",
        "ATK% — base de dano. Phantoms herdam ATK.",
        "Crit Damage — com alto Crit Rate, cada phantom faz crit damage. Multiplicador stacked.",
        "Attack Speed — mais basics = mais crits = mais phantoms. Sinergia Nastjenka."
      ],
      level_target: "Level 4",
      priority_stats: ["Crit Rate", "ATK%", "Crit Damage", "Attack Speed"],
      rationale: "Passiva Phantom Slash: CADA crit gera phantom. Crit Rate = DPS exponencial. +30% built-in nao basta, quer mais.",
      analysis: [
        { stat: "Crit Rate", verdict: "ESSENCIAL", reason: "Phantom Slash proc em CADA crit. Mais crit = multiplicador de DPS. +30% built-in nao basta." },
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Base de dano. Phantom herda ATK." },
        { stat: "Crit Damage", verdict: "ALTO", reason: "Com alto Crit Rate, cada phantom faz crit damage. Multiplicador stacked." },
        { stat: "Attack Speed", verdict: "MEDIO", reason: "Mais ataques basicos = mais chances de crit = mais phantoms. Sinergia com Nastjenka passiva." },
        { stat: "HP%/DEF%", verdict: "IGNORAR", reason: "Backline. Sobrevivencia via Eurion/Torrin." }
      ]
    },
    gear: {
      sets: [
        { name: "Echoes of War", reason: "ATK + ATK Speed + basic crit. Phantom procs em basics." },
        { name: "Executioner (S1-S3)", reason: "Crit + ATK." }
      ],
      stat_priority: "Crit Rate > ATK > Crit Damage > ATK Speed"
    },
    artifact: {
      current: "Silverstar Horseshoe (Legendary)",
      bis: "The Great River Lamp",
      alternatives: ["Eyeball of the Giant", "Volcanic Disc"],
      reason: "Great River Lamp = ATK+Crit stats. Silverstar Horseshoe = interim."
    },
    captain: "+30% ATK Speed (dungeons)",
    tips: [
      "Captain +30% ATK Speed = time Dauntless inteiro ataca mais rapido. Ativa em DUNGEONS.",
      "Phantom Slash: fantasma aparece em cada crit. Visualmente confirmavel.",
      "Insp.1 (duplicata). +10% stats baseline.",
      "'O Dauntless hero definitivo' — ATK Speed aura faz Nastjenka converter pra Crit Rate."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 22230,
    priority: 3,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "DPS nuker AoE — Frost Reign detona alvos com Frost/Frozen. Dano escala com ATK. Frostfall buffa +20% ATK no aliado Frost com mais ATK. Nodes ofensivos maximizam tanto o burst quanto o buff pro time.",
      key_nodes: [
        "ATK% — detonacao AoE escala com ATK. Frostfall buffa +20% ATK pra Lossenia.",
        "Accuracy (se disponivel) — Frost debuffs precisam acertar. Bosses tem 220+ Resistance.",
        "Skill Haste — cicla Frostfall = mais uptime de +20% ATK no aliado.",
        "Crit Rate — AoE burst se beneficia de crit. Bonus, nao core."
      ],
      level_target: "Level 4",
      priority_stats: ["ATK%", "Accuracy", "Skill Haste", "Crit Rate"],
      rationale: "Frost Reign DETONA Frost/Frozen AoE. Passiva estende Frost aliados +5s. ATK pra detonacao, Accuracy pra debuffs, Haste pra ciclar.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Detonacao AoE escala com ATK. Frostfall buffa +20% ATK pro aliado Frost com mais ATK (Lossenia)." },
        { stat: "Accuracy", verdict: "ALTO", reason: "Frost debuffs precisam acertar. Bosses tem 220+ Resistance." },
        { stat: "Skill Haste", verdict: "ALTO", reason: "Cicla Frostfall = mais uptime de +20% ATK no aliado. Frost Reign mais frequente." },
        { stat: "Crit Rate", verdict: "MEDIO", reason: "AoE burst se beneficia de crit mas nao e core do kit." },
        { stat: "DEF%/HP%", verdict: "BAIXO", reason: "Mid-range. Algum HP ajuda mas priorize ofensivo." }
      ]
    },
    gear: {
      sets: [
        { name: "Whispers of the Order", reason: "ATK + Skill Haste + ult damage. AoE detonacao = ult." },
        { name: "Rhapsodist (S1-S3)", reason: "Debuff amplification + skill damage." }
      ],
      stat_priority: "ATK > Accuracy > Skill Haste > Crit Rate"
    },
    artifact: {
      current: "Wine of Dragon Blood (Legendary)",
      bis: "Whisper of the Consumer",
      alternatives: ["Darkthorn Claw", "Arcane Music Box"],
      reason: "Consumer amplifica AoE. Wine of Dragon Blood = interim com bons stats."
    },
    captain: null,
    tips: [
      "Frostbite: estende TODOS Frost aplicados por aliados +5s. Lossenia aplica Frost de TUDO.",
      "Combo Lossenia → Hochadir: Lossenia aplica Frost, Hochadir estende +5s e detona AoE.",
      "Frostfall: buffa +20% ATK no aliado Frost com mais ATK. Em time Ice = buffar Lossenia.",
      "DPS principal Ice. Sem ele, Frost team perde DPS AoE."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 20920,
    priority: 3,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "Frost enabler com DPS — aplica Frost de TUDO (passiva, battle, ult). Tornado AoE persistente 6s. ATK escala o dano continuo. Hochadir precisa dela aplicando Frost constantemente.",
      key_nodes: [
        "ATK% — dano continuo (tornado 6s + bouncing Iceball). Multiplicadores altos.",
        "Accuracy — 100% Frost chance mas precisa ACERTAR. Miss = Hochadir nao detona.",
        "Skill Haste — mais casts = mais Frost = mais detonacoes do Hochadir.",
        "Crit Rate — bonus pra burst. Frost application > crit."
      ],
      level_target: "Level 4",
      priority_stats: ["ATK%", "Accuracy", "Skill Haste", "Crit Rate"],
      rationale: "Aplica Frost de TUDO (100% chance). Tornado AoE 6s. ATK pra dano, Accuracy pra Frost acertar, Haste pra aplicar mais.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Dano continuo (tornado 6s + bouncing Iceball). Multiplicadores altos." },
        { stat: "Accuracy", verdict: "ESSENCIAL", reason: "100% Frost chance mas precisa ACERTAR o alvo. Miss = sem Frost = Hochadir nao detona." },
        { stat: "Skill Haste", verdict: "ALTO", reason: "Mais casts = mais Frost aplicado = mais detonacoes do Hochadir." },
        { stat: "Crit Rate", verdict: "MEDIO", reason: "Bom pra burst mas nao e core. Frost application > crit." },
        { stat: "HP%/DEF%", verdict: "BAIXO", reason: "Backline. Sobrevivencia via Eurion." }
      ]
    },
    gear: {
      sets: [
        { name: "Whispers of the Order", reason: "ATK + Skill Haste + ult damage. Frost chain needs haste." },
        { name: "Rhapsodist (S1-S3)", reason: "Debuff application + skill damage." }
      ],
      stat_priority: "ATK > Accuracy > Skill Haste > Crit Rate"
    },
    artifact: {
      current: "Mark of the Ice Calamity (Mythic)",
      bis: "Mark of the Ice Calamity",
      alternatives: ["Witch's Remains", "Crown of the Unclean"],
      reason: "Mythic exclusivo. Frost undispellable + Cold Damage stacking. BiS absoluto."
    },
    captain: "+24% ATK (todas batalhas)",
    tips: [
      "Call of Blizzard: tornado 6s com 100% Frost. AoE persistente.",
      "Snowfall Blessing: marca aliado, AoE ao redor DELE com 100% Frost. Marca Eurion pra frost frontline.",
      "Cryomancy: bouncing Iceball 75% Frost. Hits multiplos alvos.",
      "Mythic: Frost vira UNDISPELLABLE + Cold Damage stacka. Boss nao consegue limpar."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 24780,
    priority: 3,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "Amplifier de ATK puro — passiva da +10% ATK dela pra TODOS undead summons. Ult clona summon com MAIOR ATK. Mais ATK = clones mais fortes + buff maior. Zero valor defensivo.",
      key_nodes: [
        "ATK% — +10% ATK vai pra todos undead summons. ATK alto = clones Ladehlia devastadores.",
        "Crit Rate — Twist of Fate (3 arrows) beneficia de crit. Burst damage.",
        "Crit Damage — complementa Crit Rate. Multi-hit amplifica.",
        "DMG Bonus — nodes de dano direto amplificam clone output."
      ],
      level_target: "Level 4",
      priority_stats: ["ATK%", "Crit Rate", "Crit Damage"],
      rationale: "PURE ATK. Passiva da +10% ATK pra undead summons. Ult clona summon com MAIOR ATK. ATK = tudo.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "+10% ATK de Sintrellia -> todos undead summons. Mais ATK = clones Ladehlia mais fortes." },
        { stat: "Crit Rate", verdict: "ALTO", reason: "Twist of Fate (3 arrows) beneficia de crit. Burst damage." },
        { stat: "Crit Damage", verdict: "ALTO", reason: "Complementa Crit Rate." },
        { stat: "HP%/DEF%", verdict: "BAIXO", reason: "Backline amplifier. Protegida por Eurion/Torrin." },
        { stat: "Accuracy", verdict: "BAIXO", reason: "Banshee's Curse (debuff) e bonus, nao core." }
      ]
    },
    gear: {
      sets: [
        { name: "Whispers of the Order", reason: "ATK + Skill Haste + ult damage. Clone ult = key." },
        { name: "Executioner (S1-S3)", reason: "Crit + ATK." }
      ],
      stat_priority: "ATK > Crit Rate > Crit Damage"
    },
    artifact: {
      current: "Scarlet Chess (Legendary)",
      bis: "Great Demon's Skull",
      alternatives: ["Dawn Pipe Organ", "Manticore Statue"],
      reason: "Demon's Skull = summon amp. Pipe Organ = compartilha ATK com teammates."
    },
    captain: "+24% ATK (todas batalhas)",
    tips: [
      "Echo of Destiny duplica summon com MAIOR ATK. Garanta que Ladehlia tem ATK mais alto.",
      "+10% ATK de Sintrellia vai pra TODOS undead summons. Dawn Pipe Organ stacka com isso.",
      "Captain +24% ATK e redundante se Nastjenka esta no time (mesmo aura). Use como captain quando Nastjenka nao esta.",
      "DI #24. S-tier em comps Summon."
    ],
    sources: ["AllClash", "DragonHeir.info"]
  },

  // ============================================================
  // PRIORITY 4 — ACTIVITY-SPECIFIC
  // ============================================================

  {
    id: 23210,
    priority: 4,
    talent: {
      lane: "Bottom (Suporte)",
      lane_rationale: "Healer com Debuff Immunity AoE — heals escalam com Enlightenment (+2500%!) e %Max HP. Bottom tem nodes de Enlightenment, HP e healing amp. Nenhum valor ofensivo no kit.",
      key_nodes: [
        "Enlightenment — heals tem 2500%+ scaling. O stat que mais impacta.",
        "HP% — precisa sobreviver pra manter Debuff Immunity. Epic = stats base menores.",
        "Skill Haste — Unfading Radiance = 10s Debuff Immunity AoE. Mais haste = mais uptime.",
        "Healing Amp — overflow heal vira shield (Glory's Blessing). Mais heal = shield automatico."
      ],
      level_target: "Level 3-4",
      priority_stats: ["Enlightenment", "HP%", "Skill Haste"],
      rationale: "Heals escalam com Enlightenment (+2500%) e %Max HP. Skill Haste cicla Debuff Immunity. Overflow vira shield.",
      analysis: [
        { stat: "Enlightenment", verdict: "ESSENCIAL", reason: "Heals tem 2500%+ Enlightenment scaling. E o stat que mais impacta." },
        { stat: "HP%", verdict: "ALTO", reason: "Precisa sobreviver pra manter Debuff Immunity. Epic = stats base menores." },
        { stat: "Skill Haste", verdict: "ALTO", reason: "Unfading Radiance = 10s Debuff Immunity AoE. Mais haste = mais uptime." },
        { stat: "ATK%/Crit", verdict: "IGNORAR", reason: "Healer puro. Dano nao importa." },
        { stat: "DEF%", verdict: "BAIXO", reason: "HP > DEF pra healers." }
      ]
    },
    gear: {
      sets: [
        { name: "Oasis Aspiration", reason: "HP + Skill Haste. Tank healer." },
        { name: "Three-Ears Emblem (S1-S3)", reason: "DEF + HP." }
      ],
      stat_priority: "Enlightenment > HP > Skill Haste"
    },
    artifact: {
      current: "Antinaya's Tiara (Legendary)",
      bis: "Gatekeeper's Staff",
      alternatives: ["Mirror of the Living", "Luminary Order Gospel"],
      reason: "Staff amplifica heal. Tiara = interim com Enlightenment stats."
    },
    captain: null,
    tips: [
      "Unfading Radiance: AoE heal + 10s Debuff Immunity. CORE contra Heretical Ruins e Frost Domain.",
      "Timing: use ult em ~17s do ciclo do Dead Phoenix (cobre Nirvana + Fire inteiro).",
      "Glory's Blessing: overheal vira shield. Heal forte = shield automatico.",
      "Descrita como 'amazingly well suited to many Dungeons'. Versátil."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 23280,
    priority: 4,
    talent: {
      lane: "Bottom (Suporte)",
      lane_rationale: "Shield-bot puro — shield escala com %Max HP (+10%) e Enlightenment (+1800%). Captain +18% Max HP stacka com nodes de HP. Counter #1 pro Blood Gush (Grave of Curse). Nenhum valor ofensivo.",
      key_nodes: [
        "HP% — shield = 10% Max HP alvo. Captain +18% Max HP amplifica base.",
        "Enlightenment — 1800% scaling no shield. Segundo stat mais impactante.",
        "Skill Haste — cicla Dawning Light = mais uptime de shield contra Max HP drain.",
        "DEF% — Epic precisa sobreviver AoE. Secundario."
      ],
      level_target: "Level 3-4",
      priority_stats: ["HP%", "Enlightenment", "Skill Haste", "DEF%"],
      rationale: "Shield escala com %Max HP (+10%) e Enlightenment (+1800%). Cresce 10% por inimigo hitado. Counter Blood Gush.",
      analysis: [
        { stat: "HP%", verdict: "ESSENCIAL", reason: "Shield = 10% Max HP alvo + Enlightenment. +18% Max HP captain amplifica base." },
        { stat: "Enlightenment", verdict: "ESSENCIAL", reason: "1800% Enlightenment scaling no shield. Segundo stat mais impactante." },
        { stat: "Skill Haste", verdict: "ALTO", reason: "Cicla Dawning Light mais rapido = mais uptime de shield = mais protecao contra Max HP drain." },
        { stat: "DEF%", verdict: "MEDIO", reason: "Backline mas pode tomar AoE. DEF ajuda Epic sobreviver." },
        { stat: "ATK%/Crit", verdict: "IGNORAR", reason: "Shield-bot. Dano irrelevante." }
      ]
    },
    gear: {
      sets: [
        { name: "Oasis Aspiration", reason: "HP + Skill Haste. Shield scaling." },
        { name: "Three-Ears Emblem (S1-S3)", reason: "DEF + HP." }
      ],
      stat_priority: "HP > Enlightenment > Skill Haste > DEF"
    },
    artifact: {
      current: null,
      bis: "Aurelium Vest",
      alternatives: ["Antinaya's Tiara", "Luminary Order Gospel"],
      reason: "Vest amplifica shield. Qualquer artefato com HP/Enlightenment serve interim."
    },
    captain: "+18% Max HP (todas batalhas)",
    tips: [
      "Shield DEVE estar ativo ANTES de Blood Gush (Grave of Curse). Shields bloqueiam Max HP drain.",
      "Guiding Light: remove debuffs + Recovery Over Time. Segundo layer de proteção.",
      "Slumber's Breath: buff que expira/remove = heal. Sinergia com buff-heavy teams.",
      "4.5 em G.Curse/G.Rot/Pillar. Core pra esses 3 modos."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 21670,
    priority: 4,
    talent: {
      lane: "Bottom (Defensiva)",
      lane_rationale: "Tank/healer hibrido — DEF escala AMBOS: tanque (sobrevivencia) e heal (Voodoo Therapy = 50% DEF/s). Dual scaling unico. Bottom maximiza DEF+HP que beneficiam os dois papeis. Melhor que Talwer Legendary em 90% dos cenarios.",
      key_nodes: [
        "DEF% — Voodoo Therapy heal = 50% DEF/s por 6s. DEF = tanque + heal. Dual scaling unico.",
        "HP% — tank frontline. Precisa sobreviver AoE bosses.",
        "Accuracy (se disponivel) — ATK Penalty II 75% chance. Se miss = boss mantem ATK = wipe.",
        "Skill Haste — cicla heals e ATK Penalty mais rapido."
      ],
      level_target: "Level 3-4",
      priority_stats: ["DEF%", "HP%", "Accuracy", "Skill Haste"],
      rationale: "Heals escalam com DEF (50% DEF/s). Tank + healer = DEF dual scaling. Accuracy pra ATK Penalty. Melhor que Talwer em 90% dos cenarios.",
      analysis: [
        { stat: "DEF%", verdict: "ESSENCIAL", reason: "Voodoo Therapy heal = 50% DEF/s por 6s. DEF = tanque + heal. Dual scaling." },
        { stat: "HP%", verdict: "ESSENCIAL", reason: "Tank frontline. Precisa sobreviver AoE bosses." },
        { stat: "Accuracy", verdict: "ALTO", reason: "Voodoo Conjuration = 75% Attack Penalty II. Se miss = boss nao perde ATK = team wipe." },
        { stat: "Skill Haste", verdict: "MEDIO", reason: "Cicla heals e ATK Penalty mais rapido." },
        { stat: "ATK%/Crit", verdict: "IGNORAR", reason: "Tank/healer puro. Dano irrelevante." }
      ]
    },
    gear: {
      sets: [
        { name: "Oasis Aspiration", reason: "HP + Skill Haste + damage reduction. Tank perfeito." },
        { name: "Tundra Guardian (S1-S3)", reason: "DEF + damage reduction." }
      ],
      stat_priority: "DEF > HP > Accuracy > Skill Haste"
    },
    artifact: {
      current: "Mirror of the Living (Legendary)",
      bis: "Solar King's Horn",
      alternatives: ["Mirror of the Living", "Lunar Harp"],
      reason: "Horn amplifica heals. Mirror funciona bem (heal on hit)."
    },
    captain: "+24% DEF (dungeons)",
    tips: [
      "Voodoo Conjuration: AoE Poison + 75% ATK Penalty II. Core debuff pra bosses.",
      "Passiva: hit em inimigo debuffado = heal lowest-HP aliado + remove o debuff do inimigo. Auto-heal passivo.",
      "'Escolhido em 90% das areas sobre Talwer'. Epic melhor que muitos Legendary tanks.",
      "Core de time Poison. Funciona em QUALQUER time como tank/healer generico."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 21690,
    priority: 4,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "DPS summon — dano escala com ATK e numero de undead presentes (ate 3 hits extras). Dragon herda ATK. Sinergia com Ladehlia Shadow Demon. Nodes ofensivos maximizam output.",
      key_nodes: [
        "ATK% — dragon e hits extras escalam com ATK. Captain +18% stacka.",
        "Crit Rate — multiplos hits = multiplas chances de crit.",
        "Crit Damage — complementa multi-hit + crit.",
        "DMG Bonus — amplifica tanto dragon quanto hits extras."
      ],
      level_target: "Level 3",
      priority_stats: ["ATK%", "Crit Rate", "Crit Damage"],
      rationale: "Dano escala com ATK e undead presentes (ate 3 hits extras). Dragon herda ATK. Sinergia Ladehlia.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Dragon e hits extras escalam com ATK. Captain +18% ATK stacka." },
        { stat: "Crit Rate", verdict: "ALTO", reason: "Multiplos hits = multiplas chances de crit." },
        { stat: "Crit Damage", verdict: "ALTO", reason: "Complementa multi-hit + crit." },
        { stat: "HP%/DEF%", verdict: "BAIXO", reason: "Backline DPS. Protegido pelo time." },
        { stat: "Accuracy", verdict: "BAIXO", reason: "DPS puro, nao aplica debuffs importantes." }
      ]
    },
    gear: {
      sets: [
        { name: "Whispers of the Order", reason: "ATK + Skill Haste + ult damage." },
        { name: "Executioner (S1-S3)", reason: "Crit + ATK." }
      ],
      stat_priority: "ATK > Crit Rate > Crit Damage"
    },
    artifact: {
      current: "Manticore Statue (Legendary)",
      bis: "Great Demon's Skull",
      alternatives: ["Scarlet Chess", "Ancestor's Bone"],
      reason: "Skull = summon amp. Manticore = interim (ATK stats)."
    },
    captain: "+18% ATK (todas batalhas)",
    tips: [
      "Evil Flame's Call: AoE + 1 hit extra por undead summoned presente (max 3).",
      "Sinergia Ladehlia: Shadow Demon = undead → dragon Isitarian faz ataques extras.",
      "Ancient Dragon Spell: buffa 2 undead summons com mais ATK + revive dragon.",
      "Core Goblin Lair. Sinergia de summon faz clearing rapido."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 20810,
    priority: 4,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "Boss-killer burst — passiva Burning Blood gera 3 Ult Energy em skill crits. Mais Crit = ult mais rapido = mais burst windows. Wild dice sinergia amplifica Crit DMG. Tudo ofensivo.",
      key_nodes: [
        "Crit Rate — passiva gera Ult Energy em skill crits. Mais crit = cicla ult mais rapido.",
        "ATK% — 5+ fire beams (Fiery Feather) escalam com ATK. Defense Penalty built-in.",
        "Crit Damage — com alto crit rate, cada beam maximiza burst.",
        "Wild sinergia — dice >= 5 = +5% Crit DMG stacka. Errich amplia."
      ],
      level_target: "Level 3",
      priority_stats: ["Crit Rate", "ATK%", "Crit Damage"],
      rationale: "Passiva: skill crits = 3 Ult Energy. Crit Rate cicla ult rapido. Wild dice >= 5 = Crit DMG stacka. Boss-killer.",
      analysis: [
        { stat: "Crit Rate", verdict: "ESSENCIAL", reason: "Passiva gera Ult Energy em skill crits. Mais crit = cicla ult mais rapido." },
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "5+ fire beams (Fiery Feather) escalam com ATK. Defense Penalty built-in." },
        { stat: "Crit Damage", verdict: "ALTO", reason: "Com alto crit rate, crit damage maximiza cada beam." },
        { stat: "Skill Haste", verdict: "MEDIO", reason: "Mais casts = mais chances de Wild dice >= 5 = mais beams." },
        { stat: "HP%/DEF%", verdict: "IGNORAR", reason: "Backline burst DPS." }
      ]
    },
    gear: {
      sets: [
        { name: "Echoes of War", reason: "ATK + ATK Speed + basic crit." },
        { name: "Executioner (S1-S3)", reason: "Crit + ATK." }
      ],
      stat_priority: "Crit Rate > ATK > Crit Damage"
    },
    artifact: {
      current: null,
      bis: "Witch's Remains",
      alternatives: ["Rift Hourglass", "Arcane Music Box"],
      reason: "Multi-beam = multi-hit = Witch's Remains maximo valor."
    },
    captain: "+24% Crit Damage (todas batalhas)",
    tips: [
      "Ignora escudos. Counter natural pra Frost Domain e bosses com shields.",
      "Combo Tonalnan: 5 hits +20% ATK Up → Felicity burst. Wild dice sinergia.",
      "Errich +2 dice max pra Wild aliados. Mais dice >= 5 = mais beams Felicity.",
      "5.0 nos 3 bosses (Green Dragon, Violet Dragon, Gloomland). Boss specialist."
    ],
    sources: ["DragonHeir.info"]
  },

  {
    id: 20040,
    priority: 4,
    talent: {
      lane: "Top (Ofensiva)",
      lane_rationale: "Buffer/DPS melee — derivative damage de Lightning Force escala com ATK. Chain lightning (4 bounces) escala com ATK. Blessings of Thunder buffa todo o time, mas o buff escala com stats do Schaltar. Top maximiza ATK = buff mais forte + mais dano pessoal.",
      key_nodes: [
        "ATK% — derivative damage escala com ATK. Chain lightning (4 bounces) tambem. Buff = ATK dele.",
        "Attack Speed — mais basics = mais chain lightning procs. Sinergia Nastjenka.",
        "HP% (crosslane) — melee Epic. Precisa sobreviver pra manter buff ativo.",
        "Crit Rate — chain lightning pode critar. Bonus."
      ],
      level_target: "Level 3",
      priority_stats: ["ATK%", "Attack Speed", "HP%"],
      rationale: "Lightning Force escala com ATK. Blessings of Thunder = ALL allies proc lightning derivative 15s. ATK = buff mais forte. Melee precisa sobreviver.",
      analysis: [
        { stat: "ATK%", verdict: "ESSENCIAL", reason: "Derivative damage de Lightning Force escala com ATK. Chain lightning (4 bounces) tambem." },
        { stat: "Attack Speed", verdict: "ALTO", reason: "Mais basics = mais chain lightning procs. Sinergia com Nastjenka ATK Speed → Crit Rate." },
        { stat: "HP%", verdict: "ALTO", reason: "Melee Epic. Precisa sobreviver pra manter Blessings of Thunder ativo." },
        { stat: "Crit Rate", verdict: "MEDIO", reason: "Chain lightning pode critar. Bonus." },
        { stat: "DEF%", verdict: "MEDIO", reason: "Melee sobrevivencia." }
      ]
    },
    gear: {
      sets: [
        { name: "Echoes of War", reason: "ATK + ATK Speed + basic crit. Chain lightning = basic." },
        { name: "Platinum Knight (S1-S3)", reason: "DEF + ATK. Melee survivability." }
      ],
      stat_priority: "ATK > ATK Speed > HP > Crit Rate"
    },
    artifact: {
      current: "Vile Ink (Legendary)",
      bis: "Weird Whistle",
      alternatives: ["Vile Ink", "Meditator's Pipe"],
      reason: "Weird Whistle = derivative damage amp. Vile Ink funciona bem (ATK stats)."
    },
    captain: null,
    tips: [
      "Blessings of Thunder: 15s de Lightning Force pra TODOS aliados. Core buff Dauntless.",
      "Lightning Shield: shield 1 aliado + AoE derivative. Pode proteger DPS fragil.",
      "100% Derivative damage em basics. Chain lightning 4 bounces = AoE passivo.",
      "'Schaltar funciona bem no time da Nastjenka'. 4o Dauntless forte."
    ],
    sources: ["DragonHeir.info"]
  }
];
