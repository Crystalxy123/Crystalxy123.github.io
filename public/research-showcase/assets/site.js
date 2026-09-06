(() => {
  'use strict';
  const dataNode = document.getElementById('chart-data');
  const chartData = dataNode ? JSON.parse(dataNode.textContent) : null;
  const format = n => n.toFixed(5) === n.toFixed(4) + '0' ? n.toFixed(4) : n.toFixed(5);
  function updateBars(element, values, maximum) {
    Array.from(element.children).forEach((row, index) => {
      row.querySelector('.track span').style.width = `${values[index] / maximum * 100}%`;
      row.querySelector('b').textContent = format(values[index]);
    });
  }
  if (document.querySelector('[data-chart="wella"]')) {
    const scenario = document.getElementById('scenario');
    const metric = document.getElementById('metric');
    const models = ['GPT-4', 'GPT-4o', 'Claude-3.5-Sonnet', 'WELLA'];
    const update = () => {
      const rows = chartData.wella[scenario.value];
      const values = rows.map(row => row[Number(metric.value)]);
      const maximum = Math.ceil(Math.max(...values) / 10) * 10;
      updateBars(document.getElementById('wella-bars'), values, maximum);
      document.querySelector('[data-chart-subtitle]').textContent = `${scenario.value} / ${metric.value === '1' ? 'RMSE' : 'MAE'}`;
      const ticks = document.getElementById('wella-axis').children;
      [0, maximum / 2, maximum].forEach((value, index) => ticks[index].textContent = String(value));
      const tbody = document.querySelector('#wella-table tbody');
      tbody.replaceChildren(...rows.map((row, index) => {
        const tr = document.createElement('tr');
        if (index === 3) tr.className = 'highlight';
        [models[index], ...row.map(format)].forEach(value => {
          const td = document.createElement('td'); td.textContent = value; tr.append(td);
        });
        return tr;
      }));
    };
    scenario.addEventListener('change', update);
    metric.addEventListener('change', update);
    update();
  }
  if (document.querySelector('[data-chart="nullm"]')) {
    document.getElementById('shot').addEventListener('change', event => {
      updateBars(document.getElementById('nullm-bars'), chartData.nullm[event.target.value], 1);
    });
  }
  const dialog = document.querySelector('.image-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    let previousFocus = null;
    document.querySelectorAll('[data-zoom]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      previousFocus = document.activeElement;
      const image = dialog.querySelector('img');
      image.src = link.href;
      image.alt = link.dataset.caption || link.querySelector('img')?.alt || '研究图表';
      dialog.querySelector('[data-dialog-title]').textContent = image.alt;
      dialog.showModal();
    }));
    dialog.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { if (previousFocus) previousFocus.focus({ preventScroll: true }); });
  }
  const articleNav = document.querySelector('.article-nav');
  if (articleNav && 'IntersectionObserver' in window) {
    const links = Array.from(articleNav.querySelectorAll('a'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) links.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-18% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('.article-section').forEach(section => observer.observe(section));
  }
})();
