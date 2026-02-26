// artifacts.js — Dragon Heir Companion
// Gerado a partir de:
//   docs/guides/artifact-bis-assignments.md
//   context/player-profile.md
//   data/artifacts-all.json
// Atualizado: 25/Fev/2026 — Recalculado apos integracao AllClash

window.DATA_ARTIFACTS = {

  // ==========================================
  // 34 artefatos que Henry possui (16 Mythic + 18 Legendary)
  // ==========================================
  owned: [
    // ── MYTHIC (6) ──
    {
      name: "Thunder Deity's Spear",
      id: "thunder-deity-s-spear",
      rarity: "Mythic",
      stats: "ATK + Crit Damage",
      skill_name: "Fleeting Lightning",
      skill_description: "Basic attack 60% chance combo duplo (2-attack combo). CD 7s.",
      equippedOn: 20740,
      teams: 9,
      reason: "Mythic + heroi mais usado (9 times). Basic combo = DPS massivo nos times core",
      better_alternative: "Arbiter's Pendant (Exclusive Nastjenka) — feather crit follow-up +50%. Melhor que qualquer generico, mas Exclusive",
      upgrade_priority: 1
    },
    {
      name: "The Great River Lamp",
      id: "the-great-river-lamp",
      rarity: "Mythic",
      stats: "ATK + Crit Damage",
      skill_name: "Lamplighter's Blessing",
      skill_description: "+1% damage 15s apos Ult, +1 stack por basic attack, cap 10 stacks (+10%).",
      equippedOn: 20660,
      teams: 3,
      reason: "Mythic + DPS carry (3 times). Ult -> spam basics com crit = stacking damage",
      better_alternative: "Lucky Playing Cards (Mythic S1) seria alternativa se nao tivesse",
      upgrade_priority: null
    },
    {
      name: "Great Demon's Skull",
      id: "great-demon-s-skull",
      rarity: "Mythic",
      stats: "ATK + Crit Rate",
      skill_name: "Demonic Grudge",
      skill_description: "Aliado invoca undead -> +3% Necrotic Damage 10s, cap 6 stacks (+18%).",
      equippedOn: 23080,
      teams: 3,
      reason: "Synergy perfeito com Shadow Demon + Isitarian + Sintrellia (3 times)",
      better_alternative: "Lantern of the Dead (Mythic S1) — so vale com Premtsa (sacrifice build). Para Ladehlia, Great Demon's Skull e superior",
      upgrade_priority: null
    },
    {
      name: "Mark of the Ice Calamity",
      id: "mark-of-the-ice-calamity",
      rarity: "Mythic",
      stats: "ATK + Accuracy",
      skill_name: "Frigid Mark",
      skill_description: "Frost do wearer 50% chance undispellable. Frost aplicado -> +1% Cold Damage 10s, cap 5 stacks (+5%). Cada stack com duracao separada.",
      level: 20,
      equippedOn: 20920,
      teams: 4,
      reason: "BiS absoluto para Frost enabler (4 times). Frost undispellable = Hochadir pode detonar sempre. +5% Cold stacking = DPS crescente.",
      better_alternative: null,
      upgrade_priority: 4,
      soul_imprint_used: "Vinyara"
    },
    {
      name: "Kui Crown",
      id: "kui-crown",
      rarity: "Mythic",
      stats: "ATK + Crit Rate",
      skill_name: "Unyielding Obsession",
      skill_description: "Quando equipado pela Divine Ascetic: comeca a batalha com 10 Obsession. Em stacks maximos, causa +15% de dano.",
      equippedOn: 23020,
      teams: 3,
      reason: "Exclusive Mythic da Divine Ascetic (3 times). Upgrade massivo sobre Harpy's Nail.",
      better_alternative: null,
      upgrade_priority: 5
    },
    {
      name: "Ring of Winter",
      id: "ring-of-winter",
      rarity: "Mythic",
      stats: "ATK + Crit Rate",
      skill_name: "Ice Storm",
      skill_description: "Dano em Frost -> 30% chance ice storm [300%ATK] Cold. CD 9s.",
      level: 20,
      equippedOn: 21030,
      teams: 3,
      reason: "BiS absoluto para Frost DPS. Auster = melhor alvo para maximizar DPS no Frost chain.",
      better_alternative: null,
      upgrade_priority: 6,
      soul_imprint_used: "Hochadir"
    },

    // ── MYTHIC COMPRADOS 24/Fev (10) ──
    {
      name: "Statue of the Serpent Deity",
      id: "statue-of-the-serpent-deity",
      rarity: "Mythic",
      stats: "ATK + Enlightenment",
      skill_name: "Serpent's Venom",
      skill_description: "Dano em enemy +bonus por debuff stack, cap 20.",
      equippedOn: 20200,
      teams: 2,
      reason: "BiS shop para Lothair. Escala com Poison stacks — sinergia perfeita",
      upgrade_priority: null,
      soul_imprint_used: "Vicana (Poison)"
    },
    {
      name: "Ri'kir Boomerang",
      id: "rikir-boomerang",
      rarity: "Mythic",
      stats: "ATK + Enlightenment",
      skill_name: "Poison Explosion",
      skill_description: "Poison aplicado -> 60% Poison Explosion. CD 9s.",
      equippedOn: 20670,
      teams: 2,
      reason: "Durango multi-hit aplica Poison constantemente → explosões passivas. Move pro Twitch quando Swamp Toadstool chegar (S2)",
      upgrade_priority: null,
      soul_imprint_used: "Talwer (Poison)"
    },
    {
      name: "Gatekeeper's Staff",
      id: "gatekeepers-staff",
      rarity: "Mythic",
      stats: "DEF + Skill Haste",
      skill_name: "Guardian's Overflow",
      skill_description: "50% overheal -> shield.",
      equippedOn: 20690,
      teams: 9,
      reason: "Torrin (9 times) overheala constantemente. Overheal vira shield = survival grátis pro time",
      upgrade_priority: 2,
      soul_imprint_used: "Lorentheel (Radiance)"
    },
    {
      name: "Witch's Remains",
      id: "witchs-remains",
      rarity: "Mythic",
      stats: "HP + Accuracy",
      skill_name: "Cursed Ult",
      skill_description: "Ult -> 35% DEF Penalty II 10s.",
      equippedOn: 22310,
      teams: 0,
      reason: "Ghul'ende Ult 720% AoE já dá Attack Penalty II. Agora + DEF Penalty II = inimigos atacam fraco e levam mais dano. 5.0 em 13/13",
      upgrade_priority: null,
      soul_imprint_used: "Lorentheel (Radiance)"
    },
    {
      name: "Rift Hourglass",
      id: "rift-hourglass",
      rarity: "Mythic",
      stats: "HP + Accuracy",
      skill_name: "Time Warp",
      skill_description: "+50 Skill Haste.",
      equippedOn: 20830,
      teams: 0,
      reason: "Tamar (SS, DI #27). +50 Skill Haste = Battle (300% + dispel + ATK Penalty) cicla mais rápido. Anti-buff constante",
      upgrade_priority: null,
      soul_imprint_used: "Lorentheel (Radiance)"
    },
    {
      name: "Drugo's Blast Jar",
      id: "drugos-blast-jar",
      rarity: "Mythic",
      stats: "HP + DEF%",
      skill_name: "Retaliatory Blast",
      skill_description: "Dano recebido -> 30% AoE [200%DEF] Fire + -15% enemy damage 5s. CD 4s.",
      equippedOn: 21010,
      teams: 1,
      reason: "Ergander Taunt 5s + Immortal 10s = leva todos os hits sem morrer → Blast Jar dispara sem parar. -15% enemy DMG constante",
      upgrade_priority: null,
      soul_imprint_used: "Journ (Fire)"
    },
    {
      name: "Aurelium Vest",
      id: "aurelium-vest",
      rarity: "Mythic",
      stats: "HP + DEF%",
      skill_name: "Protective Aura",
      skill_description: "Shield granted -> ally tambem -10% damage taken.",
      equippedOn: 20770,
      teams: 9,
      reason: "Vinyara (9 times) Battle dá shield constantemente → aliados recebem -10% DMG permanentemente",
      upgrade_priority: 3,
      soul_imprint_used: "Donella (Radiance)"
    },
    {
      name: "Solar King's Horn",
      id: "solar-kings-horn",
      rarity: "Mythic",
      stats: "DEF + HP%",
      skill_name: "Healing Amplifier",
      skill_description: "Heal ally -> +2% damage 10s, cap 3 (+6%).",
      equippedOn: 21700,
      teams: 0,
      reason: "Oggok Battle bounces 6x curando. Cada heal amplifica DPS do time. Healer vira amplificador",
      upgrade_priority: null,
      soul_imprint_used: "Journ (Fire)"
    },
    {
      name: "Whisper of the Consumer",
      id: "whisper-of-the-consumer",
      rarity: "Mythic",
      stats: "ATK + Crit Dmg",
      skill_name: "Soul Consumer",
      skill_description: "Ult +5% Target Max HP True Damage, execute <5%.",
      equippedOn: 20290,
      teams: 1,
      reason: "Jathalea Ult 700% AoE + Thorny Poison. +5% MaxHP True DMG em bosses é significativo. Execute fecha kills",
      upgrade_priority: null,
      soul_imprint_used: "Errich (Fire)"
    },
    {
      name: "Queen's Fan",
      id: "queens-fan",
      rarity: "Mythic",
      stats: "ATK + ATK%",
      skill_name: "Derivative Amplifier",
      skill_description: "Derivative Damage +3% por tile, cap 5 (+15%).",
      equippedOn: 22010,
      teams: 0,
      reason: "Twitch (Poison DPS, variante Time Poison). Derivative Damage +15% escala com Poison procs e school bond triggers. Sinergia com Lothair feedback loop.",
      upgrade_priority: null,
      soul_imprint_used: "Sagomir (Radiance)"
    },

    // ── LEGENDARY DPS/TANK CORE (9) ──
    {
      name: "Pocket of Seduction",
      id: "pocket-of-seduction",
      rarity: "Legendary",
      stats: "HP + DEF%",
      skill_name: "Demon's Bargain",
      skill_description: "-5% damage taken por debuff no wearer, cap 2 stacks (-10%).",
      equippedOn: 20060,
      teams: 12,
      reason: "Tank puro que absorve todo dano. -10% e enorme para sobrevivencia",
      better_alternative: "Giant Turtle Offspring's Shell (Mythic) — AoE [10% Max HP] shield para todo time. Drop do Frey Corridor Lv 200 (sem Soul Imprint)",
      upgrade_priority: 7
    },
    {
      name: "Silverstar Horseshoe",
      id: "silverstar-horseshoe",
      rarity: "Legendary",
      stats: "ATK + Crit Damage",
      skill_name: "Shooting Star",
      skill_description: "Basic atk 20% chance -> +25% ATK Speed 10s. CD 10s.",
      equippedOn: 21560,
      teams: 2,
      reason: "Mais basics = mais Dauntless procs + Thundercloud. ATK Speed e multiplicador para Dauntless (2 times)",
      better_alternative: "Tempest War Drum (Mythic S2) — +10% Lightning Chain + bonus por Electrocuted. Soul Imprint Ivellios disponivel",
      upgrade_priority: null
    },
    {
      name: "Platinum Knight Shield",
      id: "platinum-knight-shield",
      rarity: "Legendary",
      stats: "DEF + HP%",
      skill_name: "Knight Will",
      skill_description: "-10% AoE damage taken.",
      equippedOn: 20770,
      teams: 9,
      reason: "Tank/Support que fica na linha de frente (9 times). -10% AoE = sobrevivencia em waves",
      better_alternative: "Dreamland Globe (Mythic S1) — shield automatico HP baixo + -AoE. Upgrade direto",
      upgrade_priority: 8
    },
    {
      name: "Harpy's Nail",
      id: "harpy-s-nail",
      rarity: "Legendary",
      stats: "ATK + ATK%",
      skill_name: "Harpy's Song",
      skill_description: "Passive skill +10% Damage Bonus.",
      equippedOn: null,
      teams: 0,
      reason: "Interim antigo da Divine Ascetic. Foi substituido por Kui Crown (Mythic Exclusive).",
      better_alternative: null,
      upgrade_priority: null
    },
    {
      name: "Crown of the Unclean",
      id: "crown-of-the-unclean",
      rarity: "Legendary",
      stats: "DEF + Accuracy",
      skill_name: "Curse of the Dead King",
      skill_description: "Ult 50% chance -> DEF Penalty I no alvo por 10s.",
      equippedOn: 22290,
      teams: 5,
      reason: "Debuffer. DEF Penalty amplifica todo dano do time contra o alvo",
      better_alternative: "Misty Conch (Mythic S1) — debuff em ja debuffado -> DEF Penalty II automatico",
      upgrade_priority: null
    },
    {
      name: "Mirror of the Living",
      id: "mirror-of-the-living",
      rarity: "Legendary",
      stats: "DEF + HP%",
      skill_name: "Compassion's Gift",
      skill_description: "Heal ally com HP <15% -> +30% healing.",
      equippedOn: 21670,
      teams: 1,
      reason: "Tank/healer de emergencia. Quando alguem esta morrendo, o heal e 30% mais forte",
      better_alternative: "Everlasting Diamond (Mythic S2) — +15% healing sempre. Soul Imprint Donella reservada",
      upgrade_priority: null
    },
    {
      name: "Life Spindle",
      id: "life-spindle",
      rarity: "Legendary",
      stats: "DEF + HP%",
      skill_name: "Weaving of Life",
      skill_description: "Heal ally -> 50% chance heal outro aliado [7% Max HP]. CD 5s.",
      equippedOn: 20690,
      teams: 9,
      reason: "Healer core. Cada heal pode cascata para outro aliado = sustain passivo enorme",
      better_alternative: "Everlasting Diamond (Mythic S2) seria melhor se nao fosse ir para Frurbath. Solar King's Horn (Mythic S1) — heal -> +2% damage stacking",
      upgrade_priority: null
    },
    {
      name: "Scarlet Chess",
      id: "scarlet-chess",
      rarity: "Legendary",
      stats: "ATK + ATK%",
      skill_name: "Blood Sacrifice Ritual",
      skill_description: "Summoned units +10% damage.",
      equippedOn: 24780,
      teams: 2,
      reason: "Shadow Demon clone (da Ladehlia) + Dragon Remnant (do Isitarian) todos recebem +10% damage",
      better_alternative: null,
      upgrade_priority: null
    },
    {
      name: "Eyeball of the Giant",
      id: "eyeball-of-the-giant",
      rarity: "Legendary",
      stats: "ATK + ATK%",
      skill_name: "Wrath of the Giants",
      skill_description: "Ult +10% Damage Bonus.",
      equippedOn: 21030,
      teams: 3,
      reason: "Ult Bone Chill 520% AoE Cold + Frost. 32.8% DPS share no Goblin Lv12 MAX (3 times). +10% no Ult = boost direto no carry",
      better_alternative: "Ring of Winter (Mythic S1) — dano em Frost -> 30% chance ice storm 300% ATK AoE. CD 9s. BiS absoluto. Precisa Soul Imprint Ice (nao tem)",
      upgrade_priority: null
    },

    // ── LEGENDARY SECUNDARIOS (9) ──
    {
      name: "Wine of Dragon Blood",
      id: "wine-of-dragon-blood",
      rarity: "Legendary",
      stats: "ATK + Attack Speed",
      skill_name: "Power of Dragon Blood",
      skill_description: "Ult 50% chance -> +20% Crit Rate 10s. CD 15s.",
      equippedOn: 22230,
      teams: 4,
      reason: "Ult detona Frost (500% ATK x2). +20% Crit Rate depois do Ult -> Battle Skill e basics com crit alto",
      better_alternative: "Ring of Winter (Mythic S1) — Frost dano -> ice storm AoE. BiS absoluto para Frost DPS",
      upgrade_priority: null
    },
    {
      name: "Effigy of Divine Ear",
      id: "effigy-of-divine-ear",
      rarity: "Legendary",
      stats: "DEF + ATK%",
      skill_name: "Revelation of Divine Ear",
      skill_description: "Kill -> +10 Ult Energy. CD 7s.",
      equippedOn: 20650,
      teams: 2,
      reason: "Passive ja da +25 Ult Energy por kill de debuffado. Com Effigy = +35 total -> Ult cicla absurdamente rapido em waves",
      better_alternative: "Swamp Toadstool (Mythic S1) — Ulceration/Poison damage +%. BiS para Poison DPS",
      upgrade_priority: null
    },
    {
      name: "Scarab Amulet",
      id: "scarab-amulet",
      rarity: "Legendary",
      stats: "HP + DEF%",
      skill_name: "Guardian's Blessing",
      skill_description: "HP <30% -> [250% DEF] shield 10s. CD 45s.",
      equippedOn: 20780,
      teams: 0,
      reason: "Healer squishy (Rare). Shield de emergencia = sobrevivencia garantida quando leva burst",
      better_alternative: "Gatekeeper's Staff (Mythic S1) — 50% overheal -> shield. BiS para qualquer healer",
      upgrade_priority: null
    },
    {
      name: "Vile Ink",
      id: "vile-ink",
      rarity: "Legendary",
      stats: "ATK + ATK%",
      skill_name: "Vomit Impulse",
      skill_description: "Sem crit, mas +20% Derivative Damage.",
      equippedOn: 20040,
      teams: 2,
      reason: "100% do dano do Schaltar e Derivative (Lightning Shield, Lightning Chain, Lightning Strike). +20% em tudo = melhor match possivel",
      better_alternative: null,
      upgrade_priority: null
    },
    {
      name: "Manticore Statue",
      id: "manticore-statue",
      rarity: "Legendary",
      stats: "ATK + ATK%",
      skill_name: "Manticore's Roar",
      skill_description: "Battle skill +10% Damage Bonus.",
      equippedOn: 21690,
      teams: 1,
      reason: "Battle Skill = AoE Necrotic + Dragon Remnant ataca ate 3x. E o maior DPS dele",
      better_alternative: "Scarlet Chess seria melhor (buffa Dragon Remnant), mas Sintrellia tem",
      upgrade_priority: null
    },
    {
      name: "Phoenix Feather",
      id: "phoenix-feather",
      rarity: "Legendary",
      stats: "ATK + DEF%",
      skill_name: "Rebirth Will",
      skill_description: "HP <50% -> +20% ATK 10s. CD 20s.",
      equippedOn: 20670,
      teams: 1,
      reason: "Melee multi-hit (Ult 3 hits, Battle 3 hits). Melee cai abaixo de 50% HP rapido -> +20% ATK = boost massivo",
      better_alternative: "Swamp Toadstool (Mythic S1) ou Ri'kir Boomerang (Mythic S1) — Poison-specific",
      upgrade_priority: null
    },
    {
      name: "Blood Prince's Bracelet",
      id: "blood-prince-s-bracelet",
      rarity: "Legendary",
      stats: "ATK + HP%",
      skill_name: "Blood Feast",
      skill_description: "Kill -> heal [350% ATK].",
      equippedOn: 21290,
      teams: 0,
      reason: "Interim — ATK stats ajudam execucao Frost 800%. Kill heal nao e ideal mas unico artefato livre. Eyeball foi pro Auster.",
      better_alternative: null,
      upgrade_priority: null
    },
    {
      name: "Antinaya's Tiara",
      id: "antinaya-s-tiara",
      rarity: "Legendary",
      stats: "DEF + Enlightenment",
      skill_name: "Merfolk Protection",
      skill_description: "Shield granted +10%.",
      equippedOn: 23210,
      teams: 3,
      reason: "Passiva converte overheal em shield. Antinaya's Tiara buffa esses shields em +10% = synergy direta",
      better_alternative: "Gatekeeper's Staff (Mythic S1) — 50% overheal -> shield. Empilha com a passiva dela",
      upgrade_priority: null
    },
    {
      name: "Mask of the Lark",
      id: "mask-of-the-lark",
      rarity: "Legendary",
      stats: "HP + DEF%",
      skill_name: "Protagonist Effect",
      skill_description: "-2% damage taken por tipo de buff, cap 5 tipos (-10%).",
      equippedOn: 20210,
      teams: 3,
      reason: "Tank DEF-based com DEF Up permanente stacking (passiva). Cada tipo de buff = -2% damage. Tanky demais",
      better_alternative: "Ravatrix's Roots (Mythic S1) — +5% HP, +5% DEF (dobra para non-Legendary = +10%/+10%)",
      upgrade_priority: null
    }
  ],

  // ==========================================
  // 10 Legendary artifacts Henry NAO possui
  // ==========================================
  not_owned: [
    { name: "Spiritual Incense Burner", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Divine Mist", skill_description: "+5% Ult Energy apos usar Ult.", priority: "Media (Torrin)" },
    { name: "Ancestor's Candle", rarity: "Legendary", stats: "HP + Resistance", skill_name: "Ancestor's Glory", skill_description: "Battle skill -> recharge time -5%.", priority: "Baixa" },
    { name: "Arcana Cube", rarity: "Legendary", stats: "ATK + HP%", skill_name: "Moment of Enlightenment", skill_description: "Battle skill 35% chance -> +75 Enlightenment 10s.", priority: "Baixa" },
    { name: "Arcane Music Box", rarity: "Legendary", stats: "ATK + Crit Rate", skill_name: "Ode to Joy", skill_description: "+10% Damage Bonus quando tem shield.", priority: "Baixa" },
    { name: "Illuya's Fang", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Poisonous Miasma", skill_description: "+10% chance de infligir/conceder status com skills.", priority: "Baixa (Poison niche)" },
    { name: "Orb of Oblivion", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Necrotic Domain", skill_description: "+10% chance de infligir/conceder status com skills.", priority: "Baixa (Necrosis niche)" },
    { name: "Arinna's Light", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Starlight", skill_description: "+10% chance de infligir/conceder status com skills.", priority: "Baixa" },
    { name: "Air Globe", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Thunder Blast", skill_description: "+10% chance de infligir/conceder status com skills.", priority: "Baixa" },
    { name: "Frost Globe", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Glacier", skill_description: "+10% chance de infligir/conceder status com skills.", priority: "Baixa" },
    { name: "Flame Globe", rarity: "Legendary", stats: "HP + Accuracy", skill_name: "Burn the City", skill_description: "+10% chance de infligir/conceder status com skills.", priority: "Baixa" }
  ],

  // ==========================================
  // Orcamento de cristais (43.000 disponiveis)
  // ==========================================
  crystal_budget: {
    total: 43000,
    spend_now: 35000,
    reserve: 5000,
    margin: 3000,
    spend_now_pct: 80,
    reserve_pct: 12,
    margin_pct: 8,
    spend_now_target: "Prioridades 1-8. Foco nos 5 Mythics primeiro, depois Legendary dos tanks/DPS core",
    reserve_target: "Refino do artefato do Lothair (ja obtido) ou artefato novo inesperado",
    margin_target: "Carry-over minimo para proxima season"
  },

  // ==========================================
  // Ordem de upgrade com cristais (8 itens)
  // ==========================================
  // Recalculado 25/Fev apos integracao AllClash. Mythics primeiro (escalam melhor), depois Legendary por impacto.
  upgrade_order: [
    {
      priority: 1,
      artifact: "Thunder Deity's Spear",
      rarity: "Mythic",
      id: 20740,
      teams: 9,
      reason: "Mythic + heroi mais usado como DPS (9 times). Prioridade absoluta"
    },
    {
      priority: 2,
      artifact: "Gatekeeper's Staff",
      rarity: "Mythic",
      id: 20690,
      teams: 9,
      reason: "Mythic + Torrin (9 times). Overheal→shield = survival gratis pro time inteiro"
    },
    {
      priority: 3,
      artifact: "Aurelium Vest",
      rarity: "Mythic",
      id: 20770,
      teams: 9,
      reason: "Mythic + Vinyara (9 times). Shield→-10% DMG = reducao constante pro time"
    },
    {
      priority: 4,
      artifact: "Mark of the Ice Calamity",
      rarity: "Mythic",
      id: 20920,
      teams: 4,
      reason: "Mythic BiS Frost enabler (4 times). Frost undispellable + Cold stacking. Ja level 20"
    },
    {
      priority: 5,
      artifact: "Kui Crown",
      rarity: "Mythic",
      id: 23020,
      teams: 3,
      reason: "Exclusive Mythic DA (3 times). +10 Obsession inicial +15% damage"
    },
    {
      priority: 6,
      artifact: "Ring of Winter",
      rarity: "Mythic",
      id: 21030,
      teams: 3,
      reason: "Mythic BiS Frost DPS (3 times). Ice storm AoE. Ja level 20"
    },
    {
      priority: 7,
      artifact: "Pocket of Seduction",
      rarity: "Legendary",
      id: 20060,
      teams: 12,
      reason: "Main tank (12 times!). -10% damage = sobrevivencia do time inteiro"
    },
    {
      priority: 8,
      artifact: "Platinum Knight Shield",
      rarity: "Legendary",
      id: 20770,
      teams: 9,
      reason: "Segunda tank (9 times). -10% AoE damage"
    }
  ],

  // ==========================================
  // Notas sobre Lothair (obtido 22/Fev/2026)
  // ==========================================
  lothair_notes: {
    status: "Obtido (22/Fev/2026)",
    tier: "SS — HH 4.6, 13/13 perfeito",
    artifact_candidates: [
      {
        artifact: "Nightfall Pallium",
        source: "Exclusive do Lothair (BiS absoluto)",
        skill: "Poisonous Intention +10% damage, 15% chance de double damage. Melhor opcao possivel."
      },
      {
        artifact: "Statue of the Serpent Deity",
        source: "Mythic Poison da loja S1 (fallback #1)",
        skill: "ATK + Enlightenment + dano bonus por stacks de debuff (sinergia direta com Poison stack)."
      },
      {
        artifact: "Ri'kir Boomerang",
        source: "Mythic Poison da loja S1 (fallback #2)",
        skill: "Poison aplicado ativa Poison Explosion (60%, CD 9s). Bom para multi-hit Poison comp."
      },
      {
        artifact: "Phoenix Feather",
        source: "Temporario (reaproveitar do Durango quando necessario)",
        skill: "HP <50% -> +20% ATK. Quebra-galho ate fechar o mythic ideal."
      }
    ],
    crystal_reserve: 5000
  },

  // ==========================================
  // Recomendacao de artefatos — Time Poison (23/Fev/2026)
  // ==========================================
  poison_team_artifact_recommendations: {
    updated: "25/Fev/2026",
    team_name: "Time Poison Core (Lothair + Durango + Vicana + Jathalea + Frurbath/Ergander)",
    note: "Plano salvo para exibicao no app web. Prioriza performance imediata com inventario atual e rota de BiS.",
    immediate_swaps: [
      { hero_id: 20200, artifact: "Phoenix Feather", from: "Durango", benefit: "Aumenta burst inicial do carry enquanto o BiS nao chega." },
      { hero_id: 20670, artifact: "Harpy's Nail", from: "Livre", benefit: "Mantem dano consistente sem deixar slot vazio apos mover a Phoenix Feather." },
      { hero_id: 22010, artifact: "Manticore Statue", from: "Isitarian", benefit: "Buff direto na Battle Skill, boa opcao de transicao para DPS range Poison." },
      { hero_id: 20290, artifact: "Blood Prince's Bracelet", from: "Rowena", benefit: "Stats ofensivos imediatos para Ult 700% e pressao em lutas longas." }
    ],
    hero_recommendations: [
      {
        hero_id: 20200,
        role: "Carry principal",
        now: "Phoenix Feather",
        bis_order: ["Nightfall Pallium", "Statue of the Serpent Deity", "Ri'kir Boomerang"],
        reason: "Lothair converte stacks de Poison em Derivative. Escala melhor com artefatos de dano Poison/Enlightenment."
      },
      {
        hero_id: 20670,
        role: "Aplicador de Poison + subcarry",
        now: "Harpy's Nail",
        bis_order: ["Swamp Toadstool", "Ri'kir Boomerang", "Phoenix Feather"],
        reason: "Durango aplica stacks no inicio e multiplica o valor do Lothair. Precisa uptime de dano e aplicacao consistente."
      },
      {
        hero_id: 22010,
        role: "DPS range / trigger de passiva",
        now: "Manticore Statue",
        bis_order: ["Ri'kir Boomerang", "Statue of the Serpent Deity", "Dawn Pipe Organ"],
        reason: "Twitch ganha muito valor por volume de triggers; artefatos Poison aumentam o retorno do loop com Lothair."
      },
      {
        hero_id: 20290,
        role: "AoE + Thorny Poison",
        now: "Blood Prince's Bracelet",
        bis_order: ["Statue of the Serpent Deity", "Ri'kir Boomerang", "Whisper of the Consumer"],
        reason: "Jathalea pressiona em AoE e pune dispel; precisa reforco de dano para acelerar janela de kill."
      }
    ]
  },

  // ==========================================
  // Mythics disponiveis na loja S1 (22 artefatos)
  // Confirmado pelo jogador em 2026-02-14
  // ==========================================
  shop_mythics_s1: [
    // Elementais
    { name: "Ring of the Scarlet Sorcerer", element: "Fire",      stats: "ATK + Crit Dmg",     skill: "Wild dice >=5 -> +10% skill damage" },
    { name: "Flametongue",                  element: "Fire",      stats: "ATK + Crit Rate",    skill: "Wild dice >=5 aliado -> +3% Damage 10s, cap 5 (+15%)" },
    { name: "Ring of Winter",               element: "Ice",       stats: "ATK + Crit Rate",    skill: "Dano em Frost -> 30% ice storm [300%ATK] Cold. CD 9s" },
    { name: "Flute of 'The King'",          element: "Radiance",  stats: "ATK + Crit Rate",    skill: "Ult +15% Damage Bonus por Rally cast" },
    { name: "Hysteria Pan Flute",           element: "Radiance",  stats: "ATK + Crit Dmg",     skill: "Rally consumido -> +5% damage 15s, cap 3 (+15%)" },
    { name: "Lantern of the Dead",          element: "Necrosis",  stats: "ATK + Enlightenment", skill: "Undead morre -> [50%ATK+50%ATK] Necrotic AoE" },
    { name: "Statue of the Serpent Deity",  element: "Poison",    stats: "ATK + Enlightenment", skill: "Dano em enemy +bonus por debuff stack, cap 20" },
    { name: "Ri'kir Boomerang",             element: "Poison",    stats: "ATK + Enlightenment", skill: "Poison aplicado -> 60% Poison Explosion. CD 9s" },
    // Genericos
    { name: "Darkthorn Claw",               element: "Generic",   stats: "ATK + Crit Rate",    skill: "Ataques ignoram shields" },
    { name: "Weird Whistle",                element: "Generic",   stats: "ATK + ATK%",         skill: "Curse 5s, morte -> explosao [75%ATK] True Damage AoE" },
    { name: "Whisper of the Consumer",      element: "Generic",   stats: "ATK + Crit Dmg",     skill: "Ult +5% Target Max HP True Damage, execute <5%" },
    { name: "Polaris Planetarium",          element: "Generic",   stats: "HP + ATK%",          skill: "Control -> Sanctuary (70% damage reduction)" },
    { name: "Prismatic Cloak",              element: "Generic",   stats: "HP + Resistance",    skill: "Resist -> 25% reflect debuff" },
    { name: "Berserker Mask",               element: "Generic",   stats: "HP + Skill Haste",   skill: "Battle skill CD inicial -1.5s" },
    { name: "Rift Hourglass",               element: "Generic",   stats: "HP + Accuracy",      skill: "+50 Skill Haste" },
    { name: "Solar King's Horn",            element: "Generic",   stats: "DEF + HP%",          skill: "Heal ally -> +2% damage 10s, cap 3 (+6%)" },
    { name: "Gatekeeper's Staff",           element: "Generic",   stats: "DEF + Skill Haste",  skill: "50% overheal -> shield" },
    { name: "Drugo's Blast Jar",            element: "Generic",   stats: "HP + DEF%",          skill: "Dano recebido -> 30% AoE [200%DEF] Fire + -15% enemy damage 5s. CD 4s" },
    { name: "Dawn Pipe Organ",              element: "Generic",   stats: "ATK + ATK%",         skill: "Ranged allies ganham 5% do ATK do wearer" },
    { name: "Witch's Remains",              element: "Generic",   stats: "HP + Accuracy",      skill: "Ult -> 35% DEF Penalty II 10s" },
    { name: "Queen's Fan",                  element: "Generic",   stats: "ATK + ATK%",         skill: "Derivative Damage +3% por tile, cap 5 (+15%)" },
    { name: "Aurelium Vest",                element: "Generic",   stats: "HP + DEF%",          skill: "Shield granted -> ally tambem -10% damage taken" }
  ],

  // NAO na loja S1 (guardar soul imprints para quando aparecerem):
  // Tempest War Drum (Sutha BiS), Everlasting Diamond (Frurbath BiS),
  // Swamp Toadstool (Durango BiS), Misty Conch (Voresh BiS),
  // Dreamland Globe (Vinyara BiS), Ravatrix's Roots
  //
  // Obtidos por progressao (sem Soul Imprint):
  // Giant Turtle Offspring's Shell (Eurion BiS) — Frey Corridor Lv 200

  // ==========================================
  // Refine info (referencia de mecanica)
  // ==========================================
  refine_info: {
    max_level: 6,
    mythic_stat_range: "15 -> 335",
    legendary_stat_range: "12 -> 250",
    note: "Cristais nao transferem bem entre seasons -> gastar quase tudo agora"
  }
};
