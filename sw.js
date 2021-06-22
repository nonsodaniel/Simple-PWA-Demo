const staticCacheName = 'site-cache';
const assets = [
  "/",
  "/index.html",
  "/js/index.js",
  "/js/app.js",
  "/css/styles.css",
  "/css/font.css",
  "/manifest.json",
  "/img/logo.svg",
  "/img/msk192.png",
  "/img/msk512.png",
];

// install event
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", e =>{
  e.respondWith(
      caches.match(e.request)
      .then(response => {
          return response || fetch(e.request);
      })
  ) })