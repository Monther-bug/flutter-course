/* Home page: course map, one slide per lecture, grades, slide navigation. */
(() => {
  const { lectures, grades } = window.COURSE;
  const { esc, pad, reveal, reduce } = window.UI;

  document.querySelector('[data-count="8"]').dataset.count = lectures.length;
  document.querySelector('#s-map .title').textContent = `${lectures.length} lectures so far`;

  // course map
  document.getElementById('map').innerHTML = lectures.map((l, i) => `
    <a class="card tile lift r" style="--i:${3 + (i % 4)}" href="lecture.html?n=${i + 1}">
      <span class="n">${pad(i + 1)}</span>
      <h3>${esc(l.t)} ${esc(l.s)}</h3>
      <p>${esc(l.chips.slice(0, 3).join(' · '))}</p>
      <span class="go">Lecture details <svg><use href="#i-arrow"/></svg></span>
    </a>`).join('');

  // one presentation slide per lecture
  document.getElementById('lecture-slides').outerHTML = lectures.map((l, i) => `
    <section class="slide lec" id="s-lec-${i + 1}" data-name="Lecture ${i + 1}">
      <span class="bignum" aria-hidden="true">${pad(i + 1)}</span>
      <div class="wrap">
        <div>
          <p class="kicker r">Lecture ${pad(i + 1)}</p>
          <h2 class="title r" style="--i:1">${esc(l.t)}<br><span class="gt">${esc(l.s)}</span></h2>
          <p class="lead r" style="--i:2">${esc(l.summary)}</p>
          <div class="chips">${l.chips.map((c, k) => `<span class="chip r z" style="--i:${3 + k * 0.5}">${esc(c)}</span>`).join('')}</div>
          <div class="actions r" style="--i:6">
            <a class="btn btn-p" href="lecture.html?n=${i + 1}">Lecture details <svg><use href="#i-arrow"/></svg></a>
            <a class="btn btn-g" href="${l.url}" target="_blank" rel="noopener"><svg><use href="#i-slides"/></svg>Open the slides</a>
          </div>
        </div>
        <div class="card watch r rt" style="--i:3">
          <h4><svg><use href="#i-yt"/></svg>Watch after class</h4>
          ${l.videos.slice(0, 3).map(v => `
          <a class="vid" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener">
            <span class="thumb"><img src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" alt="" loading="lazy"><span class="play"><svg><use href="#i-play"/></svg></span><em>${v.len}</em></span>
            <span><b>${esc(v.title)}</b><small>${esc(v.channel)}</small></span>
          </a>`).join('')}
        </div>
      </div>
    </section>`).join('');

  // grades
  document.getElementById('bar').innerHTML = grades.map((g, i) => `<div style="--w:${g.marks}%;--i:${i};background:${g.color}" title="${g.name}: ${g.marks}">${g.marks}</div>`).join('');
  document.getElementById('legend').innerHTML = grades.map((g, i) => `<div class="card lg lift r" style="--i:${3 + i}"><i style="background:${g.color}"></i><span>${g.name}${g.what ? `<small>${g.what}</small>` : ''}</span><b data-count="${g.marks}">0</b></div>`).join('');

  // slide navigation
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const dots = document.getElementById('dots');
  dots.innerHTML = slides.map(s => `<a href="#${s.id}" aria-label="${s.dataset.name}"><span>${s.dataset.name}</span></a>`).join('');
  const dotLinks = [...dots.children];
  const counter = document.getElementById('counter');
  let current = 0;

  reveal(slides);
  const activeIO = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    current = slides.indexOf(e.target);
    counter.textContent = `${pad(current + 1)} / ${total}`;
    dotLinks.forEach((d, i) => d.classList.toggle('on', i === current));
  }), { rootMargin: '-45% 0px -45% 0px' });
  slides.forEach(s => activeIO.observe(s));

  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || /INPUT|TEXTAREA|SUMMARY/.test(e.target.tagName)) return;
    let n = null;
    if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key)) n = current + 1;
    if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) n = current - 1;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = total - 1;
    if (n === null) return;
    e.preventDefault();
    slides[Math.max(0, Math.min(total - 1, n))].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });

  // returning from a lecture page with #s-lec-N
  if (location.hash) {
    const t = document.querySelector(location.hash);
    if (t) setTimeout(() => t.scrollIntoView(), 50);
  }
})();
