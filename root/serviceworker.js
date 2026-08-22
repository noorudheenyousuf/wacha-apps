self.addEventListener('install',e => {
    e.waitUntil('static').then(cache => {
        return cache.addAll(['./'])
    });
    console.log('service worker changed')
    console.log('serviceworker updation')
});

self.addEventListener('fetch',e => {
    e.respondWith(caches.match(e.request).then(response => {
        return response || fetch(e.request)
    }))
});