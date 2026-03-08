// plan.js — Imperial Shadow Recast Event Plan
// Updated: 2026-03-06

window.DATA_PLAN = {
  player: "Henry (SuperYennefer, Server 139-Darkfire)",
  updated: "06/Mar/2026",
  priority: "Imperial Shadow Recast — Meta: 450 Amethysts (Utior)",

  phases: [
    // ============================================================
    // FASE 1 — ROTINA DIÁRIA (destaque no dashboard)
    // ============================================================
    {
      id: 1,
      name: "ROTINA DIARIA DO EVENTO (todo dia, 30 min)",
      items: [
        {
          text: "SHADOW DUNGEON — Usar Double Concentrates nas 3 dungeons ativas (5 min)",
          done: false,
          subitems: [
            { text: "10 Double Concentrates por dia — usar TODOS (resetam diario, use ou perca)", done: false },
            { text: "Prioridade de dungeon: Gear (Brotherhood/Puppeteer/Witches) > Talentos > Recursos", done: false },
            { text: "Coletar amethysts = dungeon fixa a semana. Nao coletar = pode trocar dungeon amanha", done: false }
          ]
        },
        {
          text: "CONTINENTAL BOSS — Se dia de boss ou retry (10 min)",
          done: false,
          subitems: [
            { text: "Montar time designado (ver Fase 6 - Times por Boss)", done: false },
            { text: "Lutar e anotar score. Retry e GRATIS — repetir ate score satisfatorio", done: false },
            { text: "Heroi usado = TRAVADO pro resto da semana. Escolher com cuidado", done: false },
            { text: "Salvar composicao vencedora pra reusar nas proximas semanas", done: false }
          ]
        },
        {
          text: "FARMING — Stamina restante (15-20 min)",
          done: false,
          subitems: [
            { text: "Se Double Concentrates ainda tem: gastar em dungeons com drop duplo ATIVO", done: false },
            { text: "Se Double Concentrates acabou: farming normal (Goblin Lair, Talent Crystals)", done: false }
          ]
        },
        {
          text: "FIM DE SEMANA — Completar os 3 Shadow Challenges e coletar ~60 Amethysts",
          done: false
        }
      ]
    },

    // ============================================================
    // FASE 2 — PREPARACAO PRE-EVENTO
    // ============================================================
    {
      id: 2,
      name: "Preparacao Pre-Evento",
      items: [
        { text: "Equipar gear no Brody — priorizar Resistance e HP (ele MORRE = run da Vinyara falha)", done: false },
        { text: "Testar Felosia (21390) no Temporal Vortex e nos Graves para reduzir mortes precoces", done: true },
        { text: "Frey Corridor: validar execucao Manual para focar Mithrasea em comp de ressurreicao", done: true },
        { text: "Frey Corridor: registrar progresso por nivel e setup anti-buff que passou da fase Lv219", done: true },
        { text: "Frey Corridor: registrar iteracoes Lv220->Lv229 (burst vs sustain) e novo wall Fire/Wild", done: true },
        { text: "Frey Lv229: testar counter dedicado (Tamar anti-buff) contra 2x Felicity + Caspar + Horrus + Garrika", done: true },
        { text: "Frey: consolidar variante Immortals (Felosia) apos counter do Lv229 e registrar progresso ate Lv239", done: true },
        { text: "Frey Lv240: testar versao hibrida de dano/sustain (Eurion+Torrin+Lossenia+Auster+Rowena)", done: false },
        { text: "Testar Lucien (20990) como alternativa defensiva no time Ice/Frost contra controle pesado", done: false },
        { text: "Grave of Rot Lv18: validar threshold de build (summons crit alto + debuffer ~400 Accuracy)", done: true },
        { text: "Equipar Witches Remains no Zhar'loth (Def Down pro Thelandor)", done: false },
        { text: "Verificar Accuracy do time Poison — meta >290 (Durango aura +40 ajuda)", done: false },
        { text: "Equipar Brotherhood (1 por time) e Puppeteer (1 por time) onde possivel", done: false },
        { text: "Preparar food buffs: Ice (Arctic Soothing Soup), Poison (Corrupted Meat Pie), Fire (buff Fire+ATK), Lightning (Feast of Thunder), Radiance (buff Radiance+ATK), Necro (buff Necro+ATK)", done: false },
        { text: "Resgatar promo code: REBORN1MTH", done: false }
      ]
    },

    // ============================================================
    // FASE 3 — CONTINENTAL BOSSES (SEMANAL)
    // ============================================================
    {
      id: 3,
      name: "Continental Bosses — Estrategia Semanal",
      groups: [
        {
          name: "Mecanica (CONFIRMADO IN-GAME 28/Fev)",
          description: "6 bosses disponiveis desde o inicio. Evento dura 3 semanas. Tickets: Sem1=2, Sem2=4, Sem3=6. 1 ticket = 1 boss. Heroi usado = travado a semana toda. Retry gratis e ilimitado.",
          items: [
            { text: "Semana 1 (2 tickets): TESTAR todos os 6 bosses antes de commitar! So 10 herois travam → pode experimentar a vontade", done: false },
            { text: "Semana 2 (4 tickets): 20 herois travados — planejar alocacao com cuidado", done: false },
            { text: "Semana 3 (6 tickets): Todos os 6 bosses — 30 herois sem repetir", done: false },
            { text: "Time mais forte no boss mais facil (maximizar leaderboard)", done: false },
            { text: "Salvar composicao vencedora pra reusar", done: false }
          ]
        },
        {
          name: "Semana 1 — 2 Tickets",
          description: "Testar TODOS os bosses (retry gratis). Commitar nos 2 mais faceis: Thelandor + Vasska.",
          items: [
            { text: "THELANDOR (facil) — FEITO (ticket 1 salvo)", done: true },
            { text: "VASSKA (facil-medio) — FEITO (ticket 2 salvo): Lossenia+Auster+Hochadir+Vinyara+Felosia | score final 35M (posicionamento no canto)", done: true }
          ]
        },
        {
          name: "Semana 2 — 4 Tickets",
          description: "Adicionar Vinyara + Tamar. Reavaliar composicoes com base nos testes da Semana 1.",
          items: [
            { text: "THELANDOR — Time Necro/Summon", done: false },
            { text: "VASSKA — Time Ice/Frost", done: false },
            { text: "VINYARA — Time Fire/Wild: Flora+Brody+Errich+Caspar+Felicity", done: false },
            { text: "TAMAR — Time Poison: Durango+Lothair+Vicana+Jathalea+Ergander", done: false }
          ]
        },
        {
          name: "Semana 3 — 6 Tickets (TODOS)",
          description: "Todos os 6 bosses. 30 herois sem repetir. Aceitar score baixo nos dificeis (Khrysos, Twitch).",
          items: [
            { text: "THELANDOR — Time Necro/Summon", done: false },
            { text: "VASSKA — Time Ice/Frost", done: false },
            { text: "VINYARA — Time Fire/Wild", done: false },
            { text: "TAMAR — Time Poison", done: false },
            { text: "KHRYSOS (medio-dificil) — Time Dauntless: Nastjenka+Sutha+Garett+Divine Ascetic+Tamar", done: false },
            { text: "TWITCH (dificil) — Time Radiance: Huberg+Lorentheel+Acilia+Tonalnan+Catherine", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 4 — SHADOW DUNGEON (SEMANAL)
    // ============================================================
    {
      id: 4,
      name: "Shadow Dungeon — Estrategia Semanal",
      groups: [
        {
          name: "Mecanica",
          items: [
            { text: "Selecionar 3 dungeons para drops duplos. 10 Double Concentrates/dia (cada drop duplo consome 1, reseta diario)", done: false },
            { text: "Coletar amethysts de uma dungeon = dungeon FIXA a semana toda (bom se quer focar nela)", done: false },
            { text: "NAO coletar = pode TROCAR a dungeon no dia seguinte (bom se quer variar farm)", done: false },
            { text: "Total de drops duplos = 10/dia IGUAL nos dois casos. A diferenca e QUAIS dungeons recebem o bonus", done: false },
            { text: "Prioridade: Gear (Brotherhood/Puppeteer/Witches) > Talentos > Recursos", done: false }
          ]
        },
        {
          name: "Checkpoints de Amethysts",
          items: [
            { text: "Semana 1: ~105 acumulados (Shadow Dungeon 60 + Bosses + Login)", done: false },
            { text: "Semana 2: ~230 acumulados", done: false },
            { text: "Semana 3: ~375 acumulados", done: false },
            { text: "Semana 4: ~500 acumulados — UTIOR GARANTIDO", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 6 — TIMES POR BOSS (REFERENCIA)
    // ============================================================
    {
      id: 5,
      name: "Times por Boss — Builds Detalhados (Referencia)",
      groups: [
        {
          name: "THELANDOR — Necro/Summon (Facil)",
          note: "FORTE",
          description: "Boss: summon com maior ATK = dano bonus. Ladehlia Shadow Demon e match perfeito. Captain Ladehlia (+24% ATK). Artefato: Witches Remains no Zhar'loth.",
          items: [
            { text: "Ladehlia (23080) — DPS carry, Shadow Demon. Skills 8/8", done: false },
            { text: "Sintrellia (24780) — Clona Shadow Demon, buffa ATK undead", done: false },
            { text: "Ghul'ende (22310) — 720% AoE + Cleanse + Heal", done: false },
            { text: "Zhar'loth (22320) — Def Down (Witches Remains)", done: false },
            { text: "Torrin (20690) — Heal + Dispel + Debuff Immunity. Skills 8/8", done: false }
          ]
        },
        {
          name: "VASSKA — Ice/Frost (Facil-Medio)",
          note: "FORTE",
          description: "Boss: spawna adds, raw damage > heal reduction. Frost chain (Auster+Lossenia+Hochadir) = AoE massivo. Captain Lossenia (+24% ATK).",
          items: [
            { text: "Lossenia (20920) — Frost enabler. Mark of Ice Calamity", done: false },
            { text: "Auster (21030) — DPS carry, tracking arrows. Skills 8/8", done: false },
            { text: "Hochadir (22230) — Frost AoE detonator", done: false },
            { text: "Vinyara (20770) — Dispel + Shield + Accuracy aura", done: false },
            { text: "Eurion (20060) — Tank, anti-morte. Skills 8/8", done: false }
          ]
        },
        {
          name: "VINYARA — Fire/Wild + Brody (Medio)",
          note: "MEDIO",
          description: "Boss: ganha shield + Def Up. Brody REMOVE shield instantaneamente — ele e ESSENCIAL. Se Brody morrer, a run falha. Captain Flora (+24% ATK).",
          items: [
            { text: "Flora (20410) — DPS #1 S1. Wild Fire engine", done: false },
            { text: "Brody (20360) — ESSENCIAL: Shield Breaker. Investir em Resistance/HP", done: false },
            { text: "Errich (20400) — AoE Fire, +2 dice para Wild. Insp.2", done: false },
            { text: "Caspar (21970) — Wild dice, ignora DEF. Insp.1", done: false },
            { text: "Felicity (20810) — Boss-killer, ignora escudos. Insp.1", done: false }
          ]
        },
        {
          name: "TAMAR — Poison/Debuffs (Medio)",
          note: "MEDIO-FORTE",
          description: "Boss: escala com debuff stacks. Mais debuffs = mais dano. Accuracy >290 CRITICA. Captain Durango (+40 Accuracy).",
          items: [
            { text: "Durango (20670) — DPS + Accuracy aura (+40 ACC)", done: false },
            { text: "Lothair (20200) — DPS carry, Poison Derivative", done: false },
            { text: "Vicana (20630) — Marca alvo, acelera Poison ticks. Insp.1", done: false },
            { text: "Jathalea (20290) — 700% AoE + 3 Thorny Poison. Insp.1", done: false },
            { text: "Ergander (21010) — Tank, Taunt 5s + Immortality 10s", done: false }
          ]
        },
        {
          name: "KHRYSOS — Dauntless/Basic Attack (Medio-Dificil)",
          note: "MEDIO",
          description: "Boss: basic attacks = dano extra. Boss usa shields. Captain Nastjenka (+24% ATK). Divine Ascetic Battle = conta como basic attack.",
          items: [
            { text: "Nastjenka (20740) — DPS carry, basic attack machine. Skills 8/8", done: false },
            { text: "Sutha (21560) — Dauntless core, +30% ATK Speed. Insp.1", done: false },
            { text: "Garett (20660) — +24% Crit DMG aura. Insp.1", done: false },
            { text: "Divine Ascetic (23020) — 5 Battle attacks = basic attacks. Kui Crown", done: false },
            { text: "Tamar (20830) — Buff Prohibition strip shields. AC SS", done: false }
          ]
        },
        {
          name: "TWITCH — Radiance AoE puro (Dificil)",
          note: "FRACO",
          description: "Boss: PUNE DEBUFFERS. Zero debuffs neste time — so buffs e dano direto. Aceitar score baixo. Captain Huberg (+30% ATK).",
          items: [
            { text: "Huberg (20320) — Rally amplifier, +30% ATK captain", done: false },
            { text: "Lorentheel (20300) — DPS carry. Insp.3 = muito forte", done: false },
            { text: "Acilia (20420) — Anti-debuff sustain (protege time do Twitch)", done: false },
            { text: "Tonalnan (21800) — +20% ATK Up buff (sem debuffs)", done: false },
            { text: "Catherine (23280) — AoE Shield (sem debuffs)", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 7 — META FINAL
    // ============================================================
    {
      id: 6,
      name: "Meta: 450 Amethysts → Utior",
      items: [
        {
          text: "Projecao de Shadow Amethysts:",
          done: false,
          subitems: [
            { text: "Semana 1: ~105 acumulados (Shadow Dungeon 60 + Bosses 30 + Login 15)", done: false },
            { text: "Semana 2: ~230 acumulados", done: false },
            { text: "Semana 3: ~375 acumulados", done: false },
            { text: "Semana 4: ~500 acumulados — UTIOR GARANTIDO", done: false }
          ]
        },
        { text: "Comprar UTIOR (450 Amethysts) — Legendary Necrosis gratuito", done: false },
        { text: "Utior: passiva ganha Ult Energy quando unidade morre (sinergiza com Ladehlia+Sintrellia summons)", done: false },
        { text: "Se sobrar Amethysts (>450): avaliar cosmeticos (Print of Shadow, Umbra of Necrosis)", done: false }
      ]
    }
  ]
};
