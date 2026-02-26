// guides.js — Player guides consolidated from .md docs
// Last source update: 2026-02-13

window.DATA_GUIDES = {

  // === DAILY ROUTINE (30-40 min/dia) ===
  daily_routine: {
    total_time: "30-40 min/dia",
    sessions: [
      {
        name: "Sessao Manual (15-20 min)",
        tasks: [
          {
            priority: 1,
            name: "Daily Commissions (<5 min)",
            steps: [
              "Coletaveis rapidos — Wyrmarrow, EXP, Gold",
              "Reroll daily tasks para maximizar Gold e Wyrmarrow",
              "Check-in diario"
            ]
          },
          {
            priority: 2,
            name: "Adventure Mode (5-10 min)",
            steps: [
              "Avancar historia ate o cap atual",
              "Skill checks: Thief lockpicking garante loot extra",
              "Explorar baus escondidos e puzzles"
            ]
          },
          {
            priority: 3,
            name: "Gestao de Time (5 min)",
            steps: [
              "Revisar composicao se ganhou heroi novo",
              "Equipar/trocar gear (gratuito)",
              "Ajustar talents se material disponivel"
            ]
          }
        ]
      },
      {
        name: "Sessao Auto (Background — BlueStacks/Emulador)",
        tasks: [
          {
            name: "Fey Meander Auto-Challenge",
            desc: "300 andares, full auto. Deixar rodando ate perder — coleta rewards progressivos"
          },
          {
            name: "Dungeon Farming",
            desc: "Auto-battle + 2x speed. Goblin Lair = melhor XP/stamina. Elemental Dungeons = materiais",
            macro: "Start Battle → Victory → Replay"
          }
        ],
        notes: [
          "Auto-repeat FECHA se sair do jogo no celular",
          "Usar BlueStacks/LDCloud/Power Automate para manter aberto",
          "4x reward multiplier quando disponivel"
        ]
      },
      {
        name: "Fim do Dia (5 min)",
        tasks: [
          "Coletar resultados do farming",
          "Gastar stamina restante antes de dormir",
          "Verificar eventos expirando",
          "Gift stamina para friends (ate 20/dia)"
        ]
      }
    ],
    weekly: [
      "Ancestral Ruins: nova rotacao de herois gratis",
      "Season Journey: verificar chapters completados",
      "Guild contributions se estiver em guild",
      "Verificar banner rotativo (muda a cada ~5 dias)"
    ],
    automation: {
      setup: [
        "BlueStacks rodando Dragonheir em resolucao fixa",
        "Power Automate Desktop com deteccao de imagem",
        "Macros: Click Start Battle → Click Replay → Click Collect All",
        "Rodar durante horario de trabalho/dormindo"
      ],
      limitations: [
        "Dungeons com resistencia elemental podem requerer troca manual",
        "Boss fights dificeis precisam de ultimate timing manual",
        "Auto-spellcasting resolve parcialmente (liga uso automatico de ults)"
      ]
    },
    stamina: {
      regen: "Com tempo",
      refills: "2/dia: 150 gems cada (vale a pena)",
      sources: "Stamina Bread de gift codes e eventos",
      priority: "Goblin Lair (XP) → Elemental Dungeons (mats)"
    }
  },

  // === BEGINNER/VETERAN GUIDE ===
  beginner_guide: {
    first_day_checklist: [
      { text: "Heranca confirmada (SuperYennefer, herdada de Morrigann S1 — 118 herois, 2.583 Wyrmarrow, 26 artefatos)", done: true },
      { text: "Completar tutorial e desbloquear roster", done: true },
      { text: "Escolher raca (Humano/Half-Elf) e classe (Thief)", done: true },
      { text: "Identificar Legendarios e Epicos S-tier no roster", done: true },
      { text: "Montar primeiro time com Elemental Bond", done: true },
      { text: "Acumular dice para ciclos de 70 pulls", done: true },
      { text: "Equipar artefatos nos herois core", done: true },
      { text: "Avancar Main Quest ate desbloquear dungeons", done: true },
      { text: "Resgatar Drizzt (gratuito, dia 6+)", done: false },
      { text: "Formar ou entrar em Adventure Team (5 jogadores)", done: false },
      { text: "Guardar Master Scrolls e Wyrmarrow restante", done: false }
    ],
    character_creation: {
      races: [
        { name: "Humano", stats: "Constitution, Charisma, Wisdom", note: "Equilibrado" },
        { name: "Half-Elf", stats: "Charisma, Wisdom, Dexterity", note: "Exploracao e dialogos" },
        { name: "Anao (Dwarf)", stats: "Strength, Constitution", note: "Tank/resistencia" },
        { name: "Lizardfolk", stats: "Strength, Constitution, Charisma", note: "Stats fisicos altos" }
      ],
      race_note: "Impacto pequeno no longo prazo — afeta apenas skill checks na exploracao",
      classes: [
        { name: "Thief", stat: "+Dexterity", skills: "Lockpicking (loot extra), Stealing", recommended: true },
        { name: "Soldier", stat: "+STR", skills: null, recommended: false },
        { name: "Archeologist", stat: "+SEN/INT", skills: null, recommended: false },
        { name: "Actor", stat: "+CHA", skills: null, recommended: false }
      ],
      element: "Alterna entre Fire, Ice, Lightning a qualquer momento via Psychicore > Element Power"
    },
    seven_day_plan: [
      { day: "1", tasks: "Completar main quest ate Furywood Claws. Goblin Dungeon + Grave of Venom (first-clear). Temporal Vortex: challenge Sea King" },
      { day: "2", tasks: "Luvas e roupas desbloqueiam. Farm equipment sets. Advanced Technique quests (Talent resources + Auras)" },
      { day: "3-7", tasks: "Level cap sobe → farm gold equipment. Complete sets DPS+Tank. Unlock Positive Runes. Farm Talent Stones lv4. Explorar Local Quests, Ancestral Ruins, Fey Meander" }
    ],
    hidden_resources: [
      "Local Quest Exploration: apos completar, checar mapa para exploracao completa",
      "Ancestral Ruins: trial heroes ajudam a subir andares",
      "Fey Meander: farm qualquer hora, recursos valiosos early game",
      "Treasure Maps: NPCs vendem em cidades → Wyrmarrow + Talent Stones",
      "NPC Affinity: aumentar afinidade → Talent Stones gratis (economiza Stamina)"
    ]
  },

  // === RESOURCE MANAGEMENT ===
  resource_management: {
    currencies: {
      main: [
        {
          name: "Wyrmarrow (Premium — Vermelho)",
          use: "Comprar Heliolite Dice (100 = 1 pull). Tambem: stamina refills, Gold, Alliance items",
          sources: "Quests, exploracao, eventos, login, map loot, dungeons",
          rule: "NUNCA gaste em nada que nao seja Heliolite Dice ou stamina refill"
        },
        {
          name: "Dragon Crystals (Premium — Compra)",
          use: "Itens raros na loja, ofertas especiais",
          sources: "Compra real ($), eventos especiais",
          note: "Preservados 1:1 da versao antiga"
        },
        {
          name: "Gold",
          use: "Upgrade gear, comprar potions, level up heroes",
          sources: "Quests, venda de gear, exploracao",
          tip: "Batch sell gear desnecessario regularmente"
        },
        {
          name: "Stamina (icone de pao)",
          use: "Entrar em dungeons",
          regen: "Tempo + compra (150 gems) + Stamina Bread",
          rules: ["Nunca deixe stamina cheia (desperdica regen)", "Gift: ate 20 amigos/dia"]
        }
      ],
      summon: [
        {
          name: "Heliolite Dice (Laranja)",
          use: "APENAS em banners limitados — rate 1.5% Legendario (pity 70)",
          cost: "100 Wyrmarrow (Daily Supply Store)",
          rule: "NUNCA use no banner permanente"
        },
        {
          name: "Starlight Stone Dice (Roxo)",
          use: "Banner permanente — sem Legendario possivel",
          rule: "Gaste livremente, sem razao para guardar"
        }
      ],
      seasonal: {
        names: "Chaos Clepsydra, Pure Sandcore",
        warning: "RESETAM entre seasons — GASTE ANTES da transicao ou perde"
      }
    },
    progression: [
      { name: "Talent Stones", use: "Upgrade hero talents (12 por heroi)", sources: "NPC Affinity, Treasure Maps, Advanced Technique quests", priority: "DPS → Tank → Support" },
      { name: "Skill Scrolls / Master Scrolls", use: "Upar skills de herois", rule: "APENAS em S-tier confirmados" },
      { name: "Affinity Solvents", use: "Upar Elemental Affinity (Psychicore)", sources: "Quests, exploracao" },
      { name: "Essence of Creation", use: "Refinar artefatos", note: "Preservada da versao antiga — nao reseta" },
      { name: "Soul Imprints (Novo)", use: "Realocacao de recursos de inspiracao", note: "Convertido de inspiration levels antigos" }
    ],
    gift_codes: {
      how: "Settings → Service Tab → Redemption Code",
      sources: "Twitter @Dragonheir_SG, Discord, Facebook, Reddit",
      notes: "Case-sensitive, sem espacos extras. Mailbox desbloqueia apos recrutar Forbrit"
    },
    golden_rules: [
      "Wyrmarrow → so Heliolite Dice (banner limitado)",
      "Master Scrolls → so S-tier confirmados",
      "Stamina → gastar sempre, nunca deixar cheia",
      "Moedas sazonais → gastar antes do fim da season",
      "Gold → manter reserva, upgrade apenas gear Mythic",
      "Heliolite Dice → NUNCA no banner permanente"
    ]
  }
};
