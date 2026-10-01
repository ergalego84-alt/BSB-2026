const CACHE='bsb26-v12';
const CORE=['./','./index.html','./mapa.html','./fotos.html','./documentos.html','./recuerdo.html','./style.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-384.png','./icon-512.png','./icon-1024.png','./apple-touch-icon.png','./favicon-32.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const url=new URL(e.request.url);if(url.origin===location.origin){e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))));}});
