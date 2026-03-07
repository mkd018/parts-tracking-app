const CACHE_NAME = "parts-tracking-cache-v1";

const urlsToCache = [
  "/parts-tracking-app/",
  "/parts-tracking-app/index.html",
  "/parts-tracking-app/manifest.json",
  "/parts-tracking-app/icon-192.png",
  "/parts-tracking-app/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
