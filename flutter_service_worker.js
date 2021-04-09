'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "66189eb74f0b18da8c1f5bc3c8b0af35",
"assets/assets/background/Background%2520popinintro.png": "4b2a0121c2c585ef43cbcb97b4b7bada",
"assets/assets/background/background_introduction.jpg": "ae5069d387ca20bc576a419bbb106a24",
"assets/assets/background/salle_d_attente.png": "f4167781a1ae3c12f20ab3d21da13005",
"assets/assets/character/pannel_presentation.png": "facfddb202708c9bb5e24c5150d5312b",
"assets/assets/character/Sticker_Benoist.png": "821b27958673353cdecaebcf6b5d594f",
"assets/assets/character/Sticker_Garanger.png": "6ded76f8ee607f892c664098552780a0",
"assets/assets/character/Sticker_Julian.png": "14e3d218e6879982a6598c2017f2b774",
"assets/assets/character/Sticker_Martel.png": "f26ce22a8dece5f3d90e8c1bbb34eae1",
"assets/assets/character/Sticker_Rabier.png": "7454a50bd87663a0adb210be07efa139",
"assets/assets/character/Sticker_Saulas.png": "ad8b233b7134d3c16c686f999db9179e",
"assets/assets/decoration/blue_corner_arrow.png": "f5c92115f1d13f4f8d6cdbae24b74835",
"assets/assets/decoration/blue_corner_right.png": "6c393c0ef9d29c3a7d84b0374590c327",
"assets/assets/decoration/bt_close.png": "d5793a3f17768952170c83f4b335c504",
"assets/assets/decoration/ic_BUM_upMenu.png": "704967fbdecc6b9cbe0429ffabea6883",
"assets/assets/decoration/ic_discussion_upMenu@2x.png": "fac09def2053eaa79180aa515685440e",
"assets/assets/decoration/ic_documentsFile.png": "ec396e79528f82b6814e7ed798a4fb3a",
"assets/assets/decoration/ic_Documents_@2x.png": "c7749a021d3de96cdb139e48f2be9810",
"assets/assets/decoration/ic_documents_upMenu@2x.png": "78a4b1977d3ac48da9f6f0ac6ed51c8c",
"assets/assets/decoration/ic_dossier%2520patients@2x.png": "758dc9436a33d8e6e123e7be61256006",
"assets/assets/decoration/ic_references_upMenu.png": "9ff45f1b1829f003e0cd79cde777f211",
"assets/assets/decoration/leftCorner_bottomMenu_@2x.png": "02566db22be0f4e9bc32aa27931b801d",
"assets/assets/decoration/leftCorner_bottomMenu_arrow.png": "ee20fa804fd5a5a987299feba8542a78",
"assets/assets/decoration/rightCorner_bottomMenu_@2x.png": "a6b37643614559d168241685869e62ad",
"assets/assets/decoration/rightCorner_bottomMenu_arrow.png": "9424b0376d8c844e1b6bc9fbec5948cc",
"assets/assets/decoration/yellow_corner_arrow.png": "b6f131faf2bed361d6f0f8a86cbbf9b0",
"assets/assets/documents/BUM/BonUsage1.png": "77a8f7d057b9778559bf7a89dc299199",
"assets/assets/documents/BUM/BonUsage2.png": "8a2e286d25ff62688647d4e4d5a79a8e",
"assets/assets/documents/BUM/BonUsage3.png": "b5d2e1cbaaf47486b55dd479e68ff4fc",
"assets/assets/documents/BUM/BonUsage4.png": "eabef96c833166427faf0534939147f2",
"assets/assets/documents/patients/1_addict_1.jpg": "2909b10c99eeb53488288fb0de2ce285",
"assets/assets/documents/patients/1_addict_2.jpg": "4d5c54f10f1be0d8176a0443f15f4520",
"assets/assets/documents/patients/2_imagerie_1.jpg": "dc46da4824374f056e5085f29fea6559",
"assets/assets/documents/patients/3_pneumo_1.jpg": "02790ffbb2f6a0d99c5dea823b3ed809",
"assets/assets/documents/patients/3_pneumo_10.jpg": "a2aea41229d61126a0d9ca31ea962c55",
"assets/assets/documents/patients/3_pneumo_11.jpg": "7d641d0b24658153792c252be0643751",
"assets/assets/documents/patients/3_pneumo_12.jpg": "667d8926cc0e9eefe609c71dbef59dea",
"assets/assets/documents/patients/3_pneumo_13.jpg": "6f0ca95203ab023b7dd4d7f327a990ac",
"assets/assets/documents/patients/3_pneumo_14.jpg": "59ee51021384baf9f3368d5efe83f65e",
"assets/assets/documents/patients/3_pneumo_15.jpg": "7413719bf3c40c669d5a020f9bf2ad71",
"assets/assets/documents/patients/3_pneumo_16.jpg": "3cc735fef78d77f3681ea82ed9c81909",
"assets/assets/documents/patients/3_pneumo_2.jpg": "6a8b5f4e7bf492fb715922c693cd9ed7",
"assets/assets/documents/patients/3_pneumo_3.jpg": "4bdccb599fe3a58c72ac7827b407f9e6",
"assets/assets/documents/patients/3_pneumo_4.jpg": "1273ab964aa2edbe478f11e722673db4",
"assets/assets/documents/patients/3_pneumo_5.jpg": "67488b23003c51d1e6cd12970c835c84",
"assets/assets/documents/patients/3_pneumo_6.jpg": "12a7eb18df61c7e50e8fdf1752008f37",
"assets/assets/documents/patients/3_pneumo_7.jpg": "511a4f6cccf9607e5f60362ee41837da",
"assets/assets/documents/patients/3_pneumo_8.jpg": "49760c83ea5fc7567c09babab83fa787",
"assets/assets/documents/patients/3_pneumo_9.jpg": "0f5b75f6a72caf81d2d40a1d72b296e5",
"assets/assets/documents/patients/4_cardiologie_1.jpg": "7acdf4bffd5e8b7ae659c71f2d416aab",
"assets/assets/documents/patients/5_cardiologie_1.jpg": "a5bf9479cd90cf0cd27c2d6b165a5503",
"assets/assets/documents/patients/6_medecin_1.jpg": "0bbce75ff57c38c175c9ce228e17d55d",
"assets/assets/documents/patients/6_medecin_2.jpg": "8c1081a890c8e0a5843c9123b38b0062",
"assets/assets/i18n/fr.json": "eeebb8983dc1f508b09ffcb4f65f1e50",
"assets/assets/legale/Logo_GSK.png": "b4795ffdd3e02ba901fd3aedc6f235c7",
"assets/assets/legale/logo_trelegy.png": "243b58a9a7f49a2fdc347f4328a62da9",
"assets/assets/text_image/logo_mystair.png": "017205dea6878b98ea7a9d431ac2b5be",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "be014f9dd1455697b19f9466e0a7edc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "357a81dbb0c876e536436c147d4e176b",
"/": "357a81dbb0c876e536436c147d4e176b",
"main.dart.js": "bf69a2f602dbd06a0288a1d8822da365",
"manifest.json": "cb82621278f07277ca504a05ac88650d",
"version.json": "8323872dcc70a4c3f790325b0445ccd7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
