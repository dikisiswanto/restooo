if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,c,n)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return r;case"module":return o;default:return e(i)}})).then(e=>{const i=n(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-cefd6cdb"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.bundle.js",revision:"ab0f055d1146e6f0c43a9fc92015bfaf"},{url:"1.bundle.js",revision:"93f7502629f3a95e237d67f7a7bc5931"},{url:"2.bundle.js",revision:"2293df2babd09c9acf6cc6a359c1dc07"},{url:"5.bundle.js",revision:"06aa5d5a523b3875b538379b38b6dae0"},{url:"6.bundle.js",revision:"74076ef649ad38de6c2cf1114e22daa4"},{url:"7.bundle.js",revision:"e4f85e30fcd763577868ff2443d91520"},{url:"icons/icon-128x128.png",revision:"77957f10def58bf96e9aee607add17d7"},{url:"icons/icon-144x144.png",revision:"0a9e19bb2c4b71964b34ec1fa6cd557a"},{url:"icons/icon-152x152.png",revision:"9ed253e427f720e6fac270a1cc52a831"},{url:"icons/icon-192x192.png",revision:"c2054e1d3394bd63a94c3551a287cb5f"},{url:"icons/icon-384x384.png",revision:"754d89f568147fe0c4d3ecefb727f9a9"},{url:"icons/icon-512x512.png",revision:"69c56ce337a830f21400af883415e99b"},{url:"icons/icon-72x72.png",revision:"dfe981c12299452d0a95cb651153eb71"},{url:"icons/icon-96x96.png",revision:"540bd5c9e52078ce6614265c85694c65"},{url:"images/heros/hero-image-large.jpg",revision:"9fe4367a69ab1eef3b9f56cd0015863b"},{url:"images/heros/hero-image-small.jpg",revision:"7692af2dde43178f42c6af3e57a82a27"},{url:"images/heros/hero-image.jpg",revision:"dea71486aa4f2dcc4142de2b6cd1ca4c"},{url:"images/logo/restooo-logo.svg",revision:"c2bf21205c604a7513425f234a46e555"},{url:"images/placeholder.png",revision:"a209ce7d91afaead03bcbdb5cf6053b9"},{url:"index.html",revision:"a83c54124f91387b074368d3363d36df"},{url:"main.bundle.js",revision:"9c66c550c39cb94e54461dc793fb5be3"},{url:"manifest.json",revision:"907240e5f50e62bad4e1e746c0357235"},{url:"vendors~main.bundle.js",revision:"7835ccb4a2a445c67525e058bfa2d90d"}],{}),e.registerRoute(/https:\/\/dicoding-restaurant-api.el.r.appspot.com\/detail/,new e.NetworkFirst,"GET"),e.registerRoute(/https:\/\/dicoding-restaurant-api.el.r.appspot.com\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/https:\/\/fonts.gstatic.com\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/https:\/\/fonts.googleapis.com\//,new e.StaleWhileRevalidate,"GET")}));
