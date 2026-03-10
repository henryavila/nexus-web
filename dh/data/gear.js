// gear.js — Gear inventory, sets, hero profiles, loadouts
// Generated: 2026-02-18
// Source: Screenshots in data/gears/{weapon,armor,helmet,glove}/

window.DATA_GEAR = {
  updated: "20/Fev/2026",

  // ==========================================================
  // SETS — All gear sets found in inventory
  // ==========================================================
  sets: [
    {
      id: "rhapsodists-calling",
      name: "Rhapsodist's Calling",
      bonus_2: "Attack +20%, Accuracy +40",
      bonus_3: "When the wearer inflicts a debuff, damage dealt increases 8% for the next 10s. Max 4 stacks (32%)",
      type: "offensive-debuff"
    },
    {
      id: "heart-of-the-gambler",
      name: "Heart of the Gambler",
      bonus_2: "Attack +20%, Attack Speed +20%",
      bonus_3: "35% chance to deal additional 130% ATK physical damage",
      type: "offensive-crit"
    },
    {
      id: "imperial-executioner",
      name: "Imperial Executioner",
      bonus_2: "Attack +20%, Crit Rate +10%",
      bonus_3: "When critical hit, that damage increases 16%",
      type: "offensive-crit"
    },
    {
      id: "cyrils-whisper",
      name: "Cyril's Whisper",
      bonus_2: "Attack +20%, Skill Haste +20",
      bonus_3: "Ignore 7% of enemy defense per negative effect. Max 3 stacks (21%)",
      type: "offensive-skill"
    },
    {
      id: "platinum-knight-quality",
      name: "Platinum Knight Quality",
      bonus_2: "Attack +20%, Enlightenment +30",
      bonus_3: "For 12s after ultimate, damage dealt increases by 30%",
      type: "offensive-ult"
    },
    {
      id: "revenge-of-the-fallen",
      name: "Revenge of the Fallen",
      bonus_2: "HP +20%, Resistance +60",
      bonus_3: "When taking damage, 50% chance to reflect 20% of damage back to source",
      type: "defensive-counter"
    },
    {
      id: "tundra-tenacity",
      name: "Tundra Tenacity",
      bonus_2: "HP +20%, Accuracy +40",
      bonus_3: "Gain 1% Ultimate Energy each time taking damage",
      type: "defensive-ult"
    },
    {
      id: "ancestral-protection",
      name: "Ancestral Protection",
      bonus_2: "HP +20%, Defense +15%",
      bonus_3: "15% of other allies' damage is transferred to the wearer",
      type: "defensive-tank"
    },
    {
      id: "radiance-of-the-blue-oak",
      name: "Radiance of the Blue Oak",
      bonus_2: "Defense +20%, Skill Haste +20",
      bonus_3: "When HP drops to 25%, gain Recovery Over Time for 10s healing 80% of DEF/s. 60s cooldown",
      type: "defensive-sustain"
    },
    {
      id: "brotherhood-spirit",
      name: "Brotherhood Spirit",
      bonus_2: "Defense +25%",
      bonus_3: "When casting ultimate, all allies' elemental damage increases 15% for 10s",
      type: "support-amp"
    },
    {
      id: "holy-hunter",
      name: "Holy Hunter",
      bonus_2: "Accuracy +40, Skill Haste +20",
      bonus_3: "When dealing damage, 20% chance to inflict Stunned on target for 3s",
      type: "support-cc"
    },
    {
      id: "puppeteers-inspiration",
      name: "Puppeteer's Inspiration",
      bonus_2: "Accuracy +40, Resistance +60",
      bonus_3: "When casting ultimate, allies of same element gain 10% Ultimate Energy. 15s cooldown per target",
      type: "support-buff"
    },
    {
      id: "power-of-tides",
      name: "Power of Tides",
      bonus_2: "Enlightenment +30, Resistance +60",
      bonus_3: "When successfully resisting enemy effect, heals all allies for 5% max HP. 10s cooldown",
      type: "defensive-resist"
    },
    {
      id: "schadenfreude",
      name: "Schadenfreude",
      rarity: "mythic",
      bonus_1: "Each time the wearer successfully inflicts a debuff, recovers 2% Max HP",
      type: "mythic-sustain",
      notes: "Mythic 1-piece set. Primeira gear Mythic do Henry. Ideal para debuffers com aplicação frequente (Voresh, Lossenia, Vinyara)."
    }
  ],

  // ==========================================================
  // INVENTORY — All 77 pieces (66 original + 8 new on 19/Fev + 3 new on 20/Fev)
  // Levels: 20 = max, 15 = partial, 0 = not upgraded
  // ==========================================================
  inventory: [

    // ---- WEAPONS (17) ----
    { id: "w01", name: "Rhapsodist Hammer", slot: "weapon", set: "rhapsodists-calling", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Enlightenment", value: 30 }, { stat: "HP", value: 1524 }, { stat: "DEF", value: 68 }, { stat: "HP%", value: 12.9 }] },
    { id: "w02", name: "Rhapsodist Hammer", slot: "weapon", set: "rhapsodists-calling", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Resistance", value: 35 }, { stat: "HP%", value: 13.4 }, { stat: "Crit Rate", value: 4.7 }, { stat: "Enlightenment", value: 24 }] },
    { id: "w03", name: "Gambler Flintlock", slot: "weapon", set: "heart-of-the-gambler", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "DEF", value: 74 }, { stat: "Crit Rate", value: 7.7 }, { stat: "ATK%", value: 5.1 }, { stat: "Resistance", value: 37 }] },
    { id: "w04", name: "Executioner Axe", slot: "weapon", set: "imperial-executioner", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "HP%", value: 12.6 }, { stat: "Enlightenment", value: 27 }, { stat: "DEF%", value: 12.9 }, { stat: "Accuracy", value: 22 }] },
    { id: "w05", name: "Undead Rapier", slot: "weapon", set: "revenge-of-the-fallen", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "HP%", value: 16.7 }, { stat: "ATK%", value: 5.2 }, { stat: "Resistance", value: 31 }, { stat: "Enlightenment", value: 13 }] },
    { id: "w06", name: "Undead Rapier", slot: "weapon", set: "revenge-of-the-fallen", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "Crit Rate", value: 3.4 }, { stat: "DEF", value: 33 }, { stat: "HP%", value: 5.4 }] },
    { id: "w07", name: "Tundra Guardian Battleaxe", slot: "weapon", set: "tundra-tenacity", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Resistance", value: 32 }, { stat: "DEF", value: 37 }, { stat: "Accuracy", value: 21 }, { stat: "Enlightenment", value: 29 }] },
    { id: "w08", name: "Radiance of the Blue Oak Staff", slot: "weapon", set: "radiance-of-the-blue-oak", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Enlightenment", value: 12 }, { stat: "HP", value: 1543 }, { stat: "DEF%", value: 19.0 }, { stat: "Resistance", value: 24 }] },
    { id: "w09", name: "Ancestral Protection Staff", slot: "weapon", set: "ancestral-protection", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "HP%", value: 6.6 }, { stat: "Enlightenment", value: 25 }, { stat: "Crit Rate", value: 12.0 }, { stat: "Crit Damage", value: 16.4 }] },
    { id: "w10", name: "Three-Ears Emblem Dagger", slot: "weapon", set: "brotherhood-spirit", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Accuracy", value: 21 }, { stat: "Crit Rate", value: 13.1 }, { stat: "Crit Damage", value: 7.8 }, { stat: "Enlightenment", value: 25 }] },
    { id: "w11", name: "Holy Hunter Longbow", slot: "weapon", set: "holy-hunter", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Resistance", value: 24 }, { stat: "Enlightenment", value: 27 }, { stat: "HP%", value: 17.7 }, { stat: "Crit Damage", value: 8.1 }] },
    { id: "w12", name: "Puppeteer Hammer", slot: "weapon", set: "puppeteers-inspiration", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "DEF", value: 168 }, { stat: "Crit Rate", value: 4.8 }, { stat: "Enlightenment", value: 15 }, { stat: "DEF%", value: 6.7 }] },
    { id: "w13", name: "Intertidal Staff", slot: "weapon", set: "power-of-tides", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Accuracy", value: 46 }, { stat: "Crit Damage", value: 8.2 }, { stat: "Resistance", value: 24 }, { stat: "Enlightenment", value: 15 }] },
    { id: "w14", name: "Intertidal Staff", slot: "weapon", set: "power-of-tides", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "Crit Damage", value: 7.7 }, { stat: "HP", value: 750 }, { stat: "HP%", value: 5.7 }] },
    { id: "w15", name: "Intertidal Staff", slot: "weapon", set: "power-of-tides", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "HP", value: 861 }, { stat: "Enlightenment", value: 10 }, { stat: "HP%", value: 5.2 }] },
    { id: "w16", name: "Rhapsodist Hammer", slot: "weapon", set: "rhapsodists-calling", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "HP%", value: 6.3 }, { stat: "DEF%", value: 6.2 }, { stat: "Accuracy", value: 12 }],
      added: "20/Fev/2026" },
    { id: "w17", name: "Three-Ears Emblem Dagger", slot: "weapon", set: "brotherhood-spirit", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "Crit Rate", value: 4.4 }, { stat: "Crit Damage", value: 8.0 }, { stat: "DEF", value: 30 }],
      added: "20/Fev/2026" },

    // ---- ARMOR (30) ----
    { id: "a01", name: "Platinum Knight Chain Mail", slot: "armor", set: "platinum-knight-quality", level: 20,
      primary: { stat: "DEF", value: 335 },
      secondary: [{ stat: "HP%", value: 12.9 }, { stat: "ATK", value: 91 }, { stat: "ATK%", value: 12.2 }, { stat: "DEF%", value: 5.7 }] },
    { id: "a02", name: "Rhapsodist Light Armor", slot: "armor", set: "rhapsodists-calling", level: 0,
      primary: { stat: "Enlightenment", value: 8 },
      secondary: [{ stat: "Resistance", value: 13 }, { stat: "ATK", value: 28 }, { stat: "DEF%", value: 5.2 }] },
    { id: "a03", name: "Gambler Light Armor", slot: "armor", set: "heart-of-the-gambler", level: 20,
      primary: { stat: "DEF%", value: 60.0 },
      secondary: [{ stat: "ATK", value: 102 }, { stat: "Resistance", value: 33 }, { stat: "DEF", value: 32 }, { stat: "ATK%", value: 5.0 }] },
    { id: "a04", name: "Cyril Light Armor", slot: "armor", set: "cyrils-whisper", level: 20,
      primary: { stat: "DEF%", value: 60.0 },
      secondary: [{ stat: "ATK%", value: 18.0 }, { stat: "Accuracy", value: 23 }, { stat: "Enlightenment", value: 26 }, { stat: "Crit Damage", value: 7.8 }] },
    { id: "a05", name: "Cyril Light Armor", slot: "armor", set: "cyrils-whisper", level: 20,
      primary: { stat: "Resistance", value: 120 },
      secondary: [{ stat: "Crit Damage", value: 30.8 }, { stat: "ATK", value: 64 }, { stat: "ATK%", value: 5.1 }, { stat: "Enlightenment", value: 13 }] },
    { id: "a06", name: "Cyril Light Armor", slot: "armor", set: "cyrils-whisper", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "Crit Rate", value: 6.1 }, { stat: "ATK", value: 37 }, { stat: "HP%", value: 12.0 }, { stat: "Crit Damage", value: 22.6 }] },
    { id: "a07", name: "Executioner Heavy Armor", slot: "armor", set: "imperial-executioner", level: 20,
      primary: { stat: "HP%", value: 60.0 },
      secondary: [{ stat: "ATK%", value: 16.8 }, { stat: "Crit Rate", value: 7.4 }, { stat: "HP", value: 1416 }, { stat: "Accuracy", value: 13 }] },
    { id: "a08", name: "Undead Light Armor", slot: "armor", set: "revenge-of-the-fallen", level: 20,
      primary: { stat: "Enlightenment", value: 120 },
      secondary: [{ stat: "HP%", value: 13.8 }, { stat: "Crit Damage", value: 23.9 }, { stat: "Resistance", value: 23 }, { stat: "DEF%", value: 6.9 }] },
    { id: "a09", name: "Undead Light Armor", slot: "armor", set: "revenge-of-the-fallen", level: 0,
      primary: { stat: "Resistance", value: 8 },
      secondary: [{ stat: "Accuracy", value: 12 }, { stat: "ATK", value: 30 }, { stat: "Crit Damage", value: 8.2 }] },
    { id: "a10", name: "Tundra Guardian Heavy Armor", slot: "armor", set: "tundra-tenacity", level: 20,
      primary: { stat: "DEF%", value: 60.0 },
      secondary: [{ stat: "Resistance", value: 28 }, { stat: "Accuracy", value: 12 }, { stat: "ATK%", value: 5.8 }, { stat: "Crit Rate", value: 15.6 }] },
    { id: "a11", name: "Radiance of the Blue Oak Robe", slot: "armor", set: "radiance-of-the-blue-oak", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "HP%", value: 5.6 }, { stat: "ATK%", value: 5.1 }, { stat: "Crit Rate", value: 10.6 }, { stat: "DEF", value: 106 }] },
    { id: "a12", name: "Radiance of the Blue Oak Robe", slot: "armor", set: "radiance-of-the-blue-oak", level: 20,
      primary: { stat: "ATK%", value: 60.0 },
      secondary: [{ stat: "Enlightenment", value: 27 }, { stat: "HP", value: 1504 }, { stat: "Accuracy", value: 10 }, { stat: "Resistance", value: 35 }] },
    { id: "a13", name: "Radiance of the Blue Oak Robe", slot: "armor", set: "radiance-of-the-blue-oak", level: 0,
      primary: { stat: "DEF", value: 15 },
      secondary: [{ stat: "Crit Damage", value: 9.2 }, { stat: "Enlightenment", value: 11 }, { stat: "Accuracy", value: 13 }] },
    { id: "a14", name: "Ancestral Protection Robe", slot: "armor", set: "ancestral-protection", level: 20,
      primary: { stat: "DEF%", value: 60.0 },
      secondary: [{ stat: "Enlightenment", value: 12 }, { stat: "HP%", value: 19.9 }, { stat: "Crit Rate", value: 11.7 }, { stat: "ATK%", value: 6.0 }] },
    { id: "a15", name: "Ancestral Protection Robe", slot: "armor", set: "ancestral-protection", level: 20,
      primary: { stat: "HP%", value: 60.0 },
      secondary: [{ stat: "ATK%", value: 6.2 }, { stat: "Accuracy", value: 26 }, { stat: "HP", value: 2232 }, { stat: "Resistance", value: 25 }] },
    { id: "a16", name: "Ancestral Protection Robe", slot: "armor", set: "ancestral-protection", level: 20,
      primary: { stat: "DEF%", value: 60.0 },
      secondary: [{ stat: "Crit Rate", value: 12.5 }, { stat: "HP", value: 1296 }, { stat: "ATK%", value: 6.9 }, { stat: "Resistance", value: 23 }] },
    { id: "a17", name: "Ancestral Protection Robe", slot: "armor", set: "ancestral-protection", level: 20,
      primary: { stat: "DEF", value: 335 },
      secondary: [{ stat: "HP", value: 821 }, { stat: "ATK", value: 72 }, { stat: "Enlightenment", value: 14 }, { stat: "Crit Damage", value: 32.2 }] },
    { id: "a18", name: "Three-Ears Emblem Light Armor", slot: "armor", set: "brotherhood-spirit", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "Enlightenment", value: 14 }, { stat: "ATK", value: 36 }, { stat: "DEF%", value: 6.2 }] },
    { id: "a19", name: "Holy Hunter Light Armor", slot: "armor", set: "holy-hunter", level: 20,
      primary: { stat: "ATK%", value: 60.0 },
      secondary: [{ stat: "Accuracy", value: 24 }, { stat: "Crit Rate", value: 3.1 }, { stat: "HP", value: 2441 }, { stat: "DEF%", value: 12.2 }] },
    { id: "a20", name: "Puppeteer Light Armor", slot: "armor", set: "puppeteers-inspiration", level: 20,
      primary: { stat: "Accuracy", value: 96 },
      secondary: [{ stat: "ATK%", value: 12.2 }, { stat: "Crit Rate", value: 17.0 }, { stat: "DEF", value: 35 }, { stat: "Enlightenment", value: 11 }] },
    { id: "a21", name: "Puppeteer Light Armor", slot: "armor", set: "puppeteers-inspiration", level: 0,
      primary: { stat: "Enlightenment", value: 8 },
      secondary: [{ stat: "ATK", value: 36 }, { stat: "HP", value: 685 }, { stat: "Accuracy", value: 12 }] },
    { id: "a22", name: "Intertidal Light Armor", slot: "armor", set: "power-of-tides", level: 0,
      primary: { stat: "Enlightenment", value: 8 },
      secondary: [{ stat: "ATK", value: 34 }, { stat: "HP", value: 657 }, { stat: "ATK%", value: 6.2 }] },
    { id: "a23", name: "Intertidal Light Armor", slot: "armor", set: "power-of-tides", level: 0,
      primary: { stat: "Resistance", value: 8 },
      secondary: [{ stat: "Enlightenment", value: 12 }, { stat: "Crit Damage", value: 8.7 }, { stat: "DEF%", value: 6.6 }] },
    { id: "a24", name: "Imperial Shadow's Cloak", slot: "armor", set: "imperial-shadows-cloak", level: 0,
      primary: { stat: "ATK%", value: 2.0 },
      secondary: [],
      notes: "Refinement gear. Refine 8: Crit Rate+15%. Refine 16: +2% ATK per dead unit (5 stacks). Refine 20: Max 10 stacks." },
    { id: "a25", name: "Three-Ears Emblem Light Armor", slot: "armor", set: "brotherhood-spirit", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "DEF%", value: 6.6 }, { stat: "Crit Rate", value: 3.4 }, { stat: "Accuracy", value: 10 }],
      added: "19/Fev/2026" },
    { id: "a26", name: "Tundra Guardian Heavy Armor", slot: "armor", set: "tundra-tenacity", level: 0,
      primary: { stat: "Accuracy", value: 6 },
      secondary: [{ stat: "Crit Damage", value: 9.0 }, { stat: "Resistance", value: 10 }, { stat: "Crit Rate", value: 4.3 }],
      added: "19/Fev/2026" },
    { id: "a27", name: "Tundra Guardian Heavy Armor", slot: "armor", set: "tundra-tenacity", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "HP", value: 775 }, { stat: "Resistance", value: 10 }, { stat: "ATK%", value: 5.2 }],
      added: "19/Fev/2026" },
    { id: "a28", name: "Ancestral Protection Robe", slot: "armor", set: "ancestral-protection", level: 0,
      primary: { stat: "Accuracy", value: 6 },
      secondary: [{ stat: "HP%", value: 5.2 }, { stat: "ATK%", value: 6.5 }, { stat: "Enlightenment", value: 15 }],
      added: "19/Fev/2026" },
    { id: "a29", name: "Puppeteer Light Armor", slot: "armor", set: "puppeteers-inspiration", level: 0,
      primary: { stat: "HP%", value: 2.0 },
      secondary: [{ stat: "HP", value: 784 }, { stat: "Crit Rate", value: 3.1 }, { stat: "DEF", value: 38 }],
      added: "19/Fev/2026" },
    { id: "a30", name: "Tunnel King's Legacy", slot: "armor", set: "schadenfreude", level: 0, rarity: "mythic",
      primary: { stat: "DEF%", value: 2.0 },
      secondary: [{ stat: "HP%", value: 5.9 }, { stat: "DEF", value: 29 }, { stat: "ATK", value: 31 }],
      added: "19/Fev/2026",
      notes: "PRIMEIRA GEAR MYTHIC. Set Schadenfreude: 1pc = recupera 2% Max HP ao aplicar debuff. Ideal para Voresh (debuff em cada hit)." },

    // ---- HELMETS (15) ----
    { id: "h01", name: "Platinum Knight Helmet", slot: "helmet", set: "platinum-knight-quality", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "DEF", value: 77 }, { stat: "Accuracy", value: 21 }, { stat: "ATK%", value: 12.4 }, { stat: "HP%", value: 12.5 }] },
    { id: "h02", name: "Rhapsodist Headgear", slot: "helmet", set: "rhapsodists-calling", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "ATK%", value: 6.7 }, { stat: "DEF%", value: 18.2 }, { stat: "Resistance", value: 24 }, { stat: "ATK", value: 64 }] },
    { id: "h03", name: "Gambler Headgear", slot: "helmet", set: "heart-of-the-gambler", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "Accuracy", value: 24 }, { stat: "Resistance", value: 37 }, { stat: "DEF%", value: 6.1 }, { stat: "ATK%", value: 12.0 }] },
    { id: "h04", name: "Cyril Helmet", slot: "helmet", set: "cyrils-whisper", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "DEF", value: 31 }, { stat: "ATK%", value: 20.0 }, { stat: "Enlightenment", value: 21 }, { stat: "HP%", value: 11.0 }] },
    { id: "h05", name: "Executioner Helmet", slot: "helmet", set: "imperial-executioner", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "ATK%", value: 11.8 }, { stat: "Resistance", value: 22 }, { stat: "Accuracy", value: 14 }, { stat: "DEF", value: 104 }] },
    { id: "h06", name: "Executioner Helmet", slot: "helmet", set: "imperial-executioner", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "DEF", value: 108 }, { stat: "HP%", value: 11.7 }, { stat: "Resistance", value: 19 }, { stat: "ATK", value: 35 }] },
    { id: "h07", name: "Undead Helmet", slot: "helmet", set: "revenge-of-the-fallen", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "Resistance", value: 25 }, { stat: "Crit Rate", value: 13.7 }, { stat: "Crit Damage", value: 8.2 }, { stat: "Enlightenment", value: 23 }] },
    { id: "h08", name: "Tundra Guardian Helmet", slot: "helmet", set: "tundra-tenacity", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "DEF%", value: 17.7 }, { stat: "Crit Rate", value: 7.0 }, { stat: "Accuracy", value: 27 }, { stat: "DEF", value: 35 }] },
    { id: "h09", name: "Three-Ears Emblem Hood", slot: "helmet", set: "brotherhood-spirit", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "Resistance", value: 29 }, { stat: "HP%", value: 11.5 }, { stat: "DEF", value: 99 }, { stat: "Crit Damage", value: 7.4 }] },
    { id: "h10", name: "Three-Ears Emblem Hood", slot: "helmet", set: "brotherhood-spirit", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "ATK", value: 38 }, { stat: "Crit Damage", value: 7.9 }, { stat: "Crit Rate", value: 3.5 }] },
    { id: "h11", name: "Three-Ears Emblem Hood", slot: "helmet", set: "brotherhood-spirit", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "Resistance", value: 14 }, { stat: "Accuracy", value: 10 }, { stat: "HP%", value: 5.3 }] },
    { id: "h12", name: "Intertidal Crown", slot: "helmet", set: "power-of-tides", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "ATK%", value: 17.8 }, { stat: "Accuracy", value: 12 }, { stat: "Crit Damage", value: 7.7 }, { stat: "Enlightenment", value: 42 }] },
    { id: "h13", name: "Intertidal Crown", slot: "helmet", set: "power-of-tides", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "DEF%", value: 6.4 }, { stat: "DEF", value: 111 }, { stat: "ATK%", value: 11.0 }, { stat: "Crit Damage", value: 16.2 }] },
    { id: "h14", name: "Intertidal Crown", slot: "helmet", set: "power-of-tides", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "ATK", value: 28 }, { stat: "Accuracy", value: 9 }, { stat: "HP%", value: 5.8 }] },
    { id: "h15", name: "Three-Ears Emblem Hood", slot: "helmet", set: "brotherhood-spirit", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "Enlightenment", value: 10 }, { stat: "DEF", value: 35 }, { stat: "Accuracy", value: 10 }],
      added: "20/Fev/2026" },

    // ---- GLOVES (15) ----
    { id: "g01", name: "Rhapsodist Gloves", slot: "gloves", set: "rhapsodists-calling", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Enlightenment", value: 40 }, { stat: "HP", value: 811 }, { stat: "DEF%", value: 16.9 }, { stat: "ATK%", value: 5.2 }] },
    { id: "g02", name: "Gambler Gloves", slot: "gloves", set: "heart-of-the-gambler", level: 20,
      primary: { stat: "DEF", value: 335 },
      secondary: [{ stat: "Crit Rate", value: 7.4 }, { stat: "ATK", value: 62 }, { stat: "Resistance", value: 23 }, { stat: "HP", value: 1763 }] },
    { id: "g03", name: "Gambler Gloves", slot: "gloves", set: "heart-of-the-gambler", level: 20,
      primary: { stat: "DEF", value: 142 },
      secondary: [{ stat: "Crit Damage", value: 8.9 }, { stat: "Crit Rate", value: 6.8 }, { stat: "Resistance", value: 10 }] },
    { id: "g04", name: "Cyril Gloves", slot: "gloves", set: "cyrils-whisper", level: 20,
      primary: { stat: "Crit Rate", value: 40.0 },
      secondary: [{ stat: "ATK", value: 69 }, { stat: "ATK%", value: 6.2 }, { stat: "Crit Damage", value: 16.7 }, { stat: "DEF", value: 102 }] },
    { id: "g05", name: "Cyril Gloves", slot: "gloves", set: "cyrils-whisper", level: 20,
      primary: { stat: "HP%", value: 60.0 },
      secondary: [{ stat: "Resistance", value: 12 }, { stat: "DEF%", value: 16.6 }, { stat: "Crit Damage", value: 25.0 }, { stat: "ATK%", value: 5.8 }] },
    { id: "g06", name: "Executioner Gloves", slot: "gloves", set: "imperial-executioner", level: 20,
      primary: { stat: "DEF", value: 96 },
      secondary: [{ stat: "HP%", value: 11.6 }, { stat: "Resistance", value: 28 }, { stat: "Crit Rate", value: 4.7 }] },
    { id: "g07", name: "Tundra Guardian Gloves", slot: "gloves", set: "tundra-tenacity", level: 20,
      primary: { stat: "HP%", value: 60.0 },
      secondary: [{ stat: "Enlightenment", value: 27 }, { stat: "Resistance", value: 45 }, { stat: "HP", value: 698 }, { stat: "Crit Rate", value: 3.9 }] },
    { id: "g08", name: "Tundra Guardian Gloves", slot: "gloves", set: "tundra-tenacity", level: 20,
      primary: { stat: "HP", value: 7710 },
      secondary: [{ stat: "ATK", value: 32 }, { stat: "DEF", value: 130 }, { stat: "Enlightenment", value: 13 }, { stat: "Crit Damage", value: 15.9 }] },
    { id: "g09", name: "Three-Ears Emblem Gloves", slot: "gloves", set: "brotherhood-spirit", level: 20,
      primary: { stat: "ATK", value: 335 },
      secondary: [{ stat: "Accuracy", value: 30 }, { stat: "Resistance", value: 10 }, { stat: "Crit Damage", value: 24.3 }, { stat: "Crit Rate", value: 4.1 }] },
    { id: "g10", name: "Holy Hunter Gloves", slot: "gloves", set: "holy-hunter", level: 20,
      primary: { stat: "ATK%", value: 60.0 },
      secondary: [{ stat: "Resistance", value: 26 }, { stat: "Crit Rate", value: 12.5 }, { stat: "HP%", value: 5.1 }, { stat: "Accuracy", value: 21 }] },
    { id: "g11", name: "Holy Hunter Gloves", slot: "gloves", set: "holy-hunter", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "Enlightenment", value: 13 }, { stat: "DEF%", value: 5.6 }, { stat: "DEF", value: 34 }] },
    { id: "g12", name: "Holy Hunter Gloves", slot: "gloves", set: "holy-hunter", level: 0,
      primary: { stat: "HP", value: 270 },
      secondary: [{ stat: "Resistance", value: 10 }, { stat: "DEF", value: 36 }, { stat: "Crit Damage", value: 8.5 }] },
    { id: "g13", name: "Intertidal Gloves", slot: "gloves", set: "power-of-tides", level: 20,
      primary: { stat: "ATK%", value: 60.0 },
      secondary: [{ stat: "Crit Rate", value: 3.4 }, { stat: "HP%", value: 12.2 }, { stat: "HP", value: 1623 }, { stat: "DEF", value: 105 }] },
    { id: "g14", name: "Platinum Knight Gloves", slot: "gloves", set: "platinum-knight-quality", level: 0,
      primary: { stat: "ATK", value: 15 },
      secondary: [{ stat: "HP", value: 751 }, { stat: "Accuracy", value: 13 }, { stat: "Crit Rate", value: 4.1 }],
      added: "19/Fev/2026" },
    { id: "g15", name: "Ancestral Protection Gloves", slot: "gloves", set: "ancestral-protection", level: 0,
      primary: { stat: "ATK%", value: 2.0 },
      secondary: [{ stat: "DEF%", value: 6.3 }, { stat: "Crit Rate", value: 3.5 }, { stat: "HP%", value: 5.0 }],
      added: "19/Fev/2026" }
  ],

  // ==========================================================
  // UPGRADE COSTS
  // ==========================================================
  upgrade_costs: {
    legendary: {
      level_0_to_8: 528150,
      level_0_to_20: "TBD",
      note: "Levels: 0 (base) or 20 (max)"
    },
    gold_available: 4315000,
    max_pieces_0_to_8: 26
  },

  // ==========================================================
  // HERO PROFILES — To be populated in Task 2
  // ==========================================================
  hero_profiles: [
    {
      id: "dps-crit",
      name: "DPS Crit",
      description: "Basic-attack / crit-proc DPS. Feathers, phantoms, ignore DEF on crit.",
      heroes: ["Nastjenka", "Garett", "Sutha", "Durango", "Felicity", "Divine Ascetic", "Lorentheel", "Philto", "Tonalnan", "Alfie", "Lorarii"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 10, "Crit Damage": 9, HP: 2, "HP%": 2, DEF: 1, "DEF%": 1, Accuracy: 3, Enlightenment: 1, Resistance: 1, "Skill Haste": 2, "ATK Speed": 7 },
      ideal_sets: ["heart-of-the-gambler", "imperial-executioner"],
      notes: "Nastjenka/Sutha: ATK Speed converte em Crit Rate. Durango: 80%+ Crit Rate breakpoint. Garett: Crit Damage > Crit Rate (ult auto-crit). Divine Ascetic: basic attack focused (Battle conta como basic). Lorentheel/Philto: Rally burst. Tonalnan/Alfie: Fire burst."
    },
    {
      id: "dps-skill",
      name: "DPS Skill",
      description: "Skill/ult-focused DPS. Dano vem de skills, nao basic attacks.",
      heroes: ["Ladehlia", "Sintrellia", "Isitarian", "Hochadir", "Lossenia", "Auster", "Vicana", "Jathalea", "Errich", "Sigrid"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 7, "Crit Damage": 6, HP: 2, "HP%": 2, DEF: 1, "DEF%": 1, Accuracy: 5, Enlightenment: 1, Resistance: 1, "Skill Haste": 7, "ATK Speed": 3 },
      ideal_sets: ["cyrils-whisper", "platinum-knight-quality"],
      notes: "Ladehlia/Sintrellia precisam do maior ATK do time. Hochadir/Lossenia/Auster: Accuracy 220+ para Frost debuffs. Vicana/Jathalea: Poison skills. Errich: AoE Fire skills. Sigrid: Ult condicional."
    },
    {
      id: "tank-def",
      name: "Tank DEF",
      description: "Tank principal. Kit escala com DEF (shields, dano, heals).",
      heroes: ["Eurion", "Frurbath", "Isolde", "Garius", "Sagomir"],
      stat_weights: { ATK: 1, "ATK%": 1, "Crit Rate": 1, "Crit Damage": 1, HP: 9, "HP%": 9, DEF: 10, "DEF%": 10, Accuracy: 4, Enlightenment: 1, Resistance: 5, "Skill Haste": 6, "ATK Speed": 1 },
      ideal_sets: ["ancestral-protection", "tundra-tenacity", "radiance-of-the-blue-oak"],
      notes: "Eurion: DEF > HP > Skill Haste > Resistance. Frurbath: DEF > HP > Accuracy > Skill Haste. Isolde: Tank Fire. Garius: Tank/Healer DEF scaling. Sagomir: Tank Radiance backup."
    },
    {
      id: "tank-control",
      name: "Tank Control",
      description: "Frontline que depende de acertar debuffs (freeze, buff strip).",
      heroes: ["Vinyara"],
      stat_weights: { ATK: 1, "ATK%": 1, "Crit Rate": 1, "Crit Damage": 1, HP: 9, "HP%": 9, DEF: 8, "DEF%": 8, Accuracy: 10, Enlightenment: 1, Resistance: 3, "Skill Haste": 6, "ATK Speed": 1 },
      ideal_sets: ["tundra-tenacity", "puppeteers-inspiration"],
      notes: "Accuracy 220+ obrigatorio. Se debuffs missam, Vinyara contribui zero."
    },
    {
      id: "support-healer-hp",
      name: "Support Healer (HP)",
      description: "Healers cujo heal escala com Max HP e/ou Enlightenment.",
      heroes: ["Torrin", "Catherine", "Nathaniel", "Donella"],
      stat_weights: { ATK: 1, "ATK%": 1, "Crit Rate": 1, "Crit Damage": 1, HP: 10, "HP%": 10, DEF: 5, "DEF%": 5, Accuracy: 1, Enlightenment: 9, Resistance: 3, "Skill Haste": 8, "ATK Speed": 1 },
      ideal_sets: ["radiance-of-the-blue-oak", "brotherhood-spirit", "ancestral-protection"],
      notes: "Torrin: HP > Enlightenment > Skill Haste. Catherine: Enlightenment > HP > Skill Haste (2500%+ scaling)."
    },
    {
      id: "support-healer-atk",
      name: "Support Healer (ATK)",
      description: "Healer unico cujo heal escala com ATK. Precisa de Accuracy para debuffs.",
      heroes: ["Voresh"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 3, "Crit Damage": 2, HP: 5, "HP%": 5, DEF: 2, "DEF%": 2, Accuracy: 9, Enlightenment: 1, Resistance: 1, "Skill Haste": 6, "ATK Speed": 3 },
      ideal_sets: ["cyrils-whisper", "puppeteers-inspiration"],
      notes: "Passiva cura 70% ATK por hit. Mais ATK = mais heal. Accuracy 220+ para Buff Prohibition."
    },
    {
      id: "buffer-melee",
      name: "Buffer Melee",
      description: "Buffer melee cujo buff e derivative damage escalam com ATK.",
      heroes: ["Schaltar"],
      stat_weights: { ATK: 10, "ATK%": 10, "Crit Rate": 5, "Crit Damage": 3, HP: 7, "HP%": 7, DEF: 5, "DEF%": 5, Accuracy: 1, Enlightenment: 1, Resistance: 2, "Skill Haste": 4, "ATK Speed": 8 },
      ideal_sets: ["heart-of-the-gambler", "platinum-knight-quality"],
      notes: "ATK > ATK Speed > HP > Crit Rate. Derivative damage e Blessings of Thunder escalam com ATK."
    }
  ],

  // ==========================================================
  // LOADOUTS — Generated 2026-02-18
  // Methodology: score = sum(stat_value * weight) per profile.
  // Greedy allocation by priority: dps-crit > dps-skill > tank-def > tank-control > support-hp > support-atk > buffer-melee.
  // Set bonus priority: 3pc > two 2pc > one 2pc > no bonus.
  // Scores are raw (flat HP values inflate tank/support vs DPS — use for relative ranking within profile).
  // ==========================================================
  loadouts: [
    {
      profile: "dps-crit",
      name: "DPS Crit — Gambler 3pc + Cyril Gloves",
      heroes: ["Nastjenka", "Garett", "Sutha", "Durango", "Divine Ascetic", "Felicity", "Lorentheel", "Philto", "Tonalnan", "Alfie", "Lorarii"],
      pieces: {
        weapon: "w03",   // Heart of the Gambler | ATK335 + CritRate:7.7, ATK%:5.1
        armor:  "a03",   // Heart of the Gambler | DEF%:60 + ATK:102, ATK%:5.0
        helmet: "h03",   // Heart of the Gambler | HP:7710 + ATK%:12.0, Accuracy:24
        gloves: "g04"    // Cyril's Whisper       | CritRate:40 primary + ATK:69, ATK%:6.2, CritDmg:16.7
      },
      set_bonuses: [
        "heart-of-the-gambler (3pc): ATK+20%, ATK Speed+20%, 35% chance deal 130% ATK extra phys dmg"
      ],
      score: 21843,
      notes: "Gambler 3pc maximizes ATK and ATK Speed, ideal for physical crit burst. g04 adds CritRate:40 primary — massive crit stat for Nastjenka/Garett. g04 is Cyril set but provides no Cyril set bonus (only 1pc)."
    },
    {
      profile: "dps-skill",
      name: "DPS Skill — Cyril 3pc",
      heroes: ["Ladehlia", "Sintrellia", "Isitarian", "Hochadir", "Lossenia", "Auster", "Vicana", "Jathalea", "Errich", "Sigrid"],
      pieces: {
        weapon: "w10",   // Brotherhood Spirit  | ATK335 + CritRate:13.1, CritDmg:7.8, Accuracy:21
        armor:  "a04",   // Cyril's Whisper      | DEF%:60 + ATK%:18.0, Accuracy:23, CritDmg:7.8
        helmet: "h04",   // Cyril's Whisper      | HP:7710 + ATK%:20.0, Enlightenment:21
        gloves: "g05"    // Cyril's Whisper      | HP%:60 + CritDmg:25.0, DEF%:16.6
      },
      set_bonuses: [
        "cyrils-whisper (3pc): ATK+20%, Skill Haste+20, ignore 7% enemy DEF per debuff (max 21%)"
      ],
      score: 20097,
      notes: "Cyril 3pc is the gold standard for skill-based DPS — DEF penetration scales multiplicatively with debuffers like Lossenia/Ladehlia. a04+h04 stack ATK%:18+ATK%:20 = 38% ATK from secondaries alone. w10 provides excellent CritRate:13.1 and Accuracy for debuff landing."
    },
    {
      profile: "dps-crit",
      name: "DPS Crit #2 — Executioner 3pc",
      heroes: ["Nastjenka", "Garett", "Sutha", "Durango", "Divine Ascetic", "Felicity", "Lorentheel", "Philto", "Tonalnan", "Alfie", "Lorarii"],
      pieces: {
        weapon: "w04",   // Imperial Executioner | ATK335 + HP%:12.6, Enlightenment:27, Accuracy:22
        armor:  "a07",   // Imperial Executioner | HP%:60 + ATK%:16.8, CritRate:7.4
        helmet: "h05",   // Imperial Executioner | HP:7710 + ATK%:11.8, Accuracy:14
        gloves: "g13"    // Power of Tides       | ATK%:60 primary + CritRate:3.4, HP%:12.2
      },
      set_bonuses: [
        "imperial-executioner (3pc): ATK+20%, Crit Rate+10%, when crit dmg increases 16%"
      ],
      score: 26430,
      notes: "Executioner 3pc is the strongest crit loadout when 3pc is achievable — Crit Rate+10% and Crit Dmg+16% are huge multipliers. g13 contributes ATK%:60 primary (Power of Tides 1pc only, no set bonus) but the raw ATK% stat is top-tier. Higher raw score than loadout #1 due to Executioner set quality."
    },
    {
      profile: "tank-def",
      name: "Tank DEF — Blue Oak 2pc + Tundra 2pc",
      heroes: ["Eurion", "Frurbath", "Isolde", "Garius", "Sagomir"],
      pieces: {
        weapon: "w08",   // Radiance of Blue Oak | ATK335 + DEF%:19.0, Enlightenment:12, HP:1543
        armor:  "a11",   // Radiance of Blue Oak | HP:7710 primary + HP%:5.6, DEF:106, ATK%:5.1
        helmet: "h08",   // Tundra Tenacity      | HP:7710 primary + DEF%:17.7, Accuracy:27, CritRate:7.0
        gloves: "g08"    // Tundra Tenacity      | HP:7710 primary + DEF:130, Enlightenment:13
      },
      set_bonuses: [
        "radiance-of-the-blue-oak (2pc): DEF+20%, Skill Haste+20 (w08+a11)",
        "tundra-tenacity (2pc): HP+20%, Accuracy+40 (h08+g08)"
      ],
      score: 225843,
      notes: "Two 2pc bonuses: Blue Oak DEF+20%+SkillHaste+20 (Eurion ults more) + Tundra HP+20%+Accuracy+40. Stacking three HP:7710 pieces (a11, h08, g08) plus DEF%:19 on weapon and DEF%:17.7 on helmet = extreme survivability. Blue Oak 3pc heal mechanic would need a 3rd Blue Oak piece, but h08/g08 Tundra 2pc is more valuable."
    },
    {
      profile: "tank-control",
      name: "Tank Control — Tundra 3pc",
      heroes: ["Vinyara"],
      pieces: {
        weapon: "w07",   // Tundra Tenacity      | ATK335 + Accuracy:21, DEF:37, Resistance:32
        armor:  "a10",   // Tundra Tenacity      | DEF%:60 primary + Accuracy:12, Resistance:28, CritRate:15.6
        helmet: "h01",   // Platinum Knight      | HP:7710 + Accuracy:21, DEF:77, ATK%:12.4, HP%:12.5
        gloves: "g07"    // Tundra Tenacity      | HP%:60 primary + Enlightenment:27, Resistance:45
      },
      set_bonuses: [
        "tundra-tenacity (3pc): HP+20%, Accuracy+40, +1% ultimate energy on each hit taken (w07+a10+g07)"
      ],
      score: 79000,
      notes: "Tundra 3pc gives Accuracy+40 set bonus (critical for Vinyara control landing) + Ult energy regen per hit (more controls in longer fights). a10 DEF%:60 primary protects the controller. h01 (Platinum Knight) adds more Accuracy:21 and HP%:12.5 as off-set piece, keeping Tundra 3pc intact."
    },
    {
      profile: "support-hp",
      name: "Support Healer HP — Brotherhood 2pc",
      heroes: ["Torrin", "Catherine", "Nathaniel", "Donella"],
      pieces: {
        weapon: "w01",   // Rhapsodist's Calling | ATK335 + Enlightenment:30, HP:1524, HP%:12.9
        armor:  "a15",   // Ancestral Protection | HP%:60 primary + HP:2232, Accuracy:26, ATK%:6.2
        helmet: "h09",   // Brotherhood Spirit   | HP:7710 + HP%:11.5, DEF:99, Resistance:29
        gloves: "g09"    // Brotherhood Spirit   | ATK:335 primary + Accuracy:30, CritDmg:24.3, CritRate:4.1
      },
      set_bonuses: [
        "brotherhood-spirit (2pc): DEF+25% (h09+g09)"
      ],
      score: 117569,
      notes: "w01 is the best healer weapon in inventory — Enlightenment:30 boosts healing output, HP:1524+HP%:12.9 adds massive HP. a15 HP%:60 primary = largest HP armor. h09 stacks more HP+HP%. Brotherhood 2pc DEF+25% adds survivability. No ideal 3pc available for healer profile with remaining pieces, but individual stat quality is excellent."
    },
    {
      profile: "support-atk",
      name: "Support ATK — Holy Hunter 2pc + Power of Tides 2pc",
      heroes: ["Voresh"],
      pieces: {
        weapon: "w13",   // Power of Tides       | ATK335 + Accuracy:46, CritDmg:8.2, Resistance:24
        armor:  "a19",   // Holy Hunter          | ATK%:60 primary + Accuracy:24, CritRate:3.1, HP:2441
        helmet: "h12",   // Power of Tides       | HP:7710 + ATK%:17.8, Accuracy:12, CritDmg:7.7, Enlightenment:42
        gloves: "g10"    // Holy Hunter          | ATK%:60 primary + CritRate:12.5, Accuracy:21, HP%:5.1
      },
      set_bonuses: [
        "holy-hunter (2pc): Accuracy+40, Skill Haste+20 (a19+g10)",
        "power-of-tides (2pc): Enlightenment+30, Resistance+60 (w13+h12)"
      ],
      score: 56646,
      notes: "Two synergistic 2pc bonuses for Voresh: Holy Hunter Accuracy+40+SkillHaste+20 (debuffs land, more ults) + Power of Tides Enlightenment+30+Resistance+60. w13 has Accuracy:46 secondary — highest Accuracy weapon in inventory, critical for Voresh ATK debuffs. a19+g10 both have ATK%:60 primary = massive offensive scaling. h12 Enlightenment:42 secondary is the highest in inventory."
    },

    // ---- SECONDARY LOADOUTS (Goblin Farm — 5 DPS) ----
    // Peças spare com melhores stats ofensivos. Sem set bonus ideal, mas stats individuais fortes.
    {
      profile: "dps-crit",
      name: "DPS Crit #3 — Spare (Goblin)",
      secondary: true,
      heroes: ["Nastjenka", "Garett", "Sutha", "Durango", "Divine Ascetic", "Felicity", "Lorentheel", "Philto", "Tonalnan", "Alfie", "Lorarii"],
      pieces: {
        weapon: "w09",   // Ancestral Protection | ATK335 + CritRate:12.0, CritDmg:16.4
        armor:  "a05",   // Cyril's Whisper      | Resistance:120 + CritDmg:30.8, ATK:64, ATK%:5.1
        helmet: "h07",   // Revenge of Fallen    | HP:7710 + CritRate:13.7, CritDmg:8.2, Enlightenment:23
        gloves: "g02"    // Heart of the Gambler | DEF:335 + CritRate:7.4, ATK:62, HP:1763
      },
      set_bonuses: [],
      score: 0,
      notes: "Sem set bonus. Stats individuais compensam: CritRate 12.0+13.7+7.4 = 33.1% e CritDmg 16.4+30.8+8.2 = 55.4% só de secundários. a05 tem o maior CritDmg de qualquer armor no inventário."
    },
    {
      profile: "dps-skill",
      name: "DPS Skill #2 — Rhapsodist 2pc (Goblin)",
      secondary: true,
      heroes: ["Ladehlia", "Sintrellia", "Isitarian", "Hochadir", "Lossenia", "Auster", "Vicana", "Jathalea", "Errich", "Sigrid"],
      pieces: {
        weapon: "w02",   // Rhapsodist's Calling | ATK335 + CritRate:4.7, HP%:13.4, Enlightenment:24
        armor:  "a12",   // Radiance Blue Oak    | ATK%:60 primary + Enlightenment:27, HP:1504
        helmet: "h13",   // Power of Tides       | HP:7710 + ATK%:11.0, CritDmg:16.2
        gloves: "g01"    // Rhapsodist's Calling | ATK:335 + Enlightenment:40, ATK%:5.2, DEF%:16.9
      },
      set_bonuses: [
        "rhapsodists-calling (2pc): ATK+20%, Accuracy+40 (w02+g01)"
      ],
      score: 0,
      notes: "Rhapsodist 2pc dá ATK+20% e Accuracy+40. a12 com ATK%:60 primary. Loadout secundário para Goblin farm quando precisa de 5 DPS simultâneos."
    }
  ],

  // ==========================================================
  // SPARE PIECES — lv20 pieces not allocated to any loadout
  // ==========================================================
  spare_pieces: [
    // WEAPONS
    { id: "w05", set: "revenge-of-the-fallen", note: "HP%:16.7, ATK%:5.2 — support utility but set not ideal" },
    { id: "w11", set: "holy-hunter", note: "HP%:17.7, Resistance:24 — niche" },
    { id: "w12", set: "puppeteers-inspiration", note: "DEF:168 secondary — excellent for Tank Control or Puppeteer build" },
    // ARMORS
    { id: "a01", set: "platinum-knight-quality", note: "DEF:335 primary, ATK%:12.2, HP%:12.9 — strong tank armor" },
    { id: "a06", set: "cyrils-whisper", note: "HP:7710 primary, CritDmg:22.6 — strong for dps if Cyril 3pc not needed" },
    { id: "a08", set: "revenge-of-the-fallen", note: "Enlightenment:120 primary — niche for enlightenment builds" },
    { id: "a14", set: "ancestral-protection", note: "DEF%:60, HP%:19.9 — top HP% secondary for tank" },
    { id: "a16", set: "ancestral-protection", note: "DEF%:60, CritRate:12.5 — unusual combo" },
    { id: "a17", set: "ancestral-protection", note: "DEF:335 primary, CritDmg:32.2 — highest CritDmg secondary in inventory" },
    { id: "a20", set: "puppeteers-inspiration", note: "Accuracy:96 primary — extreme Accuracy; pair with w12 for Puppeteer 2pc" },
    // HELMETS
    { id: "h02", set: "rhapsodists-calling", note: "ATK%:6.7, DEF%:18.2 — decent mixed stats" },
    { id: "h06", set: "imperial-executioner", note: "DEF:108, HP%:11.7 — good tank helmet" },
    // GLOVES
    { id: "g03", set: "heart-of-the-gambler", note: "DEF:142, CritDmg:8.9, CritRate:6.8 — low-stat backup" },
    { id: "g06", set: "imperial-executioner", note: "DEF:96, HP%:11.6, CritRate:4.7 — spare" }
  ],

  // ==========================================================
  // UPGRADE PRIORITY — To be calculated in Task 3
  // ==========================================================
  upgrade_priority: [],

  // ==========================================================
  // GEAR PLANS — 23 loadouts individuais (10/Mar/2026)
  // Baseado em docs/gear-plans.md
  // Gear swap é GRÁTIS — heróis compartilham peças entre times
  // ==========================================================
  gear_plans: [
    // === DPS CRIT (5) ===
    { name: "DPS Crit 1", profile: "dps-crit", hero: "Nastjenka", freq: 9,
      pieces: ["IMG_2858 ⭐ Fearless", "IMG_2865 Impregnable", "a07 Executioner", "g04 Cyril"],
      set_bonus: null, mythic: "Fearless: +16% dmg vs >50% HP",
      totals: "CritR 67.2% · CritD 67%", sharing: [] },
    { name: "DPS Crit 2", profile: "dps-crit", hero: "Divine Ascetic", freq: 5,
      pieces: ["w09 Ancestral", "h07 Revenge", "a05 Cyril", "IMG_3070 Cyril"],
      set_bonus: "Cyril 2pc", mythic: null,
      totals: "CritR 65.7% · CritD 55.4%", sharing: [] },
    { name: "DPS Crit 3", profile: "dps-crit", hero: "Sutha", freq: 3,
      pieces: ["IMG_2843 ⭐ Magic Crystal", "h05 Executioner", "a06 Cyril", "IMG_2977 Tundra"],
      set_bonus: null, mythic: "Magic Crystal: +ATK = 300% ACC",
      totals: "ATK% 46.6% · CritD 53.5%", sharing: [] },
    { name: "DPS Crit 4", profile: "dps-crit", hero: "Ladehlia", freq: 4,
      pieces: ["w10 Brotherhood", "h04 Cyril", "a04 Cyril", "IMG_2935 Cyril"],
      set_bonus: "Cyril 3pc", mythic: null,
      totals: "ATK% 63.8%", sharing: [] },
    { name: "DPS Crit 5", profile: "dps-crit", hero: "Huberg", freq: 1,
      pieces: ["IMG_2863 ⭐ Sky Code", "IMG_2860 ⭐ Chaos Symb", "a01 Platinum", "IMG_3074 Executioner"],
      set_bonus: null, mythic: "Sky Code: Shield → dispel 1 debuff",
      totals: "CritD 87.8%", sharing: ["IMG_2860 → Lothair"] },
    // === DPS ATK (2) ===
    { name: "DPS ATK 1", profile: "dps-atk", hero: "Garett", freq: 4,
      pieces: ["w03 Gambler", "h03 Gambler", "a03 Gambler", "g02 Gambler"],
      set_bonus: "Gambler 3pc", mythic: null,
      totals: "ATK+20% · ATK Spd+20%", sharing: [] },
    { name: "DPS ATK 2", profile: "dps-atk", hero: "Sintrellia", freq: 3,
      pieces: ["w02 Rhapsodist", "h02 Rhapsodist", "a12 Blue Oak", "g01 Rhapsodist"],
      set_bonus: "Rhapsodist 3pc", mythic: null,
      totals: "ATK% 91.9%", sharing: ["w02 → Catherine"] },
    // === ATK+ACC (4) ===
    { name: "ATK+ACC 1", profile: "atk-acc", hero: "Lossenia", freq: 4,
      pieces: ["IMG_2862 ⭐ Chaos Symb", "IMG_2842 ⭐ Magic Crystal", "a19 Holy Hunter", "g10 Holy Hunter"],
      set_bonus: "Holy Hunter 2pc", mythic: "Chaos Symb + Magic Crystal",
      totals: "ACC 120 · +18% ATK", sharing: [] },
    { name: "ATK+ACC 2", profile: "atk-acc", hero: "Voresh", freq: 4,
      pieces: ["IMG_2861 ⭐ Chaos Symb", "IMG_2859 ⭐ Chaos Symb", "IMG_2958 ⭐ Schadenfreude", "IMG_2966 Cyril"],
      set_bonus: "Chaos Symb 2pc", mythic: "Chaos Symb + Schadenfreude",
      totals: "ACC 82", sharing: ["IMG_2861 → Tamar, Lucien"] },
    { name: "ATK+ACC 3", profile: "atk-acc", hero: "Auster", freq: 3,
      pieces: ["w04 Executioner", "h13 Tides", "IMG_3229 ⭐ Iron Bastion", "IMG_2942 Tundra"],
      set_bonus: null, mythic: "Iron Bastion: Crit recv → -30% CritR",
      totals: "ACC 118 · ATK% 53.5%", sharing: ["w04 → Garius", "h13 → Catherine"] },
    { name: "ATK+ACC 4", profile: "atk-acc", hero: "Hochadir", freq: 3,
      pieces: ["w13 Tides", "IMG_2841 ⭐ Magic Crystal", "a20 Puppeteer", "g09 Brotherhood"],
      set_bonus: null, mythic: "Magic Crystal: +516 ATK flat",
      totals: "ACC 172", sharing: ["w13+a20 → Eches", "IMG_2841 → Flora"] },
    // === ATK+ENLIGHT (2) ===
    { name: "ATK+Enl 1", profile: "atk-enlight", hero: "Flora", freq: 1,
      pieces: ["IMG_2867 ⭐ Impregnable", "IMG_2841 ⭐ Magic Crystal", "IMG_3224 ⭐ Death Record", "IMG_3291 ⭐ Death Record"],
      set_bonus: "Death Record 2pc", mythic: "Death Record + Impregnable",
      totals: "Enlight 138 · +20% Deriv", sharing: ["IMG_2841 → Hochadir"] },
    { name: "ATK+Enl 2", profile: "atk-enlight", hero: "Lothair", freq: 1,
      pieces: ["w05 Revenge", "IMG_2860 ⭐ Chaos Symb", "a08 Revenge", "IMG_2955 ⭐ Death Record"],
      set_bonus: "Revenge 2pc", mythic: "Death Record: +20% Derivative",
      totals: "Enlight 159", sharing: ["IMG_2860 → Huberg"] },
    // === ACC (2) ===
    { name: "ACC 1", profile: "acc", hero: "Tamar", freq: 2,
      pieces: ["IMG_2861 ⭐ Chaos Symb", "h15 Brotherhood ⚠lv0", "a16 Ancestral", "IMG_2956 ⭐ Iron Bastion"],
      set_bonus: null, mythic: "Iron Bastion + Chaos Symb",
      totals: "ACC 59 (+artefatos/afinidade)", sharing: ["IMG_2861 → Voresh, Lucien"] },
    { name: "ACC 2", profile: "acc", hero: "Eches", freq: 2,
      pieces: ["w13 Tides", "h10 Brotherhood ⚠lv0", "a20 Puppeteer", "g03 Gambler"],
      set_bonus: null, mythic: null,
      totals: "ACC 142", sharing: ["w13+a20 → Hochadir"] },
    // === ENLIGHT (2) ===
    { name: "Enlight 1", profile: "enlight", hero: "Torrin", freq: 10,
      pieces: ["w01 Rhapsodist", "h12 Tides", "IMG_3052 Tides", "IMG_2891 ⭐ Ancestral Guidance"],
      set_bonus: "Tides 2pc", mythic: "Ancestral Guidance: 50% Lifesteal",
      totals: "Enlight 264", sharing: [] },
    { name: "Enlight 2", profile: "enlight", hero: "Catherine", freq: 4,
      pieces: ["w02 Rhapsodist", "h13 Tides", "IMG_3035 Platinum", "g13 Tides"],
      set_bonus: "Tides 2pc", mythic: null,
      totals: "Enlight 174", sharing: ["w02 → Sintrellia", "h13 → Auster"] },
    // === HP+ACC (2) ===
    { name: "HP+ACC 1", profile: "hp-acc", hero: "Eurion", freq: 14,
      pieces: ["w08 Blue Oak", "h08 Tundra", "a11 Blue Oak", "g08 Tundra"],
      set_bonus: "Blue Oak 2pc + Tundra 2pc", mythic: null,
      totals: "DEF% 36.7% · ACC 67", sharing: [] },
    { name: "HP+ACC 2", profile: "hp-acc", hero: "Lucien", freq: 2,
      pieces: ["IMG_2861 ⭐ Chaos Symb", "h11 Brotherhood ⚠lv0", "a17 Ancestral", "IMG_2945 Blue Oak"],
      set_bonus: null, mythic: "Chaos Symb: +6% ATK/School",
      totals: "HP stacking · ACC 58", sharing: ["IMG_2861 → Voresh, Tamar"] },
    // === HP+ATK+ACC (1) ===
    { name: "HP+ATK+ACC", profile: "hp-atk-acc", hero: "Vinyara", freq: 8,
      pieces: ["w07 Tundra", "h01 Platinum", "IMG_2923 ⭐ Schadenfreude", "g07 Tundra"],
      set_bonus: "Tundra 2pc", mythic: "Schadenfreude: 2% HP heal/debuff",
      totals: "ACC 125", sharing: [] },
    // === HP+ENLIGHT (1) ===
    { name: "HP+Enl", profile: "hp-enlight", hero: "Felosia", freq: 3,
      pieces: ["w12 Puppeteer", "h09 Brotherhood", "a15 Ancestral", "g05 Cyril"],
      set_bonus: null, mythic: null,
      totals: "HP massivo (shields)", sharing: [] },
    // === HP+DEF+ENLIGHT (1) ===
    { name: "HP+DEF+Enl", profile: "hp-def-enlight", hero: "Acilia", freq: 6,
      pieces: ["w11 Holy Hunter", "IMG_2866 ⭐ Impregnable", "a14 Ancestral", "IMG_2905 Ancestral"],
      set_bonus: "Ancestral 2pc", mythic: "Impregnable: Buffs indispellable",
      totals: "HP% 72.7%", sharing: [] },
    // === DEF (1) ===
    { name: "DEF", profile: "def", hero: "Garius", freq: 4,
      pieces: ["w04 Executioner", "h06 Executioner", "a10 Tundra", "g06 Executioner"],
      set_bonus: "Executioner 3pc", mythic: null,
      totals: "DEF% 72.9% + 204 flat", sharing: ["w04 → Auster"] }
  ]
};
