(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[250],{21167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(4942),i=r(29439),o=r(75857),s=r(96985),a=r.n(s),c=r(45697),l=r.n(c),u=r(41800),p=r(61338);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.isOpen,r=e.handleClose,n=e.permission,c=e.resourceDefinitions,l=(0,s.useState)((function(){return{filterValue:"",rows:c.map((function(e){return e.attributeFilter.value})).slice(0,p.he.limit),pagination:d(d({},p.he),{},{count:c.length})}})),f=(0,i.Z)(l,2),m=f[0],v=m.rows,b=m.pagination,y=m.filterValue,h=f[1],g=function(e){var t=e.name,r=void 0===t?"":t,n=e.limit,i=e.offset,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return h((function(e){var t=e.pagination,s=e.filterValue,a=c.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(r)})).slice(i,n);return{rows:a,filterValue:o?r:s,pagination:d(d({},t),{},{offset:o?0:i,limit:n,count:a.length})}}))};return a().createElement(o.Modal,{actions:[a().createElement(o.Button,{key:"close-action",variant:"primary",onClick:r},"Close")],variant:"large",isOpen:t,onClose:r,title:"Resource definitions",description:a().createElement("p",null,"View resource definitions for the ",a().createElement("strong",null,n)," permission")},a().createElement(u.M,{columns:[""],data:v,filterValue:y,setFilterValue:function(e){return g(e,!0)},pagination:b,ouiaId:"resource-definition-table",noData:0===c.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(n," permission")],fetchData:g,tableId:"resource-definitions-modal"}))};m.propTypes={isOpen:l().bool,handleClose:l().func.isRequired,permission:l().string.isRequired,resourceDefinitions:l().arrayOf(l().shape({attributeFilter:l().shape({value:l().string.isRequired}).isRequired})).isRequired};const v=m},54250:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var n=r(96985),i=r.n(n),o=r(45697),s=r.n(o),a=r(29439),c=r(93433),l=r(63053),u=r(4942),p=r(45987),f=r(28216),d=r(36580),m=r(15861),v=r(87757),b=r.n(v),y=(0,r(89400).TR)();function h(e){return g.apply(this,arguments)}function g(){return(g=(0,m.Z)(b().mark((function e(t){var r,n,i,o,s,a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.limit,n=t.offset,i=t.username,o=t.application,s=void 0===o?"":o,a=t.orderBy,e.next=3,y.getPrincipalAccess(s,i,a,r,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=r(61338),R=r(41800),D=function(e){var t=e.onClick,r=e.access;return 0===r.resourceDefinitions.length?i().createElement("span",null,"N/A"):i().createElement("a",{onClick:function(){return t(),!1}},r.resourceDefinitions.length)};D.propTypes={onClick:s().func.isRequired,access:s().shape({resourceDefinitions:s().array.isRequired}).isRequired};const E=D;var j=["permission"],w=r(21167),P=r(8351),k=["application"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Z=function(e){var t=e.filters,r=e.setFilters,o=e.apps,s=e.hasActiveFilters,l=e.showResourceDefinitions,m=(0,n.useState)({rdOpen:!1}),v=(0,a.Z)(m,2),b=v[0],y=b.rdOpen,g=b.rdPermission,D=b.resourceDefinitions,Z=v[1],S=(0,n.useRef)([{title:"Application",key:"application",transforms:[P.sortable]},{title:"Resource type",key:"resource_type",transforms:[P.sortable]},{title:"Operation",key:"verb",transforms:[P.sortable]}].concat((0,c.Z)(l?[{title:"Resource definitions"}]:[]))).current,T=(0,f.useDispatch)(),x=(0,f.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),f.shallowEqual),C=x.permissions,q=x.isLoading,A=function(e){var t=e.application,r=(0,p.Z)(e,k),n=(null==t?void 0:t.length)>0?t:o;T(function(e){return{type:d.ft,payload:h(e)}}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({application:n.join(",")},r)))},V=function(e){return Z({rdOpen:!0,rdPermission:C.data[e].permission,resourceDefinitions:C.data[e].resourceDefinitions})};(0,n.useEffect)((function(){A(O.he)}),[]);var I=(null==C?void 0:C.data)||[];return i().createElement(n.Fragment,null,i().createElement(R.M,{columns:S,createRows:function(e){return function(e,t,r){return e.reduce((function(e,o,s){var l=o.permission,u=(0,p.Z)(o,j),f=l.split(":"),d=(0,a.Z)(f,3),m=d[0],v=d[1],b=d[2];return[].concat((0,c.Z)(e),[{cells:[m,v,b].concat((0,c.Z)(t?[i().createElement(n.Fragment,{key:"rd"},i().createElement(E,{onClick:function(){return r(s)},access:u}))]:[]))}])}),[])}(e,l,V)},data:I,fetchData:A,filters:t,setFilterValue:r,isLoading:q,pagination:null==C?void 0:C.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!q&&!s&&0===I.length,noDataDescription:["You do not have individual permissions for Insights.","Contact your Org. Administrator for more information."],tableId:"mua-access"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},y&&i().createElement(w.default,{resourceDefinitions:D,isOpen:y,handleClose:function(){return Z({rdOpen:!1})},permission:g})))};Z.propTypes={filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,hasActiveFilters:s().bool,showResourceDefinitions:s().bool};const S=Z;var T=r(92818),x=r(23279),C=r.n(x),q=r(28090),A=r(19571);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,n.lazy)((function(){return Promise.resolve().then(r.bind(r,21167))})),_=[{title:"Roles",key:"display_name",transforms:[P.sortable]},"Description",{title:"Permissions",cellTransforms:[P.compoundExpand,(0,P.cellWidth)(20)]}],W=function(e){var t=e.fetchRoles,r=e.fetchRoleForPrincipal,o=e.roles,s=e.isLoading,l=e.rolesWithAccess,p=e.filters,f=e.setFilters,d=e.apps,m=e.showResourceDefinitions,v=(0,n.useState)({}),b=(0,a.Z)(v,2),y=b[0],h=b[1],g=(0,n.useState)({rdOpen:!1}),O=(0,a.Z)(g,2),D=O[0],j=D.rdOpen,w=D.rdPermission,k=D.resourceDefinitions,F=O[1];(0,n.useEffect)((function(){t({limit:20,offset:0,orderBy:"display_name",scope:"principal",application:d.join(",")})}),[]);var Z=(0,n.useCallback)(C()((function(e,r,n,i,o,s){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:r,scope:"principal",orderBy:s,name:n,application:a.join(","),permission:o})}),800),[]);return i().createElement(n.Fragment,null,i().createElement(R.M,{filters:p,columns:_,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,i,o){i?h((function(e){return I(I({},e),{},(0,u.Z)({},o.uuid,-1))})):(h((function(e){return I(I({},e),{},(0,u.Z)({},o.uuid,n))})),2===n&&r(o.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,r){var o=t.uuid,s=t.display_name,a=t.name,u=t.description,p=t.accessCount;return[].concat((0,c.Z)(e),[{uuid:o,cells:[{title:s||a,props:{component:"th",isOpen:!1}},{title:u,props:{isOpen:!1}},{title:p,props:{isOpen:2===y[o]}}]},{uuid:"".concat(o,"-groups"),parent:2*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:null!=l&&l[o]?i().createElement(P.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:P.TableVariant.compact,cells:["Application","Resource type","Operation"].concat((0,c.Z)(m?["Resource definitions"]:[])),rows:l[o].access.map((function(e){return{cells:[].concat((0,c.Z)(e.permission.split(":")),(0,c.Z)(m?[i().createElement(n.Fragment,{key:"rd"},i().createElement(E,{onClick:function(){return F({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},i().createElement(P.TableHeader,null),i().createElement(P.TableBody,null)):i().createElement(A.Wi,null)}]}])}),[])},ouiaId:"roles-table",data:o.data,fetchData:function(e){var t=e.limit,r=e.offset,n=e.name,i=e.application,o=e.permission,s=e.orderBy;Z(t,r,n,i,o,void 0===s?"display_name":s)},sortBy:{index:0,direction:"asc"},setFilterValue:f,isLoading:s,pagination:o.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"mua-roles"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},j&&i().createElement(L,{resourceDefinitions:k,isOpen:j,handleClose:function(){return F({rdOpen:!1})},permission:w})))};W.propTypes={fetchRoles:s().func,fetchRoleForPrincipal:s().func,fetchUsers:s().func,roles:s().object,isLoading:s().bool,rolesWithAccess:s().object,filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,showResourceDefinitions:s().bool};const B=(0,T.withRouter)((0,f.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e((0,q.vd)(t))},fetchRoleForPrincipal:function(t){return e((0,q.DV)(t))}}}))(W));var M=function(e){var t=e.apps,r=(0,n.useContext)(l.Z),o=(0,n.useState)(""),s=(0,a.Z)(o,2),u=s[0],p=s[1],f=(0,n.useState)(""),d=(0,a.Z)(f,2),m=d[0],v=d[1],b=(0,n.useState)([]),y=(0,a.Z)(b,2),h=y[0],g=y[1],O=function(e){var t=e.name,r=e.application,n=e.permission;"string"==typeof t&&p(t),"string"==typeof n&&v(n),r&&g("string"==typeof r?[]:r)},R=function(e){var t=e.isOrgAdmin,r=e.name,n=void 0===r?"":r,i=e.application;return[{key:"application",value:void 0===i?[]:i,placeholder:"Filter by application",type:"checkbox",items:e.apps.map((function(e){return{label:e,value:e}}))}].concat((0,c.Z)(t?[{key:"name",type:"text",value:n,label:"Role name",placeholder:"Filter by role name"}]:[]))}({apps:t,isOrgAdmin:r,name:u,application:h,permission:m});return r?i().createElement(B,{setFilters:O,filters:R,apps:t}):i().createElement(S,{setFilters:O,filters:R,apps:t,hasActiveFilters:u.length>0||h.length>0})};M.propTypes={apps:s().arrayOf(s().string).isRequired};const N=M;var $=function(e){var t=e.apps;return i().createElement(N,{apps:t})};$.propTypes={apps:s().arrayOf(s().string).isRequired};const z=$},27561:(e,t,r)=>{var n=r(67990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:(e,t,r)=>{var n=r(13218),i=r(7771),o=r(14841),s=Math.max,a=Math.min;e.exports=function(e,t,r){var c,l,u,p,f,d,m=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=c,n=l;return c=l=void 0,m=t,p=e.apply(n,r)}function g(e){return m=e,f=setTimeout(R,t),v?h(e):p}function O(e){var r=e-d;return void 0===d||r>=t||r<0||b&&e-m>=u}function R(){var e=i();if(O(e))return D(e);f=setTimeout(R,function(e){var r=t-(e-d);return b?a(r,u-(e-m)):r}(e))}function D(e){return f=void 0,y&&c?h(e):(c=l=void 0,p)}function E(){var e=i(),r=O(e);if(c=arguments,l=this,d=e,r){if(void 0===f)return g(d);if(b)return clearTimeout(f),f=setTimeout(R,t),h(d)}return void 0===f&&(f=setTimeout(R,t)),p}return t=o(t)||0,n(r)&&(v=!!r.leading,u=(b="maxWait"in r)?s(o(r.maxWait)||0,t):u,y="trailing"in r?!!r.trailing:y),E.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=d=l=f=void 0},E.flush=function(){return void 0===f?p:D(i())},E}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},14841:(e,t,r)=>{var n=r(27561),i=r(13218),o=r(33448),s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=a.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):s.test(e)?NaN:+e}}}]);
//# sourceMappingURL=../sourcemaps/250.86ae5ad5c3025c30599af9e68c5f00d5.js.map