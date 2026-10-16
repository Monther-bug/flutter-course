/* Shared UI for every page: icon sprite, progress bar, reveal animations,
   count-up numbers and a small Dart / YAML / shell highlighter. */
window.UI = (() => {
  const sprite = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="logo" viewBox="0 0 166 210"><path fill="#44D1FD" d="M10 101 100 11h56L38 129z"/><path fill="#1FBCFD" d="M51 150 100 102h56l-77 76z"/><path fill="#08589C" d="M79 178 107 150l49 49h-56z"/></symbol>
  <symbol id="i-gh" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.6 4.8 18.6 5 18.6 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></symbol>
  <symbol id="i-yt" viewBox="0 0 24 24"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v16l13-8z"/></symbol>
  <symbol id="i-slides" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></g></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6"/></symbol>
  <symbol id="i-back" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m6 6-6-6 6-6"/></symbol>
  <symbol id="i-lock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></g></symbol>
  <symbol id="i-target" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></g></symbol>
  <symbol id="i-list" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/></symbol>
  <symbol id="i-code" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></symbol>
  <symbol id="i-video" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3"/></g></symbol>
  <symbol id="i-pencil" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m21.7 18-8-14a2 2 0 0 0-3.5 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3zM12 9v4M12 17h.01"/></symbol>
  <symbol id="i-info" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></g></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="m12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5"/></symbol>
</svg>`;
  document.body.insertAdjacentHTML('afterbegin', sprite);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const pad = n => String(n).padStart(2, '0');

  // top progress bar
  const bar = document.getElementById('progress');
  if (bar) {
    const upd = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    };
    addEventListener('scroll', upd, { passive: true });
    upd();
  }

  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = 1;
    const end = +el.dataset.count;
    if (reduce) { el.textContent = end; return; }
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / 1100);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Elements with .reveal-root get .in when they scroll into view
  function reveal(roots) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-count]').forEach(el => setTimeout(() => countUp(el), 300));
      io.unobserve(e.target);
    }), { threshold: 0.12 });
    roots.forEach(r => io.observe(r));
  }

  /* ---------- highlighter ---------- */
  const KW = new Set(['import', 'void', 'class', 'extends', 'return', 'const', 'final', 'var', 'super', 'new', 'if', 'else', 'for', 'while', 'true', 'false', 'null', 'this', 'static', 'late', 'required', 'async', 'await']);
  function dart(line) {
    const re = /(\/\/.*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(@\w+)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)/g;
    let out = '', last = 0, m;
    while ((m = re.exec(line))) {
      out += esc(line.slice(last, m.index));
      const t = m[0];
      let c;
      if (m[1]) c = 'tk-com'; else if (m[2]) c = 'tk-str'; else if (m[3]) c = 'tk-ann'; else if (m[4]) c = 'tk-num';
      else {
        const rest = line.slice(m.index + t.length), prev = line.slice(0, m.index);
        if (KW.has(t)) c = 'tk-kw';
        else if (/^[A-Z]/.test(t)) c = 'tk-type';
        else if (/^\s*\(/.test(rest)) c = 'tk-fn';
        else if (/^\s*:(?!:)/.test(rest) || /\.\s*$/.test(prev)) c = 'tk-prop';
        else c = 'tk-prop';
      }
      out += `<span class="${c}">${esc(t)}</span>`;
      last = m.index + t.length;
    }
    return out + esc(line.slice(last));
  }
  function yaml(line) {
    const k = line.match(/^(\s*)(-?\s*)([\w./-]+)(:?)(.*)$/);
    if (!k) return esc(line);
    const [, ind, dash, key, colon, rest] = k;
    if (!colon) return `${esc(ind + dash)}<span class="tk-val">${esc(key + rest)}</span>`;
    const val = /^\s*[\^\d]/.test(rest) ? `<span class="tk-num">${esc(rest)}</span>` : rest.trim() ? `<span class="tk-val">${esc(rest)}</span>` : '';
    return `${esc(ind + dash)}<span class="tk-key">${esc(key)}</span>:${val}`;
  }
  function shell(line) {
    const [cmd, ...rest] = line.split(' ');
    return `<span class="tk-cmd">${esc(cmd)}</span> ${esc(rest.join(' '))}`;
  }
  function highlight(src, lang) {
    const fn = lang === 'yaml' ? yaml : lang === 'shell' ? shell : dart;
    return src.split('\n').map((l, i) => `<span class="ln" data-l="${i + 1}">${fn(l) || ' '}</span>`).join('');
  }

  return { esc, pad, reveal, countUp, highlight, reduce };
})();
