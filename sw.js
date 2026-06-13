const CACHE_NAME = "shrimpy-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Tajawal:wght@400;500;700;800;900&family=Cormorant+Garamond:wght@600;700&family=El+Messiri:wght@400;600;700&family=Inter:wght@500;600;700;800;900&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
];

// تثبيت SW وتخزين الملفات الأساسية
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// حذف الكاش القديم عند تفعيل إصدار جديد
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// استراتيجية: Cache First ثم Fallback إلى الشبكة
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchRes) => {
        // يمكن تخزين الملفات الجديدة ديناميكياً (اختياري)
        if (fetchRes && fetchRes.status === 200 && event.request.method === "GET") {
          const responseClone = fetchRes.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return fetchRes;
      });
    }).catch(() => {
      // صفحة Offline مخصصة (اختياري)
      return caches.match("/");
    })
  );
});
