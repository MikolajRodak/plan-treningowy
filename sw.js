/*
 * SERVICE WORKER — działanie offline.
 * Strategia „stale-while-revalidate”: aplikacja otwiera się natychmiast z pamięci telefonu,
 * a w tle pobiera nowszą wersję. Po opublikowaniu zmian nowa wersja pojawi się
 * przy KOLEJNYM otwarciu aplikacji.
 *
 * Gdy dodajesz NOWY plik do projektu, dopisz go do listy ASSETS i podbij numer w CACHE.
 */
const CACHE = 'plan-treningowy-v1';
const ASSETS = [
  './',
  'index.html',
  'app.js',
  'plan.js',
  'manifest.webmanifest',
  'icons/apple-touch-icon.png',
  'icons/favicon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'fonts/fraunces-latin-700-normal.woff2',
  'fonts/fraunces-latin-ext-700-normal.woff2',
  'fonts/inter-latin-400-normal.woff2',
  'fonts/inter-latin-500-normal.woff2',
  'fonts/inter-latin-600-normal.woff2',
  'fonts/inter-latin-700-normal.woff2',
  'fonts/inter-latin-ext-400-normal.woff2',
  'fonts/inter-latin-ext-500-normal.woff2',
  'fonts/inter-latin-ext-600-normal.woff2',
  'fonts/inter-latin-ext-700-normal.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('plan-treningowy-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // filmy i linki zewnętrzne — bez cache

  event.respondWith(caches.open(CACHE).then(async cache => {
    const isPage = req.mode === 'navigate';
    const cached = await cache.match(isPage ? './index.html' : req, { ignoreSearch: true });
    const network = fetch(req).then(res => {
      if (res && res.ok) cache.put(isPage ? './index.html' : req, res.clone());
      return res;
    }).catch(() => cached);
    if (cached) { event.waitUntil(network.catch(() => {})); return cached; }
    return network;
  }));
});
