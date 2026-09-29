const CACHE="dus-bsb-v4";
const CORE=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-384.png","./icon-512.png","./apple-touch-icon.png","./favicon-32.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);if(u.origin!==location.origin)return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const q=r.clone();caches.open(CACHE).then(x=>x.put(e.request,q));return r}).catch(()=>caches.match("./index.html"))) )});
