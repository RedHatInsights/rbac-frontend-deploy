(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[1128],{67228:t=>{t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},23646:(t,e,r)=>{var n=r(67228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},59713:t=>{t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},95318:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},46860:t=>{t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},98206:t=>{t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},319:(t,e,r)=>{var n=r(23646),o=r(46860),i=r(60379),a=r(98206);t.exports=function(t){return n(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},50008:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},60379:(t,e,r)=>{var n=r(67228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},7081:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>a,lb:()=>o,wl:()=>i});var n=r(40400);const o={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},i=(0,n.IU)(o),a=i},60817:(t,e,r)=>{"use strict";var n=r(95318);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Portal",{enumerable:!0,get:function(){return i.default}}),e.default=e.NotificationPortal=void 0;var o=r(28216),i=n(r(72837)),a=r(53446),c=(0,o.connect)((function(t,e){var r=t.notifications;return{notifications:e.notifications||r}}),(function(t,e){return{removeNotification:e.removeNotification?e.removeNotification:function(e){return t((0,a.removeNotification)(e))},onClearAll:e.clearNotifications?e.clearNotifications:function(){return t((0,a.clearNotifications)())}}}))(i.default);e.NotificationPortal=c;var u=c;e.default=u},72871:(t,e,r)=>{"use strict";var n=r(50008);Object.defineProperty(e,"__esModule",{value:!0});var o={};Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}});var i=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=a(e);if(r&&r.has(t))return r.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if("default"!==c&&Object.prototype.hasOwnProperty.call(t,c)){var u=i?Object.getOwnPropertyDescriptor(t,c):null;u&&(u.get||u.set)?Object.defineProperty(o,c,u):o[c]=t[c]}return o.default=t,r&&r.set(t,o),o}(r(60817));function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(a=function(t){return t?r:e})(t)}Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(o,t)||t in e&&e[t]===i[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}}))}))},71355:(t,e,r)=>{"use strict";var n=r(95318),o=r(50008);Object.defineProperty(e,"wN",{enumerable:!0,get:function(){return i.addNotification}});n(r(72871)),function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var r=a(e);if(r&&r.has(t))return r.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if("default"!==c&&Object.prototype.hasOwnProperty.call(t,c)){var u=i?Object.getOwnPropertyDescriptor(t,c):null;u&&(u.get||u.set)?Object.defineProperty(n,c,u):n[c]=t[c]}n.default=t,r&&r.set(t,n)}(r(24778)),r(68129);var i=r(53446);n(r(84885));function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(a=function(t){return t?r:e})(t)}},68129:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CLEAR_NOTIFICATIONS=e.REMOVE_NOTIFICATION=e.ADD_NOTIFICATION=void 0;var r="@@INSIGHTS-CORE/NOTIFICATIONS/",n="".concat(r,"ADD_NOTIFICATION");e.ADD_NOTIFICATION=n;var o="".concat(r,"REMOVE_NOTIFICATION");e.REMOVE_NOTIFICATION=o;var i="".concat(r,"CLEAR_NOTIFICATIONS");e.CLEAR_NOTIFICATIONS=i;var a={ADD_NOTIFICATION:n,REMOVE_NOTIFICATION:o,CLEAR_NOTIFICATIONS:i};e.default=a},53446:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.clearNotifications=e.removeNotification=e.addNotification=void 0;var n=r(68129),o=function(t){return{type:n.ADD_NOTIFICATION,payload:t}};e.addNotification=o;var i=function(t){return{type:n.REMOVE_NOTIFICATION,payload:t}};e.removeNotification=i;var a=function(){return{type:n.CLEAR_NOTIFICATIONS}};e.clearNotifications=a;var c={addNotification:o,removeNotification:i,clearNotifications:a};e.default=c},24778:(t,e,r)=>{"use strict";var n=r(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.notifications=e.notificationsReducers=e.defaultState=void 0;var o=n(r(59713)),i=n(r(319)),a=r(68129);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,o.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=function(t,e){var r=e.payload;return[].concat((0,i.default)(t),[u({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},f=function(t,e){var r=e.payload,n=t.findIndex((function(t){return t.id===r}));return[].concat((0,i.default)(t.slice(0,n)),(0,i.default)(t.slice(n+1)))},s=[];e.defaultState=s;var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.ADD_NOTIFICATION:return l(t,e);case a.REMOVE_NOTIFICATION:return f(t,e);case a.CLEAR_NOTIFICATIONS:return[];default:return t}};e.notificationsReducers=p;var d=p;e.notifications=d;var v=d;e.default=v},64107:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(92950),o=r.n(n),i=r(29165);const a=function(t){var e=t.date,r=t.type,n=void 0===r?"relative":r,a=t.extraTitle,c=t.tooltipProps,u=e instanceof Date?e:new Date(e),l=null==e||"Invalid Date"===u.toString()?"invalid":n;return o().createElement(o().Fragment,null,(0,i.iq)(l,c,a)(u))}},29165:(t,e,r)=>{"use strict";r.d(e,{Z$:()=>v,iq:()=>y,y_:()=>O});var n=r(92950),o=r.n(n),i=r(57262),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},c=36e5,u=24*c,l=30*u,f=365*u,s=function(t,e){return"".concat(t," ").concat(t>1?"".concat(e,"s"):e," ago")},p=[{rightBound:1/0,description:function(t){return s(Math.round(t/f),"year")}},{rightBound:f,description:function(t){return s(Math.round(t/l),"month")}},{rightBound:l,description:function(t){return s(Math.round(t/u),"day")}},{rightBound:u,description:function(t){return s(Math.round(t/c),"hour")}},{rightBound:c,description:function(t){return s(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],d=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(t,e,r,n){return void 0===n&&(n=""),o().createElement(i.Tooltip,a({},r,{content:o().createElement("div",null,n,t)}),e)},O=function(t){return{exact:function(t){return d(t)+" UTC"},onlyDate:function(t){return d(t).slice(0,-6)},relative:function(t){return p.reduce((function(e,r){return r.rightBound>Date.now()-t.getTime()?r.description(Date.now()-t.getTime()):e}),d(t))},invalid:function(){return"Invalid date"}}[t]},y=function(t,e,r){return{exact:function(e){return O(t)(e)},onlyDate:function(e){return O(t)(e)},relative:function(n){return v(O("exact")(n),o().createElement("span",null,O(t)(n)),e,r)},invalid:function(){return"Invalid date"}}[t]}},80123:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(92950),o=r.n(n),i=r(94184),a=r.n(i),c=r(53754),u=function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)};const l=function(t){var e=t.className,r=t.children,n=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["className","children"]),i=a()(e,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return o().createElement(c.Z.Consumer,null,(function(t){var e,c;void 0===t&&(t="light");var l=a()(((e={})["pf-m-".concat(t,"-200")]="dark"===t,e),((c={})["pf-m-light"]="light"===t,c));return o().createElement("section",u({},n,{className:"".concat(i," ").concat(l),"widget-type":"InsightsPageHeader"}),r)}))}},39173:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(92950),o=r.n(n),i=r(94184),a=r.n(i),c=r(57262);const u=function(t){var e=t.className,r=t.title,n=a()(e);return o().createElement(c.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"},r)}},44873:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(92950),o=r.n(n),i=r(94184),a=r.n(i),c=function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)};const u=function(t){var e,r=t.type,n=t.children,i=t.className,u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["type","children","className"]),l=a()(i,((e={})["ins-l-".concat(r)]=void 0!==r,e));return o().createElement("section",c({},u,{className:l})," ",n," ")}},63012:(t,e,r)=>{var n=r(97786),o=r(10611),i=r(71811);t.exports=function(t,e,r){for(var a=-1,c=e.length,u={};++a<c;){var l=e[a],f=n(t,l);r(f,l)&&o(u,i(l,t),f)}return u}},10611:(t,e,r)=>{var n=r(34865),o=r(71811),i=r(65776),a=r(13218),c=r(40327);t.exports=function(t,e,r,u){if(!a(t))return t;for(var l=-1,f=(e=o(e,t)).length,s=f-1,p=t;null!=p&&++l<f;){var d=c(e[l]),v=r;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(l!=s){var O=p[d];void 0===(v=u?u(O,d,p):void 0)&&(v=a(O)?O:i(e[l+1])?[]:{})}n(p,d,v),p=p[d]}return t}},35937:(t,e,r)=>{var n=r(29932),o=r(67206),i=r(63012),a=r(46904);t.exports=function(t,e){if(null==t)return{};var r=n(a(t),(function(t){return[t]}));return e=o(e),i(t,r,(function(t,r){return e(t,r[0])}))}}}]);