(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[2269,7664],{15265:(e,t,r)=>{"use strict";r.d(t,{LA:()=>i,ZP:()=>s,mq:()=>a});var n=r(40400);const a={name:"ExternalLinkAltIcon",height:512,width:512,svgPath:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",yOffset:0,xOffset:0},i=(0,n.IU)(a),s=i},80810:(e,t,r)=>{"use strict";r.d(t,{W1:()=>i,ZP:()=>s,xQ:()=>a});var n=r(40400);const a={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},i=(0,n.IU)(a),s=i},92758:(e,t,r)=>{"use strict";r.d(t,{MS:()=>u,aX:()=>o,qF:()=>c});var n=r(93433),a=r(4942);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new URLSearchParams(e.location.search),o=t.reduce((function(e,t){var r=i.getAll(t);return s(s({},e),{},(0,a.Z)({},t,r.length>1?r:r[0]))}),{});return Object.keys(r).forEach((function(e){var t=r[e];o=s(s({},o),{},(0,a.Z)({},e,Array.isArray(o[e])?(0,n.Z)(new Set([].concat((0,n.Z)(o[e]),(0,n.Z)(Array.isArray(t)?t:[t])))):(null==t?void 0:t.length)>0&&t||o[e])),Array.isArray(t)?t.forEach((function(t){return i.getAll(e).includes(t)||i.append(e,t)})):i.get(e)||t&&i.set(e,t)})),e.replace({pathname:e.location.pathname,search:i.toString()}),o},c=function(e,t){var r=new URLSearchParams(e.location.search);return t.some((function(e){return r.get(e)}))},u=function(e,t){var r=new URLSearchParams(e.location.search);Object.keys(t).forEach((function(e){return r.delete(e)})),Object.keys(t).forEach((function(e){var n=t[e];Array.isArray(n)?n.forEach((function(t){return t&&r.append(e,t)})):n&&r.set(e,n)})),e.replace({pathname:e.location.pathname,search:r.toString()})}},82916:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(57262),c=r(15265),u=r(26794),l=function(e){var t=e.linkDescription,r=e.linkTitle,i=insights.chrome.getEnvironment(),s=insights.chrome.isProd?"":"".concat("ci"===i?"qa":i,"."),l="These are all of the users in your Red Hat organization. ";return(0,n.useContext)(u.Z).orgAdmin?a().createElement(o.Text,{className:"pf-u-mt-0",component:o.TextVariants.h7},l,t,a().createElement(o.Text,{component:o.TextVariants.a,href:"https://www.".concat(s,"redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,a().createElement(c.ZP,null)),"."):a().createElement(o.Text,{className:"pf-u-mt-0",component:o.TextVariants.h7},l)};l.propTypes={linkDescription:s().node,linkTitle:s().node},l.defaultProps={linkDescription:"",linkTitle:" user management list "};const m=l},88093:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(87462),a=r(45987),i=r(92950),s=r.n(i),o=r(1936),c=r(45697),u=r.n(c),l=r(94184),m=r.n(l),p=["row"],f=function(e){var t,r=e.row,i=(0,a.Z)(e,p),c=r.status,u=null==c||null===(t=c.props)||void 0===t?void 0:t["data-is-active"];return s().createElement(o.RowWrapper,(0,n.Z)({className:m()("rbac__user-row",{"ins-m-inactive":!u}),row:r},i))};f.propTypes={row:u().shape({status:u().shape({props:u().shape({"data-is-active":u().bool,data:u().shape({isActive:u().bool})})})})};const d=f},16796:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(334),c=r(57262),u=r(19571),l=function(e){return e?a().createElement(c.Breadcrumb,null,Object.values(e).map((function(e,t){return e.title?a().createElement(c.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&a().createElement(o.NavLink,{exact:!0,to:e.to},e.title)||e.title):a().createElement(u.Vj,{key:t})}))):null};l.propTypes={breadcrumbs:s().object};const m=l},38376:(e,t,r)=>{"use strict";r.d(t,{Q:()=>p,y:()=>f});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(57262),c=r(19571),u=r(16796),l=r(80123),m=r(39173),p=function(e){var t=e.children,r=e.breadcrumbs;return a().createElement(n.Fragment,null,r&&a().createElement("section",{className:"pf-c-page__main-breadcrumb"},a().createElement(u.Z,r)),a().createElement(l.Z,{className:"rbac-page-header"},t))};p.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node]).isRequired,breadcrumbs:s().array,paddingBottom:s().bool},p.defaultProps={paddingBottom:!1};var f=function(e){var t=e.title,r=e.renderTitleTag,i=e.description,s=e.children;return a().createElement(n.Fragment,null,a().createElement(o.Flex,null,a().createElement(o.FlexItem,{className:"pf-u-mb-sm"},a().createElement(m.Z,{title:t||a().createElement(c.h2,null),className:"rbac-page-header__title"})),a().createElement(o.FlexItem,{alignSelf:{modifier:"alignSelfCenter"}},r&&r())),i&&a().createElement(o.TextContent,{className:"rbac-page-header__description"},"string"==typeof i?a().createElement(o.Text,{component:o.TextVariants.p},i):i),s)};f.propTypes={title:s().node,renderTitleTag:s().func,description:s().node,children:s().oneOfType([s().node,s().arrayOf(s().node)])}},93327:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(45987),a=r(92950),i=r.n(a),s=r(45697),o=r.n(s),c=r(334),u=["pageAction"],l=function(e){var t=e.pageAction,r=(0,n.Z)(e,u);return(0,a.useEffect)((function(){return insights.chrome.appAction(t),function(){return insights.chrome.appAction(void 0)}}),[t]),i().createElement(c.Route,r)};l.propTypes={pageAction:o().string.isRequired};const m=l},98033:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R,i:()=>L});var n=r(87462),a=r(4942),i=r(29439),s=r(93433),o=r(92950),c=r.n(o),u=r(28216),l=r(45697),m=r.n(l),p=r(334),f=r(11107),d=r(41800),h=r(90944),g=r(71355),v=r(57262),b=r(1936),y=r(88093),E=r(61338),O=r(92758),k=r(98614),w=r(36438);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=[{title:"Org. Administrator",key:"org-admin",transforms:[b.nowrap]},{title:"Username",key:"username",transforms:[b.sortable]},{title:"Email"},{title:"First name",transforms:[b.nowrap]},{title:"Last name",transforms:[b.nowrap]},{title:"Status",transforms:[b.nowrap]}],Z=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,r){var a=r.username,i=r.is_active,u=r.email,l=r.first_name,m=r.last_name,f=r.is_org_admin;return[].concat((0,s.Z)(t),[{uuid:a,cells:[f?c().createElement(o.Fragment,null,c().createElement("span",null,c().createElement(k.ZP,{key:"yes-icon",className:"pf-u-mr-sm"}),c().createElement("span",{key:"yes"},"Yes"))):c().createElement(o.Fragment,null,c().createElement(w.ZP,{key:"no-icon",className:"pf-u-mr-sm"}),c().createElement("span",{key:"no"},"No")),{title:e?c().createElement(p.Link,{to:"/users/detail/".concat(a)},a.toString()):a.toString()},u.toString(),l.toString(),m.toString(),{title:c().createElement(v.Label,{key:"status",color:i&&"green"},i?"Active":"Inactive"),props:{"data-is-active":i}}],selected:Boolean(n&&n.find((function(e){return e.uuid===a})))}])}),[]):[]}},P=function(e){var t=e.users,r=e.fetchUsers,a=e.updateUsersFilters,s=e.isLoading,l=e.pagination,m=e.selectedUsers,h=e.setSelectedUsers,g=e.userLinks,v=e.inModal,b=e.props,k=(0,u.useSelector)((function(e){var t=e.userReducer.users;return{limit:v?t.meta.limit:t.pagination.limit||E.he.limit,offset:v?t.meta.offset:t.pagination.offset||E.he.offset,count:v?t.meta.count:t.pagination.count,redirected:!v&&t.pagination.redirected}})),w=(0,p.useHistory)(),j=(0,u.useSelector)((function(e){var t=e.userReducer.users.filters;return w.location.search.length>0||Object.keys(t).length>0?t:{status:["Active"]}})),P=(0,o.useState)(v?{username:"",email:"",status:["Active"]}:j),A=(0,i.Z)(P,2),x=A[0],R=A[1];return(0,o.useEffect)((function(){v||k.redirected&&(0,E.oG)(w,k.limit,k.offset)}),[k.redirected]),(0,o.useEffect)((function(){var e=v?E.he:(0,E.rj)(w,k),t=v?{status:x.status}:(0,O.aX)(w,["username","email","status"],x);R(t),r(T(T({},(0,f.jl)(T(T({},e),{},{filters:t}))),{},{inModal:v}))}),[]),(0,o.useEffect)((function(){v||((0,E.Zc)(w)||(0,E.oG)(w,l.limit,l.offset),Object.values(x).some((function(e){return(null==e?void 0:e.length)>0}))&&!(0,O.qF)(w,Object.keys(x))&&(0,O.aX)(w,Object.keys(x),x))})),c().createElement(d.M,(0,n.Z)({columns:S,isSelectable:!0,isCompact:!0,borders:!1,createRows:Z(g),data:t,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:x.status,n=e.username,a=e.email,i=e.count,s=e.limit,o=e.offset,c=e.orderBy;r(T(T({},(0,f.jl)({count:i,limit:s,offset:o,orderBy:c,filters:{username:n,email:a,status:t}})),{},{inModal:v})),v||(0,E.oG)(w,s,o),v||(0,O.MS)(w,{username:n,email:a,status:t})},setFilterValue:function(e){var t,r=e.username,n=e.email,i=e.status;t={username:void 0===r?x.username:r,email:void 0===n?x.email:n,status:void 0===i||i===x.status?x.status:i},v||a(t),R(T({username:""},t))},isLoading:s,pagination:l,checkedRows:m,setCheckedItems:function(e){h((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:y.Z,titlePlural:"users",titleSingular:"user",noDataDescription:["This filter criteria matches no users.","Make sure the beginning of your search input corresponds to the beginning of the value you are looking for, or try changing your filter settings."],noData:0===t.length&&!x.username&&!x.email,filters:[{key:"username",value:x.username,placeholder:"Filter by username"},{key:"email",value:x.email,placeholder:"Filter by email"},{key:"status",value:x.status,label:"Status",type:"checkbox",items:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}],tableId:"users-list"},b))},A=function(e){var t=e.userReducer,r=t.users,n=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return T(T({},e),{},{uuid:e.username})})),pagination:r.meta,isLoading:n}},x=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.he;e((0,h.u)(t))},updateUsersFilters:function(t){e((0,h.a)(t))},addNotification:function(){return e(g.wN.apply(void 0,arguments))}}};P.propTypes={history:m().shape({goBack:m().func.isRequired,push:m().func.isRequired}),users:m().array,isLoading:m().bool,searchFilter:m().string,fetchUsers:m().func.isRequired,updateUsersFilters:m().func.isRequired,setSelectedUsers:m().func.isRequired,selectedUsers:m().array,pagination:m().shape({limit:m().number.isRequired,offset:m().number,count:m().number}),userLinks:m().bool,props:m().object,inModal:m().bool},P.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1,inModal:!1};const R=(0,u.connect)(A,x)(P);var L=(0,u.connect)(A,x,(function(e,t,r){return T(T(T(T({},r),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||E.eX)}})}))(P)},11791:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var n=r(92950),a=r.n(n),i=r(334),s=r(57262),o=r(38376),c=r(316),u=r(98033),l=r(82916),m=r(93433),p=r(4942),f=r(29439),d=r(45697),h=r.n(d),g=r(28216),v=r(23279),b=r.n(v),y=r(41800),E=r(44873),O=r(64107),k=r(35664),w=r(28090),j=r(90944),T=r(19571),S=r(61338),Z=r(1936),P=r(67643),A=r(16796),x=r(11107);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U,_=["Roles",{title:"Groups",cellTransforms:[Z.compoundExpand]},{title:"Permissions",cellTransforms:[Z.compoundExpand]},{title:"Last modified"}],I=function(e){var t=e.match.params.username,r=e.fetchRoles,c=e.fetchRoleForUser,u=e.fetchUsers,l=e.roles,d=e.isLoading,h=e.rolesWithAccess,v=e.user,w=(0,n.useState)(""),j=(0,f.Z)(w,2),R=j[0],I=j[1],N=(0,n.useState)({}),F=(0,f.Z)(N,2),D=F[0],B=F[1],M=(0,g.useSelector)((function(e){return e.roleReducer.error!==x.VG}));(0,n.useEffect)((function(){return u(L(L({},S.he),{},{limit:0,filters:{username:t},inModal:!0})),insights.chrome.appObjectId(t),function(){return insights.chrome.appObjectId(void 0)}}),[]);var V=(0,i.useHistory)();(0,n.useEffect)((function(){r({limit:20,offset:0,addFields:["groups_in"],username:t}),U=b()((function(e,t,n,a,i){return r({limit:e,offset:t,displayName:n,addFields:a,username:i})}),500)}),[]);var C=function(){return[{title:"Users",to:"/users"},{title:M?t:"Invalid user",isActive:!0}]};return a().createElement(n.Fragment,null,M?a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(o.Q,{paddingBottm:!1,breadcrumbs:C()},a().createElement(o.y,{title:t,renderTitleTag:function(){return v&&!d?a().createElement(s.Label,{color:(null==v?void 0:v.is_active)&&"green"},null!=v&&v.is_active?"Active":"Inactive"):a().createElement(k.Z,{size:"xs",className:"rbac__user-label-skeleton"})},description:"".concat(t,"'s roles, groups and permissions.")}))),a().createElement(s.StackItem,null,a().createElement(E.Z,{type:"content",id:"user-detail"},a().createElement(y.M,{columns:_,isCompact:!1,isExpandable:!0,onExpand:function(e,t,r,n,a){n?B(L(L({},D),{},(0,p.Z)({},a.uuid,-1))):(B(L(L({},D),{},(0,p.Z)({},a.uuid,r))),2===r&&c(a.uuid))},createRows:function(e){return e?e.reduce((function(e,t,r){var n=t.uuid,s=t.display_name,o=t.groups_in,c=void 0===o?[]:o,u=t.modified,l=t.accessCount;return[].concat((0,m.Z)(e),[{uuid:n,cells:[{title:s,props:{component:"th",isOpen:!1}},{title:"".concat(c.length),props:{isOpen:1===D[n]}},{title:l,props:{isOpen:2===D[n]}},{title:a().createElement(O.Z,{type:(0,x.mh)(u),date:u})}]},{uuid:"".concat(n,"-groups"),parent:3*r,compoundParent:1,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:a().createElement(Z.Table,{ouiaId:"groups-in-role-nested-table","aria-label":"Simple Table",variant:Z.TableVariant.compact,cells:["Name","Description"],rows:c.map((function(e){return{cells:[{title:a().createElement(i.Link,{to:"/groups/detail/".concat(e.uuid)},e.name)},e.description]}}))},a().createElement(Z.TableHeader,null),a().createElement(Z.TableBody,null))}]},{uuid:"".concat(n,"-groups"),parent:3*r,compoundParent:2,cells:[{props:{colSpan:4,className:"pf-m-no-padding"},title:h&&h[n]?a().createElement(Z.Table,{"aria-label":"Simple Table",ouiaId:"permissions-in-role-nested-table",variant:Z.TableVariant.compact,cells:["Application","Resource type","Operation"],rows:h[n].access.map((function(e){return{cells:e.permission.split(":")}}))},a().createElement(Z.TableHeader,null),a().createElement(Z.TableBody,null)):a().createElement(T.Wi,null)}]}])}),[]):[]},data:l.data,filterValue:R,ouiaId:"user-details-table",fetchData:function(e){var r=e.limit,n=e.offset,a=e.name;U(r,n,a,["groups_in"],t)},setFilterValue:function(e){var t=e.name;return I(t)},isLoading:d,pagination:l.meta,filterPlaceholder:"role name",titlePlural:"roles",titleSingular:"role",tableId:"user"})))):a().createElement(n.Fragment,null,a().createElement("section",{className:"pf-c-page__main-breadcrumb pf-u-pb-md"},a().createElement(A.Z,C())),a().createElement(P.Z,{title:"User not found",description:["User with username ".concat(t," does not exist.")],actions:[a().createElement(s.Button,{key:"back-button",className:"pf-u-mt-xl",ouiaId:"back-button",variant:"primary","aria-label":"Back to previous page",onClick:function(){return V.goBack()}},"Back to previous page")]})))};I.propTypes={match:h().object,fetchRoles:h().func,fetchRoleForUser:h().func,fetchUsers:h().func,roles:h().object,isLoading:h().bool,rolesWithAccess:h().object,user:h().object};const N=(0,i.withRouter)((0,g.connect)((function(e,t){var r=e.roleReducer,n=r.roles,a=r.isLoading,i=r.rolesWithAccess,s=e.userReducer.users.data,o=t.match.params.username;return{roles:n,isLoading:a,rolesWithAccess:i,user:s&&s.filter((function(e){return e.username===o}))[0]}}),(function(e){return{fetchRoles:function(t){return e((0,w.vd)(t))},fetchRoleForUser:function(t){return e((0,w.sv)(t))},fetchUsers:function(t){return e((0,j.u)(t))}}}))(I));var F=r(4682),D=r(93327),B=r(26794),M=function(){var e=(0,n.useContext)(B.Z),t=a().createElement(l.Z,{linkDescription:"To add new users or manage existing users, go to your"});return(0,n.useEffect)((function(){insights.chrome.appNavClick({id:"users",secondaryNav:!0})}),[]),a().createElement(i.Switch,null,a().createElement(D.Z,{pageAction:"user-detail",exact:!0,path:F.Z["user-detail"],render:function(e){return a().createElement(N,e)}}),a().createElement(D.Z,{pageAction:"users-list",path:[F.Z.users,F.Z.rbac],render:function(){return a().createElement(s.Stack,null,a().createElement(s.StackItem,null,a().createElement(o.Q,{paddingBottm:!1},a().createElement(o.y,{title:"Users",description:t}))),a().createElement(s.StackItem,null,a().createElement(c.Section,{type:"content",id:"users"},a().createElement(u.Z,{userLinks:e.userAccessAdministrator,props:{isSelectable:!1,isCompact:!1}}))))}}))};M.propTypes={},M.defaultProps={};const V=M},27561:(e,t,r)=>{var n=r(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:(e,t,r)=>{var n=r(13218),a=r(7771),i=r(14841),s=Math.max,o=Math.min;e.exports=function(e,t,r){var c,u,l,m,p,f,d=0,h=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=c,n=u;return c=u=void 0,d=t,m=e.apply(n,r)}function y(e){return d=e,p=setTimeout(O,t),h?b(e):m}function E(e){var r=e-f;return void 0===f||r>=t||r<0||g&&e-d>=l}function O(){var e=a();if(E(e))return k(e);p=setTimeout(O,function(e){var r=t-(e-f);return g?o(r,l-(e-d)):r}(e))}function k(e){return p=void 0,v&&c?b(e):(c=u=void 0,m)}function w(){var e=a(),r=E(e);if(c=arguments,u=this,f=e,r){if(void 0===p)return y(f);if(g)return clearTimeout(p),p=setTimeout(O,t),b(f)}return void 0===p&&(p=setTimeout(O,t)),m}return t=i(t)||0,n(r)&&(h=!!r.leading,l=(g="maxWait"in r)?s(i(r.maxWait)||0,t):l,v="trailing"in r?!!r.trailing:v),w.cancel=function(){void 0!==p&&clearTimeout(p),d=0,c=f=u=p=void 0},w.flush=function(){return void 0===p?m:k(a())},w}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},14841:(e,t,r)=>{var n=r(27561),a=r(13218),i=r(33448),s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=o.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):s.test(e)?NaN:+e}}}]);
//# sourceMappingURL=../sourcemaps/2269.f21d2861bfc7e83b86f4906fa528e5ba.js.map