// // Install Event (Caching Files)
// self.addEventListener("install", (event) => {
//   console.log("Service Worker Installed!");
// });

// // Activate Event
// self.addEventListener("activate", (event) => {
//   console.log("Service Worker Activated!");
// });

// // Fetch Event (Intercept Requests)
// self.addEventListener("fetch", (event) => {
//   console.log("Fetching:", event.request.url);
// });


// const CACHE_NAME = "site-cache-v1";
// const urlsToCache = [
//     "/index.html",
//     "/image/photo-1444653614773-995cb1ef9efa.avif",
//     "/image/logo12.avif",
//     "/image/DALL·E 2025-03-05 02.50.37 - A modern and sleek digital forensics company logo featuring a shield with a fingerprint in the center. The shield should have a futuristic, tech-inspi.webp",
//     "/image/DALL·E 2025-03-01 01.13.59 - A professional digital forensics team working on cybersecurity and data recovery. The scene features experts analyzing data on multiple computer scree.webp"
    
// ];

// // Install Event - Caching Files
// self.addEventListener("install", (event) => {
//     console.log("Service Worker Installing...");
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => {
//             console.log("Caching App Shell");
//             return cache.addAll(urlsToCache);
//         })
//     );
// });

// // Activate Event - Cleanup Old Caches
// self.addEventListener("activate", (event) => {
//     console.log("Service Worker Activated!");
//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map((cache) => {
//                     if (cache !== CACHE_NAME) {
//                         console.log("Deleting Old Cache:", cache);
//                         return caches.delete(cache);
//                     }
//                 })
//             );
//         })
//     );
// });

// // Fetch Event - Serve Cached Files
// self.addEventListener("fetch", (event) => {
//     console.log("Fetching:", event.request.url);
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             return response || fetch(event.request);
//         }).catch(() => caches.match("/index.html")) // Offline Fallback
//     );
// });
