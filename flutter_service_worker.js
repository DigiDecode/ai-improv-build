'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "003b3142ca14bda081bb7d9fd714e0a3",
"assets/NOTICES": "5442885d6572a23850d636f1414d72b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "64317330b00b41eaa67d71ef9619c0fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01431ee8cc3fc6b5068089a8b111b73b",
"/": "01431ee8cc3fc6b5068089a8b111b73b",
"kokoro.js/package-lock.json": "295789e1e76b348424784de380094901",
"kokoro.js/package.json": "1cc6151b43d6cf6fa0da707c22edaa5b",
"kokoro.js/README.md": "681cff670ac7e887eaf3c3d897f48b93",
"kokoro.js/rollup.config.js": "fae953407fc93d2f8d30c57ecdf7a704",
"kokoro.js/src/kokoro.js": "e555ef036f56407f028e95d818151f04",
"kokoro.js/src/phonemize.js": "b6ba62b190adf0ab8d906626db896923",
"kokoro.js/src/phonemizer.js": "dc8f4f16f13e7a0644689609e74c72ed",
"kokoro.js/src/splitter.js": "1555797878b53aff6227946a4bdcb6b0",
"kokoro.js/src/transformers-3.4.0.js": "95051bc0cb9d8653c8c2067cfbf2de1e",
"kokoro.js/src/voices.js": "8042fb1a4b0ee3a81eb31ee0b993f252",
"kokoro.js/tsconfig.json": "a6666262f929fb4d8c0c8232d6e21b98",
"kokoro.js/voices/af_alloy.bin": "dcca6efcd8cc1b1892a85c204874eaa5",
"kokoro.js/voices/af_aoede.bin": "18a67b28891988bfb2c5827c477e2768",
"kokoro.js/voices/af_bella.bin": "d9beec371efefe4696d695cd9fe1320f",
"kokoro.js/voices/af_heart.bin": "1a020a3024f2e2b00ef720e850a9e1c5",
"kokoro.js/voices/af_jessica.bin": "9f4d592ddb17653d699a6bd0d1e03159",
"kokoro.js/voices/af_kore.bin": "230ef628e3b66ac7f740fa3f60bc79a7",
"kokoro.js/voices/af_nicole.bin": "2fe8bc775e637496471be86aedfaacd4",
"kokoro.js/voices/af_nova.bin": "f6dc426c45daf257c917f305e606e3eb",
"kokoro.js/voices/af_river.bin": "8f64af6655ca9a4bab660a201f814feb",
"kokoro.js/voices/af_sarah.bin": "67c4d24560bdb0f9fc18a11d31c40219",
"kokoro.js/voices/af_sky.bin": "c71fd27592817fcf7df0ca235c13e6a9",
"kokoro.js/voices/am_adam.bin": "17a85046ceaa90330d632912c9528b7d",
"kokoro.js/voices/am_echo.bin": "2e839cb5d52da17c0f2aaf4ef2d22de0",
"kokoro.js/voices/am_eric.bin": "4dbeacebc6e1bbefc627ad7fc33e502c",
"kokoro.js/voices/am_fenrir.bin": "76c3ae0331b0ddd506521c833b2e9055",
"kokoro.js/voices/am_liam.bin": "6bb6e3c4e4bc4fe4799f7ffc5aabd1a8",
"kokoro.js/voices/am_michael.bin": "c743b176cb77f8f83984109a6ea79af1",
"kokoro.js/voices/am_onyx.bin": "f0120209ccb041472b785247cb04bc6e",
"kokoro.js/voices/am_puck.bin": "a8bfa541650a1ac84ba719760a046a8e",
"kokoro.js/voices/am_santa.bin": "8a97667efdf77a5f35538345817d7b78",
"kokoro.js/voices/bf_alice.bin": "4e0851b7b5521c06983a9ba92c49d5f2",
"kokoro.js/voices/bf_emma.bin": "86e5a7417fbc9e18494728b2d349a84d",
"kokoro.js/voices/bf_isabella.bin": "e48f04ed7b1fba1719bbcf6101bee785",
"kokoro.js/voices/bf_lily.bin": "8944d05eb9deb6764d48f6ce5144353c",
"kokoro.js/voices/bm_daniel.bin": "ba48f867ce2af4c2ee9c7745db496764",
"kokoro.js/voices/bm_fable.bin": "578fc4e95e5a29e22078ed1ec3e83fb3",
"kokoro.js/voices/bm_george.bin": "198621ee8e1920a852a2866bd70fb919",
"kokoro.js/voices/bm_lewis.bin": "ad07c5de3cccb561540000da608d1997",
"kokoro.js/voices/ef_dora.bin": "256868497b269625f333c37833dfe941",
"kokoro.js/voices/em_alex.bin": "884eb17c0b80dc45df4c38f56a30525b",
"kokoro.js/voices/em_santa.bin": "af76c7716a00cf4d8371287d0c8a9cdc",
"kokoro.js/voices/ff_siwis.bin": "5128651244bd802e2a9594068d1881b2",
"kokoro.js/voices/hf_alpha.bin": "27455681a471962bbc4e4631eab6fa0f",
"kokoro.js/voices/hf_beta.bin": "6b03875d5823dd119c1c2725354f1111",
"kokoro.js/voices/hm_omega.bin": "882f0b62b7eebbff1c35e77821d003fd",
"kokoro.js/voices/hm_psi.bin": "231134d16b7f9f0437e666fedd23df9e",
"kokoro.js/voices/if_sara.bin": "40792651bf205edc88a99950fb92170f",
"kokoro.js/voices/im_nicola.bin": "8071e9b37baa4ee175be106323ec183b",
"kokoro.js/voices/jf_alpha.bin": "15584c7eac7a6ff73ccfdd629ad5aa67",
"kokoro.js/voices/jf_gongitsune.bin": "c7eae8b89c8bdecf8cbffb6a9a2d6f98",
"kokoro.js/voices/jf_nezumi.bin": "0a24d5977887d10641f1cd65afac1a44",
"kokoro.js/voices/jf_tebukuro.bin": "3fb10acc7a2639bb2f6413bae0e10d6b",
"kokoro.js/voices/jm_kumo.bin": "f3943f714d3346681b9e74043a769911",
"kokoro.js/voices/pf_dora.bin": "5812b107137ceeae9f096fba8ecce057",
"kokoro.js/voices/pm_alex.bin": "d448a0b4a5a2455304ac37d4be07a4d3",
"kokoro.js/voices/pm_santa.bin": "79ac2ef77c7084b5a7ee2fc90f32ff3f",
"kokoro.js/voices/zf_xiaobei.bin": "f0e671681e6d56acbae8ba0ffa6f6f73",
"kokoro.js/voices/zf_xiaoni.bin": "ee475ea82ce53ae385b3d1923519a60a",
"kokoro.js/voices/zf_xiaoxiao.bin": "3a1b9cd87e8dd0068b33994ac9e5ac8e",
"kokoro.js/voices/zf_xiaoyi.bin": "be34aafbc4072d45e1aa0e1f7a1b50b2",
"kokoro.js/voices/zm_yunjian.bin": "064aa0ea86b4db6449370b05427d8a9c",
"kokoro.js/voices/zm_yunxi.bin": "6ae98f664079a4e3b806c78d14b4a7f3",
"kokoro.js/voices/zm_yunxia.bin": "db29f5472cc0d260598df88fd3f435f1",
"kokoro.js/voices/zm_yunyang.bin": "bed4038b7bf94fe1c88342aad6cab032",
"main.dart.js": "71919bcb6a08c43399d9ff62a11c5dfb",
"manifest.json": "c772c838dbfcbaf2dbc09119164e55b9",
"version.json": "d9be4c1cfbdb3121292b130699ceae19"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
