(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[171],{77373:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(80150),i=n.n(r),o=n(45697),s=n.n(o),a=function(e){var t=e.onClick,n=e.access;return 0===n.resourceDefinitions.length?i().createElement("span",null,"N/A"):i().createElement("a",{onClick:function(){return t(),!1}},n.resourceDefinitions.length)};a.propTypes={onClick:s().func.isRequired,access:s().shape({resourceDefinitions:s().array.isRequired}).isRequired};const c=a},77404:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(59713),i=n.n(r),o=n(6479),s=n.n(o),a=n(319),c=n.n(a),l=n(63038),u=n.n(l),p=n(80150),f=n.n(p),d=n(45697),m=n.n(d),b=n(70983),O=n(84887),h=n(87757),g=n.n(h),y=n(48926),v=n.n(y),D=(0,n(63717).TR)();function R(e){return j.apply(this,arguments)}function j(){return(j=v()(g().mark((function e(t){var n,r,i,o,s;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.offset,i=t.username,o=t.application,s=void 0===o?"":o,e.next=3,D.getPrincipalAccess(s,i,n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=n(71410),E=n(17721),w=n(77373),k=n(18469);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=function(e){var t=e.filters,n=e.setFilters,r=e.apps,o=e.hasActiveFilters,a=e.showResourceDefinitions,l=(0,p.useState)({rdOpen:!1}),d=u()(l,2),m=d[0],h=m.rdOpen,g=m.rdPermission,y=m.resourceDefinitions,v=d[1],D=(0,p.useRef)([{title:"Application"},{title:"Resource type"},{title:"Operation"}].concat(c()(a?[{title:"Resource definitions"}]:[]))).current,j=(0,b.useDispatch)(),C=(0,b.useSelector)((function(e){return{permissions:e.accessReducer.access,isLoading:e.accessReducer.isLoading}}),b.shallowEqual),S=C.permissions,q=C.isLoading,T=function(e){var t=e.application,n=s()(e,["application"]),o=(null==t?void 0:t.length)>0?t:r;j(function(e){return{type:O.ft,payload:R(e)}}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({application:o.join(",")},n)))},A=function(e){return v({rdOpen:!0,rdPermission:S.data[e].permission,resourceDefinitions:S.data[e].resourceDefinitions})};(0,p.useEffect)((function(){T(P.he)}),[]);var V=(null==S?void 0:S.data)||[];return f().createElement(p.Fragment,null,f().createElement(E.M,{columns:D,createRows:function(e){return function(e,t,n){return e.reduce((function(e,r,i){var o=r.permission,a=s()(r,["permission"]),l=o.split(":"),d=u()(l,3),m=d[0],b=d[1],O=d[2];return[].concat(c()(e),[{cells:[m,b,O].concat(c()(t?[f().createElement(p.Fragment,{key:"rd"},f().createElement(w.Z,{onClick:function(){return n(i)},access:a}))]:[]))}])}),[])}(e,a,A)},data:V,fetchData:T,filters:t,setFilterValue:n,isLoading:q,pagination:null==S?void 0:S.meta,ouiaId:"permissions-table",titlePlural:"permissions",titleSingular:"permission",noData:!q&&!o&&0===V.length,noDataDescription:["You do not have individual permissions for Insights.","Contact your Org. Administrator for more information."]}),f().createElement(p.Suspense,{fallback:f().createElement(p.Fragment,null)},h&&f().createElement(k.default,{resourceDefinitions:y,isOpen:h,handleClose:function(){return v({rdOpen:!1})},permission:g})))};C.propTypes={filters:m().arrayOf(m().object).isRequired,setFilters:m().func.isRequired,apps:m().arrayOf(m().string).isRequired,hasActiveFilters:m().bool,showResourceDefinitions:m().bool};const S=C},65565:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(59713),i=n.n(r),o=n(319),s=n.n(o),a=n(63038),c=n.n(a),l=n(80150),u=n.n(l),p=n(45697),f=n.n(p),d=n(70983),m=n(47194),b=n(23279),O=n.n(b),h=n(17721),g=n(89531),y=n(55917),v=n(12460),D=n(77373);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=(0,l.lazy)((function(){return Promise.resolve().then(n.bind(n,18469))})),E=[{title:"Roles",key:"display_name",transforms:[v.sortable]},"Description",{title:"Permissions",cellTransforms:[v.compoundExpand,(0,v.cellWidth)(20)]}],w=function(e){var t=e.fetchRoles,n=e.fetchRoleForPrincipal,r=e.roles,o=e.isLoading,a=e.rolesWithAccess,p=e.filters,f=e.setFilters,d=e.apps,m=e.showResourceDefinitions,b=(0,l.useState)({}),g=c()(b,2),R=g[0],w=g[1],k=(0,l.useState)({rdOpen:!1}),F=c()(k,2),C=F[0],S=C.rdOpen,q=C.rdPermission,T=C.resourceDefinitions,A=F[1];(0,l.useEffect)((function(){t({limit:20,offset:0,orderBy:"display_name",scope:"principal",application:d.join(",")})}),[]);var V=(0,l.useCallback)(O()((function(e,n,r,i,o,s){var a=(null==i?void 0:i.length)>0?i:d;return t({limit:e,offset:n,scope:"principal",orderBy:s,name:r,application:a.join(","),permission:o})}),800),[]);return u().createElement(l.Fragment,null,u().createElement(h.M,{filters:p,columns:E,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,o,s){o?w((function(e){return j(j({},e),{},i()({},s.uuid,-1))})):(w((function(e){return j(j({},e),{},i()({},s.uuid,r))})),2===r&&n(s.uuid))},createRows:function(e){return null==e?void 0:e.reduce((function(e,t,n){var r=t.uuid,i=t.display_name,o=t.name,c=t.description,p=t.accessCount;return[].concat(s()(e),[{uuid:r,cells:[{title:i||o,props:{component:"th",isOpen:!1}},{title:c,props:{isOpen:!1}},{title:p,props:{isOpen:2===R[r]}}]},{uuid:"".concat(r,"-groups"),parent:2*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:(null==a?void 0:a[r])?u().createElement(v.Table,{ouiaId:"permissions-in-role-nested-table","aria-label":"Simple Table",borders:!1,variant:v.TableVariant.compact,cells:["Application","Resource type","Operation"].concat(s()(m?["Resource definitions"]:[])),rows:a[r].access.map((function(e){return{cells:[].concat(s()(e.permission.split(":")),s()(m?[u().createElement(l.Fragment,{key:"rd"},u().createElement(D.Z,{onClick:function(){return A({rdOpen:!0,rdPermission:e.permission,resourceDefinitions:e.resourceDefinitions})},access:e}))]:[]))}}))},u().createElement(v.TableHeader,null),u().createElement(v.TableBody,null)):u().createElement(y.Wi,null)}]}])}),[])},ouiaId:"roles-table",data:r.data,fetchData:function(e){var t=e.limit,n=e.offset,r=e.name,i=e.application,o=e.permission,s=e.orderBy;V(t,n,r,i,o,void 0===s?"display_name":s)},sortBy:{index:0,direction:"asc"},setFilterValue:f,isLoading:o,pagination:r.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role"}),u().createElement(l.Suspense,{fallback:u().createElement(l.Fragment,null)},S&&u().createElement(P,{resourceDefinitions:T,isOpen:S,handleClose:function(){return A({rdOpen:!1})},permission:q})))};w.propTypes={fetchRoles:f().func,fetchRoleForPrincipal:f().func,fetchUsers:f().func,roles:f().object,isLoading:f().bool,rolesWithAccess:f().object,filters:f().arrayOf(f().object).isRequired,setFilters:f().func.isRequired,apps:f().arrayOf(f().string).isRequired,showResourceDefinitions:f().bool};const k=(0,m.withRouter)((0,d.connect)((function(e){var t=e.roleReducer;return{roles:t.roles,isLoading:t.isLoading,rolesWithAccess:t.rolesWithAccess}}),(function(e){return{fetchRoles:function(t){return e((0,g.vd)(t))},fetchRoleForPrincipal:function(t){return e((0,g.DV)(t))}}}))(w))},18469:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(59713),i=n.n(r),o=n(63038),s=n.n(o),a=n(47173),c=n(80236),l=n(80150),u=n.n(l),p=n(45697),f=n.n(p),d=n(17721),m=n(71410);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.isOpen,n=e.handleClose,r=e.permission,i=e.resourceDefinitions,o=(0,l.useState)((function(){return{filterValue:"",rows:i.map((function(e){return e.attributeFilter.value})).slice(0,m.he.limit),pagination:O(O({},m.he),{},{count:i.length})}})),p=s()(o,2),f=p[0],b=f.rows,h=f.pagination,g=f.filterValue,y=p[1],v=function(e){var t=e.name,n=void 0===t?"":t,r=e.limit,o=e.offset,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return y((function(e){var t=e.pagination,a=e.filterValue,c=i.map((function(e){return e.attributeFilter.value})).filter((function(e){return e.includes(n)})).slice(o,r);return{rows:c,filterValue:s?n:a,pagination:O(O({},t),{},{offset:s?0:o,limit:r,count:c.length})}}))};return u().createElement(c.u,{actions:[u().createElement(a.zx,{key:"close-action",variant:"primary",onClick:n},"Close")],variant:"large",isOpen:t,onClose:n,title:"Resource definitions",description:u().createElement("p",null,"View resource definitions for the ",u().createElement("strong",null,r)," permission")},u().createElement(d.M,{columns:[""],data:b,filterValue:g,setFilterValue:function(e){return v(e,!0)},pagination:h,ouiaId:"resource-definition-table",noData:0===i.length,createRows:function(e){return e.map((function(e){return{cells:[e]}}))},titlePlural:"Resource definitions",titleSingular:"Resource definition",noDataDescription:["There are no resource definitions for ".concat(r," permission")],fetchData:v}))};h.propTypes={isOpen:f().bool,handleClose:f().func.isRequired,permission:f().string.isRequired,resourceDefinitions:f().arrayOf(f().shape({attributeFilter:f().shape({value:f().string.isRequired}).isRequired})).isRequired};const g=h}}]);
//# sourceMappingURL=171.38d8e66e8a0fa64c77b8.js.map