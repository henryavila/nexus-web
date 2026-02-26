// heroes.js — Heroes browser component
const Heroes = {
  showAll: false,
  currentFilters: { elements: [], roles: [], search: '' },

  render(container, param) {
    container.innerHTML = '';

    // If deep-linked to a specific hero, open detail after render
    const deepLinkHero = param ? decodeURIComponent(param) : null;

    // Header
    const ownedCount = D.myRosterRaw().length;
    const totalCount = D.allHeroes().length;

    const header = R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6' }, [
      R.el('div', {}, [
        R.el('h1', { className: 'text-xl md:text-2xl font-bold text-gold', textContent: 'Meus Heróis' }),
        R.el('div', {
          className: 'text-sm text-gray-400 mt-1',
          textContent: `${ownedCount} heróis no roster — ${totalCount} no banco`
        })
      ])
    ]);
    container.appendChild(header);

    // Filter bar + "Todos" toggle
    const filterBar = Filters.createFilterBar(
      { elements: true, roles: true, search: true },
      (filters) => {
        this.currentFilters = filters;
        this._renderGrid(grid);
      }
    );

    // "Todos" toggle button — inject before the search input
    const todosBtn = R.el('button', {
      className: 'px-3 py-1 rounded-full text-xs border border-gold text-gold hover:bg-gold hover:text-white transition-colors',
      textContent: 'Todos',
      onClick: () => {
        this.showAll = !this.showAll;
        if (this.showAll) {
          todosBtn.classList.add('bg-gold', 'text-white');
          todosBtn.classList.remove('text-gold');
        } else {
          todosBtn.classList.remove('bg-gold', 'text-white');
          todosBtn.classList.add('text-gold');
        }
        this._renderGrid(grid);
      }
    });

    // Insert the Todos button into the filter bar before the search input
    const searchInput = filterBar.querySelector('[data-search]');
    if (searchInput) {
      filterBar.insertBefore(todosBtn, searchInput);
    } else {
      filterBar.appendChild(todosBtn);
    }

    container.appendChild(filterBar);

    // Grid container
    const grid = R.el('div', { className: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3' });
    container.appendChild(grid);

    // Reset state for fresh render
    this.showAll = false;
    this.currentFilters = { elements: [], roles: [], search: '' };
    this._renderGrid(grid);

    // Deep-link: open hero detail if param provided
    if (deepLinkHero) {
      const hero = D.heroByName(deepLinkHero);
      if (hero) this._openDetail(hero.id);
    }
  },

  // ---------------------------------------------------------------
  // Grid rendering
  // ---------------------------------------------------------------
  _renderGrid(grid) {
    grid.innerHTML = '';

    const roleMap = typeof DATA_ROLE_GROUPS !== 'undefined' ? DATA_ROLE_GROUPS : {};

    let heroes;
    if (this.showAll) {
      heroes = D.allHeroes().map(h => {
        const full = D.heroFull(h.id) || h;
        return {
          ...full,
          hh_rating: parseFloat(full.hh_overall) || null,
          roleGroups: roleMap[h.id] || [],
          _owned: D.isOwned(h.id)
        };
      });
    } else {
      heroes = D.myRoster().map(h => ({
        ...h,
        hh_rating: parseFloat(h.hh_overall) || null,
        roleGroups: roleMap[h.id] || [],
        _owned: true
      }));
    }

    // Apply filters
    const filtered = Filters.applyHeroFilters(heroes, this.currentFilters);

    // Sort: owned first (in "Todos" mode), then by tier (SS > S > A > B > C > null), then alphabetical
    const tierOrder = { SS: 0, S: 1, A: 2, B: 3, C: 4, D: 5 };
    filtered.sort((a, b) => {
      // Owned first in "Todos" mode
      if (this.showAll) {
        if (a._owned && !b._owned) return -1;
        if (!a._owned && b._owned) return 1;
      }
      // By tier
      const ta = tierOrder[a.ac_tier] ?? 6;
      const tb = tierOrder[b.ac_tier] ?? 6;
      if (ta !== tb) return ta - tb;
      // Alphabetical
      return a.name.localeCompare(b.name);
    });

    if (filtered.length === 0) {
      grid.appendChild(R.el('div', {
        className: 'col-span-full text-center text-gray-500 py-12',
        textContent: 'Nenhum herói encontrado.'
      }));
      return;
    }

    for (const hero of filtered) {
      grid.appendChild(this._heroCard(hero));
    }
  },

  // ---------------------------------------------------------------
  // Single hero mini-card
  // ---------------------------------------------------------------
  _heroCard(hero) {
    const isOwned = hero._owned;
    const borderColor = isOwned ? `border-${R.elementColor(hero.element)}` : 'border-surface-hover';
    const opacityClass = (this.showAll && !isOwned) ? 'opacity-50' : '';

    const card = R.el('div', {
      className: `bg-surface-card rounded-lg border ${borderColor} overflow-hidden cursor-pointer hover:bg-surface-hover transition-colors ${opacityClass}`,
      onClick: () => {
        if (hero.id) this._openDetail(hero.id);
      }
    });

    // Hero portrait — prominent at top
    const heroId = hero.id;
    if (heroId) {
      const url = `https://i.dmzgame.com/dragonheir/img/hero/pic_hero_show_${heroId}.png`;
      const img = R.el('img', {
        src: url,
        className: 'w-full h-36 object-cover object-top',
        loading: 'lazy',
        onerror: (e) => { e.target.style.display = 'none'; }
      });
      card.appendChild(img);
    } else {
      // Fallback: colored placeholder
      card.appendChild(R.el('div', {
        className: `w-full h-36 bg-${R.elementColor(hero.element)} opacity-20 flex items-center justify-center`,
      }, [
        R.el('span', { className: 'text-3xl text-white opacity-50', textContent: hero.name[0] })
      ]));
    }

    // Content area below image
    const content = R.el('div', { className: 'p-2.5 pt-2' });

    // Name row: element dot + name
    content.appendChild(R.el('div', { className: 'flex items-center gap-1.5 mb-1' }, [
      R.elementDot(hero.element),
      R.el('span', {
        className: 'text-sm font-medium truncate',
        textContent: hero.name,
        title: hero.name
      })
    ]));

    // Rarity + tier inline
    const metaRow = R.el('div', { className: 'flex items-center gap-2 mb-1' });
    metaRow.appendChild(R.el('span', {
      className: `text-xs text-${R.rarityColor(hero.rarity)}`,
      textContent: hero.rarity
    }));
    if (hero.ac_tier) {
      metaRow.appendChild(R.badge(hero.ac_tier, R.tierColor(hero.ac_tier)));
    }
    if (hero.hh_rating != null) {
      metaRow.appendChild(R.el('span', {
        className: 'text-xs text-gray-400',
        textContent: `HH ${hero.hh_rating}`
      }));
    }
    content.appendChild(metaRow);

    // Role group badges
    const roles = hero.roleGroups || [];
    if (roles.length > 0) {
      const roleColorMap = {};
      for (const rg of Filters.ROLE_GROUPS) roleColorMap[rg.key] = rg.color;
      const roleRow = R.el('div', { className: 'flex items-center gap-1 mb-1 flex-wrap' });
      for (const r of roles) {
        const c = roleColorMap[r] || 'gray-500';
        roleRow.appendChild(R.el('span', {
          className: `text-[10px] px-1.5 py-0.5 rounded border border-${c} text-${c}`,
          textContent: r
        }));
      }
      content.appendChild(roleRow);
    }

    // Gear loadout tag
    if (typeof Gear !== 'undefined') {
      const loadouts = Gear.getLoadoutsForHero(hero.name);
      const primary = loadouts.find(l => !l.secondary) || loadouts[0];
      if (primary) {
        content.appendChild(R.el('div', { className: 'flex items-center gap-1 mb-1' }, [
          R.el('span', {
            className: 'text-[10px] px-1.5 py-0.5 rounded bg-gold/15 text-gold-dim border border-gold/20',
            textContent: primary.name
          })
        ]));
      }
    }

    // Owned info
    if (isOwned) {
      const infoRow = R.el('div', { className: 'flex items-center gap-2 text-xs text-gray-500 flex-wrap' });

      if (hero.insp != null && hero.insp > 0) {
        infoRow.appendChild(R.el('span', {
          className: 'text-gold-dim',
          textContent: `Insp.${hero.insp}`
        }));
      }

      if (infoRow.children.length > 0) {
        content.appendChild(infoRow);
      }
    }

    // "Todos" mode: unowned label
    if (this.showAll && !isOwned) {
      content.appendChild(R.el('div', {
        className: 'text-xs text-gray-600 italic',
        textContent: 'Não possui'
      }));
    }

    card.appendChild(content);
    return card;
  },

  // ---------------------------------------------------------------
  // Detail slide-over
  // ---------------------------------------------------------------
  _openDetail(heroId) {
    const hero = D.hero(heroId);
    const my = D.myHero(heroId);
    const tier = D.tierByName(hero?.name);
    if (!hero && !my) return;

    const heroName = hero?.name || `Hero #${heroId}`;
    const element = hero?.element || '';
    const rarity = hero?.rarity || '';

    SlidePanel.open(heroName, (panel) => {
      // ---- Identity section ----
      const identity = R.el('div', { className: 'mb-5' }, [
        R.el('div', { className: 'flex items-start gap-4 mb-2' }, [
          R.heroImg(heroId, 80, { height: 120 }),
          R.el('div', { className: 'pt-1' }, [
            R.el('div', { className: 'flex items-center gap-2 mb-1' }, [
              R.elementDot(element),
              R.el('span', { className: `text-lg font-bold text-${R.rarityColor(rarity)}`, textContent: heroName }),
            ]),
            R.el('span', { className: 'text-sm text-gray-400', textContent: rarity })
          ])
        ].filter(Boolean))
      ]);

      // Element + school + season
      const meta = [];
      if (element) meta.push(element);
      if (hero?.school) meta.push(hero.school);
      if (hero?.season) meta.push(hero.season.toUpperCase());
      if (hero?.race) meta.push(hero.race);
      if (hero?.career) meta.push(hero.career);

      if (meta.length > 0) {
        identity.appendChild(R.el('div', {
          className: 'text-xs text-gray-500 mb-2',
          textContent: meta.join(' · ')
        }));
      }

      panel.appendChild(identity);

      // ---- Tiers section ----
      const tiersSection = R.el('div', { className: 'mb-5' });
      tiersSection.appendChild(R.el('h3', {
        className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
        textContent: 'Avaliações'
      }));

      const tiersRow = R.el('div', { className: 'flex items-center gap-3 flex-wrap' });

      const acTier = tier?.ac_tier || null;
      if (acTier) {
        tiersRow.appendChild(R.el('div', { className: 'flex items-center gap-1' }, [
          R.el('span', { className: 'text-xs text-gray-500', textContent: 'AC:' }),
          R.badge(acTier, R.tierColor(acTier))
        ]));
      }

      const hhRating = parseFloat(tier?.hh_overall) || null;
      if (hhRating != null) {
        tiersRow.appendChild(R.el('div', { className: 'flex items-center gap-1' }, [
          R.el('span', { className: 'text-xs text-gray-500', textContent: 'HH:' }),
          R.el('span', { className: 'text-sm font-medium text-white', textContent: String(hhRating) })
        ]));
      }

      if (tier?.di_rank) {
        tiersRow.appendChild(R.el('div', { className: 'flex items-center gap-1' }, [
          R.el('span', { className: 'text-xs text-gray-500', textContent: 'DI:' }),
          R.el('span', { className: 'text-sm font-medium text-white', textContent: `#${tier.di_rank}` })
        ]));
      }

      if (tiersRow.children.length > 0) {
        tiersSection.appendChild(tiersRow);
        panel.appendChild(tiersSection);
      }

      // ---- HH Activity Ratings ----
      if (tier?.ratings) {
        const ratingsSection = R.el('div', { className: 'mb-5' });
        ratingsSection.appendChild(R.el('h3', {
          className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
          textContent: 'Ratings por Atividade'
        }));

        const ratingLabels = {
          temporal_vortex: 'Temporal Vortex',
          goblin_lair: 'Goblin Lair',
          grave_venom: 'Grave (Venom)',
          grave_curse: 'Grave (Curse)',
          grave_rot: 'Grave (Rot)',
          heretical_ruins: 'Heretical Ruins',
          ancient_battlefield: 'Ancient Battlefield',
          arena: 'Arena',
          fae: 'Fae',
          pillar: 'Pillar',
          green_dragon: 'Green Dragon',
          violet_dragon: 'Violet Dragon',
          gloomland: 'Gloomland'
        };

        const ratingsGrid = R.el('div', { className: 'grid grid-cols-2 gap-x-4 gap-y-1' });
        for (const [key, label] of Object.entries(ratingLabels)) {
          const val = tier.ratings[key];
          if (val != null) {
            const ratingColor = val >= 4.5 ? 'text-tier-ss' : val >= 3.5 ? 'text-tier-s' : val >= 2.5 ? 'text-tier-a' : 'text-gray-500';
            ratingsGrid.appendChild(R.el('div', { className: 'flex justify-between text-xs py-0.5' }, [
              R.el('span', { className: 'text-gray-400', textContent: label }),
              R.el('span', { className: `font-medium ${ratingColor}`, textContent: String(val) })
            ]));
          }
        }
        ratingsSection.appendChild(ratingsGrid);
        panel.appendChild(ratingsSection);
      }

      // ---- Captain skill ----
      if (hero?.captain) {
        const captainSection = R.el('div', { className: 'mb-5' });
        captainSection.appendChild(R.el('h3', {
          className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
          textContent: 'Capitão'
        }));
        captainSection.appendChild(R.el('div', {
          className: 'text-xs text-gray-400 bg-surface rounded p-3 leading-relaxed',
          textContent: hero.captain
        }));
        panel.appendChild(captainSection);
      }

      // ---- Gear Loadouts ----
      if (typeof Gear !== 'undefined') {
        const heroLoadouts = Gear.getLoadoutsForHero(heroName);
        if (heroLoadouts.length > 0) {
          const gearData = (typeof DATA_GEAR !== 'undefined' && DATA_GEAR) || {};
          const inventory = gearData.inventory || [];

          const gearSection = R.el('div', { className: 'mb-5' });
          gearSection.appendChild(R.el('h3', {
            className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
            textContent: 'Gear Loadout'
          }));

          for (const l of heroLoadouts) {
            const card = R.el('div', { className: 'bg-surface rounded p-3 mb-2' });
            card.appendChild(R.el('div', { className: 'flex items-center justify-between mb-2' }, [
              R.el('span', { className: 'text-xs font-bold text-white', textContent: l.name }),
              l.secondary ? R.el('span', { className: 'text-[10px] px-1.5 py-0.5 rounded bg-surface-hover text-gray-400', textContent: 'SEC' }) : null,
              l.score ? R.el('span', { className: 'text-[10px] text-gray-500', textContent: `Score: ${l.score}` }) : null
            ].filter(Boolean)));

            const piecesGrid = R.el('div', { className: 'grid grid-cols-2 gap-2 mb-2' });
            for (const slot of ['weapon', 'armor', 'helmet', 'gloves']) {
              const pieceId = l.pieces?.[slot];
              const piece = pieceId ? inventory.find(p => p.id === pieceId) : null;
              if (piece) {
                piecesGrid.appendChild(R.el('div', { className: 'flex items-center gap-1.5' }, [
                  Gear._gearImg(piece.name, 24) || Gear._slotIcon(piece.slot),
                  R.el('div', { className: 'min-w-0' }, [
                    R.el('div', { className: 'text-[10px] text-gray-300 truncate', textContent: piece.name }),
                    R.el('div', { className: 'text-[10px] text-gray-500', textContent: `${piece.primary.stat} +${piece.primary.value}` })
                  ])
                ]));
              }
            }
            card.appendChild(piecesGrid);

            if (l.set_bonuses?.length) {
              for (const b of l.set_bonuses) {
                card.appendChild(R.el('div', { className: 'text-[10px] text-gold' }, [
                  R.el('span', { textContent: '\u2728 ' + b })
                ]));
              }
            }
            gearSection.appendChild(card);
          }

          gearSection.appendChild(R.el('a', {
            className: 'text-xs text-gold hover:text-gold-hover cursor-pointer',
            href: '#gear',
            textContent: 'Ver todos os loadouts →'
          }));
          panel.appendChild(gearSection);
        }
      }

      // ---- Skills ----
      if (hero?.skills) {
        const skillsSection = R.el('div', { className: 'mb-5' });
        skillsSection.appendChild(R.el('h3', {
          className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
          textContent: 'Skills'
        }));

        const skillTypes = [
          { key: 'ultimate', label: 'Ultimate' },
          { key: 'battle', label: 'Battle' },
          { key: 'passive', label: 'Passive' }
        ];

        for (const st of skillTypes) {
          const skill = hero.skills[st.key];
          if (skill) {
            const skillCard = R.el('div', { className: 'bg-surface rounded p-3 mb-2' }, [
              R.el('div', { className: 'flex items-center gap-2 mb-1' }, [
                R.el('span', {
                  className: 'text-xs font-semibold text-gold-dim uppercase',
                  textContent: st.label
                }),
                R.el('span', {
                  className: 'text-sm font-medium text-white',
                  textContent: skill.name
                })
              ]),
              R.el('div', {
                className: 'text-xs text-gray-400 leading-relaxed',
                textContent: skill.description
              })
            ]);
            skillsSection.appendChild(skillCard);
          }
        }
        panel.appendChild(skillsSection);
      }

      // ---- Inspiration (from DATA_HEROES) ----
      if (hero?.inspiration && hero.inspiration.length > 0) {
        const inspSection = R.el('div', { className: 'mb-5' });
        inspSection.appendChild(R.el('h3', {
          className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
          textContent: 'Inspiração (Bônus)'
        }));

        const inspList = R.el('div', { className: 'space-y-1' });
        for (let i = 0; i < hero.inspiration.length; i++) {
          const isActive = my && my.insp != null && i < my.insp;
          inspList.appendChild(R.el('div', { className: 'flex items-start gap-2 text-xs' }, [
            R.el('span', {
              className: `font-mono font-bold ${isActive ? 'text-gold' : 'text-gray-600'}`,
              textContent: `${i + 1}.`
            }),
            R.el('span', {
              className: isActive ? 'text-gray-300' : 'text-gray-600',
              textContent: hero.inspiration[i]
            })
          ]));
        }
        inspSection.appendChild(inspList);
        panel.appendChild(inspSection);
      }

      // ---- Owned-specific info ----
      if (my) {
        const ownedSection = R.el('div', { className: 'mb-5' });
        ownedSection.appendChild(R.el('h3', {
          className: 'text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide',
          textContent: 'Meu Progresso'
        }));

        const infoGrid = R.el('div', { className: 'space-y-3' });

        // Inspiration level
        if (my.insp != null) {
          infoGrid.appendChild(R.el('div', {}, [
            R.el('div', { className: 'flex justify-between text-xs mb-1' }, [
              R.el('span', { className: 'text-gray-400', textContent: 'Inspiração' }),
              R.el('span', { className: 'text-gold', textContent: `${my.insp}/5` })
            ]),
            R.progressBar(my.insp, 5, 'gold')
          ]));
        }

        // Skill level
        if (my.skill_level != null) {
          infoGrid.appendChild(R.el('div', {}, [
            R.el('div', { className: 'flex justify-between text-xs mb-1' }, [
              R.el('span', { className: 'text-gray-400', textContent: 'Nível de Skill' }),
              R.el('span', { className: 'text-ice', textContent: `${my.skill_level}/10` })
            ]),
            R.progressBar(my.skill_level, 10, 'ice')
          ]));
        }

        // Artifact (derived from D.artifactForHero)
        const myArtifact = D.artifactForHero(heroId);
        if (myArtifact) {
          infoGrid.appendChild(R.el('div', { className: 'flex justify-between text-xs' }, [
            R.el('span', { className: 'text-gray-400', textContent: 'Artefato' }),
            R.el('span', {
              className: `text-${R.rarityColor(myArtifact.rarity)}`,
              textContent: myArtifact.name
            })
          ]));
        }

        // Notes
        if (my.notes) {
          infoGrid.appendChild(R.el('div', { className: 'mt-2' }, [
            R.el('div', { className: 'text-xs text-gray-500 mb-1', textContent: 'Notas' }),
            R.el('div', {
              className: 'text-xs text-gray-300 bg-surface rounded p-2 leading-relaxed',
              textContent: my.notes
            })
          ]));
        }

        ownedSection.appendChild(infoGrid);
        panel.appendChild(ownedSection);
      } else {
        panel.appendChild(R.el('div', {
          className: 'bg-surface rounded p-3 text-center text-sm text-gray-500 italic',
          textContent: 'Herói não está no seu roster.'
        }));
      }

    });
  },

  // ---------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------
  _getTierData(heroName) {
    return D.tierByName(heroName);
  }
};
