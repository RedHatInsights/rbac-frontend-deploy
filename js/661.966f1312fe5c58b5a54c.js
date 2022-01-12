"use strict";(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[661],{82916:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(92950),s=r.n(n),a=r(45697),i=r.n(a),o=r(58788),u=r(15265),c=function(e){var t=e.description,r=e.linkTitle,n=insights.chrome.getEnvironment(),a=insights.chrome.isProd?"":"".concat("ci"===n?"qa":n,".");return s().createElement(o.Text,{className:"pf-u-mt-0",component:o.TextVariants.h7},t,s().createElement(o.Text,{component:o.TextVariants.a,href:"https://www.".concat(a,"redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,s().createElement(u.ZP,null)),".")};c.propTypes={description:i().node,linkTitle:i().node},c.defaultProps={description:"",linkTitle:" user management list "};const l=c},88093:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),s=r(45987),a=r(92950),i=r.n(a),o=r(6877),u=r(45697),c=r.n(u),l=r(94184),f=r.n(l),p=["row"],m=function(e){var t,r=e.row,a=(0,s.Z)(e,p),u=r.status,c=null==u||null===(t=u.props)||void 0===t?void 0:t["data-is-active"];return i().createElement(o.RowWrapper,(0,n.Z)({className:f()("rbac__user-row",{"ins-m-inactive":!c}),row:r},a))};m.propTypes={row:c().shape({status:c().shape({props:c().shape({"data-is-active":c().bool,data:c().shape({isActive:c().bool})})})})};const d=m},90944:(e,t,r)=>{r.d(t,{u:()=>b,a:()=>v});var n=r(36580),s=r(4942),a=r(15861),i=r(87757),o=r.n(i),u=r(61338);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=(0,r(89400).bn)(),p={Active:"enabled",Inactive:"disabled"};function m(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function e(t){var r,n,s,a,i,c,m,d,b,v,g,h,y,O,k,w,j,P,E,S,U;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,s=t.offset,a=void 0===s?0:s,i=t.orderBy,c=t.filters,m=void 0===c?{}:c,d=t.inModal,b=t.matchCriteria,v=void 0===b?"partial":b,g=m.username,h=m.email,y=m.status,k="-username"===i?"desc":"asc",w=2===(O=void 0===y?[]:y).length?"all":p[O[0]]||"all",e.next=6,f.listPrincipals(n,a,v,g,k,h,w);case 6:if(j=e.sent,P=(0,u._V)(a,null==j||null===(r=j.meta)||void 0===r?void 0:r.count),a=P?a:(0,u.Vh)(j.meta.count,n),!P){e.next=13;break}e.t0=j,e.next=16;break;case 13:return e.next=15,f.listPrincipals(n,a,v,g,k,h,w);case 15:e.t0=e.sent;case 16:return E=e.t0,S=E.data,U=E.meta,e.abrupt("return",l({data:S,meta:l(l({},U),{},{offset:a,limit:n})},d?{}:{filters:m,pagination:l(l({},U),{},{offset:a,limit:n,redirected:!P})}));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e){return{type:n.WH,payload:m(e)}},v=function(e){return{type:n.xD,payload:e}}},98033:(e,t,r)=>{r.d(t,{Z:()=>x,i:()=>L});var n=r(87462),s=r(4942),a=r(29439),i=r(93433),o=r(92950),u=r.n(o),c=r(28216),l=r(45697),f=r.n(l),p=r(334),m=r(11107),d=r(41800),b=r(90944),v=r(71355),g=r(58788),h=r(6877),y=r(88093),O=r(61338),k=r(92758),w=r(98614),j=r(36438);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=[{title:"Org. Administrator",key:"org-admin",transforms:[h.nowrap]},{title:"Username",key:"username",transforms:[h.sortable]},{title:"Email"},{title:"First name",transforms:[h.nowrap]},{title:"Last name",transforms:[h.nowrap]},{title:"Status",transforms:[h.nowrap]}],U=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,r){var s=r.username,a=r.is_active,c=r.email,l=r.first_name,f=r.last_name,m=r.is_org_admin;return[].concat((0,i.Z)(t),[{uuid:s,cells:[m?u().createElement(o.Fragment,null,u().createElement("span",null,u().createElement(w.ZP,{key:"yes-icon",className:"pf-u-mr-sm"}),u().createElement("span",{key:"yes"},"Yes"))):u().createElement(o.Fragment,null,u().createElement(j.ZP,{key:"no-icon",className:"pf-u-mr-sm"}),u().createElement("span",{key:"no"},"No")),{title:e?u().createElement(p.Link,{to:"/users/detail/".concat(s)},s.toString()):s.toString()},c.toString(),l.toString(),f.toString(),{title:u().createElement(g.Label,{key:"status",color:a&&"green"},a?"Active":"Inactive"),props:{"data-is-active":a}}],selected:Boolean(n&&n.find((function(e){return e.uuid===s})))}])}),[]):[]}},Z=function(e){var t=e.users,r=e.fetchUsers,s=e.updateUsersFilters,i=e.isLoading,l=e.pagination,f=e.selectedUsers,b=e.setSelectedUsers,v=e.userLinks,g=e.inModal,h=e.props,w=(0,c.useSelector)((function(e){var t=e.userReducer.users;return{limit:g?t.meta.limit:t.pagination.limit||O.he.limit,offset:g?t.meta.offset:t.pagination.offset||O.he.offset,count:g?t.meta.count:t.pagination.count,redirected:!g&&t.pagination.redirected}})),j=(0,p.useHistory)(),P=(0,c.useSelector)((function(e){return e.userReducer.users.filters})),Z=(0,o.useState)(g?{username:"",email:"",status:["Active"]}:P),D=(0,a.Z)(Z,2),_=D[0],x=D[1];return(0,o.useEffect)((function(){g||w.redirected&&(0,O.oG)(j,w.limit,w.offset)}),[w.redirected]),(0,o.useEffect)((function(){var e=g?O.he:(0,O.rj)(j,w),t=g?{status:_.status}:(0,k.aX)(j,["username","email","status"],_);x(t),r(E(E({},(0,m.jl)(E(E({},e),{},{filters:t}))),{},{inModal:g}))}),[]),(0,o.useEffect)((function(){g||((0,O.Zc)(j)||(0,O.oG)(j,l.limit,l.offset),Object.values(_).some((function(e){return(null==e?void 0:e.length)>0}))&&!(0,k.qF)(j,Object.keys(_))&&(0,k.aX)(j,Object.keys(_),_))})),u().createElement(d.M,(0,n.Z)({columns:S,isSelectable:!0,isCompact:!0,borders:!1,createRows:U(v),data:t,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:_.status,n=e.username,s=e.email,a=e.count,i=e.limit,o=e.offset,u=e.orderBy;r(E(E({},(0,m.jl)({count:a,limit:i,offset:o,orderBy:u,filters:{username:n,email:s,status:t}})),{},{inModal:g})),g||(0,O.oG)(j,i,o),g||(0,k.MS)(j,{username:n,email:s,status:t})},setFilterValue:function(e){var t,r=e.username,n=e.email,a=e.status;t={username:void 0===r?_.username:r,email:void 0===n?_.email:n,status:void 0===a||a===_.status?_.status:a},g||s(t),x(E({username:""},t))},isLoading:i,pagination:l,checkedRows:f,setCheckedItems:function(e){b((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:y.Z,titlePlural:"users",titleSingular:"user",noDataDescription:["This filter criteria matches no users.","Make sure the beginning of your search input corresponds to the beginning of the value you are looking for, or try changing your filter settings."],noData:0===t.length&&!_.username&&!_.email,filters:[{key:"username",value:_.username,placeholder:"Filter by username"},{key:"email",value:_.email,placeholder:"Filter by email"},{key:"status",value:_.status,label:"Status",type:"checkbox",items:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}],tableId:"users-list"},h))},D=function(e){var t=e.userReducer,r=t.users,n=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return E(E({},e),{},{uuid:e.username})})),pagination:r.meta,isLoading:n}},_=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.he;e((0,b.u)(t))},updateUsersFilters:function(t){e((0,b.a)(t))},addNotification:function(){return e(v.wN.apply(void 0,arguments))}}};Z.propTypes={history:f().shape({goBack:f().func.isRequired,push:f().func.isRequired}),users:f().array,isLoading:f().bool,searchFilter:f().string,fetchUsers:f().func.isRequired,updateUsersFilters:f().func.isRequired,setSelectedUsers:f().func.isRequired,selectedUsers:f().array,pagination:f().shape({limit:f().number.isRequired,offset:f().number,count:f().number}),userLinks:f().bool,props:f().object,inModal:f().bool},Z.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1,inModal:!1};const x=(0,c.connect)(D,_)(Z);var L=(0,c.connect)(D,_,(function(e,t,r){return E(E(E(E({},r),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||O.eX)}})}))(Z)}}]);
//# sourceMappingURL=../sourcemaps/661.ef9e6b7acb0679e9c1594d2ca0799de6.js.map