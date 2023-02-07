/*! For license information please see 62.1675778380186.10f6f76d736150646cca.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[62,6586,8090],{28412:(t,e,r)=>{r.d(e,{default:()=>d,locale:()=>p});var n=r(92950),o=r.n(n),i=r(334),a=r(28216),c=r(69925),u=r(82260),s=r(35240),l=r(29558),f=r(2034),p="en";const d=function(){return o().createElement(l.Z,{locale:p,messages:f[p]},o().createElement(c.g.Provider,{value:{getRegistry:function(){return c.Z}}},o().createElement(a.Provider,{store:c.Z.getStore()},o().createElement(i.BrowserRouter,{basename:(0,s.eb)(location.pathname,2).includes("rbac")?(0,s.eb)(location.pathname,2):(0,s.eb)(location.pathname,1)},o().createElement(u.Z,null)))))}},43249:(t,e,r)=>{r.r(e);var n=r(92950),o=r.n(n),i=r(12181),a=r.n(i),c=r(28412);a().render(o().createElement(c.default,null),document.getElementById("root"))},43115:(t,e,r)=>{r.d(e,{Kt:()=>h,fA:()=>f,fp:()=>y,l5:()=>g,lq:()=>x,sZ:()=>E,ul:()=>b,vd:()=>d});var n=r(71002),o=r(4942),i=r(15861),a=r(61338);function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function d(){}function h(){}function v(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(Z([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==(0,n.Z)(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return h.prototype=v,s(w,"constructor",v),s(v,"constructor",h),h.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=Z,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=(0,r(96692).ix)();function f(t){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.createRoles(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){var e=t.limit,r=t.offset,n=t.name,o=t.displayName,i=t.nameMatch,a=t.scope,c=t.orderBy,u=void 0===c?"display_name":c,s=t.addFields,f=t.username,p=t.application,d=t.permission,h=t.options;return l.listRoles(e,r,n,void 0,o,i,a,u,s,f,p,d,h)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(c().mark((function t(e){var r,n,o,i,u,f,p,d,h,v,y,m,g,w,b,x,E,O,L,j,Z,R,_;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.offset,i=e.filters,u=void 0===i?{}:i,f=e.nameMatch,p=e.scope,d=void 0===p?"account":p,h=e.orderBy,v=void 0===h?"display_name":h,y=e.addFields,m=void 0===y?["groups_in_count","groups_in"]:y,g=e.username,w=e.options,b=e.permission,x=e.application,E=e.inModal,O=void 0===E||E,t.next=3,l.listRoles(n,o,u.name,void 0,u.display_name,f,d,v,m,g,x,b,w);case 3:if(L=t.sent,j=(0,a._V)(o,null==L||null===(r=L.meta)||void 0===r?void 0:r.count),o=j?o:(0,a.Vh)(L.meta.count,n),!j){t.next=10;break}t.t0=L,t.next=13;break;case 10:return t.next=12,l.listRoles(n,o,u.name,void 0,void 0,f,d,v,m,g,x,b,w);case 12:t.t0=t.sent;case 13:return Z=t.t0,R=Z.data,_=Z.meta,t.t1=s,t.t2=s({data:R,meta:_},O?{}:{filters:u,pagination:s(s({},_),{},{offset:o,limit:n,redirected:!j})}),t.next=20,insights.chrome.auth.getUser();case 20:return t.t3=t.sent,t.abrupt("return",(0,t.t1)(t.t2,t.t3));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRole(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.deleteRole(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=function(){var t=(0,i.Z)(c().mark((function t(e,r,n){var o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRoleAccess(e);case 2:return o=t.sent,i=o.data,t.abrupt("return",l.updateRole(e,n?s(s({},r),{},{access:i}):r));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),x=function(){var t=(0,i.Z)(c().mark((function t(e,r){var n,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRoleAccess(e.uuid);case 2:return n=t.sent,o=n.data,i=s(s({},e),{},{access:o.filter((function(t){return!r.includes(t.permission)}))}),t.abrupt("return",l.updateRole(e.uuid,s({},i)));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),E=function(){var t=(0,i.Z)(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.patchRole(e,r));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},96692:(t,e,r)=>{r.d(e,{Y3:()=>b,bn:()=>m,i$:()=>x,ix:()=>w,tP:()=>g}),r(92950);var n=r(9669),o=r.n(n),i=r(33366),a=r(72548),c=r(17951),u=r(84866),s=r(69925),l=r(36580),f=o().create();f.interceptors.request.use(i.w5),f.interceptors.response.use(i.xH),f.interceptors.response.use(null,i.Di),f.interceptors.response.use(null,(function(t){var e=s.Z.getStore();throw t.response&&403===t.response.status&&e.dispatch({type:l.j5,payload:403}),t})),f.interceptors.response.use(null,i.ub),f.interceptors.response.use(null,i.ud);var p=new a.PrincipalApi(void 0,u.O,f),d=new a.GroupApi(void 0,u.O,f),h=new a.RoleApi(void 0,u.O,f),v=(new a.PolicyApi(void 0,u.O,f),new a.AccessApi(void 0,u.O,f),new a.PermissionApi(void 0,u.O,f)),y=new c.BaseAPI(void 0,u.W,f);function m(){return p}function g(){return d}function w(){return h}function b(){return v}function x(){return{getResourceTypes:function(){return y.axios.get("".concat(u.W,"/resource-types/"))},getResource:function(t){return y.axios.get("".concat(t,"?limit=20000"))}}}},28090:(t,e,r)=>{r.d(e,{Kt:()=>v,fA:()=>f,fp:()=>p,hs:()=>g,l5:()=>y,lq:()=>x,oT:()=>d,sZ:()=>b,sv:()=>m,ul:()=>w,vd:()=>h,ys:()=>E});var n=r(36580),o=r(43115),i=r(11107),a=r(82644),c=r(29558),u=r(30893),s=r(2034),l=r(28412),f=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:l.locale,messages:s},e);return{type:n.MF,payload:o.fA(t),meta:{notifications:{rejected:function(t){var e,n;return{variant:"danger",title:r.formatMessage(u.Z.createRoleErrorTitle),dismissDelay:8e3,description:(null==t||null===(e=t.errors)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.detail)||r.formatMessage(u.Z.createRoleErrorDescription)}}}}}},p=function(t){return{type:n.rz,payload:o.fp(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"role uuid validation"===r.source)return{error:i.VG};throw t}))}},d=function(t){return{type:n.wm,meta:{uuid:t},payload:o.fp(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"role uuid validation"===r.source)return{error:i.VG};throw t}))}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.Lp,payload:o.vd(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"detail"===r.source)return{error:i.VG};throw t}))}},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.Lp,payload:o.Kt(t)}},y=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:l.locale,messages:s},e);return{type:n.W2,payload:o.l5(t),meta:{notifications:{fulfilled:{variant:"success",title:r.formatMessage(u.Z.removeRoleSuccessTitle),dismissDelay:8e3,description:r.formatMessage(u.Z.removeRoleSuccessDescription)},rejected:{variant:"danger",title:r.formatMessage(u.Z.removeRoleErrorTitle),dismissDelay:8e3,description:r.formatMessage(u.Z.removeRoleErrorDescription)}}}}},m=function(t){return{type:n.qj,payload:o.fp(t)}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.eJ,payload:o.vd(t)}},w=function(t,e,r){var i=(0,a.Sn)(),f=(0,c.d)({locale:l.locale,messages:s},i);return{type:n.Sw,payload:o.ul(t,e,r),meta:{notifications:{rejected:function(t){var e,r;return{variant:"danger",title:f.formatMessage(u.Z.editRoleErrorTitle),dismissDelay:8e3,description:(null==t||null===(e=t.errors)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.detail)||f.formatMessage(u.Z.editRoleErrorDescription)}}}}}},b=function(t,e){var r=(0,a.Sn)(),i=(0,c.d)({locale:l.locale,messages:s},r);return{type:n.kg,payload:o.sZ(t,e),meta:{notifications:{fulfilled:{variant:"success",title:i.formatMessage(u.Z.editRoleSuccessTitle),dismissDelay:8e3,description:i.formatMessage(u.Z.editRoleSuccessDescription)}}}}},x=function(t,e){return{type:n.Sw,payload:o.lq(t,e)}},E=function(t){return{type:n.vS,payload:t}}}}]);
//# sourceMappingURL=../sourcemaps/62.2935ef1b16f55a4c65213d24d7a35657.js.map