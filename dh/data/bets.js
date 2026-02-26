// bets.js — Wager mode analysis & tracking
// Tracks bets, team analysis, reasoning, results, and learnings
// Used to improve predictions over time AND inform team-building recommendations
window.DATA_BETS = {
  updated: "2026-02-20",

  // ============================================================
  // CUMULATIVE STATS
  // ============================================================
  stats: {
    total: 4,
    wins: 1,
    losses: 2,
    pending: 1,
    win_rate: "33.3%",
    streak: -1,
    // Comparacao: nossas apostas vs maioria dos jogadores
    vs_population: {
      our_record: "1W-2L (33%)",
      majority_record: "1W-2L (33%)",
      details: [
        { round: 1, our_pick: "red", majority_pick: "red (86%)", winner: "blue", we_right: false, majority_right: false },
        { round: 2, our_pick: "red", majority_pick: "red (77%)", winner: "red", we_right: true, majority_right: true },
        { round: 12, our_pick: "red", majority_pick: "red (80.9%)", winner: "blue", we_right: false, majority_right: false }
      ],
      insight: "1W-2L. Padrao claro: times defensivos 'sem DPS' sao SISTEMATICAMENTE subestimados — por nos E pela maioria. Rounds 1 e 12: maioria 80%+ apostou no time DPS e perdeu. Nosso vies: supervalorizar DPS, subvalorizar defense stacking."
    }
  },

  // ============================================================
  // LEARNINGS — Updated after each result
  // Applies to BOTH betting predictions AND Henry's team-building
  // ============================================================
  learnings: [
    {
      id: "L1",
      insight: "1 elite DPS (SS, HH 4.6+) + 4 support VENCE time de summons. Nastjenka SOZINHA fez 633k dano (78% do total) = 3.35x mais que o time Red INTEIRO (248k). Quantidade de DPS sources nao importa se a qualidade eh baixa.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L2",
      insight: "Healing massivo anula Summon Derivative. Acilia SOZINHA curou 918k = 3.7x mais do que TODO o dano de Red (248k). Derivative damage de summons eh DISPERSO e FRACO contra healing concentrado. Summon chain supervalorizado na analise.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L3",
      insight: "DI rank eh MELHOR preditor que AC tier no Wager mode. Blue DI avg 11.6 venceu Red DI avg 30.0. DI avalia S1 endgame meta = mais proximo do combate real no Wager. Zeffi (AC tier B mas DI #2) foi critico na vitoria.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting"]
    },
    {
      id: "L4",
      insight: "Resplendence FULL (5/5) >>> sem afinidade. Gap de stats eh enorme. Blue com Resplendence teve +40k HP e defendeu com HP intocado. Sempre priorizar time com afinidade completa.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L5",
      insight: "Tamar Buff Prohibition DESTRUIU a summon chain. Sem buffs de Sintrellia nos summons, Derivative caiu drasticamente. Anti-buff specialist eh DEVASTADOR contra comps buff-dependentes (Summon, Frost buffs, etc).",
      confidence: "medium",
      source: "round-1",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L6",
      insight: "Quando score quantitativo favorece Blue (67 vs 70), NAO overridar com raciocinio qualitativo. O score estava certo — eu errei ao escolher Red por 'mais DPS sources'. Confiar nos numeros.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting"]
    },
    {
      id: "L7",
      insight: "86% dos apostadores erraram (escolheram Red). Popularidade da aposta NAO indica qualidade. Times defensivos com 1 carry elite sao SISTEMATICAMENTE subestimados pelo publico.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting"]
    },
    {
      id: "L8",
      insight: "Lelwanis Dragon form NUNCA se concretizou. Precisa de 20 Dragon Blood (1 por morte) mas Blue nao morreu = 0 stacks do campo inimigo. Win conditions que dependem de matar inimigos falham contra times que nao morrem.",
      confidence: "high",
      source: "round-1",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L9",
      insight: "Twitch + Lothair = FEEDBACK LOOP MULTIPLICATIVO. Twitch passiva (20% Derivative + Poison) triga a CADA Poison aplicado por aliados. Com 3 Poison sources = dezenas de triggers. Twitch SUPEROU Lothair em DPS individual (45.5% vs 30.9%). Combinacao BRUTAL reconhecida pela comunidade.",
      confidence: "high",
      source: "round-2",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L10",
      insight: "Poison chain (deterministic) >>> Wild dice chain (RNG). Poison stacks aplicam AUTOMATICAMENTE via skills, Derivative escala com volume. Wild dice depende de rolls aleatorios. No Round 2, Poison chain destruiu Wild chain.",
      confidence: "high",
      source: "round-2",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L11",
      insight: "Score quantitativo (78 vs 70) ACERTOU Round 2. Quando score favorece um time por 8+ pontos com DPS pipeline consistente (nao RNG), confiar no score. Round 1 o score estava certo tambem (70 Blue > 67 Red) — eu que overridei errado.",
      confidence: "high",
      source: "round-2",
      applies_to: ["betting"]
    },
    {
      id: "L12",
      insight: "Bet population: Round 1 maioria (86%) ERROU. Round 2 maioria (77%) ACERTOU. Round 12 maioria (80.9%) ERROU. Maioria popular tem VIES FORTE pro time DPS. 2 de 3 vezes que 80%+ apostou no DPS, o defensivo ganhou.",
      confidence: "high",
      source: "round-1,round-2,round-12",
      applies_to: ["betting"]
    },
    {
      id: "L13",
      insight: "4 support layers (Shield + DR + Immortality + Resurrection + Ally Protection) = IMPENETRAVEL mesmo contra Frost chain elite (2 SS + 2 S). DPS quality eh IRRELEVANTE quando alvo literalmente nao pode morrer. Blue HP mal foi tocado.",
      confidence: "high",
      source: "round-12",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L14",
      insight: "Execute (<15% HP) eh mecanica CONDICIONAL. Se layers defensivos impedem alvo de chegar a <15%, Execute NUNCA ativa. Avaliar kill conditions CONTRA o oponente, nao no vacuo.",
      confidence: "high",
      source: "round-12",
      applies_to: ["betting"]
    },
    {
      id: "L15",
      insight: "Oggok passiva (heal → dispel debuff) DESTROI Frost chain. Frost removido a cada heal = Hvitar DoT nao funciona, Auster tracking nao dispara, Hochadir nao detona. Counter DIRETO a mecanica core = comp inteira colapsa.",
      confidence: "high",
      source: "round-12",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L16",
      insight: "'Full support sem DPS' VENCE glass cannon por atrito. Chip damage lento (Utior 420%, Grishnaar 550% DEF-based) + unkillable = vitoria eventual. TEMPO eh a arma. Nao precisa de DPS dedicado pra vencer.",
      confidence: "high",
      source: "round-12",
      applies_to: ["betting", "team-building"]
    },
    {
      id: "L17",
      insight: "FRAMEWORK QUEBRADO: avaliar fatores NO VACUO gera overconfidence. Cada fator deve ser avaliado como MATCHUP (DPS vs ESTA defesa, Kill condition vs ESTE oponente). Score 80 vs 27 com 85% confianca = erro sistematico.",
      confidence: "high",
      source: "round-12",
      applies_to: ["betting"]
    },
    {
      id: "L18",
      insight: "PADRAO CONFIRMADO: times defensivos sem DPS aparente sao subestimados SISTEMATICAMENTE. Rounds 1 e 12: 80%+ apostaram no time DPS, defensivo ganhou com HP intocado. Quando ver 4 supports: NAO assumir que perdem — analisar layers.",
      confidence: "high",
      source: "round-1,round-12",
      applies_to: ["betting"]
    }
  ],

  // ============================================================
  // TEAM ARCHETYPES — Patterns observed across bets
  // Helps predict future matchups AND build Henry's teams
  // ============================================================
  archetypes: {
    "frost-chain-4": {
      description: "4 Ice Frost heroes. Massive AoE Frost application + detonation + execution.",
      strengths: ["Overwhelming sustained DPS", "Frost undispellable (with Mark of Ice Calamity)", "Execute <15% HP (Hvitar)", "Perfect school bond", "Perfect elemental affinity"],
      weaknesses: ["Zero tank", "Zero healer", "Glass cannon — PERDE pra defense stacking (Round 12)", "Execute NAO funciona se alvo nunca chega <15%", "Frost chain QUEBRA se oponente tem dispel passivo (Oggok)"],
      key_heroes: ["Hvitar", "Auster", "Lossenia", "Hochadir"],
      key_artifacts: ["Eternal Snow Crystal (Hvitar Exclusive)", "Mark of the Ice Calamity (Lossenia)", "Ring of Winter (Hochadir)"],
      seen_in: ["round-12-red"],
      record: { wins: 0, losses: 1, pending: 0 }
    },
    "full-support-4": {
      description: "4 Support heroes from mixed elements. Ultra-defensive with shields, immortality, resurrection, damage reduction.",
      strengths: ["Extreme survivability layers = IMPENETRAVEL (comprovado Round 12)", "Immortality + Resurrection = duas vidas", "Control Immunity prevents CC", "Damage Reduction stacking", "Chip damage BASTA pra vencer por atrito", "Oggok dispel passivo DESTROI Frost chain", "HP MAL TOCADO contra Frost elite"],
      weaknesses: ["DPS lento — lutas demoram", "Sem afinidade elemental", "Pode perder pra Healing Prohibition + burst massivo (teorico)"],
      key_heroes: ["Felosia", "Utior", "Oggok", "Grishnaar"],
      key_artifacts: [],
      seen_in: ["round-12-blue"],
      record: { wins: 1, losses: 0, pending: 0 }
    },
    "summon-army-5": {
      description: "3 Summon + 2 Support, Necrosis-heavy. Summon chain with passive Derivative + Dragon transform win condition.",
      strengths: ["Overwhelming summon numbers", "Derivative passive = DPS that scales with summon count", "Dragon transform = late-game powerhouse", "Anti-shield (Khrysos)", "Invisibility window (Torrin)"],
      weaknesses: ["No cross-element affinity", "Dependent on summons surviving AoE", "Needs time to scale (Dragon Blood stacks)", "Mixed elements break affinity"],
      key_heroes: ["Lelwanis", "Sintrellia", "Premtsa", "Torrin", "Khrysos"],
      key_artifacts: ["Black Blood Scale (Lelwanis Exclusive)"],
      seen_in: ["round-1-red"],
      record: { wins: 0, losses: 1, pending: 0 }
    },
    "hyper-protect-1dps-5": {
      description: "1 elite DPS (Nastjenka SS) + 4 Support. Full Resplendence affinity. Extreme layered defense to keep carry alive.",
      strengths: ["Full Resplendence affinity (5/5)", "Resurrection at Death + resurrect dead at 75% HP", "Invincibility <30% HP", "Debuff Immunity", "Buff Prohibition shuts down enemy buffs", "Single carry = all resources focused"],
      weaknesses: ["If Nastjenka dies twice, no more DPS", "Dependent on support cooldowns not overlapping gaps", "Only 1 DPS source", "Zeffi B-tier = weakest link"],
      key_heroes: ["Nastjenka", "Mithrasea", "Acilia", "Tamar", "Zeffi"],
      key_artifacts: ["Arbiter's Pendant (Nastjenka Exclusive)"],
      seen_in: ["round-1-blue"],
      record: { wins: 1, losses: 0, pending: 0 }
    },
    "poison-chain-5": {
      description: "3 Poison DPS (incl elite carry) + 1 Anti-Buff Support + 1 Tank. Poison stacking -> Derivative scaling massivo via Lothair.",
      strengths: ["Lothair Derivative escala com Poison stacks", "Durango aplica Poison em TODOS no inicio", "Tamar Buff Prohibition disrupta", "Grishnaar tank protege carry"],
      weaknesses: ["Sem healer dedicado", "Sem cross-element affinity", "Carry melee = exposto a CC"],
      key_heroes: ["Lothair", "Durango", "Twitch", "Tamar", "Grishnaar"],
      key_artifacts: ["Nightfall Pallium (Lothair Exclusive)"],
      seen_in: ["round-2-red"],
      record: { wins: 1, losses: 0, pending: 0 }
    },
    "wild-dice-burst-5": {
      description: "3 Wild DPS (dice chain) + 2 Support. Flora Vortex burst + Felicity crit monster + Errich dice enabler.",
      strengths: ["Flora DI #1 Vortex burst", "Felicity 90% Crit / 200% CD", "Errich upgrada dice de todos Wild", "Khrysos shields + heal conversion", "Ghul'ende Charm"],
      weaknesses: ["0 SS tiers", "Wild dice = parcialmente RNG", "Sem resurrection/immortality"],
      key_heroes: ["Flora", "Felicity", "Errich", "Khrysos", "Ghul'ende"],
      key_artifacts: ["Esoteric Pearl Necklace (Flora Exclusive)"],
      seen_in: ["round-2-blue"],
      record: { wins: 0, losses: 1, pending: 0 }
    }
  },

  // ============================================================
  // ANALYSIS FACTORS — Weighted criteria for predictions
  // Weights adjusted as we learn from results
  // ============================================================
  analysis_factors: [
    { factor: "Defense layer count",       weight: 10, notes: "NOVO apos Round 12: 3+ layers defensivos INDEPENDENTES (Shield + DR + Immortality + Resurrection + Ally Protection) = IMPENETRAVEL. Fator MAIS IMPORTANTE. Contar layers e avaliar se DPS oponente pode furar TODAS." },
    { factor: "Kill condition vs OPPONENT", weight: 9, notes: "RENOMEADO e ATUALIZADO apos Round 12. Era 'Kill condition viability' peso 7. Avaliar se a condicao PODE ser atingida CONTRA ESTE oponente. Execute <15% = MORTO contra defense stacking. Subiu 7→9." },
    { factor: "Anti-core-mechanic counter", weight: 9, notes: "NOVO apos Round 12: Se oponente tem counter DIRETO a mecanica core (Oggok dispel vs Frost chain), comp inteira colapsa. Verificar ANTES de tudo. Separado de Anti-buff." },
    { factor: "Elemental Affinity",        weight: 7, notes: "REBAIXADO apos Round 12: Red tinha Permafrost MAX, Blue ZERO. Nao importou. Affinity AJUDA mas nao DECIDE contra defense stacking. Era 9, agora 7." },
    { factor: "DPS quality (not quantity)", weight: 7, notes: "REBAIXADO apos Round 12: 2 SS + 2 S Frost chain nao furou 4 A supports. DPS quality so importa se alvo pode morrer. Era 9, agora 7." },
    { factor: "School Bond synergy",       weight: 7, notes: "4/4 same school = forte. Mas Frost chain 4/4 perdeu pra Support 4/4 (Round 12). School DPS < School defensivo em matchups extremos. Era 8, agora 7." },
    { factor: "Survivability / Defense stacking", weight: 9, notes: "MASSIVAMENTE ATUALIZADO apos Round 12. Era 'Survivability baseline' peso 6. 4 supports com HP intocado contra Frost elite = defesa GANHA jogos SOZINHA. Subiu 6→9." },
    { factor: "Healing throughput + Dispel", weight: 8, notes: "ATUALIZADO: Inclui dispel agora. Oggok heal+dispel = anulou Frost chain inteira. Healing que TAMBEM remove debuffs eh multiplicativamente mais forte." },
    { factor: "DI ranking average",        weight: 7, notes: "Round 12: Red DI melhor (#3, #6, #26) mas perdeu. DI nao previu resultado quando defense layers > DPS. Era 8, agora 7." },
    { factor: "Artifact synergy",          weight: 7, notes: "Exclusive Mythics = power spike. Mas Hvitar Exclusive + Mark of Ice Calamity + Ring of Winter nao furaram defense. Artefatos DPS sao tao bons quanto a capacidade de matar." },
    { factor: "Anti-buff / Anti-synergy",  weight: 7, notes: "Tamar Buff Prohibition (Round 1) + Oggok dispel (Round 12) = ambos destruiram comps. Counter especifico eh devastador." },
    { factor: "Tier quality (AC/HH/DI)",   weight: 5, notes: "REBAIXADO: 2 SS + 2 S perdeu pra 4 A (Round 12). Tier individual nao importa quando comp eh sinergica. Era 6, agora 5." },
    { factor: "Resurrection / Immortality", weight: 8, notes: "MASSIVAMENTE ATUALIZADO: Era 4. Immortality 5s + Resurrection = DUAS VIDAS. Com defense layers = target precisa ser morto 2x mas PRIMEIRA vez ja eh impossivel. Subiu 4→8." },
    { factor: "Sustained vs Burst DPS",    weight: 5, notes: "Sustained DPS (Frost chain) NAO desgastou defensivos (Round 12). Chip damage defensivo BASTOU pra vencer por atrito." }
  ],

  // ============================================================
  // BETS — Individual bet entries (ordered by round)
  // ============================================================
  bets: [
    // ──────────────────────────────────────────────────────────
    // ROUND 1
    // ──────────────────────────────────────────────────────────
    {
      id: "round-1",
      round: 1,
      date: "2026-02-18",
      screenshots: [
        "logs/round-1-matchup.png",
        "logs/round-1-stats-red.png",
        "logs/round-1-stats-blue.png"
      ],
      mode: "Wager (aposta PvP, 2 times AI vs AI)",

      // --- RED TEAM ---
      red: {
        heroes: [
          {
            name: "Lelwanis",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Summon",
            type: "Melee",
            race: "Dragon",
            heroId: 21770,
            ac_tier: "SS",
            hh_overall: 4.0,
            hh_ratings: { temporal_vortex: 4, goblin_lair: 4, grave_venom: 4, grave_curse: 4, grave_rot: 4, heretical_ruins: 4, ancient_battlefield: 4, arena: 5, fae: 4, pillar: 4, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 9,
            di_ratings: { temporal_vortex: 5.0, goblin_lair: 4.0, grave_venom: 4.0, grave_curse: 5.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 5.0 },
            role: "Summon DPS / Dragon Transform",
            captain: "Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.",
            skills: {
              ult: "Dragon of Death: Sacrifica todos undead summons nao-elite (+300% Necrotic AoE). Se Dragon Blood >= 20, transforma em dragao (stack limit 70). Duplicate no dragao = +10 Dragon Blood. Cada Natural Instinct = +1 Dragon Blood.",
              battle: "Lady of Dark Ruins: Ataca inimigo com menor HP (+200% Necrotic AoE) + invoca 1 Corpse 15s.",
              passive: "Dragon God's Lineage: Ganha 1 Dragon Blood permanente quando qualquer alvo morre. -30% dano de alvos a 3+ tiles."
            },
            exclusive_artifact: {
              name: "Black Blood Scale",
              rarity: "Mythic",
              stats: "ATK + Crit Damage",
              skill: "Lady of Dark Ruins 100% chance de invocar 2 corpses (ao inves de 1). A cada 10 Dragon Blood: +5% DEF Penetration + +5% dano Dragon of Death."
            },
            analysis: "Carry principal. Dragon form e o win condition. Black Blood Scale da 2 corpses por battle skill = Dragon Blood acumula RAPIDO. Com 70 stacks = +35% DEF Pen + +35% Ult damage. DI #9 = S1 endgame elite."
          },
          {
            name: "Sintrellia",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Summon",
            type: "Range",
            race: "Undead",
            heroId: 24780,
            ac_tier: "S",
            hh_overall: null,
            hh_ratings: null,
            di_rank: 24,
            di_ratings: { temporal_vortex: 4.5, goblin_lair: 4.0, grave_venom: 3.5, grave_curse: 5.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 5.0 },
            role: "Summon Amplifier / Clone",
            captain: "Increases all allies' Attack by 24% in all battles.",
            skills: {
              ult: "Echo of Destiny: Duplica undead aliado com maior ATK (clone + Forbidden Knowledge). Clone morre quando original morre -> 50% Ult Energy ao summoner.",
              battle: "Twist of Fate: 3 flechas aleatorias (+180% Necrotic cada) + Banshee's Curse 5s.",
              passive: "Game of Fatuity: Todos undead aliados ganham ATK Up = 10% do ATK da Sintrellia (max 100% do ATK do alvo)."
            },
            exclusive_artifact: null,
            analysis: "Amplifica summons. Passiva buffa TODOS undead summons +10% ATK. Ult clona o mais forte (provavelmente Shadow Demon ou corpse de Lelwanis). Banshee's Curse dos arrows e DPS secundario. Sem HH rating."
          },
          {
            name: "Torrin",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Support",
            type: "Range",
            race: "The Unstill",
            heroId: 20690,
            ac_tier: "A",
            hh_overall: 4.1,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 1, grave_venom: 5, grave_curse: 5, grave_rot: 5, heretical_ruins: 5, ancient_battlefield: 1, arena: 5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 80,
            di_ratings: { temporal_vortex: 4.0, goblin_lair: 3.0, grave_venom: 3.0, grave_curse: 5.0, grave_rot: 4.0, heretical_ruins: 4.0, ancient_battlefield: 3.0, arena: 4.0 },
            role: "Healer / Invisibility",
            captain: "Increases all allies' Resistance by 40.0 in all battles.",
            skills: {
              ult: "Underworld Cloak: Invisibility 10s para todos aliados + HoT (+3% Max HP + 600% Enlightenment) cada 0.8s por 4s. Aliado marcado: Debuff Immunity + 25% heal extra (sem Invisibility).",
              battle: "Chaotic Prayer: Cura aliado com menor HP (+12% Max HP + 2400% Enlightenment). Cura aliado marcado (+6% Max HP + 1200% Enlightenment) + dispel 1 debuff.",
              passive: "Shadow Protection: No inicio, marca primeiro aliado na frente + 20% Max HP e DEF do cleric. Ganha Invisibility 10s."
            },
            exclusive_artifact: null,
            analysis: "Healer + protector. Invisibility AoE 10s = time inteiro fica intocavel. Marca aliado frontline (provavelmente Lelwanis/Khrysos) com +20% HP e DEF. DI #80 = medio no meta S1."
          },
          {
            name: "Premtsa",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Summon",
            type: "Range",
            race: "The Unstill",
            heroId: 22300,
            ac_tier: "SS",
            hh_overall: 3.9,
            hh_ratings: { temporal_vortex: 3.5, goblin_lair: 5, grave_venom: 4.5, grave_curse: 3.5, grave_rot: 4, heretical_ruins: 4.5, ancient_battlefield: 4, arena: 3.5, fae: 4.5, pillar: 4.5, green_dragon: 4.5, violet_dragon: 4.5, gloomland: 4.5 },
            di_rank: 25,
            di_ratings: { temporal_vortex: 4.5, goblin_lair: 4.0, grave_venom: 4.0, grave_curse: 5.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 5.0 },
            role: "Summon DPS / AoE Derivative",
            captain: "Increases all allies' Attack by 30% in dungeon battles.",
            skills: {
              ult: "Myriad Descendants: Soul torrent +520% Necrotic AoE a todos inimigos. Todos undead aliados trigam Tireless Devotion AoE imediatamente.",
              battle: "Undead Puppet: 2 soul attacks aleatorios (+240% Necrotic cada) + cria Specter no local por 10s (ataca continuamente).",
              passive: "Tireless Devotion: Quando undead aliado aparece, faz +60% Derivative 7x em 5s (AoE 1 tile ao redor)."
            },
            exclusive_artifact: null,
            analysis: "DPS passivo massivo. Cada summon que aparece triga +60% Derivative x7 = 420% Derivative total por summon. Com Lelwanis invocando 2 corpses por battle skill + Specters proprios = Derivative CONSTANTE. Ult forca todos undead a triggarem Derivative de novo."
          },
          {
            name: "Khrysos",
            element: "Fire",
            rarity: "Legendary",
            school: "Support",
            type: "Melee",
            race: "Blazeland Lizardfolk",
            heroId: 20450,
            ac_tier: "A",
            hh_overall: 4.3,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 4, grave_venom: 5, grave_curse: 5, grave_rot: 5, heretical_ruins: 3, ancient_battlefield: 4, arena: 4.5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 12,
            di_ratings: { temporal_vortex: 5.0, goblin_lair: 4.5, grave_venom: 3.0, grave_curse: 4.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 5.0 },
            role: "Tank / Shield / Anti-Shield",
            captain: "In Fey Meander and Trial Breakthrough, increases all allies' Defense by 30%.",
            skills: {
              ult: "Might of Gold: Dispel TODOS shields inimigos + (+500% ATK + 10% Max HP) Fire AoE + 75% Attack Penalty II 10s + Shield 25% Max HP para todos aliados 10s.",
              battle: "Holy Fire Smite: 3 Holy Fire (+100% Fire cada) + 75% dispel 1 buff inimigo + Shield 15% Max HP para aliado com menor HP 5s.",
              passive: "Sunfire Blessing: Shield do heroi reduzido/dispelado/expira -> converte 50% em heal."
            },
            exclusive_artifact: null,
            analysis: "ANTI-SHIELD critico contra Blue. Ult DISPELA todos shields inimigos + da Shield 25% Max HP AoE. Battle dispela buffs individuais. Passiva converte shield perdido em heal = sustain. DI #12 = top tier S1."
          }
        ],
        composition: {
          elements: { Necrosis: 4, Fire: 1 },
          schools: { Summon: 3, Support: 2 },
          affinity: "Parcial — 4 Necrosis (sem par cross-element). Fire quebra afinidade pura.",
          school_bond: "Summon 3 — bonus para undead summons. Support 2 — HP shield.",
          tiers: { SS: 3, S: 1, A: 1 },
          hh_avg: "4.08 (4 heroes: Lelwanis 4.0, Torrin 4.1, Premtsa 3.9, Khrysos 4.3. Sintrellia sem HH rating.)",
          di_avg: "30.0 (Lelwanis #9, Sintrellia #24, Torrin #80, Premtsa #25, Khrysos #12)",
          roles: { "Summon DPS": 3, Healer: 1, "Tank/Shield": 1 },
          captain: "Sintrellia (+24% ATK all battles) — melhor opcao universal",
          archetype: "summon-army-5"
        },
        stats_from_image: {
          total_hp: 390400,
          total_atk: 15300
        },
        strengths: [
          "Summon chain: Lelwanis corpses + Premtsa Specters -> Derivative passive (+60% x7 = 420% por summon)",
          "Lelwanis Dragon form = win condition late game. Black Blood Scale: 2 corpses/skill + scaling (+5% DEF Pen e +5% Ult dmg por 10 stacks)",
          "Premtsa Ult forca TODOS undead a triggarem Tireless Devotion = burst Derivative massivo",
          "Sintrellia passiva buffa TODOS undead +10% ATK + Ult clona o mais forte",
          "Khrysos DISPELA todos shields inimigos (Ult) + dispela buffs individuais (Battle) = counter direto contra time defensivo",
          "Torrin Invisibility AoE 10s = janela onde Red eh intocavel + HoT sustain",
          "3 SS tiers (Lelwanis, Premtsa, mais Sintrellia S) = qualidade individual alta",
          "ATK superior (15,300 vs 14,200 = +1,100)"
        ],
        weaknesses: [
          "Sem afinidade cross-element (4 Necrosis + 1 Fire = nenhum bonus de afinidade)",
          "Dependente de summons sobreviverem — se AoE cleave matar summons rapido, Derivative pipeline cai",
          "Lelwanis precisa de tempo pra acumular Dragon Blood (20+ stacks pra transformar)",
          "Torrin DI #80 = healer medio no meta S1",
          "HP total inferior (390,400 vs 431,200 = -40,800 HP)",
          "Khrysos Fire quebra sinergia elemental do time Necrosis"
        ]
      },

      // --- BLUE TEAM ---
      blue: {
        heroes: [
          {
            name: "Nastjenka",
            element: "Lightning",
            rarity: "Legendary",
            school: "Dauntless",
            type: "Melee",
            race: "Human",
            heroId: 20740,
            ac_tier: "SS",
            hh_overall: 4.6,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 4, grave_venom: 5, grave_curse: 5, grave_rot: 5, heretical_ruins: 5, ancient_battlefield: 5, arena: 5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 8,
            di_ratings: { temporal_vortex: 5.0, goblin_lair: 5.0, grave_venom: 3.0, grave_curse: 5.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 5.0 },
            role: "Elite Carry DPS",
            captain: "Increases all allies' Attack by 24% in all battles.",
            skills: {
              ult: "Wild Beak: +720% Lightning AoE. Proximo 10s: aliados basic attack -> 40% chance de feather (+125% Lightning). Dauntless = 80% chance. Feathers contam como basic attack.",
              battle: "Talon: Flash no inimigo com menor HP + 200% Lightning x3. Conta como basic attack. GARANTIDO no inicio da batalha.",
              passive: "Black Plume: A cada 3s ganha 1 stack permanente (undispellable, max 10). Cada 10% extra Attack Speed = 1% extra Crit Rate."
            },
            exclusive_artifact: {
              name: "Arbiter's Pendant",
              rarity: "Mythic",
              stats: "ATK + Crit Rate",
              skill: "Quando Nastjenka triga crit com feather de Wild Beak, o follow-up damage dessa feather aumenta 50%."
            },
            analysis: "Carry ELITE. HH 4.6 = heroi mais bem avaliado do match. Feather mechanic gera DPS sustentado massivo (cada basic attack aliado = 40% chance de +125% Lightning). Arbiter's Pendant amplifica crits das feathers +50%. Talon auto-cast no inicio = burst imediato no mais fraco."
          },
          {
            name: "Acilia",
            element: "Radiance",
            rarity: "Legendary",
            school: "Support",
            type: "Melee",
            race: "Human",
            heroId: 20420,
            ac_tier: "A",
            hh_overall: 4.2,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 2.5, grave_venom: 4, grave_curse: 4, grave_rot: 5, heretical_ruins: 5, ancient_battlefield: 3.5, arena: 5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 14,
            di_ratings: { temporal_vortex: 5.0, goblin_lair: 5.0, grave_venom: 5.0, grave_curse: 4.5, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 4.5 },
            role: "Debuff Cleanser / Healer",
            captain: "Increases all allies' Resistance by 50.0 in Grand Gladiator Arena battles.",
            skills: {
              ult: "Holy Light Descension: Dispel TODOS debuffs de todos aliados + Debuff Immunity 10s + HoT (+1% Max HP + 400% Enlightenment) cada 0.5s por 5s.",
              battle: "Glory of Platinum: Cura aliados no range (+10% Max HP + 1200% Enlightenment).",
              passive: "Divine Favor: Cada debuff dispelado ou resistido = 1 stack Oathkeeper's Glory (max 10)."
            },
            exclusive_artifact: null,
            analysis: "Cleanser ELITE. Ult dispela TODOS debuffs + Debuff Immunity 10s = Nastjenka fica limpa de CC. HoT sustain complementa. DI #14 = muito bom no meta S1."
          },
          {
            name: "Tamar",
            element: "Lightning",
            rarity: "Legendary",
            school: "Support",
            type: "Range",
            race: "Human",
            heroId: 20830,
            ac_tier: "SS",
            hh_overall: 4.0,
            hh_ratings: { temporal_vortex: 3.5, goblin_lair: 3, grave_venom: 4, grave_curse: 5, grave_rot: 3, heretical_ruins: 3.5, ancient_battlefield: 4, arena: 5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 27,
            di_ratings: { temporal_vortex: 4.5, goblin_lair: 3.0, grave_venom: 4.0, grave_curse: 4.5, grave_rot: 5.0, heretical_ruins: 4.0, ancient_battlefield: 5.0, arena: 5.0 },
            role: "Debuffer / Anti-Buff",
            captain: "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
            skills: {
              ult: "Tempest Surge: +700% Lightning AoE + 75% Buff Prohibition 10s. Inimigos sem buff: 75% Stunned 5s.",
              battle: "Thunder War Song: +300% Lightning AoE + 75% dispel 1 buff + 75% Attack Penalty II 5s.",
              passive: "Might of the Matriarch: Quando inimigo ganha buff -> lightning strike (+100% Derivative) + 30% dispel 1 buff (1x por alvo a cada 5s)."
            },
            exclusive_artifact: null,
            analysis: "ANTI-BUFF specialist. Buff Prohibition 10s IMPEDE inimigos de ganhar buffs = counter contra Sintrellia buffs em summons. Passiva pune qualquer buff inimigo. Tambem contribui DPS (+700% Ult + +300% Battle). SS tier. DI #27."
          },
          {
            name: "Zeffi",
            element: "Lightning",
            rarity: "Legendary",
            school: "Support",
            type: "Range",
            race: "Ratfolk",
            heroId: 22040,
            ac_tier: "B",
            hh_overall: 3.8,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 1, grave_venom: 4.5, grave_curse: 4.5, grave_rot: 3.5, heretical_ruins: 3.5, ancient_battlefield: 2.5, arena: 5, fae: 5, pillar: 5, green_dragon: 4.5, violet_dragon: 4.5, gloomland: 4.5 },
            di_rank: 2,
            di_ratings: { temporal_vortex: 5.0, goblin_lair: 4.5, grave_venom: 3.0, grave_curse: 5.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 4.0 },
            role: "DEF Buffer / Emergency Invincibility",
            captain: "Increases all allies' Defense by 30% in dungeon battles.",
            skills: {
              ult: "Bless the Believer: Magic nexus 8s + DEF Up II todos aliados. Aliado <30% HP = Invincibility pelo resto do nexus.",
              battle: "Totem of Purification: Totem 3s que faz (+100% ATK + 900% Enlightenment) Lightning AoE/s + 75% dispel 1 buff inimigo.",
              passive: "Profound Balance: Quando buff de aliado ou inimigo eh dispelado/transferido/expira -> Shield (+200% ATK + 2000% Enlightenment) no aliado com menor HP 10s."
            },
            exclusive_artifact: null,
            analysis: "DI #2 = MELHOR heroi S1 no DragonHeir.info! Invincibility <30% HP = emergencia que impede kill. DEF Up II empilha defesa. Passiva gera shields automaticos quando buffs caem. AC tier B mas DI #2 = discrepancia enorme entre fontes."
          },
          {
            name: "Mithrasea",
            element: "Radiance",
            rarity: "Legendary",
            school: "Support",
            type: "Range",
            race: "Sheen Elf",
            heroId: 20970,
            ac_tier: "A",
            hh_overall: 4.2,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 1, grave_venom: 5, grave_curse: 5, grave_rot: 5, heretical_ruins: 5, ancient_battlefield: 3, arena: 5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 7,
            di_ratings: { temporal_vortex: 5.0, goblin_lair: 4.0, grave_venom: 5.0, grave_curse: 5.0, grave_rot: 5.0, heretical_ruins: 5.0, ancient_battlefield: 5.0, arena: 4.0 },
            role: "Resurrection / Immortality / Healer",
            captain: "Increases all allies' HP by 24% in all battles.",
            skills: {
              ult: "Omnisage's Grace: Resurrection at Death para todos sobreviventes 10s + RESSUSCITA todos aliados mortos a 75% HP (75% Ult Energy retida) + Debuff Immunity 10s + Invisibility para ranged 10s.",
              battle: "Everlasting Glory: Cura aliados no range (+8% Max HP + 2400% Enlightenment) + 1 stack Recovery Over Time 5s.",
              passive: "Blessings of the Stars: Aliado toma dano fatal -> Immortality 5s + Recovery Over Time 5s. Se ranged: +Invisibility 5s. Cooldown: 32s."
            },
            exclusive_artifact: null,
            analysis: "SAFETY NET definitiva. Passiva = Immortality automatica no primeiro dano fatal (32s CD). Ult = Resurrection at Death TODOS + ressuscita mortos a 75% HP + Debuff Immunity + Invisibility ranged. DI #7 = S1 endgame elite. Combinada com Zeffi Invincibility = multiplas camadas anti-death."
          }
        ],
        composition: {
          elements: { Lightning: 3, Radiance: 2 },
          schools: { Dauntless: 1, Support: 4 },
          affinity: "Resplendence FULL (3 Lightning + 2 Radiance = 5/5)",
          school_bond: "Support 4 — bonus defensivo massivo. Dauntless 1 (Nastjenka isolada).",
          tiers: { SS: 2, A: 2, B: 1 },
          hh_avg: "4.16 (Nastjenka 4.6, Acilia 4.2, Tamar 4.0, Zeffi 3.8, Mithrasea 4.2)",
          di_avg: "11.6 (Nastjenka #8, Acilia #14, Tamar #27, Zeffi #2, Mithrasea #7)",
          roles: { "Elite DPS": 1, "Debuff Cleanser": 1, "Anti-Buff Debuffer": 1, "DEF Buffer/Invincibility": 1, "Resurrection/Immortality": 1 },
          captain: "Nastjenka (+24% ATK all battles) — unico DPS, maximo beneficio",
          archetype: "hyper-protect-1dps-5"
        },
        stats_from_image: {
          total_hp: 431200,
          total_atk: 14200
        },
        strengths: [
          "Resplendence FULL (5/5) = bonus de afinidade completo",
          "Mithrasea: Resurrection at Death ALL + ressuscita mortos a 75% HP + passiva Immortality automatica",
          "Zeffi: DEF Up II + Invincibility <30% HP = segunda rede de seguranca",
          "Acilia: Debuff Immunity 10s = Nastjenka limpa de CC e debuffs",
          "Tamar: Buff Prohibition 10s = IMPEDE buffs inimigos (counter direto contra Sintrellia ATK Up em summons)",
          "Tamar passiva: Cada buff inimigo ganha = lightning strike + chance dispel = punitivo",
          "Nastjenka HH 4.6 = heroi individual mais forte. DI #8. Arbiter's Pendant amplifica feather crits +50%.",
          "DI avg 11.6 = MUITO superior ao Red avg 30.0",
          "HP total superior (431,200 vs 390,400 = +40,800 HP)",
          "Nastjenka Talon auto-cast no inicio = burst imediato no heroi mais fraco do Red"
        ],
        weaknesses: [
          "Apenas 1 DPS (Nastjenka). Se ela morrer 2x (Mithrasea res + morte final), time perde capacidade ofensiva",
          "Feather mechanic: 40% chance por basic attack aliado (nao 80% — so Dauntless teria 80%, e Nastjenka eh a unica Dauntless)",
          "Zeffi AC tier B = stats base inferiores",
          "Sem school bond ofensivo (Dauntless 1 = sem chain)",
          "Dependente de cooldowns defensivos nao terem gap simultaneo"
        ]
      },

      // --- DECISION ---
      pick: "red",
      confidence: 55,
      reasoning: {
        primary: "Red tem 3 Summon DPS com Derivative chain passivo que escala com numero de summons. Lelwanis Dragon form + Black Blood Scale = win condition late game. Khrysos dispela shields de Blue. Blue tem defesa extrema mas depende de 1 unico DPS (Nastjenka). Porem eh matchup MUITO proximo.",
        secondary: "Blue tem Resplendence FULL, DI avg muito melhor (11.6 vs 30.0), e Tamar Buff Prohibition counter os buffs de Sintrellia em summons. Nastjenka HH 4.6 eh o melhor heroi individual. Mithrasea Resurrection + Zeffi Invincibility = dificil matar Blue. Margem MUITO estreita.",
        factors: [
          { factor: "DPS presence",          score_red: 8, score_blue: 5, note: "Red: 3 Summon DPS + Derivative passivo massivo. Blue: 1 DPS (Nastjenka) mas elite SS + Tamar contribui +700%/+300%." },
          { factor: "School Bond synergy",   score_red: 7, score_blue: 6, note: "Red: 3 Summon = bom chain para undead. Blue: 4 Support = bonus defensivo forte." },
          { factor: "Kill condition",        score_red: 7, score_blue: 5, note: "Red: Lelwanis Dragon transform + Derivative army. Blue: Nastjenka feather sustain + Talon burst." },
          { factor: "Elemental Affinity",    score_red: 3, score_blue: 9, note: "Red: 4 Necrosis + 1 Fire = SEM cross-element bonus. Blue: Resplendence FULL 5/5." },
          { factor: "Tier quality",          score_red: 7, score_blue: 8, note: "Red: 3 SS + 1 S + 1 A (DI avg 30). Blue: 2 SS + 2 A + 1 B mas DI avg 11.6 (!!)." },
          { factor: "Artifact synergy",      score_red: 8, score_blue: 6, note: "Red: Black Blood Scale = massive scaling. Blue: Arbiter's Pendant = +50% feather crit damage. Ambos fortes." },
          { factor: "Sustained DPS",         score_red: 8, score_blue: 5, note: "Red: Summon Derivative = DPS que NUNCA para e escala. Blue: Feathers = constante mas depende de aliados basic attacking." },
          { factor: "Anti-buff/Anti-shield", score_red: 8, score_blue: 8, note: "Red: Khrysos dispela shields + Attack Penalty. Blue: Tamar Buff Prohibition + passiva anti-buff. EMPATE." },
          { factor: "Survivability",         score_red: 5, score_blue: 10, note: "Blue domina: Immortality + Resurrection at Death + Invincibility + Debuff Immunity + shields. Red: Torrin Invisibility + Khrysos shield." },
          { factor: "Resurrection counter",  score_red: 6, score_blue: 8, note: "Blue: Mithrasea res a 75% HP = segunda vida forte. Red nao tem counter direto (sem execute mechanic neste time)." }
        ],
        total_red: 67,
        total_blue: 70,
        conclusion: "Scores MUITO proximos (67 vs 70). Blue tem vantagem numerica nos fatores, especialmente affinity e survivability. Porem Red tem MAIS fontes de DPS (3 vs 1) e Derivative chain que escala infinitamente com summons. Pick MARGINAL no Red pela quantidade de DPS e Lelwanis Dragon form como win condition. Confianca BAIXA (55%)."
      },

      // --- Bet Population ---
      bet_population: { red: 86, blue: 14, our_pick_aligned_with_majority: true },

      // --- Result ---
      result: "blue",
      result_date: "2026-02-18",
      result_notes: "Blue venceu com FOLGA ABSOLUTA. HP do Blue praticamente intocado. Apenas 14% dos apostadores escolheram Blue.",
      result_surprise: true,
      screenshots_result: [
        "logs/Captura de tela 2026-02-18 135736.png",
        "logs/Captura de tela 2026-02-18 135743.png"
      ],
      end_battle_stats: {
        blue: {
          total_damage: 832637,
          total_healing: "~1,700,000 (estimado)",
          heroes: [
            { name: "Nastjenka", damage: 633058, damage_pct: 78.0, healing: 22608, note: "Carry ABSURDO. Sozinha fez 3.35x mais dano que Red inteiro." },
            { name: "Tamar",     damage: 115632, damage_pct: 13.9, note: "DPS secundario relevante. Buff Prohibition provavelmente destruiu summon chain." },
            { name: "Acilia",    damage: 49377,  damage_pct: 5.9, healing: 918016, healing_pct: 54.2, note: "918k healing = 3.7x mais que TODO dano de Red. Sozinha anulou Red." },
            { name: "Zeffi",     damage: 27536,  damage_pct: 3.3, note: "DEF Up II + Invincibility <30% (nunca precisou ativar)." },
            { name: "Mithrasea", damage: 7034,   damage_pct: 0.9, note: "Safety net nunca precisou ser usada. Resurrection at Death nao foi necessario." }
          ],
          hp_status: "Todos 5 vivos, HP praticamente 100%"
        },
        red: {
          total_damage: 248114,
          heroes: [
            { name: "Heroi 1 (Lelwanis?)", damage: 88576, damage_pct: 35.7, note: "Dragon form provavelmente NUNCA ativou (Blue nao morreu = 0 Dragon Blood do campo)" },
            { name: "Heroi 2 (Premtsa?)",  damage: 72538, damage_pct: 29.2, note: "Derivative de summons foi PATÉTICO comparado ao esperado" },
            { name: "Heroi 3",             damage: 64168, damage_pct: 25.9 },
            { name: "Heroi 4",             damage: 20000, damage_pct: 8.1, note: "estimado" },
            { name: "Heroi 5",             damage: 2832,  damage_pct: 1.1 }
          ],
          hp_status: "Todos 5 mortos"
        },
        damage_ratio: "Blue 832k vs Red 248k = 3.35x",
        healing_vs_damage: "Acilia 918k healing vs Red 248k total damage = 3.7x. Red NUNCA teve chance de matar Blue."
      },
      post_mortem: {
        prediction: "Red 55%",
        actual: "Blue vitoria ESMAGADORA (HP intocado)",
        error_magnitude: "CATASTROFICO — nao apenas errei o lado, a margem foi absurda",
        bet_population: "86% apostaram Red, apenas 14% Blue. Erro coletivo.",
        why_prediction_failed: [
          "SUPERVALORIZEI quantidade de DPS sources (3 vs 1). Qualidade >>> Quantidade. Nastjenka SS HH 4.6 sozinha fez 3.35x mais dano que 3 DPS + summons combinados.",
          "SUPERVALORIZEI Summon Derivative chain. Na pratica, Derivative damage eh DISPERSO e FRACO (total Red: 248k). Healing concentrado de Acilia (918k) anulou completamente.",
          "SUBVALORIZEI Resplendence FULL affinity (5/5). Gap de stats foi enorme — Blue teve +40k HP E defendeu com HP intocado.",
          "SUBVALORIZEI Tamar como counter. Buff Prohibition 10s provavelmente impediu Sintrellia de buffar summons, colapsando a cadeia de Derivative.",
          "SUBVALORIZEI DI rankings. Blue DI avg 11.6 vs Red 30.0. DI avalia S1 endgame = preditor MUITO melhor que AC tier.",
          "IGNOREI que Lelwanis Dragon form depende de mortes no campo. Se Blue nao morre (defesa impenetravel), Dragon Blood nao acumula = win condition nunca ativa.",
          "OVERRIDEI score quantitativo (67 Red vs 70 Blue) com raciocinio qualitativo errado. O score estava CERTO."
        ],
        key_factors_missed: [
          "Acilia healing output (918k) vs Red damage output (248k) — ratio 3.7x = impossivel Red vencer",
          "Nastjenka feather mechanic com 4 aliados = ~1.6 feathers/segundo = DPS sustentado massivo",
          "Tamar Buff Prohibition desativando Sintrellia passiva = summons sem buff = Derivative fraco",
          "Resplendence 5/5 stats bonus tornando Blue muito mais tanky que o esperado"
        ],
        weight_adjustments_needed: [
          "DPS presence: qualidade > quantidade. 1 elite SS >>> 3 medianos",
          "Elemental Affinity: subir de weight 7 para 9. Affinity completa vs nenhuma eh DECISIVO.",
          "DI ranking: criar fator separado ou incorporar mais peso. DI avg < 15 = forte indicador.",
          "Anti-buff specialist: subir importancia. Buff Prohibition pode desativar comps inteiras.",
          "Healing throughput: novo fator? Healing massivo pode anular DPS completamente.",
          "Win condition viability: se win condition depende de matar inimigos, falha contra times que nao morrem."
        ]
      }
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 2
    // ──────────────────────────────────────────────────────────
    {
      id: "round-2",
      round: 2,
      date: "2026-02-18",
      screenshots: [
        "logs/Captura de tela 2026-02-18 141353.png",
        "logs/Captura de tela 2026-02-18 141414.png",
        "logs/Captura de tela 2026-02-18 141418.png"
      ],
      mode: "Wager (aposta PvP, 2 times AI vs AI)",

      // --- RED TEAM ---
      red: {
        heroes: [
          {
            name: "Tamar",
            element: "Lightning",
            rarity: "Legendary",
            school: "Support",
            type: "Range",
            heroId: 20830,
            ac_tier: "SS",
            hh_overall: 4.0,
            di_rank: 27,
            role: "Debuffer / Anti-Buff",
            skills: {
              ult: "Tempest Surge: +700% Lightning AoE + 75% Buff Prohibition 10s. Inimigos sem buff: 75% Stunned 5s.",
              battle: "Thunder War Song: +300% Lightning AoE + 75% dispel 1 buff + 75% Attack Penalty II 5s.",
              passive: "Might of the Matriarch: Inimigo ganha buff -> lightning strike (+100% Derivative) + 30% dispel (1x por alvo a cada 5s)."
            },
            exclusive_artifact: null,
            analysis: "Anti-buff specialist. Buff Prohibition shutdown Wild buffs de Blue? Tamar ja provou valor no Round 1 (Blue). SS tier."
          },
          {
            name: "Twitch",
            element: "Poison",
            rarity: "Legendary",
            school: "Poison",
            type: "Range",
            heroId: 22010,
            ac_tier: "S",
            hh_overall: 3.7,
            di_rank: 45,
            role: "Poison Applicator / Derivative DPS",
            skills: {
              ult: "Lethal Arrowstorm: 3 ataques na area (+160% ATK + 1800% Enlightenment) Poison Damage + 50% chance 2 stacks Poison 15s cada.",
              battle: "Venomous Shots: Flecha + bonus por Enlightenment (ate 4 flechas). +80% ATK + 900% Enlightenment cada + 75% chance 1 Poison stack 15s.",
              passive: "Sneak Shots: Quando inimigo recebe Poison de OUTRA skill, 20% chance de +30% ATK Derivative + 1 Poison stack 15s."
            },
            exclusive_artifact: null,
            analysis: "Poison applicator consistente. Passiva triga Derivative extra quando aliados aplicam Poison = sinergia direta com Lothair/Durango. Enlightenment 300 = 4 flechas no battle skill."
          },
          {
            name: "Lothair",
            element: "Poison",
            rarity: "Legendary",
            school: "Poison",
            type: "Melee",
            heroId: 20200,
            ac_tier: "SS",
            hh_overall: 4.6,
            hh_ratings: { temporal_vortex: 5, goblin_lair: 5, grave_venom: 5, grave_curse: 5, grave_rot: 5, heretical_ruins: 5, ancient_battlefield: 5, arena: 5, fae: 5, pillar: 5, green_dragon: 5, violet_dragon: 5, gloomland: 5 },
            di_rank: 4,
            role: "Elite Carry / Poison Derivative",
            captain: "Increases all allies' Enlightenment by 48.0 in all battles.",
            skills: {
              ult: "Stroke of Midnight: Salto + 3 ataques (250% ATK + 1200% Enlightenment cada) Poison Damage AoE.",
              battle: "Pervading Darkness: Rush no inimigo com menor HP + 250% ATK Poison AoE + 75% chance 2 Poison stacks 15s.",
              passive: "Poisonous Intention: Battle e Ult skills fazem Derivative EXTRA em inimigos com Poison. Cada stack = +100% (ate 40% ATK por stack). ESCALA MASSIVAMENTE."
            },
            exclusive_artifact: {
              name: "Nightfall Pallium",
              rarity: "Mythic",
              stats: "ATK + Enlightenment",
              skill: "Poisonous Intention dano +10%, 15% chance de double damage."
            },
            analysis: "CARRY SUPREMO. HH 4.6 = ALL 5.0 em TODAS atividades (unico heroi assim). DI #4. Passiva Derivative escala com Poison stacks = com 10 stacks, cada skill hit faz +400% ATK Derivative EXTRA. Nightfall Pallium amplifica ainda mais (+10%, 15% double)."
          },
          {
            name: "Durango",
            element: "Poison",
            rarity: "Legendary",
            school: "Poison",
            type: "Melee",
            heroId: 20670,
            ac_tier: "SS",
            hh_overall: 4.3,
            di_rank: 17,
            role: "Poison Applicator / Crit DPS",
            skills: {
              ult: "Exterminating Attack: 3 ataques (+135% ATK + 640% Enlightenment cada) + 100% chance 2 Poison stacks 15s. Crit = ignora 30% DEF.",
              battle: "Blink Attack: 3 hits (+100% ATK + 500% Enlightenment cada). Crit = +5 Ult Energy.",
              passive: "Secret Keeper: NO INICIO DA BATALHA ataca TODOS inimigos (+150% ATK Poison) + 40% chance 3 Poison stacks 15s. Crit de basic/skill = 40% chance +1 Poison stack."
            },
            exclusive_artifact: null,
            analysis: "Poison applicator AGRESSIVO. Passiva aplica 3 Poison em TODOS no inicio = Lothair ja comeca com Derivative ativo. 100% Poison na Ult. Crits adicionam mais stacks. DI #17 = muito forte."
          },
          {
            name: "Grishnaar",
            element: "Lightning",
            rarity: "Legendary",
            school: "Support",
            type: "Melee",
            heroId: null,
            ac_tier: "A",
            hh_overall: 4.0,
            di_rank: null,
            role: "Tank / Ally Protection",
            skills: {
              ult: "Frenzy Massacre: 550% DEF-based Lightning AoE + -30 Ult Energy inimigos + 100% Attack Penalty II 10s.",
              battle: "War Devotee: Ally Protection + Control Immunity ao aliado com mais Crit Damage 10s (UNDISPELLABLE) + Shield 15% Max HP + DEF Up II. AUTO-CAST no inicio!",
              passive: "Reflection: -25% damage taken + +30% Resistance. Compartilha com aliado protegido."
            },
            exclusive_artifact: null,
            analysis: "Tank MASSIVO (123k HP, 4200 DEF). Ally Protection auto-cast no inicio protege provavelmente Lothair (maior Crit Damage?). -25% damage compartilhado. Ult drena Ult Energy."
          }
        ],
        composition: {
          elements: { Poison: 3, Lightning: 2 },
          schools: { Poison: 3, Support: 2 },
          affinity: "Parcial — 3 Poison + 2 Lightning. SEM cross-element pair (Ulceration = Fire+Poison, nao Lightning+Poison).",
          school_bond: "Poison 3 — bonus Poison chain. Support 2.",
          tiers: { SS: 3, S: 1, A: 1 },
          hh_avg: "4.12 (Lothair 4.6, Durango 4.3, Tamar 4.0, Grishnaar 4.0, Twitch 3.7)",
          di_avg: "23.3 (Lothair #4, Durango #17, Tamar #27, Twitch #45. Grishnaar sem rank)",
          roles: { "Elite Carry": 1, "Poison DPS": 2, "Anti-Buff Debuffer": 1, "Tank": 1 },
          captain: "Lothair (+48 Enlightenment all battles) — beneficia Twitch (mais flechas), Lothair e Durango.",
          archetype: "poison-chain-5"
        },
        stats_from_image: {
          total_hp: 403600,
          total_atk: 16400,
          notable: "Grishnaar: 123,200 HP + 4,200 DEF = tank massivo. Lothair: 4,400 ATK = maior ATK. Twitch: 150% Crit Damage."
        },
        strengths: [
          "Lothair HH 4.6 ALL 5.0 = UNICO heroi com nota maxima em TODAS atividades. DI #4. Carry supremo.",
          "Poison chain: Durango aplica 3 Poison em TODOS no inicio (passiva) -> Lothair Derivative IMEDIATO",
          "Lothair Derivative escala: 10 stacks = +400% ATK EXTRA por skill hit. Com Nightfall Pallium: +10% + 15% double.",
          "3 SS tiers (Tamar, Lothair, Durango) = qualidade individual superior",
          "Tamar Buff Prohibition 10s pode disrutar Wild dice buffs e Khrysos shields-as-buffs",
          "Grishnaar 123k HP + 4200 DEF + -25% dmg + Ally Protection auto-cast no inicio = protecao imediata do carry",
          "HP total superior (403,600 vs 381,200 = +22,400)",
          "Twitch passiva: 20% Derivative trigger quando aliados aplicam Poison = DPS bonus passivo"
        ],
        weaknesses: [
          "SEM cross-element affinity (Poison + Lightning nao forma par)",
          "SEM healer dedicado. Unica sustain: Grishnaar shield + -25% dmg. Se penetrado, sem recovery.",
          "Lothair melee = exposto. Se Ghul'ende Charm <50% HP pegar Lothair, pode virar contra Red.",
          "Twitch DI #45 e HH 3.7 = elo mais fraco do DPS lineup",
          "Grishnaar sem DI rank = possivelmente fraco no meta S1"
        ]
      },

      // --- BLUE TEAM ---
      blue: {
        heroes: [
          {
            name: "Khrysos",
            element: "Fire",
            rarity: "Legendary",
            school: "Support",
            type: "Melee",
            heroId: 20450,
            ac_tier: "A",
            hh_overall: 4.3,
            di_rank: 12,
            role: "Tank / Shield / Anti-Shield",
            skills: {
              ult: "Might of Gold: Dispel TODOS shields inimigos + (+500% ATK + 10% Max HP) Fire AoE + 75% Attack Penalty II 10s + Shield 25% Max HP para todos aliados 10s.",
              battle: "Holy Fire Smite: 3 Holy Fire (+100% Fire cada) + 75% dispel 1 buff + Shield 15% Max HP aliado com menor HP 5s.",
              passive: "Sunfire Blessing: Shield reduzido/dispelado/expira -> converte 50% em heal."
            },
            exclusive_artifact: null,
            analysis: "Tank/Shielder. Shield 25% Max HP AoE + dispel shields inimigos. Passiva converte shield -> heal = sustain ciclico. DI #12 = forte. 110k HP, 3750 DEF."
          },
          {
            name: "Flora",
            element: "Fire",
            rarity: "Legendary",
            school: "Wild",
            type: "Range",
            heroId: 20410,
            ac_tier: "S",
            hh_overall: 4.4,
            di_rank: 1,
            role: "Vortex Burst DPS / Wild Chain Core",
            captain: "Increases all allies' Attack by 24% in all battles.",
            skills: {
              ult: "Pillar of Secret Flame: +300% Derivative + Vortex 10s no alvo. Cada Wild skill hit no alvo = +1 stack. A 16 stacks: explode com +900% Derivative EXTRA. Cada stack intermediario = +125% Derivative.",
              battle: "Flaming Sphere: Familiar lanca 2 fireballs (+100% Derivative cada). Com Insight max: Wild dice sempre max value.",
              passive: "Pact Servant: Quando Wild aliado rola dice >=5, Familiar ataca (+25% Derivative). Flora ganha 1 Insight stack."
            },
            exclusive_artifact: {
              name: "Esoteric Pearl Necklace",
              rarity: "Mythic",
              stats: "ATK + ATK%",
              skill: "Quando Vortex de Flora explode, cada stack de energia aumenta burst damage +3%, ate 20 stacks (= +60% burst damage)."
            },
            analysis: "DI #1 = MELHOR heroi do S1 endgame per DragonHeir.info. Vortex a 16 stacks = +900% Derivative + per-stack +125% = DPS absurdo. Esoteric Pearl adiciona +60% ao burst. 4,400 ATK = empata com Lothair. Insight 5 no inicio (inspiracao)."
          },
          {
            name: "Errich",
            element: "Fire",
            rarity: "Legendary",
            school: "Wild",
            type: "Range",
            heroId: 20400,
            ac_tier: "A",
            hh_overall: 3.6,
            di_rank: 47,
            role: "Wild Enabler / Meteor DPS",
            skills: {
              ult: "Meteorite Rain: 5 meteoros aleatorios (+160% Fire cada). Wild dice >=5: +200% Fire AoE adicional.",
              battle: "Pillar of Flame: +300% Fire AoE. Se so 1 inimigo hit: +50% dano extra.",
              passive: "Fortune Sense: Quando Errich aparece, UPGRADA dice de TODOS Wild aliados (+2 max value). CRITICO pra Wild chain."
            },
            exclusive_artifact: null,
            analysis: "ENABLER Wild. Passiva eh critica: upgrada dice de Flora e Felicity = mais Wild triggers. Sem ele, Wild chain eh muito mais fraco. HH 3.6 e DI #47 = fraco individualmente mas papel funcional essencial."
          },
          {
            name: "Ghul'ende",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Support",
            type: "Range",
            heroId: 22310,
            ac_tier: "S",
            hh_overall: 4.6,
            di_rank: 72,
            role: "CC / Debuffer / Healer",
            captain: "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
            skills: {
              ult: "Start Over: +720% Necrotic AoE + 75% Attack Penalty II 10s + dispel ALL debuffs aliados + heal +10% Max HP (+4% por debuff dispelado).",
              battle: "Siphon: 100% Stun 3s + 150% Necrotic DoT por 3s (cada 0.6s) + rouba 3 Ult Energy por hit + heal 150% ATK.",
              passive: "Disorder: Skill em inimigo <50% HP -> 50% Charm + Healing Reduction 5s. Se falha Charm: Accuracy Penalty II 5s."
            },
            exclusive_artifact: null,
            analysis: "HH 4.6 = ALL 5.0 em TODAS atividades (empatada com Lothair!). Charm em inimigos <50% HP = pode virar carry inimigo. Ult dispela debuffs + heala. Stun rouba Ult Energy. DI #72 = mediano, discrepancia enorme com HH."
          },
          {
            name: "Felicity",
            element: "Fire",
            rarity: "Legendary",
            school: "Wild",
            type: "Range",
            heroId: 20810,
            ac_tier: "A",
            hh_overall: 4.0,
            di_rank: 33,
            role: "Crit DPS / Wild Burst",
            captain: "Increases all allies' Crit Damage by 24% in all battles.",
            skills: {
              ult: "Fiery Feather: 5 fire beams (+150% Fire cada) + 100% Defense Penalty 10s. Wild dice >=5: +3 beams extra (total 8!).",
              battle: "Incineration: +240% Fire. Wild dice >=4: recast (ate 3x consecutivas!).",
              passive: "Burning Blood: Crit em battle/ult = +3 Ult Energy."
            },
            exclusive_artifact: null,
            analysis: "STATS ABSURDAS: 90% Crit Rate + 200% Crit Damage = efetivamente 2.8x multiplicador em TODO dano (vs 1.5x normal). Battle pode castar 3x = 720% Fire com Crit multiplicador. Ult 8 beams = 1200% Fire. Passiva cicla Ult rapido via crits constantes."
          }
        ],
        composition: {
          elements: { Fire: 4, Necrosis: 1 },
          schools: { Wild: 3, Support: 2 },
          affinity: "Parcial — 4 Fire + 1 Necrosis. SEM cross-element pair.",
          school_bond: "Wild 3 — dice chain sinergico. Support 2.",
          tiers: { SS: 0, S: 2, A: 3 },
          hh_avg: "4.18 (Ghul'ende 4.6, Flora 4.4, Khrysos 4.3, Felicity 4.0, Errich 3.6)",
          di_avg: "33.0 (Flora #1, Khrysos #12, Felicity #33, Errich #47, Ghul'ende #72)",
          roles: { "Vortex Burst DPS": 1, "Crit DPS": 1, "Wild Enabler": 1, "Tank/Shield": 1, "CC/Debuffer": 1 },
          captain: "Flora (+24% ATK all battles) — beneficia todos DPS",
          archetype: "wild-dice-burst-5"
        },
        stats_from_image: {
          total_hp: 381200,
          total_atk: 16400,
          notable: "Felicity: 90% Crit Rate + 200% Crit Damage = 2.8x multiplicador ABSURDO. Flora: 4,400 ATK = maior ATK. Khrysos: 110k HP tank."
        },
        strengths: [
          "Flora DI #1 = MELHOR heroi S1 endgame. Vortex 16 stacks = burst devastador. Esoteric Pearl = +60% burst.",
          "Ghul'ende HH 4.6 = ALL 5.0 (empata com Lothair). Charm <50% HP pode VIRAR carry inimigo.",
          "Felicity 90% Crit / 200% CD = 2.8x multiplicador. Battle 3x cast = 720% Fire com multiplier. Passiva cicla Ult via crits.",
          "Errich upgrada dice de todos Wild = ENABLER critico pra Flora e Felicity",
          "Khrysos dispela shields + Shield 25% Max HP AoE + shield->heal conversion = sustain ciclico",
          "Ghul'ende Ult: dispel all debuffs + heal = recovery + cleanup",
          "4 Fire = Fire affinity bonus (flat)",
          "HH avg 4.18 > Red 4.12"
        ],
        weaknesses: [
          "0 SS tiers (vs Red 3 SS). Tiers inferiores = stats base menores em media.",
          "DI avg 33.0 > Red 23.3 = time menos coeso no meta S1",
          "SEM cross-element affinity completo",
          "Wild dice = parcialmente RNG (Errich mitiga com +2, mas ainda aleatorio)",
          "HP total inferior (381,200 vs 403,600 = -22,400)",
          "Errich HH 3.6, DI #47 = fraco individualmente",
          "SEM resurrection/immortality = sem safety net"
        ]
      },

      // --- DECISION ---
      pick: "red",
      confidence: 65,
      reasoning: {
        primary: "Lothair eh o carry SUPREMO deste matchup: HH 4.6 ALL 5.0, DI #4, Exclusive artifact, e 3 aliados Poison stackando para alimentar Derivative massivo. Durango aplica 3 Poison em TODOS no inicio = Lothair comeca com DPS ativo imediatamente.",
        secondary: "Flora DI #1 com Esoteric Pearl pode fazer burst letal se Vortex chegar a 16 stacks. Felicity 90% Crit/200% CD eh um multiplicador absurdo. Ghul'ende Charm pode virar Lothair. Risco real, por isso confianca 65% e nao 85%.",
        factors: [
          { factor: "DPS quality",          score_red: 8, score_blue: 7, note: "Lothair HH 4.6 ALL 5.0 > Flora HH 4.4 DI #1. Ambos elite mas Lothair mais consistente." },
          { factor: "Elemental Affinity",    score_red: 5, score_blue: 5, note: "Ambos parcial. Red 3 Poison. Blue 4 Fire. Nenhum cross-element. Empate." },
          { factor: "School Bond",           score_red: 8, score_blue: 7, note: "Poison 3 = Lothair Derivative escala AUTOMATICO. Wild 3 = dice chain bom mas RNG." },
          { factor: "DI ranking avg",        score_red: 7, score_blue: 6, note: "Red avg 23.3 (excl Grishnaar) vs Blue 33.0. Red superior." },
          { factor: "Kill condition",        score_red: 8, score_blue: 7, note: "Lothair Derivative = automatico (aliados aplicam Poison). Flora Vortex = precisa 16 stacks." },
          { factor: "Healing throughput",    score_red: 4, score_blue: 7, note: "Red: sem healer. Blue: Khrysos shield->heal + Ghul'ende heal ult." },
          { factor: "Artifact synergy",      score_red: 7, score_blue: 8, note: "Nightfall Pallium bom. Esoteric Pearl +60% Vortex burst = melhor." },
          { factor: "Anti-buff/CC",          score_red: 8, score_blue: 6, note: "Tamar Buff Prohibition 10s. Ghul'ende Charm condicional (<50% HP)." },
          { factor: "Tier quality",          score_red: 8, score_blue: 5, note: "Red: 3 SS. Blue: 0 SS, 2 S, 3 A." },
          { factor: "Survivability",         score_red: 7, score_blue: 6, note: "Grishnaar 123k/4200 DEF > Khrysos 110k/3750 DEF. Red +22k HP total." },
          { factor: "Sustained DPS",         score_red: 8, score_blue: 6, note: "Poison stacks = permanentes e crescentes. Wild dice = RNG parcial." },
          { factor: "Resurrection",          score_red: 0, score_blue: 0, note: "Nenhum tem." }
        ],
        total_red: 78,
        total_blue: 70,
        conclusion: "Red favorito por 78 vs 70. Poison chain com Lothair elite carry + 3 SS tiers + Tamar anti-buff + Grishnaar tank. Porem Blue tem Flora DI #1, Felicity stats absurdas, e Ghul'ende Charm como wildcard. Confianca 65%."
      },

      // --- Bet Population ---
      bet_population: { red: 77, blue: 23, our_pick_aligned_with_majority: true },

      // --- Result ---
      result: "red",
      result_date: "2026-02-18",
      result_notes: "Red venceu. 77% dos apostadores escolheram Red. Twitch SUPEROU Lothair como top DPS individual — feedback loop Twitch+Lothair eh a chave.",
      result_surprise: false,
      screenshots_result: ["logs/Captura de tela 2026-02-18 142201.png"],
      end_battle_stats: {
        red: {
          total_damage: 158499,
          heroes: [
            { name: "Twitch (provavel)", damage: 83006, damage_pct: 45.5, note: "TOP DPS! User confirma Lothair NAO foi #1. Feedback loop passiva com aliados aplicando Poison = Derivative MASSIVO." },
            { name: "Lothair (provavel)", damage: 42845, damage_pct: 30.9, note: "Segundo DPS. Derivative per Poison stack forte mas Twitch superou em volume de triggers." },
            { name: "Tamar (provavel)",   damage: 19168, damage_pct: 13.8, note: "DPS terciario + debuff." },
            { name: "Durango (provavel)", damage: 11468, damage_pct: 8.3, note: "Aplicador de Poison — papel funcional mais que DPS direto." },
            { name: "Grishnaar",          damage: 2012,  damage_pct: 1.5, note: "Tank. Dano irrelevante, funcao era proteger." }
          ],
          hp_status: "Todos 5 vivos"
        },
        blue: {
          total_damage: "estimado ~50k (muito inferior a Red 158k)",
          hp_status: "Todos 5 mortos"
        },
        damage_ratio: "Red ~158k vs Blue ~50k = ~3.2x"
      },
      post_mortem: {
        prediction: "Red 65%",
        actual: "Red vitoria",
        error_magnitude: "ACERTOU — primeira vitoria. Score 78 vs 70 apontou corretamente.",
        bet_population: "77% apostaram Red. Nossa aposta ALINHOU com a maioria.",
        key_surprise: "Twitch foi o TOP DPS (45.5%), NAO Lothair (30.9%). Feedback loop Twitch+Lothair eh mais poderoso que Lothair sozinho.",
        why_prediction_worked: [
          "Poison chain com 3 Poison heroes eh CONSISTENTE — nao depende de RNG (diferente de Wild dice)",
          "Lothair SS HH 4.6 ALL 5.0 confirmou qualidade. Mesmo nao sendo #1 DPS, Derivative pipeline funcionou.",
          "Tamar anti-buff provavelmente disruptou Wild buffs de Blue",
          "Grishnaar tank protegeu o pipeline de DPS efetivamente",
          "3 SS tiers > 0 SS tiers confirmou como preditor"
        ],
        new_insight: "TWITCH + LOTHAIR = FEEDBACK LOOP MULTIPLICATIVO. Twitch passiva (20% Derivative + Poison quando aliado aplica Poison) triga CONSTANTEMENTE com 3 Poison sources. Volume de triggers compensa chance de 20%. Twitch eh o MULTIPLICADOR, Lothair eh o SCALER. Juntos > soma das partes.",
        weight_adjustments_needed: [
          "Novo fator candidato: 'Feedback loop / synergy multiplier' — quando heróis amplificam uns aos outros multiplicativamente",
          "Twitch+Lothair eh comparable a Frost chain em consistencia de DPS",
          "Wild dice (Blue) confirmou ser INFERIOR a Poison chain em consistencia (RNG vs deterministic)"
        ]
      }
    },

    // ──────────────────────────────────────────────────────────
    // ──────────────────────────────────────────────────────────
    // ROUND 3
    // ──────────────────────────────────────────────────────────
    {
      id: "round-3",
      round: 3,
      date: "2026-02-18",
      screenshots: [
        "logs/Captura de tela 2026-02-18 142957.png",
        "logs/Captura de tela 2026-02-18 143003.png",
        "logs/Captura de tela 2026-02-18 143007.png"
      ],
      mode: "Wager (aposta PvP, 2 times AI vs AI)",
      note: "Matchup ASSIMETRICO: 4v3! Red tem 4 herois, Blue tem 3.",

      // --- RED TEAM (4 heroes) ---
      red: {
        heroes: [
          {
            name: "Isitarian",
            element: "Necrosis",
            rarity: "Epic",
            school: "Summon",
            type: "Range",
            heroId: 21690,
            ac_tier: "B",
            hh_overall: 2.3,
            di_rank: 55,
            role: "Summon Enabler / Undead Buffer",
            captain: "Increases all allies' Attack by 18% in all battles.",
            skills: {
              ult: "Ancient Dragon Spell: 25% ATK Up + DEF Up II em 2 undead summons com maior ATK 10s. Se Dragon Remnant morreu, re-invoca.",
              battle: "Evil Flame's Call: Ataca inimigo com menor HP (+120% Necrotic AoE). Cada undead summon existente = +1 ataque do Dragon Remnant no alvo (ate 3x, +120% cada).",
              passive: "Constant Shadow: No inicio da batalha, invoca Dragon Remnant."
            },
            exclusive_artifact: null,
            analysis: "ELO FRACO. Epic B tier, HH 2.3, 49k HP = morre rapido. Funcao: invocar Dragon Remnant e buffar/multiplicar ataques de undead. Morte rapida = Dragon Blood pra Lelwanis."
          },
          {
            name: "Lelwanis",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Summon",
            type: "Melee",
            heroId: 21770,
            ac_tier: "SS",
            hh_overall: 4.0,
            di_rank: 9,
            role: "Summon DPS / Dragon Transform",
            skills: {
              ult: "Dragon of Death: Sacrifica todos undead summons nao-elite (+300% Necrotic AoE). Se Dragon Blood >= 20, transforma em dragao (stack limit 70).",
              battle: "Lady of Dark Ruins: Ataca inimigo com menor HP (+200% Necrotic AoE) + invoca 1 Corpse 15s.",
              passive: "Dragon God's Lineage: +1 Dragon Blood permanente quando QUALQUER alvo morre. -30% dano de alvos a 3+ tiles."
            },
            exclusive_artifact: {
              name: "Black Blood Scale",
              rarity: "Mythic",
              stats: "ATK + Crit Damage",
              skill: "Lady of Dark Ruins invoca 2 corpses. A cada 10 Dragon Blood: +5% DEF Pen + +5% Dragon of Death damage."
            },
            analysis: "Carry Summon. Dragon form = win condition. Black Blood Scale = 2 corpses/skill. 90% Crit / 220% CD nas stats! Porem Dragon form precisa de 20 mortes."
          },
          {
            name: "Ladehlia",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Summon",
            type: "Range",
            heroId: 23080,
            ac_tier: "SS",
            hh_overall: null,
            di_rank: 43,
            role: "Shadow Demon DPS / Execute Scaling",
            skills: {
              ult: "Dark Pact: Shadow Demon em linha (+360% Necrotic) + pousa (+360% Necrotic). Se Shadow Demon ja existe: recupera HP + channel 5s (+140% Necrotic/s AoE).",
              battle: "Blood-Consuming Shadow: Teleporta no inimigo com menor HP + (+300% Necrotic AoE). +1% dano por cada 1% HP perdido do alvo (SEMI-EXECUTE).",
              passive: "Shadows of Night: Cada 3s ganha 1 Satisfied stack + 1 por inimigo morto. Shadow Demon herda stacks."
            },
            exclusive_artifact: null,
            analysis: "DPS com Shadow Demon + semi-execute (Blood-Consuming Shadow escala com HP perdido do alvo). 90% Crit / 200% CD nas stats. SS tier. Sem HH rating."
          },
          {
            name: "Sintrellia",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Summon",
            type: "Range",
            heroId: 24780,
            ac_tier: "S",
            hh_overall: null,
            di_rank: 24,
            role: "Summon Amplifier / Clone",
            skills: {
              ult: "Echo of Destiny: Duplica undead aliado com maior ATK (clone + Forbidden Knowledge).",
              battle: "Twist of Fate: 3 flechas aleatorias (+180% Necrotic cada) + Banshee's Curse 5s.",
              passive: "Game of Fatuity: Todos undead aliados ganham ATK Up = 10% do ATK da Sintrellia."
            },
            exclusive_artifact: null,
            analysis: "Amplifica summons. Passiva buffa TODOS undead +10% ATK. Ult clona o mais forte (Shadow Demon ou corpse?)."
          }
        ],
        composition: {
          elements: { Necrosis: 4 },
          schools: { Summon: 4 },
          affinity: "Necrosis 4/4 = afinidade Necrosis pura",
          school_bond: "Summon 4/4 = school bond MAXIMO",
          tiers: { SS: 2, S: 1, B: 1 },
          di_avg: "32.75 (#9, #43, #24, #55)",
          roles: { "Summon DPS": 2, "Summon Amplifier": 1, "Summon Enabler (Epic)": 1 },
          archetype: "pure-summon-necrosis-4"
        },
        stats_from_image: {
          total_hp: 232705,
          total_atk: 14017,
          hero_count: 4,
          notable: "Lelwanis: 90%/220% Crit. Ladehlia: 90%/200% Crit, 4200 ATK (maior). Isitarian: 49k HP EPIC = morre rapido."
        },
        strengths: [
          "4 Necrosis / 4 Summon = afinidade + school bond PERFEITOS",
          "Summon army massivo: corpses (Lelwanis 2/skill) + Shadow Demon (Ladehlia) + Dragon Remnant (Isitarian) + clones (Sintrellia)",
          "Lelwanis 90%/220% Crit + Black Blood Scale = DPS direto forte",
          "Ladehlia 90%/200% Crit + semi-execute (+1% per 1% HP lost)",
          "Lelwanis Dragon Blood ganha com QUALQUER morte (incluindo summons mortos por Hvitar Execute!)",
          "Isitarian Battle: +1 ataque por undead summon existente (ate 3x) = multiplicador de DPS com summon army",
          "Vantagem numerica: 4v3 = +40% ATK total, +13k HP",
          "Sintrellia buffa todos undead +10% ATK + clona o mais forte"
        ],
        weaknesses: [
          "ZERO healer — nenhum sustain",
          "Isitarian EPIC B tier (HH 2.3, 49k HP) = elo muito fraco, morre primeiro",
          "Lelwanis Dragon form precisa 20 mortes = lento de ativar",
          "DI avg 32.75 = fraco comparado a Blue 7.67",
          "Summons podem ser Execute-killed por Hvitar <15% HP antes de fazer Derivative relevante"
        ]
      },

      // --- BLUE TEAM (3 heroes) ---
      blue: {
        heroes: [
          {
            name: "Lossenia",
            element: "Ice",
            rarity: "Legendary",
            school: "Frost",
            heroId: null,
            ac_tier: "S",
            hh_overall: 4.0,
            di_rank: 3,
            role: "Frost Enabler",
            skills: {
              ult: "Call of Blizzard: Tornado Ice 150%/s x6s + Frost 100% chance 5s",
              battle: "Snowfall Blessing: Marca aliado 6s -> Frost AoE cada 1.5s",
              passive: "Cryomancy: Basics bounce entre inimigos aplicando Frost 75% 10s"
            },
            exclusive_artifact: null,
            bis_artifact: { name: "Mark of the Ice Calamity", skill: "Frost 50% undispellable + Cold Damage stacking +5%" },
            analysis: "ENABLER critico. DI #3. Aplica Frost em TODOS inimigos + summons constantemente. Frost em 4 inimigos = Hvitar ganha +80% dano no Ult."
          },
          {
            name: "Hvitar",
            element: "Ice",
            rarity: "Legendary",
            school: "Frost",
            heroId: null,
            ac_tier: "SS",
            hh_overall: 4.3,
            di_rank: 6,
            role: "DPS Frost Elite / Execute",
            skills: {
              ult: "Breath of Frost: 640% Cold AoE + remove Frozen pra +360% Cold extra + 20% mais dano por inimigo com Frost (Exclusive). Icewind 15s.",
              battle: "Ice Storm: 400% Cold + 75% Frost 5s",
              passive: "Frigid Deadland: Icewind 15s no inicio. DoT em todos com Frost. Execute <15% HP."
            },
            exclusive_artifact: {
              name: "Eternal Snow Crystal",
              stats: "ATK + Crit Rate",
              skill: "Durante Icewind: Execute <15% HP. Breath of Frost: +20% dano por inimigo com Frost."
            },
            analysis: "CARRY SUPREMO. 90% Crit / 220% CD = 2.98x multiplicador. Execute <15% HP AUTOMATICO durante Icewind. Com 4 Frost inimigos: Ult faz +80% dano. Icewind DoT + Execute = cleanup constante."
          },
          {
            name: "Acilia",
            element: "Radiance",
            rarity: "Legendary",
            school: "Support",
            heroId: 20420,
            ac_tier: "A",
            hh_overall: 4.2,
            di_rank: 14,
            role: "Debuff Cleanser / Healer",
            skills: {
              ult: "Holy Light Descension: Dispel ALL debuffs aliados + Debuff Immunity 10s + HoT (+1% Max HP + 400% Enlightenment) cada 0.5s por 5s.",
              battle: "Glory of Platinum: Cura aliados no range (+10% Max HP + 1200% Enlightenment).",
              passive: "Divine Favor: Cada debuff dispelado/resistido = 1 Oathkeeper's Glory stack."
            },
            exclusive_artifact: null,
            analysis: "Healer PROVADA (918k healing no Round 1). Debuff Immunity protege Hvitar. AoE heal sustenta 3 herois. DI #14."
          }
        ],
        composition: {
          elements: { Ice: 2, Radiance: 1 },
          schools: { Frost: 2, Support: 1 },
          affinity: "FRACA — 2 Ice + 1 Radiance = provavelmente SEM bonus de afinidade (precisa 3+)",
          school_bond: "Frost 2 — parcial. Nao atinge bond maximo.",
          tiers: { SS: 1, S: 1, A: 1 },
          di_avg: "7.67 (#3, #6, #14) = MELHOR DI avg de todos os rounds",
          roles: { "DPS Execute": 1, "Frost Enabler": 1, "Healer/Cleanser": 1 },
          archetype: "frost-carry-minimal-3"
        },
        stats_from_image: {
          total_hp: 219200,
          total_atk: 10000,
          hero_count: 3,
          notable: "Hvitar: 90% Crit / 220% CD = 2.98x multiplicador. APENAS 3 herois = menor HP e ATK total."
        },
        strengths: [
          "DI avg 7.67 = MELHOR que qualquer time anterior. Todos 3 herois sao S1 endgame elite.",
          "Hvitar 90%/220% CD + Execute <15% HP + Eternal Snow Crystal (+80% dano com 4 Frost) = carry ABSURDO",
          "Lossenia DI #3 aplica Frost em TODOS = Hvitar sempre com alvo",
          "Acilia healing PROVADA: 918k no Round 1. Debuff Immunity protege Hvitar.",
          "Hvitar Execute MATA summons automaticamente quando <15% HP = impede accumulo de summon army",
          "Learning L1: 1 elite DPS + support vence summon army (Round 1)",
          "Learning L2: Healing anula Summon Derivative",
          "Hvitar Icewind auto no inicio = pressao imediata sobre todos 4 inimigos"
        ],
        weaknesses: [
          "APENAS 3 herois vs 4 = desvantagem numerica real",
          "ATK total 10k vs 14k = -40% raw DPS",
          "HP total 219k vs 233k = -13k",
          "SEM afinidade elemental (2 Ice + 1 Radiance = provavelmente sem bonus)",
          "SEM school bond maximo (Frost 2/4)",
          "Todo dano de Red concentrado em apenas 3 alvos",
          "Summons mortos por Execute dao Dragon Blood a Lelwanis = alimenta win condition de Red"
        ]
      },

      // --- DECISION ---
      pick: "blue",
      confidence: 55,
      reasoning: {
        primary: "Score favorece Blue (73 vs 64). DI avg 7.67 eh o melhor de todos os rounds e DI eh nosso preditor mais confiavel (L3). Hvitar 90%/220% + Execute + Eternal Snow Crystal eh um carry comprovado. Acilia healing foi provada (918k, Round 1). Learning L1+L2: elite DPS + support vence summon army.",
        secondary: "Risco REAL do 3v4. Red tem +40% ATK total. Isitarian morrendo alimenta Dragon Blood. Lelwanis e Ladehlia tambem tem 90%+ Crit. 4 Summon bond maximo. Sem Tamar pra shutar Sintrellia buffs em summons. Confianca apenas 55% pela assimetria numerica.",
        factors: [
          { factor: "DPS quality",          score_red: 7, score_blue: 9, note: "Hvitar 90%/220% + Execute AUTOMATICO > Lelwanis 90%/220% (precisa Dragon form) + Ladehlia 90%/200%." },
          { factor: "Elemental Affinity",    score_red: 7, score_blue: 3, note: "Red: 4 Necrosis = afinidade completa. Blue: 2 Ice + 1 Radiance = provavelmente sem bonus." },
          { factor: "School Bond",           score_red: 9, score_blue: 5, note: "Red: 4 Summon MAX. Blue: 2 Frost parcial." },
          { factor: "DI ranking avg",        score_red: 5, score_blue: 9, note: "Red avg 32.75 vs Blue avg 7.67. Blue MUITO superior." },
          { factor: "Kill condition",        score_red: 6, score_blue: 8, note: "Hvitar Execute AUTOMATICO <15% HP. Lelwanis precisa 20 mortes. Ladehlia semi-execute." },
          { factor: "Healing throughput",    score_red: 1, score_blue: 7, note: "Red: ZERO healer. Blue: Acilia provada com 918k healing." },
          { factor: "Artifact synergy",      score_red: 7, score_blue: 9, note: "Eternal Snow Crystal (+80% com 4 Frost + Execute) > Black Blood Scale." },
          { factor: "Anti-buff/CC",          score_red: 3, score_blue: 5, note: "Nenhum tem anti-buff dedicado. Acilia Debuff Immunity leve edge." },
          { factor: "Tier quality",          score_red: 6, score_blue: 6, note: "Red: 2 SS + 1 S + 1 B(Epic). Blue: 1 SS + 1 S + 1 A. Isitarian B puxa Red pra baixo." },
          { factor: "Survivability",         score_red: 6, score_blue: 5, note: "Red: 4 herois + summons = mais corpos. Blue: 3 herois = menos alvos mas Acilia cura." },
          { factor: "Sustained DPS",         score_red: 7, score_blue: 7, note: "Red: summon Derivative. Blue: Hvitar DoT + Execute. Empate." },
          { factor: "Resurrection",          score_red: 0, score_blue: 0, note: "Nenhum tem." }
        ],
        total_red: 64,
        total_blue: 73,
        conclusion: "Blue favorito por 73 vs 64. DI avg 7.67 e Hvitar Execute sao os diferenciais. Porem 3v4 eh risco REAL — Red tem +40% ATK e afinidade/bond perfeitos. Pick Blue com confianca BAIXA (55%). Primeira aposta NO BLUE."
      },

      // --- Result (preenchido depois) ---
      result: null,
      result_date: null,
      result_notes: null,
      result_surprise: null,
      post_mortem: null
    },

    // ──────────────────────────────────────────────────────────
    // ROUND 12
    // ──────────────────────────────────────────────────────────
    {
      id: "round-12",
      round: 12,
      date: "2026-02-18",
      screenshot: "logs/Captura de tela 2026-02-18 114749.png",
      result_screenshot: "logs/Screenshot_1.png",
      mode: "Wager (aposta PvP, 2 times AI vs AI)",

      // --- RED TEAM ---
      red: {
        heroes: [
          {
            name: "Hvitar",
            element: "Ice",
            rarity: "Legendary",
            school: "Frost",
            ac_tier: "SS",
            hh_overall: 4.3,
            di_rank: 6,
            role: "DPS Frost Elite",
            skills: {
              ult: "Breath of Frost: 640% Cold AoE + remove Frozen pra +360% Cold extra + 15% mais dano por inimigo com Frost (20% com Exclusive). Icewind 15s.",
              battle: "Ice Storm: 400% Cold + 75% Frost 5s",
              passive: "Frigid Deadland: Icewind 15s no inicio. DoT em todos com Frost. Execute <15% HP (bosses: 600% Derivative)"
            },
            exclusive_artifact: {
              name: "Eternal Snow Crystal",
              stats: "ATK + Crit Rate",
              skill: "Durante Icewind: Execute <15% HP. Breath of Frost: +20% dano por inimigo com Frost (ao inves de 15%)"
            },
            analysis: "Heroi mais forte do time. Icewind AUTOMATICO no inicio + Execute + Ult com multiplicador absurdo. Com 4 inimigos Frost = +80% dano no Ult."
          },
          {
            name: "Auster",
            element: "Ice",
            rarity: "Legendary",
            school: "Frost",
            ac_tier: "SS",
            hh_overall: 4.5,
            di_rank: 26,
            role: "DPS Frost Carry",
            skills: {
              ult: "Bone Chill: 520% Cold AoE + Frost 10s + tracking arrows em todos no range (110% Cold cada)",
              battle: "Toxophilite: 3 flechas 120% cada, 50% ignora 100% DEF",
              passive: "Double Shot: Tracking arrow em ate 2 inimigos com Frost (+55% Cold + recarrega Ult 2.5)"
            },
            exclusive_artifact: null,
            analysis: "DPS consistente e sustentado. Tracking arrows CONSTANTES em inimigos com Frost = DPS que nunca para + recarrega Ult rapido = cicla Ults mais que qualquer outro."
          },
          {
            name: "Lossenia",
            element: "Ice",
            rarity: "Legendary",
            school: "Frost",
            ac_tier: "S",
            hh_overall: 4.0,
            di_rank: 3,
            role: "Frost Enabler",
            skills: {
              ult: "Call of Blizzard: Tornado Ice 150%/s x6s + Frost 100% chance 5s",
              battle: "Snowfall Blessing: Marca aliado 6s -> Frost AoE cada 1.5s",
              passive: "Cryomancy: Basics bounce entre inimigos aplicando Frost 75% 10s"
            },
            exclusive_artifact: null,
            bis_artifact: { name: "Mark of the Ice Calamity", skill: "Frost 50% undispellable + Cold Damage stacking +5%" },
            analysis: "ENABLER critico. Aplica Frost em TODOS os inimigos constantemente via tornado + marca + bounce. Sem Lossenia, Frost chain nao funciona. DI #3 = S1 endgame elite."
          },
          {
            name: "Hochadir",
            element: "Ice",
            rarity: "Legendary",
            school: "Frost",
            ac_tier: "S",
            hh_overall: 3.8,
            di_rank: null,
            role: "Frost Detonator",
            skills: {
              ult: "Frost Reign: 50% Frost em todos + DETONA todos com Frost (500% AoE Cold) + detona Frozen de novo (500% AoE Cold)",
              battle: "Frostfall: +20% ATK Up no aliado Frost com mais ATK + 360% Cold + 75% Frost",
              passive: "Frostbite: Estende duracao de Frost de aliados +5s"
            },
            exclusive_artifact: null,
            bis_artifact: { name: "Ring of Winter", skill: "Frost dano -> ice storm AoE" },
            analysis: "DETONATOR. Ult faz DUPLA detonacao (500% + 500%) em todos com Frost. Passiva estende Frost +5s = Frost nunca cai. Battle buffa +20% ATK no DPS aliado Frost."
          }
        ],
        composition: {
          elements: { Ice: 4 },
          schools: { Frost: 4 },
          affinity: "Permafrost MAX (4/4 Ice)",
          school_bond: "Frost MAX — 4 Frost = Frozen 5s + Frozen automatico no inicio",
          tiers: { SS: 2, S: 2 },
          hh_avg: 4.15,
          roles: { DPS: 3, Enabler: 1, Tank: 0, Healer: 0 },
          archetype: "frost-chain-4"
        },
        strengths: [
          "Frost chain PERFEITA: Lossenia aplica -> Hochadir detona (500%x2) -> Auster tracking em Frost -> Hvitar DoT + Execute",
          "Hvitar Icewind AUTOMATICO no inicio = pressao imediata",
          "Hvitar Execute <15% HP = anti-stalling",
          "Hochadir estende Frost +5s = combo nunca expira",
          "Auster tracking arrows = DPS sustentado constante + recarrega Ult",
          "2 SS + 2 S = stats base superiores",
          "DI ranks: #3, #6, #26 = S1 endgame meta"
        ],
        weaknesses: [
          "ZERO tank — ninguem absorve dano",
          "ZERO healer — sem sustain",
          "Glass cannon — se burst inimigo for suficiente, morrem rapido",
          "Dependem de Frost chain funcionar (se inimigo tiver Frost Immunity, comp quebra)"
        ]
      },

      // --- BLUE TEAM ---
      blue: {
        heroes: [
          {
            name: "Felosia",
            element: "Ice",
            rarity: "Legendary",
            school: "Support",
            ac_tier: "A",
            hh_overall: 4.2,
            di_rank: 33,
            role: "Shield / Damage Reduction",
            skills: {
              ult: "Fearless Bulwark: Shield 12% Max HP + 2900% Enlightenment + 30% Damage Reduction + Control Immunity 10s para TODOS aliados",
              battle: "Guarding Fence: Shield 10% Max HP + 1500% Enlightenment + DEF Up I 5s para aliados no range",
              passive: "Merciful Cure: 15% do dano tomado por qualquer aliado vira shield 10s"
            },
            exclusive_artifact: null,
            analysis: "Melhor shielder do time. 30% Damage Reduction AoE + Control Immunity = janela defensiva forte. Passiva converte 15% dano em shield = sustain passivo constante."
          },
          {
            name: "Utior",
            element: "Necrosis",
            rarity: "Legendary",
            school: "Support",
            ac_tier: "A",
            hh_overall: 4.1,
            di_rank: 65,
            role: "Resurrection / DEF Buffer",
            skills: {
              ult: "Scion of Evil God: DEF Up II + Resurrection at Death para TODOS aliados 10s",
              battle: "Cavern's Curse: 420% Necrotic + 75% Attack Penalty II + Healing Prohibition 5s",
              passive: "For My Purpose: Aliado morre -> ganha 10 Ult Energy"
            },
            exclusive_artifact: null,
            analysis: "Resurrection at Death = segunda vida. DEF Up II empilha com Felosia. Battle tem debuffs uteis (Attack Penalty + Healing Prohibition) mas eh o UNICO dano do time. Captain: +24% DEF."
          },
          {
            name: "Oggok",
            element: "Poison",
            rarity: "Legendary",
            school: "Support",
            ac_tier: "A",
            hh_overall: 4.0,
            di_rank: 169,
            role: "Healer / Immortality",
            skills: {
              ult: "Specialized Area: Totem + Immortality 5s para todos + Heal massivo (400% ATK + 3000% Enlightenment) apos 5s",
              battle: "Hidden Trajectory: Shadow wave bounce 6x, cura aliados + 150% Poison Damage + 85% Attack Penalty II 5s",
              passive: "Witchcraft Therapy: Heal aliado -> dispel 1 debuff"
            },
            exclusive_artifact: null,
            analysis: "Immortality 5s = janela onde ninguem morre. Heal massivo depois. Passiva dispel ao curar = limpa Frost. DI #169 = MUITO fraco no meta S1."
          },
          {
            name: "Grishnaar",
            element: "Lightning",
            rarity: "Legendary",
            school: "Support",
            ac_tier: "A",
            hh_overall: 4.0,
            di_rank: null,
            role: "Tank / Ally Protection",
            skills: {
              ult: "Frenzy Massacre: 550% DEF-based Lightning Damage AoE + -30 Ult Energy inimigos + 100% Attack Penalty II 10s",
              battle: "War Devotee: Ally Protection + Control Immunity ao aliado com mais Crit Damage 10s (UNDISPELLABLE) + Shield 15% Max HP + DEF Up II. AUTO-CAST no inicio!",
              passive: "Reflection: -25% damage taken + +30% Resistance. Compartilha com aliado protegido"
            },
            exclusive_artifact: null,
            analysis: "Tank solido. Ally Protection UNDISPELLABLE + auto-cast no inicio = protecao imediata. -25% damage taken compartilhado. Ult drena Ult Energy inimigo. Dano baseado em DEF (nao ATK)."
          }
        ],
        composition: {
          elements: { Ice: 1, Necrosis: 1, Poison: 1, Lightning: 1 },
          schools: { Support: 4 },
          affinity: "NENHUMA (4 elementos diferentes)",
          school_bond: "Support 4 — bonus defensivo (HP shield)",
          tiers: { A: 4 },
          hh_avg: 4.08,
          roles: { DPS: 0, Tank: 1, Healer: 1, Shield: 1, Resurrection: 1 },
          archetype: "full-support-4"
        },
        strengths: [
          "LAYERS defensivos: Shield (Felosia) + Damage Reduction 30% + Immortality 5s (Oggok) + Resurrection at Death (Utior) + Ally Protection -25% damage (Grishnaar)",
          "Control Immunity (Felosia Ult + Grishnaar Battle) = CC nao funciona",
          "Grishnaar auto-cast Battle = protecao IMEDIATA no inicio",
          "Oggok passiva dispel ao curar = pode limpar Frost stacks",
          "Utior Ult Energy gain when ally dies = cicla Ult rapido se time comecar a morrer"
        ],
        weaknesses: [
          "ZERO DPS dedicado — 4 supports",
          "Unico 'dano': Utior Battle (420% ATK) e Grishnaar Ult (550% DEF). Insuficiente pra matar",
          "SEM afinidade elemental = sem bonus de stats",
          "DI ranks fracos (#33, #65, #169) = nao sao meta S1",
          "Oggok DI #169 = muito fraco no endgame",
          "Defensive cooldowns tem GAPS — Immortality 5s, depois Oggok eh vulneravel",
          "Execute (Hvitar <15%) ignora stalling de HP baixo",
          "Resurrection at Death = revive com pouco HP -> Execute imediato"
        ]
      },

      // --- Decision ---
      pick: "red",
      confidence: 85,
      reasoning: {
        primary: "Red tem Frost chain perfeita (4 Frost) com DPS esmagador. Blue tem 4 supports com ZERO DPS — nao consegue matar ninguem.",
        factors: [
          { factor: "DPS presence",          score_red: 10, score_blue: 1,  note: "Red: 3 DPS + 1 enabler. Blue: 0 DPS. Fator decisivo." },
          { factor: "School Bond synergy",   score_red: 10, score_blue: 5,  note: "Red: 4 Frost = chain perfeita. Blue: 4 Support = defensivo mas nao mata." },
          { factor: "Kill condition",        score_red: 10, score_blue: 0,  note: "Red: Hvitar Execute <15% + Hochadir 500%x2 detonation. Blue: nenhum." },
          { factor: "Elemental Affinity",    score_red: 10, score_blue: 0,  note: "Red: 4 Ice = Permafrost MAX. Blue: 4 elementos diferentes = zero affinity." },
          { factor: "Tier quality",          score_red: 9,  score_blue: 5,  note: "Red: 2 SS + 2 S (avg 4.15). Blue: 4 A (avg 4.08)." },
          { factor: "Artifact synergy",      score_red: 10, score_blue: 3,  note: "Red: Hvitar Exclusive (+20%/Frost inimigo), Mark of Ice Calamity, Ring of Winter. Blue: genericos defensivos." },
          { factor: "Sustained DPS",         score_red: 10, score_blue: 1,  note: "Red: Auster tracking arrows + Hvitar DoT + Lossenia tornado = DPS NUNCA para. Blue: quase zero." },
          { factor: "Anti-defensive",        score_red: 9,  score_blue: 2,  note: "Red: Execute bypassa stalling. Resurrection = revive -> Execute imediato. Blue: Oggok dispel Frost (parcial)." },
          { factor: "Survivability",         score_red: 2,  score_blue: 10, note: "Blue ganha aqui: Immortality, Resurrection, -25% damage, 30% DR, shields. Mas sem DPS pra capitalizar." }
        ],
        total_red: 80,
        total_blue: 27,
        conclusion: "Red domina 80 vs 27. Blue sobrevive muito tempo mas nao consegue matar Red. Hvitar Execute impede stalling. Red vence por attrition."
      },

      // --- Result ---
      result: "blue",
      result_date: "2026-02-20",
      result_notes: "Blue VENCEU com HP MAL TOCADO. 80.9% dos jogadores apostaram no Red. Frost chain elite (2 SS + 2 S) nao conseguiu matar NENHUM support. 4 layers defensivos = impenetravel.",
      result_surprise: "ENORME. Confianca era 85% Red. Score era 80 vs 27. Resultado oposto — Blue dominou sem risco.",
      post_mortem: `ANALISE DO ERRO (85% confianca no Red, resultado oposto):

1. AVALIEI DPS NO VACUO, NAO CONTRA O OPONENTE.
   - Scorei DPS 10 vs 1 como "decisivo". Mas DPS so importa se o alvo PODE morrer.
   - 4 layers defensivos simultaneos = IMPOSSIVEL matar:
     * Grishnaar: Ally Protection -25% dano (UNDISPELLABLE, auto-cast inicio)
     * Felosia: 30% Damage Reduction + Shield + Control Immunity
     * Oggok: Immortality 5s + heal massivo
     * Utior: Resurrection at Death + DEF Up II
   - Multiplicativo: dano Red sofre -25% (Grishnaar) → -30% (Felosia) → absorve shield → ainda precisa matar 2x (Resurrection).

2. EXECUTE NAO FUNCIONA SE ALVO NUNCA CHEGA A <15% HP.
   - Hvitar Execute <15% HP era meu argumento principal contra stalling.
   - Mas com -25% dano + -30% DR + shields + Immortality = herois NUNCA caem abaixo de 15%.
   - Execute virou mecanica MORTA neste matchup. Score 10 vs 0 em kill condition = ERRADO.

3. OGGOK PASSIVA DESTROI FROST CHAIN.
   - Witchcraft Therapy: heal aliado → dispel 1 debuff.
   - Oggok cura constantemente → Frost removido de todos constantemente.
   - SEM FROST nos alvos: Hvitar DoT NAO funciona, Auster tracking NAO dispara, Hochadir NAO detona.
   - A comp INTEIRA de Red depende de Frost ficar nos alvos. Oggok remove sistematicamente.

4. AFFINITY E TIERS IRRELEVANTES.
   - Red: Permafrost MAX + 2 SS + 2 S. Blue: ZERO affinity + 4 A.
   - Scorei 10 vs 0 em affinity. Nao importou NADA.
   - Stats superiores nao compensam quando o oponente nao pode morrer.

5. FRAMEWORK QUEBRADO: AVALIAR FATORES NO VACUO.
   - Cada fator foi avaliado ISOLADAMENTE. "Red tem DPS 10/10" — sim, mas CONTRA O QUE?
   - Correto: avaliar cada fator COMO MATCHUP. "Red DPS vs Blue defense = DPS ANULADO."
   - Score 80 vs 27 = overconfidence absurda por avaliar Red em vacuo.

CORRECOES NO FRAMEWORK:
- Kill condition: avaliar se a CONDICAO pode ser atingida CONTRA o oponente especifico
- DPS: avaliar DPS LIQUIDO (apos DR, shields, healing, Immortality)
- Defense layers: contar QUANTAS layers independentes (cada layer com trigger diferente = mais resiliente)
- Anti-synergy: verificar se oponente tem counter DIRETO a mecanica core (Oggok vs Frost)
- Novo principio: se oponente tem 3+ layers defensivas independentes, DPS puro NAO vence`
    }
  ]
};
