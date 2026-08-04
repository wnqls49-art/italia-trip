const CACHE = "trip-v29";
self.addEventListener("install", (e) => { self.skipWaiting(); e.waitUntil(caches.keys().then((k) => Promise.all(k.map((x) => caches.delete(x))))); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((k) => Promise.all(k.map((x) => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => { if (e.request.method === "GET") e.respondWith(fetch(e.request)); });
