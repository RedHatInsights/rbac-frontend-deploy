(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[1374,2472,5467,5353,3989],{22025:(e,t,r)=>{"use strict";r.d(t,{k:()=>s});var n=r(65353),o=r(28416),a=r(47376),i=r(38296);const c=e=>{var{children:t,className:r="",label:c="",titleId:s,innerRef:u,labelHeadingLevel:l="h1"}=e,f=(0,n.__rest)(e,["children","className","label","titleId","innerRef","labelHeadingLevel"]);const d="function"==typeof c?c:l;return o.createElement("section",Object.assign({},f,{className:(0,i.css)(a.Z.menuGroup,r),ref:u}),o.createElement(o.Fragment,null,["function","string"].includes(typeof c)?o.createElement(d,{className:(0,i.css)(a.Z.menuGroupTitle),id:s},c):c,t))},s=o.forwardRef(((e,t)=>o.createElement(c,Object.assign({},e,{innerRef:t}))));s.displayName="MenuGroup"},53989:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DrilldownMenu:()=>m,Menu:()=>n.v,MenuBreadcrumb:()=>b,MenuContainer:()=>g,MenuContent:()=>o.D,MenuFooter:()=>l,MenuGroup:()=>p.k,MenuItem:()=>y.s,MenuItemAction:()=>v.U,MenuList:()=>_.q,MenuSearch:()=>f,MenuSearchInput:()=>d});var n=r(47680),o=r(56726),a=r(65353),i=r(28416),c=r.n(i),s=r(47376),u=r(38296);const l=e=>{var{children:t,className:r=""}=e,n=(0,a.__rest)(e,["children","className"]);return i.createElement("div",Object.assign({},n,{className:(0,u.css)(s.Z.menuFooter,r)}),t)};l.displayName="MenuFooter";const f=i.forwardRef(((e,t)=>i.createElement("div",Object.assign({},e,{className:(0,u.css)(s.Z.menuSearch,e.className),ref:t}))));f.displayName="MenuSearch";const d=i.forwardRef(((e,t)=>i.createElement("div",Object.assign({},e,{className:(0,u.css)("pf-v5-c-menu__search-input",e.className),ref:t}))));d.displayName="MenuSearchInput";var p=r(22025),y=r(49732),_=r(46820),v=r(44404),h=r(16930);const m=e=>{var{children:t,id:r,isMenuDrilledIn:i=!1,getHeight:s}=e,u=(0,a.__rest)(e,["children","id","isMenuDrilledIn","getHeight"]);return c().createElement(h.p.Consumer,null,(e=>{var{menuId:l,parentMenu:f,flyoutRef:d,setFlyoutRef:p,disableHover:y}=e,v=(0,a.__rest)(e,["menuId","parentMenu","flyoutRef","setFlyoutRef","disableHover"]);return c().createElement(n.v,Object.assign({id:r,parentMenu:l,isMenuDrilledIn:i,isRootMenu:!1,ref:c().createRef()},v,u),c().createElement(o.D,{getHeight:s},c().createElement(_.q,null,t)))}))};m.displayName="DrilldownMenu";const b=e=>{var{children:t}=e,r=(0,a.__rest)(e,["children"]);return c().createElement("div",Object.assign({className:(0,u.css)(s.Z.menuBreadcrumb)},r),t)};b.displayName="MenuBreadcrumb";var w=r(69121);const g=({menu:e,menuRef:t,isOpen:r,toggle:n,toggleRef:o,onOpenChange:a,zIndex:i=9999,popperProps:s,onOpenChangeKeys:u=["Escape","Tab"]})=>(c().useEffect((()=>{const e=e=>{var n,i,c;(r&&a&&(null===(n=t.current)||void 0===n?void 0:n.contains(e.target))||(null===(i=o.current)||void 0===i?void 0:i.contains(e.target)))&&u.includes(e.key)&&(a(!1),null===(c=o.current)||void 0===c||c.focus())},n=e=>{var n,i,c;r&&(null===(n=o.current)||void 0===n?void 0:n.contains(e.target))&&0===e.detail&&setTimeout((()=>{var e;const r=null===(e=null==t?void 0:t.current)||void 0===e?void 0:e.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');r&&r.focus()}),0),r&&a&&!(null===(i=null==o?void 0:o.current)||void 0===i?void 0:i.contains(e.target))&&r&&!(null===(c=t.current)||void 0===c?void 0:c.contains(e.target))&&a(!1)};return window.addEventListener("keydown",e),window.addEventListener("click",n),()=>{window.removeEventListener("keydown",e),window.removeEventListener("click",n)}}),[r,t,a,u,o]),c().createElement(w.Popper,Object.assign({trigger:n,triggerRef:o,popper:e,popperRef:t,isVisible:r,zIndex:i},s)));g.displayName="MenuContainer"},62472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getDefaultOUIAId:()=>l,getOUIAProps:()=>c,useOUIAId:()=>u,useOUIAProps:()=>s});var n=r(28416);let o=0;const a="OUIA-Generated-",i={};function c(e,t,r=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":r,"data-ouia-component-id":t}}const s=(e,t,r=!0,n)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":r,"data-ouia-component-id":u(e,t,n)}),u=(e,t,r)=>{const o=(0,n.useMemo)((()=>l(e,r)),[e,r]);return null!=t?t:o};function l(e,t){try{let r;return r="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[r]||(i[r]=0),`${a}${e}-${t?`${t}-`:""}${++i[r]}`}catch(r){return`${a}${e}-${t?`${t}-`:""}${++o}`}}},65353:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__addDisposableResource:()=>N,__assign:()=>a,__asyncDelegator:()=>P,__asyncGenerator:()=>E,__asyncValues:()=>S,__await:()=>j,__awaiter:()=>y,__classPrivateFieldGet:()=>T,__classPrivateFieldIn:()=>D,__classPrivateFieldSet:()=>k,__createBinding:()=>v,__decorate:()=>c,__disposeResources:()=>F,__esDecorate:()=>u,__exportStar:()=>h,__extends:()=>o,__generator:()=>_,__importDefault:()=>x,__importStar:()=>R,__makeTemplateObject:()=>I,__metadata:()=>p,__param:()=>s,__propKey:()=>f,__read:()=>b,__rest:()=>i,__runInitializers:()=>l,__setFunctionName:()=>d,__spread:()=>w,__spreadArray:()=>O,__spreadArrays:()=>g,__values:()=>m,default:()=>A});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function s(e,t){return function(r,n){t(r,n,e)}}function u(e,t,r,n,o,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,s=n.kind,u="getter"===s?"get":"setter"===s?"set":"value",l=!t&&e?n.static?e:e.prototype:null,f=t||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),d=!1,p=r.length-1;p>=0;p--){var y={};for(var _ in n)y[_]="access"===_?{}:n[_];for(var _ in n.access)y.access[_]=n.access[_];y.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(e||null))};var v=(0,r[p])("accessor"===s?{get:f.get,set:f.set}:f[u],y);if("accessor"===s){if(void 0===v)continue;if(null===v||"object"!=typeof v)throw new TypeError("Object expected");(c=i(v.get))&&(f.get=c),(c=i(v.set))&&(f.set=c),(c=i(v.init))&&o.unshift(c)}else(c=i(v))&&("field"===s?o.unshift(c):f[u]=c)}l&&Object.defineProperty(l,n.name,f),d=!0}function l(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function y(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))}function _(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}var v=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function h(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||v(t,e,r)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function O(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function j(e){return this instanceof j?(this.v=e,this):new j(e)}function E(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof j?Promise.resolve(r.value.v).then(s,u):l(a[0][2],r)}catch(e){l(a[0][3],e)}var r}function s(e){c("next",e)}function u(e){c("throw",e)}function l(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function P(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:j(e[n](t)),done:!1}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=m(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function I(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var M=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function R(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&v(t,e,r);return M(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function T(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function k(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function D(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function N(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var $="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function F(e){function t(t){e.error=e.hasError?new $(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,(function(e){return t(e),r()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}const A={__extends:o,__assign:a,__rest:i,__decorate:c,__param:s,__metadata:p,__awaiter:y,__generator:_,__createBinding:v,__exportStar:h,__values:m,__read:b,__spread:w,__spreadArrays:g,__spreadArray:O,__await:j,__asyncGenerator:E,__asyncDelegator:P,__asyncValues:S,__makeTemplateObject:I,__importStar:R,__importDefault:x,__classPrivateFieldGet:T,__classPrivateFieldSet:k,__classPrivateFieldIn:D,__addDisposableResource:N,__disposeResources:F}},45467:()=>{},32857:()=>{},98379:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1374.5c5d3a336920928e3469298e39980851.js.map