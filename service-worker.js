const CACHE_NAME = "spanish-sentence-generator-v11";
const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./service-worker.js",
  "./icon-192.svg",
  "./icon-512.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-192-maskable.png",
  "./icon-512-maskable.png",
  "./screenshot-wide.png",
  "./screenshot-mobile.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const shouldPreferNetwork =
    event.request.mode === "navigate" ||
    (isSameOrigin && APP_FILES.some((filePath) => requestUrl.pathname.endsWith(filePath.replace("./", "/"))));

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      const networkFetch = fetch(event.request).then((networkResponse) => {
        if (networkResponse.ok) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      });

      if (shouldPreferNetwork) {
        return networkFetch.catch(() => caches.match(event.request).then((cachedResponse) => cachedResponse || caches.match("./index.html")));
      }

      return caches.match(event.request).then((cachedResponse) => cachedResponse || networkFetch.catch(() => caches.match("./index.html")));
    })
  );
});
