/*! For license information please see 1880.1649831991231.d27bc6a4ecb4461557c8.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1880],{35183:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const n=r(70655),o=n.__importStar(r(92950));var a;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case a.sm:return"1em";case a.md:return"1.5em";case a.lg:return"2em";case a.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:r=0,yOffset:c=0,width:l,height:u,svgPath:f}){var s;return s=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:a,color:i,title:s,noVerticalAlign:p}=e,y=n.__rest(e,["size","color","title","noVerticalAlign"]),h=Boolean(s),d=t.getSize(a),b=-.125*Number.parseFloat(d),v=p?null:{verticalAlign:`${b}em`},_=[r,c,l,u].join(" ");return o.createElement("svg",Object.assign({style:v,fill:i,height:d,width:d,viewBox:_,"aria-labelledby":h?this.id:null,"aria-hidden":!h||null,role:"img"},y),h&&o.createElement("title",{id:this.id},s),o.createElement("path",{d:f}))}},s.displayName=e,s.defaultProps={color:"currentColor",size:a.sm,noVerticalAlign:!1},s}},38296:(e,t,r)=>{function n(...e){const t=[],r={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)&&e.length){const r=n(...e);r&&t.push(r)}else if("object"===o)for(const n in e)r.call(e,n)&&e[n]&&t.push(n)})),t.join(" ")}r.r(t),r.d(t,{css:()=>n})},70655:(e,t,r)=>{r.r(t),r.d(t,{__assign:()=>a,__asyncDelegator:()=>g,__asyncGenerator:()=>w,__asyncValues:()=>O,__await:()=>m,__awaiter:()=>f,__classPrivateFieldGet:()=>E,__classPrivateFieldSet:()=>I,__createBinding:()=>p,__decorate:()=>c,__exportStar:()=>y,__extends:()=>o,__generator:()=>s,__importDefault:()=>x,__importStar:()=>S,__makeTemplateObject:()=>j,__metadata:()=>u,__param:()=>l,__read:()=>d,__rest:()=>i,__spread:()=>b,__spreadArray:()=>_,__spreadArrays:()=>v,__values:()=>h});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function l(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function c(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var p=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function y(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||p(t,e,r)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function _(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function w(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof m?Promise.resolve(r.value.v).then(l,u):f(a[0][2],r)}catch(e){f(a[0][3],e)}var r}function l(e){c("next",e)}function u(e){c("throw",e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function g(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:m(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function j(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&p(t,e,r);return P(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function E(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function I(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}}}]);
//# sourceMappingURL=../sourcemaps/1880.506a50f5dfbf58c1a62eb4db419ab28b.js.map