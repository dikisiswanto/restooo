(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){!function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t="undefined"!=typeof window?window:{},o=function(o,d,i){"use strict";var u,h,e,T={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=o.lazySizesConfig||o.lazysizesConfig||{},T)e in h||(h[e]=T[e]);if(!d||!d.getElementsByClassName)return{init:function(){},cfg:h,noSupport:!0};function p(e,n){a(e,n)||e.setAttribute("class",(e[x]("class")||"").trim()+" "+n)}function y(e,n){(n=a(e,n))&&e.setAttribute("class",(e[x]("class")||"").replace(n," "))}function N(n,t,e){var o=e?r:"removeEventListener";e&&N(n,t),$.forEach(function(e){n[o](e,t)})}function F(e,n){var t;!W&&(t=o.picturefill||h.pf)?(n&&n.src&&!e[x]("srcset")&&e.setAttribute("srcset",n.src),t({reevaluate:!0,elements:[e]})):n&&n.src&&(e.src=n.src)}var I,R,q,B,t,f=d.documentElement,W=o.HTMLPictureElement,r="addEventListener",x="getAttribute",n=o[r].bind(o),m=o.setTimeout,G=o.requestAnimationFrame||m,D=o.requestIdleCallback,U=/^picture$/i,$=["load","error","lazyincluded","_lazyloaded"],l={},Y=Array.prototype.forEach,a=function(e,n){return l[n]||(l[n]=new RegExp("(\\s|^)"+n+"(\\s|$)")),l[n].test(e[x]("class")||"")&&l[n]},g=function(e,n,t,o,r){var i=d.createEvent("Event");return(t=t||{}).instance=u,i.initEvent(n,!o,!r),i.detail=t,e.dispatchEvent(i),i},j=function(e,n){return(getComputedStyle(e,null)||{})[n]},J=function(e,n,t){for(t=t||e.offsetWidth;t<h.minSize&&n&&!e._lazysizesWidth;)t=n.offsetWidth,n=n.parentNode;return t},v=(B=[],t=q=[],K._lsFlush=Q,K);function Q(){var e=t;for(t=q.length?B:q,R=!(I=!0);e.length;)e.shift()();I=!1}function K(e,n){I&&!n?e.apply(this,arguments):(t.push(e),R||(R=!0,(d.hidden?m:G)(Q)))}function s(t,e){return e?function(){v(t)}:function(){var e=this,n=arguments;v(function(){t.apply(e,n)})}}function X(e){function n(){var e=i.now()-o;e<99?m(n,99-e):(D||r)(r)}var t,o,r=function(){t=null,e()};return function(){o=i.now(),t=t||m(n,99)}}se=/^img$/i,ce=/^iframe$/i,pe="onscroll"in o&&!/(gle|ing)bot/.test(navigator.userAgent),O=-1,ye=function(e){return(S=null==S?"hidden"==j(d.body,"visibility"):S)||!("hidden"==j(e.parentNode,"visibility")&&"hidden"==j(e,"visibility"))},oe=ge,ie=H=L=0,le=h.throttleDelay,c=h.ricTimeout,ae=D&&49<c?function(){D(je,{timeout:c}),c!==h.ricTimeout&&(c=h.ricTimeout)}:s(function(){m(je)},!0),de=s(ve),ue=function(e){de({target:e.target})},he=s(function(n,e,t,o,r){var i,l,a,s,c;(l=g(n,"lazybeforeunveil",e)).defaultPrevented||(o&&(t?p(n,h.autosizesClass):n.setAttribute("sizes",o)),t=n[x](h.srcsetAttr),o=n[x](h.srcAttr),r&&(i=(s=n.parentNode)&&U.test(s.nodeName||"")),a=e.firesLoad||"src"in n&&(t||o||i),l={target:n},p(n,h.loadingClass),a&&(clearTimeout(Z),Z=m(me,2500),N(n,ue,!0)),i&&Y.call(s.getElementsByTagName("source"),be),t?n.setAttribute("srcset",t):o&&!i&&(ce.test(n.nodeName)?(e=o,0==(c=(s=n).getAttribute("data-load-mode")||h.iframeLoadMode)?s.contentWindow.location.replace(e):1==c&&(s.src=e)):n.src=o),r&&(t||i)&&F(n,{src:o})),n._lazyRace&&delete n._lazyRace,y(n,h.lazyClass),v(function(){var e=n.complete&&1<n.naturalWidth;a&&!e||(e&&p(n,h.fastLoadedClass),ve(l),n._lazyCache=!0,m(function(){"_lazyCache"in n&&delete n._lazyCache},9)),"lazy"==n.loading&&H--},!0)}),fe=X(function(){h.loadMode=3,E()});var b,w,Z,_,ee,ne,te,M,z,A,k,S,oe,re,ie,le,c,ae,se,ce,pe,L,H,O,ye,E,de,ue,he,V,fe,xe={_:function(){ee=i.now(),u.elements=d.getElementsByClassName(h.lazyClass),b=d.getElementsByClassName(h.lazyClass+" "+h.preloadClass),n("scroll",E,!0),n("resize",E,!0),n("pageshow",function(e){var n;e.persisted&&(n=d.querySelectorAll("."+h.loadingClass)).length&&n.forEach&&G(function(){n.forEach(function(e){e.complete&&V(e)})})}),o.MutationObserver?new MutationObserver(E).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[r]("DOMNodeInserted",E,!0),f[r]("DOMAttrModified",E,!0),setInterval(E,999)),n("hashchange",E,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){d[r](e,E,!0)}),/d$|^c/.test(d.readyState)?C():(n("load",C),d[r]("DOMContentLoaded",E),m(C,2e4)),u.elements.length?(ge(),v._lsFlush()):E()},checkElems:E=function(e){var n;(e=!0===e)&&(c=33),re||(re=!0,(n=le-(i.now()-ie))<0&&(n=0),e||n<9?ae():m(ae,n))},unveil:V=function(e){var n,t,o,r;e._lazyRace||(!(r="auto"==(o=(t=se.test(e.nodeName))&&(e[x](h.sizesAttr)||e[x]("sizes"))))&&w||!t||!e[x]("src")&&!e.srcset||e.complete||a(e,h.errorClass)||!a(e,h.lazyClass))&&(n=g(e,"lazyunveilread").detail,r&&Ae.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,he(e,n,r,o,t))},_aLSL:we};function me(e){H--,e&&!(H<0)&&e.target||(H=0)}function ge(){var e,n,t,o,r,i,l,a,s,c,p,y=u.elements;if((_=h.loadMode)&&H<8&&(e=y.length)){for(n=0,O++;n<e;n++)if(y[n]&&!y[n]._lazyRace)if(!pe||u.prematureUnveil&&u.prematureUnveil(y[n]))V(y[n]);else if((l=y[n][x]("data-expand"))&&(r=+l)||(r=L),s||(s=!h.expand||h.expand<1?500<f.clientHeight&&500<f.clientWidth?500:370:h.expand,c=(u._defEx=s)*h.expFactor,p=h.hFac,S=null,L<c&&H<1&&2<O&&2<_&&!d.hidden?(L=c,O=0):L=1<_&&1<O&&H<6?s:0),a!==r&&(ne=innerWidth+r*p,te=innerHeight+r,i=-1*r,a=r),c=y[n].getBoundingClientRect(),(k=c.bottom)>=i&&(M=c.top)<=te&&(A=c.right)>=i*p&&(z=c.left)<=ne&&(k||A||z||M)&&(h.loadHidden||ye(y[n]))&&(w&&H<3&&!l&&(_<3||O<4)||function(e,n){var t,o=e,r=ye(e);for(M-=n,k+=n,z-=n,A+=n;r&&(o=o.offsetParent)&&o!=d.body&&o!=f;)(r=0<(j(o,"opacity")||1))&&"visible"!=j(o,"overflow")&&(t=o.getBoundingClientRect(),r=A>t.left&&z<t.right&&k>t.top-1&&M<t.bottom+1);return r}(y[n],r))){if(V(y[n]),o=!0,9<H)break}else!o&&w&&!t&&H<4&&O<4&&2<_&&(b[0]||h.preloadAfterLoad)&&(b[0]||!l&&(k||A||z||M||"auto"!=y[n][x](h.sizesAttr)))&&(t=b[0]||y[n]);t&&!o&&V(t)}}function je(){re=!1,ie=i.now(),oe()}function ve(e){var n=e.target;n._lazyCache?delete n._lazyCache:(me(e),p(n,h.loadedClass),y(n,h.loadingClass),N(n,ue),g(n,"lazyloaded"))}function be(e){var n,t=e[x](h.srcsetAttr);(n=h.customMedia[e[x]("data-media")||e[x]("media")])&&e.setAttribute("media",n),t&&e.setAttribute("srcset",t)}function we(){3==h.loadMode&&(h.loadMode=2),fe()}function C(){w||(i.now()-ee<999?m(C,999):(w=!0,h.loadMode=3,E(),n("scroll",we,!0)))}Me=s(function(e,n,t,o){var r,i,l;if(e._lazysizesWidth=o,e.setAttribute("sizes",o+="px"),U.test(n.nodeName||""))for(i=0,l=(r=n.getElementsByTagName("source")).length;i<l;i++)r[i].setAttribute("sizes",o);t.detail.dataAttr||F(e,t.detail)});var _e,Me,ze,Ae={_:function(){_e=d.getElementsByClassName(h.autosizesClass),n("resize",ze)},checkElems:ze=X(function(){var e,n=_e.length;if(n)for(e=0;e<n;e++)ke(_e[e])}),updateElem:ke};function ke(e,n,t){var o=e.parentNode;o&&(t=J(e,o,t),(n=g(e,"lazybeforesizes",{width:t,dataAttr:!!n})).defaultPrevented||(t=n.detail.width)&&t!==e._lazysizesWidth&&Me(e,o,n,t))}function P(){!P.i&&d.getElementsByClassName&&(P.i=!0,Ae._(),xe._())}return m(function(){h.init&&P()}),u={cfg:h,autoSizer:Ae,loader:xe,init:P,uP:F,aC:p,rC:y,hC:a,fire:g,gW:J,rAF:v}};o=o(t,t.document,Date),t.lazySizes=o,"object"==n(e)&&e.exports&&(e.exports=o)}.call(this,t(0)(e))},,function(e,n,r){"use strict";var t,o,a=function(){return t=void 0===t?Boolean(window&&document&&document.all&&!window.atob):t},i=(o={},function(e){if(void 0===o[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}o[e]=n}return o[e]}),c=[];function p(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],l=n.base?i[0]+n.base:i[0],a=t[l]||0,s="".concat(l," ").concat(a),l=(t[l]=a+1,p(s)),a={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(a)):c.push({identifier:s,updater:function(n,e){var t,o,r;{var i;r=e.singleton?(i=f++,t=h=h||y(e),o=u.bind(null,t,i,!1),u.bind(null,t,i,!0)):(t=y(e),o=function(e,n,t){var o=t.css,r=t.media,t=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media");t&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */"));if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,t,e),function(){var e=t;null!==e.parentNode&&e.parentNode.removeChild(e)})}return o(n),function(e){e?e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap||o(n=e):r()}}(a,n),references:1}),o.push(s)}return o}function y(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0!==t.nonce||(o=r.nc)&&(t.nonce=o),Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])}),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}l=[];var l,d=function(e,n){return l[e]=n,l.filter(Boolean).join("\n")};function u(e,n,t,o){var t=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;e.styleSheet?e.styleSheet.cssText=d(n,t):(o=document.createTextNode(t),(t=e.childNodes)[n]&&e.removeChild(t[n]),t.length?e.insertBefore(o,t[n]):e.appendChild(o))}var h=null,f=0;e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=a());var l=s(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<l.length;n++){var t=p(l[n]);c[t].references--}for(var e=s(e,i),o=0;o<l.length;o++){var r=p(l[o]);0===c[r].references&&(c[r].updater(),c.splice(r,1))}l=e}}}},function(e,n,t){"use strict";e.exports=function(t){var s=[];return s.toString=function(){return this.map(function(e){var n=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa)return e=function(e){e=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(e," */")}(o),n=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}),[t].concat(n).concat([e]).join("\n");return[t].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n}).join("")},s.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);t&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),s.push(a))}},s}},function(e,t,n){!function(e){var n;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n=function(){return t={"./dist/icons.json":
/*!*************************!*\
        !*** ./dist/icons.json ***!
        \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
function(e){e.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
        !*** ./node_modules/classnames/dedupe.js ***!
        \*******************************************/
/*! no static exports found */
function(n,t,e){var o;
/*!
        Copyright (c) 2016 Jed Watson.
        Licensed under the MIT License (MIT), see
        http://jedwatson.github.io/classnames
        */
!function(){"use strict";function e(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var o,r=new l,i=(x(r,n),[]);for(o in r)r[o]&&i.push(o);return i.join(" ")}var h,f;l.prototype=Object.create(null),h={}.hasOwnProperty,f=/\s+/;function l(){}function x(e,n){for(var t=n.length,o=0;o<t;++o){y=u=d=p=c=s=a=r=l=i=void 0;var r,i=e,l=n[o];if(l)if("string"===(r=m(l)))for(var a=i,s=l.split(f),c=s.length,p=0;p<c;++p)a[s[p]]=!0;else if(Array.isArray(l))x(i,l);else if("object"!==r)"number"===r&&(i[l]=!0);else{var y,d=i,u=l;for(y in u)h.call(u,y)&&(d[y]=!!u[y])}}}void 0!==n&&n.exports?n.exports=e:void 0!==(o=function(){return e}.apply(t,[]))&&(n.exports=o)}()},"./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/es/array/from.js ***!
        \***********************************************/
/*! no static exports found */
function(e,n,t){t(
/*! ../../modules/es.string.iterator */
"./node_modules/core-js/modules/es.string.iterator.js"),t(
/*! ../../modules/es.array.from */
"./node_modules/core-js/modules/es.array.from.js");t=t(
/*! ../../internals/path */
"./node_modules/core-js/internals/path.js");e.exports=t.Array.from},"./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/a-function.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/an-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");e.exports=function(e){if(o(e))return e;throw TypeError(String(e)+" is not an object")}},"./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/array-from.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var y=t(
/*! ../internals/bind-context */
"./node_modules/core-js/internals/bind-context.js"),d=t(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),u=t(
/*! ../internals/call-with-safe-iteration-closing */
"./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),h=t(
/*! ../internals/is-array-iterator-method */
"./node_modules/core-js/internals/is-array-iterator-method.js"),f=t(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),x=t(
/*! ../internals/create-property */
"./node_modules/core-js/internals/create-property.js"),m=t(
/*! ../internals/get-iterator-method */
"./node_modules/core-js/internals/get-iterator-method.js");e.exports=function(e){var n,t,o,r,i=d(e),e="function"==typeof this?this:Array,l=arguments.length,a=1<l?arguments[1]:void 0,s=void 0!==a,c=0,p=m(i);if(s&&(a=y(a,2<l?arguments[2]:void 0,2)),null==p||e==Array&&h(p))for(t=new e(n=f(i.length));c<n;c++)x(t,c,s?a(i[c],c):i[c]);else for(r=p.call(i),t=new e;!(o=r.next()).done;c++)x(t,c,s?u(r,a,[o.value,c],!0):o.value);return t.length=c,t}},"./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/array-includes.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var s=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),c=t(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),p=t(
/*! ../internals/to-absolute-index */
"./node_modules/core-js/internals/to-absolute-index.js");e.exports=function(a){return function(e,n,t){var o,r=s(e),i=c(r.length),l=p(t,i);if(a&&n!=n){for(;l<i;)if((o=r[l++])!=o)return!0}else for(;l<i;l++)if((a||l in r)&&r[l]===n)return a||l||0;return!a&&-1}}},"./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/internals/bind-context.js ***!
        \********************************************************/
/*! no static exports found */
function(e,n,t){var i=t(
/*! ../internals/a-function */
"./node_modules/core-js/internals/a-function.js");e.exports=function(o,r,e){if(i(o),void 0===r)return o;switch(e){case 0:return function(){return o.call(r)};case 1:return function(e){return o.call(r,e)};case 2:return function(e,n){return o.call(r,e,n)};case 3:return function(e,n,t){return o.call(r,e,n,t)}}return function(){return o.apply(r,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
        !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
        \****************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");e.exports=function(n,e,t,o){try{return o?e(r(t)[0],t[1]):e(t)}catch(e){o=n.return;throw void 0!==o&&r(o.call(n)),e}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
        !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
        \**************************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator"),i=!1;try{var o=0,l={next:function(){return{done:!!o++}},return:function(){i=!0}};l[r]=function(){return this},Array.from(l,function(){throw 2})}catch(e){}e.exports=function(e,n){if(!n&&!i)return!1;var t=!1;try{var o={};o[r]=function(){return{next:function(){return{done:t=!0}}}},e(o)}catch(e){}return t}},"./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/classof-raw.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
        !*** ./node_modules/core-js/internals/classof.js ***!
        \***************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),r=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),i="Arguments"==o(function(){return arguments}());e.exports=function(e){var n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,n){try{return e[n]}catch(e){}}(e=Object(e),r))?n:i?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},"./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
        \***********************************************************************/
/*! no static exports found */
function(e,n,t){var a=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),s=t(
/*! ../internals/own-keys */
"./node_modules/core-js/internals/own-keys.js"),c=t(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js"),p=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js");e.exports=function(e,n){for(var t=s(n),o=p.f,r=c.f,i=0;i<t.length;i++){var l=t[i];a(e,l)||o(e,l,r(n,l))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n,t){t=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");e.exports=!t(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
        !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
        \***********************************************************************/
/*! no static exports found */
function(e,n,t){"use strict";function o(){return this}var r=t(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,i=t(
/*! ../internals/object-create */
"./node_modules/core-js/internals/object-create.js"),l=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),a=t(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),s=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js");e.exports=function(e,n,t){n+=" Iterator";return e.prototype=i(r,{next:l(1,t)}),a(e,n,!1,!0),s[n]=o,e}},"./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
        !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
        \**********************************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},"./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/create-property.js ***!
        \***********************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var o=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),r=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");e.exports=function(e,n,t){n=o(n);n in e?r.f(e,n,i(0,t)):e[n]=t}},"./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/define-iterator.js ***!
        \***********************************************************/
/*! no static exports found */
function(e,n,t){"use strict";function f(){return this}var x=t(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),m=t(
/*! ../internals/create-iterator-constructor */
"./node_modules/core-js/internals/create-iterator-constructor.js"),g=t(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),j=t(
/*! ../internals/object-set-prototype-of */
"./node_modules/core-js/internals/object-set-prototype-of.js"),v=t(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),b=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),w=t(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),o=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),_=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),M=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),t=t(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js"),z=t.IteratorPrototype,A=t.BUGGY_SAFARI_ITERATORS,k=o("iterator"),S="values",L="entries";e.exports=function(e,n,t,o,r,i,l){m(t,n,o);function a(e){if(e===r&&u)return u;if(!A&&e in y)return y[e];switch(e){case"keys":case S:case L:return function(){return new t(this,e)}}return function(){return new t(this)}}var s,c,o=n+" Iterator",p=!1,y=e.prototype,d=y[k]||y["@@iterator"]||r&&y[r],u=!A&&d||a(r),h="Array"==n&&y.entries||d;if(h&&(h=g(h.call(new e)),z!==Object.prototype&&h.next&&(_||g(h)===z||(j?j(h,z):"function"!=typeof h[k]&&b(h,k,f)),v(h,o,!0,!0),_&&(M[o]=f))),r==S&&d&&d.name!==S&&(p=!0,u=function(){return d.call(this)}),_&&!l||y[k]===u||b(y,k,u),M[n]=u,r)if(s={values:a(S),keys:i?u:a("keys"),entries:a(L)},l)for(c in s)!A&&!p&&c in y||w(y,c,s[c]);else x({target:n,proto:!0,forced:A||p},s);return s}},"./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/descriptors.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n,t){t=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");e.exports=!t(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/document-create-element.js ***!
        \*******************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),t=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),r=o.document,i=t(r)&&t(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
        \*********************************************************/
/*! no static exports found */
function(e,n){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/export.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){var c=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),p=t(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,y=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),d=t(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),u=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),h=t(
/*! ../internals/copy-constructor-properties */
"./node_modules/core-js/internals/copy-constructor-properties.js"),f=t(
/*! ../internals/is-forced */
"./node_modules/core-js/internals/is-forced.js");e.exports=function(e,n){var t,o,r,i=e.target,l=e.global,a=e.stat,s=l?c:a?c[i]||u(i,{}):(c[i]||{}).prototype;if(s)for(t in n){if(o=n[t],r=e.noTargetGet?(r=p(s,t))&&r.value:s[t],!f(l?t:i+(a?".":"#")+t,e.forced)&&void 0!==r){if(m(o)===m(r))continue;h(o,r)}(e.sham||r&&r.sham)&&y(o,"sham",!0),d(s,t,o,e)}}},"./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
        !*** ./node_modules/core-js/internals/fails.js ***!
        \*************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
        !*** ./node_modules/core-js/internals/function-to-string.js ***!
        \**************************************************************/
/*! no static exports found */
function(e,n,t){t=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js");e.exports=t("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
        !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
        \***************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/classof */
"./node_modules/core-js/internals/classof.js"),r=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator");e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||r[o(e)]}},"./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/global.js ***!
        \**************************************************/
/*! no static exports found */
function(o,e,n){!function(e){function n(e){return e&&e.Math==Math&&e}var t="object";o.exports=n(("undefined"==typeof globalThis?"undefined":m(globalThis))==t&&globalThis)||n(("undefined"==typeof window?"undefined":m(window))==t&&window)||n(("undefined"==typeof self?"undefined":m(self))==t&&self)||n(m(e)==t&&e)||Function("return this")()}.call(this,n(
/*! ./../../webpack/buildin/global.js */
"./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/internals/has.js ***!
        \***********************************************/
/*! no static exports found */
function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},"./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/hidden-keys.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n){e.exports={}},"./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/hide.js ***!
        \************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");e.exports=o?function(e,n,t){return r.f(e,n,i(1,t))}:function(e,n,t){return e[n]=t,e}},"./node_modules/core-js/internals/html.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/html.js ***!
        \************************************************/
/*! no static exports found */
function(e,n,t){t=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js").document;e.exports=t&&t.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),i=t(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js");e.exports=!o&&!r(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/indexed-object.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),r=t(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),i="".split;e.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==r(e)?i.call(e,""):Object(e)}:Object},"./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/internal-state.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){var o,r,i,l,a,s,c,p,y=t(
/*! ../internals/native-weak-map */
"./node_modules/core-js/internals/native-weak-map.js"),d=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),u=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),h=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),f=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),x=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),t=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),d=d.WeakMap;c=y?(o=new d,r=o.get,i=o.has,l=o.set,a=function(e,n){return l.call(o,e,n),n},s=function(e){return r.call(o,e)||{}},function(e){return i.call(o,e)}):(t[p=x("state")]=!0,a=function(e,n){return h(e,p,n),n},s=function(e){return f(e,p)?e[p]:{}},function(e){return f(e,p)}),e.exports={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(n){return function(e){if(u(e)&&(e=s(e)).type===n)return e;throw TypeError("Incompatible receiver, "+n+" required")}}}},"./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),r=t(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),i=o("iterator"),l=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||l[i]===e)}},"./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-forced.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){function o(e,n){return(e=a[l(e)])==c||e!=s&&("function"==typeof n?r(n):!!n)}var r=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),i=/#|\.prototype\./,l=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=o.data={},s=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},"./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/is-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){return"object"===m(e)?null!==e:"function"==typeof e}},"./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
        !*** ./node_modules/core-js/internals/is-pure.js ***!
        \***************************************************/
/*! no static exports found */
function(e,n){e.exports=!1},"./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
        !*** ./node_modules/core-js/internals/iterators-core.js ***!
        \**********************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var o,r,i=t(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),l=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),a=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),s=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),t=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),s=s("iterator"),c=!1;[].keys&&("next"in(r=[].keys())?(i=i(i(r)))!==Object.prototype&&(o=i):c=!0),null==o&&(o={}),t||a(o,s)||l(o,s,function(){return this}),e.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:c}},"./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/iterators.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n){e.exports={}},"./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/native-symbol.js ***!
        \*********************************************************/
/*! no static exports found */
function(e,n,t){t=t(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");e.exports=!!Object.getOwnPropertySymbols&&!t(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
        !*** ./node_modules/core-js/internals/native-weak-map.js ***!
        \***********************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),t=t(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),o=o.WeakMap;e.exports="function"==typeof o&&/native code/.test(t.call(o))},"./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
        !*** ./node_modules/core-js/internals/object-create.js ***!
        \*********************************************************/
/*! no static exports found */
function(e,n,t){function o(){}var r=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),i=t(
/*! ../internals/object-define-properties */
"./node_modules/core-js/internals/object-define-properties.js"),l=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js"),a=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),s=t(
/*! ../internals/html */
"./node_modules/core-js/internals/html.js"),c=t(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js"),p=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),y="prototype",d=function(){var e=c("iframe"),n=l.length;for(e.style.display="none",s.appendChild(e),e.src=String("javascript:"),(e=e.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),d=e.F;n--;)delete d[y][l[n]];return d()};e.exports=Object.create||function(e,n){var t;return null!==e?(o[y]=r(e),t=new o,o[y]=null,t[p]=e):t=d(),void 0===n?t:i(t,n)},a[p]=!0},"./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-properties.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),l=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),a=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),s=t(
/*! ../internals/object-keys */
"./node_modules/core-js/internals/object-keys.js");e.exports=o?Object.defineProperties:function(e,n){a(e);for(var t,o=s(n),r=o.length,i=0;i<r;)l.f(e,t=o[i++],n[t]);return e}},"./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-define-property.js ***!
        \******************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=t(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),i=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),a=Object.defineProperty;n.f=o?a:function(e,n,t){if(i(e),n=l(n,!0),i(t),r)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
        \******************************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=t(
/*! ../internals/object-property-is-enumerable */
"./node_modules/core-js/internals/object-property-is-enumerable.js"),i=t(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),l=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),a=t(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),s=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),c=t(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),p=Object.getOwnPropertyDescriptor;n.f=o?p:function(e,n){if(e=l(e),n=a(n,!0),c)try{return p(e,n)}catch(e){}if(s(e,n))return i(!r.f.call(e,n),e[n])}},"./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
        \*************************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),r=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
        \***************************************************************************/
/*! no static exports found */
function(e,n){n.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
        \*******************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=t(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),i=t(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),t=t(
/*! ../internals/correct-prototype-getter */
"./node_modules/core-js/internals/correct-prototype-getter.js"),l=i("IE_PROTO"),a=Object.prototype;e.exports=t?Object.getPrototypeOf:function(e){return e=r(e),o(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},"./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
        \****************************************************************/
/*! no static exports found */
function(e,n,t){var l=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),a=t(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),o=t(
/*! ../internals/array-includes */
"./node_modules/core-js/internals/array-includes.js"),s=t(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),c=o(!1);e.exports=function(e,n){var t,o=a(e),r=0,i=[];for(t in o)!l(s,t)&&l(o,t)&&i.push(t);for(;n.length>r;)!l(o,t=n[r++])||~c(i,t)||i.push(t);return i}},"./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/internals/object-keys.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),r=t(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js");e.exports=Object.keys||function(e){return o(e,r)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
        !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
        \*************************************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);n.f=i?function(e){e=r(this,e);return!!e&&e.enumerable}:o},"./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
        !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
        \*******************************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/validate-set-prototype-of-arguments */
"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,o=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),o=e instanceof Array}catch(e){}return function(e,n){return r(e,n),o?t.call(e,n):e.__proto__=n,e}}():void 0)},"./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/internals/own-keys.js ***!
        \****************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=t(
/*! ../internals/object-get-own-property-names */
"./node_modules/core-js/internals/object-get-own-property-names.js"),i=t(
/*! ../internals/object-get-own-property-symbols */
"./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),t=o.Reflect;e.exports=t&&t.ownKeys||function(e){var n=r.f(l(e)),t=i.f;return t?n.concat(t(e)):n}},"./node_modules/core-js/internals/path.js":
/*!************************************************!*\
        !*** ./node_modules/core-js/internals/path.js ***!
        \************************************************/
/*! no static exports found */
function(e,n,t){e.exports=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
        !*** ./node_modules/core-js/internals/redefine.js ***!
        \****************************************************/
/*! no static exports found */
function(e,n,t){var l=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),o=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),a=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),s=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),c=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),r=t(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),t=t(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),i=t.get,p=t.enforce,y=String(r).split("toString");o("inspectSource",function(e){return r.call(e)}),(e.exports=function(e,n,t,o){var r=!!o&&!!o.unsafe,i=!!o&&!!o.enumerable,o=!!o&&!!o.noTargetGet;"function"==typeof t&&("string"!=typeof n||s(t,"name")||a(t,"name",n),p(t).source=y.join("string"==typeof n?n:"")),e===l?i?e[n]=t:c(n,t):(r?!o&&e[n]&&(i=!0):delete e[n],i?e[n]=t:a(e,n,t))})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||r.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
        !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
        \********************************************************************/
/*! no static exports found */
function(e,n){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/set-global.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=t(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js");e.exports=function(n,t){try{r(o,n,t)}catch(e){o[n]=t}return t}},"./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js").f,r=t(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),i=t(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");e.exports=function(e,n,t){e&&!r(e=t?e:e.prototype,i)&&o(e,i,{configurable:!0,value:n})}},"./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/shared-key.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),r=t(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),i=o("keys");e.exports=function(e){return i[e]||(i[e]=r(e))}},"./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
        !*** ./node_modules/core-js/internals/shared.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=t(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),t=t(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),i="__core-js_shared__",l=o[i]||r(i,{});(e.exports=function(e,n){return l[e]||(l[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:t?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/string-at.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var i=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),l=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e,n,t){var o,e=String(l(e)),n=i(n),r=e.length;return n<0||r<=n?t?"":void 0:(o=e.charCodeAt(n))<55296||56319<o||n+1===r||(r=e.charCodeAt(n+1))<56320||57343<r?t?e.charAt(n):o:t?e.slice(n,n+2):r-56320+(o-55296<<10)+65536}},"./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=Math.max,i=Math.min;e.exports=function(e,n){e=o(e);return e<0?r(e+n,0):i(e,n)}},"./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/indexed-object */
"./node_modules/core-js/internals/indexed-object.js"),r=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e){return o(r(e))}},"./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
        !*** ./node_modules/core-js/internals/to-integer.js ***!
        \******************************************************/
/*! no static exports found */
function(e,n){var t=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?o:t)(e)}},"./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-length.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=Math.min;e.exports=function(e){return 0<e?r(o(e),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
        !*** ./node_modules/core-js/internals/to-object.js ***!
        \*****************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");e.exports=function(e){return Object(o(e))}},"./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
        !*** ./node_modules/core-js/internals/to-primitive.js ***!
        \********************************************************/
/*! no static exports found */
function(e,n,t){var r=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");e.exports=function(e,n){if(!r(e))return e;var t,o;if(n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;if("function"==typeof(t=e.valueOf)&&!r(o=t.call(e)))return o;if(n||"function"!=typeof(t=e.toString)||r(o=t.call(e)))throw TypeError("Can't convert object to primitive value");return o}},"./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
        !*** ./node_modules/core-js/internals/uid.js ***!
        \***********************************************/
/*! no static exports found */
function(e,n){var t=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+o).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
        !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
        \*******************************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),r=t(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");e.exports=function(e,n){if(r(e),!o(n)&&null!==n)throw TypeError("Can't set "+String(n)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
        !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
        \*************************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=t(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),i=t(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),l=t(
/*! ../internals/native-symbol */
"./node_modules/core-js/internals/native-symbol.js"),a=o.Symbol,s=r("wks");e.exports=function(e){return s[e]||(s[e]=l&&a[e]||(l?a:i)("Symbol."+e))}},"./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
        !*** ./node_modules/core-js/modules/es.array.from.js ***!
        \*******************************************************/
/*! no static exports found */
function(e,n,t){var o=t(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),r=t(
/*! ../internals/array-from */
"./node_modules/core-js/internals/array-from.js");o({target:"Array",stat:!0,forced:!t(
/*! ../internals/check-correctness-of-iteration */
"./node_modules/core-js/internals/check-correctness-of-iteration.js")(function(e){Array.from(e)})},{from:r})},"./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
        !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
        \************************************************************/
/*! no static exports found */
function(e,n,t){"use strict";var o=t(
/*! ../internals/string-at */
"./node_modules/core-js/internals/string-at.js"),r=t(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),t=t(
/*! ../internals/define-iterator */
"./node_modules/core-js/internals/define-iterator.js"),i="String Iterator",l=r.set,a=r.getterFor(i);t(String,"String",function(e){l(this,{type:i,string:String(e),index:0})},function(){var e=a(this),n=e.string,t=e.index;return t>=n.length?{value:void 0,done:!0}:(n=o(n,t,!0),e.index+=n.length,{value:n,done:!1})})},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
/*! no static exports found */
function(e,n){var t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":m(window))&&(t=window)}e.exports=t},"./src/default-attrs.json":
/*!********************************!*\
        !*** ./src/default-attrs.json ***!
        \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
function(e){e.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":
/*!*********************!*\
        !*** ./src/icon.js ***!
        \*********************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t,o=arguments[n];for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},o=function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e};function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=s(t(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),a=s(t(
/*! ./default-attrs.json */
"./src/default-attrs.json"));function s(e){return e&&e.__esModule?e:{default:e}}o(c,[{key:"toSvg",value:function(){var n,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=i({},this.attrs,e,{class:(0,l.default)(this.attrs.class,e.class)});return"<svg "+(n=e,Object.keys(n).map(function(e){return e+'="'+n[e]+'"'}).join(" "))+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]);t=c;function c(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],o=this,r=c;if(!(o instanceof r))throw new TypeError("Cannot call a class as a function");this.name=e,this.contents=n,this.tags=t,this.attrs=i({},a.default,{class:"feather feather-"+e})}n.default=t},"./src/icons.js":
/*!**********************!*\
        !*** ./src/icons.js ***!
        \**********************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=l(t(
/*! ./icon */
"./src/icon.js")),r=l(t(
/*! ../dist/icons.json */
"./dist/icons.json")),i=l(t(
/*! ./tags.json */
"./src/tags.json"));function l(e){return e&&e.__esModule?e:{default:e}}n.default=Object.keys(r.default).map(function(e){return new o.default(e,r.default[e],i.default[e])}).reduce(function(e,n){return e[n.name]=n,e},{})},"./src/index.js":
/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
/*! no static exports found */
function(e,n,t){"use strict";var o=i(t(
/*! ./icons */
"./src/icons.js")),r=i(t(
/*! ./to-svg */
"./src/to-svg.js")),t=i(t(
/*! ./replace */
"./src/replace.js"));function i(e){return e&&e.__esModule?e:{default:e}}e.exports={icons:o.default,toSvg:r.default,replace:t.default}},"./src/replace.js":
/*!************************!*\
        !*** ./src/replace.js ***!
        \************************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t,o=arguments[n];for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},i=o(t(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),l=o(t(
/*! ./icons */
"./src/icons.js"));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof document)throw new Error("`feather.replace()` only works in a browser environment.");var e=document.querySelectorAll("[data-feather]");Array.from(e).forEach(function(e){return function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=function(e){return Array.from(e.attributes).reduce(function(e,n){return e[n.name]=n.value,e},{})}(e),o=t["data-feather"],o=(delete t["data-feather"],l.default[o].toSvg(r({},n,t,{class:(0,i.default)(n.class,t.class)}))),n=(new DOMParser).parseFromString(o,"image/svg+xml").querySelector("svg");e.parentNode.replaceChild(n,e)}(e,n)})}},"./src/tags.json":
/*!***********************!*\
        !*** ./src/tags.json ***!
        \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
function(e){e.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":
/*!***********************!*\
        !*** ./src/to-svg.js ***!
        \***********************/
/*! no static exports found */
function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=t(
/*! ./icons */
"./src/icons.js"),o=(t=t)&&t.__esModule?t:{default:t};n.default=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!e)throw new Error("The required `key` (icon name) parameter is missing.");if(o.default[e])return o.default[e].toSvg(n);throw new Error("No icon matching '"+e+"'. See the complete list of icons at https://feathericons.com")}},0:
/*!**************************************************!*\
        !*** multi core-js/es/array/from ./src/index.js ***!
        \**************************************************/
/*! no static exports found */
function(e,n,t){t(
/*! core-js/es/array/from */
"./node_modules/core-js/es/array/from.js"),e.exports=t(
/*! /home/runner/work/feather/feather/src/index.js */
"./src/index.js")}},r={},o.m=t,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0);function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var t,r},"object"===m(t)&&"object"===m(e)?e.exports=n():void 0!==(n="function"==typeof(n=n)?n.apply(t,[]):n)&&(e.exports=n)}.call(this,n(0)(e))},function(e,n,t){!function(n){function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n=function(l){"use strict";var s,e=Object.prototype,c=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",t=n.asyncIterator||"@@asyncIterator",r=n.toStringTag||"@@toStringTag";function i(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{i({},"")}catch(e){i=function(e,n,t){return e[n]=t}}function a(e,n,t,o){var r,i,l,a,n=n&&n.prototype instanceof x?n:x,n=Object.create(n.prototype),o=new z(o||[]);return n._invoke=(r=e,i=t,l=o,a=y,function(e,n){if(a===u)throw new Error("Generator is already running");if(a===h){if("throw"===e)throw n;return k()}for(l.method=e,l.arg=n;;){var t=l.delegate;if(t){t=function e(n,t){var o=n.iterator[t.method];if(o===s){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=s,e(n,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}o=p(o,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;o=o.arg;if(!o)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f;{if(!o.done)return o;t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=s)}t.delegate=null;return f}(t,l);if(t){if(t===f)continue;return t}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(a===y)throw a=h,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);a=u;t=p(r,i,l);if("normal"===t.type){if(a=l.done?h:d,t.arg!==f)return{value:t.arg,done:l.done}}else"throw"===t.type&&(a=h,l.method="throw",l.arg=t.arg)}}),n}function p(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}l.wrap=a;var y="suspendedStart",d="suspendedYield",u="executing",h="completed",f={};function x(){}function m(){}function g(){}var n={},j=(i(n,o,function(){return this}),Object.getPrototypeOf),j=j&&j(j(A([]))),v=(j&&j!==e&&c.call(j,o)&&(n=j),g.prototype=x.prototype=Object.create(n));function b(e){["next","throw","return"].forEach(function(n){i(e,n,function(e){return this._invoke(n,e)})})}function w(l,a){var n;this._invoke=function(t,o){function e(){return new a(function(e,n){!function n(e,t,o,r){var i,e=p(l[e],l,t);if("throw"!==e.type)return(t=(i=e.arg).value)&&"object"===S(t)&&c.call(t,"__await")?a.resolve(t.__await).then(function(e){n("next",e,o,r)},function(e){n("throw",e,o,r)}):a.resolve(t).then(function(e){i.value=e,o(i)},function(e){return n("throw",e,o,r)});r(e.arg)}(t,o,e,n)})}return n=n?n.then(e,e):e()}}function _(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function M(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function A(n){if(n){var t,e=n[o];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length))return t=-1,(e=function e(){for(;++t<n.length;)if(c.call(n,t))return e.value=n[t],e.done=!1,e;return e.value=s,e.done=!0,e}).next=e}return{next:k}}function k(){return{value:s,done:!0}}return i(v,"constructor",m.prototype=g),i(g,"constructor",m),m.displayName=i(g,r,"GeneratorFunction"),l.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,i(e,r,"GeneratorFunction")),e.prototype=Object.create(v),e},l.awrap=function(e){return{__await:e}},b(w.prototype),i(w.prototype,t,function(){return this}),l.AsyncIterator=w,l.async=function(e,n,t,o,r){void 0===r&&(r=Promise);var i=new w(a(e,n,t,o),r);return l.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(v),i(v,r,"Generator"),i(v,o,function(){return this}),i(v,"toString",function(){return"[object Generator]"}),l.keys=function(t){var e,o=[];for(e in t)o.push(e);return o.reverse(),function e(){for(;o.length;){var n=o.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},l.values=A,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&c.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=s)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function e(e,n){return i.type="throw",i.arg=t,o.next=e,n&&(o.method="next",o.arg=s),!!n}for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n],i=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var l=c.call(r,"catchLoc"),a=c.call(r,"finallyLoc");if(l&&a){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&c.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}var i=(r=r&&("break"===e||"continue"===e)&&r.tryLoc<=n&&n<=r.finallyLoc?null:r)?r.completion:{};return i.type=e,i.arg=n,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),f},finish:function(e){for(var n=this.tryEntries.length-1;0<=n;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),M(t),f}},catch:function(e){for(var n=this.tryEntries.length-1;0<=n;--n){var t,o,r=this.tryEntries[n];if(r.tryLoc===e)return"throw"===(t=r.completion).type&&(o=t.arg,M(r)),o}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:A(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=s),f}},l}("object"===S(n)?n.exports:{});try{regeneratorRuntime=n}catch(e){"object"===("undefined"==typeof globalThis?"undefined":S(globalThis))?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}.call(this,t(0)(e))},function(e,r,i){!function(e){var n,t;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n="undefined"!=typeof window?window:0,t=function(s,e,t){"use strict";var c,l,a,p,y,d;s.addEventListener&&(c=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,l=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,a=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,p=/^picture$/i,y=t.cfg,d={getParent:function(e,n){var t=e,o=e.parentNode;return n&&"prev"!=n||!o||!p.test(o.nodeName||"")||(o=o.parentNode),t="self"!=n?"prev"==n?e.previousElementSibling:n&&(o.closest||s.jQuery)&&(o.closest?o.closest(n):jQuery(o).closest(n)[0])||o:t},getFit:function(e){var n,t,o=getComputedStyle(e,null)||{},r=o.content||o.fontFamily,i={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!i.fit&&r&&(n=r.match(l))&&(i.fit=n[1]),i.fit?(!(t=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&r&&(n=r.match(a))&&(t=n[1]),i.parent=d.getParent(e,t)):i.fit=o.objectFit,i},getImageRatio:function(e){for(var n,t,o,r,i=e.parentNode,l=i&&p.test(i.nodeName||"")?i.querySelectorAll("source, img"):[e],a=0;a<l.length;a++)if(r=(e=l[a]).getAttribute(y.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",t=e._lsMedia||e.getAttribute("media"),t=y.customMedia[e.getAttribute("data-media")||t]||t,r&&(!t||(s.matchMedia&&matchMedia(t)||{}).matches)){(n=parseFloat(e.getAttribute("data-aspectratio")))||(r=(t=r.match(c))?"w"==t[2]?(o=t[1],t[3]):(o=t[3],t[1]):(o=e.getAttribute("width"),e.getAttribute("height")),n=o/r);break}return n},calculateSize:function(e,n){var t,o=this.getFit(e),r=o.fit,o=o.parent;return"width"==r||("contain"==r||"cover"==r)&&(t=this.getImageRatio(e))?(o?n=o.clientWidth:o=e,e=n,"width"==r?e=n:(o=n/o.clientHeight)&&("cover"==r&&o<t||"contain"==r&&t<o)&&(e=n*(t/o)),e):n}},t.parentFit=d,e.addEventListener("lazybeforesizes",function(e){var n;e.defaultPrevented||e.detail.instance!=t||(n=e.target,e.detail.width=d.calculateSize(n,e.detail.width))}))},n&&(t=t.bind(null,n,n.document),"object"==o(e)&&e.exports?t(i(1)):(n=[i(1)],void 0!==(n="function"==typeof(t=t)?t.apply(r,n):t)&&(e.exports=n)))}.call(this,i(0)(e))},function(e,n,t){var o=t(3),t=t(9),r={insert:"head",singleton:!1};o(t="string"==typeof(t=t.__esModule?t.default:t)?[[e.i,t,""]]:t,r);e.exports=t.locals||{}},function(e,n,t){(n=t(4)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n',""]),e.exports=n}]]);