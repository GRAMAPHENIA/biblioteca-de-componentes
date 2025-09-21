// Service Worker para Transaesthetic Dashboard
const CACHE_NAME = 'transaesthetic-v1';
const STATIC_CACHE = 'transaesthetic-static-v1';
const DYNAMIC_CACHE = 'transaesthetic-dynamic-v1';

// Archivos estáticos para cachear
const STATIC_FILES = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/crown.svg',
  '/hero-placeholder.png',
  '/robots.txt'
];

// Instalar el service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Cacheando archivos estáticos');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Archivos estáticos cacheados correctamente');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error al cachear archivos estáticos:', error);
      })
  );
});

// Activar el service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activado correctamente');
        return self.clients.claim();
      })
  );
});

// Estrategia de cache: Cache First para recursos estáticos
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar solicitudes HTTP/HTTPS
  if (!request.url.startsWith('http')) {
    return;
  }

  // Estrategia Cache First para archivos estáticos
  if (STATIC_FILES.some(file => url.pathname === file || url.pathname.startsWith('/_astro/'))) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            console.log('Service Worker: Recurso estático servido desde cache:', request.url);
            return response;
          }

          console.log('Service Worker: Recurso estático no encontrado en cache, solicitando:', request.url);
          return fetch(request)
            .then((fetchResponse) => {
              // Verificar si la respuesta es válida
              if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return fetchResponse;
              }

              // Clonar la respuesta para el cache
              const responseToCache = fetchResponse.clone();

              caches.open(STATIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                });

              return fetchResponse;
            })
            .catch((error) => {
              console.error('Service Worker: Error al obtener recurso estático:', error);
              return caches.match(request);
            });
        })
    );
  }
  // Estrategia Network First para otros recursos
  else {
    event.respondWith(
      fetch(request)
        .then((fetchResponse) => {
          // Verificar si la respuesta es válida
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }

          // Clonar la respuesta para el cache
          const responseToCache = fetchResponse.clone();

          caches.open(DYNAMIC_CACHE)
            .then((cache) => {
              cache.put(request, responseToCache);
            });

          return fetchResponse;
        })
        .catch((error) => {
          console.log('Service Worker: Error de red, buscando en cache dinámico:', error);
          return caches.match(request)
            .then((response) => {
              if (response) {
                return response;
              }

              // Si no hay cache, devolver página offline o error
              return new Response('Contenido no disponible offline', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
        })
    );
  }
});

// Manejar mensajes desde la aplicación principal
self.addEventListener('message', (event) => {
  console.log('Service Worker: Mensaje recibido:', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});