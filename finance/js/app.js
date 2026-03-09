// My Finance Dashboard
(async function() {
    const resp = await fetch('data.json');
    const DATA = await resp.json();

    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    renderStatus(DATA);
    renderMes(DATA);
    renderComparativo(DATA);
    renderMetas(DATA);

    function fmt(v) {
        return Math.abs(v).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    function renderStatus(data) {
        const el = document.getElementById('status');
        const s = data.status;
        const meses = Object.keys(data.meses).sort();

        el.innerHTML = `
            <div class="grid">
                <div class="card">
                    <h3>Ultimo Processamento</h3>
                    <p class="stat-value">${s.ultimo_mes || 'Nenhum'}</p>
                    <p style="color:var(--text-muted);font-size:0.8rem">${s.ultimo_processamento ? new Date(s.ultimo_processamento).toLocaleDateString('pt-BR') : '-'}</p>
                </div>
                <div class="card">
                    <h3>Transacoes</h3>
                    <p class="stat-value">${s.total_transacoes}</p>
                    ${s.total_nao_identificadas > 0 ? `<p style="color:var(--red);font-size:0.8rem">${s.total_nao_identificadas} nao identificadas</p>` : ''}
                </div>
            </div>
            <div class="card">
                <h3>Meses Processados</h3>
                <div class="timeline">
                    ${_buildTimeline(meses)}
                </div>
            </div>
        `;
    }

    function _buildTimeline(mesesComDados) {
        if (!mesesComDados.length) return '<p style="color:var(--text-muted)">Nenhum dado</p>';
        const first = mesesComDados[0];
        const now = new Date();
        const nowKey = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
        let [y,m] = first.split('-').map(Number);
        let dots = [];
        while (`${y}-${String(m).padStart(2,'0')}` <= nowKey) {
            const key = `${y}-${String(m).padStart(2,'0')}`;
            const cls = mesesComDados.includes(key) ? 'has-data' : 'missing';
            dots.push(`<div class="timeline-dot ${cls}" title="${key}">${String(m).padStart(2,'0')}</div>`);
            m++; if (m>12){m=1;y++;}
        }
        return dots.join('');
    }

    function renderMes(data) {
        const el = document.getElementById('mes');
        const meses = Object.keys(data.meses).sort();
        if (!meses.length) { el.innerHTML = '<p>Sem dados</p>'; return; }
        const mesAtual = meses[meses.length - 1];
        const m = data.meses[mesAtual];
        const r = m.resumo;
        const budgets = data.budgets.overrides?.[mesAtual] || data.budgets.default || {};

        // 50/30/20
        let necessidades = 0, desejos = 0, investimentos = 0;
        (m.transacoes || []).forEach(t => {
            if (t.valor >= 0) return;
            const cat = t.categoria || '';
            if (cat.includes('(E)')) necessidades += Math.abs(t.valor);
            else if (cat.includes('(L)') || cat.includes('(D)')) desejos += Math.abs(t.valor);
            else if (cat.includes('($)')) investimentos += Math.abs(t.valor);
        });
        const totalGasto = necessidades + desejos + investimentos || 1;

        // Top gastos
        const topGastos = (m.transacoes || [])
            .filter(t => t.valor < 0)
            .sort((a,b) => a.valor - b.valor)
            .slice(0, 10);

        // Budget bars
        let budgetHtml = '';
        if (Object.keys(budgets).length) {
            const realizado = {};
            (m.transacoes || []).forEach(t => {
                if (t.valor < 0) realizado[t.categoria] = (realizado[t.categoria]||0) + t.valor;
            });
            budgetHtml = Object.entries(budgets).map(([cat, orc]) => {
                const real = Math.abs(realizado[cat] || 0);
                const pct = Math.min(real / orc * 100, 100);
                const cls = pct >= 100 ? 'over' : pct >= 80 ? 'warn' : 'ok';
                return `<div style="margin:0.5rem 0">
                    <div class="stat"><span>${cat.split('>').pop().trim()}</span><span>R$ ${fmt(real)} / ${fmt(orc)}</span></div>
                    <div class="bar-container"><div class="bar-fill ${cls}" style="width:${pct}%"></div></div>
                </div>`;
            }).join('');
        }

        el.innerHTML = `
            <div class="grid">
                <div class="card">
                    <h3>Saldo ${mesAtual}</h3>
                    <div class="stat"><span>Receitas</span><span class="stat-value positive">R$ ${fmt(r.total_receitas)}</span></div>
                    <div class="stat"><span>Despesas</span><span class="stat-value negative">R$ ${fmt(Math.abs(r.total_despesas))}</span></div>
                    <div class="stat" style="border-top:1px solid var(--border);padding-top:0.5rem;margin-top:0.5rem">
                        <span><b>Saldo</b></span>
                        <span class="stat-value ${r.total_receitas+r.total_despesas>=0?'positive':'negative'}">R$ ${fmt(r.total_receitas+r.total_despesas)}</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Diagnostico 50/30/20</h3>
                    <div class="stat"><span>Necessidades (E)</span><span class="stat-value">${(necessidades/totalGasto*100).toFixed(0)}% - R$ ${fmt(necessidades)}</span></div>
                    <div class="bar-container"><div class="bar-fill ${necessidades/totalGasto>0.5?'warn':'ok'}" style="width:${(necessidades/totalGasto*100).toFixed(0)}%"></div></div>
                    <div class="stat"><span>Desejos (L/D)</span><span class="stat-value">${(desejos/totalGasto*100).toFixed(0)}% - R$ ${fmt(desejos)}</span></div>
                    <div class="bar-container"><div class="bar-fill ${desejos/totalGasto>0.3?'warn':'ok'}" style="width:${(desejos/totalGasto*100).toFixed(0)}%"></div></div>
                    <div class="stat"><span>Investimentos ($)</span><span class="stat-value">${(investimentos/totalGasto*100).toFixed(0)}% - R$ ${fmt(investimentos)}</span></div>
                    <div class="bar-container"><div class="bar-fill ${investimentos/totalGasto<0.2?'warn':'ok'}" style="width:${Math.max(investimentos/totalGasto*100,2).toFixed(0)}%"></div></div>
                </div>
            </div>
            ${budgetHtml ? `<div class="card"><h3>Orcamento vs Realizado</h3>${budgetHtml}</div>` : ''}
            <div class="card">
                <h3>Top 10 Gastos</h3>
                <table>
                    <tr><th>Data</th><th>Descricao</th><th>Valor</th><th>Categoria</th></tr>
                    ${topGastos.map(t => `<tr>
                        <td>${t.data.split('-').reverse().join('/')}</td>
                        <td>${t.descricao}</td>
                        <td class="stat-value negative">R$ ${fmt(t.valor)}</td>
                        <td style="color:var(--text-muted);font-size:0.8rem">${(t.categoria||'').split('>').pop().trim()}</td>
                    </tr>`).join('')}
                </table>
            </div>
        `;
    }

    function renderComparativo(data) {
        const el = document.getElementById('comparativo');
        const meses = Object.keys(data.meses).sort();
        if (meses.length < 2) {
            el.innerHTML = '<div class="card"><p style="color:var(--text-muted)">Precisa de pelo menos 2 meses para comparar.</p></div>';
            return;
        }

        const mesAtual = meses[meses.length - 1];
        const mesAnterior = meses[meses.length - 2];
        const m1 = data.meses[mesAnterior];
        const m2 = data.meses[mesAtual];

        // Group by category
        const cats1 = {}, cats2 = {};
        (m1.transacoes||[]).forEach(t => { if(t.valor<0) cats1[t.categoria]=(cats1[t.categoria]||0)+t.valor; });
        (m2.transacoes||[]).forEach(t => { if(t.valor<0) cats2[t.categoria]=(cats2[t.categoria]||0)+t.valor; });

        const allCats = [...new Set([...Object.keys(cats1), ...Object.keys(cats2)])].sort();
        const rows = allCats.map(cat => {
            const v1 = Math.abs(cats1[cat]||0);
            const v2 = Math.abs(cats2[cat]||0);
            const delta = v2 - v1;
            const cls = delta > 0 ? 'negative' : delta < 0 ? 'positive' : '';
            const arrow = delta > 0 ? '&uarr;' : delta < 0 ? '&darr;' : '=';
            return `<tr>
                <td>${cat.split('>').pop().trim()}</td>
                <td>R$ ${fmt(v1)}</td>
                <td>R$ ${fmt(v2)}</td>
                <td class="stat-value ${cls}">${arrow} R$ ${fmt(Math.abs(delta))}</td>
            </tr>`;
        });

        el.innerHTML = `
            <div class="card">
                <h3>${mesAnterior} vs ${mesAtual}</h3>
                <table>
                    <tr><th>Categoria</th><th>${mesAnterior}</th><th>${mesAtual}</th><th>Delta</th></tr>
                    ${rows.join('')}
                </table>
            </div>
        `;
    }

    function renderMetas(data) {
        const el = document.getElementById('metas');
        const meses = Object.keys(data.meses).sort();

        // Categorias estouradas
        const mesAtual = meses.length ? meses[meses.length-1] : null;
        let alertasHtml = '<p style="color:var(--text-muted)">Configure budgets.yaml para ver alertas.</p>';

        if (mesAtual) {
            const budgets = data.budgets.overrides?.[mesAtual] || data.budgets.default || {};
            if (Object.keys(budgets).length) {
                const m = data.meses[mesAtual];
                const realizado = {};
                (m.transacoes||[]).forEach(t => {
                    if(t.valor<0) realizado[t.categoria]=(realizado[t.categoria]||0)+t.valor;
                });
                const alertas = Object.entries(budgets)
                    .map(([cat,orc]) => ({cat, orc, real: Math.abs(realizado[cat]||0)}))
                    .filter(a => a.real > a.orc);
                if (alertas.length) {
                    alertasHtml = alertas.map(a =>
                        `<div class="stat"><span style="color:var(--red)">${a.cat.split('>').pop().trim()}</span><span class="stat-value negative">R$ ${fmt(a.real)} / ${fmt(a.orc)}</span></div>`
                    ).join('');
                } else {
                    alertasHtml = '<p style="color:var(--green)">Nenhuma categoria estourada.</p>';
                }
            }
        }

        el.innerHTML = `
            <div class="grid">
                <div class="card">
                    <h3>Fundo de Emergencia</h3>
                    <p style="color:var(--text-muted);font-size:0.85rem">Configure via Claude Code: analyzer.progresso_fundo_emergencia()</p>
                </div>
                <div class="card">
                    <h3>Alertas - Orcamento Estourado</h3>
                    ${alertasHtml}
                </div>
            </div>
        `;
    }
})();
