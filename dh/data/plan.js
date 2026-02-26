// plan.js — Imperial Shadow Recast Event Plan
// Updated: 2026-02-26

window.DATA_PLAN = {
  player: "Henry (SuperYennefer, Server 139-Darkfire)",
  updated: "26/Fev/2026",
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
            { text: "Verificar progresso dos 3 Shadow Challenges — se quase completando, PARAR farm nessa dungeon", done: false },
            { text: "Prioridade de dungeon: Gear (Brotherhood/Puppeteer/Witches) > Talentos > Recursos", done: false },
            { text: "NUNCA completar challenges cedo — manter ativos ate final da semana pra aproveitar mais Double Concentrates", done: false }
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
        { text: "Equipar Witches Remains no Zhar'loth (Def Down pro Thelandor)", done: false },
        { text: "Verificar Accuracy do time Poison — meta >290 (Durango aura +40 ajuda)", done: false },
        { text: "Equipar Brotherhood (1 por time) e Puppeteer (1 por time) onde possivel", done: false },
        { text: "Preparar food buffs: Ice (Arctic Soothing Soup), Poison (Corrupted Meat Pie), Fire (buff Fire+ATK), Lightning (Feast of Thunder), Radiance (buff Radiance+ATK), Necro (buff Necro+ATK)", done: false },
        { text: "Resgatar promo code: REBORN1MTH", done: false }
      ]
    },

    // ============================================================
    // FASE 3 — SEMANA 1
    // ============================================================
    {
      id: 3,
      name: "Semana 1 — 2 Bosses",
      groups: [
        {
          name: "Bosses Disponiveis",
          description: "2 bosses abrem. Voce tem a semana inteira pra lutar. Retry gratis e ilimitado. Heroi usado = travado ate reset semanal.",
          items: [
            { text: "Identificar quais 2 bosses abriram", done: false },
            { text: "Alocar os 2 times MAIS FORTES nos bosses disponiveis (ver Fase 6)", done: false },
            { text: "Lutar contra Boss 1 — retry ate score satisfatorio", done: false },
            { text: "Lutar contra Boss 2 — retry ate score satisfatorio", done: false },
            { text: "Anotar scores e composicoes que funcionaram", done: false }
          ]
        },
        {
          name: "Shadow Dungeon — Semana 1",
          items: [
            { text: "Ativar 3 Shadow Challenges no inicio da semana", done: false },
            { text: "Usar Double Concentrates DIARIAMENTE em cada dungeon", done: false },
            { text: "Completar os 3 challenges so no ULTIMO DIA da semana", done: false }
          ]
        },
        {
          name: "Leaderboard",
          description: "Semana 1 com so 2 bosses = TODOS os jogadores competindo nos mesmos 2 bosses. Oportunidade de rankear alto.",
          items: [
            { text: "Focar retries no boss mais facil pra subir no leaderboard", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 4 — SEMANA 2
    // ============================================================
    {
      id: 4,
      name: "Semana 2 — 4 Bosses",
      groups: [
        {
          name: "Bosses Disponiveis",
          description: "4 bosses abrem. Reset total de herois. Montar 4 times do zero. ALOCACAO FLEXIVEL: se boss dificil (ex: Twitch) apareceu, coloque time forte nele agora — na Semana 3 voce ajusta.",
          items: [
            { text: "Identificar quais 4 bosses abriram", done: false },
            { text: "Alocar times conforme dificuldade dos bosses (time forte → boss dificil, pois so tem 4)", done: false },
            { text: "Lutar contra todos os 4 bosses — retry ate score satisfatorio", done: false },
            { text: "Anotar o que funcionou e o que precisa ajustar", done: false }
          ]
        },
        {
          name: "Shadow Dungeon — Semana 2",
          items: [
            { text: "Escolher 3 novos Shadow Challenges", done: false },
            { text: "Usar Double Concentrates DIARIAMENTE", done: false },
            { text: "Completar challenges so no ULTIMO DIA", done: false }
          ]
        },
        {
          name: "Checkpoint de Amethysts",
          description: "Meta: ~230 acumulados ate aqui. Se abaixo de 180, aumentar foco em Shadow Dungeon.",
          items: [
            { text: "Verificar total de Shadow Amethysts acumulados", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 5 — SEMANA 3
    // ============================================================
    {
      id: 5,
      name: "Semana 3 — 6 Bosses (TODOS)",
      groups: [
        {
          name: "Bosses Disponiveis",
          description: "Todos os 6 bosses abrem. Precisa de 30 herois sem repetir. AGORA sim: time mais forte no boss mais facil (maximizar leaderboard). Time mais fraco no boss mais dificil (aceitar score baixo).",
          items: [
            { text: "Montar 6 times conforme Fase 6 (sem heroi repetido!)", done: false },
            { text: "THELANDOR (facil) — Time Necro/Summon: Ladehlia+Sintrellia+Ghul'ende+Zhar'loth+Torrin", done: false },
            { text: "VASSKA (facil-medio) — Time Ice/Frost: Lossenia+Auster+Hochadir+Vinyara+Eurion", done: false },
            { text: "TAMAR (medio) — Time Poison: Durango+Lothair+Vicana+Jathalea+Ergander", done: false },
            { text: "VINYARA (medio) — Time Fire/Wild: Flora+Brody+Errich+Caspar+Felicity", done: false },
            { text: "KHRYSOS (medio-dificil) — Time Dauntless: Nastjenka+Sutha+Garett+Divine Ascetic+Tamar", done: false },
            { text: "TWITCH (dificil) — Time Radiance: Huberg+Lorentheel+Acilia+Tonalnan+Catherine. Aceitar score baixo", done: false }
          ]
        },
        {
          name: "Shadow Dungeon — Semana 3",
          items: [
            { text: "Escolher 3 novos Shadow Challenges", done: false },
            { text: "Usar Double Concentrates DIARIAMENTE", done: false },
            { text: "Completar challenges so no ULTIMO DIA", done: false }
          ]
        },
        {
          name: "Checkpoint de Amethysts",
          description: "Meta: ~375 acumulados. Utior (450) deve ser alcancado na Semana 4.",
          items: [
            { text: "Verificar total de Shadow Amethysts acumulados", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 6 — TIMES POR BOSS (REFERENCIA)
    // ============================================================
    {
      id: 6,
      name: "Times por Boss (Referencia)",
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
      id: 7,
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
