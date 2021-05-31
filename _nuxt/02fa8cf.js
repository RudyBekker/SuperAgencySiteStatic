(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{271:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(7);e.default={name:"flipCountdown",props:{deadline:{type:String},stop:{type:Boolean},showDays:{type:Boolean,required:!1,default:!0},showHours:{type:Boolean,required:!1,default:!0},showMinutes:{type:Boolean,required:!1,default:!0},showSeconds:{type:Boolean,required:!1,default:!0},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var t=a();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+t,show:this.showDays},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+t,show:this.showHours},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+t,show:this.showMinutes},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+t,show:this.showSeconds}]}},created:function(){var t=this;if(!this.deadline)throw new Error("Missing props 'deadline'");var e=this.deadline;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'");this.interval=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},mounted:function(){0!==this.diff&&(this.show=!0)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(t,e){var n=this.deadline;if(this.date=Math.trunc(Date.parse(n.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'")},now:function(t){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.updateAllCards()},diff:function(t){0===t&&(this.$emit("timeElapsed"),this.updateAllCards())}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{updateAllCards:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(t,e){if(!(t>=this.timeData.length||void 0===e)){window.requestAnimationFrame&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var n=this.timeData[t],a=e<0?0:e,i=document.querySelector("#"+n.elementId);if(a!==n.current&&(n.previous=n.current,n.current=a,i&&(i.classList.remove("flip"),i.offsetWidth,i.classList.add("flip")),0===t)){var r=i.querySelectorAll("span b");if(r){var o=!0,s=!1,l=void 0;try{for(var d,c=r[Symbol.iterator]();!(o=(d=c.next()).done);o=!0){var f=d.value,u=f.classList[0];if(e/1e3>=1){if(!u.includes("-4digits")){var p=u+"-4digits";f.classList.add(p),f.classList.remove(u)}}else if(u.includes("-4digits")){var v=u.replace("-4digits","");f.classList.add(v),f.classList.remove(u)}}}catch(t){s=!0,l=t}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}}}}}},beforeDestroy:function(){window.cancelAnimationFrame&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(null)}}},function(t,e,n){"use strict";function a(t){n(2)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s=n(10),l=n(11),d=a,c=Object(l.a)(r.a,s.a,s.b,!1,d,"data-v-78efe7f6",null);e.default=c.exports},function(t,e,n){var a=n(3);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,n(5).default)("6cb6a1b9",a,!0,{})},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.flip-clock[data-v-78efe7f6] {\n  text-align: center;\n  perspective: 600px;\n  margin: 0 auto;\n}\n.flip-clock *[data-v-78efe7f6],\n.flip-clock *[data-v-78efe7f6]:before,\n.flip-clock *[data-v-78efe7f6]:after {\n  box-sizing: border-box;\n}\n.flip-clock__piece[data-v-78efe7f6] {\n  display: inline-block;\n  margin: 0 0.2vw;\n}\n@media (min-width: 1000px) {\n.flip-clock__piece[data-v-78efe7f6] {\n    margin: 0 5px;\n}\n}\n.flip-clock__slot[data-v-78efe7f6] {\n  font-size: 1rem;\n  line-height: 1.5;\n  display: block;\n}\n.flip-card[data-v-78efe7f6] {\n  display: block;\n  position: relative;\n  padding-bottom: 0.72em;\n  font-size: 2.25rem;\n  line-height: 0.95;\n}\n@media (min-width: 1000px) {\n.flip-clock__slot[data-v-78efe7f6] {\n    font-size: 1.2rem;\n}\n.flip-card[data-v-78efe7f6] {\n    font-size: 3rem;\n}\n}\n.flip-card__top[data-v-78efe7f6],\n.flip-card__bottom[data-v-78efe7f6],\n.flip-card__back-bottom[data-v-78efe7f6],\n.flip-card__back[data-v-78efe7f6]::before,\n.flip-card__back[data-v-78efe7f6]::after {\n  display: block;\n  color: #cca900;\n  background: #222;\n  padding: 0.23em 0.15em 0.4em;\n  border-radius: 0.15em 0.15em 0 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 2.1em;\n  height: 0.72em;\n}\n.flip-card__top-4digits[data-v-78efe7f6],\n.flip-card__bottom-4digits[data-v-78efe7f6],\n.flip-card__back-bottom-4digits[data-v-78efe7f6],\n.flip-card__back-4digits[data-v-78efe7f6]::before,\n.flip-card__back-4digits[data-v-78efe7f6]::after {\n  display: block;\n  color: #cca900;\n  background: #222;\n  padding: 0.23em 0.15em 0.4em;\n  border-radius: 0.15em 0.15em 0 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 2.65em;\n  height: 0.72em;\n}\n.flip-card__bottom[data-v-78efe7f6],\n.flip-card__back-bottom[data-v-78efe7f6],\n.flip-card__bottom-4digits[data-v-78efe7f6],\n.flip-card__back-bottom-4digits[data-v-78efe7f6] {\n  color: #ffdc00;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  border-top: solid 1px #000;\n  background: #393939;\n  border-radius: 0 0 0.15em 0.15em;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 2;\n}\n.flip-card__back-bottom[data-v-78efe7f6],\n.flip-card__back-bottom-4digits[data-v-78efe7f6] {\n  z-index: 1;\n}\n.flip-card__bottom[data-v-78efe7f6]::after,\n.flip-card__back-bottom[data-v-78efe7f6]::after,\n.flip-card__bottom-4digits[data-v-78efe7f6]::after,\n.flip-card__back-bottom-4digits[data-v-78efe7f6]::after {\n  display: block;\n  margin-top: -0.72em;\n}\n.flip-card__back[data-v-78efe7f6]::before,\n.flip-card__bottom[data-v-78efe7f6]::after,\n.flip-card__back-bottom[data-v-78efe7f6]::after,\n.flip-card__back-4digits[data-v-78efe7f6]::before,\n.flip-card__bottom-4digits[data-v-78efe7f6]::after,\n.flip-card__back-bottom-4digits[data-v-78efe7f6]::after {\n  content: attr(data-value);\n}\n.flip-card__back[data-v-78efe7f6],\n.flip-card__back-4digits[data-v-78efe7f6] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  left: 0%;\n  pointer-events: none;\n}\n.flip-card__back[data-v-78efe7f6]::before,\n.flip-card__back-4digits[data-v-78efe7f6]::before {\n  position: relative;\n  overflow: hidden;\n  z-index: -1;\n}\n.flip .flip-card__back[data-v-78efe7f6]::before,\n.flip .flip-card__back-4digits[data-v-78efe7f6]::before {\n  z-index: 1;\n  animation: flipTop-data-v-78efe7f6 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);\n  animation-fill-mode: both;\n  transform-origin: center bottom;\n}\n.flip .flip-card__bottom[data-v-78efe7f6],\n.flip .flip-card__bottom-4digits[data-v-78efe7f6] {\n  transform-origin: center top;\n  animation-fill-mode: both;\n  animation: flipBottom-data-v-78efe7f6 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);\n}\n@keyframes flipTop-data-v-78efe7f6 {\n0% {\n    transform: rotateX(0deg);\n    z-index: 2;\n}\n0%,\n  99% {\n    opacity: 1;\n}\n100% {\n    transform: rotateX(-90deg);\n    opacity: 0;\n}\n}\n@keyframes flipBottom-data-v-78efe7f6 {\n0%,\n  50% {\n    z-index: -1;\n    transform: rotateX(90deg);\n    opacity: 0;\n}\n51% {\n    opacity: 1;\n}\n100% {\n    opacity: 1;\n    transform: rotateX(0deg);\n    z-index: 5;\n}\n}\n",""])},function(t,e,n){"use strict";function a(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=i(a);return[n].concat(a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot).concat(t," */")}))).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t)))))," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=a(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var o=0;o<t.length;o++){var s=t[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";function a(t,e,n,a){m=n,b=a||{};var r=Object(d.a)(t,e);return i(r),function(e){for(var n=[],a=0;a<r.length;a++){var o=r[a];(s=f[o.id]).refs--,n.push(s)}for(e?i(r=Object(d.a)(t,e)):r=[],a=0;a<n.length;a++){var s;if(0===(s=n[a]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete f[s.id]}}}}function i(t){for(var e=0;e<t.length;e++){var n=t[e],a=f[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(o(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var r=[];for(i=0;i<n.parts.length;i++)r.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:r}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function o(t){var e,n,a=document.querySelector("style["+x+'~="'+t.id+'"]');if(a){if(m)return h;a.parentNode.removeChild(a)}if(g){var i=v++;a=p||(p=r()),e=s.bind(null,a,i,!1),n=s.bind(null,a,i,!0)}else a=r(),e=l.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function s(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var r=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function l(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),b.ssrId&&t.setAttribute(x,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var d=n(6),c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f={},u=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,v=0,m=!1,h=function(){},b=null,x="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),_=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function a(t,e){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=r[0],l={id:t+":"+i,css:r[1],media:r[2],sourceMap:r[3]};a[o]?a[o].parts.push(l):n.push(a[o]={id:o,parts:[l]})}return n}e.a=a},function(t,e,n){function a(t,e,n){var a=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var s=0;s<16;++s)e[a+s]=o[s];return e||r(o)}var i=n(8),r=n(9);t.exports=a},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var a=new Uint8Array(16);t.exports=function(){return n(a),a}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},function(t,e){function n(t,e){var n=e||0,i=a;return[i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]]].join("")}for(var a=[],i=0;i<256;++i)a[i]=(i+256).toString(16).substr(1);t.exports=n},function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flip-clock"},[t._l(t.timeData,(function(e){return[n("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"data.show"}],key:e.label,staticClass:"flip-clock__piece",attrs:{id:e.elementId}},[n("span",{staticClass:"flip-clock__card flip-card"},[n("b",{staticClass:"flip-card__top"},[t._v(t._s(t._f("twoDigits")(e.current)))]),t._v(" "),n("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t._f("twoDigits")(e.current)}}),t._v(" "),n("b",{staticClass:"flip-card__back",attrs:{"data-value":t._f("twoDigits")(e.previous)}}),t._v(" "),n("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t._f("twoDigits")(e.previous)}})]),t._v(" "),n("span",{staticClass:"flip-clock__slot"},[t._v(t._s(e.label))])])]}))],2)},i=[]},function(t,e,n){"use strict";function a(t,e,n,a,i,r,o,s){var l=typeof(t=t||{}).default;"object"!==l&&"function"!==l||(t=t.default);var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId=r),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):i&&(d=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),d)if(c.functional){c._injectStyles=d;var f=c.render;c.render=function(t,e){return d.call(e),f(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:c}}e.a=a}])},287:function(t,e,n){"use strict";n.r(e);var r=n(242),o=n(243),l=n(244),d=n(271),c=n.n(d),f={components:{MainHeader:r.a,MainFooter:o.a,FlipCountdown:c.a,MainFooterCTA:l.a}},v=n(13),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-layout"}},[n("MainHeader"),t._v(" "),n("body",[n("div",{staticClass:"bg-white"},[n("div",{staticClass:"relative bg-white pt-10 overflow-hidden sm:pt-15 lg:pt-10"},[n("div",{staticClass:"mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"},[n("div",[n("h2",{staticClass:"text-base font-semibold tracking-wider text-gray-800 uppercase"},[t._v("Exclusive Offer")]),t._v(" "),n("p",{staticClass:"mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"},[t._v("\n                            Wordpress Lifetime Deal\n                        ")]),t._v(" "),n("p",{staticClass:"mt-5 max-w-prose mx-auto text-xl text-gray-500"},[t._v("\n                            Exclusive offer to all SuperAgency Beta Customers\n                        ")]),t._v(" "),n("br"),t._v(" "),n("div",[n("flip-countdown",{attrs:{deadline:"2021-05-31 23:45:00"}})],1)]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"relative bg-white py-16 sm:py-24 lg:py-32"},[n("div",{staticClass:"mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"},[n("h2",{staticClass:"text-base font-semibold tracking-wider text-gray-800 uppercase"},[t._v("Deploy Faster")]),t._v(" "),n("p",{staticClass:"mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"},[t._v("\n                        Wordpress doesn't have to be a nightmare.\n                    ")]),t._v(" "),n("p",{staticClass:"mt-5 max-w-prose mx-auto text-xl text-gray-500"},[t._v("\n                        Provision, deploy & manage worpress sites at the speed of light!\n                    ")]),t._v(" "),n("div",{staticClass:"mt-12"},[n("div",{staticClass:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"},[n("div",{staticClass:"pt-6"},[n("div",{staticClass:"flow-root bg-gray-50 rounded-lg px-6 pb-8"},[n("div",{staticClass:"-mt-6"},[n("div",[n("span",{staticClass:"inline-flex items-center justify-center p-3 bg-gray-900 rounded-md shadow-lg"},[n("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"}})])])]),t._v(" "),n("h3",{staticClass:"mt-8 text-lg font-medium text-gray-900 tracking-tight"},[t._v("Cutting Edge")]),t._v(" "),t._m(1)])])]),t._v(" "),n("div",{staticClass:"pt-6"},[n("div",{staticClass:"flow-root bg-gray-50 rounded-lg px-6 pb-8"},[n("div",{staticClass:"-mt-6"},[n("div",[n("span",{staticClass:"inline-flex items-center justify-center p-3 bg-gray-900 rounded-md shadow-lg"},[n("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}})])])]),t._v(" "),n("h3",{staticClass:"mt-8 text-lg font-medium text-gray-900 tracking-tight"},[t._v("Fast Deploys")]),t._v(" "),n("p",{staticClass:"mt-5 text-base text-gray-500"},[t._v("\n                                            Generating WP sites couldn't be any easier. Just select your wp + site config and generate your optimized site!\n                                        ")])])])]),t._v(" "),n("div",{staticClass:"pt-6"},[n("div",{staticClass:"flow-root bg-gray-50 rounded-lg px-6 pb-8"},[n("div",{staticClass:"-mt-6"},[n("div",[n("span",{staticClass:"inline-flex items-center justify-center p-3 bg-gray-900 rounded-md shadow-lg"},[n("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}})])])]),t._v(" "),n("h3",{staticClass:"mt-8 text-lg font-medium text-gray-900 tracking-tight"},[t._v("Passwordless Login")]),t._v(" "),t._m(2)])])])])])])]),t._v(" "),n("div",{staticClass:"bg-gray-900"},[t._m(3),t._v(" "),n("div",{staticClass:"mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24"},[n("div",{staticClass:"relative"},[n("div",{staticClass:"absolute inset-0 h-3/4 bg-gray-900"}),t._v(" "),n("div",{staticClass:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"},[n("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[t._m(4),t._v(" "),n("div",{staticClass:"flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6"},[n("ul",{staticClass:"space-y-4"},[n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    100 Active AWS Hosted WP Sites (LIFETIME)\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    100 Clients\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Agency + Client CRM\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Connect 5 Servers (Coming Soon)\n                                                ")])])]),t._v(" "),t._m(5)])]),t._v(" "),n("div",{staticClass:"flex flex-col rounded-lg shadow-lg overflow-hidden"},[t._m(6),t._v(" "),n("div",{staticClass:"flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6"},[n("ul",{staticClass:"space-y-4"},[n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Unlimited Active AWS Hosted WP Sites (LIFETIME)\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    250 Clients\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Agency + Client CRM\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Elementor Pro Included\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),t._m(7)]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    API Access\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Connect Unlimited Servers (Coming Soon)\n                                                ")])]),t._v(" "),n("li",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-shrink-0"},[n("svg",{staticClass:"h-6 w-6 text-green-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]),t._v(" "),n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Single + Bulk Dynamic Build Unlimited (Coming Soon)\n                                                ")])])]),t._v(" "),t._m(8)])])])])]),t._v(" "),t._m(9),t._v(" "),n("br"),t._v(" "),n("div",[n("flip-countdown",{attrs:{deadline:"2021-05-31 23:45:00"}})],1)])])])]),t._v(" "),n("footer",[n("MainFooterCTA"),t._v(" "),n("MainFooter")],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-12"},[e("div",{staticStyle:{position:"relative","padding-bottom":"62.5%",height:"0"}},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.loom.com/embed/43e82ec7d2b84412a1c70c8331d5cd18",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-5 text-base text-gray-500"},[t._v("\n                                            Highly optimized and fast WP Sites! "),n("br"),t._v(" Powered by NGINX, Redis, AWS CloudFront + EC2\n                                        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-5 text-base text-gray-500"},[t._v("\n                                            Launch into your sites with 1 click!"),n("br"),t._v("Never worry about username / passwords again!\n                                        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-12 sm:pt-16 lg:pt-24"},[n("div",{staticClass:"max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"max-w-3xl mx-auto space-y-2 lg:max-w-none"},[n("h2",{staticClass:"text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider"},[t._v("\n                                Pricing\n                            ")]),t._v(" "),n("p",{staticClass:"text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"},[t._v("\n                                LAUNCH SPECIAL\n                            ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-300"},[t._v("\n                                Exclusive Offer For SuperAgency Beta Customers\n                            ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-8 bg-white sm:p-10 sm:pb-6"},[n("div",[n("h3",{staticClass:"inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600",attrs:{id:"tier-standard"}},[t._v("\n                                                Startup\n                                            ")])]),t._v(" "),n("div",{staticClass:"mt-4 flex items-baseline text-6xl font-extrabold"},[t._v("\n                                            $1150\n                                            "),n("span",{staticClass:"ml-1 text-2xl font-medium text-gray-500"},[t._v("\n                                                /one-time\n                                            ")])]),t._v(" "),n("p",{staticClass:"mt-5 text-lg text-gray-500"},[t._v("\n                                            The Essentials\n                                        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md shadow"},[n("a",{staticClass:"flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900",attrs:{href:"https://buy.stripe.com/9AQcQdew8668208147","aria-describedby":"tier-standard"}},[t._v("\n                                                Get started\n                                            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-6 py-8 bg-white sm:p-10 sm:pb-6"},[n("div",[n("h3",{staticClass:"inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600",attrs:{id:"tier-standard"}},[t._v("\n                                                Scale\n                                            ")])]),t._v(" "),n("div",{staticClass:"mt-4 flex items-baseline text-6xl font-extrabold"},[t._v("\n                                            $1998\n                                            "),n("span",{staticClass:"ml-1 text-2xl font-medium text-gray-500"},[t._v("\n                                                /one-time\n                                            ")])]),t._v(" "),n("p",{staticClass:"mt-5 text-lg text-gray-500"},[t._v("\n                                            A plan that scales with your rapidly growing business.\n                                        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ml-3 text-base text-gray-700"},[t._v("\n                                                    Envato Elements Template Kits Access "),n("br"),t._v(" (1,110 High Quality Elementor Templates)\n                                                ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-md shadow"},[n("a",{staticClass:"flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900",attrs:{href:"https://buy.stripe.com/14kaI5co05240W4bIK","aria-describedby":"tier-standard"}},[t._v("\n                                                Get started\n                                            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5"},[n("div",{staticClass:"max-w-md mx-auto lg:max-w-5xl"},[n("div",{staticClass:"rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center"},[n("div",{staticClass:"flex-1"},[n("div",[n("h3",{staticClass:"inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800"},[t._v("\n                                            NOT A CUSTOMER YET?\n                                        ")])]),t._v(" "),n("div",{staticClass:"mt-4 text-lg text-gray-600"},[n("span",{staticClass:"font-semibold text-gray-900"},[t._v("This offer is reserved exclusively to SuperAgency Beta Customers")]),t._v(" "),n("br"),t._v("\n                                        If you would like to partake in this exclusive offer, please follow the steps through the link on the right\n                                    ")])]),t._v(" "),n("div",{staticClass:"mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0"},[n("a",{staticClass:"flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50",attrs:{href:"/demo/2/"}},[t._v("\n                                        Learn More\n                                    ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);