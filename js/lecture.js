/* Lecture detail page: lecture.html?n=1 … n=8, built from js/data.js */
(() => {
  const { lectures } = window.COURSE;
  const { esc, pad, reveal, highlight } = window.UI;

  const n = Math.min(lectures.length, Math.max(1, parseInt(new URLSearchParams(location.search).get('n'), 10) || 1));
  const L = lectures[n - 1];
  const prev = lectures[n - 2];
  const next = lectures[n];

  document.title = `Lecture ${pad(n)} · ${L.t} ${L.s} · Flutter Course`;
  document.getElementById('counter').textContent = `Lecture ${pad(n)} / ${pad(lectures.length)}`;

  const minutes = L.videos.reduce((sum, v) => {
    const [m, s] = v.len.split(':').map(Number);
    return sum + m + s / 60;
  }, 0);

  /* ---------- hero ---------- */
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <span class="bignum" aria-hidden="true">${pad(n)}</span>
    <div class="wrap">
      <nav class="crumbs r"><a href="index.html">Home</a>›<a href="index.html#s-map">Lectures</a>›<span>Lecture ${pad(n)}</span></nav>
      <p class="kicker r">Lecture ${pad(n)}</p>
      <h1 class="r" style="--i:1">${esc(L.t)} <span class="gt">${esc(L.s)}</span></h1>
      <p class="lead r" style="--i:2">${esc(L.about)}</p>
      <div class="lp-meta r" style="--i:3">
        <span class="meta-pill"><svg><use href="#i-slides"/></svg>${L.slides} slides</span>
        <span class="meta-pill"><svg><use href="#i-video"/></svg>${L.videos.length} videos · ${Math.round(minutes)} min</span>
        <span class="meta-pill"><svg><use href="#i-code"/></svg>${L.code.length} code example${L.code.length > 1 ? 's' : ''}</span>
      </div>
      <div class="chips r" style="--i:4;margin-top:16px">${L.chips.map(c => `<span class="chip">${esc(c)}</span>`).join('')}</div>
      <div class="lp-actions r" style="--i:5">
        <a class="btn btn-p" href="${L.url}" target="_blank" rel="noopener"><svg><use href="#i-slides"/></svg>Open the slides</a>
        <a class="btn btn-g" href="#videos"><svg style="color:#FF0000"><use href="#i-yt"/></svg>Watch the videos</a>
        <a class="btn btn-g" href="index.html#s-lec-${n}"><svg><use href="#i-back"/></svg>Back to the course</a>
      </div>
      <div class="person r" style="--i:6">
        <span class="avatar">MI</span>
        <div><b>Monther Ibrahim</b><span>Instructor</span></div>
      </div>
    </div>`;

  /* ---------- blocks ---------- */
  const block = (id, icon, title, inner, extra = '') => `
    <section class="card blk ${extra}" id="${id}" data-title="${title}">
      <h2 class="r"><span class="ic"><svg><use href="#${icon}"/></svg></span>${title}</h2>
      ${inner}
    </section>`;

  const goals = `<ul class="goals">${L.goals.map((g, i) => `<li class="r" style="--i:${1 + i * .5}">${esc(g)}</li>`).join('')}</ul>`;

  const sections = `<div class="timeline">${L.sections.map((s, i) => `
    <div class="tl r" style="--i:${1 + i * .4}" data-n="${i + 1}"><b>${esc(s.h)}</b><span>${esc(s.p)}</span></div>`).join('')}</div>`;

  const code = L.code.map((c, ci) => `
    <div class="codeblk">
      <h3 class="r">${esc(c.title)}</h3>
      <div class="codeview">
        <div class="editor r l" style="--i:1">
          <div class="editor-bar"><i></i><i></i><i></i><span>${esc(c.file)}</span><button type="button" data-copy="${ci}">Copy</button></div>
          <pre id="code-${ci}">${highlight(c.src, c.lang)}</pre>
        </div>
        <div class="notes">${c.notes.map(([lines, text], k) => `
          <div class="note r rt" style="--i:${2 + k * .5}" data-code="${ci}" data-lines="${lines}">
            <span class="lines">${lines.includes('–') ? 'Lines' : 'Line'} ${lines}</span><p>${text}</p>
          </div>`).join('')}</div>
      </div>
    </div>`).join('');

  const videos = `<div class="vgrid">${L.videos.map((v, i) => `
    <a class="vcard r z" style="--i:${1 + i * .6}" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">
      <span class="thumb"><img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy"><span class="play"><svg><use href="#i-play"/></svg></span><em>${v.len}</em></span>
      <span class="vb"><b>${esc(v.title)}</b><small>${esc(v.channel)} · ${v.len}</small><p>${esc(v.about)}</p></span>
    </a>`).join('')}</div>`;

  const practice = `<ol class="practice">${L.practice.map((p, i) => `<li class="r" style="--i:${1 + i * .5}">${esc(p)}</li>`).join('')}</ol>`;

  const mistakes = `<div class="mtable">${L.mistakes.map(([err, fix], i) => `
    <div class="mrow r" style="--i:${1 + i * .5}"><span class="err">${esc(err)}</span><span class="fix">${esc(fix)}</span></div>`).join('')}</div>`;

  const cta = `
    <section class="card blk slides-cta" id="slides" data-title="Slides">
      <div class="r"><h2>Open the full lecture</h2><p>${L.slides} slides · arrows to move, F for fullscreen, N for notes</p></div>
      <a class="btn btn-p r" style="--i:1" href="${L.url}" target="_blank" rel="noopener"><svg><use href="#i-slides"/></svg>Open the slides</a>
    </section>`;

  const pager = `
    <div class="pager">
      ${prev ? `<a class="card lift prev" href="lecture.html?n=${n - 1}"><small>← Previous</small><b>${pad(n - 1)} · ${esc(prev.t)} ${esc(prev.s)}</b></a>` : '<span class="empty"></span>'}
      ${next ? `<a class="card lift next" href="lecture.html?n=${n + 1}"><small>Next →</small><b>${pad(n + 1)} · ${esc(next.t)} ${esc(next.s)}</b></a>` : '<span class="empty"></span>'}
    </div>`;

  const content = document.getElementById('content');
  content.innerHTML =
    block('overview', 'i-target', "What you'll learn", goals) +
    block('sections', 'i-list', 'Lecture sections', sections) +
    block('code', 'i-code', 'Code explained', code) +
    block('videos', 'i-video', 'Watch after class', videos) +
    block('practice', 'i-pencil', 'Practice', practice) +
    block('mistakes', 'i-alert', 'Common mistakes', mistakes) +
    cta + pager;

  /* ---------- table of contents with scroll spy ---------- */
  const blocks = [...content.querySelectorAll('.blk')];
  const toc = document.getElementById('toc');
  toc.innerHTML = '<p>On this page</p>' + blocks.map(b => `<a href="#${b.id}"><i></i>${b.dataset.title}</a>`).join('');
  const links = [...toc.querySelectorAll('a')];
  const spy = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === `#${e.target.id}`));
  }), { rootMargin: '-35% 0px -55% 0px' });
  blocks.forEach(b => spy.observe(b));

  reveal([hero, ...blocks, content.querySelector('.pager')]);

  /* ---------- code notes highlight their lines ---------- */
  const lineSet = spec => {
    const [a, b] = spec.split('–').map(Number);
    const set = [];
    for (let i = a; i <= (b || a); i++) set.push(i);
    return set;
  };
  content.querySelectorAll('.note').forEach(note => {
    const pre = document.getElementById(`code-${note.dataset.code}`);
    const lines = lineSet(note.dataset.lines);
    const on = state => {
      note.classList.toggle('on', state);
      lines.forEach(l => pre.querySelector(`[data-l="${l}"]`)?.classList.toggle('hl', state));
    };
    note.addEventListener('mouseenter', () => on(true));
    note.addEventListener('mouseleave', () => on(false));
    note.addEventListener('click', () => on(!note.classList.contains('on')));
  });

  /* ---------- copy buttons ---------- */
  content.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
    const src = L.code[+btn.dataset.copy].src;
    try { await navigator.clipboard.writeText(src); btn.textContent = 'Copied!'; }
    catch (e) { btn.textContent = 'Select & copy'; }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
  }));
})();
