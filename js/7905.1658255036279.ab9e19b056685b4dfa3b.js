/*! For license information please see 7905.1658255036279.ab9e19b056685b4dfa3b.js.LICENSE.txt */
(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[7905],{7081:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>a,lb:()=>i,wl:()=>o});var n=r(40400);const i={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},o=(0,n.IU)(i),a=o},80810:(e,t,r)=>{"use strict";r.d(t,{W1:()=>o,ZP:()=>a,xQ:()=>i});var n=r(40400);const i={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},o=(0,n.IU)(i),a=o},21167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(4942),i=r(29439),o=r(57262),a=r(92950),s=r.n(a),c=r(45697),u=r.n(c),l=r(41800),f=r(61338);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.isOpen,r=e.handleClose,n=e.permission,c=e.resourceDefinitions,u=(0,a.useState)((function(){return{filterValue:"",rows:c.map((function(e){return e.attributeFilter.value})).slice(0,f.he.limit),pagination:h(h({},f.he),{},{count:c.length})}})),p=(0,i.Z)(u,2),d=p[0],v=d.rows,m=d.pagination,y=d.filterValue,g=p[1],b=function(e){var t=e.name,r=void 0===t?"":t,n=e.limit,i=e.offset,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return g((function(e){var t=e.pagination,a=e.filterValue,s=c.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(r)})).slice(i,n);return{rows:s,filterValue:o?r:a,pagination:h(h({},t),{},{offset:o?0:i,limit:n,count:s.length})}}))};return s().createElement(o.Modal,{actions:[s().createElement(o.Button,{key:"close-action",variant:"primary",onClick:r},"Close")],variant:"large",isOpen:t,onClose:r,title:"Resource definitions",description:s().createElement("p",null,"View resource definitions for the ",s().createElement("strong",null,n)," permission")},s().createElement(l.M,{columns:[""],data:v,filterValue:y,setFilterValue:function(e){return b(e,!0)},pagination:m,ouiaId:"resource-definition-table",noData:0===c.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(n," permission")],fetchData:b,tableId:"resource-definitions-modal"}))};d.propTypes={isOpen:u().bool,handleClose:u().func.isRequired,permission:u().string.isRequired,resourceDefinitions:u().arrayOf(u().shape({attributeFilter:u().shape({value:u().string.isRequired}).isRequired})).isRequired};const v=d},54250:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var n=r(92950),i=r.n(n),o=r(45697),a=r.n(o),s=r(29439),c=r(93433),u=r(63053),l=r(4942),f=r(45987),p=r(28216),h=r(36580),d=r(71002),v=r(15861);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),a=new P(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return{value:void 0,done:!0}}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function f(){}function p(){}function h(){}var v={};s(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==t&&r.call(g,i)&&(v=g);var b=h.prototype=f.prototype=Object.create(v);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(i,o,a,s){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==(0,d.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function R(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:D}}function D(){return{value:void 0,done:!0}}return p.prototype=h,s(b,"constructor",h),s(h,"constructor",p),p.displayName=s(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,a,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},O(w.prototype),s(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new w(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(b),s(b,a,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}var y=(0,r(89400).TR)();function g(e){return b.apply(this,arguments)}function b(){return(b=(0,v.Z)(m().mark((function e(t){var r,n,i,o,a,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.limit,n=t.offset,i=t.username,o=t.application,a=void 0===o?"":o,s=t.orderBy,e.next=3,y.getPrincipalAccess(a,i,s,r,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=r(61338),w=r(41800),E=function(e){var t=e.onClick,r=e.access;return 0===r.resourceDefinitions.length?i().createElement("span",null,"N/A"):i().createElement("a",{onClick:function(){return t(),!1}},r.resourceDefinitions.length)};E.propTypes={onClick:a().func.isRequired,access:a().shape({resourceDefinitions:a().array.isRequired}).isRequired};const j=E;var x=["permission"],P=r(21167),R=r(1936),D=["application"];function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var k=function(e){var t=e.filters,r=e.setFilters,o=e.apps,a=e.hasActiveFilters,u=e.showResourceDefinitions,d=(0,n.useState)({rdOpen:!1}),v=(0,s.Z)(d,2),m=v[0],y=m.rdOpen,b=m.rdPermission,E=m.resourceDefinitions,k=v[1],F=(0,n.useRef)([{title:"Application",key:"application",transforms:[R.sortable]},{title:"Resource type",key:"resource_type",transforms:[R.sortable]},{title:"Operation",key:"verb",transforms:[R.sortable]}].concat((0,c.Z)(u?[{title:"Resource definitions"}]:[]))).current,S=(0,p.useDispatch)(),Z=(0,p.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),p.shallowEqual),_=Z.permissions,T=Z.isLoading,C=function(e){var t=e.application,r=(0,f.Z)(e,D),n=(null==t?void 0:t.length)>0?t:o;S(function(e){return{type:h.ft,payload:g(e)}}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({application:n.join(",")},r)))},q=function(e){return k({rdOpen:!0,rdPermission:_.data[e].permission,resourceDefinitions:_.data[e].resourceDefinitions})};(0,n.useEffect)((function(){C(O.he)}),[]);var A=(null==_?void 0:_.data)||[];return i().createElement(n.Fragment,null,i().createElement(w.M,{columns:F,createRows:function(e){return function(e,t,r){return e.reduce((function(e,o,a){var u=o.permission,l=(0,f.Z)(o,x),p=u.split(":"),h=(0,s.Z)(p,3),d=h[0],v=h[1],m=h[2];return[].concat((0,c.Z)(e),[{cells:[d,v,m].concat((0,c.Z)(t?[i().createElement(n.Fragment,{key:"rd"},i().createElement(j,{onClick:function(){return r(a)},access:l}))]:[]))}])}),[])}(e,u,q)},data:A,fetchData:C,filters:t,setFilterValue:r,isLoading:T,pagination:null==_?void 0:_.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!T&&!a&&0===A.length,noDataDescription:["You do not have individual permissions for Insights.","Contact your Org. Administrator for more information."],tableId:"mua-access"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},y&&i().createElement(P.default,{resourceDefinitions:E,isOpen:y,handleClose:function(){return k({rdOpen:!1})},permission:b})))};k.propTypes={filters:a().arrayOf(a().object).isRequired,setFilters:a().func.isRequired,apps:a().arrayOf(a().string).isRequired,hasActiveFilters:a().bool,showResourceDefinitions:a().bool};const F=k;var S=r(334),Z=r(23279),_=r.n(Z),T=r(28090),C=r(19571);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=(0,n.lazy)((function(){return Promise.resolve().then(r.bind(r,21167))})),N=[{title:"Roles",key:"display_name",transforms:[R.sortable]},"Description",{title:"Permissions",cellTransforms:[R.compoundExpand,(0,R.cellWidth)(20)]}],V=function(e){var t=e.fetchRoles,r=e.fetchRoleForPrincipal,o=e.roles,a=e.isLoading,u=e.rolesWithAccess,f=e.filters,p=e.setFilters,h=e.apps,d=e.showResourceDefinitions,v=(0,n.useState)({}),m=(0,s.Z)(v,2),y=m[0],g=m[1],b=(0,n.useState)({rdOpen:!1}),O=(0,s.Z)(b,2),E=O[0],x=E.rdOpen,P=E.rdPermission,D=E.resourceDefinitions,L=O[1];(0,n.useEffect)((function(){t({limit:20,offset:0,orderBy:"display_name",scope:"principal",application:h.join(",")})}),[]);var k=(0,n.useCallback)(_()((function(e,r,n,i,o,a){var s=(null==i?void 0:i.length)>0?i:h;return t({limit:e,offset:r,scope:"principal",orderBy:a,name:n,application:s.join(","),permission:o})}),800),[]);return i().createElement(n.Fragment,null,i().createElement(w.M,{filters:f,columns:N,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,i,o){i?g((function(e){return A(A({},e),{},(0,l.Z)({},o.uuid,-1))})):(g((function(e){return A(A({},e),{},(0,l.Z)({},o.uuid,n))})),2===n&&r(o.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,r){var o=t.uuid,a=t.display_name,s=t.name,l=t.description,f=t.accessCount;return[].concat((0,c.Z)(e),[{uuid:o,cells:[{title:a||s,props:{component:"th",isOpen:!1}},{title:l,props:{isOpen:!1}},{title:f,props:{isOpen:2===y[o]}}]},{uuid:"".concat(o,"-groups"),parent:2*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:null!=u&&u[o]?i().createElement(R.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:R.TableVariant.compact,cells:["Application","Resource type","Operation"].concat((0,c.Z)(d?["Resource definitions"]:[])),rows:u[o].access.map((function(e){return{cells:[].concat((0,c.Z)(e.permission.split(":")),(0,c.Z)(d?[i().createElement(n.Fragment,{key:"rd"},i().createElement(j,{onClick:function(){return L({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},i().createElement(R.TableHeader,null),i().createElement(R.TableBody,null)):i().createElement(C.Wi,null)}]}])}),[])},ouiaId:"roles-table",data:o.data,fetchData:function(e){var t=e.limit,r=e.offset,n=e.name,i=e.application,o=e.permission,a=e.orderBy;k(t,r,n,i,o,void 0===a?"display_name":a)},sortBy:{index:0,direction:"asc"},emptyFilters:{name:"",application:[]},setFilterValue:p,isLoading:a,pagination:o.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"mua-roles"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},x&&i().createElement(I,{resourceDefinitions:D,isOpen:x,handleClose:function(){return L({rdOpen:!1})},permission:P})))};V.propTypes={fetchRoles:a().func,fetchRoleForPrincipal:a().func,fetchUsers:a().func,roles:a().object,isLoading:a().bool,rolesWithAccess:a().object,filters:a().arrayOf(a().object).isRequired,setFilters:a().func.isRequired,apps:a().arrayOf(a().string).isRequired,showResourceDefinitions:a().bool};const M=(0,S.withRouter)((0,p.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e((0,T.vd)(t))},fetchRoleForPrincipal:function(t){return e((0,T.DV)(t))}}}))(V));var W=function(e){var t=e.apps,r=(0,n.useContext)(u.Z),o=(0,n.useState)(""),a=(0,s.Z)(o,2),l=a[0],f=a[1],p=(0,n.useState)(""),h=(0,s.Z)(p,2),d=h[0],v=h[1],m=(0,n.useState)([]),y=(0,s.Z)(m,2),g=y[0],b=y[1],O=function(e){var t=e.name,r=e.application,n=e.permission;"string"==typeof t&&f(t),"string"==typeof n&&v(n),r&&b("string"==typeof r?[]:r)},w=function(e){var t=e.isOrgAdmin,r=e.name,n=void 0===r?"":r,i=e.application;return[{key:"application",value:void 0===i?[]:i,placeholder:"Filter by application",type:"checkbox",items:e.apps.map((function(e){return{label:e,value:e}}))}].concat((0,c.Z)(t?[{key:"name",type:"text",value:n,label:"Role name",placeholder:"Filter by role name"}]:[]))}({apps:t,isOrgAdmin:r,name:l,application:g,permission:d});return r?i().createElement(M,{setFilters:O,filters:w,apps:t}):i().createElement(F,{setFilters:O,filters:w,apps:t,hasActiveFilters:l.length>0||g.length>0})};W.propTypes={apps:a().arrayOf(a().string).isRequired};const G=W;var B=function(e){var t=e.apps;return i().createElement(G,{apps:t})};B.propTypes={apps:a().arrayOf(a().string).isRequired};const z=B},63012:(e,t,r)=>{var n=r(97786),i=r(10611),o=r(71811);e.exports=function(e,t,r){for(var a=-1,s=t.length,c={};++a<s;){var u=t[a],l=n(e,u);r(l,u)&&i(c,o(u,e),l)}return c}},10611:(e,t,r)=>{var n=r(34865),i=r(71811),o=r(65776),a=r(13218),s=r(40327);e.exports=function(e,t,r,c){if(!a(e))return e;for(var u=-1,l=(t=i(t,e)).length,f=l-1,p=e;null!=p&&++u<l;){var h=s(t[u]),d=r;if("__proto__"===h||"constructor"===h||"prototype"===h)return e;if(u!=f){var v=p[h];void 0===(d=c?c(v,h,p):void 0)&&(d=a(v)?v:o(t[u+1])?[]:{})}n(p,h,d),p=p[h]}return e}},27561:(e,t,r)=>{var n=r(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:(e,t,r)=>{var n=r(13218),i=r(7771),o=r(14841),a=Math.max,s=Math.min;e.exports=function(e,t,r){var c,u,l,f,p,h,d=0,v=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=c,n=u;return c=u=void 0,d=t,f=e.apply(n,r)}function b(e){return d=e,p=setTimeout(w,t),v?g(e):f}function O(e){var r=e-h;return void 0===h||r>=t||r<0||m&&e-d>=l}function w(){var e=i();if(O(e))return E(e);p=setTimeout(w,function(e){var r=t-(e-h);return m?s(r,l-(e-d)):r}(e))}function E(e){return p=void 0,y&&c?g(e):(c=u=void 0,f)}function j(){var e=i(),r=O(e);if(c=arguments,u=this,h=e,r){if(void 0===p)return b(h);if(m)return clearTimeout(p),p=setTimeout(w,t),g(h)}return void 0===p&&(p=setTimeout(w,t)),f}return t=o(t)||0,n(r)&&(v=!!r.leading,l=(m="maxWait"in r)?a(o(r.maxWait)||0,t):l,y="trailing"in r?!!r.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),d=0,c=h=u=p=void 0},j.flush=function(){return void 0===p?f:E(i())},j}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},35937:(e,t,r)=>{var n=r(29932),i=r(67206),o=r(63012),a=r(46904);e.exports=function(e,t){if(null==e)return{};var r=n(a(e),(function(e){return[e]}));return t=i(t),o(e,r,(function(e,r){return t(e,r[0])}))}},14841:(e,t,r)=>{var n=r(27561),i=r(13218),o=r(33448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=../sourcemaps/7905.fa05c290c21bfd8aca0006d901027523.js.map