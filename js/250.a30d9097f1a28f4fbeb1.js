(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[250],{21167:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(96156),i=n(28481),o=n(489),s=n(92950),a=n.n(s),c=n(45697),l=n.n(c),u=n(41800),p=n(61338);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,c=e.resourceDefinitions,l=(0,s.useState)((function(){return{filterValue:"",rows:c.map((function(e){return e.attributeFilter.value})).slice(0,p.he.limit),pagination:d(d({},p.he),{},{count:c.length})}})),f=(0,i.Z)(l,2),m=f[0],b=m.rows,O=m.pagination,y=m.filterValue,g=f[1],h=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,i=e.offset,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return g((function(e){var t=e.pagination,s=e.filterValue,a=c.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(i,r);return{rows:a,filterValue:o?n:s,pagination:d(d({},t),{},{offset:o?0:i,limit:r,count:a.length})}}))};return a().createElement(o.Modal,{actions:[a().createElement(o.Button,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:a().createElement("p",null,"View resource definitions for the ",a().createElement("strong",null,r)," permission")},a().createElement(u.M,{columns:[""],data:b,filterValue:y,setFilterValue:function(e){return h(e,!0)},pagination:O,ouiaId:"resource-definition-table",noData:0===c.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:h,tableId:"resource-definitions-modal"}))};m.propTypes={isOpen:l().bool,handleClose:l().func.isRequired,permission:l().string.isRequired,resourceDefinitions:l().arrayOf(l().shape({attributeFilter:l().shape({value:l().string.isRequired}).isRequired})).isRequired};const b=m},54250:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var r=n(92950),i=n.n(r),o=n(45697),s=n.n(o),a=n(28481),c=n(85061),l=n(63053),u=n(96156),p=n(81253),f=n(45237),d=n(36580),m=n(92137),b=n(87757),O=n.n(b),y=(0,n(89400).TR)();function g(e){return h.apply(this,arguments)}function h(){return(h=(0,m.Z)(O().mark((function e(t){var n,r,i,o,s;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,o=t.application,s=void 0===o?"":o,e.next=3,y.getPrincipalAccess(s,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(61338),R=n(41800),D=function(e){var t=e.onClick,n=e.access;return 0===n.resourceDefinitions.length?i().createElement("span",null,"N/A"):i().createElement("a",{onClick:function(){return t(),!1}},n.resourceDefinitions.length)};D.propTypes={onClick:s().func.isRequired,access:s().shape({resourceDefinitions:s().array.isRequired}).isRequired};const j=D;var E=["permission"],P=n(21167),w=["application"];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z=function(e){var t=e.filters,n=e.setFilters,o=e.apps,s=e.hasActiveFilters,l=e.showResourceDefinitions,m=(0,r.useState)({rdOpen:!1}),b=(0,a.Z)(m,2),O=b[0],y=O.rdOpen,h=O.rdPermission,D=O.resourceDefinitions,Z=b[1],k=(0,r.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat((0,c.Z)(l?[{title:"Resource definitions"}]:[]))).current,S=(0,f.useDispatch)(),C=(0,f.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),f.shallowEqual),q=C.permissions,A=C.isLoading,T=function(e){var t=e.application,n=(0,p.Z)(e,w),r=(null==t?void 0:t.length)>0?t:o;S(function(e){return{type:d.ft,payload:g(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:r.join(",")},n)))},V=function(e){return Z({rdOpen:!0,rdPermission:q.data[e].permission,resourceDefinitions:q.data[e].resourceDefinitions})};(0,r.useEffect)((function(){T(v.he)}),[]);var x=(null==q?void 0:q.data)||[];return i().createElement(r.Fragment,null,i().createElement(R.M,{columns:k,createRows:function(e){return function(e,t,n){return e.reduce((function(e,o,s){var l=o.permission,u=(0,p.Z)(o,E),f=l.split(":"),d=(0,a.Z)(f,3),m=d[0],b=d[1],O=d[2];return[].concat((0,c.Z)(e),[{cells:[m,b,O].concat((0,c.Z)(t?[i().createElement(r.Fragment,{key:"rd"},i().createElement(j,{onClick:function(){return n(s)},access:u}))]:[]))}])}),[])}(e,l,V)},data:x,fetchData:T,filters:t,setFilterValue:n,isLoading:A,pagination:null==q?void 0:q.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!A&&!s&&0===x.length,noDataDescription:["You do not have individual permissions for Insights.","Contact your Org. Administrator for more information."],tableId:"mua-access"}),i().createElement(r.Suspense,{fallback:i().createElement(r.Fragment,null)},y&&i().createElement(P.default,{resourceDefinitions:D,isOpen:y,handleClose:function(){return Z({rdOpen:!1})},permission:h})))};Z.propTypes={filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,hasActiveFilters:s().bool,showResourceDefinitions:s().bool};const k=Z;var S=n(334),C=n(23279),q=n.n(C),A=n(28090),T=n(19571),V=n(62691);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=(0,r.lazy)((function(){return Promise.resolve().then(n.bind(n,21167))})),_=[{title:"Roles",key:"display_name",transforms:[V.sortable]},"Description",{title:"Permissions",cellTransforms:[V.compoundExpand,(0,V.cellWidth)(20)]}],B=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,o=e.roles,s=e.isLoading,l=e.rolesWithAccess,p=e.filters,f=e.setFilters,d=e.apps,m=e.showResourceDefinitions,b=(0,r.useState)({}),O=(0,a.Z)(b,2),y=O[0],g=O[1],h=(0,r.useState)({rdOpen:!1}),v=(0,a.Z)(h,2),D=v[0],E=D.rdOpen,P=D.rdPermission,w=D.resourceDefinitions,F=v[1];(0,r.useEffect)((function(){t({limit:20,offset:0,orderBy:"display_name",scope:"principal",application:d.join(",")})}),[]);var Z=(0,r.useCallback)(q()((function(e,n,r,i,o,s){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:n,scope:"principal",orderBy:s,name:r,application:a.join(","),permission:o})}),800),[]);return i().createElement(r.Fragment,null,i().createElement(R.M,{filters:p,columns:_,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,i,o){i?g((function(e){return L(L({},e),{},(0,u.Z)({},o.uuid,-1))})):(g((function(e){return L(L({},e),{},(0,u.Z)({},o.uuid,r))})),2===r&&n(o.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var o=t.uuid,s=t.display_name,a=t.name,u=t.description,p=t.accessCount;return[].concat((0,c.Z)(e),[{uuid:o,cells:[{title:s||a,props:{component:"th",isOpen:!1}},{title:u,props:{isOpen:!1}},{title:p,props:{isOpen:2===y[o]}}]},{uuid:"".concat(o,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:null!=l&&l[o]?i().createElement(V.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:V.TableVariant.compact,cells:["Application","Resource type","Operation"].concat((0,c.Z)(m?["Resource definitions"]:[])),rows:l[o].access.map((function(e){return{cells:[].concat((0,c.Z)(e.permission.split(":")),(0,c.Z)(m?[i().createElement(r.Fragment,{key:"rd"},i().createElement(j,{onClick:function(){return F({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},i().createElement(V.TableHeader,null),i().createElement(V.TableBody,null)):i().createElement(T.Wi,null)}]}])}),[])},ouiaId:"roles-table",data:o.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application,o=e.permission,s=e.orderBy;Z(t,n,r,i,o,void 0===s?"display_name":s)},sortBy:{index:0,direction:"asc"},setFilterValue:f,isLoading:s,pagination:o.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"mua-roles"}),i().createElement(r.Suspense,{fallback:i().createElement(r.Fragment,null)},E&&i().createElement(I,{resourceDefinitions:w,isOpen:E,handleClose:function(){return F({rdOpen:!1})},permission:P})))};B.propTypes={fetchRoles:s().func,fetchRoleForPrincipal:s().func,fetchUsers:s().func,roles:s().object,isLoading:s().bool,rolesWithAccess:s().object,filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,showResourceDefinitions:s().bool};const W=(0,S.withRouter)((0,f.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e((0,A.vd)(t))},fetchRoleForPrincipal:function(t){return e((0,A.DV)(t))}}}))(B));var M=function(e){var t=e.apps,n=(0,r.useContext)(l.Z),o=(0,r.useState)(""),s=(0,a.Z)(o,2),u=s[0],p=s[1],f=(0,r.useState)(""),d=(0,a.Z)(f,2),m=d[0],b=d[1],O=(0,r.useState)([]),y=(0,a.Z)(O,2),g=y[0],h=y[1],v=function(e){var t=e.name,n=e.application,r=e.permission;"string"==typeof t&&p(t),"string"==typeof r&&b(r),n&&h("string"==typeof n?[]:n)},R=function(e){var t=e.isOrgAdmin,n=e.name,r=void 0===n?"":n,i=e.application;return[{key:"application",value:void 0===i?[]:i,placeholder:"Filter by application",type:"checkbox",items:e.apps.map((function(e){return{label:e,value:e}}))}].concat((0,c.Z)(t?[{key:"name",type:"text",value:r,label:"Role name",placeholder:"Filter by role name"}]:[]))}({apps:t,isOrgAdmin:n,name:u,application:g,permission:m});return n?i().createElement(W,{setFilters:v,filters:R,apps:t}):i().createElement(k,{setFilters:v,filters:R,apps:t,hasActiveFilters:u.length>0||g.length>0})};M.propTypes={apps:s().arrayOf(s().string).isRequired};const N=M;var z=function(e){var t=e.apps;return i().createElement(N,{apps:t})};z.propTypes={apps:s().arrayOf(s().string).isRequired};const H=z}}]);
//# sourceMappingURL=../sourcemaps/250.4d483fbce6154079fc8a.js.map