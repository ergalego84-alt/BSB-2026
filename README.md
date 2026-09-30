# BSB26 · Düsseldorf 2026

PWA estática para el viaje del 2 al 4 de octubre de 2026.

## Estructura
- `index.html` — itinerario
- `mapa.html` — mapa interactivo con más puntos de interés y rutas
- `fotos.html` — acceso directo a la carpeta compartida de Google Drive
- `documentos.html` — hotel, vuelos, parking y concierto
- `style.css` / `app.js` — estilos y tiempo
- `manifest.webmanifest` / `sw.js` — PWA

## Publicación
Sube todos los archivos a un repositorio de GitHub Pages y abre la URL HTTPS desde el móvil. Cada sección se abre como una página independiente y la barra inferior permite saltar entre Itinerario, Mapa, Fotos y Documentos.

No se incluye botón de instalación dentro de la app. Cada persona puede instalarla desde las opciones de su propio navegador si quiere añadirla a la pantalla de inicio.

## Mapa
El mapa usa OpenStreetMap + Leaflet cuando hay conexión. Incluye puntos del centro, Rin, hotel, transporte y MERKUR SPIEL-ARENA, además de rutas orientativas.
