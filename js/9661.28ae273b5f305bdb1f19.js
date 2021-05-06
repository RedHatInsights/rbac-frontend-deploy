(self.webpackChunkinsights_rbac_frontend=self.webpackChunkinsights_rbac_frontend||[]).push([[9661],{82916:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(80150),s=r.n(n),a=r(45697),i=r.n(a),o=r(68340),u=r(15265),c=function(e){var t=e.description,r=e.linkTitle;return s().createElement(o.x,{className:"pf-u-mt-0",component:o.q.h7},t,s().createElement(o.x,{component:o.q.a,href:"https://www.".concat(window.insights.chrome.isProd?"":"qa.","redhat.com/wapps/ugc/protected/usermgt/userList.html"),target:"_blank",rel:"noopener noreferrer"},r,s().createElement(u.ZP,null)),".")};c.propTypes={description:i().node,linkTitle:i().node},c.defaultProps={description:"",linkTitle:" user management list "};const l=c},88093:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(67154),s=r.n(n),a=r(6479),i=r.n(a),o=r(80150),u=r.n(o),c=r(43349),l=r(45697),f=r.n(l),p=r(94184),m=r.n(p),d=function(e){var t,r=e.row,n=i()(e,["row"]),a=r.status,o=null==a||null===(t=a.props)||void 0===t?void 0:t["data-is-active"];return u().createElement(c.RowWrapper,s()({className:m()("ins-c-rbac__user-row",{"ins-m-inactive":!o}),row:r},n))};d.propTypes={row:f().shape({status:f().shape({props:f().shape({data:f().shape({isActive:f().bool})})})})};const v=d},90944:(e,t,r)=>{"use strict";r.d(t,{u:()=>l,a:()=>f});var n=r(36580),s=r(59713),a=r.n(s);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=(0,r(89400).bn)(),c={Active:"enabled",Inactive:"disabled"},l=function(e){return{type:n.WH,payload:(t=e,r=t.limit,s=t.offset,a=t.orderBy,i=t.filters,l=void 0===i?{}:i,f=t.inModal,p=l.username,m=l.email,d=l.status,v=void 0===d?[]:d,b="-username"===a?"desc":"asc",y=2===v.length?"all":c[v[0]]||"all",u.listPrincipals(r,s,void 0,p,b,m,y).then((function(e){var t=e.data,n=e.meta;return o({data:t,meta:o(o({},n),{},{offset:s,limit:r})},f?{}:{filters:l,pagination:o(o({},n),{},{offset:s,limit:r})})})))};var t,r,s,a,i,l,f,p,m,d,v,b,y},f=function(e){return{type:n.xD,payload:e}}},98033:(e,t,r)=>{"use strict";r.d(t,{Z:()=>q,i:()=>M});var n=r(67154),s=r.n(n),a=r(59713),i=r.n(a),o=r(319),u=r.n(o),c=r(80150),l=r.n(c),f=r(12167),p=r(45697),m=r.n(p),d=r(334),v=r(11107),b=r(41800),y=r(90944),h=r(71355),g=r(69174),O=r(43349),w=r(88093),k=r(61338),j=r(92758),P=r(98614),E=r(36438);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=[{title:"Org. Administrator",key:"org-admin",transforms:[O.nowrap]},{title:"Username",key:"username",transforms:[O.sortable]},{title:"Email"},{title:"First name",transforms:[O.nowrap]},{title:"Last name",transforms:[O.nowrap]},{title:"Status",transforms:[O.nowrap]}],R=function(e){return function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t?t.reduce((function(t,r){var s=r.username,a=r.is_active,i=r.email,o=r.first_name,f=r.last_name,p=r.is_org_admin;return[].concat(u()(t),[{uuid:s,cells:[p?l().createElement(c.Fragment,null,l().createElement(P.ZP,{key:"yes-icon",className:"pf-u-mr-sm"}),l().createElement("span",{key:"yes"},"Yes")):l().createElement(c.Fragment,null,l().createElement(E.ZP,{key:"no-icon",className:"pf-u-mr-sm"}),l().createElement("span",{key:"no"},"No")),{title:e?l().createElement(d.Link,{to:"/users/detail/".concat(s)},s):s},i,o,f,{title:l().createElement(g._,{key:"status",color:a&&"green"},a?"Active":"Inactive"),props:{"data-is-active":a}}],selected:Boolean(n&&n.find((function(e){return e.uuid===s})))}])}),[]):[]}},D=function(e){var t=e.users,r=e.fetchUsers,n=e.updateUsersFilters,a=e.isLoading,i=e.pagination,o=e.selectedUsers,u=e.setSelectedUsers,p=e.userLinks,m=e.inModal,y=e.props,h=(0,f.useSelector)((function(e){var t=e.userReducer.users;return{limit:m?t.meta.limit:t.pagination.limit||k.he.limit,offset:m?t.meta.offset:t.pagination.offset||k.he.offset}})),g=(0,d.useHistory)(),O=(0,f.useSelector)((function(e){var t=e.userReducer.users.filters;return{username:!m&&(null==t?void 0:t.username)||"",email:!m&&(null==t?void 0:t.email)||"",status:!m&&(null==t?void 0:t.status)||["Active"]}}));(0,c.useEffect)((function(){var e=m?k.he:(0,k.rj)(g,h);O=m?{status:O.status}:(0,j.a)(g,["username","email","status"],O),r(S(S({},(0,v.jl)(S(S({},e),{},{filters:O}))),{},{inModal:m}))}),[]);var P=function(e){m||n(e),O=e};return l().createElement(b.M,s()({columns:_,isSelectable:!0,isCompact:!0,borders:!1,createRows:R(p),data:t,ouiaId:"users-table",fetchData:function(e){var t=Object.prototype.hasOwnProperty.call(e,"status")?e.status:O.status,n=e.username,s=e.email,a=e.count,i=e.limit,o=e.offset,u=e.orderBy;r(S(S({},(0,v.jl)({count:a,limit:i,offset:o,orderBy:u,filters:{username:n,email:s,status:t}})),{},{inModal:m})),m||(0,k.oG)(g,e.limit,e.offset),m||(0,j.M)(g,{username:n,email:s,status:t})},setFilterValue:function(e){var t=e.username,r=e.email,n=e.status;void 0!==t&&P(S(S({},O),{},{username:t})),void 0!==r&&P(S(S({},O),{},{email:r})),void 0===n||n===O.status||P(S(S({},O),{},{status:n}))},isLoading:a,pagination:i,checkedRows:o,setCheckedItems:function(e){u((function(t){return e(t).map((function(e){var t=e.uuid;return{uuid:t,label:e.username||t}}))}))},sortBy:{index:1,direction:"asc"},rowWrapper:w.Z,titlePlural:"users",titleSingular:"user",filters:[{key:"username",value:O.username,placeholder:"Filter by exact username"},{key:"email",value:O.email,placeholder:"Filter by exact email"},{key:"status",value:O.status,label:"Status",type:"checkbox",items:[{label:"Active",value:"Active"},{label:"Inactive",value:"Inactive"}]}],tableId:"users-list"},y))},L=function(e){var t=e.userReducer,r=t.users,n=t.isUserDataLoading;return{users:r.data&&r.data.map((function(e){return S(S({},e),{},{uuid:e.username})})),pagination:r.meta,isLoading:n}},F=function(e){return{fetchUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.he;e((0,y.u)(t))},updateUsersFilters:function(t){e((0,y.a)(t))},addNotification:function(){return e(h.wN.apply(void 0,arguments))}}};D.propTypes={history:m().shape({goBack:m().func.isRequired,push:m().func.isRequired}),users:m().array,isLoading:m().bool,searchFilter:m().string,fetchUsers:m().func.isRequired,updateUsersFilters:m().func.isRequired,setSelectedUsers:m().func.isRequired,selectedUsers:m().array,pagination:m().shape({limit:m().number.isRequired,offset:m().number,count:m().number}),userLinks:m().bool,props:m().object,inModal:m().bool},D.defaultProps={users:[],selectedUsers:[],setSelectedUsers:function(){},userLinks:!1,inModal:!1};const q=(0,f.connect)(L,F)(D);var M=(0,f.connect)(L,F,(function(e,t,r){return S(S(S(S({},r),e),t),{},{fetchUsers:function(e){return t.fetchUsers(e||k.eX)}})}))(D)}}]);
//# sourceMappingURL=../sourcemaps/9661.c3f793d9b4e7d0778802.js.map