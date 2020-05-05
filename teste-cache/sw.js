// For the simplicity let's use Workbox hosted on CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js')

// Detailed logging is very useful during development
workbox.setConfig({ debug: true })

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "32af0b65aed235cc7badd4ee4275664a"
  },
  {
    "url": "scripts/script.js",
    "revision": "ecd7b35652aeb909cbcafd9039d94263"
  },
  {
    "url": "style.css",
    "revision": "1a9ddc9c6f425481e1ed5c04b02f3c3a"
  },
  {
    "url": "images/img1.jpg",
    "revision": "90ceff44c4e6dbe8e18596fb8c0935c8"
  },
  {
    "url": "images/img2.jpg",
    "revision": "8b1f73f137a883414ace75029a22599d"
  }
])