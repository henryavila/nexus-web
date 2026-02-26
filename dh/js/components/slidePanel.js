// slidePanel.js — Reusable slide-over panel
const SlidePanel = {
  open(title, contentFn) {
    const panel = document.getElementById('slide-panel');
    const backdrop = document.getElementById('backdrop');

    panel.innerHTML = '';
    panel.appendChild(R.el('div', { className: 'p-4 md:p-6' }, [
      R.el('div', { className: 'flex items-center justify-between mb-4 md:mb-6' }, [
        R.el('h2', { className: 'text-lg md:text-xl font-bold text-gold', textContent: title }),
        R.el('button', {
          className: 'text-gray-400 hover:text-white text-2xl p-2 -mr-2',
          textContent: '\u00d7',
          onClick: () => this.close()
        })
      ]),
      R.el('div', { id: 'slide-panel-content' })
    ]));

    contentFn(panel.querySelector('#slide-panel-content'));

    panel.classList.add('slide-panel-open');
    backdrop.classList.remove('hidden');
    backdrop.onclick = () => this.close();
  },

  close() {
    const panel = document.getElementById('slide-panel');
    const backdrop = document.getElementById('backdrop');
    panel.classList.remove('slide-panel-open');
    backdrop.classList.add('hidden');
  }
};
