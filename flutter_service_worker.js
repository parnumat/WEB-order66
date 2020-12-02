'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "feae0ffff3a8304e190111eb97ec3d3f",
".git/config": "5e9212289ca8850dc73593de72ec78bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "e2bc019363a6067b3170efc8dcbcce01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4491f233cff3757e9a545156eb8ae8a1",
".git/logs/refs/heads/main": "51a8ffa31fa4dd880be8f16367ed9f90",
".git/logs/refs/remotes/origin/main": "5494d6901e5b53ff458882e0f3d103cd",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/01/c7948f00ca48a89f6d9e62a3e7e4e261f05583": "0614de651e7365de8cbf9bd3765b0478",
".git/objects/02/6929abbfb810d3f5ea7418fee895848bcd5419": "61df1220cb81f2036a7f65686868a04c",
".git/objects/09/aa301928aed8fe7332954995640132e1d5e1b4": "f0bf76eaeb38df228887b36d7f625742",
".git/objects/0c/38496a7a4fd05d8c2b5dc488bf09805cf0cb25": "7a75dce485baa79d967d33e7fd096140",
".git/objects/0c/659b3d84aa43a4da3a1590304d54d8180cf9c6": "e108d899b81c63e4c2c6553b97e2a384",
".git/objects/10/12ebefd46fda03da94f6d080da77d2974dd199": "a407329948f87666f99380a0df90517d",
".git/objects/11/3f3f3120860f77bea662095a598940b560b89d": "0bd1534f6079d5a5870e83516f478ab1",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/1c/54330cbbe9434cd6622ea30ec23ca79e060089": "d49e3d91b7c700dc6d50f1cf8067fe0c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/66c40248c58d8c2ce799c28e860b5571423ad6": "fbb54e1af32f70caa7e92e9ce48c6b76",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/2d/9483f88a4896f4377f658bf7a7d0d9bd3c921c": "4fbf27fec41ef3979f962281f7ca297f",
".git/objects/2f/b07aa070f8bb88cbb5cfa739780d77d9bb5de4": "656b5e2c1fe34447d1066aebc92ab2cb",
".git/objects/2f/c5395100cc33da29b578d25703a1f58c16bb62": "8f9c52da48aec9da4cbe8bcaa59a3ad7",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/3b/264b46075e189588acad12d96337bb1018e8c5": "eee57ad7a6be5cc98ed7a486d578ecd3",
".git/objects/3b/58f54ac9d034fef4856b4d8e82694de7e76612": "9c89608bc80691c116ec715461e4836c",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/3d/376cfee38cd3ef8ad5fbe1769c6c3bac796bcd": "81d3ad5793ce1f92722509df95ffd25a",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/42/db8a3e9830a3f61a847a4897d928369b2ddaf4": "f1e20514547e8cc489dd823a3f8e7e50",
".git/objects/49/85de4495a2a108cf848c605e566f126e0d0e38": "860ddcdc4fb7711dfb87ae8100b19b74",
".git/objects/4e/177df025f8b92be51e2e13a576f809bd4eb126": "470000aabb5c3ff1ce81eda243bef3c7",
".git/objects/4e/24965c7a48c8a79a93941e6499d51800983e11": "eb59851f36dc30527ea009a3e5d5f9eb",
".git/objects/52/c7e8b40f9d16d467a08d3d5293336d5e9301ab": "8e259248c67a60aa0b0ee8417aa07a8a",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/56/5b9d43288ad58808806360085b7e8be3377b0b": "17de93e610b93011cb146043e7a60f0e",
".git/objects/57/ba5f2d9c3a7c6f9d814a7432ed727506a8eecb": "17ae128e13117010d6b5edb62e872bbf",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/68/bcc4191b81916c34be409f376652e9d0a44fa5": "66984883956abbee3fa98203408ab293",
".git/objects/6c/41aab2b8a51f7fc60b554231949f1352cb1b1f": "24099b04ca45fc2f1688b329268a7f4c",
".git/objects/78/47dcf433238999a36b8ca2d9fa7f6a4f136536": "2c7db6168738192851021eeb4c34a661",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/86/44bfd8761fa33a9833bc7c1842ff7d81d47653": "e4a225dc424deda1ae863cc57bb3e9c5",
".git/objects/86/70066f32afa4b6eb249a98666e7e0df1a5c371": "2e4e8bea431b9e34ce951d04e3d9885d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/95/e1b127e6004ca05961f8f5e8c2f1341da33186": "ba04dac0ee7df7c71e8ab6cee365c931",
".git/objects/96/cf1e979f14e456696c516ebce85b7b7e91cef9": "3831a44c086964d2885286e845c04332",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a8/07ac0665cbc43cc6dddeb875796a926e4798e7": "f5906c35d1c27afcea9696cbc865ed7b",
".git/objects/a8/20f430196ab8385bb6995e22dbe981f874dcc7": "3393c793c87cdff90643bdaad6c70813",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ae/a9a459b462b170386d51eed4d16d9022a4f364": "a6905ce45aea4402123552a06c679a46",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/1c1762d57a9dc22b82e635ed26fded934f62bc": "3dd9ddc0fb5ec1ec946004b278e8a09d",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/bd/dcda5311cd2e90e82549a74dc265c73aa7cb9d": "4024f5b3646abc4a61d2a2c98bfd33ee",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/d6/8f579d2c9de34149b865f0b40a0b882a82c77e": "c6150f0a14a67915dca7cff76430b2e2",
".git/objects/dc/0b1edd77dd31a0e082e32b01d8c9feba1d0f2e": "dd93b218635fee660e956020d5d90c9b",
".git/objects/de/09ea1678ba5215ffffa32f98981fa924ef6494": "d8e13de96a0fdc8f68e9efca674da7e9",
".git/objects/e2/b793df3cfa2e0a7ca996e71c489603c6f956ee": "05e16ea7c13781231e1474eaced99116",
".git/objects/e8/9aafa8fde4c6267558c06b5f6112db9ddda29c": "e481bd41787244595930c21210269e6f",
".git/objects/ec/abeef8b1f569c594828fde4dcee90e9361c828": "bfa780116af149bfd37887baa1d5bfd7",
".git/objects/ef/9e8e7548cc1cab68fb6652219b02fb53da6249": "44de1d6f52106c5da90a583830ff632e",
".git/objects/f0/00d239e7f748cbb8ae07cdf617d26b76451b21": "3919e5020849ab683c4f0eb325a18535",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/fd/02abe2f1fa2564ab2f61a28c276fa903d7ada8": "034af25a2b260d5c2b582a166018f037",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "f9136026ecf5fc8887b114a00d6fce34",
".git/refs/remotes/origin/main": "f9136026ecf5fc8887b114a00d6fce34",
"assets/AssetManifest.json": "9b2bb86c002fc324f6eeec91b7a8d5e8",
"assets/assets/fonts/Prompt-Bold.ttf": "befa1f27b3fbec48e74d58e8f7d61bb8",
"assets/assets/fonts/Prompt-Regular.ttf": "16b4ce72cf30da14d83d5e3981d3113c",
"assets/assets/fonts/Prompt-Thin.ttf": "ddcfbf895b67206d003167df83c7020a",
"assets/assets/icons/arrow-left-solid.svg": "713fe29d10415a51910d79f66c21d161",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/backgroundA.jpg": "940507946501ff4ed38ba15c2d95e4bf",
"assets/assets/images/backgroundB.jpg": "d802e622fad8b545d5656e037c7cac10",
"assets/assets/images/backgroundB.png": "5ce0b13a2f0b9db25d077cb52dd4d22c",
"assets/assets/images/backgroundC.jpg": "afb623438690bf772c6db9f5d5fa4df4",
"assets/assets/images/backgroundD.jpg": "a0da0198a068b6c7c9669d0aeeb3186b",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/BlackpinkA.png": "6c971c857800f51eaf59f90a8fd4b2fd",
"assets/assets/images/BlackpinkB.png": "569796d9b375bb8e4ec6e0b33b6263db",
"assets/assets/images/BlackpinkC.png": "e0b0120dc253b18eb5d56e50aadb81d7",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/images/person.png": "6ede1e25d66c72b4e0ca2e5459cfd8b1",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/showA.png": "1f4fe593f7141a51005f88cb7c981b7f",
"assets/assets/images/showB.png": "cc1c31b29d8c2f1d76ae14c87aa62b9c",
"assets/assets/images/showC.png": "eeaddb84906d587b0c9c5caebaef4055",
"assets/assets/images/showD.png": "80f0539db2ac97900af31f18ae90ff3c",
"assets/assets/images/showE.png": "9ad471f371cdde5fa417314b43b3f234",
"assets/assets/images/showF.png": "cd537e3200e1c09dee7356510ee6ea70",
"assets/assets/images/showG.png": "c09beebf42ba5223637e05543ad33d1d",
"assets/assets/images/showH.png": "5e337f2c421b8d2f2be68cd7ea3a4b3b",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/FontManifest.json": "4e1d5d7f1fa8a964e6e0f417fbda00ee",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "386dd261e643ec87d811b44a1d9e885a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4508c6ca996445ac76be5e66bf44195c",
"/": "4508c6ca996445ac76be5e66bf44195c",
"main.dart.js": "2023d51828a2f0fa134ccf3a80673d34",
"manifest.json": "f68dd4c9a1cccf007bcb520984b3c01a",
"version.json": "525a858fce84cf48acd737f015f076ba"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
