(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[661],{82916:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(92950),n=r.n(s),a=r(45697),i=r.n(a),o=r(30586),u=r(15265),c=function(e){var t=e.description,r=e.linkTitle;return n().createElement(o.Text,{className:"pf-u-mt-0",component:o.TextVariants.h7},t,n().createElement(o.Text,{component:o.TextVariants.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,n().createElement(u.ZP,null)),".")};c.propTypes={description:i().node,linkTitle:i().node},c.defaultProps={description:"",linkTitle:" user management list "};const l=c},88093:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(22122),n=r(81253),a=r(92950),i=r.n(a),o=r(24985),u=r(45697),c=r.n(u),l=r(94184),f=r.n(l),p=["row"],m=function(e){var t,r=e.row,a=(0,n.Z)(e,p),u=r.status,c=null==u||null===(t=u.props)||void 0===t?void 0:t["data-is-active"];return i().createElement(o.RowWrapper,(0,s.Z)({className:f()("ins-c-rbac__user-row",{"ins-m-inactive":!c}),row:r},a))};m.propTypes={row:c().shape({status:c().shape({props:c().shape({"data-is-active":c().bool,data:c().shape({isActive:c().bool})})})})};const d=m},90944:(e,t,r)=>{"use strict";r.d(t,{u:()=>c,a:()=>l});var s=r(36580),n=r(96156);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=(0,r(89400).bn)(),u={Active:"enabled",Inactive:"disabled"},c=function(e){return{type:s.WH,payload:(t=e,r=t.limit,n=t.offset,a=t.orderBy,c=t.filters,l=void 0===c?{}:c,f=t.inModal,p=l.username,m=l.email,d=l.status,b=void 0===d?[]:d,v="-username"===a?"desc":"asc",y=2===b.length?"all":u[b[0]]||"all",o.listPrincipals(r,n,void 0,p,v,m,y).then((function(e){var t=e.data,s=e.meta;return i({data:t,meta:i(i({},s),{},{offset:n,limit:r})},f?{}:{filters:l,pagination:i(i({},s),{},{offset:n,limit:r})})})))};var t,r,n,a,c,l,f,p,m,d,b,v,y},l=function(e){return{type:s.xD,payload:e}}},98033:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_,i:()=>D});var s=r(22122),n=r(96156),a=r(28481),i=r(85061),o=r(92950),u=r.n(o),c=r(45237),l=r(45697),f=r.n(l),p=r(334),m=r(11107),d=r(41800),b=r(90944),v=r(71355),y=r(30586),h=r(24985),g=r(88093),O=r(61338),w=r(92758),k=r(98614),j=r(36438);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=[{title:"Org. Administrator",key:"org-admin",transforms:[h.nowrap]},{title:"Username",key:"username",transforms:[h.sortable]},{title:"Email"},{title:"First name",transforms:[h.nowrap]},{title:"Last name",transforms:[h.nowrap]},{title:"Status",transforms:[h.nowrap]}],S=function(e){return function(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,r){var n=r.username,a=r.is_active,c=r.email,l=r.first_name,f=r.last_name,m=r.is_org_admin;return[].concat((0,i.Z)(t),[{uuid:n,cells:[m?u().createElement(o.Fragment,null,u().createElement(k.ZP,{key:"yes-icon",className:"pf-u-mr-sm"}),u().createElement("span",{key:"yes"},"Yes")):u().createElement(o.Fragment,null,u().createElement(j.ZP,{key:"no-icon",className:"pf-u-mr-sm"}),u().createElement("span",{key:"no"},"No")),{title:e?u().createElement(p.Link,{to:"/users/detail/".concat(n)},n):n},c,l,f,{title:u().createElement(y.Label,{key:"status",color:a&&"green"},a?"Active":"Inactive"),props:{"data-is-active":a}}],selected:Boolean(s&&s.find((function(e){return e.uuid===n})))}])}),[]):[]}},Z=function(e){var t=e.users,r=e.fetchUsers,n=e.updateUsersFilters,i=e.isLoading,l=e.pagination,f=e.selectedUsers,b=e.setSelectedUsers,v=e.userLinks,y=e.inModal,h=e.props,k=(0,c.useSelector)((function(e){var t=e.userReducer.users;return{limit:y?t.meta.limit:t.pagination.limit||O.he.limit,offset:y?t.meta.offset:t.pagination.offset||O.he.offset}})),j=(0,p.useHistory)(),P=(0,c.useSelector)((function(e){return e.userReducer.users.filters})),Z=(0,o.useState)(y?{username:"",email:"",status:["Active"]}:P),L=(0,a.Z)(Z,2),R=L[0],_=L[1];return(0,o.useEffect)((function(){var e=y?O.he:(0,O.rj)(j,k),t=y?{status:R.status}:(0,w.a)(j,["username","email","status"],R);_(t),r(E(E({},(0,m.jl)(E(E({},e),{},{filters:t}))),{},{inModal:y}))}),[]),u().createElement(d.M,(0,s.Z)({columns:U,isSelectable:!0,isCompact:!0,borders:!1,createRows:S(v),data:t,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:R.status,s=e.username,n=e.email,a=e.count,i=e.limit,o=e.offset,u=e.orderBy;r(E(E({},(0,m.jl)({count:a,limit:i,offset:o,orderBy:u,filters:{username:s,email:n,status:t}})),{},{inModal:y})),y||(0,O.oG)(j,e.limit,e.offset),y||(0,w.M)(j,{username:s,email:n,status:t})},setFilterValue:function(e){var t,r=e.username,s=e.email,a=e.status;t={username:void 0===r?R.username:r,email:void 0===s?R.email:s,status:void 0===a||a===R.status?R.status:a},y||n(t),_(E({username:""},t))},isLoading:i,pagination:l,checkedRows:f,setCheckedItems:function(e){b((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:g.Z,titlePlural:"users",titleSingular:"user",filters:[{key:"username",value:R.username,placeholder:"Filter by exact username"},{key:"email",value:R.email,placeholder:"Filter by exact email"},{key:"status",value:R.status,label:"Status",type:"checkbox",items:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}],tableId:"users-list"},h))},L=function(e){var t=e.userReducer,r=t.users,s=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return E(E({},e),{},{uuid:e.username})})),pagination:r.meta,isLoading:s}},R=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.he;e((0,b.u)(t))},updateUsersFilters:function(t){e((0,b.a)(t))},addNotification:function(){return e(v.wN.apply(void 0,arguments))}}};Z.propTypes={history:f().shape({goBack:f().func.isRequired,push:f().func.isRequired}),users:f().array,isLoading:f().bool,searchFilter:f().string,fetchUsers:f().func.isRequired,updateUsersFilters:f().func.isRequired,setSelectedUsers:f().func.isRequired,selectedUsers:f().array,pagination:f().shape({limit:f().number.isRequired,offset:f().number,count:f().number}),userLinks:f().bool,props:f().object,inModal:f().bool},Z.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1,inModal:!1};const _=(0,c.connect)(L,R)(Z);var D=(0,c.connect)(L,R,(function(e,t,r){return E(E(E(E({},r),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||O.eX)}})}))(Z)}}]);
//# sourceMappingURL=../sourcemaps/661.8857f02f3ced9ed7d46b.js.map