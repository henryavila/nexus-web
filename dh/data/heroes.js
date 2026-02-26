// heroes.js — 297 heroes database (extracted from dragonheir.info)
window.DATA_HEROES = [
  {
    "slug": "majtan",
    "name": "Majtan",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Blossom in Sand",
        "description": "Gains 20% Attack Up for 10.0s, then deals [+720%Attack]fire damage to surrounding enemies. If an enemy hero is defeated, restores 75.0 Ultimate Energy. (This effect can only trigger once per skill cast.)"
      },
      "battle": {
        "name": "Visage in Ember",
        "description": "Recovers [+20%Max HP] and gains Blazing Light matching the highest number of Burn stacks on an enemy. Then deals [+450%Attack]fire damage to the enemy with the most Burn stacks."
      },
      "passive": {
        "name": "Fire in Stone",
        "description": "Attacks all enemies 2 times at the start of battle, each time dealing [+100%Attack]fire damage and inflicting 100% Ignite. Basic attacks inflict an additional 20% Ignite. This Ignite effect is converted into Burn, ignoring the target's Resistance. Each conversion grants the hero 3 stack(s) of Blazing Light. When any target's Burn expires or is dispelled, the hero gains 1 stack(s) of Blazing Light. Each stack of Blazing Light allows the hero's skills to ignore 2% of the target's Defense and grants 1% Damage Reduction to the hero."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22460
  },
  {
    "slug": "shahla",
    "name": "Shahla",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s4",
    "type": "Range",
    "race": "Tigerfolk",
    "career": "Scholar",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Echoing Prophecy",
        "description": "Gains 20 Aura Energy and unleashes an energy wave that can bounce between enemies up to 4 times, dealing [+300%Attack][+10%Max HP]radiant damage with each bounce and granting 5.0 Ultimate Energy to 1 Aura ally with the lowest Ultimate Energy."
      },
      "battle": {
        "name": "Boding of Evil",
        "description": "Gains 15 Aura Energy and deals [+300%Attack][+10%Max HP]radiant damage to the target and surrounding enemies. If the hero's Aura Energy is ≥50, consumes 30 Aura Energy and gains an additional 15.0 Ultimate Energy."
      },
      "passive": {
        "name": "Soothing Fragrance",
        "description": "When an Aura ally consumes Aura Energy, the hero and the Aura ally with the highest Attack gain 1 stack(s) of Crit Damage Up, up to 20 stacks."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22130
  },
  {
    "slug": "halramar",
    "name": "Halramar",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Tigerfolk",
    "career": "Priest",
    "captain": "Increases all allies' Resistance by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Darkmane's Regards",
        "description": "Deals [+700%Attack]poison damage to all enemies, with a 75.0% chance to inflict Recharging Speed Penalty for 5.0s on them, and a 75.0% chance to inflict Oriented Charm for 5.0s. At the same time, reduces 25.0 of the targets' Ultimate Energy."
      },
      "battle": {
        "name": "Gazing Overcast",
        "description": "Commands Dark Cloud to deal [+300%Attack]poison damage to the enemy with the highest Attack, with a 75.0% chance to inflict Attack Penalty II on them for 5.0s and a 75.0% chance to inflict Oriented Taunt on them for 5.0s."
      },
      "passive": {
        "name": "Lingering Overcast",
        "description": "As the battle starts, summons Dark Cloud. Halramar cannot gain extra Attack Speed, but Dark Cloud will launch additional attacks following Halramar's basic attacks. Dark Cloud has a 10% chance to inflict （已忽略）#精灵术士小龙自闭buff on enemies for s. The chance of inflicting （已忽略）#精灵术士小龙自闭buff by Dark Cloud depends on Halramar's Resistance. Every 10 Resistance increases the chance by 1%. When Halramar is on the battlefield, enemies' Ultimate Energy obtained through skills and Artifacts will be reduced by 80%."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "Resistance +50",
      "Summons 2 Dark Clouds. When performing a basic attack, the second Dark Cloud attacks another random target."
    ],
    "id": 21370
  },
  {
    "slug": "fathomdown",
    "name": "Fathomdown",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Merfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 30% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Thunderbolt",
        "description": "Casts the spell for 8s. Summons Lightning Bolts to strike random enemies every 1s, dealing [+150%Attack]lightning damage to the target and all surrounding enemies, with a 75.0% chance of inflicting Attack Penalty II on them for 5.0s. Reduces their Ultimate Energy by 5.0 and inflicts Recharging Speed Penalty for 5.0s. The hit enemies with ≥50% Ultimate Energy lose 10% more Ultimate Energy."
      },
      "battle": {
        "name": "Raging Thunder",
        "description": "Gains Debuff Immunity for 5.0s, dealing [+360%Attack]lightning damage to enemies within range, with a 100.0% chance of inflicting Knocked Up and a 75.0% chance of inflicting 3.0-sec Stunned. When successfully inflicting Stunned, also inflicts Resistance Penalty on the target for 10.0s and dispels all their buffs."
      },
      "passive": {
        "name": "Unshakable",
        "description": "When taking damage, there is a 30% chance of reducing the damage taken by 50% and healing the hero for [+5%Max HP]. This effect can trigger once every 3.0s. When an ally takes fatal damage for the first time, they become immune to death for this instance, and Fathomdown dispels all the negative effects on them and heals them for [+30%Max HP] of his Max HP. This effect can trigger once every 20s."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "Accuracy +50",
      "When the ultimate skill hits, enemies with less than 50% Ultimate Energy will also have their Ultimate Energy reduced. Ultimate Energy reduction is increased to 15%."
    ],
    "id": 22780
  },
  {
    "slug": "phaessa",
    "name": "Phaessa",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "Priest",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Sunfire's Glare",
        "description": "Deals [+720%Attack]radiant damage to all enemies, with a 50.0% chance of inflicting Accuracy Penalty II and Recharging Speed Penalty for 10.0s. Then grants Debuff Immunity to all allies for 10.0s."
      },
      "battle": {
        "name": "Golden Prayer",
        "description": "Heals 3 allies with the lowest HP for [+10%Target's Max HP][+1000%Enlightenment], dispelling negative effects and granting Damage Delay for 5.0s. For each negative effect successfully dispelled, the hero's battle skill and ultimate skill recharge for an addition 1s."
      },
      "passive": {
        "name": "Cataclysm",
        "description": "At the start of battle, there is a 100.0% chance of inflicting Recharging Speed Penalty and Accuracy Penalty II on all enemies for 5.0s. Whenever an enemy loses a negative effect, reduces their Ultimate Energy by 5.0. Afterward, increases the success rate of all allies to apply any effect by 20%, while reduces the success rate of all enemies to apply any effect by 20%. The base chance change effect persists after the hero's death."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "The ultimate skill ignores 20% of the target's Resistance.",
      "Skill Haste +30",
      "Accuracy +50",
      "The battle skill can apply to 4 target(s)."
    ],
    "id": 21960
  },
  {
    "slug": "orfenna",
    "name": "Orfenna",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s4",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "Marksman",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Hyper Overdrive",
        "description": "Enters the Overload state for 15s and gains Attack Speed Up II for 15.0s. While in the Overload state, a basic attack shoots 2 extra bullets to deal [+300%Attack]lightning damage, with each bullet prioritizing a different target."
      },
      "battle": {
        "name": "Power Experience",
        "description": "Attacks the enemy 3 times, each dealing [+175%Attack]lightning damage. The third attack has a 75.0% chance of inflicting Electrocuted for 10.0s."
      },
      "passive": {
        "name": "Galvanic Contact",
        "description": "When dealing damage to enemies with basic attacks, there is a 75.0% chance of inflicting Electrocuted on the target."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Accuracy +50",
      "ATK% +30%",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 22370
  },
  {
    "slug": "irmoush",
    "name": "Irmoush",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Undead",
    "career": "Warrior",
    "captain": "Increases all allies' HP by 30% in Grand Gladiator Arena.",
    "skills": {
      "ultimate": {
        "name": "Thundersurge Cleave",
        "description": "Switches to Greatsword Form, leaps to a designated target, and slashes all enemies to deal [+750%Attack]lightning damage 2 times. There is a 100.0% chance of inflicting Silence for 5.0s, and a 100.0% chance of inflicting Attack Penalty II for 10.0s. Leaves Dissipated Energy at the jump's start point for 10s, healing allies for  [+100%Defense]HP every 2s."
      },
      "battle": {
        "name": "Indomitable",
        "description": "Grants all allies Defense Up II and Debuff Immunity for 5.0s, and dispels all their negative effects."
      },
      "passive": {
        "name": "Bow of Sundering",
        "description": "When transforming into Bow Form, gains Scatter and Spiritual Suppression for 10.0s."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Increases the duration of buffs granted with the battle skill by s.",
      "Skill Haste +30",
      "Accuracy +50",
      "In melee form, reduces all damage taken by 25%."
    ],
    "id": 24290
  },
  {
    "slug": "astaion",
    "name": "Astaion",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Sun Eclipser",
        "description": "Summons a domain that lasts for 10s at the target's location, dealing [+60%Attack]Necrotic damage to enemies within range every 1s. Heals all allies by [+2%Max HP] simultaneously every second. When enemies within range gain a buff, there is a 40% chance to replace the buff with a random debuff."
      },
      "battle": {
        "name": "Sun Shader",
        "description": "Deals [+300%Attack]Necrotic damage to enemies within range with a 50.0% chance of inflicting Stunned for 3.0s. Also grants Crit-hit Resistance for 5.0s to the ally with the highest Attack. For each enemy hit, the hero gains 5.0 Ultimate Energy."
      },
      "passive": {
        "name": "Sun Pursuer",
        "description": "At the start of battle, the hero has a 100.0% chance of inflicting Silence on the nearest enemy for 10.0s, and stealing 30% of their HP and 30% of their Defense. 50% of the stolen attributes will be transferred to the ally with the highest Attack. HP stolen will not exceed 100% of the hero's Max HP. Defense stolen will not exceed 30% of the hero's Defense."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s.",
      "Skill Haste +30",
      "Accuracy +50",
      "The range of the ultimate skill's domain becomes a 5x5 rectangle."
    ],
    "id": 22470
  },
  {
    "slug": "yfeir",
    "name": "Yfeir",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "Warrior",
    "captain": "Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Witness True Power!",
        "description": "Leaps toward an enemy, dealing [+800%Attack]radiant damage to the target and surrounding enemies, with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Simultaneously, the hero and their clones gain Forest Rune for 10.0s."
      },
      "battle": {
        "name": "Omnipresent Me",
        "description": "The hero and their clones simultaneously unleash battle blades at the enemy with the highest Attack, dealing [+400%Attack]radiant damage and dispelling 1 buff. Then, summons 1 clone around the target. Upon deployment, the clone has a 100.0% chance of inflicting Taunt on all enemies for 5.0s."
      },
      "passive": {
        "name": "See Me Not",
        "description": "At the start of battle, enters an undispellable Invisibility for 3.0s. For every 15 times of damage dealt or taken by the hero and their clones, they will enter an undispellable Invisibility for 3.0s. The hero and their clones have Homeland's Blessing. At the start of battle, one  can be deployed. Up to 5 clones can exist simultaneously."
      }
    },
    "inspiration": [
      "For each clone summoned by the hero on the battlefield, the hero's damage taken is reduced by 4%.",
      "When the hero or their clones become Invisible, the ally with the lowest HP on the field also becomes Invisible for 3s. (The effect does not trigger if only the hero and clones are on the field.)",
      "Duration of buffs and debuffs inflicted by Ultimate Skill is increased by 30%.",
      "HP% +30%",
      "Clones inherit 60% of the hero's attributes."
    ],
    "id": 22710
  },
  {
    "slug": "fredegonda",
    "name": "Fredegonda",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s4",
    "type": "Range",
    "race": "Birdfolk",
    "career": "Planeswalker",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Howling Snowstorm",
        "description": "Deals [+720%Attack]cold damage to all enemies based on the Ice Crystal count. Each stack of Ice Crystal grants a 20% damage bonus. Also grants all Ice Blast ally heroes Howling Blizzard for 10.0s."
      },
      "battle": {
        "name": "Rampant Icicles",
        "description": "Launches 3 frost projectiles at a random enemy, dealing [+400%Attack]cold damage. For each Ice Crystal on the hero at the time of casting, an additional frost projectile is launched. Triggering additional frost projectile costs a fixed number of 2 Ice Crystals."
      },
      "passive": {
        "name": "Flash Storm",
        "description": "Marks the first Ice Blast ally in front. When they consume Ice Crystal, the hero replenishes the consumed amount for them. When the hero consumes Ice Crystal, a pursuit attack is launched to deal [+400%Attack]cold damage. When the hero gains Ice Crystal, gains 1 stack of Ice Feather for 10.0s at the same time."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "The Crit Rate and Crit Damage bonus from Howling Blizzard is increased to 50%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "（已发包）Howling Blizzard额外附加35%战技释放速度增加。"
    ],
    "id": 23390
  },
  {
    "slug": "alaura",
    "name": "Alaura",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s4",
    "type": "Range",
    "race": "Fey",
    "career": "Bard",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Summer Night's Ode",
        "description": "Unleashes a sonic wave that deals 3 instances of [+100%Attack]Derivative to all enemies and inflicts Sweet Timbre for 10.0s. Each time an enemy affected by Sweet Timbre is hit by a Lightning Chain/Lightning Bolt, the hero deals an additional [+50%Attack]Derivative and inflicts 1 stack of Oscillation for 10.0s."
      },
      "battle": {
        "name": "Dual Melody",
        "description": "Unleashes 1 Lightning Chain that attacks enemies."
      },
      "passive": {
        "name": "Leaping Notes",
        "description": "Gains 1 stack of Spark each time the hero deals damage. At 200 stacks of Spark, immediately unleashes Variations for 10.0s. While Variations is active, the chain count of ally Lightning Chains is increased by 1. Additionally, damage from Lightning Chains/Lightning Bolts is increased by 10% (each Variations unleashed afterwards further increases the damage by 8%, up to 5 stacks)."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Variations increases the chain count of Lightning Chains by 1.",
      "Enlightenment +60",
      "ATK% +30%",
      "Increases the max stack count of Oscillation to 8 stacks."
    ],
    "id": 23780
  },
  {
    "slug": "miro",
    "name": "Miro",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s4",
    "type": "Melee",
    "race": "Rural Halfling",
    "career": "Guard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Treasure! Mine It!",
        "description": "Deals [+900%Attack]cold damage to the enemy and grants Map Marker to the ally with the highest Attack for 12.0s. Gains 1 stack(s) of Ice Crystal."
      },
      "battle": {
        "name": "Treasure! Mark It!",
        "description": "Deals [+450%Attack]cold damage to the enemy and inflicts Map Pin on them."
      },
      "passive": {
        "name": "Guidance of Treasure Map",
        "description": "If the hero possesses Ice Crystal after casting the battle skill, consumes 1 stack of Ice Crystal and casts the battle skill again. When an ally casts a battle skill by consuming Ice Crystal, inflicts Map Pin on the enemy."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Skill Haste +30",
      "ATK% +30%",
      "Has a 35% chance to get immune to the Control to be inflicted."
    ],
    "id": 22490
  },
  {
    "slug": "gaiolere",
    "name": "Gaiolere",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s4",
    "type": "Range",
    "race": "Undead",
    "career": "Summoner",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Double Taboo",
        "description": "Duplicates an ally undead creature, which then gains 50.0 Ultimate Energy."
      },
      "battle": {
        "name": "Undead Thrall",
        "description": "Summons a skeleton which lasts for 20.0s."
      },
      "passive": {
        "name": "Darkness Bestowal",
        "description": "When an ally summons an undead creature, makes this summoned unit deal [+40%Attack]Derivative 7 times to nearby enemies within 5.0s."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "When granting a buff, there is a 70% chance of extending its duration by 30%.",
      "Enlightenment +60",
      "ATK% +30%",
      "Buffs granted with the ultimate skill cannot be dispelled."
    ],
    "id": 20350
  },
  {
    "slug": "calavera",
    "name": "Calavera",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Undead",
    "career": "Deathbringer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Love Versus Hatred",
        "description": "Heals all allies by [+400%Defense] and grants them Defense Up II for 10.0s. Illusion spellcasting deals [+400%Attack]poison damage to all enemies, with a 75.0% chance to inflict Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Pas de Deux",
        "description": "Dispels 1 debuff from each nearby ally and grants Recovery Over Time to them for 5.0s. Illusion spellcasting has a 75% chance to dispel 1 buff from each nearby enemy, with a 100.0% to inflict Recovery Over Time on them for 5.0s."
      },
      "passive": {
        "name": "Mystery of Love",
        "description": "When casting a skill, a temporary illusion is briefly generated at the hero's location. This illusion will follow the hero as they cast and produce additional effects."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When healing an ally with less than 50% HP, grants 1 stack of Recovery Over Time for 8.0s. This skill only takes effect once during a period.",
      "Skill Haste +30",
      "HP% +30%",
      "Has a 35% chance to get immune to the Control to be inflicted."
    ],
    "id": 22680
  },
  {
    "slug": "paixton",
    "name": "Paixton",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Enlightenment by 60.0.",
    "skills": {
      "ultimate": {
        "name": "Demon Flame",
        "description": "Attacks all enemies 3 times, each time dealing [+100%Attack]fire damage and inflicting 20% Ignite. Enemies with Burn take an additional [+180%Attack]Derivative (damage increases by 10% for each stack of Burn they have). Each time the field effect applied by the hero's Morale is advanced, it will enable this skill to perform 1 additional global attack."
      },
      "battle": {
        "name": "Burning to Ashes",
        "description": "Deals [+300%Attack][+3000%Enlightenment]fire damage to surrounding enemies. Hitting an enemy with Burn reduces this skill's recharge time by 50%."
      },
      "passive": {
        "name": "War Fanatic",
        "description": "Each time any target is inflicted with Burn, the hero gains 1 stack of Morale. When the hero's Morale reaches 20 stacks, grants Scorching to all Burn allies. Scorching will be advanced to Molten Armor and Ashen Blight when the hero's Morale reaches 50 and 100 stacks, respectively. When Paixton is deployed, the stack limit of the team's Burn inflicted is increased to 20."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "Seared grants 25% Attack Up. Molten Armor grants 25% Defense Penetration.",
      "Enlightenment +60",
      "ATK% +30%",
      "The ultimate skill delivers 1 additional hit."
    ],
    "id": 20820
  },
  {
    "slug": "maashtur",
    "name": "Maashtur",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "Guard",
    "captain": "Increases all allies' Max HP by 30% in Grand Gladiator Arena.",
    "skills": {
      "ultimate": {
        "name": "Edge's Regards",
        "description": "Attacks an enemy 3 times, each dealing [+200%Attack][+4%Max HP]lightning damage with a 75.0% chance of inflicting Attack Penalty II, Accuracy Penalty II, and Recharging Speed Penalty for 10.0s in sequence. If the hero's Max HP is higher than the target's, the states inflicted by this skill cannot be resisted. Then, grants a number of random buffs to all ally heroes equal to the number of debuffs on the target (up to 5 buffs at a time) for 10.0s. Random buffs include: 20% Attack Up, Defense Up II, Resistance Up II, Accuracy Up II, and Recovery Over Time."
      },
      "battle": {
        "name": "River God's Verdict",
        "description": "Throws a flying shield at the enemy with the highest Ultimate Energy, attacking and ricocheting to up to 3 target(s), dealing [+240%Attack][+8%Max HP]lightning damage and reducing the target's 20.0 Ultimate Energy. If the target's Ultimate Energy remains higher than 50% after the reduction, has a(n) 100.0% chance to inflict Stunned for 5.0s. Afterwards, grants all allied heroes a [+5%Max HP] shield for 10.0s. For each successful Ultimate Energy reduction, the granted shield value increases by 50%."
      },
      "passive": {
        "name": "Majesty",
        "description": "At the start of battle, grants Great River's Favor to the ally with the highest Attack. If the target dies, redirects to the next ally with the highest Attack. When any target on the battlefield loses a buff or shield, heals the hero and the ally with the lowest HP for [+10%Max HP]. (This effect can trigger once every 3.0s.)"
      }
    },
    "inspiration": [
      "When any target on the battlefield loses a buff or shield, the passive skill heals all allies.",
      "Battle skill will inflict Stunned on the target regardless the 50% Ultimate Energy prerequisite.",
      "The damage dealt by the hero and allies marked with Great River's Favor is increased by 15%, and damage taken is reduced by 15%.",
      "Increases the duration of debuffs inflicted by the ultimate skill by 30%.",
      "The ultimate skill inflicts debuffs on all enemies."
    ],
    "id": 20620
  },
  {
    "slug": "feenja",
    "name": "Feenja",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Range",
    "race": "Undead",
    "career": "Wizard",
    "captain": "Increases all allies' Enlightenment by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Mourning Matrimony",
        "description": "Heals all allies by  twice and grants them  for s. Deals  twice to enemies within range in the meantime, with a  chance to inflict  on them for s, ignoring  of their Resistance."
      },
      "battle": {
        "name": "Manner of Hospitality",
        "description": "Dispels all debuffs from the ally with the currently lowest percentage of HP. Heals them by , and grants them  for s."
      },
      "passive": {
        "name": "Bride's Last Wish",
        "description": "Whenever an ally gains or loses a buff, the hero heals them by . This effect can only be triggered once every s. When healing Theodemer, the healing effect is further increased by ."
      }
    },
    "inspiration": [
      "The hero takes  less crit damage.",
      "When the hero's HP is below , heals the hero by  per second.",
      "Enlightenment +60",
      "HP% +30%",
      "The battle skill additionally grants  to two other allies for 5s."
    ],
    "id": 23000
  },
  {
    "slug": "whisk",
    "name": "Whisk",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "Scourge",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Massacre",
        "description": "Gains  for s and  for s. Then, attacks enemies within range 7 times, dealing  each hit."
      },
      "battle": {
        "name": "Execution",
        "description": "Gains  for s, and strikes the farthest enemy from the hero 3 times, each dealing ."
      },
      "passive": {
        "name": "Boneface",
        "description": "When under , damage dealt is increased by , and Corrosion Intensity is increased by ."
      }
    },
    "inspiration": [
      "The hero takes  less crit damage.",
      "The hero gains  Damage Bonus when their HP is higher than .",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases the ultimate skill's initial energy by ."
    ],
    "id": 22030
  },
  {
    "slug": "aspalta",
    "name": "Aspalta",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Scourge",
    "captain": "Increases all allies' Attack by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Frontal Assault",
        "description": "Grants  Shadow Energy to all Shadow allies. Strikes enemies within range 3 times, with each strike dealing , ignoring  of the enemies' Defense."
      },
      "battle": {
        "name": "Deathbringer",
        "description": "Throws a shadow blade at the target, dealing  to them and  to enemies within a target-centered range in the meantime. Gains  Shadow Energy for each enemy hit, and gains an additional  Shadow Energy when casting this skill in battle for the first time."
      },
      "passive": {
        "name": "Resentment",
        "description": "At the start of battle, grants  stack(s) of  to all Shadow allies. They lose  stack(s) every s afterward."
      }
    },
    "inspiration": [
      "Heals the hero by  after killing an enemy.",
      "The hero gains  Damage Bonus when their HP is higher than .",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores  of the target's Defense."
    ],
    "id": 21070
  },
  {
    "slug": "chorak",
    "name": "Chorak",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s3",
    "type": "Range",
    "race": "Goblin",
    "career": "Rogue",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "All Burn Down",
        "description": "If the roll is ≤3, deals  to the current target  times and grants  stack(s) of  to a number of random allies equal to the roll. If the roll is >3 and ≤6, deals  to the current target  times and grants  stack(s) of  to a number of random allies equal to the roll. If the roll is ≥7, deals  to the current target  times."
      },
      "battle": {
        "name": "Ring of Deathfire",
        "description": "Unleashes two fire rings on random enemies, dealing . When a target hit by a fire ring is damaged again by a Wild skill, dispels  fire ring(s) and deals  again based on the next Wild dice roll. The damage triggered by Wild dice roll increases by  with each +1 dice roll result."
      },
      "passive": {
        "name": "Enter the Tyrant",
        "description": "Each time the hero casts a skill, grants  to 1 random Wild ally for s. ( stacks up to  time.) Each time granting , the hero gains 1 stack of . ( stacks up to  times.)"
      }
    },
    "inspiration": [
      "The hero takes  less crit damage.",
      " granted by the hero can stack up to 2 times.",
      "Enlightenment +60",
      "ATK% +30%",
      "The ultimate skill can deal  extra instance(s) of damage."
    ],
    "id": 21400
  },
  {
    "slug": "ozul",
    "name": "Ozul",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "Human",
    "career": "Warlock",
    "captain": "Increases all allies' Attack by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Prince of Evil Domain",
        "description": "Transforms into a Demon in the designated location. While in Demon form, the hero gains  and , with his basic attacks splashing on enemies around the target. Basic attacks increase to . Then deals  to enemies within range. The hero consumes  Shadow Energy every s in Demon form and exits it when Shadow Energy is depleted."
      },
      "battle": {
        "name": "Nightmare Corrosion",
        "description": "Fires an orb at the target, dealing  to the target and enemies around them. Gains  Shadow Energy. When the hero is in Demon form, deals  to enemies within 2 tiles around the hero instead, and then gains  Shadow Energy."
      },
      "passive": {
        "name": "Lord of Shadow",
        "description": "The hero permanently gains 1 undispellable stack of  for every  Shadow Energy obtained, up to  stacks."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by .",
      "While in Demon Form, Ozul ignores  of the enemy's Defense.",
      "Enlightenment +60",
      "ATK% +30%",
      "Gains  stack(s) of  at the start of battle, and increases the max stacks of  to 8."
    ],
    "id": 22280
  },
  {
    "slug": "theodemer",
    "name": "Theodemer",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Undead",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Spite of the Wronged Dead",
        "description": "Gains  and  for s, and deals  to all enemies, with a  chance of inflicting  on them for s."
      },
      "battle": {
        "name": "Fallen Kingdom Swordplay",
        "description": "Strikes the enemy 3 times, with each strike dealing  and reducing their Ultimate Energy by . If the target's Ultimate Energy is reduced to 0, the hero gains additional  Ultimate Energy. Also, the third strike has a  chance of inflicting  on them for s."
      },
      "passive": {
        "name": "Necrotic Tenacity",
        "description": "The hero cannot obtain a shield. For each enemy on the field that targets him, gains 1 stack of , up to  stacks. The hero gains the following additional effects when deployed with Feenja:  and  for s and  Ultimate Energy when his HP drops to 0 for the first time during a battle."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by  when under Control.",
      "When the hero's HP is below , heals the hero by  per second.",
      "Skill Haste +30",
      "HP% +30%",
      "When inflicted with Control, reduces its duration by ."
    ],
    "id": 22990
  },
  {
    "slug": "sacredeia",
    "name": "Sacredeia",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by  in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Grip of Venom",
        "description": "Deals  twice to enemies within range, with a  chance of inflicting  for s."
      },
      "battle": {
        "name": "Swarm of Rampage",
        "description": "Deals  to all enemies within range centered on the target."
      },
      "passive": {
        "name": "Source of Corrosion",
        "description": "When enemies are under Corrosion, increases their damage taken by  and True Damage taken by ."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by  when under Control.",
      "When dealing damage to an enemy, for every  of the target's Max HP over that of the hero, the damage dealt will increase by , up to .",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores  of the target's Defense."
    ],
    "id": 21100
  },
  {
    "slug": "trolgar",
    "name": "Trolgar",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s3",
    "type": "Melee",
    "race": "Frost Troll",
    "career": "Barbarian",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Winter's Vengeance",
        "description": "Grants  to all Frost heroes for s. Leaps to a target location, dealing  to enemies within range with a  chance of inflicting  stack(s) of  for s. Afterward, deals  with a  chance of inflicting  stack(s) of  for s."
      },
      "battle": {
        "name": "Arctic Axe",
        "description": "Jumps up and strikes the enemy with the lowest Current HP, dealing  with a  chance of inflicting  for s."
      },
      "passive": {
        "name": "Body of Chill",
        "description": "The first time an enemy is inflicted with , removes the target's shield and deals an additional . After casting a skill, for each enemy hit, gains 1 stack of . While possessing , dispelling 1 stack of  changes the basic attack to a Tornado Slash. The Tornado Slash deals  to all enemies within range and inflicts ."
      }
    },
    "inspiration": [
      "Heals the hero by  after killing an enemy.",
      "When inflicting , ignores  of the target's Resistance.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases passive skill damage to 15% Max HP (up to 1,500% of the hero's Attack)."
    ],
    "id": 21710
  },
  {
    "slug": "quaesitia",
    "name": "Quaesitia",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Deadly Slash",
        "description": "Attacks all enemies, dealing , then deals  again with a  chance of inflicting  for s, while pulling targets towards the hero. After the pull, deals  to surrounding enemies, with each attack reducing the target's Ultimate Energy by ."
      },
      "battle": {
        "name": "Oppression",
        "description": "Briefly shoots down all incoming ranged basic attacks towards the hero. Then, teleports to the location with the most enemies, dealing  to surrounding enemies, with a  chance of inflicting  for s."
      },
      "passive": {
        "name": "Ironfist",
        "description": "When taking damage, there is a  chance of inflicting  on the attacker for s. Additionally, when taking damage, triggers Total Defense and restores  (Total Defense triggers once every s)."
      }
    },
    "inspiration": [
      "Heals the hero by  after killing an enemy.",
      "The ultimate skill ignores  of the target's Resistance.",
      "Skill Haste +30",
      "HP% +30%",
      "Each time Adaptive Defense is triggered, HP restoration increases to ."
    ],
    "id": 21020
  },
  {
    "slug": "aemonleyda",
    "name": "Aemonleyda",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s3",
    "type": "Melee",
    "race": "Merfolk",
    "career": "Ranger",
    "captain": "Increases all allies' Crit Damage by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Dazzling Kiss",
        "description": "Gains  Aura Energy and deals  to enemies within range. For each enemy hit, gains an additional  Aura Energy. Afterwards, launches follow-up attacks on the target area. For every 25 Aura Energy the hero has, an additional attack is made, dealing  and ."
      },
      "battle": {
        "name": "Glitter of Gold",
        "description": "Deals  centered on the current target and gains a  shield for s. If Aura Energy is above 50, consumes  Aura Energy to upgrade the shield to a  shield, also gaining  while the shield is active."
      },
      "passive": {
        "name": "Misty Sea's Blessing",
        "description": "When taking direct damage, has a  chance of triggering Blaze, dealing  to the attacker. The triggered Blaze can be enhanced by consuming 5 Aura Energy, reducing the damage taken by  and adding  for this attack. Gains 1 stack of  afterward. For every  Attack Aemonleyda has, the damage reduction of Aura-enhanced Blaze is increased by an extra , up to a maximum of ."
      }
    },
    "inspiration": [
      "Heals the hero by  after killing an enemy.",
      "While shielded, the hero deals  more damage.",
      "Crit Rate +10%,Crit Damage +20%",
      "HP% +30%",
      "The chance for Misty Sea Familiar to trigger Blaze is increased by . When Blaze is triggered this way, the Aura Energy enhancement is gained without consuming Aura Energy."
    ],
    "id": 22800
  },
  {
    "slug": "aladiah",
    "name": "Aladiah",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Range",
    "race": "Iskalland Dwarf",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Snowstorm Embrace",
        "description": "Deals  to all enemies, with a  chance of inflicting them with  for s. Grants a  shield and  to all allies for s in the meantime."
      },
      "battle": {
        "name": "Melting Chant",
        "description": "Deals  to an enemy and removes all of their shield. Targeting a non-elite enemy will steal their shield instead."
      },
      "passive": {
        "name": "Winter Thaw",
        "description": "When an ally with a shield takes damage, there is a  chance of inflicting  on the attacker for s. Grants a  shield to all allies for s as the battle starts."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by  when under Control.",
      "The hero grants  more shield.",
      "Skill Haste +30",
      "Accuracy +50",
      "Increases the ultimate skill's initial energy by ."
    ],
    "id": 20570
  },
  {
    "slug": "synarell",
    "name": "Synarell",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Arcane Warrior",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "skills": {
      "ultimate": {
        "name": "Daylight Domain",
        "description": "Selects an ally, dispels all of their debuffs and grants them  for s. When  on the ally expires, the hero deals  to all enemies and heals all allies by ."
      },
      "battle": {
        "name": "Flame of Exaltation",
        "description": "Fires 3 fireballs to strike random enemies, with each fireball dealing  and healing the ally with the currently lowest percentage of HP by ."
      },
      "passive": {
        "name": "Dawn's Protection",
        "description": "When the hero's skill hits an enemy, there is a  chance of inflicting  on them for s, and the infliction cannot be resisted. Also, when the hero uses a skill to heal an ally, the hero himself gains an healing of  of the current healing granted."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by  when under Control.",
      "When healing an ally with less than  HP, grants  stack of  for s. This skill only takes effect once during a period.",
      "Skill Haste +30",
      "ATK% +30%",
      "The battle skill can grant an additional stack of  for 5s."
    ],
    "id": 22690
  },
  {
    "slug": "daphne",
    "name": "Daphne",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "Undead",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by  in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Embrace of Wail",
        "description": "Possesses the nearest ally for s, during which time the possessed target deals  to surrounding enemies every s (damage dealt in this way will not grant Shadow Energy to Daphne). The possessed target gains Attack Up equal to  of Daphne's Attack. When the possessed target deals damage,  of the damage dealt will be converted to their HP."
      },
      "battle": {
        "name": "Twining Dead Moon",
        "description": "Randomly attacks up to  enemies, dealing  and gaining  Shadow Energy on each enemy hit. This skill can be cast when possessing an ally."
      },
      "passive": {
        "name": "Soul Shiver",
        "description": "The hero gains an additional  Shadow Energy. Also, if the hero possesses a target when gaining Shadow Energy, the possessed target gains the same amount of Shadow Energy."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by .",
      "When dealing damage to enemies with less than  HP, the hero gains  Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores  of the target's Defense."
    ],
    "id": 22250
  },
  {
    "slug": "lincos",
    "name": "Lincos",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Merfolk",
    "career": "Bard",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "skills": {
      "ultimate": {
        "name": "Ode to the Misty Sea",
        "description": "Deals  to all enemies. The hero and the Aura ally with the highest Attack gain  Aura Energy and  for s. Afterward, summons an Accompanist to follow the Aura ally with the highest Attack. The Accompanist disappears when Lincos runs out of Aura Energy."
      },
      "battle": {
        "name": "Forte Variation",
        "description": "Gains  Aura Energy, then attacks enemies within range three times, dealing  each time."
      },
      "passive": {
        "name": "Sonata Form",
        "description": "Gains  Aura Energy at the start of battle. The Aura ally with the highest Attack (other than the hero) also gains  Aura Energy."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by .",
      "The hero gains  Damage Bonus when their HP is higher than .",
      "Crit Rate +10%,Crit Damage +20%",
      "HP% +30%",
      "Ignores  of the target's Defense."
    ],
    "id": 22790
  },
  {
    "slug": "stanguem",
    "name": "Stanguem",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Ridge Halfling",
    "career": "Barbarian",
    "captain": "Increases all allies' Resistance by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Breeze of Nature",
        "description": "Dispels all debuffs from the hero, and grants  and  to all allies for s."
      },
      "battle": {
        "name": "Absolute Alert",
        "description": "The hero gains  for s, and gains a  shield for s when exiting this state."
      },
      "passive": {
        "name": "Thunderstorm Incoming",
        "description": "When in possession of a buff, basic attacks bounce between enemies up to  times. Each hit deals , with a  chance of dispelling 1 buff from them. The subsequent damage will be reduced by ."
      }
    },
    "inspiration": [
      "When taking damage equal to  of the hero's Max HP, has a  chance of dispelling  debuff on the hero. This skill only takes effect once during a period.",
      "The hero grants  more shield.",
      "Skill Haste +30",
      "HP% +30%",
      "Ignores  of the target's Resistance."
    ],
    "id": 21310
  },
  {
    "slug": "rook",
    "name": "Rook",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Ratfolk",
    "career": "Summoner",
    "captain": "Increases all allies' Attack by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Black Death",
        "description": "Gains 1 stack of  (up to  stacks) upon casting this skill. Then casts 3 spells, with each spell dealing  to enemies within range. Each spell launches  follow-up attack(s) with  Corrosion consumed from the target, dealing  each hit. At the end of the skill, performs additional follow-up attacks, each consuming  of the target's Corrosion to deal . (The follow-up attack count increases by 1 for each cast of the ultimate skill, up to a boost of .)"
      },
      "battle": {
        "name": "Indiscriminate Assault",
        "description": "Summons a giant mouse to strike enemies within range, dealing ."
      },
      "passive": {
        "name": "Double Face",
        "description": "Each time True Damage is dealt by consuming Corrosion, this damage is increased by ."
      }
    },
    "inspiration": [
      "The hero takes  less crit damage.",
      "Each time the hero's ultimate skill is cast, increases the skill's True Damage dealt by , up to  stacks.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Enhanced Black Death: The follow-up attack count increases by  for each cast of the ultimate skill, up to a boost of ."
    ],
    "id": 22050
  },
  {
    "slug": "guinavivre",
    "name": "Guinavivre",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s3",
    "type": "Melee",
    "race": "Construct",
    "career": "Scourge",
    "captain": "Increases all allies' Attack by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Deadly Ballet",
        "description": "Grants  to all Dauntless allies for 10s. Changes the attack form, turning the passive 3-hit combo into a 5-hit combo, with each hit dealing . After triggering the 5-hit combo  times, reverts to the 3-hit combo."
      },
      "battle": {
        "name": "Whirling Shadow",
        "description": "Displaces the enemy with the lowest HP, dealing  and marking the target for s. If the target is hit by a basic attack while the mark is active, there is a  chance of dealing ."
      },
      "passive": {
        "name": "Intersecting Blades",
        "description": "Basic attacks pierce enemies in a straight line for an extra tile. After every  basic attack, the next one will become a 3-hit combo, each hit dealing ."
      }
    },
    "inspiration": [
      "Heals the hero by  after killing an enemy.",
      "After casting an ultimate skill, the hero can trigger the 5-hit combo  times before reverting to the 3-hit combo.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Enhanced Whirling Shadow: Increases the chance for enemies marked by the battle skill to take damage to ."
    ],
    "id": 23680
  },
  {
    "slug": "victor",
    "name": "Victor",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Gnome",
    "career": "Warrior",
    "captain": "Increases all allies' Accuracy by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Power Overload",
        "description": "Deals  to all enemies, and converts up to  of their buffs to random negative effects which inherit the remaining duration of the original buffs. After the conversion, if any enemy has less than  negative effects, there is a  chance of additionally inflicting  random negative effects on them for s. Randomly selected from the following: , , , , ."
      },
      "battle": {
        "name": "Pinpoint Positioning",
        "description": "Deals  to an enemy, and dispels all of their buffs and removes all of their shield, with a  chance of inflicting  on them for s."
      },
      "passive": {
        "name": "Deeper Investigation",
        "description": "Marks the enemy when the hero inflicts a debuff on them. The mark lasts the same as the debuff. Healing received by the marked enemy reduces by . The Ultimate Energy of their healer will also be reduced by  as the enemy receives healing. This effect can only be triggered once every s."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by  when under Control.",
      "When the hero's HP is below , heals the hero by  per second.",
      "Skill Haste +30",
      "Accuracy +50",
      "When inflicted with Control, reduces its duration by ."
    ],
    "id": 21410
  },
  {
    "slug": "diantha",
    "name": "Diantha",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Nymph",
    "career": "Sorcerer",
    "captain": "Increases all allies' Attack by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Blooming Flowers",
        "description": "Deals  to enemies within range and creates a magic circle in the target area. When enemies inside the circle are hit by an attack that includes bonus damage from an Aura hero's HP, the attacker restores  Aura Energy. Every  times this energy restoration effect is triggered, Diantha deals an additional  to enemies within range. The magic circle initially lasts s. Diantha can consume Aura Energy to extend its duration. Every  Aura Energy consumed extends the duration by s, up to s."
      },
      "battle": {
        "name": "Caution of the Forest",
        "description": "Deals  to enemies within range and grants all Aura allies  Aura Energy. If the hero's Aura Energy is above 50, consumes  Aura Energy to grant Aura allies  more Aura Energy."
      },
      "passive": {
        "name": "Fall with Wind",
        "description": "Diantha's Aura Energy is capped at  and regenerates by  every s. Diantha's basic attacks launch a Bouncing Orb that can bounce between enemies up to  times, dealing  with each hit."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by  when under Control.",
      "The hero gains  Damage Bonus when their HP is higher than .",
      "Crit Rate +10%,Crit Damage +20%",
      "HP% +30%",
      "Ignores  of the target's Defense."
    ],
    "id": 21500
  },
  {
    "slug": "ardreth",
    "name": "Ardreth",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Paladin",
    "captain": "Increases all allies' Defense by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Sanctuary's Blessing",
        "description": "Enhances the hero for 10s, increasing all allies' healing received by 50% in the duration, and increases the hero's basic attack, dealing [+300%Defense]Radiant Damage each time. When Enhanced, each of the hero's basic attacks grants the ally with the lowest HP with [+180%Defense] healing and has a 100% chance of dispelling 1 debuff from them."
      },
      "battle": {
        "name": "Moonlight Prayer",
        "description": "Heals the ally with the lowest percentage of HP by [+280%Defense], and grants Defense Up II to them for 5.0s. When this skill is cast on a target below 50% HP, healing will be increased by 30% and reduces the recharge time for the target's next battle skill by 50%."
      },
      "passive": {
        "name": "Divine Blessing",
        "description": "After the battle starts, the hero gains 1 stack of Blessing every 5s. This buff is permanent and cannot be dispelled, up to 10 stacks. When the hero's Blessing reaches 10 stacks, grants 10 stacks of Blessing to all allies."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "DEF% +30%",
      "Has a 35% chance to get immune to the Control to be inflicted."
    ],
    "id": 20930
  },
  {
    "slug": "durem",
    "name": "Durem",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "Gunslinger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Red Horizon",
        "description": "Bombards the target area, dealing [+250%Attack]Fire Damage 3 times to enemies within range. Additionally, for enemies inflicted with Burn within range, each stack of Burn has a 100% chance of inflicting 1 stack of Incineration for 10.0s."
      },
      "battle": {
        "name": "Free Blaze",
        "description": "Locks onto 3 random target(s) and fires missiles at them. Each missile deals [+160%Attack]Fire Damage to enemies within range and inflicts 25% Ignite."
      },
      "passive": {
        "name": "Global Oversight",
        "description": "Whenever an enemy's Burn is dispelled (including by triggering Blast), the hero attacks that enemy once, dealing AOE [+250%Attack]Fire Damage centered on them."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22340
  },
  {
    "slug": "malak",
    "name": "Malak",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Bone Gnawing Prison",
        "description": "Dispels all Control from allies and grants them Control Immunity for 10.0s. Meanwhile, deals [+420%Attack][+14%Max HP]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Eternal Existence",
        "description": "Deals [+240%Attack][+6%Max HP]Poison Damage to the enemy and heals the hero by [+12%Max HP]. The healing is doubled if the enemy is inflicted with a debuff."
      },
      "passive": {
        "name": "Confined",
        "description": "When inflicted with Control or Ultimate Down, gains 15.0 Ultimate Energy and heals the hero by [+10%Max HP]. This effect can only occur once every 2.0s.  Also, if the hero fails to resist Control or Ultimate Down, there is an extra 40% chance to nullify those effects."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "DEF% +30%",
      "When inflicted with Control, reduces its duration by 50%."
    ],
    "id": 21250
  },
  {
    "slug": "naro",
    "name": "Naro",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Crimson Pulse",
        "description": "Deals [+520%Attack]Fire Damage to all enemies with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Also grants [+25%Target's Max HP] healing to all allies."
      },
      "battle": {
        "name": "Vital Blaze",
        "description": "Slides forward, dealing [+320%Attack]Fire Damage to enemies in the path with a 75.0% chance of inflicting Healing Prohibition for 5.0s."
      },
      "passive": {
        "name": "Aether Shade",
        "description": "（已发包）自身对敌人施加减益状态时，同时对目标施加Empyrean Treads，持续5.0秒。"
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "HP% +30%",
      "Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."
    ],
    "id": 24300
  },
  {
    "slug": "nissa",
    "name": "Nissa",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Range",
    "race": "Deep Gnome",
    "career": "Summoner",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "skills": {
      "ultimate": {
        "name": "Chain Lightning",
        "description": "Selects an enemy. Deals [+100%Attack]Lightning Damage twice to the target and surrounding enemies, with a 100.0% chance of inflicting Electrocuted for 8.0s. Simultaneously, mechanical creatures will follow this target and generate an electric field centered on it for 10.0s. During this time, all enemies hit by a Lightning Chain within the field take damage twice, with the second instance of damage reduced by 50%."
      },
      "battle": {
        "name": "Thunderous Crossbow",
        "description": "Deals [+450%Attack]Lightning Damage to an enemy, with a 75.0% chance of inflicting Electrocuted for 8.0s. If the target is already affected by Electrocuted, this skill will not inflict Electrocuted but will trigger 1 Lightning Chain."
      },
      "passive": {
        "name": "Lightning Mark",
        "description": "At the start of battle, unleashes a mechanical creature to mark the enemy with the highest Crit Damage. The marked target is prioritized by Lightning Chains and takes Lightning Chain damage twice, with the second instance of damage reduced by 50%. If the target dies, the mechanical creature will select a new enemy to follow."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Enlightenment +60",
      "Accuracy +50",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 21480
  },
  {
    "slug": "bernade",
    "name": "Bernade",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s2",
    "type": "Range",
    "race": "Half-orc",
    "career": "Summoner",
    "captain": "Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.",
    "skills": {
      "ultimate": {
        "name": "Entrancing",
        "description": "Summons the Bear King back to the hero and grants Natural Instinct to all undead creatures and Summoner School heroes. For the next 6s, Bernade will ride the Bear King and continuously charges at the farthest enemy, dealing [+200%Attack]Necrotic Damage to surrounding enemies every 1s. At the end, Bernade returns to the initial position and re-summons the Bear King. During the charge, if any target on the field dies, Natural Instinct will be granted to all summoned units and Summoner School heroes."
      },
      "battle": {
        "name": "Predation",
        "description": "Summons a temporary Bear Spirit to attack the target and grants Natural Instinct to all summoned units and Summoner School heroes. When the Bear Spirit disappears, it deals [+200%Attack]Necrotic Damage to surrounding enemies."
      },
      "passive": {
        "name": "Beast Lord",
        "description": "Each stack of Natural Instinct increases damage dealt by summoned units by 3% for 10.0s (up to 20 stacks). After granting Natural Instinct to a Summoner School hero or summoned unit, the next application grants 1 additional stack of Natural Instinct."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "The battle skill summons 2 Bear Spirits to attack.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases the duration of the ultimate skill by 2.0s."
    ],
    "id": 23480
  },
  {
    "slug": "beldelle",
    "name": "Beldelle",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Frost Crystallization",
        "description": "Strikes an enemy 3 times, each dealing [+300%Attack]Cold Damage, with a 50% chance of gaining 1 stack of Ice Crystal."
      },
      "battle": {
        "name": "Runaway Storm",
        "description": "Deals [+420%Attack]Cold Damage to the enemy, ignoring the target's shield and increasing damage dealt by 50% against shielded units. Afterwards, the hero gains Crit Damage Up for 5.0s, up to 5 stacks."
      },
      "passive": {
        "name": "Frost's Favor",
        "description": "If the hero has Ice Crystal after casting a battle skill, consumes 1 stack of Ice Crystal and casts the skill again. At over 3 stacks of Ice Crystal, converts 300% of excess Crit Rate into Crit Damage."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "Each time the battle skill is cast, increases the damage dealt by 2%. This effect stacks up to 10 times.",
      "Crit Rate +20%",
      "ATK% +30%",
      "The conversion rate of Crit Damage from this passive skill is increased to 360%."
    ],
    "id": 21120
  },
  {
    "slug": "perkunte",
    "name": "Perkunte",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Range",
    "race": "Dragon",
    "career": "Master of Lineage",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Lawful Retribution",
        "description": "Attacks all enemies twice, dealing [+240%Attack][+2400%Enlightenment]Lightning Damage. The first attack has a 100.0% chance of inflicting Electrocuted for 8.0s. The second attack triggers 2 Lightning Chains."
      },
      "battle": {
        "name": "Thunderous Rapids",
        "description": "Deals [+200%Attack][+3000%Enlightenment]Lightning Damage to enemies within range, with a 75% chance of triggering 1 Lightning Chain."
      },
      "passive": {
        "name": "Bronze Gaze",
        "description": "When the hero's present, whenever an ally triggers a Lightning Chain that deals damage, there is a 75% chance of additionally triggering 1 Lightning Bolt, dealing [+150%Attack]Derivative."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Increases the damage of the passive skill [Lightning Bolt] by 30%.",
      "Enlightenment +60",
      "ATK% +30%",
      "The ultimate skill's second attack triggers 1 additional Lightning Chain."
    ],
    "id": 21520
  },
  {
    "slug": "aschetius",
    "name": "Aschetius",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s2",
    "type": "Melee",
    "race": "Dragon",
    "career": "Master of Lineage",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Pyrokinesis",
        "description": "Deals [+400%Attack]Fire Damage to all enemies and inflicts 50% Ignite. Then, marks all enemies inflicted with Burn, immediately triggering Blast (rounded down) for half of their Burn stacks. Deals extra [+100%Attack]Fire Damage centered on the marked enemies. This extra damage increases by 100% for each stack of Blast triggered."
      },
      "battle": {
        "name": "Wrath of Lava",
        "description": "Deals [+400%Attack]Fire Damage to enemies within range and inflicts 50% Ignite."
      },
      "passive": {
        "name": "Fire Control",
        "description": "Basic-attacks enemies in the 3 adjacent tiles in front. Gains 3.0 Ultimate Energy each time an enemy inflicted with Burn is hit. For each stack of Burn on any target on the field, the hero gains 1 stack of Scorching Rhythm."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "When casting an ultimate skill, every stack of Burn removed will increase the hero's Attack by 2%, up to 20 times. This bonus applies to the current ultimate skill, until the next ultimate is cast."
    ],
    "id": 21760
  },
  {
    "slug": "rose",
    "name": "Rose",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Purged by Knowledge",
        "description": "Casts the spell 4 times, each dealing [+80%Attack][+800%Enlightenment]Radiant Damage to a random enemy and nearby enemies, with a 75.0% chance of inflicting Attack Penalty I on them for 6.0s. Meanwhile, heals 2 allies with the currently lowest percentage of HP by [+4%Target's Max HP][+600%Enlightenment], with a 100% chance of dispelling 1 debuff from them. The hero casts the spell 1 extra time for every 100 Enlightenment they have, up to 6 times."
      },
      "battle": {
        "name": "Sin of Ignorance",
        "description": "Deals [+250%Attack][+2400%Enlightenment]Radiant Damage to enemies within range, with a 75.0% chance to inflict Recharging Speed Penalty for 5.0s. Meanwhile, the hero gains 20% Enlightenment Up for 5.0."
      },
      "passive": {
        "name": "Tireless",
        "description": "When the hero has a buff, the enemy cannot resist debuffs inflicted by the hero."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When granting a buff, there is a 70% chance of extending its duration by 30%.",
      "Enlightenment +60",
      "HP% +30%",
      "Buffs granted with the battle skill cannot be dispelled."
    ],
    "id": 21270
  },
  {
    "slug": "gladys",
    "name": "Gladys",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s2",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Dawn's Revelation",
        "description": "Fires a light orb at each Rally hero, which then bounces to the enemy they are attacking, dealing [+500%Attack]Radiant Damage. When an orb hits an ally, it grants 40% Attack Up for 10.0s. The ally with the highest Crit Damage gains 10 Mark(s). Each time this Marked ally's ultimate skill deals damage, 1 Mark is consumed to deal additional damage based on Gladys' 100% Attack and the ally's 100% Attack. Consuming  stacks sequentially grants the following effects: [1] Increases the Mark count by 5. [2] Fires 1 additional light orb(s). [3] Increases the Mark count by 15."
      },
      "battle": {
        "name": "Journeying Together",
        "description": "Grants 1 stack of Rally to all Rally allies."
      },
      "passive": {
        "name": "Unwavering Support",
        "description": "The hero receives 1 additional stack upon gaining Rally. When an ally's Rally overflows, the excess is stored on Gladys, up to 5 stacks of Rally. When a Rally ally casts an ultimate skill, if their Rally is less than 3 stacks, Gladys's Rally stacks are consumed to perform a Rally Spellcasting."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "The hero's Rally cannot be dispelled.",
      "Skill Haste +30",
      "HP% +30%",
      "The ultimate skill can fire two Light Orbs at each target."
    ],
    "id": 22410
  },
  {
    "slug": "zhorak",
    "name": "Zhorak",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Orc",
    "career": "Shaman",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Deadly Verdict",
        "description": "Grants 20% Damage Up to all Ice Blast allies for 10.0s, with a 100% chance of granting them 1 stack of Ice Crystal. Meanwhile, all Ice Blast allies gain the effect of Zhorak's passive skill for 10.0s. Except for the hero, other allies can not gain Ice Crystals by casting Icicles."
      },
      "battle": {
        "name": "Ominous Retribution",
        "description": "Fires an icicle at an enemy, dealing [+360%Attack]Cold Damage, and consumes all the hero's Ice Crystals. Every stack of Ice Crystals consumed launches an additional icicle, dealing [+360%Attack]Cold Damage."
      },
      "passive": {
        "name": "Shared Faith",
        "description": "When an ally casts a spell that consumes Ice Crystal, the hero fires an icicle at the current target, dealing [+150%Attack]Cold Damage and gaining 1 stack of Crit Rate Up for 10.0s, up to 10 stacks. The hero also has a 35% chance of gaining 1 stack of Ice Crystal."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 21200
  },
  {
    "slug": "shainachtan",
    "name": "Shai'nachtan",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "The Unstill",
    "career": "Warrior",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Embracing Calamity",
        "description": "Grants 25% Attack Up to all Thunderbolt allies for 10.0s. Then deals [+500%Attack][+5000%Enlightenment]Lightning Damage to enemies within range and triggers 1 Lightning Chain."
      },
      "battle": {
        "name": "Shared Misfortune",
        "description": "Deals [+200%Attack][+2400%Enlightenment]Lightning Damage to up to 2 random enemies, with a 75% chance of triggering 1 Lightning Chain."
      },
      "passive": {
        "name": "Chasing Peril",
        "description": "Shai'nachtan can be targeted by the Lightning Chain without consuming a chain count. If equidistant, the Lightning Chain prioritizes chaining to Shai'nachtan, transforming it into an Enhanced Lightning Chain. The Lightning Chain damage is increased to 150%."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Enlightenment +60",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 21780
  },
  {
    "slug": "karf",
    "name": "Karf",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Human",
    "career": "Gunslinger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "O Captain! My Captain!",
        "description": "The hero gains Accuracy Up II for 10.0s, then bombards all enemies on the field 4 times. Each bombardment deals [+200%Attack]Fire Damage and inflicts 75% Ignite."
      },
      "battle": {
        "name": "Marine Gunslinger",
        "description": "Attacks an enemy 6 times. Each attack deals [+60%Attack]Fire Damage and inflicts 20% Ignite."
      },
      "passive": {
        "name": "Fish in Troubled Waters",
        "description": "When the hero's skills hit an enemy inflicted with Burn, inflicts 1% Ignite for each stack of Burn they possess. When the hero's skills convert the target's Ignite into Burn, deals additional [+60%Attack]Fire Damage to the target."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 20230
  },
  {
    "slug": "shinnah",
    "name": "Shinnah",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Merfolk",
    "career": "Shaman",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "skills": {
      "ultimate": {
        "name": "Glacial Descent",
        "description": "Continuously casts the spell for 6s. During this period, strikes a random enemy every 0.5s, each time dealing [+80%Attack]Cold Damage, with a 50% chance of granting 1 stack of Ice Crystal to all Ice Blast allies."
      },
      "battle": {
        "name": "Frost Whisper",
        "description": "Generates a frost projectile after a brief channeling, dealing [+300%Attack]Cold Damage to the enemy. Generates an extra frost projectile for each stack of Ice Crystal the hero has. Each time a frost projectile hits the target, there is a 50% chance of granting 1 stack of Ice Crystal to an Ice Blast ally."
      },
      "passive": {
        "name": "Dirge",
        "description": "If the hero has Ice Crystal after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When this hero grants Ice Crystal to other Ice Blast allies, additionally grants 2% Crit Rate Up to all Ice Blast allies for 10.0s, up to 5 stacks."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22810
  },
  {
    "slug": "dalk",
    "name": "Dalk",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s2",
    "type": "Range",
    "race": "Forest Troll",
    "career": "Ranger",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Shadowy Devouring",
        "description": "The hero gains Accuracy Up II for 10.0s. Then deals [+819%Attack]Necrotic Damage to the enemy with the highest Max HP, with a 75.0% chance to inflict Recharging Speed Penalty on them for 10.0s. And reduces the enemy's Ultimate Energy by 30.0, with a 75.0% chance to inflict Banished for 5.0s."
      },
      "battle": {
        "name": "Rotten Affliction",
        "description": "Deals [+350%Attack]Necrotic Damage to the enemy with the highest Attack and has a 75.0% chance of inflicting Attack Penalty II on them for 5.0s."
      },
      "passive": {
        "name": "Rotten and Stinking",
        "description": "Attacks the enemy with the highest Attack at the start of combat, dealing [+320%Attack]Necrotic Damage and marking that target to inflict them with 30 stacks of Attack Penalty. The target loses 1 stack of Attack Penalty every 1s for the next 30s."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "Accuracy +50",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 21730
  },
  {
    "slug": "sleight",
    "name": "Sleight",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s2",
    "type": "Range",
    "race": "Ratfolk",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Misdirection",
        "description": "Strikes enemies within range 3 times, each dealing [+240%Attack][+2400%Enlightenment]Poison Damage with a 100.0% chance of inflicting 1 stack(s) of Poison for 15.0s. For every 5 stack(s) of Poison the hit target possesses, there is a 100.0% chance of inflicting 1 stack(s) of Potent Medicine for 15.0s."
      },
      "battle": {
        "name": "Sustained Offensive",
        "description": "Attacks an enemy 4 times, dealing [+100%Attack][+1000%Enlightenment]Poison Damage with a 75.0% chance of inflicting 1 stack(s) of Poison for 15.0s. The last attack has a 100.0% chance of inflicting 1 stack(s) of Potent Medicine for 15.0s."
      },
      "passive": {
        "name": "Press the Advantage",
        "description": "At the start of battle, has a 100.0% chance of inflicting 3 stack(s) of Potent Medicine on all enemies for 15.0s. When each stack of Potent Medicine expires, is dispelled, or is resisted, there is a 100.0% chance of inflicting 1 stack(s) of Poison on the target for 15.0s."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times.",
      "Enlightenment +60",
      "Accuracy +50",
      "Increases Potent Medicine stack limit to 10."
    ],
    "id": 22430
  },
  {
    "slug": "irzillas",
    "name": "Irzillas",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Throne of Lament",
        "description": "Deals [+600%Attack]Necrotic Damage to enemies in range. Then grants 20% Attack Up to all Summon allies and 30% Damage Up to all undead summoned units for 10.0s."
      },
      "battle": {
        "name": "Usurper's Axe",
        "description": "Deals [+229%Attack]Necrotic Damage to enemies within range. For each ally's undead summoned unit on the field, the skill damage increases by 30%."
      },
      "passive": {
        "name": "False King's Forces",
        "description": "Each time an ally's undead summoned unit dies, there's a 100% chance to summon 1 Skeleton where the undead summoned unit dies. Skeletons summoned by this skill will not trigger the same effect again."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Skill Haste +30",
      "ATK% +30%",
      "Buffs granted with the ultimate skill cannot be dispelled."
    ],
    "id": 22180
  },
  {
    "slug": "rhash",
    "name": "Rhash",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "Sorcerer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Inferno Gale",
        "description": "Fires a powerful arrow at the enemy with the lowest Current HP, dealing [+800%Attack]Fire Damage. When under Heartflame, this skill's damage increases by 30% and the hero gains 10.0 Ultimate Energy."
      },
      "battle": {
        "name": "Molten Reflexes",
        "description": "Shoots an arrow at the enemy, dealing [+300%Attack]Fire Damage. The damage then spreads, dealing [+300%Attack]Fire Damage to other enemies in range."
      },
      "passive": {
        "name": "Scorching Darkfire",
        "description": "When ally Wild dice roll ≥5, the hero gains 1 stack of Heartflame for 6.0s."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 21170
  },
  {
    "slug": "vinyara",
    "name": "Vinyara",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Frozen Spike",
        "description": "Deals [+900%Attack]Cold Damage to the enemy, dispelling all their buffs and reducing their Ultimate Energy by 100.0, with a 100.0% chance of inflicting Frozen for 3.0s and Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Withering Armor",
        "description": "Grants a shield equal to [+450%Attack][+10%Max HP] for 10.0s and Defense Up II for 5.0s to the hero and the ally with the lowest Current HP."
      },
      "passive": {
        "name": "Icy Thorn",
        "description": "When inflicted with Control, the hero is immune to it and has a 100.0% chance of inflicting Frozen on the caster for 5.0s. This skill takes effect once only every 6.0s."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When inflicting a debuff, there is a 70% chance of extending its duration by 30%.",
      "Skill Haste +30",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 20770
  },
  {
    "slug": "durango",
    "name": "Durango",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Monk",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Exterminating Attack",
        "description": "Launches 3 swift attacks, each time dealing [+135%Attack][+640%Enlightenment]Poison Damage to enemies within range, with a 100.0% chance of inflicting 2 stacks of Poison for 15.0s. Ignores 30% of the target's Defense upon a successful critical hit."
      },
      "battle": {
        "name": "Blink Attack",
        "description": "Launches 3 attacks on the enemy, dealing [+100%Attack][+500%Enlightenment]Poison Damage each time. Recharges the hero's Ultimate Energy by 5.0 each time a critical hit is triggered."
      },
      "passive": {
        "name": "Secret Keeper",
        "description": "Swiftly attacks all enemies as the battle starts, dealing [+150%Attack]Poison Damage with a 40.0% chance of inflicting 3 stacks of Poison for 15.0s. When the hero's basic attacks or skills trigger a critical hit, has a 40.0% chance of inflicting 1 stack of Poison for 15.0s."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Increases the chance of the passive skill effect by 15%.",
      "Crit Rate +10%,Crit Damage +20%",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 20670
  },
  {
    "slug": "journ",
    "name": "Journ",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Gnome",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Unique Bomb",
        "description": "Deals [+500%Attack][+10%Max HP]Fire Damage to enemies within range, reducing their Ultimate Energy by 25.0, with a 75% chance of dispelling all of their buffs."
      },
      "battle": {
        "name": "Flamethrower",
        "description": "Sprays flames that burn enemies within range 5 times, each time dealing [+50%Attack][+2%Max HP]Fire Damage with a 50.0% chance of inflicting Attack Penalty I for 5.0s; the flames also backfire on the hero, each time dealing [+20%Attack][+0%Max HP]Fire Damage on himself."
      },
      "passive": {
        "name": "Seeker of Truth",
        "description": "The hero takes 30% less Fire Damage. Additionally, when the hero takes Fire Damage, there is a 30% chance of recharging his Ultimate Energy and that of surrounding allies by 10.0 and granting Defense Up II to the hero and surrounding allies for 5.0s. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 21450
  },
  {
    "slug": "flora",
    "name": "Flora",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Warlock",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Pillar of Secret Flame",
        "description": "Deals [+300%Attack]Derivative to an enemy and inflicts a Vortex lasting 10.0s. During this time, the Vortex gains 1 energy stack each time the target takes damage from Wild skills. Vortex explodes upon expiration, dealing additional damage, with each stack dealing additional [+125%Attack]Derivative. If the Vortex energy reaches 16 stacks, deals extra [+900%Attack]Derivative."
      },
      "battle": {
        "name": "Flaming Sphere",
        "description": "The Familiar launches 2 fireballs at enemies, dealing [+100%Attack]Derivative. When the hero's Insight reaches max stacks, this skill's Wild dice roll will always be the max value."
      },
      "passive": {
        "name": "Pact Servant",
        "description": "When an ally's Wild dice roll is ≥5, the Familiar attacks the ally's current target 1 additional time, dealing [+25%Attack]Derivative. Flora gains 1 stack of Insight, up to  stacks."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks.",
      "Enlightenment +60",
      "ATK% +30%",
      "Gains 10 stacks of Insight as the battle starts, 40 stacks at most."
    ],
    "id": 20410
  },
  {
    "slug": "zeffi",
    "name": "Zeffi",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Ratfolk",
    "career": "Shaman",
    "captain": "Increases all allies' Defense by 30% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Bless the Believer",
        "description": "Creates a magic nexus for 8.0s, granting Defense Up II to all allies. Over the duration of magic nexus, if an ally's HP is below 30%, grants them an additional Invincibility for the remaining duration of the magic nexus."
      },
      "battle": {
        "name": "Totem of Purification",
        "description": "Places a totem on the battlefield for 3.0s, dealing [+100%Attack][+900%Enlightenment]Lightning Damage to enemies within range every 1s, with a 75% chance of dispelling 1 buff from enemies."
      },
      "passive": {
        "name": "Profound Balance",
        "description": "Grants a [+200%Attack][+2000%Enlightenment] shield to the ally with the lowest Current HP for 10.0s whenever an ally's or enemy's buff is dispelled, transferred, or expires."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Increases the chance of the battle skill effect by 25%.",
      "Skill Haste +30",
      "HP% +30%",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 22040
  },
  {
    "slug": "lucien",
    "name": "Lucien",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Arcane Warrior",
    "captain": "Increases all allies' Max HP by 30% in Grand Gladiator Arena.",
    "skills": {
      "ultimate": {
        "name": "Frostdoom",
        "description": "Deals [+500%Attack][+11%Max HP]Cold Damage to enemies within range, with a 75.0% chance of inflicting Recharging Speed Penalty for 10.0s."
      },
      "battle": {
        "name": "Silverwing Charge",
        "description": "Charges toward the enemy with the highest Ultimate Energy, dealing [+300%Attack][+7%Max HP]Cold Damage with a 75.0% chance of inflicting Frozen for 3.0s."
      },
      "passive": {
        "name": "Oath of Dawn",
        "description": "Grants a [+8%Max HP] shield to each ally for 10.0s as the battle starts. Any ally under this shield gains Control Immunity and is immune to the Ultimate Energy Reduction effects inflicted by enemies."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "The hero grants 15% more shield.",
      "Skill Haste +30",
      "HP% +30%",
      "Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."
    ],
    "id": 20990
  },
  {
    "slug": "divine-ascetic",
    "name": "Divine Ascetic",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Monkeyfolk",
    "career": "Monk",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Thunderous Might",
        "description": "Attacks enemies in range, dealing [+700%Attack]Lightning Damage. Also consumes all Breakage, with each stack consumed increasing damage by 2%."
      },
      "battle": {
        "name": "Kui's Pursuit",
        "description": "Deals [+150%Attack]Lightning Damage to the enemy. For each 10 stack(s) of Obsession, performs 1 additional attack (up to 4 attacks). This skill counts as basic attack, with cast speed being affected by Attack Speed."
      },
      "passive": {
        "name": "Unsevered",
        "description": "When Dauntless allies launch basic attacks, the hero gains 1 stack of Obsession and 1 stack of Breakage, plus gaining 1.0 Ultimate Energy."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Each stack of  increases ultimate skill damage by 1%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases  stack limit to 40."
    ],
    "id": 23020
  },
  {
    "slug": "utior",
    "name": "Utior",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Defense by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Scion of Evil God",
        "description": "Grants Defense Up II and Resurrection at Death to all allies for 10.0s."
      },
      "battle": {
        "name": "Cavern's Curse",
        "description": "Deals [+420%Attack]Necrotic Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II and Healing Prohibition on the targets for 5.0s."
      },
      "passive": {
        "name": "For My Purpose",
        "description": "When any other hero unit dies, gains 10.0 Ultimate Energy."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "Accuracy +50",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 20590
  },
  {
    "slug": "lossenia",
    "name": "Lossenia",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Call of Blizzard",
        "description": "Summons an ice tornado at the designated location that lasts for 6s, dealing [+150%Attack]Cold Damage to enemies within range every 1s, with a 100.0% chance of inflicting Frost for 5.0s."
      },
      "battle": {
        "name": "Snowfall Blessing",
        "description": "Marks an ally for 6.0s. Every 1.5s, the marked ally deals [+100%Attack]Cold Damage to surrounding enemies, with a 100.0% chance to inflict Frost for 5.0s."
      },
      "passive": {
        "name": "Cryomancy",
        "description": "Basic attacks cast an Iceball that bounces between enemies, dealing [+100%Attack]Cold Damage, with a 75.0% chance of inflicting Frost for 10.0s when it hits. The Iceball bounces up to 2 times. The skill prioritizes enemies that are not inflicted with Frost."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 20920
  },
  {
    "slug": "ivellios",
    "name": "Ivellios",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Wrath of the Ancient",
        "description": "Fires a mighty arrow, dealing [+200%Attack]Derivative to the enemy. The damage ignores 100% Defense of the target."
      },
      "battle": {
        "name": "Prayer of the Ancient",
        "description": "Deals [+300%Attack]Lightning Damage to enemies within range and grants Attack Speed Up I to all Dauntless allies for 4.0s."
      },
      "passive": {
        "name": "Priest's Splendor",
        "description": "When an ally launches a basic attack, the hero has a 10% chance of launching a following attack, dealing [+60%Attack]Derivative. Dauntless heroes have a double chance of triggering this effect."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "Increases the chance of the passive skill effect by 5%.",
      "Enlightenment +60",
      "ATK% +30%",
      "Increases the duration of buffs granted with the battle skill by 30%."
    ],
    "id": 20160
  },
  {
    "slug": "lothair",
    "name": "Lothair",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Scourge",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Stroke of Midnight",
        "description": "Jumps up and strikes the designated area, dealing [+250%Attack][+1200%Enlightenment]Poison Damage to enemies within range. Follows up with two Tornado Slashes, each slash dealing [+250%Attack][+1200%Enlightenment]Poison Damage to enemies within range."
      },
      "battle": {
        "name": "Pervading Darkness",
        "description": "Rushes towards the enemy with the lowest Current HP, dealing [+250%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting 2 stacks of Poison for 15.0s."
      },
      "passive": {
        "name": "Poisonous Intention",
        "description": "Battle skill and ultimate skill deal additional [+0%Target's Max HP]Derivative to enemies with Poison. Each stack of Poison increases the damage by 100% (up to 40% of the hero's Attack each stack)."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Each time the hero's passive skill takes effect, increases the passive skill's damage dealt by 1%, up to 10 stacks.",
      "Enlightenment +60",
      "ATK% +30%",
      "Ignores the enemy's Resistance when inflicting debuffs with the battle skill, with a 40% chance of taking effect on the target twice."
    ],
    "id": 20200
  },
  {
    "slug": "felosia",
    "name": "Felosia",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Fearless Bulwark",
        "description": "Grants a [+12%Target's Max HP][+2900%Enlightenment] shield to each ally for 10.0s and grants them 30% Damage Reduction and Control Immunity for 10.0s."
      },
      "battle": {
        "name": "Guarding Fence",
        "description": "Grants a [+10%Target's Max HP][+1500%Enlightenment] shield to each ally within range for 10.0s and grants them Defense Up I for 5.0s."
      },
      "passive": {
        "name": "Merciful Cure",
        "description": "While the hero is alive, 15% of the damage taken by any ally will be converted into a shield for them that lasts for 10.0s."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "The hero grants 15% more shield.",
      "Skill Haste +30",
      "HP% +30%",
      "Buffs granted with the battle skill cannot be dispelled."
    ],
    "id": 21390
  },
  {
    "slug": "alton",
    "name": "Alton",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "Bard",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Entrancing Melody",
        "description": "Enhances the hero for 10s, during which fires one orb every 2s to attack a random enemy, dealing [+100%Attack]Radiant Damage with a 60% chance to grant one stack of Rally on a random ally. The following effects will apply in order based on the number of Rally stacks consumed: [1] Increases each orb's damage to [+120%Attack]Radiant Damage. [2] Reduces the orb firing interval to 1s. [3] When granting Rally, additionally grants 1 stack of Ardent to the target for 10.0s."
      },
      "battle": {
        "name": "Deadly Chord",
        "description": "Fires 3 orbs at random enemies, each dealing [+100%Attack]Radiant Damage with a 30% chance of gaining 1 stack of Rally."
      },
      "passive": {
        "name": "Pull Heartstrings",
        "description": "When a Rally ally consumes Rally to cast an ultimate skill, for each stack of Rally they have, they gain 1 stack of Ardent for 10.0s."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Skill Haste +30",
      "ATK% +30%",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 20730
  },
  {
    "slug": "ladehlia",
    "name": "Ladehlia",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Warlock",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Dark Pact",
        "description": "Launches Shadow Demon in the specified direction, dealing [+360%Attack]Necrotic Damage to enemies in its path. Shadow Demon then lands in the target area, dealing [+360%Attack]Necrotic Damage. If Shadow Demon is already present, it recovers all HP and channels for 5s, dealing [+140%Attack]Necrotic Damage to surrounding enemies each second."
      },
      "battle": {
        "name": "Blood-Consuming Shadow",
        "description": "Targets the enemy with the lowest HP, briefly teleports to their position, then deals AOE [+300%Attack]Necrotic Damage centered on them. This damage increases by 1% for each 1% HP the target has lost."
      },
      "passive": {
        "name": "Shadows of Night",
        "description": "Every 3s, Ladehlia gains 1 stack of Satisfied; also gains 1 stack of Satisfied for each enemy defeated. When Shadow Demon appears, it inherits Ladehlia's current Satisfied stack(s)."
      }
    },
    "inspiration": [
      "At battle start, Ladehlia gains 10 stack(s) of Satisfied.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "ATK% +30%",
      "Crit Rate +10%,Crit Damage +20%",
      "When any enemy's HP drops to 50% in battle, the hero casts Blood-Consuming Shadow on them, triggering once per battle."
    ],
    "id": 23080
  },
  {
    "slug": "jathalea",
    "name": "Jathalea",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Determination",
        "description": "Deals [+700%Attack]Poison Damage to enemies within range, inflicting 3 stack(s) of Thorny Poison and 1 stack(s) of 20% Enlightenment Penalty for 15.0s. Enemies killed by this skill cannot be resurrected."
      },
      "battle": {
        "name": "Headstrong",
        "description": "Deals [+300%Attack]Poison Damage with a single strike to an enemy, with a 75.0% chance to inflict 1 stacks of Poison for 15.0s, and a 50.0% chance to inflict Thorny Poison for 10.0s."
      },
      "passive": {
        "name": "Cherished Wish",
        "description": "When the Thorny Poison inflicted by the hero is dispelled, each stack of Thorny Poison deals [+6%Target's Max HP]Derivative (up to 100% of the hero's Attack) to the dispeller."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Enlightenment +60",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 20290
  },
  {
    "slug": "torrin",
    "name": "Torrin",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "Increases all allies' Resistance by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Underworld Cloak",
        "description": "Grants Invisibility to all allies for 10.0s. The cleric then casts a spell over time that heals all allies by [+3%Target's Max HP][+600%Enlightenment] every 0.8s for 4.0s. The marked ally will not be granted Invisibility but will gain Debuff Immunity and an additional 25% of healing."
      },
      "battle": {
        "name": "Chaotic Prayer",
        "description": "Heals the ally with the lowest HP by [+12%Target's Max HP][+2400%Enlightenment]. And heals marked allies by [+6%Target's Max HP][+1200%Enlightenment]. When healing marked allies, there is a 100% chance to dispel 1 debuffs from them."
      },
      "passive": {
        "name": "Shadow Protection",
        "description": "As the battle starts, Marks and enhances the first ally in front of the hero, granting them 20% of the cleric's Max HP and Defense. Then the hero gains Invisibility for 10.0s."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Each healing granted by the battle skill additionally dispels 1 debuffs from target allies.",
      "Skill Haste +30",
      "HP% +30%",
      "Buffs granted with the ultimate skill cannot be dispelled."
    ],
    "id": 20690
  },
  {
    "slug": "gillian",
    "name": "Gillian",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Cleric",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Luminous Domain",
        "description": "Heals all allies by [+15%Target's Max HP][+3500%Enlightenment], dispels 1 debuff each and grants Defense Up I for 10.0s."
      },
      "battle": {
        "name": "Divine Favor Bestowal",
        "description": "Heals the ally with the lowest Current HP by [+10%Target's Max HP][+1800%Enlightenment] and grants the ally 30% Damage Reduction for 5.0s."
      },
      "passive": {
        "name": "Spare the Dying",
        "description": "When healing an ally with less than 50% HP, the cleric grants 1 stack of Recovery Over Time for 5.0s."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When granting a buff, there is a 70% chance of extending its duration by 30%.",
      "Skill Haste +30",
      "Resistance +50",
      "When inflicted with Control, reduces its duration by 50%."
    ],
    "id": 20000
  },
  {
    "slug": "eurion",
    "name": "Eurion",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Shield of Oath",
        "description": "Grants Ally Protection to all allies except the hero for 10.0s. Then gains a [+600%Defense]shield for 10.0s, and gains 30% Damage Reduction and Defense Up I for 10.0s."
      },
      "battle": {
        "name": "Ever-victorious",
        "description": "Deals [+300%Defense]Cold Damage to enemies within range and dispels all their shields, with a 75.0% chance of inflicting Attack Penalty I for 4.0s."
      },
      "passive": {
        "name": "Undying Glory",
        "description": "When receiving fatal damage, becomes immune to death and removes all control effects and debuffs. Then raises shield and stops attacking, gaining Received Healing Up II, Invincibility and 2 stack(s) of Recovery Over Time for 5.0s (This effect triggers once every 60.0s)."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "DEF% +30%",
      "Has a 35% chance to get immune to the Control to be inflicted."
    ],
    "id": 20060
  },
  {
    "slug": "twitch",
    "name": "Twitch",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Ratfolk",
    "career": "Scourge",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "skills": {
      "ultimate": {
        "name": "Lethal Arrowstorm",
        "description": "Launches three attacks in target area, each dealing [+160%Attack][+1800%Enlightenment]Poison Damage with a 50.0% chance of inflicting 2 stack(s) of Poison for 15.0s."
      },
      "battle": {
        "name": "Venomous Shots",
        "description": "Shoots an arrow at an enemy, dealing [+80%Attack][+900%Enlightenment]Poison Damage. Each 60 Enlightenment grants an additional arrow, up to 4 arrows per cast. Each arrow has a 75.0% chance of inflicting 1 stack(s) of Poison for 15.0s."
      },
      "passive": {
        "name": "Sneak Shots",
        "description": "When an enemy is inflicted with Poison from skills other than this passive skill, the hero has a 20.0% chance of dealing [+30%Attack]Derivative and inflicting 1 stack(s) of Poison for 15.0s to that target."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Enlightenment +60",
      "ATK% +30%",
      "Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."
    ],
    "id": 22010
  },
  {
    "slug": "hvitar",
    "name": "Hvitar",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Dragon",
    "career": "Master of Lineage",
    "captain": "Increases all allies' Attack by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Breath of Frost",
        "description": "Changes the weather to Icewind for 15.0s. Then attacks all enemies to deal [+640%Attack]Cold Damage; for enemies with Frozen, removes Frozen and deals additional [+360%Attack]Cold Damage. Each enemy with Frost increases this damage by 15%."
      },
      "battle": {
        "name": "Ice Storm",
        "description": "Unleashes Frost Breath, dealing [+400%Attack]Cold Damage to enemies within range, with a 75.0% chance to inflict Frost for 5.0s."
      },
      "passive": {
        "name": "Frigid Deadland",
        "description": "Changes the weather to Icewind for 15.0s as the battle starts. While Icewind is in effect and when enemies are inflicted with Frost, deals additional [+22%Attack]Derivative over time to them. Enemies with HP below 15% will be Executed. Boss units are immune to the Execution, but will receive an additional [+600%Attack]Derivative instead."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "The ultimate skill increases the count of enemies inflicted with Frost by 2 additionally."
    ],
    "id": 20120
  },
  {
    "slug": "mithrasea",
    "name": "Mithrasea",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Cleric",
    "captain": "Increases all allies' HP by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Omnisage's Grace",
        "description": "Grants Resurrection at Death to all surviving allies for 10.0s, and at the same time resurrects all dead allies at 75% of their Max HP, retaining 75% of the resurrected allies' Ultimate Energy before death. Then grants Debuff Immunity to all allies for 10.0s and grants Invisibility to ranged allies for 10.0s."
      },
      "battle": {
        "name": "Everlasting Glory",
        "description": "Heals allies within range by [+8%Max HP][+2400%Enlightenment] and grants 1 stack of Recovery Over Time to them for 5.0s."
      },
      "passive": {
        "name": "Blessings of the Stars",
        "description": "When an ally takes fatal damage, grants Immortality for 5.0s and 1 stack(s) of Recovery Over Time for 5.0s to that ally. If the ally is a ranged hero, additionally grants Invisibility to them for 5.0s. This skill takes effect once only every 32.0s."
      }
    },
    "inspiration": [
      "Extends the battle skill's range to the entire battlefield, with a 50% chance of inflicting 1 additional stack of Recovery Over Time for 5.0s.",
      "When granting a buff, there is a 70% chance of extending its duration by 30%.",
      "Allies resurrected by the ultimate skill recover 100% of their Max HP",
      "HP% +30%",
      "Increase the available trigger count of the passive skill by 1."
    ],
    "id": 20970
  },
  {
    "slug": "bigby",
    "name": "Bigby",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Gnome",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Bigby's Clenched Fist",
        "description": "Bigby summons a fist to attack enemies within range, with a 50% chance to dispel all buffs from them, dealing [+620%Attack]Radiant Damage and reducing their Ultimate Energy by 25.0. This skill also has a 25.0% chance to inflict Stunned on enemies for 5.0s."
      },
      "battle": {
        "name": "Bigby's Interposing Hand",
        "description": "Creates an Interposing Hand around the hero to support allies, reducing the damage taken by allies within range by 30%. The Interposing Hand vanishes when the total reduced damage taken exceeds 35000."
      },
      "passive": {
        "name": "Bigby's Forceful Hand",
        "description": "When taking damage within melee range, there is a 50% chance of using Bigby's Forceful Hand to Knock Back the source of damage 3 tiles, with a 100.0% chance of inflicting Attack Penalty II for 10.0s. The skill takes effect once every 4.0s."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "ATK% +30%",
      "Reduces the battle skill's initial recharge time by 3s."
    ],
    "id": 23370
  },
  {
    "slug": "donella",
    "name": "Donella",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Gnome",
    "career": "Summoner",
    "captain": "Increases all allies' Accuracy by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Perfect Match",
        "description": "Deals [+700%Attack]Radiant Damage to all enemies, with a 75.0% chance of inflicting Accuracy Penalty II for 10.0s and a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Blissful Vertigo",
        "description": "Activates the spanner to deal [+400%Attack]Radiant Damage to enemies, with a 100.0% chance of inflicting Stunned for 3.0s."
      },
      "passive": {
        "name": "Attractive Friend",
        "description": "The magic puppet bird flies to a random enemy every 8.0s and deals [+200%Attack]Radiant Damage to them, with a 75.0% chance of inflicting Healing Prohibition for 5.0s."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When inflicting a debuff, there is a 70% chance of extending its duration by 30%.",
      "Skill Haste +30",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 21460
  },
  {
    "slug": "bionphray",
    "name": "Bionphray",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Lightning Current",
        "description": "Deals [+520%Attack]Lightning Damage to enemies within range and grants Defense Up I to the hero for 6.0s. Meanwhile the hero gains Electrified for 10.0s and attacks a random enemy with electricity every 1.25s during this period, dealing [+100%Attack]Lightning Damage, with a 100.0% chance of inflicting Stunned for 1.5s."
      },
      "battle": {
        "name": "Weights of Wrath",
        "description": "Gains Control Immunity for 5.0s and raises the giant axe to charge. After the charge finishes, deals [+330%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Stunned for 3.0s."
      },
      "passive": {
        "name": "Blood Rage",
        "description": "After releasing the skill, the next basic attack will cast a roar instead, Taunting enemies within range for 3.0s, and dealing [+150%Attack]Derivative. Grants a [+10%Max HP] shield to the hero for 10.0s."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "Accuracy +50",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 21880
  },
  {
    "slug": "nastjenka",
    "name": "Nastjenka",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Scourge",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Wild Beak",
        "description": "Deals [+720%Attack]Lightning Damage to enemies in range. For the next 10.0s, when allies launch basic attacks on any enemy, has a 40% chance of launching a feather dealing additional [+125%Attack]Lightning Damage. Dauntless heroes have double the trigger chance, and these additional attacks count as basic attacks."
      },
      "battle": {
        "name": "Talon",
        "description": "Flashes to the enemy with the lowest Current HP and deals [+200%Attack]Lightning Damage 3 times. This skill is counted as a basic attack and is guaranteed to be cast as the battle starts."
      },
      "passive": {
        "name": "Black Plume",
        "description": "For every 3.0s the hero survives, gains 1 stack of Black Stork's Feather permanently that cannot be dispelled, up to 10 stacks.  Every 10% of the hero's extra Attack Speed will be converted into 1% extra Crit Rate."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "The passive skill stack cap is increased to 20 stacks, with each stack of Black Stork's Feather granting the hero an extra 2% Crit Damage."
    ],
    "id": 20740
  },
  {
    "slug": "reytah",
    "name": "Reytah",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "Shaman",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 30%.",
    "skills": {
      "ultimate": {
        "name": "Queen's Retribution",
        "description": "Dispels all debuffs from all allies. Grants them Defense Up II for 10.0s. There is a 100.0% chance to inflict Recharging Speed Penalty on all enemies for 5.0s and extend the duration of all of their debuffs by 5.0s. (Except for Damage Debuff)"
      },
      "battle": {
        "name": "Wailing Echo",
        "description": "Deals [+250%Attack]Poison Damage to enemies within range with a 75.0% chance of inflicting Attack Penalty II for 5.0s. After a short pause, deals [+250%Attack]Poison Damage again to enemies within range with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Sweet Dread",
        "description": "All enemies deal 10% less damage. For every debuff they have, their damage dealt is reduced additionally by 8%, up to 3 stacks on the same target."
      }
    },
    "inspiration": [
      "When present, all enemies deal 10% less damage.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "The ultimate skill increases the duration of the enemy's debuff by an additional 2s.",
      "Accuracy +50",
      "The debuff inflicted by the hero has a 50% chance of becoming undispellable."
    ],
    "id": 21870
  },
  {
    "slug": "ergander",
    "name": "Ergander",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Desperate Beast",
        "description": "Has a 100.0% chance of Taunting the enemies within range for 5.0s and deals [+400%Attack][+16%Max HP]Poison Damage. Meanwhile, the hero gains Immortality for 10.0s."
      },
      "battle": {
        "name": "Avenging Slash",
        "description": "Deals [+200%Attack][+7%Max HP]Poison Damage to enemies within range, with a 100% chance of reducing their Ultimate Energy by 25.0. Grants [+20%Max HP] healing to the hero."
      },
      "passive": {
        "name": "Eye for an Eye",
        "description": "When taking damage, has a 20% chance to inflict Attack Penalty II on the damage dealer for 5.0s."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Increases the chance of the passive skill effect by 15%.",
      "Skill Haste +30",
      "Accuracy +50",
      "When inflicted with Control, reduces its duration by 50%."
    ],
    "id": 21010
  },
  {
    "slug": "ripekas",
    "name": "Ripekas",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "The Unstill",
    "career": "Scourge",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Ghost Mischief",
        "description": "Launches 3 spirit attacks at enemies, each dealing [+200%Attack][+100%Defense]Necrotic Damage to enemies within range, with a 85.0% chance of inflicting 1 random debuff from the following for 10.0s: Attack Penalty II, Recharging Speed Penalty, Healing Prohibition, Accuracy Penalty II, and Buff Prohibition."
      },
      "battle": {
        "name": "Double Quake",
        "description": "Unleashes a wide range slash with a 100.0% chance of Knocking Up enemies within range, and deals [+220%Attack][+150%Defense]Necrotic Damage with a 100.0% chance of inflicting Stunned for 3.0s."
      },
      "passive": {
        "name": "Double Advantage",
        "description": "The hero gains healing equal to 50% of the healing enemies receive. This effect can only be triggered once every 1.0s."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "Accuracy +50",
      "When inflicted with Control, reduces its duration by 50%."
    ],
    "id": 21740
  },
  {
    "slug": "lelwanis",
    "name": "Lelwanis",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "Dragon",
    "career": "Master of Lineage",
    "captain": "Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Dragon of Death",
        "description": "Sacrifices all ally undead summoned units (non-elite) and deals [+300%Attack]Necrotic Damage to all enemies. If the current number of Dragon Blood stacks reaches 20, Lelwanis transforms into her true dragon form to battle. If this sacrifice meets the conditions for transformation, elite undead summoned units will also be included in the sacrifice. When the true dragon form gains additional Dragon Blood, the stack limit can be increased to 70. Additional stacks can be gained through the following ways: If Duplicate is cast on the true dragon form, no clone is summoned; instead, the true dragon gains 10 stacks of Dragon Blood. Each time Natural Instinct is gained, 1 stack of Dragon Blood is acquired."
      },
      "battle": {
        "name": "Lady of Dark Ruins",
        "description": "Targets the enemy with the lowest Current HP, dealing [+200%Attack]Necrotic Damage in an area around them, and summons 1 Corpse that lasts 15.0s."
      },
      "passive": {
        "name": "Dragon God's Lineage",
        "description": "When any target on the field dies, permanently gains 1 stack of Dragon Blood. Takes 30% less damage from targets 3 tiles away or further."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases the battle skill's recharge speed by 30%, and also recharges the hero's Ultimate Energy by 15.0 after casting the battle skill."
    ],
    "id": 21770
  },
  {
    "slug": "errich",
    "name": "Errich",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Meteorite Rain",
        "description": "Calls down 5 meteor(s) to strike random enemies in range, each dealing [+160%Attack]Fire Damage. When Wild dice roll ≥5, it deals additional [+200%Attack]Fire Damage to all enemies in range."
      },
      "battle": {
        "name": "Pillar of Flame",
        "description": "Deals [+300%Attack]Fire Damage to enemies in the target area; if only one enemy is hit, deals 1 additional instance of damage (equal to 50% of the original damage)."
      },
      "passive": {
        "name": "Fortune Sense",
        "description": "When Errich appears, upgrades all ally Wild heroes' dice, increasing their max value by 2."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 20400
  },
  {
    "slug": "sintrellia",
    "name": "Sintrellia",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "Summoner",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Echo of Destiny",
        "description": "Selects the allied undead creature with the highest Attack, performs Duplicate on it, then grants Forbidden Knowledge to both the clone and the original unit. While the clone exists, the hero can only recover up to 50% Ultimate Energy. When the original unit dies, the clone immediately dies and grants the original's summoner 50% Ultimate Energy."
      },
      "battle": {
        "name": "Twist of Fate",
        "description": "Fires 3 arrows randomly attacking enemies, each dealing [+180%Attack]Necrotic Damage and inflicting Banshee's Curse for 5.0s."
      },
      "passive": {
        "name": "Game of Fatuity",
        "description": "While present, all ally undead summoned units gain Attack Up equal to 10% of Sintrellia's Attack (not exceeding 100% of target's Attack)."
      }
    },
    "inspiration": [
      "Increases duration of Banshee's Curse inflicted by battle skills to 10s.",
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "ATK% +30%",
      "Crit Rate +10%,Crit Damage +20%",
      "After casting ultimate skill, clone unit and original unit gain doubled Banshee's Curse damage boost when attacking cursed enemies."
    ],
    "id": 24780
  },
  {
    "slug": "premtsa",
    "name": "Premtsa",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 30% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Myriad Descendants",
        "description": "Releases a soul torrent dealing [+520%Attack]Necrotic Damage to all enemies. Additionally, all ally undead summoned units immediately trigger Tireless Devotion AOE Damage."
      },
      "battle": {
        "name": "Undead Puppet",
        "description": "Launches 2 soul attacks at random enemies, dealing [+240%Attack]Necrotic Damage and creating a Specter at the target location. Specters last 10.0s and continuously attack surrounding enemies."
      },
      "passive": {
        "name": "Tireless Devotion",
        "description": "When ally undead summoned units appear, they deal [+60%Attack]Derivative 7 times over 5s to enemies within 1 tile around themselves."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22300
  },
  {
    "slug": "elminster-aumar",
    "name": "Elminster Aumar",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Enlightenment by 48.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Silver Fire",
        "description": "Deals [+710%Attack][+5000%Enlightenment]Fire Damage to enemies within range, with a 75.0% chance of inflicting Accuracy Penalty II and Attack Penalty II on the targets for 10.0s."
      },
      "battle": {
        "name": "Radiant Shield",
        "description": "Grants a [+12%Target's Max HP][+3000%Enlightenment] shield to the hero and surrounding allies for 5.0s and Control Immunity for 5.0s."
      },
      "passive": {
        "name": "Mystra's Shelter",
        "description": "For each debuff on an enemy, the hero gains 10.0 Resistance, up to 10 stacks."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Enlightenment +60",
      "HP% +30%",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 23360
  },
  {
    "slug": "auster",
    "name": "Auster",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Ranger",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.",
    "skills": {
      "ultimate": {
        "name": "Bone Chill",
        "description": "Jumps into the air and shoots a powerful arrow, dealing [+520%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Frost for 10.0s. The tracking arrows attached to this skill will fire at all enemies within range and deal [+110%Attack]Cold Damage."
      },
      "battle": {
        "name": "Toxophilite",
        "description": "Fires 3 arrows at the enemy, each dealing [+120%Attack]Cold Damage, with a respective 50% chance of ignoring 100% of their Defense."
      },
      "passive": {
        "name": "Double Shot",
        "description": "When shooting arrows with basic attacks or skills, the hero fires a tracking arrow at up to 2 enemies inflicted with Frost, dealing [+55%Attack]Cold Damage to them with a 100.0% chance of inflicting Frost for 5.0s. Damage dealt by the tracking arrow also recharges the hero's Ultimate Energy by 2.5."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "Accuracy +50",
      "Ignores 15% of the target's Defense."
    ],
    "id": 21030
  },
  {
    "slug": "sagomir",
    "name": "Sagomir",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Horsefolk",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Pure Horsepower",
        "description": "Tramples the ground and deals [+400%Attack][+0%Max HP]Radiant Damage to enemies within range. Then slashes and deals [+10%Max HP][+200%Attack]Radiant Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s, and a 75.0% chance of inflicting Accuracy Penalty II for 10.0s."
      },
      "battle": {
        "name": "Take the Lead",
        "description": "Rams into the enemy with the highest Attack, dealing [+6%Max HP][+250%Attack]Radiant Damage and Taunting this target for 5.0s. Gains Debuff Immunity for 5.0s and Defense Up II for 5.0s."
      },
      "passive": {
        "name": "Brave and Hungry",
        "description": "Provides a carrot to the ally with the lowest Current HP every 12.0s, granting them 1 stack of Recovery Over Time for 10.0s and recharging their Ultimate Energy by 20.0."
      }
    },
    "inspiration": [
      "When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "Skill Haste +30",
      "Resistance +50",
      "When inflicted with Control, reduces its duration by 50%."
    ],
    "id": 22060
  },
  {
    "slug": "lorentheel",
    "name": "Lorentheel",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Residual Light of the Shard",
        "description": "Creates a domain for 15.0s. When allies consume Rally through ultimate skills within the domain, recharges their Ultimate Energy by 25.0. The following effects apply in order based on the number of Rally stacks consumed: [1] Grants 30% Crit Rate Up to Rally allies for 10.0s. [2] Increases the skill effect to 40% Crit Rate Up. [3] Grants 30% Crit Damage Up to all Rally allies for 10.0s."
      },
      "battle": {
        "name": "Forest Wind Assault",
        "description": "Deals [+360%Attack]Radiant Damage to enemies within range. When an ally casts a spell that consumes Rally, the skill's recharge time resets."
      },
      "passive": {
        "name": "Guidance of the Golden Deer",
        "description": "Once the hero's ultimate skill fully recharges, grants 1 stack of Rally to all allies."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Increases the duration of buffs granted with the ultimate skill by 30%."
    ],
    "id": 20300
  },
  {
    "slug": "tamar",
    "name": "Tamar",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Tempest Surge",
        "description": "Unleashes a powerful lightning storm, dealing [+700%Attack]Lightning Damage to all enemies, with a 75.0% chance of inflicting Buff Prohibition for 10.0s. For enemies without any buff, there is a 75.0% chance of inflicting Stunned for 5.0s."
      },
      "battle": {
        "name": "Thunder War Song",
        "description": "Unleashes forked lightning, dealing [+300%Attack]Lightning Damage to enemies within range and has a 75% chance of dispelling 1 buff from them and a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Might of the Matriarch",
        "description": "Casts a lightning strike on the enemy whenever they gain a buff, dealing [+100%Attack]Derivative, with a 30% chance of dispelling 1 buff from them.  This skill only takes effect once on the same target in 5.0s."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Increases the chance of the passive skill effect by 15%.",
      "Skill Haste +30",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 20830
  },
  {
    "slug": "baelvernal",
    "name": "Baelvernal",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Merfolk",
    "career": "Sorcerer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Come On Strong",
        "description": "Strikes enemies within range 3 times, each dealing [+220%Attack]Necrotic damage, with a 50% chance of reducing their Ultimate Energy by 10.0."
      },
      "battle": {
        "name": "Woozy Dizzy",
        "description": "Fires an orb that can bounce up to 6 times between enemies, dealing [+160%Attack]Necrotic damage each time, with a 20.0% chance of inflicting Stunned for 3.0s."
      },
      "passive": {
        "name": "Smoke and Mirrors",
        "description": "When an ally takes damage, there is a 10% chance of converting 20% of their damage taken into healing. When an enemy receives healing, there is a 10% chance of converting 20% of their healing received into damage."
      }
    },
    "inspiration": [],
    "id": 22840
  },
  {
    "slug": "tarulla",
    "name": "Tarulla",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "Deathbringer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Elegant Steps",
        "description": "Dispels all debuffs from the ally with the highest Attack, and grants them Debuff Immunity and Control Immunity for 10.0s."
      },
      "battle": {
        "name": "Fluttering Peplum",
        "description": "Deals [+320%Attack]radiant damage to enemies within range, with a 50% chance to dispel 1 buff from them."
      },
      "passive": {
        "name": "Another Mug",
        "description": "When successfully dispelling any debuff, heals the ally with the currently lowest percentage of HP by [+10%Target's Max HP][+1200%Enlightenment]."
      }
    },
    "inspiration": [],
    "id": 22540
  },
  {
    "slug": "araces",
    "name": "Araces",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Flame Domain",
        "description": "Deals [+475%Attack]fire damage to enemies within range. If the targets are under Burn, dispels all Burn from them. Every stack of Burn dispelled deals additional [+220%Attack]fire damage to them."
      },
      "battle": {
        "name": "Fire Shell",
        "description": "Gains a [+250%Attack] shield for 5.0s. Then deals [+60%Attack]fire damage to enemies around the hero every 0.8s for 4.0s."
      },
      "passive": {
        "name": "Last Lineage",
        "description": "When the hero deals damage to the enemy with a basic attack, there is a 30.0% chance of inflicting the enemy with 1 stack of Burn for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20150
  },
  {
    "slug": "kyrza",
    "name": "Kyrza",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Swamp Lizardfolk",
    "career": "Deathbringer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Greedy Plunder",
        "description": "Strikes the enemy 3 times, each dealing [+300%Attack]Necrotic damage, with a 50.0% chance of inflicting Recharging Speed Penalty on them for 10.0s."
      },
      "battle": {
        "name": "Violent Breakthrough",
        "description": "Deals [+310%Attack]Necrotic damage to the enemies around the hero and has a 75.0% chance of inflicting Healing Prohibition on them for 5.0s."
      },
      "passive": {
        "name": "Turn the Tides",
        "description": "The hero gains 10.0 Ultimate Energy whenever an ally is inflicted with a debuff. This skill only takes effect once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 21850
  },
  {
    "slug": "seidic",
    "name": "Seidic",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s4",
    "type": "Range",
    "race": "Gnome",
    "career": "Marksman",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Mineral Survey",
        "description": "Deals [+720%Attack]cold damage to enemies within range, with a 75% chance of gaining 1 stack of Ice Crystal."
      },
      "battle": {
        "name": "Magic Crystal Arrow",
        "description": "Strikes the enemy 3 times, each dealing [+50%Attack]cold damage, and inflicting Crit Damage Up for 3.0s, up to 5 stacks. Each cast of this skill increases damage by 10%, up to 5 stacks."
      },
      "passive": {
        "name": "Energy Canister",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. The hero's skill has a 50% chance of ignoring 30% enemy Defense."
      }
    },
    "inspiration": [],
    "id": 21440
  },
  {
    "slug": "ashqar",
    "name": "Ashqar",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Intrepid Charge",
        "description": "Deals [+600%Attack][+10%Max HP]fire damage to enemies within range, with a 75.0% chance to inflict Taunt on them for 5.0s. When successfully inflicting Taunt on them, there is a 100.0% chance to inflict Attack Penalty II on them for 10.0s."
      },
      "battle": {
        "name": "Searing Heat",
        "description": "Deals [+300%Attack]fire damage to the target and nearby enemies, with a 75.0% chance to inflict Recharging Speed Penalty on them for 5.0s. After dealing damage, if the enemies' HP is lower than 60%, additionally reduces their Ultimate Energy by 20.0."
      },
      "passive": {
        "name": "Tiger Roar",
        "description": "When attempting to inflict debuffs or control effects on the enemies yet the effects are resisted or invalidated, gains [+15%Max HP] healing, with a 100.0% chance to inflict Fear on nearby enemies for 3.0s. This skill only takes effect once every 10.0s."
      }
    },
    "inspiration": [],
    "id": 22140
  },
  {
    "slug": "pearl",
    "name": "Pearl",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Merfolk",
    "career": "Sorcerer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Seaweed Extract",
        "description": "Deals [+715%Attack]poison damage to enemies within range, with a 100% chance to dispel 1 buff from them. The hero also has a 75.0% chance to inflict Healing Prohibition and Buff Prohibition on them for 10.0s."
      },
      "battle": {
        "name": "Neurotoxin",
        "description": "Deals [+400%Attack]poison damage to the target, with a 50.0% chance to inflict Silence on them for 7.5s."
      },
      "passive": {
        "name": "Lucubration",
        "description": "When any ally takes an AOE Damage, dispels 1 debuff from all allies. This skill only takes effect once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 22850
  },
  {
    "slug": "mera",
    "name": "Mera",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s4",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Summoner",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Moonlit Howl",
        "description": "Grants 20% Attack Up to the hero for 10.0s. Deals [+350%Attack]Necrotic damage to the enemy with the highest Attack, with the damage ignoring 30% of the enemy's Defense. The hero commands the Phantom Eater to deal [+350%Attack]Necrotic damage to the current enemy which ignores 30% of the enemy's Defense. If the Phantom Eater is dead, the hero summons another Phantom Eater at the enemy's location and gains 30.0 Ultimate Energy."
      },
      "battle": {
        "name": "Shadow Onslaught",
        "description": "Commands the Phantom Eater to attack the enemy with the highest Attack, dealing [+360%Attack]Necrotic damage to them and nearby enemies. Afterwards, the Phantom Eater will choose this enemy as the target to attack. If the Phantom Eater is dead, deals [+360%Attack]Necrotic damage to the enemy with the highest Attack."
      },
      "passive": {
        "name": "Phantom Evocation",
        "description": "Summons a Phantom Eater to assist in the battle as the battle starts. The hero takes on 25% damage for the Phantom Eater. And when the hero gains a buff, the Phantom Eater also gains the same buff."
      }
    },
    "inspiration": [],
    "id": 21340
  },
  {
    "slug": "fihrah",
    "name": "Fihrah",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Orc",
    "career": "Marksman",
    "captain": "Increases all allies' Resistance by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Wildfire",
        "description": "Deals [+650%Attack]fire damage to enemy targets within range, with a(n) 75% chance to remove 2 buff(s) from the target, and a(n) 75.0% chance to inflict Accuracy Penalty II for 10.0s."
      },
      "battle": {
        "name": "All In",
        "description": "Deals [+350%Attack]fire damage to the enemy. If the enemy does not have any buff, there is a 75.0% chance of inflicting Buff Prohibition on them for 5.0s."
      },
      "passive": {
        "name": "Armor-clad",
        "description": "For each debuff present on enemies on the battlefield, gains Resistance Up, up to 10 stacks. Each time the hero successfully inflicts a debuff on an enemy, gains Permanent Resistance Up for this battle, up to 10 stacks."
      }
    },
    "inspiration": [],
    "id": 21610
  },
  {
    "slug": "dielke",
    "name": "Dielke",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s4",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "Marksman",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Hawkeye Hunt",
        "description": "Deals [+150%Attack]radiant damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Inflicts 25% Damage Resistance Penalty on all enemies. [2] The next basic attack is guaranteed to trigger the passive skill. [3] For the next 5s, damage from the passive skill is increased by 50%."
      },
      "battle": {
        "name": "Arrow's Gleam",
        "description": "Deals [+300%Attack]radiant damage to the target. If this attack is a critical hit, the hero gains 1 stack of Rally"
      },
      "passive": {
        "name": "Marksman",
        "description": "Basic attacks have a  chance of dealing [+0%Attack]radiant damage to enemies within range"
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Increases the chance of the passive skill effect by 15%.",
      "Gains 30.0 extra Skill Haste.",
      "Gains 50.0 extra Resistance.",
      "Reduces the battle skill's initial recharge time by 3s."
    ],
    "id": 22520
  },
  {
    "slug": "pargu",
    "name": "Pargu",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "Priest",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Crippled Morale",
        "description": "Deals [+300%Attack]cold damage to the target 3 times, with a 50.0% chance to inflict the target with 3 debuffs randomly selected from the following for 10.0s: Attack Penalty II, Recharging Speed Penalty, Healing Prohibition, Accuracy Penalty II, Buff Prohibition."
      },
      "battle": {
        "name": "Frozen Roar",
        "description": "Deals [+400%Attack]cold damage to the enemy, with a 100.0% chance to inflict Frozen for 3.0s. Prioritizes attacks on the enemy with the most debuffs."
      },
      "passive": {
        "name": "Aura Suppression",
        "description": "When using skills to deal damage to a target inflicted with any debuff, reduces the duration of a random buff on them by 2.0s."
      }
    },
    "inspiration": [],
    "id": 21900
  },
  {
    "slug": "cervinia",
    "name": "Cervinia",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Deathbringer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Shadow's Pursuit",
        "description": "Deals [+200%Attack]lightning damage to enemies within range 3 times, with a 50.0% chance of inflicting Thunder's Breath for 8.0s. If the target is already affected by Thunder's Breath, there is a 100.0% chance of inflicting Recharge Down for 10.0s."
      },
      "battle": {
        "name": "Shadow Leap",
        "description": "Jumps to the area with the most enemies, dealing [+300%Attack]lightning damage to enemies within range with a 75.0% chance of inflicting Thunder's Breath for 5.0s."
      },
      "passive": {
        "name": "Shadowmeld",
        "description": "When taking damage exceeding 10% of Max HP, gains Invisibility and Recovery Over Time for 10.0s."
      }
    },
    "inspiration": [],
    "id": 22160
  },
  {
    "slug": "balsaazer",
    "name": "Balsaazer",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s4",
    "type": "Melee",
    "race": "Tigerfolk",
    "career": "Fighter",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Impious Punishment",
        "description": "Deals [+700%Attack]lightning damage to targets within range and inflicts Electrocuted."
      },
      "battle": {
        "name": "Glory of the Guard",
        "description": "Gains Attack Speed Up I and 20% Enlightenment Up for 10.0s."
      },
      "passive": {
        "name": "Chain Reaction",
        "description": "Basic attacks have a 10% chance of triggering Lightning Chain. This chance is increased by 5% for each enemy on the field affected by Electrocuted. (Can only trigger once every 10s.)"
      }
    },
    "inspiration": [],
    "id": 22100
  },
  {
    "slug": "deeno",
    "name": "Deeno",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Toxin",
    "season": "s4",
    "type": "Range",
    "race": "Gnome",
    "career": "Marksman",
    "captain": "Increases all allies' Enlightenment by 36.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "One by One",
        "description": "Shoots 1 arrow at the current target and enemies with Toxin, dealing [+500%Attack]poison damage to them. For every stack of Toxin on them, the hero additionally deals [+20%Attack]Derivative to them. After that, grants the hero Attack Speed Up II for 10.0s."
      },
      "battle": {
        "name": "Arrow Chain",
        "description": "Shoots 3 arrows at the current enemy, each dealing [+120%Attack]poison damage to them, with a 75.0% chance to inflict Toxin for 15.0s."
      },
      "passive": {
        "name": "Poisoned Arrow",
        "description": "Basic attacks have a 60.0% chance to inflict Toxin for 15.0s."
      }
    },
    "inspiration": [],
    "id": 21530
  },
  {
    "slug": "ghellid",
    "name": "Ghellid",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Goblin",
    "career": "Rogue",
    "captain": "Increases Accuracy for all allies by 40.0 in Fey Meander and Trial Breakthrough battles.",
    "skills": {
      "ultimate": {
        "name": "Seeing Stars",
        "description": "Deals [+720%Attack]poison damage to enemies within range and has a 75.0% chance of inflicting Stunned on them for 5.0s, with a 100.0% chance to Knock Back the target for 3 tiles."
      },
      "battle": {
        "name": "Dizzy Spell",
        "description": "Deals [+400%Attack]poison damage to the enemy and has a 75.0% chance of inflicting Stunned on them for 3.0s, with a 100.0% chance to Knock Back the target for 1 tile."
      },
      "passive": {
        "name": "Special Poisonous Herb",
        "description": "Basic attacks trigger Toxic Blast on the enemy, dealing [+50%Attack]poison damage to surrounding enemies within range, with a 50.0% chance of inflicting Accuracy Penalty I for 5.0s."
      }
    },
    "inspiration": [],
    "id": 21350
  },
  {
    "slug": "thalorian",
    "name": "Thalorian",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s4",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "Warrior",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 24%.",
    "skills": {
      "ultimate": {
        "name": "Thunderbolt Followup",
        "description": "Strikes an enemy 4 times, each dealing [+210%Attack]lightning damage. This skill is regarded as a basic attack. The subsequent 5 times of basic attacks are guaranteed to trigger double hits."
      },
      "battle": {
        "name": "Lightning Speed",
        "description": "Strikes an enemy twice, each dealing [+220%Attack]lightning damage. This skill is regarded as a basic attack. Meanwhile, grants Attack Speed Up I to all Dauntless allies for 5.0s."
      },
      "passive": {
        "name": "Dual Wielding",
        "description": "Basic attacks have a 20% chance to trigger a double hit, and every extra 1% Attack Speed will increase the trigger chance by 0%. The total trigger chance is capped at 50%."
      }
    },
    "inspiration": [],
    "id": 22720
  },
  {
    "slug": "varathas",
    "name": "Varathas",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s4",
    "type": "Melee",
    "race": "Werewolf",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Focused Strike",
        "description": "Enhances the hero. For the next 10s, skills additionally inflict 10% Ignite and deals [+700%Attack]fire damage to enemies within range."
      },
      "battle": {
        "name": "Loyal Claw",
        "description": "Deals [+240%Attack]fire damage to enemies within range and inflicts 20% Ignite."
      },
      "passive": {
        "name": "Fiery Smoke",
        "description": "When an enemy is inflicted with Burn, the hero has a 20% chance of dealing [+200%Attack]fire damage to surrounding enemies."
      }
    },
    "inspiration": [],
    "id": 22920
  },
  {
    "slug": "molothorn",
    "name": "Molothorn",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Rogue",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Temporary Alliance",
        "description": "Slashes forward with a blade wave 3 tiles wide, dealing [+700%Attack]cold damage, while granting all allies a [+10%Target's Max HP] Shield and 50% Ultimate Down Resistance. Each enemy hit grants a thicker shield, and the duration of the 50% Ultimate Down Resistance effect is extended (up to 3 targets counted)."
      },
      "battle": {
        "name": "Leader Hunt",
        "description": "Deals [+300%Attack]cold damage to the enemy with the highest Ultimate Energy and inflicts Accuracy Penalty II for 10s"
      },
      "passive": {
        "name": "Clever Ploy",
        "description": "When an ally loses a buff, has a 100.0% chance of granting them Defense Up I. Can only trigger once every 15s per target."
      }
    },
    "inspiration": [],
    "id": 23510
  },
  {
    "slug": "dargo",
    "name": "Dargo",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "Shaman",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "skills": {
      "ultimate": {
        "name": "Medicine Test",
        "description": "Summons 5 orbs to strike random enemies in turn. (Enemies without Corrosion will be attacked first.) Each strike deals  to them."
      },
      "battle": {
        "name": "Exotic Venom",
        "description": "Deals  to the enemy with the highest Corrosion."
      },
      "passive": {
        "name": "Silent Affliction",
        "description": "When attacking enemies whose current Corrosion is less than  of their Max HP, Corrosion Intensity is increased by ."
      }
    },
    "inspiration": [],
    "id": 21830
  },
  {
    "slug": "chitter",
    "name": "Chitter",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Shadow",
    "season": "s3",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "Scourge",
    "captain": "Increases all allies' Enlightenment by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Merciless",
        "description": "Strikes enemies within range 3 times, with each strike dealing ."
      },
      "battle": {
        "name": "Nickel and Dime",
        "description": "Deals  to enemies within range and ignores  of the enemies' Defense when the skill hits  enemies and more, then gains  Shadow Energy."
      },
      "passive": {
        "name": "Heart of Treachery",
        "description": "Deals additional  whenever the hero's skill deals damage to enemies."
      }
    },
    "inspiration": [],
    "id": 21990
  },
  {
    "slug": "taldie",
    "name": "Taldie",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "Increases all allies' Defense by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Tide of Shadow",
        "description": "Strikes enemies within range 3 times, with each strike dealing , granting all Shadow allies  Shadow Energy."
      },
      "battle": {
        "name": "Envoy of Nightfall",
        "description": "Casts the spell  times. Each time gains  Shadow Energy."
      },
      "passive": {
        "name": "Ally of Darkness",
        "description": "When gaining Shadow Energy, grants  of the obtained energy to another Shadow ally."
      }
    },
    "inspiration": [],
    "id": 22260
  },
  {
    "slug": "narzilla",
    "name": "Narzilla",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Ranger",
    "captain": "Increases all allies' Attack by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Archery Show",
        "description": "Gains  Aura Energy and  for s, and deals  to the enemy. For the next s, whenever an Aura ally attacks, the hero performs a coordinated attack, dealing . This effect can only trigger once every s. Each coordinated attack can consume  Aura Energy to deal an additional ."
      },
      "battle": {
        "name": "Lightbreaker Arrow",
        "description": "Gains  Aura Energy and deals  to the enemy. If Aura Energy is above 50, consumes  Aura Energy to extend the duration of all of the hero's current buffs by s."
      },
      "passive": {
        "name": "Sing Your Heart Out",
        "description": "For each buff on the hero, the hero gains  Damage Up, up to  stacks."
      }
    },
    "inspiration": [],
    "id": 20880
  },
  {
    "slug": "gragrir",
    "name": "Gragrir",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Orc",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Eradication",
        "description": "Deals  to enemies within range. Then consumes the target's  Corrosion to deal ."
      },
      "battle": {
        "name": "Affliction Slash",
        "description": "Strikes an enemy twice, each dealing ."
      },
      "passive": {
        "name": "Crazy Bravery",
        "description": "When an enemy with Corrosion dies, the hero gains  for s and restores  Ultimate Energy. (The effect triggers once every s.)"
      }
    },
    "inspiration": [],
    "id": 21590
  },
  {
    "slug": "theohein",
    "name": "Theohein",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Gnome",
    "career": "Demolitionist",
    "captain": "Increases all allies' Attack by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Formal Bombing",
        "description": "Gains  Aura Energy and deals  to enemies within range. If Aura Energy is above 50, consumes  Aura Energy to deal an additional ."
      },
      "battle": {
        "name": "Small-scale Testing",
        "description": "Gains  Aura Energy and attacks enemies within range three times, dealing  each time."
      },
      "passive": {
        "name": "High Purity Extraction",
        "description": "When using a basic attack, the hero can consume  Aura Energy to deal an additional ."
      }
    },
    "inspiration": [],
    "id": 22820
  },
  {
    "slug": "tatoth",
    "name": "Tatoth",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Shadow",
    "season": "s3",
    "type": "Range",
    "race": "Goblin",
    "career": "Scourge",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .",
    "skills": {
      "ultimate": {
        "name": "Spikeball Mayhem",
        "description": "Strikes enemies within range over time, with each strike consuming  Shadow Energy and dealing  to them. During a single cast of this skill, each strike increases the damage of the subsequent strike by , up to  times."
      },
      "battle": {
        "name": "Bouncing Bomb",
        "description": "Fires an orb that can bounce up to  times between enemies. Each hit deals  and grants  Shadow Energy."
      },
      "passive": {
        "name": "Malicious Joy",
        "description": "Each enemy defeated restores the hero's Shadow Energy by ."
      }
    },
    "inspiration": [],
    "id": 21360
  },
  {
    "slug": "careth",
    "name": "Careth",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Aura",
    "season": "s3",
    "type": "Range",
    "race": "Dwarf",
    "career": "Wizard",
    "captain": "Increases Crit Damage for all allies by  in Fey Meander and Trial Breakthrough battles.",
    "skills": {
      "ultimate": {
        "name": "Ancestral Power",
        "description": "Grants  Aura Energy to all Aura allies. Then deals  to enemies within range with a 100% chance of inflicting  for s. Consumes all of the hero's Aura Energy, extending the duration of  by s for every  Aura Energy."
      },
      "battle": {
        "name": "Fearless",
        "description": "Gains  Aura Energy, dealing  to enemies within range."
      },
      "passive": {
        "name": "Mark of Courage",
        "description": "When any ally Aura hero has over 50 Aura Energy, the hero grants  to them."
      }
    },
    "inspiration": [],
    "id": 21190
  },
  {
    "slug": "gegnu",
    "name": "Gegnu",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Gnome",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Battering Ram",
        "description": "Strikes enemies within range 3 times, with each strike dealing ."
      },
      "battle": {
        "name": "Spike Trap",
        "description": "Deals  to enemies within range."
      },
      "passive": {
        "name": "Fatal Curse",
        "description": "When surrounding enemies take Poison Damage from Corrosion heroes, Corrosion Intensity is increased by ."
      }
    },
    "inspiration": [],
    "id": 21510
  },
  {
    "slug": "nessa",
    "name": "Nessa",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s3",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Arcane Warrior",
    "captain": "Increases all allies' Attack by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Glaring Steps",
        "description": "Flashes to the target and slashes at them twice. The first slash deals  to the target, with a  chance of inflicting  for s. The second slash deals , with a  chance of inflicting  for s. Finally, returns to the hero's original location."
      },
      "battle": {
        "name": "Twilight Strike",
        "description": "Throws a dagger, inflicting  on the enemy for s, then rushes to the target and slashes them to deal ."
      },
      "passive": {
        "name": "Leverage",
        "description": "When the hero's skill deals damage to enemies with debuffs, reduces their Ultimate Energy by ."
      }
    },
    "inspiration": [],
    "id": 20910
  },
  {
    "slug": "vex",
    "name": "Vex",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "Scourge",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Traceless Rat",
        "description": "Attacks an enemy 3 times, each dealing [+290%Attack]Lightning Damage. The final attack triggers 1 Lightning Chain."
      },
      "battle": {
        "name": "Illusion Trap",
        "description": "Attacks the current enemy twice, each dealing [+210%Attack]Lightning Damage. If the target has Electrocuted, the hero has a 40% chance of gaining 10.0 Ultimate Energy."
      },
      "passive": {
        "name": "Nimble Steps",
        "description": "Basic attacks have a 20.0% chance of inflicting Electrocuted for 8.0s."
      }
    },
    "inspiration": [],
    "id": 22590
  },
  {
    "slug": "lyle",
    "name": "Lyle",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "Wizard",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Fire Booster",
        "description": "Deals [+550%Attack]Fire Damage to enemies within range. Triggers Blast once on enemies inflicted with Burn."
      },
      "battle": {
        "name": "Screaming Fire Spirit",
        "description": "Unleashes a Fireball that bounces between enemies up to 5 times. Each hit deals [+100%Attack]Fire Damage and inflicts 20% Ignite. The Fireball prioritizes bouncing to enemies not inflicted with Burn."
      },
      "passive": {
        "name": "Fire Frenzy",
        "description": "For each enemy on the field inflicted with Burn, the hero gains 1 stack of 5% Attack Up, up to 10 stacks."
      }
    },
    "inspiration": [],
    "id": 21280
  },
  {
    "slug": "gerthin",
    "name": "Gerthin",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Frozen Moment",
        "description": "Jumps toward an enemy, dealing [+780%Attack]Cold Damage and gaining 1 stack of Ice Crystal."
      },
      "battle": {
        "name": "Heart of Frost",
        "description": "Strikes an enemy twice, each dealing [+290%Attack]Cold Damage. Then the hero gains 20% Crit Rate Up for 5.0s. Gains 1 stack of Ice Crystal immediately if the skill kills any enemy."
      },
      "passive": {
        "name": "Crystal Trigger",
        "description": "If the hero has Ice Crystal after casting a battle skill, consumes 1 stack of Ice Crystal and casts the skill again. Upon obtaining Ice Crystal, the hero gains 15% Crit Damage Up for 5.0s, up to 5 stacks."
      }
    },
    "inspiration": [],
    "id": 21180
  },
  {
    "slug": "nadja",
    "name": "Nadja",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Tigerfolk",
    "career": "Monk",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Ice Volley",
        "description": "Throws an Ice Lance at an enemy to deal [+600%Attack]Cold Damage to them and the nearby enemies. Upon hitting each enemy, the hero has a 30% chance to obtain 1 stack of Ice Crystal Additional Effect: The hero gains 15% Attack Up for 10.0s."
      },
      "battle": {
        "name": "Piercing Icelance",
        "description": "Deals [+275%Attack]Cold Damage to an enemy, with every stack of Ice Crystal on the hero increasing the damage dealt by 10%. Additional Effect: Additionally deals [+4%Target's Max HP]Cold Damage (No more than 200% of the hero's Attack)"
      },
      "passive": {
        "name": "Ice Outburst",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When possessing 3 and above stacks of Ice Crystal, skills released will have additional effects."
      }
    },
    "inspiration": [],
    "id": 22080
  },
  {
    "slug": "volthug",
    "name": "Volthug",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s2",
    "type": "Melee",
    "race": "Orc",
    "career": "Warrior",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Resistance by 40.0.",
    "skills": {
      "ultimate": {
        "name": "Who Dares Stop Me",
        "description": "Hammers 3 times at the target direction, each dealing [+250%Defense]Lightning Damage to enemies within range, with a 50% chance to dispel 1 buff from them. If enemies don't have any buff after 3 hammer strikes, the skill has a 75.0% chance to inflict Attack Penalty I and Accuracy Penalty II on them for 10.0s."
      },
      "battle": {
        "name": "Indomitable Will",
        "description": "Gains Defense Up I for 5.0s and deals [+300%Defense]Lightning Damage to enemies within range. Meanwhile, gains a [+15%Max HP]shield for 10.0s."
      },
      "passive": {
        "name": "Lone Wanderer",
        "description": "For each buff on the hero, the hero gains extra 15.0 Accuracy and 15% Defense Up. This effect stacks up to 10 times."
      }
    },
    "inspiration": [],
    "id": 23270
  },
  {
    "slug": "manda",
    "name": "Manda",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Range",
    "race": "Gnome",
    "career": "Summoner",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Overclock",
        "description": "Grants Attack Speed Up II and 15% Attack Up to all turrets for 10.0s. The chance of inflicting Electrocuted by the turrets' basic attacks is increased to 40% within the next 10.0s."
      },
      "battle": {
        "name": "Crystal Cannon",
        "description": "Summons a turret, which occupies one tile on the battlefield and has a certain amount of HP, with unlimited duration. It will attack enemies at regular intervals. There can be up to two turrets on the battlefield at the same time. When reaching max turrets upon casting this skill, heals all turrets on the field by [+50%Target's Max HP]."
      },
      "passive": {
        "name": "Flanking Maneuver",
        "description": "The hero and the turrets will prioritize enemies that are not inflicted with Electrocuted. In addition, each time the hero and the turrets successfully inflict Electrocuted, each turret gains 1 stack of Attack Up, up to 10 stacks. A newly created turret will inherit all Attack Up stacks previously gained."
      }
    },
    "inspiration": [],
    "id": 21540
  },
  {
    "slug": "eirnin",
    "name": "Eirnin",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "Gunslinger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Forceful Raid",
        "description": "Fires three waves of projectiles, each dealing [+200%Attack]Fire Damage to enemies within range. If a hit enemy is inflicted with Burn, deals [+125%Attack]Fire Damage to the target and surrounding enemies."
      },
      "battle": {
        "name": "Surprise Raid",
        "description": "Fires a bullet that bounces between enemies up to 4 times. Each hit deals [+165%Attack]Fire Damage and inflicts 20% Ignite. Prioritizes bouncing to targets inflicted with Burn."
      },
      "passive": {
        "name": "Forward Planning",
        "description": "Damage dealt to enemies inflicted with Burn is increased by 4% for each stack of Burn they possess."
      }
    },
    "inspiration": [],
    "id": 22380
  },
  {
    "slug": "hirvolm",
    "name": "Hirvolm",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Arcane Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Thundrous Moment",
        "description": "Deals [+400%Attack]Lightning Damage to enemies within range, and triggers 1 Lightning Chain."
      },
      "battle": {
        "name": "Lightning Impact",
        "description": "Deals [+320%Attack]Lightning Damage to enemies within range, with a 40.0% chance of inflicting Electrocuted for 8.0s."
      },
      "passive": {
        "name": "Electric Induction",
        "description": "Each time a Lightning Chain triggers on the field, the hero gains 10.0 Ultimate Energy. This effect can only occur once every 3.0s."
      }
    },
    "inspiration": [],
    "id": 20850
  },
  {
    "slug": "zraacs",
    "name": "Zraacs",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Goblin",
    "career": "Demolitionist",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Mystical Turret",
        "description": "Summons a turret at the target location for 25.0s. The turret will attack enemies within range periodically."
      },
      "battle": {
        "name": "Arcane Grenade",
        "description": "Deals [+320%Attack]Fire Damage to enemies within range and inflicts 50% Ignite."
      },
      "passive": {
        "name": "Joy of the Torturer",
        "description": "When the hero or their summoned units deal damage to enemies inflicted with Burn, they additionally inflict 10% Ignite on the targets."
      }
    },
    "inspiration": [],
    "id": 20020
  },
  {
    "slug": "bleddyn",
    "name": "Bleddyn",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Human",
    "career": "Ranger",
    "captain": "Increases all allies' Max HP by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Winter Hunter",
        "description": "Grants 20% Attack Up for 10.0s and 2 stacks of Ice Crystal to the hero and the Ice Blast ally with the highest Attack. Then strikes the enemy 3 times, each dealing [+260%Attack]Cold Damage, with an additional 20% chance of triggering a critical hit."
      },
      "battle": {
        "name": "Tundra Archery",
        "description": "Strikes the enemy twice, each dealing [+190%Attack]Cold Damage, with an additional 20% chance of triggering a critical hit."
      },
      "passive": {
        "name": "Ranger Spirit",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When the hero's skill triggers a critical hit, there is a 20% chance of granting 1 stack of Ice Crystal to 1 Ice Blast ally."
      }
    },
    "inspiration": [],
    "id": 22110
  },
  {
    "slug": "rowena",
    "name": "Rowena",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Reaping Frostbolts",
        "description": "Deals [+560%Attack]Cold Damage to enemies within range that are not inflicted with Frost and [+800%Attack]Cold Damage to enemies inflicted with Frost within range."
      },
      "battle": {
        "name": "Frost Reaping",
        "description": "Deals [+365%Attack]Cold Damage to the enemy with the lowest Current HP, with a 50.0% chance of inflicting Frost for 10.0s."
      },
      "passive": {
        "name": "Piercing Cold",
        "description": "When attacking enemies under Frost, ignores 20% of their Defense. For every 5% Crit Rate the hero possesses, the attack ignores 1% more Defense, up to 20%."
      }
    },
    "inspiration": [],
    "id": 21290
  },
  {
    "slug": "nathaniel",
    "name": "Nathaniel",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Max HP by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Dawning Light",
        "description": "Deals [+550%Attack]Lightning Damage to enemies within range and grants a [+10%Target's Max HP][+1800%Enlightenment] shield and Defense Up I to all allies for 10.0s. For each enemy hit by the skill, the shield increases by 10%."
      },
      "battle": {
        "name": "Guiding Light",
        "description": "Dispels 1 debuff from allies within range and grants them with 1 stack of Recovery Over Time for 5.0s."
      },
      "passive": {
        "name": "Slumber's Breath",
        "description": "When a buff expires or is dispelled from any target on the field, heals the ally with the lowest Current HP by [+5%Max HP]. This effect can only be triggered once every 1.0s."
      }
    },
    "inspiration": [],
    "id": 23280
  },
  {
    "slug": "rava",
    "name": "Rava",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "Shaman",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Chill Formation",
        "description": "Summons a nexus that lasts 10.0s in a designated area, dealing [+50%Attack]Cold Damage to enemies within range every 1.5s, with a 75.0% chance of inflicting Frost for 10.0s. Upon expiration, the nexus will explode, dealing [+360%Attack]Cold Damage to enemies within range."
      },
      "battle": {
        "name": "Permeating Coldness",
        "description": "Fires at most 3 Orbs at random enemies, each dealing [+260%Attack]Cold Damage with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "passive": {
        "name": "Icy Echo",
        "description": "For each enemy under Frost on the field, the hero gains a stack of Attack Up, up to 3 stacks."
      }
    },
    "inspiration": [],
    "id": 21620
  },
  {
    "slug": "brody",
    "name": "Brody",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Rogue",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Raider's Fury",
        "description": "Removes shield from enemies in range and deals [+600%Defense]Fire Damage, then gains Defense Up I for 6.0s."
      },
      "battle": {
        "name": "Raider's Scimitar",
        "description": "Deals [+330%Defense]Fire Damage to enemies within range, with a 50.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Raider's Protection",
        "description": "When an enemy obtains a shield, the hero also gains shield which equals to 50% of the enemy's shield, up to 80% of the hero's Max HP. This effect can only be triggered once every 0.5s."
      }
    },
    "inspiration": [],
    "id": 20360
  },
  {
    "slug": "naguk",
    "name": "Naguk",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Rolling Thunder",
        "description": "Deals [+520%Attack]Lightning Damage to all enemies, extending the range of the static field to the entire battlefield for 12.0s."
      },
      "battle": {
        "name": "Lightning Blessing",
        "description": "Gains a [+10%Max HP] shield for 10.0s."
      },
      "passive": {
        "name": "Lightning Ground",
        "description": "A static field exists around the hero, dealing [+32%Attack]Lightning Damage to surrounding enemies every 1.0s. Upon taking damage from the static field every 10 times, an enemy has a 100.0% chance of being inflicted with Stunned for 3.0s."
      }
    },
    "inspiration": [],
    "id": 21580
  },
  {
    "slug": "thia",
    "name": "Thia",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Ranger",
    "captain": "Increases all allies' Accuracy by 40.0 in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Deadly Accuracy",
        "description": "Grants Invisibility and Debuff Immunity to all ranged allies for 10.0s, then deals [+850%Attack]Necrotic Damage with a 75.0% chance of inflicting Healing Prohibition on enemies for 10.0s."
      },
      "battle": {
        "name": "Protection of Darkness",
        "description": "Heals the ally with the lowest Current HP and the allies with Invisibility by [+200%Attack][+2000%Enlightenment]. Each ally can be healed only once per cast."
      },
      "passive": {
        "name": "Stealth Instinct",
        "description": "Grants Invisibility to the hero for 5.0s when damage higher than 10% of their Max HP is sustained. This can only take effect once every 10.0s. In addition, allies under Invisibility take 15% less damage."
      }
    },
    "inspiration": [],
    "id": 21050
  },
  {
    "slug": "catherine",
    "name": "Catherine",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Unfading Radiance",
        "description": "Heals allies within range by [+15%Target's Max HP][+2500%Enlightenment] and grants them Debuff Immunity for 10.0s."
      },
      "battle": {
        "name": "Aegis of Perseverance",
        "description": "Heals the ally with the lowest Current HP by [+15%Target's Max HP][+2500%Enlightenment] and grants the ally Defense Up I for 5.0s."
      },
      "passive": {
        "name": "Glory's Blessing",
        "description": "When the ally's HP is fully restored, 50% of the overflowing healing from the hero is converted into a shield for 10.0s."
      }
    },
    "inspiration": [],
    "id": 23210
  },
  {
    "slug": "horace",
    "name": "Horace",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Gunslinger",
    "captain": "Increases all allies' Enlightenment by 36.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Bullet Storm",
        "description": "Deals [+600%Attack]Poison Damage to enemies within range. When hitting enemies under Poison, triggers Poison Explosion once."
      },
      "battle": {
        "name": "Poison Bomb",
        "description": "Hurls a poison bomb at the target, dealing [+340%Attack]Poison Damage to enemies within a target-centered range, with a 50.0% chance of inflicting 3 stacks of Poison for 15.0s."
      },
      "passive": {
        "name": "Twist the Knife",
        "description": "When the hero deals damage to an enemy under Poison, every stack of Poison on the target increases  1% Crit Rate of this damage."
      }
    },
    "inspiration": [],
    "id": 20130
  },
  {
    "slug": "adolphus",
    "name": "Adolphus",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Fiery Wall",
        "description": "Deals [+450%Attack][+3200%Enlightenment]Fire Damage to enemies within range and grants a [+15%Target's Max HP][+3150%Enlightenment] Shield to all allies."
      },
      "battle": {
        "name": "Aura of Protection",
        "description": "Grants a [+10%Target's Max HP][+2800%Enlightenment] Shield to an ally for 10.0s, increasing their Ultimate Energy by 10.0."
      },
      "passive": {
        "name": "Life Transfusion",
        "description": "If the target already has a shield when the hero grants them a shield, additionally heals them equal to 75% of the shield granted."
      }
    },
    "inspiration": [],
    "id": 23250
  },
  {
    "slug": "soveliss",
    "name": "Soveliss",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Ranger",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Protective Isolation",
        "description": "Fires 2 rounds of Hail of Arrows, each dealing [+320%Attack]Cold Damage to enemies within range, with a 50% chance of reducing their Ultimate Energy by 30.0."
      },
      "battle": {
        "name": "Driftwood as Home",
        "description": "Heals an ally by [+10%Target's Max HP] and grants them Hit Recovery for 5.0s."
      },
      "passive": {
        "name": "Investigation",
        "description": "When an enemy is inflicted with Invisibility, shoots an arrow to them, dealing [+200%Attack]Cold Damage and removing their Invisibility, with a 100.0% chance of inflicting Attack Penalty II on them for 5.0s. This skill only takes effect on the same target once every 10.0s."
      }
    },
    "inspiration": [],
    "id": 21000
  },
  {
    "slug": "eli",
    "name": "Eli",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Ranger",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Hail of Arrows",
        "description": "Shoots 3 waves of bolts in a designated direction, each wave dealing [+265%Attack]Poison Damage."
      },
      "battle": {
        "name": "Poisonous Arrow",
        "description": "Gains Attack Speed Up I for 6.0s. In each subsequent basic attack, shoots an additional crossbow bolt at a random enemy, dealing [+120%Attack]Poison Damage with a 100.0% chance of inflicting 1 stack(s) of Poison for 15.0s."
      },
      "passive": {
        "name": "No Loose Ends",
        "description": "When dealing damage to enemies under Poison, additionally deals [+40%Attack]Derivative."
      }
    },
    "inspiration": [],
    "id": 20280
  },
  {
    "slug": "zadok",
    "name": "Zadok",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "Summoner",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Moment of Revenge",
        "description": "Shoots 3 energy waves in a designated direction, each dealing [+235%Attack]Necrotic Damage."
      },
      "battle": {
        "name": "Undead Companions",
        "description": "Deals [+300%Attack]Necrotic Damage to the target and gains 2 stacks of Soul Lantern."
      },
      "passive": {
        "name": "Deep-Rooted Hatred",
        "description": "When an allied undead summoned unit dies, gains 5.0 Ultimate Energy and 1 stack of Soul Lantern, up to 20 stacks."
      }
    },
    "inspiration": [],
    "id": 20220
  },
  {
    "slug": "iola",
    "name": "Iola",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Resounding Truth",
        "description": "Summons lightning to strike the target area 3 times, dealing [+229%Attack]Lightning Damage each time to enemies within range, with a 50.0% chance of inflicting Silence for 5.0s and a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Flaws Denounced",
        "description": "Fires two lightning orbs at the enemy, each dealing [+200%Attack]Lightning Damage, with a 50.0% chance of inflicting Silence for 5.0s."
      },
      "passive": {
        "name": "Mistakes Denied",
        "description": "When attacking enemies under Silence, there is a 40% chance of changing Silence into Stunned."
      }
    },
    "inspiration": [],
    "id": 20640
  },
  {
    "slug": "caraman",
    "name": "Caraman",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "Sorcerer",
    "captain": "Increases all allies' Crit Damage by 24% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Firestorm's Fury",
        "description": "Charges at an enemy, dealing [+750%Attack]Fire Damage. This damage ignores 30% of the target's Defense."
      },
      "battle": {
        "name": "Blazing Kill",
        "description": "Blinks behind the enemy with the lowest Current HP and deals [+420%Attack]Fire Damage, then selects this target for attacks. Resets this skill's recharge time after killing an enemy."
      },
      "passive": {
        "name": "Searing Godspeed",
        "description": "When the hero's Wild dice roll ≥4, gains 15% Attack Up and Attack Speed Up I for 5.0s."
      }
    },
    "inspiration": [],
    "id": 21950
  },
  {
    "slug": "gareth",
    "name": "Gareth",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Desolate Slash",
        "description": "Deals [+620%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 6.0s."
      },
      "battle": {
        "name": "Steady as He Goes",
        "description": "The hero gains Defense Up II for 5.0s, then strikes at an enemy, dealing [+340%Defense]Poison Damage, and reduces the damage taken from that enemy by 30% for 5s."
      },
      "passive": {
        "name": "Frontier Resilience",
        "description": "When receiving single-instance damage exceeding 10% of Current HP, recovers HP equal to 50% of that damage."
      }
    },
    "inspiration": [],
    "id": 23170
  },
  {
    "slug": "gardrus",
    "name": "Gardrus",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "Ranger",
    "captain": "Increases all allies' Resistance by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Mighty Arrow",
        "description": "Shoots a magic Crossbow Bolt in a designated direction, dealing [+620%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Knocked Up and Knocking Back enemies to the farthest point possible. Then there is a 100.0% chance of inflicting Stunned for 3.0s and a 100.0% chance of inflicting Recharging Speed Penalty for 5.0s on them."
      },
      "battle": {
        "name": "Take Aim",
        "description": "Deals [+400%Attack]Cold Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Powerful Lineage",
        "description": "The hero has a 25% chance to immunize the inflicted debuff. Each time the hero gets immune, recharges Ultimate Energy by 25.0."
      }
    },
    "inspiration": [],
    "id": 21160
  },
  {
    "slug": "kamari",
    "name": "Kamari",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Paladin",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Mercy of Holy Light",
        "description": "Resurrects the most recently dead ally at 60% of their Max HP, restoring 75% of the resurrected ally's Ultimate Energy before death. Heals the ally with the lowest Current HP by [+40%Target's Max HP] if there is no dead ally."
      },
      "battle": {
        "name": "True Courage",
        "description": "Charges toward the enemy, with a 100.0% chance of Knocking Up the target and dealing [+200%Attack][+8%Max HP]Radiant Damage."
      },
      "passive": {
        "name": "Embattle",
        "description": "When a battle begins, grants Defense Up II to allies within range for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20470
  },
  {
    "slug": "isitarian",
    "name": "Isitarian",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Cleric",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Ancient Dragon Spell",
        "description": "Grants 25% Attack Up and Defense Up II to 2 undead summoned units with highest Attack for 10.0s. If dragon remnant has been defeated, resummons it."
      },
      "battle": {
        "name": "Evil Flame's Call",
        "description": "Attacks the enemy with lowest HP, dealing AOE [+120%Attack]Necrotic Damage centered on them. For each existing undead summoned unit, dragon remnant performs 1 additional attack on the target, up to 3 times. Additional attacks deal [+120%Attack]Necrotic Damage."
      },
      "passive": {
        "name": "Constant Shadow",
        "description": "At battle start, summons dragon remnant to assist in combat."
      }
    },
    "inspiration": [],
    "id": 21690
  },
  {
    "slug": "dane",
    "name": "Dane",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Warlock",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 24%.",
    "skills": {
      "ultimate": {
        "name": "Yours? Mine!",
        "description": "Has a 75% chance to dispel 2 buffs from enemies within range, dealing [+650%Attack]Fire Damage, with a 75.0% chance of inflicting Attack Penalty I for 10.0s. When targetting enemies with HP below 50%, steals all their buffs instead."
      },
      "battle": {
        "name": "Firebath",
        "description": "Deals [+300%Attack]Fire Damage to enemies within range. When dealing damage to enemies with HP less than 50%, has a 75.0% chance of inflicting Fear for 3.0s and Healing Prohibition for 5.0s on them."
      },
      "passive": {
        "name": "At Your Weakest",
        "description": "When the hero deals damage to enemies with less than 50% HP by skills, recharges Ultimate Energy by 15.0. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 20700
  },
  {
    "slug": "gladros",
    "name": "Gladros",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Resistance by 40.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Encircling Guard",
        "description": "Grants a [+300%Attack][+4%Max HP] shield to each ally within range for 10.0s. Any ally under this shield gains Debuff Immunity during the shield duration."
      },
      "battle": {
        "name": "Sneaky Hand",
        "description": "Deals [+300%Attack]Necrotic Damage to the enemy with the highest Attack with a 75% chance of stealing 25% of their Attack for 5.0s. The stolen Attack is capped at 50% of the hero's Attack."
      },
      "passive": {
        "name": "Shadow Companion",
        "description": "When an ally with a shield is inflicted with any Control effect, dispels their shield to grant immunity to that instance of Control effect."
      }
    },
    "inspiration": [],
    "id": 23140
  },
  {
    "slug": "joyce",
    "name": "Joyce",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Sorcerer",
    "captain": "Increases all allies' Crit Damage by 24% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Reprise",
        "description": "Summons a Fortune Phantom at the designated location for 45.0s. Up to 3 Fortune Phantoms can exist at the same time."
      },
      "battle": {
        "name": "Mimicry Performance",
        "description": "Deals [+210%Attack]Necrotic Damage to the enemy with the lowest Current HP. When there is a Fortune Phantom summoned by the hero on the field, it will emulate casting this skill and deal [+210%Attack]Necrotic Damage."
      },
      "passive": {
        "name": "Soul Linkage",
        "description": "Gains 10.0 Ultimate Energy for each summoned unit created."
      }
    },
    "inspiration": [],
    "id": 21930
  },
  {
    "slug": "lethander",
    "name": "Lethander",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Shattering Ice Blast",
        "description": "Deals [+720%Attack]Cold Damage to enemies within range, with a 75.0% chance of inflicting Recharging Speed Penalty and Accuracy Penalty I on the targets for 10.0s."
      },
      "battle": {
        "name": "Frosty Beams",
        "description": "Deals [+430%Attack]Cold Damage to the enemy, with a 30.0% chance of inflicting Frozen for 5.0s."
      },
      "passive": {
        "name": "Vigilant Gaze",
        "description": "When an enemy dies, the hero gains their remaining Ultimate Energy."
      }
    },
    "inspiration": [],
    "id": 21080
  },
  {
    "slug": "questa",
    "name": "Questa",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Scourge",
    "captain": "Increases all allies' Attack by 24% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Marrow Devouring",
        "description": "Jumps toward an enemy, dealing [+950%Attack]Necrotic Damage, stealing 30.0 of their Ultimate Energy and healing the hero by  [+475%Attack]."
      },
      "battle": {
        "name": "Tormentation",
        "description": "Charges toward the enemy with the lowest Current HP, dealing [+420%Attack]Necrotic Damage with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Bloodthirst",
        "description": "Every time an enemy hero dies, grants Recovery Over Time to all allies for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20600
  },
  {
    "slug": "voresh",
    "name": "Voresh",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Glacial Curse",
        "description": "Deals [+180%Attack]Cold Damage 3 times to all enemies with a 75.0% chance of inflicting Buff Prohibition for 10.0s."
      },
      "battle": {
        "name": "Glacial Blow",
        "description": "Deals [+120%Attack]Cold Damage to the enemy 3 times. When dealing damage, has a 30% chance of dispelling 1 buff from them."
      },
      "passive": {
        "name": "Breath of Ice",
        "description": "Heals the ally with the lowest Current HP by [+70%Attack] when dealing damage. This effect will only trigger once when dealing damage to multiple targets."
      }
    },
    "inspiration": [],
    "id": 22290
  },
  {
    "slug": "isolde",
    "name": "Isolde",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Flame Guardian",
        "description": "Deals [+400%Attack][+9%Max HP]Fire Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s; Meanwhile, grants a [+14%Max HP] Shield to allies within range for 10.0s."
      },
      "battle": {
        "name": "Pursue Vengeance",
        "description": "Deals [+300%Attack][+8%Max HP]Fire Damage to the current target and grants Defense Up I to allies within range for 5.0s."
      },
      "passive": {
        "name": "Comrades in Arms",
        "description": "Shield granted by the hero reduces ally's damage taken by 15%."
      }
    },
    "inspiration": [],
    "id": 23240
  },
  {
    "slug": "frurbath",
    "name": "Frurbath",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Forest Troll",
    "career": "Shaman",
    "captain": "Increases all allies' Defense by 24% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Voodoo Conjuration",
        "description": "Deals [+600%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Voodoo Therapy",
        "description": "Generates a healing nexus around the hero for 6.0s, healing allies within range by [+50%Defense] every 1s."
      },
      "passive": {
        "name": "Torment and Delight",
        "description": "When dealing damage to enemies under debuffs, the hero has a 30% chance of healing the ally with the lowest Current HP by [+150%Defense] and dispelling 1 debuffs from them. The more debuffs on the targets, the higher the healing amount. This effect can only be triggered once every 1.0s."
      }
    },
    "inspiration": [],
    "id": 21670
  },
  {
    "slug": "garius",
    "name": "Garius",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warlock",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Hold Your Horses",
        "description": "Dispels all debuffs from the hero, and heals all allies by [+500%Defense]."
      },
      "battle": {
        "name": "Selfish Gains",
        "description": "Deals [+400%Defense]Radiant Damage to the enemy with a 100.0% chance to knock up the target. Then grants Hit Recovery to the hero for 5.0s."
      },
      "passive": {
        "name": "Rugged Tenacity",
        "description": "When taking damage, the hero has a 50% chance to gain 1 stack of Defense Up permanently. The status is undispellable and can be stacked up to 30 stacks."
      }
    },
    "inspiration": [],
    "id": 20210
  },
  {
    "slug": "irma",
    "name": "Irma",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Ridge Halfling",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Serene Domain",
        "description": "Deals [+740%Defense]Necrotic Damage to enemies within range and grants Control Immunity and 30% Damage Reduction to allies within range for 10.0s."
      },
      "battle": {
        "name": "Heart of Guardian",
        "description": "Deals [+355%Defense]Necrotic Damage to an enemy and gains Hit Recovery for 5.0s."
      },
      "passive": {
        "name": "Night Sentinel",
        "description": "Has a 30% chance of recharging the hero's Ultimate Energy by 3.0 when taking damage. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 23120
  },
  {
    "slug": "eches",
    "name": "Eches",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Scourge",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Bewitching Dance",
        "description": "Deals [+550%Attack]Poison Damage to enemies within range, with a 35.0% chance of inflicting Charmed for 5.0s and an 85.0% chance of inflicting Recharging Speed Penalty for 10.0s. Then dispels 1 debuff from all allies."
      },
      "battle": {
        "name": "Blade Cyclone",
        "description": "Deals [+280%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Healing Reduction for 5.0s."
      },
      "passive": {
        "name": "Agonizing Poison",
        "description": "When inflicting debuffs on enemies, reduces their damage dealt by 10% at the same time."
      }
    },
    "inspiration": [],
    "id": 20750
  },
  {
    "slug": "vicuc",
    "name": "Vicuc",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Blessing of the Forest",
        "description": "Dispels 2 debuffs from each ally and heals them by [+15%Target's Max HP]. For each debuff successfully dispelled on an ally, the healing on that ally is increased by 25%."
      },
      "battle": {
        "name": "Valor of the Forest",
        "description": "Deals [+300%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "passive": {
        "name": "Mark of the Forest",
        "description": "When the hero is inflicted with a debuff, there is a 100.0% chance of inflicting Accuracy Penalty II on the debuff caster for 5.0s."
      }
    },
    "inspiration": [],
    "id": 23190
  },
  {
    "slug": "estella",
    "name": "Estella",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 24%.",
    "skills": {
      "ultimate": {
        "name": "Defense Domain",
        "description": "Casts the spell for 6s. Grants [+1%Max HP][+500%Enlightenment] healing to two allies with the lowest percentage of HP every 0.2s in this period."
      },
      "battle": {
        "name": "Aid Mark",
        "description": "Grants Debuff Immunity and Defense Up II to an ally for 5.0s. The skill prioritizes allies marked by the hero."
      },
      "passive": {
        "name": "Flickering Candlelight",
        "description": "As the battle starts, marks the ally with the highest HP and increases the healing and shield they receive by 25%."
      }
    },
    "inspiration": [],
    "id": 23130
  },
  {
    "slug": "zharloth",
    "name": "Zhar'loth",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Fallen Soul",
    "career": "Sorcerer",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Abysmal Dread",
        "description": "Summons a prison at the designated location for 5.0s, dealing [+162%Attack]Necrotic Damage to enemies within range every 1.0s for the duration of the prison, with a 35.0% chance of inflicting Fear on enemies for 5.0s. Heals all allies by [+30%Attack] at the meantime. Each enemy hit by this skill increases the healing by 15%."
      },
      "battle": {
        "name": "Shadow of Chaos",
        "description": "Deals [+380%Attack]Necrotic Damage to enemies within range, with a 75.0% chance of inflicting Recharging Speed Penalty for 5.0s."
      },
      "passive": {
        "name": "Corrupting Order",
        "description": "Every 4th basic attack heals the ally with the lowest Current HP by [+300%Attack], with a 100.0% chance of inflicting Silence on the enemy for 5.0s."
      }
    },
    "inspiration": [],
    "id": 22320
  },
  {
    "slug": "vasska",
    "name": "Vasska",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "The Unstill",
    "career": "Scourge",
    "captain": "Increases all allies' Attack by 24% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Death Reaping",
        "description": "Deals [+730%Attack]Necrotic Damage to enemies in the target area. When this skill kills an enemy, summons a Spirit lasting 15.0s at the target's location."
      },
      "battle": {
        "name": "Restless Soul",
        "description": "Summons a Spirit lasting 15.0s, and gains 15% Attack Up for 5.0s."
      },
      "passive": {
        "name": "Bloodthirsty Scythe",
        "description": "When the hero or their summoned units deal damage, the hero receives [+100%Attack] healing."
      }
    },
    "inspiration": [],
    "id": 22270
  },
  {
    "slug": "lydia",
    "name": "Lydia",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Rural Halfling",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "United Defense",
        "description": "Grants Control Immunity to all allies for 10.0s and unleashes the battle skill once."
      },
      "battle": {
        "name": "Relentless Heart",
        "description": "Gains Immortality for 5.0s."
      },
      "passive": {
        "name": "Faith in Kinship",
        "description": "Every 5th basic attack grants a [+20%Max HP] shield to the hero and a [+10%Max HP] shield to the ally with the lowest Current HP for 12.0s."
      }
    },
    "inspiration": [],
    "id": 20440
  },
  {
    "slug": "corrin",
    "name": "Corrin",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "Wizard",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Enlightenment by 48.0.",
    "skills": {
      "ultimate": {
        "name": "Outlander's Bane",
        "description": "Refreshes the duration of Poison on an enemy, up to 30 stacks, then triggers Poison Explosion, spreading Poison to nearby enemies and dealing [+400%Attack][+900%Enlightenment]Poison Damage."
      },
      "battle": {
        "name": "Outlander's Bad Luck",
        "description": "Launches 3 venomous attacks on the nearest enemy, dealing [+100%Attack]Poison Damage with a 75.0% chance of inflicting Poison for 15.0s each time."
      },
      "passive": {
        "name": "Outlander's Curse",
        "description": "When an enemy inflicted with Poison dies, their Poison spreads to nearby enemies and deals [+80%Attack][+480%Enlightenment]Poison Damage to them."
      }
    },
    "inspiration": [],
    "id": 21300
  },
  {
    "slug": "theodore",
    "name": "Theodore",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "Ranger",
    "captain": "Increases all allies' Accuracy by 40.0 in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Never Miss",
        "description": "Deals [+760%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting Stunned for 5.0s, and a 50.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Money Talks",
        "description": "Shoots 2 arrows at an enemy, dealing [+210%Attack]Poison Damage with a 75.0% chance of inflicting Recharging Speed Penalty for 5.0s."
      },
      "passive": {
        "name": "Veer with the Wind",
        "description": "When an enemy is inflicted with Control, grants 10.0 Ultimate Energy to the ally with the highest Attack. This effect can only be triggered once every 3.0s. When an ally is inflicted with Control, reduces the Ultimate Energy of the enemy with the highest Attack by 20.0. This effect can only be triggered once every 3.0s."
      }
    },
    "inspiration": [],
    "id": 23200
  },
  {
    "slug": "elvis",
    "name": "Elvis",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "Warrior",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 24%.",
    "skills": {
      "ultimate": {
        "name": "Devout Frost Armor",
        "description": "Gains Defense Up II for 10.0s, during which the hero deals [+75%Defense]Cold Damage to enemies within range when the hero takes damage. This effect can only be triggered once every 1.0s."
      },
      "battle": {
        "name": "Stalwart Shield",
        "description": "Gains a [+375%Defense] Shield for 5.0s. When the shield is broken, dispelled, or wears off in any form, it deals [+260%Defense]Cold Damage to enemies within range."
      },
      "passive": {
        "name": "Warrior Spirit",
        "description": "When dealing damage to an enemy, has a 50.0% chance of inflicting the target with Recharging Speed Penalty for 5.0s."
      }
    },
    "inspiration": [],
    "id": 23160
  },
  {
    "slug": "clovis",
    "name": "Clovis",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Valiant Charge",
        "description": "Charges into the target, dealing [+750%Defense]Radiant Damage, reducing 20.0 Ultimate Energy, with a 100.0% chance of inflicting Attack Penalty II for 10.0s. Also Knocks Back the target. If the knocked-back target hits the target behind them, has a 100.0% chance of inflicting Stunned for 3.0s on both targets and dealing additional [+100%Attack]Radiant Damage to them."
      },
      "battle": {
        "name": "Knight Duel",
        "description": "Has a 75.0% chance to Taunt enemies for 5.0s. If successfully inflicting Taunt, doubles passive Defense gain during this period."
      },
      "passive": {
        "name": "Persistence",
        "description": "The hero gains 1 stack of Persistence for each enemy that is nearby, up to 3 stacks."
      }
    },
    "inspiration": [],
    "id": 20540
  },
  {
    "slug": "bronagh",
    "name": "Bronagh",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Toxin",
    "season": "s4",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "Rogue",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Robbery",
        "description": "The chance of inflicting Poison through Pilferage is increased to  for 10s. Then strikes the enemy 5 times, each dealing [+150%Attack]poison damage."
      },
      "battle": {
        "name": "Master Thief",
        "description": "Strikes an enemy twice, each dealing [+120%Attack]poison damage. The hero gains Attack Speed Up I for 5.0s."
      },
      "passive": {
        "name": "Pilferage",
        "description": "When dealing damage to enemies, the hero has a 50.0% chance to inflict 1 stack of Toxin on them for 15.0s."
      }
    },
    "inspiration": [],
    "id": 22640
  },
  {
    "slug": "ylindra",
    "name": "Ylindra",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Undead",
    "career": "Deathbringer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Underworldly Curse",
        "description": "Moves to the enemy and strikes them 3 times, each dealing [+250%Attack]Necrotic damage. Dispels 2 buffs from the enemy, with a 100.0% chance to inflict Buff Prohibition for 10.0s. This skill prioritizes the enemy with the most buffs."
      },
      "battle": {
        "name": "Life and Death",
        "description": "Strikes the enemy twice, each dealing [+200%Attack]Necrotic damage. And heals the hero by [+350%Attack]."
      },
      "passive": {
        "name": "Unfulfilled Wish",
        "description": "Damage taken reduces by 15%."
      }
    },
    "inspiration": [],
    "id": 22770
  },
  {
    "slug": "alistair",
    "name": "Alistair",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Latecomer Starts Early",
        "description": "Deals [+720%Attack]fire damage to enemies within range, with a 75.0% chance to inflict Recharging Speed Penalty on them for 10.0."
      },
      "battle": {
        "name": "Insatiable Curiosity",
        "description": "Strikes an enemy twice, each dealing [+220%Attack]fire damage. The second attack has a 50.0% chance to inflict Stunned on them for 3.0s."
      },
      "passive": {
        "name": "Practice Makes Perfect",
        "description": "When inflicting Debuffs or Control to enemies, the hero reduces their Ultimate Energy by 15.0. When their Ultimate Energy is reduced to 0 by this effect, the hero obtains an extra 20.0 Ultimate Enegy."
      }
    },
    "inspiration": [],
    "id": 22660
  },
  {
    "slug": "sabrina",
    "name": "Sabrina",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Corrosion",
    "season": "s3",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by  in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Code of Authority",
        "description": "Deals  to enemies within range and gains  for s."
      },
      "battle": {
        "name": "Territorial Surveillance",
        "description": "Fires an orb that can bounce up to  times between enemies. Each hit deals ."
      },
      "passive": {
        "name": "Fully Recorded",
        "description": "When the hero's skill damages the target, consumes the target's  Corrosion to deal ."
      }
    },
    "inspiration": [],
    "id": 21860
  },
  {
    "slug": "rasran",
    "name": "Rasran",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Corrosion",
    "season": "s3",
    "type": "Melee",
    "race": "Orc",
    "career": "Barbarian",
    "captain": "Increases all allies' Crit Damage by  in all battles.",
    "skills": {
      "ultimate": {
        "name": "Chronic Mortality",
        "description": "Attacks enemies within range 3 times, dealing  each hit."
      },
      "battle": {
        "name": "Bloodthirst",
        "description": "Deals  to enemies within range."
      },
      "passive": {
        "name": "Bloody Fangs",
        "description": "Basic attacks have a  chance of dealing an additional  and increasing the hero's Corrosion Intensity by ."
      }
    },
    "inspiration": [],
    "id": 21570
  },
  {
    "slug": "cykkol",
    "name": "Cykkol",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Aura",
    "season": "s3",
    "type": "Melee",
    "race": "Merfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by  in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Tsunami Strike",
        "description": "Strikes enemies within range 2 times, dealing  each time. If Aura Energy is above 50 with each strike, consumes  Aura Energy to deal an additional ."
      },
      "battle": {
        "name": "Vortex Slash",
        "description": "Gains  Aura Energy, dealing  to enemies within range."
      },
      "passive": {
        "name": "Brave the Billows",
        "description": "Gains  Aura Energy at the start of battle."
      }
    },
    "inspiration": [],
    "id": 22860
  },
  {
    "slug": "cifla",
    "name": "Cifla",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Shadow",
    "season": "s3",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Scourge",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Shadow Explosion",
        "description": "Consumes  Shadow Energy to strike the targeted location 3 times. Each strike deals  to enemies within range, with a  chance of ignoring the targets'  Defense. If the remaining Shadow Energy exceeds , casts this skill again."
      },
      "battle": {
        "name": "Energy Draining Sword",
        "description": "Slashes an enemy twice. Each slash deals . Then gains  Shadow Energy."
      },
      "passive": {
        "name": "Timed Strike",
        "description": "Once the hero's ultimate skill is fully recharged, gains  for s."
      }
    },
    "inspiration": [],
    "id": 21090
  },
  {
    "slug": "aryasso",
    "name": "Aryasso",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Orc",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Supreme Lightning",
        "description": "Deals [+660%Attack]Lightning Damage to enemies within range, with a 30.0% chance of inflicting Electrocuted for 8.0s. There is also a 50% chance of triggering 1 Lightning Chain."
      },
      "battle": {
        "name": "Hammer of Thunder",
        "description": "Deals [+400%Attack]Lightning Damage to the enemy, with a 50.0% chance of inflicting Electrocuted for 8.0s."
      },
      "passive": {
        "name": "Side by Side",
        "description": "For each enemy inflicted with Electrocuted on the field, the hero gains a stack of 5% Attack Up, up to 10 stacks."
      }
    },
    "inspiration": [],
    "id": 21600
  },
  {
    "slug": "beags",
    "name": "Beags",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "Goblin",
    "career": "Demolitionist",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Blasting Potion",
        "description": "Attacks enemies within range 5 times. Each attack deals [+130%Attack]Fire Damage and inflicts 30% Ignite."
      },
      "battle": {
        "name": "Beags' Incendiary",
        "description": "Selects an enemy and throws incendiaries to their sides, dealing [+200%Attack]Fire Damage to hit enemies and inflicting 20% Ignite."
      },
      "passive": {
        "name": "Light Them Up",
        "description": "Every 5 basic attacks also inflict 20% Ignite on the enemy."
      }
    },
    "inspiration": [],
    "id": 20010
  },
  {
    "slug": "nord",
    "name": "Nord",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Raging Hailstorm",
        "description": "Deals [+700%Attack]Cold Damage to enemies within range, with a 75% chance of gaining 1 stack of Ice Crystal."
      },
      "battle": {
        "name": "Frosty Slash",
        "description": "Strikes an enemy twice, each dealing [+210%Attack]Cold Damage."
      },
      "passive": {
        "name": "Glacial Support",
        "description": "If the hero has Ice Crystals after casting a battle skill, casts it again by consuming 1 stack of Ice Crystal. When the hero deals damage, there is a 20% chance of granting 1 stack of Ice Crystal to the Ice Blast ally with the highest Attack other than the hero."
      }
    },
    "inspiration": [],
    "id": 22150
  },
  {
    "slug": "haldy",
    "name": "Haldy",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Thunderbolt",
    "season": "s2",
    "type": "Melee",
    "race": "Gnome",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Thunderbolt Resonance",
        "description": "Grants 10% Enlightenment Up to all Thunderbolt allies for 10.0s. Then deals [+400%Attack][+3000%Enlightenment]Lightning Damage to surrounding enemies with a 50% chance of triggering 1 Lightning Chain."
      },
      "battle": {
        "name": "Lightning Hammer",
        "description": "Attacks an enemy twice, each dealing [+200%Attack]Lightning Damage with a 50.0% chance of inflicting Electrocuted for 5.0s."
      },
      "passive": {
        "name": "Unite as One",
        "description": "When the hero is on the battlefield, grants Accuracy Up to all Thunderbolt allies."
      }
    },
    "inspiration": [],
    "id": 21430
  },
  {
    "slug": "roberta",
    "name": "Roberta",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Ice Blast",
    "season": "s2",
    "type": "Range",
    "race": "Merfolk",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Freezing Wave",
        "description": "Strikes the enemies within range 3 times, each dealing [+250%Attack]Cold Damage and with a 50% chance to grant 1 stack of Ice Crystal to the hero."
      },
      "battle": {
        "name": "Arcane Piercer",
        "description": "Shoots 2 projectiles at the enemy, each dealing [+150%Attack]Cold Damage. This skill ignores 40% of the enemy's Defense. If the skill consumes Ice Crystals, the projectiles will be enhanced, each dealing [+180%Attack]Cold Damage."
      },
      "passive": {
        "name": "Echo of Frost",
        "description": "If the hero possesses Ice Crystals after releasing the battle skill, consumes 1 stack of Ice Crystal and releases the battle skill again."
      }
    },
    "inspiration": [],
    "id": 22870
  },
  {
    "slug": "percival",
    "name": "Percival",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Burn",
    "season": "s2",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 18%.",
    "skills": {
      "ultimate": {
        "name": "Skyfire",
        "description": "Grants 20% Attack Up to all Burn allies for 10.0s. Then attacks and deals [+650%Attack]Fire Damage to enemies within range."
      },
      "battle": {
        "name": "Dance of Flames",
        "description": "Attacks an enemy 3 times. Each attack deals [+135%Attack]Fire Damage and inflicts 25% Ignite."
      },
      "passive": {
        "name": "Searing Brand",
        "description": "The hero's skills deal 30% increased damage to enemies inflicted with Burn."
      }
    },
    "inspiration": [],
    "id": 21920
  },
  {
    "slug": "gulal",
    "name": "Gulal",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Frost Troll",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Snow Mountain Hunter",
        "description": "Summons a vulture from the sky to strike the target area, dealing [+650%Attack]Cold Damage to enemies within range, with a 75.0% chance to inflict Attack Penalty I for 6.0s. The vulture will exist for 30.0s."
      },
      "battle": {
        "name": "Shared Animosity",
        "description": "Calls the Vulture on the battlefield to attack an enemy along with the hero, dealing [+180%Attack]Cold Damage."
      },
      "passive": {
        "name": "Spirit Summoning",
        "description": "As the battle starts, summons a vulture for 30.0s."
      }
    },
    "inspiration": [],
    "id": 21720
  },
  {
    "slug": "dench",
    "name": "Dench",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Poison Mist",
        "description": "Sprays poisonous mist to the area for 4.0s, dealing [+80%Attack][+400%Enlightenment]Derivative to enemies within range every 0.8s, with an 80.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "battle": {
        "name": "Poison Blast",
        "description": "Fires an orb, dealing [+240%Attack]Poison Damage to enemies within range, with a 50.0% chance of inflicting 1 stack(s) of Poison for 15.0s."
      },
      "passive": {
        "name": "Malice",
        "description": "Every 3rd basic attack additionally deals [+240%Attack]Derivative to the enemy, with a 100.0% chance of inflicting 1 stack of Poison for 15.0s."
      }
    },
    "inspiration": [],
    "id": 20270
  },
  {
    "slug": "zadie",
    "name": "Zadie",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "Rogue",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Claw Suppression",
        "description": "Jumps at the enemy, dealing [+830%Attack]Fire Damage with a 75% chance of dispelling 1 buff from them. If the target has no buff, reduces their Ultimate Energy by 25.0."
      },
      "battle": {
        "name": "Rupturing Flames",
        "description": "Deals [+330%Attack]Fire Damage to enemies within range, with a 50.0% chance of inflicting Accuracy Penalty II for 5.0s."
      },
      "passive": {
        "name": "Defiance",
        "description": "Has a 100.0% chance of inflicting Attack Penalty I to an enemy for 5.0s when their buff wears off or is dispelled."
      }
    },
    "inspiration": [],
    "id": 22000
  },
  {
    "slug": "mulier",
    "name": "Mulier",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Ring of Faith",
        "description": "Unleashes a ring slash, dealing [+500%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Deals additional [+200%Attack]Radiant Damage. [3] Deals additional [+200%Attack]Radiant Damage again."
      },
      "battle": {
        "name": "Wrath",
        "description": "Slashes an enemy with all strength, dealing [+300%Attack]Radiant Damage."
      },
      "passive": {
        "name": "Strong Morale",
        "description": "When gaining Rally, gains 15% Attack Up for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20550
  },
  {
    "slug": "altin",
    "name": "Altin",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Behold My Might!",
        "description": "Deals [+600%Attack]Poison Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Victory Is Mine!",
        "description": "Has a 100% chance of dispelling 1 debuff from the hero and the ally with the lowest Current HP."
      },
      "passive": {
        "name": "By My Oath!",
        "description": "When an ally's HP drops below 30% for the first time, grants the ally Ally Protection for 10.0s."
      }
    },
    "inspiration": [],
    "id": 23320
  },
  {
    "slug": "altair",
    "name": "Altair",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "Ranger",
    "captain": "Increases all allies' Attack Speed by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Lightning Blast",
        "description": "Shoots 3 crossbow bolts to the enemy, each dealing [+200%Attack]Lightning Damage. Every 1% extra Attack Speed gained by the hero grants 1% Damage Bonus to the skill."
      },
      "battle": {
        "name": "Enhanced Shots",
        "description": "Grants Extra Damage to allies in range for 8.0s. Allies with Extra Damage deal additional [+80%Attack]Lightning Damage with each basic attack."
      },
      "passive": {
        "name": "Lightning Ambush",
        "description": "When dealing damage to enemies with HP below 50%, the hero gains Attack Speed Up II for 5.0s. This effect can only be triggered once every 4.0s."
      }
    },
    "inspiration": [],
    "id": 22390
  },
  {
    "slug": "arlow",
    "name": "Arlow",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Rogue",
    "captain": "Increases all allies' Attack by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Rupturing Light",
        "description": "Launches a leap attack, dealing [+670%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 10%. [2] Ignores 20% of the enemy's Defense. [3] Increases the Defense ignored to 30%."
      },
      "battle": {
        "name": "Keen Edge",
        "description": "Charges toward the enemy with the lowest Current HP, dealing [+380%Attack]Radiant Damage."
      },
      "passive": {
        "name": "Radiant Splash",
        "description": "The hero's basic attacks also deal splash [+50%Attack]Radiant Damage to other enemies in the target enemy's proximity."
      }
    },
    "inspiration": [],
    "id": 20680
  },
  {
    "slug": "bronwyn",
    "name": "Bronwyn",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Raging Wildfire",
        "description": "Deals [+750%Attack]Fire Damage to an enemy, ignoring the target's shield."
      },
      "battle": {
        "name": "Flaming Retribution",
        "description": "Deals [+360%Attack]Fire Damage to an enemy."
      },
      "passive": {
        "name": "Wrathful Admonishment",
        "description": "When an ally's Wild dice roll is ≥ 4, the hero's next basic attack damage is increased, dealing [+250%Attack]Fire Damage."
      }
    },
    "inspiration": [],
    "id": 21380
  },
  {
    "slug": "sigrid",
    "name": "Sigrid",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Warrior",
    "captain": "Increases all allies' Accuracy by 20.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Venomous Blast",
        "description": "Deals [+760%Attack]Poison Damage to an enemy and all enemies inflicted with debuffs with a 75.0% chance of inflicting Healing Prohibition and Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Venom Arrow",
        "description": "Shoots two toxic arrows at the enemy, each dealing [+210%Attack]Poison Damage. This skill has a 75.0% chance of inflicting Healing Prohibition for 5.0s."
      },
      "passive": {
        "name": "Hastened Demise",
        "description": "When an enemy inflicted with debuff dies, the hero gains 25.0 Ultimate Energy."
      }
    },
    "inspiration": [],
    "id": 20650
  },
  {
    "slug": "dain",
    "name": "Dain",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Stand United",
        "description": "Grants Ally Protection to the ally for 10.0s, then grants 30% Damage Reduction to this ally and nearby allies for 10.0s."
      },
      "battle": {
        "name": "Quelling Hammer",
        "description": "Deals [+375%Attack]Radiant Damage to the enemy, with a 75.0% chance of inflicting Stunned for 3.0s."
      },
      "passive": {
        "name": "Shared Glory",
        "description": "At the start of the battle, grants Defense Up that equals to 30% of the hero's Defense to the ally with the lowest HP within 1 tile."
      }
    },
    "inspiration": [],
    "id": 21240
  },
  {
    "slug": "berrik",
    "name": "Berrik",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Clan Protection",
        "description": "Gains Defense Up I and Recovery Over Time for 10.0s."
      },
      "battle": {
        "name": "Mighty Hammer Strike",
        "description": "Hits an enemy hard with a warhammer, dealing [+200%Attack][+200%Defense]Radiant Damage, with a 60.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Sturdiness",
        "description": "Has a 40% chance to reduce the damage taken by 50% when hit."
      }
    },
    "inspiration": [],
    "id": 21140
  },
  {
    "slug": "yagnatz",
    "name": "Yagnatz",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Swamp Lizardfolk",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Frenzied Slayer",
        "description": "Hurls three javelins, each dealing [+280%Attack]Lightning Damage to the target. This skill is considered a basic attack."
      },
      "battle": {
        "name": "Intimidation",
        "description": "Deals [+300%Attack]Lightning Damage to an enemy. This skill is considered a basic attack."
      },
      "passive": {
        "name": "Mutant Thrust",
        "description": "Every 3rd basic attack deals extra [+50%Attack]Lightning Damage."
      }
    },
    "inspiration": [],
    "id": 21840
  },
  {
    "slug": "enna",
    "name": "Enna",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Flower's Solace",
        "description": "Dispels 1 debuff from each ally."
      },
      "battle": {
        "name": "Leaf's Aid",
        "description": "Grants Hit Recovery to an ally for 10.0s."
      },
      "passive": {
        "name": "Tree's Protection",
        "description": "Restores [+15%Max HP] when taking damage that exceeds 25% of the hero's Max HP. This effect can only be triggered once every 10.0s."
      }
    },
    "inspiration": [],
    "id": 20260
  },
  {
    "slug": "sallyanne",
    "name": "Sallyanne",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Mind Your Manners",
        "description": "Deals [+740%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 10.0s."
      },
      "battle": {
        "name": "Silent Guard",
        "description": "Has a 100% chance of dispelling 1 debuff from the hero. Upon successful dispelling, the hero gains a [+20%Max HP] Shield."
      },
      "passive": {
        "name": "Tenacity",
        "description": "Gains a [+50%Max HP] shield for 5.0s when HP drops below 25% for the first time, and gains Defense Up I and 30% Damage Reduction for 10.0s."
      }
    },
    "inspiration": [],
    "id": 23350
  },
  {
    "slug": "hector",
    "name": "Hector",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "Increases all allies' Attack Speed by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Cleave",
        "description": "Deals [+600%Attack]Cold Damage to enemies within range."
      },
      "battle": {
        "name": "Impaling Attack",
        "description": "Deals [+300%Attack]Cold Damage to an enemy."
      },
      "passive": {
        "name": "Fighting Spirit",
        "description": "Gains Attack Speed Up I for 10.0s as the battle starts."
      }
    },
    "inspiration": [],
    "id": 20100
  },
  {
    "slug": "forbrit",
    "name": "Forbrit",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Blunt Strike",
        "description": "Stomps on the ground, dealing [+700%Attack]Cold Damage to enemies within range, with a 75.0% chance of inflicting Stunned for 5.0s."
      },
      "battle": {
        "name": "Rampage",
        "description": "Deals [+400%Attack]Cold Damage to the enemy with a 100.0% chance of Knocking Up the target."
      },
      "passive": {
        "name": "Rugged Tenacity",
        "description": "When taking damage from an enemy inflicted with a debuff, reduces the damage taken by 30%."
      }
    },
    "inspiration": [],
    "id": 20050
  },
  {
    "slug": "usha",
    "name": "Usha",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Icebreaker Slash",
        "description": "Slashes forcefully twice, each dealing [+400%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Frost for 10.0s. This skill deals double damage to enemies inflicted with Frost."
      },
      "battle": {
        "name": "Glacial Stronghold",
        "description": "Gains a [+300%Attack] shield and Attack Speed Up II for 10.0s."
      },
      "passive": {
        "name": "Freezing Over",
        "description": "Every 2nd basic attack at an enemy under Frost deals double damage."
      }
    },
    "inspiration": [],
    "id": 20180
  },
  {
    "slug": "uloar",
    "name": "Uloar",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Wood Elf",
    "career": "Druid",
    "captain": "Increases all allies' Accuracy by 20.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Creeping Shadows",
        "description": "Deals [+300%Attack]Necrotic Damage to enemies within range, with a 100.0% chance of inflicting Accuracy Penalty II for 10.0s."
      },
      "battle": {
        "name": "Shadow Eclipse",
        "description": "Deals [+200%Attack]Necrotic Damage to the enemy, with a 100% chance of dispelling 1 buff from them."
      },
      "passive": {
        "name": "Life Conservation",
        "description": "Heals an ally by [+220%Attack] when the hero deals damage with their skills."
      }
    },
    "inspiration": [],
    "id": 23300
  },
  {
    "slug": "urzog",
    "name": "Urzog",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "Barbarian",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Raging Plunder",
        "description": "Launches a hammer strike, dealing [+670%Attack]Cold Damage to enemies within range, with a 50.0% chance of inflicting Frost for 10.0s."
      },
      "battle": {
        "name": "Battle Cry",
        "description": "Unleashes a battle cry, gaining 15% Attack Up for 5.0s."
      },
      "passive": {
        "name": "Killing Intent",
        "description": "When dealing damage to enemies under Frost, additionally deals [+20%Attack]Derivative."
      }
    },
    "inspiration": [],
    "id": 20560
  },
  {
    "slug": "heksandra",
    "name": "Heksandra",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Enlightenment by 24.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Silent Prayer",
        "description": "Heals allies within range by [+20%Target's Max HP]."
      },
      "battle": {
        "name": "Whispered Blessing",
        "description": "Heals an ally by [+150%Attack][+1500%Enlightenment] and dispels 1 debuff from them."
      },
      "passive": {
        "name": "Whisper of Protection",
        "description": "When healing allies with HP below 40%, the amount of healing is increased by 30%."
      }
    },
    "inspiration": [],
    "id": 20780
  },
  {
    "slug": "awstin",
    "name": "Awstin",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Stun Arrows",
        "description": "Deals [+800%Attack]Radiant Damage to the enemy, with a 75.0% chance of inflicting Stunned for 5.0s."
      },
      "battle": {
        "name": "Chain Arrows",
        "description": "Fires 3 shots at an enemy, each dealing [+120%Attack]Radiant Damage, with a 25.0% chance of inflicting 1 debuff randomly selected from the following for 5.0s: Attack Penalty I, Healing Prohibition, and Accuracy Penalty I."
      },
      "passive": {
        "name": "Perfect Timing",
        "description": "The hero gains Accuracy Bonus I for 5.0s when an enemy resists a debuff or Control inflicted by the hero."
      }
    },
    "inspiration": [],
    "id": 20370
  },
  {
    "slug": "jijel",
    "name": "Jijel",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Forest Troll",
    "career": "Scourge",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Spear of Venom",
        "description": "Attacks the enemy 3 times, dealing [+300%Attack]Poison Damage. The third attack has a 75.0% chance of inflicting Healing Prohibition for 10.0s."
      },
      "battle": {
        "name": "Rough Stab",
        "description": "Deals [+409%Attack]Poison Damage to the enemy, with a 100.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "passive": {
        "name": "Precise Defense",
        "description": "When using the battle skill on enemies under Healing Prohibition, reduces target's Ultimate Energy by 10.0."
      }
    },
    "inspiration": [],
    "id": 20460
  },
  {
    "slug": "fizzle",
    "name": "Fizzle",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Goblin",
    "career": "Demolitionist",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Electrical Charge",
        "description": "Releases a lightning chain that bounces between enemies, each hit dealing [+300%Attack][+500%Defense]Lightning Damage with a 40.0% chance of inflicting Stunned for 3.0s. Lightning chain bounces up to 3 times."
      },
      "battle": {
        "name": "Tingly Strike",
        "description": "Deals [+150%Attack][+250%Defense]Lightning Damage to the enemy, with a 50.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "passive": {
        "name": "Electric Shield",
        "description": "Reduces damage taken by 40% when taking damage that exceeds 35% of Max HP."
      }
    },
    "inspiration": [],
    "id": 21330
  },
  {
    "slug": "caledo",
    "name": "Caledo",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Crescent Luster",
        "description": "Heals allies within range by [+10%Target's Max HP][+2200%Enlightenment]."
      },
      "battle": {
        "name": "Support",
        "description": "Grants Ally Protection to the ally with the lowest Current HP for 5.0s."
      },
      "passive": {
        "name": "Guardian Heart",
        "description": "Gains Defense Up I for 10.0s when casting a skill. When the skill takes effect on an ally with less than 60% HP, grants Defense Up I to the ally for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20900
  },
  {
    "slug": "zethos",
    "name": "Zethos",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Explosive Resolve",
        "description": "For 10.0s after being cast, the hero throws ice lances as basic attack, each dealing [+250%Attack]Cold Damage with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "battle": {
        "name": "Solitary Patrol",
        "description": "Throws 2 ice lances at a random enemy, each dealing [+250%Attack]Cold Damage with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "passive": {
        "name": "Lonely Heart",
        "description": "When target has Frost, increases the hero's basic attack damage by 50%."
      }
    },
    "inspiration": [],
    "id": 21980
  },
  {
    "slug": "livia",
    "name": "Livia",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Clearing the Path",
        "description": "Deals [+400%Attack][+10%Max HP]Fire Damage to enemies within range with a 100% chance of dispelling 1 buff from them. Upon a successful dispelling, there is a 50.0% chance of inflicting Buff Prohibition for 5.0s."
      },
      "battle": {
        "name": "Breaking Free",
        "description": "Unleashes Tornado Slash and deals [+390%Attack]Fire Damage to enemies within range and gains Defense Up I for 5.0s."
      },
      "passive": {
        "name": "Tactical Defense",
        "description": "As the battle starts, gains a [+20%Target's Max HP] shield that lasts for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20610
  },
  {
    "slug": "quarion",
    "name": "Quarion",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Crescent Protection",
        "description": "Heals allies within range by [+15%Target's Max HP]."
      },
      "battle": {
        "name": "Moon Crown",
        "description": "Grants a [+10%Target's Max HP] shield to the ally for 10.0s and grants Recovery Over Time for 10.0s."
      },
      "passive": {
        "name": "Beneficence",
        "description": "When healing allies, gains a 20% chance of increasing the healing amount by 50%."
      }
    },
    "inspiration": [],
    "id": 20960
  },
  {
    "slug": "noteera",
    "name": "Noteera",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Scourge",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Abyssal Thrust",
        "description": "Charges toward the enemy's position, dealing [+60%Attack]Poison Damage 4 times. Killing the enemy with this skill will create a ranged explosion that deals 300[+240%Attack]Poison Damage to enemies within range, with a 100.0% chance of inflicting Poison for 10.0s."
      },
      "battle": {
        "name": "Shadow Poison Dart",
        "description": "Throws a poison dart at an enemy, with a 75.0% chance of inflicting 2 stack(s) of Poison for 10.0s."
      },
      "passive": {
        "name": "Assassinator Technique",
        "description": "Approaches and assaults the target quickly when the target is far away. Gains 20% Damage Bonus against enemies under Poison."
      }
    },
    "inspiration": [],
    "id": 21110
  },
  {
    "slug": "immeral",
    "name": "Immeral",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "Ranger",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Agile Leap",
        "description": "Jumps to the target spot, dealing [+750%Attack]Lightning Damage to enemies within range."
      },
      "battle": {
        "name": "Nature's Gift",
        "description": "Performs a mysterious elven dance and gains Attack Speed Up I for 10.0s."
      },
      "passive": {
        "name": "Natural Instinct",
        "description": "Gains 20% Attack Up for 10.0s as the battle starts."
      }
    },
    "inspiration": [],
    "id": 20500
  },
  {
    "slug": "letalis",
    "name": "Letalis",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "The Unstill",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Reaping Rhapsody",
        "description": "Deals [+720%Attack]Poison Damage to enemies within range, has a 75.0% chance of inflicting Healing Reduction to enemies above 50% HP for 10.0s and a 75.0% chance of inflicting Healing Prohibition on enemies below 50% HP for 10.0s."
      },
      "battle": {
        "name": "Ringing Doom",
        "description": "Deals [+250%Attack]Poison Damage to an enemy and reduces 20.0 of their Ultimate Energy."
      },
      "passive": {
        "name": "Trembling Voice",
        "description": "When the hero deals damage to an enemy, there is a 30.0% chance of inflicting the target with Attack Penalty I for 5.0s."
      }
    },
    "inspiration": [],
    "id": 23330
  },
  {
    "slug": "gloin",
    "name": "Gloin",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "Gunslinger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Purifying Fire",
        "description": "Launches 3 blasts of flame, each dealing [+240%Attack]Fire Damage to enemies within range, with a 50% chance of dispelling 1 buff from them."
      },
      "battle": {
        "name": "Precise Strike",
        "description": "Deals [+315%Attack]Fire Damage to enemies within range, with a 50.0% chance of inflicting Blind for 3.0s."
      },
      "passive": {
        "name": "Aerial Support",
        "description": "Grants a [+10%Max HP] Shield to an ally for 10.0s when they are under Control. This effect can only be triggered once every 10.0s."
      }
    },
    "inspiration": [],
    "id": 22360
  },
  {
    "slug": "wilt",
    "name": "Wilt",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Freezing Wind",
        "description": "Deals [+550%Attack]Cold Damage to enemies within range, with a 30.0% chance of inflicting Frost for 5.0s."
      },
      "battle": {
        "name": "Icy Shot",
        "description": "Fires 3 ice lances at the enemy. Each lance deals [+100%Attack]Cold Damage with a 60.0% chance of inflicting Frost for 5.0s. Prioritizes attacks on enemies not under Frost."
      },
      "passive": {
        "name": "Frost Cantrips",
        "description": "When the hero successfully inflicts Frost on enemies, recharges Ultimate Energy by 10.0. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 20710
  },
  {
    "slug": "nedda",
    "name": "Nedda",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Ridge Halfling",
    "career": "Sorcerer",
    "captain": "Increases all allies' Attack by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Sunburst",
        "description": "Hurls a massive fireball, dealing [+800%Attack]Fire Damage to the enemy."
      },
      "battle": {
        "name": "Fireball",
        "description": "Launches a fireball dealing [+350%Attack]Fire Damage to the enemy."
      },
      "passive": {
        "name": "Wild Swing",
        "description": "The hero's Wild dice roll result +1."
      }
    },
    "inspiration": [],
    "id": 20390
  },
  {
    "slug": "irina",
    "name": "Irina",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Lightning Storm",
        "description": "Deals [+710%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty I for 6.0s and a 75% chance of dispelling 1 buff from them."
      },
      "battle": {
        "name": "Lightning Chain",
        "description": "Unleashes Lightning Chain, dealing [+360%Attack]Lightning Damage to enemies hit. Lightning Chain can bounce among enemies up to 3 times."
      },
      "passive": {
        "name": "Heart of Protector",
        "description": "When the hero deals damage to enemies by skills, grants a [+10%Target's Max HP] shield to the nearest ally for 10.0s. This effect can only be triggered once every 1.0s."
      }
    },
    "inspiration": [],
    "id": 20480
  },
  {
    "slug": "tioh",
    "name": "Tioh",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Summon",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Sacrifice",
        "description": "Sacrifices all Corpses the hero summoned, and deals [+550%Attack]Necrotic Damage to enemies within range. The more Corpses that are sacrificed, the higher the damage."
      },
      "battle": {
        "name": "Death and Decay",
        "description": "Deals [+300%Attack]Necrotic Damage to enemies within range and summons a Corpse for 15.0s."
      },
      "passive": {
        "name": "Mourning",
        "description": "Upon an ally's death, summons a Corpse at their fallen position for 15.0s."
      }
    },
    "inspiration": [],
    "id": 21040
  },
  {
    "slug": "meggan",
    "name": "Meggan",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Shield of Darkness",
        "description": "Grants Defense Up I and Recovery Over Time to allies within range for 10.0s."
      },
      "battle": {
        "name": "Brisk Pace",
        "description": "Heals an ally by [+10%Target's Max HP] and recharges their Ultimate Energy by 15.0."
      },
      "passive": {
        "name": "Sanctuary",
        "description": "When casting a skill on an ally, dispels 1 Defense Penalty from them."
      }
    },
    "inspiration": [],
    "id": 20790
  },
  {
    "slug": "dora",
    "name": "Dora",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Focus On Work",
        "description": "Grants Accuracy Bonus II to allies within range for 10.0s."
      },
      "battle": {
        "name": "Slowed Pace",
        "description": "Deals [+400%Attack]Lightning Damage to the enemy, with a 50.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "passive": {
        "name": "Fine Tune",
        "description": "For each debuff on any enemy on the battlefield, the hero gains extra 10% Accuracy Up."
      }
    },
    "inspiration": [],
    "id": 21220
  },
  {
    "slug": "gerana",
    "name": "Gerana",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Gnome",
    "career": "Wizard",
    "captain": "Increases all allies' Defense by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Deflecting Force",
        "description": "Grants a [+12%Max HP] shield to each ally within range for 10.0s."
      },
      "battle": {
        "name": "Weak Electric Field",
        "description": "Deals [+260%Attack]Lightning Damage to enemies within range, with a 75.0% chance of inflicting Accuracy Penalty I for 5.0s."
      },
      "passive": {
        "name": "Electrostatic Touch",
        "description": "Every 3rd basic attack dispels 1 buff on the target."
      }
    },
    "inspiration": [],
    "id": 21550
  },
  {
    "slug": "vojeh",
    "name": "Vojeh",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Spreading Cold",
        "description": "Deals [+680%Attack]Cold Damage to enemies within range, with a 100.0% chance of inflicting Frost for 10.0s."
      },
      "battle": {
        "name": "Perfected Skill",
        "description": "Deals [+380%Attack]Cold Damage to an enemy."
      },
      "passive": {
        "name": "Strength Absorption",
        "description": "When an enemy inflicted with Frost dies, the hero gains 40% Attack Up for 10.0s."
      }
    },
    "inspiration": [],
    "id": 22210
  },
  {
    "slug": "traveler",
    "name": "Traveler",
    "element": "Fire",
    "rarity": "Special",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "",
    "career": "",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Fireball",
        "description": "Deals [+500%Attack]Fire Damage to enemies in range. If this achieves a kill, triggers Chain Break."
      },
      "battle": {
        "name": "Holy Fire Smite",
        "description": "Shoots 1 ray, dealing [+125%Attack]Fire Damage to an enemy 3 times."
      },
      "passive": {
        "name": "Morale Up",
        "description": "Gains 15% Attack Up for 15.0s as the battle starts."
      }
    },
    "inspiration": [],
    "id": 10000
  },
  {
    "slug": "vicana",
    "name": "Vicana",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Poison",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Deadly Toxinbolt",
        "description": "Fires a bolt, dealing [+500%Attack]Poison Damage to enemies within range and marking the main target for 10.0s. Each time the marked enemy is inflicted with Poison, a toxic blast is triggered, dealing [+105%Attack]Derivative to enemies within range."
      },
      "battle": {
        "name": "Triple Shot",
        "description": "Fires 3 bolts, each at a random enemy, dealing [+150%Attack]Poison Damage, with a 50.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "passive": {
        "name": "Prey Selection",
        "description": "Poison Damage dealt by allies has its interval reduced by 2s."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%.",
      "Enlightenment +60",
      "ATK% +30%",
      "Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."
    ],
    "id": 20630
  },
  {
    "slug": "felicity",
    "name": "Felicity",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Sorcerer",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Fiery Feather",
        "description": "Shoots 5 fire beams, each dealing [+150%Attack]Fire Damage, with a 100.0% chance to inflict Defense Penalty for 10.0s. Shoots 3 extra beams when a Wild dice roll is ≥5."
      },
      "battle": {
        "name": "Incineration",
        "description": "Fires a fireball and deals [+240%Attack]Fire Damage to the enemy. When Wild dice roll ≥4, casts this skill again, up to 3 times consecutively."
      },
      "passive": {
        "name": "Burning Blood",
        "description": "Gains 3.0 Ultimate Energy when battle skill and ultimate skill trigger crit hits."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Deals same damage to other enemies 1 tile around the target."
    ],
    "id": 20810
  },
  {
    "slug": "alphanarsy",
    "name": "Alphanarsy",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Elf",
    "career": "Warrior",
    "captain": "Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.",
    "skills": {
      "ultimate": {
        "name": "Desperate Tide",
        "description": "Grants a [+15%Max HP][+3600%Enlightenment] shield to each of the allies. While having this shield, they parry damage each time when taking damage, reducing damage by 10% Defense."
      },
      "battle": {
        "name": "Lone Star Frostblade",
        "description": "Attacks enemies within range, dealing [+200%Attack][+1000%Enlightenment]Cold Damage. Gains 1 stack of Death's Blessing for each enemy hit. Also grants all allies Defense Up II for 5.0s."
      },
      "passive": {
        "name": "Ironfrost Rust Armor",
        "description": "At battle start, gains 5 stacks of Death's Blessing. Dispels 1 stack after taking damage. Then gains 1 stack of Death's Blessing every 10s. (Max 10 stacks)."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Gains 2 stack(s) of  for each target hit by battle skill.",
      "Skill Haste +30",
      "HP% +30%",
      "Has a 35% chance to get immune to the Control to be inflicted."
    ],
    "id": 24770
  },
  {
    "slug": "talwer",
    "name": "Talwer",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Goblin",
    "career": "Scourge",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Spore Storm",
        "description": "Releases a spore cloud lasting 4.0s that deals [+80%Attack][+600%Enlightenment]Derivative to enemies in range every 0.8s with a 100.0% chance of inflicting Accuracy Penalty II and Attack Penalty II for 10.0s. Each instance of damage transfers 1 negative effect from one enemy to another random enemy."
      },
      "battle": {
        "name": "Snicker Mushroom",
        "description": "Plants a mushroom near enemies. The mushroom has a 100.0% chance of inflicting Taunt for 5.0s to enemies in range. When the mushroom dies, deals [+150%Attack][+900%Enlightenment]Derivative to enemies in range, and has a 100.0% chance of inflicting Stunned for 3.0s, and a 100.0% chance of inflicting Healing Reduction for 10.0s."
      },
      "passive": {
        "name": "Hunter's Mark",
        "description": "Each debuff on enemies on the field grants 2% Damage Reduction to the hero. The effect stacks up to 10 times."
      }
    },
    "inspiration": [
      "When an ally dies, heals the hero by [+15%Max HP].",
      "When inflicting a debuff, there is a 70% chance of extending its duration by 30%.",
      "Skill Haste +30",
      "Accuracy +50",
      "Reduces the battle skill's initial recharge time by 3s."
    ],
    "id": 21320
  },
  {
    "slug": "oggok",
    "name": "Oggok",
    "element": "Poison",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Forest Troll",
    "career": "Shaman",
    "captain": "Increases all allies' Resistance by 40.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Specialized Area",
        "description": "Summons a totem and grants Immortality to all allies for 5.0s. Heals them by [+400%Attack][+3000%Enlightenment] after a delay of 5s."
      },
      "battle": {
        "name": "Hidden Trajectory",
        "description": "Unleashes a shadow wave that bounces between targets for up to 6 times, healing allies hit by [+150%Attack][+1200%Enlightenment] while dealing [+150%Attack][+1200%Enlightenment]Poison Damage to enemies hit, with an 85.0% chance of inflicting Attack Penalty II on them for 5.0s."
      },
      "passive": {
        "name": "Witchcraft Therapy",
        "description": "When healing an ally, dispels 1 debuff from them."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "The passive skill has a 50% chance of dispelling 1 extra debuff.",
      "Skill Haste +30",
      "ATK% +30%",
      "Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."
    ],
    "id": 21700
  },
  {
    "slug": "huldork",
    "name": "Huldork",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "Gunslinger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Break Siege",
        "description": "Deals [+650%Attack]Fire Damage to enemies within range, with a 100% chance of dispelling 2 buffs on them and a 100.0% chance of inflicting Accuracy Penalty II for 10.0s. Reduces the target's Ultimate Energy by 50.0 when dealing damage to enemies within 3 tiles of the hero, with a 100.0% chance of inflicting Stunned for 5.0s."
      },
      "battle": {
        "name": "Hawk-eye Shot",
        "description": "Deals [+280%Attack]Fire Damage to enemies within range, with a 100.0% chance of inflicting Blind for 5.0s. Reduces the target's Ultimate Energy by 10.0 when dealing damage to enemies within 3 tiles of the hero."
      },
      "passive": {
        "name": "Sharpshooter",
        "description": "When the hero's skill deals damage to enemies within 3 tiles, increases the damage dealt by 50%."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When inflicting a debuff, there is a 70% chance of extending its duration by 30%.",
      "Skill Haste +30",
      "Accuracy +50",
      "Increases the ultimate skill's initial energy by 5."
    ],
    "id": 21150
  },
  {
    "slug": "garrika",
    "name": "Garrika",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Commander's Toss",
        "description": "Grants Accuracy Bonus II to all allies for 10.0s, and then deals [+640%Attack]Fire Damage to enemies within range, with a 75% chance of dispelling 1 buff from them. There is also a 75.0% chance of additionally inflicting Buff Prohibition on them for 10.0s."
      },
      "battle": {
        "name": "Searing Smite",
        "description": "Deals [+320%Attack]Fire Damage to enemies within range, with a 75.0% chance of inflicting Accuracy Penalty II for 5.0s."
      },
      "passive": {
        "name": "War God's Gift",
        "description": "Gains 10.0 Ultimate Energy when an enemy gains a buff. When inflicting debuffs, reduces the target's Ultimate Energy by 25.0."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s.",
      "Skill Haste +30",
      "Accuracy +50",
      "Ignores 35% of the target's Resistance."
    ],
    "id": 20190
  },
  {
    "slug": "drizzt-dourden",
    "name": "Drizzt Do'Urden",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Drow",
    "career": "Ranger",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Dance of the Wild",
        "description": "Guenhwyvar and Drizzt release 3 hits separately on enemies within range, each dealing [+110%Attack]Cold Damage (Damage dealt by Guenhwyvar will be calculated based on his attributes). For enemies inflicted with Frost, this skill ignores their 15% Defense. For every 1% HP lost by the target, the damage is increased by 0.6%, up to 30%."
      },
      "battle": {
        "name": "Dual Wielder",
        "description": "Swings both Twinkle and Icingdeath, dealing [+75%Attack]Cold Damage to enemies within range, with a 50.0% chance of inflicting them with Frost for 10.0s. Each use of this skill will increase the number of hits for the next use, up to 3 hits."
      },
      "passive": {
        "name": "Planar Ally",
        "description": "Guenhwyvar fights alongside Drizzt, both gaining 1 stack of Planar Ally every 1s when they are attacking the same enemy. When Guenhwyvar and Drizzt are not attacking the same enemy, they both lose 1 stack of Planar Ally every 1s. Planar Ally cannot be dispelled and is capped at 10 stacks."
      }
    },
    "inspiration": [
      "The hero takes 20% less crit damage.",
      "When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22980
  },
  {
    "slug": "khrysos",
    "name": "Khrysos",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "Shaman",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.",
    "skills": {
      "ultimate": {
        "name": "Might of Gold",
        "description": "Dispels all enemy shields and deals [+500%Attack][+10%Max HP]Fire Damage to them, with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Meanwhile, grants a [+25%Target's Max HP] shield to each ally for 10.0s."
      },
      "battle": {
        "name": "Holy Fire Smite",
        "description": "Casts 3 Holy Fire attacks, each dealing [+100%Attack]Fire Damage to enemies within range, with a 75% chance of dispelling 1 buff from them. Grants a [+15%Target's Max HP] shield to the ally with the lowest Current HP for 5.0s."
      },
      "passive": {
        "name": "Sunfire Blessing",
        "description": "When a shield granted by the hero is is reduced, dispelled, or vanishes in any way, converts 50% of the shield consumed into healing."
      }
    },
    "inspiration": [
      "The hero gains a [+15%Max HP] shield when casting the battle skill.",
      "When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second.",
      "The hero grants 30% more shield.",
      "Accuracy +50",
      "The shield conversion rate of the passive skill to healing is increased to 75%."
    ],
    "id": 20450
  },
  {
    "slug": "huberg",
    "name": "Huberg",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Dwarf",
    "career": "Cleric",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.",
    "skills": {
      "ultimate": {
        "name": "Warrior's Holy Light",
        "description": "Summons 3 energy orb(s) to strike enemies within range, dealing [+100%Attack]Radiant Damage each time. When this skill is cast again, summons 1 additional energy orb(s), up to 7. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases the energy orb damage by 20%. [2] Casts this skill once more. [3] Summons 1 additional energy orb."
      },
      "battle": {
        "name": "Watcher's Smite",
        "description": "Deals [+320%Attack]Radiant Damage to enemies within range, with a 30.0% chance of gaining 1 stack of Rally."
      },
      "passive": {
        "name": "Leader's Prestige",
        "description": "When other allies cast a spell that consumes Rally, Huberg gains 1 stack of Rally."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Increases the chance of the battle skill effect by 15%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 20320
  },
  {
    "slug": "tharivol",
    "name": "Tharivol",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Marksmanship",
        "description": "Switches to a different shooting stance. The hero's Attack increases by 15% for the next 12.0s, and each basic attack has a 20% chance of triggering multishot, firing 3 arrows that deal [+120%Attack]Lightning Damage each. This chance is boosted at a rate equal to 30% of the hero's Crit Rate. If the multishot fails to trigger, the arrow fired will deal [+80%Attack]Lightning Damage instead."
      },
      "battle": {
        "name": "Certain Shot",
        "description": "Shoots a powerful arrow at an enemy, dealing [+300%Attack]Lightning Damage. This damage ignores Immortality."
      },
      "passive": {
        "name": "Pursuit Hunting",
        "description": "Dealing direct damage to the same enemy target grants the hero 1 stack of Attack Speed Up for 5.0s, up to 15 stacks. Stacks are lost when switching targets."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "The hero gains 9% Damage Bonus permanently when an enemy dies. This effect stacks up to 3 times."
    ],
    "id": 20890
  },
  {
    "slug": "the-dark-lady",
    "name": "The Dark Lady",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Dragon God",
    "career": "Master of Lineage",
    "captain": "Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.",
    "skills": {
      "ultimate": {
        "name": "Absolute Rule",
        "description": "Has a 75% chance of dispelling all enemy buffs and shields, then damages all targets twice and inflicts Buff Prohibition."
      },
      "battle": {
        "name": "Dragon God's Retribution",
        "description": "Deals damage to 3 random targets twice, inflicting Attack Penalty II."
      },
      "passive": {
        "name": "Mother of All Things",
        "description": "While this hero is present, whenever any unit dies on the battlefield, all ally heroes share this unit's attributes (Attack, Defense, and HP) equally. The maximum increase per attribute for each hero cannot exceed 30% of the Dark Lady's corresponding attribute. Also heals ally heroes by 10% of the dead unit's Max HP, capped at 10% of each ally hero's own Max HP."
      }
    },
    "inspiration": [
      "The battle skill can inflict Healing Prohibition on enemies.",
      "Increases the chance for the ultimate skill to dispel enemy buffs.",
      "The number of random targets selected by the battle skill increases to 5.",
      "ATK% +30%",
      "Increases the cap for attributes gained via passive skills to 35%, and increases the HP restoration cap to the target's 15%."
    ],
    "id": 23011
  },
  {
    "slug": "berengar",
    "name": "Berengar",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "Death Knight",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 30%.",
    "skills": {
      "ultimate": {
        "name": "Hellfire Balls",
        "description": "Channels and launches hellfire balls, dealing [+500%Attack][+15%Max HP]Necrotic Damage to enemies within range, with a 75.0% chance to inflict Recharging Speed Penalty for 10.0s, and a 75.0% chance to inflict Healing Reversal for 10.0s."
      },
      "battle": {
        "name": "Horrendous Slash",
        "description": "Casts Staggering Smite on the target, dealing [+300%Attack]Necrotic Damage to enemies within range, with a 100.0% chance of inflicting Fear for 3.0s. Then dispels all debuffs from the hero."
      },
      "passive": {
        "name": "Evil Domain",
        "description": "At the start of battle, gains Evil Aura and applies Chaos for 30.0s to all allies and enemies. When receiving any healing, increases Max HP (by 100% of healing received), up to an additional 50%. When Max HP increase reaches the limit through this effect, all ally heroes gain Evil Aura and increase Max HP (by 10% of Berengar's Max HP)."
      }
    },
    "inspiration": [
      "Allies in Chaos will be healed for 25% of their Max HP when the Chaos effect ends.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "The healing from Evil Aura is increased by 25%.",
      "HP% +30%",
      "The duration of Chaos effect on all enemies is extended by 15s."
    ],
    "id": 22220
  },
  {
    "slug": "philto",
    "name": "Philto",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Gunslinger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Heatwave",
        "description": "Deals [+550%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Deals additional [+550%Attack]Radiant Damage. [2] Deals additional [+550%Attack]Radiant Damage again. [3] Recharges Ultimate Energy by 20.0."
      },
      "battle": {
        "name": "Barrage Flurries",
        "description": "Fires three cannon shots at the target. Each shot deals [+120%Attack]Radiant Damage to enemies within range. If more than 4 targets are hit, gains 1 stack of Rally."
      },
      "passive": {
        "name": "Unintentional Combustion",
        "description": "Basic attacks will cause an arcane explosion upon hitting an enemy, dealing [+30%Attack]Radiant Damage to enemies within range.  The hero will not gain any Attack Speed bonus; instead, each 1% extra Attack Speed gained will be converted to 10 Attack."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 20110
  },
  {
    "slug": "grishnaar",
    "name": "Grishnaar",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 30% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Frenzy Massacre",
        "description": "Deals [+550%Defense]Lightning Damage to all enemies and reduces their Ultimate Energy by 30.0, with a 100% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "War Devotee",
        "description": "Grants Ally Protection and Control Immunity to the ally with the highest Crit Damage for 10.0s. This state cannot be dispelled. Then grants a [+15%Target's Max HP]shield for 10.0s and Defense Up II to the hero and this ally. This skill is guaranteed to be cast as the battle starts, and no cast action is required upon releasing."
      },
      "passive": {
        "name": "Reflection",
        "description": "Reduces the hero's damage taken by 25% and increases Resistance by 30%. When the hero grants Ally Protection to any ally, the hero also shares the aforementioned effects with that ally (the exact value of the increased Resistance will be shared)."
      }
    },
    "inspiration": [
      "The amount of shield granted by the hero's battle skill is now based on the hero's HP, changing the shield to [+15%Max HP] shield.",
      "The hero grants 15% more shield.",
      "The Damage Reduction from the passive skill increases to 35%.",
      "DEF% +30%",
      "The hero's battle skill takes effect on an extra ally with the lowest HP."
    ],
    "id": 20430
  },
  {
    "slug": "sutha",
    "name": "Sutha",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "The Unstill",
    "career": "Warrior",
    "captain": "Increases all allies' Attack Speed by 30% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Mighty Mutilation",
        "description": "Charges with the axe and swings it 5 times, dealing [+180%Attack]Lightning Damage each time to the enemy. The attacks are counted as basic attacks, with an additional 30% chance of triggering critical hit. Enemies killed by this skill cannot be resurrected."
      },
      "battle": {
        "name": "Piercing Slash",
        "description": "Launches a double-hit slash at the enemy to deal [+200%Attack]Lightning Damage twice. This skill is counted as a basic attack and has an additional 30% chance of triggering critical hit."
      },
      "passive": {
        "name": "Phantom Slash",
        "description": "When the hero triggers a critical hit against the target, a phantom will be generated. The phantom then launches a follow-up attack, dealing [+100%Attack]Lightning Damage to the target. The follow-up attack is counted as a basic attack."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 21560
  },
  {
    "slug": "acilia",
    "name": "Acilia",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Paladin",
    "captain": "Increases all allies' Resistance by 50.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Holy Light Descension",
        "description": "Dispels all debuffs from all allies, granting them Debuff Immunity for 10.0s. Then heals all allies by [+1%Target's Max HP][+400%Enlightenment] every 0.5s for 5.0s."
      },
      "battle": {
        "name": "Glory of Platinum",
        "description": "Heals allies within range by [+10%Target's Max HP][+1200%Enlightenment]."
      },
      "passive": {
        "name": "Divine Favor",
        "description": "For each debuff dispelled or resisted, gains 1 stack of Oathkeeper's Glory, up to 10 stacks."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "When healing an ally with less than 50% HP, grants 1 stack of Recovery Over Time for 8.0s. This skill only takes effect once during a period.",
      "Skill Haste +30",
      "Resistance +50",
      "Has a 35% chance to get immune to the Control to be inflicted."
    ],
    "id": 20420
  },
  {
    "slug": "garett",
    "name": "Garett",
    "element": "Lightning",
    "rarity": "Legendary",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "Increases all allies' Crit Damage by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Brutal Thrust",
        "description": "Gains Brutal Thrust for 10.0s while taking [+7%Current HP], then charges toward the enemy to immediately perform 5 thrusts, each dealing [+114%Attack]Lightning Damage. These thrusts count as basic attacks. While under Brutal Thrust, basic attacks are guaranteed to critically hit with 30% increased Crit Damage."
      },
      "battle": {
        "name": "Bloodthirsty Lance",
        "description": "Performs three thrusts against the current target. Each thrust grants the hero [+2%Current HP][+0%Attack] and deals [+100%Attack][+2%Current HP]Lightning Damage to the target. This skill counts as a basic attack."
      },
      "passive": {
        "name": "Sobering Pain",
        "description": "Increases Attack when taking damage, the increased volume equals to 20% of the damage taken, up to 200% of the hero's inherent Attack value."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 20660
  },
  {
    "slug": "thelendor",
    "name": "Thelendor",
    "element": "Radiance",
    "rarity": "Legendary",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Arcane Warrior",
    "captain": "Increases all allies' Attack by 30% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Lunar Retribution",
        "description": "Unleashes a rain of moonlight for 6s. Channels a moonlight beam to strike a random enemy every 0.25s, dealing [+120%Attack]Radiant Damage. Each enemy can be struck up to 6 time(s). Defeating any enemy extends the duration of the moonlight rain by 1s, up to 3 time(s). The following effects apply in order based on the number of Rally stacks consumed: [1] Each enemy can be struck 3 more time(s). [2] Reduces the interval of channeling moonlight beams to 0.2s. [3] Moonlight beams first focus fire on the enemy with the lowest Current HP, increasing subsequent damage by 20% if this enemy is defeated."
      },
      "battle": {
        "name": "Lunar Arrival",
        "description": "Deals [+450%Attack]Radiant Damage to surrounding enemies."
      },
      "passive": {
        "name": "General under the Moon",
        "description": "For each stack of Rally consumed when casting an ultimate skill, that instance of ultimate skill ignores 10% of the enemy's Defense."
      }
    },
    "inspiration": [
      "Heals the hero by [+8%Max HP] after killing an enemy.",
      "Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "The ultimate skill gains an extra permanent effect: summons a moonlight beam every 3s to strike 3 enemies at most; the particular moonlight beam is guaranteed to trigger the passive skill for 3 stacks of Defense Penetration."
    ],
    "id": 20840
  },
  {
    "slug": "elecebre",
    "name": "Elecebre",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Nymph",
    "career": "Sorcerer",
    "captain": "Increases all allies' Max HP by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Siren Song",
        "description": "Elecebre sings a song that grants Recovery Over Time and Defense Up II to all allies for 10.0s, with a 50.0% chance of inflicting Charmed on all enemies for 5.0s and a 75% chance of reducing their Ultimate Energy by 50.0."
      },
      "battle": {
        "name": "Nature's Blessing",
        "description": "Grants a [+30%Max HP] shield to an ally for 10.0s. This ally gains 30% of Elecebre's Resistance while the shield lasts."
      },
      "passive": {
        "name": "Blinding Beauty",
        "description": "As the battle starts, if Elecebre's Accuracy is higher than her Resistance, her Resistance is increased to equal her Accuracy. Meanwhile, deals [+150%Attack]Cold Damage to all enemies, with a 50.0% chance of inflicting Blind for 5.0s."
      }
    },
    "inspiration": [
      "The Blind inflicted with the passive skill will trigger every 15s in addition to once at the start of the combat.",
      "Increases the chance of the ultimate skill effect by 15%.",
      "The percentage of Resistance granted via the battle skill's shield is increased to 50%.",
      "Accuracy +50",
      "Shield granted with the battle skill reduces the chance of an ally taking enemy critical hits by 30%."
    ],
    "id": 22330
  },
  {
    "slug": "ghulende",
    "name": "Ghul'ende",
    "element": "Necrosis",
    "rarity": "Legendary",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Fallen Soul",
    "career": "Sorcerer",
    "captain": "Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Start Over",
        "description": "Deals [+720%Attack]Necrotic Damage to all enemies with a 75.0% chance of inflicting Attack Penalty II on them for 10.0s. Dispels all debuffs from all allies and heals them by [+10%Target's Max HP]. For each individual ally, grants an extra [+4%Target's Max HP] healing for each debuff successfully dispelled."
      },
      "battle": {
        "name": "Siphon",
        "description": "Has a 100.0% chance of inflicting Stunned to the enemy for 3.0s. For the next 3.0s, deals [+150%Attack]Necrotic Damage on the enemy every 0.6s, each time stealing 3.0 of their Ultimate Energy and healing the hero by [+150%Attack]."
      },
      "passive": {
        "name": "Disorder",
        "description": "When the hero casts a skill on an enemy with HP less than 50%, there is a 50.0% chance of inflicting Charmed and Healing Reduction for 5.0s. If the hero fails to inflict Charmed on the enemy, inflicts Accuracy Penalty II instead for 5.0s."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks.",
      "Skill Haste +30",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 22310
  },
  {
    "slug": "caspar",
    "name": "Caspar",
    "element": "Fire",
    "rarity": "Legendary",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Sorcerer",
    "captain": "Increases all allies' Attack by 24% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Grand Entrance",
        "description": "Deals [+600%Attack]Fire Damage to an enemy and inflicts a mark for 10.0s. Within the mark's duration, whenever an ally successfully performs a Wild Spellcasting (dice roll ≥ 4), the hero launches a throwing knife at the marked enemy, each knife dealing [+120%Attack]Fire Damage."
      },
      "battle": {
        "name": "Lucky Audience",
        "description": "Throws daggers, dealing [+100%Attack]Fire Damage 3 times. For each stack of Absurd Charade on the hero, this skill ignores the target's 1% Defense."
      },
      "passive": {
        "name": "Real Performer",
        "description": "When an ally Wild dice roll is even, the hero gains 1 stack of Absurd Charade, lasting 60.0s."
      }
    },
    "inspiration": [
      "Damage dealt to enemies with a shield is increased by 20%.",
      "The hero gains 15% Damage Bonus when their HP is higher than 85%.",
      "Crit Rate +10%,Crit Damage +20%",
      "ATK% +30%",
      "Ignores 15% of the target's Defense."
    ],
    "id": 21970
  },
  {
    "slug": "hochadir",
    "name": "Hochadir",
    "element": "Ice",
    "rarity": "Legendary",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "Death Knight",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Frost Reign",
        "description": "Has a 50.0% chance of inflicting Frost on all enemies for 10.0s. Instantly detonates all enemies under Frost, dealing AOE [+500%Attack]Cold Damage centered on them. Then detonates all enemies under Frozen again, dealing [+500%Attack]Cold Damage."
      },
      "battle": {
        "name": "Frostfall",
        "description": "Grants 20% Attack Up on the Frost ally with the highest Attack for 5.0s, then deals [+360%Attack]Cold Damage to enemies in a designated area, with a 75.0% chance to inflict Frost for 5.0s."
      },
      "passive": {
        "name": "Frostbite",
        "description": "When the hero is alive, extends the duration of Frost inflicted by allies by 5.0s."
      }
    },
    "inspiration": [
      "Reduces the hero's damage taken by 20% when under Control.",
      "When inflicting a debuff, there is a 70% chance of extending its duration by 30%.",
      "Skill Haste +30",
      "Accuracy +50",
      "Buffs granted with the battle skill cannot be dispelled."
    ],
    "id": 22230
  },
  {
    "slug": "olgan",
    "name": "Olgan",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "Warrior",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Banishment",
        "description": "Deals [+550%Attack]Cold Damage to enemies within range and grants 25% Attack Up to Frost allies for 10.0s."
      },
      "battle": {
        "name": "Intruders Die",
        "description": "Deals [+330%Attack]Cold Damage to an enemy. If the target is inflicted with Frost, the hero has a 100.0% chance of inflicting Frozen on them for 5.0s."
      },
      "passive": {
        "name": "Vow to Defend",
        "description": "For 10.0s after being cast, deals [+20%Attack]Cold Damage to nearby enemies every 1s with a 100.0% chance of inflicting Frost for 5.0s."
      }
    },
    "inspiration": [],
    "id": 21910
  },
  {
    "slug": "shook",
    "name": "Shook",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Ratfolk",
    "career": "Rogue",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Rest Assured",
        "description": "Deals [+675%Attack]Lightning Damage to enemies within range. Dispels all of their shields, with a 75.0% chance of inflicting Attack Penalty II for 10.0s. Has a 75.0% chance of inflicting Recharging Speed Penalty to them for 10.0s upon successfully dispelling their shields."
      },
      "battle": {
        "name": "Hit Where It Counts",
        "description": "Shoots 3 arrows at the enemy, each dealing [+150%Attack]Lightning Damage with a 75% chance of reducing their Ultimate Energy by 5.0."
      },
      "passive": {
        "name": "At Your Service",
        "description": "The hero gains 10.0 Ultimate Energy when an enemy gains a buff. This skill only takes effect once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 23290
  },
  {
    "slug": "dallbam",
    "name": "Dallbam",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Gnome",
    "career": "Warrior",
    "captain": "Increases all allies' Resistance by 40.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "My Precious!",
        "description": "Uses the crystal lamp from behind, dealing [+520%Defense]Cold Damage to all enemies, with a 50.0% chance to inflict Blind on them for 5.0s."
      },
      "battle": {
        "name": "Rewards of Digging",
        "description": "Gains a [+15%Max HP] shield for 10.0s and Defense Up II for 5.0s."
      },
      "passive": {
        "name": "Blessing of the Curse",
        "description": "Generates crystal armor for protection when the hero takes fatal damage in combat for the first time, gaining Invincibility for 5.0s and Recovery Over Time for 5.0s."
      }
    },
    "inspiration": [],
    "id": 21420
  },
  {
    "slug": "martina",
    "name": "Martina",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Divine Slash",
        "description": "Deals [+620%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] This skill guarantees a critical hit. [3] Ignores 20% of the enemy's Defense."
      },
      "battle": {
        "name": "Sunburst Attack",
        "description": "Deals [+310%Attack]Radiant Damage to surrounding enemies. If 2 or more enemies are hit, guarantees a critical hit and gains 1 stack of Rally."
      },
      "passive": {
        "name": "Cheerful Inspiration",
        "description": "When gaining Rally, the hero recharges Ultimate Energy by 10.0. This effect can only be triggered once every 0.5s."
      }
    },
    "inspiration": [],
    "id": 20170
  },
  {
    "slug": "dorkuraz",
    "name": "Dorkuraz",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Frost Troll",
    "career": "Shaman",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Iceball Assault",
        "description": "Throws iceballs, dealing [+480%Attack]Cold Damage to enemies within range."
      },
      "battle": {
        "name": "Snow Shadow",
        "description": "Deals [+280%Attack]Cold Damage to enemies within range with a 75.0% chance of inflicting Frost for 5.0s. Recharges Ultimate Energy by 25.0."
      },
      "passive": {
        "name": "Snow Mountain Descent",
        "description": "Basic attacks have a 60% chance of dealing [+40%Attack]Derivative and inflicting Frost on the target for 5.0s. Prioritizes attacks on the enemy not under Frost."
      }
    },
    "inspiration": [],
    "id": 20240
  },
  {
    "slug": "tathlyn",
    "name": "Tathlyn",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Ranger",
    "captain": "Increases all allies' Crit Damage by 24% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Moonlight Rain",
        "description": "Launches 3 attacks on enemies within range, each dealing [+150%Attack]Radiant Damage. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Further increases damage by 30%. [3] Enhances the hero's basic attacks for 10s, granting each attack a 50% chance of striking twice."
      },
      "battle": {
        "name": "Arrow of Dusk",
        "description": "Deals [+320%Attack]Radiant Damage to an enemy, while recharging a Rally ally with 10.0 Ultimate Energy."
      },
      "passive": {
        "name": "Sage's View",
        "description": "Launching every 5 basic attack(s) grants 1 stack of Rally to a Rally ally."
      }
    },
    "inspiration": [],
    "id": 20940
  },
  {
    "slug": "hegio",
    "name": "Hegio",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Revolving Sword Dance",
        "description": "Jumps to the target area, dealing [+500%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Further increases damage by 30%. [3] Further increases damage by 30% to enemies below 50% HP."
      },
      "battle": {
        "name": "Royal Swordsmanship",
        "description": "Launches 2 attacks on the target, each dealing [+300%Attack]Radiant Damage. The second attack recharges the hero's Ultimate Energy by 10.0 and has a 50.0% chance of granting the hero 1 stack of Rally."
      },
      "passive": {
        "name": "Knight Spirit",
        "description": "After casting an ultimate skill, the hero has a 50.0% chance of gaining 1 stack of Rally and granting it to a random ally."
      }
    },
    "inspiration": [],
    "id": 20070
  },
  {
    "slug": "garian",
    "name": "Garian",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 24%.",
    "skills": {
      "ultimate": {
        "name": "United We Stand",
        "description": "Generates a healing nexus at the designated area for 8s, healing allies within range by [+1%Target's Max HP][+350%Enlightenment] every 1s."
      },
      "battle": {
        "name": "Helping Hand",
        "description": "Heals the ally with the lowest Current HP by [+15%Target's Max HP][+2000%Enlightenment] and grants the ally Debuff Immunity for 5.0s."
      },
      "passive": {
        "name": "Duty Calls",
        "description": "For each ally with less than 50% HP on the field, the hero gains 1 stack of Recharging Speed Boost, and on top of that, for each ally with less than 20% HP on the field, the hero gains an extra stack of Recharging Speed Boost."
      }
    },
    "inspiration": [],
    "id": 23180
  },
  {
    "slug": "nimbus",
    "name": "Nimbus",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Aerial Dwarf",
    "career": "Gunslinger",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Thunderous Pursuit",
        "description": "Locks on an enemy for 2s, during which time a missile is launched at them every 0.5s, each dealing [+100%Attack]Lightning Damage. The lock-on duration is affected by the hero's Attack Speed. Each 1% extra Attack Speed increases the duration by 0.02s, up to 6s. This skill is considered a basic attack."
      },
      "battle": {
        "name": "Rolling Thunderclap",
        "description": "Deals [+220%Attack]Lightning Damage to the enemy. Every 1% extra Attack Speed gained by the hero grants 1% Damage Bonus to the skill."
      },
      "passive": {
        "name": "Gust of Speed",
        "description": "The hero gains Attack Speed Up II for 10.0s when obtaining a buff. This effect will not trigger the passive skill again."
      }
    },
    "inspiration": [],
    "id": 22350
  },
  {
    "slug": "deverick",
    "name": "Deverick",
    "element": "Necrosis",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "Wizard",
    "captain": "Increases all allies' Accuracy by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Dead End",
        "description": "Selects up to 3 enemies to launch 3 attacks, each dealing [+250%Attack]Necrotic Damage, with a 50.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Leave None Alive",
        "description": "Launches 3 attacks at an enemy, dealing [+120%Attack]Necrotic Damage, with a 50.0% chance of inflicting Accuracy Penalty II for 5.0s."
      },
      "passive": {
        "name": "Buried Radiance",
        "description": "When the hero hits an enemy with a skill, has a 30% chance of dispelling 1 buff from the enemy."
      }
    },
    "inspiration": [],
    "id": 23150
  },
  {
    "slug": "follie",
    "name": "Follie",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Deep Gnome",
    "career": "Wizard",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Risky Experiment",
        "description": "Deals [+420%Attack]Fire Damage to enemies. When Wild dice roll ≥4, casts this skill again on a random enemy, up to 3 times consecutively."
      },
      "battle": {
        "name": "Measured Force",
        "description": "For 7.0s after casting, the number of Orbs shot by the hero's basic attack is modified to 2."
      },
      "passive": {
        "name": "Stroke of Luck",
        "description": "When an ally Wild dice roll ≥5, accumulates 1 fireball. On the next basic attack, launches all accumulated fireballs, with each fireball dealing 1 basic attack's worth of damage."
      }
    },
    "inspiration": [],
    "id": 21490
  },
  {
    "slug": "gitouna",
    "name": "Gitouna",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Crit Damage by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Golden Brilliance",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Deals additional [+120%Attack]True Damage. [3] Deals additional [+120%Attack]True Damage again."
      },
      "battle": {
        "name": "Blade Echo",
        "description": "For 8.0s after being cast, each basic attack deals an extra [+68%Attack]Radiant Damage."
      },
      "passive": {
        "name": "Speed Surge",
        "description": "When gaining Rally, gains 20.0 Ultimate Energy and blinks to the farthest enemy, dealing [+200%Attack]Radiant Damage. This effect triggers once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 21210
  },
  {
    "slug": "shink",
    "name": "Shink",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Ratfolk",
    "career": "Rogue",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Rulebreaker's Bane",
        "description": "Strikes enemies within range 5 times, dealing [+105%Attack]Poison Damage each time, with a 50.0% chance of inflicting 1 stack of Poison on them for 15.0s."
      },
      "battle": {
        "name": "Bestow Revelry",
        "description": "Throws a dagger that bounces between enemies up to 5 times, dealing [+105%Attack]Poison Damage upon hit, with a 75.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "passive": {
        "name": "One More Round",
        "description": "When attacking enemies inflicted with Poison, the target's 1% Defense is ignored for every stack of Poison they have."
      }
    },
    "inspiration": [],
    "id": 22020
  },
  {
    "slug": "kailes",
    "name": "Kailes",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Gleaming Lens",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] Further increases damage by 20%. [3] The damage ignores the enemy's 20% Defense."
      },
      "battle": {
        "name": "Synergy",
        "description": "The hero has a 100.0% chance of gaining 25% Attack Up and granting it to the ally with the highest Attack for 5.0s."
      },
      "passive": {
        "name": "Energy Surge",
        "description": "Basic attacks have a 20% chance of being enhanced to spread after hitting an enemy, dealing [+175%Attack]Radiant Damage to enemies within range."
      }
    },
    "inspiration": [],
    "id": 20980
  },
  {
    "slug": "duling",
    "name": "Duling",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 24% in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Honey Whiskey",
        "description": "Grants Ally Protection to allies within range for 10.0s, and gains Defense Up II and Recovery Over Time for 10.0s."
      },
      "battle": {
        "name": "Drunken Brawl",
        "description": "Deals [+300%Defense]Radiant Damage to enemies within range, with a 75.0% chance of inflicting Taunt and Attack Penalty I on the targets for 5.0s."
      },
      "passive": {
        "name": "Heart of Stone",
        "description": "The hero takes 1% less damage for every 3% HP lost."
      }
    },
    "inspiration": [],
    "id": 23220
  },
  {
    "slug": "thurnus",
    "name": "Thurnus",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Thunder's Mark",
        "description": "Jumps up and strikes an enemy, dealing [+468%Attack]Lightning Damage. For the next 10.0s, when an ally launches a basic attack against this enemy, the hero has a 50% chance of additionally dealing [+52%Attack]Lightning Damage to them."
      },
      "battle": {
        "name": "Thunderous Gale",
        "description": "Deals [+300%Attack]Lightning Damage to enemies within range. The hero gains 15% Attack Up for 10.0s when hitting 3 or more targets with this skill."
      },
      "passive": {
        "name": "Togetherness",
        "description": "The hero gains an extra 20% Attack Speed for every Dauntless ally on the team. The effect is capped at 3 stacks."
      }
    },
    "inspiration": [],
    "id": 21130
  },
  {
    "slug": "ihuicatl",
    "name": "Ihuicatl",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "Wizard",
    "captain": "Increases all allies' Defense by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Not Yet Over",
        "description": "Grants Defense Up II to allies in range for 10.0s and performs [+10%Target's Max HP][+2200%Enlightenment] healing."
      },
      "battle": {
        "name": "Touch of Retribution",
        "description": "Deals [+300%Attack]Lightning Damage to the enemy and removes all of their shield, with a 75% chance of dispelling 1 buff from them."
      },
      "passive": {
        "name": "Little Trickery",
        "description": "When an ally casts an ultimate skill, the hero grants a [+10%Target's Max HP][+1350%Enlightenment] Shield to them for 5.0s."
      }
    },
    "inspiration": [],
    "id": 21820
  },
  {
    "slug": "sifris",
    "name": "Sifris",
    "element": "Poison",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Cleric",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Cult Frenzy",
        "description": "Consumes 30% of the hero's Current HP and resurrects 2 random allies at 30% of their Max HP, retaining 75% of the resurrected allies' Ultimate Energy before death. Then grants Defense Up I to all allies for 6.0s."
      },
      "battle": {
        "name": "Self Devotion",
        "description": "Consumes 10% of the hero's Current HP to heal all the other allies by [+20%Max HP]."
      },
      "passive": {
        "name": "Dragon Queen Blessing",
        "description": "When the hero's HP drops below 30% for the first time, gains Resurrection at Death for 10.0s."
      }
    },
    "inspiration": [],
    "id": 21680
  },
  {
    "slug": "tonalnan",
    "name": "Tonalnan",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "Sorcerer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Mad Blade of Flames",
        "description": "Gains 20% Attack Up for 10.0s, then deals [+160%Attack]Fire Damage 5 times to the enemy."
      },
      "battle": {
        "name": "Vigilant Guard",
        "description": "Brandishes dual blades, dealing [+90%Attack]Fire Damage 3 times to the target. The greater the buff count difference between the hero and the target, the higher this skill's damage."
      },
      "passive": {
        "name": "Flaming Lineage",
        "description": "When an ally's Wild dice roll ≥5, gains additional 5% Crit Damage, up to 20 stacks."
      }
    },
    "inspiration": [],
    "id": 21800
  },
  {
    "slug": "horrus",
    "name": "Horrus",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Dwarf",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Guardian Shield",
        "description": "Stops attacking and unleashes a battle cry forward, with a 100.0% chance of Taunting enemies within range for 5.0s and dealing [+600%Defense]Fire Damage. Gains 30% Damage Reduction for 5.0s and Hit Recovery for 5.0s."
      },
      "battle": {
        "name": "Hammer of Fortitude",
        "description": "Deals [+360%Defense]Fire Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty II for 5.0s."
      },
      "passive": {
        "name": "Indomitable",
        "description": "When taking damage, the hero has a 50% chance of obtaining a [+10%Max HP] shield for 5.0s. This effect only takes effect once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 20140
  },
  {
    "slug": "gumm",
    "name": "Gumm",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Forest Troll",
    "career": "Shaman",
    "captain": "Increases all allies' Resistance by 30.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Might of Mountains",
        "description": "Launches 3 attacks, dealing [+229%Attack]Radiant Damage to enemies within range each time, with a 30.0% chance of inflicting Stunned for 5.0s."
      },
      "battle": {
        "name": "Shroud of Holylight",
        "description": "Deals [+320%Attack]Radiant Damage to enemies within range, with a 75.0% chance of inflicting Blind and Attack Penalty I on the targets for 5.0s."
      },
      "passive": {
        "name": "Ancestor's Blessing",
        "description": "When inflicting a debuff on an enemy, there is a 30% chance of dispelling 1 debuff from a random ally."
      }
    },
    "inspiration": [],
    "id": 23230
  },
  {
    "slug": "alfie",
    "name": "Alfie",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Wild",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 24% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Stoking the Flames",
        "description": "Creates a magic circle lasting 15s in the target area. Ally Wild dice rolls within have a 70% chance to increase the result by 1."
      },
      "battle": {
        "name": "Focused Broiling",
        "description": "Launches 3 fireballs at the enemy, each dealing [+200%Attack]Fire Damage."
      },
      "passive": {
        "name": "Slow Simmer",
        "description": "When an ally's Wild dice roll ≥5, inflicts 20% Attack Up lasting 10.0s."
      }
    },
    "inspiration": [],
    "id": 21260
  },
  {
    "slug": "alvis",
    "name": "Alvis",
    "element": "Radiance",
    "rarity": "Epic",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Sheen Elf",
    "career": "Cleric",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Targeted Inspiration",
        "description": "Grants 20% Crit Rate Up to the ally with the highest Attack for 8.0s. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases the skill effect to 30% Crit Rate Up. [2] Extends the duration to 12.0s. [3] The skill effect applies to 1 additional ally."
      },
      "battle": {
        "name": "Incitement",
        "description": "Deals [+200%Attack]Radiant Damage to enemies within range and grants 15% Attack Up to the Rally ally with the highest Attack for 8.0s, with a 40.0% chance of granting 1 stack of Rally."
      },
      "passive": {
        "name": "Heart of Arrogance",
        "description": "Gains 1 stack of Rally if any target on the field gains Rally."
      }
    },
    "inspiration": [],
    "id": 20950
  },
  {
    "slug": "shagrol",
    "name": "Shagrol",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Orc",
    "career": "Warrior",
    "captain": "Increases all allies' Attack Speed by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Destructive Flurry",
        "description": "Leaps toward an enemy and makes 5 slashes, with each slash dealing [+160%Attack]Lightning Damage. Killing the enemy with this skill will grant the hero 40% Attack Up for 10.0s. This skill is counted as a basic attack."
      },
      "battle": {
        "name": "Terror Fall",
        "description": "Leaps at the enemy with the lowest Current HP and launches an attack, dealing [+380%Attack]Lightning Damage."
      },
      "passive": {
        "name": "Wrath of the Ancestors",
        "description": "Basic attacks have a 25% chance to attack twice."
      }
    },
    "inspiration": [],
    "id": 20030
  },
  {
    "slug": "vani",
    "name": "Vani",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "Sorcerer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Haste",
        "description": "Grants Attack Speed Up I to all Dauntless allies for 6.0s."
      },
      "battle": {
        "name": "Thunder Blast",
        "description": "Gains 30% Attack Up for 5.0s and deals [+450%Attack]Lightning Damage to the enemy."
      },
      "passive": {
        "name": "Pursuit",
        "description": "Every 3rd basic attack will deal additional damage."
      }
    },
    "inspiration": [],
    "id": 20080
  },
  {
    "slug": "vidimir",
    "name": "Vidimir",
    "element": "Ice",
    "rarity": "Epic",
    "school": "Frost",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "Increases all allies' Attack by 18% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Ice Nova",
        "description": "Releases an iceball that can bounce up to 5 times between enemies, dealing [+260%Attack]Cold Damage each time it hits. The iceball is more likely to hit the enemies inflicted with Frost. When the enemies with Frost are hit, their Frost will be removed and cause an explosion on the spot to deal [+260%Attack]Cold Damage to nearby enemies."
      },
      "battle": {
        "name": "Icicle",
        "description": "Deals [+350%Attack]Cold Damage to enemies within range, with a 75.0% chance of inflicting Frost for 5.0s."
      },
      "passive": {
        "name": "Icebreaker",
        "description": "When an enemy inflicted with Frost dies, gains 25% Attack Up for 10.0s and recharges Ultimate Energy by 15.0."
      }
    },
    "inspiration": [],
    "id": 20250
  },
  {
    "slug": "schaltar",
    "name": "Schaltar",
    "element": "Lightning",
    "rarity": "Epic",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "Cleric",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Blessings of Thunder",
        "description": "Enhances all allies with Lightning Force, granting them Blessings of Thunder for 15.0s. When launching basic attacks, all allies with Blessings of Thunder have a 30% chance of summoning a Lightning Strike on the enemy, dealing [+95%Attack]Derivative. Dauntless Heroes have a double chance of triggering this effect."
      },
      "battle": {
        "name": "Lightning Shield",
        "description": "Grants Lightning Shield to an ally for 4.0s. Lightning Shield deals [+55%Attack]Derivative to nearby enemies every 0.8s."
      },
      "passive": {
        "name": "Brutality",
        "description": "Basic attacks have a 30% chance of releasing Lightning Chain to deal [+75%Attack]Derivative to enemies. Each Lightning Chain can bounce 4 times among enemies at most."
      }
    },
    "inspiration": [],
    "id": 20040
  },
  {
    "slug": "liko",
    "name": "Liko",
    "element": "Fire",
    "rarity": "Epic",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Human",
    "career": "Sorcerer",
    "captain": "Increases all allies' Accuracy by 40.0 in Grand Gladiator Arena battles.",
    "skills": {
      "ultimate": {
        "name": "Smoldering Breath",
        "description": "Deals [+780%Attack]Fire Damage to enemies within range with a 100.0% chance of inflicting Buff Prohibition for 10.0s. If the hero has any buffs, they have a 100% chance of dispelling 1 buff on the targets."
      },
      "battle": {
        "name": "Fire's Kiss",
        "description": "Heals the ally with the lowest Current HP by [+20%Target's Max HP] and grants the ally Defense Up II for 5.0s."
      },
      "passive": {
        "name": "Element Bloodline",
        "description": "Grants Accuracy Up to the hero if they don't have any buffs. Otherwise, grants them Resistance Up."
      }
    },
    "inspiration": [],
    "id": 23260
  },
  {
    "slug": "adrie",
    "name": "Adrie",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Deep Elf",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Ambush",
        "description": "Shoots 3 arrows at the enemy. Each deals [+280%Attack]Necrotic Damage and reduces their Ultimate Energy by 10.0, with a 75.0% chance of inflicting Recharging Speed Penalty for 10.0s."
      },
      "battle": {
        "name": "Obstacle",
        "description": "Deals [+360%Attack]Necrotic Damage to an enemy."
      },
      "passive": {
        "name": "Disguise",
        "description": "Ignores 30% Resistance of the enemies inflicted with debuffs."
      }
    },
    "inspiration": [],
    "id": 21060
  },
  {
    "slug": "thea",
    "name": "Thea",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Wild",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Rogue",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Chain Slash",
        "description": "Gains 20% Attack Up for 10.0s, then strikes the target three times, each dealing [+280%Attack]Fire Damage."
      },
      "battle": {
        "name": "Sprint Strike",
        "description": "Charges into an enemy, dealing [+350%Attack]Fire Damage."
      },
      "passive": {
        "name": "Wild Resonance",
        "description": "When an ally's Wild dice roll ≥4, the hero gains 3.0 Ultimate Energy."
      }
    },
    "inspiration": [],
    "id": 20760
  },
  {
    "slug": "evania",
    "name": "Evania",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Crescent Slash",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 10%. [2] Further increases damage by 10%. [3] Further increases damage by 20%."
      },
      "battle": {
        "name": "Standard Swordsmanship",
        "description": "Strikes the enemy twice, each hit dealing [+180%Attack]Radiant Damage, with a 30.0% chance of gaining 1 stack of Rally."
      },
      "passive": {
        "name": "Radiant Sunshine",
        "description": "When gaining Rally, the hero has a 75.0% chance of granting 1 stack of Rally to an ally."
      }
    },
    "inspiration": [],
    "id": 20870
  },
  {
    "slug": "korth",
    "name": "Korth",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Undead",
    "career": "Summoner",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Shadow Inspired",
        "description": "Throws a potion that grants Attack Speed Up II to all allied undead creatures within range for 10.0s."
      },
      "battle": {
        "name": "Shadow Servant",
        "description": "Summons a Spirit lasting 15.0s."
      },
      "passive": {
        "name": "Shadow Enhanced",
        "description": "When allies summon undead creatures, grants the summoned unit 15% Attack Up for 6.0s."
      }
    },
    "inspiration": [],
    "id": 20340
  },
  {
    "slug": "dubok",
    "name": "Dubok",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "Shaman",
    "captain": "Increases all allies' Defense by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Warming Fire",
        "description": "Grants a [+15%Max HP] shield to each ally within range for 10.0s and dispels all Control from them."
      },
      "battle": {
        "name": "Blinding Flare",
        "description": "Deals [+300%Attack]Fire Damage to the enemy, with a 50.0% chance of inflicting Stunned for 5.0s."
      },
      "passive": {
        "name": "Rushed Rescue",
        "description": "When allies are inflicted with Control, recharges the hero's Ultimate Energy by 25.0. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 21660
  },
  {
    "slug": "lorarii",
    "name": "Lorarii",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Knight",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Banishing Smite",
        "description": "Wields the pike to deal [+600%Attack]Poison Damage to enemies within range, with a 75.0% chance of inflicting 3 stacks of Poison for 15.0s."
      },
      "battle": {
        "name": "Poisoned Pike",
        "description": "Deals [+350%Attack]Poison Damage to the enemy, with a 75.0% chance of inflicting 2 stacks of Poison for 15.0s."
      },
      "passive": {
        "name": "Swoop In",
        "description": "When dealing damage to an enemy, each stack of Poison on them allows the damage to ignore 1% of the target's Defense."
      }
    },
    "inspiration": [],
    "id": 20090
  },
  {
    "slug": "vethak",
    "name": "Vethak",
    "element": "Poison",
    "rarity": "Rare",
    "school": "Poison",
    "season": "s1",
    "type": "Melee",
    "race": "Blazeland Lizardfolk",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Fierce Attack",
        "description": "Thrusts the pike forward 3 times, each dealing [+200%Attack]Poison Damage to enemies within range, with a 50.0% chance of inflicting 1 stack of Poison for 15.0s."
      },
      "battle": {
        "name": "Pierce",
        "description": "Reaches out and pierces an enemy with the pike, dealing [+300%Attack]Poison Damage."
      },
      "passive": {
        "name": "Swoop In",
        "description": "After dealing damage to enemies under Poison, gains 15% Attack Up for 5.0s."
      }
    },
    "inspiration": [],
    "id": 20510
  },
  {
    "slug": "eleuia",
    "name": "Eleuia",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Summon",
    "season": "s1",
    "type": "Range",
    "race": "Blazeland Lizardfolk",
    "career": "Barbarian",
    "captain": "Increases all allies' Attack Speed by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "No Rest for the Undead",
        "description": "Grants Attack Speed Up II and 20% Attack Up to all allies' undead summoned units for 10.0s."
      },
      "battle": {
        "name": "No Delay!",
        "description": "Deals [+330%Attack]Necrotic Damage to up to 3 random enemies. This skill is considered a basic attack."
      },
      "passive": {
        "name": "To Work!",
        "description": "Every 5 basic attack(s) summons a Spirit that lasts 15.0s."
      }
    },
    "inspiration": [],
    "id": 21810
  },
  {
    "slug": "gusni",
    "name": "Gusni",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Range",
    "race": "Orc",
    "career": "Warrior",
    "captain": "Increases all allies' HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Grudge of Orc",
        "description": "Deals [+500%Attack][+3000%Enlightenment]Cold Damage to enemies within range, with a 50.0% chance of inflicting Frozen for 5.0s."
      },
      "battle": {
        "name": "Protection of Orc",
        "description": "Grants a [+10%Target's Max HP][+2000%Enlightenment] shield to the ally for 10.0s and grants Defense Up II for 5.0s."
      },
      "passive": {
        "name": "Unforgivable",
        "description": "Whenever an enemy is inflicted with Frozen, extends the duration of all debuffs on the enemy for 5.0s."
      }
    },
    "inspiration": [],
    "id": 21630
  },
  {
    "slug": "edgar",
    "name": "Edgar",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Ranger",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Hatred",
        "description": "Deals [+500%Attack][+10%Max HP]Necrotic Damage to all enemy targets within range, gaining a [+25%Max HP] shield and Defense Up I both for 10.0s. For each enemy hit by this skill, the hero gains 10% more shield."
      },
      "battle": {
        "name": "Iron Guise",
        "description": "Gains a [+15%Max HP] shield for 10.0s."
      },
      "passive": {
        "name": "Live in Shadows",
        "description": "When the hero has a shield, damage taken is reduced by 20%."
      }
    },
    "inspiration": [],
    "id": 23310
  },
  {
    "slug": "rephe",
    "name": "Rephe",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Deep Gnome",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Frozen Bomb",
        "description": "Deals [+700%Attack]Cold Damage to enemies within range, with a 50.0% chance of inflicting Frozen for 5.0s."
      },
      "battle": {
        "name": "Cold Iron Hammer",
        "description": "Deals [+380%Attack]Cold Damage to the enemy, with a 75.0% chance of inflicting Attack Penalty I for 5.0s."
      },
      "passive": {
        "name": "Secondary Damage",
        "description": "When the hero is dealing damage to enemies inflicted with Frozen, there is a 50% chance of reducing their Ultimate Energy by 10.0."
      }
    },
    "inspiration": [],
    "id": 21470
  },
  {
    "slug": "yamyra",
    "name": "Yamyra",
    "element": "Fire",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Rural Halfling",
    "career": "Warrior",
    "captain": "Increases all allies' Defense by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Unruly Flame",
        "description": "Deals [+800%Attack]Fire Damage to enemies within range, with a 75.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Nullified Harm",
        "description": "Gains Defense Up I for 5.0s."
      },
      "passive": {
        "name": "Empty Rhetoric",
        "description": "All subsequent damage to the hero from the damage dealer will be reduced by 1% after taking damage. The effect can be stacked up to 20 stacks to the same target."
      }
    },
    "inspiration": [],
    "id": 23340
  },
  {
    "slug": "fitz",
    "name": "Fitz",
    "element": "Necrosis",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Undead",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Glutton for Punishment",
        "description": "Gains [+10%Max HP] and transfers all allies' debuffs to the hero. Each successful transfer grants additional healing."
      },
      "battle": {
        "name": "Optimism",
        "description": "Randomly dispels 1 debuff from the hero."
      },
      "passive": {
        "name": "Masochist",
        "description": "Damage taken decreases with each debuff on the hero."
      }
    },
    "inspiration": [],
    "id": 22190
  },
  {
    "slug": "wellby",
    "name": "Wellby",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Range",
    "race": "Rural Halfling",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Fair or Foul",
        "description": "Deals [+660%Attack]Radiant Damage to enemies within range. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 10%. [2] Recharges Ultimate Energy by 30.0. [3] Increases the Ultimate Energy gain to 50.0."
      },
      "battle": {
        "name": "Pay Up Now",
        "description": "Deals [+300%Attack]Radiant Damage to the target, with a 50.0% chance of granting 1 stack of Rally to a random ally."
      },
      "passive": {
        "name": "Harmony Brings Wealth",
        "description": "When gaining Rally, gains 15% Attack Up for 5.0s."
      }
    },
    "inspiration": [],
    "id": 20310
  },
  {
    "slug": "tauricen",
    "name": "Tauricen",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Melee",
    "race": "Valley Minotaur",
    "career": "Warrior",
    "captain": "Increases all allies' Max HP by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Impetuous Whirlwind",
        "description": "Deals [+695%Attack]Lightning Damage to surrounding enemies."
      },
      "battle": {
        "name": "Wrathful Slash",
        "description": "Launches 2 attacks on an enemy, each dealing [+200%Attack]Lightning Damage. This skill is considered a basic attack."
      },
      "passive": {
        "name": "Raging Fury",
        "description": "Gains Attack Speed Up I for 10.0s as the battle starts."
      }
    },
    "inspiration": [],
    "id": 21890
  },
  {
    "slug": "loris",
    "name": "Loris",
    "element": "Ice",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Faith's Pilgrim",
        "description": "Has a 100.0% chance of Taunting the enemy for 5.0s and a 100.0% chance of inflicting Attack Penalty II for 10.0s."
      },
      "battle": {
        "name": "Dragon Scale Mail",
        "description": "Deals [+300%Attack][+150%Defense]Cold Damage to an enemy."
      },
      "passive": {
        "name": "Dragon's Ice Pick",
        "description": "When taking damage, has a 10.0% chance of inflicting Frozen on the attacker for 2.0s. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 21750
  },
  {
    "slug": "broll",
    "name": "Broll",
    "element": "Radiance",
    "rarity": "Rare",
    "school": "Rally",
    "season": "s1",
    "type": "Melee",
    "race": "Sheen Elf",
    "career": "Warrior",
    "captain": "Increases all allies' Crit Damage by 12% in all battles.",
    "skills": {
      "ultimate": {
        "name": "Boarding Action",
        "description": "Deals [+600%Attack]Radiant Damage to enemies within range, recharging Ultimate Energy by 25.0 if any enemy is defeated by this skill. The following effects apply in order based on the number of Rally stacks consumed: [1] Increases damage by 20%. [2] This damage guarantees a critical hit. [3] Increases the Ultimate Energy gain to 50.0."
      },
      "battle": {
        "name": "Shatter Strike",
        "description": "Deals [+350%Attack]Radiant Damage to the enemy, and ignores 30% of the enemy's Defense."
      },
      "passive": {
        "name": "Call of the Open Sea",
        "description": "The hero additionally obtains 30% Crit Damage Up for 10.0s after gaining Rally."
      }
    },
    "inspiration": [],
    "id": 20860
  },
  {
    "slug": "grover",
    "name": "Grover",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Support",
    "season": "s1",
    "type": "Melee",
    "race": "Human",
    "career": "Rogue",
    "captain": "Increases all allies' Accuracy by 20.0 in all battles.",
    "skills": {
      "ultimate": {
        "name": "Thieving Techniques",
        "description": "Flashes to an enemy and launches two attacks, each dealing [+370%Attack]Lightning Damage and stealing a random buff from them."
      },
      "battle": {
        "name": "Cunning Swordplay",
        "description": "Strikes an enemy two times, dealing [+135%Attack]Lightning Damage each time, with a 15% chance of stealing 10.0 Ultimate Energy."
      },
      "passive": {
        "name": "Hide and Seek",
        "description": "Enters Invisibility for 10.0s if the hero's Current HP falls below 35% when attacked. This effect can only be triggered once every 5.0s."
      }
    },
    "inspiration": [],
    "id": 20580
  },
  {
    "slug": "haug",
    "name": "Haug",
    "element": "Lightning",
    "rarity": "Rare",
    "school": "Dauntless",
    "season": "s1",
    "type": "Range",
    "race": "Valley Minotaur",
    "career": "Warrior",
    "captain": "Increases all allies' Attack Speed by 18% in dungeon battles.",
    "skills": {
      "ultimate": {
        "name": "Piercing Spear",
        "description": "Launches a lightning spear at an enemy, dealing [+680%Attack]Lightning Damage, with a 100.0% chance of inflicting Mark for 5.0s. During this period, basic attacks deal additional [+40%Attack]Lightning Damage."
      },
      "battle": {
        "name": "Lightning Arrow",
        "description": "Throws 2 javelins at an enemy, each dealing [+185%Attack]Lightning Damage. This skill is considered a basic attack."
      },
      "passive": {
        "name": "Relentless Onslaught",
        "description": "Gains Attack Speed Up II for 15.0s whenever an enemy dies."
      }
    },
    "inspiration": [],
    "id": 21940
  },
  {
    "slug": "cato",
    "name": "Cato",
    "element": "Radiance",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Human",
    "career": "Wizard",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Circle of Protection",
        "description": "Grants Defense Up II to allies within range for 10.0s."
      },
      "battle": {
        "name": "Light Orb",
        "description": "Deals [+300%Attack]radiant damage to an enemy."
      },
      "passive": {
        "name": "Secondary Protection",
        "description": "Has a 50.0% chance to gain 30% Damage Reduction for 5.0s when casting skills."
      }
    },
    "inspiration": [],
    "id": 20720
  },
  {
    "slug": "olaf",
    "name": "Olaf",
    "element": "Necrosis",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Undead",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Skeleton Spin",
        "description": "Consumes a certain amount of HP to deal [+350%Attack]Necrotic damage to enemies within range, and gains Attack Speed Up II for 10.0s."
      },
      "battle": {
        "name": "Void Swing",
        "description": "Slashes at an enemy and deals [+300%Attack]Necrotic damage."
      },
      "passive": {
        "name": "Unholy Weapon",
        "description": "Damage dealt by basic attacks and skills will carry additional [+15%Attack]Necrotic damage."
      }
    },
    "inspiration": [],
    "id": 22200
  },
  {
    "slug": "vekuzz",
    "name": "Vekuzz",
    "element": "Poison",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Forest Troll",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Flying Axe",
        "description": "Throws a flying axe, dealing [+600%Attack]poison damage to an enemy, with a 50.0% chance to inflict Stunned for 5.0s."
      },
      "battle": {
        "name": "Self-Healing",
        "description": "Restores HP by [+100%Attack]."
      },
      "passive": {
        "name": "Battle Frenzy",
        "description": "Gains 15% Attack Up for 5.0s as the battle starts."
      }
    },
    "inspiration": [],
    "id": 20520
  },
  {
    "slug": "sailla",
    "name": "Sailla",
    "element": "Lightning",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Wood Elf",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Precise Assault",
        "description": "Thrusts at a target, dealing [+600%Attack]lightning damage."
      },
      "battle": {
        "name": "Nature's Gift",
        "description": "Gains Attack Speed Up I for 5.0s."
      },
      "passive": {
        "name": "Instinct",
        "description": "Gains Defense Up I for 5.0s as the battle starts."
      }
    },
    "inspiration": [],
    "id": 20490
  },
  {
    "slug": "dollaad",
    "name": "Dollaad",
    "element": "Poison",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Melee",
    "race": "Goblin",
    "career": "Warrior",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Poison Vial",
        "description": "Throws a vial, dealing [+700%Attack]poison damage to enemies within range."
      },
      "battle": {
        "name": "Unity",
        "description": "Inspires surrounding allies and grants them Defense Up I for 5.0s."
      },
      "passive": {
        "name": "Overestimated Force",
        "description": "If allies outnumber enemies as the battle starts, the hero gains Defense Up I for 10.0s."
      }
    },
    "inspiration": [],
    "id": 20530
  },
  {
    "slug": "merideth",
    "name": "Merideth",
    "element": "Radiance",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Human",
    "career": "Sorcerer",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Circle of Healing",
        "description": "Heals allies within range by [+25%Target's Max HP]."
      },
      "battle": {
        "name": "Healing Words",
        "description": "Heals an ally by [+20%Target's Max HP]."
      },
      "passive": {
        "name": "Prayer of Life",
        "description": "Healing from the hero increases by 10%."
      }
    },
    "inspiration": [],
    "id": 20800
  },
  {
    "slug": "dillon",
    "name": "Dillon",
    "element": "Lightning",
    "rarity": "Common",
    "school": "Support",
    "season": "s4",
    "type": "Range",
    "race": "Human",
    "career": "Ranger",
    "captain": "",
    "skills": {
      "ultimate": {
        "name": "Blinding Arrow",
        "description": "Deals [+600%Attack]lightning damage to the enemy, with a 50.0% chance of inflicting Accuracy Penalty I for 10.0s."
      },
      "battle": {
        "name": "Precise Shot",
        "description": "Deals [+300%Attack]lightning damage to an enemy."
      },
      "passive": {
        "name": "Relentlessness",
        "description": "Every 3rd basic attack or skill cast grants the hero Attack Speed Up I for 5.0s."
      }
    },
    "inspiration": [],
    "id": 20380
  }
];
