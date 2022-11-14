/*! For license information please see 8090.1668433718473.2cf85c0bc86c51e6fbc0.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8090],{28412:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d,locale:()=>f});var n=r(92950),o=r.n(n),i=r(334),a=r(28216),c=r(69925),s=r(82260),u=r(35240),l=r(29558),p=r(2034),f="en";const d=function(){return o().createElement(l.Z,{locale:f,messages:p[f]},o().createElement(c.g.Provider,{value:{getRegistry:function(){return c.Z}}},o().createElement(a.Provider,{store:c.Z.getStore()},o().createElement(i.BrowserRouter,{basename:(0,u.eb)(location.pathname,2).includes("rbac")?(0,u.eb)(location.pathname,2):(0,u.eb)(location.pathname,1)},o().createElement(s.Z,null)))))}},43115:(t,e,r)=>{r.d(e,{DV:()=>g,Kt:()=>h,fA:()=>p,fp:()=>y,l5:()=>b,lq:()=>O,sZ:()=>L,ul:()=>E,vd:()=>d});var n=r(71002),o=r(4942),i=r(15861),a=r(61338);function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function h(){}function v(){}var y={};u(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(Z([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,s){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=v,u(w,"constructor",v),u(v,"constructor",h),h.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,s,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=Z,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=(0,r(96692).ix)();function p(t){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.createRoles(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){var e=t.limit,r=t.offset,n=t.name,o=t.displayName,i=t.nameMatch,a=t.scope,c=t.orderBy,s=void 0===c?"display_name":c,u=t.addFields,p=t.username,f=t.application,d=t.permission,h=t.options;return l.listRoles(e,r,n,void 0,o,i,a,s,u,p,f,d,h)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(c().mark((function t(e){var r,n,o,i,s,p,f,d,h,v,y,m,g,w,b,x,E,O,L,R,Z,j,_;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.offset,i=e.filters,s=void 0===i?{}:i,p=e.nameMatch,f=e.scope,d=void 0===f?"account":f,h=e.orderBy,v=void 0===h?"display_name":h,y=e.addFields,m=void 0===y?["groups_in_count"]:y,g=e.username,w=e.options,b=e.permission,x=e.application,E=e.inModal,O=void 0===E||E,t.next=3,l.listRoles(n,o,s.name,void 0,s.display_name,p,d,v,m,g,x,b,w);case 3:if(L=t.sent,R=(0,a._V)(o,null==L||null===(r=L.meta)||void 0===r?void 0:r.count),o=R?o:(0,a.Vh)(L.meta.count,n),!R){t.next=10;break}t.t0=L,t.next=13;break;case 10:return t.next=12,l.listRoles(n,o,s.name,void 0,void 0,p,d,v,m,g,x,b,w);case 12:t.t0=t.sent;case 13:return Z=t.t0,j=Z.data,_=Z.meta,t.t1=u,t.t2=u({data:j,meta:_},O?{}:{filters:s,pagination:u(u({},_),{},{offset:o,limit:n,redirected:!R})}),t.next=20,insights.chrome.auth.getUser();case 20:return t.t3=t.sent,t.abrupt("return",(0,t.t1)(t.t2,t.t3));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRole(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRole(e,"principal");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.deleteRole(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E=function(){var t=(0,i.Z)(c().mark((function t(e,r,n){var o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRoleAccess(e);case 2:return o=t.sent,i=o.data,t.abrupt("return",l.updateRole(e,n?u(u({},r),{},{access:i}):r));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),O=function(){var t=(0,i.Z)(c().mark((function t(e,r){var n,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getRoleAccess(e.uuid);case 2:return n=t.sent,o=n.data,i=u(u({},e),{},{access:o.filter((function(t){return!r.includes(t.permission)}))}),t.abrupt("return",l.updateRole(e.uuid,u({},i)));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),L=function(){var t=(0,i.Z)(c().mark((function t(e,r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.patchRole(e,r));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},96692:(t,e,r)=>{r.d(e,{TR:()=>x,Y3:()=>E,bn:()=>g,i$:()=>O,ix:()=>b,tP:()=>w}),r(92950);var n=r(9669),o=r.n(n),i=r(33366),a=r(72548),c=r(17951),s=r(84866),u=r(69925),l=r(36580),p=o().create();p.interceptors.request.use(i.w5),p.interceptors.response.use(i.xH),p.interceptors.response.use(null,i.Di),p.interceptors.response.use(null,(function(t){var e=u.Z.getStore();throw t.response&&403===t.response.status&&e.dispatch({type:l.j5,payload:403}),t})),p.interceptors.response.use(null,i.ub),p.interceptors.response.use(null,i.ud);var f=new a.PrincipalApi(void 0,s.O,p),d=new a.GroupApi(void 0,s.O,p),h=new a.RoleApi(void 0,s.O,p),v=(new a.PolicyApi(void 0,s.O,p),new a.AccessApi(void 0,s.O,p)),y=new a.PermissionApi(void 0,s.O,p),m=new c.BaseAPI(void 0,s.W,p);function g(){return f}function w(){return d}function b(){return h}function x(){return v}function E(){return y}function O(){return{getResourceTypes:function(){return m.axios.get("".concat(s.W,"/resource-types/"))},getResource:function(t){return m.axios.get("".concat(t,"?limit=20000"))}}}},28090:(t,e,r)=>{r.d(e,{DV:()=>m,Kt:()=>h,fA:()=>p,fp:()=>f,hs:()=>g,l5:()=>v,lq:()=>x,sZ:()=>b,sv:()=>y,ul:()=>w,vd:()=>d,ys:()=>E});var n=r(36580),o=r(43115),i=r(11107),a=r(82644),c=r(29558),s=r(30893),u=r(2034),l=r(28412),p=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:l.locale,messages:u},e);return{type:n.MF,payload:o.fA(t),meta:{notifications:{rejected:function(t){var e,n;return{variant:"danger",title:r.formatMessage(s.Z.createRoleErrorTitle),dismissDelay:8e3,description:(null==t||null===(e=t.errors)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.detail)||r.formatMessage(s.Z.createRoleErrorDescription)}}}}}},f=function(t){return{type:n.rz,payload:o.fp(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"role uuid validation"===r.source)return{error:i.VG};throw t}))}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.Lp,payload:o.vd(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"detail"===r.source)return{error:i.VG};throw t}))}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.Lp,payload:o.Kt(t)}},v=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:l.locale,messages:u},e);return{type:n.W2,payload:o.l5(t),meta:{notifications:{fulfilled:{variant:"success",title:r.formatMessage(s.Z.removeRoleSuccessTitle),dismissDelay:8e3,description:r.formatMessage(s.Z.removeRoleSuccessDescription)},rejected:{variant:"danger",title:r.formatMessage(s.Z.removeRoleErrorTitle),dismissDelay:8e3,description:r.formatMessage(s.Z.removeRoleErrorDescription)}}}}},y=function(t){return{type:n.qj,payload:o.fp(t)}},m=function(t){return{type:n.Y2,payload:o.DV(t)}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.eJ,payload:o.vd(t)}},w=function(t,e,r){var i=(0,a.Sn)(),p=(0,c.d)({locale:l.locale,messages:u},i);return{type:n.Sw,payload:o.ul(t,e,r),meta:{notifications:{rejected:function(t){var e,r;return{variant:"danger",title:p.formatMessage(s.Z.editRoleErrorTitle),dismissDelay:8e3,description:(null==t||null===(e=t.errors)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.detail)||p.formatMessage(s.Z.editRoleErrorDescription)}}}}}},b=function(t,e){var r=(0,a.Sn)(),i=(0,c.d)({locale:l.locale,messages:u},r);return{type:n.kg,payload:o.sZ(t,e),meta:{notifications:{fulfilled:{variant:"success",title:i.formatMessage(s.Z.editRoleSuccessTitle),dismissDelay:8e3,description:i.formatMessage(s.Z.editRoleSuccessDescription)}}}}},x=function(t,e){return{type:n.Sw,payload:o.lq(t,e)}},E=function(t){return{type:n.vS,payload:t}}}}]);