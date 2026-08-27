// Minimal service worker - required for PWA installability
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Pass-through: always fetch from network (app needs live Firestore data)
  e.respondWith(fetch(e.request));
});
