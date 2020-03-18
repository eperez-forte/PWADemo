var url = window.location.href;
var swLocation = '/encuestados/sw.js';

if (navigator.serviceWorker) {


    // if (url.includes('localhost')) {
    //     swLocation = '/sw.js';
    // }


    window.addEventListener('load', function() {
        navigator.serviceWorker.register(swLocation);

    });

}