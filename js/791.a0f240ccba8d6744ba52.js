"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[791],{11791:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var n=r(92950),a=r.n(n),c=r(334),s=r(58788),i=r(38376),l=r(89091),o=r(98033),u=r(82916),p=r(93433),m=r(4942),d=r(29439),f=r(45697),b=r.n(f),g=r(28216),E=r(23279),h=r.n(E),v=r(41800),y=r(54213),k=r(64107),O=r(56455),S=r(28090),Z=r(90944),j=r(19571),T=r(61338),w=r(6877),P=r(67643),_=r(16796),I=r(11107);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,m.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x,U=["Roles",{title:"Groups",cellTransforms:[w.compoundExpand]},{title:"Permissions",cellTransforms:[w.compoundExpand]},{title:"Last modified"}],L=function(e){var t=e.match.params.username,r=e.fetchRoles,l=e.fetchRoleForUser,o=e.fetchUsers,u=e.roles,f=e.isLoading,b=e.rolesWithAccess,E=e.user,S=(0,n.useState)(""),Z=(0,d.Z)(S,2),R=Z[0],L=Z[1],N=(0,n.useState)({}),B=(0,d.Z)(N,2),C=B[0],F=B[1],D=(0,g.useSelector)((function(e){return e.roleReducer.error!==I.VG}));(0,n.useEffect)((function(){return o(A(A({},T.he),{},{limit:0,filters:{username:t},inModal:!0})),insights.chrome.appObjectId(t),function(){return insights.chrome.appObjectId(void 0)}}),[]);var V=(0,c.useHistory)();(0,n.useEffect)((function(){r({limit:20,offset:0,addFields:["groups_in"],username:t}),x=h()((function(e,t,n,a,c){return r({limit:e,offset:t,displayName:n,addFields:a,username:c})}),500)}),[]);var W=function(){return[{title:"Users",to:"/users"},{title:D?t:"Invalid user",isActive:!0}]};return a().createElement(n.Fragment,null,D?a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(i.Q,{paddingBottm:!1,breadcrumbs:W()},a().createElement(i.y,{title:t,renderTitleTag:function(){return E&&!f?a().createElement(s.Label,{color:(null==E?void 0:E.is_active)&&"green"},null!=E&&E.is_active?"Active":"Inactive"):a().createElement(O.Z,{size:"xs",className:"rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a().createElement(s.StackItem,null,a().createElement(y.Z,{type:"content",id:"user-detail"},a().createElement(v.M,{columns:U,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,n,a){n?F(A(A({},C),{},(0,m.Z)({},a.uuid,-1))):(F(A(A({},C),{},(0,m.Z)({},a.uuid,r))),2===r&&l(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,r){var n=t.uuid,s=t.display_name,i=t.groups_in,l=void 0===i?[]:i,o=t.modified,u=t.accessCount;return[].concat((0,p.Z)(e),[{uuid:n,cells:[{title:s,props:{component:"th",isOpen:!1}},{title:"".concat(l.length),props:{isOpen:1===C[n]}},{title:u,props:{isOpen:2===C[n]}},{title:a().createElement(k.Z,{type:(0,I.mh)(o),date:o})}]},{uuid:"".concat(n,"-groups"),parent:3*r,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a().createElement(w.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:w.TableVariant.compact,cells:["Name","Description"],rows:l.map((function(e){return{cells:[{title:a().createElement(c.Link,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a().createElement(w.TableHeader,null),a().createElement(w.TableBody,null))}]},{uuid:"".concat(n,"-groups"),parent:3*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:b&&b[n]?a().createElement(w.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:w.TableVariant.compact,cells:["Application","Resource type","Operation"],rows:b[n].access.map((function(e){return{cells:e.permission.split(":")}}))},a().createElement(w.TableHeader,null),a().createElement(w.TableBody,null)):a().createElement(j.Wi,null)}]}])}),[]):[]},data:u.data,filterValue:R,ouiaId:"user-details-table",fetchData:function(e){var r=e.limit,n=e.offset,a=e.name;x(r,n,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return L(t)},isLoading:f,pagination:u.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"user"})))):a().createElement(n.Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},a().createElement(_.Z,W())),a().createElement(P.Z,{title:"User not found",description:["User with username ".concat(t," does not exist.")],actions:[a().createElement(s.Button,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return V.goBack()}},"Back to previous page")]})))};L.propTypes={match:b().object,fetchRoles:b().func,fetchRoleForUser:b().func,fetchUsers:b().func,roles:b().object,isLoading:b().bool,rolesWithAccess:b().object,user:b().object};const N=(0,c.withRouter)((0,g.connect)((function(e,t){var r=e.roleReducer,n=r.roles,a=r.isLoading,c=r.rolesWithAccess,s=e.userReducer.users.data,i=t.match.params.username;return{roles:n,isLoading:a,rolesWithAccess:c,user:s&&s.filter((function(e){return e.username===i}))[0]}}),(function(e){return{fetchRoles:function(t){return e((0,S.vd)(t))},fetchRoleForUser:function(t){return e((0,S.sv)(t))},fetchUsers:function(t){return e((0,Z.u)(t))}}}))(L));var B=r(4682),C=r(93327),F=r(26794),D=function(){var e=(0,n.useContext)(F.Z),t=a().createElement(u.Z,{linkDescription:"To add new users or manage existing users, go to your"});return(0,n.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]),a().createElement(c.Switch,null,a().createElement(C.Z,{pageAction:"user-detail",exact:!0,path:B.Z["user-detail"],render:function(e){return a().createElement(N,e)}}),a().createElement(C.Z,{pageAction:"users-list",path:[B.Z.users,B.Z.rbac],render:function(){return a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(i.Q,{paddingBottm:!1},a().createElement(i.y,{title:"Users",description:t}))),a().createElement(s.StackItem,null,a().createElement(l.Section,{type:"content",id:"users"},a().createElement(o.Z,{userLinks:e.userAccessAdministrator,props:{isSelectable:!1,isCompact:!1}}))))}}))};D.propTypes={},D.defaultProps={};const V=D}}]);
//# sourceMappingURL=../sourcemaps/791.43b4cdef8229ab50d77571c35e0d5fb6.js.map