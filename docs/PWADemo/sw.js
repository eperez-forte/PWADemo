const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1.0.0';

const APP_SHELL = [
    '/encuestados/',
    'index.html',
    'app.js',
    'favicon.ico',
    'main-es2015.6109c73b0ca1a0aa3eac.js',
    'polyfills-es2015.5b10b8fd823b6392f1fd.js',
    'runtime-es2015.c5fa8325f89fc516600b.js',
    'styles.09e2c710755c8867a460.css'
];

const APP_SHELL_INMUTABLE = [
    //'https://kit.fontawesome.com/5118b61d12.js'
];

self.addEventListener('install', e => {

    console.log('Instalando');
    const cacheStatic = caches.open(STATIC_CACHE).then(cache =>
        cache.addAll(APP_SHELL));

    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));



    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});

self.addEventListener('activate', e => {
    console.log('Activando');
    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});