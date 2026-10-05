/*
 * LOGIKA APLIKACJI
 * Treść planu jest w plan.js — tutaj nie trzeba nic zmieniać, żeby edytować ćwiczenia.
 * Wszystkie dane (zaznaczenia, ciężary, imię) są zapisywane tylko w przeglądarce
 * na tym urządzeniu (localStorage). Nic nie jest wysyłane na żaden serwer.
 */
(function () {
  'use strict';

  const P = window.PLAN;
  const APP_ID = 'plan-treningowy';
  const KEY = 'plan-treningowy:v1';
  const HIST_LIMIT = 300;

  /* ---------- pamięć ---------- */
  let ST = blank();
  function blank() { return { done: {}, log: {}, hist: {}, name: '', lastExport: null, hideInstall: false }; }
  function normalize(o) {
    const s = Object.assign(blank(), o || {});
    ['done', 'log', 'hist'].forEach(k => { if (!s[k] || typeof s[k] !== 'object') s[k] = {}; });
    if (typeof s.name !== 'string') s.name = '';
    return s;
  }
  try { const raw = localStorage.getItem(KEY); if (raw) ST = normalize(JSON.parse(raw)); } catch (e) { /* tryb prywatny itp. */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(ST)); return true; }
    catch (e) { toast('Nie udało się zapisać — pamięć przeglądarki jest niedostępna.'); return false; }
  }

  // Prośba o trwałe przechowywanie danych (Android/Chrome; na iOS bez efektu).
  let persistAsked = false;
  function askPersist() {
    if (persistAsked) return; persistAsked = true;
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  }

  /* ---------- pomocnicze ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function mmss(s) { const m = Math.floor(s / 60), x = s % 60; return m + ':' + String(x).padStart(2, '0'); }
  function vurl(slug) { return P.videoBase + encodeURIComponent(slug) + (P.videoQuery || ''); }
  function today() { return new Date().toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit' }); }
  const PLAY = '<svg viewBox="0 0 10 10" aria-hidden="true"><polygon points="1,0 10,5 1,10"/></svg>';

  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  const isStandalone = () =>
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  /* ---------- nagłówek i zakładki ---------- */
  const tabsEl = $('#tabs');
  const viewEl = $('#view');
  const TABS = [
    ...P.sessions.map(s => ({ id: s.code, label: 'Trening ' + s.code })),
    { id: 'zasady', label: 'Zasady' },
    { id: 'dane', label: 'Dane' }
  ];
  let active = P.sessions[0].code;

  function renderHeader() {
    $('#kicker').textContent = P.title;
    $('#title').textContent = ST.name ? ST.name : 'Twój plan';
    $('#lede').textContent = P.subtitle;
  }

  TABS.forEach(t => {
    const b = document.createElement('button');
    b.className = 'tab'; b.textContent = t.label; b.setAttribute('role', 'tab'); b.dataset.id = t.id;
    b.onclick = () => { active = t.id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    tabsEl.appendChild(b);
  });

  /* ---------- baner instalacji ---------- */
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; renderBanner(); if (active === 'dane') render(); });
  window.addEventListener('appinstalled', () => { deferredPrompt = null; renderBanner(); toast('Aplikacja zainstalowana.'); });

  function renderBanner() {
    const el = $('#banner');
    if (isStandalone() || ST.hideInstall) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = `
      <div class="banner-txt"><b>Dodaj plan do ekranu głównego</b>
        <span>Otwiera się wtedy jak aplikacja, działa bez internetu, a zapisane ciężary są bezpieczniejsze.</span></div>
      <div class="banner-act">
        ${deferredPrompt ? '<button class="btn small" id="bInstall">Zainstaluj</button>' : '<button class="btn small ghostbtn" id="bHow">Jak?</button>'}
        <button class="x" id="bClose" aria-label="Zamknij">×</button>
      </div>`;
    const bi = $('#bInstall', el); if (bi) bi.onclick = install;
    const bh = $('#bHow', el); if (bh) bh.onclick = () => { active = 'dane'; render(); setTimeout(() => { const s = $('#install'); if (s) s.scrollIntoView({ behavior: 'smooth' }); }, 50); };
    $('#bClose', el).onclick = () => { ST.hideInstall = true; save(); renderBanner(); };
  }

  async function install() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    try { await deferredPrompt.userChoice; } catch (e) {}
    deferredPrompt = null; renderBanner(); if (active === 'dane') render();
  }

  /* ---------- widoki ---------- */
  function render() {
    [...tabsEl.children].forEach(b => b.setAttribute('aria-selected', b.dataset.id === active ? 'true' : 'false'));
    viewEl.innerHTML = '';
    if (active === 'zasady') return renderRules();
    if (active === 'dane') return renderData();
    const s = P.sessions.find(x => x.code === active);

    const head = document.createElement('div');
    head.className = 'sesh-head';
    head.innerHTML = `<h2>Trening ${esc(s.code)} — ${esc(s.name)}</h2><p>${esc(s.focus)}</p>`;
    viewEl.appendChild(head);

    const brow = document.createElement('div');
    brow.className = 'bar-row';
    brow.innerHTML = `<div class="bar"><i id="fill"></i></div><span class="bar-txt" id="bartxt"></span>
      <button class="ghost" id="reset">Nowy trening</button>`;
    viewEl.appendChild(brow);
    $('#reset', brow).onclick = () => { s.ex.forEach(e => delete ST.done[e.id]); save(); render(); };

    s.ex.forEach(e => viewEl.appendChild(card(e)));
    updateBar(s);
  }

  function updateBar(s) {
    const n = s.ex.filter(e => ST.done[e.id]).length;
    const f = $('#fill'), t = $('#bartxt');
    if (f) f.style.width = (n / s.ex.length * 100) + '%';
    if (t) t.textContent = n + ' / ' + s.ex.length;
  }

  function lastLine(id) {
    const h = ST.hist[id] || [];
    const last = ST.log[id] || h[h.length - 1];
    if (!last) return 'Brak zapisu — pierwsza sesja tego ćwiczenia.';
    let out = `Ostatnio: <b>${esc(last.kg)} kg × ${esc(last.reps)}</b> · ${esc(last.date)}`;
    const prev = h.length >= 2 ? h[h.length - 2] : null;
    if (prev) out += `<br><span class="prev">Wcześniej: ${esc(prev.kg)} kg × ${esc(prev.reps)} · ${esc(prev.date)}</span>`;
    return out;
  }

  function vidBtn(slug, title, sub, alt) {
    return `<a class="vidbtn${alt ? ' alt' : ''}" href="${vurl(slug)}" target="_blank" rel="noopener">
      <span class="play">${PLAY}</span><span><b>${esc(title)}</b><span class="sub">${esc(sub)}</span></span></a>`;
  }

  function card(e) {
    const el = document.createElement('article');
    el.className = 'card' + (ST.done[e.id] ? ' done' : '');
    const last = ST.log[e.id];
    el.innerHTML = `
      <div class="head">
        <button class="tick" aria-label="Oznacz jako zrobione"><svg viewBox="0 0 24 24"><polyline points="4 12 10 18 20 6"/></svg></button>
        <div class="titles">
          <div class="tag">${esc(e.tag)}</div>
          <div class="nm">${esc(e.name)}</div>
          <div class="meta">
            <span class="pill strong">${esc(e.sets)}</span>
            <span class="pill">przerwa ${mmss(e.rest)}</span>
            ${e.badge ? `<span class="pill note">${esc(e.badge)}</span>` : ''}
            ${e.video ? `<a class="vidpill" href="${vurl(e.video)}" target="_blank" rel="noopener">${PLAY} Wideo</a>` : ''}
          </div>
        </div>
        <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="body">
        ${e.swap ? `<div class="sec"><div class="swap">${e.swap}</div>${e.swapVideo ? `<div style="margin-top:8px">${vidBtn(e.swapVideo, 'Wideo: mostek biodrowy z hantlem', 'Wersja na pierwsze 4 tygodnie', true)}</div>` : ''}</div>` : ''}
        ${e.video ? `<div class="sec">${vidBtn(e.video, 'Zobacz technikę na wideo', 'Krótkie nagranie z boku i z przodu' + (e.videoNote ? ' · ' + e.videoNote : ''))}</div>` : ''}
        <div class="sec"><div class="lab">Ustawienie</div><div class="setup">${esc(e.setup)}</div></div>
        <div class="sec"><div class="lab">Jak wykonać</div><ol class="steps">${e.steps.map(x => '<li>' + esc(x) + '</li>').join('')}</ol></div>
        <div class="sec"><div class="lab bad">Czego unikać</div><ul class="bad">${e.avoid.map(x => '<li>' + esc(x) + '</li>').join('')}</ul></div>
        <div class="log">
          <div class="log-row">
            <input type="number" inputmode="decimal" placeholder="kg" step="0.5" min="0" aria-label="Ciężar w kg" value="${last ? esc(last.kg) : ''}">
            <input type="number" inputmode="numeric" placeholder="powt." min="0" aria-label="Powtórzenia" value="${last ? esc(last.reps) : ''}">
            <button class="save">Zapisz</button>
            <button class="timer">Przerwa ${mmss(e.rest)}</button>
          </div>
          <div class="last">${lastLine(e.id)}</div>
        </div>
      </div>`;

    const toggle = () => el.classList.toggle('open');
    $('.titles', el).onclick = ev => { if (ev.target.closest('a')) return; toggle(); };
    $('.chev', el).onclick = toggle;

    $('.tick', el).onclick = () => {
      ST.done[e.id] = !ST.done[e.id]; save();
      el.classList.toggle('done', !!ST.done[e.id]);
      updateBar(P.sessions.find(s => s.code === active));
    };

    const [kgI, repI] = el.querySelectorAll('.log input');
    $('.save', el).onclick = () => {
      const kg = kgI.value.trim(), reps = repI.value.trim();
      if (!kg && !reps) { toast('Wpisz ciężar albo liczbę powtórzeń.'); return; }
      const entry = { kg: kg || '—', reps: reps || '—', date: today(), ts: Date.now() };
      ST.log[e.id] = entry;
      (ST.hist[e.id] = ST.hist[e.id] || []).push(entry);
      if (ST.hist[e.id].length > HIST_LIMIT) ST.hist[e.id] = ST.hist[e.id].slice(-HIST_LIMIT);
      if (save()) { $('.last', el).innerHTML = lastLine(e.id); toast('Zapisano.'); askPersist(); }
    };

    const tb = $('.timer', el);
    let iv = null;
    tb.onclick = () => {
      if (iv) { clearInterval(iv); iv = null; tb.classList.remove('run'); tb.textContent = 'Przerwa ' + mmss(e.rest); return; }
      let left = e.rest; tb.classList.add('run'); tb.textContent = mmss(left);
      iv = setInterval(() => {
        left--; tb.textContent = mmss(Math.max(0, left));
        if (left <= 0) {
          clearInterval(iv); iv = null; tb.classList.remove('run'); tb.textContent = 'Koniec przerwy';
          if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
          setTimeout(() => { tb.textContent = 'Przerwa ' + mmss(e.rest); }, 4000);
        }
      }, 1000);
    };
    return el;
  }

  function renderRules() {
    viewEl.innerHTML = `<div class="sesh-head"><h2>Zasady i progresja</h2><p>Przeczytaj raz, potem wracaj tylko do progresji</p></div>${P.rules}`;
  }

  /* ---------- zakładka Dane ---------- */
  function countEntries() { return Object.values(ST.hist).reduce((a, h) => a + (Array.isArray(h) ? h.length : 0), 0); }

  function renderData() {
    const n = countEntries();
    const lastExp = ST.lastExport ? new Date(ST.lastExport).toLocaleDateString('pl-PL') : 'jeszcze nie zrobiono';
    const ios = isIOS();
    viewEl.innerHTML = `
      <div class="sesh-head"><h2>Dane i ustawienia</h2><p>Wszystko zapisuje się tylko na tym telefonie</p></div>

      <div class="block">
        <h3>Twoje imię</h3>
        <p>Pojawia się w nagłówku. Zostaje na tym urządzeniu — nie trafia do kodu ani do internetu.</p>
        <div class="row"><input id="nameI" class="field" type="text" maxlength="40" placeholder="np. Ania" value="${esc(ST.name)}">
        <button class="btn" id="nameS">Zapisz</button></div>
      </div>

      <div class="block">
        <h3>Kopia zapasowa</h3>
        <p>Zapisanych wyników: <b>${n}</b> · ostatnia kopia: <b>${esc(lastExp)}</b></p>
        <p>Wyniki są tylko w pamięci tej przeglądarki. Zrób kopię co kilka tygodni i zawsze przed zmianą telefonu — plik możesz zachować w Plikach, na Dysku albo wysłać sobie mailem.</p>
        <div class="row">
          <button class="btn" id="exp">Zapisz kopię</button>
          <button class="btn ghostbtn" id="imp">Wczytaj kopię</button>
          <input type="file" id="impF" accept="application/json,.json" hidden>
        </div>
      </div>

      <div class="block" id="install">
        <h3>Instalacja na telefonie</h3>
        ${isStandalone() ? '<p>Plan jest już zainstalowany i działa jako aplikacja. 👍</p>' : `
          ${deferredPrompt ? '<div class="row" style="margin-bottom:10px"><button class="btn" id="inst">Zainstaluj aplikację</button></div>' : ''}
          <p><b>iPhone (Safari):</b> stuknij przycisk <b>Udostępnij</b> (kwadrat ze strzałką) → <b>Do ekranu początkowego</b> → <b>Dodaj</b>. Musi to być Safari — z innych przeglądarek na iPhonie ta opcja bywa niedostępna.</p>
          <p><b>Android (Chrome):</b> menu <b>⋮</b> → <b>Zainstaluj aplikację</b> albo <b>Dodaj do ekranu głównego</b>.</p>
          ${ios ? '<p class="hint">Na iPhonie aplikacja z ekranu początkowego ma osobną pamięć od Safari. Jeśli masz już wyniki zapisane w Safari, zrób kopię tutaj i wczytaj ją w zainstalowanej aplikacji.</p>' : ''}`}
      </div>

      <div class="block">
        <h3>Zacznij od zera</h3>
        <p>Usuwa wszystkie zaznaczenia i zapisane ciężary z tego urządzenia. Tego nie da się cofnąć — najpierw zrób kopię.</p>
        <div class="row"><button class="btn danger" id="wipe">Usuń wszystkie dane</button></div>
      </div>

      <p class="foot-note">Nagrania techniki: MuscleWiki (linki zewnętrzne). Kod: open source, licencja MIT.</p>`;

    $('#nameS').onclick = () => { ST.name = $('#nameI').value.trim().slice(0, 40); save(); renderHeader(); toast('Zapisano imię.'); };
    $('#nameI').onkeydown = ev => { if (ev.key === 'Enter') $('#nameS').click(); };
    $('#exp').onclick = exportData;
    $('#imp').onclick = () => $('#impF').click();
    $('#impF').onchange = ev => { const f = ev.target.files && ev.target.files[0]; if (f) importData(f); ev.target.value = ''; };
    const inst = $('#inst'); if (inst) inst.onclick = install;
    $('#wipe').onclick = () => {
      if (!confirm('Na pewno usunąć wszystkie zapisane dane z tego urządzenia?')) return;
      const keepName = ST.name; ST = blank(); ST.name = keepName; save(); render(); toast('Dane usunięte.');
    };
  }

  async function exportData() {
    const payload = { app: APP_ID, format: 1, exportedAt: new Date().toISOString(),
      data: { done: ST.done, log: ST.log, hist: ST.hist, name: ST.name } };
    const json = JSON.stringify(payload, null, 2);
    const fname = 'plan-treningowy-' + new Date().toISOString().slice(0, 10) + '.json';
    const done = () => { ST.lastExport = new Date().toISOString(); save(); if (active === 'dane') render(); };
    let file = null;
    try { file = new File([json], fname, { type: 'application/json' }); } catch (e) {}
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: 'Kopia planu treningowego' }); done(); return; }
      catch (e) { if (e && e.name === 'AbortError') return; /* inaczej spróbuj zwykłego pobrania */ }
    }
    const blob = file || new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = fname;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    done(); toast('Kopia zapisana.');
  }

  function importData(file) {
    const r = new FileReader();
    r.onload = () => {
      let obj;
      try { obj = JSON.parse(r.result); } catch (e) { toast('To nie jest prawidłowy plik kopii.'); return; }
      if (!obj || obj.app !== APP_ID || !obj.data || typeof obj.data !== 'object') { toast('Ten plik nie pochodzi z tej aplikacji.'); return; }
      const incoming = normalize(obj.data);
      const n = Object.values(incoming.hist).reduce((a, h) => a + (Array.isArray(h) ? h.length : 0), 0);
      if (!confirm(`Wczytać kopię z ${new Date(obj.exportedAt).toLocaleDateString('pl-PL')} (${n} wyników)? Obecne dane na tym urządzeniu zostaną zastąpione.`)) return;
      incoming.lastExport = ST.lastExport; incoming.hideInstall = ST.hideInstall;
      ST = incoming; save(); renderHeader(); render(); toast('Kopia wczytana.');
    };
    r.onerror = () => toast('Nie udało się odczytać pliku.');
    r.readAsText(file);
  }

  /* ---------- start ---------- */
  renderHeader();
  renderBanner();
  render();

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('./sw.js').catch(() => {}); });
  }
})();
