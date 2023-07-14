/*! For license information please see 4250.21af8c81fab01dd22e2f.js.LICENSE.txt */
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[4250],{21167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(87462),i=r(4942),o=r(29439),a=r(76857),s=r(92950),c=r.n(s),u=r(45697),l=r.n(u),f=r(30060),p=r(65916),d=r(86896),m=r(44012),h=r(30893);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.isOpen,r=e.handleClose,i=e.permission,u=e.resourceDefinitions,l=(0,d.Z)(),v=(0,s.useState)((function(){return{filterValue:"",rows:u.map((function(e){return e.attributeFilter.value})).slice(0,p.he.limit),pagination:y(y({},p.he),{},{count:u.length})}})),g=(0,o.Z)(v,2),b=g[0],O=b.rows,w=b.pagination,E=b.filterValue,Z=g[1],j=function(e){var t=e.name,r=void 0===t?"":t,n=e.limit,i=e.offset,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Z((function(e){var t=e.pagination,a=e.filterValue,s=u.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(r)})).slice(i,n);return{rows:s,filterValue:o?r:a,pagination:y(y({},t),{},{offset:o?0:i,limit:n,count:s.length})}}))};return c().createElement(a.Modal,{actions:[c().createElement(a.Button,{key:"close-action",variant:"primary",onClick:r},l.formatMessage(h.Z.close))],variant:"large",isOpen:t,onClose:r,title:l.formatMessage(h.Z.resourceDefinitions),description:c().createElement(m.Z,(0,n.Z)({},h.Z.viewResourceDefinitions,{values:{strong:function(e){return c().createElement("strong",null,e)},permission:i}}))},c().createElement(f.M,{columns:[""],data:O,filterValue:E,setFilterValue:function(e){return j(e,!0)},pagination:w,ouiaId:"resource-definition-table",noData:0===u.length,rows:O.map((function(e){return{cells:[e]}})),titlePlural:l.formatMessage(h.Z.resourceDefinitions),titleSingular:l.formatMessage(h.Z.resourceDefinition),noDataDescription:[l.formatMessage(h.Z.resourceDefinition,{permission:i})],fetchData:j,tableId:"resource-definitions-modal"}))};g.propTypes={isOpen:l().bool,handleClose:l().func.isRequired,permission:l().string.isRequired,resourceDefinitions:l().arrayOf(l().shape({attributeFilter:l().shape({value:l().string.isRequired}).isRequired})).isRequired};const b=g},54250:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Y});var n=r(92950),i=r.n(n),o=r(45697),a=r.n(o),s=r(29439),c=r(93433),u=r(63053),l=r(4942),f=r(45987),p=r(50533),d=r(36580),m=r(71002),h=r(15861);function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),a=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function f(){}function p(){}function d(){}var h={};s(h,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(D([])));g&&g!==t&&r.call(g,i)&&(h=g);var b=d.prototype=f.prototype=Object.create(h);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(i,o,a,s){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==(0,m.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function Z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function D(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,s(b,"constructor",d),s(d,"constructor",p),p.displayName=s(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,a,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},O(w.prototype),s(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new w(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(b),s(b,a,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=D,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:D(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}var y=(0,r(96692).TR)();function g(e){return b.apply(this,arguments)}function b(){return(b=(0,h.Z)(v().mark((function e(t){var r,n,i,o,a,s;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.limit,n=t.offset,i=t.username,o=t.application,a=void 0===o?"":o,s=t.orderBy,e.next=3,y.getPrincipalAccess(a,i,s,r,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=r(65916),w=r(30060),E=r(86896),Z=r(30893),j=function(e){var t=e.onClick,r=e.access,n=(0,E.Z)();return 0===r.resourceDefinitions.length?i().createElement("span",null,n.formatMessage(Z.Z.notApplicable)):i().createElement("a",{onClick:function(){return t(),!1}},r.resourceDefinitions.length)};j.propTypes={onClick:a().func.isRequired,access:a().shape({resourceDefinitions:a().array.isRequired}).isRequired};const x=j;var D=["permission"],k=function(e,t,r){return e.reduce((function(e,o,a){var u=o.permission,l=(0,f.Z)(o,D),p=u.split(":"),d=(0,s.Z)(p,3),m=d[0],h=d[1],v=d[2];return[].concat((0,c.Z)(e),[{cells:[m,h,v].concat((0,c.Z)(t?[i().createElement(n.Fragment,{key:"rd"},i().createElement(x,{onClick:function(){return r(a)},access:l}))]:[]))}])}),[])},P=r(21167),L=r(1936),S=["application"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.filters,r=e.setFilters,o=e.apps,a=e.hasActiveFilters,u=e.showResourceDefinitions,m=(0,E.Z)(),h=(0,n.useState)({rdOpen:!1}),v=(0,s.Z)(h,2),y=v[0],b=y.rdOpen,j=y.rdPermission,x=y.resourceDefinitions,D=v[1],M=(0,n.useRef)([{title:m.formatMessage(Z.Z.application),key:"application",transforms:[L.sortable]},{title:m.formatMessage(Z.Z.resourceType),key:"resource_type",transforms:[L.sortable]},{title:m.formatMessage(Z.Z.operation),key:"verb",transforms:[L.sortable]}].concat((0,c.Z)(u?[{title:m.formatMessage(Z.Z.resourceDefinitions)}]:[]))).current,R=(0,p.useDispatch)(),T=(0,p.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),p.shallowEqual),_=T.permissions,C=T.isLoading,q=function(e){var t=e.application,r=(0,f.Z)(e,S),n=(null==t?void 0:t.length)>0?t:o;R(function(e){return{type:d.ft,payload:g(e)}}(F({application:n.join(",")},r)))};(0,n.useEffect)((function(){q(F(F({},O.he),{},{orderBy:V}))}),[]);var A=(0,n.useState)({index:0,direction:"asc"}),N=(0,s.Z)(A,2),B=N[0],I=N[1],V="".concat("desc"===(null==B?void 0:B.direction)?"-":"").concat(M[null==B?void 0:B.index].key),G=(null==_?void 0:_.data)||[];return i().createElement(n.Fragment,null,i().createElement(w.M,{columns:M,rows:k(G,u,(function(e){return D({rdOpen:!0,rdPermission:_.data[e].permission,resourceDefinitions:_.data[e].resourceDefinitions})})),data:G,fetchData:q,sortBy:B,onSort:function(e,r,n){var i="".concat("desc"===n?"-":"").concat(M[r].key);I({index:r,direction:n}),q(F(F({},null==_?void 0:_.meta),{},{offset:0,orderBy:i},(null==t?void 0:t.length)>0?F({},t.reduce((function(e,t){return F(F({},e),{},(0,l.Z)({},t.key,t.value))}),{})):{name:"",application:[]}))},filters:t,setFilterValue:r,isLoading:C,pagination:null==_?void 0:_.meta,ouiaId:"permissions-table",titlePlural:m.formatMessage(Z.Z.permissions).toLowerCase(),titleSingular:m.formatMessage(Z.Z.permission).toLowerCase(),noData:!C&&!a&&0===G.length,noDataDescription:[m.formatMessage(Z.Z.noPermissionsForInsights),m.formatMessage(Z.Z.contactOrgAdministrator)],tableId:"mua-access"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},b&&i().createElement(P.default,{resourceDefinitions:x,isOpen:b,handleClose:function(){return D({rdOpen:!1})},permission:j})))};R.propTypes={filters:a().arrayOf(a().object).isRequired,setFilters:a().func.isRequired,apps:a().arrayOf(a().string).isRequired,hasActiveFilters:a().bool,showResourceDefinitions:a().bool};const T=R;var _=r(23279),C=r.n(_),q=r(28090),A=r(19571);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=(0,n.lazy)((function(){return Promise.resolve().then(r.bind(r,21167))})),V=function(e){var t=e.filters,r=e.setFilters,o=e.apps,a=e.showResourceDefinitions,u=(0,E.Z)(),f=(0,n.useState)({}),d=(0,s.Z)(f,2),m=d[0],h=d[1],v=(0,n.useState)({rdOpen:!1}),y=(0,s.Z)(v,2),g=y[0],b=g.rdOpen,O=g.rdPermission,j=g.resourceDefinitions,D=y[1],k=[{title:u.formatMessage(Z.Z.roles),key:"display_name",transforms:[L.sortable]},u.formatMessage(Z.Z.description),{title:u.formatMessage(Z.Z.permissions),cellTransforms:[L.compoundExpand,(0,L.cellWidth)(20)]}],P=(0,p.useSelector)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),p.shallowEqual),S=P.roles,M=P.isLoading,F=P.rolesWithAccess,R=(0,n.useState)({index:0,direction:"asc"}),T=(0,s.Z)(R,2),_=T[0],N=T[1],V="".concat("desc"===(null==_?void 0:_.direction)?"-":"").concat(k[null==_?void 0:_.index].key),G=(0,p.useDispatch)();(0,n.useEffect)((function(){G((0,q.vd)({limit:20,offset:0,orderBy:V,scope:"principal",application:o.join(",")}))}),[]);var W,$=(0,n.useCallback)(C()((function(e,t,r,n,i,a){var s=(null==n?void 0:n.length)>0?n:o;return G((0,q.vd)({limit:e,offset:t,scope:"principal",orderBy:a,name:r,application:s.join(","),permission:i}))}),800),[]);return i().createElement(n.Fragment,null,i().createElement(w.M,{filters:t,columns:k,rows:(W=S.data,null==W?void 0:W.reduce((function(e,t,r){var o=t.uuid,s=t.display_name,l=t.name,f=t.description,p=t.accessCount;return[].concat((0,c.Z)(e),[{uuid:o,cells:[{title:s||l,props:{component:"th",isOpen:!1}},{title:f,props:{isOpen:!1}},{title:p,props:{isOpen:2===m[o]}}]},{uuid:"".concat(o,"-groups"),parent:2*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:null!=F&&F[o]?i().createElement(L.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:L.TableVariant.compact,cells:[u.formatMessage(Z.Z.application),u.formatMessage(Z.Z.resourceType),u.formatMessage(Z.Z.operation)].concat((0,c.Z)(a?[u.formatMessage(Z.Z.resourceDefinitions)]:[])),rows:F[o].access.map((function(e){return{cells:[].concat((0,c.Z)(e.permission.split(":")),(0,c.Z)(a?[i().createElement(n.Fragment,{key:"rd"},i().createElement(x,{onClick:function(){return D({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},i().createElement(L.TableHeader,null),i().createElement(L.TableBody,null)):i().createElement(A.Wi,null)}]}])}),[])),data:S.data,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,n,i){n?h((function(e){return B(B({},e),{},(0,l.Z)({},i.uuid,-1))})):(h((function(e){return B(B({},e),{},(0,l.Z)({},i.uuid,r))})),2===r&&G((0,q.DV)(i.uuid)))},ouiaId:"roles-table",fetchData:function(e){var t=e.limit,r=e.offset,n=e.name,i=e.application,o=e.permission,a=e.orderBy;$(t,r,n,i,o,a)},sortBy:_,onSort:function(e,r,n){var i="".concat("desc"===n?"-":"").concat(k[r].key);N({index:r,direction:n}),G((0,q.vd)(B({offset:0,orderBy:i},(null==t?void 0:t.length)>0?B({},t.reduce((function(e,t){return B(B({},e),{},(0,l.Z)({},t.key,t.value))}),{})):{name:"",application:[]})))},emptyFilters:{name:"",application:[]},setFilterValue:r,isLoading:M,pagination:S.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"mua-roles"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},b&&i().createElement(I,{resourceDefinitions:j,isOpen:b,handleClose:function(){return D({rdOpen:!1})},permission:O})))};V.propTypes={fetchRoles:a().func,fetchRoleForPrincipal:a().func,fetchUsers:a().func,roles:a().object,isLoading:a().bool,rolesWithAccess:a().object,filters:a().arrayOf(a().object).isRequired,setFilters:a().func.isRequired,apps:a().arrayOf(a().string).isRequired,showResourceDefinitions:a().bool};const G=V;var W=function(e){var t=e.apps,r=(0,n.useContext)(u.Z),o=(0,n.useState)(""),a=(0,s.Z)(o,2),l=a[0],f=a[1],p=(0,n.useState)(""),d=(0,s.Z)(p,2),m=d[0],h=d[1],v=(0,n.useState)([]),y=(0,s.Z)(v,2),g=y[0],b=y[1],O=function(e){var t=e.name,r=e.application,n=e.permission;"string"==typeof t&&f(t),"string"==typeof n&&h(n),r&&b("string"==typeof r?[]:r)},w=function(e){var t=e.apps,r=e.isOrgAdmin,n=e.name,i=void 0===n?"":n,o=e.application,a=void 0===o?[]:o,s=(0,E.Z)();return[{key:"application",value:a,placeholder:s.formatMessage(Z.Z.filterByKey,{key:s.formatMessage(Z.Z.application).toLowerCase()}),type:"checkbox",items:t.map((function(e){return{label:e,value:e}}))}].concat((0,c.Z)(r?[{key:"name",type:"text",value:i,label:s.formatMessage(Z.Z.roleName),placeholder:s.formatMessage(Z.Z.filterByKey,{key:s.formatMessage(Z.Z.roleName).toLowerCase()})}]:[]))}({apps:t,isOrgAdmin:r,name:l,application:g,permission:m});return r?i().createElement(G,{setFilters:O,filters:w,apps:t}):i().createElement(T,{setFilters:O,filters:w,apps:t,hasActiveFilters:l.length>0||g.length>0})};W.propTypes={apps:a().arrayOf(a().string).isRequired};const $=W;var K=function(e){var t=e.apps;return i().createElement($,{apps:t})};K.propTypes={apps:a().arrayOf(a().string).isRequired};const Y=K},27561:(e,t,r)=>{var n=r(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:(e,t,r)=>{var n=r(13218),i=r(7771),o=r(14841),a=Math.max,s=Math.min;e.exports=function(e,t,r){var c,u,l,f,p,d,m=0,h=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=c,n=u;return c=u=void 0,m=t,f=e.apply(n,r)}function b(e){return m=e,p=setTimeout(w,t),h?g(e):f}function O(e){var r=e-d;return void 0===d||r>=t||r<0||v&&e-m>=l}function w(){var e=i();if(O(e))return E(e);p=setTimeout(w,function(e){var r=t-(e-d);return v?s(r,l-(e-m)):r}(e))}function E(e){return p=void 0,y&&c?g(e):(c=u=void 0,f)}function Z(){var e=i(),r=O(e);if(c=arguments,u=this,d=e,r){if(void 0===p)return b(d);if(v)return clearTimeout(p),p=setTimeout(w,t),g(d)}return void 0===p&&(p=setTimeout(w,t)),f}return t=o(t)||0,n(r)&&(h=!!r.leading,l=(v="maxWait"in r)?a(o(r.maxWait)||0,t):l,y="trailing"in r?!!r.trailing:y),Z.cancel=function(){void 0!==p&&clearTimeout(p),m=0,c=d=u=p=void 0},Z.flush=function(){return void 0===p?f:E(i())},Z}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},14841:(e,t,r)=>{var n=r(27561),i=r(13218),o=r(33448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):a.test(e)?NaN:+e}}}]);