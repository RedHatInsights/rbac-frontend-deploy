(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[250],{21167:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(96156),i=r(28481),o=r(97066),s=r(92950),a=r.n(s),c=r(45697),l=r.n(c),u=r(41800),p=r(61338);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.isOpen,r=e.handleClose,n=e.permission,c=e.resourceDefinitions,l=(0,s.useState)((function(){return{filterValue:"",rows:c.map((function(e){return e.attributeFilter.value})).slice(0,p.he.limit),pagination:d(d({},p.he),{},{count:c.length})}})),f=(0,i.Z)(l,2),m=f[0],b=m.rows,y=m.pagination,O=m.filterValue,g=f[1],h=function(e){var t=e.name,r=void 0===t?"":t,n=e.limit,i=e.offset,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return g((function(e){var t=e.pagination,s=e.filterValue,a=c.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(r)})).slice(i,n);return{rows:a,filterValue:o?r:s,pagination:d(d({},t),{},{offset:o?0:i,limit:n,count:a.length})}}))};return a().createElement(o.Modal,{actions:[a().createElement(o.Button,{key:"close-action",variant:"primary",onClick:r},"Close")],variant:"large",isOpen:t,onClose:r,title:"Resource definitions",description:a().createElement("p",null,"View resource definitions for the ",a().createElement("strong",null,n)," permission")},a().createElement(u.M,{columns:[""],data:b,filterValue:O,setFilterValue:function(e){return h(e,!0)},pagination:y,ouiaId:"resource-definition-table",noData:0===c.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(n," permission")],fetchData:h,tableId:"resource-definitions-modal"}))};m.propTypes={isOpen:l().bool,handleClose:l().func.isRequired,permission:l().string.isRequired,resourceDefinitions:l().arrayOf(l().shape({attributeFilter:l().shape({value:l().string.isRequired}).isRequired})).isRequired};const b=m},54250:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>H});var n=r(92950),i=r.n(n),o=r(45697),s=r.n(o),a=r(28481),c=r(85061),l=r(63053),u=r(96156),p=r(81253),f=r(45237),d=r(36580),m=r(92137),b=r(87757),y=r.n(b),O=(0,r(89400).TR)();function g(e){return h.apply(this,arguments)}function h(){return(h=(0,m.Z)(y().mark((function e(t){var r,n,i,o,s,a;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.limit,n=t.offset,i=t.username,o=t.application,s=void 0===o?"":o,a=t.orderBy,e.next=3,O.getPrincipalAccess(s,i,a,r,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=r(61338),R=r(41800),D=function(e){var t=e.onClick,r=e.access;return 0===r.resourceDefinitions.length?i().createElement("span",null,"N/A"):i().createElement("a",{onClick:function(){return t(),!1}},r.resourceDefinitions.length)};D.propTypes={onClick:s().func.isRequired,access:s().shape({resourceDefinitions:s().array.isRequired}).isRequired};const j=D;var E=["permission"],P=r(21167),w=r(6877),k=["application"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Z=function(e){var t=e.filters,r=e.setFilters,o=e.apps,s=e.hasActiveFilters,l=e.showResourceDefinitions,m=(0,n.useState)({rdOpen:!1}),b=(0,a.Z)(m,2),y=b[0],O=y.rdOpen,h=y.rdPermission,D=y.resourceDefinitions,Z=b[1],S=(0,n.useRef)([{title:"Application",key:"application",transforms:[w.sortable]},{title:"Resource type",key:"resource_type",transforms:[w.sortable]},{title:"Operation",key:"verb",transforms:[w.sortable]}].concat((0,c.Z)(l?[{title:"Resource definitions"}]:[]))).current,C=(0,f.useDispatch)(),q=(0,f.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),f.shallowEqual),A=q.permissions,T=q.isLoading,V=function(e){var t=e.application,r=(0,p.Z)(e,k),n=(null==t?void 0:t.length)>0?t:o;C(function(e){return{type:d.ft,payload:g(e)}}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({application:n.join(",")},r)))},x=function(e){return Z({rdOpen:!0,rdPermission:A.data[e].permission,resourceDefinitions:A.data[e].resourceDefinitions})};(0,n.useEffect)((function(){V(v.he)}),[]);var L=(null==A?void 0:A.data)||[];return i().createElement(n.Fragment,null,i().createElement(R.M,{columns:S,createRows:function(e){return function(e,t,r){return e.reduce((function(e,o,s){var l=o.permission,u=(0,p.Z)(o,E),f=l.split(":"),d=(0,a.Z)(f,3),m=d[0],b=d[1],y=d[2];return[].concat((0,c.Z)(e),[{cells:[m,b,y].concat((0,c.Z)(t?[i().createElement(n.Fragment,{key:"rd"},i().createElement(j,{onClick:function(){return r(s)},access:u}))]:[]))}])}),[])}(e,l,x)},data:L,fetchData:V,filters:t,setFilterValue:r,isLoading:T,pagination:null==A?void 0:A.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!T&&!s&&0===L.length,noDataDescription:["You do not have individual permissions for Insights.","Contact your Org. Administrator for more information."],tableId:"mua-access"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},O&&i().createElement(P.default,{resourceDefinitions:D,isOpen:O,handleClose:function(){return Z({rdOpen:!1})},permission:h})))};Z.propTypes={filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,hasActiveFilters:s().bool,showResourceDefinitions:s().bool};const S=Z;var C=r(334),q=r(23279),A=r.n(q),T=r(28090),V=r(19571);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=(0,n.lazy)((function(){return Promise.resolve().then(r.bind(r,21167))})),I=[{title:"Roles",key:"display_name",transforms:[w.sortable]},"Description",{title:"Permissions",cellTransforms:[w.compoundExpand,(0,w.cellWidth)(20)]}],B=function(e){var t=e.fetchRoles,r=e.fetchRoleForPrincipal,o=e.roles,s=e.isLoading,l=e.rolesWithAccess,p=e.filters,f=e.setFilters,d=e.apps,m=e.showResourceDefinitions,b=(0,n.useState)({}),y=(0,a.Z)(b,2),O=y[0],g=y[1],h=(0,n.useState)({rdOpen:!1}),v=(0,a.Z)(h,2),D=v[0],E=D.rdOpen,P=D.rdPermission,k=D.resourceDefinitions,F=v[1];(0,n.useEffect)((function(){t({limit:20,offset:0,orderBy:"display_name",scope:"principal",application:d.join(",")})}),[]);var Z=(0,n.useCallback)(A()((function(e,r,n,i,o,s){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:r,scope:"principal",orderBy:s,name:n,application:a.join(","),permission:o})}),800),[]);return i().createElement(n.Fragment,null,i().createElement(R.M,{filters:p,columns:I,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,i,o){i?g((function(e){return L(L({},e),{},(0,u.Z)({},o.uuid,-1))})):(g((function(e){return L(L({},e),{},(0,u.Z)({},o.uuid,n))})),2===n&&r(o.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,r){var o=t.uuid,s=t.display_name,a=t.name,u=t.description,p=t.accessCount;return[].concat((0,c.Z)(e),[{uuid:o,cells:[{title:s||a,props:{component:"th",isOpen:!1}},{title:u,props:{isOpen:!1}},{title:p,props:{isOpen:2===O[o]}}]},{uuid:"".concat(o,"-groups"),parent:2*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:null!=l&&l[o]?i().createElement(w.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:w.TableVariant.compact,cells:["Application","Resource type","Operation"].concat((0,c.Z)(m?["Resource definitions"]:[])),rows:l[o].access.map((function(e){return{cells:[].concat((0,c.Z)(e.permission.split(":")),(0,c.Z)(m?[i().createElement(n.Fragment,{key:"rd"},i().createElement(j,{onClick:function(){return F({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},i().createElement(w.TableHeader,null),i().createElement(w.TableBody,null)):i().createElement(V.Wi,null)}]}])}),[])},ouiaId:"roles-table",data:o.data,fetchData:function(e){var t=e.limit,r=e.offset,n=e.name,i=e.application,o=e.permission,s=e.orderBy;Z(t,r,n,i,o,void 0===s?"display_name":s)},sortBy:{index:0,direction:"asc"},setFilterValue:f,isLoading:s,pagination:o.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"mua-roles"}),i().createElement(n.Suspense,{fallback:i().createElement(n.Fragment,null)},E&&i().createElement(_,{resourceDefinitions:k,isOpen:E,handleClose:function(){return F({rdOpen:!1})},permission:P})))};B.propTypes={fetchRoles:s().func,fetchRoleForPrincipal:s().func,fetchUsers:s().func,roles:s().object,isLoading:s().bool,rolesWithAccess:s().object,filters:s().arrayOf(s().object).isRequired,setFilters:s().func.isRequired,apps:s().arrayOf(s().string).isRequired,showResourceDefinitions:s().bool};const W=(0,C.withRouter)((0,f.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e((0,T.vd)(t))},fetchRoleForPrincipal:function(t){return e((0,T.DV)(t))}}}))(B));var M=function(e){var t=e.apps,r=(0,n.useContext)(l.Z),o=(0,n.useState)(""),s=(0,a.Z)(o,2),u=s[0],p=s[1],f=(0,n.useState)(""),d=(0,a.Z)(f,2),m=d[0],b=d[1],y=(0,n.useState)([]),O=(0,a.Z)(y,2),g=O[0],h=O[1],v=function(e){var t=e.name,r=e.application,n=e.permission;"string"==typeof t&&p(t),"string"==typeof n&&b(n),r&&h("string"==typeof r?[]:r)},R=function(e){var t=e.isOrgAdmin,r=e.name,n=void 0===r?"":r,i=e.application;return[{key:"application",value:void 0===i?[]:i,placeholder:"Filter by application",type:"checkbox",items:e.apps.map((function(e){return{label:e,value:e}}))}].concat((0,c.Z)(t?[{key:"name",type:"text",value:n,label:"Role name",placeholder:"Filter by role name"}]:[]))}({apps:t,isOrgAdmin:r,name:u,application:g,permission:m});return r?i().createElement(W,{setFilters:v,filters:R,apps:t}):i().createElement(S,{setFilters:v,filters:R,apps:t,hasActiveFilters:u.length>0||g.length>0})};M.propTypes={apps:s().arrayOf(s().string).isRequired};const N=M;var z=function(e){var t=e.apps;return i().createElement(N,{apps:t})};z.propTypes={apps:s().arrayOf(s().string).isRequired};const H=z}}]);
//# sourceMappingURL=../sourcemaps/250.db804b0821e5ffd039dc.js.map