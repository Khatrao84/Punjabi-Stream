// sw.js - Service Worker for PWA
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('gurbani-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/favicon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});


