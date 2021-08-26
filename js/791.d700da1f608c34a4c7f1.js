(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[791],{11791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(92950),a=n.n(r),c=n(334),s=n(97066),o=n(38376),i=n(20309),l=n(98033),u=n(82916),p=n(85061),m=n(96156),d=n(28481),f=n(45697),b=n.n(f),g=n(45237),E=n(23279),h=n.n(E),v=n(41800),y=n(54213),O=n(64107),k=n(56455),j=n(28090),S=n(90944),T=n(19571),_=n(61338),w=n(6877),Z=n(67643),P=n(16796),R=n(11107);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U,A=["Roles",{title:"Groups",cellTransforms:[w.compoundExpand]},{title:"Permissions",cellTransforms:[w.compoundExpand]},{title:"Last commit"}],L=function(e){var t=e.match.params.username,n=e.fetchRoles,i=e.fetchRoleForUser,l=e.fetchUsers,u=e.roles,f=e.isLoading,b=e.rolesWithAccess,E=e.user,j=(0,r.useState)(""),S=(0,d.Z)(j,2),I=S[0],L=S[1],B=(0,r.useState)({}),C=(0,d.Z)(B,2),F=C[0],N=C[1],D=(0,g.useSelector)((function(e){return e.roleReducer.error!==R.VG}));(0,r.useEffect)((function(){return l(x(x({},_.he),{},{limit:0,filters:{username:t},inModal:!0})),insights.chrome.appObjectId(t),function(){return insights.chrome.appObjectId(void 0)}}),[]);var V=(0,c.useHistory)();(0,r.useEffect)((function(){n({limit:20,offset:0,addFields:["groups_in"],username:t}),U=h()((function(e,t,r,a,c){return n({limit:e,offset:t,name:r,addFields:a,username:c})}),500)}),[]);var W=function(){return[{title:"Users",to:"/users"},{title:D?t:"Invalid user",isActive:!0}]};return a().createElement(r.Fragment,null,D?a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(o.Q,{paddingBottm:!1,breadcrumbs:W()},a().createElement(o.y,{title:t,renderTitleTag:function(){return E&&!f?a().createElement(s.Label,{color:(null==E?void 0:E.is_active)&&"green"},null!=E&&E.is_active?"Active":"Inactive"):a().createElement(k.Z,{size:"xs",className:"rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a().createElement(s.StackItem,null,a().createElement(y.Z,{type:"content",id:"user-detail"},a().createElement(v.M,{columns:A,isCompact:!1,isExpandable:!0,onExpand:function(e,t,n,r,a){r?N(x(x({},F),{},(0,m.Z)({},a.uuid,-1))):(N(x(x({},F),{},(0,m.Z)({},a.uuid,n))),2===n&&i(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,n){var r=t.uuid,s=t.name,o=t.groups_in,i=void 0===o?[]:o,l=t.modified,u=t.accessCount;return[].concat((0,p.Z)(e),[{uuid:r,cells:[{title:s,props:{component:"th",isOpen:!1}},{title:"".concat(i.length),props:{isOpen:1===F[r]}},{title:u,props:{isOpen:2===F[r]}},{title:a().createElement(O.Z,{type:"exact",date:l})}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a().createElement(w.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:w.TableVariant.compact,cells:["Name","Description"],rows:i.map((function(e){return{cells:[{title:a().createElement(c.Link,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a().createElement(w.TableHeader,null),a().createElement(w.TableBody,null))}]},{uuid:"".concat(r,"-groups"),parent:3*n,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:b&&b[r]?a().createElement(w.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:w.TableVariant.compact,cells:["Application","Resource type","Operation"],rows:b[r].access.map((function(e){return{cells:e.permission.split(":")}}))},a().createElement(w.TableHeader,null),a().createElement(w.TableBody,null)):a().createElement(T.Wi,null)}]}])}),[]):[]},data:u.data,filterValue:I,ouiaId:"user-details-table",fetchData:function(e){var n=e.limit,r=e.offset,a=e.name;U(n,r,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return L(t)},isLoading:f,pagination:u.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"user"})))):a().createElement(r.Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},a().createElement(P.Z,W())),a().createElement(Z.Z,{title:"User not found",description:["User with username ".concat(t," does not exist.")],actions:[a().createElement(s.Button,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return V.goBack()}},"Back to previous page")]})))};L.propTypes={match:b().object,fetchRoles:b().func,fetchRoleForUser:b().func,fetchUsers:b().func,roles:b().object,isLoading:b().bool,rolesWithAccess:b().object,user:b().object};const B=(0,c.withRouter)((0,g.connect)((function(e,t){var n=e.roleReducer,r=n.roles,a=n.isLoading,c=n.rolesWithAccess,s=e.userReducer.users.data,o=t.match.params.username;return{roles:r,isLoading:a,rolesWithAccess:c,user:s&&s.filter((function(e){return e.username===o}))[0]}}),(function(e){return{fetchRoles:function(t){return e((0,j.vd)(t))},fetchRoleForUser:function(t){return e((0,j.sv)(t))},fetchUsers:function(t){return e((0,S.u)(t))}}}))(L));var C=n(60306),F=n(93327),N=function(){var e=a().createElement(u.Z,{description:"These are all of the users in your Red Hat organization. To add new users or manage existing users, go to your"});return(0,r.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]),a().createElement(c.Switch,null,a().createElement(F.Z,{pageAction:"user-detail",exact:!0,path:C._j.tG,render:function(e){return a().createElement(B,e)}}),a().createElement(F.Z,{pageAction:"users-list",path:[C._j.rC,C._j.Sy],render:function(){return a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(o.Q,{paddingBottm:!1},a().createElement(o.y,{title:"Users",description:e}))),a().createElement(s.StackItem,null,a().createElement(i.Section,{type:"content",id:"users"},a().createElement(l.Z,{userLinks:!0,props:{isSelectable:!1,isCompact:!1}}))))}}))};N.propTypes={},N.defaultProps={};const D=N}}]);
//# sourceMappingURL=../sourcemaps/791.aa9b548b78c24e1b6f8e.js.map