// service-worker.js
const CACHE_NAME = 'i̇hale-v1';
// GitHub Pages için önemli: ./ diyerek o anki klasörü önbelleğe alıyoruz
const urlsToCache = ['./', './index.html'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});