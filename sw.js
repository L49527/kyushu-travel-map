const CACHE_NAME = 'kyushu-travel-v5';
const ASSETS = [
    './',
    './index.html',
    './styles.css?v=5',
    './app.js',
    './data.js',
    './data-extended.js',
    './manifest.json',
    // Leaflet CDN Resources
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    // Google Fonts
    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;600&display=swap',
    // Core cover & UI images
    './images/福岡.jpg',
    './images/由布院.webp',
    './images/別府.jpg',
    './images/阿蘇.png',
    './images/apple-touch-icon.png',
    './images/icon-192.png',
    './images/icon-512.png',
    './images/都ホテル博多.jpg',
    './images/御宿 野乃別府.webp',
    './images/杉乃井飯店 宙館.jpg',
    './images/Il Palazzo.jpg'
];

// Install Event - file caching
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
    );
});

// Activate Event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }));
        })
    );
});

// Fetch Event - Dynamic Strategies
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Strategy 1: Stale-While-Revalidate for CDNs, Map Tiles, Google Fonts, and Images
    if (
        url.hostname.includes('basemaps.cartocdn.com') ||
        url.hostname.includes('unpkg.com') ||
        url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com') ||
        event.request.destination === 'image'
    ) {
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    const fetchPromise = fetch(event.request)
                        .then(networkResponse => {
                            if (networkResponse.status === 200 || networkResponse.type === 'opaque') {
                                const clonedResponse = networkResponse.clone();
                                caches.open(CACHE_NAME).then(cache => {
                                    cache.put(event.request, clonedResponse);
                                });
                            }
                            return networkResponse;
                        })
                        .catch(() => {
                            // Suppress errors for background fetch failures when offline
                        });

                    return cachedResponse || fetchPromise;
                })
        );
    } else {
        // Strategy 2: Network-First for local HTML, CSS, JS, JSON
        event.respondWith(
            fetch(event.request)
                .then(networkResponse => {
                    if (networkResponse.status === 200) {
                        const clonedResponse = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, clonedResponse);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
    }
});
