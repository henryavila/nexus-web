// ============================================================
// GEAR INVENTORY — Catalogado 09/Mar/2026
// Fonte: screenshots em logs/all mytic gears/ e logs/mainAttrib/
// Total fotografado: 215 peças (39 mythic folder + 176 mainAttrib folder)
// Nota: Algumas peças aparecem em AMBAS as pastas (duplicatas)
// Nota: Valores lidos por OCR de screenshots — podem ter erros pontuais
// Correcao confirmada: IMG_3041 DEF% é 12.8% (nao 23.8%)
// ============================================================
window.DATA_GEAR_INVENTORY = {

  // ============================================================
  // MYTHIC GEAR — 1-piece set bonus
  // Todas as peças Mythic do inventário
  // ============================================================
  mythic: [

    // --- FEARLESS CHALLENGE (Violence Incarnate) ---
    // +16% damage vs inimigos com Max HP >50% maior que o heroi
    { img: "2858", set: "Fearless Challenge", slot: "Weapon", lv: 20, forged: true,
      main: "ATK flat", subs: [
        { stat: "ATK%", value: 6.8, upgrades: 0 },
        { stat: "Crit Rate", value: 4.0, upgrades: 0 },
        { stat: "Crit Damage", value: 41.5, upgrades: 4 },
        { stat: "Accuracy", value: 4, upgrades: 0 }
      ], note: "FORGED + TEMPERED. CritD 41.5% = melhor arma DPS do inventario" },

    // --- CHAOS SYMBIOSIS (Finality's Admonition) ---
    // +6% ATK por aliado da mesma School presente
    { img: "2859", set: "Chaos Symbiosis", slot: "Helmet", lv: 20,
      main: "HP flat", subs: [
        { stat: "Resistance", value: 9 },
        { stat: "Accuracy", value: 26 },
        { stat: "DEF%", value: 17.9 },
        { stat: "Crit Rate", value: 7.7 }
      ], note: "ACC+DEF% — bom para Tank-HP/ACC" },
    { img: "2860", set: "Chaos Symbiosis", slot: "Helmet", lv: 20,
      main: "HP flat", subs: [
        { stat: "Resistance", value: 37 },
        { stat: "Crit Damage", value: 7.8 },
        { stat: "Defense", value: 104 },
        { stat: "DEF%", value: 5.9 }
      ], note: "Pure tank — RES 37 + DEF 104" },
    { img: "2861", set: "Chaos Symbiosis", slot: "Weapon", lv: 20,
      main: "ATK flat", subs: [
        { stat: "Crit Rate", value: 8.3 },
        { stat: "Accuracy", value: 23 },
        { stat: "Defense", value: 31 },
        { stat: "HP%", value: 19.5 }
      ], note: "Hybrid DPS/Tank — HP% 19.5% alto" },
    { img: "2862", set: "Chaos Symbiosis", slot: "Weapon", lv: 20,
      main: "ATK flat", subs: [
        { stat: "ATK%", value: 11.6 },
        { stat: "Accuracy", value: 14 },
        { stat: "Crit Rate", value: 11.4 },
        { stat: "DEF%", value: 12.3 }
      ], note: "Triple ofensivo — ATK% + CritR + ACC" },

    // --- MAGIC CRYSTAL REFINEMENT (Energy Siphoner) ---
    // +ATK adicional = 300% da Accuracy atual
    { img: "2841", set: "Magic Crystal Refinement", slot: "Helmet", lv: 20,
      main: "HP flat", subs: [
        { stat: "DEF%", value: 5.6, upgrades: 1 },
        { stat: "HP%", value: 11.9, upgrades: 1 },
        { stat: "ATK%", value: 12.1, upgrades: 1 },
        { stat: "Enlightenment", value: 35, upgrades: 2 }
      ], note: "Nota: usuario corrigiu Enlight = 2 upgrades" },
    { img: "2842", set: "Magic Crystal Refinement", slot: "Helmet", lv: 20,
      main: "HP flat", subs: [
        { stat: "HP%", value: 12.0 },
        { stat: "Crit Damage", value: 16.0 },
        { stat: "Accuracy", value: 21 },
        { stat: "ATK%", value: 12.0 }
      ], note: "DPS helmet — CritD 16% + ATK% 12%" },
    { img: "2843", set: "Magic Crystal Refinement", slot: "Weapon", lv: 20,
      main: "ATK flat", subs: [
        { stat: "Enlightenment", value: 14 },
        { stat: "Resistance", value: 20 },
        { stat: "ATK%", value: 17.7 },
        { stat: "Crit Damage", value: 15.0 }
      ], note: "ATK% 17.7% + CritD 15% — DPS/Hybrid weapon" },
    { img: "2844", set: "Magic Crystal Refinement", slot: "Helmet", lv: 0,
      main: "HP flat", subs: [
        { stat: "Crit Rate", value: 3.2 },
        { stat: "Accuracy", value: 10 },
        { stat: "Crit Damage", value: 7.1 }
      ], note: "Base lv0. So 3 subs. CritR+ACC+CritD = bons subs para DPS" },

    // --- STRIKE THE UNPREPARED (Precise Carnage) ---
    // +30% damage vs inimigos com Defense Penalty
    { img: "2836", set: "Strike the Unprepared", slot: "Armor", lv: 0,
      main: "Enlightenment", subs: [
        { stat: "HP%", value: 5.6 },
        { stat: "Resistance", value: 9 },
        { stat: "HP", value: 759 }
      ], note: "Base. Main Enlight. Duplicata com IMG_3032" },
    { img: "2837", set: "Strike the Unprepared", slot: "Armor", lv: 0,
      main: "ATK flat ou DEF flat", subs: [
        { stat: "HP", value: 270 },
        { stat: "DEF%", value: 5.9 },
        { stat: "Crit Rate", value: 4.9 },
        { stat: "ATK%", value: 5.7 }
      ], note: "Base. 4 subs visiveis — CritR+ATK%+DEF% = versatil" },
    { img: "2838", set: "Strike the Unprepared", slot: "Armor", lv: 0,
      main: "ATK flat ou DEF flat", subs: [
        { stat: "Attack", value: 15 },
        { stat: "Crit Damage", value: 7.6 },
        { stat: "Resistance", value: 9 },
        { stat: "DEF%", value: 5.3 }
      ], note: "Base. CritD 7.6% e sub bom" },
    { img: "2839", set: "Strike the Unprepared", slot: "Armor", lv: 0,
      main: "Enlightenment", subs: [
        { stat: "HP%", value: 5.6 },
        { stat: "Crit Rate", value: 4.7 },
        { stat: "HP", value: 890 }
      ], note: "Base. Main Enlight. Duplicata com IMG_3033" },
    { img: "2840", set: "Strike the Unprepared", slot: "Gloves", lv: 0,
      main: "ATK flat ou DEF flat", subs: [
        { stat: "HP", value: 270 },
        { stat: "DEF%", value: 5.9 },
        { stat: "HP%", value: 5.8 },
        { stat: "Enlightenment", value: 12 }
      ], note: "Base. Subs defensivos" },

    // --- IMPOSING PRESENCE (Emperor's Might) ---
    // 100% HP → +25% damage dealt
    { img: "2850", set: "Imposing Presence", slot: "Armor", lv: 0,
      main: "DEF flat", subs: [
        { stat: "DEF%", value: 2.0 },
        { stat: "Attack", value: 38 },
        { stat: "Defense", value: 28 },
        { stat: "ATK%", value: 6.4 }
      ], note: "Base. ATK% 6.4% = sub bom" },

    // --- DEATH RECORD (Enwinding Flesh) ---
    // Ao causar Derivative Damage → marca alvo +20% Deriv recebido 12s — BiS Flora
    { img: "2955", set: "Death Record", slot: "Gloves", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "HP%", value: 6.7 },
        { stat: "Accuracy", value: 48 },
        { stat: "Resistance", value: 12 },
        { stat: "Enlightenment", value: 26 }
      ], note: "ACC 48 + Enlight 26. Duplicata com IMG_2851 (mesma peca)" },
    { img: "2919", set: "Death Record", slot: "Armor", lv: 0,
      main: "HP%", subs: [
        { stat: "Enlightenment", value: 15 },
        { stat: "Crit Damage", value: 8.4 },
        { stat: "DEF%", value: 6.8 }
      ], note: "Base. Main HP%. Enlight+CritD = bom para ATK+Enlight. Duplicata com IMG_2852" },
    { img: "2920", set: "Death Record", slot: "Gloves", lv: 0,
      main: "HP%", subs: [
        { stat: "Crit Rate", value: 4.3 },
        { stat: "Enlightenment", value: 10 },
        { stat: "DEF%", value: 5.3 }
      ], note: "Base. Main HP%" },
    { img: "2993", set: "Death Record", slot: "Armor", lv: 0,
      main: "Accuracy", subs: [
        { stat: "Crit Rate", value: 3.9 },
        { stat: "Resistance", value: 15 },
        { stat: "HP", value: 732 }
      ], note: "Base. Main ACC. Duplicata com IMG_2853" },
    { img: "3055", set: "Death Record", slot: "Gloves", lv: 0,
      main: "Crit Damage", subs: [
        { stat: "ATK%", value: 6.0 },
        { stat: "Enlightenment", value: 12 },
        { stat: "HP%", value: 5.3 }
      ], note: "Base. Main CritD! ATK%+Enlight = perfeito para Flora. Duplicata com IMG_2854" },
    { img: "3056", set: "Death Record", slot: "Gloves", lv: 0,
      main: "Crit Rate", subs: [
        { stat: "ATK%", value: 6.5 },
        { stat: "Attack", value: 32 },
        { stat: "Defense", value: 30 }
      ], note: "Base. Main CritR. Duplicata com IMG_2855" },

    // --- MARK OF AUSTERITY (Wolfthorn Snare) ---
    // A cada 10% HP perdido → +15% ATK Speed
    { img: "2845", set: "Mark of Austerity", slot: "Armor", lv: 0,
      main: "DEF flat", subs: [
        { stat: "Defense", value: 15 },
        { stat: "Accuracy", value: 14 },
        { stat: "HP", value: 875 },
        { stat: "Attack", value: 35 }
      ], note: "Base. Flat stats" },
    { img: "2846", set: "Mark of Austerity", slot: "Armor", lv: 0,
      main: "DEF flat", subs: [
        { stat: "Resistance", value: 8 },
        { stat: "Accuracy", value: 10 },
        { stat: "HP", value: 853 },
        { stat: "ATK%", value: 6.6 }
      ] },
    { img: "2918", set: "Mark of Austerity", slot: "Armor", lv: 0,
      main: "HP%", subs: [
        { stat: "DEF%", value: 5.8 },
        { stat: "Defense", value: 34 },
        { stat: "Resistance", value: 11 }
      ], note: "Base. Main HP%. Duplicata com IMG_2847" },
    { img: "2953", set: "Mark of Austerity", slot: "Armor", lv: 0,
      main: "DEF%", subs: [
        { stat: "Resistance", value: 11 },
        { stat: "Crit Rate", value: 4.2 },
        { stat: "ATK%", value: 7.0 }
      ], note: "Base. Main DEF%. Duplicata com IMG_2848" },
    { img: "2849", set: "Mark of Austerity", slot: "Gloves", lv: 0,
      main: "ATK flat ou DEF flat", subs: [
        { stat: "Attack", value: 15 },
        { stat: "ATK%", value: 6.2 },
        { stat: "DEF%", value: 6.2 },
        { stat: "Crit Damage", value: 8.7 }
      ], note: "Base. CritD 8.7% + ATK% 6.2%" },

    // --- SKY CODE TREATY (Skybound Alliance) ---
    // Ao dar Shield → dispel 1 debuff do alvo (CD 20s)
    { img: "2863", set: "Sky Code Treaty", slot: "Weapon", lv: 20,
      main: "ATK flat", subs: [
        { stat: "Accuracy", value: 32 },
        { stat: "ATK%", value: 5.9 },
        { stat: "Resistance", value: 37 },
        { stat: "Crit Rate", value: 3.4 }
      ], note: "ACC 32 + RES 37 — bom para support/tank" },
    { img: "2864", set: "Sky Code Treaty", slot: "Weapon", lv: 0,
      main: "ATK flat", subs: [
        { stat: "Enlightenment", value: 13 },
        { stat: "HP", value: 740 },
        { stat: "Crit Rate", value: 3.2 }
      ], note: "Base lv0. So 3 subs." },

    // --- IMPREGNABLE (Supreme Blessing) ---
    // Buffs ganhos tem 50% chance de serem enhanced + indispellable
    { img: "2865", set: "Impregnable", slot: "Helmet", lv: 20,
      main: "HP flat", subs: [
        { stat: "Enlightenment", value: 11, upgrades: 0 },
        { stat: "Defense", value: 34, upgrades: 0 },
        { stat: "Crit Rate", value: 19.8, upgrades: 4 },
        { stat: "Crit Damage", value: 8.8, upgrades: 0 }
      ], note: "CritR 19.8% = 4 upgrades concentrados! Confirmado pelo usuario" },
    { img: "2866", set: "Impregnable", slot: "Helmet", lv: 20,
      main: "HP flat", subs: [
        { stat: "Enlightenment", value: 13 },
        { stat: "DEF%", value: 17.0 },
        { stat: "Crit Damage", value: 16.0 },
        { stat: "HP%", value: 12.0 }
      ], note: "Triple hybrid — DEF% + CritD + HP%" },
    { img: "2867", set: "Impregnable", slot: "Weapon", lv: 20,
      main: "ATK flat", subs: [
        { stat: "ATK%", value: 13.8 },
        { stat: "HP", value: 782 },
        { stat: "Enlightenment", value: 39 },
        { stat: "Defense", value: 68 }
      ], note: "ATK% 13.8% + Enlight 39 — perfeito para ATK+Enlight (Flora/Lothair)" },

    // --- SCHADENFREUDE (Tunnel King's Legacy) ---
    // Ao aplicar debuff → self-heal 2% Max HP
    { img: "2886", set: "Schadenfreude", slot: "Armor", lv: 0,
      main: "DEF flat", subs: [
        { stat: "Defense", value: 15 },
        { stat: "Resistance", value: 10 },
        { stat: "Attack", value: 31 },
        { stat: "DEF%", value: 5.4 }
      ] },
    { img: "2887", set: "Schadenfreude", slot: "Armor", lv: 20,
      main: "DEF flat", subs: [
        { stat: "Resistance", value: 8 },
        { stat: "Attack", value: 39 },
        { stat: "HP", value: 869 },
        { stat: "Crit Damage", value: 8.4 }
      ] },
    { img: "2888", set: "Schadenfreude", slot: "Armor", lv: 20,
      main: "DEF flat", subs: [
        { stat: "DEF%", value: 2.0 },
        { stat: "HP", value: 891 },
        { stat: "Accuracy", value: 14 },
        { stat: "Crit Damage", value: 8.5 }
      ] },
    { img: "2923", set: "Schadenfreude", slot: "Armor", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "Accuracy", value: 43, upgrades: 3 },
        { stat: "ATK%", value: 12.9, upgrades: 1 },
        { stat: "Crit Damage", value: 8.2, upgrades: 0 },
        { stat: "HP", value: 738, upgrades: 0 }
      ], note: "Main HP% 60%. ACC 43 (3 upg) + ATK% 12.9%. Confirmado pelo usuario" },
    { img: "2958", set: "Schadenfreude", slot: "Armor", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "HP%", value: 5.9 },
        { stat: "Defense", value: 29 },
        { stat: "Attack", value: 94 },
        { stat: "Resistance", value: 43 }
      ], note: "Main DEF% 60%. ATK 94 alto" },
    { img: "2959", set: "Schadenfreude", slot: "Armor", lv: 0,
      main: "DEF%", subs: [
        { stat: "HP", value: 891 },
        { stat: "Accuracy", value: 14 },
        { stat: "Crit Damage", value: 8.5 }
      ], note: "Base. Main DEF%" },
    { img: "3034", set: "Schadenfreude", slot: "Armor", lv: 0,
      main: "Enlightenment", subs: [
        { stat: "HP", value: 717 },
        { stat: "Crit Rate", value: 4.1 },
        { stat: "Accuracy", value: 14 }
      ], note: "Base. Main Enlight. Duplicata com IMG_2889" },
    { img: "2890", set: "Schadenfreude", slot: "Gloves", lv: 20,
      main: "ATK flat", subs: [
        { stat: "HP", value: 270 },
        { stat: "ATK%", value: 5.7 },
        { stat: "Accuracy", value: 12 },
        { stat: "DEF%", value: 6.6 }
      ] },

    // --- ANCESTRAL GUIDANCE (Mountain Echo) ---
    // 50% Lifesteal em basic attacks (+50% extra abaixo 25% HP)
    { img: "2891", set: "Ancestral Guidance", slot: "Gloves", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "HP%", value: 12.1, upgrades: 1 },
        { stat: "Resistance", value: 12, upgrades: 0 },
        { stat: "ATK%", value: 10.8, upgrades: 1 },
        { stat: "Enlightenment", value: 42, upgrades: 3 }
      ], note: "Duplicata com IMG_2960. Enlight 42 = EXCELENTE suporte" },
    { img: "2961", set: "Ancestral Guidance", slot: "Gloves", lv: 0,
      main: "DEF%", subs: [
        { stat: "Crit Rate", value: 3.1 },
        { stat: "Resistance", value: 12 },
        { stat: "ATK%", value: 5.8 }
      ], note: "Base. Duplicata com IMG_2894" },
    { img: "2924", set: "Ancestral Guidance", slot: "Armor", lv: 0,
      main: "HP%", subs: [
        { stat: "ATK%", value: 5.7 },
        { stat: "Crit Rate", value: 4.6 },
        { stat: "Defense", value: 28 }
      ], note: "Base. Main HP%. Duplicata com IMG_2892" },
    { img: "2997", set: "Ancestral Guidance", slot: "Armor", lv: 0,
      main: "Accuracy", subs: [
        { stat: "Resistance", value: 9 },
        { stat: "Attack", value: 36 },
        { stat: "HP", value: 861 }
      ], note: "Base. Main ACC. Duplicata com IMG_2893" },

    // --- CLEAN SWEEP (Unclean Bloodline) ---
    // Quando ult recarrega → dispel ALL debuffs do heroi
    { img: "2896", set: "Clean Sweep", slot: "Gloves", lv: 0,
      main: "ATK%", subs: [
        { stat: "HP", value: 853 },
        { stat: "Crit Damage", value: 8.7 },
        { stat: "Attack", value: 31 }
      ], note: "Base. Main ATK%. CritD 8.7% = bom sub" },
    { img: "2921", set: "Clean Sweep", slot: "Armor", lv: 0,
      main: "HP%", subs: [
        { stat: "Resistance", value: 10 },
        { stat: "Accuracy", value: 13 },
        { stat: "HP", value: 645 }
      ], note: "Base. Main HP%" },
    { img: "2994", set: "Clean Sweep", slot: "Armor", lv: 0,
      main: "Accuracy", subs: [
        { stat: "Enlightenment", value: 13 },
        { stat: "Resistance", value: 12 },
        { stat: "Crit Rate", value: 3.8 }
      ], note: "Base. Main ACC" },

    // --- IRON BASTION (Absolute Deterrence) ---
    // Ao receber Crit → 50% chance -30% Crit Rate do atacante 5s
    { img: "2922", set: "Iron Bastion", slot: "Armor", lv: 0,
      main: "HP%", subs: [
        { stat: "HP", value: 766 },
        { stat: "Crit Rate", value: 3.7 },
        { stat: "ATK%", value: 6.2 }
      ], note: "Base. Main HP%" },
    { img: "2956", set: "Iron Bastion", slot: "Gloves", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Defense", value: 100 },
        { stat: "ATK%", value: 6.1 },
        { stat: "Crit Rate", value: 7.0 },
        { stat: "Accuracy", value: 26 }
      ], note: "DEF 100 + ACC 26 — bom para Tank-DEF/Debuffer" },
    { img: "2957", set: "Iron Bastion", slot: "Armor", lv: 0,
      main: "DEF%", subs: [
        { stat: "HP", value: 819 },
        { stat: "Accuracy", value: 14 },
        { stat: "Resistance", value: 12 }
      ], note: "Base. Main DEF%" },
    { img: "2995", set: "Iron Bastion", slot: "Armor", lv: 0,
      main: "Accuracy", subs: [
        { stat: "Crit Rate", value: 4.3 },
        { stat: "Defense", value: 35 },
        { stat: "Attack", value: 35 }
      ], note: "Base. Main ACC" },
    { img: "2996", set: "Iron Bastion", slot: "Armor", lv: 0,
      main: "Accuracy", subs: [
        { stat: "Resistance", value: 12 },
        { stat: "ATK%", value: 5.4 },
        { stat: "HP%", value: 6.9 }
      ], note: "Base. Main ACC. ATK%+HP% = bons subs" },
    { img: "3057", set: "Iron Bastion", slot: "Gloves", lv: 20,
      main: "Crit Damage", mainValue: 80.0, subs: [
        { stat: "ATK%", value: 7.0 },
        { stat: "Enlightenment", value: 10 },
        { stat: "HP", value: 850 },
        { stat: "Resistance", value: 57 }
      ], note: "Main CritD 80%! ATK% 7.0% bom sub. RES 57 alto" },

    // --- MYTHIC ARMOR/GLOVES — mainAttrib batch 10/Mar/2026 ---
    // 17 Armor + 2 Gloves = 19 pecas
    { img: "3215", set: "Strike the Unprepared", slot: "Armor", lv: 12, main: "Enlightenment",
      subs: [{ stat: "HP%", value: 11.3 }, { stat: "Resistance", value: 19 }, { stat: "ATK%", value: 5.3 }],
      note: "Lv12. 3 subs visiveis (4o cortado)" },
    { img: "3220", set: "Strike the Unprepared", slot: "Armor", lv: 12, main: "Enlightenment",
      subs: [{ stat: "HP%", value: 11.3 }, { stat: "Crit Rate", value: 4.7 }, { stat: "Defense", value: 32 }],
      note: "Lv12. 3 subs visiveis (4o cortado)" },
    { img: "3221", set: "Mark of Austerity", slot: "Armor", lv: 12, main: "DEF%",
      subs: [{ stat: "Resistance", value: 25 }, { stat: "Crit Rate", value: 4.2 }, { stat: "ATK%", value: 7.9 }, { stat: "Crit Damage", value: 16.5, upgrades: 1 }],
      note: "Lv12. CritD 16.5(1up) + ATK% 7.9 + CritR 4.2. 3/4 useful" },
    { img: "3222", set: "Death Record", slot: "Armor", lv: 8, main: "Accuracy",
      subs: [{ stat: "Crit Rate", value: 7.1, upgrades: 1 }, { stat: "Resistance", value: 15 }, { stat: "HP", value: 732 }, { stat: "Defense", value: 40 }] },
    { img: "3223", set: "Iron Bastion", slot: "Armor", lv: 8, main: "Accuracy",
      subs: [{ stat: "Crit Rate", value: 4.3 }, { stat: "Defense", value: 66, upgrades: 1 }, { stat: "Attack", value: 35 }, { stat: "ATK%", value: 6.7 }] },
    { img: "3224", set: "Death Record", slot: "Armor", lv: 20, main: "HP%", mainValue: 60.0,
      subs: [{ stat: "Enlightenment", value: 26 }, { stat: "Crit Damage", value: 24.6 }, { stat: "DEF%", value: 13.5 }, { stat: "ATK%", value: 5.0 }],
      note: "Lv20 MAXED. CritD 24.6 + DEF% 13.5 + Enlight 26. Forte para Derivative/Tank" },
    { img: "3225", set: "Schadenfreude", slot: "Armor", lv: 16, main: "Enlightenment",
      subs: [{ stat: "HP", value: 1428, upgrades: 1 }, { stat: "Crit Rate", value: 4.1 }, { stat: "Accuracy", value: 14 }, { stat: "ATK%", value: 18.8, upgrades: 2 }],
      note: "Lv16. ATK% 18.8(2ups) + CritR + ACC. Excelente DPS-Derivative" },
    { img: "3226", set: "Ancestral Guidance", slot: "Armor", lv: 4, main: "Accuracy",
      subs: [{ stat: "Resistance", value: 9 }, { stat: "Attack", value: 36 }, { stat: "HP", value: 861 }, { stat: "Crit Damage", value: 7.5 }],
      note: "Lv4. 4th sub just appeared" },
    { img: "3227", set: "Mark of Austerity", slot: "Armor", lv: 8, main: "HP%",
      subs: [{ stat: "DEF%", value: 5.8 }, { stat: "Defense", value: 64, upgrades: 1 }, { stat: "Resistance", value: 11 }, { stat: "Crit Rate", value: 4.1 }] },
    { img: "3228", set: "Imposing Presence", slot: "Armor", lv: 4, main: "DEF%",
      subs: [{ stat: "Attack", value: 38 }, { stat: "Defense", value: 28 }, { stat: "ATK%", value: 6.4 }, { stat: "HP", value: 647 }],
      note: "Lv4. ATK% 6.4 = bom sub" },
    { img: "3229", set: "Iron Bastion", slot: "Armor", lv: 20, main: "Accuracy", mainValue: 96,
      subs: [{ stat: "Resistance", value: 12 }, { stat: "ATK%", value: 17.8, upgrades: 2 }, { stat: "HP%", value: 6.9 }, { stat: "Crit Rate", value: 12.6, upgrades: 2 }],
      note: "Lv20 MAXED EQUIPPED. ATK% 17.8 + CritR 12.6. TOP DPS mythic armor" },
    { img: "3230", set: "Iron Bastion", slot: "Armor", lv: 8, main: "DEF%",
      subs: [{ stat: "HP", value: 1526, upgrades: 1 }, { stat: "Accuracy", value: 14 }, { stat: "Resistance", value: 12 }, { stat: "Defense", value: 53 }] },
    { img: "3231", set: "Clean Sweep", slot: "Armor", lv: 8, main: "HP%",
      subs: [{ stat: "Resistance", value: 22, upgrades: 1 }, { stat: "Accuracy", value: 13 }, { stat: "HP", value: 645 }, { stat: "Crit Rate", value: 4.8 }],
      note: "RES up (waste)" },
    { img: "3232", set: "Schadenfreude", slot: "Armor", lv: 8, main: "DEF%",
      subs: [{ stat: "HP", value: 891 }, { stat: "Accuracy", value: 14 }, { stat: "Crit Damage", value: 8.5 }, { stat: "Attack", value: 67, upgrades: 1 }] },
    { img: "3233", set: "Ancestral Guidance", slot: "Armor", lv: 8, main: "HP%",
      subs: [{ stat: "ATK%", value: 5.7 }, { stat: "Crit Rate", value: 4.6 }, { stat: "Defense", value: 58 }, { stat: "Accuracy", value: 14 }] },
    { img: "3234", set: "Iron Bastion", slot: "Armor", lv: 8, main: "HP%",
      subs: [{ stat: "HP", value: 766 }, { stat: "Crit Rate", value: 7.8, upgrades: 1 }, { stat: "ATK%", value: 6.2 }, { stat: "DEF%", value: 5.8 }],
      note: "CritR 7.8(1up) + ATK% + DEF%. 3/4 useful" },
    { img: "3235", set: "Clean Sweep", slot: "Armor", lv: 16, main: "Accuracy",
      subs: [{ stat: "Enlightenment", value: 13 }, { stat: "Resistance", value: 24 }, { stat: "Crit Rate", value: 3.8 }, { stat: "ATK%", value: 17.0 }],
      note: "Lv16. ATK% 17.0 (provavel 2ups). Main ACC. DPS-debuffer" },
    // --- MYTHIC GLOVES ---
    { img: "3291", set: "Death Record", slot: "Gloves", lv: 16, main: "HP%",
      subs: [{ stat: "Crit Rate", value: 7.4 }, { stat: "Enlightenment", value: 38 }, { stat: "DEF%", value: 5.7 }, { stat: "HP", value: 657 }],
      note: "Lv16. Enlight 38(2ups) + CritR 7.4. Derivative BiS gloves" },
    { img: "3295", set: "Ancestral Guidance", slot: "Gloves", lv: 12, main: "DEF%",
      subs: [{ stat: "Crit Rate", value: 3.1 }, { stat: "Resistance", value: 27 }, { stat: "ATK%", value: 11.2 }, { stat: "HP%", value: 6.3 }],
      note: "Lv12. ATK% 11.2(1up) + HP%. RES 27 waste" },
  ],

  // ============================================================
  // LEGENDARY GEAR +20 — Melhores peças filler
  // Apenas as upgradadas (+20), organizadas por main stat
  // ============================================================
  legendary_plus20: [

    // --- MAIN STAT: ATK% 60% ---
    { img: "2904", set: "Radiance of the Blue Oak", slot: "Armor", lv: 20,
      main: "ATK%", mainValue: 60.0, subs: [
        { stat: "Enlightenment", value: 27, upgrades: 1 },
        { stat: "HP", value: 1504, upgrades: 1 },
        { stat: "Accuracy", value: 10, upgrades: 0 },
        { stat: "Resistance", value: 35, upgrades: 2 }
      ], note: "Confirmado pelo usuario: RES 2upg, HP+Enlight 1upg, ACC 0" },
    { img: "2905", set: "Ancestral Protection", slot: "Gloves", lv: 20,
      main: "ATK%", mainValue: 60.0, subs: [
        { stat: "DEF%", value: 6.3, upgrades: 0 },
        { stat: "Crit Rate", value: 3.5, upgrades: 0 },
        { stat: "HP%", value: 23.1, upgrades: 3 },
        { stat: "Accuracy", value: 27, upgrades: 1 }
      ], note: "Confirmado: HP% 3upg, ACC 1upg. HP% 23.1% enorme" },
    { img: "2909", set: "Holy Hunter", slot: "Gloves", lv: 20,
      main: "ATK%", mainValue: 60.0, subs: [
        { stat: "Resistance", value: 26 },
        { stat: "Crit Rate", value: 12.5 },
        { stat: "HP%", value: 5.1 },
        { stat: "Accuracy", value: 21 }
      ], note: "CritR 12.5% + ACC 21 — bom DPS/ACC" },
    { img: "2913", set: "Power of Tides", slot: "Gloves", lv: 20,
      main: "ATK%", mainValue: 60.0, subs: [
        { stat: "Crit Rate", value: 3.4 },
        { stat: "HP%", value: 12.2 },
        { stat: "HP", value: 1023 },
        { stat: "Defense", value: 105 }
      ], note: "Subs defensivos — filler tank" },

    // --- MAIN STAT: HP% 60% ---
    { img: "2932", set: "Heart of the Gambler", slot: "Gloves", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "Defense", value: 142 },
        { stat: "Crit Damage", value: 8.9 },
        { stat: "Crit Rate", value: 6.8 },
        { stat: "Resistance", value: 10 }
      ] },
    { img: "2935", set: "Cyril's Whisper", slot: "Gloves", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "Resistance", value: 12 },
        { stat: "DEF%", value: 16.8 },
        { stat: "Crit Damage", value: 25.0 },
        { stat: "ATK%", value: 5.8 }
      ], note: "CritD 25.0% + DEF% 16.8% — excelente hybrid" },
    { img: "2937", set: "Imperial Executioner", slot: "Armor", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "ATK%", value: 16.8 },
        { stat: "Crit Rate", value: 7.4 },
        { stat: "HP", value: 1416 },
        { stat: "Accuracy", value: 13 }
      ], note: "ATK% 16.8% + CritR 7.4% — excelente DPS filler" },
    { img: "2941", set: "Tundra Tenacity", slot: "Gloves", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "Enlightenment", value: 27 },
        { stat: "Resistance", value: 45 },
        { stat: "HP", value: 698 },
        { stat: "Crit Rate", value: 3.9 }
      ], note: "RES 45 + Enlight 27 — suporte/healer" },
    { img: "2942", set: "Tundra Tenacity", slot: "Gloves", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "Enlightenment", value: 26, upgrades: 1 },
        { stat: "Crit Damage", value: 9.0, upgrades: 0 },
        { stat: "ATK%", value: 24.7, upgrades: 3 },
        { stat: "Attack", value: 31, upgrades: 0 }
      ], note: "ATK% 24.7% (3upg) confirmado. TOP DPS filler" },
    { img: "2945", set: "Radiance of the Blue Oak", slot: "Gloves", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "Resistance", value: 39 },
        { stat: "Crit Damage", value: 15.0 },
        { stat: "ATK%", value: 6.9 },
        { stat: "Accuracy", value: 25 }
      ], note: "CritD 15% + ACC 25 — bom hybrid" },
    { img: "2947", set: "Ancestral Protection", slot: "Armor", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "ATK%", value: 6.2 },
        { stat: "Accuracy", value: 26 },
        { stat: "HP", value: 2232 },
        { stat: "Resistance", value: 25 }
      ], note: "HP 2232 enorme + ACC 26 — Tank-HP/ACC filler" },
    { img: "2952", set: "Puppeteer's Inspiration", slot: "Armor", lv: 20,
      main: "HP%", mainValue: 60.0, subs: [
        { stat: "HP", value: 2272 },
        { stat: "Crit Rate", value: 7.4 },
        { stat: "Defense", value: 77 },
        { stat: "Attack", value: 30 }
      ], note: "HP 2272 = MAIOR HP flat do inventario" },

    // --- MAIN STAT: DEF% 60% ---
    { img: "2964", set: "Heart of the Gambler", slot: "Armor", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Attack", value: 102 },
        { stat: "Resistance", value: 33 },
        { stat: "Defense", value: 32 },
        { stat: "ATK%", value: 5.0 }
      ] },
    { img: "2965", set: "Cyril's Whisper", slot: "Armor", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "ATK%", value: 18.0 },
        { stat: "Accuracy", value: 23 },
        { stat: "Enlightenment", value: 26 },
        { stat: "Crit Damage", value: 7.8 }
      ], note: "ATK% 18% + Enlight 26 + ACC 23 — EXCELLENT ATK+Enlight+ACC" },
    { img: "2966", set: "Cyril's Whisper", slot: "Gloves", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Crit Damage", value: 7.1 },
        { stat: "Crit Rate", value: 12.2 },
        { stat: "HP", value: 845 },
        { stat: "Accuracy", value: 33 }
      ], note: "CritR 12.2% + ACC 33 — bom DPS-ACC" },
    { img: "2976", set: "Tundra Tenacity", slot: "Armor", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Resistance", value: 28 },
        { stat: "Accuracy", value: 12 },
        { stat: "ATK%", value: 5.8 },
        { stat: "Crit Rate", value: 15.6 }
      ], note: "CritR 15.6% — bom DPS-Crit filler" },
    { img: "2977", set: "Tundra Tenacity", slot: "Gloves", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Crit Damage", value: 15.9 },
        { stat: "HP%", value: 12.2 },
        { stat: "ATK%", value: 17.1 },
        { stat: "Enlightenment", value: 12 }
      ], note: "CritD 15.9% + ATK% 17.1% — TOP DPS filler" },
    { img: "2981", set: "Ancestral Protection", slot: "Armor", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Enlightenment", value: 12 },
        { stat: "HP%", value: 19.9 },
        { stat: "Crit Rate", value: 11.7 },
        { stat: "ATK%", value: 8.0 }
      ], note: "Triple ofensivo — HP% 19.9% + CritR 11.7% + ATK% 8%" },
    { img: "2982", set: "Ancestral Protection", slot: "Armor", lv: 20,
      main: "DEF%", mainValue: 60.0, subs: [
        { stat: "Crit Rate", value: 12.5 },
        { stat: "HP", value: 1296 },
        { stat: "ATK%", value: 6.9 },
        { stat: "Resistance", value: 23 }
      ] },

    // --- MAIN STAT: Accuracy 96 ---
    { img: "3002", set: "Tundra Tenacity", slot: "Armor", lv: 20,
      main: "Accuracy", mainValue: 96, subs: [
        { stat: "Crit Damage", value: 24.6 },
        { stat: "Resistance", value: 10 },
        { stat: "Crit Rate", value: 12.8 },
        { stat: "Enlightenment", value: 13 }
      ], note: "CritD 24.6% + CritR 12.8% + ACC 96 main — TOP DPS-ACC filler" },
    { img: "3014", set: "Holy Hunter", slot: "Armor", lv: 20,
      main: "Accuracy", mainValue: 96, subs: [
        { stat: "Resistance", value: 20 },
        { stat: "HP%", value: 5.9 },
        { stat: "DEF%", value: 17.2 },
        { stat: "Enlightenment", value: 27 }
      ], note: "Tank/support com ACC — DEF% 17.2% + Enlight 27" },
    { img: "3015", set: "Puppeteer's Inspiration", slot: "Armor", lv: 20,
      main: "Accuracy", mainValue: 96, subs: [
        { stat: "ATK%", value: 12.2 },
        { stat: "Crit Rate", value: 17.0 },
        { stat: "Defense", value: 35 },
        { stat: "Enlightenment", value: 11 }
      ], note: "ATK% 12.2% + CritR 17.0% + ACC 96 — EXCELENTE DPS-ACC" },

    // --- MAIN STAT: Resistance 120 ---
    { img: "3021", set: "Cyril's Whisper", slot: "Armor", lv: 20,
      main: "Resistance", mainValue: 120, subs: [
        { stat: "Defense", value: 93 },
        { stat: "Crit Rate", value: 7.7 },
        { stat: "Crit Damage", value: 8.9 },
        { stat: "HP", value: 1391 }
      ] },
    { img: "3022", set: "Cyril's Whisper", slot: "Armor", lv: 20,
      main: "Resistance", mainValue: 120, subs: [
        { stat: "Crit Damage", value: 30.8 },
        { stat: "Attack", value: 64 },
        { stat: "ATK%", value: 5.1 },
        { stat: "Enlightenment", value: 13 }
      ], note: "CritD 30.8%! Altissimo" },
    { img: "3031", set: "Power of Tides", slot: "Armor", lv: 20,
      main: "Resistance", mainValue: 120, subs: [
        { stat: "Enlightenment", value: 36 },
        { stat: "Crit Damage", value: 8.7 },
        { stat: "DEF%", value: 18.0 },
        { stat: "HP", value: 744 }
      ], note: "Enlight 36 + DEF% 18% — healer/tank" },

    // --- MAIN STAT: Enlightenment 120 ---
    { img: "3035", set: "Platinum Knight Quality", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "Resistance", value: 22 },
        { stat: "DEF%", value: 13.3 },
        { stat: "Crit Rate", value: 3.2 },
        { stat: "Crit Damage", value: 22.1 }
      ], note: "CritD 22.1% + DEF% 13.3%" },
    { img: "3037", set: "Rhapsodist's Calling", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "Resistance", value: 13 },
        { stat: "Attack", value: 28 },
        { stat: "DEF%", value: 28.8 },
        { stat: "Defense", value: 38 }
      ], note: "DEF% 28.8% — pure tank com Enlight" },
    { img: "3041", set: "Imperial Executioner", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "ATK%", value: 13.5, upgrades: 1 },
        { stat: "Crit Rate", value: 6.7, upgrades: 1 },
        { stat: "Attack", value: 71, upgrades: 1 },
        { stat: "DEF%", value: 12.8, upgrades: 1 }
      ], note: "CORRIGIDO: DEF% = 12.8% (nao 23.8%). ATK%+CritR+Enlight120 = TOP Flora filler" },
    { img: "3043", set: "Revenge of the Fallen", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "HP%", value: 13.8 },
        { stat: "Crit Damage", value: 23.9 },
        { stat: "Resistance", value: 23 },
        { stat: "DEF%", value: 6.9 }
      ], note: "CritD 23.9% + HP% 13.8% — hybrid" },
    { img: "3049", set: "Holy Hunter", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "HP", value: 819 },
        { stat: "Attack", value: 77 },
        { stat: "DEF%", value: 23.3 },
        { stat: "Accuracy", value: 13 }
      ], note: "DEF% 23.3% + ATK 77" },
    { img: "3051", set: "Puppeteer's Inspiration", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "Attack", value: 136 },
        { stat: "HP", value: 685 },
        { stat: "Accuracy", value: 12 },
        { stat: "Crit Rate", value: 7.5 }
      ], note: "ATK flat 136 — alto" },
    { img: "3052", set: "Power of Tides", slot: "Armor", lv: 20,
      main: "Enlightenment", mainValue: 120, subs: [
        { stat: "Attack", value: 99 },
        { stat: "HP", value: 857 },
        { stat: "ATK%", value: 12.4 },
        { stat: "DEF%", value: 11.3 }
      ], note: "ATK% 12.4% + Enlight 120 — bom ATK+Enlight" },

    // --- MAIN STAT: Crit Rate 40% ---
    { img: "3069", set: "Cyril's Whisper", slot: "Gloves", lv: 20,
      main: "Crit Rate", mainValue: 40.0, subs: [
        { stat: "Attack", value: 69 },
        { stat: "ATK%", value: 6.2 },
        { stat: "Crit Damage", value: 16.7 },
        { stat: "Defense", value: 102 }
      ], note: "CritR 40% + CritD 16.7% = BiS DPS-Crit Gloves filler" },
    { img: "3070", set: "Cyril's Whisper", slot: "Gloves", lv: 20,
      main: "Crit Rate", mainValue: 40.0, subs: [
        { stat: "Attack", value: 105 },
        { stat: "Resistance", value: 14 },
        { stat: "ATK%", value: 12.5 },
        { stat: "Enlightenment", value: 25 }
      ], note: "CritR 40% + ATK% 12.5% — excelente DPS" },

    // --- MAIN STAT: Crit Damage 80% ---
    { img: "3074", set: "Imperial Executioner", slot: "Gloves", lv: 20,
      main: "Crit Damage", mainValue: 80.0, subs: [
        { stat: "Defense", value: 96 },
        { stat: "HP%", value: 11.6 },
        { stat: "Resistance", value: 28 },
        { stat: "Crit Rate", value: 4.7 }
      ], note: "Subs defensivos — tank com CritD main" },
    { img: "3075", set: "Holy Hunter", slot: "Gloves", lv: 20,
      main: "Crit Damage", mainValue: 80.0, subs: [
        { stat: "ATK%", value: 6.6 },
        { stat: "HP", value: 1511 },
        { stat: "HP%", value: 15.8 },
        { stat: "DEF%", value: 12.9 }
      ], note: "HP% 15.8% + DEF% 12.9% — tank/hybrid" },
    { img: "3079", set: "Tundra Tenacity", slot: "Gloves", lv: 20,
      main: "Crit Damage", mainValue: 80.0, subs: [
        { stat: "Defense", value: 61 },
        { stat: "HP", value: 649 },
        { stat: "HP%", value: 12.5 },
        { stat: "DEF%", value: 10.8 }
      ], note: "Pure defensive subs" },
  ],

  // ============================================================
  // LEGENDARY GEAR +0 (base) — Non-flat main stats
  // Peças com 3 subs visíveis (4o libera no lv 4)
  // Organizadas por main stat
  // ============================================================
  legendary_base: [

    // === MAIN STAT: ATK% ===
    { img: "2897", set: "Platinum Knight", slot: "Armor", main: "ATK%", subs: ["Resistance +12", "Crit Rate +4.7%", "HP +649"] },
    { img: "2898", set: "Rhapsodist", slot: "Gloves", main: "ATK%", subs: ["Crit Rate +4.8%", "Attack +30", "Accuracy +10"] },
    { img: "2899", set: "Gambler", slot: "Armor", main: "ATK%", subs: ["DEF% +6.2%", "Resistance +12", "Crit Rate +4.8%"] },
    { img: "2900", set: "Cyril", slot: "Armor", main: "ATK%", subs: ["Defense +39", "Resistance +11", "Enlightenment +11"] },
    { img: "2901", set: "Cyril", slot: "Armor", main: "ATK%", subs: ["HP +891", "Enlightenment +13", "DEF% +5.4%"] },
    { img: "2902", set: "Tundra", slot: "Armor", main: "ATK%", subs: ["Resistance +12", "Accuracy +11", "Defense +37"] },
    { img: "2903", set: "Tundra", slot: "Armor", main: "ATK%", subs: ["Attack +32", "Crit Damage +8.7%", "DEF% +5.8%"] },
    { img: "2906", set: "Ancestral Prot.", slot: "Gloves", main: "ATK%", subs: ["HP +885", "Enlightenment +13", "Accuracy +15"] },
    { img: "2907", set: "Ancestral Prot.", slot: "Gloves", main: "ATK%", subs: ["DEF% +5.6%", "HP% +6.9%", "Attack +35"] },
    { img: "2910", set: "Holy Hunter", slot: "Gloves", main: "ATK%", subs: ["Enlightenment +10", "Accuracy +14", "Defense +32"] },
    { img: "2911", set: "Puppeteer", slot: "Armor", main: "ATK%", subs: ["Defense +30", "HP +896", "Enlightenment +11"] },
    { img: "2912", set: "Puppeteer", slot: "Gloves", main: "ATK%", subs: ["HP +694", "Enlightenment +15", "Crit Damage +7.8%"] },
    { img: "2914", set: "Power of Tides", slot: "Gloves", main: "ATK%", subs: ["DEF% +5.9%", "Crit Damage +8.5%", "Accuracy +11"] },
    { img: "2915", set: "Power of Tides", slot: "Gloves", main: "ATK%", subs: ["Resistance +15", "Accuracy +12", "DEF% +5.3%"] },
    { img: "2916", set: "Power of Tides", slot: "Gloves", main: "ATK%", subs: ["DEF% +5.7%", "Defense +32", "HP% +6.4%"] },

    // === MAIN STAT: HP% ===
    { img: "2925", set: "Platinum Knight", slot: "Armor", main: "HP%", subs: ["Defense +39", "Crit Rate +3.8%", "HP +862"] },
    { img: "2927", set: "Rhapsodist", slot: "Armor", main: "HP%", subs: ["Crit Damage +8.3%", "ATK% +6.8%", "Attack +34"] },
    { img: "2928", set: "Rhapsodist", slot: "Armor", main: "HP%", subs: ["ATK% +6.8%", "Attack +29", "Enlightenment +11"] },
    { img: "2929", set: "Rhapsodist", slot: "Armor", main: "HP%", subs: ["DEF% +5.6%", "ATK% +6.4%", "Enlightenment +11"] },
    { img: "2930", set: "Rhapsodist", slot: "Gloves", main: "HP%", subs: ["Enlightenment +12", "DEF% +6.6%", "Crit Damage +7.7%"] },
    { img: "2931", set: "Rhapsodist", slot: "Gloves", main: "HP%", subs: ["Crit Damage +7.7%", "Resistance +10", "DEF% +5.3%"] },
    { img: "2933", set: "Gambler", slot: "Armor", main: "HP%", subs: ["ATK% +5.5%", "Accuracy +15", "Enlightenment +13"] },
    { img: "2934", set: "Gambler", slot: "Gloves", main: "HP%", subs: ["Enlightenment +11", "DEF% +6.5%", "Crit Damage +7.5%"] },
    { img: "2936", set: "Cyril", slot: "Gloves", main: "HP%", subs: ["ATK% +7.0%", "Attack +28", "HP +652"] },
    { img: "2938", set: "Imperial Exec.", slot: "Armor", main: "HP%", subs: ["Defense +39", "ATK% +5.5%", "Resistance +13"] },
    { img: "2939", set: "Revenge Fallen", slot: "Armor", main: "HP%", subs: ["ATK% +5.1%", "Resistance +11", "Defense +31"] },
    { img: "2940", set: "Revenge Fallen", slot: "Armor", main: "HP%", subs: ["Attack +29", "Crit Damage +7.8%", "Defense +36"] },
    { img: "2943", set: "Tundra", slot: "Armor", main: "HP%", subs: ["DEF% +6.2%", "Defense +36", "Enlightenment +11"] },
    { img: "2944", set: "Tundra", slot: "Gloves", main: "HP%", subs: ["Resistance +12", "Crit Damage +7.6%", "Crit Rate +3.3%"] },
    { img: "2946", set: "Radiance Blue Oak", slot: "Gloves", main: "HP%", subs: ["Crit Rate +5.0%", "Enlightenment +14", "Attack +38"] },
    { img: "2948", set: "Ancestral Prot.", slot: "Armor", main: "HP%", subs: ["Defense +36", "ATK% +6.8%", "Attack +37"] },
    { img: "2949", set: "Brotherhood", slot: "Gloves", main: "HP%", subs: ["Crit Damage +7.3%", "HP +773", "DEF% +5.1%"] },
    { img: "2950", set: "Holy Hunter", slot: "Armor", main: "HP%", subs: ["ATK% +6.8%", "Crit Rate +3.5%", "Accuracy +11"] },
    { img: "2951", set: "Holy Hunter", slot: "Gloves", main: "HP%", subs: ["DEF% +5.7%", "Resistance +15", "Crit Rate +4.4%"] },

    // === MAIN STAT: DEF% ===
    { img: "2962", set: "Platinum Knight", slot: "Armor", main: "DEF%", subs: ["ATK% +6.4%", "HP +874", "Defense +31"] },
    { img: "2967", set: "Cyril", slot: "Armor", main: "DEF%", subs: ["HP% +6.2%", "Crit Damage +7.6%", "HP +694"] },
    { img: "2968", set: "Cyril", slot: "Gloves", main: "DEF%", subs: ["Crit Rate +4.1%", "Crit Damage +7.2%", "ATK% +5.3%"] },
    { img: "2969", set: "Cyril", slot: "Gloves", main: "DEF%", subs: ["Crit Rate +3.9%", "Attack +36", "Crit Damage +8.9%"] },
    { img: "2970", set: "Imperial Exec.", slot: "Armor", main: "DEF%", subs: ["Accuracy +14", "Resistance +13", "Attack +40"] },
    { img: "2971", set: "Imperial Exec.", slot: "Gloves", main: "DEF%", subs: ["Accuracy +11", "Defense +32", "ATK% +6.2%"] },
    { img: "2972", set: "Imperial Exec.", slot: "Gloves", main: "DEF%", subs: ["Enlightenment +15", "ATK% +5.4%", "HP +728"] },
    { img: "2973", set: "Imperial Exec.", slot: "Gloves", main: "DEF%", subs: ["ATK% +6.1%", "Crit Damage +7.6%", "Attack +34"] },
    { img: "2974", set: "Revenge Fallen", slot: "Armor", main: "DEF%", subs: ["ATK% +6.0%", "Resistance +14", "HP +706"] },
    { img: "2975", set: "Revenge Fallen", slot: "Armor", main: "DEF%", subs: ["Enlightenment +10", "HP +832", "Crit Damage +8.8%"] },
    { img: "2978", set: "Radiance Blue Oak", slot: "Armor", main: "DEF%", subs: ["Accuracy +12", "Enlightenment +15", "Attack +37"] },
    { img: "2979", set: "Radiance Blue Oak", slot: "Armor", main: "DEF%", subs: ["Accuracy +13", "Resistance +9", "Attack +40"] },
    { img: "2980", set: "Radiance Blue Oak", slot: "Gloves", main: "DEF%", subs: ["Crit Damage +8.8%", "Defense +36", "Accuracy +13"] },
    { img: "2983", set: "Ancestral Prot.", slot: "Armor", main: "DEF%", subs: ["Resistance +14", "ATK% +6.1%", "Attack +36"] },
    { img: "2984", set: "Ancestral Prot.", slot: "Armor", main: "DEF%", subs: ["Resistance +11", "ATK% +6.7%", "Accuracy +10"] },
    { img: "2985", set: "Brotherhood", slot: "Armor", main: "DEF%", subs: ["Attack +34", "Crit Damage +7.8%", "HP +779"] },
    { img: "2987", set: "Holy Hunter", slot: "Gloves", main: "DEF%", subs: ["Attack +30", "ATK% +6.8%", "Defense +34"] },
    { img: "2988", set: "Power of Tides", slot: "Gloves", main: "DEF%", subs: ["HP +653", "Crit Damage +8.8%", "ATK% +5.2%"] },
    { img: "2989", set: "Power of Tides", slot: "Gloves", main: "DEF%", subs: ["ATK% +6.6%", "HP% +6.5%", "Crit Damage +7.0%"] },
    { img: "2990", set: "Power of Tides", slot: "Armor", main: "DEF%", subs: ["Enlightenment +13", "Attack +35", "Defense +35"] },
    { img: "2991", set: "Puppeteer", slot: "Armor", main: "DEF%", subs: ["Attack +37", "ATK% +6.7%", "Crit Rate +3.7%"] },
    { img: "2992", set: "Puppeteer", slot: "Armor", main: "DEF%", subs: ["Crit Damage +8.5%", "HP% +5.6%", "ATK% +6.4%"] },

    // === MAIN STAT: Accuracy ===
    { img: "2998", set: "Rhapsodist", slot: "Armor", main: "Accuracy", subs: ["Crit Rate +4.8%", "HP +663", "Crit Damage +8.7%"] },
    { img: "2999", set: "Imperial Exec.", slot: "Armor", main: "Accuracy", subs: ["Attack +33", "Resistance +14", "HP +661"] },
    { img: "3001", set: "Revenge Fallen", slot: "Armor", main: "Accuracy", subs: ["Crit Damage +8.6%", "Resistance +11", "Attack +33"] },
    { img: "3003", set: "Tundra", slot: "Armor", main: "Accuracy", subs: ["Defense +33", "Enlightenment +15", "ATK% +5.2%"] },
    { img: "3004", set: "Ancestral Prot.", slot: "Armor", main: "Accuracy", subs: ["HP% +5.2%", "ATK% +6.5%", "Enlightenment +15"] },
    { img: "3006", set: "Ancestral Prot.", slot: "Armor", main: "Accuracy", subs: ["ATK% +5.1%", "Defense +33", "HP% +6.7%"] },
    { img: "3007", set: "Ancestral Prot.", slot: "Armor", main: "Accuracy", subs: ["HP +718", "Enlightenment +11", "Crit Damage +7.6%"] },
    { img: "3008", set: "Ancestral Prot.", slot: "Armor", main: "Accuracy", subs: ["Enlightenment +11", "DEF% +5.8%", "Resistance +10"] },
    { img: "3009", set: "Brotherhood", slot: "Armor", main: "Accuracy", subs: ["Crit Rate +4.1%", "Crit Damage +8.7%", "Resistance +9"] },
    { img: "3010", set: "Brotherhood", slot: "Armor", main: "Accuracy", subs: ["Resistance +10", "Defense +36", "HP% +6.4%"] },
    { img: "3011", set: "Brotherhood", slot: "Armor", main: "Accuracy", subs: ["DEF% +5.3%", "Enlightenment +11", "HP% +5.9%"] },
    { img: "3012", set: "Brotherhood", slot: "Armor", main: "Accuracy", subs: ["Defense +29", "HP% +5.7%", "Crit Damage +7.4%"] },
    { img: "3013", set: "Ancestral Prot.", slot: "Armor", main: "Accuracy", subs: ["Crit Damage +7.7%", "Enlightenment +11", "HP% +6.6%"] },
    { img: "3016", set: "Puppeteer", slot: "Armor", main: "Accuracy", subs: ["Attack +39", "HP% +6.7%", "Resistance +14"] },

    // === MAIN STAT: Resistance ===
    { img: "3019", set: "Platinum Knight", slot: "Armor", main: "Resistance", subs: ["Enlightenment +14", "HP% +6.0%", "Defense +30"] },
    { img: "3020", set: "Platinum Knight", slot: "Armor", main: "Resistance", subs: ["HP +875", "HP% +5.1%", "Defense +36"] },
    { img: "3023", set: "Imperial Exec.", slot: "Armor", main: "Resistance", subs: ["HP +796", "Attack +28", "HP% +6.0%"] },
    { img: "3024", set: "Revenge Fallen", slot: "Armor", main: "Resistance", subs: ["Accuracy +12", "Attack +30", "Crit Damage +8.2%"] },
    { img: "3025", set: "Tundra", slot: "Armor", main: "Resistance", subs: ["Crit Rate +4.8%", "Defense +28", "HP% +6.9%"] },
    { img: "3026", set: "Tundra", slot: "Armor", main: "Resistance", subs: ["HP +713", "DEF% +5.3%", "Crit Rate +3.8%"] },
    { img: "3027", set: "Radiance Blue Oak", slot: "Armor", main: "Resistance", subs: ["Crit Rate +3.5%", "DEF% +5.6%", "HP% +6.0%"] },
    { img: "3028", set: "Radiance Blue Oak", slot: "Armor", main: "Resistance", subs: ["Enlightenment +12", "Attack +35", "Crit Rate +4.7%"] },
    { img: "3029", set: "Holy Hunter", slot: "Armor", main: "Resistance", subs: ["Accuracy +14", "HP% +5.9%", "ATK% +9.2%"] },
    { img: "3030", set: "Puppeteer", slot: "Armor", main: "Resistance", subs: ["Attack +31", "Accuracy +12", "ATK% +6.0%"] },

    // === MAIN STAT: Enlightenment ===
    { img: "3036", set: "Platinum Knight", slot: "Armor", main: "Enlightenment", subs: ["DEF% +6.8%", "ATK% +6.4%", "Accuracy +15"] },
    { img: "3038", set: "Rhapsodist", slot: "Armor", main: "Enlightenment", subs: ["Crit Rate +3.4%", "HP +891", "Defense +31"] },
    { img: "3039", set: "Gambler", slot: "Armor", main: "Enlightenment", subs: ["ATK% +5.5%", "Crit Damage +8.0%", "HP +812"] },
    { img: "3040", set: "Gambler", slot: "Armor", main: "Enlightenment", subs: ["Defense +35", "Resistance +15", "ATK% +6.9%"] },
    { img: "3042", set: "Imperial Exec.", slot: "Armor", main: "Enlightenment", subs: ["ATK% +6.6%", "Attack +36", "HP% +6.3%"] },
    { img: "3045", set: "Tundra", slot: "Armor", main: "Enlightenment", subs: ["HP +723", "Accuracy +14", "Resistance +9"] },
    { img: "3046", set: "Ancestral Prot.", slot: "Armor", main: "Enlightenment", subs: ["Crit Rate +4.0%", "DEF% +5.7%", "ATK% +5.4%"] },
    { img: "3047", set: "Ancestral Prot.", slot: "Armor", main: "Enlightenment", subs: ["Accuracy +11", "Crit Damage +8.4%", "HP +850"] },
    { img: "3048", set: "Ancestral Prot.", slot: "Armor", main: "Enlightenment", subs: ["Accuracy +10", "DEF% +5.3%", "Attack +37"] },
    { img: "3050", set: "Holy Hunter", slot: "Armor", main: "Enlightenment", subs: ["ATK% +6.0%", "Crit Rate +4.1%", "Defense +34"] },
    { img: "3053", set: "Power of Tides", slot: "Armor", main: "Enlightenment", subs: ["Defense +38", "Attack +31", "Crit Damage +8.6%"] },
    { img: "3054", set: "Power of Tides", slot: "Armor", main: "Enlightenment", subs: ["ATK% +5.6%", "HP% +5.1%", "Crit Rate +4.4%"] },

    // === MAIN STAT: Crit Rate ===
    { img: "3058", set: "Platinum Knight", slot: "Gloves", main: "Crit Rate", subs: ["Defense +32", "HP% +6.6%", "Resistance +15"] },
    { img: "3061", set: "Rhapsodist", slot: "Gloves", main: "Crit Damage", subs: ["ATK% +6.3%", "Accuracy +13", "HP% +6.2%"] },
    { img: "3062", set: "Rhapsodist", slot: "Gloves", main: "Crit Rate", subs: ["Accuracy +12", "HP +865", "Attack +37"] },
    { img: "3063", set: "Rhapsodist", slot: "Gloves", main: "Crit Damage", subs: ["Enlightenment +11", "Resistance +12", "Crit Rate +3.5%"] },
    { img: "3064", set: "Rhapsodist", slot: "Gloves", main: "Crit Rate", subs: ["Enlightenment +12", "DEF% +6.5%", "ATK% +6.5%"] },
    { img: "3065", set: "Rhapsodist", slot: "Gloves", main: "Crit Rate", subs: ["Defense +34", "Accuracy +10", "HP% +6.7%"] },
    { img: "3066", set: "Rhapsodist", slot: "Gloves", main: "Crit Damage", subs: ["HP +727", "ATK% +5.3%", "Enlightenment +12"] },
    { img: "3067", set: "Gambler", slot: "Gloves", main: "Crit Damage", subs: ["Crit Rate +3.2%", "Attack +40", "ATK% +5.7%"] },
    { img: "3068", set: "Gambler", slot: "Gloves", main: "Crit Rate", subs: ["Crit Damage +7.1%", "Defense +34", "DEF% +6.2%"] },
    { img: "3071", set: "Cyril", slot: "Gloves", main: "Crit Rate", subs: ["HP% +5.1%", "HP +888", "DEF% +5.8%"] },
    { img: "3072", set: "Cyril", slot: "Gloves", main: "Crit Damage", subs: ["HP +879", "Defense +38", "Resistance +13"] },
    { img: "3073", set: "Cyril", slot: "Gloves", main: "Crit Rate", subs: ["Defense +37", "HP% +5.2%", "Enlightenment +15"] },
    { img: "3076", set: "Brotherhood", slot: "Gloves", main: "Crit Rate", subs: ["Enlightenment +14", "HP% +6.2%", "Accuracy +13"] },
    { img: "3077", set: "Ancestral Prot.", slot: "Gloves", main: "Crit Rate", subs: ["HP% +5.9%", "Attack +28", "HP +701"] },
    { img: "3078", set: "Radiance Blue Oak", slot: "Gloves", main: "Crit Rate", subs: ["Crit Damage +8.9%", "HP +774", "ATK% +5.8%"] },
    { img: "3080", set: "Holy Hunter", slot: "Gloves", main: "Crit Rate", subs: ["DEF% +6.7%", "Enlightenment +13", "Attack +33"] },
    { img: "3081", set: "Puppeteer", slot: "Gloves", main: "Crit Damage", subs: ["HP +822", "Attack +36", "Enlightenment +11"] },

    // === MAIN STAT: Crit Damage (separadas) ===
    { img: "3059", set: "Platinum Knight", slot: "Gloves", main: "Crit Damage", subs: ["DEF% +5.5%", "Attack +35", "Accuracy +12"] },
    { img: "3060", set: "Platinum Knight", slot: "Gloves", main: "Crit Damage", subs: ["Enlightenment +12", "Attack +36", "HP +868"] },
  ],

  // ============================================================
  // GEAR NAO FOTOGRAFADO — ~543 pecas Legendary com flat main stats
  // (flat ATK/HP/DEF como main stat) + Weapons + Helmets Legendary
  // Decisao: manter as +20 com bons subs, vender o resto.
  // PENDENTE: fotografar Legendary Weapons e Helmets melhores
  // ============================================================

  // ============================================================
  // UPGRADE PRIORITY — Analise das ~113 pecas base (09/Mar/2026)
  // Cruzamento dos 3 subs visiveis com os 14 perfis de stat
  // Tier S = upgrade imediato a lv4 (e potencialmente +20)
  // Tier A = upgrade lv4 para ver 4o sub, depois decidir
  // Tier B = vender (subs nao alinham com nenhum perfil util)
  // Custo lv4 = 5.250 gold/peca (1% do custo total lv0→lv20)
  // ============================================================
  upgrade_priority: {
    date_analyzed: "2026-03-09",

    // ---- TIER S: Upgrade imediato a lv4 ----
    tier_s: [
      // DPS-Crit (4 planos — maior demanda: Nastjenka, Sutha, DA, Ladehlia, Caspar, Huberg)
      { img: "3078", profile: "DPS-Crit", slot: "Gloves", main: "Crit Rate",
        why: "CritD 8.9% + ATK% 5.8% = 2/3 subs perfeitos. CritR main + CritD + ATK% = sonho DPS" },
      { img: "3067", profile: "DPS-Crit", slot: "Gloves", main: "Crit Damage",
        why: "CritR 3.2% + ATK% 5.7% = CritD main + CritR + ATK% = complemento perfeito" },
      { img: "3068", profile: "DPS-Crit", slot: "Gloves", main: "Crit Rate",
        why: "CritD 7.1% = CritR + CritD par ideal" },

      // DPS-ACC (4 planos — Auster, Lossenia, Hochadir, Voresh, Ghulende, Sigrid, Donella)
      { img: "2998", profile: "DPS-ACC", slot: "Armor", main: "Accuracy",
        why: "CritR 4.8% + CritD 8.7% = ACC main + ambos Crit subs = TOP DPS que precisa acertar" },
      { img: "3009", profile: "DPS-ACC", slot: "Armor", main: "Accuracy",
        why: "CritR 4.1% + CritD 8.7% = mesma combo CritR+CritD com ACC main" },
      { img: "2898", profile: "DPS-ACC", slot: "Gloves", main: "ATK%",
        why: "CritR 4.8% + ACC 10 = ATK% main + CritR + ACC = exatamente o perfil" },
      { img: "2914", profile: "DPS-ACC", slot: "Gloves", main: "ATK%",
        why: "CritD 8.5% + ACC 11 = ATK% + CritD + ACC = variante focada em dano" },

      // ATK+Enlight (3 planos — Flora, Schaltar, Lothair, Vicana, Jathalea — Crit INUTIL)
      { img: "3042", profile: "ATK+Enlight", slot: "Armor", main: "Enlightenment",
        why: "ATK% 6.6% + HP% 6.3% = ZERO sub desperdicado. ATK% alto + HP% surv" },
      { img: "2901", profile: "ATK+Enlight", slot: "Armor", main: "ATK%",
        why: "Enlight 13 + DEF% 5.4% = ATK% main + Enlight sub = perfil exato" },
      { img: "2912", profile: "ATK+Enlight", slot: "Gloves", main: "ATK%",
        why: "Enlight 15 = sub alto. CritD desperdicado mas 1/3" },
    ],

    // ---- TIER A: Upgrade lv4 para ver 4o sub ----
    tier_a: [
      // DPS-Crit (mais pecas)
      { img: "3064", profile: "DPS-Crit", slot: "Gloves", main: "Crit Rate",
        why: "ATK% 6.5% bom. DEF% 6.5% filler. Enlight wasted" },
      { img: "3061", profile: "DPS-Crit", slot: "Gloves", main: "Crit Damage",
        why: "ATK% 6.3% + ACC 13 = ATK% ok, ACC bonus" },
      { img: "2903", profile: "DPS-Crit", slot: "Armor", main: "ATK%",
        why: "CritD 8.7% bom sub DPS" },

      // DPS-ACC (mais)
      { img: "3001", profile: "DPS-ACC", slot: "Armor", main: "Accuracy",
        why: "CritD 8.6% + ATK flat 33 = CritD bom" },
      { img: "2910", profile: "DPS-ACC / ATK+Enlight+ACC", slot: "Gloves", main: "ATK%",
        why: "ACC 14 + Enlight 10 = cruza com ATK+Enlight+ACC" },

      // ATK+Enlight+ACC (1 plano — Durango/Twitch)
      { img: "3004", profile: "ATK+Enlight+ACC", slot: "Armor", main: "Accuracy",
        why: "ATK% 6.5% + Enlight 15 = os 3 stats do perfil! PERFEITO" },
      { img: "3036", profile: "ATK+Enlight+ACC", slot: "Armor", main: "Enlightenment",
        why: "ATK% 6.4% + ACC 15 = os 3 stats tambem" },
      { img: "2906", profile: "ATK+Enlight+ACC", slot: "Gloves", main: "ATK%",
        why: "Enlight 13 + ACC 15 = ambos subs no perfil" },

      // HP+ACC (2 planos — Eurion/Lucien)
      { img: "2933", profile: "HP+ACC", slot: "Armor", main: "HP%",
        why: "ACC 15 + Enlight 13 = ACC sub + HP% main = perfil" },
      { img: "2950", profile: "HP+ACC", slot: "Armor", main: "HP%",
        why: "ACC 11 + ATK% 6.8% = ACC sub presente" },
      { img: "3008", profile: "HP+ACC", slot: "Armor", main: "Accuracy",
        why: "DEF% 5.8% + Enlight + RES = ACC main, subs tanky" },

      // ATK+Enlight (mais — 3 planos)
      { img: "3054", profile: "ATK+Enlight", slot: "Armor", main: "Enlightenment",
        why: "ATK% 5.6% + HP% 5.1% = bom, CritR wasted" },
      { img: "2900", profile: "ATK+Enlight", slot: "Armor", main: "ATK%",
        why: "Enlight 11 sub. DEF+RES filler" },
      { img: "2928", profile: "ATK+Enlight", slot: "Armor", main: "HP%",
        why: "ATK% 6.8% + Enlight 11 = ambos subs. Main HP% nao ideal mas subs perfeitos" },

      // Healer puro (2 planos — Torrin/Catherine)
      { img: "3046", profile: "Healer / ATK+Enlight", slot: "Armor", main: "Enlightenment",
        why: "CritR 4.0% + DEF% 5.7% + ATK% 5.4% = ATK% sub ok" },

      // HP+DEF+Enlight (1 plano — Acilia/Alphanarsy)
      { img: "2929", profile: "HP+DEF+Enlight", slot: "Armor", main: "HP%",
        why: "DEF% 5.6% + Enlight 11 = os 3 stats do perfil nos subs" },
      { img: "2930", profile: "HP+DEF+Enlight", slot: "Gloves", main: "HP%",
        why: "Enlight 12 + DEF% 6.6% = mesma combo" },

      // HP+Enlight (1 plano — Felosia)
      { img: "2946", profile: "HP+Enlight", slot: "Gloves", main: "HP%",
        why: "Enlight 14 sub alto" },
      { img: "2934", profile: "HP+Enlight", slot: "Gloves", main: "HP%",
        why: "Enlight 11 + DEF% 6.5% = Enlight + tanky" },

      // Tank-DEF/Debuffer (1 plano — Brody)
      { img: "2970", profile: "DEF+ACC", slot: "Armor", main: "DEF%",
        why: "ACC 14 + RES 13 = DEF% + ACC = perfil exato" },
      { img: "2984", profile: "DEF+ACC", slot: "Armor", main: "DEF%",
        why: "ATK% 6.7% + ACC 10 = ACC sub presente" },

      // Tank-HP puro (1 plano — Meggan)
      { img: "2951", profile: "HP puro", slot: "Gloves", main: "HP%",
        why: "DEF% 5.7% + RES 15 = subs defensivos puros" },
      { img: "2943", profile: "HP puro", slot: "Armor", main: "HP%",
        why: "DEF% 6.2% + DEF 36 = pure tank" },
    ],

    // Resumo
    totals: {
      tier_s_count: 10,
      tier_s_cost: "52.500 gold (10 x 5.250)",
      tier_a_count: 22,
      tier_a_cost: "115.500 gold (22 x 5.250)",
      tier_b_count: "~81 pecas restantes",
      tier_b_action: "VENDER para gold",
      total_upgrade_cost: "168.000 gold (32 pecas)",
      note: "168k gold = menos que 1/3 do custo de UMA peca lv0→lv20 (528.150)"
    },

    // Proximos passos
    next_steps: [
      "1. Upar as 10 S-tier a lv4 → ver 4o sub → decidir quais ir a +20",
      "2. Upar as 22 A-tier a lv4 → triagem pelo 4o sub",
      "3. Fotografar Legendary Weapons e Helmets (maior gap: 7 Mythic cada para 23 planos)",
      "4. Vender as ~81 pecas B-tier → gold para upgrades",
      "5. Montar 23 gear plans com as melhores pecas de cada perfil"
    ]
  },

  // ============================================================
  // LEGENDARY WEAPONS — Catalogado 10/Mar/2026
  // Fonte: 58 screenshots em logs/ (IMG_3088-3146, falta 3095)
  // Main stat: SEMPRE ATK flat (335 a +20, 235 a +16, 155 a +12)
  // Valor das armas vem 100% dos SUBSTATS (nao do main stat)
  // Nota: Upgrade indicators (①②③④) difíceis de ler — valores aproximados
  // ============================================================
  legendary_weapons: {

    // ============================================================
    // TIER S — Melhores armas, prioridade absoluta (4 peças)
    // ============================================================
    tier_s: [
      { img: "3100", set: "Power of Tides", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP", value: 861, upgrades: 0 },
          { stat: "Enlightenment", value: 40, upgrades: 2 },
          { stat: "HP%", value: 5.2, upgrades: 0 },
          { stat: "ATK%", value: 17.9, upgrades: 2 }
        ], profile: "atk-enlight", note: "MELHOR arma Derivative. ATK% 17.9 + Enlight 40 = Flora/Lothair BiS" },

      { img: "3121", set: "Ancestral Protection", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Enlightenment", value: 22, upgrades: 1 },
          { stat: "ATK%", value: 18.2, upgrades: 2 },
          { stat: "Accuracy", value: 13, upgrades: 0 },
          { stat: "HP%", value: 11.7, upgrades: 1 }
        ], profile: "atk-enlight-acc", note: "4/4 UTEIS! ATK%+Enlight+ACC+HP%. Durango/Twitch ideal" },

      { img: "3127", set: "Tundra Tenacity", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 17.4 },
          { stat: "ATK%", value: 12.0 },
          { stat: "Crit Rate", value: 7.5 },
          { stat: "Accuracy", value: 12 }
        ], profile: "universal", note: "4/4 UTEIS! Serve qualquer perfil DPS ou hybrid" },

      { img: "3129", set: "Imperial Executioner", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 5.2, upgrades: 0 },
          { stat: "Accuracy", value: 12, upgrades: 0 },
          { stat: "Enlightenment", value: 38, upgrades: 3 },
          { stat: "Crit Damage", value: 23.4, upgrades: 1 }
        ], profile: "atk-enlight", note: "Enlight 38 massivo. Todos 4 subs uteis" }
    ],

    // ============================================================
    // TIER A — Armas fortes (6 peças)
    // ============================================================
    tier_a: [
      { img: "3108", set: "Puppeteer's Inspiration", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Rate", value: 7.9, upgrades: 1 },
          { stat: "HP%", value: 5.4, upgrades: 0 },
          { stat: "Accuracy", value: 24, upgrades: 1 },
          { stat: "ATK%", value: 18.2, upgrades: 2 }
        ], profile: "atk-acc", note: "ATK% 18.2 + ACC 24 + CritR. Melhor para DPS-ACC" },

      { img: "3118", set: "Brotherhood Spirit", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Accuracy", value: 21, upgrades: 1 },
          { stat: "Crit Rate", value: 13.1, upgrades: 3 },
          { stat: "Crit Damage", value: 7.8, upgrades: 0 },
          { stat: "Enlightenment", value: 25, upgrades: 0 }
        ], profile: "dps-crit", note: "CritR 13.1% (3 upgrades!) + CritD max base 7.8%" },

      { img: "3120", set: "Ancestral Protection", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 6.6, upgrades: 0 },
          { stat: "Enlightenment", value: 25, upgrades: 1 },
          { stat: "Crit Rate", value: 12.0, upgrades: 2 },
          { stat: "Crit Damage", value: 15.4, upgrades: 1 }
        ], profile: "dps-crit", note: "Dual crit (CritR 12 + CritD 15.4) + Enlight 25" },

      { img: "3134", set: "Cyril's Whisper", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Defense", value: 34, upgrades: 0 },
          { stat: "DEF%", value: 5.8, upgrades: 0 },
          { stat: "Crit Damage", value: 22.7, upgrades: 2 },
          { stat: "Crit Rate", value: 10.7, upgrades: 2 }
        ], profile: "dps-crit", note: "CritD 22.7 + CritR 10.7. Ambos com 2 upgrades" },

      { img: "3135", set: "Cyril's Whisper", lv: 20, rarity: "Epic",
        subs: [
          { stat: "ATK%", value: 11.4, upgrades: 1 },
          { stat: "Enlightenment", value: 28, upgrades: 1 },
          { stat: "Crit Rate", value: 8.0, upgrades: 1 },
          { stat: "DEF%", value: 12.2, upgrades: 1 }
        ], profile: "hybrid", note: "ATK% + Enlight + CritR. Upgrades 1-1-1-1 (spread)" },

      { img: "3146", set: "Platinum Knight Quality", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Rate", value: 7.7, upgrades: 2 },
          { stat: "Accuracy", value: 13, upgrades: 0 },
          { stat: "Crit Damage", value: 16.2, upgrades: 2 },
          { stat: "HP%", value: 15.6, upgrades: 0 }
        ], profile: "dps-crit", note: "Dual crit com 2 upgrades cada + HP% 15.6 base alta" }
    ],

    // ============================================================
    // TIER B — Boas, backup ou niche (12 peças)
    // ============================================================
    tier_b: [
      { img: "3091", set: "Heart of the Gambler", lv: 12, rarity: "Epic",
        subs: [
          { stat: "ATK%", value: 12.9, upgrades: 1 },
          { stat: "Defense", value: 29, upgrades: 0 },
          { stat: "Accuracy", value: 12, upgrades: 0 },
          { stat: "Crit Rate", value: 7.0, upgrades: 3 }
        ], profile: "dps-crit", note: "ATK% 12.9 + CritR 7.0. Lv12 — nao totalmente upado" },

      { img: "3097", set: "Revenge of the Fallen", lv: 16, rarity: "Mythic",
        subs: [
          { stat: "HP", value: 777, upgrades: 0 },
          { stat: "HP%", value: 12.1, upgrades: 1 },
          { stat: "Accuracy", value: 26, upgrades: 1 },
          { stat: "ATK%", value: 11.8, upgrades: 2 }
        ], profile: "hp-atk-acc", note: "Melhor arma para Vinyara (HP+ATK+ACC)" },

      { img: "3096", set: "Tundra Tenacity", lv: 16, rarity: "Mythic",
        subs: [
          { stat: "Enlightenment", value: 37, upgrades: 2 },
          { stat: "HP", value: 747, upgrades: 0 },
          { stat: "Accuracy", value: 22, upgrades: 1 },
          { stat: "ATK%", value: 5.3, upgrades: 1 }
        ], profile: "atk-enlight", note: "Enlight 37 (Mythic). Derivative backup" },

      { img: "3119", set: "Brotherhood Spirit", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Rate", value: 7.9, upgrades: 1 },
          { stat: "Crit Damage", value: 16.8, upgrades: 1 },
          { stat: "Defense", value: 61, upgrades: 0 },
          { stat: "DEF%", value: 11.7, upgrades: 2 }
        ], profile: "dps-crit", note: "CritR + CritD mas DEF% comeu 2 upgrades" },

      { img: "3124", set: "Radiance of the Blue Oak", lv: 20, rarity: "Mythic",
        subs: [
          { stat: "Crit Rate", value: 9.9 },
          { stat: "DEF%", value: 5.2, upgrades: 0 },
          { stat: "Enlightenment", value: 28, upgrades: 1 },
          { stat: "Accuracy", value: 22 }
        ], profile: "utility", note: "CritR 9.9 + Enlight 28 + ACC 22. Mythic versatil" },

      { img: "3130", set: "Imperial Executioner", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Damage", value: 23.5, upgrades: 3 },
          { stat: "HP", value: 670, upgrades: 0 },
          { stat: "ATK%", value: 18.1, upgrades: 1 },
          { stat: "HP%", value: 6.8, upgrades: 0 }
        ], profile: "dps-crit", note: "CritD 23.5 + ATK% 18.1. HP flat desperdicado" },

      { img: "3132", set: "Imperial Executioner", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP", value: 1393, upgrades: 1 },
          { stat: "ATK%", value: 5.1, upgrades: 0 },
          { stat: "DEF%", value: 12.3 },
          { stat: "Crit Rate", value: 13.2 }
        ], profile: "dps-crit", note: "CritR 13.2 alto mas HP flat e DEF% atrapalham" },

      { img: "3133", set: "Cyril's Whisper", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Accuracy", value: 26 },
          { stat: "Defense", value: 68, upgrades: 1 },
          { stat: "Crit Rate", value: 12.0, upgrades: 2 },
          { stat: "Enlightenment", value: 12, upgrades: 0 }
        ], profile: "atk-acc", note: "CritR 12 + ACC 26. DEF flat desperdicado" },

      { img: "3137", set: "Heart of the Gambler", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Defense", value: 29, upgrades: 0 },
          { stat: "HP%", value: 5.6, upgrades: 0 },
          { stat: "Crit Damage", value: 31.4, upgrades: 3 },
          { stat: "Enlightenment", value: 27, upgrades: 1 }
        ], profile: "hybrid", note: "CritD 31.4% MASSIVO (3 upgrades). DEF flat desperdicado" },

      { img: "3138", set: "Heart of the Gambler", lv: 20, rarity: "Epic",
        subs: [
          { stat: "ATK%", value: 6.7, upgrades: 0 },
          { stat: "HP", value: 1625 },
          { stat: "Crit Rate", value: 11.3, upgrades: 2 },
          { stat: "Enlightenment", value: 29 }
        ], profile: "hybrid", note: "CritR 11.3 + ATK% + Enlight 29. HP flat desperdicado" },

      { img: "3139", set: "Heart of the Gambler", lv: 20, rarity: "Epic",
        subs: [
          { stat: "ATK%", value: 16.8, upgrades: 3 },
          { stat: "Crit Damage", value: 17.8, upgrades: 1 },
          { stat: "HP", value: 1751, upgrades: 0 },
          { stat: "Resistance", value: 10, upgrades: 0 }
        ], profile: "dps-crit", note: "ATK% 16.8 (3 upgrades) + CritD. 2 subs desperdicados" },

      { img: "3145", set: "Rhapsodist's Calling", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Accuracy", value: 36, upgrades: 2 },
          { stat: "Crit Rate", value: 7.4, upgrades: 1 },
          { stat: "Defense", value: 30, upgrades: 0 },
          { stat: "Crit Damage", value: 15.2, upgrades: 1 }
        ], profile: "atk-acc", note: "CritR + CritD + ACC 36. Boa para DPS/debuffer" }
    ],

    // ============================================================
    // TIER C — Niche, manter so se necessario (20 peças)
    // Destaques niche marcados
    // ============================================================
    tier_c: [
      { img: "3103", set: "Power of Tides", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Enlightenment", value: 15, upgrades: 0 },
          { stat: "HP%", value: 11.4, upgrades: 1 },
          { stat: "DEF%", value: 23.7, upgrades: 3 },
          { stat: "Accuracy", value: 11, upgrades: 0 }
        ], profile: "def", note: "NICHE: DEF% 23.7 massivo (3up). Garius/Brody" },

      { img: "3105", set: "Power of Tides", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Accuracy", value: 46, upgrades: 3 },
          { stat: "Crit Damage", value: 8.2, upgrades: 0 },
          { stat: "Resistance", value: 24, upgrades: 1 },
          { stat: "Enlightenment", value: 15, upgrades: 0 }
        ], profile: "acc", note: "NICHE: ACC 46 massivo (3up). Tamar BiS" },

      { img: "3113", set: "Holy Hunter", lv: 20, rarity: "Epic",
        subs: [
          { stat: "DEF%", value: 5.1, upgrades: 0 },
          { stat: "Defense", value: 36, upgrades: 0 },
          { stat: "Accuracy", value: 39, upgrades: 3 },
          { stat: "HP%", value: 10.5, upgrades: 1 }
        ], profile: "acc", note: "NICHE: ACC 39 (3up). Debuffers" },

      { img: "3140", set: "Rhapsodist's Calling", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 15.7, upgrades: 2 },
          { stat: "DEF%", value: 6.2, upgrades: 0 },
          { stat: "Accuracy", value: 33, upgrades: 2 },
          { stat: "Resistance", value: 13, upgrades: 0 }
        ], profile: "hp-acc", note: "NICHE: HP% 15.7 + ACC 33. Tank/support (Eurion)" },

      { img: "3131", set: "Imperial Executioner", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 12.6, upgrades: 1 },
          { stat: "Enlightenment", value: 27, upgrades: 1 },
          { stat: "DEF%", value: 12.9, upgrades: 1 },
          { stat: "Accuracy", value: 22, upgrades: 1 }
        ], profile: "hp-def-enlight", note: "= w04. Tank/healer. Upgrades 1-1-1-1" },

      { img: "3090", set: "Imperial Executioner", lv: 12, rarity: "Epic",
        subs: [
          { stat: "Resistance", value: 37, upgrades: 1 },
          { stat: "HP%", value: 6.8, upgrades: 0 },
          { stat: "Crit Damage", value: 8.2, upgrades: 1 },
          { stat: "ATK%", value: 6.8, upgrades: 2 }
        ], profile: "mixed", note: "ATK% + CritD fracos. Lv12" },

      { img: "3099", set: "Heart of the Gambler", lv: 16, rarity: "Epic",
        subs: [
          { stat: "Accuracy", value: 25, upgrades: 1 },
          { stat: "HP", value: 775, upgrades: 0 },
          { stat: "Resistance", value: 24, upgrades: 1 },
          { stat: "Crit Rate", value: 8.0, upgrades: 1 }
        ], profile: "mixed", note: "CritR 8 unico sub bom. Lv16" },

      { img: "3102", set: "Power of Tides", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Rate", value: 7.7, upgrades: 1 },
          { stat: "Enlightenment", value: 40, upgrades: 2 },
          { stat: "DEF%", value: 10.3, upgrades: 1 },
          { stat: "Defense", value: 31, upgrades: 0 }
        ], profile: "atk-enlight", note: "Enlight 40 mas CritR inutil pra Derivative" },

      { img: "3104", set: "Power of Tides", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Damage", value: 15.0, upgrades: 1 },
          { stat: "HP", value: 1591, upgrades: 2 },
          { stat: "HP%", value: 12.5, upgrades: 1 },
          { stat: "ATK%", value: 12.4, upgrades: 0 }
        ], profile: "mixed", note: "ATK% 12.4 base alta mas HP flat comeu 2 upgrades" },

      { img: "3107", set: "Puppeteer's Inspiration", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Rate", value: 8.2, upgrades: 1 },
          { stat: "Resistance", value: 22, upgrades: 1 },
          { stat: "HP%", value: 17.0, upgrades: 2 },
          { stat: "Accuracy", value: 22, upgrades: 0 }
        ], profile: "hp-acc", note: "HP% 17 + ACC 22. Tank/support backup" },

      { img: "3109", set: "Puppeteer's Inspiration", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Crit Rate", value: 8.2, upgrades: 1 },
          { stat: "Resistance", value: 22, upgrades: 0 },
          { stat: "HP%", value: 12.0, upgrades: 3 },
          { stat: "Accuracy", value: 22, upgrades: 0 }
        ], profile: "hp-acc", note: "HP% 12 (3 upgrades em HP%). Mediocre" },

      { img: "3110", set: "Puppeteer's Inspiration", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 6.2, upgrades: 0 },
          { stat: "Resistance", value: 31, upgrades: 2 },
          { stat: "Crit Damage", value: 24.7, upgrades: 2 },
          { stat: "ATK%", value: 5.2, upgrades: 0 }
        ], profile: "dps-crit", note: "CritD 24.7 decente mas RES comeu 2 upgrades" },

      { img: "3111", set: "Puppeteer's Inspiration", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Enlightenment", value: 10, upgrades: 0 },
          { stat: "Resistance", value: 25, upgrades: 1 },
          { stat: "Crit Damage", value: 24.8, upgrades: 2 },
          { stat: "DEF%", value: 12.5, upgrades: 1 }
        ], profile: "mixed", note: "CritD 24.8 mas subs defensivos" },

      { img: "3115", set: "Holy Hunter", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Enlightenment", value: 23, upgrades: 1 },
          { stat: "Crit Damage", value: 24.6, upgrades: 2 },
          { stat: "DEF%", value: 5.1, upgrades: 0 },
          { stat: "Resistance", value: 27, upgrades: 1 }
        ], profile: "atk-enlight", note: "CritD 24.6 + Enlight 23. Derivative OK" },

      { img: "3117", set: "Holy Hunter", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Resistance", value: 24, upgrades: 1 },
          { stat: "Enlightenment", value: 27, upgrades: 1 },
          { stat: "HP%", value: 17.7, upgrades: 2 },
          { stat: "Crit Damage", value: 8.1, upgrades: 0 }
        ], profile: "hp-enlight", note: "HP% 17.7 + Enlight 27. Felosia niche" },

      { img: "3123", set: "Radiance of the Blue Oak", lv: 20, rarity: "Mythic",
        subs: [
          { stat: "Enlightenment", value: 12, upgrades: 0 },
          { stat: "HP", value: 1543, upgrades: 1 },
          { stat: "DEF%", value: 19.0, upgrades: 3 },
          { stat: "Resistance", value: 24, upgrades: 0 }
        ], profile: "def", note: "NICHE: DEF% 19 (3up). Eurion/Garius Mythic" },

      { img: "3125", set: "Tundra Tenacity", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Resistance", value: 32, upgrades: 2 },
          { stat: "Defense", value: 37, upgrades: 0 },
          { stat: "Accuracy", value: 21, upgrades: 0 },
          { stat: "Enlightenment", value: 29, upgrades: 2 }
        ], profile: "enlight", note: "Enlight 29 + ACC 21. Support niche" },

      { img: "3128", set: "Revenge of the Fallen", lv: 20, rarity: "Epic",
        subs: [
          { stat: "HP%", value: 16.7 },
          { stat: "ATK%", value: 5.2, upgrades: 0 },
          { stat: "Resistance", value: 31 },
          { stat: "Enlightenment", value: 13, upgrades: 0 }
        ], profile: "mixed", note: "HP% 16.7 destaque. Resto mediocre" },

      { img: "3143", set: "Rhapsodist's Calling", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Resistance", value: 26, upgrades: 1 },
          { stat: "Accuracy", value: 25, upgrades: 1 },
          { stat: "Enlightenment", value: 26, upgrades: 1 },
          { stat: "ATK%", value: 10.8, upgrades: 1 }
        ], profile: "mixed", note: "ATK% + Enlight + ACC. Upgrades 1-1-1-1" },

      { img: "3144", set: "Rhapsodist's Calling", lv: 20, rarity: "Epic",
        subs: [
          { stat: "Resistance", value: 35, upgrades: 2 },
          { stat: "HP%", value: 13.4, upgrades: 1 },
          { stat: "Crit Rate", value: 4.7, upgrades: 0 },
          { stat: "Enlightenment", value: 24, upgrades: 1 }
        ], profile: "mixed", note: "RES comeu 2 upgrades. Distribuicao ruim" }
    ],

    // ============================================================
    // TIER D — Vender (16 peças)
    // Upgrades em HP flat, DEF flat, RES. Sem valor
    // ============================================================
    tier_d: [
      { img: "3088", set: "Tundra Tenacity", lv: 12, note: "3 upgrades em RES" },
      { img: "3089", set: "Revenge of the Fallen", lv: 12, note: "4 upgrades em HP flat" },
      { img: "3092", set: "Power of Tides", lv: 16, rarity: "Mythic", note: "Tank stats em weapon" },
      { img: "3093", set: "Puppeteer's Inspiration", lv: 16, rarity: "Mythic", note: "4 upgrades em DEF flat" },
      { img: "3094", set: "Holy Hunter", lv: 16, rarity: "Mythic", note: "Upgrades em HP flat e DEF%" },
      { img: "3098", set: "Heart of the Gambler", lv: 16, rarity: "Mythic", note: "CritR 3.2 base. 2up HP flat" },
      { img: "3101", set: "Power of Tides", lv: 20, note: "3 upgrades em RES" },
      { img: "3106", set: "Puppeteer's Inspiration", lv: 20, note: "DEF flat + RES upgrades" },
      { img: "3112", set: "Puppeteer's Inspiration", lv: 20, note: "4 upgrades em DEF flat" },
      { img: "3114", set: "Holy Hunter", lv: 20, note: "3 upgrades em HP flat" },
      { img: "3116", set: "Holy Hunter", lv: 20, note: "HP flat + CritD baixo" },
      { img: "3122", set: "Radiance of the Blue Oak", lv: 20, rarity: "Mythic", note: "2up HP flat + DEF flat" },
      { img: "3126", set: "Tundra Tenacity", lv: 20, note: "2 upgrades em HP flat" },
      { img: "3136", set: "Heart of the Gambler", lv: 20, note: "= w03. DEF flat + RES" },
      { img: "3141", set: "Rhapsodist's Calling", lv: 20, note: "ACC + RES upgrades. Zero offense" },
      { img: "3142", set: "Rhapsodist's Calling", lv: 20, note: "2 dead flats + spread 1-1-1-1" }
    ],

    // ============================================================
    // RESUMO
    // ============================================================
    totals: {
      total_weapons: 58,
      tier_s: 4,
      tier_a: 6,
      tier_b: 12,
      tier_c: 20,
      tier_d: 16,
      keep: "S+A+B = 22 armas (cobre 23 planos com niche C-tier)",
      sell: "D-tier = 16 armas → gold",
      note: "Mythic weapons com subs ruins (D-tier) tambem vendem — set bonus de weapon nao e critico"
    }
  },

  // ============================================================
  // LEGENDARY HELMETS — Catalogado 10/Mar/2026
  // Fonte: 60 screenshots em logs/ (IMG_3148-3207)
  // Main stat: SEMPRE HP flat (7710 Mythic +20, 5070 Epic +20)
  // Igual a Weapon (sempre ATK flat) — NAO existe helmet com HP%/DEF%/CritR% main
  // Valor dos helmets vem 100% dos SUBSTATS (mesmo que weapons)
  // Nivel (lv) lido diretamente do screenshot — NAO implicito
  // ============================================================
  legendary_helmets: {

    // ============================================================
    // TIER A — Melhores helmets (2 peças)
    // Main stat HP flat e FIXO — valor vem 100% dos subs
    // ============================================================
    tier_a: [
      { img: "3207", set: "Power of Tides", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 17.8, upgrades: 2 },
          { stat: "ACC", value: 12, upgrades: 0 },
          { stat: "CritD", value: 7.7, upgrades: 0 },
          { stat: "Enlight", value: 42, upgrades: 2 }
        ], profile: "atk-enlight", note: "MELHOR helmet do lote. ATK% 17.8② + Enlight 42② = Flora/Lothair BiS. Set Power of Tides (+30 Enlight) stacka. 4/4 useful subs." },

      { img: "3167", set: "Cyril's Whisper", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF", value: 31, upgrades: 0 },
          { stat: "ATK%", value: 20.0, upgrades: 3 },
          { stat: "Enlight", value: 21, upgrades: 0 },
          { stat: "HP%", value: 11.0, upgrades: 1 }
        ], profile: "atk-enlight", note: "ATK% 20.0 com 3 upgrades! Enlight 21 + HP% 11.0. Cyril set (+ATK% +Skill). 3/4 useful." }
    ],

    // ============================================================
    // TIER B — Boas (14 peças)
    // ============================================================
    tier_b: [
      { img: "3152", set: "Platinum Knight", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 12.2, upgrades: 1 },
          { stat: "Enlight", value: 39, upgrades: 3 },
          { stat: "CritD", value: 8.7, upgrades: 0 },
          { stat: "DEF", value: 72, upgrades: 0 }
        ], profile: "atk-enlight", note: "Enlight 39③ MASSIVO + ATK% 12.2. Flora/Lothair backup. CritD inutil pra Derivative." },

      { img: "3182", set: "Radiance of the Blue Oak", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 10.5, upgrades: 1 },
          { stat: "Enlight", value: 39, upgrades: 2 },
          { stat: "DEF%", value: 5.1, upgrades: 0 },
          { stat: "CritD", value: 15.8, upgrades: 1 }
        ], profile: "atk-enlight", note: "4/4 useful. Enlight 39② + ATK% 10.5. Set Radiance (DEF+20%)." },

      { img: "3161", set: "Heart of the Gambler", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "HP%", value: 11.7, upgrades: 1 },
          { stat: "ATK", value: 77, upgrades: 1 },
          { stat: "ATK%", value: 6.3, upgrades: 1 },
          { stat: "Enlight", value: 41, upgrades: 1 }
        ], profile: "atk-enlight", note: "Enlight 41 + ATK% + HP%. Upgrades 1-1-1-1 spread. Gambler set." },

      { img: "3159", set: "Rhapsodist's Calling", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritR", value: 7.9, upgrades: 1 },
          { stat: "CritD", value: 31.4, upgrades: 2 },
          { stat: "HP%", value: 6.5, upgrades: 1 },
          { stat: "DEF", value: 32, upgrades: 0 }
        ], profile: "dps-crit", note: "CritD 31.4② MASSIVO + CritR 7.9. Melhor crit helmet. 3/4 useful." },

      { img: "3156", set: "Rhapsodist's Calling", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK", value: 74, upgrades: 1 },
          { stat: "DEF%", value: 5.1, upgrades: 0 },
          { stat: "CritD", value: 15.4, upgrades: 1 },
          { stat: "CritR", value: 12.0, upgrades: 2 }
        ], profile: "dps-crit", note: "CritR 12.0② + CritD 15.4. Dual crit solid. ATK flat desperdicado." },

      { img: "3183", set: "Ancestral Protection", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritD", value: 24.8, upgrades: 2 },
          { stat: "Enlight", value: 34, upgrades: 2 },
          { stat: "ATK", value: 37, upgrades: 0 },
          { stat: "CritR", value: 3.6, upgrades: 0 }
        ], profile: "dps-crit", note: "CritD 24.8② + Enlight 34②. 3/4 useful. Set HP+20%." },

      { img: "3190", set: "Brotherhood Spirit", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 15.2, upgrades: 2 },
          { stat: "CritD", value: 17.0, upgrades: 2 },
          { stat: "DEF%", value: 12.1, upgrades: 0 },
          { stat: "ACC", value: 22, upgrades: 0 }
        ], profile: "dps-crit", note: "4/4 useful! ATK% 15.2② + CritD 17.0② + DEF% + ACC. Brotherhood set." },

      { img: "3185", set: "Ancestral Protection", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritR", value: 4.7, upgrades: 0 },
          { stat: "ATK%", value: 12.9, upgrades: 1 },
          { stat: "ACC", value: 35, upgrades: 2 },
          { stat: "HP%", value: 11.7, upgrades: 1 }
        ], profile: "atk-acc", note: "4/4 useful! ATK% 12.9 + ACC 35② + HP% 11.7. Melhor balanced helmet." },

      { img: "3199", set: "Puppeteer's Inspiration", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 18.9, upgrades: 2 },
          { stat: "CritR", value: 3.5, upgrades: 0 },
          { stat: "ACC", value: 36, upgrades: 2 },
          { stat: "CritD", value: 8.7, upgrades: 0 }
        ], profile: "atk-acc", note: "ATK% 18.9② + ACC 36②. 4/4 useful. Puppeteer set (+40 ACC)." },

      { img: "3153", set: "Platinum Knight", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritR", value: 8.9, upgrades: 2 },
          { stat: "DEF%", value: 6.9, upgrades: 0 },
          { stat: "ACC", value: 36, upgrades: 2 },
          { stat: "DEF", value: 69, upgrades: 0 }
        ], profile: "hp-acc", note: "CritR 8.9② + ACC 36②. Eurion/Lucien piece. DEF flat desperdicado." },

      { img: "3150", set: "Platinum Knight", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK", value: 68, upgrades: 1 },
          { stat: "Enlight", value: 12, upgrades: 0 },
          { stat: "DEF%", value: 18.6, upgrades: 2 },
          { stat: "ATK%", value: 11.3, upgrades: 1 }
        ], profile: "mixed", note: "DEF% 18.6② + ATK% 11.3 + Enlight. Tank/off-piece versatil." },

      { img: "3166", set: "Cyril's Whisper", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritR", value: 3.4, upgrades: 0 },
          { stat: "DEF%", value: 11.8, upgrades: 2 },
          { stat: "DEF", value: 66, upgrades: 1 },
          { stat: "HP%", value: 17.7, upgrades: 1 }
        ], profile: "hp", note: "HP% 17.7 + DEF% 11.8②. Tank piece puro. Eurion/Felosia." },

      { img: "3195", set: "Holy Hunter", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "Enlight", value: 23, upgrades: 0 },
          { stat: "HP%", value: 6.0, upgrades: 0 },
          { stat: "CritD", value: 7.0, upgrades: 0 },
          { stat: "DEF%", value: 23.4, upgrades: 4 }
        ], profile: "def", note: "DEF% 23.4④ MASSIVO (4 upgrades!). 4/4 useful. Holy Hunter set (+40 ACC). Eurion BiS." },

      { img: "3202", set: "Power of Tides", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "HP%", value: 12.0, upgrades: 1 },
          { stat: "Enlight", value: 10, upgrades: 0 },
          { stat: "ACC", value: 13, upgrades: 0 },
          { stat: "DEF%", value: 24.6, upgrades: 3 }
        ], profile: "def", note: "DEF% 24.6③ excelente. 4/4 useful. Set Tides (+30 Enlight). Acilia/Eurion." }
    ],

    // ============================================================
    // TIER C — Niche, manter so se necessario (31 peças)
    // Organizados por perfil
    // ============================================================
    tier_c: [
      // --- ATK-ENLIGHT niche ---
      { img: "3178", set: "Tundra Guardian", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF%", value: 6.4, upgrades: 0 },
          { stat: "ACC", value: 25, upgrades: 1 },
          { stat: "ATK%", value: 23.3, upgrades: 3 },
          { stat: "Enlight", value: 15, upgrades: 0 }
        ], profile: "atk-enlight", note: "ATK% 23.3③ massivo mas main ruim. Backup Derivative." },

      { img: "3165", set: "Heart of the Gambler", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "RES", value: 28, upgrades: 1 },
          { stat: "ATK%", value: 11.6, upgrades: 1 },
          { stat: "ACC", value: 13, upgrades: 0 },
          { stat: "Enlight", value: 25, upgrades: 1 }
        ], profile: "atk-enlight", note: "Epic lv16. ATK% + Enlight + ACC. RES desperdicado." },

      { img: "3163", set: "Heart of the Gambler", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "ATK%", value: 11.1, upgrades: 1 },
          { stat: "ATK", value: 99, upgrades: 2 },
          { stat: "Enlight", value: 14, upgrades: 0 },
          { stat: "RES", value: 13, upgrades: 0 }
        ], profile: "atk-enlight", note: "Epic lv16. ATK% unico sub bom. ATK flat comeu 2 ups." },

      // --- DPS-CRIT niche ---
      { img: "3172", set: "Imperial Executioner", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritR", value: 15.7, upgrades: 3 },
          { stat: "ATK%", value: 6.8, upgrades: 0 },
          { stat: "Enlight", value: 25, upgrades: 1 },
          { stat: "RES", value: 15, upgrades: 0 }
        ], profile: "dps-crit", note: "DOLOROSO: CritR 15.7③ seria S-tier em helmet com CritR main. HP flat mata. 3/4 useful." },

      { img: "3177", set: "Revenge of the Fallen", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "RES", value: 25, upgrades: 1 },
          { stat: "CritR", value: 13.7, upgrades: 2 },
          { stat: "CritD", value: 8.2, upgrades: 0 },
          { stat: "Enlight", value: 23, upgrades: 1 }
        ], profile: "dps-crit", note: "CritR 13.7② + CritD + Enlight. Seria S-tier com main boa." },

      { img: "3175", set: "Revenge of the Fallen", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritR", value: 7.8, upgrades: 1 },
          { stat: "HP%", value: 13.2, upgrades: 1 },
          { stat: "DEF", value: 63, upgrades: 0 },
          { stat: "ATK%", value: 12.2, upgrades: 2 }
        ], profile: "dps-crit", note: "3/4 useful (CritR + HP% + ATK%). Seria A-tier com main boa." },

      { img: "3164", set: "Heart of the Gambler", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "DEF%", value: 7.0, upgrades: 0 },
          { stat: "ATK%", value: 10.9, upgrades: 1 },
          { stat: "DEF", value: 60, upgrades: 1 },
          { stat: "CritD", value: 15.4, upgrades: 1 }
        ], profile: "dps-crit", note: "Epic lv16. ATK% + CritD + DEF%. DEF flat desperdicado." },

      { img: "3160", set: "Rhapsodist's Calling", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "CritR", value: 6.7, upgrades: 1 },
          { stat: "CritD", value: 7.4, upgrades: 0 },
          { stat: "ATK", value: 74, upgrades: 2 },
          { stat: "Enlight", value: 25, upgrades: 0 }
        ], profile: "dps-crit", note: "Epic lv16. CritR + CritD mas ATK flat comeu 2 ups." },

      { img: "3203", set: "Power of Tides", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF%", value: 6.4, upgrades: 0 },
          { stat: "DEF", value: 111, upgrades: 2 },
          { stat: "ATK%", value: 11.0, upgrades: 1 },
          { stat: "CritD", value: 16.2, upgrades: 1 }
        ], profile: "dps-crit", note: "ATK% + CritD ok mas DEF flat comeu 2 ups." },

      // --- ACC niche ---
      { img: "3149", set: "Platinum Knight", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ACC", value: 47, upgrades: 3 },
          { stat: "DEF%", value: 6.2, upgrades: 0 },
          { stat: "Enlight", value: 13, upgrades: 0 },
          { stat: "DEF", value: 57, upgrades: 1 }
        ], profile: "acc", note: "NICHE: ACC 47③ MASSIVO. Tamar/Eches piece." },

      { img: "3184", set: "Ancestral Protection", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ACC", value: 49, upgrades: 3 },
          { stat: "DEF", value: 33, upgrades: 0 },
          { stat: "ATK%", value: 11.4, upgrades: 1 },
          { stat: "RES", value: 16, upgrades: 0 }
        ], profile: "acc", note: "NICHE: ACC 49③ RECORDE! Tamar/Eches. Mas 2/4 useless." },

      { img: "3151", set: "Platinum Knight", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK", value: 68, upgrades: 0 },
          { stat: "RES", value: 25, upgrades: 1 },
          { stat: "ACC", value: 39, upgrades: 3 },
          { stat: "CritD", value: 7.3, upgrades: 0 }
        ], profile: "acc", note: "ACC 39③. Backup ACC piece." },

      { img: "3198", set: "Puppeteer's Inspiration", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "RES", value: 22, upgrades: 0 },
          { stat: "CritR", value: 11.3, upgrades: 2 },
          { stat: "ATK", value: 70, upgrades: 1 },
          { stat: "DEF", value: 35, upgrades: 1 }
        ], profile: "acc", note: "CritR 11.3② ok. Set Puppeteer (+40 ACC). Resto fraco." },

      // --- HP/Tank niche ---
      { img: "3148", set: "Platinum Knight", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF", value: 77, upgrades: 1 },
          { stat: "ACC", value: 21, upgrades: 1 },
          { stat: "ATK%", value: 12.4, upgrades: 1 },
          { stat: "HP%", value: 12.5, upgrades: 1 }
        ], profile: "hp-acc", note: "3/4 useful (ACC + ATK% + HP%). Upgrades spread 1-1-1-1." },

      { img: "3155", set: "Rhapsodist's Calling", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF", value: 39, upgrades: 0 },
          { stat: "CritD", value: 16.9, upgrades: 1 },
          { stat: "HP%", value: 18.6, upgrades: 2 },
          { stat: "ATK", value: 71, upgrades: 1 }
        ], profile: "hp", note: "HP% 18.6② = HP stacking pra Meggan/Enna. CritD nao combina." },

      { img: "3157", set: "Rhapsodist's Calling", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 6.7, upgrades: 0 },
          { stat: "DEF%", value: 18.2, upgrades: 2 },
          { stat: "RES", value: 24, upgrades: 1 },
          { stat: "ATK", value: 64, upgrades: 1 }
        ], profile: "def", note: "DEF% 18.2② unico destaque. Garius/Brody off-piece." },

      // --- DEF niche ---
      { img: "3194", set: "Holy Hunter", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF%", value: 18.0, upgrades: 3 },
          { stat: "DEF", value: 33, upgrades: 0 },
          { stat: "ATK", value: 71, upgrades: 1 },
          { stat: "CritD", value: 15.2, upgrades: 0 }
        ], profile: "def", note: "DEF% 18.0③. Niche tank. ATK flat desperdicado." },

      { img: "3181", set: "Tundra Guardian", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "DEF%", value: 17.7, upgrades: 2 },
          { stat: "CritR", value: 7.0, upgrades: 1 },
          { stat: "ACC", value: 27, upgrades: 1 },
          { stat: "DEF", value: 35, upgrades: 0 }
        ], profile: "def-acc", note: "DEF% 17.7② + CritR + ACC. 3/4 useful. Tank/debuffer." },

      // --- Mixed/mediocre ---
      { img: "3162", set: "Heart of the Gambler", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ACC", value: 24, upgrades: 0 },
          { stat: "RES", value: 37, upgrades: 2 },
          { stat: "DEF%", value: 6.1, upgrades: 1 },
          { stat: "ATK%", value: 12.0, upgrades: 1 }
        ], profile: "mixed", note: "ATK% + DEF% + ACC ok. RES comeu 2 ups." },

      { img: "3170", set: "Imperial Executioner", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "ATK%", value: 11.8, upgrades: 1 },
          { stat: "RES", value: 22, upgrades: 1 },
          { stat: "ACC", value: 14, upgrades: 0 },
          { stat: "DEF", value: 104, upgrades: 2 }
        ], profile: "atk-acc", note: "ATK% + ACC ok. DEF flat comeu 2 ups." },

      { img: "3171", set: "Imperial Executioner", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "HP%", value: 6.2, upgrades: 0 },
          { stat: "ATK%", value: 18.0, upgrades: 2 },
          { stat: "DEF%", value: 5.0, upgrades: 0 },
          { stat: "ATK", value: 102, upgrades: 2 }
        ], profile: "mixed", note: "ATK% 18.0② bom mas ATK flat comeu 2 ups." },

      { img: "3174", set: "Revenge of the Fallen", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "HP%", value: 6.9, upgrades: 0 },
          { stat: "RES", value: 34, upgrades: 2 },
          { stat: "CritR", value: 11.7, upgrades: 1 },
          { stat: "ATK%", value: 5.9, upgrades: 1 }
        ], profile: "mixed", note: "CritR 11.7 ok. RES comeu 2 ups." },

      { img: "3186", set: "Ancestral Protection", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "CritD", value: 15.8, upgrades: 1 },
          { stat: "ACC", value: 40, upgrades: 2 },
          { stat: "ATK", value: 53, upgrades: 1 },
          { stat: "ATK%", value: 11.7, upgrades: 0 }
        ], profile: "atk-acc", note: "ACC 40② bom. ATK flat desperdicado." },

      { img: "3189", set: "Brotherhood Spirit", lv: 20, rarity: "Mythic", main: { stat: "HP", value: 7710 },
        subs: [
          { stat: "Enlight", value: 21, upgrades: 0 },
          { stat: "DEF", value: 35, upgrades: 0 },
          { stat: "ACC", value: 29, upgrades: 2 },
          { stat: "ATK", value: 72, upgrades: 2 }
        ], profile: "mixed", note: "ACC 29② e Enlight. ATK flat comeu 2 ups." },

      { img: "3193", set: "Brotherhood Spirit", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "DEF%", value: 12.2, upgrades: 1 },
          { stat: "ACC", value: 14, upgrades: 0 },
          { stat: "RES", value: 13, upgrades: 0 },
          { stat: "HP%", value: 12.7, upgrades: 2 }
        ], profile: "hp", note: "Epic lv16. HP% + DEF% ok. Low ceiling." },

      { img: "3196", set: "Holy Hunter", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "ACC", value: 24, upgrades: 1 },
          { stat: "RES", value: 22, upgrades: 1 },
          { stat: "CritR", value: 8.5, upgrades: 1 },
          { stat: "CritD", value: 8.6, upgrades: 0 }
        ], profile: "acc", note: "Epic lv16. ACC + CritR ok. Ups scattered." },

      { img: "3197", set: "Holy Hunter", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "HP%", value: 11.1, upgrades: 2 },
          { stat: "CritD", value: 9.0, upgrades: 0 },
          { stat: "DEF", value: 65, upgrades: 1 },
          { stat: "Enlight", value: 25, upgrades: 0 }
        ], profile: "hp-enlight", note: "Epic lv16. HP% + CritD + Enlight. DEF flat desperdicado." },

      { img: "3200", set: "Puppeteer's Inspiration", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "DEF%", value: 12.5, upgrades: 1 },
          { stat: "CritD", value: 16.4, upgrades: 1 },
          { stat: "HP%", value: 6.6, upgrades: 1 },
          { stat: "ATK", value: 76, upgrades: 1 }
        ], profile: "mixed", note: "Epic lv16. Ups 1-1-1-1 spread. ATK flat desperdicado." },

      { img: "3204", set: "Power of Tides", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "HP%", value: 10.8, upgrades: 1 },
          { stat: "ATK%", value: 5.1, upgrades: 0 },
          { stat: "RES", value: 25, upgrades: 1 },
          { stat: "DEF%", value: 11.8, upgrades: 1 }
        ], profile: "hp", note: "Epic lv16. HP% + DEF% ok. Low values." },

      { img: "3205", set: "Power of Tides", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "DEF%", value: 6.8, upgrades: 0 },
          { stat: "RES", value: 38, upgrades: 2 },
          { stat: "CritR", value: 8.5, upgrades: 1 },
          { stat: "CritD", value: 8.8, upgrades: 0 }
        ], profile: "dps-crit", note: "Epic lv16. CritR + CritD ok. RES comeu 2 ups." },

      { img: "3206", set: "Power of Tides", lv: 16, rarity: "Epic", main: { stat: "HP", value: 5070 },
        subs: [
          { stat: "CritR", value: 8.3, upgrades: 1 },
          { stat: "DEF%", value: 17.0, upgrades: 2 },
          { stat: "ATK", value: 37, upgrades: 0 },
          { stat: "DEF", value: 36, upgrades: 0 }
        ], profile: "def", note: "Epic lv16. DEF% 17.0② ok. 2 flat subs useless." }
    ],

    // ============================================================
    // TIER D — Vender (13 peças)
    // ============================================================
    tier_d: [
      { img: "3154", set: "Platinum Knight", lv: 20, rarity: "Epic", note: "Epic + HP flat. DEF% ok mas ATK flat comeu 2 ups" },
      { img: "3158", set: "Rhapsodist's Calling", lv: 20, rarity: "Mythic", note: "ATK flat comeu 2 ups. Enlight 10 base. Zero useful" },
      { img: "3168", set: "Cyril's Whisper", lv: 16, rarity: "Epic", note: "Epic lv16. Subs ok mas rarity + main = outclassed" },
      { img: "3169", set: "Imperial Executioner", lv: 20, rarity: "Mythic", note: "1/4 useful. ATK flat comeu 2 ups" },
      { img: "3173", set: "Imperial Executioner", lv: 16, rarity: "Epic", note: "Epic lv16. 2 flat subs. HP% decente mas outclassed" },
      { img: "3176", set: "Revenge of the Fallen", lv: 20, rarity: "Mythic", note: "RES comeu 3 ups (51!). Lixo" },
      { img: "3179", set: "Tundra Guardian", lv: 20, rarity: "Mythic", note: "Ups 1-1-1-1 + ATK flat" },
      { img: "3180", set: "Tundra Guardian", lv: 20, rarity: "Mythic", note: "RES + ATK flat comeram todos os ups" },
      { img: "3187", set: "Ancestral Protection", lv: 12, rarity: "Epic", note: "Lv12 Epic. DEF flat comeu 3 ups. Lixo" },
      { img: "3188", set: "Brotherhood Spirit", lv: 20, rarity: "Mythic", note: "ATK flat comeu 4 ups! Zero offense" },
      { img: "3191", set: "Brotherhood Spirit", lv: 20, rarity: "Mythic", note: "ATK flat + RES comeram todos os ups" },
      { img: "3192", set: "Brotherhood Spirit", lv: 20, rarity: "Mythic", note: "DEF flat comeu 2 ups. HP% + CritD base only" },
      { img: "3201", set: "Puppeteer's Inspiration", lv: 12, rarity: "Epic", note: "Lv12 Epic. RES comeu 2 ups" }
    ],

    // ============================================================
    // RESUMO
    // ============================================================
    totals: {
      total_helmets: 60,
      tier_s: 0,
      tier_a: 2,
      tier_b: 14,
      tier_c: 31,
      tier_d: 13,
      main_stat: "SEMPRE HP flat (fixo, igual weapon que e sempre ATK flat). Valor vem 100% dos SUBS",
      keep: "A+B = 16 helmets",
      sell: "D-tier = 13 helmets → gold",
      evaluate: "C-tier = 31 helmets — manter niche (ACC, DEF%, Enlight), vender rest",
      upgrade_candidates: "ZERO — todos A/B tier ja estao lv 20. Pecas lv16 sao C/D tier e nao valem o gold do upgrade"
    }
  },

  // ============================================================
  // LEGENDARY ARMOR — Catalogado 10/Mar/2026
  // Total: 61 pecas. Maioria lv8 (1 up). Organizado por main stat.
  // Main stat VARIA (diferente de weapon/helmet que sao fixos).
  // ============================================================
  legendary_armor: {

    // --- MAIN: ATK% (7 pecas) — Melhor para DPS ---
    main_atk_pct: [
      { img: "3208", set: "Platinum Knight Quality", lv: 12, main: "ATK%",
        subs: [{ stat: "Resistance", value: 23 }, { stat: "Crit Rate", value: 4.7 }, { stat: "HP", value: 649 }, { stat: "HP%", value: 12.3 }],
        note: "Lv12. HP% 12.3 provavel 1up. RES waste" },
      { img: "3209", set: "Puppeteer's Inspiration", lv: 20, main: "ATK%", mainValue: 60.0,
        subs: [{ stat: "Defense", value: 30 }, { stat: "HP", value: 1748 }, { stat: "Enlightenment", value: 48 }, { stat: "Crit Rate", value: 3.3 }],
        note: "Lv20 MAXED. Enlight 48(3ups!) + HP 1748(1up). BiS Derivative armor" },
      { img: "3210", set: "Tundra Tenacity", lv: 12, main: "ATK%",
        subs: [{ stat: "Resistance", value: 26 }, { stat: "Accuracy", value: 21 }, { stat: "Defense", value: 37 }, { stat: "Crit Rate", value: 4.8 }],
        note: "Lv12 EQUIPPED. ACC 21 + CritR ok. RES + DEF flat waste" },
      { img: "3211", set: "Tundra Tenacity", lv: 20, main: "ATK%", mainValue: 60.0,
        subs: [{ stat: "Attack", value: 32 }, { stat: "Crit Damage", value: 17.1 }, { stat: "DEF%", value: 25.5 }, { stat: "Enlightenment", value: 11 }],
        note: "Lv20 MAXED EQUIPPED. DEF% 25.5(3ups) + CritD 17.1(1up). Hybrid DPS/Tank" },
      { img: "3212", set: "Cyril's Whisper", lv: 16, main: "ATK%",
        subs: [{ stat: "HP", value: 542 }, { stat: "Enlightenment", value: 13 }, { stat: "DEF%", value: 5.5 }, { stat: "Crit Damage", value: 24.5 }],
        note: "Lv16. CritD 24.5(provavel 2ups). Enlight + DEF% ok" },
      { img: "3213", set: "Cyril's Whisper", lv: 12, main: "ATK%",
        subs: [{ stat: "Defense", value: 71 }, { stat: "Resistance", value: 11 }, { stat: "Enlightenment", value: 22 }, { stat: "Accuracy", value: 15 }],
        note: "Lv12. Enlight 22(1up) + ACC. DEF flat + RES waste" },
      { img: "3214", set: "Heart of the Gambler", lv: 16, main: "ATK%",
        subs: [{ stat: "DEF%", value: 6.2 }, { stat: "Resistance", value: 22 }, { stat: "Crit Rate", value: 9.4 }, { stat: "Defense", value: 61 }],
        note: "Lv16. CritR 9.4(1up). RES + DEF flat waste" },
    ],

    // --- MAIN: HP% (11 pecas) — Melhor para Tanks/Supports ---
    main_hp_pct: [
      { img: "3244", set: "Imperial Executioner", lv: 8, main: "HP%",
        subs: [{ stat: "Defense", value: 39 }, { stat: "ATK%", value: 5.5 }, { stat: "Resistance", value: 26, upgrades: 1 }, { stat: "HP", value: 669 }],
        note: "RES up (waste). ATK% unico util" },
      { img: "3245", set: "Rhapsodist's Calling", lv: 8, main: "HP%",
        subs: [{ stat: "DEF%", value: 11.3, upgrades: 1 }, { stat: "ATK%", value: 6.4 }, { stat: "Enlightenment", value: 11 }, { stat: "Resistance", value: 13 }],
        note: "DEF% 11.3(1up) + ATK% + Enlight. 3/4 useful" },
      { img: "3248", set: "Rhapsodist's Calling", lv: 8, main: "HP%",
        subs: [{ stat: "Crit Damage", value: 8.3 }, { stat: "ATK%", value: 6.8 }, { stat: "Attack", value: 34 }, { stat: "HP", value: 1530, upgrades: 1 }],
        note: "HP flat up (waste). ATK% + CritD uteis" },
      { img: "3250", set: "Platinum Knight Quality", lv: 8, main: "HP%",
        subs: [{ stat: "Defense", value: 39 }, { stat: "Crit Rate", value: 3.8 }, { stat: "HP", value: 862 }, { stat: "Resistance", value: 24, upgrades: 1 }],
        note: "RES up (waste). CritR unico util" },
      { img: "3251", set: "Heart of the Gambler", lv: 20, main: "HP%", mainValue: 60.0,
        subs: [{ stat: "ATK%", value: 12.5, upgrades: 1 }, { stat: "Accuracy", value: 15 }, { stat: "Enlightenment", value: 52, upgrades: 3 }, { stat: "Crit Rate", value: 3.6 }],
        note: "Lv20 MAXED. Enlight 52(3ups!) + ATK% 12.5. Derivative DPS premium. Screenshot 3312" },
      { img: "3264", set: "Revenge of the Fallen", lv: 8, main: "HP%",
        subs: [{ stat: "ATK%", value: 5.1 }, { stat: "Resistance", value: 20, upgrades: 1 }, { stat: "Defense", value: 31 }, { stat: "HP", value: 729 }],
        note: "RES up (waste). 1/4 useful" },
      { img: "3265", set: "Revenge of the Fallen", lv: 8, main: "HP%",
        subs: [{ stat: "Attack", value: 29 }, { stat: "Crit Damage", value: 15.8, upgrades: 1 }, { stat: "Defense", value: 36 }, { stat: "ATK%", value: 6.6 }],
        note: "CritD 15.8(1up) + ATK%. 2/4 useful" },
      { img: "3267", set: "Tundra Tenacity", lv: 8, main: "HP%",
        subs: [{ stat: "DEF%", value: 6.2 }, { stat: "Defense", value: 69, upgrades: 1 }, { stat: "Enlightenment", value: 11 }, { stat: "HP", value: 743 }],
        note: "DEF flat up (waste). DEF% + Enlight uteis" },
      { img: "3268", set: "Holy Hunter", lv: 6, main: "HP%",
        subs: [{ stat: "ATK%", value: 6.8 }, { stat: "Crit Rate", value: 3.5 }, { stat: "Accuracy", value: 9 }, { stat: "Resistance", value: 11 }],
        note: "Lv6. 0 ups. ATK% + CritR + ACC = 3/4 useful" },
      { img: "3284", set: "Rhapsodist's Calling", lv: 8, main: "HP%",
        subs: [{ stat: "ATK%", value: 6.8 }, { stat: "Attack", value: 29 }, { stat: "Enlightenment", value: 22, upgrades: 1 }, { stat: "Crit Damage", value: 8.5 }],
        note: "Enlight 22(1up) + ATK% + CritD. 3/4 useful" },
      { img: "3286", set: "Ancestral Protection", lv: 8, main: "HP%",
        subs: [{ stat: "Defense", value: 36 }, { stat: "ATK%", value: 6.8 }, { stat: "Attack", value: 72, upgrades: 1 }, { stat: "Resistance", value: 12 }],
        note: "ATK flat up (waste). ATK% unico util" },
    ],

    // --- MAIN: DEF% (15 pecas) — Melhor para Tanks ---
    main_def_pct: [
      { img: "3218", set: "Puppeteer's Inspiration", lv: 12, main: "DEF%",
        subs: [{ stat: "Attack", value: 77, upgrades: 1 }, { stat: "ATK%", value: 6.7 }, { stat: "Crit Rate", value: 3.7 }, { stat: "HP", value: 1652, upgrades: 1 }],
        note: "Lv12. ATK flat + HP flat ups. ATK% + CritR uteis. Hybrid" },
      { img: "3219", set: "Power of Tides", lv: 12, main: "DEF%",
        subs: [{ stat: "Enlightenment", value: 25, upgrades: 1 }, { stat: "Attack", value: 68, upgrades: 1 }, { stat: "Defense", value: 35 }, { stat: "Accuracy", value: 10 }],
        note: "Lv12. Enlight 25(1up). ACC + Enlight bons" },
      { img: "3236", set: "Brotherhood Spirit", lv: 8, main: "DEF%",
        subs: [{ stat: "Attack", value: 34 }, { stat: "Crit Damage", value: 16.3, upgrades: 1 }, { stat: "HP", value: 779 }, { stat: "Accuracy", value: 9 }],
        note: "CritD 16.3(1up) + ACC. 2/4 useful" },
      { img: "3237", set: "Imperial Executioner", lv: 8, main: "DEF%",
        subs: [{ stat: "Accuracy", value: 14 }, { stat: "Resistance", value: 26, upgrades: 1 }, { stat: "Attack", value: 35 }, { stat: "HP", value: 728 }],
        note: "RES up (waste). ACC unico util" },
      { img: "3238", set: "Ancestral Protection", lv: 8, main: "DEF%",
        subs: [{ stat: "Resistance", value: 25, upgrades: 1 }, { stat: "ATK%", value: 6.7 }, { stat: "Accuracy", value: 10 }, { stat: "Crit Damage", value: 8.8 }],
        note: "RES up (waste). ATK% + ACC + CritD = 3/4 useful" },
      { img: "3239", set: "Revenge of the Fallen", lv: 8, main: "DEF%",
        subs: [{ stat: "Enlightenment", value: 10 }, { stat: "HP", value: 1543, upgrades: 1 }, { stat: "Crit Damage", value: 8.8 }, { stat: "HP%", value: 6.1 }],
        note: "HP flat up (waste). Enlight + CritD + HP% = 3/4 useful" },
      { img: "3259", set: "Revenge of the Fallen", lv: 8, main: "DEF%",
        subs: [{ stat: "ATK%", value: 6.0 }, { stat: "Resistance", value: 24, upgrades: 1 }, { stat: "HP", value: 766 }, { stat: "Crit Damage", value: 8.5 }],
        note: "RES up (waste). ATK% + CritD uteis" },
      { img: "3262", set: "Puppeteer's Inspiration", lv: 8, main: "DEF%",
        subs: [{ stat: "Crit Damage", value: 8.5 }, { stat: "HP%", value: 5.6 }, { stat: "ATK%", value: 12.7, upgrades: 1 }, { stat: "Resistance", value: 9 }],
        note: "ATK% 12.7(1up)! + CritD + HP%. 3/4 useful. Candidata upgrade" },
      { img: "3266", set: "Rhapsodist's Calling", lv: 8, main: "DEF%",
        subs: [{ stat: "Resistance", value: 10 }, { stat: "Enlightenment", value: 23, upgrades: 1 }, { stat: "Crit Damage", value: 8.9 }, { stat: "Attack", value: 30 }],
        note: "Enlight 23(1up) + CritD. 2/4 useful" },
      { img: "3270", set: "Platinum Knight Quality", lv: 8, main: "DEF%",
        subs: [{ stat: "ATK%", value: 6.4 }, { stat: "HP", value: 874 }, { stat: "Defense", value: 65, upgrades: 1 }, { stat: "Attack", value: 53 }],
        note: "DEF flat up (waste). ATK% unico useful %" },
      { img: "3272", set: "Radiance of the Blue Oak", lv: 8, main: "DEF%",
        subs: [{ stat: "Accuracy", value: 13 }, { stat: "Resistance", value: 19, upgrades: 1 }, { stat: "Attack", value: 40 }, { stat: "Crit Rate", value: 3.4 }],
        note: "RES up (waste). ACC + CritR uteis" },
      { img: "3275", set: "Holy Hunter", lv: 8, main: "DEF%",
        subs: [{ stat: "Resistance", value: 11 }, { stat: "ATK%", value: 12.7, upgrades: 1 }, { stat: "HP%", value: 6.5 }, { stat: "HP", value: 659 }],
        note: "ATK% 12.7(1up)! + HP%. 2/4 useful %" },
      { img: "3276", set: "Cyril's Whisper", lv: 8, main: "DEF%",
        subs: [{ stat: "HP%", value: 11.9, upgrades: 1 }, { stat: "Crit Damage", value: 7.6 }, { stat: "HP", value: 694 }, { stat: "Enlightenment", value: 12 }],
        note: "HP% 11.9(1up) + CritD + Enlight. 3/4 useful" },
      { img: "3282", set: "Radiance of the Blue Oak", lv: 8, main: "DEF%",
        subs: [{ stat: "Accuracy", value: 12 }, { stat: "Enlightenment", value: 15 }, { stat: "Attack", value: 37 }, { stat: "HP", value: 1488, upgrades: 1 }],
        note: "HP flat up (waste). ACC + Enlight uteis. Duplicata IMG_3283" },
      { img: "3290", set: "Ancestral Protection", lv: 8, main: "DEF%",
        subs: [{ stat: "Resistance", value: 14 }, { stat: "ATK%", value: 6.1 }, { stat: "Attack", value: 68, upgrades: 1 }, { stat: "HP", value: 810 }],
        note: "ATK flat up (waste). ATK% unico useful %" },
    ],

    // --- MAIN: Accuracy (15 pecas) — Melhor para Debuffers/ACC-dependent ---
    main_accuracy: [
      { img: "3217", set: "Brotherhood Spirit", lv: 16, main: "Accuracy",
        subs: [{ stat: "DEF%", value: 12.1 }, { stat: "Enlightenment", value: 21 }, { stat: "HP", value: 706 }],
        note: "Lv16. DEF% 12.1 + Enlight 21 bons. 4o sub cortado na imagem" },
      { img: "3241", set: "Ancestral Protection", lv: 8, main: "Accuracy",
        subs: [{ stat: "ATK%", value: 5.1 }, { stat: "Defense", value: 33 }, { stat: "HP", value: 863 }],
        note: "3 subs visiveis. ATK% unico util" },
      { img: "3242", set: "Puppeteer's Inspiration", lv: 8, main: "Accuracy",
        subs: [{ stat: "Attack", value: 39 }, { stat: "HP%", value: 6.7 }, { stat: "Resistance", value: 14 }, { stat: "Enlightenment", value: 25, upgrades: 1 }],
        note: "Enlight 25(1up) + HP%. 2/4 useful" },
      { img: "3253", set: "Rhapsodist's Calling", lv: 8, main: "Accuracy",
        subs: [{ stat: "Crit Rate", value: 4.8 }, { stat: "HP", value: 663 }, { stat: "Crit Damage", value: 16.3, upgrades: 1 }, { stat: "Attack", value: 32 }],
        note: "CritD 16.3(1up) + CritR. 2/4 useful" },
      { img: "3258", set: "Revenge of the Fallen", lv: 8, main: "Accuracy",
        subs: [{ stat: "Crit Damage", value: 8.6 }, { stat: "Resistance", value: 11 }, { stat: "Attack", value: 69, upgrades: 1 }, { stat: "Enlightenment", value: 10 }],
        note: "ATK flat up (waste). CritD + Enlight uteis" },
      { img: "3261", set: "Ancestral Protection", lv: 8, main: "Accuracy",
        subs: [{ stat: "HP", value: 718 }, { stat: "Enlightenment", value: 11 }, { stat: "Crit Damage", value: 14.6, upgrades: 1 }, { stat: "DEF%", value: 5.1 }],
        note: "CritD 14.6(1up) + Enlight + DEF%. 3/4 useful. Mesma peca que 3260" },
      { img: "3263", set: "Ancestral Protection", lv: 8, main: "Accuracy",
        subs: [{ stat: "ATK%", value: 12.0, upgrades: 1 }, { stat: "DEF%", value: 5.4 }, { stat: "HP%", value: 5.8 }, { stat: "Attack", value: 32 }],
        note: "ATK% 12.0(1up)! + DEF% + HP%. 3/4 useful. Candidata upgrade" },
      { img: "3271", set: "Ancestral Protection", lv: 8, main: "Accuracy",
        subs: [{ stat: "HP%", value: 5.2 }, { stat: "ATK%", value: 6.5 }, { stat: "Enlightenment", value: 26, upgrades: 1 }, { stat: "Resistance", value: 15 }],
        note: "Enlight 26(1up) + ATK% + HP%. 3/4 useful" },
      { img: "3273", set: "Ancestral Protection", lv: 8, main: "Accuracy",
        subs: [{ stat: "Enlightenment", value: 22, upgrades: 1 }, { stat: "DEF%", value: 5.8 }, { stat: "Resistance", value: 10 }, { stat: "Attack", value: 29 }],
        note: "Enlight 22(1up) + DEF%. 2/4 useful" },
      { img: "3274", set: "Ancestral Protection", lv: 8, main: "Accuracy",
        subs: [{ stat: "Crit Damage", value: 16.7, upgrades: 1 }, { stat: "Enlightenment", value: 11 }, { stat: "HP%", value: 6.6 }, { stat: "Resistance", value: 13 }],
        note: "CritD 16.7(1up)! + Enlight + HP%. 3/4 useful. Candidata upgrade" },
      { img: "3277", set: "Imperial Executioner", lv: 8, main: "Accuracy",
        subs: [{ stat: "Attack", value: 33 }, { stat: "Resistance", value: 28, upgrades: 1 }, { stat: "HP", value: 661 }, { stat: "Enlightenment", value: 15 }],
        note: "RES up (waste). Enlight unico util" },
      { img: "3278", set: "Tundra Tenacity", lv: 8, main: "Accuracy",
        subs: [{ stat: "Defense", value: 64, upgrades: 1 }, { stat: "Enlightenment", value: 15 }, { stat: "ATK%", value: 5.2 }, { stat: "HP", value: 727 }],
        note: "DEF flat up (waste). Enlight + ATK% uteis" },
      { img: "3280", set: "Brotherhood Spirit", lv: 8, main: "Accuracy",
        subs: [{ stat: "Resistance", value: 22, upgrades: 1 }, { stat: "Defense", value: 36 }, { stat: "HP%", value: 6.4 }, { stat: "Crit Damage", value: 8.1 }],
        note: "RES up (waste). HP% + CritD uteis" },
      { img: "3281", set: "Brotherhood Spirit", lv: 8, main: "Accuracy",
        subs: [{ stat: "Crit Rate", value: 4.1 }, { stat: "Crit Damage", value: 16.8, upgrades: 1 }, { stat: "Resistance", value: 9 }, { stat: "HP", value: 738 }],
        note: "CritD 16.8(1up)! + CritR. 2/4 useful. Candidata upgrade" },
      { img: "3285", set: "Brotherhood Spirit", lv: 8, main: "Accuracy",
        subs: [{ stat: "Defense", value: 67, upgrades: 1 }, { stat: "HP%", value: 5.7 }, { stat: "Crit Damage", value: 7.4 }, { stat: "Crit Rate", value: 3.2 }],
        note: "DEF flat up (waste). HP% + CritD + CritR = 3/4 useful" },
    ],

    // --- MAIN: Enlightenment (13 pecas) — Melhor para Derivative DPS ---
    main_enlightenment: [
      { img: "3216", set: "Power of Tides", lv: 20, main: "Enlightenment", mainValue: 120,
        subs: [{ stat: "ATK%", value: 5.6 }, { stat: "HP%", value: 5.1 }, { stat: "Crit Rate", value: 12.2, upgrades: 3 }, { stat: "Defense", value: 105, upgrades: 1 }],
        note: "Lv20 MAXED. CritR 12.2(3ups)! + ATK% + HP%. 3/4 useful" },
      { img: "3240", set: "Tundra Tenacity", lv: 8, main: "Enlightenment",
        subs: [{ stat: "HP", value: 723 }, { stat: "Accuracy", value: 14 }, { stat: "Resistance", value: 20, upgrades: 1 }, { stat: "Crit Damage", value: 8.2 }],
        note: "RES up (waste). ACC + CritD uteis" },
      { img: "3247", set: "Tundra Tenacity", lv: 8, main: "Enlightenment",
        subs: [{ stat: "ATK%", value: 5.3 }, { stat: "Defense", value: 34 }, { stat: "Accuracy", value: 13 }, { stat: "HP%", value: 12.7, upgrades: 1 }],
        note: "HP% 12.7(1up) + ATK% + ACC. 3/4 useful. Mesma peca que 3246" },
      { img: "3249", set: "Rhapsodist's Calling", lv: 8, main: "Enlightenment",
        subs: [{ stat: "Crit Rate", value: 3.4 }, { stat: "HP", value: 1631 }, { stat: "Defense", value: 31 }, { stat: "Attack", value: 53 }],
        note: "CritR unico util. 3 flats (waste)" },
      { img: "3252", set: "Heart of the Gambler", lv: 20, main: "Enlightenment", mainValue: 120,
        subs: [{ stat: "ATK%", value: 5.5 }, { stat: "Crit Damage", value: 24.9, upgrades: 3 }, { stat: "HP", value: 1704, upgrades: 1 }, { stat: "Crit Rate", value: 4.8 }],
        note: "Lv20 MAXED. CritD 24.9(3ups!) + ATK% + CritR. 3/4 useful. Screenshot 3313" },
      { img: "3255", set: "Imperial Executioner", lv: 8, main: "Enlightenment",
        subs: [{ stat: "ATK%", value: 6.6 }, { stat: "Attack", value: 36 }, { stat: "HP%", value: 12.3, upgrades: 1 }, { stat: "DEF%", value: 5.7 }],
        note: "HP% 12.3(1up) + ATK% + DEF%. 3/4 useful. Mesma peca que 3254" },
      { img: "3256", set: "Power of Tides", lv: 8, main: "Enlightenment",
        subs: [{ stat: "Defense", value: 38 }, { stat: "Attack", value: 31 }, { stat: "Crit Damage", value: 16.5, upgrades: 1 }, { stat: "DEF%", value: 5.7 }],
        note: "CritD 16.5(1up) + DEF%. 2 flats waste" },
      { img: "3257", set: "Heart of the Gambler", lv: 8, main: "Enlightenment",
        subs: [{ stat: "Defense", value: 35 }, { stat: "Resistance", value: 29, upgrades: 1 }, { stat: "ATK%", value: 6.9 }, { stat: "DEF%", value: 5.4 }],
        note: "RES up (waste). ATK% + DEF% uteis" },
      { img: "3269", set: "Holy Hunter", lv: 8, main: "Enlightenment",
        subs: [{ stat: "ATK%", value: 6.0 }, { stat: "Crit Rate", value: 4.1 }, { stat: "Defense", value: 71, upgrades: 1 }, { stat: "Crit Damage", value: 8.6 }],
        note: "DEF flat up (waste). ATK% + CritR + CritD = 3/4 useful" },
      { img: "3279", set: "Ancestral Protection", lv: 8, main: "Enlightenment",
        subs: [{ stat: "Accuracy", value: 10 }, { stat: "DEF%", value: 5.3 }, { stat: "Attack", value: 37 }, { stat: "ATK%", value: 11.3, upgrades: 1 }],
        note: "ATK% 11.3(1up) + ACC + DEF%. 3/4 useful" },
      { img: "3287", set: "Ancestral Protection", lv: 8, main: "Enlightenment",
        subs: [{ stat: "Accuracy", value: 11 }, { stat: "Crit Damage", value: 8.4 }, { stat: "HP", value: 880 }, { stat: "ATK%", value: 12.1, upgrades: 1 }],
        note: "ATK% 12.1(1up)! + CritD + ACC. 3/4 useful. Candidata upgrade" },
      { img: "3288", set: "Platinum Knight Quality", lv: 8, main: "Enlightenment",
        subs: [{ stat: "DEF%", value: 6.8 }, { stat: "ATK%", value: 12.9, upgrades: 1 }, { stat: "Accuracy", value: 15 }, { stat: "Defense", value: 30 }],
        note: "ATK% 12.9(1up)! + DEF% + ACC. 3/4 useful. Candidata upgrade" },
      { img: "3289", set: "Ancestral Protection", lv: 20, main: "Enlightenment", mainValue: 120,
        subs: [{ stat: "Crit Rate", value: 4.0 }, { stat: "DEF%", value: 23.6, upgrades: 3 }, { stat: "ATK%", value: 5.4 }, { stat: "HP%", value: 11.7, upgrades: 1 }],
        note: "Lv20 MAXED. DEF% 23.6(2ups) + HP% 11.7(1up). 4/4 useful, 3/3 ups uteis! Tank Derivative BiS. Screenshot 3314" },
    ],

    totals: {
      total_armor: 61,
      by_main: { "ATK%": 7, "HP%": 11, "DEF%": 15, "Accuracy": 15, "Enlightenment": 13 },
      lv20_maxed: 3,
      lv16: 4,
      lv12: 6,
      lv8: 46,
      lv6: 1,
      candidates_4of4: "3251 (HP% ATK%+ACC+Enlight+CritR), 3289 (Enlight CritR+DEF%+ATK%+HP%)",
      candidates_upgrade: "3262, 3263, 3274, 3281, 3287, 3288 (ATK% ou CritD 1up com 3/4 useful)"
    }
  },

  // ============================================================
  // LEGENDARY GLOVES — Catalogado 10/Mar/2026
  // Total: 17 pecas. Maioria lv8 (1 up). Organizado por main stat.
  // ============================================================
  legendary_gloves: {

    // --- MAIN: HP% (8 pecas) ---
    main_hp_pct: [
      { img: "3294", set: "Holy Hunter", lv: 8, main: "HP%",
        subs: [{ stat: "DEF%", value: 12.3, upgrades: 1 }, { stat: "Resistance", value: 15 }, { stat: "Crit Rate", value: 4.4 }, { stat: "Enlightenment", value: 12 }],
        note: "DEF% 12.3(1up) + CritR + Enlight. 3/4 useful" },
      { img: "3296", set: "Brotherhood Spirit", lv: 8, main: "HP%",
        subs: [{ stat: "Crit Damage", value: 7.3 }, { stat: "HP", value: 771 }, { stat: "DEF%", value: 11.6 }, { stat: "Enlightenment", value: 14 }],
        note: "DEF% 11.6 + CritD + Enlight. Up went to DEF% or HP. 3/4 useful" },
      { img: "3301", set: "Tundra Tenacity", lv: 8, main: "HP%",
        subs: [{ stat: "Resistance", value: 12 }, { stat: "Crit Damage", value: 7.6 }, { stat: "Crit Rate", value: 8.0, upgrades: 1 }, { stat: "ATK%", value: 5.6 }],
        note: "CritR 8.0(1up)! + CritD + ATK%. 3/4 useful. Candidata upgrade" },
      { img: "3303", set: "Rhapsodist's Calling", lv: 8, main: "HP%",
        subs: [{ stat: "Enlightenment", value: 12 }, { stat: "DEF%", value: 6.6 }, { stat: "Crit Damage", value: 14.8, upgrades: 1 }, { stat: "Resistance", value: 12 }],
        note: "CritD 14.8(1up) + DEF% + Enlight. 3/4 useful" },
      { img: "3305", set: "Cyril's Whisper", lv: 8, main: "HP%",
        subs: [{ stat: "ATK%", value: 7.0 }, { stat: "Attack", value: 67, upgrades: 1 }, { stat: "HP", value: 652 }, { stat: "Defense", value: 35 }],
        note: "ATK flat up (waste). ATK% unico useful %" },
      { img: "3308", set: "Heart of the Gambler", lv: 20, main: "HP%", mainValue: 60.0,
        subs: [{ stat: "Enlightenment", value: 24, upgrades: 1 }, { stat: "DEF%", value: 6.5 }, { stat: "Crit Damage", value: 23.6, upgrades: 2 }, { stat: "Crit Rate", value: 7.3, upgrades: 1 }],
        note: "Lv20 MAXED. CritD 23.6(2ups) + Enlight 24(1up). 4/4 useful, 3/3 ups uteis! Universal premium. Screenshot 3315" },
      { img: "3309", set: "Rhapsodist's Calling", lv: 8, main: "HP%",
        subs: [{ stat: "Crit Damage", value: 15.2, upgrades: 1 }, { stat: "Resistance", value: 10 }, { stat: "DEF%", value: 5.8 }, { stat: "HP", value: 805 }],
        note: "CritD 15.2(1up) + DEF%. 2/4 useful" },
      { img: "3310", set: "Platinum Knight Quality", lv: 8, main: "HP%",
        subs: [{ stat: "Enlightenment", value: 28, upgrades: 1 }, { stat: "Defense", value: 34 }, { stat: "Attack", value: 31 }, { stat: "Crit Damage", value: 8.6 }],
        note: "Enlight 28(1up)! + CritD. 2/4 useful. Duplicata IMG_3311" },
    ],

    // --- MAIN: DEF% (9 pecas) ---
    main_def_pct: [
      { img: "3292", set: "Power of Tides", lv: 20, main: "DEF%", mainValue: 60.0,
        subs: [{ stat: "ATK%", value: 11.9, upgrades: 1 }, { stat: "HP%", value: 18.8, upgrades: 2 }, { stat: "Crit Damage", value: 7.0 }, { stat: "Enlightenment", value: 26, upgrades: 1 }],
        note: "Lv20 MAXED. HP% 18.8(2ups) + Enlight 26(1up) + ATK% 11.9. 4/4 useful. MELHOR glove. Screenshot 3316" },
      { img: "3293", set: "Power of Tides", lv: 8, main: "DEF%",
        subs: [{ stat: "HP", value: 1396, upgrades: 1 }, { stat: "Crit Damage", value: 8.8 }, { stat: "ATK%", value: 5.2 }, { stat: "Defense", value: 38 }],
        note: "HP flat up (waste). CritD + ATK% uteis" },
      { img: "3297", set: "Holy Hunter", lv: 8, main: "DEF%",
        subs: [{ stat: "Attack", value: 30 }, { stat: "ATK%", value: 6.6 }, { stat: "Defense", value: 69, upgrades: 1 }, { stat: "Resistance", value: 14 }],
        note: "DEF flat up (waste). ATK% unico useful %" },
      { img: "3299", set: "Radiance of the Blue Oak", lv: 8, main: "DEF%",
        subs: [{ stat: "Crit Damage", value: 15.8, upgrades: 1 }, { stat: "Defense", value: 36 }, { stat: "Accuracy", value: 13 }, { stat: "Crit Rate", value: 4.6 }],
        note: "CritD 15.8(1up)! + ACC + CritR. 3/4 useful. Candidata upgrade" },
      { img: "3300", set: "Imperial Executioner", lv: 8, main: "DEF%",
        subs: [{ stat: "Accuracy", value: 11 }, { stat: "Defense", value: 64, upgrades: 1 }, { stat: "ATK%", value: 6.2 }, { stat: "Attack", value: 30 }],
        note: "DEF flat up (waste). ACC + ATK% uteis" },
      { img: "3302", set: "Imperial Executioner", lv: 8, main: "DEF%",
        subs: [{ stat: "Enlightenment", value: 15 }, { stat: "ATK%", value: 5.4 }, { stat: "HP", value: 1395, upgrades: 1 }, { stat: "Accuracy", value: 12 }],
        note: "HP flat up (waste). Enlight + ATK% + ACC = 3/4 useful" },
      { img: "3304", set: "Imperial Executioner", lv: 8, main: "DEF%",
        subs: [{ stat: "ATK%", value: 11.9, upgrades: 1 }, { stat: "Crit Damage", value: 7.6 }, { stat: "Attack", value: 34 }, { stat: "Resistance", value: 13 }],
        note: "ATK% 11.9(1up)! + CritD. 2/4 useful" },
      { img: "3306", set: "Cyril's Whisper", lv: 8, main: "DEF%",
        subs: [{ stat: "Crit Rate", value: 4.1 }, { stat: "Crit Damage", value: 7.2 }, { stat: "ATK%", value: 5.7 }, { stat: "Defense", value: 73, upgrades: 1 }],
        note: "DEF flat up (waste). CritR + CritD + ATK% = 3/4 useful" },
      { img: "3307", set: "Cyril's Whisper", lv: 8, main: "DEF%",
        subs: [{ stat: "Crit Rate", value: 3.9 }, { stat: "Attack", value: 36 }, { stat: "Crit Damage", value: 8.9 }, { stat: "ATK%", value: 13.2, upgrades: 1 }],
        note: "ATK% 13.2(1up)! + CritR + CritD. 3/4 useful. Candidata upgrade" },
    ],

    totals: {
      total_gloves: 17,
      by_main: { "HP%": 8, "DEF%": 9 },
      lv16: 1,
      lv8: 16,
      candidates_4of4: "3308 (HP% CritR+Enlight+DEF%+CritD), 3292 (DEF% ATK%+HP%+CritD+Enlight)",
      candidates_upgrade: "3301, 3299, 3307 (CritR ou ATK% 1up com 3/4 useful)"
    }
  },

  summary: {
    total_gear: 758,
    total_photographed: 430,
    total_cataloged: 430,
    mythic_total: "~64 pecas (45 anteriores + 19 novas armor/gloves)",
    mythic_plus20: "~25 pecas",
    mythic_base: "~39 pecas",
    legendary_plus20: "~37 pecas (Armor/Gloves/Helmets)",
    legendary_base: "~113 pecas (Armor/Gloves/Helmets)",
    legendary_weapons: "58 pecas (S:4, A:6, B:12, C:20, D:16)",
    legendary_helmets: "60 pecas (S:0, A:2, B:14, C:31, D:13) — main HP flat fixo (igual weapon)",
    legendary_armor: "61 pecas (ATK%:7, HP%:11, DEF%:15, ACC:15, Enlight:13) — maioria lv8",
    legendary_gloves: "17 pecas (HP%:8, DEF%:9) — maioria lv8",
    not_photographed: "~328 pecas restantes",
    slots_complete: "Weapons ✓, Helmets ✓, Armor ✓, Gloves ✓",
    date_cataloged: "2026-03-10",
    upgrade_analysis: "2026-03-10 — todos 4 slots catalogados. Armor/Gloves maioria lv8 (precisa decidir quais upar)"
  }
};
