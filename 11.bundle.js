(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{34:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});var r=n(14),o=n(29);n(27),n(31),n(28),n(26);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){var t=a(['\n      <page-info icon="coffee" title="You have no favorite restaurants" description="Try to add your favorite restaurants and they should be here"></page-info>\n    ']);return i=function(){return t},t}function c(){var t=a(["\n      <loading-bar></loading-bar>\n    "]);return c=function(){return t},t}function f(){var t=a(["\n      <card-list .restaurants='",'\' title="Your Favorite Restaurants"></card-list>\n    ']);return f=function(){return t},t}function a(t,e){return e=e||t.slice(0),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function s(t,e,n,r,o,u,i){try{var a=t[u](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=b(n);return t=r?(t=b(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==u(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(n,r["a"]);var a,t,e=d(n);function n(){var t;return function(t){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),(t=e.call(this))._data=[],t._loading=!0,t}return p(n,null,[{key:"properties",get:function(){return{_data:{type:Array},_loading:{type:Boolean}}}}]),p(n,[{key:"render",value:function(){return this._loading?(this._requestData(),this._renderLoading()):this._renderData()}},{key:"createRenderRoot",value:function(){return this}},{key:"_requestData",value:(a=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.init();case 2:return t.next=4,o.a.getAllRestaurants();case 4:this._data=t.sent,this._loading=!1;case 6:case"end":return t.stop()}},t,this)}),t=function(){var t=this,i=arguments;return new Promise(function(e,n){var r=a.apply(t,i);function o(t){s(r,e,n,o,u,"next",t)}function u(t){s(r,e,n,o,u,"throw",t)}o(void 0)})},function(){return t.apply(this,arguments)})},{key:"_renderData",value:function(){return this._isDataAvailable()?Object(r.b)(f(),this._data):this._renderEmptyInfo()}},{key:"_renderLoading",value:function(){return Object(r.b)(c())}},{key:"_renderEmptyInfo",value:function(){return Object(r.b)(i())}},{key:"_isDataAvailable",value:function(){return this._data.length}}]),n}();customElements.define("favorite-page",h)}}]);