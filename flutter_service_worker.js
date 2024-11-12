'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ee608d4b5abdc22a4b49a59ae2061cae",
".git/config": "ce089bf419a7ef57e49a153a8215c00a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "06903d442351eefe35d5d8e7368dd03c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91b32d77b13ccbe8f733a114a48dd429",
".git/logs/refs/heads/main": "cc57372fa7eafa15a6cdb6f7c04a865f",
".git/logs/refs/remotes/origin/main": "fa103411c4f9a4977eab2e85e98f064a",
".git/objects/01/15404d813dee6ccf94f7ec9fb7d128d14eea2c": "5ae0a165739866b4d0291ae436a60bc4",
".git/objects/01/fc368e8ce5a91e0446f3b726890029b97515cb": "92be721e6c4f50b371cc0a28084b2b69",
".git/objects/05/27f67c826b56f2b1a11216186f4d5b2317e527": "b9bb334aa68fb5b14bf7f6ea1c3a33a4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/8fa509a8dfaab4a1e7f0d6366213fc42d9ef08": "05361da651ba289a8e10f00c0c6f08ca",
".git/objects/2d/2e7d0bf9dbd8af6d49a954dcb66cd5b925ebe5": "74a7624f5d0fea887047933911e095e5",
".git/objects/2d/919a78f7eb8eab4bf582810ae93e19cc5af37f": "35f5c4179961372256f0f352ed2d4858",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/99d18839687f7054c2f10df276f14798845192": "7dfd2a69a0df367245cefc9ae87a3095",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/ae38d9b7b4a0df84a3d245c301bea6f5641ded": "ff46c331edeb8c2ce73ad4647c69f160",
".git/objects/48/b13020aa8761eface64f5be0d829c75b797f4b": "2a4b2c3a80a7b67ac2549ff4a1cb5912",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/20a6677b7abf1bdb1bffb7f778b8e220d1c10a": "d09c82214b1d7116dc34fec3e7deaf28",
".git/objects/5c/98273651d5ecda6f83dfb988a1dc0308444350": "9e5f59ff730a705663c6ef52c48089e1",
".git/objects/5e/5b261dfe994029439379ae697841ce7cf3a59e": "29bf2dad04be542b0050c503f7f65eb5",
".git/objects/62/87b95bcf4542b3aa0959fd07c6c5aadf50f1ba": "547b3fbaf30d283e1405dd813655406a",
".git/objects/64/83802f8a7293ba8a416e58e37b0773f26d80d6": "f8da20ca7106fc68a55b65ca27c195ff",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/f3bc7e414a54c848e1874e0cb365409e4badfb": "de117e6be38b783a3668701126bd27b8",
".git/objects/6e/75f278e4bdf8d2dceeb2c91b1fc2a2ea8f5787": "2214924ec6c8598f4c2083b49da24720",
".git/objects/72/0601ad0bbfc37bbfdfe7eb5ea8aeceeb9f83fc": "3dd39dd52a6eaff3b25070b55e8825ea",
".git/objects/73/f09c2073a22a8860469fc48c011582a8aab67f": "64a3e9ce168062eaff9657c33fe5a25b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/17da0c6de76d986dc274160de07b6b40ea2c99": "3f8c2a37e574cff96bd9a3026c4137fc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/ff8671333ccda14802e5ed29d9f651b923b588": "ea3668b2e20a1b7def7e96216b80afb5",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a9/77d7d4831d171d888618e14d09abafdf9b5005": "7514e5269143f1cc5f6889d31cdfc4ce",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/cc388007b54457413597014eca1915d2156ed2": "aab2798014b95708b9991520701728f4",
".git/objects/bb/cbb0976d4afbcb2c22a45a45ab10699534dd3e": "44b7fb04ecdba119d56e47856f6fcb03",
".git/objects/bc/0b26f0ea44d9759318f6d3d31b7aaf13e460c3": "159eb2edc25e6323f40d276ac8085c40",
".git/objects/c3/3e2e1da3212066af932e726b8e67e847be511d": "4277e3a5745ad84e7458c3751d9f110c",
".git/objects/c8/5dfd79c36e6dfe314cac2b4a7f0c1c66118015": "0d36723b5cdb2b001bf880fb3868c9a3",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/2dbd379dae17641f3270530ac18ac881368ac2": "8b357bffccb9d848cdce3871db42850c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/2d05b896582952dd8646e3a1f695d092377409": "724665b6ab94e46a26033aa6c33c6220",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/d45e8711a28bc76b2c0e32a542533e9f2ad921": "208c2fac4d5f978dcba0ccd6f790f30f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/e4ff7ebc336134294981a3f5edbdc424b7a916": "4f4b8a59d15369245675b7b45f05d5c6",
".git/objects/e7/bce87a8129e4d71fc6d807b011c791709eac49": "8de6faccd79afbf96ae99eff631599c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/e1474ad07c18e6a9104ba0387e83802954c741": "5f38fde3c7d324e677e1fe0b4757bb3d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/d88daf68900e032756641fc0b8658e6f3a3b40": "ab3e5b98f88a5622da417a4991bc6835",
".git/refs/heads/main": "1ddb6097a94ca92a4bbbe3274fb16b58",
".git/refs/remotes/origin/main": "1ddb6097a94ca92a4bbbe3274fb16b58",
"assets/AssetManifest.bin": "cc508c4c3b73384b8211130651b54c61",
"assets/AssetManifest.bin.json": "dbc2ccc860d70a8baee8c8cc9c61097c",
"assets/AssetManifest.json": "5048726a8169d1787050ba2d900e3a6c",
"assets/assets/images/background.jpeg": "7932348af6a4da8da1780343412afaa6",
"assets/assets/images/balloon.png": "1b6da6ceba434737ddd86d6bcef267e6",
"assets/assets/images/c1.png": "89e68f46bd326cc10933f28588a7978d",
"assets/assets/images/customer_logo.jpg": "68896f9a1aa80d52f952469ca449ceb3",
"assets/assets/images/home_background.jpg": "b8bdb54bda9a178de619aacce9131045",
"assets/assets/images/me.png": "6b3a285689d5404afda5efbfceab1c34",
"assets/assets/images/mustaql.jpeg": "620753d887686d2ac1f8c9bfd40f6778",
"assets/assets/images/osama.jpg": "363a66511109432b32e46b6f83b6a6f9",
"assets/assets/images/p1.png": "93bc0094752e51a95cb8efec66207116",
"assets/assets/images/play_store.jpeg": "499e9068b35e542c7d8952996659eb5d",
"assets/assets/images/provider_logo.png": "6c7f3f1819bdaeca6034a802407dcb3d",
"assets/assets/images/s1.png": "c0d149bedbfccb8d85c3ae1cf7addfff",
"assets/assets/images/serviceman_logo.png": "92a81a52c7eb031b3ee5cfab07c26623",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "766bfa1960a9875a52f09b5276320529",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9a30ee112adf1331b404898efd68cab3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c8bd14a06437b7e3cd9ef343c1597e71",
"/": "c8bd14a06437b7e3cd9ef343c1597e71",
"main.dart.js": "91646d54ace7bbfbcffec1f303e1ed5f",
"manifest.json": "fdbd288cd3364dc49f1d8048557cd12e",
"README.md": "01a3d6c5d4e12d32c11def9c6ba299d3",
"style.css": "7a6f500c1d68ea88ea1201db191eff65",
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
