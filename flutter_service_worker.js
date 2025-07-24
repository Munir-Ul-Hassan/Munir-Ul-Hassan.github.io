'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb92e2d89f2ebb90af56e87b1d2d1987",
"assets/AssetManifest.bin.json": "90c6e2aa90ecc4c882d945bc61f7dd22",
"assets/AssetManifest.json": "13e15a2f458903082a87186c913feba2",
"assets/assets/calliverse.png": "fad974d5887e0c5a89aa41b5361bb406",
"assets/assets/calliverse1.png": "8bfab764fa537586438fe0341d3767b7",
"assets/assets/calliverse10.png": "0e11a469765663cccdb06dbe0a777e7e",
"assets/assets/calliverse11.png": "e2f0f3bd5e330876c8d24600a7e83e8b",
"assets/assets/calliverse12.png": "8d0b6bf65d73eefdefd463ec04b233cd",
"assets/assets/calliverse13.png": "4a5b9dd433a72115e4749fd0066c6e2c",
"assets/assets/calliverse14.png": "1e34b06c87a430d4c20063ab8e66e2ec",
"assets/assets/calliverse15.png": "cb83f7b5808865d7292e8b10d36b941c",
"assets/assets/calliverse16.png": "4ca732a929d231277ce8fdb523e9a063",
"assets/assets/calliverse2.png": "112826ae29f15f410acd5f5618b4e87e",
"assets/assets/calliverse3.png": "79557dfd393e3b310bfc20b6e0688e07",
"assets/assets/calliverse4.png": "f7cd3da82188e7b92cb782af04c1046a",
"assets/assets/calliverse5.png": "3df85bc743f9056f966fced43920d2ad",
"assets/assets/calliverse6.png": "2841a4a41f267be1d0e565d9c15055e0",
"assets/assets/calliverse7.png": "88eae863f53cd49a4c9e467038153561",
"assets/assets/calliverse8.png": "3233cd4c4272b915ef6c4ee9cb88ee1e",
"assets/assets/calliverse9.png": "bc7fff4dfa3f86f11c08b9b7acd57872",
"assets/assets/ecom.png": "be2285018285e36b13b31cf410838f49",
"assets/assets/ecom1.png": "2ac597ae3cc22bd01264223b785e7efb",
"assets/assets/ecom10.png": "17503e9448e42633d53cff3f464569ae",
"assets/assets/ecom11.png": "df2a1f14dbf0e075bbc0e236c06852a4",
"assets/assets/ecom12.png": "2b2565305093c0ee0ce500de10741098",
"assets/assets/ecom13.png": "4d88a1d3580f6d80f56783eba8cd369c",
"assets/assets/ecom14.png": "56518f26ec0503743174a1bd3bf46cb2",
"assets/assets/ecom2.png": "920b6be68bb980f6ab27b075c9752589",
"assets/assets/ecom3.png": "245d37e51544995b9be76935afdc7c27",
"assets/assets/ecom4.png": "a5f9067c282c6562381c820ae331b13a",
"assets/assets/ecom5.png": "6249293d0b4a95c8b28925690d613324",
"assets/assets/ecom6.png": "d3adba7654d5313579d1b7a660a5ac88",
"assets/assets/ecom7.png": "0026dfb801d614b4b008bae4014fe130",
"assets/assets/ecom8.png": "74043aedfafbfdc7bd3832af87ff6cfd",
"assets/assets/ecom9.png": "4aa5a2965441c49f2523afa32b587ce2",
"assets/assets/fitness.png": "01b623ee10cebad4f35a9ee1d001f03f",
"assets/assets/fitness1.png": "311196d15e01a5f19bd455757bb40d45",
"assets/assets/fitness10.png": "d38ad9f360cf4bcacdad9ec271d2e3a9",
"assets/assets/fitness11.png": "aa9ccf6084d86629d1be27bda2bb24d5",
"assets/assets/fitness12.png": "e5863e2da2ba7d55e903d2ca6e5c825a",
"assets/assets/fitness13.png": "ac491377c576f8ce378aa6070e099aa4",
"assets/assets/fitness14.png": "4101aff56a060ca0d0e935a18e9d5ec3",
"assets/assets/fitness15.png": "11a4aa90fcdea65442ccc86064396f1c",
"assets/assets/fitness2.png": "0ec2b30194d1d70e88b7da8a20bb53db",
"assets/assets/fitness3.png": "2b4ccf3724c8c9a92f871ec46c893608",
"assets/assets/fitness4.png": "cbf529e0bc692e06cd5aae114afe37e9",
"assets/assets/fitness5.png": "7ee99372e8c4d72f04cbe5a182124826",
"assets/assets/fitness6.png": "c4969641cd411e7b23304521b6da7e1c",
"assets/assets/fitness7.png": "6aa1e2294131ad295da6c4797de593b2",
"assets/assets/fitness8.png": "87b9daff84c9be90c2475267bf8fd472",
"assets/assets/fitness9.png": "acf1e21a447aff5cfc0cf92996889890",
"assets/assets/github.png": "1d149697be686317920fff4e51d1b439",
"assets/assets/profile.jpeg": "bbaadc485f9ac662f0ddd2cbc8efa848",
"assets/assets/RESUME.pdf": "fd957b5ea22c5a1d3a3b9dca33b1280b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "854a25bccdfcac109af10b1ef13f6cfc",
"assets/NOTICES": "d82bb882ff2a424e92b1231b9211efaf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d5ffe1801e507f783cb232210e469def",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "7e5a00b156585785e3bc59577a5ad818",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
