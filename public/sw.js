const CACHE_NAME = 'v19-pwa-v1';
const PRECACHE_URLS = ['/', '/offline.html', '/favicon.ico', '/logos/v19.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : Promise.resolve())))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Navigation requests: network-first, fallback to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/offline.html'))
    );
    return;
  }

  // Same-origin asset caching: stale-while-revalidate
  if (url.origin === self.location.origin) {
    const dest = request.destination;
    if (['style', 'script', 'image', 'font', 'audio'].includes(dest)) {
      event.respondWith(
        caches.open(CACHE_NAME).then(async (cache) => {
          const cached = await cache.match(request);
          const networkPromise = fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                cache.put(request, response.clone());
              }
              return response;
            })
            .catch(() => cached);
          return cached || networkPromise;
        })
      );
      return;
    }
  }

  // Default: pass-through (do not cache API routes like /checkout, webhooks, etc.)
});