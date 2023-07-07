/*! For license information please see 8309.8c448e4d86eacb491203.js.LICENSE.txt */
"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[8309],{48187:(t,e,r)=>{r.d(e,{Z:()=>b});var n=r(4942),o=r(92950),i=r.n(o),a=r(59858),c=r(50533),s=r(1379),u=r(26794),l=r(19571),p=r(19756),f=r(28090),d=r(90944),h=r(66181),v=r(48561),y=r(32490),m=r(64010);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const b=function(){var t=(0,c.useDispatch)(),e=(0,m.Z)();return(0,o.useEffect)((function(){return function(){t((0,d.a)(y.p.users.filters)),t((0,p.Pu)(h.I.groups.filters)),t((0,f.ys)(v.G.roles.filters))}}),[]),e.ready?i().createElement(u.Z.Provider,{value:w({},e)},i().createElement(s.Z,null,i().createElement("section",{style:{marginLeft:0,padding:0}},i().createElement(a.Z,null)))):i().createElement(l.zx,null)}},28412:(t,e,r)=>{r.d(e,{S:()=>n}),r(92950),r(50533),r(89742),r(48187),r(2034);var n="en"},43115:(t,e,r)=>{r.d(e,{DV:()=>b,Kt:()=>y,fA:()=>d,fp:()=>g,l5:()=>x,lq:()=>L,sZ:()=>Z,ul:()=>E,vd:()=>v});var n=r(71002),o=r(4942),i=r(15861),a=r(61338),c=r(96692),s=r(55140);function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function h(){}function v(){}var y={};s(y,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(Z([])));g&&g!==e&&r.call(g,i)&&(y=g);var w=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(i,a,c,s){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function Z(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=v,s(w,"constructor",v),s(v,"constructor",h),h.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(O.prototype),s(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=Z,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=(0,c.ix)();function d(t){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.createRoles(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){var e=t.limit,r=t.offset,n=t.name,o=t.displayName,i=t.nameMatch,a=t.scope,c=t.orderBy,s=void 0===c?"display_name":c,u=t.addFields,l=t.username,p=t.application,d=t.permission,h=t.options;return f.listRoles(e,r,n,void 0,o,i,a,s,u,l,p,d,h)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(u().mark((function t(e){var r,n,o,i,c,l,d,h,v,y,m,g,w,b,O,x,j,E,L,Z,P,S,R,_;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.limit,o=e.offset,i=e.filters,c=void 0===i?{}:i,l=e.nameMatch,d=e.scope,h=void 0===d?"account":d,v=e.orderBy,y=void 0===v?"display_name":v,m=e.addFields,g=void 0===m?["groups_in_count","groups_in","access"]:m,w=e.username,b=e.options,O=e.permission,x=e.application,j=e.usesMetaInURL,E=void 0!==j&&j,L=(0,s.Z)(),t.next=4,f.listRoles(n,o,c.name,void 0,c.display_name,l,h,y,g,w,x,O,b);case 4:if(Z=t.sent,P=(0,a._V)(o,null==Z||null===(r=Z.meta)||void 0===r?void 0:r.count),o=P?o:(0,a.Vh)(Z.meta.count,n),!P){t.next=11;break}t.t0=Z,t.next=14;break;case 11:return t.next=13,f.listRoles(n,o,c.name,void 0,void 0,l,h,y,g,w,x,O,b);case 13:t.t0=t.sent;case 14:return S=t.t0,R=S.data,_=S.meta,t.t1=p,t.t2=p({data:R,meta:_},E?{filters:c,pagination:p(p({},_),{},{offset:o,limit:n,redirected:!P})}:{}),t.next=21,L.auth.getUser();case 21:return t.t3=t.sent,t.abrupt("return",(0,t.t1)(t.t2,t.t3));case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getRole(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return O.apply(this,arguments)}function O(){return(O=(0,i.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getRole(e,"principal");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return j.apply(this,arguments)}function j(){return(j=(0,i.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.deleteRole(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E=function(){var t=(0,i.Z)(u().mark((function t(e,r,n){var o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getRoleAccess(e);case 2:return o=t.sent,i=o.data,t.abrupt("return",f.updateRole(e,n?p(p({},r),{},{access:i}):r));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),L=function(){var t=(0,i.Z)(u().mark((function t(e,r){var n,o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getRoleAccess(e.uuid);case 2:return n=t.sent,o=n.data,i=p(p({},e),{},{access:o.filter((function(t){return!r.includes(t.permission)}))}),t.abrupt("return",f.updateRole(e.uuid,p({},i)));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),Z=function(){var t=(0,i.Z)(u().mark((function t(e,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.patchRole(e,r));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},96692:(t,e,r)=>{r.d(e,{TR:()=>j,Y3:()=>E,bD:()=>Z,bn:()=>b,i$:()=>L,ix:()=>x,tP:()=>O}),r(92950);var n=r(9669),o=r.n(n),i=r(33366),a=r(72548),c=r(68004),s=r(17951),u=r(84866),l=r(89742),p=r(36580),f=o().create();f.interceptors.request.use(i.w5),f.interceptors.response.use(i.xH),f.interceptors.response.use(null,i.Di),f.interceptors.response.use(null,(function(t){var e=l.Z.getStore();throw t.response&&403===t.response.status&&e.dispatch({type:p.j5,payload:403}),t})),f.interceptors.response.use(null,i.ub),f.interceptors.response.use(null,i.ud);var d=new a.PrincipalApi(void 0,u.OJ,f),h=new a.GroupApi(void 0,u.OJ,f),v=new a.RoleApi(void 0,u.OJ,f),y=(new a.PolicyApi(void 0,u.OJ,f),new a.AccessApi(void 0,u.OJ,f)),m=new a.PermissionApi(void 0,u.OJ,f),g=new s.BaseAPI(void 0,u.WO,f),w=new c.HostsApi(void 0,u.$3,f);function b(){return d}function O(){return h}function x(){return v}function j(){return y}function E(){return m}function L(){return{getResourceTypes:function(){return g.axios.get("".concat(u.WO,"/resource-types/"))},getResource:function(t){return g.axios.get("".concat(t,"?limit=20000"))}}}var Z=function(){return{getInventoryGroups:function(){return w.axios.get("".concat(u.$3,"/groups"))}}}},28090:(t,e,r)=>{r.d(e,{DV:()=>m,Kt:()=>h,fA:()=>p,fp:()=>f,hs:()=>g,l5:()=>v,lq:()=>O,sZ:()=>b,sv:()=>y,ul:()=>w,vd:()=>d,ys:()=>x});var n=r(36580),o=r(43115),i=r(11107),a=r(82644),c=r(29558),s=r(30893),u=r(2034),l=r(28412),p=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:l.S,messages:u},e);return{type:n.MF,payload:o.fA(t),meta:{notifications:{rejected:function(t){var e,n;return{variant:"danger",title:r.formatMessage(s.Z.createRoleErrorTitle),dismissDelay:8e3,description:(null==t||null===(e=t.errors)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.detail)||r.formatMessage(s.Z.createRoleErrorDescription)}}}}}},f=function(t){return{type:n.rz,payload:o.fp(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"role uuid validation"===r.source)return{error:i.VG};throw t}))}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.Lp,payload:o.vd(t).catch((function(t){var e,r=(null==t||null===(e=t.errors)||void 0===e?void 0:e[0])||{};if("400"===r.status&&"detail"===r.source)return{error:i.VG};throw t}))}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.Lp,payload:o.Kt(t)}},v=function(t){var e=(0,a.Sn)(),r=(0,c.d)({locale:l.S,messages:u},e);return{type:n.W2,payload:o.l5(t),meta:{notifications:{fulfilled:{variant:"success",title:r.formatMessage(s.Z.removeRoleSuccessTitle),dismissDelay:8e3,description:r.formatMessage(s.Z.removeRoleSuccessDescription)},rejected:{variant:"danger",title:r.formatMessage(s.Z.removeRoleErrorTitle),dismissDelay:8e3,description:r.formatMessage(s.Z.removeRoleErrorDescription)}}}}},y=function(t){return{type:n.qj,payload:o.fp(t)}},m=function(t){return{type:n.Y2,payload:o.DV(t)}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.eJ,payload:o.vd(t)}},w=function(t,e,r){var i=(0,a.Sn)(),p=(0,c.d)({locale:l.S,messages:u},i);return{type:n.Sw,payload:o.ul(t,e,r),meta:{notifications:{rejected:function(t){var e,r;return{variant:"danger",title:p.formatMessage(s.Z.editRoleErrorTitle),dismissDelay:8e3,description:(null==t||null===(e=t.errors)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.detail)||p.formatMessage(s.Z.editRoleErrorDescription)}}}}}},b=function(t,e){var r=(0,a.Sn)(),i=(0,c.d)({locale:l.S,messages:u},r);return{type:n.kg,payload:o.sZ(t,e),meta:{notifications:{fulfilled:{variant:"success",title:i.formatMessage(s.Z.editRoleSuccessTitle),dismissDelay:8e3,description:i.formatMessage(s.Z.editRoleSuccessDescription)}}}}},O=function(t,e){return{type:n.Sw,payload:o.lq(t,e)}},x=function(t){return{type:n.vS,payload:t}}}}]);
//# sourceMappingURL=../sourcemaps/8309.84428d1176d6eafc6d42b120d31b6461.js.map