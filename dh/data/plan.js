// plan.js — Imperial Shadow Recast Event Plan
// Updated: 2026-03-09

window.DATA_PLAN = {
  player: "Henry (SuperYennefer, Server 139-Darkfire)",
  updated: "09/Mar/2026",
  priority: "Imperial Shadow Recast — Semana 2 ativa (4 bosses)",

  phases: [
    // ============================================================
    // FASE 1 — FOCO DA SEMANA ATUAL
    // ============================================================
    {
      id: 1,
      name: "FOCO AGORA — Semana 2 (4 tickets)",
      groups: [
        {
          name: "Status atual",
          items: [
            { text: "Semana 1 concluida: 2/2 tickets salvos (Thelandor + Vasska)", done: true },
            { text: "Semana 2 aberta: 4/4 tickets para jogar agora", done: false }
          ]
        },
        {
          name: "Checklist de execucao (ordem recomendada)",
          description: "Usar retry gratis ate vir score bom. So salvar score quando estiver satisfeito.",
          items: [
            { text: "1) THELANDOR — fechar ticket com time Necro/Summon", done: false },
            { text: "2) VASSKA — fechar ticket com time Ice/Frost (setup do 35M)", done: false },
            { text: "3) VINYARA (boss) — fechar ticket com time Fire/Wild + Brody", done: false },
            { text: "4) TAMAR (boss) — fechar ticket com time Poison", done: false }
          ]
        },
        {
          name: "Regras criticas da semana",
          items: [
            { text: "Heroi usado e travado ate reset semanal", done: false },
            { text: "Semana 2 = 20 herois unicos (4 times x 5)", done: false },
            { text: "Time forte no boss facil para maximizar leaderboard", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 2 — MAPA LIMPO DE TIMES (SEMANA 2)
    // ============================================================
    {
      id: 2,
      name: "Mapa de Times por Boss — Semana 2",
      groups: [
        {
          name: "THELANDOR — Necro/Summon",
          note: "FORTE",
          description: "Boss favorece summon com ATK alto. Objetivo: uptime maximo de Shadow Demon + clone.",
          items: [
            { text: "Time: Ladehlia + Sintrellia + Ghul'ende + Zhar'loth + Torrin", done: false },
            { text: "Posicionamento: Ghul'ende + Zhar'loth na frente curta; Ladehlia + Sintrellia no fundo mesmo lado; Torrin no fundo centro", done: false },
            { text: "Chave: proteger Ladehlia viva o combate inteiro", done: false },
            { text: "Artefato/comida: Witches Remains no Zhar'loth + buff Necrosis/ATK", done: false }
          ]
        },
        {
          name: "VASSKA — Ice/Frost (setup benchmark)",
          note: "FORTE",
          description: "Boss de adds. Setup de posicionamento no canto ja rendeu 35M.",
          items: [
            { text: "Time: Lossenia + Auster + Hochadir + Vinyara + Felosia", done: false },
            { text: "Posicionamento: bloco de 4 no canto do fundo (Felosia+Vinyara na frente; Auster+Lossenia atras); Hochadir 1 passo a frente", done: false },
            { text: "Chave: manter Auster/Lossenia protegidos atras das supports", done: false },
            { text: "Comida: Arctic Soothing Soup (Cold +5%, ATK +10%)", done: false }
          ]
        },
        {
          name: "VINYARA (boss) — Fire/Wild + Brody",
          note: "MEDIO",
          description: "Boss com shield forte. Brody e obrigatorio para quebrar shield no timing.",
          items: [
            { text: "Time: Flora + Brody + Errich + Caspar + Felicity", done: false },
            { text: "Posicionamento: Brody sozinho na frente (mais avancado); Flora centro-fundo; Errich meio-fundo; Caspar/Felicity nos cantos do fundo", done: false },
            { text: "Chave: sincronizar skill/ult do Brody com janela de shield do boss", done: false },
            { text: "Comida: Flaming Chili Meatball (Fire +5%, ATK +10%)", done: false }
          ]
        },
        {
          name: "TAMAR (boss) — Poison",
          note: "MEDIO-FORTE",
          description: "Boss recompensa debuffs. Accuracy e uptime de Poison decidem score.",
          items: [
            { text: "Time: Durango + Lothair + Vicana + Jathalea + Ergander", done: false },
            { text: "Posicionamento: Ergander centro frente; Durango esquerda frente; Lothair direita frente recuado; Vicana/Jathalea nos cantos do fundo", done: false },
            { text: "Chave: manter pressao de Poison constante (meta ACC 290+ no nucleo)", done: false },
            { text: "Comida: Corrupted Meat Pie (Poison +5%, ATK +10%)", done: false }
          ]
        }
      ]
    },

    // ============================================================
    // FASE 3 — ROTINA DIARIA (30-40 MIN)
    // ============================================================
    {
      id: 3,
      name: "Rotina diaria do evento (30-40 min)",
      items: [
        {
          text: "SHADOW DUNGEON (5-8 min)",
          done: false,
          subitems: [
            { text: "Usar os 10 Double Concentrates do dia (nao acumula)", done: false },
            { text: "Prioridade: Gear > Talentos > Recursos", done: false }
          ]
        },
        {
          text: "CONTINENTAL BOSS (10-12 min)",
          done: false,
          subitems: [
            { text: "Rodar o boss do ticket da vez com o time da Fase 2", done: false },
            { text: "Retry gratis ate score bom e depois salvar", done: false }
          ]
        },
        {
          text: "FARM COMPLEMENTAR (15-20 min)",
          done: false,
          subitems: [
            { text: "Se Double ativo: focar dungeons com drop duplo", done: false },
            { text: "Se Double acabou: Goblin/Talento/gear alvo", done: false }
          ]
        },
        {
          text: "Domingo: fechar Shadow Challenges e coletar amethysts", done: false
        }
      ]
    },

    // ============================================================
    // FASE 4 — AJUSTES DE BUILD (ALTO IMPACTO)
    // ============================================================
    {
      id: 4,
      name: "Ajustes rapidos de build (alto impacto)",
      items: [
        { text: "Brody: priorizar HP + Resistance (se ele cai, run de Vinyara cai junto)", done: false },
        { text: "Nucleo Poison (Durango/Lothair/Vicana/Jathalea): subir Accuracy para 290+", done: false },
        { text: "Zhar'loth: garantir Witches Remains para Def Down no Thelandor", done: false },
        { text: "Separar foods da semana antes dos tickets (Ice/Fire/Poison/Necrosis)", done: false },
        { text: "Revisar artefatos dos 20 herois para evitar slot vazio ou artefato errado", done: false }
      ]
    },

    // ============================================================
    // FASE 5 — PREVIEW SEMANA 3
    // ============================================================
    {
      id: 5,
      name: "Semana 3 (preview apos fechar 4/4)",
      items: [
        { text: "Adicionar Khrysos + Twitch (total 6 tickets)", done: false },
        { text: "Khrysos: base Dauntless (Nastjenka + Sutha + Garett + Divine Ascetic + Tamar)", done: false },
        { text: "Twitch: time Radiance sem debuff-heavy e aceitar score menor", done: false },
        { text: "Priorizar retries em Thelandor/Vasska para leaderboard", done: false }
      ]
    },

    // ============================================================
    // FASE 6 — META FINAL
    // ============================================================
    {
      id: 6,
      name: "Meta: 450 Amethysts -> Utior",
      items: [
        {
          text: "Checkpoint de progresso de Amethysts",
          done: false,
          subitems: [
            { text: "Semana 1: ~105 acumulados", done: true },
            { text: "Semana 2: ~230 acumulados (meta)", done: false },
            { text: "Semana 3: ~375 acumulados (meta)", done: false },
            { text: "Semana 4: ~500 acumulados (Utior garantido)", done: false }
          ]
        },
        { text: "Comprar Utior ao bater 450 Amethysts", done: false },
        { text: "Se sobrar Amethysts, avaliar cosmeticos", done: false }
      ]
    }
  ]
};
