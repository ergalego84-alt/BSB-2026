🇩🇪 BSB Düsseldorf — Travel PWA

PWA (Progressive Web App) para organizar el viaje a Düsseldorf con motivo del concierto de Backstreet Boys.

La aplicación está diseñada principalmente para utilizarse desde móvil, especialmente iPhone, y permite consultar el planning, horarios, desplazamientos, ubicaciones y rutas a pie.

📱 Características

- 📅 Planning completo del viaje.
- ✈️ Información de vuelos.
- 🚐 Traslados y logística para el grupo.
- 🏨 Información del alojamiento.
- 🎤 Información del concierto de Backstreet Boys.
- 👥 Planning específico para el grupo.
- 👩 Ruta especial para Marina durante el concierto.
- ⏰ Horarios recomendados.
- 📍 Ubicaciones de los lugares.
- 🗺️ Enlaces directos a Google Maps.
- 🚶 Rutas diseñadas para realizarse a pie.
- 📱 Diseño responsive para móvil.
- 📴 Funcionamiento básico offline mediante Service Worker.
- ➕ Posibilidad de instalar la aplicación en la pantalla de inicio del iPhone.

---

🗓️ Itinerario

Día 1

Jerez → Sevilla → Ámsterdam

- Salida desde Jerez.
- Parking en el aeropuerto de Sevilla.
- Vuelo Sevilla → Ámsterdam.
- Escala nocturna en Schiphol.

Día 2

Ámsterdam → Düsseldorf

- Vuelo Ámsterdam → Düsseldorf.
- Traslado al hotel.
- Dejar equipaje.
- Turismo por Düsseldorf.
- Check-in y descanso.

Día 3

Düsseldorf + concierto BSB

- Turismo y almuerzo.
- Traslado del grupo a la MERKUR SPIEL-ARENA.
- Concierto Backstreet Boys.

👩 Marina

Durante el concierto Marina realiza una ruta independiente por el centro de Düsseldorf:

Heinrich-Heine-Allee → Kö-Bogen II → Carlsplatz → Rheinuferpromenade → Gehry Buildings → Rheinturm → Altstadt → Heinrich-Heine-Allee

El objetivo es que Marina pueda conocer Düsseldorf mientras el resto del grupo está en el concierto y reencontrarse posteriormente con el grupo.

Día 4

Düsseldorf → Sevilla → Jerez

- Check-out.
- Traslado al aeropuerto.
- Vuelo Düsseldorf → Sevilla.
- Recogida del vehículo.
- Regreso a Jerez.

---

👩 Ruta de Marina

La ruta de Marina está diseñada para realizarse a pie.

17:30

📍 Heinrich-Heine-Allee

Punto de separación del grupo.

17:35 – 18:30

☕ Café / merienda

Kö-Bogen II.

18:30 – 19:30

🌿 Kö-Bogen II → Carlsplatz

Paseo por la zona y visita de Carlsplatz.

19:30 – 20:00

🌊 Rheinuferpromenade

Paseo junto al Rin.

20:00 – 20:30

🏢 Gehry Buildings / Neuer Zollhof

Parada para fotografías y arquitectura.

20:30 – 21:15

🌆 Rheinturm

Subida al mirador para contemplar Düsseldorf de noche.

21:15 – 22:15

🍺 Altstadt

Paseo y posibilidad de tomar algo / cenar.

22:15 – 22:30

🚶 Regreso a Heinrich-Heine-Allee.

22:30

👥 Reencuentro con el grupo.

---

🗺️ Google Maps

Ruta completa de Marina:

Heinrich-Heine-Allee → Kö-Bogen II → Carlsplatz → Rheinuferpromenade → Gehry Buildings → Rheinturm → Altstadt → Heinrich-Heine-Allee

"🗺️ Abrir ruta completa en Google Maps" (https://www.google.com/maps/dir/?api=1&origin=Heinrich-Heine-Allee,+D%C3%BCsseldorf&destination=Heinrich-Heine-Allee,+D%C3%BCsseldorf&travelmode=walking&waypoints=K%C3%B6-Bogen+II,+D%C3%BCsseldorf%7CCarlsplatz,+D%C3%BCsseldorf%7CRheinuferpromenade,+D%C3%BCsseldorf%7CGehry+Bauten,+D%C3%BCsseldorf%7CRheinturm,+D%C3%BCsseldorf%7CAltstadt,+D%C3%BCsseldorf)

---

🛠️ Estructura del proyecto

bsb-dusseldorf/
│
├── index.html
├── manifest.webmanifest
├── sw.js
├── icon.svg
└── README.md

"index.html"

Página principal de la aplicación.

Contiene:

- Planning.
- Ruta de Marina.
- Información logística.
- Mapas.
- Botones de navegación.

"manifest.webmanifest"

Define la aplicación como PWA y permite añadirla a la pantalla de inicio del dispositivo.

"sw.js"

Service Worker utilizado para almacenar los archivos principales y permitir el funcionamiento básico sin conexión.

"icon.svg"

Icono de la aplicación.

"README.md"

Documentación del proyecto.

---

🚀 Publicación mediante GitHub Pages

Este proyecto está preparado para funcionar con GitHub Pages.

1. Crear repositorio

Crear un repositorio nuevo en GitHub, por ejemplo:

bsb-dusseldorf

2. Subir los archivos

Subir al repositorio:

index.html
manifest.webmanifest
sw.js
icon.svg
README.md

3. Activar GitHub Pages

En el repositorio:

Settings → Pages

En:

Build and deployment

seleccionar:

Source: Deploy from a branch
Branch: main
Folder: / (root)

Guardar.

GitHub generará una dirección similar a:

https://TU-USUARIO.github.io/bsb-dusseldorf/

4. Abrir desde el iPhone

Marina podrá abrir el enlace desde WhatsApp utilizando Safari.

Después:

Compartir → Añadir a pantalla de inicio

La PWA aparecerá como una aplicación en el iPhone.

---

📲 Uso recomendado

La aplicación está pensada para utilizarse principalmente desde el móvil.

Los botones de ubicación permiten abrir directamente los lugares en Google Maps.

Para Marina, la sección 👩 Marina concentra toda la información necesaria durante el concierto.

---

⚠️ Datos pendientes de verificar

Antes del viaje conviene comprobar:

- Fecha exacta del concierto.
- Horarios definitivos de vuelos.
- Dirección exacta del hotel.
- Horario y precio de Rheinturm.
- Condiciones del KombiTicket.
- Horarios definitivos de U78 y S11.
- Horarios de los establecimientos incluidos en la ruta.

---

📄 Fuente del planning

El contenido inicial de la aplicación se basa en el planning de viaje proporcionado para el grupo de 8 personas y en la guía específica de la ruta de Marina.

Los horarios y datos de transporte se mantienen según el planning proporcionado y deben verificarse antes del viaje.

---

🇩🇪 BSB Düsseldorf

Travel PWA · Düsseldorf · Backstreet Boys · 2026
