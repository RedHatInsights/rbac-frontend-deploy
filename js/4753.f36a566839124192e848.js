(self.webpackChunkrbac=self.webpackChunkrbac||[]).push([[4753,2472,8631],{31495:(e,t,n)=>{"use strict";n.d(t,{Mi:()=>s,Uv:()=>a,wk:()=>c,z1:()=>i});var r=n(66029),o=n(80164);const a={isManagedSidebar:!1,isSidebarOpen:!1,onSidebarToggle:()=>null,width:null,height:null,getBreakpoint:o.iu,getVerticalBreakpoint:o.xb},i=r.createContext(a),s=i.Provider,c=i.Consumer},32045:(e,t,n)=>{"use strict";n.d(t,{Dk:()=>r,NP:()=>u,xB:()=>o});var r,o,a=n(65353),i=n(66029),s=n(41145),c=n(38296),p=n(80164),l=n(31495);!function(e){e.default="default",e.light="light",e.dark="dark",e.darker="darker"}(r||(r={})),function(e){e.default="default",e.nav="nav",e.subNav="subnav",e.breadcrumb="breadcrumb",e.tabs="tabs",e.wizard="wizard"}(o||(o={}));const d={[o.default]:s.Z.pageMainSection,[o.nav]:s.Z.pageMainNav,[o.subNav]:s.Z.pageMainSubnav,[o.breadcrumb]:s.Z.pageMainBreadcrumb,[o.tabs]:s.Z.pageMainTabs,[o.wizard]:s.Z.pageMainWizard},f={[r.default]:"",[r.light]:s.Z.modifiers.light,[r.dark]:s.Z.modifiers.dark_200,[r.darker]:s.Z.modifiers.dark_100},u=e=>{var{className:t="",children:n,variant:r="default",type:u="default",padding:m,isFilled:h,isWidthLimited:g=!1,isCenterAligned:y=!1,stickyOnBreakpoint:_,hasShadowTop:v=!1,hasShadowBottom:b=!1,hasOverflowScroll:w=!1,"aria-label":O,component:k="section"}=e,S=(0,a.__rest)(e,["className","children","variant","type","padding","isFilled","isWidthLimited","isCenterAligned","stickyOnBreakpoint","hasShadowTop","hasShadowBottom","hasOverflowScroll","aria-label","component"]);const{height:x,getVerticalBreakpoint:P}=i.useContext(l.z1);i.useEffect((()=>{w&&!O&&console.warn("PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.")}),[w,O]);const j=k;return i.createElement(j,Object.assign({},S,{className:(0,c.css)(d[u],(0,p.wt)(m,s.Z),(0,p.wt)(_,s.Z,"sticky-",P(x),!0),f[r],!1===h&&s.Z.modifiers.noFill,!0===h&&s.Z.modifiers.fill,g&&s.Z.modifiers.limitWidth,g&&y&&u!==o.subNav&&s.Z.modifiers.alignCenter,v&&s.Z.modifiers.shadowTop,b&&s.Z.modifiers.shadowBottom,w&&s.Z.modifiers.overflowScroll,t)},w&&{tabIndex:0},{"aria-label":O}),g&&i.createElement("div",{className:(0,c.css)(s.Z.pageMainBody)},n),!g&&n)};u.displayName="PageSection"},41724:(e,t,n)=>{"use strict";n.d(t,{w:()=>i});var r=n(66029),o=n(80164);let a=0;class i extends r.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,o.Ki)():a++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}i.displayName="GenerateId",i.defaultProps={prefix:"pf-random-id-",isRandom:!1}},62472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getDefaultOUIAId:()=>l,getOUIAProps:()=>s,useOUIAId:()=>p,useOUIAProps:()=>c});var r=n(66029);let o=0;const a="OUIA-Generated-",i={};function s(e,t,n=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const c=(e,t,n=!0,r)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":p(e,t,r)}),p=(e,t,n)=>{const o=(0,r.useMemo)((()=>l(e,n)),[e,n]);return null!=t?t:o};function l(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,i[n]||(i[n]=0),`${a}${e}-${t?`${t}-`:""}${++i[n]}`}catch(n){return`${a}${e}-${t?`${t}-`:""}${++o}`}}},84709:(e,t,n)=>{"use strict";n.d(t,{p:()=>o});var r=n(80164);const o=(e,t,n)=>{let o;if(r.Nq){const{ResizeObserver:r}=window;if(e&&r){const a=new r((e=>{n?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));a.observe(e),o=()=>a.unobserve(e)}else window.addEventListener("resize",t),o=()=>window.removeEventListener("resize",t)}return()=>{o&&o()}}},41145:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(92084);const r={avatar:"pf-v5-c-avatar",brand:"pf-v5-c-brand",button:"pf-v5-c-button",contextSelector:"pf-v5-c-context-selector",dirRtl:"pf-v5-m-dir-rtl",drawer:"pf-v5-c-drawer",masthead:"pf-v5-c-masthead",modifiers:{light:"pf-m-light",menu:"pf-m-menu",hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",read:"pf-m-read",selected:"pf-m-selected",unread:"pf-m-unread",attention:"pf-m-attention",expanded:"pf-m-expanded",collapsed:"pf-m-collapsed",pageInsets:"pf-m-page-insets",insetNone:"pf-m-inset-none",fill:"pf-m-fill",noFill:"pf-m-no-fill",limitWidth:"pf-m-limit-width",alignCenter:"pf-m-align-center",overflowScroll:"pf-m-overflow-scroll",shadowBottom:"pf-m-shadow-bottom",shadowTop:"pf-m-shadow-top",stickyTop:"pf-m-sticky-top",stickyBottom:"pf-m-sticky-bottom",stickyTopOnSmHeight:"pf-m-sticky-top-on-sm-height",stickyBottomOnSmHeight:"pf-m-sticky-bottom-on-sm-height",stickyTopOnMdHeight:"pf-m-sticky-top-on-md-height",stickyBottomOnMdHeight:"pf-m-sticky-bottom-on-md-height",stickyTopOnLgHeight:"pf-m-sticky-top-on-lg-height",stickyBottomOnLgHeight:"pf-m-sticky-bottom-on-lg-height",stickyTopOnXlHeight:"pf-m-sticky-top-on-xl-height",stickyBottomOnXlHeight:"pf-m-sticky-bottom-on-xl-height",stickyTopOn_2xlHeight:"pf-m-sticky-top-on-2xl-height",stickyBottomOn_2xlHeight:"pf-m-sticky-bottom-on-2xl-height",light_100:"pf-m-light-100",dark_100:"pf-m-dark-100",dark_200:"pf-m-dark-200",padding:"pf-m-padding",noPadding:"pf-m-no-padding",paddingOnSm:"pf-m-padding-on-sm",noPaddingOnSm:"pf-m-no-padding-on-sm",paddingOnMd:"pf-m-padding-on-md",noPaddingOnMd:"pf-m-no-padding-on-md",paddingOnLg:"pf-m-padding-on-lg",noPaddingOnLg:"pf-m-no-padding-on-lg",paddingOnXl:"pf-m-padding-on-xl",noPaddingOnXl:"pf-m-no-padding-on-xl",paddingOn_2xl:"pf-m-padding-on-2xl",noPaddingOn_2xl:"pf-m-no-padding-on-2xl",light_200:"pf-m-light-200"},nav:"pf-v5-c-nav",notificationBadge:"pf-v5-c-notification-badge",page:"pf-v5-c-page",pageDrawer:"pf-v5-c-page__drawer",pageHeader:"pf-v5-c-page__header",pageHeaderBrand:"pf-v5-c-page__header-brand",pageHeaderBrandLink:"pf-v5-c-page__header-brand-link",pageHeaderBrandToggle:"pf-v5-c-page__header-brand-toggle",pageHeaderNav:"pf-v5-c-page__header-nav",pageHeaderTools:"pf-v5-c-page__header-tools",pageHeaderToolsGroup:"pf-v5-c-page__header-tools-group",pageHeaderToolsItem:"pf-v5-c-page__header-tools-item",pageMain:"pf-v5-c-page__main",pageMainBody:"pf-v5-c-page__main-body",pageMainBreadcrumb:"pf-v5-c-page__main-breadcrumb",pageMainDrawer:"pf-v5-c-page__main-drawer",pageMainGroup:"pf-v5-c-page__main-group",pageMainNav:"pf-v5-c-page__main-nav",pageMainSection:"pf-v5-c-page__main-section",pageMainSubnav:"pf-v5-c-page__main-subnav",pageMainTabs:"pf-v5-c-page__main-tabs",pageMainWizard:"pf-v5-c-page__main-wizard",pageSidebar:"pf-v5-c-page__sidebar",pageSidebarBody:"pf-v5-c-page__sidebar-body",themeDark:"pf-v5-theme-dark"}},65353:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__addDisposableResource:()=>D,__assign:()=>a,__asyncDelegator:()=>x,__asyncGenerator:()=>S,__asyncValues:()=>P,__await:()=>k,__awaiter:()=>m,__classPrivateFieldGet:()=>B,__classPrivateFieldIn:()=>A,__classPrivateFieldSet:()=>I,__createBinding:()=>g,__decorate:()=>s,__disposeResources:()=>$,__esDecorate:()=>p,__exportStar:()=>y,__extends:()=>o,__generator:()=>h,__importDefault:()=>M,__importStar:()=>E,__makeTemplateObject:()=>j,__metadata:()=>u,__param:()=>c,__propKey:()=>d,__read:()=>v,__rest:()=>i,__runInitializers:()=>l,__setFunctionName:()=>f,__spread:()=>b,__spreadArray:()=>O,__spreadArrays:()=>w,__values:()=>_,default:()=>H});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function p(e,t,n,r,o,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,c=r.kind,p="getter"===c?"get":"setter"===c?"set":"value",l=!t&&e?r.static?e:e.prototype:null,d=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),f=!1,u=n.length-1;u>=0;u--){var m={};for(var h in r)m[h]="access"===h?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(e||null))};var g=(0,n[u])("accessor"===c?{get:d.get,set:d.set}:d[p],m);if("accessor"===c){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(s=i(g.get))&&(d.get=s),(s=i(g.set))&&(d.set=s),(s=i(g.init))&&o.unshift(s)}else(s=i(g))&&("field"===c?o.unshift(s):d[p]=s)}l&&Object.defineProperty(l,r.name,d),f=!0}function l(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function d(e){return"symbol"==typeof e?e:"".concat(e)}function f(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function m(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var g=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function y(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||g(t,e,n)}function _(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}function O(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function k(e){return this instanceof k?(this.v=e,this):new k(e)}function S(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof k?Promise.resolve(n.value.v).then(c,p):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function c(e){s("next",e)}function p(e){s("throw",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function x(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:k(e[r](t)),done:!1}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=_(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function j(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var T=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&g(t,e,n);return T(t,e),t}function M(e){return e&&e.__esModule?e:{default:e}}function B(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function I(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function A(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function D(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var Z="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function $(e){function t(t){e.error=e.hasError?new Z(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop();try{var o=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(o).then(n,(function(e){return t(e),n()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}const H={__extends:o,__assign:a,__rest:i,__decorate:s,__param:c,__metadata:u,__awaiter:m,__generator:h,__createBinding:g,__exportStar:y,__values:_,__read:v,__spread:b,__spreadArrays:w,__spreadArray:O,__await:k,__asyncGenerator:S,__asyncDelegator:x,__asyncValues:P,__makeTemplateObject:j,__importStar:E,__importDefault:M,__classPrivateFieldGet:B,__classPrivateFieldSet:I,__classPrivateFieldIn:A,__addDisposableResource:D,__disposeResources:$}},11452:()=>{},34946:()=>{},80897:()=>{},92084:()=>{},66822:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4753.1f6e7920a5817699c82ecb4c3c0e805b.js.map