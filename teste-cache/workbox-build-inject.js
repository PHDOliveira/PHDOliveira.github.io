const { injectManifest } = require('workbox-build')

let workboxConfig = {
    globDirectory: './',
    globPatterns: [
        'index.html',
        'scripts/*.js',
        '*.css',
        'images/*.jpg',
    ],
    swSrc: 'service-worker.js',
    swDest: 'sw.js'
}

injectManifest(workboxConfig)
    .then(({ count, size }) => {
        console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`)
    })