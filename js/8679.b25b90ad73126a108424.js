/*! For license information please see 8679.b25b90ad73126a108424.js.LICENSE.txt */
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8679],{8679:(e,t,r)=>{"use strict";var o=r(59864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};function a(e){return o.isMemo(e)?s:f[e.$$typeof]||n}f[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f[o.Memo]=s;var i=Object.defineProperty,p=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=l(r);n&&n!==m&&e(t,n,o)}var s=p(r);u&&(s=s.concat(u(r)));for(var f=a(t),d=a(r),b=0;b<s.length;++b){var S=s[b];if(!(c[S]||o&&o[S]||d&&d[S]||f&&f[S])){var $=y(r,S);try{i(t,S,$)}catch(e){}}}}return t}},69921:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,i=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case u:case c:case f:case s:case l:return e;default:switch(e=e&&e.$$typeof){case i:case y:case a:return e;default:return t}}case d:case m:case n:return t}}}function S(e){return b(e)===u}t.typeOf=b,t.AsyncMode=p,t.ConcurrentMode=u,t.ContextConsumer=i,t.ContextProvider=a,t.Element=o,t.ForwardRef=y,t.Fragment=c,t.Lazy=d,t.Memo=m,t.Portal=n,t.Profiler=f,t.StrictMode=s,t.Suspense=l,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===u||e===f||e===s||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===m||e.$$typeof===a||e.$$typeof===i||e.$$typeof===y)},t.isAsyncMode=function(e){return S(e)||b(e)===p},t.isConcurrentMode=S,t.isContextConsumer=function(e){return b(e)===i},t.isContextProvider=function(e){return b(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return b(e)===y},t.isFragment=function(e){return b(e)===c},t.isLazy=function(e){return b(e)===d},t.isMemo=function(e){return b(e)===m},t.isPortal=function(e){return b(e)===n},t.isProfiler=function(e){return b(e)===f},t.isStrictMode=function(e){return b(e)===s},t.isSuspense=function(e){return b(e)===l}},59864:(e,t,r)=>{"use strict";e.exports=r(69921)}}]);